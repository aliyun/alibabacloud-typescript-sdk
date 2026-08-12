// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainRequestListen extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate to add. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS.
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
   * The type of cipher suite to add. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses the HTTPS protocol. Valid values:
   * 
   * - **1**: adds all cipher suites.
   * 
   * - **2**: adds strong cipher suites. This value is available only when **TLSVersion** is set to **tlsv1.2**.
   * 
   * - **99**: adds custom cipher suites. This value is available only when **TLSVersion** is not set to **tlsv1.3**.
   * 
   * @example
   * 2
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The specific custom cipher suites to add.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Specifies whether to support TLS 1.3. Valid values:
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
   * Specifies whether to enable an exclusive IP address. This parameter is used only when **IPv6Enabled** is set to **false** (which indicates that IPv6 is disabled) and **ProtectionResource** is set to **share** (which indicates that a shared cluster is used). Valid values:
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Specifies whether to enable forced HTTPS redirect. This parameter is used only when HttpsPorts is not empty (which indicates that the domain name uses HTTPS) and HttpPorts is empty (which indicates that the domain name does not use HTTP). Valid values:
   * 
   * @example
   * true
   */
  focusHttps?: boolean;
  /**
   * @remarks
   * Specifies whether HSTS includes subdomains. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Not enabled.
   */
  hstsIncludeSubDomain?: boolean;
  /**
   * @remarks
   * The HSTS expiration time. Unit: seconds.
   * 
   * @example
   * 365000
   */
  hstsMaxAge?: number;
  /**
   * @remarks
   * Specifies whether to enable HSTS preloading. This feature is disabled by default. Valid values:
   * 
   * @example
   * false
   */
  hstsPreload?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP/2. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS. Valid values:
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
   * Specifies whether to enable IPv6. Valid values:
   * 
   * @example
   * true
   */
  IPv6Enabled?: boolean;
  /**
   * @remarks
   * The type of protection resource to use. Valid values:
   * 
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @remarks
   * Specifies whether only China SM client access is allowed. This parameter is used only when SM2Enabled is set to true.
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
   * The ID of the China SM certificate to add. This parameter is used only when SM2Enabled is set to true.
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
   * Specifies whether to enable China Encryption (China SM) certificates.
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
   * The TLS version to add. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS. Valid values:
   * 
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The method that WAF uses to obtain the originating IP address of the client. Valid values:
   * 
   * @example
   * 1
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The list of custom header fields used to obtain the client IP address.
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
   * The origin server port.
   * 
   * @example
   * 80
   */
  backendPort?: number;
  /**
   * @remarks
   * The listening port.
   * 
   * @example
   * 80
   */
  listenPort?: number;
  /**
   * @remarks
   * The protocol of the listener port. Valid values:
   * 
   * - **http**: The protocol of the listener port is HTTP.
   * 
   * - **https**: The protocol of the listener port is HTTPS.
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
   * The specified custom request header field.
   * 
   * @example
   * aaa
   */
  key?: string;
  /**
   * @remarks
   * The value set for the custom request header field.
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
   * The IP addresses or back-to-origin domain names of the origin server for the domain name.
   */
  backends?: string[];
  /**
   * @remarks
   * The IP addresses or back-to-origin domain names of the secondary origin server for the domain name.
   */
  backupBackends?: string[];
  /**
   * @remarks
   * Specifies whether to enable public cloud disaster recovery. Valid values:
   * 
   * @example
   * true
   */
  cnameEnabled?: boolean;
  /**
   * @remarks
   * The connection timeout period. Unit: seconds.
   * 
   * @example
   * 120
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable forced HTTP back-to-origin. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses the HTTPS protocol. Valid values:
   * 
   * - **true**: Forced HTTP back-to-origin is enabled.
   * 
   * - **false**: Forced HTTP back-to-origin is not enabled.
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @remarks
   * Specifies whether to enable origin fetch over HTTP/2. Valid values:
   * 
   * - **true**: Enables origin fetch over HTTP/2.
   * 
   * - **false**: Disables origin fetch over HTTP/2.
   * 
   * @example
   * true
   */
  http2Origin?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent HTTP/2 back-to-origin connections. Valid values: 1 to 512. Default value: 128.
   * 
   * @example
   * 128
   */
  http2OriginMaxConcurrency?: number;
  /**
   * @remarks
   * Specifies whether to enable persistent connections. Valid values:
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of requests that can reuse a persistent connection. Valid values: 60 to 1000. Default value: 1000.
   * 
   * > After persistent connections are enabled, this parameter specifies how many requests can reuse a persistent connection.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for idle persistent connections. Valid values: 1 to 60. Default value: 15. Unit: seconds.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm used for back-to-origin requests. Valid values:
   * 
   * - **iphash**: IP hash algorithm.
   * 
   * - **roundRobin**: round-robin algorithm.
   * 
   * - **leastTime**: Least Time algorithm. This value is available only when **ProtectionResource** is set to **gslb**, which indicates that the protection resource type uses intelligent load balancing of the shared cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * roundRobin
   */
  loadbalance?: string;
  /**
   * @remarks
   * The maximum request body size. Valid values: 2 to 10. Default value: 2. Unit: GB.
   * 
   * @example
   * 2
   */
  maxBodySize?: number;
  /**
   * @remarks
   * Indicates whether the client source IP preservation feature is enabled.
   * - **true**: The client source IP preservation feature is enabled. After this feature is enabled, backend services can view the originating IP address of the client.
   * - **false**: The client source IP preservation feature is not enabled.
   * 
   * @example
   * false
   */
  proxyProtocol?: boolean;
  /**
   * @remarks
   * The read timeout period. Unit: seconds.
   * 
   * @example
   * 200
   */
  readTimeout?: number;
  /**
   * @remarks
   * The traffic tag fields and values for the domain name, used to mark traffic processed by WAF.
   */
  requestHeaders?: CreateDomainRequestRedirectRequestHeaders[];
  /**
   * @remarks
   * Specifies whether to retry when WAF fails to forward requests to the origin server. Valid values:
   * 
   * - **true** (default): Retry.
   * 
   * - **false**: Do not retry.
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * The hybrid cloud forwarding rules. The value is a string converted from a JSON array. Each element in the JSON array is a struct that contains the following fields:
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
   * Specifies whether to enable back-to-origin SNI. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS. Valid values:
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The value of the custom SNI extension field. If you do not set this parameter, the value of the **Host** field in the request header is used as the value of the SNI extension field by default.
   * 
   * In most cases, you do not need to customize the SNI unless your business has special configuration requirements and you want WAF to use an SNI that is different from the actual request Host in back-to-origin requests (that is, the custom SNI set here).
   * 
   * > This parameter is required only when **SniEnabled** is set to **true** (indicating that back-to-origin SNI is enabled).
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * Specifies whether WAF is allowed to overwrite the WL-Proxy-Client-IP header. Valid values:
   * 
   * - **true** (default): WAF is allowed to overwrite the header.
   * 
   * - **false**: WAF is not allowed to overwrite the header.
   * 
   * @example
   * true
   */
  WLProxyClientIp?: boolean;
  /**
   * @remarks
   * Specifies whether to allow WAF to overwrite Web-Server-Type. Valid values:
   * 
   * @example
   * true
   */
  webServerType?: boolean;
  /**
   * @remarks
   * The write timeout period. Unit: seconds.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  /**
   * @remarks
   * Specifies whether to allow WAF to overwrite X-Client-IP. Valid values:
   * 
   * @example
   * true
   */
  XClientIp?: boolean;
  /**
   * @remarks
   * Specifies whether to allow WAF to overwrite X-True-IP. Valid values:
   * 
   * @example
   * true
   */
  XTrueIp?: boolean;
  /**
   * @remarks
   * Specifies whether to use X-Forward-For-Proto to pass the protocol used by WAF. Valid values:
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
   * - **share** (default): CNAME access.
   * 
   * - **hybrid_cloud_cname**: hybrid cloud CNAME access.
   * 
   * > If the value is **share**, or the value is **hybrid_cloud_cname** and public cloud disaster recovery is enabled, call the [DescribeVerifyContent](https://help.aliyun.com/document_detail/2985193.html) and [VerifyDomainOwner](https://help.aliyun.com/document_detail/2985192.html) operations to verify domain name ownership first. If the domain name is connected to a region in the Chinese mainland, ICP filing must be completed.
   * 
   * @example
   * share
   */
  accessType?: string;
  /**
   * @remarks
   * The domain name to query.
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
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The listener configuration.
   * 
   * This parameter is required.
   */
  listen?: CreateDomainRequestListen;
  /**
   * @remarks
   * The forwarding configuration.
   * 
   * This parameter is required.
   */
  redirect?: CreateDomainRequestRedirect;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The list of tags. You can specify up to 20 tags.
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

