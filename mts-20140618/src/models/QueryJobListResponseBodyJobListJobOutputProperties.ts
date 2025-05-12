// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputPropertiesFormat } from "./QueryJobListResponseBodyJobListJobOutputPropertiesFormat";
import { QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogos } from "./QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogos";
import { QueryJobListResponseBodyJobListJobOutputPropertiesStreams } from "./QueryJobListResponseBodyJobListJobOutputPropertiesStreams";


export class QueryJobListResponseBodyJobListJobOutputProperties extends $dara.Model {
  /**
   * @remarks
   * The video bitrate.
   * 
   * @example
   * 490
   */
  bitrate?: string;
  /**
   * @remarks
   * The video duration.
   * 
   * @example
   * 17
   */
  duration?: string;
  /**
   * @remarks
   * The video format.
   * 
   * @example
   * mp4
   */
  fileFormat?: string;
  /**
   * @remarks
   * The size of the media file.
   * 
   * @example
   * 1057273
   */
  fileSize?: string;
  /**
   * @remarks
   * The format information.
   */
  format?: QueryJobListResponseBodyJobListJobOutputPropertiesFormat;
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
   * The video height.
   * 
   * @example
   * 1280
   */
  height?: string;
  /**
   * @remarks
   * The non-engine layer keywords.
   */
  sourceLogos?: QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogos;
  /**
   * @remarks
   * The stream information.
   */
  streams?: QueryJobListResponseBodyJobListJobOutputPropertiesStreams;
  /**
   * @remarks
   * The video width.
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
      sourceLogos: 'SourceLogos',
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
      format: QueryJobListResponseBodyJobListJobOutputPropertiesFormat,
      fps: 'string',
      height: 'string',
      sourceLogos: QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogos,
      streams: QueryJobListResponseBodyJobListJobOutputPropertiesStreams,
      width: 'string',
    };
  }

  validate() {
    if(this.format && typeof (this.format as any).validate === 'function') {
      (this.format as any).validate();
    }
    if(this.sourceLogos && typeof (this.sourceLogos as any).validate === 'function') {
      (this.sourceLogos as any).validate();
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

