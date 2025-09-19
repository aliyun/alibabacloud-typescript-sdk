// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddIpamPoolCidrRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block to be provisioned. 
   * > For private top-level pools, provisioning can only be done by entering a CIDR block.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
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
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
   * Provision CIDR address segments through a mask method.  
   * > The public IPv6 top-level pool only supports provisioning via a mask.
   * 
   * @example
   * 24
   */
  netmaskLength?: number;
  /**
   * @remarks
   * The ID of the region where the IPAM instance is hosted.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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

