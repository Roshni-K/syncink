import React from "react";
import { connect } from "react-redux";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.setCookie = this.setCookie.bind(this);
  }
  setCookie(c_name, value) {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 3000);
    document.cookie = c_name + "=" + value + "; expires=" + expiry;
  }
  submitHandler(event) {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("id", event.target.elements[0].value);
    urlencoded.append("password", event.target.elements[1].value);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    };

    fetch("http://159.89.175.49:8383/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setCookie("syncink_token", result.response);
        window.location.href = "/";
      })
      .catch(error => {
        alert("Invalid User Credentials");
        // window.location.href = window.location;
        console.log("error", error);
      });
  }
  render() {
    return (
      <div>
        <div id="single-wrapper">
          <form
            onSubmit={event => this.submitHandler(event)}
            className="frm-single"
          >
            <div className="inside">
              <div className="title">
                <strong>Ninja</strong>Admin
              </div>
              {/* <!-- /.title --> */}
              <div className="frm-title">Login</div>
              {/* <!-- /.frm-title --> */}
              <div className="frm-input">
                <input type="text" placeholder="Username" className="frm-inp" />
                <i className="fa fa-user frm-ico"></i>
              </div>
              {/* <!-- /.frm-input --> */}
              <div className="frm-input">
                <input
                  type="password"
                  placeholder="Password"
                  className="frm-inp"
                />
                <i className="fa fa-lock frm-ico"></i>
              </div>
              {/* <!-- /.frm-input --> */}
              <div className="clearfix margin-bottom-20">
                <div className="pull-left">
                  <div className="checkbox primary">
                    <input type="checkbox" id="rememberme" />
                    <label htmlFor="rememberme">Remember me </label>
                  </div>
                  {/* <!-- /.checkbox --> */}
                </div>
                {/* <!-- /.pull-left --> */}
                <div className="pull-right">
                  <a href="page-recoverpw.html" className="a-link">
                    <i className="fa fa-unlock-alt"></i>Forgot password?
                  </a>
                </div>
                {/* <!-- /.pull-right --> */}
              </div>
              {/* <!-- /.clearfix --> */}
              <button type="submit" className="frm-submit">
                Login<i className="fa fa-arrow-circle-right"></i>
              </button>
              <div className="row small-spacing">
                <div className="col-sm-12">
                  <div className="txt-login-with txt-center">or login with</div>
                  {/* <!-- /.txt-login-with --> */}
                </div>
                {/* <!-- /.col-sm-12 --> */}
                <div className="col-sm-6">
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-icon-left btn-social-with-text btn-facebook text-white waves-effect waves-light"
                  >
                    <i className="ico fa fa-facebook"></i>
                    <span>Facebook</span>
                  </button>
                </div>
                {/* <!-- /.col-sm-6 --> */}
                <div className="col-sm-6">
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-icon-left btn-social-with-text btn-google-plus text-white waves-effect waves-light"
                  >
                    <i className="ico fa fa-google-plus"></i>Google+
                  </button>
                </div>
                {/* <!-- /.col-sm-6 --> */}
              </div>
              {/* <!-- /.row --> */}
              <a href="page-register.html" className="a-link">
                <i className="fa fa-key"></i>New to NinjaAdmin? Register.
              </a>
              <div className="frm-footer">NinjaAdmin © 2016.</div>
              {/* <!-- /.footer --> */}
            </div>
            {/* <!-- .inside --> */}
          </form>
          {/* <!-- /.frm-single --> */}
        </div>
      </div>
    );
  }
}
export default connect(null, null)(LoginPage);
