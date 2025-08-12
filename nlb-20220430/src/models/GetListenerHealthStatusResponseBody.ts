// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason extends $dara.Model {
  /**
   * @remarks
   * The reason why the **status** is abnormal. Valid values:
   * 
   * *   **CONNECT_TIMEOUT**: The NLB instance failed to connect to the backend server within the specified period of time.
   * *   **CONNECT_FAILED**: The NLB instance failed to connect to the backend server.
   * *   **RECV_RESPONSE_TIMEOUT**: The NLB instance failed to receive a response from the backend server within the specified period of time.
   * *   **CONNECT_INTERRUPT**: The connection between the health check and the backend servers was interrupted.
   * *   **HTTP_CODE_NOT_MATCH**: The HTTP status code from the backend servers was not the expected one.
   * *   **HTTP_INVALID_HEADER**: The format of the response from the backend servers is invalid.
   * 
   * @example
   * CONNECT_TIMEOUT
   */
  reasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      reasonCode: 'ReasonCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServers extends $dara.Model {
  /**
   * @remarks
   * The backend port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The cause of the health check failure.
   */
  reason?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * i-bp1bt75jaujl7tjl****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.168.8.10
   */
  serverIp?: string;
  /**
   * @remarks
   * The health check status. Valid values:
   * 
   * *   **Initial**: indicates that health checks are configured for the NLB instance, but no data was found.
   * *   **Unhealthy**: indicates that the backend server consecutively fails health checks.
   * *   **Unavailable**: indicates that health checks are disabled.
   * 
   * @example
   * Initial
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      reason: 'Reason',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      reason: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason,
      serverId: 'string',
      serverIp: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.reason && typeof (this.reason as any).validate === 'function') {
      (this.reason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfos extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  heathCheckEnabled?: boolean;
  /**
   * @remarks
   * A list of unhealthy backend servers.
   */
  nonNormalServers?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServers[];
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-ppdpc14gdm3x4o****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      heathCheckEnabled: 'HeathCheckEnabled',
      nonNormalServers: 'NonNormalServers',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      heathCheckEnabled: 'boolean',
      nonNormalServers: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServers },
      serverGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nonNormalServers)) {
      $dara.Model.validateArray(this.nonNormalServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBodyListenerHealthStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the listener of the NLB instance.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****@80
   */
  listenerId?: string;
  /**
   * @remarks
   * The listening port.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listening protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.
   * 
   * @example
   * TCPSSL
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The information about the server groups.
   */
  serverGroupInfos?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfos[];
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      serverGroupInfos: 'ServerGroupInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      serverGroupInfos: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfos },
    };
  }

  validate() {
    if(Array.isArray(this.serverGroupInfos)) {
      $dara.Model.validateArray(this.serverGroupInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The health check status of the server group of the listener.
   */
  listenerHealthStatus?: GetListenerHealthStatusResponseBodyListenerHealthStatus[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * - If **NextToken** is empty, it indicates that no next query is to be sent.
   * - If a value of **NextToken** is returned, the value is the token used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      listenerHealthStatus: 'ListenerHealthStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerHealthStatus: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyListenerHealthStatus },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.listenerHealthStatus)) {
      $dara.Model.validateArray(this.listenerHealthStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

