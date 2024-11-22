import { useNavigate } from "react-router-dom";
import { deleteSerieService } from "../services/SerieService";

function SerieComponent(props) {
    const navigate = useNavigate();

    const gotoUrl = (codigo) => {
        navigate("/series/edit/" + codigo);
    };

    const handleDelete = async (codigo) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar esta serie?")) {
            await deleteSerieService(codigo);
            const nLista = props.lista.filter((item) => item.id !== codigo);
            props.setSeries(nLista);
        }
    };

    return (
        <div
            className="card"
            style={{
                border: "1px solid #e3e3e3",
                borderRadius: "10px",
                boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                marginBottom: "20px",
            }}
        >
            <img
                className="card-img-top"
                src={"https://dummyimage.com/400x250/000/fff&text=" + props.imagen}
                alt="img"
                style={{
                    height: "250px",
                    objectFit: "cover",
                    borderBottom: "1px solid #e3e3e3",
                }}
            />
            <div className="card-body" style={{ backgroundColor: "#f9f9f9" }}>
                <h5
                    className="card-title"
                    style={{
                        color: "#2a5298",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                    }}
                >
                    {props.nombre}
                </h5>
                <p
                    className="card-text"
                    style={{
                        color: "#6c757d",
                        fontSize: "0.95rem",
                        marginBottom: "15px",
                    }}
                >
                    {props.categoria}
                </p>
                <div className="d-flex justify-content-between">
                    <button
                        onClick={() => gotoUrl(props.codigo)}
                        className="btn btn-primary"
                        style={{
                            backgroundColor: "#007bff",
                            borderColor: "#007bff",
                            color: "#fff",
                            fontWeight: "bold",
                            padding: "8px 12px",
                            borderRadius: "5px",
                        }}
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => handleDelete(props.codigo)}
                        className="btn btn-danger"
                        style={{
                            backgroundColor: "#dc3545",
                            borderColor: "#dc3545",
                            color: "#fff",
                            fontWeight: "bold",
                            padding: "8px 12px",
                            borderRadius: "5px",
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SerieComponent;
