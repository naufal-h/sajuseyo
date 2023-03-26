class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<footer class="footer">
      <div class="footer-container">
        <div class="footer-grid">
          <div class="footer-logo-block">
            <a href="home.html" class="footer-logo">
              <img src="/assets/logo/logo-black.png" width="304" />
            </a>
            <p class="tag-line">
              원스톱 케이팝 매장
              <br />Your one-stop K-pop shop.
            </p>
          </div>
          <div class="footer-links-container">
            <h5 class="footer-header">Product</h5>
            <a href="product.html" class="footer-link">Music</a>
            <a href="product.html" class="footer-link">Fanlight</a>
            <a href="product.html" class="footer-link">Photo Book</a>
            <a href="product.html" class="footer-link">Printed Photo</a>
          </div>
          <div class="footer-links-container">
            <h5 class="footer-header">Celeb</h5>
            <a href="celebs.html" class="footer-link">SM Ent.</a>
            <a href="celebs.html" class="footer-link">JYP Ent.</a>
            <a href="celebs.html" class="footer-link">YG Ent.</a>
            <a href="celebs.html" class="footer-link">HYBE Corp.</a>
            <a href="celebs.html" class="footer-link">Cube Ent.</a>
            <a href="celebs.html" class="footer-link">Others</a>
          </div>
          <div class="footer-links-container">
            <h5 class="footer-header">Help</h5>
            <a href="aboutus.html" class="footer-link">About Us</a>
            <a href="" class="footer-link">Support</a>
            <a href="tnc.html" class="footer-link">Terms &amp; Conditions</a>
            <a href="policy.html" class="footer-link">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div class="footer-border"></div>
      <div class="footer-bottom">
        <div class="footer-copyright">&copy; Copyright 2023 - Sajuseyo!</div>
        <div class="footer-social">
          <a href="www.facebook.com" class="footer-social-icon">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="www.instagram.com" class="footer-social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="www.twitter.com" class="footer-social-icon">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
