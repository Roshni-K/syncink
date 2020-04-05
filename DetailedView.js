import React from "react";
import { connect } from "react-redux";
class DetailedView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.history.location.pathname);
    return (
      <div>
        <header className="header-detailview box-content">Meeting Room</header>
        <div className="detailview-tab box-content">
          <div className="config-selector radio-13 radio success">
            <input type="radio" name="radio-3" id="radio-13" />
            <label className="radio-10-detail box-title" htmlFor="radio-13">
              Setting 1
            </label>
          </div>
          <div className="config-selector radio success">
            <input type="radio" name="radio-3" id="radio-14" />
            <label className="radio-10-detail box-title" htmlFor="radio-14">
              Setting 2
            </label>
          </div>
          <div className="config-selector radio primary">
            <input type="radio" name="radio-2" id="radio-11" />
            <label className="radio-10-detail box-title" htmlFor="radio-11">
              Automatic Mode
            </label>
          </div>
          <div className="config-selector radio primary">
            <input type="radio" name="radio-2" id="radio-12" />
            <label className="radio-10-detail box-title" htmlFor="radio-12">
              Manual Mode
            </label>
          </div>
        </div>
        <div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="box-content card bordered-all info">
              <h4 class="box-title bg-info">
                <i class="ico fa fa-heartbeat"></i>LIGHTS
              </h4>
              <div class="card-content">
                <div>
                  <div class="switch info">
                    <input type="checkbox" id="switch-6" />
                    <label for="switch-6">Light 1</label>
                  </div>
                </div>
                <div>
                  <div class="switch info">
                    <input type="checkbox" id="switch-7" />
                    <label for="switch-7">Light 2</label>
                  </div>
                </div>
                <div>
                  <div class="switch info">
                    <input type="checkbox" id="switch-8" />
                    <label for="switch-8">Light 3</label>
                  </div>
                </div>
              </div>
              {/* <!-- /.card-content --> */}
            </div>
            {/* <!-- /.box-content --> */}
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="box-content card bordered-all success">
              <h4 class="box-title bg-success">
                <i class="ico fa fa-heartbeat"></i>FANS
              </h4>
              <div class="card-content">
                <div>
                  <div class="switch success">
                    <input type="checkbox" id="switch-2" />
                    <label for="switch-2">Fan 1</label>
                  </div>
                </div>
                <div>
                  <div class="switch success">
                    <input type="checkbox" id="switch-1" />
                    <label for="switch-1">Fan 2</label>
                  </div>
                </div>
              </div>
              {/* <!-- /.card-content --> */}
            </div>
            {/* <!-- /.box-content --> */}
          </div>
          {/* ----------- */}
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="box-content card bordered-all warning">
              <h4 class="box-title bg-warning">
                <i class="ico fa fa-heartbeat"></i>AIR CONDITIONER
              </h4>
              <div class="card-content">
                <div>
                  <div class="switch warning">
                    <input type="checkbox" id="switch-4" />
                    <label for="switch-4">AC 1</label>
                  </div>
                </div>
              </div>
              {/* <!-- /.card-content --> */}
            </div>
            {/* <!-- /.box-content --> */}
          </div>
          {/* ----------- */}
        </div>
      </div>
    );
  }
}
export default connect(null, null)(DetailedView);
