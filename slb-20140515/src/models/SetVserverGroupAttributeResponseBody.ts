// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVServerGroupAttributeResponseBodyBackendServersBackendServer extends $dara.Model {
  /**
   * @remarks
   * The description of the server group.
   * 
   * @example
   * Backend server group description
   */
  description?: string;
  /**
   * @remarks
   * The port that is used by the backend server.
   * 
   * @example
   * 70
   */
  port?: number;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * i-bp1ek6yd7jvkx****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of backend server. Valid values:
   * 
   * *   **ecs** (default): ECS instance
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
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
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

export class SetVServerGroupAttributeResponseBodyBackendServers extends $dara.Model {
  backendServer?: SetVServerGroupAttributeResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': SetVServerGroupAttributeResponseBodyBackendServersBackendServer },
    };
  }

  validate() {
    if(Array.isArray(this.backendServer)) {
      $dara.Model.validateArray(this.backendServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVServerGroupAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend servers.
   */
  backendServers?: SetVServerGroupAttributeResponseBodyBackendServers;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * rsp-cige6****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The name of the vServer group.
   * 
   * @example
   * Group1
   */
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: SetVServerGroupAttributeResponseBodyBackendServers,
      requestId: 'string',
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  validate() {
    if(this.backendServers && typeof (this.backendServers as any).validate === 'function') {
      (this.backendServers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

