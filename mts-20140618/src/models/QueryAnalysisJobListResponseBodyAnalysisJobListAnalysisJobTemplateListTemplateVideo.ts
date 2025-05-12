// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideoBitrateBnd } from "./QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideoBitrateBnd";


export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideo extends $dara.Model {
  /**
   * @remarks
   * The average bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 1000
   */
  bitrate?: string;
  /**
   * @remarks
   * The average bitrate range of the video.
   */
  bitrateBnd?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideoBitrateBnd;
  /**
   * @remarks
   * The buffer size.
   * 
   * *   Unit: KB.
   * *   Default value: **6000**.
   * 
   * @example
   * 6000
   */
  bufsize?: string;
  /**
   * @remarks
   * The codec. Valid values: H.264 and H.265. Default value: **H.264**.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The constant rate factor.
   * 
   * *   Default value when the the Codec parameter is set to H.264: **23**, default value when the the Codec parameter is set to H.265: **26**.
   * *   If this parameter is specified, the value of the Bitrate parameter becomes invalid.
   * 
   * @example
   * 26
   */
  crf?: string;
  /**
   * @remarks
   * The strength of the independent noise reduction algorithm.
   * 
   * @example
   * 5
   */
  degrain?: string;
  /**
   * @remarks
   * The frame rate of the video.
   * 
   * *   The value is 60 if the frame rate of the input file exceeds 60.
   * *   Default value: **the frame rate of the input video**.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The maximum number of frames between two keyframes. Default value: **250**.
   * 
   * @example
   * 250
   */
  gop?: string;
  /**
   * @remarks
   * The height of the video.
   * 
   * *   Unit: pixel.
   * *   Default value: **the height of the input video**.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The maximum bitrate of the video.
   * 
   * *   Valid values: **10 to 50000**.
   * *   Unit: Kbit/s.
   * 
   * @example
   * 2000
   */
  maxrate?: string;
  /**
   * @remarks
   * The pixel format of the video. Valid values: standard pixel formats such as yuv420p and yuvj420p.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The preset video algorithm. Valid values: veryfast, fast, medium, slow, and slower. Default value: **medium**.
   * 
   * @example
   * medium
   */
  preset?: string;
  /**
   * @remarks
   * The codec profile. Valid values:
   * 
   * *   **baseline**: applicable to mobile devices.
   * *   **main**: applicable to standard-definition devices.
   * *   **high**: applicable to high-definition devices.
   * *   Default value: **high**.
   * 
   * @example
   * high
   */
  profile?: string;
  /**
   * @remarks
   * The level of quality control on the video.
   * 
   * @example
   * 15
   */
  qscale?: string;
  /**
   * @remarks
   * The scan mode. Valid values:
   * 
   * *   **interlaced**
   * *   **progressive**
   * 
   * @example
   * interlaced
   */
  scanMode?: string;
  /**
   * @remarks
   * The width of the video.
   * 
   * *   Unit: pixel.
   * *   Default value: **the width of the input video**.
   * 
   * @example
   * 1280
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateBnd: 'BitrateBnd',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      maxrate: 'Maxrate',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      maxrate: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.bitrateBnd && typeof (this.bitrateBnd as any).validate === 'function') {
      (this.bitrateBnd as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

