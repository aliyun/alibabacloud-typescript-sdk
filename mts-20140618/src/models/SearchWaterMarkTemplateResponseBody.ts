// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateRatioRefer extends $dara.Model {
  /**
   * @remarks
   * The horizontal offset. Unit: pixel.
   * 
   * @example
   * 0.51
   */
  dx?: string;
  /**
   * @remarks
   * The timeline of the watermark.
   * 
   * @example
   * 0.2
   */
  dy?: string;
  /**
   * @remarks
   * The height of the watermark image. Unit: pixel.
   * 
   * @example
   * 0.33
   */
  height?: string;
  /**
   * @remarks
   * The width of the watermark image. Unit: pixel.
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

export class SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline extends $dara.Model {
  /**
   * @remarks
   * The horizontal offset of the watermark relative to the output video image. Default value: **0**. The default value indicates no offset.
   * 
   * The value can be an integer or a decimal.
   * 
   * *   **Integer**: the vertical offset. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the horizontal offset to the width of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   * 
   * @example
   * ToEND
   */
  duration?: string;
  /**
   * @remarks
   * The total number of returned entries.
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

export class SearchWaterMarkTemplateResponseBodyWaterMarkTemplateList extends $dara.Model {
  waterMarkTemplate?: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplate[];
  static names(): { [key: string]: string } {
    return {
      waterMarkTemplate: 'WaterMarkTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMarkTemplate: { 'type': 'array', 'itemType': SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplate },
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

export class SearchWaterMarkTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The width of the watermark image in the output video. The value can be an integer or a decimal.
   * 
   * *   **Integer**: the width of the watermark image. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the width of the watermark image to the width of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FC029D04-8F47-57FF-A759-23383C15617D
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the watermark. Valid values:
   * 
   * *   Image: an image watermark.
   * *   Text: a text watermark.
   * 
   * >  Only watermarks of the **Image** types are supported.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The height of the watermark image in the output video. The value can be an integer or a decimal.
   * 
   * *   **Integer**: the height of the watermark image. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the height of the watermark image to the height of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   */
  waterMarkTemplateList?: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateList;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      waterMarkTemplateList: 'WaterMarkTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      waterMarkTemplateList: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateList,
    };
  }

  validate() {
    if(this.waterMarkTemplateList && typeof (this.waterMarkTemplateList as any).validate === 'function') {
      (this.waterMarkTemplateList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

