// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiduiAreaDeductionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  productsShrink?: string;
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

