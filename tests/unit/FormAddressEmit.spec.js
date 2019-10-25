import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import FormAddress from '@/components/FormAddress.vue'

/**
 * Assertion tests for props: customContainerClass, customInputWrapperClass, initialAddress
 */
describe('FormAddress.vue', () => {
  // Emit : Non-existing JP Postal Code Test -- START
  it('Trigger `change` to non-existing jp postal code, outgoing data is undefined.', () => {
    const wrapper = shallowMount(FormAddress);
    const expectedAddress = {
      postalCode : "111111Z",
      prefecture : "",
      city : "",
      area : "",
      extension : ""
    };

    let inputPostalCode = wrapper.find('input[name="postal-code"]');
    inputPostalCode.setValue(expectedAddress.postalCode);
    inputPostalCode.trigger('change');

    let emittedAddress = wrapper.emitted('on-update-address')[0][0];
    expect(emittedAddress.postalCode).to.equal(expectedAddress.postalCode);
    expect(emittedAddress.prefecture).to.equal(expectedAddress.prefecture);
    expect(emittedAddress.city).to.equal(expectedAddress.city);
    expect(emittedAddress.area).to.equal(expectedAddress.area);
    expect(emittedAddress.extension).to.equal(expectedAddress.extension);
  })
  // Emit : Non-existing JP Postal Code Test -- END

  // Emit : Existing JP Postal Code Test -- START
  it('Trigger `change` to existing jp postal code, outgoing data is the correspnding address.', () => {
    const wrapper = shallowMount(FormAddress);
    const expectedAddress = {
      postalCode : "0058601",
      prefecture : "札幌市南区",
      city : "南沢五条",
      area : "１丁目１－１",
      extension : ""
    };

    let inputPostalCode = wrapper.find('input[name="postal-code"]');
    inputPostalCode.setValue(expectedAddress.postalCode);
    inputPostalCode.trigger('change');

    let emittedAddress = wrapper.emitted('on-update-address')[0][0];
    expect(emittedAddress.postalCode).to.equal(expectedAddress.postalCode);
    expect(emittedAddress.prefecture).to.equal(expectedAddress.prefecture);
    expect(emittedAddress.city).to.equal(expectedAddress.city);
    expect(emittedAddress.area).to.equal(expectedAddress.area);
    expect(emittedAddress.extension).to.equal(expectedAddress.extension);
  })
  // Emit : Existing JP Postal Code Test -- END
})