// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCacheReserveSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Automatic payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Billing type. Valid values:
   * - PREPAY
   * - POSTPAY
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * esa-cr-9tuv*********
   */
  instanceId?: string;
  /**
   * @remarks
   * Cache requested size, in GB.
   * 
   * @example
   * 1000
   */
  targetQuotaGb?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      chargeType: 'ChargeType',
      instanceId: 'InstanceId',
      targetQuotaGb: 'TargetQuotaGb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      chargeType: 'string',
      instanceId: 'string',
      targetQuotaGb: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

