// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CooperationShop } from "./CooperationShop";


export class ShopPageDataResult extends $dara.Model {
  /**
   * @remarks
   * Partner shops
   * 
   * @example
   * 12****01
   */
  cooperationShops?: CooperationShop[];
  /**
   * @remarks
   * End time
   * 
   * @example
   * 2023-09-11T12:22:24.000+08:00
   */
  endDate?: string;
  /**
   * @remarks
   * Purchaser ID
   * 
   * @example
   * PID56****2304
   */
  purchaserId?: string;
  /**
   * @remarks
   * Shop ID
   * 
   * @example
   * 22****09
   */
  shopId?: string;
  /**
   * @remarks
   * Shop name
   * 
   * @example
   * 儿童座椅分销店铺
   */
  shopName?: string;
  /**
   * @remarks
   * Shop type
   * 
   * @example
   * DistributorQYG
   */
  shopType?: string;
  /**
   * @remarks
   * Start time
   * 
   * @example
   * 2023-09-11T12:22:24.000+08:00
   */
  startDate?: string;
  /**
   * @remarks
   * Shop status
   * 
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

