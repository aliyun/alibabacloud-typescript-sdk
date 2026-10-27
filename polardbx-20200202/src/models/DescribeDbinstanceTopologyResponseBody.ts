// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyHistoryItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the node is enabled. In the compute layer, only the nodes in the primary zone are enabled. After a primary/secondary switchover is performed on the instance, the secondary nodes in the compute layer are switched to primary nodes. All nodes in the storage layer are enabled.
   * 
   * @example
   * true
   */
  activated?: boolean;
  /**
   * @remarks
   * The zone to which the node belongs. If the node is an ApsaraDB RDS node, the zones of multiple child nodes are separated by semicolons (;).
   * 
   * @example
   * cn-hangzhou-a
   */
  azone?: string;
  /**
   * @remarks
   * The node attribute. Valid values:
   * - **polarx_cn**: Compute node.
   * - **polarx_store**: Data node.
   * - **polarx_gms**: GMS node.
   * 
   * @example
   * Node role
   */
  characterType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 304726049
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-sprcym7g7w****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the physical instance.
   * 
   * @example
   * pxc-unrbk8oyz**********
   */
  phyInstanceName?: string;
  /**
   * @remarks
   * The region to which the node belongs. If the node is an ApsaraDB RDS node, the regions of multiple child nodes are separated by semicolons (;).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The node role. Valid values:
   * - **master**: Primary node.
   * - **standby**: Secondary node.
   * 
   * @example
   * master
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      activated: 'Activated',
      azone: 'Azone',
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      phyInstanceName: 'PhyInstanceName',
      region: 'Region',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activated: 'boolean',
      azone: 'string',
      characterType: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      phyInstanceName: 'string',
      region: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsAzoneRoleList extends $dara.Model {
  /**
   * @remarks
   * The zone to which a specific node in the three-node ApsaraDB RDS deployment belongs.
   * 
   * @example
   * cn-hangzhou-a
   */
  azone?: string;
  /**
   * @remarks
   * The role of a specific node in the three-node ApsaraDB RDS deployment. Valid values:
   * - **leader**: Primary node.
   * - **follower**: Secondary node.
   * - **logger**: Logger node.
   * 
   * @example
   * leader
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      azone: 'Azone',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azone: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsConnectionIp extends $dara.Model {
  /**
   * @remarks
   * The connection information.
   * 
   * @example
   * pxc-xdb-m-pxcdym7g7w********.mysql.singapore.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The internal connection type. The value is fixed to 1, which indicates the classic network.
   * 
   * @example
   * 1
   */
  DBInstanceNetType?: number;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 3306
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceNetType: 'DBInstanceNetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceNetType: 'number',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the node is enabled. In the compute layer, only the nodes in the primary zone are enabled. After a primary/secondary switchover is performed on the instance, the secondary nodes in the compute layer are switched to primary nodes. All nodes in the storage layer are enabled.
   * 
   * @example
   * true
   */
  activated?: boolean;
  /**
   * @remarks
   * The zone to which the node belongs. If the node is an ApsaraDB RDS node, the zones of multiple child nodes are separated by semicolons (;).
   * 
   * @example
   * cn-hangzhou-a
   */
  azone?: string;
  /**
   * @remarks
   * The list of data information for the three-node ApsaraDB RDS deployment.
   */
  azoneRoleList?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsAzoneRoleList[];
  /**
   * @remarks
   * The node attribute. Valid values:
   * - **polarx_cn**: Compute node.
   * - **polarx_store**: Data node.
   * - **polarx_gms**: GMS node.
   * 
   * @example
   * Node role
   */
  characterType?: string;
  /**
   * @remarks
   * The data structure.
   */
  connectionIp?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsConnectionIp[];
  /**
   * @remarks
   * The connection type.
   * 
   * @example
   * Not displayed
   */
  DBInstanceConnType?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2021-10-21T10:30:45Z
   */
  DBInstanceCreateTime?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * Not displayed
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 304726049
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-i-tk6t4z****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * 8
   */
  DBInstanceStatus?: number;
  /**
   * @remarks
   * The instance status description.
   * 
   * @example
   * Not displayed
   */
  DBInstanceStatusDescription?: string;
  /**
   * @remarks
   * The disk size.
   * 
   * @example
   * 3145728
   */
  diskSize?: number;
  /**
   * @remarks
   * The DPI engine version. Valid values:
   * - **mysql**
   * - **polarx_cdc**
   * - **polarx_dn**
   * 
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @remarks
   * The DPI engine version. Default value: 2.0.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The name of the CN cluster for the instance, such as default.
   * 
   * @example
   * default
   */
  instanceClusterName?: string;
  /**
   * @remarks
   * The lock status. Valid values:
   * - **0**: Unlocked.
   * - **1**: Locked.
   * 
   * @example
   * 0
   */
  lockMode?: number;
  /**
   * @remarks
   * The lock reason.
   * 
   * @example
   * Not displayed
   */
  lockReason?: string;
  /**
   * @remarks
   * The end time of the O&M window.
   * 
   * @example
   * Not displayed
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the O&M window.
   * 
   * @example
   * Not displayed
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The maximum number of connections.
   * 
   * @example
   * 4000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum IOPS.
   * 
   * @example
   * 7000
   */
  maxIops?: number;
  /**
   * @remarks
   * The node specifications. Valid values:
   * - **polarx.x4.medium.2e**: 2 vCPUs and 8 GB of memory.
   * - **polarx.x4.large.2e**: 4 vCPUs and 16 GB of memory.
   * - **polarx.x8.large.2e**: 4 vCPUs and 32 GB of memory.
   * - **polarx.x4.xlarge.2e**: 8 vCPUs and 32 GB of memory.
   * - **polarx.x8.xlarge.2e**: 8 vCPUs and 64 GB of memory.
   * - **polarx.x4.2xlarge.2e**: 16 vCPUs and 64 GB of memory.
   * - **polarx.x8.2xlarge.2e**: 16 vCPUs and 128 GB of memory.
   * - **polarx.x4.4xlarge.2e**: 32 vCPUs and 128 GB of memory.
   * - **polarx.x8.4xlarge.2e**: 32 vCPUs and 256 GB of memory.
   * - **polarx.st.8xlarge.2e**: 60 vCPUs and 470 GB of memory.
   * - **polarx.st.12xlarge.2e**: 90 vCPUs and 720 GB of memory.
   * 
   * @example
   * polarx.x4.large.2e
   */
  nodeClass?: string;
  /**
   * @remarks
   * The name of the physical instance.
   * 
   * @example
   * pxc-unrbk8oyz**********
   */
  phyInstanceName?: string;
  /**
   * @remarks
   * The read/write type, such as ReadWrite.
   * 
   * @example
   * ReadWrite
   */
  readType?: string;
  /**
   * @remarks
   * The region to which the node belongs. If the node is an ApsaraDB RDS node, the regions of multiple child nodes are separated by semicolons (;).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The node role. Valid values:
   * - **master**: Primary node.
   * - **standby**: Secondary node.
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The node status. Valid values:
   * - **0**: Running.
   * - **1**: Creating.
   * - **2**: Abnormal.
   * - **3**: Expired.
   * - **4**: Releasing.
   * - **5**: Released.
   * - **6**: Locked.
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The amount of used storage space. Unit: MB.
   * 
   * @example
   * 16681
   */
  storageUsed?: string;
  /**
   * @remarks
   * The version of the logger node.
   * 
   * @example
   * polarx-cdc-kernel-2.0.0-3985896
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      activated: 'Activated',
      azone: 'Azone',
      azoneRoleList: 'AzoneRoleList',
      characterType: 'CharacterType',
      connectionIp: 'ConnectionIp',
      DBInstanceConnType: 'DBInstanceConnType',
      DBInstanceCreateTime: 'DBInstanceCreateTime',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStatusDescription: 'DBInstanceStatusDescription',
      diskSize: 'DiskSize',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceClusterName: 'InstanceClusterName',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      maxConnections: 'MaxConnections',
      maxIops: 'MaxIops',
      nodeClass: 'NodeClass',
      phyInstanceName: 'PhyInstanceName',
      readType: 'ReadType',
      region: 'Region',
      role: 'Role',
      status: 'Status',
      storageUsed: 'StorageUsed',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activated: 'boolean',
      azone: 'string',
      azoneRoleList: { 'type': 'array', 'itemType': DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsAzoneRoleList },
      characterType: 'string',
      connectionIp: { 'type': 'array', 'itemType': DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsConnectionIp },
      DBInstanceConnType: 'number',
      DBInstanceCreateTime: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      DBInstanceStatus: 'number',
      DBInstanceStatusDescription: 'string',
      diskSize: 'number',
      engine: 'string',
      engineVersion: 'string',
      instanceClusterName: 'string',
      lockMode: 'number',
      lockReason: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      maxConnections: 'number',
      maxIops: 'number',
      nodeClass: 'string',
      phyInstanceName: 'string',
      readType: 'string',
      region: 'string',
      role: 'string',
      status: 'string',
      storageUsed: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.azoneRoleList)) {
      $dara.Model.validateArray(this.azoneRoleList);
    }
    if(Array.isArray(this.connectionIp)) {
      $dara.Model.validateArray(this.connectionIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopology extends $dara.Model {
  /**
   * @remarks
   * Indicates that LVS is used for load balancing.
   * 
   * @example
   * lvs
   */
  DBInstanceConnType?: string;
  /**
   * @remarks
   * The time when the instance was created. The format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-10-21T10:30:45Z 04:00:00
   */
  DBInstanceCreateTime?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * pxc-sprcym7******
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 304726047
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-sprcym7g7w****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * 8
   */
  DBInstanceStatus?: number;
  /**
   * @remarks
   * The instance status description.
   * 
   * @example
   * TDE_MODIFYING
   */
  DBInstanceStatusDescription?: string;
  /**
   * @remarks
   * The number of storage nodes.
   * 
   * @example
   * 1
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The engine. Default value: polarx.
   * 
   * @example
   * polarx
   */
  engine?: string;
  /**
   * @remarks
   * The DPI engine version. Default value: 2.0.
   * 
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The list of historical nodes.
   */
  historyItems?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyHistoryItems[];
  /**
   * @remarks
   * The list of nodes.
   */
  items?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItems[];
  /**
   * @remarks
   * The lock status. Valid values:
   * - **0**: Unlocked.
   * - **1**: Locked.
   * 
   * @example
   * 0
   */
  lockMode?: number;
  /**
   * @remarks
   * The lock reason.
   * 
   * @example
   * Overdue payment
   */
  lockReason?: string;
  /**
   * @remarks
   * The end time of the O&M window. The format is HH:mm:ss.
   * 
   * @example
   * 05:00:00
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the O&M window. The format is HH:mm:ss.
   * 
   * @example
   * 04:00:00
   */
  maintainStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceConnType: 'DBInstanceConnType',
      DBInstanceCreateTime: 'DBInstanceCreateTime',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStatusDescription: 'DBInstanceStatusDescription',
      DBInstanceStorage: 'DBInstanceStorage',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      historyItems: 'HistoryItems',
      items: 'Items',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceConnType: 'string',
      DBInstanceCreateTime: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      DBInstanceStatus: 'number',
      DBInstanceStatusDescription: 'string',
      DBInstanceStorage: 'number',
      engine: 'string',
      engineVersion: 'string',
      historyItems: { 'type': 'array', 'itemType': DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyHistoryItems },
      items: { 'type': 'array', 'itemType': DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItems },
      lockMode: 'number',
      lockReason: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyItems)) {
      $dara.Model.validateArray(this.historyItems);
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The topology information.
   */
  logicInstanceTopology?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopology;
  static names(): { [key: string]: string } {
    return {
      logicInstanceTopology: 'LogicInstanceTopology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicInstanceTopology: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopology,
    };
  }

  validate() {
    if(this.logicInstanceTopology && typeof (this.logicInstanceTopology as any).validate === 'function') {
      (this.logicInstanceTopology as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data structure.
   */
  data?: DescribeDBInstanceTopologyResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstanceTopologyResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

