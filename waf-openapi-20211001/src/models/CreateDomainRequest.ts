// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainRequestListen extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate. This parameter is available only if you specify **HttpsPorts** (indicating that the domain name uses HTTPS).
   * 
   * @example
   * 123
   * 
   * **if can be null:**
   * true
   */
  certId?: string;
  /**
   * @remarks
   * The type of the cipher suite. This parameter is available only if you specify **HttpsPorts** (indicating that the domain name uses HTTPS). Valid values:
   * 
   * - **1**: All cipher suites.
   * 
   * - **2**: Strong cipher suites. This value is available only if you set **TLSVersion** to **tlsv1.2**.
   * 
   * - **99**: Custom cipher suites.
   * 
   * @example
   * 2
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The custom cipher suites.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Indicates whether TLS 1.3 is supported. This parameter is available only if you specify **HttpsPorts** (indicating that the domain name uses HTTPS). Valid values:
   * 
   * - **true**: TLS 1.3 is supported.
   * 
   * - **false**: TLS 1.3 is not supported.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Indicates whether the exclusive IP address feature is enabled. This parameter is available only if you set **IPv6Enabled** to **false** (indicating that IPv6 is disabled) and **ProtectionResource** to **share** (indicating that a shared cluster is used). Valid values:
   * 
   * - **true**: The exclusive IP address feature is enabled.
   * 
   * - **false** (default): The exclusive IP address feature is disabled.
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Indicates whether force redirect from HTTP to HTTPS is enabled for received requests. This parameter is available only if you specify HttpsPorts and leave HttpPorts empty. Valid values:
   * 
   * - **true**: Force redirect from HTTP to HTTPS is enabled.
   * 
   * - **false**: Force redirect from HTTP to HTTPS is disabled.
   * 
   * @example
   * true
   */
  focusHttps?: boolean;
  /**
   * @remarks
   * Indicates whether HSTS includes subdomains. Valid values:
   * 
   * - **true**: HSTS includes subdomains.
   * 
   * - **false**: HSTS does not include subdomains.
   */
  hstsIncludeSubDomain?: boolean;
  /**
   * @remarks
   * The time-to-live (TTL) for HSTS. Unit: seconds.
   * 
   * @example
   * 365000
   */
  hstsMaxAge?: number;
  /**
   * @remarks
   * Indicates whether HSTS preloading is enabled. Valid values:
   * 
   * - **true**: HSTS preloading is enabled.
   * 
   * - **false**: HSTS preloading is disabled.
   * 
   * @example
   * false
   */
  hstsPreload?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled. This parameter is available only if you specify **HttpsPorts** (indicating that the domain name uses HTTPS). Valid values:
   * 
   * - **true**: HTTP/2 is enabled.
   * 
   * - **false** (default): HTTP/2 is disabled.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The listening ports for HTTP.
   */
  httpPorts?: number[];
  /**
   * @remarks
   * The listening ports for HTTPS.
   */
  httpsPorts?: number[];
  /**
   * @remarks
   * Indicates whether IPv6 is enabled. Valid values:
   * 
   * - **true**: IPv6 is enabled.
   * 
   * - **false** (default): IPv6 is disabled.
   * 
   * @example
   * true
   */
  IPv6Enabled?: boolean;
  /**
   * @remarks
   * The type of protection resource. Valid values:
   * 
   * - **share** (default): Shared cluster.
   * 
   * - **gslb**: Intelligent load balancing for a shared cluster.
   * 
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @remarks
   * Indicates whether access is restricted to SM certificate-based clients only. This parameter is available only if you set SM2Enabled to true. Valid values:
   * 
   * - **true**: Only SM certificate-based clients can access the domain.
   * 
   * - **false**: Both SM certificate-based and non-SM certificate-based clients can access the domain.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  SM2AccessOnly?: boolean;
  /**
   * @remarks
   * The ID of the SM certificate. This parameter is available only if you set SM2Enabled to true.
   * 
   * @example
   * 123-cn-hangzhou
   * 
   * **if can be null:**
   * true
   */
  SM2CertId?: string;
  /**
   * @remarks
   * Indicates whether SM certificate-based encryption is enabled.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  SM2Enabled?: boolean;
  /**
   * @remarks
   * The minimum Transport Layer Security (TLS) version. This parameter is available only if you specify **HttpsPorts** (indicating that the domain name uses HTTPS). Valid values:
   * 
   * - **tlsv1**
   * 
   * - **tlsv1.1**
   * 
   * - **tlsv1.2**
   * 
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The method that WAF uses to obtain the originating IP address of a client. Valid values:
   * 
   * - **0** (default): The client traffic does not pass through other Layer 7 proxies before it reaches WAF.
   * 
   * - **1**: WAF uses the first value in the X-Forwarded-For (XFF) header as the client IP address.
   * 
   * - **2**: WAF uses the value of a custom header field that you specify as the client IP address.
   * 
   * @example
   * 1
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The custom header fields that are used to obtain the originating IP address of a client.
   */
  xffHeaders?: string[];
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      exclusiveIp: 'ExclusiveIp',
      focusHttps: 'FocusHttps',
      hstsIncludeSubDomain: 'HstsIncludeSubDomain',
      hstsMaxAge: 'HstsMaxAge',
      hstsPreload: 'HstsPreload',
      http2Enabled: 'Http2Enabled',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      IPv6Enabled: 'IPv6Enabled',
      protectionResource: 'ProtectionResource',
      SM2AccessOnly: 'SM2AccessOnly',
      SM2CertId: 'SM2CertId',
      SM2Enabled: 'SM2Enabled',
      TLSVersion: 'TLSVersion',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      exclusiveIp: 'boolean',
      focusHttps: 'boolean',
      hstsIncludeSubDomain: 'boolean',
      hstsMaxAge: 'number',
      hstsPreload: 'boolean',
      http2Enabled: 'boolean',
      httpPorts: { 'type': 'array', 'itemType': 'number' },
      httpsPorts: { 'type': 'array', 'itemType': 'number' },
      IPv6Enabled: 'boolean',
      protectionResource: 'string',
      SM2AccessOnly: 'boolean',
      SM2CertId: 'string',
      SM2Enabled: 'boolean',
      TLSVersion: 'string',
      xffHeaderMode: 'number',
      xffHeaders: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customCiphers)) {
      $dara.Model.validateArray(this.customCiphers);
    }
    if(Array.isArray(this.httpPorts)) {
      $dara.Model.validateArray(this.httpPorts);
    }
    if(Array.isArray(this.httpsPorts)) {
      $dara.Model.validateArray(this.httpsPorts);
    }
    if(Array.isArray(this.xffHeaders)) {
      $dara.Model.validateArray(this.xffHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequestRedirectBackendPorts extends $dara.Model {
  /**
   * @remarks
   * The back-to-origin port.
   * 
   * @example
   * 80
   */
  backendPort?: number;
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 80
   */
  listenPort?: number;
  /**
   * @remarks
   * The protocol of the listener port. Valid values:
   * 
   * - **http**: HTTP.
   * 
   * - **https**: HTTPS.
   * 
   * @example
   * http
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      listenPort: 'ListenPort',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'number',
      listenPort: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequestRedirectRequestHeaders extends $dara.Model {
  /**
   * @remarks
   * The key of the custom header field.
   * 
   * @example
   * aaa
   */
  key?: string;
  /**
   * @remarks
   * The value of the custom header field.
   * 
   * @example
   * bbb
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

export class CreateDomainRequestRedirect extends $dara.Model {
  /**
   * @remarks
   * The custom port configuration.
   */
  backendPorts?: CreateDomainRequestRedirectBackendPorts[];
  /**
   * @remarks
   * The IP address or domain name of the origin server.
   */
  backends?: string[];
  /**
   * @remarks
   * The secondary IP address or domain name of the origin server.
   */
  backupBackends?: string[];
  /**
   * @remarks
   * Indicates whether the public cloud disaster recovery feature is enabled for the domain name. Valid values:
   * 
   * - **true**: The public cloud disaster recovery feature is enabled.
   * 
   * - **false** (default): The public cloud disaster recovery feature is disabled.
   * 
   * @example
   * true
   */
  cnameEnabled?: boolean;
  /**
   * @remarks
   * The timeout period for connections. Unit: seconds. Valid values: 1 to 3600. Default value: 5.
   * 
   * @example
   * 120
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Indicates whether force redirect from HTTPS to HTTP is enabled for back-to-origin requests. This parameter is available only if you specify **HttpsPorts** (indicating that the domain name uses HTTPS). Valid values:
   * 
   * - **true**: Force redirect from HTTPS to HTTP is enabled for back-to-origin requests.
   * 
   * - **false**: Force redirect from HTTPS to HTTP is disabled for back-to-origin requests.
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled for back-to-origin traffic. Valid values:
   * 
   * - **true**: HTTP/2 is enabled for back-to-origin traffic.
   * 
   * - **false**: HTTP/2 is disabled for back-to-origin traffic.
   * 
   * @example
   * true
   */
  http2Origin?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent HTTP/2 back-to-origin requests. Valid values: 1 to 512. Default value: 128.
   * 
   * @example
   * 128
   */
  http2OriginMaxConcurrency?: number;
  /**
   * @remarks
   * Indicates whether the persistent connection feature is enabled. Valid values:
   * 
   * - **true** (default): The persistent connection feature is enabled.
   * 
   * - **false**: The persistent connection feature is disabled.
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of reused persistent connections. Valid values: 60 to 1000. Default value: 1000.
   * 
   * > The number of reused persistent connections after the persistent connection feature is enabled.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period of idle persistent connections. Valid values: 1 to 60. Default value: 15. Unit: seconds.
   * 
   * > This parameter specifies the time for which a reused persistent connection can remain in the Idle state before the persistent connection is closed.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm that you want to use when WAF forwards requests to the origin server. Valid values:
   * 
   * - **iphash**: IP hash algorithm.
   * 
   * - **roundRobin**: Round-robin algorithm.
   * 
   * - **leastTime**: Least Time algorithm. This value is available only if you set **ProtectionResource** to **gslb** (indicating that intelligent load balancing for a shared cluster is used).
   * 
   * This parameter is required.
   * 
   * @example
   * roundRobin
   */
  loadbalance?: string;
  /**
   * @remarks
   * The maximum size of a request body. Valid values: 2 to 10. Default value: 2. Unit: GB.
   * 
   * > This parameter is supported only by the Ultimate edition.
   * 
   * @example
   * 2
   */
  maxBodySize?: number;
  /**
   * @remarks
   * Indicates whether the Proxy Protocol feature is enabled to preserve the client\\"s source IP address. Valid values:
   * 
   * - **true**: The Proxy Protocol feature is enabled. After this feature is enabled, backend services can view the original IP address of the client.
   * 
   * - **false**: The Proxy Protocol feature is disabled.
   * 
   * @example
   * false
   */
  proxyProtocol?: boolean;
  /**
   * @remarks
   * The timeout period for read operations. Unit: seconds. Valid values: 1 to 3600. Default value: 120.
   * 
   * @example
   * 200
   */
  readTimeout?: number;
  /**
   * @remarks
   * The key-value pairs that you want to use to label the requests that pass through the WAF instance.
   * 
   * When a request passes through WAF, WAF automatically adds the custom header fields to the request to mark the request. This way, the backend service can identify requests that are processed by WAF.
   */
  requestHeaders?: CreateDomainRequestRedirectRequestHeaders[];
  /**
   * @remarks
   * Indicates whether WAF retries when WAF fails to forward requests to the origin server. Valid values:
   * 
   * - **true** (default): WAF retries.
   * 
   * - **false**: WAF does not retry.
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * The forwarding rules for hybrid cloud mode. The value contains the following fields:
   * 
   * - **rs**: The IP addresses or canonical names of the origin servers.
   * 
   * - **backupRs**: The backup IP addresses or canonical names of the origin servers. Required. An empty array [] means no backup is configured.
   * 
   * - **location**: The name of the protection node.
   * 
   * - **locationId**: The ID of the protection node.
   * 
   * @example
   * [
   *     {
   *         "rs":
   *         [
   *             "1.1.XX.XX"
   *         ],
   *         "backupRs":
   *         [
   *             "2.2.XX.XX"
   *         ],
   *         "locationId": 535,
   *         "location": "test1111"
   *     }
   * ]
   */
  routingRules?: string;
  /**
   * @remarks
   * Indicates whether the Server Name Indication (SNI) feature is enabled for back-to-origin requests. This parameter is available only if you specify **HttpsPorts** (indicating that the domain name uses HTTPS). Valid values:
   * 
   * - **true**: The SNI feature is enabled for back-to-origin requests.
   * 
   * - **false** (default): The SNI feature is disabled for back-to-origin requests.
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The custom value of the SNI field. If you do not specify this parameter, the value of the **Host** header in the request is used as the value of the SNI field. This parameter is optional. If you want WAF to use an SNI field value that is different from the Host field value in back-to-origin requests, you can specify a custom value for the SNI field.
   * 
   * > This parameter is required only if you set **SniEnabled** to **true** (indicating that the SNI feature is enabled for back-to-origin requests).
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * Indicates whether WAF is allowed to overwrite the WL-Proxy-Client-IP header. Valid values:
   * 
   * - **true** (default): WAF overwrites the header.
   * 
   * - **false**: WAF does not overwrite the header.
   * 
   * @example
   * true
   */
  WLProxyClientIp?: boolean;
  /**
   * @remarks
   * Indicates whether WAF is allowed to overwrite the Web-Server-Type header. Valid values:
   * 
   * - **true** (default): WAF overwrites the header.
   * 
   * - **false**: WAF does not overwrite the header.
   * 
   * @example
   * true
   */
  webServerType?: boolean;
  /**
   * @remarks
   * The timeout period for write operations. Unit: seconds. Valid values: 1 to 3600. Default value: 120.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  /**
   * @remarks
   * Indicates whether WAF is allowed to overwrite the X-Client-IP header. Valid values:
   * 
   * - **true** (default): WAF overwrites the header.
   * 
   * - **false**: WAF does not overwrite the header.
   * 
   * @example
   * true
   */
  XClientIp?: boolean;
  /**
   * @remarks
   * Indicates whether WAF is allowed to overwrite the X-True-IP header. Valid values:
   * 
   * - **true** (default): WAF overwrites the header.
   * 
   * - **false**: WAF does not overwrite the header.
   * 
   * @example
   * true
   */
  XTrueIp?: boolean;
  /**
   * @remarks
   * Indicates whether the X-Forward-For-Proto header is used to identify the protocol used by WAF to forward requests to the origin server. Valid values:
   * 
   * - **true** (default): The X-Forward-For-Proto header is used to identify the protocol.
   * 
   * - **false**: The X-Forward-For-Proto header is not used.
   * 
   * @example
   * false
   */
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      backendPorts: 'BackendPorts',
      backends: 'Backends',
      backupBackends: 'BackupBackends',
      cnameEnabled: 'CnameEnabled',
      connectTimeout: 'ConnectTimeout',
      focusHttpBackend: 'FocusHttpBackend',
      http2Origin: 'Http2Origin',
      http2OriginMaxConcurrency: 'Http2OriginMaxConcurrency',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadbalance: 'Loadbalance',
      maxBodySize: 'MaxBodySize',
      proxyProtocol: 'ProxyProtocol',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      retry: 'Retry',
      routingRules: 'RoutingRules',
      sniEnabled: 'SniEnabled',
      sniHost: 'SniHost',
      WLProxyClientIp: 'WLProxyClientIp',
      webServerType: 'WebServerType',
      writeTimeout: 'WriteTimeout',
      XClientIp: 'XClientIp',
      XTrueIp: 'XTrueIp',
      xffProto: 'XffProto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPorts: { 'type': 'array', 'itemType': CreateDomainRequestRedirectBackendPorts },
      backends: { 'type': 'array', 'itemType': 'string' },
      backupBackends: { 'type': 'array', 'itemType': 'string' },
      cnameEnabled: 'boolean',
      connectTimeout: 'number',
      focusHttpBackend: 'boolean',
      http2Origin: 'boolean',
      http2OriginMaxConcurrency: 'number',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadbalance: 'string',
      maxBodySize: 'number',
      proxyProtocol: 'boolean',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': CreateDomainRequestRedirectRequestHeaders },
      retry: 'boolean',
      routingRules: 'string',
      sniEnabled: 'boolean',
      sniHost: 'string',
      WLProxyClientIp: 'boolean',
      webServerType: 'boolean',
      writeTimeout: 'number',
      XClientIp: 'boolean',
      XTrueIp: 'boolean',
      xffProto: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.backendPorts)) {
      $dara.Model.validateArray(this.backendPorts);
    }
    if(Array.isArray(this.backends)) {
      $dara.Model.validateArray(this.backends);
    }
    if(Array.isArray(this.backupBackends)) {
      $dara.Model.validateArray(this.backupBackends);
    }
    if(Array.isArray(this.requestHeaders)) {
      $dara.Model.validateArray(this.requestHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Tagkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TagValue1
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

export class CreateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The access type of the WAF instance. Valid values:
   * 
   * - **share** (default): onboarding by using a CNAME record.
   * 
   * - **hybrid_cloud_cname**: onboarding by using a hybrid cloud CNAME record.
   * 
   * @example
   * share
   */
  accessType?: string;
  /**
   * @remarks
   * The domain name that you want to add.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The listening configurations.
   * 
   * This parameter is required.
   */
  listen?: CreateDomainRequestListen;
  /**
   * @remarks
   * The forwarding configurations.
   * 
   * This parameter is required.
   */
  redirect?: CreateDomainRequestRedirect;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: The Chinese mainland.
   * 
   * - **ap-southeast-1**: Outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
   */
  tag?: CreateDomainRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      listen: 'Listen',
      redirect: 'Redirect',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      domain: 'string',
      instanceId: 'string',
      listen: CreateDomainRequestListen,
      redirect: CreateDomainRequestRedirect,
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDomainRequestTag },
    };
  }

  validate() {
    if(this.listen && typeof (this.listen as any).validate === 'function') {
      (this.listen as any).validate();
    }
    if(this.redirect && typeof (this.redirect as any).validate === 'function') {
      (this.redirect as any).validate();
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

