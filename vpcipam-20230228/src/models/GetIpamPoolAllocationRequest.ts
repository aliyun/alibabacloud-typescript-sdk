// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpamPoolAllocationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the IPAM pool allocation.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamPoolAllocationId?: string;
  /**
   * @remarks
   * The region of the IPAM pool to which the CIDR block allocation belongs.
   * 
   * > If the IPAM pool has a region attribute, this parameter specifies the region of the IPAM pool. If the IPAM pool does not have a region attribute, this parameter specifies the managed region of IPAM.
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

