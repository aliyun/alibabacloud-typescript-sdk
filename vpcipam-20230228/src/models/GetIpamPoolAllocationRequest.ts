// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpamPoolAllocationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to which CIDR blocks are allocated from the IPAM pool.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamPoolAllocationId?: string;
  /**
   * @remarks
   * The region of the IPAM pool.
   * 
   * >  If the IPAM pool to which CIDR allocation belongs has the region attribute, this parameter is the region of the IPAM pool. If not, this parameter is the IPAM hosted region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipamPoolAllocationId: 'IpamPoolAllocationId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamPoolAllocationId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

