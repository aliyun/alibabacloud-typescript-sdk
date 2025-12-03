// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthStatusResponseBodyBackendServersBackendServer extends $dara.Model {
  /**
   * @remarks
   * The frontend port that is used by the SLB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The backend port that is used by the SLB instance.
   * 
   * @example
   * 70
   */
  port?: number;
  /**
   * @remarks
   * The frontend protocol that is used by the SLB instance.
   * 
   * @example
   * https
   */
  protocol?: string;
  /**
   * @remarks
   * The health status of the backend server. Valid values:
   * 
   * *   normal: The backend server is healthy.
   * *   abnormal: The backend server is unhealthy.
   * *   unavailable: The health check is not completed.
   * 
   * @example
   * abnormal
   */
  serverHealthStatus?: string;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * i-bp1h5u3fv54ytf***
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.XX.XX.11
   */
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
  /**
   * @remarks
   * The backend servers.
   */
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

