// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRecoverTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  destRegion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  srcRegion?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      destRegion: 'DestRegion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      srcRegion: 'SrcRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      destRegion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      srcRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

