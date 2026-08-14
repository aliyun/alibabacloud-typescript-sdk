// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved computing resources. Valid values: 0 ACU to 4096 ACU. The step size is 16. One AnalyticDB Compute Unit (ACU) is approximately equivalent to 1 core and 4 GB of memory.
   * 
   * > Include the unit when you specify this parameter. This parameter is required only when ProductForm is set to LegacyForm.
   * 
   * @example
   * 32ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The ID of the Data Warehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Default value: false. Valid values:
   * 
   * - **true**: Sends a check request to verify that the migration requirements are met. The migration is **not** performed.
   * 
   * - **false** (Default): Sends a normal request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The product form. Valid values:
   * 
   * - **IntegrationForm**: Integrated form.
   * 
   * - **LegacyForm**: Data Lakehouse Edition.
   * 
   * @example
   * LegacyForm
   */
  productForm?: string;
  /**
   * @remarks
   * The product edition. Valid values:
   * 
   * - **BasicVersion**: Basic Edition.
   * 
   * - **EnterpriseVersion**: Enterprise Edition.
   * 
   * > This parameter is required only when ProductForm is set to IntegrationForm.
   * 
   * @example
   * EnterpriseVersion
   */
  productVersion?: string;
  /**
   * @remarks
   * The number of reserved nodes.
   * 
   * - For the Enterprise Edition, the default value is 3 and the step size is 3.
   * 
   * - For the Basic Edition, the default value is 1.
   * 
   * > This parameter is required only when ProductForm is set to IntegrationForm.
   * 
   * @example
   * 3
   */
  reservedNodeCount?: number;
  /**
   * @remarks
   * The node specifications for the reserved storage resources. Valid values: 8ACU, 12ACU, and 16ACU.
   * 
   * > Include the unit when you specify this parameter. This parameter is required only when ProductForm is set to IntegrationForm.
   * 
   * @example
   * 8ACU
   */
  reservedNodeSize?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the secondary virtual switch.
   * 
   * > This parameter cannot have the same value as the VSwitchId parameter.
   * 
   * @example
   * vsw-bp1aadw9k19x451gx****
   */
  secondaryVSwitchId?: string;
  /**
   * @remarks
   * The ID of the secondary zone.
   * 
   * > This parameter cannot have the same value as the ZoneId parameter.
   * 
   * @example
   * cn-beijing-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The number of shards. Specify this parameter to change the number of shards for the instance during the migration.
   * 
   * > This parameter is required only when ProductForm is set to LegacyForm.
   * 
   * @example
   * 128
   */
  shardNumber?: string;
  /**
   * @remarks
   * The reserved storage resources. Valid values: 0 ACU to 2064 ACU. The step size is 3 × the number of ACUs specified by the StorageResourceSize parameter. The default value is 24 ACU. One ACU is approximately equivalent to 1 core and 4 GB of memory.
   * 
   * > Include the unit when you specify this parameter. This parameter is required only when ProductForm is set to LegacyForm.
   * 
   * @example
   * 24ACU
   */
  storageResource?: string;
  /**
   * @remarks
   * The node specifications for the reserved storage resources. Valid values: 8ACU, 12ACU, and 16ACU.
   * 
   * > Include the unit when you specify this parameter. This parameter is required only when ProductForm is set to LegacyForm.
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

