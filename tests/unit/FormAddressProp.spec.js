import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import FormAddress from '@/components/FormAddress.vue'

/**
 * Assertion tests for props: customContainerClass, customInputWrapperClass, initialAddress
 */
describe('FormAddress.vue', () => {
  // Prop : customContainerClass Tests -- START
  it('No prop.customContainerClass passed: `default-container` should exist.', () => {
    const customContainerClass = undefined;
    const wrapper = shallowMount(FormAddress, {
      propsData: { customContainerClass }
    })
    
    expect(wrapper.classes()).to.include('default-container')
  })

  it('A prop.customContainerClass passed: `custom-container` should exist.', () => {
    const customContainerClass = 'custom-container';
    const wrapper = shallowMount(FormAddress, {
      propsData: { customContainerClass }
    })
    
    expect(wrapper.classes()).to.include(customContainerClass)
  })
  // Prop : customContainerClass Tests -- END

  // Prop : customInputWrapperClass Tests -- START
  it('No prop.customInputWrapperClass passed: `default-input-wrapper` should exist.', () => {
    const customInputWrapperClass = undefined;
    const wrapper = shallowMount(FormAddress, {
      propsData: { customInputWrapperClass }
    })

    expect(wrapper.html()).to.include('default-input-wrapper');
  })

  it('A prop.customInputWrapperClass passed: `custom-input-wrapper` should exist.', () => {
    const customInputWrapperClass = 'custom-input-wrapper';
    const wrapper = shallowMount(FormAddress, {
      propsData: { customInputWrapperClass }
    })

    expect(wrapper.html()).to.include('custom-input-wrapper');
  })
  // Prop : customInputWrapperClass Tests -- END


  // Prop : initialAddress Tests -- START
  it('No prop.initialAddress passed: data should be equal to default values <"">.', () => {
    const initialAddress = undefined;
    const defaultAddress = {
      postalCode : "",
      prefecture : "",
      city : "",
      area : "",
      extension : ""
    }

    const wrapper = shallowMount(FormAddress, {
      propsData: { initialAddress }
    });

    expect(wrapper.vm.address.postalCode).to.equal(defaultAddress.postalCode);
    expect(wrapper.vm.address.prefecture).to.equal(defaultAddress.prefecture);
    expect(wrapper.vm.address.city).to.equal(defaultAddress.city);
    expect(wrapper.vm.address.area).to.equal(defaultAddress.area);
    expect(wrapper.vm.address.extension).to.equal(defaultAddress.extension);    
  })

  it('A prop.initialAddress passed: data should be equal to prop.', () => {
    const initialAddress = {
      postalCode : "1580098",
      prefecture : "東京都",
      city : "世田谷区",
      area : "上用賀6-18-14",
      extension : "102"
    };

    const wrapper = shallowMount(FormAddress, {
      propsData: { initialAddress }
    })

    expect(wrapper.vm.address.postalCode).to.equal(initialAddress.postalCode);
    expect(wrapper.vm.address.prefecture).to.equal(initialAddress.prefecture);
    expect(wrapper.vm.address.city).to.equal(initialAddress.city);
    expect(wrapper.vm.address.area).to.equal(initialAddress.area);
    expect(wrapper.vm.address.extension).to.equal(initialAddress.extension);    
  })
  // Prop : initialAddress Tests -- END
})
