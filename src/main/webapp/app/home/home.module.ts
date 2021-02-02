import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng-lts/card';
import { BuenaBSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [BuenaBSharedModule, CardModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class BuenaBHomeModule {}
