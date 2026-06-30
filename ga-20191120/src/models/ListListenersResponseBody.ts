// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersResponseBodyListenersBackendPorts extends $dara.Model {
  /**
   * @remarks
   * The start port of the backend server.
   * 
   * @example
   * 80
   */
  fromPort?: string;
  /**
   * @remarks
   * The end port of the backend server.
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
   * The type of the certificate.
   * 
   * Only **Server**, which indicates a server-side certificate, is returned.
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
   * The start port used to receive and forward requests to endpoints.
   * 
   * @example
   * 20
   */
  fromPort?: number;
  /**
   * @remarks
   * The end port used to receive and forward requests to endpoints.
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
   * The name of the managed policy action. Valid values:
   * 
   * - **Create**: Create an instance.
   * 
   * - **Update**: Update the current instance.
   * 
   * - **Delete**: Delete the current instance.
   * 
   * - **Associate**: Associate the instance with other resources.
   * 
   * - **UserUnmanaged**: Unmanage the instance.
   * 
   * - **CreateChild**: Create a child resource in the current instance.
   * 
   * @example
   * Update
   */
  action?: string;
  /**
   * @remarks
   * The type of the child resource. Valid values:
   * 
   * - **Listener**: listener.
   * 
   * - **IpSet**: acceleration region.
   * 
   * - **EndpointGroup**: endpoint group.
   * 
   * - **ForwardingRule**: forwarding rule.
   * 
   * - **Endpoint**: endpoint.
   * 
   * - **EndpointGroupDestination**: protocol mapping of an endpoint group that is associated with a custom routing listener.
   * 
   * - **EndpointPolicy**: traffic policy for an endpoint that is associated with a custom routing listener.
   * 
   * > This parameter is returned only if the value of **Action** is **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the specified action is managed. Valid values:
   * 
   * - **true**: The action is managed. You cannot perform the specified action on the managed instance.
   * 
   * - **false**: The action is not managed. You can perform the specified action on the managed instance.
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
   * Indicates whether the `GA-AP` header is used to retrieve the acceleration region information.
   * 
   * - **true**
   * 
   * - **false**
   * 
   * > This parameter is available only for HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForGaApEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `GA-ID` header is used to retrieve the ID of the GA instance.
   * 
   * - **true**
   * 
   * - **false**
   * 
   * > This parameter is available only for HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForGaIdEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `GA-X-Forward-Port` header is used to retrieve the listener port of the GA instance.
   * 
   * - **true**
   * 
   * - **false**
   * 
   * > This parameter is available only for HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForPortEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `GA-X-Forward-Proto` header is used to retrieve the listener protocol of the GA instance.
   * 
   * - **true**
   * 
   * - **false**
   * 
   * > This parameter is available only for HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForProtoEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `X-Real-IP` header is used to retrieve the real IP address of the client.
   * 
   * - **true**
   * 
   * - **false**
   * 
   * > This parameter is available only for HTTP and HTTPS listeners.
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
   * The ID of the Global Accelerator instance.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The port mapping of the backend server.
   */
  backendPorts?: ListListenersResponseBodyListenersBackendPorts[];
  /**
   * @remarks
   * The details of the SSL certificate.
   */
  certificates?: ListListenersResponseBodyListenersCertificates[];
  /**
   * @remarks
   * Client affinity.
   * 
   * - **NONE**: Client affinity is disabled. Requests from the same client are not always routed to the same endpoint.
   * 
   * - **SOURCE_IP**: Client affinity is enabled. When a client accesses a stateful application, all requests from the same client are routed to the same endpoint regardless of the source port or protocol.
   * 
   * @example
   * SOURCE_IP
   */
  clientAffinity?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the listener was created. Unit: milliseconds.
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
   * - **http3**: HTTP/3.
   * 
   * - **http2**: HTTP/2.
   * 
   * - **http1.1**: HTTP/1.1.
   * 
   * > This parameter is available only for HTTPS listeners.
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
   * The listener port range.
   */
  portRanges?: ListListenersResponseBodyListenersPortRanges[];
  /**
   * @remarks
   * The transport layer protocol used by the listener.
   * 
   * - **TCP**: TCP.
   * 
   * - **UDP**: UDP.
   * 
   * - **HTTP**: HTTP.
   * 
   * - **HTTPS**: HTTPS.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * Indicates whether the proxy protocol is used to preserve client IP addresses.
   * 
   * - **true**: The proxy protocol is used to preserve client IP addresses. After you enable the proxy protocol, you can retrieve the source IP addresses of clients from the backend servers.
   * 
   * - **false**: The proxy protocol is not used to preserve client IP addresses.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  proxyProtocol?: boolean;
  /**
   * @remarks
   * The timeout period for HTTP or HTTPS requests. Unit: seconds.
   * 
   * > This parameter is available only for HTTP and HTTPS listeners. If a backend server does not respond within the timeout period, Global Accelerator returns an HTTP 504 error to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The ID of the security policy instance.
   * 
   * - **tls_cipher_policy_1_0**
   * 
   *   - Supported TLS versions: TLSv1.0, TLSv1.1, and TLSv1.2.
   * 
   *   - Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * - **tls_cipher_policy_1_1**
   * 
   *   - Supported TLS versions: TLSv1.1 and TLSv1.2.
   * 
   *   - Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * - **tls_cipher_policy_1_2**
   * 
   *   - Supported TLS version: TLSv1.2.
   * 
   *   - Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * - **tls_cipher_policy_1_2_strict**
   * 
   *   - Supported TLS version: TLSv1.2.
   * 
   *   - Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA.
   * 
   * - **tls_cipher_policy_1_2_strict_with_1_3**
   * 
   *   - Supported TLS versions: TLSv1.2 and TLSv1.3.
   * 
   *   - Supported cipher suites: TLS_AES_128_GCM_SHA256, TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, TLS_AES_128_CCM_SHA256, TLS_AES_128_CCM_8_SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES128-SHA256, ECDHE-ECDSA-AES256-SHA384, ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-ECDSA-AES128-SHA, ECDHE-ECDSA-AES256-SHA, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA.
   * 
   * > This parameter is available only for HTTPS listeners.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The ID of the service that manages the instance.
   * 
   * > This parameter is returned only if **ServiceManaged** is set to **True**.
   * 
   * @example
   * ALB
   */
  serviceId?: string;
  /**
   * @remarks
   * Indicates whether the instance is a managed instance. Valid values:
   * 
   * - **true**: The instance is a managed instance.
   * 
   * - **false**: The instance is not a managed instance.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The actions that you can perform on the managed instance.
   * 
   * > - This parameter is returned only if **ServiceManaged** is set to **True**.
   * >
   * > - When an instance is managed, you cannot perform some operations on the instance.
   */
  serviceManagedInfos?: ListListenersResponseBodyListenersServiceManagedInfos[];
  /**
   * @remarks
   * The status of the listener.
   * 
   * - **active**: The listener is running.
   * 
   * - **init**: The listener is being initialized.
   * 
   * - **updating**: The listener is being updated.
   * 
   * - **deleting**: The listener is being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The routing type of the listener.
   * 
   * - **Standard**: smart routing.
   * 
   * - **CustomRouting**: custom routing.
   * 
   * @example
   * Standard
   */
  type?: string;
  /**
   * @remarks
   * The configuration of the `XForward` fields.
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
   * The details of the listeners.
   */
  listeners?: ListListenersResponseBodyListeners[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
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

