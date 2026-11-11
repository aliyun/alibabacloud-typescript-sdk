// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateListenerRequestProxyProtocolV2Config extends $dara.Model {
  /**
   * @remarks
   * Ppv2CnIdEnabled
   */
  ppv2CnIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy Protocol to pass the Ppv2PrivateLinkEpId to backend servers. Valid values:
   * 
   * - **true**: enables the feature.
   * 
   * - **false** (default): disables the feature.
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy Protocol to pass the PrivateLinkEpsId to backend servers. Valid values:
   * 
   * - **true**: enables the feature.
   * 
   * - **false** (default): disables the feature.
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpsIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy Protocol to pass the VpcId to backend servers. Valid values:
   * 
   * - **true**: enables the feature.
   * 
   * - **false** (default): disables the feature.
   * 
   * @example
   * false
   */
  ppv2VpcIdEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      ppv2CnIdEnabled: 'Ppv2CnIdEnabled',
      ppv2PrivateLinkEpIdEnabled: 'Ppv2PrivateLinkEpIdEnabled',
      ppv2PrivateLinkEpsIdEnabled: 'Ppv2PrivateLinkEpsIdEnabled',
      ppv2VpcIdEnabled: 'Ppv2VpcIdEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ppv2CnIdEnabled: 'boolean',
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
   * The tag key. The key can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`. Supported characters include letters, digits, underscores (_), periods (.), colons (:), forward slashes (/), equal signs (=), plus signs (+), hyphens (-), and at signs (@).
   * 
   * You can add up to 20 tags in a single call.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`. Supported characters include letters, digits, underscores (_), periods (.), colons (:), forward slashes (/), equal signs (=), plus signs (+), hyphens (-), and at signs (@).
   * 
   * You can add up to 20 tags in a single call.
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
   * Specifies whether to enable ALPN. Valid values:
   * 
   * - **true**: enables ALPN.
   * 
   * - **false** (default): disables ALPN.
   * 
   * @example
   * false
   */
  alpnEnabled?: boolean;
  /**
   * @remarks
   * The ALPN policy. Valid values:
   * 
   * - **HTTP1Only**: negotiates only HTTP/1.x. The priority is HTTP/1.1 > HTTP/1.0.
   * - **HTTP2Only**: negotiates only HTTP/2.
   * - **HTTP2Optional**: prefers HTTP/1.x but also accepts HTTP/2. The priority is HTTP/1.1 > HTTP/1.0 > HTTP/2.
   * - **HTTP2Preferred**: prefers HTTP/2 but also accepts HTTP/1.x. The priority is HTTP/2 > HTTP/1.1 > HTTP/1.0.
   * 
   * > You must configure this parameter after **AlpnEnabled** is enabled.
   * 
   * @example
   * HTTP1Only
   */
  alpnPolicy?: string;
  /**
   * @remarks
   * The CA certificate list. This parameter takes effect only for TCPSSL listeners.
   * 
   * > Currently, you can add only one CA certificate.
   */
  caCertificateIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable mutual authentication. Valid values:
   * 
   * - **true**: enables mutual authentication.
   * 
   * - **false** (default): disables mutual authentication.
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The server certificate list. This parameter takes effect only for TCPSSL listeners.
   * 
   * > Currently, you can add only one server certificate.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a parameter value on your client to ensure that the value is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The limit on the number of new connections processed per second by the listener in each zone (VIP). Valid values: **0** to **1000000**. **0** indicates that no limit is applied.
   * 
   * @example
   * 100
   */
  cps?: number;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: sends a precheck request without creating the listener. The system checks whether required parameters are specified, the request format, and service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the DryRunOperation error code is returned.
   * - **false** (default): sends a regular request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The end port for all-port listening. Valid values: **1** to **65535**.
   * The end port must be greater than the start port.
   * 
   * > You must configure this parameter when **ListenerPort** is set to **0**.
   * 
   * @example
   * 566
   */
  endPort?: number;
  /**
   * @remarks
   * The idle timeout period for connections. Unit: seconds.
   * 
   * - If **ListenerProtocol** is set to **TCP** or **TCPSSL**, the valid values are **10** to **900**. Default value: **900**.
   * 
   * - If **ListenerProtocol** is set to **UDP**, the valid values are **10** to **90**. Default value: **90**.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The custom listener name.
   * 
   * The name must be 2 to 256 characters in length, and can contain Chinese characters, English letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * tcp_80
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The listener port. Valid values: **0** to **65535**.
   * 
   * **0**: indicates that the all-port feature is used. If you set this parameter to **0**, you must configure **StartPort** and **EndPort**.
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
   * The Network Load Balancer (NLB) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The maximum segment size (MSS) of TCP packets. Unit: bytes. Valid values: **0** to **1500**.
   * **0**: indicates that the MSS value of user TCP packets is not modified.
   * 
   * > This parameter is supported only by TCP and TCPSSL listeners.
   * 
   * @example
   * 43
   */
  mss?: number;
  /**
   * @remarks
   * Specifies whether to use the Proxy Protocol to pass the client source IP address to backend servers. Valid values:
   * 
   * - **true**: enables the feature.
   * 
   * - **false** (default): disables the feature.
   * 
   * @example
   * false
   */
  proxyProtocolEnabled?: boolean;
  /**
   * @remarks
   * The configuration for passing the VpcId, PrivateLinkEpId, and PrivateLinkEpsId information to backend servers by using the Proxy Protocol.
   */
  proxyProtocolV2Config?: CreateListenerRequestProxyProtocolV2Config;
  /**
   * @remarks
   * The region ID of the Network Load Balancer (NLB) instance. 
   * 
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable second-level monitoring. Valid values:
   * 
   * - **true**: enables second-level monitoring.
   * 
   * - **false** (default): disables second-level monitoring.
   * 
   * @example
   * false
   */
  secSensorEnabled?: boolean;
  /**
   * @remarks
   * The ID of the security policy. System security policies and custom security policies are supported.
   * 
   * - System policies: **tls_cipher_policy_1_0** (default), **tls_cipher_policy_1_1**, **tls_cipher_policy_1_2**, **tls_cipher_policy_1_2_strict**, and **tls_cipher_policy_1_2_strict_with_1_3**.
   * - Custom security policies: Enter the ID of a custom security policy.
   *     - To create a custom policy, refer to [CreateSecurityPolicy](https://help.aliyun.com/document_detail/445901.html).
   *     - To query security policies, refer to [ListSecurityPolicy](https://help.aliyun.com/document_detail/445900.html).
   * 
   * > This parameter takes effect only for TCPSSL listeners.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The ID of the server group.
   * > - If **ListenerProtocol** is set to **TCP**, the listener supports server groups whose backend protocol is **TCP** or **TCP_UDP**, but does not support server groups whose backend protocol is **UDP**.
   * > - If **ListenerProtocol** is set to **UDP**, the listener supports server groups whose backend protocol is **UDP** or **TCP_UDP**, but does not support server groups whose backend protocol is **TCP**.
   * > - If **ListenerProtocol** is set to **TCPSSL**, the listener supports server groups whose backend protocol is **TCP** and for which **client address preservation is disabled**. It does not support server groups whose backend protocol is **TCP** and for which **client address preservation is enabled**, or server groups whose backend protocol is **UDP** or **TCP_UDP**.
   * 
   * @example
   * sgp-ppdpc14gdm3x4o****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The start port for all-port listening. Valid values: **1** to **65535**.
   * 
   * > You must configure this parameter when **ListenerPort** is set to **0**.
   * 
   * @example
   * 244
   */
  startPort?: number;
  /**
   * @remarks
   * The list of tags.
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

