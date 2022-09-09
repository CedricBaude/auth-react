import React from 'react';

const SignUpModal = () => {
    return (
        <>
            <div className="position-fixed top-0 vw-100 vh-100">
                <div className="w-100 h-100 bg-dark bg-opacity-75">
                    <div className="position-absolute top-50 start-50 translate-middle bg-white" style={{
                        width: "400px", padding: "20px",
                        borderRadius: "5px"
                    }}>
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header" >
                                    <h5 className="modal-title" style={{
                                        marginBottom: "16px"
                                    }}>Sign Up</h5>
                                    <button className="btn-close"></button>
                                </div>
                                <div className="modal-body">
                                    <form className="sign-up-form">
                                        <div className="mb-3">
                                            <label htmlFor="signUpEmail" className='form-label'>Email adress</label>
                                            <input
                                                name="email"
                                                required
                                                type="email"
                                                className='form-control'
                                                id="signUpEmail" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="signUpPwd" className='form-label'>Password</label>
                                            <input
                                                name="pwd"
                                                required
                                                type="password"
                                                className='form-control'
                                                id="signUpPwd" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="repeatPwd" className='form-label'>Repeat password</label>
                                            <input
                                                name="pwd"
                                                required
                                                type="password"
                                                className='form-control'
                                                id="repeatPwd" />
                                            <p className="text-danger mt-1">Validation</p>
                                        </div>
                                        <button className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUpModal;