// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MerchandisePlacementDetectionProResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * The normalized bounding box coordinates [x1,y1,x2,y2], with values in the range 0–1000.
   */
  bbox2d?: number[];
  /**
   * @remarks
   * The detected product name. The value is unknown if the name cannot be determined.
   * 
   * @example
   * unknown
   */
  detectedSkuName?: string;
  /**
   * @remarks
   * The bounding box index, starting from 1.
   * 
   * @example
   * 1
   */
  idx?: number;
  static names(): { [key: string]: string } {
    return {
      bbox2d: 'Bbox2d',
      detectedSkuName: 'DetectedSkuName',
      idx: 'Idx',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bbox2d: { 'type': 'array', 'itemType': 'number' },
      detectedSkuName: 'string',
      idx: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bbox2d)) {
      $dara.Model.validateArray(this.bbox2d);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandisePlacementDetectionProResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of valid bounding boxes.
   * 
   * @example
   * 3
   */
  boxCount?: number;
  /**
   * @remarks
   * The list of per-box detection details.
   */
  data?: MerchandisePlacementDetectionProResponseBodyDataData[];
  /**
   * @remarks
   * The usage information.
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
      data: { 'type': 'array', 'itemType': MerchandisePlacementDetectionProResponseBodyDataData },
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

export class MerchandisePlacementDetectionProResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The detection result of product display detection Pro.
   */
  data?: MerchandisePlacementDetectionProResponseBodyData;
  /**
   * @remarks
   * The response message or failure description.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 70CBEFDF-BB17-1EB3-8A21-569F3124738F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
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
      data: MerchandisePlacementDetectionProResponseBodyData,
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

