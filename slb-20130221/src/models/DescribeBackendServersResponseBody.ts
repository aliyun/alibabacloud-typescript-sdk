// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackendServersResponseBodyListenersListenerBackendServersBackendServer extends $dara.Model {
  serverHealthStatus?: string;
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      serverHealthStatus: 'ServerHealthStatus',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverHealthStatus: 'string',
      serverId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendServersResponseBodyListenersListenerBackendServers extends $dara.Model {
  backendServer?: DescribeBackendServersResponseBodyListenersListenerBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': DescribeBackendServersResponseBodyListenersListenerBackendServersBackendServer },
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

export class DescribeBackendServersResponseBodyListenersListener extends $dara.Model {
  backendServers?: DescribeBackendServersResponseBodyListenersListenerBackendServers;
  listenerPort?: number;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      listenerPort: 'ListenerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: DescribeBackendServersResponseBodyListenersListenerBackendServers,
      listenerPort: 'number',
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

export class DescribeBackendServersResponseBodyListeners extends $dara.Model {
  listener?: DescribeBackendServersResponseBodyListenersListener[];
  static names(): { [key: string]: string } {
    return {
      listener: 'Listener',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listener: { 'type': 'array', 'itemType': DescribeBackendServersResponseBodyListenersListener },
    };
  }

  validate() {
    if(Array.isArray(this.listener)) {
      $dara.Model.validateArray(this.listener);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendServersResponseBody extends $dara.Model {
  listeners?: DescribeBackendServersResponseBodyListeners;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: DescribeBackendServersResponseBodyListeners,
      requestId: 'string',
    };
  }

  validate() {
    if(this.listeners && typeof (this.listeners as any).validate === 'function') {
      (this.listeners as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

