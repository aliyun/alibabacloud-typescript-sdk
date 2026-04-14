// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddBackendServersResponseBodyBackendServersBackendServer extends $dara.Model {
  description?: string;
  serverId?: string;
  type?: string;
  weight?: string;
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
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersResponseBodyBackendServers extends $dara.Model {
  backendServer?: AddBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': AddBackendServersResponseBodyBackendServersBackendServer },
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

export class AddBackendServersResponseBody extends $dara.Model {
  backendServers?: AddBackendServersResponseBodyBackendServers;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-2ze7o5h52g02kkzz****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34B82C81-F13B-4EEB-99F6-A048C67CC830
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
      backendServers: AddBackendServersResponseBodyBackendServers,
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

