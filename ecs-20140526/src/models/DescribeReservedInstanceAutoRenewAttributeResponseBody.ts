// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReservedInstanceAutoRenewAttributeResponseBodyReservedInstanceRenewAttributesReservedInstanceRenewAttribute extends $dara.Model {
  duration?: number;
  periodUnit?: string;
  renewalStatus?: string;
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

