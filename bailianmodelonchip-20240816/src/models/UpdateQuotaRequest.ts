// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQuotaRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * 2
   */
  durationType?: number;
  /**
   * @example
   * 10
   */
  licenseCount?: number;
  /**
   * @example
   * 100
   */
  maxQps?: number;
  /**
   * @example
   * 2
   */
  packageType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nnjNQQv3ZjyYE7H4
   */
  productKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  purchaseType?: number;
  /**
   * @example
   * 421
   */
  recordId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10.0
   */
  settlementAmount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520539530998273
   */
  tenantId?: string;
  /**
   * @example
   * 10000
   */
  tokenNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  unitPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      durationType: 'durationType',
      licenseCount: 'licenseCount',
      maxQps: 'maxQps',
      packageType: 'packageType',
      productKey: 'productKey',
      purchaseType: 'purchaseType',
      recordId: 'recordId',
      settlementAmount: 'settlementAmount',
      tenantId: 'tenantId',
      tokenNumber: 'tokenNumber',
      unitPrice: 'unitPrice',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      durationType: 'number',
      licenseCount: 'number',
      maxQps: 'number',
      packageType: 'number',
      productKey: 'string',
      purchaseType: 'number',
      recordId: 'number',
      settlementAmount: 'number',
      tenantId: 'string',
      tokenNumber: 'number',
      unitPrice: 'number',
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

