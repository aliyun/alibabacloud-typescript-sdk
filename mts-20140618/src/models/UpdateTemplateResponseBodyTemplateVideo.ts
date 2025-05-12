// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTemplateResponseBodyTemplateVideoBitrateBnd } from "./UpdateTemplateResponseBodyTemplateVideoBitrateBnd";
import { UpdateTemplateResponseBodyTemplateVideoNarrowBand } from "./UpdateTemplateResponseBodyTemplateVideoNarrowBand";


export class UpdateTemplateResponseBodyTemplateVideo extends $dara.Model {
  /**
   * @remarks
   * The maximum bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 200
   */
  bitrate?: string;
  /**
   * @remarks
   * The upper limit of the total bitrate. Unit: Kbit/s.
   */
  bitrateBnd?: UpdateTemplateResponseBodyTemplateVideoBitrateBnd;
  /**
   * @remarks
   * The level of quality control on the video.
   * 
   * @example
   * 6000
   */
  bufsize?: string;
  /**
   * @remarks
   * The height of the output video.
   * 
   * *   Unit: pixel.
   * *   Default value: the height of the input video.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * Indicates whether the video stream is deleted. Valid values:
   * 
   * *   **true**: The video stream is deleted.
   * *   **false**: The video stream is retained.
   * *   Default value: **false**.
   * 
   * @example
   * 15
   */
  crf?: string;
  /**
   * @remarks
   * The average bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * border
   */
  crop?: string;
  /**
   * @remarks
   * The average bitrate range of the video.
   * 
   * @example
   * 10
   */
  degrain?: string;
  /**
   * @remarks
   * The preset video algorithm. Default value: **medium**. Valid values:
   * 
   * *   **veryfast**
   * *   **fast**
   * *   **medium**
   * *   **slow**
   * *   **slower**
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The width of the video.
   * 
   * *   Unit: pixel.
   * *   Default value: **the width of the input video**.
   * 
   * @example
   * 10
   */
  gop?: string;
  /**
   * @remarks
   * Indicates whether the HDR2SDR conversion feature is enabled. If this feature is enabled, high dynamic range (HDR) videos are transcoded to standard dynamic range (SDR) videos.
   * 
   * @example
   * true
   */
  hdr2sdr?: string;
  /**
   * @remarks
   * The level of the independent denoising algorithm.
   * 
   * @example
   * 800
   */
  height?: string;
  /**
   * @remarks
   * The size of the buffer.
   * 
   * *   Unit: KB.
   * *   Default value: **6000**.
   * 
   * @example
   * false
   */
  longShortMode?: string;
  /**
   * @remarks
   * The encoding profile. Valid values:
   * 
   * *   **baseline**: applicable to mobile devices.
   * *   **main**: applicable to standard-definition devices.
   * *   **high**: applicable to high-definition devices.
   * *   Default value: **high**.
   * 
   * @example
   * 60
   */
  maxFps?: string;
  /**
   * @remarks
   * The maximum frame rate.
   * 
   * @example
   * 500
   */
  maxrate?: string;
  /**
   * @remarks
   * The Narrowband HD settings.
   */
  narrowBand?: UpdateTemplateResponseBodyTemplateVideoNarrowBand;
  /**
   * @remarks
   * The video codec. Default value: **H.264**.
   * 
   * @example
   * 1280:800:0:140
   */
  pad?: string;
  /**
   * @remarks
   * The black borders added to the video.
   * 
   * *   Format: width:height:left:top.
   * *   Example: 1280:800:0:140.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The scan mode. Valid values:
   * 
   * *   **interlaced**: An interlaced scan is performed.
   * *   **progressive**: A progressive scan is performed.
   * 
   * @example
   * medium
   */
  preset?: string;
  /**
   * @remarks
   * The bitrate quality control factor.
   * 
   * *   Default value if the Codec parameter is set to H.264: **23**. Default value if the Codec parameter is set to H.265: **26**.
   * *   If this parameter is returned, the setting of the Bitrate parameter is invalid.
   * 
   * @example
   * high
   */
  profile?: string;
  /**
   * @remarks
   * The method used to crop the video.
   * 
   * *   **border**: automatically detects and removes borders.
   * *   Value in the width:height:left:top format: crops the video based on custom settings.**** Example: 1280:800:0:140.
   * 
   * @example
   * 1
   */
  qscale?: string;
  /**
   * @remarks
   * The maximum number of frames between two keyframes. Default value: **250**.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The general transcoding configurations.
   * 
   * @example
   * 1
   */
  resoPriority?: string;
  /**
   * @remarks
   * The policy of resolution adjustment.
   * 
   * @example
   * interlaced
   */
  scanMode?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * *   A value of 60 is returned if the frame rate of the input video exceeds 60.
   * *   Default value: the frame rate of the input video.
   * 
   * @example
   * 256
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateBnd: 'BitrateBnd',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      hdr2sdr: 'Hdr2sdr',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
      narrowBand: 'NarrowBand',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      remove: 'Remove',
      resoPriority: 'ResoPriority',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: UpdateTemplateResponseBodyTemplateVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      hdr2sdr: 'string',
      height: 'string',
      longShortMode: 'string',
      maxFps: 'string',
      maxrate: 'string',
      narrowBand: UpdateTemplateResponseBodyTemplateVideoNarrowBand,
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      remove: 'string',
      resoPriority: 'string',
      scanMode: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.bitrateBnd && typeof (this.bitrateBnd as any).validate === 'function') {
      (this.bitrateBnd as any).validate();
    }
    if(this.narrowBand && typeof (this.narrowBand as any).validate === 'function') {
      (this.narrowBand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

