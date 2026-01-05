import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publicidade } from './publicidade';

describe('Publicidade', () => {
  let component: Publicidade;
  let fixture: ComponentFixture<Publicidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publicidade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Publicidade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
