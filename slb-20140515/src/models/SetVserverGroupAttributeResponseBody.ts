// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVServerGroupAttributeResponseBodyBackendServersBackendServer extends $dara.Model {
  description?: string;
  port?: number;
  serverId?: string;
  type?: string;
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

