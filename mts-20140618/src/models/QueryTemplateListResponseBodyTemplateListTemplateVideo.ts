// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTemplateListResponseBodyTemplateListTemplateVideoBitrateBnd } from "./QueryTemplateListResponseBodyTemplateListTemplateVideoBitrateBnd";
import { QueryTemplateListResponseBodyTemplateListTemplateVideoNarrowBand } from "./QueryTemplateListResponseBodyTemplateListTemplateVideoNarrowBand";


export class QueryTemplateListResponseBodyTemplateListTemplateVideo extends $dara.Model {
  /**
   * @remarks
   * The average bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 200
   */
  bitrate?: string;
  /**
   * @remarks
   * The average bitrate range of the video.
   */
  bitrateBnd?: QueryTemplateListResponseBodyTemplateListTemplateVideoBitrateBnd;
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
   * The codec. Default value: **H.264**.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The constant rate factor.
   * 
   * *   Default value when the encoding format is H.264: **23**. Default value when the encoding format is H.265: **26**.
   * *   If this parameter is set, the value of Bitrate becomes invalid.
   * 
   * @example
   * 15
   */
  crf?: string;
  /**
   * @remarks
   * The method of video cropping. Valid values:
   * 
   * *   **border**: automatically detects and removes black bars.
   * *   **Value in the width:height:left:top format**: crops the video based on custom settings. Format: width:height:left:top. Example: 1280:800:0:140.
   * 
   * @example
   * border
   */
  crop?: string;
  /**
   * @remarks
   * The level of video quality control.
   * 
   * @example
   * 10
   */
  degrain?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * *   The value is 60 if the frame rate of the input file exceeds 60.
   * *   Default value: **the frame rate of the input file**.
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
   * The height of the video.
   * 
   * *   Unit: pixel.
   * *   Default value: **the height of the input video**.
   * 
   * @example
   * 800
   */
  height?: string;
  /**
   * @remarks
   * Indicates whether the auto-rotate screen feature is enabled.
   * 
   * *   If this feature is enabled, the width of the output video corresponds to the long side of the input video, which is the height of the input video in portrait mode. The height of the output video corresponds to the short side of the input video, which is the width of the input video in portrait mode. Valid values:
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
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
  narrowBand?: QueryTemplateListResponseBodyTemplateListTemplateVideoNarrowBand;
  /**
   * @remarks
   * The black bars that are added to the video. Format: width:height:left:top. Example: 1280:800:0:140.
   * 
   * @example
   * 1280:800:0:140
   */
  pad?: string;
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
   * The encoding profile. Valid values:
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
   * The strength of the independent denoising algorithm.
   * 
   * @example
   * 1
   */
  qscale?: string;
  /**
   * @remarks
   * Indicates whether the video stream is deleted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The policy of resolution adjustment. Valid values: cropFirst, widthFirst, and heightFirst.
   * 
   * @example
   * heightFirst
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
   * *   Unit: pixel.
   * *   Default value: **the width of the input video**.
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
      bitrateBnd: QueryTemplateListResponseBodyTemplateListTemplateVideoBitrateBnd,
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
      narrowBand: QueryTemplateListResponseBodyTemplateListTemplateVideoNarrowBand,
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

