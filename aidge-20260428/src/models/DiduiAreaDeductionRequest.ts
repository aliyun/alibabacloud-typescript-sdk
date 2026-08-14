// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiduiAreaDeductionRequestProductsBoxes extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 689
   */
  bottom?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 763
   */
  left?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 904
   */
  right?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 606
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

export class DiduiAreaDeductionRequestProducts extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  boxes?: DiduiAreaDeductionRequestProductsBoxes[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6901234579
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
      boxes: { 'type': 'array', 'itemType': DiduiAreaDeductionRequestProductsBoxes },
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

export class DiduiAreaDeductionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  products?: DiduiAreaDeductionRequestProducts[];
  /**
   * @example
   * rag_xxx
   */
  ragId?: string;
  /**
   * @example
   * didui-request-001
   */
  reqId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/didui.jpg
   */
  targetImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      products: 'Products',
      ragId: 'RagId',
      reqId: 'ReqId',
      targetImageUrl: 'TargetImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      products: { 'type': 'array', 'itemType': DiduiAreaDeductionRequestProducts },
      ragId: 'string',
      reqId: 'string',
      targetImageUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

