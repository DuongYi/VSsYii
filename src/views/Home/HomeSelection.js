import React from "react";

import "src/style/HomeSelection.css";
import "src/style/Grid.css";

function HomeSelection() {
  return (
    <div class="home__section">
      <div class="section-title">
        <h3 class="main-title">Choose your style</h3>
        <h3 class="second-title">Products category</h3>
      </div>
      <div class="section-content">
        <div class="row">
          <div class="col-4">
            <div class="category-img">
              <div
                class="category-img-inner"
                style={{
                  backgroundImage: `url(${"https://www.nawpic.com/media/2020/goku-4k-nawpic-25.jpg"})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
              <div class="category-title">Tool</div>
            </div>
          </div>
          <div class="col-4">
            <div class="category-img">
              <div
                class="category-img-inner"
                style={{
                  backgroundImage: `url(${"/static/images/capcha.png"})`,
                }}
              ></div>
              <div class="category-title">Capcha</div>
            </div>
          </div>
          <div class="col-4">
            <div class="category-img">
              <div
                class="category-img-inner"
                style={{
                  backgroundImage: `url(${"https://www.webacil.com/images/blog/vps-sunucu-nedir.jpg"})`,
                }}
              ></div>
              <div class="category-title">VPS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSelection;
