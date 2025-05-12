// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesFormat } from "./QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesFormat";
import { QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreams } from "./QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreams";


export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobProperties extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the media file.
   * 
   * @example
   * 1630.045
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the media file.
   * 
   * @example
   * 17.226000
   */
  duration?: string;
  /**
   * @remarks
   * The format of the input media file.
   * 
   * @example
   * QuickTime/MOV
   */
  fileFormat?: string;
  /**
   * @remarks
   * The size of the image file.
   * 
   * @example
   * 3509895
   */
  fileSize?: string;
  /**
   * @remarks
   * The format information.
   */
  format?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesFormat;
  /**
   * @remarks
   * The frame rate of the media file.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The height of the video. Unit: pixel.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The media streams that are contained in the input media file.
   */
  streams?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreams;
  /**
   * @remarks
   * The width of the video. Unit: pixel.
   * 
   * @example
   * 1280
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileFormat: 'FileFormat',
      fileSize: 'FileSize',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      streams: 'Streams',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileFormat: 'string',
      fileSize: 'string',
      format: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesFormat,
      fps: 'string',
      height: 'string',
      streams: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreams,
      width: 'string',
    };
  }

  validate() {
    if(this.format && typeof (this.format as any).validate === 'function') {
      (this.format as any).validate();
    }
    if(this.streams && typeof (this.streams as any).validate === 'function') {
      (this.streams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

