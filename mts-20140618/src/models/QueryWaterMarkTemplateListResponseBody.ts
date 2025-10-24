// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWaterMarkTemplateListResponseBodyNonExistWids extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer extends $dara.Model {
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
   * 0.4
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

export class QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline extends $dara.Model {
  /**
   * @remarks
   * The display duration of the watermark. Default value: **ToEND**. The default value indicates that the watermark is displayed until the video ends.
   * 
   * @example
   * 10
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

export class QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateList extends $dara.Model {
  waterMarkTemplate?: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplate[];
  static names(): { [key: string]: string } {
    return {
      waterMarkTemplate: 'WaterMarkTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMarkTemplate: { 'type': 'array', 'itemType': QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateListWaterMarkTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.waterMarkTemplate)) {
      $dara.Model.validateArray(this.waterMarkTemplate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaterMarkTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the templates that do not exist.
   */
  nonExistWids?: QueryWaterMarkTemplateListResponseBodyNonExistWids;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 17079AF5-6276-51A9-B755-D26594C93F3C
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the watermark templates.
   */
  waterMarkTemplateList?: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateList;
  static names(): { [key: string]: string } {
    return {
      nonExistWids: 'NonExistWids',
      requestId: 'RequestId',
      waterMarkTemplateList: 'WaterMarkTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistWids: QueryWaterMarkTemplateListResponseBodyNonExistWids,
      requestId: 'string',
      waterMarkTemplateList: QueryWaterMarkTemplateListResponseBodyWaterMarkTemplateList,
    };
  }

  validate() {
    if(this.nonExistWids && typeof (this.nonExistWids as any).validate === 'function') {
      (this.nonExistWids as any).validate();
    }
    if(this.waterMarkTemplateList && typeof (this.waterMarkTemplateList as any).validate === 'function') {
      (this.waterMarkTemplateList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

