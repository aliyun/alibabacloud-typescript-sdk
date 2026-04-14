// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveBackendServersResponseBodyBackendServersBackendServer extends $dara.Model {
  description?: string;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class RemoveBackendServersResponseBodyBackendServers extends $dara.Model {
  backendServer?: RemoveBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': RemoveBackendServersResponseBodyBackendServersBackendServer },
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

export class RemoveBackendServersResponseBody extends $dara.Model {
  backendServers?: RemoveBackendServersResponseBodyBackendServers;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-bp15lbk8uja8rvm4a****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: RemoveBackendServersResponseBodyBackendServers,
      loadBalancerId: 'string',
      requestId: 'string',
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

