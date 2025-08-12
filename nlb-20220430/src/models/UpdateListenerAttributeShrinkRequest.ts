// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateListenerAttributeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Application-Layer Protocol Negotiation (ALPN). Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  alpnEnabled?: boolean;
  /**
   * @remarks
   * The name of the ALPN policy. The following are the possible values:
   * 
   * *   **HTTP1Only**: Negotiate only HTTP/1.\\*. The ALPN preference list is HTTP/1.1, HTTP/1.0.
   * *   **HTTP2Only**: Negotiate only HTTP/2. The ALPN preference list is HTTP/2.
   * *   **HTTP2Optional**: Prefer HTTP/1.\\* over HTTP/2. The ALPN preference list is HTTP/1.1, HTTP/1.0, HTTP/2.
   * *   **HTTP2Preferred**: Prefer HTTP/2 over HTTP/1.\\*. The ALPN preference list is HTTP/2, HTTP/1.1, HTTP/1.0.
   * 
   * >  This parameter is required if AlpnEnabled is set to true.
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
   * The CA certificate. You can specify only one CA certificate.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   */
  caCertificateIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable mutual authentication. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The server certificate. Only one server certificate is supported.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
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
   * 10000
   */
  cps?: number;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
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
   * The timeout period for idle connections. Unit: seconds
   * 
   * *   If the listener uses **TCP** or **TCPSSL**, you can set this parameter to a value ranging from **10** to **900**. Default value: **900**
   * *   If the listener uses **UDP**, you can set this parameter to a value ranging from **10** to **20**. Default value: **20**
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
   * tcpssl_443
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The listener ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****@443
   */
  listenerId?: string;
  /**
   * @remarks
   * The size of the largest TCP packet segment. Unit: bytes. Valid values: **0** to **1500**. **0** indicates that the maximum segment size (MSS) remains unchanged. This parameter is supported only by TCP listeners and listeners that use SSL over TCP.
   * 
   * @example
   * 344
   */
  mss?: number;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass the client IP address to the backend server. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  proxyProtocolEnabled?: boolean;
  /**
   * @remarks
   * Specifies that the Proxy protocol passes the VpcId, PrivateLinkEpId, and PrivateLinkEpsId parameters to backend servers.
   */
  proxyProtocolV2ConfigShrink?: string;
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
   * *   **false**
   * 
   * @example
   * false
   */
  secSensorEnabled?: boolean;
  /**
   * @remarks
   * The ID of the security policy.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   * 
   * @example
   * tls_cipher_policy_1_1
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * > 
   * 
   * *   If the listener uses **TCP**, you can specify server groups whose protocol is **TCP** or **TCP_UDP**. **UDP** server groups are not supported.
   * 
   * *   If the listener uses **UDP**, you can specify server groups whose protocol is **UDP** or **TCP_UDP**. **TCP** server groups are not supported.
   * 
   * *   If the listener uses **TCPSSL**, you can specify server groups whose protocol is **TCP** and whose **client IP preservation is disabled**. **TCP** server groups for which **client IP preservation is enabled** and server groups whose protocol is **UDP** or **TCP_UDP** are not supported.
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

