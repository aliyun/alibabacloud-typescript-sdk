// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostsResponseBodyDedicatedHosts } from "./DescribeDedicatedHostsResponseBodyDedicatedHosts";


export class DescribeDedicatedHostsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The host group ID.
   * 
   * @example
   * dhg-7a9xxxxxxxx
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The host information.
   */
  dedicatedHosts?: DescribeDedicatedHostsResponseBodyDedicatedHosts;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C860658E-68A6-46C1-AF6E-3AE7C4D3CACF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHosts: 'DedicatedHosts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroupId: 'string',
      dedicatedHosts: DescribeDedicatedHostsResponseBodyDedicatedHosts,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dedicatedHosts && typeof (this.dedicatedHosts as any).validate === 'function') {
      (this.dedicatedHosts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

