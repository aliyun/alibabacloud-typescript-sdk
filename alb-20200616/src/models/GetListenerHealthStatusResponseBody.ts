// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason extends $dara.Model {
  /**
   * @remarks
   * The actual response code returned by the backend server, such as **302**.
   * 
   * > This value is returned only when **ReasonCode** is **RESPONSE_MISMATCH**.
   * 
   * @example
   * 302
   */
  actualResponse?: string;
  /**
   * @remarks
   * The expected response code from the backend server.
   * 
   * Valid values: **HTTP_2xx**, **HTTP_3xx**, **HTTP_4xx**, and **HTTP_5xx**. Multiple response codes are separated by commas (,).
   * 
   * > This value is returned only when **ReasonCode** is **RESPONSE_MISMATCH**.
   * 
   * @example
   * HTTP_2xx
   */
  expectedResponse?: string;
  /**
   * @remarks
   * The detailed reason when **Status** is abnormal.
   * Currently, only HTTP and HTTPS listeners and forwarding rules support viewing abnormal status reasons:
   * - **CONNECT_TIMEOUT**: The Server Load Balancer (SLB) health check timed out when establishing a connection to the backend server.
   * 
   * - **CONNECT_FAILED**: The SLB health check failed to establish a connection to the backend server.
   * 
   * - **RECV_RESPONSE_FAILED**: The SLB health check failed to receive a response from the backend server.
   * 
   * - **RECV_RESPONSE_TIMEOUT**: The SLB health check timed out when receiving a response from the backend server.
   * 
   * - **SEND_REQUEST_FAILED**: The SLB health check failed to send a request to the backend server.
   * 
   * - **SEND_REQUEST_TIMEOUT**: The SLB health check timed out when sending a request to the backend server.
   * 
   * - **RESPONSE_FORMAT_ERROR**: The SLB health check received a response in an incorrect format from the backend server.
   * 
   * - **RESPONSE_MISMATCH**: The response code received from the backend server during the SLB health check did not match the expected response code.
   * 
   * @example
   * RESPONSE_MISMATCH
   */
  reasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      actualResponse: 'ActualResponse',
      expectedResponse: 'ExpectedResponse',
      reasonCode: 'ReasonCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualResponse: 'string',
      expectedResponse: 'string',
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
   * The backend server port.
   * 
   * @example
   * 90
   */
  port?: number;
  /**
   * @remarks
   * The reason for the abnormal state.
   */
  reason?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason;
  /**
   * @remarks
   * The backend server ID.
   * 
   * @example
   * i-uf62h8v******
   */
  serverId?: string;
  /**
   * @remarks
   * The backend server IP address.
   * 
   * @example
   * 192.168.8.10
   */
  serverIp?: string;
  /**
   * @remarks
   * The health check status. Valid values:
   * 
   * - **Initial**: Initializing. The SLB instance has health check configured, but no data is available.
   * 
   * - **Unhealthy**: Unhealthy. The backend server has continuously reported an unhealthy state.
   * 
   * - **Unused**: Not in use. The weight of the backend server is 0, or cross-zone load balancing is disabled and the backend server is not in the same zone as the Application Load Balancer (ALB) instance.
   * 
   * - **Unavailable**: Not enabled. Health check is not enabled.
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
   * The server group usage type. Valid values:
   * 
   * - **ForwardGroup**: Forward to the server group.
   * - **TrafficMirror**: Mirror traffic to the server group.
   * 
   * @example
   * TrafficMirror
   */
  actionType?: string;
  /**
   * @remarks
   * The health check status. Valid values: **on**: Health check is enabled.
   * 
   * @example
   * on
   */
  healthCheckEnabled?: string;
  /**
   * @remarks
   * The list of backend servers in abnormal state.
   */
  nonNormalServers?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServers[];
  /**
   * @remarks
   * The number of servers in the server group.
   * 
   * @example
   * 1
   */
  serverCount?: number;
  /**
   * @remarks
   * The associated server group ID.
   * 
   * @example
   * sgp-8ilqs4axp6******
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      healthCheckEnabled: 'HealthCheckEnabled',
      nonNormalServers: 'NonNormalServers',
      serverCount: 'ServerCount',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      healthCheckEnabled: 'string',
      nonNormalServers: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServers },
      serverCount: 'number',
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
   * The listener ID of the instance.
   * 
   * @example
   * lsn-o4u54y73wq7b******
   */
  listenerId?: string;
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol.
   * 
   * @example
   * http
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The server group information.
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

