// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCollectionPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the log type.
   * 
   * @example
   * access_log
   */
  dataCode?: string;
  /**
   * @remarks
   * The code of the product.
   * 
   * @example
   * oss
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      dataCode: 'dataCode',
      productCode: 'productCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCode: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

