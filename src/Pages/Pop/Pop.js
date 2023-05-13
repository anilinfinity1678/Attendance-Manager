import "./pop.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { setLocalData, getLocalData } from "../../Hooks/localStorage";
import React from "react";

const Pop = () => {
    const subject = useRef();
    const totalClasses = useRef();
    const attendedClasses = useRef();
    const navigate = useNavigate();

    function handleSubject() {
        const s = getLocalData("subs");

        const value = {
            id: s.length + 1,
            sub: subject.current.value,
            total: totalClasses.current.value,
            attended: attendedClasses.current.value,
        };

        console.log(value);
        const subjectValue = subject.current.value;
        const totalClassesVal = Number(totalClasses.current.value);
        const attendedClassesVal = Number(attendedClasses.current.value);

        if (subjectValue.length === 0) {
            alert("enter the input field");
            return;
        }

        if (totalClassesVal > attendedClassesVal) {
            alert("attended should be less than total classes");
            return;
        }

        const newSubs = [...s, value];
        setLocalData("subs", newSubs);
        navigate("/");
    }

    return (
        <>
            <div className="home-main">
                <form className="atf" onSubmit={(e) => e.preventDefault()}>
                    {" "}
                    <div className="Add-Subject">
                        <p className="present-details">Subject Name :</p>
                        <input
                            ref={subject}
                            id="inputA"
                            type="text"
                            required
                            placeholder="Enter the subject name"
                            className="enter-A"
                        />
                    </div>
                    <div className="Add-Subject">
                        <p className="present-details">Attended Classes</p>

                        <input
                            ref={totalClasses}
                            id="inputA"
                            type="text"
                            required
                            placeholder="0"
                            className="enter-A"
                        />
                    </div>
                    <div className="Add-Subject">
                        <p className="present-details">Initial Total Classes</p>
                        <input
                            ref={attendedClasses}
                            id="inputA"
                            required
                            type="text"
                            placeholder="0"
                            className="enter-A"
                        />
                    </div>
                    <button
                        type="button"
                        className="sub-submit"
                        onClick={handleSubject}
                    >
                        submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Pop;
