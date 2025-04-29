// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributes } from "./DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributes";


export class DescribeDedicatedHostAutoRenewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array that consists of dedicated host auto-renewal attributes.
   */
  dedicatedHostRenewAttributes?: DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostRenewAttributes: 'DedicatedHostRenewAttributes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostRenewAttributes: DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dedicatedHostRenewAttributes && typeof (this.dedicatedHostRenewAttributes as any).validate === 'function') {
      (this.dedicatedHostRenewAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

