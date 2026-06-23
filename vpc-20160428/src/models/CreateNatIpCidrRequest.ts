// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatIpCidrRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without creating the NAT CIDR block. The system checks the required parameters, request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the check succeeds, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the VPC NAT gateway for which you want to create the NAT CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-gw8v16wgvtq26vh59****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The NAT CIDR block to create.
   * 
   * The new CIDR block must meet the following conditions:
   * 
   * - It must belong to 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16 and their subnets.
   * - The subnet mask must be 16 to 32 bits in length.
   * - It cannot overlap with the private CIDR block of the VPC to which the VPC NAT gateway belongs. If you want to transform a private endpoint to another address within the VPC private network CIDR block, create a vSwitch in the corresponding VPC private network CIDR block, and then create a new VPC NAT gateway in the vSwitch to provide private network address transform service.
   * - To use a public CIDR block as the NAT CIDR block, the CIDR block must belong to the user CIDR block of the VPC to which the VPC NAT gateway belongs. For more information about user CIDR blocks, see [What is a user CIDR block?](https://help.aliyun.com/document_detail/185311.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.0.0/24
   */
  natIpCidr?: string;
  /**
   * @remarks
   * The description of the NAT CIDR block.
   * 
   * The description must be 2 to 256 characters in length and must start with a letter or Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * mycidr
   */
  natIpCidrDescription?: string;
  /**
   * @remarks
   * The name of the NAT CIDR block.
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `http://` or `https://`.
   * 
   * @example
   * newcidr
   */
  natIpCidrName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the NAT gateway instance to which the NAT CIDR block belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
      natGatewayId: 'NatGatewayId',
      natIpCidr: 'NatIpCidr',
      natIpCidrDescription: 'NatIpCidrDescription',
      natIpCidrName: 'NatIpCidrName',
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
      natGatewayId: 'string',
      natIpCidr: 'string',
      natIpCidrDescription: 'string',
      natIpCidrName: 'string',
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

