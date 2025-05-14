// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarksOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the text size was adjusted based on the output video dimensions. true / false, default: false
   * 
   * @example
   * false
   */
  adaptive?: string;
  /**
   * @remarks
   * The border color.
   * 
   * @example
   * #006400
   */
  borderColor?: string;
  /**
   * @remarks
   * The border width.
   * 
   * @example
   * 0
   */
  borderWidth?: number;
  /**
   * @remarks
   * The watermark text. Base64 encoding is not required. The string must be encoded in UTF-8.
   * 
   * @example
   * 测试水印
   */
  content?: string;
  /**
   * @remarks
   * The transparency of the watermark.
   * 
   * @example
   * 1.0
   */
  fontAlpha?: string;
  /**
   * @remarks
   * The color of the text.
   * 
   * @example
   * #006400
   */
  fontColor?: string;
  /**
   * @remarks
   * The font of the text.
   * 
   * @example
   * SimSun
   */
  fontName?: string;
  /**
   * @remarks
   * The size of the text.
   * 
   * @example
   * 16
   */
  fontSize?: number;
  /**
   * @remarks
   * The distance of the watermark from the left edge.
   * 
   * @example
   * 10
   */
  left?: string;
  /**
   * @remarks
   * The distance of the watermark from the top edge.
   * 
   * @example
   * 10
   */
  top?: string;
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
      left: 'Left',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptive: 'string',
      borderColor: 'string',
      borderWidth: 'number',
      content: 'string',
      fontAlpha: 'string',
      fontColor: 'string',
      fontName: 'string',
      fontSize: 'number',
      left: 'string',
      top: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

