// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateListenerAttributeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Application-Layer Protocol Negotiation (ALPN). Valid values:
   * 
   * - **true**: enables ALPN.
   * 
   * - **false**: disables ALPN.
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
   * > You must configure this parameter after ALPN is enabled.
   * 
   * @example
   * HTTP1Only
   * 
   * **if can be null:**
   * true
   */
  alpnPolicy?: string;
  /**
   * @remarks
   * The CA certificates. You can add only one CA certificate.
   * 
   * > This parameter takes effect only for TCPSSL listeners.
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
   * The server certificates. You can add only one server certificate.
   * 
   * > This parameter takes effect only for TCPSSL listeners.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of new connections per second that the listener can process in each zone (VIP). Valid values: **0** to **1000000**. A value of **0** indicates that no limit is applied.
   * 
   * @example
   * 10000
   */
  cps?: number;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: prechecks the request without updating the listener. The system checks whether required parameters are specified, the request format is valid, and the service limits are met. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The idle connection timeout period. Unit: seconds.
   * 
   * - If the listener is a **TCP** or **TCPSSL** listener, valid values are **10** to **900**. Default value: **900**.
   * 
   * - If the listener is a **UDP** listener, valid values are **10** to **90**. Default value: **90**.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The custom name of the listener.
   * 
   * The name must be 2 to 256 characters in length, and can contain Chinese characters, English letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * tcpssl_443
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The listener instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****@443
   */
  listenerId?: string;
  /**
   * @remarks
   * The maximum segment size (MSS) of a TCP packet. Unit: bytes. Valid values: **0** to **1500**. A value of **0** indicates that the MSS value of user TCP packets is not modified. This parameter is supported only by TCP and TCPSSL listeners.
   * 
   * @example
   * 344
   */
  mss?: number;
  /**
   * @remarks
   * Specifies whether to use the Proxy Protocol to pass the client source IP address to backend servers. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
   * 
   * @example
   * false
   */
  proxyProtocolEnabled?: boolean;
  /**
   * @remarks
   * The configuration for passing the VpcId, PrivateLinkEpId, and PrivateLinkEpsId information to backend servers by using the Proxy Protocol.
   */
  proxyProtocolV2ConfigShrink?: string;
  /**
   * @remarks
   * The ID of the region where the Network Load Balancer (NLB) instance is deployed. 
   * 
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to retrieve the region ID.
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
   * - **false**: disables second-level monitoring.
   * 
   * @example
   * false
   */
  secSensorEnabled?: boolean;
  /**
   * @remarks
   * The ID of the security policy.
   * 
   * > This parameter takes effect only for TCPSSL listeners.
   * 
   * @example
   * tls_cipher_policy_1_1
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * > - If the listener is a **TCP** listener, you can select a server group whose backend protocol is **TCP** or **TCP_UDP**. You cannot select a server group whose backend protocol is **UDP**.
   * > - If the listener is a **UDP** listener, you can select a server group whose backend protocol is **UDP** or **TCP_UDP**. You cannot select a server group whose backend protocol is **TCP**.
   * > - If the listener is a **TCPSSL** listener, you can select a server group whose backend protocol is **TCP** and for which **client address preservation is disabled**. You cannot select a server group whose backend protocol is **TCP** and for which **client address preservation is enabled**, or a server group whose backend protocol is **UDP** or **TCP_UDP**.
   * 
   * @example
   * sgp-ppdpc14gdm3x4o****
   */
  serverGroupId?: string;
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
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      mss: 'Mss',
      proxyProtocolEnabled: 'ProxyProtocolEnabled',
      proxyProtocolV2ConfigShrink: 'ProxyProtocolV2Config',
      regionId: 'RegionId',
      secSensorEnabled: 'SecSensorEnabled',
      securityPolicyId: 'SecurityPolicyId',
      serverGroupId: 'ServerGroupId',
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
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      mss: 'number',
      proxyProtocolEnabled: 'boolean',
      proxyProtocolV2ConfigShrink: 'string',
      regionId: 'string',
      secSensorEnabled: 'boolean',
      securityPolicyId: 'string',
      serverGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.caCertificateIds)) {
      $dara.Model.validateArray(this.caCertificateIds);
    }
    if(Array.isArray(this.certificateIds)) {
      $dara.Model.validateArray(this.certificateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

