// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer extends $dara.Model {
  /**
   * @remarks
   * The description of the primary/secondary server group.
   * 
   * @example
   * test-112
   */
  description?: string;
  /**
   * @remarks
   * The port that is used by the backend server.
   * 
   * @example
   * 82
   */
  port?: number;
  /**
   * @remarks
   * The ID of the backend server that you want to add.
   * 
   * @example
   * i-bp1fq61enf4loa5i****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of backend server.
   * 
   * Valid values: **Master** and **Slave**.
   * 
   * @example
   * Master
   */
  serverType?: string;
  /**
   * @remarks
   * The type of backend server. Valid values:
   * 
   * *   **ecs**: ECS instance
   * *   **eni**: ENI
   * *   **eci**: elastic container instance
   * 
   * @example
   * ecs
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverType: 'ServerType',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverType: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServers extends $dara.Model {
  masterSlaveBackendServer?: CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer[];
  static names(): { [key: string]: string } {
    return {
      masterSlaveBackendServer: 'MasterSlaveBackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveBackendServer: { 'type': 'array', 'itemType': CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServersMasterSlaveBackendServer },
    };
  }

  validate() {
    if(Array.isArray(this.masterSlaveBackendServer)) {
      $dara.Model.validateArray(this.masterSlaveBackendServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasterSlaveServerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend servers in the primary/secondary server group.
   */
  masterSlaveBackendServers?: CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServers;
  /**
   * @remarks
   * The ID of the active/standby server group.
   * 
   * @example
   * rsp-bp19au4******
   */
  masterSlaveServerGroupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7CA4DB76-4D32-523B-822E-5C9494613D46
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      masterSlaveBackendServers: 'MasterSlaveBackendServers',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveBackendServers: CreateMasterSlaveServerGroupResponseBodyMasterSlaveBackendServers,
      masterSlaveServerGroupId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.masterSlaveBackendServers && typeof (this.masterSlaveBackendServers as any).validate === 'function') {
      (this.masterSlaveBackendServers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

