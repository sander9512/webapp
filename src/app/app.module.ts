import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StreamingComponent } from './components/streaming/streaming.component';
import {AppRoutingModule} from './app-routing.module';
import {ScrollbarModule} from 'ngx-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { StreamingVideoComponent } from './components/streaming/streaming-video/streaming-video.component';
import { StreamingChatComponent } from './components/streaming/streaming-chat/streaming-chat.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VgStreamingModule } from 'videogular2/streaming';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { ReactiveFormsModule } from '@angular/forms';
import { OverviewGridComponent } from './components/overview-grid/overview-grid.component';
import {StreamerService} from './services/streamer.service';
import { HeaderComponent } from './components/header/header.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
const config: SocketIoConfig = { url: '188.166.127.54:4200', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    StreamingComponent,
    StreamingVideoComponent,
    StreamingChatComponent,
    OverviewGridComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    AppRoutingModule,
    ScrollbarModule,
    PerfectScrollbarModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    FormsModule,
    NgbModule.forRoot(),
    SocketIoModule.forRoot(config),
    ReactiveFormsModule,
    MatGridListModule,
    HttpModule
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }, StreamerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
