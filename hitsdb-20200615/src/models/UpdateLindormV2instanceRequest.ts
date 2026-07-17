// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLindormV2InstanceRequestEngineListNodeGroupList extends $dara.Model {
  /**
   * @remarks
   * The ID of the node group.
   * 
   * @example
   * ix90Yes
   */
  groupId?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  nodeCount?: number;
  /**
   * @remarks
   * The disk size of a single node. This parameter is not required.
   * 
   * @example
   * 0
   */
  nodeDiskSize?: number;
  /**
   * @remarks
   * The disk type of the node. This parameter is not required. **This parameter is available only for specific scenarios and is accessible to users on a whitelist.**
   * 
   * @example
   * cloud_essd
   */
  nodeDiskType?: string;
  /**
   * @remarks
   * The node specifications of the engine.
   * 
   * - **lindorm.c.2xlarge**: 8 cores and 16 GB of memory.
   * 
   * - **lindorm.g.2xlarge**: 8 cores and 32 GB of memory.
   * 
   * - **lindorm.c.4xlarge**: 16 cores and 32 GB of memory.
   * 
   * - **lindorm.g.4xlarge**: 16 cores and 64 GB of memory.
   * 
   * - **lindorm.c.8xlarge**: 32 cores and 64 GB of memory.
   * 
   * - **lindorm.g.8xlarge**: 32 cores and 128 GB of memory.
   * 
   * This parameter is required.
   * 
   * @example
   * lindorm.g.2xlarge
   */
  nodeSpec?: string;
  /**
   * @remarks
   * The name of the node group. **This parameter is required.** You can obtain the name by calling the GetLindormV2Instance operation.
   * 
   * @example
   * groupName
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      nodeCount: 'NodeCount',
      nodeDiskSize: 'NodeDiskSize',
      nodeDiskType: 'NodeDiskType',
      nodeSpec: 'NodeSpec',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      nodeCount: 'number',
      nodeDiskSize: 'number',
      nodeDiskType: 'string',
      nodeSpec: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLindormV2InstanceRequestEngineList extends $dara.Model {
  /**
   * @remarks
   * The engine type. Valid values:
   * 
   * - TABLE: LindormTable.
   * 
   * - TSDB: LindormTSDB.
   * 
   * - LSEARCH: search engine.
   * 
   * - LTS: LTS engine.
   * 
   * - LVECTOR: vector engine.
   * 
   * - LCOLUMN: column store.
   * 
   * - LAI: AI engine.
   * 
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  engineType?: string;
  /**
   * @remarks
   * A list of engine node groups.
   */
  nodeGroupList?: UpdateLindormV2InstanceRequestEngineListNodeGroupList[];
  static names(): { [key: string]: string } {
    return {
      engineType: 'EngineType',
      nodeGroupList: 'NodeGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineType: 'string',
      nodeGroupList: { 'type': 'array', 'itemType': UpdateLindormV2InstanceRequestEngineListNodeGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.nodeGroupList)) {
      $dara.Model.validateArray(this.nodeGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLindormV2InstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The capacity of the storage-optimized storage.
   * 
   * @example
   * 10000
   */
  capacityStorageSize?: number;
  /**
   * @remarks
   * The cloud storage capacity. Unit: GB.
   * 
   * @example
   * 480
   */
  cloudStorageSize?: number;
  /**
   * @remarks
   * The cloud storage class.
   * 
   * - **PerformanceStorage**: performance cloud storage.
   * 
   * - **StandardStorage**: standard cloud storage.
   * 
   * @example
   * PerformanceStorage
   */
  cloudStorageType?: string;
  /**
   * @remarks
   * Specifies whether to enable storage-optimized storage.
   * 
   * @example
   * false
   */
  enableCapacityStorage?: boolean;
  /**
   * @remarks
   * A list of engine types.
   * 
   * This parameter is required.
   */
  engineList?: UpdateLindormV2InstanceRequestEngineList[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp1o3y0yme2i2****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the instance is located. To query the latest region list, call the [DescribeRegions](https://help.aliyun.com/document_detail/426062.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      capacityStorageSize: 'CapacityStorageSize',
      cloudStorageSize: 'CloudStorageSize',
      cloudStorageType: 'CloudStorageType',
      enableCapacityStorage: 'EnableCapacityStorage',
      engineList: 'EngineList',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityStorageSize: 'number',
      cloudStorageSize: 'number',
      cloudStorageType: 'string',
      enableCapacityStorage: 'boolean',
      engineList: { 'type': 'array', 'itemType': UpdateLindormV2InstanceRequestEngineList },
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.engineList)) {
      $dara.Model.validateArray(this.engineList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

