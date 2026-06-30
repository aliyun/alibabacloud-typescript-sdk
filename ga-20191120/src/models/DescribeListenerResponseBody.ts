// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeListenerResponseBodyBackendPorts extends $dara.Model {
  /**
   * @remarks
   * The start port of the backend server that is used to receive requests.
   * 
   * This parameter is returned only when the listener protocol is HTTPS and the listener port is the same as the service port of the backend server.
   * 
   * @example
   * 80
   */
  fromPort?: string;
  /**
   * @remarks
   * The end port of the backend server that is used to receive requests.
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

export class DescribeListenerResponseBodyCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the SSL certificate.
   * 
   * @example
   * 449****-cn-hangzhou
   */
  id?: string;
  /**
   * @remarks
   * The type of the certificate.
   * 
   * Only **Server** is returned, which indicates a server-side certificate.
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

export class DescribeListenerResponseBodyPortRanges extends $dara.Model {
  /**
   * @remarks
   * The start of the listener port range that is used to receive and forward requests to endpoints.
   * 
   * @example
   * 20
   */
  fromPort?: number;
  /**
   * @remarks
   * The end of the listener port range that is used to receive and forward requests to endpoints.
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

export class DescribeListenerResponseBodyRelatedAcls extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control list (ACL) that is associated with the listener.
   * 
   * @example
   * 123
   */
  aclId?: string;
  /**
   * @remarks
   * Indicates whether the access control feature is enabled.
   * 
   * - **Associated**: The access control feature is enabled.
   * 
   * @example
   * Associated
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerResponseBodyServiceManagedInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the action on the managed instance. Valid values:
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
   * - **CreateChild**: Create a child resource in the instance.
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
   * - **EndpointGroupDestination**: protocol mapping of an endpoint group associated with a custom routing listener.
   * 
   * - **EndpointPolicy**: traffic policy of an endpoint associated with a custom routing listener.
   * 
   * > This parameter is returned only when **Action** is set to **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the specified action is managed. Valid values:
   * 
   * - **true**: The specified action is managed. You cannot perform the specified action on the managed instance.
   * 
   * - **false**: The specified action is not managed. You can perform the specified action on the managed instance.
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

export class DescribeListenerResponseBodyXForwardedForConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the `GA-AP` header is used to retrieve information about the acceleration region.
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
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
   * - **true**: yes.
   * 
   * - **false**: no.
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
   * - **true**: yes.
   * 
   * - **false**: no.
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
   * - **true**: yes.
   * 
   * - **false**: no.
   * 
   * > This parameter is available only for HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForProtoEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `X-Real-IP` header is used to retrieve the real IP addresses of clients.
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
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

export class DescribeListenerResponseBody extends $dara.Model {
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
   * The type of the ACL.
   * 
   * - **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists are suitable for applications that allow access only from specific IP addresses. If you enable a whitelist but do not add an IP address to the ACL, the GA listener does not forward requests.
   * 
   * - **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists are suitable for applications that deny access from specific IP addresses. If you enable a blacklist but do not add an IP address to the ACL, the GA listener forwards all requests.
   * 
   * This parameter is returned when an ACL is associated with the listener.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The backend port information.
   */
  backendPorts?: DescribeListenerResponseBodyBackendPorts[];
  /**
   * @remarks
   * The list of SSL certificates.
   */
  certificates?: DescribeListenerResponseBodyCertificates[];
  /**
   * @remarks
   * Client affinity.
   * 
   * - If **NONE** is returned, client affinity is disabled. In this case, requests from the same client may be forwarded to different endpoints.
   * 
   * - If **SOURCE_IP** is returned, client affinity is enabled. When a client accesses a stateful application, all requests from the same client are forwarded to the same endpoint regardless of the source port or protocol.
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
  createTime?: string;
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
   * The timeout period for idle connections. Unit: seconds.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
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
   * The name of the listener.
   * 
   * @example
   * Listener
   */
  name?: string;
  /**
   * @remarks
   * The listener port information.
   */
  portRanges?: DescribeListenerResponseBodyPortRanges[];
  /**
   * @remarks
   * The network transport protocol that is used by the listener.
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
   * - **true**: The proxy protocol is used to preserve client IP addresses. After this feature is enabled, you can view the original IP addresses of clients on the backend service.
   * 
   * - **false**: The proxy protocol is not used to preserve client IP addresses.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  proxyProtocol?: boolean;
  /**
   * @remarks
   * The access control policy groups that are associated with the listener.
   */
  relatedAcls?: DescribeListenerResponseBodyRelatedAcls[];
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
   * The timeout period for HTTP or HTTPS requests. Unit: seconds.
   * 
   * > This parameter is available only for HTTP and HTTPS listeners. If a backend server does not respond within the timeout period, GA returns an HTTP 504 error to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The ID of the security policy.
   * 
   * - **tls_cipher_policy_1_0**
   * 
   *   - Supported TLS versions: TLS 1.0, TLS 1.1, and TLS 1.2.
   * 
   *   - Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * - **tls_cipher_policy_1_1**
   * 
   *   - Supported TLS versions: TLS 1.1 and TLS 1.2.
   * 
   *   - Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * - **tls_cipher_policy_1_2**
   * 
   *   - Supported TLS versions: TLS 1.2.
   * 
   *   - Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * - **tls_cipher_policy_1_2_strict**
   * 
   *   - Supported TLS versions: TLS 1.2.
   * 
   *   - Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA.
   * 
   * - **tls_cipher_policy_1_2_strict_with_1_3**
   * 
   *   - Supported TLS versions: TLS 1.2 and TLS 1.3.
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
   * > This parameter is returned only when **ServiceManaged** is set to **True**.
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
   * > - This parameter is returned only when **ServiceManaged** is set to **True**.
   * >
   * > - When the instance is in a managed state, you cannot perform some operations on the instance.
   */
  serviceManagedInfos?: DescribeListenerResponseBodyServiceManagedInfos[];
  /**
   * @remarks
   * The status of the listener.
   * 
   * - **configuring**: The listener is being configured.
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
   * - **Standard**: intelligent routing.
   * 
   * - **CustomRouting**: custom routing.
   * 
   * @example
   * Standard
   */
  type?: string;
  /**
   * @remarks
   * The configurations of the `X-Forwarded-For` headers.
   */
  XForwardedForConfig?: DescribeListenerResponseBodyXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      aclType: 'AclType',
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
      relatedAcls: 'RelatedAcls',
      requestId: 'RequestId',
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
      aclType: 'string',
      backendPorts: { 'type': 'array', 'itemType': DescribeListenerResponseBodyBackendPorts },
      certificates: { 'type': 'array', 'itemType': DescribeListenerResponseBodyCertificates },
      clientAffinity: 'string',
      createTime: 'string',
      description: 'string',
      httpVersion: 'string',
      idleTimeout: 'number',
      listenerId: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': DescribeListenerResponseBodyPortRanges },
      protocol: 'string',
      proxyProtocol: 'boolean',
      relatedAcls: { 'type': 'array', 'itemType': DescribeListenerResponseBodyRelatedAcls },
      requestId: 'string',
      requestTimeout: 'number',
      securityPolicyId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeListenerResponseBodyServiceManagedInfos },
      state: 'string',
      type: 'string',
      XForwardedForConfig: DescribeListenerResponseBodyXForwardedForConfig,
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
    if(Array.isArray(this.relatedAcls)) {
      $dara.Model.validateArray(this.relatedAcls);
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

