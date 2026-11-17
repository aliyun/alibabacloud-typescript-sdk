// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CooperationShop } from "./CooperationShop";


export class ShopPageDataResult extends $dara.Model {
  /**
   * @remarks
   * The partner shops.
   * 
   * @example
   * [{"shopId":"22000019","cooperationCompanyId":"11200003","cooperationShopId":"21000026"}]
   */
  cooperationShops?: CooperationShop[];
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2023-09-11T12:22:24.000+08:00
   */
  endDate?: string;
  /**
   * @remarks
   * The purchaser ID.
   * 
   * @example
   * PID56****2304
   */
  purchaserId?: string;
  /**
   * @remarks
   * The shop ID.
   * 
   * @example
   * 22****09
   */
  shopId?: string;
  /**
   * @remarks
   * The shop name.
   * 
   * @example
   * Child seat distribution shop
   */
  shopName?: string;
  /**
   * @remarks
   * The shop type.
   * 
   * @example
   * DistributorQYG
   */
  shopType?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2023-09-11T12:22:24.000+08:00
   */
  startDate?: string;
  /**
   * @remarks
   * The shop status.
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

