import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { loginService } from "../services/LoginServices";

const initData = {
    username: '',
    password: '',
};

function LoginPage() {
    const navigate = useNavigate();
    const { login } = useContext(AppContext);
    const [data, setData] = useState(initData);

    const onChangeUserName = (e) => {
        const nData = { ...data, username: e.target.value };
        setData(nData);
    };

    const onChangePassword = (e) => {
        const nData = { ...data, password: e.target.value };
        setData(nData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await loginService(data);
            console.log(resp.data);
            login(resp.data);
            navigate("/series");
        } catch (error) {
            window.alert("El usuario o contraseña no es correcto");
        }
    };

    return (
        <section
            className="d-flex justify-content-center align-items-center min-vh-100"
            style={{
                background: "linear-gradient(135deg, #1e3c72, #2a5298)",
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div
                            className="card shadow-lg border-0"
                            style={{
                                backgroundColor: "#f4f4f9",
                                borderRadius: "15px",
                            }}
                        >
                            <div className="card-body p-4">
                                <h2
                                    className="text-center"
                                    style={{
                                        color: "#2a5298",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Iniciar Sesión
                                </h2>
                                <form onSubmit={handleSubmit} autoComplete="off">
                                    <div className="mb-3">
                                        <label
                                            className="form-label"
                                            htmlFor="username"
                                            style={{ color: "#333" }}
                                        >
                                            Usuario
                                        </label>
                                        <input
                                            onChange={onChangeUserName}
                                            id="username"
                                            className="form-control"
                                            style={{
                                                border: "1px solid #2a5298",
                                                borderRadius: "10px",
                                            }}
                                            type="text"
                                            placeholder="Ingresa tu usuario"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            className="form-label"
                                            htmlFor="password"
                                            style={{ color: "#333" }}
                                        >
                                            Contraseña
                                        </label>
                                        <input
                                            onChange={onChangePassword}
                                            id="password"
                                            className="form-control"
                                            style={{
                                                border: "1px solid #2a5298",
                                                borderRadius: "10px",
                                            }}
                                            type="password"
                                            placeholder="Ingresa tu contraseña"
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                name="remember"
                                                id="remember"
                                                className="form-check-input"
                                            />
                                            <label
                                                htmlFor="remember"
                                                className="form-check-label"
                                                style={{ color: "#666" }}
                                            >
                                                Recordarme
                                            </label>
                                        </div>
                                        <a
                                            href="forgot.html"
                                            className="text-decoration-none"
                                            style={{ color: "#2a5298" }}
                                        >
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn w-100"
                                        style={{
                                            backgroundColor: "#2a5298",
                                            color: "#fff",
                                            borderRadius: "10px",
                                        }}
                                    >
                                        Ingresar
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div
                            className="text-center mt-3"
                            style={{ color: "#f4f4f9" }}
                        >
                            &copy; Tecsup 2024
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;
