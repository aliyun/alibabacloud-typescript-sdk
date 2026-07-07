// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CooperationShop extends $dara.Model {
  /**
   * @remarks
   * The partner company ID.
   */
  cooperationCompanyId?: string;
  /**
   * @remarks
   * The partner shop ID.
   */
  cooperationShopId?: string;
  /**
   * @remarks
   * The shop ID.
   */
  shopId?: string;
  static names(): { [key: string]: string } {
    return {
      cooperationCompanyId: 'cooperationCompanyId',
      cooperationShopId: 'cooperationShopId',
      shopId: 'shopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cooperationCompanyId: 'string',
      cooperationShopId: 'string',
      shopId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

