// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamWatermarksResponseBodyWatermarkListWatermark extends $dara.Model {
  description?: string;
  height?: number;
  name?: string;
  offsetCorner?: string;
  pictureUrl?: string;
  refHeight?: number;
  refWidth?: number;
  ruleCount?: number;
  templateId?: string;
  transparency?: number;
  type?: number;
  XOffset?: number;
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

