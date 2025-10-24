// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWaterMarkTemplateResponseBodyWaterMarkTemplateRatioRefer extends $dara.Model {
  /**
   * @remarks
   * The horizontal offset of the watermark relative to the output video image. Default value: **0**. The default value indicates no offset. The value can be an integer or a decimal.
   * 
   * *   **Integer**: the vertical offset. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the horizontal offset to the width of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   * 
   * @example
   * 0.51
   */
  dx?: string;
  /**
   * @remarks
   * The vertical offset of the watermark relative to the output video image. Default value: **0**. The default value indicates no offset. The value can be an integer or a decimal.
   * 
   * *   **Integer**: the vertical offset. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the vertical offset to the height of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   * 
   * @example
   * 0.28
   */
  dy?: string;
  /**
   * @remarks
   * The height of the watermark image in the output video. The value can be an integer or a decimal.
   * 
   * *   **Integer**: the height of the watermark image. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the height of the watermark image to the height of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   * 
   * @example
   * 0.33
   */
  height?: string;
  /**
   * @remarks
   * The width of the watermark image in the output video. The value can be an integer or a decimal.
   * 
   * *   **Integer**: the width of the watermark image. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the width of the watermark image to the width of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   * 
   * @example
   * 0.36
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWaterMarkTemplateResponseBodyWaterMarkTemplateTimeline extends $dara.Model {
  /**
   * @remarks
   * The display duration of the watermark. Default value: **ToEND**. The default value indicates that the watermark is displayed until the video ends.
   * 
   * @example
   * ToEND
   */
  duration?: string;
  /**
   * @remarks
   * The beginning of the time range during which the watermark is displayed.
   * 
   * *   Unit: seconds.
   * *   Default value: **0**.
   * 
   * @example
   * 0
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWaterMarkTemplateResponseBodyWaterMarkTemplate extends $dara.Model {
  /**
   * @remarks
   * The horizontal offset. Unit: pixel.
   * 
   * @example
   * 10
   */
  dx?: string;
  /**
   * @remarks
   * The vertical offset. Unit: pixel.
   * 
   * @example
   * 5
   */
  dy?: string;
  /**
   * @remarks
   * The height of the watermark image. Unit: pixel.
   * 
   * @example
   * 30
   */
  height?: string;
  /**
   * @remarks
   * The ID of the watermark template. We recommend that you keep this ID for subsequent operation calls.
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
   * example-watermark-****
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
  ratioRefer?: AddWaterMarkTemplateResponseBodyWaterMarkTemplateRatioRefer;
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
   * The status of the watermark template.
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
  timeline?: AddWaterMarkTemplateResponseBodyWaterMarkTemplateTimeline;
  /**
   * @remarks
   * The type of the watermark. Valid values:
   * 
   * *   Image: an image watermark.
   * *   Text: a text watermark.
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
   * 10
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
      ratioRefer: AddWaterMarkTemplateResponseBodyWaterMarkTemplateRatioRefer,
      referPos: 'string',
      state: 'string',
      timeline: AddWaterMarkTemplateResponseBodyWaterMarkTemplateTimeline,
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

export class AddWaterMarkTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54BB917F-DD35-4F32-BABA-E60E31B21W63
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the watermark template.
   */
  waterMarkTemplate?: AddWaterMarkTemplateResponseBodyWaterMarkTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waterMarkTemplate: 'WaterMarkTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waterMarkTemplate: AddWaterMarkTemplateResponseBodyWaterMarkTemplate,
    };
  }

  validate() {
    if(this.waterMarkTemplate && typeof (this.waterMarkTemplate as any).validate === 'function') {
      (this.waterMarkTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

