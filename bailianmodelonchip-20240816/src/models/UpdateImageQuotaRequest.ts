// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageQuotaRequest extends $dara.Model {
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
   * 100
   */
  imageCount?: number;
  /**
   * @example
   * 10
   */
  licenseCount?: number;
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
   * 2oImhCz4f8XCviiM
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
   * 355
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
      imageCount: 'imageCount',
      licenseCount: 'licenseCount',
      packageType: 'packageType',
      productKey: 'productKey',
      purchaseType: 'purchaseType',
      recordId: 'recordId',
      settlementAmount: 'settlementAmount',
      tenantId: 'tenantId',
      unitPrice: 'unitPrice',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      durationType: 'number',
      imageCount: 'number',
      licenseCount: 'number',
      packageType: 'number',
      productKey: 'string',
      purchaseType: 'number',
      recordId: 'number',
      settlementAmount: 'number',
      tenantId: 'string',
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

