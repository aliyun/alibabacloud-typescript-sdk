// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CooperationShop extends $dara.Model {
  /**
   * @remarks
   * The partner enterprise ID.
   * 
   * @example
   * 11200003
   */
  cooperationCompanyId?: string;
  /**
   * @remarks
   * The partner store ID.
   * 
   * @example
   * 21000026
   */
  cooperationShopId?: string;
  /**
   * @remarks
   * The store ID.
   * 
   * @example
   * 22000019
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

