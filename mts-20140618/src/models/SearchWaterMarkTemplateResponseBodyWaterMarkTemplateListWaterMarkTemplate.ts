// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer } from "./SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer";
import { SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline } from "./SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline";


export class SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplate extends $dara.Model {
  /**
   * @remarks
   * The name of the watermark template.
   * 
   * @example
   * 100
   */
  dx?: string;
  /**
   * @remarks
   * The values of the Height, Width, Dx, and Dy parameters relative to the reference edges. If the values of the Height, Width, Dx, and Dy parameters are decimals between 0 and 1, the values are calculated by referring to the following edges in sequence:
   * 
   * *   **Width**: the width edge.
   * *   **Height**: the height edge.
   * *   **Long**: the long edge.
   * *   **Short**: the short edge.
   * 
   * @example
   * 100
   */
  dy?: string;
  /**
   * @remarks
   * The ID of the watermark template.
   * 
   * @example
   * 8
   */
  height?: string;
  /**
   * @remarks
   * The vertical offset. Unit: pixel.
   * 
   * @example
   * 88c6ca184c0e4578645b665e2a12****
   */
  id?: string;
  /**
   * @remarks
   * The width of the watermark image in the output video. The value can be an integer or a decimal.
   * 
   * *   **Integer**: the width of the watermark image. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the width of the watermark image to the width of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   * 
   * @example
   * example-watermark
   */
  name?: string;
  /**
   * @remarks
   * The status of the watermark template. Valid values: Valid values:
   * 
   * *   **Normal**: The watermark template is normal.
   * *   **Deleted**: The watermark template is deleted.
   */
  ratioRefer?: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer;
  /**
   * @remarks
   * The beginning of the time range during which the watermark is displayed.
   * 
   * *   Unit: seconds.
   * *   Default value: **0**.
   * 
   * @example
   * TopRight
   */
  referPos?: string;
  /**
   * @remarks
   * The display duration of the watermark. Default value: **ToEND**. The default value indicates that the watermark is displayed until the video ends.
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The timeline of the watermark.
   */
  timeline?: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline;
  /**
   * @remarks
   * The position of the watermark. Valid values:
   * 
   * *   TopRight: the upper-right corner.
   * *   TopLeft: the upper-left corner.
   * *   BottomRight: the lower-right corner.
   * *   BottomLeft: the lower-left corner.
   * 
   * @example
   * Image
   */
  type?: string;
  /**
   * @remarks
   * The vertical offset. Unit: pixel.
   * 
   * @example
   * 8
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      id: 'Id',
      name: 'Name',
      ratioRefer: 'RatioRefer',
      referPos: 'ReferPos',
      state: 'State',
      timeline: 'Timeline',
      type: 'Type',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      id: 'string',
      name: 'string',
      ratioRefer: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer,
      referPos: 'string',
      state: 'string',
      timeline: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline,
      type: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.ratioRefer && typeof (this.ratioRefer as any).validate === 'function') {
      (this.ratioRefer as any).validate();
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

