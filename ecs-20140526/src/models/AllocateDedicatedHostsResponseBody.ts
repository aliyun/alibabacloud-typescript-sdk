// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateDedicatedHostsResponseBodyDedicatedHostIdSets extends $dara.Model {
  dedicatedHostId?: string[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostId)) {
      $dara.Model.validateArray(this.dedicatedHostId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateDedicatedHostsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of dedicated host IDs.
   */
  dedicatedHostIdSets?: AllocateDedicatedHostsResponseBodyDedicatedHostIdSets;
  /**
   * @remarks
   * The ID of the order.
   * 
   * >  This parameter has a return value only when the dedicated host is a subscription one (request parameter **ChargeType set to PrePaid**).
   * 
   * @example
   * 23841229****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E2A664A6-2933-4C64-88AE-5033D003****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostIdSets: 'DedicatedHostIdSets',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostIdSets: AllocateDedicatedHostsResponseBodyDedicatedHostIdSets,
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.dedicatedHostIdSets && typeof (this.dedicatedHostIdSets as any).validate === 'function') {
      (this.dedicatedHostIdSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

