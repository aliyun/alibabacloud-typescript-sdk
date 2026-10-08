// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDBInstanceTopologyResponseBodyDataConnections extends $dara.Model {
  /**
   * @remarks
   * The database endpoint.
   * 
   * @example
   * rm-m5ezban****mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-m5ezban****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The network endpoint type of the instance. Valid values:
   * 
   * * **vpc**: internal endpoint.
   * * **public**: public endpoint.
   * 
   * @example
   * vpc
   */
  netType?: string;
  /**
   * @remarks
   * The zone ID.
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
   * The instance ID.
   * 
   * @example
   * rm-m5ezban****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The dedicated cluster ID.
   * >This parameter is empty for non-dedicated cluster instances.
   * 
   * @example
   * dhg-4n****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The host ID in the dedicated cluster.
   * >This parameter is empty for non-dedicated cluster instances.
   * 
   * @example
   * i-bp****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The unique identifier of the instance.
   * >This parameter returns **-1** for non-dedicated cluster instances.
   * 
   * @example
   * 349054
   */
  nodeId?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * * **Master**: primary node.
   * * **Slave**: secondary node.
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The zone ID.
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
   * The network connectivity information of the instance.
   */
  connections?: GetDBInstanceTopologyResponseBodyDataConnections[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-m5ezban****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The node list.
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
   * The topology details.
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
   * The request ID.
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

