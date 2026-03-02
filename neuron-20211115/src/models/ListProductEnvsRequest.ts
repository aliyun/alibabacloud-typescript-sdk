// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductEnvsRequest extends $dara.Model {
  /**
   * @example
   * 42
   */
  companyId?: number;
  /**
   * @example
   * 12
   */
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      productId: 'productId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      productId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

