// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MerchandisePlacementDetectionResponseBodyDataDataTop1 extends $dara.Model {
  /**
   * @remarks
   * The similarity score, ranging from 0 to 1.
   * 
   * @example
   * 0.53
   */
  score?: number;
  /**
   * @remarks
   * The ID of the recalled product.
   * 
   * @example
   * 123
   */
  skuId?: string;
  /**
   * @remarks
   * The name of the recalled product.
   * 
   * @example
   * Bright Milk 500ml.
   */
  skuName?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      skuId: 'SkuId',
      skuName: 'SkuName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      skuId: 'string',
      skuName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandisePlacementDetectionResponseBodyDataDataTopk extends $dara.Model {
  /**
   * @remarks
   * The recall rank.
   * 
   * @example
   * 1
   */
  rank?: number;
  /**
   * @remarks
   * The similarity score, ranging from 0 to 1.
   * 
   * @example
   * 0.82
   */
  score?: number;
  /**
   * @remarks
   * The ID of the recalled product.
   * 
   * @example
   * 123
   */
  skuId?: string;
  /**
   * @remarks
   * The name of the recalled product.
   * 
   * @example
   * Bright Milk 500ml.
   */
  skuName?: string;
  static names(): { [key: string]: string } {
    return {
      rank: 'Rank',
      score: 'Score',
      skuId: 'SkuId',
      skuName: 'SkuName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rank: 'number',
      score: 'number',
      skuId: 'string',
      skuName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandisePlacementDetectionResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * The position coordinates of the detection box in the format [x1,y1,x2,y2].
   */
  bbox?: number[];
  /**
   * @remarks
   * The failure reason for the detection box. The value is null if the detection is successful.
   * 
   * @example
   * "embedding failed"
   */
  error?: string;
  /**
   * @remarks
   * The index of the detection box.
   * 
   * @example
   * 1
   */
  idx?: number;
  /**
   * @remarks
   * The top-1 recalled product for the detection box.
   */
  top1?: MerchandisePlacementDetectionResponseBodyDataDataTop1;
  /**
   * @remarks
   * The list of top-K recalled products for the detection box.
   */
  topk?: MerchandisePlacementDetectionResponseBodyDataDataTopk[];
  static names(): { [key: string]: string } {
    return {
      bbox: 'Bbox',
      error: 'Error',
      idx: 'Idx',
      top1: 'Top1',
      topk: 'Topk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bbox: { 'type': 'array', 'itemType': 'number' },
      error: 'string',
      idx: 'number',
      top1: MerchandisePlacementDetectionResponseBodyDataDataTop1,
      topk: { 'type': 'array', 'itemType': MerchandisePlacementDetectionResponseBodyDataDataTopk },
    };
  }

  validate() {
    if(Array.isArray(this.bbox)) {
      $dara.Model.validateArray(this.bbox);
    }
    if(this.top1 && typeof (this.top1 as any).validate === 'function') {
      (this.top1 as any).validate();
    }
    if(Array.isArray(this.topk)) {
      $dara.Model.validateArray(this.topk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandisePlacementDetectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of valid detection boxes.
   * 
   * @example
   * 100
   */
  boxCount?: number;
  /**
   * @remarks
   * The list of retrieval details for each detection box.
   */
  data?: MerchandisePlacementDetectionResponseBodyDataData[];
  /**
   * @remarks
   * The usage information. The key is the usage metric name, and the value is the count.
   * 
   * @example
   * {"ProcessingCount":1}
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      boxCount: 'BoxCount',
      data: 'Data',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxCount: 'number',
      data: { 'type': 'array', 'itemType': MerchandisePlacementDetectionResponseBodyDataData },
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandisePlacementDetectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is not returned if the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The display detection result.
   */
  data?: MerchandisePlacementDetectionResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is not returned if the call is successful.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: MerchandisePlacementDetectionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

