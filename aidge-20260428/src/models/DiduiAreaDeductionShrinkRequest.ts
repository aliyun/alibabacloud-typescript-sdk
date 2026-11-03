// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiduiAreaDeductionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of products and bounding boxes.
   * 
   * This parameter is required.
   */
  productsShrink?: string;
  /**
   * @remarks
   * The ID of the customer\\"s dedicated SKU vector database, which determines the database used for retrieval. The database must be created through the database creation process in advance.
   * 
   * @example
   * rag_xxx
   */
  ragId?: string;
  /**
   * @remarks
   * The optional business request ID, used for end-to-end Tracing Analysis.
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

