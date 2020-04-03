import React from "react";
import { connect } from "react-redux";
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.check = this.check.bind(this);
    this.getCookie = this.getCookie.bind(this);
    this.setCookie = this.setCookie.bind(this);
  }
  componentDidMount() {
    this.check();
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  setCookie(c_name, value) {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 3000);
    document.cookie = c_name + "=" + value + "; expires=" + expiry;
  }

  check() {
    let usertokenQuery = window.location.search.split("=");
    if (usertokenQuery[0] === "?token" && usertokenQuery[1]) {
      this.setCookie("syncink_token", usertokenQuery[1]);
      return true;
    } else {
      var usertoken = this.getCookie("syncink_token");
      if (usertoken) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          credentials: "include"
        };
        fetch("http://159.89.175.49:8383/authenticate", {
          credentials: "include"
        })
          .then(res => res.json())
          .then(response => {
            console.log(response);
            return true;
          });
      } else {
        window.location.href = "./login";
      }
    }
  }
  render() {
    return (
      <div>
        <div className="main-menu">
          <header className="header">
            <a href="index.html" className="logo">
              Syncink
            </a>
            <button
              type="button"
              className="button-close fa fa-times js__menu_close"
            ></button>
          </header>
          {/* <!-- /.header --> */}
          <div className="content">
            <div className="navigation">
              <ul className="menu js__accordion">
                <li className="current">
                  <a className="waves-effect" href="index.html">
                    <i className="menu-icon mdi mdi-view-dashboard"></i>
                    <span>Dashboard</span>
                  </a>
                </li>
              </ul>
              {/* <!-- /.menu js__accordion --> */}
            </div>
            {/* <!-- /.navigation --> */}
          </div>
          {/* <!-- /.content --> */}
        </div>
        {/* <!-- /.main-menu --> */}

        <div className="fixed-navbar">
          <div className="pull-left">
            {/* <!-- <button
          type="button"
          className="menu-mobile-button glyphicon glyphicon-menu-hamburger js__menu_mobile"
        ></button> --> */}
            <h1 className="page-title">Coviam</h1>
            {/* <!-- /.page-title --> */}
          </div>
          {/* <!-- /.pull-left --> */}
          <div className="pull-right">
            <div className="ico-item">
              <img src="http://placehold.it/80x80" alt="" className="ico-img" />
              <ul className="sub-ico-item">
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a className="js__logout" href="#">
                    Log Out
                  </a>
                </li>
              </ul>
              {/* <!-- /.sub-ico-item --> */}
            </div>
            {/* <!-- /.ico-item --> */}
          </div>
          {/* <!-- /.pull-right --> */}
        </div>
        {/* <!-- /.fixed-navbar --> */}

        <div id="wrapper">
          <div className="main-content">
            <div className="row small-spacing">
              <div className="col-sm-6 col-lg-3 col-xs-12">
                <div className="box-content">
                  <h4 className="box-title text-orange">Site Traffic</h4>
                  {/* <!-- /.box-title --> */}
                  {/* <!-- /.dropdown js__dropdown --> */}
                  <div className="content widget-stat">
                    <div
                      id="traffic-sparkline-chart-3"
                      className="left-content"
                    ></div>
                    {/* <!-- /#traffic-sparkline-chart-3 --> */}
                    <div className="right-content">
                      <h2 className="counter text-danger">12</h2>
                      {/* <!-- /.counter --> */}
                      <p className="text text-danger">Some text here</p>
                      {/* <!-- /.text --> */}
                    </div>
                    {/* <!-- .right-content --> */}
                  </div>
                  {/* <!-- /.content widget-stat --> */}
                </div>
                {/* <!-- /.box-content --> */}
              </div>
              {/* <!-- /.col-sm-6 col-lg-3 col-xs-12 --> */}
              <div className="col-sm-6 col-lg-3 col-xs-12">
                <div className="box-content">
                  <h4 className="box-title text-info">Site Traffic</h4>
                  {/* <!-- /.box-title --> */}
                  {/* <!-- /.dropdown js__dropdown --> */}
                  <div className="content widget-stat">
                    <div
                      id="traffic-sparkline-chart-1"
                      className="left-content margin-top-15"
                    ></div>
                    {/* <!-- /#traffic-sparkline-chart-1 --> */}
                    <div className="right-content">
                      <h2 className="counter text-info">278</h2>
                      {/* <!-- /.counter --> */}
                      <p className="text text-info">Some text here</p>
                      {/* <!-- /.text --> */}
                    </div>
                    {/* <!-- .right-content --> */}
                  </div>
                  {/* <!-- /.content widget-stat --> */}
                </div>
                {/* <!-- /.box-content --> */}
              </div>
              {/* <!-- /.col-sm-6 col-lg-3 col-xs-12 --> */}

              <div className="col-sm-6 col-lg-3 col-xs-12">
                <div className="box-content">
                  <h4 className="box-title text-success">Site Traffic</h4>
                  {/* <!-- /.box-title --> */}
                  {/* <!-- /.dropdown js__dropdown --> */}
                  <div className="content widget-stat">
                    <div
                      id="traffic-sparkline-chart-2"
                      className="left-content margin-top-10"
                    ></div>
                    {/* <!-- /#traffic-sparkline-chart-2 --> */}
                    <div className="right-content">
                      <h2 className="counter text-success">36%</h2>
                      {/* <!-- /.counter --> */}
                      <p className="text text-success">Some text here</p>
                      {/* <!-- /.text --> */}
                    </div>
                    {/* <!-- .right-content --> */}
                  </div>
                  {/* <!-- /.content widget-stat --> */}
                </div>
                {/* <!-- /.box-content --> */}
              </div>
              {/* <!-- /.col-lg-4 col-xs-12 --> */}

              <div className="col-sm-6 col-lg-3 col-xs-12">
                <div className="box-content">
                  <h4 className="box-title text-orange">Site Traffic</h4>
                  {/* <!-- /.box-title --> */}
                  {/* <!-- /.dropdown js__dropdown --> */}
                  <div className="content widget-stat">
                    <div
                      id="traffic-sparkline-chart-3-custom"
                      className="left-content"
                    ></div>
                    {/* <!-- /#traffic-sparkline-chart-3 --> */}
                    <div className="right-content">
                      <h2 className="counter text-orange">
                        849 <i className="fa fa-angle-double-up"></i>
                      </h2>
                      {/* <!-- /.counter --> */}
                      <p className="text text-orange">Some text here</p>
                      {/* <!-- /.text --> */}
                    </div>
                    {/* <!-- .right-content --> */}
                  </div>
                  {/* <!-- /.content widget-stat --> */}
                </div>
                {/* <!-- /.box-content --> */}
              </div>
              {/* <!-- /.col-sm-6 col-lg-3 col-xs-12 --> */}
            </div>
            {/* <!-- .row --> */}
            <div className="row small-spacing">
              <div className="col-lg-6 col-xs-12">
                <div className="box-content">
                  <h4 className="box-title">Activity</h4>
                  {/* <!-- /.box-title --> */}
                  <div className="dropdown js__drop_down">
                    <a
                      href="#"
                      className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"
                    ></a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Action</a>
                      </li>
                      <li>
                        <a href="#">Another action</a>
                      </li>
                      <li>
                        <a href="#">Something else there</a>
                      </li>
                      <li className="split"></li>
                      <li>
                        <a href="#">Separated link</a>
                      </li>
                    </ul>
                    {/* <!-- /.sub-menu --> */}
                  </div>
                  {/* <!-- /.dropdown js__dropdown --> */}
                  <canvas
                    id="bar-chartjs-chart"
                    className="chartjs-chart"
                    width="480"
                    height="320"
                  ></canvas>
                  {/* <!-- /#bar-chartjs-chart.chartjs-chart --> */}
                </div>
                {/* <!-- /.box-content --> */}
              </div>
              {/* <!-- /.col-xs-12 --> */}
              <div className="col-lg-6 col-xs-12">
                <div className="box-content">
                  <h4 className="box-title">Sales</h4>
                  <canvas
                    id="donut-chartjs-chart"
                    className="chartjs-chart"
                    width="475"
                    height="316"
                  ></canvas>
                  {/* <!-- /#donut-chartjs-chart.chartjs-chart --> */}
                </div>
                {/* <!-- /.box-content --> */}
              </div>
              {/* <!-- /.col-xs-12 --> */}
            </div>
            {/* <!-- .row --> */}
            <div className="row small-spacing">
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="box-content bg-success text-white">
                  <div className="statistics-box with-icon">
                    <i className="ico small fa fa-diamond"></i>
                    <p className="text text-white">SUCCESS</p>
                    <h2 className="counter">72943</h2>
                  </div>
                </div>
                {/* <!-- /.box-content --> */}
              </div>
              {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="box-content bg-info text-white">
                  <div className="statistics-box with-icon">
                    <i className="ico small fa fa-download"></i>
                    <p className="text text-white">DOWNLOAD</p>
                    <h2 className="counter">6382</h2>
                  </div>
                </div>
                {/* <!-- /.box-content --> */}
              </div>
              {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="box-content bg-danger text-white">
                  <div className="statistics-box with-icon">
                    <i className="ico small fa fa-bug"></i>
                    <p className="text text-white">FIXED BUG</p>
                    <h2 className="counter">12564</h2>
                  </div>
                </div>
                {/* <!-- /.box-content --> */}
              </div>
              {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="box-content bg-warning text-white">
                  <div className="statistics-box with-icon">
                    <i className="ico small fa fa-usd"></i>
                    <p className="text text-white">SALES</p>
                    <h2 className="counter">2,637</h2>
                  </div>
                </div>
                {/* <!-- /.box-content --> */}
              </div>
              {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
            </div>
            {/* <!-- .row --> */}
            {/* <!-- /.row --> */}

            <div className="row small-spacing">
              <div className="col-lg-6 col-xs-12">
                <div className="box-content">
                  <h4 className="box-title">Purchases</h4>
                  <table className="table table-striped margin-bottom-10 table-purchases">
                    <thead>
                      <tr>
                        <th>Meeting Room</th>
                        <th>State</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Amaza Themes</td>
                        <td className="text-success">Completed</td>
                      </tr>
                      <tr>
                        <td>Macbook</td>
                        <td className="text-danger">Cancelled</td>
                      </tr>
                      <tr>
                        <td>Samsung TV</td>
                        <td className="text-warning">Pending</td>
                      </tr>
                      <tr>
                        <td>Ninja Admin</td>
                        <td className="text-warning">Pending</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <!-- /.table --> */}
                </div>
                {/* <!-- /.box-content --> */}
              </div>
              {/* <!-- /.col-lg-6 col-xs-12 --> */}
              <div className="col-lg-6 col-xs-12">
                <div className="box-content">
                  <h4 className="box-title">Purchases</h4>
                  <table className="table table-striped margin-bottom-10 table-purchases">
                    <thead>
                      <tr>
                        <th>Meeting Room</th>
                        <th>State</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Amaza Themes</td>
                        <td className="text-success">Completed</td>
                      </tr>
                      <tr>
                        <td>Macbook</td>
                        <td className="text-danger">Cancelled</td>
                      </tr>
                      <tr>
                        <td>Samsung TV</td>
                        <td className="text-warning">Pending</td>
                      </tr>
                      <tr>
                        <td>Ninja Admin</td>
                        <td className="text-warning">Pending</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <!-- /.table --> */}
                </div>
                {/* <!-- /.box-content --> */}
              </div>
              {/* <!-- /.col-lg-6 col-xs-12 --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.main-content --> */}
        </div>
      </div>
    );
  }
}
export default connect(null, null)(MainPage);
