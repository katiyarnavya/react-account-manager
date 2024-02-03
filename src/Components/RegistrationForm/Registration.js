import React from 'react'

const Registration = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
  return (
    <div className="form__container d-flex felx-column align-items-center justify-content-center">
    <form>
      <h4 className="form__heading">Registration</h4>
      <hr />
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Contact No
        </label>
        <input
          type="tel"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Date Of Birth
        </label>
        <input
          type="text"
          className="form-control"
        />
      </div>
      
      <div className="input">
                <h6 className="label">Gender: </h6>
                <div>
                  <label>
                    <input type="radio" name="gender" value="male"  />
                    Male
                  </label>
                  <label>
                    <input type="radio" name="gender" value="female"  />
                    Female
                  </label>
                  <label>
                    <input type="radio" name="gender" value="other"  />
                    Other
                  </label>
                </div>
            </div>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" htmlFor="customCheck1">By registering or using this app, users agree to comply with terms and conditions. Prohibited activities include fraudulent actions and unauthorized access.</label>
            </div>
    
      <button type="submit" className="form__button">
        Register
      </button>
    </form>
  </div>


  )
}

export default Registration 