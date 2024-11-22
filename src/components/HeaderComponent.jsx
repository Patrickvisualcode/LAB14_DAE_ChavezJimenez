import { useNavigate, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function HeaderComponent() {
    const { usuario, logout } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav
            className="navbar navbar-expand-lg"
            style={{
                backgroundColor: "#2a5298",
                color: "#f4f4f9",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
        >
            <div className="container-fluid">
                <span
                    className="navbar-brand mb-0 h1"
                    style={{
                        fontWeight: "bold",
                        color: "#f4f4f9",
                        fontSize: "1.5rem",
                    }}
                >
                    SeriesApp
                </span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{
                        borderColor: "#f4f4f9",
                        color: "#f4f4f9",
                    }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/home"
                                style={({ isActive }) =>
                                    isActive
                                        ? { color: "#FFD700", fontWeight: "bold" }
                                        : { color: "#f4f4f9" }
                                }
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/categories"
                                style={({ isActive }) =>
                                    isActive
                                        ? { color: "#FFD700", fontWeight: "bold" }
                                        : { color: "#f4f4f9" }
                                }
                            >
                                Categorías
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/series"
                                style={({ isActive }) =>
                                    isActive
                                        ? { color: "#FFD700", fontWeight: "bold" }
                                        : { color: "#f4f4f9" }
                                }
                            >
                                Series
                            </NavLink>
                        </li>
                    </ul>
                    <div
                        className="d-flex align-items-center"
                        style={{
                            color: "#f4f4f9",
                            fontSize: "1rem",
                        }}
                    >
                        <span className="me-3">Bienvenido, {usuario}</span>
                        <button
                            onClick={handleLogout}
                            className="btn btn-outline-light btn-sm me-2"
                            style={{
                                fontSize: "0.9rem",
                                borderColor: "#FFD700",
                                color: "#f4f4f9",
                                fontWeight: "bold",
                            }}
                        >
                            Salir
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;
