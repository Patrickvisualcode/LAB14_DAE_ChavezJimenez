import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import HeaderComponent from "../../components/HeaderComponent";

const initData = {
    id: "",
    description: "",
};

function CategoryFormPage() {
    const urlApi = "http://localhost:8000/series/api/v1/categories/";
    const navigate = useNavigate();
    const [data, setData] = useState(initData);

    const onChangeNombre = (e) => {
        const nData = { ...data, description: e.target.value };
        setData(nData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(urlApi, data);
        navigate("/categories");
    };

    return (
        <>
            <HeaderComponent />
            <div
                className="d-flex align-items-center justify-content-center min-vh-100"
                style={{
                    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                    color: "#f4f4f9",
                }}
            >
                <div
                    className="container p-4 shadow-lg"
                    style={{
                        backgroundColor: "#f4f4f9",
                        borderRadius: "15px",
                        maxWidth: "600px",
                    }}
                >
                    <div
                        className="border-bottom pb-3 mb-3"
                        style={{
                            borderColor: "#2a5298",
                        }}
                    >
                        <h3 style={{ color: "#2a5298" }}>Nueva - Categoría</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label
                                htmlFor="inputName"
                                className="form-label"
                                style={{ color: "#2a5298" }}
                            >
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="inputName"
                                onChange={onChangeNombre}
                                className="form-control"
                                required
                                style={{
                                    border: "1px solid #2a5298",
                                    borderRadius: "5px",
                                }}
                            />
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary me-2">Guardar</button>
                            <Link className="btn btn-secondary" to="/categories">
                                Cancelar
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CategoryFormPage;