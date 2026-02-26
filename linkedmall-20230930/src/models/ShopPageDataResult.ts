// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CooperationShop } from "./CooperationShop";


export class ShopPageDataResult extends $dara.Model {
  /**
   * @example
   * 12****01
   */
  cooperationShops?: CooperationShop[];
  /**
   * @example
   * 2023-09-01 00:00:00
   */
  endDate?: string;
  /**
   * @example
   * 56****2304
   */
  purchaserId?: string;
  /**
   * @example
   * 22****09
   */
  shopId?: string;
  shopName?: string;
  /**
   * @example
   * Distribution
   */
  shopType?: string;
  /**
   * @example
   * 2023-09-01 00:00:00
   */
  startDate?: string;
  /**
   * @example
   * Working
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cooperationShops: 'cooperationShops',
      endDate: 'endDate',
      purchaserId: 'purchaserId',
      shopId: 'shopId',
      shopName: 'shopName',
      shopType: 'shopType',
      startDate: 'startDate',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cooperationShops: { 'type': 'array', 'itemType': CooperationShop },
      endDate: 'string',
      purchaserId: 'string',
      shopId: 'string',
      shopName: 'string',
      shopType: 'string',
      startDate: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cooperationShops)) {
      $dara.Model.validateArray(this.cooperationShops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

