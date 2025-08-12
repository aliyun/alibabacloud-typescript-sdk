// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersResponseBodyListenersProxyProtocolV2Config extends $dara.Model {
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

export class ListListenersResponseBodyListenersTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Created
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TF
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

export class ListListenersResponseBodyListeners extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Application-Layer Protocol Negotiation (ALPN) is enabled. Valid values:
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
   * A list of CA certificates.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   */
  caCertificateIds?: string[];
  /**
   * @remarks
   * Indicates whether mutual authentication is enabled. Valid values:
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
   * The server certificate.
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
   * The last port in the listener port range.
   * 
   * @example
   * 455
   */
  endPort?: string;
  /**
   * @remarks
   * The timeout period of idle connections. Unit: seconds. Valid values: **1** to **900**. Default value: **900**.
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
   * @example
   * lsn-ga6sjjcll6ou34l1et****
   */
  listenerId?: string;
  /**
   * @remarks
   * The information about the listener port of your server.
   * 
   * @example
   * 443
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
   * The CLB instance ID.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The size of the largest TCP packet segment. Unit: bytes. Valid values: **0** to **1500**. **0** indicates that the Mss value of TCP packets remains unchanged.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   * 
   * @example
   * 200
   */
  mss?: number;
  /**
   * @remarks
   * Indicates whether the Proxy protocol passes source client IP addresses to backend servers. Valid values:
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
   * Indicates whether the Proxy protocol passes the VpcId, PrivateLinkEpId, and PrivateLinkEpsId parameters to backend servers.
   */
  proxyProtocolV2Config?: ListListenersResponseBodyListenersProxyProtocolV2Config;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether fine-grained monitoring is enabled. Valid values:
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
   * @example
   * sgp-ppdpc14gdm3x4o****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The first port in the listener port range.
   * 
   * @example
   * 233
   */
  startPort?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: ListListenersResponseBodyListenersTags[];
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
      proxyProtocolV2Config: ListListenersResponseBodyListenersProxyProtocolV2Config,
      regionId: 'string',
      secSensorEnabled: 'boolean',
      securityPolicyId: 'string',
      serverGroupId: 'string',
      startPort: 'string',
      tags: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersTags },
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

export class ListListenersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The listeners.
   */
  listeners?: ListListenersResponseBodyListeners[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If **NextToken** is empty, it indicates that no next query is to be sent.
   * *   If a value of **NextToken** is returned, the value is the token used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
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
   * The number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': ListListenersResponseBodyListeners },
      maxResults: 'number',
      nextToken: 'string',
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

