// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the network channel. The name must consist of lowercase letters, digits, and underscores (_). It must start and end with a letter or a digit. The name can be up to 64 characters long.
   * 
   * This parameter is required.
   * 
   * @example
   * ch4
   */
  channelName?: string;
  /**
   * @remarks
   * A client token that ensures the request is idempotent. The client generates this token. The token must be unique for each request. It is case-sensitive and can be up to 64 ASCII characters long.
   * 
   * @example
   * 6000170000591aed949d0f5********************
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The notes.
   * 
   * @example
   * test
   */
  notes?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-re*********
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the destination instance.
   * 
   * @example
   * pc-*****************
   */
  targetDBClusterId?: string;
  /**
   * @remarks
   * The IP address of the destination instance.
   * 
   * @example
   * 192.**.**.46
   */
  targetIp?: string;
  /**
   * @remarks
   * The port of the destination instance.
   * 
   * @example
   * 9032
   */
  targetPort?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the endpoint is located.
   * 
   * @example
   * vpc-25cdvfeq58pl****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      notes: 'Notes',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      targetDBClusterId: 'TargetDBClusterId',
      targetIp: 'TargetIp',
      targetPort: 'TargetPort',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      clientToken: 'string',
      DBClusterId: 'string',
      notes: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      targetDBClusterId: 'string',
      targetIp: 'string',
      targetPort: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

