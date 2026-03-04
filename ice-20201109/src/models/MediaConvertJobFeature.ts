// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertJobFeatureClipTimeSpan extends $dara.Model {
  /**
   * @remarks
   * The duration of the clip, starting from the Seek time. The default duration is from the Seek time to the end of the video. Duration and End are mutually exclusive. If End is set, Duration is ignored.
   * 
   * *   Format: hh:mm:ss[.SSS] or sssss[.SSS].
   * *   Valid values: [00:00:00.000,23:59:59.999] or [0.000,86399.999].
   * *   Example: 00:01:59.99 or 180.30.
   * 
   * @example
   * 60.0
   */
  duration?: string;
  /**
   * @remarks
   * Specifies a duration to trim from the end of the video. Duration and End are mutually exclusive. If End is set, Duration is ignored.
   * 
   * *   Format: hh:mm:ss[.SSS] or sssss[.SSS].
   * *   Valid values: [00:00:00.000,23:59:59.999] or [0.000,86399.999].
   * *   Example: 00:01:59.99 or 180.30.
   * 
   * @example
   * 50
   */
  end?: string;
  /**
   * @remarks
   * The start time of the clip. It defaults to the beginning of the video.
   * 
   * *   Format: hh:mm:ss[.SSS] or sssss[.SSS].
   * *   Valid values: [00:00:00.000,23:59:59.999] or [0.000,86399.999].
   * *   Example: 00:01:59.99 or 180.30.
   * 
   * @example
   * 180.30
   */
  seek?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      end: 'End',
      seek: 'Seek',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      end: 'string',
      seek: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobFeatureClip extends $dara.Model {
  /**
   * @remarks
   * Specifies the order of operations when concatenating multiple files and clipping.
   * 
   * *   true: Clips the first input file before it is concatenated.
   * *   false: Concatenates all input files first, then applies clipping.
   * *   Default value: false.
   * 
   * @example
   * false
   */
  configToClipFirstPart?: string;
  /**
   * @remarks
   * The time range for the clip.
   */
  timeSpan?: MediaConvertJobFeatureClipTimeSpan;
  static names(): { [key: string]: string } {
    return {
      configToClipFirstPart: 'ConfigToClipFirstPart',
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configToClipFirstPart: 'string',
      timeSpan: MediaConvertJobFeatureClipTimeSpan,
    };
  }

  validate() {
    if(this.timeSpan && typeof (this.timeSpan as any).validate === 'function') {
      (this.timeSpan as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobFeatureWatermarks extends $dara.Model {
  /**
   * @remarks
   * Specifies if the font size adapts to the output resolution. Valid values:
   * 
   * *   true
   * *   false
   * *   Default value: false.
   * 
   * @example
   * true
   */
  adaptive?: string;
  /**
   * @remarks
   * The color of the font border.
   * 
   * *   Default value: Black.
   * 
   * @example
   * Black
   */
  borderColor?: string;
  /**
   * @remarks
   * The width of the font border.
   * 
   * *   Unit: pixels.
   * *   Valid values: [0,4096].
   * *   Default value: 0.
   * 
   * @example
   * 0
   */
  borderWidth?: string;
  /**
   * @remarks
   * The text to be displayed as the watermark.
   * 
   * @example
   * TextWatarmark
   */
  content?: string;
  /**
   * @remarks
   * The font opacity.
   * 
   * *   Valid values: (0,1].
   * *   Default value: 1.0.
   * 
   * @example
   * 1.0
   */
  fontAlpha?: string;
  /**
   * @remarks
   * The font color of the text watermark.
   * 
   * *   Default value: black.
   * 
   * @example
   * black
   */
  fontColor?: string;
  /**
   * @remarks
   * The font of the text watermark.
   * 
   * *   Default value: SimSum.
   * 
   * @example
   * SimSum
   */
  fontName?: string;
  /**
   * @remarks
   * The font size of the text watermark.
   * 
   * *   Valid values: (4,120).
   * *   Default value: 16.
   */
  fontSize?: string;
  /**
   * @remarks
   * The height of the image watermark. This parameter overrides the corresponding setting from a specified watermark template. The following value types are supported:
   * 
   * *   Integer: the pixel value of the watermark height.
   * 
   *     *
   *     *   Valid values: [8,4096].
   * 
   * *   Decimal: A decimal of the output video\\"s height.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 0.1
   */
  height?: string;
  /**
   * @remarks
   * The ID of the watermark template.
   * 
   * @example
   * 962e1332fa2d4e12bdfb76dd1402fcfa
   */
  templateId?: string;
  /**
   * @remarks
   * The watermark type.
   * 
   * *   Text: a text watermark. In this case, you must specify the parameters related to the text watermark.
   * *   Image: an image watermark. In this case, you must specify the parameters related to the image watermark.
   * 
   * If not specified, the type is inferred from the TemplateId.
   * 
   * @example
   * Image
   */
  type?: string;
  /**
   * @remarks
   * The width of the image watermark. This parameter overrides the corresponding setting from a specified watermark template. The following value types are supported:
   * 
   * *   Integer: the pixel value of the watermark width.
   * 
   *     *
   *     *   Valid values: [8,4096].
   * 
   * *   Decimal: A decimal of the output video\\"s width.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 0.1
   */
  width?: string;
  /**
   * @remarks
   * The horizontal offset of the image watermark relative to the output video. This parameter overrides the corresponding setting from a specified watermark template. The following value types are supported:
   * 
   * *   Integer: the pixel value of the horizontal offset.
   * 
   *     *   Unit: pixels.
   *     *   Valid values: [8,4096].
   * 
   * *   Decimal: the ratio of the horizontal offset to the width of the output video.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 0.08
   */
  x?: string;
  /**
   * @remarks
   * The vertical offset of the image watermark relative to the output video. This parameter overrides the corresponding setting from a specified watermark template. The following value types are supported:
   * 
   * *   Integer: the pixel value of the vertical offset.
   * 
   *     *   Unit: pixels.
   *     *   Valid values: [8,4096].
   * 
   * *   Decimal: the ratio of the vertical offset to the height of the output video.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 0.08
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      adaptive: 'Adaptive',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      content: 'Content',
      fontAlpha: 'FontAlpha',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSize: 'FontSize',
      height: 'Height',
      templateId: 'TemplateId',
      type: 'Type',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptive: 'string',
      borderColor: 'string',
      borderWidth: 'string',
      content: 'string',
      fontAlpha: 'string',
      fontColor: 'string',
      fontName: 'string',
      fontSize: 'string',
      height: 'string',
      templateId: 'string',
      type: 'string',
      width: 'string',
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobFeature extends $dara.Model {
  /**
   * @remarks
   * Configuration for clipping from the source video.
   */
  clip?: MediaConvertJobFeatureClip;
  /**
   * @remarks
   * A map of key-value pairs to be embedded as container-level metadata in the output file. Provided as a JSON string. Example: {"key1":"value1","key2":"value2"}.
   * 
   * *   Max key length: 64 characters.
   * *   Max value length: 512 characters.
   * 
   * Max 4 key-value pairs.
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * Image or text watermarks to add to the video. These parameters override the corresponding settings from a specified watermark template.
   * 
   * *   You can add up to four watermarks to a transcoding task.
   */
  watermarks?: MediaConvertJobFeatureWatermarks[];
  static names(): { [key: string]: string } {
    return {
      clip: 'Clip',
      metadata: 'Metadata',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clip: MediaConvertJobFeatureClip,
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      watermarks: { 'type': 'array', 'itemType': MediaConvertJobFeatureWatermarks },
    };
  }

  validate() {
    if(this.clip && typeof (this.clip as any).validate === 'function') {
      (this.clip as any).validate();
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
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

