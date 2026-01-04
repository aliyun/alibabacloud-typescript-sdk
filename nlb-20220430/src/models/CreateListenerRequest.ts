// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateListenerRequestProxyProtocolV2Config extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass the Ppv2PrivateLinkEpId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass the PrivateLinkEpsId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpsIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass the VpcId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  ppv2VpcIdEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      ppv2PrivateLinkEpIdEnabled: 'Ppv2PrivateLinkEpIdEnabled',
      ppv2PrivateLinkEpsIdEnabled: 'Ppv2PrivateLinkEpsIdEnabled',
      ppv2VpcIdEnabled: 'Ppv2VpcIdEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ppv2PrivateLinkEpIdEnabled: 'boolean',
      ppv2PrivateLinkEpsIdEnabled: 'boolean',
      ppv2VpcIdEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. The tag key can be up to 64 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`. The tag value can contain letters, digits, and the following special characters: _ . : / = + - @
   * 
   * You can specify up to 20 tags in each call.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The tag value can be up to 128 characters in length, cannot start with `acs:` or `aliyun`, and cannot contain `http://` or `https://`. The tag value can contain letters, digits, and the following special characters: _ . : / = + - @
   * 
   * You can specify up to 20 tags in each call.
   * 
   * @example
   * Test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Application-Layer Protocol Negotiation (ALPN). Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  alpnEnabled?: boolean;
  /**
   * @remarks
   * The ALPN policy. Valid values:
   * 
   * *   **HTTP1Only**: uses only HTTP 1.x. The priority of HTTP 1.1 is higher than that of HTTP 1.0.
   * *   **HTTP2Only**: uses only HTTP 2.0.
   * *   **HTTP2Optional**: preferentially uses HTTP 1.x over HTTP 2.0. The priority of HTTP 1.1 is higher than that of HTTP 1.0, and the priority of HTTP 1.0 is higher than that of HTTP 2.0.
   * *   **HTTP2Preferred**: preferentially uses HTTP 2.0 over HTTP 1.x. The priority of HTTP 2.0 is higher than that of HTTP 1.1, and the priority of HTTP 1.1 is higher than that of HTTP 1.0.
   * 
   * >  This parameter is required if **AlpnEnabled** is set to true.
   * 
   * @example
   * HTTP1Only
   */
  alpnPolicy?: string;
  /**
   * @remarks
   * The certificate authority (CA) certificate. This parameter is supported only by TCLSSL listeners.
   * 
   * >  You can specify only one CA certificate.
   */
  caCertificateIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable mutual authentication. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The server certificate. This parameter is supported only by TCLSSL listeners.
   * 
   * >  You can specify only one server certificate.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token. Ensure that the token is unique among different requests. Only ASCII characters are allowed.
   * 
   * >  If you do not set this parameter, the value of **RequestId** is used.**** The value of **RequestId** is different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of new connections per second supported by the listener in each zone (virtual IP address). Valid values: **0** to **1000000**. **0** indicates that the number of connections is unlimited.
   * 
   * @example
   * 100
   */
  cps?: number;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without sending the actual request. Valid values:
   * 
   * *   **true**: validates the request without performing the operation. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the validation, the corresponding error message is returned. If the request passes the validation, the `DryRunOperation` error code is returned.
   * *   **false** (default): validates the request and performs the operation. If the request passes the validation, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The last port in the listener port range. Valid values: **0** to **65535**. The port number of the last port must be greater than the port number of the first port.
   * 
   * >  This parameter is required when **ListenerPort** is set to **0**.
   * 
   * @example
   * 566
   */
  endPort?: number;
  /**
   * @remarks
   * The timeout period for idle connections. Unit: seconds.
   * 
   * *   If you set **ListenerProtocol** to **TCP** or **TCPSSL**, this parameter can be set to a value ranging from **10** to **900**. Default value: **900**.
   * *   If **ListenerProtocol** is set to **UDP**, this parameter can be set to a value ranging from **10** to **20**. Default value: **20**.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * tcp_80
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The listener port. Valid values: **0** to **65535**.
   * 
   * If you set this parameter to **0**, the listener listens by port range. If you set this parameter to **0**, you must also set the **StartPort** and **EndPort** parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The size of the largest TCP packet segment. Unit: bytes. Valid values: **0** to **1500**. **0** indicates that the maximum segment size (MSS) value of TCP packets remains unchanged.
   * 
   * >  This parameter takes effect only for TCP and TCPSSL listeners.
   * 
   * @example
   * 43
   */
  mss?: number;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass client IP addresses to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  proxyProtocolEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass the VpcId, PrivateLinkEpId, and PrivateLinkEpsId parameters to backend servers.
   */
  proxyProtocolV2Config?: CreateListenerRequestProxyProtocolV2Config;
  /**
   * @remarks
   * The ID of the region where the NLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable fine-grained monitoring. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  secSensorEnabled?: boolean;
  /**
   * @remarks
   * The ID of the security policy. System security policies and custom security policies are supported.
   * 
   * *   Valid values for system security policies: **tls_cipher_policy_1_0** (default), **tls_cipher_policy_1_1**, **tls_cipher_policy_1_2**, **tls_cipher_policy_1_2_strict**, and **tls_cipher_policy_1_2_strict_with_1_3**.
   * 
   * *   For a custom security policy, enter the policy ID.
   * 
   *     *   For information about creating a custom security policy, see [CreateSecurityPolicy](https://help.aliyun.com/document_detail/445901.html).
   *     *   For information about querying security policies, see [ListSecurityPolicy](https://help.aliyun.com/document_detail/445900.html).
   * 
   * >  This parameter takes effect only for TCPSSL listeners.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * >  *   If you set **ListenerProtocol** to **TCP**, you can associate the listener with server groups whose backend protocol is **TCP** or **TCP_UDP**. You cannot associate the listener with server groups whose backend protocol is **UDP**.
   * >  *   If you set **ListenerProtocol** to **UDP**, you can associate the listener with server groups whose backend protocol is **UDP** or **TCP_UDP**. You cannot associate the listener with server groups whose backend protocol is **TCP**.
   * >  *   If you set **ListenerProtocol** to **TCPSSL**, you can associate the listener with server groups whose backend protocol is **TCP** and have **client IP preservation disabled**. You cannot associate the listener with server groups whose backend protocol is **TCP** and have **client IP preservation enabled** or server groups whose backend protocol is **UDP** or **TCP_UDP**.
   * 
   * @example
   * sgp-ppdpc14gdm3x4o****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The first port in the listener port range. Valid values: **0** to **65535**.
   * 
   * >  This parameter is required when **ListenerPort** is set to **0**.
   * 
   * @example
   * 244
   */
  startPort?: number;
  /**
   * @remarks
   * The tags.
   * 
   * **if can be null:**
   * true
   */
  tag?: CreateListenerRequestTag[];
  static names(): { [key: string]: string } {
    return {
      alpnEnabled: 'AlpnEnabled',
      alpnPolicy: 'AlpnPolicy',
      caCertificateIds: 'CaCertificateIds',
      caEnabled: 'CaEnabled',
      certificateIds: 'CertificateIds',
      clientToken: 'ClientToken',
      cps: 'Cps',
      dryRun: 'DryRun',
      endPort: 'EndPort',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      mss: 'Mss',
      proxyProtocolEnabled: 'ProxyProtocolEnabled',
      proxyProtocolV2Config: 'ProxyProtocolV2Config',
      regionId: 'RegionId',
      secSensorEnabled: 'SecSensorEnabled',
      securityPolicyId: 'SecurityPolicyId',
      serverGroupId: 'ServerGroupId',
      startPort: 'StartPort',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpnEnabled: 'boolean',
      alpnPolicy: 'string',
      caCertificateIds: { 'type': 'array', 'itemType': 'string' },
      caEnabled: 'boolean',
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      cps: 'number',
      dryRun: 'boolean',
      endPort: 'number',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      mss: 'number',
      proxyProtocolEnabled: 'boolean',
      proxyProtocolV2Config: CreateListenerRequestProxyProtocolV2Config,
      regionId: 'string',
      secSensorEnabled: 'boolean',
      securityPolicyId: 'string',
      serverGroupId: 'string',
      startPort: 'number',
      tag: { 'type': 'array', 'itemType': CreateListenerRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.caCertificateIds)) {
      $dara.Model.validateArray(this.caCertificateIds);
    }
    if(Array.isArray(this.certificateIds)) {
      $dara.Model.validateArray(this.certificateIds);
    }
    if(this.proxyProtocolV2Config && typeof (this.proxyProtocolV2Config as any).validate === 'function') {
      (this.proxyProtocolV2Config as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

