import BaseComponent from "./abstract/BaseComponent";
import Select from "./components/common/Select";
import Modal from "./components/common/Modal";
import TabBar from "./components/TabBar";
import FilterBar from "./components/FilterBar";
import RestaurantList from "./components/RestaurantList";
import RestaurantForm from "./components/RestaurantForm";

import { MODAL_EVENT } from "./constants/event";

customElements.define("tab-bar", TabBar);
customElements.define("filter-bar", FilterBar);
customElements.define("restaurant-list", RestaurantList);
customElements.define("select-box", Select);
customElements.define("modal-box", Modal);
customElements.define("restaurant-form", RestaurantForm);

export default class LunchApp extends BaseComponent {
  getTemplate() {
    return `
        <main>
          <tab-bar></tab-bar>
          <filter-bar></filter-bar>
          <restaurant-list></restaurant-list>
          <modal-box modal-id="restaurant-form-modal" listening-event-name=${MODAL_EVENT.restaurantFormModalAction}>
            <restaurant-form></restaurant-form>
          </modal-box>
        </main>
      `;
  }
}
