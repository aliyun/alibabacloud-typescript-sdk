// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputVideoBitrateBnd } from "./ListJobResponseBodyJobListJobOutputVideoBitrateBnd";


export class ListJobResponseBodyJobListJobOutputVideo extends $dara.Model {
  /**
   * @remarks
   * The average bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 428
   */
  bitrate?: string;
  /**
   * @remarks
   * The bitrate range of the video.
   */
  bitrateBnd?: ListJobResponseBodyJobListJobOutputVideoBitrateBnd;
  /**
   * @remarks
   * The size of the buffer.
   * 
   * @example
   * 6000
   */
  bufsize?: string;
  /**
   * @remarks
   * The video codec. Valid values: **H.264**, **H.265**, **GIF**, and **WEBP**.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The constant rate factor. If this parameter is returned, the value of Bitrate is invalid. Default value: **26**.
   * 
   * @example
   * 26
   */
  crf?: string;
  /**
   * @remarks
   * The video cropping mode. Valid values:
   * 
   * *   **border**: automatically detects and removes black borders.
   * *   A value in the width:height:left:top format: crops the videos based on the custom settings. Example: 1280:800:0:140.
   * 
   * @example
   * border
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
   * The frame rate.
   * 
   * *   The value is 60 if the frame rate of the input video exceeds 60.
   * *   Default value: the frame rate of the input file.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The maximum number of frames between two keyframes. Default value: 250.
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
   * 1000
   */
  maxrate?: string;
  /**
   * @remarks
   * The black borders that are added to the video. Unit: pixel.
   * 
   * *   Format: width:height:left:top.
   * *   Example: 1280:800:0:140.
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
   * The preset video algorithm. Default value: medium. Valid values:
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
   * The priority of the resource.
   * 
   * @example
   * 1
   */
  resoPriority?: string;
  /**
   * @remarks
   * The scan mode. Valid values:
   * 
   * *   If this parameter is **empty**, the scan mode of the input file is used.
   * *   **auto**: automatic deinterlacing.
   * *   **progressive**: progressive scan.
   * *   **interlaced**: interlaced scan.
   * *   **By default**, this parameter is empty.
   * 
   * **Best practice**: Interlaced scan consumes less bandwidth than progressive scan, but the image quality is poor. Therefore, mainstream video production uses progressive scan.
   * 
   * *   If **progressive scan** or **interlaced scan** is used when the scan mode of the input file is neither of them, the transcoding job fails.
   * *   We recommend that you use **the scan mode of the input file** or **automatic deinterlacing** to improve compatibility.
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
      bitrateBnd: ListJobResponseBodyJobListJobOutputVideoBitrateBnd,
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

