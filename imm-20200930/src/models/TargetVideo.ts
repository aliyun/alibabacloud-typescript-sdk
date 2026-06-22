// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetVideoFilterVideoDelogos extends $dara.Model {
  /**
   * @remarks
   * The duration for which the mosaic is displayed, in seconds (s). By default, the mosaic is displayed until the end of the video.
   * 
   * @example
   * 15
   */
  duration?: number;
  /**
   * @remarks
   * The meaning of this parameter varies depending on whether the value is an integer or a decimal:
   * 
   * - 0 (default): The pixel offset is 0. The ratio of the horizontal offset to the output video width is also 0.
   * 
   * - Integer: The offset in pixels (px). The value ranges from 1 to 4096.
   * 
   * - Decimal: The ratio of the horizontal offset to the output video width. The value ranges from (0, 1).
   * 
   * @example
   * 0
   */
  dx?: number;
  /**
   * @remarks
   * The default value is 0. The meaning of this parameter varies depending on whether the value is an integer or a decimal:
   * 
   * - 0 (default): The pixel offset is 0. The ratio of the vertical offset to the output video height is also 0.
   * 
   * - Integer: The offset in pixels (px). The value ranges from 1 to 4096.
   * 
   * - Decimal: The ratio of the vertical offset to the output video height. The value ranges from (0, 1).
   * 
   * @example
   * 0
   */
  dy?: number;
  /**
   * @remarks
   * The height of the mosaic. The default value is the decimal 1.0, which means it fills the entire height of the output video. The meaning of this parameter varies depending on whether the value is an integer or a decimal:
   * 
   * - Integer: The height in pixels (px). The value ranges from 1 to 4096.
   * 
   * - Decimal: The ratio of the mosaic height to the output video height. The value ranges from (0, 1).
   * 
   * @example
   * 40
   */
  height?: number;
  /**
   * @remarks
   * The reference position for adding the mosaic. Valid values:
   * 
   * - topleft (default): The top-left corner.
   * 
   * - topright: The top-right corner.
   * 
   * - bottomright: The bottom-right corner.
   * 
   * - bottomleft: The bottom-left corner.
   * 
   * @example
   * topleft
   */
  referPos?: string;
  /**
   * @remarks
   * The start time for adding the mosaic, in seconds (s). By default, the mosaic is added from the beginning of the video.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The width of the mosaic. The default value is the decimal 1.0, which means it fills the entire width of the output video. The meaning of this parameter varies depending on whether the value is an integer or a decimal:
   * 
   * - Integer: The width in pixels (px). The value ranges from 1 to 4096.
   * 
   * - Decimal: The ratio of the mosaic width to the output video width. The value ranges from (0, 1).
   * 
   * @example
   * 100
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      referPos: 'ReferPos',
      startTime: 'StartTime',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      dx: 'number',
      dy: 'number',
      height: 'number',
      referPos: 'string',
      startTime: 'number',
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

export class TargetVideoFilterVideoDesensitizationFace extends $dara.Model {
  /**
   * @remarks
   * The confidence threshold for facial recognition. This sets the lower limit for the confidence level. If the confidence level of a detected face is below this threshold, the face is not desensitized.
   * 
   * - Value range: 0.0 to 1.0.
   * 
   * - Default value: 0.0 (no confidence filtering).
   * 
   * @example
   * 0.4
   */
  confidence?: number;
  /**
   * @remarks
   * The minimum face size threshold. This sets the minimum size for a face to be desensitized. If the width or height of a detected face is smaller than this threshold, the face is not desensitized. The unit is pixels. The default value is 0, which means there is no restriction on face size.
   * 
   * @example
   * 0.4
   */
  minSize?: number;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      minSize: 'MinSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      minSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideoFilterVideoDesensitizationLicensePlate extends $dara.Model {
  /**
   * @remarks
   * The confidence threshold for license plate recognition. This sets the lower limit for the confidence level. If the confidence level of a detected license plate is below this threshold, the license plate is not desensitized.
   * 
   * - Value range: 0.0 to 1.0.
   * 
   * - Default value: 0.0 (no confidence filtering).
   * 
   * @example
   * 0.4
   */
  confidence?: number;
  /**
   * @remarks
   * The minimum license plate size threshold. This sets the minimum size for a license plate to be desensitized. If the width or height of a detected license plate is smaller than this threshold, the license plate is not desensitized. The unit is pixels. The default value is 0, which means there is no restriction on license plate size.
   * 
   * @example
   * 0.4
   */
  minSize?: number;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      minSize: 'MinSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      minSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideoFilterVideoDesensitization extends $dara.Model {
  /**
   * @remarks
   * The facial desensitization configuration.
   * 
   * > This feature is in public preview. If you have any questions, join the DingTalk group for feedback. For the DingTalk group number, see [Contact us](https://help.aliyun.com/document_detail/84454.html).
   */
  face?: TargetVideoFilterVideoDesensitizationFace;
  /**
   * @remarks
   * The license plate desensitization configuration.
   * 
   * > This feature is in public preview. If you have any questions, join the DingTalk group for feedback. For the DingTalk group number, see [Contact us](https://help.aliyun.com/document_detail/84454.html).
   */
  licensePlate?: TargetVideoFilterVideoDesensitizationLicensePlate;
  static names(): { [key: string]: string } {
    return {
      face: 'Face',
      licensePlate: 'LicensePlate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      face: TargetVideoFilterVideoDesensitizationFace,
      licensePlate: TargetVideoFilterVideoDesensitizationLicensePlate,
    };
  }

  validate() {
    if(this.face && typeof (this.face as any).validate === 'function') {
      (this.face as any).validate();
    }
    if(this.licensePlate && typeof (this.licensePlate as any).validate === 'function') {
      (this.licensePlate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideoFilterVideoWatermarks extends $dara.Model {
  /**
   * @remarks
   * The outline color of the watermark text. The format is #RRGGBB. The default value is #000000. You can also enter values such as "red" or "green".
   * 
   * >Notice: 
   * 
   * This parameter is effective only when the `Type` parameter is set to `text`.
   * 
   * @example
   * red
   */
  borderColor?: string;
  /**
   * @remarks
   * The outline width for the text watermark, in pixels (px). The value must be an integer from 0 to 4096. The default value is 0.
   * 
   * >Notice: 
   * 
   * This parameter is effective only when the `Type` parameter is set to `text`.
   * 
   * @example
   * 2
   */
  borderWidth?: number;
  /**
   * @remarks
   * The content of the text watermark. The default value is empty.
   * 
   * >Notice: 
   * 
   * This parameter is effective only when the `Type` parameter is set to `text`.
   * 
   * @example
   * example
   */
  content?: string;
  /**
   * @remarks
   * The duration for which the watermark is displayed, in seconds (s). By default, the watermark is displayed until the end of the video.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * The meaning of this parameter varies depending on whether the value is an integer or a decimal:
   * 
   * - 0 (default): The pixel offset is 0. The ratio of the horizontal offset to the output video width is also 0.
   * 
   * - Integer: The offset in pixels (px). The value ranges from 1 to 4096.
   * 
   * - Decimal: The ratio of the horizontal offset to the output video width. The value ranges from (0, 1).
   * 
   * @example
   * 0
   */
  dx?: number;
  /**
   * @remarks
   * The meaning of this parameter varies depending on whether the value is an integer or a decimal:
   * 
   * - 0 (default): The pixel offset is 0. The ratio of the vertical offset to the output video height is also 0.
   * 
   * - Integer: The offset in pixels (px). The value ranges from 1 to 4096.
   * 
   * - Decimal: The ratio of the vertical offset to the output video height. The value ranges from (0, 1).
   * 
   * @example
   * 0
   */
  dy?: number;
  /**
   * @remarks
   * The font opacity of the text watermark. The value ranges from (0, 1]. The default value is 1, which means fully opaque.
   * 
   * >Notice: 
   * 
   * This parameter is effective only when the `Type` parameter is set to `text`.
   * 
   * @example
   * 0.8
   */
  fontApha?: number;
  /**
   * @remarks
   * The font color of the watermark text. The format is #RRGGBB. The default value is #000000. You can also enter values such as "red" or "green".
   * 
   * >Notice: 
   * 
   * This parameter is effective only when the `Type` parameter is set to `text`.
   * 
   * @example
   * red
   */
  fontColor?: string;
  /**
   * @remarks
   * The font name for the text watermark. Valid values:
   * 
   * - SourceHanSans-Regular (default)
   * 
   * - SourceHanSans-Bold
   * 
   * - SourceHanSerif-Regular
   * 
   * - SourceHanSerif-Bold
   * 
   * >Notice: 
   * 
   * This parameter is effective only when the `Type` parameter is set to `text`.
   * 
   * @example
   * SourceHanSans-Bold
   */
  fontName?: string;
  /**
   * @remarks
   * The font size for the text watermark. The default value is 16. The value must be an integer in the range (4, 120).
   * 
   * >Notice: 
   * 
   * This parameter is effective only when the `Type` parameter is set to `text`.
   * 
   * @example
   * 18
   */
  fontSize?: number;
  /**
   * @remarks
   * The height of the watermark image. By default, this is the height of the original watermark image. The meaning of this parameter varies depending on whether the value is an integer or a decimal:
   * 
   * - Integer: The height of the watermark in pixels (px). The value ranges from 1 to 4096.
   * 
   * - Decimal: The ratio of the watermark height to the output video height. The value ranges from (0, 1).
   * 
   * @example
   * 40
   */
  height?: number;
  /**
   * @remarks
   * The reference position for adding the watermark. Valid values:
   * 
   * - topleft (default): The top-left corner.
   * 
   * - topright: The top-right corner.
   * 
   * - bottomright: The bottom-right corner.
   * 
   * - bottomleft: The bottom-left corner.
   * 
   * @example
   * topleft
   */
  referPos?: string;
  /**
   * @remarks
   * The start time for adding the watermark, in seconds (s). By default, the watermark is added from the beginning of the video.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The watermark type. Valid values:
   * 
   * - text (default): A text watermark.
   * 
   * - file: An image or animated image watermark.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The OSS URL of the watermark file. Supported formats are PNG and MOV.
   * 
   * The OSS URL must follow the format `oss://<bucket>/<object>`, where `<bucket>` is the name of an OSS bucket in the same region as the current project, and `<object>` is the full path of the file, including the file name extension.
   * 
   * >Notice: 
   * 
   * This parameter is effective only when the `Type` parameter is set to `file`.
   * 
   * @example
   * oss://test-bucket/watermark.jpg
   */
  URI?: string;
  /**
   * @remarks
   * The width of the watermark image. By default, this is the width of the original watermark image. The meaning of this parameter varies depending on whether the value is an integer or a decimal:
   * 
   * - Integer: The width of the watermark in pixels (px). The value ranges from 1 to 4096.
   * 
   * - Decimal: The ratio of the watermark width to the output video width. The value ranges from (0, 1).
   * 
   * @example
   * 80
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      content: 'Content',
      duration: 'Duration',
      dx: 'Dx',
      dy: 'Dy',
      fontApha: 'FontApha',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSize: 'FontSize',
      height: 'Height',
      referPos: 'ReferPos',
      startTime: 'StartTime',
      type: 'Type',
      URI: 'URI',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      borderColor: 'string',
      borderWidth: 'number',
      content: 'string',
      duration: 'number',
      dx: 'number',
      dy: 'number',
      fontApha: 'number',
      fontColor: 'string',
      fontName: 'string',
      fontSize: 'number',
      height: 'number',
      referPos: 'string',
      startTime: 'number',
      type: 'string',
      URI: 'string',
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

export class TargetVideoFilterVideo extends $dara.Model {
  /**
   * @remarks
   * Blurs a rectangular area of the video to remove logos, station icons, and other elements.
   */
  delogos?: TargetVideoFilterVideoDelogos[];
  /**
   * @remarks
   * The video desensitization configuration.
   * 
   * >Notice: 
   * 
   * - This parameter applies only to the CreateMediaConvertTask API.
   */
  desensitization?: TargetVideoFilterVideoDesensitization;
  /**
   * @remarks
   * The video playback speed setting. The value ranges from 0.5 to 1.0. The default value is 1.0.
   * 
   * > - This is the ratio of the default playback speed of the transcoded media file to that of the source media file. This is not a high-speed transcoding feature.
   * 
   * >Notice: 
   * 
   * - This parameter applies only to the CreateMediaConvertTask API.
   * 
   * @example
   * 1.0
   */
  speed?: number;
  /**
   * @remarks
   * A list of video watermarks.
   */
  watermarks?: TargetVideoFilterVideoWatermarks[];
  static names(): { [key: string]: string } {
    return {
      delogos: 'Delogos',
      desensitization: 'Desensitization',
      speed: 'Speed',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delogos: { 'type': 'array', 'itemType': TargetVideoFilterVideoDelogos },
      desensitization: TargetVideoFilterVideoDesensitization,
      speed: 'number',
      watermarks: { 'type': 'array', 'itemType': TargetVideoFilterVideoWatermarks },
    };
  }

  validate() {
    if(Array.isArray(this.delogos)) {
      $dara.Model.validateArray(this.delogos);
    }
    if(this.desensitization && typeof (this.desensitization as any).validate === 'function') {
      (this.desensitization as any).validate();
    }
    if(Array.isArray(this.watermarks)) {
      $dara.Model.validateArray(this.watermarks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideoTranscodeVideo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable adaptive resolution for long and short edges. Valid values:
   * 
   * - true: Yes. In this case, the format for the **Resolution** parameter is `long edge × short edge`.
   * 
   * - false (default): No. In this case, the format for the **Resolution** parameter is `width × height`.
   * 
   * @example
   * true
   */
  adaptiveResolutionDirection?: boolean;
  /**
   * @remarks
   * The number of consecutive B-frames. The default value is 3.
   * 
   * @example
   * 3
   */
  BFrames?: number;
  /**
   * @remarks
   * The video stream bitrate in bits per second (bit/s).
   * 
   * > This parameter is mutually exclusive with **CRF**. If both this parameter and the **CRF** parameter are empty, the system encodes the video with a CRF value of 23.
   * 
   * @example
   * 128000
   */
  bitrate?: number;
  /**
   * @remarks
   * The video bitrate option. Valid values:
   * 
   * - fixed: Always uses the specified target video bitrate.
   * 
   * - adaptive: Uses the source video bitrate if it is lower than the specified target video bitrate.
   * 
   * - fall: The task fails if the source video bitrate is lower than the specified target video bitrate.
   * 
   * Default value:
   * 
   * - For the CreateMediaConvert API, the default value is fixed.
   * 
   * - For the GenerateVideoPlaylist API, the default value is adaptive.
   * 
   * > This parameter must be set together with the **Bitrate** parameter.
   * 
   * @example
   * fixed
   */
  bitrateOption?: string;
  /**
   * @remarks
   * The size of the decoding buffer for dynamic bitrate, in bits per second (bps).
   * 
   * > This parameter is effective only when used with the **CRF** parameter.
   * 
   * @example
   * 4000000
   */
  bufferSize?: number;
  /**
   * @remarks
   * Specifies the Constant Rate Factor (CRF) mode. This parameter is mutually exclusive with **Bitrate**. The value ranges from 0 to 51. A larger value indicates lower image quality. A value from 18 to 38 is recommended.
   * 
   * @example
   * 18
   */
  CRF?: number;
  /**
   * @remarks
   * The video encoding format. Valid values:
   * 
   * - For the CreateMediaConvert API: copy (default), h264, h265, and vp9.
   * 
   * 
   *   >Warning: 
   * 
   *   If you set this parameter to copy, the system directly copies the video stream to the output file. In this case, the other parameters under **TranscodeVideo** are invalid. The copy value cannot be used for video concatenation and is typically used for container format conversion.
   * 
   *   
   * 
   * - For the GenerateVideoPlaylist API: h264 (default) and h265.
   * 
   * @example
   * h264
   */
  codec?: string;
  /**
   * @remarks
   * The video frame rate. By default, this is the same as the source video.
   * 
   * @example
   * 25
   */
  frameRate?: number;
  /**
   * @remarks
   * The frame rate option. Valid values:
   * 
   * - fixed: Always uses the specified target video frame rate.
   * 
   * - adaptive: Uses the source video frame rate if it is lower than the specified target video frame rate.
   * 
   * - fall: The task fails if the source video frame rate is lower than the specified target video frame rate.
   * 
   * Default value:
   * 
   * - For the CreateMediaConvert API, the default value is fixed.
   * 
   * - For the GenerateVideoPlaylist API, the default value is adaptive.
   * 
   * > This parameter must be set together with the **FrameRate** parameter.
   * 
   * @example
   * fixed
   */
  frameRateOption?: string;
  /**
   * @remarks
   * The size of the Group of Pictures (GOP) in frames. The default value is 150.
   * 
   * > This parameter is not supported by the GenerateVideoPlaylist API.
   * 
   * @example
   * 60
   */
  GOPSize?: number;
  /**
   * @remarks
   * The maximum bitrate limit for dynamic bitrate. When you use this parameter, you must also specify the BufferSize parameter.
   * 
   * > This parameter is effective only when used with the **CRF** parameter.
   * 
   * @example
   * 128000
   */
  maxBitrate?: number;
  /**
   * @remarks
   * The pixel format. By default, this is the same as the source video. Valid values:
   * 
   * - yuv420p
   * 
   * - yuv422p
   * 
   * - yuv444p
   * 
   * - yuv420p10le
   * 
   * - yuv422p10le
   * 
   * - yuv444p10le
   * 
   * - yuva420p
   * 
   * > The yuva420p value is available only for the CreateMediaConvert API, and the **Codec** parameter must be set to vp9.
   * 
   * @example
   * yuv420p
   */
  pixelFormat?: string;
  /**
   * @remarks
   * The number of reference frames. The default value is 2.
   * 
   * @example
   * 2
   */
  refs?: number;
  /**
   * @remarks
   * The resolution of the output video in the format of `width × height`. By default, this is the same as the playback resolution of the source video. You can configure both width and height, or only width or height. You can also use this parameter with the **AdaptiveResolutionDirection** parameter to configure both the long and short edges, or only the long or short edge. The value for a single edge ranges from (0, 4096].
   * 
   * - Example 1: If **AdaptiveResolutionDirection** is set to false, `1280x720` sets the width to 1280 and the height to 720. `1280x` sets the width to 1280 and keeps the height the same as the source video. `x720` sets the height to 720 and keeps the width the same as the source video.
   * 
   * - Example 2: If **AdaptiveResolutionDirection** is set to true, `1280x720` sets the long edge to 1280 and the short edge to 720. `1280x` sets the long edge to 1280 and keeps the short edge the same as the source video. `x720` sets the short edge to 720 and keeps the long edge the same as the source video.
   * 
   * > If the source video contains rotation information, the width, height, long edge, and short edge are determined based on the rotated video, which means the playback resolution is used.
   * 
   * @example
   * 640x480
   */
  resolution?: string;
  /**
   * @remarks
   * The resolution option. Valid values:
   * 
   * - fixed: Always uses the specified target video resolution.
   * 
   * - adaptive: Uses the source video resolution if its area is smaller than the area of the specified target video resolution.
   * 
   * - fall: The task fails if the area of the source video resolution is smaller than the area of the specified target video resolution.
   * 
   * Default value:
   * 
   * - For the CreateMediaConvert API, the default value is fixed.
   * 
   * - For the GenerateVideoPlaylist API, the default value is adaptive.
   * 
   * > This parameter must be set together with the **Resolution** parameter.
   * 
   * @example
   * fixed
   */
  resolutionOption?: string;
  /**
   * @remarks
   * The clockwise rotation angle of the video in degrees. Valid values:
   * 
   * - 0 (default)
   * 
   * - 90
   * 
   * - 180
   * 
   * - 270
   * 
   * @example
   * 90
   */
  rotation?: number;
  /**
   * @remarks
   * The scaling mode. Valid values:
   * 
   * - stretch (default): Fixes the width and height or the long and short edges, and forces scaling to stretch and fill any blank areas.
   * 
   * - crop: Scales the video proportionally to the minimum resolution that extends beyond the specified rectangle (defined by width/height or long/short edges), and then center-crops the excess parts.
   * 
   * - fill: Scales the video proportionally to the maximum resolution that fits within the specified rectangle (defined by width/height or long/short edges), and then center-fills any blank areas with black.
   * 
   * - fit: Scales the video proportionally to the maximum resolution that fits within the specified rectangle (defined by width/height or long/short edges).
   * 
   * > This parameter must be set together with the **Resolution** parameter.
   * 
   * @example
   * crop
   */
  scaleType?: string;
  /**
   * @remarks
   * Enables the Narrowband HD mode. Set the value as follows:
   * 
   * 0: The default value. Disables the mode.
   * 
   * 1: Enables transcoding in Narrowband HD mode.
   * 
   * > For best results, use the officially recommended Bitrate or CRF parameters for video transcoding and encoding in Narrowband HD mode.
   * 
   * >Notice: 
   * 
   * Narrowband HD only supports the h.264/h.265 format, yuv420p, and an 8-bit depth. It does not support transcoding output for multiple target videos or video concatenation. For more information, see [Introduction to Narrowband HD](https://help.aliyun.com/document_detail/2984556.html).
   * 
   * @example
   * 0
   */
  videoSlim?: number;
  static names(): { [key: string]: string } {
    return {
      adaptiveResolutionDirection: 'AdaptiveResolutionDirection',
      BFrames: 'BFrames',
      bitrate: 'Bitrate',
      bitrateOption: 'BitrateOption',
      bufferSize: 'BufferSize',
      CRF: 'CRF',
      codec: 'Codec',
      frameRate: 'FrameRate',
      frameRateOption: 'FrameRateOption',
      GOPSize: 'GOPSize',
      maxBitrate: 'MaxBitrate',
      pixelFormat: 'PixelFormat',
      refs: 'Refs',
      resolution: 'Resolution',
      resolutionOption: 'ResolutionOption',
      rotation: 'Rotation',
      scaleType: 'ScaleType',
      videoSlim: 'VideoSlim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptiveResolutionDirection: 'boolean',
      BFrames: 'number',
      bitrate: 'number',
      bitrateOption: 'string',
      bufferSize: 'number',
      CRF: 'number',
      codec: 'string',
      frameRate: 'number',
      frameRateOption: 'string',
      GOPSize: 'number',
      maxBitrate: 'number',
      pixelFormat: 'string',
      refs: 'number',
      resolution: 'string',
      resolutionOption: 'string',
      rotation: 'number',
      scaleType: 'string',
      videoSlim: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable video stream generation. Valid values:
   * 
   * - true: Disables video stream generation. The output file will not contain a video stream.
   * 
   * - false (default): Enables video stream generation.
   * 
   * @example
   * false
   */
  disableVideo?: boolean;
  /**
   * @remarks
   * The video processing parameters. This parameter is invalid if **TranscodeVideo** is empty or if **TranscodeVideo.Codec** is set to copy.
   * 
   * > You cannot set this parameter for the GenerateVideoPlaylist API.
   */
  filterVideo?: TargetVideoFilterVideo;
  /**
   * @remarks
   * A list of index numbers for the source video streams to process. If you leave this parameter empty (default), the system processes the video stream with the smallest index number (the first video stream). If you set the index number to a value greater than 100, the system processes all video streams.
   * 
   * - Example: `[0,1]` processes video streams with index numbers 0 and 1. `[1]` processes the video stream with index number 1. `[101]` processes all video streams.
   * 
   * > The system only processes video streams with existing index numbers. If a video stream corresponding to an index number does not exist, the system ignores that index number.
   */
  stream?: number[];
  /**
   * @remarks
   * The video transcoding parameters. An empty value disables video processing. The output file will not contain a video stream.
   * 
   * > Do not disable video processing by leaving this parameter empty.
   */
  transcodeVideo?: TargetVideoTranscodeVideo;
  static names(): { [key: string]: string } {
    return {
      disableVideo: 'DisableVideo',
      filterVideo: 'FilterVideo',
      stream: 'Stream',
      transcodeVideo: 'TranscodeVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableVideo: 'boolean',
      filterVideo: TargetVideoFilterVideo,
      stream: { 'type': 'array', 'itemType': 'number' },
      transcodeVideo: TargetVideoTranscodeVideo,
    };
  }

  validate() {
    if(this.filterVideo && typeof (this.filterVideo as any).validate === 'function') {
      (this.filterVideo as any).validate();
    }
    if(Array.isArray(this.stream)) {
      $dara.Model.validateArray(this.stream);
    }
    if(this.transcodeVideo && typeof (this.transcodeVideo as any).validate === 'function') {
      (this.transcodeVideo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

