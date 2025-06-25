// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  bizSource?: string;
  /**
   * @remarks
   * The product type.
   * 
   * Valid value:
   * 
   * *   CloudApp: App Streaming
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      bizSource: 'BizSource',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizSource: 'string',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

