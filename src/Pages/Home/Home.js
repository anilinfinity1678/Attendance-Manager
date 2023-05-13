import "./home.css";
import React, { useState, useEffect } from "react";
import { getLocalData, setLocalData } from "../../Hooks/localStorage";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [subjects, setSubjects] = useState(getLocalData("subs"));
    const [undoData, setUndoData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLocalData("subs", subjects); // Save updated subjects data to local storage
    }, [subjects]);

    function present(e) {
        const id = Number(e.target.getAttribute("data-id"));

        setUndoData(subjects); // Store the current subjects data for undo

        setSubjects((current) => {
            return current.map((value) => {
                if (value.id === id) {
                    return {
                        ...value,
                        attended: Number(value.attended) + 1,
                        total: Number(value.total) + 1,
                    };
                }
                return value;
            });
        });
    }

    function absent(e) {
        const id = Number(e.target.getAttribute("data-id"));

        setUndoData(subjects); // Store the current subjects data for undo

        setSubjects((current) => {
            return current.map((value) => {
                if (value.id === id) {
                    return {
                        ...value,
                        attended: Number(value.attended) + 1,
                    };
                }

                return value;
            });
        });
    }

    function deleteSubject(id) {
        setSubjects((current) => current.filter((value) => value.id !== id));
    }

    function undo() {
        if (undoData) {
            setSubjects(undoData);
            setUndoData(null);
        }
    }

    function goTo() {
        navigate("/subject");
    }

    return (
        <>
            <div className="home-main">
                <div className="subject-display">
                    {subjects.map((value, index) => (
                        <div className="disp" key={index}>
                            <div className="main-disp">
                                <p className="subject">
                                    {" "}
                                    <h3>{value.sub}</h3>{" "}
                                </p>
                                <p className="classes">
                                    {value.total}/{value.attended}
                                </p>
                            </div>
                            <div className="home-left">
                                <div className="attendance-percentage">
                                    <div className="attendance-percentage-value">
                                        {" "}
                                        <h3>
                                            {value.attended === 0
                                                ? "0%"
                                                : `${(
                                                      (value.total /
                                                          value.attended) *
                                                      100
                                                  ).toFixed(0)}%`}
                                        </h3>{" "}
                                    </div>
                                </div>

                                <div className="buttons">
                                    <button
                                        className="p"
                                        onClick={present}
                                        data-id={value.id}
                                    >
                                        Present
                                    </button>
                                    <button
                                        className="a"
                                        onClick={absent}
                                        data-id={value.id}
                                    >
                                        Absent
                                    </button>
                                </div>
                            </div>
                            <div className="undo-delete">
                                <button className="undo" onClick={undo}>
                                    <img
                                        src={require("../../assets/undo.png")}
                                        alt=""
                                        className="U-D-icons"
                                    />
                                </button>
                                <button
                                    className="delete"
                                    onClick={() => deleteSubject(value.id)}
                                >
                                    <img
                                        src={require("../../assets/delete.png")}
                                        alt=""
                                        className="U-D-icons"
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <br />
                <div className="newsub">
                    <button className="news" onClick={goTo}>
                        Add new
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;
