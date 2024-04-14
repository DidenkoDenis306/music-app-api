import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '..', 'uploads'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://ddidenko441:BBdlZvmIoDElXY7I@cluster0.plsx7xu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
