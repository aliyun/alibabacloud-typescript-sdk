// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiduiAreaDeductionRequestProductsBoxes extends $dara.Model {
  /**
   * @remarks
   * The bottom boundary of the detection box.
   * 
   * This parameter is required.
   * 
   * @example
   * 689
   */
  bottom?: number;
  /**
   * @remarks
   * The left boundary of the detection box.
   * 
   * This parameter is required.
   * 
   * @example
   * 763
   */
  left?: number;
  /**
   * @remarks
   * The right boundary of the detection box.
   * 
   * This parameter is required.
   * 
   * @example
   * 904
   */
  right?: number;
  /**
   * @remarks
   * The top boundary of the detection box.
   * 
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
   * The detection boxes for the current SKU. Coordinate values range from 0 to 1000.
   * 
   * This parameter is required.
   */
  boxes?: DiduiAreaDeductionRequestProductsBoxes[];
  /**
   * @remarks
   * The unique ID of the SKU.
   * 
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
   * The list of products and their detection boxes.
   * 
   * This parameter is required.
   */
  products?: DiduiAreaDeductionRequestProducts[];
  /**
   * @remarks
   * The ID of the customer-specific SKU vector store that determines which store is used for retrieval. The store must be created in advance through the store creation process.
   * 
   * @example
   * rag_xxx
   */
  ragId?: string;
  /**
   * @remarks
   * The optional business request ID used for Tracing Analysis.
   * 
   * @example
   * didui-request-001
   */
  reqId?: string;
  /**
   * @remarks
   * The HTTPS URL of the overall floor display image.
   * 
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

