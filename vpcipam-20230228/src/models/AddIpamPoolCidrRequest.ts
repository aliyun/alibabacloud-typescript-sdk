// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddIpamPoolCidrRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block to provision.
   * 
   * > Private top-level pools support provisioning only by specifying a CIDR block.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. A client-generated value that is unique across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the RequestId of the API request as the ClientToken. The RequestId is different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without provisioning a CIDR block for the IPAM pool. The system checks the required parameters, request format, and business limits. If the check fails, the corresponding error is returned. If the check succeeds, the error code DryRunOperation is returned.
   * - **false** (default): sends the request. After the check succeeds, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
   * Provisions a CIDR block by specifying a netmask length.
   * 
   * > Public IPv6 top-level pools support provisioning only by specifying a netmask length.
   * 
   * @example
   * 24
   */
  netmaskLength?: number;
  /**
   * @remarks
   * The ID of the IPAM hosted region.
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
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamPoolId: 'IpamPoolId',
      netmaskLength: 'NetmaskLength',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ipamPoolId: 'string',
      netmaskLength: 'number',
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

