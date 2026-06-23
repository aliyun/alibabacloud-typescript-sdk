// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatIpRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the AccessKey pair, the authorization of the Resource Access Management (RAM) user, and the required parameters. If the request fails the dry run, the corresponding error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a Normal request. If the request passes the check, a 2xx HTTP status code is returned and the NAT IP address is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The IP prefix CIDR block to create.
   * 
   * The IP prefix CIDR block must be within the reserved CIDR block of the vSwitch where the NAT gateway resides, and the reserved CIDR block must not be in use. The prefix mask must be /28.
   * 
   * @example
   * 192.168.0.0/28
   */
  ipv4Prefix?: string;
  /**
   * @remarks
   * The number of IP prefixes to automatically assign.
   * 
   * The IP prefixes are randomly assigned from unallocated reserved CIDR blocks of the vSwitch where the NAT gateway resides. Valid values: 1 to 10.
   * 
   * @example
   * 1
   */
  ipv4PrefixCount?: number;
  /**
   * @remarks
   * The instance ID of the VPC NAT gateway to which the NAT IP address belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-gw8v16wgvtq26vh59****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The NAT IP address to create.
   * 
   * If you do not specify this parameter, the system randomly assigns an IP address from the NAT CIDR block.
   * 
   * @example
   * 192.168.0.34
   */
  natIp?: string;
  /**
   * @remarks
   * The NAT CIDR block from which the NAT IP address is created.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/24
   */
  natIpCidr?: string;
  /**
   * @remarks
   * The description of the NAT IP address.
   * 
   * The description must be 2 to 256 characters in length and must start with a letter or Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  natIpDescription?: string;
  /**
   * @remarks
   * The name of the NAT IP address.
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `http://` or `https://`.
   * 
   * @example
   * newnatip
   */
  natIpName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the NAT gateway instance to which the NAT IP address belongs.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-central-1
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipv4Prefix: 'Ipv4Prefix',
      ipv4PrefixCount: 'Ipv4PrefixCount',
      natGatewayId: 'NatGatewayId',
      natIp: 'NatIp',
      natIpCidr: 'NatIpCidr',
      natIpDescription: 'NatIpDescription',
      natIpName: 'NatIpName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipv4Prefix: 'string',
      ipv4PrefixCount: 'number',
      natGatewayId: 'string',
      natIp: 'string',
      natIpCidr: 'string',
      natIpDescription: 'string',
      natIpName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

