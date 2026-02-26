// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CooperationShop } from "./CooperationShop";


export class Shop extends $dara.Model {
  /**
   * @example
   * 12***01
   */
  cooperationShops?: CooperationShop[];
  /**
   * @example
   * 12****09
   */
  distributorId?: string;
  /**
   * @example
   * 2024-09-09 00:00:00
   */
  endDate?: string;
  /**
   * @example
   * 56****2304
   */
  purchaserId?: string;
  /**
   * @example
   * 48A34399-A72C-1E23-8388-7E63****E927
   */
  requestId?: string;
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
   * 2023-09-09 00:00:00
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

