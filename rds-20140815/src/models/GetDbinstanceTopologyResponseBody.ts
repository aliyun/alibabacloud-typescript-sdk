// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDBInstanceTopologyResponseBodyDataConnections extends $dara.Model {
  /**
   * @remarks
   * The endpoint that is used to connect to the database instance.
   * 
   * @example
   * rm-m5ezban**********.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-m5ezban**********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * *   **vpc**
   * *   **public**
   * 
   * @example
   * vpc
   */
  netType?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-qingdao-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceName: 'DBInstanceName',
      netType: 'NetType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceName: 'string',
      netType: 'string',
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

export class GetDBInstanceTopologyResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-m5ezban**********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The ID of the dedicated cluster.
   * 
   * > : If the instance does not reside in the specified dedicated cluster, no value is returned.
   * 
   * @example
   * dhg-4n*****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The host ID of the instance in the dedicated cluster.
   * 
   * > : If the instance does not reside in the specified dedicated cluster, no value is returned.
   * 
   * @example
   * i-bpxxxxxxx
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > : The value \\*\\*-1\\*\\* is returned for an instance that does not reside in a dedicated cluster.
   * 
   * @example
   * 349054
   */
  nodeId?: string;
  /**
   * @remarks
   * The type of the node. The following result is returned:
   * 
   * *   **Master**: a primary node
   * *   **Slave**: a secondary node
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-qingdao-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostId: 'DedicatedHostId',
      nodeId: 'NodeId',
      role: 'Role',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      dedicatedHostGroupId: 'string',
      dedicatedHostId: 'string',
      nodeId: 'string',
      role: 'string',
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

export class GetDBInstanceTopologyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The network connection information of the instance.
   */
  connections?: GetDBInstanceTopologyResponseBodyDataConnections[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-m5ezban**********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The queried nodes.
   */
  nodes?: GetDBInstanceTopologyResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      DBInstanceName: 'DBInstanceName',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': GetDBInstanceTopologyResponseBodyDataConnections },
      DBInstanceName: 'string',
      nodes: { 'type': 'array', 'itemType': GetDBInstanceTopologyResponseBodyDataNodes },
    };
  }

  validate() {
    if(Array.isArray(this.connections)) {
      $dara.Model.validateArray(this.connections);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBInstanceTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * An internal parameter. You can ignore this parameter.
   * 
   * @example
   * None
   */
  code?: string;
  /**
   * @remarks
   * The details about the topology.
   */
  data?: GetDBInstanceTopologyResponseBodyData;
  /**
   * @remarks
   * An internal parameter. You can ignore this parameter.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7430AB1A-6D49-5B6D-B9E5-920250076074
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDBInstanceTopologyResponseBodyData,
      message: 'string',
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

