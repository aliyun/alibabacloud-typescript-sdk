// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamWatermarksResponseBodyWatermarkListWatermark extends $dara.Model {
  /**
   * @remarks
   * The description of the watermark.
   * 
   * @example
   * my watermark
   */
  description?: string;
  /**
   * @remarks
   * The height of the watermark. Unit: pixels.
   * 
   * @example
   * 200
   */
  height?: number;
  /**
   * @remarks
   * The name of the watermark.
   * 
   * @example
   * livewatermark****
   */
  name?: string;
  /**
   * @remarks
   * The position of the watermark.
   * 
   * *   TopLeft: the upper-left corner.
   * *   TopRight: the upper-right corner.
   * *   BottomLeft: the lower-left corner.
   * *   BottomRight: the lower-right corner.
   * 
   * @example
   * TopRight
   */
  offsetCorner?: string;
  /**
   * @remarks
   * The URL of the watermark image.
   * 
   * @example
   * http://example.com
   */
  pictureUrl?: string;
  /**
   * @remarks
   * The height of the background video. Unit: pixels.
   * 
   * @example
   * 1080
   */
  refHeight?: number;
  /**
   * @remarks
   * The width of the background video. Unit: pixels.
   * 
   * @example
   * 1920
   */
  refWidth?: number;
  /**
   * @remarks
   * The number of watermark rules configured for the domain name.
   * 
   * @example
   * 12
   */
  ruleCount?: number;
  /**
   * @remarks
   * The ID of the watermark template.
   * 
   * @example
   * 445409ec-7eaa-4 61d-8f29-4bec2eb9 ****
   */
  templateId?: string;
  /**
   * @remarks
   * The transparency of the watermark. A smaller value indicates a more transparent watermark. Valid values: 0 to 255.
   * 
   * @example
   * 255
   */
  transparency?: number;
  /**
   * @remarks
   * The watermark type.
   * 
   * *   0: image. Only image watermarks are supported.
   * *   1: text.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The offset of the watermark along the x-axis. Unit: pixels.
   * 
   * >  The value of the RefWidth parameter is used as the reference. If the OffsetCorner parameter is set to TopLeft, the value of the XOffset parameter indicates the x-axis offset of the upper-left corner of the watermark relative to that of the background video. The directions from the coordinate axes to the center of the background video are positive. In other words, the x-axis is positive toward the right.
   * 
   * @example
   * 50.0
   */
  XOffset?: number;
  /**
   * @remarks
   * The offset of the watermark along the y-axis. Unit: pixels.
   * 
   * >  The value of the RefHeight parameter is used as the reference. If the OffsetCorner parameter is set to TopLeft, the value of the YOffset parameter indicates the y-axis offset of the upper-left corner of the watermark relative to that of the background video. The directions from the coordinate axes to the center of the background video are positive. In other words, the y-axis is positive downward.
   * 
   * @example
   * 100.0
   */
  YOffset?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      height: 'Height',
      name: 'Name',
      offsetCorner: 'OffsetCorner',
      pictureUrl: 'PictureUrl',
      refHeight: 'RefHeight',
      refWidth: 'RefWidth',
      ruleCount: 'RuleCount',
      templateId: 'TemplateId',
      transparency: 'Transparency',
      type: 'Type',
      XOffset: 'XOffset',
      YOffset: 'YOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      height: 'number',
      name: 'string',
      offsetCorner: 'string',
      pictureUrl: 'string',
      refHeight: 'number',
      refWidth: 'number',
      ruleCount: 'number',
      templateId: 'string',
      transparency: 'number',
      type: 'number',
      XOffset: 'number',
      YOffset: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamWatermarksResponseBodyWatermarkList extends $dara.Model {
  watermark?: DescribeLiveStreamWatermarksResponseBodyWatermarkListWatermark[];
  static names(): { [key: string]: string } {
    return {
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watermark: { 'type': 'array', 'itemType': DescribeLiveStreamWatermarksResponseBodyWatermarkListWatermark },
    };
  }

  validate() {
    if(Array.isArray(this.watermark)) {
      $dara.Model.validateArray(this.watermark);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamWatermarksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5c6a2a0df228-4a64- af62-20e91b9676b3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of watermark templates that meet the specified conditions.
   * 
   * @example
   * 100
   */
  total?: number;
  /**
   * @remarks
   * Details of the watermark templates.
   */
  watermarkList?: DescribeLiveStreamWatermarksResponseBodyWatermarkList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      watermarkList: 'WatermarkList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      watermarkList: DescribeLiveStreamWatermarksResponseBodyWatermarkList,
    };
  }

  validate() {
    if(this.watermarkList && typeof (this.watermarkList as any).validate === 'function') {
      (this.watermarkList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

