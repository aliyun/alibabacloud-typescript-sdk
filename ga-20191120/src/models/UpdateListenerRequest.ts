// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateListenerRequestBackendPorts extends $dara.Model {
  /**
   * @remarks
   * The first port in the range of ports that are used by backend servers to receive requests.
   * 
   * > This parameter is required only when you configure an HTTPS or HTTP listener and the listener port is different from the service port of the backend servers. In this case, the first port that is used by the backend servers to receive requests must be the same as the last port.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The last port in the range of ports that are used by backend servers to receive requests.
   * 
   * > This parameter is required only when you configure an HTTPS or HTTP listener and the listener port is different from the service port of the backend servers. In this case, the first port that is used by the backend servers to receive requests must be the same as the last port.
   * 
   * @example
   * 80
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

export class UpdateListenerRequestCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the SSL certificate.
   * 
   * > This parameter is required only when you configure an HTTPS listener.
   * 
   * @example
   * 449****-cn-hangzhou
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerRequestPortRanges extends $dara.Model {
  /**
   * @remarks
   * The first port of the listener port range that is used to receive and forward requests to endpoints.
   * 
   * Valid values: **1** to **65499**. The **FromPort** value must be smaller than or equal to the **ToPort** value.
   * 
   * The maximum number of ports that can be configured varies based on the routing type and protocol of the listener. For more information, see [Listener overview](https://help.aliyun.com/document_detail/153216.html).
   * 
   * > You can configure only one listener port for an HTTP or HTTPS listener. In this case, the first port is the same as the last port.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  fromPort?: number;
  /**
   * @remarks
   * The last port of the listener port range that is used to receive and forward requests to endpoints.
   * 
   * Valid values: **1** to **65499**. The **FromPort** value must be smaller than or equal to the **ToPort** value.
   * 
   * The maximum number of ports that can be configured varies based on the routing type and protocol of the listener. For more information, see [Listener overview](https://help.aliyun.com/document_detail/153216.html).
   * 
   * > You can configure only one listener port for an HTTP or HTTPS listener. In this case, the first port is the same as the last port.
   * 
   * This parameter is required.
   * 
   * @example
   * 21
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

export class UpdateListenerRequestXForwardedForConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use the `GA-AP` header to retrieve information about acceleration regions. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * > This parameter is available only when you create an HTTPS or HTTP listener.
   * 
   * @example
   * false
   */
  XForwardedForGaApEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `GA-ID` header to retrieve the ID of the GA instance. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * > This parameter is available only when you create an HTTPS or HTTP listener.
   * 
   * @example
   * false
   */
  XForwardedForGaIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `GA-X-Forward-Port` header to retrieve the listener ports of the GA instance. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * > This parameter is available only when you create an HTTPS or HTTP listener.
   * 
   * @example
   * false
   */
  XForwardedForPortEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `GA-X-Forward-Proto` header to retrieve the listener protocol of the GA instance. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * > This parameter is available only when you create an HTTPS or HTTP listener.
   * 
   * @example
   * false
   */
  XForwardedForProtoEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Real-IP` header to retrieve client IP addresses. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * > This parameter is available only when you create an HTTPS or HTTP listener.
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

export class UpdateListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The range of ports that are used by backend servers to receive requests.
   */
  backendPorts?: UpdateListenerRequestBackendPorts[];
  /**
   * @remarks
   * The SSL certificate.
   */
  certificates?: UpdateListenerRequestCertificates[];
  /**
   * @remarks
   * Indicates whether client affinity is enabled for the listener. Valid values:
   * 
   * *   **NONE**: Client affinity is disabled. Requests from the same client may be forwarded to different endpoints.
   * *   **SOURCE_IP**: Client affinity is enabled. When a client accesses stateful applications, requests from the same client are forwarded to the same endpoint regardless of the source port or protocol.
   * 
   * @example
   * SOURCE_IP
   */
  clientAffinity?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the listener.
   * 
   * The description can be up to 200 characters in length and cannot start with `http://` or `https://`.
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
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * http2
   */
  httpVersion?: string;
  /**
   * @remarks
   * The timeout period for idle connections. Unit: seconds.
   * 
   * *   TCP: 10-900. Default value: 900. Unit: seconds.
   * *   UDP: 10-20. Default value: 20. Unit: seconds.
   * *   HTTP/HTTPS: 1-60. Default value: 15. Unit: seconds.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * Listener
   */
  name?: string;
  /**
   * @remarks
   * The listener ports that are used to receive requests and forward the requests to endpoints.
   * 
   * Valid values: **1** to **65499**.
   * 
   * The maximum number of ports that can be configured varies based on the routing type and protocol of the listener. For more information, see [Listener overview](https://help.aliyun.com/document_detail/153216.html).
   */
  portRanges?: UpdateListenerRequestPortRanges[];
  /**
   * @remarks
   * The network transmission protocol that is used by the listener. Valid values:
   * 
   * *   **tcp**: TCP
   * *   **udp**: UDP
   * *   **http**: HTTP
   * *   **https**: HTTPS
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * Specifies whether to preserve source IP addresses of clients.
   * 
   * *   **true** This feature allows you to view client IP addresses on backend servers.
   * *   **false** (default)
   * 
   * >  This parameter will be discontinued in the API operations that are used to configure listeners. We recommend that you set this parameter when you call API operations to configure endpoint groups. For more information about the **ProxyProtocol** parameter, see [CreateEndpointGroup](https://help.aliyun.com/document_detail/153259.html) and [UpdateEndpointGroup](https://help.aliyun.com/document_detail/153262.html).
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  proxyProtocol?: string;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The timeout period for HTTP or HTTPS requests.
   * 
   * Valid values: 1 to 180. Default value: 60. Unit: seconds.
   * 
   * >  This parameter takes effect only for HTTP or HTTPS listeners. If the backend server does not respond within the timeout period, GA returns an HTTP 504 error code to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The ID of the security policy. Valid values:
   * 
   * *   **tls_cipher_policy_1_0**
   * 
   *     *   Supported Transport Layer Security (TLS) versions: TLS 1.0, TLS 1.1, and TLS 1.2
   *     *   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_1**
   * 
   *     *   Supported TLS versions: TLS 1.1 and TLS 1.2
   *     *   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_2**
   * 
   *     *   Supported TLS version: TLS 1.2
   *     *   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA
   * 
   * *   **tls_cipher_policy_1_2_strict**
   * 
   *     *   Supported TLS version: TLS 1.2
   *     *   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA
   * 
   * *   **tls_cipher_policy_1_2_strict_with_1_3**
   * 
   *     *   Supported TLS versions: TLS 1.2 and TLS 1.3
   *     *   Supported cipher suites: TLS_AES_128_GCM_SHA256, TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, TLS_AES_128_CCM_SHA256, TLS_AES_128_CCM_8_SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES128-SHA256, ECDHE-ECDSA-AES256-SHA384, ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-ECDSA-AES128-SHA, ECDHE-ECDSA-AES256-SHA, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The `XForward` headers.
   */
  XForwardedForConfig?: UpdateListenerRequestXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      backendPorts: 'BackendPorts',
      certificates: 'Certificates',
      clientAffinity: 'ClientAffinity',
      clientToken: 'ClientToken',
      description: 'Description',
      httpVersion: 'HttpVersion',
      idleTimeout: 'IdleTimeout',
      listenerId: 'ListenerId',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      proxyProtocol: 'ProxyProtocol',
      regionId: 'RegionId',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPorts: { 'type': 'array', 'itemType': UpdateListenerRequestBackendPorts },
      certificates: { 'type': 'array', 'itemType': UpdateListenerRequestCertificates },
      clientAffinity: 'string',
      clientToken: 'string',
      description: 'string',
      httpVersion: 'string',
      idleTimeout: 'number',
      listenerId: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': UpdateListenerRequestPortRanges },
      protocol: 'string',
      proxyProtocol: 'string',
      regionId: 'string',
      requestTimeout: 'number',
      securityPolicyId: 'string',
      XForwardedForConfig: UpdateListenerRequestXForwardedForConfig,
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
    if(this.XForwardedForConfig && typeof (this.XForwardedForConfig as any).validate === 'function') {
      (this.XForwardedForConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

