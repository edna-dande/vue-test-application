import Vue from 'vue'
import HomePage from '@/components/HomePage'

describe('HomePage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HomePage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.title h2').textContent)
      .toEqual('Home')
  })

    test('should render entries', () => {
      const Constructor = Vue.extend(HomePage)
      const vm = new Constructor().$mount()
      expect(vm.$el.querySelector('.container p').textContent)
        .toContain('Lorem')
    })
})