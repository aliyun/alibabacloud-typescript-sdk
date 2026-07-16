// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetVideoFilterVideoDelogos extends $dara.Model {
  /**
   * @remarks
   * The duration for which the mosaic is applied, in seconds (s). The default value is until the end of the video.
   * 
   * @example
   * 15
   */
  duration?: number;
  /**
   * @remarks
   * The meanings differ depending on whether the value is an integer or a decimal:
   * 
   * - 0 (default): Both the offset in pixels and the ratio of horizontal offset to the output resolution height are 0.
   * - Integer: The offset in pixels (px). Valid values: [1,4096].
   * - Decimal: The ratio of horizontal offset to the output resolution height. Valid values: (0,1).
   * 
   * @example
   * 0
   */
  dx?: number;
  /**
   * @remarks
   * Default value: 0. The meanings differ depending on whether the value is an integer or a decimal:
   * 
   * - 0 (default): Both the offset in pixels and the ratio of vertical offset to the output resolution height are 0.
   * - Integer: The offset in pixels (px). Valid values: [1,4096].
   * - Decimal: The ratio of vertical offset to the output resolution height. Valid values: (0,1).
   * 
   * @example
   * 0
   */
  dy?: number;
  /**
   * @remarks
   * The height of the mosaic. The default value is the decimal 1.0, which fills the entire output video height. The meanings differ depending on whether the value is an integer or a decimal:
   * 
   * - Integer: The height in pixels (px). Valid values: [1,4096].
   * - Decimal: The ratio relative to the output video resolution height. Valid values: (0,1).
   * 
   * @example
   * 40
   */
  height?: number;
  /**
   * @remarks
   * The reference position for adding the mosaic. Valid values:
   * 
   * - topleft (default): top-left corner
   * - topright: top-right corner
   * - bottomright: bottom-right corner
   * - bottomleft: bottom-left corner
   * 
   * @example
   * topleft
   */
  referPos?: string;
  /**
   * @remarks
   * The start time for adding the mosaic, in seconds (s). The default value is the start time of the video.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The width of the mosaic. The default value is the decimal 1.0, which fills the entire output video width. The meanings differ depending on whether the value is an integer or a decimal:
   * 
   * - Integer: The width in pixels (px). Valid values: [1,4096].
   * - Decimal: The ratio relative to the output video resolution width. Valid values: (0,1).
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
  blurRadius?: number;
  /**
   * @remarks
   * The face confidence threshold, which sets the lower limit of confidence for face recognition. If the confidence value of a detected face is lower than this threshold, the face is not desensitized.
   * - Valid values: 0.0 to 1.0.
   * - Default value: 0.0 (no confidence filtering is performed).
   * 
   * @example
   * 0.4
   */
  confidence?: number;
  /**
   * @remarks
   * The minimum face size threshold, which sets the minimum size of faces to be desensitized. If the width or height of a detected face is smaller than this threshold, the face is not desensitized. Unit: pixels. Default value: 0, which indicates no size restriction on faces.
   * 
   * @example
   * 0.4
   */
  minSize?: number;
  scaleRatio?: number;
  transparency?: number;
  static names(): { [key: string]: string } {
    return {
      blurRadius: 'BlurRadius',
      confidence: 'Confidence',
      minSize: 'MinSize',
      scaleRatio: 'ScaleRatio',
      transparency: 'Transparency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blurRadius: 'number',
      confidence: 'number',
      minSize: 'number',
      scaleRatio: 'number',
      transparency: 'number',
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
  blurRadius?: number;
  /**
   * @remarks
   * The license plate confidence threshold, which sets the lower limit of confidence for license plate recognition. If the confidence value of a detected license plate is lower than this threshold, the license plate is not desensitized.
   * - Valid values: 0.0 to 1.0.
   * - Default value: 0.0 (no confidence filtering is performed).
   * 
   * @example
   * 0.4
   */
  confidence?: number;
  /**
   * @remarks
   * The minimum license plate size threshold, which sets the minimum size of license plates to be desensitized. If the width or height of a detected license plate is smaller than this threshold, the license plate is not desensitized. Unit: pixels. Default value: 0, which indicates no size restriction on license plates.
   * 
   * @example
   * 0.4
   */
  minSize?: number;
  scaleRatio?: number;
  transparency?: number;
  static names(): { [key: string]: string } {
    return {
      blurRadius: 'BlurRadius',
      confidence: 'Confidence',
      minSize: 'MinSize',
      scaleRatio: 'ScaleRatio',
      transparency: 'Transparency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blurRadius: 'number',
      confidence: 'number',
      minSize: 'number',
      scaleRatio: 'number',
      transparency: 'number',
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
   * The face desensitization configuration.
   * > This feature is in public preview. If you have any questions, join the DingTalk group for feedback. For the DingTalk group number, see [Contact us](https://help.aliyun.com/document_detail/84454.html).
   */
  face?: TargetVideoFilterVideoDesensitizationFace;
  /**
   * @remarks
   * The license plate desensitization configuration.
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
   * The border color of the watermark text. The format is #RRGGBB. Default value: #000000. Values such as "red" and "green" are also supported.
   * 
   * >Notice:  This parameter takes effect only when the `Type` parameter is set to `text`.</notice>
   * 
   * @example
   * red
   */
  borderColor?: string;
  /**
   * @remarks
   * The border width of the text watermark, in pixels (px). The value must be an integer. Valid values: [0,4096]. Default value: 0.
   * 
   * >Notice:  This parameter takes effect only when the `Type` parameter is set to `text`.</notice>
   * 
   * @example
   * 2
   */
  borderWidth?: number;
  /**
   * @remarks
   * The content of the text watermark. Default value: empty.
   * 
   * >Notice:  This parameter takes effect only when the `Type` parameter is set to `text`.</notice>
   * 
   * @example
   * example
   */
  content?: string;
  /**
   * @remarks
   * The duration for which the watermark is displayed, in seconds (s). The default value is until the end of the video.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * The meanings differ depending on whether the value is an integer or a decimal:
   * 
   * - 0 (default): Both the offset in pixels and the ratio of horizontal offset to the output resolution height are 0.
   * - Integer: The offset in pixels (px). Valid values: [1,4096].
   * - Decimal: The ratio of horizontal offset to the output resolution height. Valid values: (0,1).
   * 
   * @example
   * 0
   */
  dx?: number;
  /**
   * @remarks
   * The meanings differ depending on whether the value is an integer or a decimal:
   * 
   * - 0 (default): Both the offset in pixels and the ratio of vertical offset to the output resolution height are 0.
   * 
   * - Integer: The offset in pixels (px). Valid values: [1,4096].
   * 
   * - Decimal: The ratio of vertical offset to the output resolution height. Valid values: (0,1).
   * 
   * @example
   * 0
   */
  dy?: number;
  /**
   * @remarks
   * The font opacity of the text watermark. Valid values: (0,1]. Default value: 1, which indicates fully opaque.
   * 
   * >Notice:  This parameter takes effect only when the `Type` parameter is set to `text`.</notice>
   * 
   * @example
   * 0.8
   */
  fontApha?: number;
  /**
   * @remarks
   * The font color of the watermark text. The format is #RRGGBB. Default value: #000000. Values such as "red" and "green" are also supported.
   * 
   * >Notice:  This parameter takes effect only when the `Type` parameter is set to `text`.</notice>
   * 
   * @example
   * red
   */
  fontColor?: string;
  /**
   * @remarks
   * The font name of the text watermark. Valid values:
   * 
   * - SourceHanSans-Regular (default)
   * - SourceHanSans-Bold
   * - SourceHanSerif-Regular
   * - SourceHanSerif-Bold
   * 
   * >Notice:  This parameter takes effect only when the `Type` parameter is set to `text`.</notice>
   * 
   * @example
   * SourceHanSans-Bold
   */
  fontName?: string;
  /**
   * @remarks
   * The font size of the text watermark. Default value: 16. The value must be an integer. Valid values: (4,120).
   * 
   * >Notice:  This parameter takes effect only when the `Type` parameter is set to `text`.</notice>
   * 
   * @example
   * 18
   */
  fontSize?: number;
  /**
   * @remarks
   * The height of the watermark image. The default value is the original height of the watermark image. The meanings differ depending on whether the value is an integer or a decimal:
   * 
   * - Integer: The height in pixels (px). Valid values: [1,4096].
   * - Decimal: The ratio relative to the output video resolution height. Valid values: (0,1).
   * 
   * @example
   * 40
   */
  height?: number;
  /**
   * @remarks
   * The reference position for adding the watermark. Valid values:
   * 
   * - topleft (default): top-left corner
   * - topright: top-right corner
   * - bottomright: bottom-right corner
   * - bottomleft: bottom-left corner
   * 
   * @example
   * topleft
   */
  referPos?: string;
  /**
   * @remarks
   * The start time for adding the watermark, in seconds (s). The default value is the start time of the video.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The watermark type. Valid values:
   * 
   * - text (default): text watermark.
   * - file: image or animated image watermark.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The OSS URI of the watermark file. Supported formats are PNG and MOV.
   * 
   * The OSS URI format is `oss://<bucket>/<object>`, where `<bucket>` is the name of an OSS bucket in the same region as the current project, and `<object>` is the full path of the file including the file name extension.
   * 
   * >Notice:  This parameter takes effect only when the `Type` parameter is set to `file`.</notice>
   * 
   * @example
   * oss://test-bucket/watermark.jpg
   */
  URI?: string;
  /**
   * @remarks
   * The width of the watermark image. The default value is the original width of the watermark image. The meanings differ depending on whether the value is an integer or a decimal:
   * 
   * - Integer: The width in pixels (px). Valid values: [1,4096].
   * - Decimal: The ratio relative to the output video resolution width. Valid values: (0,1).
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
   * Applies mosaic processing to a rectangular area of the video to remove logos or station watermarks.
   */
  delogos?: TargetVideoFilterVideoDelogos[];
  /**
   * @remarks
   * The video desensitization configuration.
   * 
   * >Notice: 
   * 
   * - This parameter is applicable only to the CreateMediaConvertTask API.
   */
  desensitization?: TargetVideoFilterVideoDesensitization;
  /**
   * @remarks
   * The video playback speed setting. Valid values: [0.5,1.0]. Default value: 1.0.
   * 
   * > - This is the ratio of the transcoded media file playback speed to the source media file default playback speed, not speed-up transcoding.
   * 
   * >Notice: 
   * 
   * - This parameter is applicable only to the CreateMediaConvertTask API.
   * 
   * @example
   * 1.0
   */
  speed?: number;
  /**
   * @remarks
   * The list of video watermarks.
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
   * Specifies whether to enable adaptive long/short side mode. Valid values:
   * 
   * - true: Enabled. The format of the **Resolution** parameter is `LongSide×ShortSide`.
   * - false (default): Disabled. The format of the **Resolution** parameter is `Width×Height`.
   * 
   * @example
   * true
   */
  adaptiveResolutionDirection?: boolean;
  /**
   * @remarks
   * The number of consecutive B-frames. Default value: 3.
   * 
   * @example
   * 3
   */
  BFrames?: number;
  /**
   * @remarks
   * The video stream bitrate, in bits per second (bit/s).
   * 
   * > This parameter is mutually exclusive with **CRF**. If both this parameter and **CRF** are empty, encoding is performed with a **CRF** value of 23.
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
   * - adaptive: Uses the source video bitrate when it is lower than the specified target video bitrate.
   * - fall: Returns a failure when the source video bitrate is lower than the specified target video bitrate.
   * 
   * Default value:
   * - For the CreateMediaConvert API, the default value is fixed.
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
   * The decoding buffer size for variable bitrate, in bits per second (bps).
   * 
   * > This parameter takes effect only when used together with the **CRF** parameter.
   * 
   * @example
   * 4000000
   */
  bufferSize?: number;
  /**
   * @remarks
   * Specifies the constant quality mode. This parameter is mutually exclusive with **Bitrate**. Valid values: [0,51]. A higher value results in lower quality. Recommended values: [18,38].
   * 
   * @example
   * 18
   */
  CRF?: number;
  /**
   * @remarks
   * The video encoding format. Valid values:
   * 
   * - For the CreateMediaConvert API: copy (default), h264, h265, vp9.
   * <warning>When this parameter is set to copy, the video streams to be processed are directly copied to the output file, and other parameters under **TranscodeVideo** do not take effect. copy cannot be used for video concatenation and is typically used for container format conversion scenarios.</warning>
   * - For the GenerateVideoPlaylist API: h264 (default), h265.
   * 
   * @example
   * h264
   */
  codec?: string;
  /**
   * @remarks
   * The video frame rate. The default value is the same as the source video.
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
   * - adaptive: Uses the source video frame rate when it is lower than the specified target video frame rate.
   * - fall: Returns a failure when the source video frame rate is lower than the specified target video frame rate.
   * 
   * Default value:
   * - For the CreateMediaConvert API, the default value is fixed.
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
   * The number of frames between keyframes. Default value: 150.
   * 
   * > This parameter is not supported for the GenerateVideoPlaylist API.
   * 
   * @example
   * 60
   */
  GOPSize?: number;
  /**
   * @remarks
   * The maximum bitrate limit for variable bitrate. When using this parameter, you must specify the BufferSize parameter.
   * 
   * > This parameter takes effect only when used together with the **CRF** parameter.
   * 
   * @example
   * 128000
   */
  maxBitrate?: number;
  /**
   * @remarks
   * The pixel format. The default value is the same as the source video. Valid values:
   * 
   * - yuv420p
   * - yuv422p
   * - yuv444p
   * - yuv420p10le
   * - yuv422p10le
   * - yuv444p10le
   * - yuva420p
   * 
   * > yuva420p is available only for the CreateMediaConvert API, and the **Codec** parameter must be set to vp9.
   * 
   * @example
   * yuv420p
   */
  pixelFormat?: string;
  /**
   * @remarks
   * The number of reference frames. Default value: 2.
   * 
   * @example
   * 2
   */
  refs?: number;
  /**
   * @remarks
   * The resolution of the output video in the format of `WidthxHeight`. The default value is the same as the playback resolution of the source video. You can configure both width and height, or configure only width or height. You can also use the **AdaptiveResolutionDirection** parameter to configure both long and short sides, or configure only the long side or short side. The value range for a single side is (0,4096].
   * 
   * - Example 1: If **AdaptiveResolutionDirection** is false, `1280x720` sets the width to 1280 and the height to 720. `1280x` sets the width to 1280 and keeps the height the same as the source video. `x720` sets the height to 720 and keeps the width the same as the source video.
   * - Example 2: If **AdaptiveResolutionDirection** is true, `1280x720` sets the long side to 1280 and the short side to 720. `1280x` sets the long side to 1280 and keeps the short side the same as the source video. `x720` sets the short side to 720 and keeps the long side the same as the source video.
   * 
   * > If the source video contains rotation information, the width/height and long/short side determination is based on the post-rotation state, which is the playback resolution.
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
   * - adaptive: Uses the source video resolution when the source video resolution area is smaller than the specified target video resolution area.
   * - fall: Returns a failure when the source video resolution area is smaller than the specified target video resolution area.
   * 
   * Default value:
   * - For the CreateMediaConvert API, the default value is fixed.
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
   * - 90
   * - 180
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
   * - stretch (default): Fixes the width/height or long/short sides and forcibly scales the video to fill the blank area by stretching.
   * - crop: Scales proportionally to the minimum resolution that extends beyond the specified width/height or long/short side rectangle, and then center-crops the excess area.
   * - fill: Scales proportionally to the maximum resolution within the specified width/height or long/short side rectangle, and then center-fills the blank area with black.
   * - fit: Scales proportionally to the maximum resolution within the specified width/height or long/short side rectangle.
   * 
   * > This parameter must be set together with the **Resolution** parameter.
   * 
   * @example
   * crop
   */
  scaleType?: string;
  /**
   * @remarks
   * Enables the Narrowband HD mode. Valid values:
   * 
   * 0: Default value. Disabled.
   * 
   * 1: Uses the Narrowband HD mode for transcoding.
   * > For optimal results, use the officially recommended Bitrate or CRF parameters for video transcoding with Narrowband HD.
   * >
   * >Notice: Narrowband HD supports only H.264/H.265 formats, only yuv420p, 8-bit depth, and does not support multi-target video transcoding output or video concatenation. For more information, see [Narrowband HD overview](https://help.aliyun.com/document_detail/2984556.html).
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
   * - true: Disabled. The output file does not contain a video stream.
   * - false (default): Not disabled.
   * 
   * @example
   * false
   */
  disableVideo?: boolean;
  /**
   * @remarks
   * The video filter parameters. This parameter does not take effect when **TranscodeVideo** is empty or **TranscodeVideo.Codec** is set to copy.
   * 
   * > This parameter is not supported for the GenerateVideoPlaylist API.
   */
  filterVideo?: TargetVideoFilterVideo;
  /**
   * @remarks
   * The list of video stream index numbers to process from the source file. An empty value (default) indicates that the video stream with the smallest index number (the first video stream) is processed. An index number greater than 100 indicates that all video streams are processed.
   * 
   * - Example: `[0,1]` processes video streams with index numbers 0 and 1. `[1]` processes the video stream with index number 1. `[101]` processes all video streams.
   * 
   * > Only video streams with existing index numbers are processed. If a video stream corresponding to an index number does not exist, that index number is ignored.
   */
  stream?: number[];
  /**
   * @remarks
   * The video transcoding parameters. An empty value indicates that video processing is disabled and the output file does not contain a video stream.
   * 
   * > Setting this parameter to an empty value to disable video processing is not recommended.
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

