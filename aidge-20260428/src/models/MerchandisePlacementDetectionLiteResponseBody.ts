// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MerchandisePlacementDetectionLiteResponseBodyDataResultGroundingRegions extends $dara.Model {
  /**
   * @remarks
   * The 2D bounding box in the format of [top-left x, top-left y, bottom-right x, bottom-right y]. The values range from 0 to 1000. The left coordinate is less than the right coordinate, and the top coordinate is less than the bottom coordinate.
   */
  bbox2d?: number[];
  /**
   * @remarks
   * The target category.
   * 
   * @example
   * price_tag
   */
  label?: string;
  /**
   * @remarks
   * The confirmable short name or text of up to 24 characters. This field is an empty string when the text is unclear.
   * 
   * @example
   * 5.50
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      bbox2d: 'Bbox_2d',
      label: 'Label',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bbox2d: { 'type': 'array', 'itemType': 'number' },
      label: 'string',
      text: 'string',
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

export class MerchandisePlacementDetectionLiteResponseBodyDataResultGrounding extends $dara.Model {
  /**
   * @remarks
   * The coverage status. Valid values:
   * - complete: The relevant visible targets are complete.
   * - partial: Only some targets are valid or recognizable.
   * - Empty string: No valid supplementary grounding results are obtained.
   * 
   * @example
   * complete
   */
  coverage?: string;
  /**
   * @remarks
   * The target array, which contains up to 12 items. This array can be empty when no relevant targets are found.
   */
  regions?: MerchandisePlacementDetectionLiteResponseBodyDataResultGroundingRegions[];
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      regions: { 'type': 'array', 'itemType': MerchandisePlacementDetectionLiteResponseBodyDataResultGroundingRegions },
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandisePlacementDetectionLiteResponseBodyDataResultProductsBoxes extends $dara.Model {
  /**
   * @remarks
   * The bottom coordinate.
   * 
   * @example
   * 200
   */
  bottom?: number;
  /**
   * @remarks
   * The left coordinate.
   * 
   * @example
   * 100
   */
  left?: number;
  /**
   * @remarks
   * The right coordinate.
   * 
   * @example
   * (\\"874\\")
   */
  right?: number;
  /**
   * @remarks
   * The bottom coordinate.
   * 
   * @example
   * 100
   */
  top?: number;
  static names(): { [key: string]: string } {
    return {
      bottom: 'Bottom',
      left: 'Left',
      right: 'Right',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottom: 'number',
      left: 'number',
      right: 'number',
      top: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandisePlacementDetectionLiteResponseBodyDataResultProducts extends $dara.Model {
  /**
   * @remarks
   * The bounding boxes corresponding to the SKU.
   */
  boxes?: MerchandisePlacementDetectionLiteResponseBodyDataResultProductsBoxes[];
  /**
   * @remarks
   * The recognition code, which is obtained by removing the trailing _ce from the recognition name.
   * 
   * @example
   * sku_test
   */
  skuId?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': MerchandisePlacementDetectionLiteResponseBodyDataResultProductsBoxes },
      skuId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.boxes)) {
      $dara.Model.validateArray(this.boxes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandisePlacementDetectionLiteResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The supplementary element grounding results.
   */
  grounding?: MerchandisePlacementDetectionLiteResponseBodyDataResultGrounding;
  /**
   * @remarks
   * The product items.
   */
  products?: MerchandisePlacementDetectionLiteResponseBodyDataResultProducts[];
  /**
   * @remarks
   * The deduplicated list of SkuIds.
   */
  skuIds?: string[];
  /**
   * @remarks
   * The result type, which is fixed to sku.
   * 
   * @example
   * sku
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      grounding: 'Grounding',
      products: 'Products',
      skuIds: 'SkuIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grounding: MerchandisePlacementDetectionLiteResponseBodyDataResultGrounding,
      products: { 'type': 'array', 'itemType': MerchandisePlacementDetectionLiteResponseBodyDataResultProducts },
      skuIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.grounding && typeof (this.grounding as any).validate === 'function') {
      (this.grounding as any).validate();
    }
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    if(Array.isArray(this.skuIds)) {
      $dara.Model.validateArray(this.skuIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandisePlacementDetectionLiteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The result.
   */
  result?: MerchandisePlacementDetectionLiteResponseBodyDataResult;
  /**
   * @remarks
   * The usage map. The value is {"ProcessingCount":1} for a successful call, and an empty object for a failed call.
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: MerchandisePlacementDetectionLiteResponseBodyDataResult,
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
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

export class MerchandisePlacementDetectionLiteResponseBody extends $dara.Model {
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
   * The returned result.
   */
  data?: MerchandisePlacementDetectionLiteResponseBodyData;
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
      data: MerchandisePlacementDetectionLiteResponseBodyData,
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

