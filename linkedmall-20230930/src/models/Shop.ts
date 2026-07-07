// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CooperationShop } from "./CooperationShop";


export class Shop extends $dara.Model {
  /**
   * @remarks
   * The partner shops.
   * 
   * @example
   * 12***01
   */
  cooperationShops?: CooperationShop[];
  /**
   * @remarks
   * The ID of the distributor.
   * 
   * @example
   * 12****09
   */
  distributorId?: string;
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
   * The ID of the purchaser.
   * 
   * @example
   * PID56****2304
   */
  purchaserId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 48A34399-A72C-1E23-8388-7E63****E927
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the shop.
   * 
   * @example
   * 22****09
   */
  shopId?: string;
  /**
   * @remarks
   * The name of the shop.
   * 
   * @example
   * 儿童分销店铺
   */
  shopName?: string;
  /**
   * @remarks
   * The type of the shop.
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
   * The status of the shop.
   * 
   * @example
   * Working
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cooperationShops: 'cooperationShops',
      distributorId: 'distributorId',
      endDate: 'endDate',
      purchaserId: 'purchaserId',
      requestId: 'requestId',
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
      distributorId: 'string',
      endDate: 'string',
      purchaserId: 'string',
      requestId: 'string',
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

