// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The amount of reserved computing resources.
   * Valid values: 0ACU to 4096ACU. Step size: 16. Each AnalyticDB compute unit (ACU) is approximately equal to 1 core and 4 GB memory.
   * 
   * @example
   * 32ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * LegacyForm
   */
  productForm?: string;
  productVersion?: string;
  reservedNodeCount?: number;
  reservedNodeSize?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secondaryVSwitchId?: string;
  secondaryZoneId?: string;
  /**
   * @remarks
   * The number of shards that you want to change during the data migration.
   * 
   * @example
   * 128
   */
  shardNumber?: string;
  /**
   * @remarks
   * The amount of reserved storage resources. Valid values: 0ACU to 2064ACU. The value must be in increments of the number of ACUs specified by the StorageResourceSize parameter × 3 (default value: 24ACU). Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * >  This parameter must be specified with a unit.
   * 
   * @example
   * 24ACU
   */
  storageResource?: string;
  /**
   * @remarks
   * The node specifications of reserved storage resources. Valid values: 8ACU, 12ACU, and 16ACU.
   * 
   * @example
   * 8ACU
   */
  storageResourceSize?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      DBClusterId: 'DBClusterId',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productForm: 'ProductForm',
      productVersion: 'ProductVersion',
      reservedNodeCount: 'ReservedNodeCount',
      reservedNodeSize: 'ReservedNodeSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secondaryVSwitchId: 'SecondaryVSwitchId',
      secondaryZoneId: 'SecondaryZoneId',
      shardNumber: 'ShardNumber',
      storageResource: 'StorageResource',
      storageResourceSize: 'StorageResourceSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'string',
      DBClusterId: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      productForm: 'string',
      productVersion: 'string',
      reservedNodeCount: 'number',
      reservedNodeSize: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secondaryVSwitchId: 'string',
      secondaryZoneId: 'string',
      shardNumber: 'string',
      storageResource: 'string',
      storageResourceSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

