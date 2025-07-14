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

export class DescribeReservedInstanceAutoRenewAttributeResponseBodyReservedInstanceRenewAttributes extends $dara.Model {
  reservedInstanceRenewAttribute?: DescribeReservedInstanceAutoRenewAttributeResponseBodyReservedInstanceRenewAttributesReservedInstanceRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      reservedInstanceRenewAttribute: 'ReservedInstanceRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedInstanceRenewAttribute: { 'type': 'array', 'itemType': DescribeReservedInstanceAutoRenewAttributeResponseBodyReservedInstanceRenewAttributesReservedInstanceRenewAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.reservedInstanceRenewAttribute)) {
      $dara.Model.validateArray(this.reservedInstanceRenewAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedInstanceAutoRenewAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the auto-renewal settings of the reserved instances.
   */
  reservedInstanceRenewAttributes?: DescribeReservedInstanceAutoRenewAttributeResponseBodyReservedInstanceRenewAttributes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      reservedInstanceRenewAttributes: 'ReservedInstanceRenewAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      reservedInstanceRenewAttributes: DescribeReservedInstanceAutoRenewAttributeResponseBodyReservedInstanceRenewAttributes,
    };
  }

  validate() {
    if(this.reservedInstanceRenewAttributes && typeof (this.reservedInstanceRenewAttributes as any).validate === 'function') {
      (this.reservedInstanceRenewAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

