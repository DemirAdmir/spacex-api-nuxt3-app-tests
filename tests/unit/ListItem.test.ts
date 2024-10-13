import { mount } from "@vue/test-utils";
import ListItem from "../../components/ListItem.vue";

describe("ListItem.vue", () => {
  const launch = {
    flight_number: 1,
    name: "Test Launch",
    date_utc: "2024-12-25T00:00:00Z",
  };

  it("renders launch information correctly", () => {
    const wrapper = mount(ListItem, {
      props: {
        launch,
        actionLabel: "Save",
        buttonType: "is-primary",
      },
    });

    expect(wrapper.text()).toContain("Test Launch");
    expect(wrapper.text()).toContain("Flight Number: 1");
    expect(wrapper.text()).toContain("12/25/2024");
  });

  it("emits actionClick when button is clicked", async () => {
    const wrapper = mount(ListItem, {
      props: {
        launch,
        actionLabel: "Save",
        buttonType: "is-primary",
      },
    });

    const button = wrapper.find("button");
    await button.trigger("click");

    expect(wrapper.emitted("actionClick")).toBeTruthy();
  });
});
