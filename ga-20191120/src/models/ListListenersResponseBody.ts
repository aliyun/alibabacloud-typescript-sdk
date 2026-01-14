// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersResponseBodyListenersBackendPorts extends $dara.Model {
  /**
   * @remarks
   * The first port in the range of ports that are used by backend servers.
   * 
   * @example
   * 80
   */
  fromPort?: string;
  /**
   * @remarks
   * The last port in the range of ports that are used by backend servers.
   * 
   * @example
   * 80
   */
  toPort?: string;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'string',
      toPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the SSL certificate.
   * 
   * @example
   * 44983xxxx-cn-hangzhou
   */
  id?: string;
  /**
   * @remarks
   * The type of the SSL certificate.
   * 
   * Only **Server** may be returned, which indicates a server certificate.
   * 
   * @example
   * Server
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersPortRanges extends $dara.Model {
  /**
   * @remarks
   * The first port in the listener port range that is used to receive and forward requests to endpoints.
   * 
   * @example
   * 20
   */
  fromPort?: number;
  /**
   * @remarks
   * The last port in the listener port range that is used to receive and forward requests to endpoints.
   * 
   * @example
   * 20
   */
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      toPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersServiceManagedInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the action on the managed instance. Valid values:
   * 
   * *   **Create**
   * *   **Update**
   * *   **Delete**
   * *   **Associate**
   * *   **UserUnmanaged**
   * *   **CreateChild**
   * 
   * @example
   * Update
   */
  action?: string;
  /**
   * @remarks
   * The type of the child resource. Valid values:
   * 
   * *   **Listener**: listener.
   * *   **IpSet**: acceleration region.
   * *   **EndpointGroup**: endpoint group.
   * *   **ForwardingRule**: forwarding rule.
   * *   **Endpoint**: endpoint.
   * *   **EndpointGroupDestination**: protocol mapping of an endpoint group associated with a custom routing listener.
   * *   **EndpointPolicy**: traffic policy of an endpoint associated with a custom routing listener.
   * 
   * >  This parameter takes effect only if the value of **Action** is **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the specified actions are managed.
   * 
   * *   **true**: The specified actions are managed, and users cannot perform the specified actions on the managed instance.
   * *   **false**: The specified actions are not managed, and users can perform the specified actions on the managed instance.
   * 
   * @example
   * false
   */
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersXForwardedForConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the `GA-AP` header is used to retrieve the information about acceleration regions. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is returned only for HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForGaApEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `GA-ID` header is used to retrieve the ID of the GA instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is returned only for HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForGaIdEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `GA-X-Forward-Port` header is used to retrieve the listener ports of the GA instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is returned only for HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForPortEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `GA-X-Forward-Proto` header is used to retrieve the listener protocol of the GA instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is returned only for HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForProtoEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `X-Real-IP` header is used to retrieve client IP addresses. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is returned only for HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XRealIpEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForGaApEnabled: 'XForwardedForGaApEnabled',
      XForwardedForGaIdEnabled: 'XForwardedForGaIdEnabled',
      XForwardedForPortEnabled: 'XForwardedForPortEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XRealIpEnabled: 'XRealIpEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForGaApEnabled: 'boolean',
      XForwardedForGaIdEnabled: 'boolean',
      XForwardedForPortEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XRealIpEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListeners extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The range of ports that are used by backend servers.
   */
  backendPorts?: ListListenersResponseBodyListenersBackendPorts[];
  /**
   * @remarks
   * The information about the SSL certificates.
   */
  certificates?: ListListenersResponseBodyListenersCertificates[];
  /**
   * @remarks
   * Indicates whether client affinity is enabled for the listener.
   * 
   * *   If **NONE** is returned, client affinity is disabled. When client affinity is disabled, requests from the same client may be forwarded to different endpoints.
   * *   If **SOURCE_IP** is returned, client affinity is enabled. When a client accesses stateful applications, requests from the same client are forwarded to the same endpoint regardless of the source port or protocol.
   * 
   * @example
   * SOURCE_IP
   */
  clientAffinity?: string;
  /**
   * @remarks
   * The timestamp that indicates when the listener was created. Unit: milliseconds.
   * 
   * @example
   * 1577786252000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the listener.
   * 
   * @example
   * Listener
   */
  description?: string;
  /**
   * @remarks
   * The maximum version of the HTTP protocol. Valid values:
   * 
   * *   **http3**
   * *   **http2**
   * *   **http1.1**
   * 
   * >  This parameter is returned only for HTTPS listeners.
   * 
   * @example
   * http2
   */
  httpVersion?: string;
  /**
   * @remarks
   * The timeout period of idle connections. Unit: seconds.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The name of the listener.
   * 
   * @example
   * Listener
   */
  name?: string;
  /**
   * @remarks
   * The information about the listener ports.
   */
  portRanges?: ListListenersResponseBodyListenersPortRanges[];
  /**
   * @remarks
   * The network transmission protocol that is used by the listener. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * *   **http**
   * *   **https**
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * Indicates whether client IP address preservation is enabled. Valid values:
   * 
   * *   **true**: Client IP address preservation is enabled. This feature allows you to view client IP addresses on backend servers.
   * *   **false**: Client IP address preservation is disabled.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  proxyProtocol?: boolean;
  /**
   * @remarks
   * The timeout period of HTTP or HTTPS requests. Unit: seconds.
   * 
   * >  This parameter is returned only for HTTP and HTTPS listeners. If no responses are received from the backend server within the timeout period, GA returns an HTTP 504 error code to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The ID of the security policy.
   * 
   * *   **tls_cipher_policy_1_0**
   * 
   *     *   Supported Transport Layer Security (TLS) versions: TLS 1.0, TLS 1.1, and TLS 1.2.
   *     *   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * *   **tls_cipher_policy_1_1**
   * 
   *     *   Supported TLS versions: TLS 1.1 and TLS 1.2.
   *     *   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * *   **tls_cipher_policy_1_2**
   * 
   *     *   Supported TLS version: TLS 1.2.
   *     *   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * *   **tls_cipher_policy_1_2_strict**
   * 
   *     *   Supported TLS version: TLS 1.2.
   *     *   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA.
   * 
   * *   **tls_cipher_policy_1_2_strict_with_1_3**
   * 
   *     *   Supported TLS versions: TLS 1.2 and TLS 1.3.
   *     *   Supported cipher suites: TLS_AES_128_GCM_SHA256, TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, TLS_AES_128_CCM_SHA256, TLS_AES_128_CCM_8_SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES128-SHA256, ECDHE-ECDSA-AES256-SHA384, ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-ECDSA-AES128-SHA, ECDHE-ECDSA-AES256-SHA, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA.
   * 
   * >  This parameter is returned only for HTTPS listeners.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The ID of the service that manages the instance.
   * 
   * >  This parameter is returned only if the value of **ServiceManaged** is **true**.
   * 
   * @example
   * ALB
   */
  serviceId?: string;
  /**
   * @remarks
   * Indicates whether the instance is managed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The actions that users can perform on the managed instance.
   * > *   This parameter is returned only if the value of **ServiceManaged** is **true**.
   * > *   Users can perform only specific actions on a managed instance.
   */
  serviceManagedInfos?: ListListenersResponseBodyListenersServiceManagedInfos[];
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **active**
   * *   **init**
   * *   **updating**
   * *   **deleting**
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The routing type of the listener. Valid values:
   * 
   * *   **Standard**: intelligent routing.
   * *   **CustomRouting**: custom routing.
   * 
   * @example
   * Standard
   */
  type?: string;
  /**
   * @remarks
   * The configurations of the `XForward` headers.
   */
  XForwardedForConfig?: ListListenersResponseBodyListenersXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      backendPorts: 'BackendPorts',
      certificates: 'Certificates',
      clientAffinity: 'ClientAffinity',
      createTime: 'CreateTime',
      description: 'Description',
      httpVersion: 'HttpVersion',
      idleTimeout: 'IdleTimeout',
      listenerId: 'ListenerId',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      proxyProtocol: 'ProxyProtocol',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
      type: 'Type',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      backendPorts: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersBackendPorts },
      certificates: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersCertificates },
      clientAffinity: 'string',
      createTime: 'number',
      description: 'string',
      httpVersion: 'string',
      idleTimeout: 'number',
      listenerId: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersPortRanges },
      protocol: 'string',
      proxyProtocol: 'boolean',
      requestTimeout: 'number',
      securityPolicyId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersServiceManagedInfos },
      state: 'string',
      type: 'string',
      XForwardedForConfig: ListListenersResponseBodyListenersXForwardedForConfig,
    };
  }

  validate() {
    if(Array.isArray(this.backendPorts)) {
      $dara.Model.validateArray(this.backendPorts);
    }
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    if(Array.isArray(this.serviceManagedInfos)) {
      $dara.Model.validateArray(this.serviceManagedInfos);
    }
    if(this.XForwardedForConfig && typeof (this.XForwardedForConfig as any).validate === 'function') {
      (this.XForwardedForConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the listeners.
   */
  listeners?: ListListenersResponseBodyListeners[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6FEA0CF3-D3B9-43E5-A304-D217037876A8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': ListListenersResponseBodyListeners },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.listeners)) {
      $dara.Model.validateArray(this.listeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

