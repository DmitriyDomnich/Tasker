import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavbarModule } from './top-navbar/top-navbar.module';
import { HomeModule } from './home-page/home.module';
import { StoreModule } from '@ngrx/store';
import { publicCoursesReducer } from './store/public-courses.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PublicCoursesEffects } from './store/public-courses.effects';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    QuillModule.forRoot({
      theme: 'snow',
      modules: {
        syntax: true,
      },
      customOptions: [
        {
          import: 'attributors/class/font',
          whitelist: ['roboto', 'fira', 'serif', 'sans-serif', 'monospace'],
        },
        {
          import: 'attributors/style/size',
          whitelist: [
            '12px',
            '14px',
            '16px',
            '18px',
            '20px',
            '22px',
            '24px',
            '30px',
            '32px',
            '40px',
          ],
        },
      ],
    }),
    EffectsModule.forRoot([PublicCoursesEffects]),
    StoreModule.forRoot({
      publicCourses: publicCoursesReducer,
    }),
    TopNavbarModule,
    HomeModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
