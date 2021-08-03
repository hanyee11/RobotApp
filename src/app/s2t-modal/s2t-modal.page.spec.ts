import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S2tModalPage } from './s2t-modal.page';

describe('S2tModalPage', () => {
  let component: S2tModalPage;
  let fixture: ComponentFixture<S2tModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2tModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S2tModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
