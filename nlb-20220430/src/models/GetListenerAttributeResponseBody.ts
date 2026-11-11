// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerAttributeResponseBodyProxyProtocolV2Config extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use the Proxy Protocol to pass the CN-ID to backend servers. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  ppv2CnIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy Protocol to pass the PrivateLinkEpId to backend servers. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy Protocol to pass the PrivateLinkEpsId to backend servers. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpsIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy Protocol to pass the VpcId to backend servers. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
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

export class GetListenerAttributeResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * ac-cus-tag-4
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * ON
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether Application-Layer Protocol Negotiation (ALPN) is enabled. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  alpnEnabled?: boolean;
  /**
   * @remarks
   * The ALPN policy. Valid values:
   * 
   * - **HTTP1Only**
   * - **HTTP2Only**
   * - **HTTP2Preferred**
   * - **HTTP2Optional**
   * 
   * @example
   * HTTP1Only
   */
  alpnPolicy?: string;
  /**
   * @remarks
   * The CA certificate list. Currently, you can add only one CA certificate.
   * > This parameter takes effect only for TCPSSL listeners.
   */
  caCertificateIds?: string[];
  /**
   * @remarks
   * Specifies whether mutual authentication is enabled. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The server certificate list. Currently, you can add only one server certificate.
   * 
   * > This parameter takes effect only for TCPSSL listeners.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The maximum number of new connections per second that the listener can process in each zone (VIP). Valid values: **0** to **1000000**. **0** indicates that no limit is applied.
   * 
   * @example
   * 1000
   */
  cps?: number;
  /**
   * @remarks
   * The end port of the all-port listener. Valid values: **0** to **65535**. The end port must be less than the start port.
   * 
   * @example
   * 455
   */
  endPort?: string;
  /**
   * @remarks
   * The idle timeout period for connections. Unit: seconds.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The custom listener name.
   * 
   * The name must be 2 to 256 characters in length, and can contain Chinese characters and English letters. It can also contain digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * tcpssl_443
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****@233
   */
  listenerId?: string;
  /**
   * @remarks
   * The listener port. Valid values: **0** to **65535**. **0** indicates that all-port listening is used. If you set this parameter to **0**, you must configure **StartPort** and **EndPort**.
   * 
   * @example
   * 233
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.
   * 
   * @example
   * TCPSSL
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The current status of the listener. Valid values:
   * 
   * - **Provisioning**: The listener is being created.
   * 
   * - **Running**: The listener is running.
   * 
   * - **Configuring**: The listener is being configured.
   * 
   * - **Stopping**: The listener is being stopped.
   * 
   * - **Stopped**: The listener is stopped.
   * 
   * - **Starting**: The listener is being started.
   * 
   * - **Deleting**: The listener is being deleted.
   * 
   * - **Deleted**: The listener is deleted.
   * 
   * @example
   * Running
   */
  listenerStatus?: string;
  /**
   * @remarks
   * The Network Load Balancer (NLB) instance ID.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The maximum segment size (MSS) of a TCP packet. Unit: bytes. Valid values: **0** to **1500**. **0** indicates that the MSS value of user TCP packets is not modified.
   * 
   * > This field is supported only by TCP and TCPSSL listeners.
   * 
   * @example
   * 166
   */
  mss?: number;
  /**
   * @remarks
   * Specifies whether to use the Proxy Protocol to pass the client source IP address to backend servers. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  proxyProtocolEnabled?: boolean;
  /**
   * @remarks
   * The configuration for passing the VpcId, PrivateLinkEpId, and PrivateLinkEpsId information to backend servers by using the Proxy Protocol.
   */
  proxyProtocolV2Config?: GetListenerAttributeResponseBodyProxyProtocolV2Config;
  /**
   * @remarks
   * The region ID of the Network Load Balancer (NLB) instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * Specifies whether to enable the second-level monitoring feature. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  secSensorEnabled?: boolean;
  /**
   * @remarks
   * The security policy ID. System security policies and custom security policies are supported.
   * 
   * - System policies: **tls_cipher_policy_1_0** (default), **tls_cipher_policy_1_1**, **tls_cipher_policy_1_2**, **tls_cipher_policy_1_2_strict**, and **tls_cipher_policy_1_2_strict_with_1_3**.
   * - Custom security policies: Enter the ID of the custom security policy.
   *     - To create a custom policy, see [CreateSecurityPolicy](https://help.aliyun.com/document_detail/445901.html).
   *     - To query security policies, see [ListSecurityPolicy](https://help.aliyun.com/document_detail/445900.html).
   * 
   * > This parameter takes effect only for TCPSSL listeners.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-ppdpc14gdm3x4o****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The start port of the all-port listener. Valid values: **0** to **65535**.
   * 
   * @example
   * 233
   */
  startPort?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: GetListenerAttributeResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      alpnEnabled: 'AlpnEnabled',
      alpnPolicy: 'AlpnPolicy',
      caCertificateIds: 'CaCertificateIds',
      caEnabled: 'CaEnabled',
      certificateIds: 'CertificateIds',
      cps: 'Cps',
      endPort: 'EndPort',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      mss: 'Mss',
      proxyProtocolEnabled: 'ProxyProtocolEnabled',
      proxyProtocolV2Config: 'ProxyProtocolV2Config',
      regionId: 'RegionId',
      requestId: 'RequestId',
      secSensorEnabled: 'SecSensorEnabled',
      securityPolicyId: 'SecurityPolicyId',
      serverGroupId: 'ServerGroupId',
      startPort: 'StartPort',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpnEnabled: 'boolean',
      alpnPolicy: 'string',
      caCertificateIds: { 'type': 'array', 'itemType': 'string' },
      caEnabled: 'boolean',
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      cps: 'number',
      endPort: 'string',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      mss: 'number',
      proxyProtocolEnabled: 'boolean',
      proxyProtocolV2Config: GetListenerAttributeResponseBodyProxyProtocolV2Config,
      regionId: 'string',
      requestId: 'string',
      secSensorEnabled: 'boolean',
      securityPolicyId: 'string',
      serverGroupId: 'string',
      startPort: 'string',
      tags: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyTags },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

