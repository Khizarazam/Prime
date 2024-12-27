import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Cylinder } from "@react-three/drei";
import * as THREE from "three";
import pclogo from "../assets/pc-logo.png";

const Scene = () => {
  const texture = useLoader(THREE.TextureLoader, pclogo);
  const cylinderRef = useRef(null);

  texture.repeat.set(2, 1);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.offset.set(0.1, 1);

  useFrame(() => {
    if (cylinderRef.current) {
      cylinderRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <Cylinder ref={cylinderRef} args={[1.5, 1.5, 1, 30, 30, true]}>
        <meshStandardMaterial attach="material" side={THREE.DoubleSide} map={texture} />
      </Cylinder>
    </group>
  );
};

export default Scene;
