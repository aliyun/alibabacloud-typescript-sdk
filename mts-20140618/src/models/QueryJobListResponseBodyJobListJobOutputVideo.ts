// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputVideoBitrateBnd } from "./QueryJobListResponseBodyJobListJobOutputVideoBitrateBnd";


export class QueryJobListResponseBodyJobListJobOutputVideo extends $dara.Model {
  /**
   * @remarks
   * The average bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 500
   */
  bitrate?: string;
  /**
   * @remarks
   * The average bitrate range of the video.
   */
  bitrateBnd?: QueryJobListResponseBodyJobListJobOutputVideoBitrateBnd;
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
   * The video codec.
   * 
   * *   Valid values: H.264 and H.265.
   * *   Default value: H.264.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The constant rate factor.
   * 
   * *   Default value when the value of Codec is H.264: **23**, default value when the value of Codec is H.265: **26**.
   * *   If the value of this parameter is returned, the value of Bitrate becomes invalid.
   * 
   * @example
   * 26
   */
  crf?: string;
  /**
   * @remarks
   * The method of video cropping. Valid values:
   * 
   * *   **border**: automatically detects and removes borders.
   * *   A value in the width:height:left:top format: The video image is cropped based on custom settings.
   * 
   * @example
   * 1280:800:0:140
   */
  crop?: string;
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
   * *   Unit: frames per second.
   * *   The value is 60 if the frame rate of the input file exceeds 60.
   * *   Default value: the frame rate of the input video.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The maximum interval between keyframes or the maximum number of frames in a frame group. Unit: seconds.
   * 
   * *   Default value: **250**.
   * *   If the maximum number of frames is returned, the value does not contain a unit.
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
   * *   Default value: the height of the input video.
   * 
   * @example
   * 720
   */
  height?: string;
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
   * 3000
   */
  maxrate?: string;
  /**
   * @remarks
   * The black bars that are added to the video.
   * 
   * *   Unit: pixel.
   * *   Format: width:height:left:top.
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
   * The preset video algorithm. Default value: **medium**. Valid values:
   * 
   * *   **veryfast**
   * *   **fast**
   * *   **medium**
   * *   **slow**
   * *   **slower**
   * 
   * @example
   * medium
   */
  preset?: string;
  /**
   * @remarks
   * The codec profile of the video. Valid values: baseline, main, and high.
   * 
   * >  If multiple definitions are involved, we recommend that you use baseline for the lowest definition to ensure normal playback on low-end devices, and use main or high for other definitions.
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
   * The resource priority.
   * 
   * @example
   * 1
   */
  resoPriority?: string;
  /**
   * @remarks
   * The scan mode. Valid values:
   * 
   * *   If this parameter is left **empty**, the scan mode of the input video is used.
   * *   **auto**: automatic deinterlacing.
   * *   **progressive**: progressive scan.
   * *   **interlaced**: interlaced scan.
   * *   **By default**, this parameter is left empty.
   * 
   * **Best practice**: The interlaced scan mode saves data traffic than the progressive scan mode but provides poor image quality. Therefore, the progressive scan mode is commonly used in mainstream video production.
   * 
   * *   If **progressive** or **interlaced** is used when the scan mode of the input video is neither of them, the transcoding job fails.
   * *   We recommend that you use **the scan mode of the input video** or **automatic deinterlacing** for higher compatibility.
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
   * *   Default value: the width of the input video.
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
      crop: 'Crop',
      degrain: 'Degrain',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
      pad: 'Pad',
      pixFmt: 'PixFmt',
      preset: 'Preset',
      profile: 'Profile',
      qscale: 'Qscale',
      resoPriority: 'ResoPriority',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      bitrateBnd: QueryJobListResponseBodyJobListJobOutputVideoBitrateBnd,
      bufsize: 'string',
      codec: 'string',
      crf: 'string',
      crop: 'string',
      degrain: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      maxFps: 'string',
      maxrate: 'string',
      pad: 'string',
      pixFmt: 'string',
      preset: 'string',
      profile: 'string',
      qscale: 'string',
      resoPriority: 'string',
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

