// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerAttributeResponseBodyProxyProtocolV2Config extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Proxy protocol passes the PrivateLinkEpId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpIdEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the Proxy protocol passes the PrivateLinkEpsId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpsIdEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the Proxy protocol passes the VpcId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * Indicates whether Application-Layer Protocol Negotiation (ALPN) is enabled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  alpnEnabled?: boolean;
  /**
   * @remarks
   * The ALPN policy. Valid values:
   * 
   * *   **HTTP1Only**
   * *   **HTTP2Only**
   * *   **HTTP2Preferred**
   * *   **HTTP2Optional**
   * 
   * @example
   * HTTP1Only
   */
  alpnPolicy?: string;
  /**
   * @remarks
   * The CA certificates. Only one CA certificate is supported.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   */
  caCertificateIds?: string[];
  /**
   * @remarks
   * Indicates whether mutual authentication is enabled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The server certificates. Only one server certificate is supported.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The maximum number of new connections per second supported by the listener in each zone (virtual IP address). Valid values: **0** to **1000000**. **0** indicates that the number of connections is unlimited.
   * 
   * @example
   * 1000
   */
  cps?: number;
  /**
   * @remarks
   * The last port in the listening port range. Valid values: **0** to **65535**. The number of the last port must be smaller than that of the first port.
   * 
   * @example
   * 455
   */
  endPort?: string;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds. Valid values: **1** to **900**.
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
   * The ID of the listener.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****@233
   */
  listenerId?: string;
  /**
   * @remarks
   * The listening port. Valid values: **0** to **65535**. A value of **0** specifies all ports. If you set the value to **0**, you must also set the **StartPort** and **EndPort** parameters.
   * 
   * @example
   * 233
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listening protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.
   * 
   * @example
   * TCPSSL
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **Provisioning**: The listener is being created.
   * *   **Running**: The listener is running.
   * *   **Configuring**: The listener is being configured.
   * *   **Stopping**: The listener is being stopped.
   * *   **Stopped**: The listener is stopped.
   * *   **Starting**: The listener is being started.
   * *   **Deleting**: The listener is being deleted.
   * *   **Deleted**: The listener is deleted.
   * 
   * @example
   * Running
   */
  listenerStatus?: string;
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The size of the largest TCP segment. Unit: bytes. Valid values: **0** to **1500**. **0** specifies that the maximum segment size remains unchanged.
   * 
   * >  This parameter is supported only by listeners that use SSL over TCP.
   * 
   * @example
   * 166
   */
  mss?: number;
  /**
   * @remarks
   * Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  proxyProtocolEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the Proxy protocol passes the VpcId, PrivateLinkEpId, and PrivateLinkEpsId parameters to backend servers.
   */
  proxyProtocolV2Config?: GetListenerAttributeResponseBodyProxyProtocolV2Config;
  /**
   * @remarks
   * The ID of the region where the NLB instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether fine-grained monitoring is enabled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  secSensorEnabled?: boolean;
  /**
   * @remarks
   * The ID of the security policy. System security policies and custom security policies are supported.
   * 
   * - Valid values: **tls_cipher_policy_1_0**, **tls_cipher_policy_1_1**, **tls_cipher_policy_1_2**, **tls_cipher_policy_1_2_strict**, and **tls_cipher_policy_1_2_strict_with_1_3**.
   * 
   * - Custom security policy: the ID of the custom security policy.
   *     - For more information about how to create a custom security policy, see [CreateSecurityPolicy](https://help.aliyun.com/document_detail/2399231.html) .
   * 
   *     - For more information about how to query security policies, see [ListSecurityPolicy](https://help.aliyun.com/document_detail/2399234.html) .
   * 
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-ppdpc14gdm3x4o****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The first port in the listening port range. Valid values: **0** to **65535**.
   * 
   * @example
   * 233
   */
  startPort?: string;
  /**
   * @remarks
   * The tags.
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

