// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddTemplateResponseBodyTemplateVideoBitrateBnd } from "./AddTemplateResponseBodyTemplateVideoBitrateBnd";
import { AddTemplateResponseBodyTemplateVideoNarrowBand } from "./AddTemplateResponseBodyTemplateVideoNarrowBand";


export class AddTemplateResponseBodyTemplateVideo extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the output video. Unit: Kbit/s.
   * 
   * @example
   * 500
   */
  bitrate?: string;
  /**
   * @remarks
   * The bitrate range of the video.
   */
  bitrateBnd?: AddTemplateResponseBodyTemplateVideoBitrateBnd;
  /**
   * @remarks
   * The size of the buffer.
   * 
   * *   Default value: **6000**.
   * *   Unit: KB.
   * 
   * @example
   * 6000
   */
  bufsize?: string;
  /**
   * @remarks
   * The video codec. Valid values: H.264, H.265, GIF, and WebP. Default value: **H.264**.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The constant rate factor. Default value if the video codec is set to H.264: **23**. Default value if the video codec is set to H.265: **26**.
   * 
   * > If this parameter is specified, the setting of the Bitrate parameter becomes invalid.
   * 
   * @example
   * 15
   */
  crf?: string;
  /**
   * @remarks
   * The method of video cropping. Valid values:
   * 
   * *   **border**: automatically detects and removes borders.
   * *   **Value in the format of width:height:left:top**: crops the video image based on the custom settings. Example: 1280:800:0:140.
   * 
   * @example
   * border
   */
  crop?: string;
  /**
   * @remarks
   * The level of quality control on the video.
   * 
   * @example
   * 10
   */
  degrain?: string;
  /**
   * @remarks
   * The frame rate. Default value: the frame rate of the input file. The value is 60 if the frame rate of the input file exceeds 60. Unit: frames per second.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The GOP size. The GOP size can be the maximum interval of keyframes or the maximum number of frames in a frame group. If the maximum interval is specified, the value contains the unit (s). If the maximum number of frames is specified, the value does not contain a unit. Default value: **10s**.
   * 
   * @example
   * 10s
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
   * The height of the video.
   * 
   * *   Unit: pixel.
   * *   Default value: the height of the input video.
   * 
   * @example
   * 800
   */
  height?: string;
  /**
   * @remarks
   * Indicates whether the auto-rotate screen feature is enabled. Default value: **false**. Valid values:
   * 
   * *   **true**: The auto-rotate screen feature is enabled.
   * *   **false**: The auto-rotate screen feature is disabled.
   * 
   * > If this feature is enabled, the width of the output video corresponds to the long side of the input video, which is the height of the input video in portrait mode. The height of the output video corresponds to the short side of the input video, which is the width of the input video in portrait mode.
   * 
   * @example
   * false
   */
  longShortMode?: string;
  /**
   * @remarks
   * The maximum frame rate.
   * 
   * @example
   * 60
   */
  maxFps?: string;
  /**
   * @remarks
   * The maximum bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 500
   */
  maxrate?: string;
  /**
   * @remarks
   * The Narrowband HD settings.
   */
  narrowBand?: AddTemplateResponseBodyTemplateVideoNarrowBand;
  /**
   * @remarks
   * The black borders to be added to the video. The value is in the width:height:left:top format.
   * 
   * @example
   * 1280:800:0:140
   */
  pad?: string;
  /**
   * @remarks
   * The pixel format. Standard pixel formats such as yuv420p and yuvj420p are supported. The default pixel format can be **yuv420p** or the pixel format of the input video.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
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
   * > This parameter is valid only if the Codec parameter is set to H.264.
   * 
   * @example
   * fast
   */
  preset?: string;
  /**
   * @remarks
   * The codec profile.
   * 
   * *   **baseline**: suitable for mobile devices
   * *   **main**: suitable for standard-definition devices
   * *   **high**: suitable for high-definition devices
   * *   Default value: **high**.
   * 
   * If multiple definitions are available, we recommend that you set this parameter to baseline for the lowest definition to ensure normal playback on low-end devices. Set this parameter to main or high for other definitions.
   * 
   * > This parameter is valid only if the Codec parameter is set to H.264.
   * 
   * @example
   * high
   */
  profile?: string;
  /**
   * @remarks
   * The level of the independent denoising algorithm.
   * 
   * @example
   * 1
   */
  qscale?: string;
  /**
   * @remarks
   * Indicates whether the video stream is deleted.
   * 
   * *   **true**: The video stream is deleted.
   * *   **false**: The video stream is retained.
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The policy of resolution adjustment.
   * 
   * @example
   * 0
   */
  resoPriority?: string;
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
   * *   Default value: the width of the input video.****
   * *   Unit: pixel.
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
      bitrateBnd: AddTemplateResponseBodyTemplateVideoBitrateBnd,
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
      narrowBand: AddTemplateResponseBodyTemplateVideoNarrowBand,
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

