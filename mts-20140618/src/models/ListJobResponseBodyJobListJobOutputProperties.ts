// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputPropertiesFormat } from "./ListJobResponseBodyJobListJobOutputPropertiesFormat";
import { ListJobResponseBodyJobListJobOutputPropertiesStreams } from "./ListJobResponseBodyJobListJobOutputPropertiesStreams";


export class ListJobResponseBodyJobListJobOutputProperties extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the video.
   * 
   * @example
   * 490
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the video.
   * 
   * @example
   * 17
   */
  duration?: string;
  /**
   * @remarks
   * The format of the video.
   * 
   * @example
   * mp4
   */
  fileFormat?: string;
  /**
   * @remarks
   * The size of the file.
   * 
   * @example
   * 1057273
   */
  fileSize?: string;
  /**
   * @remarks
   * The format information.
   */
  format?: ListJobResponseBodyJobListJobOutputPropertiesFormat;
  /**
   * @remarks
   * The frame rate of the video.
   * 
   * @example
   * 30
   */
  fps?: string;
  /**
   * @remarks
   * The height of the video.
   * 
   * @example
   * 1280
   */
  height?: string;
  /**
   * @remarks
   * The stream information.
   */
  streams?: ListJobResponseBodyJobListJobOutputPropertiesStreams;
  /**
   * @remarks
   * The width of the video.
   * 
   * @example
   * 720
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
      format: ListJobResponseBodyJobListJobOutputPropertiesFormat,
      fps: 'string',
      height: 'string',
      streams: ListJobResponseBodyJobListJobOutputPropertiesStreams,
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

