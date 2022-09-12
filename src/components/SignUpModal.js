import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../context/userContext';

const SignUpModal = () => {
    const { modalState, toggleModals } = useContext(UserContext);
    const [validation, setValidation] = useState("");
    const inputs = useRef([]);
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }

    const handleForm = e => {
        e.preventDefault()
        console.log(inputs);
        if ((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
            setValidation("6 characters min")
            return;
        }
    }
    return (
        <>
            {modalState.signUpModal && (
                <div className="position-fixed top-0 vw-100 vh-100">
                    <div
                        onClick={() => toggleModals("close")}
                        className="w-100 h-100 bg-dark bg-opacity-75">
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle bg-white" style={{
                        width: "400px", padding: "20px",
                        borderRadius: "5px"
                    }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header" >
                                    <h5 className="modal-title" style={{
                                        marginBottom: "16px"
                                    }}>Sign Up</h5>
                                    <button
                                        onClick={() => toggleModals("close")}
                                        className="btn-close"></button>
                                </div>
                                <div className="modal-body">
                                    <form
                                        onSubmit={handleForm}
                                        className="sign-up-form">
                                        <div className="mb-3">
                                            <label htmlFor="signUpEmail" className='form-label'>Email adress</label>
                                            <input
                                                ref={addInputs}
                                                name="email"
                                                required
                                                type="email"
                                                className='form-control'
                                                id="signUpEmail" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="signUpPwd" className='form-label'>Password</label>
                                            <input
                                                ref={addInputs}
                                                name="pwd"
                                                required
                                                type="password"
                                                className='form-control'
                                                id="signUpPwd" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="repeatPwd" className='form-label'>Repeat password</label>
                                            <input
                                                ref={addInputs}
                                                name="pwd"
                                                required
                                                type="password"
                                                className='form-control'
                                                id="repeatPwd" />
                                            <p className="text-danger mt-1">{validation}</p>
                                        </div>
                                        <button className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SignUpModal;