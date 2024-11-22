import HeaderComponent from "../components/HeaderComponent";

function HomePage() {
    return (
        <>
            <HeaderComponent />
            <div
                className="d-flex flex-column align-items-center justify-content-center min-vh-100"
                style={{
                    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                    color: "#f4f4f9",
                }}
            >
                <div
                    className="container mt-3 p-4 shadow-lg"
                    style={{
                        backgroundColor: "#f4f4f9",
                        borderRadius: "15px",
                    }}
                >
                    <div
                        className="border-bottom pb-3 mb-3"
                        style={{
                            borderColor: "#2a5298",
                        }}
                    >
                        <h3 style={{ color: "#2a5298" }}>Home</h3>
                    </div>
                    <p style={{ color: "#333", textAlign: "justify" }}>
                        Bienvenido a la página principal. 
                    </p>
                </div>
            </div>
        </>
    );
}

export default HomePage;
