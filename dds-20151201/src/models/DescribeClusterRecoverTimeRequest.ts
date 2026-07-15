// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterRecoverTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp18f7d6b6a7****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region where the geo-redundancy backup set resides.
   * > 
   * > - This parameter is required when you query a geo-redundancy backup.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  onlyDbTableRecovery?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The region where the source instance of the geo-redundancy backup resides.
   * > 
   * > - This parameter is required when you query a geo-redundancy backup.
   * 
   * @example
   * cn-beijing
   */
  srcRegion?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      destRegion: 'DestRegion',
      onlyDbTableRecovery: 'OnlyDbTableRecovery',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      srcRegion: 'SrcRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      destRegion: 'string',
      onlyDbTableRecovery: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

