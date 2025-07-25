// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpamPoolNextAvailableCidrRequest extends $dara.Model {
  /**
   * @remarks
   * CIDR to be allocated.
   * 
   * >  You must enter at least one of the CidrBlock and CidrMask fields.
   * 
   * @example
   * 172.68.0.0/26
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The length of the CIDR mask to be allocated.
   * 
   * >  You must enter at least one of the CidrBlock and CidrMask fields.
   * 
   * @example
   * 26
   */
  cidrMask?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the IPAM pool.
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
   * >  If the IPAM pool has the region attribute, this parameter is set to the effective region of the IPAM pool. If not, this is set to the hosted region.
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

