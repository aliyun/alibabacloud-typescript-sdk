// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyHistoryItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the node is activated. For the compute layer, only the primary zone node is activated. After a primary/secondary switchover is performed on the instance, the standby compute node becomes the primary node. All storage layer nodes are activated.
   * 
   * @example
   * true
   */
  activated?: boolean;
  /**
   * @remarks
   * The zone of the node. If the node is an RDS node, the zones of multiple child nodes are separated by semicolons (;).
   * 
   * @example
   * cn-hangzhou-a
   */
  azone?: string;
  /**
   * @remarks
   * The node property. Valid values:
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
   * The physical instance name.
   * 
   * @example
   * pxc-unrbk8oyz**********
   */
  phyInstanceName?: string;
  /**
   * @remarks
   * The region of the node. If the node is an RDS node, the regions of multiple child nodes are separated by semicolons (;).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The node role. Valid values:
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
   * The zone of a node in the RDS three-node cluster.
   * 
   * @example
   * cn-hangzhou-a
   */
  azone?: string;
  /**
   * @remarks
   * The role of a node in the RDS three-node cluster. Valid values:
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
   * Indicates whether the node is activated. For the compute layer, only the primary zone node is activated. After a primary/secondary switchover is performed on the instance, the standby compute node becomes the primary node. All storage layer nodes are activated.
   * 
   * @example
   * true
   */
  activated?: boolean;
  /**
   * @remarks
   * The zone of the node. If the node is an RDS node, the zones of multiple child nodes are separated by semicolons (;).
   * 
   * @example
   * cn-hangzhou-a
   */
  azone?: string;
  /**
   * @remarks
   * The data information list of the RDS three-node cluster.
   */
  azoneRoleList?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsAzoneRoleList[];
  /**
   * @remarks
   * The node property. Valid values:
   * 
   * @example
   * Node role
   */
  characterType?: string;
  /**
   * @remarks
   * The data struct.
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
   * The instance creation time.
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
   * The engine version. Valid values:
   * 
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @remarks
   * The engine version. Default value: 2.0.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance CN cluster name, such as default.
   */
  instanceClusterName?: string;
  /**
   * @remarks
   * Indicates whether the node is locked. Valid values:
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
   * The O&M window end time.
   * 
   * @example
   * Not displayed
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The O&M window start time.
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
   * The node specifications:
   * 
   * @example
   * polarx.x4.large.2e
   */
  nodeClass?: string;
  /**
   * @remarks
   * The physical instance name.
   * 
   * @example
   * pxc-unrbk8oyz**********
   */
  phyInstanceName?: string;
  /**
   * @remarks
   * The read/write type, such as ReadWrite.
   */
  readType?: string;
  /**
   * @remarks
   * The region of the node. If the node is an RDS node, the regions of multiple child nodes are separated by semicolons (;).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The node role. Valid values:
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The node status:
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The storage usage, in MB.
   * 
   * @example
   * 16681
   */
  storageUsed?: string;
  /**
   * @remarks
   * The log node version.
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
   * The instance creation time, in the format of yyyy-MM-dd HH:mm:ss.
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
   * The engine version. Default value: 2.0.
   * 
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The historical node list.
   */
  historyItems?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyHistoryItems[];
  /**
   * @remarks
   * The node list.
   */
  items?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItems[];
  /**
   * @remarks
   * The lock status:
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
   * Overdue
   */
  lockReason?: string;
  /**
   * @remarks
   * The O&M window end time, in the format of HH:mm:ss.
   * 
   * @example
   * 05:00:00
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The O&M window start time, in the format of HH:mm:ss.
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
   * The data struct.
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

