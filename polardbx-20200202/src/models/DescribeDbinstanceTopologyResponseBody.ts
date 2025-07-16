// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyHistoryItems extends $dara.Model {
  activated?: boolean;
  azone?: string;
  characterType?: string;
  DBInstanceId?: string;
  DBInstanceName?: string;
  phyInstanceName?: string;
  region?: string;
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
   * @example
   * cn-hangzhou-a
   */
  azone?: string;
  /**
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
   * @example
   * pxc-xdb-m-pxcdym7g7w********.mysql.singapore.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * 1
   */
  DBInstanceNetType?: number;
  /**
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
   * @example
   * true
   */
  activated?: boolean;
  /**
   * @example
   * cn-hangzhou-a
   */
  azone?: string;
  azoneRoleList?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsAzoneRoleList[];
  characterType?: string;
  connectionIp?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsConnectionIp[];
  DBInstanceConnType?: number;
  /**
   * @example
   * 2021-10-21T10:30:45Z
   */
  DBInstanceCreateTime?: string;
  DBInstanceDescription?: string;
  /**
   * @example
   * 304726049
   */
  DBInstanceId?: string;
  /**
   * @example
   * pxc-i-tk6t4z****
   */
  DBInstanceName?: string;
  /**
   * @example
   * 8
   */
  DBInstanceStatus?: number;
  DBInstanceStatusDescription?: string;
  /**
   * @example
   * 3145728
   */
  diskSize?: number;
  /**
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @example
   * 0
   */
  lockMode?: number;
  lockReason?: string;
  maintainEndTime?: string;
  maintainStartTime?: string;
  /**
   * @example
   * 4000
   */
  maxConnections?: number;
  /**
   * @example
   * 7000
   */
  maxIops?: number;
  /**
   * @example
   * polarx.x4.large.2e
   */
  nodeClass?: string;
  phyInstanceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * master
   */
  role?: string;
  /**
   * @example
   * 0
   */
  status?: string;
  storageUsed?: string;
  /**
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
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      maxConnections: 'MaxConnections',
      maxIops: 'MaxIops',
      nodeClass: 'NodeClass',
      phyInstanceName: 'PhyInstanceName',
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
      lockMode: 'number',
      lockReason: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      maxConnections: 'number',
      maxIops: 'number',
      nodeClass: 'string',
      phyInstanceName: 'string',
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
   * @example
   * lvs
   */
  DBInstanceConnType?: string;
  /**
   * @example
   * 2021-10-21T10:30:45Z 04:00:00
   */
  DBInstanceCreateTime?: string;
  /**
   * @example
   * pxc-sprcym7g7wj7k
   */
  DBInstanceDescription?: string;
  /**
   * @example
   * 304726047
   */
  DBInstanceId?: string;
  /**
   * @example
   * pxc-sprcym7g7w****
   */
  DBInstanceName?: string;
  /**
   * @example
   * 8
   */
  DBInstanceStatus?: number;
  /**
   * @example
   * TDE_MODIFYING
   */
  DBInstanceStatusDescription?: string;
  /**
   * @example
   * 1
   */
  DBInstanceStorage?: number;
  /**
   * @example
   * polarx
   */
  engine?: string;
  /**
   * @example
   * 2.0
   */
  engineVersion?: string;
  historyItems?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyHistoryItems[];
  items?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItems[];
  /**
   * @example
   * 0
   */
  lockMode?: number;
  lockReason?: string;
  /**
   * @example
   * 05:00:00
   */
  maintainEndTime?: string;
  /**
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
  data?: DescribeDBInstanceTopologyResponseBodyData;
  /**
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

