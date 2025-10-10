// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned from the server, for example, **302**.
   * 
   * > A value is returned only if `ReasonCode` is set to **RESPONSE_MISMATCH**.
   * 
   * @example
   * 302
   */
  actualResponse?: string;
  /**
   * @remarks
   * The HTTP status code returned after backend servers pass health checks.
   * 
   * Valid values: **HTTP_2xx**, **HTTP_3xx**, **HTTP_4xx**, and **HTTP_5xx**. Multiple status codes are separated by commas (,).
   * 
   * > This value is returned only if **ReasonCode** is set to **RESPONSE_MISMATCH**.
   * 
   * @example
   * HTTP_2xx
   */
  expectedResponse?: string;
  /**
   * @remarks
   * The reason why the value of **Status** is Unhealthy. Only HTTP and HTTPS listeners support this parameter.
   * 
   * *   **CONNECT_TIMEOUT**: ALB failed to connect to the backend server within the specified period of time.
   * *   **CONNECT_FAILED**: ALB failed to connect to the backend server.
   * *   **RECV_RESPONSE_FAILED**: ALB failed to receive a response from the backend server.
   * *   **RECV_RESPONSE_TIMEOUT**: ALB failed to receive a response from the backend server within the specified period of time.
   * *   **SEND_REQUEST_FAILED**: ALB failed to send a request to the backend server.
   * *   **SEND_REQUEST_TIMEOUT**: ALB failed to send a request to the backend server within the specified period of time.
   * *   **RESPONSE_FORMAT_ERROR**: The format of the response from the backend server is invalid.
   * *   **RESPONSE_MISMATCH**: The HTTP status code returned from the backend server is not the expected one.
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
   * The backend port.
   * 
   * @example
   * 90
   */
  port?: number;
  /**
   * @remarks
   * The cause for the unhealthy state of the backend servers.
   */
  reason?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * rg-bp1bfa08ex*****
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
   * The status of the health check. Valid values: Valid values:
   * 
   * *   **Initial**: indicates that health checks are configured for the NLB instance, but no data was found.
   * *   **Unhealthy**: indicates that the backend server consecutively fails health checks.
   * *   **Unused**: indicates that the weight of the backend server is 0.
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
   * The action specified for the server group. Valid values:
   * 
   * *   **ForwardGroup**: distributes requests to server groups.
   * *   **TrafficMirror**: mirrors requests to server groups.
   * 
   * @example
   * TrafficMirror
   */
  actionType?: string;
  /**
   * @remarks
   * Indicates whether health checks are enabled. If **on** is returned, it indicates that health checks are enabled.
   * 
   * @example
   * on
   */
  healthCheckEnabled?: string;
  /**
   * @remarks
   * A list of unhealthy backend servers.
   */
  nonNormalServers?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServers[];
  /**
   * @remarks
   * The ID of the server group that is associated with the listener.
   * 
   * @example
   * vsp-bp1qjwo61pqz3ahltv****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      healthCheckEnabled: 'HealthCheckEnabled',
      nonNormalServers: 'NonNormalServers',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      healthCheckEnabled: 'string',
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
   * The listener ID.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
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
   * The information about the server group.
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
   * The HTTP status code returned from the server, for example, **302**.
   * 
   * > A value is returned only if **ReasonCode** is set to **RESPONSE_MISMATCH**.
   * 
   * @example
   * 302
   */
  actualResponse?: string;
  /**
   * @remarks
   * The HTTP status code returned after backend servers pass health checks.
   * 
   * Valid values: **HTTP_2xx**, **HTTP_3xx**, **HTTP_4xx**, and **HTTP_5xx**. Multiple status codes are separated by commas (,).
   * 
   * > A value is returned only if **ReasonCode** is set to **RESPONSE_MISMATCH**.
   * 
   * @example
   * HTTP_2xx
   */
  expectedResponse?: string;
  /**
   * @remarks
   * The reason why the value of **Status** is Unhealthy. Only forwarding rules for HTTP and HTTPS listeners support this parameter.
   * 
   * *   **CONNECT_TIMEOUT**: ALB failed to connect to the backend server within the specified period of time.
   * *   **CONNECT_FAILED**: ALB failed to connect to the backend server.
   * *   **RECV_RESPONSE_FAILED**: ALB failed to receive a response from the backend server.
   * *   **RECV_RESPONSE_TIMEOUT**: ALB failed to receive a response from the backend server within the specified period of time.
   * *   **SEND_REQUEST_FAILED**: ALB failed to send a request to the backend server.
   * *   **SEND_REQUEST_TIMEOUT**: ALB failed to send a request to the backend server within the specified period of time.
   * *   **RESPONSE_FORMAT_ERROR**: The format of the response from the backend server is invalid.
   * *   **RESPONSE_MISMATCH**: The HTTP status code returned from the backend server is not the expected one.
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
   * The backend port.
   * 
   * @example
   * 90
   */
  port?: number;
  /**
   * @remarks
   * The cause for the unhealthy state of the backend servers.
   */
  reason?: GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServersReason;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * rg-bp1bfa08ex****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the server group.
   * 
   * @example
   * 192.168.2.11
   */
  serverIp?: string;
  /**
   * @remarks
   * The status of the health check. Valid values: Valid values:
   * 
   * *   **Initial**: indicates that health checks are configured for the NLB instance, but no data was found.
   * *   **Unhealthy**: indicates that the backend server consecutively fails health checks.
   * *   **Unused**: indicates that the weight of the backend server is 0.
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
   * The action specified for the server group.
   * 
   * @example
   * TrafficMirror
   */
  actionType?: string;
  /**
   * @remarks
   * Indicates whether health checks are enabled. If **on** is returned, it indicates that health checks are enabled.
   * 
   * @example
   * on
   */
  healthCheckEnabled?: string;
  /**
   * @remarks
   * A list of unhealthy backend servers.
   */
  nonNormalServers?: GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServers[];
  /**
   * @remarks
   * The ID of the server group that is associated with the listener.
   * 
   * @example
   * vsp-bp1qjwo61pqz3ahlt****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      healthCheckEnabled: 'HealthCheckEnabled',
      nonNormalServers: 'NonNormalServers',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      healthCheckEnabled: 'string',
      nonNormalServers: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfosNonNormalServers },
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
   * The ID of the forwarding rule.
   * 
   * @example
   * rule-hp34s2h0xx1ht4nwo****
   */
  ruleId?: string;
  /**
   * @remarks
   * The server groups.
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
   * The health check status of the server groups associated with the listener.
   */
  listenerHealthStatus?: GetListenerHealthStatusResponseBodyListenerHealthStatus[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
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
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The health check status of the forwarding rules.
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

