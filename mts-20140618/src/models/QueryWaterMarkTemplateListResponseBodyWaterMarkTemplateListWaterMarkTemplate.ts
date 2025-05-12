// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer } from "./QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer";
import { QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline } from "./QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline";


export class QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplate extends $dara.Model {
  /**
   * @remarks
   * The horizontal offset. Unit: pixel.
   * 
   * @example
   * 100
   */
  dx?: string;
  /**
   * @remarks
   * The vertical offset. Unit: pixel.
   * 
   * @example
   * 100
   */
  dy?: string;
  /**
   * @remarks
   * The height of the watermark image. Unit: pixel.
   * 
   * @example
   * 8
   */
  height?: string;
  /**
   * @remarks
   * The ID of the watermark template.
   * 
   * @example
   * 3780bd69b2b74540bc7b1096f564****
   */
  id?: string;
  /**
   * @remarks
   * The name of the watermark template.
   * 
   * @example
   * example-watermark
   */
  name?: string;
  /**
   * @remarks
   * The values of the Height, Width, Dx, and Dy parameters relative to the reference edges. If the values of the Height, Width, Dx, and Dy parameters are decimals between 0 and 1, the values are calculated by referring to the following edges in sequence:
   * 
   * *   **Width**: the width edge.
   * *   **Height**: the height edge.
   * *   **Long**: the long edge.
   * *   **Short**: the short edge.
   */
  ratioRefer?: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer;
  /**
   * @remarks
   * The position of the watermark. Valid values:
   * 
   * *   **TopRight**: the upper-right corner.
   * *   **TopLeft**: the upper-left corner.
   * *   **BottomRight**: the lower-right corner.
   * *   **BottomLeft**: the lower-left corner.
   * 
   * @example
   * TopRight
   */
  referPos?: string;
  /**
   * @remarks
   * The status of the watermark template. Valid values: Valid values:
   * 
   * *   **Normal**: The watermark template is normal.
   * *   **Deleted**: The watermark template is deleted.
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The timeline of the watermark.
   */
  timeline?: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline;
  /**
   * @remarks
   * The type of the watermark. Valid values:
   * 
   * *   Image: an image watermark.
   * *   Text: a text watermark.
   * 
   * > Only watermarks of the **Image** type are supported.
   * 
   * @example
   * Image
   */
  type?: string;
  /**
   * @remarks
   * The width of the watermark image. Unit: pixel.
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
      ratioRefer: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer,
      referPos: 'string',
      state: 'string',
      timeline: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline,
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

