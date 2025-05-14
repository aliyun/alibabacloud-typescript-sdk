// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsFile } from "./SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsFile";
import { SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline } from "./SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline";


export class SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * The horizontal offset of the watermark relative to the output video. Default value: 0.
   * 
   * The following value types are supported:
   * 
   * *   Integer: the pixel value of the horizontal offset.
   * 
   *     *   Valid values: [8,4096].
   *     *   Unit: pixels.
   * 
   * *   Decimal: the ratio of the horizontal offset to the width of the output video.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 10
   */
  dx?: string;
  /**
   * @remarks
   * The vertical offset of the watermark relative to the output video. Default value: 0.
   * 
   * The following value types are supported:
   * 
   * *   Integer: the pixel value of the horizontal offset.
   * 
   *     *   Valid values: [8,4096].
   *     *   Unit: pixels.
   * 
   * *   Decimal: the ratio of the vertical offset to the height of the output video.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 10
   */
  dy?: string;
  /**
   * @remarks
   * The watermark image file.
   */
  file?: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsFile;
  /**
   * @remarks
   * The height of the watermark image in the output video. The following value types are supported:
   * 
   * *   Integer: the pixel value of the watermark height.
   * 
   *     *   Valid values: [8,4096].
   *     *   Unit: pixels.
   * 
   * *   Decimal: the ratio of the watermark height to the height of the output video.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 32
   */
  height?: string;
  /**
   * @remarks
   * The position of the watermark.
   * 
   * *   Valid values: TopRight, TopLeft, BottomRight, and BottomLeft.
   * *   Default value: TopRight.
   * 
   * @example
   * TopLeft
   */
  referPos?: string;
  /**
   * @remarks
   * The time settings of the dynamic watermark.
   */
  timeline?: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline;
  /**
   * @remarks
   * The width of the watermark in the output video. The following value types are supported:
   * 
   * *   Integer: the pixel value of the watermark width.
   * 
   *     *   Valid values: [8,4096].
   *     *   Unit: pixels.
   * 
   * *   Decimal: the ratio of the watermark width to the width of the output video.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excessive digits are automatically discarded.
   * 
   * @example
   * 32
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      file: 'File',
      height: 'Height',
      referPos: 'ReferPos',
      timeline: 'Timeline',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      file: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsFile,
      height: 'string',
      referPos: 'string',
      timeline: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarksOverwriteParamsTimeline,
      width: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    if(this.timeline && typeof (this.timeline as any).validate === 'function') {
      (this.timeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

