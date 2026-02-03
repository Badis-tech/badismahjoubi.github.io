document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Network Sphere Group
    const group = new THREE.Group();
    scene.add(group);

    // Particles
    const particleCount = 250;
    const positions = [];
    const colors = [];
    
    // Theme colors
    const colorPrimary = new THREE.Color('#6366f1');
    const colorSecondary = new THREE.Color('#ec4899');
    const colorWhite = new THREE.Color('#ffffff');

    // Create points on a sphere
    const radius = 14;
    for (let i = 0; i < particleCount; i++) {
        // Random point on sphere surface (fibonacci sphere for even distribution)
        const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        positions.push(x, y, z);
        
        // Mix colors
        const rand = Math.random();
        const color = rand > 0.6 ? colorPrimary : (rand > 0.3 ? colorSecondary : colorWhite);
        colors.push(color.r, color.g, color.b);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    // Points material
    const pointsMaterial = new THREE.PointsMaterial({
        size: 0.15,
        vertexColors: true,
        transparent: true,
        opacity: 0.9
    });

    const points = new THREE.Points(geometry, pointsMaterial);
    group.add(points);

    // Lines between close points
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x6366f1,
        transparent: true,
        opacity: 0.15
    });

    const linePositions = [];
    const connectDistance = 4.5;

    for (let i = 0; i < particleCount; i++) {
        const x1 = positions[i * 3];
        const y1 = positions[i * 3 + 1];
        const z1 = positions[i * 3 + 2];
        const v1 = new THREE.Vector3(x1, y1, z1);

        for (let j = i + 1; j < particleCount; j++) {
            const x2 = positions[j * 3];
            const y2 = positions[j * 3 + 1];
            const z2 = positions[j * 3 + 2];
            const v2 = new THREE.Vector3(x2, y2, z2);

            if (v1.distanceTo(v2) < connectDistance) {
                linePositions.push(x1, y1, z1);
                linePositions.push(x2, y2, z2);
            }
        }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lines);

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        group.rotation.y += 0.0015;
        group.rotation.x += 0.0005;

        // Subtle wave effect
        const time = Date.now() * 0.001;
        group.position.y = Math.sin(time) * 0.5;

        renderer.render(scene, camera);
    }

    animate();

    // Resize Handler
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    });
});
