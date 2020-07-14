import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './dashboard/schedule/schedule.component';
import { ChatGroupsComponent } from './chat-groups/chat-groups.component';
import { MainComponent } from './dashboard/main/main.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceService} from './auth/login-service.service';
import { ChatComponent } from './chat-groups/chat/chat.component';
import { TasksService } from './dashboard/main/tasks.service';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {path:'dashboard', component: DashboardComponent,
    children: [
      {path: '1', component: ScheduleComponent},
      {path: '2', component: MainComponent}
    ]
  },
  {path: 'chatgroups', component: ChatComponent},
  {path: 'blog', component: BlogComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    DashboardComponent,
    ChatGroupsComponent,
    ScheduleComponent,
    MainComponent,
    AuthComponent,
    ChatComponent,
    BlogComponent

    

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule

  ],
  providers: [LoginServiceService,TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
