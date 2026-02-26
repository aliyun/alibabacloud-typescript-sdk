// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductQuery extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 22000009
   */
  distributorShopId?: string;
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  static names(): { [key: string]: string } {
    return {
      distributorShopId: 'distributorShopId',
      divisionCode: 'divisionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributorShopId: 'string',
      divisionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

