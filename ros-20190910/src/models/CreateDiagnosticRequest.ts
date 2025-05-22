// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnosticRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword in the diagnosis.
   * 
   * You can specify the ID of the stack that you want to diagnose.
   * 
   * This parameter is required.
   * 
   * @example
   * 37A5679B-8488-5A5D-8D5C-90E66A577A5D
   */
  diagnosticKey?: string;
  /**
   * @remarks
   * The type of the item that is diagnosed. Set the value to Stack, which specifies that the stack is diagnosed.
   * 
   * @example
   * Stack
   */
  diagnosticType?: string;
  /**
   * @remarks
   * The language of the diagnostic report to be generated. Only Chinese and English are supported.
   * 
   * Valid values:
   * 
   * *   zh-cn
   * *   en
   * 
   * @example
   * zh-cn
   */
  lang?: string;
  /**
   * @remarks
   * The name of the product that is diagonosed.
   * 
   * @example
   * ros
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosticKey: 'DiagnosticKey',
      diagnosticType: 'DiagnosticType',
      lang: 'Lang',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosticKey: 'string',
      diagnosticType: 'string',
      lang: 'string',
      product: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

