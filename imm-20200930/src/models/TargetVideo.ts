// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetVideoFilterVideoDelogos extends $dara.Model {
  /**
   * @remarks
   * The duration of the blur in seconds. By default, the blur lasts until the end of the video.
   * 
   * @example
   * 15
   */
  duration?: number;
  /**
   * @remarks
   * The value of the parameter can be an integer or a decimal.
   * 
   * *   0: indicates that both the offset in pixels and the ratio of the horizontal offset relative to the height of the target resolution are 0. This is the default value.
   * *   An integer: the offset in pixels. Valid values: [1,4096].
   * *   A decimal: the ratio of the horizontal offset relative to the height of the target resolution. Valid values: (0,1).
   * 
   * @example
   * 0
   */
  dx?: number;
  /**
   * @remarks
   * Default value: 0. The value of the parameter can be an integer or a decimal.
   * 
   * *   0: indicates that both the offset in pixels and the ratio of the vertical offset relative to the height of the target resolution are 0. This is the default value.
   * *   An integer: the offset in pixels. Valid values: [1,4096].
   * *   A decimal: the ratio of the vertical offset relative to the height of the target resolution. Valid values: (0,1).
   * 
   * @example
   * 0
   */
  dy?: number;
  /**
   * @remarks
   * The height of the blur. The default value is 1.0, which specifies that the blur is as high as the video. The value can be a decimal or an integer.
   * 
   * *   An integer: the number of pixels. Valid values: [1,4096].
   * *   A decimal: the ratio relative to the height of the target resolution. Valid values: (0,1).
   * 
   * @example
   * 40
   */
  height?: number;
  /**
   * @remarks
   * The reference position of the blur. Valid values:
   * 
   * *   topleft: the upper-left corner. This is the default value.
   * *   topright: the upper-right corner.
   * *   bottomright: the lower-right corner.
   * *   bottomleft: the lower-left corner.
   * 
   * @example
   * topleft
   */
  referPos?: string;
  /**
   * @remarks
   * The start time of blurring (in seconds). By default, the blur begins at the start time of the video.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The width of the blur. The default value is 1.0, which specifies that the blur is as wide as the video. The value can be a decimal or an integer.
   * 
   * *   An integer: the number of pixels. Valid values: [1,4096].
   * *   A decimal: the ratio relative to the width of the target resolution. Valid values: (0,1).
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
   * The minimum confidence threshold. Valid values: 0 to 1. Default value: 0.
   * 
   * @example
   * 0
   */
  confidence?: number;
  /**
   * @remarks
   * This parameter does not take effect if the width or height of the bounding box of a face falls below the specified minimum threshold. Default value: 0.
   * 
   * @example
   * 0
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
   * The minimum confidence threshold. Valid values: 0 to 1. Default value: 0.
   * 
   * @example
   * 0
   */
  confidence?: number;
  /**
   * @remarks
   * The minimum threshold for license plate size. This parameter does not take effect if the width or height of the bounding box of a license plate falls below the specified minimum threshold. Default value: 0.
   * 
   * @example
   * 0
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
   * The settings for face anonymization.
   */
  face?: TargetVideoFilterVideoDesensitizationFace;
  /**
   * @remarks
   * The settings for license plate anonymization.
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
   * The color of the text watermark border. You can specify a color name, such as "red" or "green", or an RGB color code. The default color is #000000.
   * 
   * > This parameter takes effect only when the Type parameter is set to text.
   * 
   * @example
   * red
   */
  borderColor?: string;
  /**
   * @remarks
   * The width of the text watermark border. Unit: pixels. The value must be an integer within the [0,4096] range. Default value: 0.
   * 
   * > This parameter takes effect only when the Type parameter is set to text.
   * 
   * @example
   * 2
   */
  borderWidth?: number;
  /**
   * @remarks
   * The content of the text watermark. By default, this parameter is left empty.
   * 
   * > This parameter takes effect only when the Type parameter is set to text.
   * 
   * @example
   * example
   */
  content?: string;
  /**
   * @remarks
   * The duration of watermarking (in seconds). By default, the watermark lasts until the video ends.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * The value of the parameter can be an integer or a decimal.
   * 
   * *   0: indicates that both the offset in pixels and the ratio of the horizontal offset relative to the height of the target resolution are 0. This is the default value.
   * *   An integer: the offset in pixels. Valid values: [1,4096].
   * *   A decimal: the ratio of the horizontal offset relative to the height of the target resolution. Valid values: (0,1).
   * 
   * @example
   * 0
   */
  dx?: number;
  /**
   * @remarks
   * The value of the parameter can be an integer or a decimal.
   * 
   * *   0: indicates that both the offset in pixels and the ratio of the vertical offset relative to the height of the target resolution are 0. This is the default value.
   * *   An integer: the offset in pixels. Valid values: [1,4096].
   * *   A decimal: the ratio of the vertical offset relative to the height of the target resolution. Valid values: (0,1).
   * 
   * @example
   * 0
   */
  dy?: number;
  /**
   * @remarks
   * The font transparency of the text watermark. Valid values: (0,1]. Default value: 1, which specifies that the text watermark is fully opaque.
   * 
   * > This parameter takes effect only when the Type parameter is set to text.
   * 
   * @example
   * 0.8
   */
  fontApha?: number;
  /**
   * @remarks
   * The color of the text watermark. You can specify a color name, such as "red" or "green", or an RGB color code. The default color is #000000.
   * 
   * > This parameter takes effect only when the Type parameter is set to text.
   * 
   * @example
   * red
   */
  fontColor?: string;
  /**
   * @remarks
   * The font of the text watermark. Valid values:
   * 
   * *   SourceHanSans-Regular (default)
   * *   SourceHanSans-Bold
   * *   SourceHanSerif-Regular
   * *   SourceHanSerif-Bold
   * 
   * > This parameter takes effect only when the Type parameter is set to text.
   * 
   * @example
   * SourceHanSans-Bold
   */
  fontName?: string;
  /**
   * @remarks
   * The size of the text watermark. Default value: 16. The value must be an integer within the (4,120) range.
   * 
   * > This parameter takes effect only when the Type parameter is set to text.
   * 
   * @example
   * 18
   */
  fontSize?: number;
  /**
   * @remarks
   * The height of the image watermark. By default, the height is the same as the height of the original watermark file. The value of the parameter can be an integer or a decimal.
   * 
   * *   An integer: the number of pixels excluding the height of the logo. Valid values: [1,4096].
   * *   A decimal: the ratio relative to the height of the target resolution. Valid values: (0,1).
   * 
   * @example
   * 40
   */
  height?: number;
  /**
   * @remarks
   * The reference position for adding the watermark. Valid values:
   * 
   * *   topleft: the upper-left corner. This is the default value.
   * *   topright: the upper-right corner.
   * *   bottomright: the lower-right corner.
   * *   bottomleft: the lower-left corner.
   * 
   * @example
   * topleft
   */
  referPos?: string;
  /**
   * @remarks
   * The start time of watermarking (in seconds). By default, the watermark begins at the start time of the video.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The watermark type. Valid values:
   * 
   * *   text: a text watermark. This is the default value.
   * *   file: a still or animated image watermark.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URI of the watermark file. The watermark file can be a PNG or MOV file.
   * 
   * The URI is in the `oss://<bucket>/<object>` format, where `<bucket>` is the name of the bucket in the same region as the current project and `<object>` is the path of the object with the extension included.
   * 
   * > This parameter takes effect only when the Type parameter is set to file.
   * 
   * @example
   * oss://test-bucket/watermark
   */
  URI?: string;
  /**
   * @remarks
   * The width of the image watermark. By default, the width is the same as the width of the original watermark file. The value of the parameter can be an integer or a decimal.
   * 
   * *   An integer: the number of pixels excluding the width of the logo. Valid values: [1,4096].
   * *   A decimal: the ratio relative to the width of the target resolution. Valid values: (0,1).
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
   * The configurations for blurring a rectangular area of the video. This parameter is used to remove logos from videos, such as TV channel logos.
   */
  delogos?: TargetVideoFilterVideoDelogos[];
  /**
   * @remarks
   * The video anonymization settings.
   * 
   * > 
   * 
   * *   This parameter only applies to the CreateMediaConvertTask operation.
   */
  desensitization?: TargetVideoFilterVideoDesensitization;
  /**
   * @remarks
   * The video playback speed. Valid values: [0.5,1.0]. Default value: 1.0.
   * 
   * > 
   * 
   * *   This parameter specifies the ratio of the playback speed of the output media file to the default playback speed of the source media file. It does not indicate transcoding acceleration.
   * 
   * > 
   * 
   * *   This parameter only applies to the CreateMediaConvertTask operation.
   * 
   * @example
   * 1.0
   */
  speed?: number;
  /**
   * @remarks
   * The video watermarks.
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
   * Specifies whether to enable adaptation to resolution based on long and short sides. Valid values:
   * 
   * *   true: The format of the **Resolution** parameter is `LongSide×ShortSide`. This is the default value.
   * *   false: The format of the **Resolution** parameter is `Width×Height`.
   * 
   * @example
   * true
   */
  adaptiveResolutionDirection?: boolean;
  /**
   * @remarks
   * The number of consecutive B frames. Default value: 3.
   * 
   * @example
   * 3
   */
  BFrames?: number;
  /**
   * @remarks
   * The bitrate of the video stream. Unit: bit/s.
   * 
   * > This parameter and the **CRF** parameter are mutually exclusive. If you leave both the parameters empty, the **CRF** parameter with a value of 23 applies.
   * 
   * @example
   * 128000
   */
  bitrate?: number;
  /**
   * @remarks
   * The video bitrate option. Valid values:
   * 
   * *   fixed: always uses the target bitrate.
   * *   adaptive: uses the source bitrate when the source bitrate is less than the target bitrate.
   * *   fall: returns a failure when the source bitrate is less than the target bitrate.
   * 
   * Default value:
   * 
   * *   fixed for the CreateMediaConvert operation.
   * *   adaptive for the GenerateVideoPlaylist operation.
   * 
   * > This parameter must be used together with the **Bitrate** parameter.
   * 
   * @example
   * fixed
   */
  bitrateOption?: string;
  /**
   * @remarks
   * The size of the buffer for decoding when the dynamic bitrate is used. Unit: bit/s.
   * 
   * > This parameter must be used together with the **CRF** parameter.
   * 
   * @example
   * 4000000
   */
  bufferSize?: number;
  /**
   * @remarks
   * The constant rate factor (CRF) of the video. The value of this parameter falls within the [0,51] range. A greater indicates lower quality. We recommend that you specify a value within the [18,38] range. This parameter and the **Bitrate** parameter are mutually exclusive.
   * 
   * @example
   * 18
   */
  CRF?: number;
  /**
   * @remarks
   * The video coding format. Valid values:
   * 
   * *   copy, h264, h265, and vp9 for the CreateMediaConvert operation. The default value is copy.
   * 
   *     **
   * 
   *     **Warning **When you set the parameter to copy, the video stream is directly copied into the output file and all other parameters in TranscodeVideo do not take effect. The copy value is commonly used in container format conversion scenarios. You cannot use this value in video merging scenarios.
   * 
   * *   h264 and h265 for the GenerateVideoPlaylist operation. The default value is h264.
   * 
   * @example
   * h264
   */
  codec?: string;
  /**
   * @remarks
   * The target frame rate. By default, the target frame rate is the same as the source frame rate.
   * 
   * @example
   * 25
   */
  frameRate?: number;
  /**
   * @remarks
   * The frame rate option. Valid values:
   * 
   * *   fixed: always uses the target frame rate.
   * *   adaptive: uses the source frame rate when the source frame rate is less than the target frame rate.
   * *   fall: returns a failure if the source frame rate is less than the target frame rate.
   * 
   * Default value:
   * 
   * *   fixed for the CreateMediaConvert operation.
   * *   adaptive for the GenerateVideoPlaylist operation.
   * 
   * > This parameter must be used together with the **FrameRate** parameter.
   * 
   * @example
   * fixed
   */
  frameRateOption?: string;
  /**
   * @remarks
   * The keyframe interval. Default value: 150.
   * 
   * > This parameter is not available to the GenerateVideoPlaylist operation.
   * 
   * @example
   * 60
   */
  GOPSize?: number;
  /**
   * @remarks
   * The maximum bitrate when the dynamic bitrate is used. If you specify this parameter, you must also specify the BufferSize parameter.
   * 
   * > This parameter must be used together with the **CRF** parameter.
   * 
   * @example
   * 128000
   */
  maxBitrate?: number;
  /**
   * @remarks
   * The pixel format. By default, the pixel format matches that of the source video. Valid values:
   * 
   * *   yuv420p
   * *   yuv422p
   * *   yuv444p
   * *   yuv420p10le
   * *   yuv422p10le
   * *   yuv444p10le
   * *   yuva420p
   * 
   * > You can set the parameter to yuva420p only when you call the CreateMediaConvert operation and set the **Codec** parameter to vp9.
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
   * The target resolution in the `WidthxHeight` format. By default, the target resolution is the same as the source resolution. You can specify both width and height, or only one of them. You can use this parameter together with the **AdaptiveResolutionDirection** parameter to set both the long side and short side or one of them. The value of each side falls within the range of (0,4096].
   * 
   * *   Example 1: If **AdaptiveResolutionDirection** is set to false, `1280x720` specifies a width of 1280 pixels and a height of 720 pixels, `1280x` specifies a width of 1280 pixels and the same height as the source video, and `x720` specifies a height of 720 pixels and the same width as the source video.
   * *   Example 2: If **AdaptiveResolutionDirection** is set to true, `1280x720` specifies a long side of 1280 pixels and a short side of 720 pixels, `1280x` specifies a long side of 1280 pixels and the same short side as the source video, and `x720` specifies a short side of 720 pixels and the same long side as the source video.
   * 
   * > If the source video contains rotation information, the width, height, long side, and short side depend on the frame after rotation (the playback resolution).
   * 
   * @example
   * 640x480
   */
  resolution?: string;
  /**
   * @remarks
   * The resolution option. Valid values:
   * 
   * *   fixed: always uses the target video resolution.
   * *   adaptive: uses the source video resolution when the source video resolution is less than the target video resolution.
   * *   fall: returns a failure when the source video resolution is less than the target video resolution.
   * 
   * Default value:
   * 
   * *   fixed for the CreateMediaConvert operation.
   * *   adaptive for the GenerateVideoPlaylist operation.
   * 
   * > This parameter must be used together with the **Resolution** parameter.
   * 
   * @example
   * fixed
   */
  resolutionOption?: string;
  /**
   * @remarks
   * The degrees to rotate the video clockwise. Valid values:
   * 
   * *   0 (default)
   * *   90
   * *   180
   * *   270
   * 
   * @example
   * 90
   */
  rotation?: number;
  /**
   * @remarks
   * The resizing mode. Valid values:
   * 
   * *   stretch: forcibly stretches the video based on the specified width and height or long side and short side to fill any remaining space. This is the default value.
   * *   crop: proportionally resizes the video to the minimum resolution outside the rectangular shape based on the specified width and height or long side and short side, and crops the parts beyond the rectangular shape from the center.
   * *   fill: proportionally resizes the video to the maximum resolution within the rectangular shape based on the specified width and height or long side and short side, and fills empty space with black from the center.
   * *   fit: proportionally resizes the video to the maximum resolution that fits within the specified width and height or long side and short side.
   * 
   * > This parameter must be used together with the **Resolution** parameter.
   * 
   * @example
   * crop
   */
  scaleType?: string;
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
   * *   true: disables video stream generation. No video stream is included in the output file.
   * *   false: does not disable video stream generation. This is the default value.
   * 
   * @example
   * false
   */
  disableVideo?: boolean;
  /**
   * @remarks
   * The video processing parameters. This parameter is invalid if **TranscodeVideo** is left empty or **TranscodeVideo.Codec** is set to copy.
   * 
   * > This parameter is not available to the GenerateVideoPlaylist operation.
   */
  filterVideo?: TargetVideoFilterVideo;
  /**
   * @remarks
   * The index numbers of video streams. If you do not specify this parameter, the first video stream (the one with the smallest index number) is processed. If the array contains an element greater than 100, all video streams are processed.
   * 
   * *   For example, you can set the parameter to `[0,1]` to process video streams with index numbers 0 and 1, `[1]` to process only the video stream with the index number 1, and `[101]` to process all video streams.
   * 
   * > If you specify an index number but no video stream with the index number is found, the index number is ignored.
   */
  stream?: number[];
  /**
   * @remarks
   * The video transcoding parameters. If you do not specify this parameter, no video streams are included in the output file.
   * 
   * > We recommend that you do not use this parameter to disable video stream generation.
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

