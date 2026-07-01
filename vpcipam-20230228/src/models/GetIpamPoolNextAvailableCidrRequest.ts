// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpamPoolNextAvailableCidrRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block to be allocated.
   * 
   * > You must specify CidrBlock or CidrMask.
   * 
   * @example
   * 172.68.0.0/26
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The mask length of the CIDR block to be allocated.
   * 
   * > You must specify CidrBlock or CidrMask.
   * 
   * @example
   * 26
   */
  cidrMask?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique value for this parameter from your client. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the RequestId as the ClientToken. The RequestId of each request is unique.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID of the IPAM pool.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * The region of the IPAM pool.
   * 
   * > If the IPAM pool has a region property, this parameter specifies the region where the pool is active. If the IPAM pool does not have a region property, this parameter specifies the managed region of IPAM.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      cidrMask: 'CidrMask',
      clientToken: 'ClientToken',
      ipamPoolId: 'IpamPoolId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      cidrMask: 'number',
      clientToken: 'string',
      ipamPoolId: 'string',
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

