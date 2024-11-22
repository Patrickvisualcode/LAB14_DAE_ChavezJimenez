import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";

function CategoryPage() {
    const urlApi = "http://localhost:8000/series/api/v1/categories/";
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    const loadData = async () => {
        const resp = await axios.get(urlApi);
        setCategories(resp.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar?")) {
            await axios.delete(`${urlApi}${id}/`);
            const nLista = categories.filter((item) => item.id !== id);
            setCategories(nLista);
        }
    };

    const handleEdit = (id) => {
        navigate(`/categories/edit/${id}`);
    };

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
                        className="d-flex justify-content-between border-bottom pb-3 mb-3"
                        style={{
                            borderColor: "#2a5298",
                        }}
                    >
                        <h3 style={{ color: "#2a5298" }}>Categorías</h3>
                        <div>
                            <Link className="btn btn-primary" to="/categories/new">
                                Nuevo
                            </Link>
                        </div>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th className="text-center">Id</th>
                                <th className="text-center" style={{ width: "100px" }}>
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.description}</td>
                                    <td className="text-center">{item.id}</td>
                                    <td className="text-center">
                                        <button
                                            onClick={() => handleEdit(item.id)}
                                            className="btn btn-secondary me-2 btn-sm"
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            <i className="bi bi-trash-fill"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default CategoryPage;
