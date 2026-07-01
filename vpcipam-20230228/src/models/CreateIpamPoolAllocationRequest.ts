// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpamPoolAllocationRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block to allocate from the IPAM pool.
   * 
   * > You must specify either the **Cidr** or **CidrMask** parameter.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The mask of the CIDR block to allocate from the IPAM pool.
   * 
   * > You must specify either the **Cidr** or **CidrMask** parameter.
   * 
   * @example
   * 24
   */
  cidrMask?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a value on your client to make sure that the value is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the request as the ClientToken. The RequestId may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Sends a check request. The custom reserved CIDR block is not created. The system checks for required parameters, request format, and service limits. If the check fails, an error is returned. If the check passes, the DryRunOperation error code is returned.
   * 
   * - **false** (default): Sends a normal request. After the request passes the check, a 2xx HTTP status code is returned and the custom reserved CIDR block is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the custom reserved CIDR block.
   * 
   * The description must be 1 to 256 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. The default value is an empty string.
   * 
   * @example
   * test description
   */
  ipamPoolAllocationDescription?: string;
  /**
   * @remarks
   * The name of the custom reserved CIDR block.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test name
   */
  ipamPoolAllocationName?: string;
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
   * The ID of the region where you want to create the custom reserved CIDR block.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      cidrMask: 'CidrMask',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamPoolAllocationDescription: 'IpamPoolAllocationDescription',
      ipamPoolAllocationName: 'IpamPoolAllocationName',
      ipamPoolId: 'IpamPoolId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      cidrMask: 'number',
      clientToken: 'string',
      dryRun: 'boolean',
      ipamPoolAllocationDescription: 'string',
      ipamPoolAllocationName: 'string',
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

