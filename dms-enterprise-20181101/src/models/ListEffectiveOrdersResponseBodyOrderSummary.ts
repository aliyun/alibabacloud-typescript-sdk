// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEffectiveOrdersResponseBodyOrderSummaryOrderList } from "./ListEffectiveOrdersResponseBodyOrderSummaryOrderList";


export class ListEffectiveOrdersResponseBodyOrderSummary extends $dara.Model {
  /**
   * @remarks
   * The commodity code of DMS.
   * 
   * *   dms_pre_public_cn: DMS that uses the subscription billing method
   * *   dms_post_public_cn: DMS that uses the pay-as-you-go billing method
   * 
   * @example
   * dms_pre_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * *   **VersionType**: DMS that supports control modes
   * *   **SensitiveDataProtection**: DMS that supports sensitive data protection
   * 
   * @example
   * VersionType
   */
  commodityType?: string;
  /**
   * @remarks
   * Details about the orders.
   */
  orderList?: ListEffectiveOrdersResponseBodyOrderSummaryOrderList[];
  /**
   * @remarks
   * The sum of the number of instances that you can use DMS to manage in all orders.
   * 
   * @example
   * 12
   */
  totalQuota?: number;
  /**
   * @remarks
   * The control mode of DMS. Valid values:
   * 
   * *   **stand**: Stable Change
   * *   **safety**: Security Collaboration
   * 
   * @example
   * safety
   */
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityType: 'CommodityType',
      orderList: 'OrderList',
      totalQuota: 'TotalQuota',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityType: 'string',
      orderList: { 'type': 'array', 'itemType': ListEffectiveOrdersResponseBodyOrderSummaryOrderList },
      totalQuota: 'number',
      versionType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderList)) {
      $dara.Model.validateArray(this.orderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

