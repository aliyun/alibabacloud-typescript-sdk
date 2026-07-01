// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertJobFeatureClipTimeSpan extends $dara.Model {
  /**
   * @remarks
   * Specifies the duration of the clip, relative to the `Seek` time. By default, the clip extends to the end of the video. You can specify either `Duration` or `End`, but not both. If `End` is specified, `Duration` is ignored.
   * 
   * - Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * 
   * - Value range: `[00:00:00.000, 23:59:59.999]` or `[0.000, 86399.999]`.
   * 
   * - Example: `00:01:59.999` or `180.30`.
   * 
   * @example
   * 60.0
   */
  duration?: string;
  /**
   * @remarks
   * Specifies the end time of the clip. You can specify either `End` or `Duration`, but not both. If `End` is specified, `Duration` is ignored.
   * 
   * - Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * 
   * - Value range: `[00:00:00.000, 23:59:59.999]` or `[0.000, 86399.999]`.
   * 
   * - Example: `00:01:59.999` or `180.30`.
   * 
   * @example
   * 50
   */
  end?: string;
  /**
   * @remarks
   * Specifies the start time of the clip. If this parameter is not set, the clip starts from the beginning of the video.
   * 
   * - Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * 
   * - Value range: `[00:00:00.000, 23:59:59.999]` or `[0.000, 86399.999]`.
   * 
   * - Example: `00:01:59.999` or `180.30`.
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
   * Specifies whether to clip the first segment before concatenation.
   * 
   * - `true`: The system clips the first segment before concatenation and transcoding.
   * 
   * - `false`: The system first concatenates and transcodes the segments, and then clips the resulting video.
   * 
   * - Default value: `false`.
   * 
   * @example
   * false
   */
  configToClipFirstPart?: string;
  /**
   * @remarks
   * The time span for the clip.
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
   * Specifies whether the font size of the text watermark adapts to the output video resolution.
   * 
   * - `true`: The font size is adaptive.
   * 
   * - `false`: The font size is fixed.
   * 
   * - Default value: `false`.
   * 
   * @example
   * true
   */
  adaptive?: string;
  /**
   * @remarks
   * The border color of the text watermark.
   * 
   * - Default value: `black`.
   * 
   * @example
   * Black
   */
  borderColor?: string;
  /**
   * @remarks
   * The border width of the text watermark.
   * 
   * - Unit: pixels.
   * 
   * - Value range: [0, 4096].
   * 
   * - Default value: `0`.
   * 
   * @example
   * 0
   */
  borderWidth?: string;
  /**
   * @remarks
   * The content of the text watermark.
   * 
   * @example
   * TextWatarmark
   */
  content?: string;
  /**
   * @remarks
   * The opacity of the font.
   * 
   * - Value range: (0, 1].
   * 
   * - Default value: `1.0`.
   * 
   * @example
   * 1.0
   */
  fontAlpha?: string;
  /**
   * @remarks
   * The font color of the text watermark.
   * 
   * - Default value: `black`.
   * 
   * @example
   * black
   */
  fontColor?: string;
  /**
   * @remarks
   * The font name for the text watermark.
   * 
   * - Default value: `SimSun`.
   * 
   * @example
   * SimSum
   */
  fontName?: string;
  /**
   * @remarks
   * The font size of the text watermark.
   * 
   * - Value range: (4, 120).
   * 
   * - Default value: `16`.
   */
  fontSize?: string;
  /**
   * @remarks
   * The height of the watermark. If specified, this value overrides the corresponding parameter in the watermark template. You can specify the value in two ways:
   * 
   * - As an integer, representing the height in pixels.
   * 
   *   - Unit: pixels.
   * 
   *   - Value range: [8, 4096].
   * 
   * - As a decimal, representing the ratio of the height to the height of the output video.
   * 
   *   - Value range: (0, 1).
   * 
   *   - Supports up to four decimal places, such as `0.9999`. The system truncates additional digits.
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
   * The type of the watermark.
   * 
   * - `Text`: A text watermark. You must also set the text watermark parameters.
   * 
   * - `Image`: An image watermark. You must also set the image watermark parameters.
   * 
   * Default value: The system automatically determines the type based on the watermark template.
   * 
   * @example
   * Image
   */
  type?: string;
  /**
   * @remarks
   * The width of the watermark. If specified, this value overrides the corresponding parameter in the watermark template. You can specify the value in two ways:
   * 
   * - As an integer, representing the width in pixels.
   * 
   *   - Unit: pixels.
   * 
   *   - Value range: [8, 4096].
   * 
   * - As a decimal, representing the ratio of the width to the width of the output video.
   * 
   *   - Value range: (0, 1).
   * 
   *   - Supports up to four decimal places, such as `0.9999`. The system truncates additional digits.
   * 
   * @example
   * 0.1
   */
  width?: string;
  /**
   * @remarks
   * The horizontal offset of the watermark relative to the output video. If specified, this value overrides the corresponding parameter in the watermark template. You can specify the value in two ways:
   * 
   * - As an integer, representing the offset in pixels.
   * 
   *   - Unit: pixels.
   * 
   *   - Value range: [8, 4096].
   * 
   * - As a decimal, representing the ratio of the offset to the width of the output video.
   * 
   *   - Value range: (0, 1).
   * 
   *   - Supports up to four decimal places, such as `0.9999`. The system truncates additional digits.
   * 
   * @example
   * 0.08
   */
  x?: string;
  /**
   * @remarks
   * The vertical offset of the watermark relative to the output video. If specified, this value overrides the corresponding parameter in the watermark template. You can specify the value in two ways:
   * 
   * - As an integer, representing the offset in pixels.
   * 
   *   - Unit: pixels.
   * 
   *   - Value range: [8, 4096].
   * 
   * - As a decimal, representing the ratio of the offset to the height of the output video.
   * 
   *   - Value range: (0, 1).
   * 
   *   - Supports up to four decimal places, such as `0.9999`. The system truncates additional digits.
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
   * Clip settings.
   */
  clip?: MediaConvertJobFeatureClip;
  /**
   * @remarks
   * Specifies the metadata for the output video container format, provided as JSON key-value pairs. Example: `{"key1":"value1","key2":"value2"}`.
   * 
   * - Maximum key length: 64 characters.
   * 
   * - Maximum value length: 512 characters.
   * 
   * You can add a maximum of four metadata key-value pairs.
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * A list of watermark settings to overlay on the video. If specified, these settings override the corresponding parameters in the specified watermark template.
   * 
   * - You can add a maximum of four watermarks per transcoding job.
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

