// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProductQuotaPageResponseBodyDataData extends $dara.Model {
  /**
   * @example
   * 2025-03-23 02:02:03
   */
  createTime?: string;
  /**
   * @example
   * 12
   */
  duration?: number;
  /**
   * @example
   * 2
   */
  durationType?: number;
  /**
   * @example
   * 2025-05-31 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * ID。
   * 
   * @example
   * 67241348
   */
  id?: number;
  /**
   * @example
   * 0
   */
  ifUnsubscribe?: number;
  /**
   * @example
   * 1
   */
  ifUsed?: number;
  /**
   * @example
   * 100
   */
  licenseCount?: number;
  /**
   * @example
   * 100
   */
  maxQps?: number;
  /**
   * @example
   * g6RD6uvFYNZv44ky
   */
  orderId?: string;
  /**
   * @example
   * 2oImhCz4f8XCviiM
   */
  productKey?: string;
  productName?: string;
  /**
   * @example
   * 1
   */
  purchaseModel?: number;
  /**
   * @example
   * 1
   */
  purchaseType?: number;
  /**
   * @example
   * 100.0
   */
  settlementFee?: number;
  /**
   * @example
   * 217037888563265
   */
  tenantId?: string;
  /**
   * @example
   * 10000
   */
  tokenNumber?: number;
  /**
   * @example
   * 1.0
   */
  unitPrice?: number;
  /**
   * @example
   * 2025-03-23 02:02:03
   */
  updateTime?: string;
  /**
   * @example
   * 123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      duration: 'duration',
      durationType: 'durationType',
      expireTime: 'expireTime',
      id: 'id',
      ifUnsubscribe: 'ifUnsubscribe',
      ifUsed: 'ifUsed',
      licenseCount: 'licenseCount',
      maxQps: 'maxQps',
      orderId: 'orderId',
      productKey: 'productKey',
      productName: 'productName',
      purchaseModel: 'purchaseModel',
      purchaseType: 'purchaseType',
      settlementFee: 'settlementFee',
      tenantId: 'tenantId',
      tokenNumber: 'tokenNumber',
      unitPrice: 'unitPrice',
      updateTime: 'updateTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      duration: 'number',
      durationType: 'number',
      expireTime: 'string',
      id: 'number',
      ifUnsubscribe: 'number',
      ifUsed: 'number',
      licenseCount: 'number',
      maxQps: 'number',
      orderId: 'string',
      productKey: 'string',
      productName: 'string',
      purchaseModel: 'number',
      purchaseType: 'number',
      settlementFee: 'number',
      tenantId: 'string',
      tokenNumber: 'number',
      unitPrice: 'number',
      updateTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

