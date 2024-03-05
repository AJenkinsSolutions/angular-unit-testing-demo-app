
import { AppComponent } from "./app.component"

//this first parameter in the describe indicates with component we are testing
describe('AppComponent', ()=> {
  //A clear explanation of the test
  it('should have a defined title', () => {
    //Assertions of the test
    const component = new AppComponent();
    expect(component.title).toBeDefined();
  })
})