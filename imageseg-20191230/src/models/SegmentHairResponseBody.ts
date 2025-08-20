// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SegmentHairResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * 180
   */
  height?: number;
  /**
   * @example
   * http://viapi-cn-shanghai-dha-segmenter.oss-cn-shanghai.aliyuncs.com/upload/result_HeadSegmenter/2021-12-31/invi_HeadSegmenter_016409228383064285967296_iPLUXA.png?Expires=1640924638&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=wpKOqSar1bYvGmlTMryfEH2Q9I****
   */
  imageURL?: string;
  /**
   * @example
   * 113
   */
  width?: number;
  /**
   * @example
   * 446
   */
  x?: number;
  /**
   * @example
   * 102
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      imageURL: 'ImageURL',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      imageURL: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentHairResponseBodyData extends $dara.Model {
  elements?: SegmentHairResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': SegmentHairResponseBodyDataElements },
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentHairResponseBody extends $dara.Model {
  data?: SegmentHairResponseBodyData;
  /**
   * @example
   * D6C24839-91A7-41DA-B31F-98F08EF80CC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SegmentHairResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

