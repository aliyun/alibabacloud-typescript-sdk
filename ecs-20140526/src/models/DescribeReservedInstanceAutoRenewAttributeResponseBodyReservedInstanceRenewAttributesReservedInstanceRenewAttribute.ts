// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReservedInstanceAutoRenewAttributeResponseBodyReservedInstanceRenewAttributesReservedInstanceRenewAttribute extends $dara.Model {
  /**
   * @remarks
   * The auto-renewal duration.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The unit of the auto-renewal duration.
   * 
   * Valid values: Year and Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The auto-renewal status of the reserved instance. Valid values:
   * 
   * *   AutoRenewal: automatically renews the reserved instance.
   * *   Normal: manually renews the reserved instances.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  /**
   * @remarks
   * The ID of the reserved instance.
   * 
   * @example
   * ecsri-ajdfaj****
   */
  reservedInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      periodUnit: 'PeriodUnit',
      renewalStatus: 'RenewalStatus',
      reservedInstanceId: 'ReservedInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      periodUnit: 'string',
      renewalStatus: 'string',
      reservedInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

