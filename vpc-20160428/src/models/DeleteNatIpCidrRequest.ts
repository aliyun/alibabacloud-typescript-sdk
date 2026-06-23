// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNatIpCidrRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without deleting the NAT CIDR block. The system checks the AccessKey pair, the authorization of the Resource Access Management (RAM) user, and the required parameters. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a Normal request. If the check succeeds, a 2xx HTTP status code is returned and the NAT CIDR block is deleted.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the NAT gateway to which the NAT CIDR block to be deleted belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-gw8v16wgvtq26vh59****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The NAT CIDR block to be deleted.
   * 
   * - Before you delete a NAT CIDR block, delete all NAT IP addresses in the CIDR block.
   * - The default NAT CIDR block cannot be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.0.0/24
   */
  natIpCidr?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the NAT gateway instance to which the NAT CIDR block to be deleted belongs.
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

