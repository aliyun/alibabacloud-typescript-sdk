// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunInstancesResponseBodyInstanceIdSets } from "./RunInstancesResponseBodyInstanceIdSets";


export class RunInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance IDs (`InstanceIdSet`).
   */
  instanceIdSets?: RunInstancesResponseBodyInstanceIdSets;
  /**
   * @remarks
   * The ID of the order. This parameter is returned only when `InstanceChargeType` is set to PrePaid.
   * 
   * @example
   * 123456****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 0.165
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIdSets: 'InstanceIdSets',
      orderId: 'OrderId',
      requestId: 'RequestId',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdSets: RunInstancesResponseBodyInstanceIdSets,
      orderId: 'string',
      requestId: 'string',
      tradePrice: 'number',
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