export class GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServersReason extends $dara.Model {
  /**
   * @remarks
   * The actual response code returned by the backend server, such as **302**.
   * 
   * > This value is returned only when **ReasonCode** is **RESPONSE_MISMATCH**.
   * 
   * @example
   * 302
   */
  actualResponse?: string;
  /**
   * @remarks
   * The expected response code from the backend server.
   * 
   * Valid values: **HTTP_2xx**, **HTTP_3xx**, **HTTP_4xx**, and **HTTP_5xx**. Multiple response codes are separated by commas (,).
   * 
   * > This value is returned only when **ReasonCode** is **RESPONSE_MISMATCH**.
   * 
   * @example
   * HTTP_2xx
   */
  expectedResponse?: string;
  /**
   * @remarks
   * The detailed reason when **Status** is abnormal.
   * Currently, only HTTP and HTTPS listeners and forwarding rules support viewing abnormal status reasons:
   * - **CONNECT_TIMEOUT**: The Server Load Balancer (SLB) health check timed out when establishing a connection to the backend server.
   * 
   * - **CONNECT_FAILED**: The SLB health check failed to establish a connection to the backend server.
   * 
   * - **RECV_RESPONSE_FAILED**: The SLB health check failed to receive a response from the backend server.
   * 
   * - **RECV_RESPONSE_TIMEOUT**: The SLB health check timed out when receiving a response from the backend server.
   * 
   * - **SEND_REQUEST_FAILED**: The SLB health check failed to send a request to the backend server.
   * 
   * - **SEND_REQUEST_TIMEOUT**: The SLB health check timed out when sending a request to the backend server.
   * 
   * - **RESPONSE_FORMAT_ERROR**: The SLB health check received a response in an incorrect format from the backend server.
   * 
   * - **RESPONSE_MISMATCH**: The response code received from the backend server during the SLB health check did not match the expected response code.
   * 
   * @example
   * RESPONSE_MISMATCH
   */
  reasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      actualResponse: 'ActualResponse',
      expectedResponse: 'ExpectedResponse',
      reasonCode: 'ReasonCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualResponse: 'string',
      expectedResponse: 'string',
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

export class GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServers extends $dara.Model {
  /**
   * @remarks
   * The backend server port.
   * 
   * @example
   * 90
   */
  port?: number;
  /**
   * @remarks
   * The reason for the abnormal state.
   */
  reason?: GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServersReason;
  /**
   * @remarks
   * The backend server ID.
   * 
   * @example
   * i-uf62h8v******
   */
  serverId?: string;
  /**
   * @remarks
   * The backend server group IP address.
   * 
   * @example
   * 192.168.2.11
   */
  serverIp?: string;
  /**
   * @remarks
   * The health check status. Valid values:
   * 
   * - **Initial**: Initializing. The SLB instance has health check configured, but no data is available.
   * 
   * - **Unhealthy**: Unhealthy. The backend server has continuously reported an unhealthy state.
   * 
   * - **Unused**: Not in use. The weight of the backend server is 0, or cross-zone load balancing is disabled and the backend server is not in the same zone as the ALB instance.
   * 
   * - **Unavailable**: Not enabled. Health check is not enabled.
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
      reason: GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServersReason,
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

export class GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfos extends $dara.Model {
  /**
   * @remarks
   * The server group usage type.
   * 
   * @example
   * TrafficMirror
   */
  actionType?: string;
  /**
   * @remarks
   * The health check status. Valid values: **on**: Health check is enabled.
   * 
   * @example
   * on
   */
  healthCheckEnabled?: string;
  /**
   * @remarks
   * The list of backend servers in abnormal state.
   */
  nonNormalServers?: GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServers[];
  /**
   * @remarks
   * The number of servers in the server group.
   * 
   * @example
   * 1
   */
  serverCount?: number;
  /**
   * @remarks
   * The associated server group ID.
   * 
   * @example
   * sgp-8ilqs4axp6******
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      healthCheckEnabled: 'HealthCheckEnabled',
      nonNormalServers: 'NonNormalServers',
      serverCount: 'ServerCount',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      healthCheckEnabled: 'string',
      nonNormalServers: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServers },
      serverCount: 'number',
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

export class GetListenerHealthStatusResponseBodyRuleHealthStatus extends $dara.Model {
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * @example
   * rule-hp34s2h0xx1ht4nwo****
   */
  ruleId?: string;
  /**
   * @remarks
   * The list of server groups.
   */
  serverGroupInfos?: GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfos[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      serverGroupInfos: 'ServerGroupInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      serverGroupInfos: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfos },
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
   * The health check status list of server groups associated with the listener.
   */
  listenerHealthStatus?: GetListenerHealthStatusResponseBodyListenerHealthStatus[];
  /**
   * @remarks
   * Indicates whether a next query token exists. Valid values:
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876F******
   */
  requestId?: string;
  /**
   * @remarks
   * The health status list of forwarding rules.
   */
  ruleHealthStatus?: GetListenerHealthStatusResponseBodyRuleHealthStatus[];
  static names(): { [key: string]: string } {
    return {
      listenerHealthStatus: 'ListenerHealthStatus',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      ruleHealthStatus: 'RuleHealthStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerHealthStatus: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyListenerHealthStatus },
      nextToken: 'string',
      requestId: 'string',
      ruleHealthStatus: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyRuleHealthStatus },
    };
  }

  validate() {
    if(Array.isArray(this.listenerHealthStatus)) {
      $dara.Model.validateArray(this.listenerHealthStatus);
    }
    if(Array.isArray(this.ruleHealthStatus)) {
      $dara.Model.validateArray(this.ruleHealthStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

