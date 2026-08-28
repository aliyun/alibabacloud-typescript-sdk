// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiduiAreaDeductionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of products and their detection boxes.
   * 
   * This parameter is required.
   */
  productsShrink?: string;
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
      productsShrink: 'Products',
      ragId: 'RagId',
      reqId: 'ReqId',
      targetImageUrl: 'TargetImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productsShrink: 'string',
      ragId: 'string',
      reqId: 'string',
      targetImageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

