// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SegmentHeadResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * 180
   */
  height?: number;
  /**
   * @example
   * http://viapi-cn-shanghai-dha-segmenter.oss-cn-shanghai.aliyuncs.com/upload/result_headsegmenter/2020-6-2/invi_headsegmenter_015910809094981099086_TAamhR.png?Expires=1591082709&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=xuUE%2FbYeB9LpR18VXawOVeutQU****
   */
  imageURL?: string;
  /**
   * @example
   * 116
   */
  width?: number;
  /**
   * @example
   * 445
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

export class SegmentHeadResponseBodyData extends $dara.Model {
  elements?: SegmentHeadResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': SegmentHeadResponseBodyDataElements },
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

export class SegmentHeadResponseBody extends $dara.Model {
  data?: SegmentHeadResponseBodyData;
  /**
   * @example
   * 89BBDA42-E1CA-426E-9A46-C703D8DBB1E2
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
      data: SegmentHeadResponseBodyData,
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

