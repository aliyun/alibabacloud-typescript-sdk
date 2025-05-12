// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputVideoBitrateBnd } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputVideoBitrateBnd";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputVideo extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the output video. Unit: Kbit/s.
   * 
   * @example
   * 10
   */
  bitrate?: string;
  /**
   * @remarks
   * The average bitrate range of the video.
   */
  bitrateBnd?: SubmitJobsResponseBodyJobResultListJobResultJobOutputVideoBitrateBnd;
  /**
   * @remarks
   * The size of the buffer.
   * 
   * *   Unit: KB.
   * *   Default value: **6000**.
   * 
   * @example
   * 1000
   */
  bufsize?: string;
  /**
   * @remarks
   * The video codec.
   * 
   * *   Valid values: **H.264**, **H.265**, **GIF**, and **WEBP**.
   * *   Default value: **H.264**.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The constant rate factor.
   * 
   * *   If **Crf** is returned, the value of **Bitrate** is invalid.
   * *   Default value if the value of Codec is H.264: **23**. Default value if the value of Codec is H.265: **26**.
   * 
   * @example
   * 22
   */
  crf?: string;
  /**
   * @remarks
   * The method of video cropping. Valid values:
   * 
   * *   **border**: Black borders are automatically detected and removed.
   * *   A value in the format of width:height:left:top: The video is cropped based on the custom settings.
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
   * The frame rate.
   * 
   * *   Unit: frames per second.
   * *   Valid values: 0 to 60. The value is 60 if the frame rate of the input file exceeds 60.
   * *   Default value: the frame rate of the input file.
   * 
   * @example
   * 60
   */
  fps?: string;
  /**
   * @remarks
   * The maximum interval between keyframes or the maximum number of frames in a frame group. Unit: seconds.
   * 
   * *   Default value: 10.
   * *   If the maximum number of frames is returned, the value does not have a unit.
   * 
   * @example
   * 1
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
   * 1280
   */
  height?: string;
  /**
   * @remarks
   * The maximum frame rate.
   * 
   * @example
   * 15
   */
  maxFps?: string;
  /**
   * @remarks
   * The maximum bitrate of the video. Unit: Kbit/s.
   * 
   * @example
   * 10
   */
  maxrate?: string;
  /**
   * @remarks
   * The black borders that are added to the video.
   * 
   * *   The value is in the width:height:left:top format.
   * *   Unit: pixel.
   * 
   * @example
   * 1280:800:0:140
   */
  pad?: string;
  /**
   * @remarks
   * The pixel format of the video.
   * 
   * *   The default pixel format can be **yuv420p** or the pixel format of the input file.
   * 
   * *   Valid values: standard pixel formats such as **yuv420p** and **yuvj420p**.
   * 
   *     **
   * 
   *     **Note** If a non-standard pixel format such as yuvj420p(pc, bt470bg/bt470bg/smpte170m) is used, compatibility with the pixel format must be configured. Otherwise, the transcoding job fails.
   * 
   * @example
   * yuvj420p
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
   * veryfast
   */
  preset?: string;
  /**
   * @remarks
   * The encoding profile. This parameter is returned only for the H.264 codec. Default value: **high**. Valid values:
   * 
   * >  If multiple definitions are involved, we recommend that you use baseline for the lowest definition to ensure normal playback on low-definition devices, and use main or high for other definitions.
   * 
   * *   **baseline**: applicable to mobile devices.
   * *   **main**: applicable to standard-definition devices.
   * *   **high**: applicable to high-definition devices.
   * 
   * @example
   * baseline
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
   * *   Default value: **the width of the input video**.
   * 
   * @example
   * 1080
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
      bitrateBnd: SubmitJobsResponseBodyJobResultListJobResultJobOutputVideoBitrateBnd,
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

