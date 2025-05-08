// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCacheReserveSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @example
   * esa-cr-9tuv*********
   */
  instanceId?: string;
  /**
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

