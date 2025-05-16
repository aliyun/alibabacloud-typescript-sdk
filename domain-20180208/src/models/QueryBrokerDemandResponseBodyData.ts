// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBrokerDemandResponseBodyData extends $dara.Model {
  auditStatus?: number;
  /**
   * @example
   * 13300000001
   */
  bargainSellerMobile?: string;
  /**
   * @example
   * 100
   */
  bargainSellerPrice?: number;
  /**
   * @example
   * SE20183915FI0178
   */
  bizId?: string;
  /**
   * @example
   * taobao.com
   */
  demandDomain?: string;
  /**
   * @example
   * 1
   */
  demandPrice?: number;
  description?: string;
  email?: string;
  /**
   * @example
   * 13300000000
   */
  mobile?: string;
  orderType?: number;
  partnerDomain?: string;
  /**
   * @example
   * test.com
   */
  payDomain?: string;
  /**
   * @example
   * 100
   */
  payPrice?: number;
  /**
   * @example
   * 1524800053000
   */
  payTime?: number;
  /**
   * @example
   * 1
   */
  produceType?: number;
  /**
   * @example
   * 1524800053000
   */
  publishTime?: number;
  purchaseStatus?: number;
  /**
   * @example
   * 18800
   */
  servicePayPrice?: number;
  settleBasePrice?: number;
  /**
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      bargainSellerMobile: 'BargainSellerMobile',
      bargainSellerPrice: 'BargainSellerPrice',
      bizId: 'BizId',
      demandDomain: 'DemandDomain',
      demandPrice: 'DemandPrice',
      description: 'Description',
      email: 'Email',
      mobile: 'Mobile',
      orderType: 'OrderType',
      partnerDomain: 'PartnerDomain',
      payDomain: 'PayDomain',
      payPrice: 'PayPrice',
      payTime: 'PayTime',
      produceType: 'ProduceType',
      publishTime: 'PublishTime',
      purchaseStatus: 'PurchaseStatus',
      servicePayPrice: 'ServicePayPrice',
      settleBasePrice: 'SettleBasePrice',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      bargainSellerMobile: 'string',
      bargainSellerPrice: 'number',
      bizId: 'string',
      demandDomain: 'string',
      demandPrice: 'number',
      description: 'string',
      email: 'string',
      mobile: 'string',
      orderType: 'number',
      partnerDomain: 'string',
      payDomain: 'string',
      payPrice: 'number',
      payTime: 'number',
      produceType: 'number',
      publishTime: 'number',
      purchaseStatus: 'number',
      servicePayPrice: 'number',
      settleBasePrice: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

