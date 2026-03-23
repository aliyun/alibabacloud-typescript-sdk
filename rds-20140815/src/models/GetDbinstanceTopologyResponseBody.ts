// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDBInstanceTopologyResponseBodyDataConnections extends $dara.Model {
  connectionString?: string;
  DBInstanceName?: string;
  netType?: string;
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
  DBInstanceName?: string;
  dedicatedHostGroupId?: string;
  dedicatedHostId?: string;
  nodeId?: string;
  role?: string;
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
  connections?: GetDBInstanceTopologyResponseBodyDataConnections[];
  DBInstanceName?: string;
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
  code?: string;
  data?: GetDBInstanceTopologyResponseBodyData;
  message?: string;
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

