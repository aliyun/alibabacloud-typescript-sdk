// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MerchandisePriceTagDetectionResponseBodyDataResultGroundingRegions extends $dara.Model {
  /**
   * @remarks
   * The bounding box coordinates.
   */
  bbox2d?: number[];
  /**
   * @remarks
   * The label.
   * 
   * @example
   * price_tag
   */
  label?: string;
  /**
   * @remarks
   * The recognized text.
   * 
   * @example
   * 5.50
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      bbox2d: 'Bbox2d',
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

export class MerchandisePriceTagDetectionResponseBodyDataResultGrounding extends $dara.Model {
  /**
   * @remarks
   * The coverage.
   * 
   * @example
   * complete
   */
  coverage?: string;
  /**
   * @remarks
   * The region list.
   */
  regions?: MerchandisePriceTagDetectionResponseBodyDataResultGroundingRegions[];
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      regions: { 'type': 'array', 'itemType': MerchandisePriceTagDetectionResponseBodyDataResultGroundingRegions },
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

export class MerchandisePriceTagDetectionResponseBodyDataResultPriceTagsLocation extends $dara.Model {
  /**
   * @remarks
   * The bottom boundary of the detection box.
   * 
   * @example
   * 369
   */
  bottom?: string;
  /**
   * @remarks
   * The left boundary of the detection box.
   * 
   * @example
   * 796
   */
  left?: string;
  /**
   * @remarks
   * The right boundary of the detection box.
   * 
   * @example
   * 820
   */
  right?: string;
  /**
   * @remarks
   * The top boundary of the detection box.
   * 
   * @example
   * 338
   */
  top?: string;
  static names(): { [key: string]: string } {
    return {
      bottom: 'Bottom',
      left: 'Left',
      right: 'Right',
      top: 'top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottom: 'string',
      left: 'string',
      right: 'string',
      top: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandisePriceTagDetectionResponseBodyDataResultPriceTags extends $dara.Model {
  /**
   * @remarks
   * The location.
   */
  location?: MerchandisePriceTagDetectionResponseBodyDataResultPriceTagsLocation;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 6
   */
  originalPrice?: string;
  /**
   * @remarks
   * The selling price, retained as a string to avoid being parsed as a reserved word or reserved character.
   * 
   * @example
   * 5.50
   */
  price?: string;
  /**
   * @remarks
   * The associated product code.
   * 
   * @example
   * 001
   */
  skuCode?: string;
  /**
   * @remarks
   * The associated product name.
   * 
   * @example
   * sku_test
   */
  skuName?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      originalPrice: 'OriginalPrice',
      price: 'Price',
      skuCode: 'SkuCode',
      skuName: 'SkuName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: MerchandisePriceTagDetectionResponseBodyDataResultPriceTagsLocation,
      originalPrice: 'string',
      price: 'string',
      skuCode: 'string',
      skuName: 'string',
    };
  }

  validate() {
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandisePriceTagDetectionResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The localization information.
   */
  grounding?: MerchandisePriceTagDetectionResponseBodyDataResultGrounding;
  /**
   * @remarks
   * The price tag list. This can be an empty array if no price tags are recognized under normal conditions.
   */
  priceTags?: MerchandisePriceTagDetectionResponseBodyDataResultPriceTags[];
  /**
   * @remarks
   * The value is fixed to priceTag.
   * 
   * @example
   * priceTag
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      grounding: 'Grounding',
      priceTags: 'PriceTags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grounding: MerchandisePriceTagDetectionResponseBodyDataResultGrounding,
      priceTags: { 'type': 'array', 'itemType': MerchandisePriceTagDetectionResponseBodyDataResultPriceTags },
      type: 'string',
    };
  }

  validate() {
    if(this.grounding && typeof (this.grounding as any).validate === 'function') {
      (this.grounding as any).validate();
    }
    if(Array.isArray(this.priceTags)) {
      $dara.Model.validateArray(this.priceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandisePriceTagDetectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The detection and recognition result details.
   */
  result?: MerchandisePriceTagDetectionResponseBodyDataResult;
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
      result: 'Result',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: MerchandisePriceTagDetectionResponseBodyDataResult,
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

export class MerchandisePriceTagDetectionResponseBody extends $dara.Model {
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
   * The scenario recognition result.
   */
  data?: MerchandisePriceTagDetectionResponseBodyData;
  /**
   * @remarks
   * The return message or failure description.
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
      data: MerchandisePriceTagDetectionResponseBodyData,
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

