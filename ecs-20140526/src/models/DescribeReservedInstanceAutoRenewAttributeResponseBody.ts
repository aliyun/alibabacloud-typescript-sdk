// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeReservedInstanceAutoRenewAttributeResponseBodyReservedInstanceRenewAttributes } from "./DescribeReservedInstanceAutoRenewAttributeResponseBodyReservedInstanceRenewAttributes";


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

