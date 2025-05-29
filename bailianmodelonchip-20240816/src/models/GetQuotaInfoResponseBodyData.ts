// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * 20
   */
  activeLicenseCount?: number;
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
   * el3SzmCU2p0x4RBc
   */
  productKey?: string;
  /**
   * @example
   * 1
   */
  purchaseModel?: number;
  /**
   * @example
   * 51505222
   */
  tenantId?: string;
  /**
   * @example
   * 100000
   */
  tokenNumber?: number;
  /**
   * @example
   * 123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      activeLicenseCount: 'activeLicenseCount',
      duration: 'duration',
      durationType: 'durationType',
      licenseCount: 'licenseCount',
      maxQps: 'maxQps',
      productKey: 'productKey',
      purchaseModel: 'purchaseModel',
      tenantId: 'tenantId',
      tokenNumber: 'tokenNumber',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeLicenseCount: 'number',
      duration: 'number',
      durationType: 'number',
      licenseCount: 'number',
      maxQps: 'number',
      productKey: 'string',
      purchaseModel: 'number',
      tenantId: 'string',
      tokenNumber: 'number',
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

