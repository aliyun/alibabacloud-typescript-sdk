// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDedicatedHostsChargeTypeResponseBodyFeeOfInstances } from "./ModifyDedicatedHostsChargeTypeResponseBodyFeeOfInstances";


export class ModifyDedicatedHostsChargeTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the charges for the order.
   */
  feeOfInstances?: ModifyDedicatedHostsChargeTypeResponseBodyFeeOfInstances;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 20413515388****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B61C08E5-403A-46A2-96C1-F7B1216DB10C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      feeOfInstances: 'FeeOfInstances',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feeOfInstances: ModifyDedicatedHostsChargeTypeResponseBodyFeeOfInstances,
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.feeOfInstances && typeof (this.feeOfInstances as any).validate === 'function') {
      (this.feeOfInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

