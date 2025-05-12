// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesFormat } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesFormat";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreams } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreams";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputProperties extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the video.
   * 
   * @example
   * 1000
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the video.
   * 
   * @example
   * 55
   */
  duration?: string;
  /**
   * @remarks
   * The format of the video.
   * 
   * @example
   * QuickTime / MOV
   */
  fileFormat?: string;
  /**
   * @remarks
   * The size of the file.
   * 
   * @example
   * 3509895
   */
  fileSize?: string;
  /**
   * @remarks
   * The format information.
   */
  format?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesFormat;
  /**
   * @remarks
   * The frame rate of the video. The value is a number.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The height of the video.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The stream information.
   */
  streams?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreams;
  /**
   * @remarks
   * The width of the video.
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
      format: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesFormat,
      fps: 'string',
      height: 'string',
      streams: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreams,
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

