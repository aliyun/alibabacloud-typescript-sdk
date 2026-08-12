// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDomainRequestListen extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate to add.
   * 
   * @example
   * 123
   */
  certId?: string;
  /**
   * @remarks
   * The type of cipher suite to add. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS. Valid values:
   * 
   * @example
   * 2
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The specific custom cipher suites to add. This parameter is used only when **CipherSuite** is set to **99**.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Specifies whether to support TLS 1.3. Valid values:
   * 
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the exclusive IP address feature. This parameter is available only when **IPv6Enabled** is set to false and **ProtectionResource** is set to **share**. Valid values:
   * 
   * - **true**: Enables the exclusive IP address feature.
   * 
   * - **false** (default): Does not enable the exclusive IP address feature.
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Specifies whether to enable forced HTTPS redirect. This parameter takes effect only when **HttpsPorts** is not empty (indicating that the domain name uses the HTTPS protocol) and **HttpPorts** is empty (indicating that the domain name does not use the HTTP protocol). Valid values:
   * 
   * - **true**: Enables forced HTTPS redirect.
   * 
   * - **false**: Does not enable forced HTTPS redirect.
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
   * 
   * @example
   * false
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
   * The listening ports for HTTP. Use the [**port1,port2,...**] format.
   */
  httpPorts?: number[];
  /**
   * @remarks
   * The listening ports for HTTPS. Use the [**port1,port2,...**] format.
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
   * Specifies whether to allow only client access. This parameter is used only when SM2Enable is set to true.
   * 
   * @example
   * true
   */
  SM2AccessOnly?: boolean;
  /**
   * @remarks
   * The ID of the China SM certificate to add. This parameter is used only when SM2Enable is set to true.
   * 
   * @example
   * 123-cn-hangzhou
   */
  SM2CertId?: string;
  /**
   * @remarks
   * Specifies whether to enable the China Encryption (China SM) certificate.
   * 
   * @example
   * true
   */
  SM2Enabled?: boolean;
  /**
   * @remarks
   * The TLS version to add. This parameter is used only when **HttpsPorts** is not empty (indicating that the domain name uses the HTTPS protocol). Valid values:
   * - **tlsv1**: Supports TLS 1.0 and later. Provides the highest compatibility and the lowest security.
   * - **tlsv1.1**: Supports TLS 1.1 and later. Provides good compatibility and good security.
   * - **tlsv1.2**: Supports TLS 1.2 and later. Provides good compatibility and the highest security.
   * - **tlsv1.3**: Supports only TLS 1.3. Provides the highest security and the lowest compatibility.
   * 
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The method that WAF uses to obtain the originating IP address of the client.
   * 
   * @example
   * 2
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The list of custom header fields used to obtain the client IP address. Use the [**"header1","header2",...**] format.
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

export class ModifyDomainRequestRedirectBackendPorts extends $dara.Model {
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

export class ModifyDomainRequestRedirectRequestHeaders extends $dara.Model {
  /**
   * @remarks
   * The custom request header field.
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

export class ModifyDomainRequestRedirect extends $dara.Model {
  /**
   * @remarks
   * The custom port configuration.
   */
  backendPorts?: ModifyDomainRequestRedirectBackendPorts[];
  /**
   * @remarks
   * The IP addresses or domain names of the origin servers that correspond to the domain name. You can set only one type: origin server IP addresses or origin server domain names. When the back-to-origin address is a domain name, only IPv4 is supported. IPv6 is not supported.
   */
  backends?: string[];
  /**
   * @remarks
   * The IP addresses or domain names of the secondary origin servers that correspond to the domain name.
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
   * Specifies whether to enable forced HTTP back-to-origin. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS. Valid values:
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
   * - **false**: Does not enable origin fetch over HTTP/2.
   * 
   * @example
   * true
   */
  http2Origin?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent connections for HTTP/2 back-to-origin. Valid values: 1 to 512. Default value: 2.
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
   * The number of requests that reuse a persistent connection. Valid values: 60 to 1000. Default value: 1000.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The idle persistent connection timeout period. Valid values: 1 to 60. Default value: 15. Unit: seconds.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm used for back-to-origin requests. Valid values:
   * 
   * - **iphash**: IP Hash algorithm.
   * 
   * - **roundRobin**: Round-robin algorithm.
   * 
   * - **leastTime**: Least Time algorithm. This value is available only when **ProtectionResource** is set to **gslb**, which indicates that the protection resource type uses intelligent load balancing of the shared cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * iphash
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
   * 
   * - **true**: The client source IP preservation feature is enabled. After this feature is enabled, backend services can view the originating IP address of the client.
   * 
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
   * The traffic tag fields and values of the domain name, used to tag traffic processed by WAF.
   */
  requestHeaders?: ModifyDomainRequestRedirectRequestHeaders[];
  /**
   * @remarks
   * Specifies whether to retry when WAF fails to forward requests to the origin server. Valid values:
   * 
   * - **true** (default): Retry.
   * - **false**: Do not retry.
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * The hybrid cloud forwarding rules. The value is a string that represents a JSON array. Each element in the JSON array is a struct that contains the following fields:
   * - **rs**: Array type | The list of back-to-origin IP addresses or back-to-origin CNAMEs.
   * 
   * - **backupRs**: Array type | The list of backup back-to-origin IP addresses or back-to-origin CNAMEs. This field is required. [] indicates that no backup is configured.
   * 
   * - **location**: String type | The name of the protection node.
   * 
   * - **locationId**: Long type | The ID of the protection node.
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
   * > This parameter is required only when **SniEnalbed** is set to xxx (custom back-to-origin SNI).
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * Specifies whether to allow WAF to overwrite WL-Proxy-Client-IP. Valid values:
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  WLProxyClientIp?: boolean;
  /**
   * @remarks
   * Specifies whether to allow WAF to overwrite Web-Server-Type. Valid values:
   * 
   * @example
   * true
   * 
   * **if can be null:**
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
   * 
   * **if can be null:**
   * true
   */
  XClientIp?: boolean;
  /**
   * @remarks
   * Specifies whether WAF is allowed to overwrite X-True-IP. Valid values:
   * 
   * - **true** (default): WAF is allowed to overwrite.
   * 
   * - **false**: WAF is not allowed to overwrite.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  XTrueIp?: boolean;
  /**
   * @remarks
   * Specifies whether X-Forward-For-Proto passes the WAF protocol. Valid values:
   * 
   * @example
   * true
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
      backendPorts: { 'type': 'array', 'itemType': ModifyDomainRequestRedirectBackendPorts },
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
      requestHeaders: { 'type': 'array', 'itemType': ModifyDomainRequestRedirectRequestHeaders },
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

export class ModifyDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The access type of the WAF instance. Valid values:
   * 
   * @example
   * share
   */
  accessType?: string;
  /**
   * @remarks
   * The domain name to operate on.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * www.aliyundoc.com-waf
   */
  domainId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
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
   * The listening configuration.
   * 
   * This parameter is required.
   */
  listen?: ModifyDomainRequestListen;
  /**
   * @remarks
   * The forwarding configuration.
   * 
   * This parameter is required.
   */
  redirect?: ModifyDomainRequestRedirect;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      domain: 'Domain',
      domainId: 'DomainId',
      instanceId: 'InstanceId',
      listen: 'Listen',
      redirect: 'Redirect',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      domain: 'string',
      domainId: 'string',
      instanceId: 'string',
      listen: ModifyDomainRequestListen,
      redirect: ModifyDomainRequestRedirect,
      regionId: 'string',
    };
  }

  validate() {
    if(this.listen && typeof (this.listen as any).validate === 'function') {
      (this.listen as any).validate();
    }
    if(this.redirect && typeof (this.redirect as any).validate === 'function') {
      (this.redirect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

