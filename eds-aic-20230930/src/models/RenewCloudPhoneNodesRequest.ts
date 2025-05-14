// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewCloudPhoneNodesRequest extends $dara.Model {
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the auto-renewal feature.
   * 
   * Valid values:
   * 
   * *   true: enables the auto-renewal feature. In this case, the system automatically renews the instance upon expiration.
   * *   false (default): disables the auto-renewal feature. In this case, you need to manually renew the instance upon expiration.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The cloud phone matrix IDs.
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The subscription duration. The unit is specified by `PeriodUnit`. Valid values:
   * 
   * *   When `PeriodUnit` is set to **year**: 1.
   * *   When `PeriodUnit` is set to **month**: 1, 2, 3, and 6.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * Valid values:
   * 
   * *   Month (default)
   * *   Year
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      nodeIds: 'NodeIds',
      period: 'Period',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

