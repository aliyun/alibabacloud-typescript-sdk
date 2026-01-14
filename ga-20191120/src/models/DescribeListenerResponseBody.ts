// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeListenerResponseBodyBackendPorts extends $dara.Model {
  /**
   * @remarks
   * The first port in the range of ports that are used by the backend server to receive requests.
   * 
   * This parameter is returned only if an HTTPS listener is configured and the listener port is the same as the service port of the backend server.
   * 
   * @example
   * 80
   */
  fromPort?: string;
  /**
   * @remarks
   * The last port in the range of ports that are used by the backend server to receive requests.
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

export class DescribeListenerResponseBodyPortRanges extends $dara.Model {
  /**
   * @remarks
   * The first port in the range of listener ports that are used to receive and forward requests to endpoints.
   * 
   * @example
   * 20
   */
  fromPort?: number;
  /**
   * @remarks
   * The last port in the range of listener ports that are used to receive and forward requests to endpoints.
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
   * The ID of the ACL that is associated with the listener.
   * 
   * @example
   * 123
   */
  aclId?: string;
  /**
   * @remarks
   * Indicates whether the access control feature is enabled. Valid values:
   * 
   * *   **on**: enabled.
   * *   **off**: disabled.
   * 
   * @example
   * off
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
   * *   **Listener**: a listener.
   * *   **IpSet**: an acceleration region.
   * *   **EndpointGroup**: an endpoint group.
   * *   **ForwardingRule**: a forwarding rule.
   * *   **Endpoint**: an endpoint.
   * *   **EndpointGroupDestination**: a protocol mapping of an endpoint group associated with a custom routing listener.
   * *   **EndpointPolicy**: a traffic policy of an endpoint associated with a custom routing listener.
   * 
   * >  This parameter is returned only if the value of **Action** is **CreateChild**.
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

export class DescribeListenerResponseBodyXForwardedForConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the `GA-AP` header is used to retrieve information about acceleration regions. Valid values:
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
   * The type of the ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists are suitable for scenarios in which you want to allow only specific IP addresses to access an application. If a whitelist is improperly configured, risks may arise. After a whitelist is configured for a listener, only requests from the IP addresses that are added to the whitelist are distributed by the listener. If the whitelist is enabled but no IP addresses are added to the ACL, the listener does not forward requests.
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are blocked. Blacklists are suitable for scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to the ACL, the listener forwards all requests.
   * 
   * This parameter is returned only if the value of **Status** is **on**.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The information about the backend ports.
   */
  backendPorts?: DescribeListenerResponseBodyBackendPorts[];
  /**
   * @remarks
   * The SSL certificates.
   */
  certificates?: DescribeListenerResponseBodyCertificates[];
  /**
   * @remarks
   * Indicates whether client affinity is enabled for the listener.
   * 
   * *   If **NONE** is returned, client affinity is disabled. Requests from the same client may be forwarded to different endpoints.
   * *   If **SOURCE_IP** is returned, client affinity is enabled. When a client accesses stateful applications, requests from the same client are forwarded to the same endpoint regardless of the source port or protocol.
   * 
   * @example
   * SOURCE_IP
   */
  clientAffinity?: string;
  /**
   * @remarks
   * The time when the listener was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
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
  portRanges?: DescribeListenerResponseBodyPortRanges[];
  /**
   * @remarks
   * The network transmission protocol that is used by the listener. Valid values:
   * 
   * *   **tcp**: TCP.
   * *   **udp**: UDP.
   * *   **http**: HTTP.
   * *   **https**: HTTPS.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * Indicates whether the client IP address preservation feature is enabled. Valid values:
   * 
   * *   **true** You can view the source IP addresses of clients over the backend service.
   * *   **false**
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  proxyProtocol?: boolean;
  /**
   * @remarks
   * The information about the access control list (ACL) that is associated with the listener.
   */
  relatedAcls?: DescribeListenerResponseBodyRelatedAcls[];
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
   * The timeout period of HTTP or HTTPS requests. Unit: seconds.
   * 
   * >  This parameter is returned only for HTTP and HTTPS listeners. If no responses are received from the backend server within the specified timeout period, GA returns the HTTP 504 error code to the client.
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
   * >*   This parameter is returned only if the value of **ServiceManaged** is **true**.
   * >*   Users can perform only specific actions on a managed instance.
   */
  serviceManagedInfos?: DescribeListenerResponseBodyServiceManagedInfos[];
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **configuring**: The listener is being configured.
   * *   **init**: The listener is being initialized.
   * *   **updating**: The listener is being updated.
   * *   **deleting:** The listener is being deleted.
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

