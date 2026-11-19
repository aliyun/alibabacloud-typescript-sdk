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
   * The region where the geo-redundancy backup set is stored.
   * > 
   * > - This parameter is required when you query geo-redundancy backups.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * Specifies whether to query only the restorable time ranges that support database and table restoration. Valid values:
   * - **true**: returns only the restorable time ranges that support database and table restoration.
   * - **false** (default): returns all restorable time ranges.
   */
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
   * The region of the source instance for geo-redundancy backups.
   * > 
   * > - This parameter is required when you query geo-redundancy backups.
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

