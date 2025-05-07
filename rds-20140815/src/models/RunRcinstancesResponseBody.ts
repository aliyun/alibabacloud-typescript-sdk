// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunRCInstancesResponseBodyInstanceIdSets } from "./RunRcinstancesResponseBodyInstanceIdSets";


export class RunRCInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance IDs (InstanceIdSet).
   */
  instanceIdSets?: RunRCInstancesResponseBodyInstanceIdSets;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 237850846720798
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 535BD857-E88F-5B4F-A18C-FAF59A74741F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdSets: 'InstanceIdSets',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdSets: RunRCInstancesResponseBodyInstanceIdSets,
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceIdSets && typeof (this.instanceIdSets as any).validate === 'function') {
      (this.instanceIdSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

