// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNatGatewayNatTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * **true**: performs a dry run without upgrading the Internet NAT gateway type. The system checks whether your AccessKey pair is valid, whether Resource Access Management (RAM) users are granted permissions, and whether the required parameters are specified. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * 
   * **false** (default): performs a dry run and sends the request. If the check succeeds, a 2xx HTTP status code is returned and the Internet NAT gateway type is upgraded.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the standard Internet NAT gateway that you want to upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-bp1b0lic8uz4r6vf2****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The type of the Internet NAT gateway. Set the value to **Enhanced**, which specifies an enhanced Internet NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * Enhanced
   */
  natType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the standard Internet NAT gateway that you want to upgrade.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The vSwitch to which the enhanced Internet NAT gateway belongs after the upgrade.
   * 
   * >If you do not set this parameter, the system randomly creates the enhanced Internet NAT gateway on any vSwitch in the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp17nszybg8epodke****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      natGatewayId: 'NatGatewayId',
      natType: 'NatType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      natGatewayId: 'string',
      natType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

