// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCacheReserveSpecRequest extends $dara.Model {
  autoPay?: boolean;
  chargeType?: string;
  instanceId?: string;
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

