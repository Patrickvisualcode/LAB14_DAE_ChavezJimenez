import { useState, useEffect } from "react";
import { getAllSerieService } from "../services/SerieService";
import { Link } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";
import SerieComponent from "../components/SerieComponent";

function SeriePage() {
    const [series, setSeries] = useState([]);

    const loadData = async () => {
        const resp = await getAllSerieService();
        setSeries(resp.data);
    };

    useEffect(() => {
        loadData();
    }, []);

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
                        <h3 style={{ color: "#2a5298" }}>Series</h3>
                        <div>
                            <Link className="btn btn-primary" to="/series/new">
                                Nuevo
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        {series.map((serie) => (
                            <div key={serie.cod} className="col-md-3 mb-3">
                                <div
                                    className="card h-100 shadow-sm"
                                    style={{
                                        backgroundColor: "#f4f4f9",
                                        borderRadius: "10px",
                                    }}
                                >
                                    <SerieComponent
                                        codigo={serie.id}
                                        nombre={serie.name}
                                        categoria={serie.category_description}
                                        imagen={"serie.image"}
                                        lista={series}
                                        actualizarLista={setSeries}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SeriePage;
