// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsDBClusterResponseBodyDbInstanceDBNodesDBNode extends $dara.Model {
  /**
   * @remarks
   * The ID of the node in the apsaradb for PolarDB cluster.
   * 
   * @example
   * pi-***************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The role of a node in the apsaradb for PolarDB cluster. Valid values:
   * 
   * *   **Reader**
   * *   **Writer**
   * 
   * @example
   * Reader
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * The status of the nodes in the PolarDB cluster.
   * 
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @remarks
   * The ID of the zone where the node of the PolarDB cluster resides.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      DBNodeRole: 'DBNodeRole',
      DBNodeStatus: 'DBNodeStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      DBNodeRole: 'string',
      DBNodeStatus: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstanceDBNodes extends $dara.Model {
  DBNode?: DescribeDrdsDBClusterResponseBodyDbInstanceDBNodesDBNode[];
  static names(): { [key: string]: string } {
    return {
      DBNode: 'DBNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNode: { 'type': 'array', 'itemType': DescribeDrdsDBClusterResponseBodyDbInstanceDBNodesDBNode },
    };
  }

  validate() {
    if(Array.isArray(this.DBNode)) {
      $dara.Model.validateArray(this.DBNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstanceEndpointsEndpoint extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB connection address.
   * 
   * @example
   * pe-*****************
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID list of the nodes in the PolarDB connection string. Separate multiple nodes with commas (,).
   * 
   * @example
   * pi-*****************,pi-*****************
   */
  nodeIds?: string;
  /**
   * @remarks
   * The read ratio of this connection address managed by the DRDS database.
   * 
   * @example
   * 85
   */
  readWeight?: number;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      nodeIds: 'NodeIds',
      readWeight: 'ReadWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      nodeIds: 'string',
      readWeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstanceEndpoints extends $dara.Model {
  endpoint?: DescribeDrdsDBClusterResponseBodyDbInstanceEndpointsEndpoint[];
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: { 'type': 'array', 'itemType': DescribeDrdsDBClusterResponseBodyDbInstanceEndpointsEndpoint },
    };
  }

  validate() {
    if(Array.isArray(this.endpoint)) {
      $dara.Model.validateArray(this.endpoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB cluster.
   * 
   * @example
   * pc-*****************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The status of the PolarDB instance.
   * 
   * @example
   * 1
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The information about the nodes in the PolarDB Cluster.
   */
  DBNodes?: DescribeDrdsDBClusterResponseBodyDbInstanceDBNodes;
  /**
   * @remarks
   * The type of storage used by the DRDS database.
   * 
   * @example
   * POLARDB
   */
  dbInstType?: string;
  /**
   * @remarks
   * The endpoint of the PolarDB read /write splitting endpoint
   */
  endpoints?: DescribeDrdsDBClusterResponseBodyDbInstanceEndpoints;
  /**
   * @remarks
   * The type of the DRDS database storage engine.
   * 
   * @example
   * POLARDB
   */
  engine?: string;
  /**
   * @remarks
   * The version of the DRDS database storage engine.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the PolarDB cluster expires.
   * 
   * @example
   * 2019-09-27 11:22:33
   */
  expireTime?: string;
  /**
   * @remarks
   * The network type of the PolarDB cluster.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the PolarDB cluster.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The PolarDB access port.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The type of RDS instance. PolarDB cluster does not support this parameter.
   * 
   * @example
   * ignore
   */
  rdsInstType?: string;
  /**
   * @remarks
   * This parameter specifies the Read mode when the database storage type is PolarDB.
   * 
   * Valid values:
   * 
   * *   **DEFAULT**: the default mode (that is, all read traffic is sent to the PolarDB read /write node).
   * *   **CUSTOM**: Custom mode (you can customize the ratio of traffic sent to read /write nodes and read-only nodes).
   * *   **BALANCE**: read balancing mode (the read traffic is automatically distributed by the read load module of the PolarDB cluster, which can also be understood as the read traffic being evenly distributed to each node).
   * 
   * @example
   * CUSTOM
   */
  readMode?: string;
  /**
   * @remarks
   * The number of days remaining on the PolarDB for MySQL instance.
   * 
   * @example
   * 0
   */
  remainDays?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBNodes: 'DBNodes',
      dbInstType: 'DbInstType',
      endpoints: 'Endpoints',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readMode: 'ReadMode',
      remainDays: 'RemainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      DBNodes: DescribeDrdsDBClusterResponseBodyDbInstanceDBNodes,
      dbInstType: 'string',
      endpoints: DescribeDrdsDBClusterResponseBodyDbInstanceEndpoints,
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readMode: 'string',
      remainDays: 'string',
    };
  }

  validate() {
    if(this.DBNodes && typeof (this.DBNodes as any).validate === 'function') {
      (this.DBNodes as any).validate();
    }
    if(this.endpoints && typeof (this.endpoints as any).validate === 'function') {
      (this.endpoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of each PolarDB cluster.
   */
  dbInstance?: DescribeDrdsDBClusterResponseBodyDbInstance;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 60A77FD6-0DE4-4A34-B6FB-9C2673******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: DescribeDrdsDBClusterResponseBodyDbInstance,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dbInstance && typeof (this.dbInstance as any).validate === 'function') {
      (this.dbInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

