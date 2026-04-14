// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyBackendServersBackendServer extends $dara.Model {
  listenerPort?: number;
  port?: number;
  protocol?: string;
  serverHealthStatus?: string;
  serverId?: string;
  serverIp?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      port: 'Port',
      protocol: 'Protocol',
      serverHealthStatus: 'ServerHealthStatus',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      port: 'number',
      protocol: 'string',
      serverHealthStatus: 'string',
      serverId: 'string',
      serverIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthStatusResponseBodyBackendServers extends $dara.Model {
  backendServer?: DescribeHealthStatusResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': DescribeHealthStatusResponseBodyBackendServersBackendServer },
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

export class DescribeHealthStatusResponseBody extends $dara.Model {
  backendServers?: DescribeHealthStatusResponseBodyBackendServers;
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: DescribeHealthStatusResponseBodyBackendServers,
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

