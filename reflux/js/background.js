class GridSphere {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        this.init();
    }

    init() {
        // Setup renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0.9);
        document.getElementById('page-wraper').appendChild(this.renderer.domElement);
        this.renderer.domElement.classList.add('background-canvas');

        // Create sphere geometry
        const radius = 5;
        const widthSegments = 32;
        const heightSegments = 32;
        const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

        // Create wireframe material
        const material = new THREE.LineBasicMaterial({
            color: 0x00ff00, // Lime Green
            transparent: true,
            opacity: 1
        });

        // Create wireframe
        const wireframe = new THREE.LineSegments(
            new THREE.WireframeGeometry(geometry),
            material
        );

        // Position the sphere at bottom left
        wireframe.position.set(-5, 0, 0);

        this.scene.add(wireframe);
        this.sphere = wireframe;

        // Position camera
        this.camera.position.set(0, 0, 5);
        this.camera.lookAt(0, 0, 0);

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize(), false);

        // Start animation
        this.animate();
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Rotate sphere
        // this.sphere.rotation.x += 0.001;
        this.sphere.rotation.y += 0.002;

        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    const gridSphere = new GridSphere();
});
