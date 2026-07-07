// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseCacheReserveRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: false. Valid values:
   * - true: Enables automatic payment.
   * - false: Disables automatic payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * - true: Enables auto-renewal.
   * - false: Disables auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing type. Valid values:
   * - PREPAY: upfront.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The cache reserve region.
   * - HK: Hong Kong (China)
   * - CN-beijing: Chinese mainland - Beijing
   * 
   * @example
   * HK
   */
  crRegion?: string;
  /**
   * @remarks
   * The purchase period. Unit: months.
   * 
   * @example
   * 3
   */
  period?: number;
  /**
   * @remarks
   * The cache reserve specification. Unit: GB.
   * 
   * @example
   * 512000
   */
  quotaGb?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      crRegion: 'CrRegion',
      period: 'Period',
      quotaGb: 'QuotaGb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      chargeType: 'string',
      crRegion: 'string',
      period: 'number',
      quotaGb: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

