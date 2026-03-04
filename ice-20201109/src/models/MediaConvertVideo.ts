// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertVideo extends $dara.Model {
  /**
   * @remarks
   * The average bitrate of the output. If you use the CRB, ABR, or VBR bitrate control mode, you must specify Bitrate, and you must set TransMode to a valid value.
   * 
   * *   Unit: Kbps.
   * *   Valid values: -1 and [10,50000]. A value of -1 indicates that the original bitrate of the input is used.
   * 
   * Best practices:
   * 
   * *   CBR: Set TransMode to CBR and Bitrate, Maxrate, and Bufsize to the same value.
   * *   ABR: Set TransMode to onepass and specify Bitrate. You can also specify Maxrate and Bufsize to control the bitrate range.
   * *   VBR: Set TransMode to twopass and specify Maxrate/BitrateBnd and Bufsize.
   * 
   * @example
   * 6000
   */
  bitrate?: number;
  /**
   * @remarks
   * The buffer size. It controls bitrate fluctuations. A larger value allows for more bitrate variation and potentially higher video quality.
   * 
   * *   Unit: Kbps.
   * *   Valid values: [1000,128000].
   * *   Default value: 6000.
   * 
   * @example
   * 20000
   */
  bufsize?: number;
  /**
   * @remarks
   * The video codec.
   * 
   * *   Valid values: H.264, H.265, AV1, GIF, and WEBP.
   * *   Default value: H.264.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The quality control factor. To use the CRF mode, you must specify Crf and set TransMode to fixCRF. A larger value means lower quality and a higher compression ratio.
   * 
   * *   Valid values: [20,51].
   * *   If Codec is set to H.264, the default value is 23. If Codec is set to H.265, the default value is 26. If Codec is set to AV1, the default value is 32.
   * 
   * Best Practice:
   * 
   * *   A value of 0 specifies lossless quality. A value of 51 specifies the worst quality. A recommended range is [23, 29]. You can adjust the value based on the complexity of the image. If you increase the value by six, the bitrate is reduced by half. Under the same definition, you can set the value for an animated cartoon higher than that for a shot video.
   * *   CRF targets perceptual quality, not a fixed bitrate. Use it with Maxrate and Bufsize to control bitrate fluctuations.
   * 
   * @example
   * 23
   */
  crf?: any;
  /**
   * @remarks
   * Crops the video frame. You can set automatic black border removal or custom cropping.
   * 
   * *   Specify this parameter if the input resolution is greater than the output resolution. Do not specify AdjDarMethod if this parameter is specified.
   * 
   * *   To automatically remove black borders, set this parameter to border.
   * 
   * *   To use custom cropping, set the parameter in the format of {width}:{height}:{left}:{top}.
   * 
   *     *   width: the width of the output video.
   *     *   height: the height of the output video.
   *     *   left: the distance between the left border of the output and that of the original frame.
   *     *   top: the distance between the top border of the output and that of the original frame.
   * 
   * Example: 1920:800:0:140.
   * 
   * @example
   * 1920:800:0:140
   */
  crop?: string;
  /**
   * @remarks
   * The frame rate of the video stream.
   * 
   * *   Unit: frames per second (FPS).
   * *   Valid values: (0,60].
   * *   Default value: the frame rate of the input file. If the original frame rate exceeds 60 FPS, 60 is used.
   * *   Recommended values: 24, 25, and 30.
   * 
   * @example
   * 25
   */
  fps?: any;
  /**
   * @remarks
   * The keyframe interval.
   * 
   * *   Set by time: The time interval, in seconds. Valid values: [1,100000].
   * *   Set by frame count: The number of frames. Valid values: [1,100000].
   * *   Default value: 10s.
   * 
   * Best practice: Set this parameter to 2-7s to improve the Time-to-First-Frame and seeking performance.
   * 
   * @example
   * 10s
   */
  gop?: any;
  /**
   * @remarks
   * The height or short edge of the output. If LongShortMode is set to false or left empty, this parameter specifies the height of the output. If LongShortMode is set to true, this parameter specifies the short edge of the output.
   * 
   * *   Unit: pixel.
   * 
   * *   Valid values: [128,4096]. The value must be an even number.
   * 
   * *   Default value:
   * 
   *     *   If neither Width nor Height is specified, the dimension of the input is used.
   *     *   If only Width is specified, Height is auto-scaled.
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * Specifies whether to enable orientation-adaptive scaling. This parameter takes effect if at least one of the Width and Height parameters is specified. Valid values:
   * 
   * *   true
   * *   false
   * *   Default value: false.
   * 
   * Best practice: Enable this feature when your inputs include both horizontal and vertical videos. This prevents videos from stretching.
   * 
   * @example
   * true
   */
  longShortMode?: boolean;
  /**
   * @remarks
   * The maximum frame rate.
   * 
   * @example
   * 25
   */
  maxFps?: any;
  /**
   * @remarks
   * The maximum bitrate of the output.
   * 
   * *   Unit: Kbps.
   * *   Valid values: [10,50000].
   * 
   * @example
   * 10000
   */
  maxrate?: number;
  /**
   * @remarks
   * The black borders added to the video.
   * 
   * *   Specify this parameter if the input resolution is smaller than the output resolution. If you specify this parameter, do not specify IsCheckReso, IsCheckResoFail, or AdjDarMethod.
   * 
   * *   Format: {width}:{height}:{left}:{top}.
   * 
   *     *   width: the width of the output video.
   *     *   height: the height of the output video.
   *     *   left: the distance between the left border of the output and that of the original frame.
   *     *   top: the distance between the top border of the output and that of the original frame.
   * 
   * Example: 1920:1080:0:140.
   * 
   * @example
   * 1920:1080:0:140
   */
  pad?: string;
  /**
   * @remarks
   * The codec profile.
   * 
   * *   This parameter takes effect only if Codec is set to H.264.
   * *   Valid values: baseline, main, and high.
   * *   Default value: high.
   * 
   * Best practice: For multi-bitrate streaming, use baseline for the lowest quality rendition to ensure maximum compatibility with older devices. Use main or high for other renditions.
   * 
   * @example
   * high
   */
  profile?: string;
  /**
   * @remarks
   * The video quality scale. This parameter applies to VBR mode. A higher value means lower video quality and a higher compression ratio.
   * 
   * *   This parameter takes effect only if Codec is set to H.264.
   * *   Valid values: [0,51].
   * 
   * @example
   * 13
   */
  qscale?: number;
  /**
   * @remarks
   * Specifies whether to delete the video stream. Valid values:
   * 
   * *   true: deletes the video stream. All video-related parameters are invalid.
   * *   false: retains the video stream.
   * *   Default value: false.
   * 
   * @example
   * false
   */
  remove?: boolean;
  /**
   * @remarks
   * The scan mode. Valid values:
   * 
   * *   If you leave this parameter empty, the output follows the source\\"s original scan mode.
   * *   auto: automatic deinterlacing
   * *   progressive
   * *   interlaced
   * *   By default, this parameter is left empty.
   * 
   * Best practice: The interlaced scan mode saves data traffic than the progressive scan mode but provides poor image quality. Therefore, the latter is commonly used in mainstream video production.
   * 
   * *   If you set ScanMode to progressive or interlaced, but this scan mode does not match that of the input, the video fails to be transcoded.
   * *   To improve compatibility, leave this parameter empty or set it to auto.
   * 
   * @example
   * auto
   */
  scanMode?: string;
  /**
   * @remarks
   * The width or long edge of the output. If LongShortMode is set to false or left empty, this parameter specifies the width of the output. If LongShortMode is set to true, this parameter specifies the long edge of the output.
   * 
   * *   Unit: pixel.
   * 
   * *   Valid values: [128,4096]. The value must be an even number.
   * 
   * *   Default value:
   * 
   *     *   If neither Width nor Height is specified, the dimension of the input is used.
   *     *   If only Height is specified, Width is auto-scaled.
   * 
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bufsize: 'Bufsize',
      codec: 'Codec',
      crf: 'Crf',
      crop: 'Crop',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      longShortMode: 'LongShortMode',
      maxFps: 'MaxFps',
      maxrate: 'Maxrate',
      pad: 'Pad',
      profile: 'Profile',
      qscale: 'Qscale',
      remove: 'Remove',
      scanMode: 'ScanMode',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      bufsize: 'number',
      codec: 'string',
      crf: 'any',
      crop: 'string',
      fps: 'any',
      gop: 'any',
      height: 'number',
      longShortMode: 'boolean',
      maxFps: 'any',
      maxrate: 'number',
      pad: 'string',
      profile: 'string',
      qscale: 'number',
      remove: 'boolean',
      scanMode: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

