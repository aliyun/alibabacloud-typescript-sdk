// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainRequestListen extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate to be added. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses the HTTPS protocol.
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
   * The type of cipher suite to be added. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses the HTTPS protocol. Valid values:
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
   * The custom cipher suites to be added.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Specifies whether to support TLS 1.3. Valid values:
   * 
   * - **true**: supports TLS 1.3.
   * 
   * - **false**: does not support TLS 1.3.
   * 
   * > This parameter is used only when HttpsPorts is not empty, which indicates that the domain name uses the HTTPS protocol. When TLSVersion is set to tlsv1.3, this value must be set to true.
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
   * Specifies whether to enable an exclusive IP address. This parameter is used only when **IPv6Enabled** is set to **false**, which indicates that IPv6 is disabled, and **ProtectionResource** is set to **share**, which indicates that a shared cluster is used. Valid values:
   * 
   * - **true**: enables an exclusive IP address.
   * 
   * - **false** (default): disables an exclusive IP address.
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Specifies whether to enable forced HTTPS redirection. This parameter is used only when HttpsPorts is not empty, which indicates that the domain name uses the HTTPS protocol, and HttpPorts is empty, which indicates that the domain name does not use the HTTP protocol. Valid values:
   * 
   * - **true**: enables forced HTTPS redirection.
   * 
   * - **false**: disables forced HTTPS redirection.
   * 
   * @example
   * true
   */
  focusHttps?: boolean;
  /**
   * @remarks
   * Specifies whether HTTP Strict Transport Security (HSTS) includes subdomains. Valid values:
   * 
   * - **true**: includes subdomains.
   * 
   * - **false**: does not include subdomains.
   * 
   * @example
   * true
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
   * Specifies whether to enable HSTS preload. Default value: false. Valid values:
   * - true: enables HSTS preload.
   * - false: disables HSTS preload.
   * 
   * @example
   * false
   */
  hstsPreload?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP/2. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses the HTTPS protocol. Valid values:
   * 
   * - **true**: enables HTTP/2.
   * 
   * - **false** (default): disables HTTP/2.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The listening ports for the HTTP protocol.
   */
  httpPorts?: number[];
  /**
   * @remarks
   * The listening ports for the HTTPS protocol.
   */
  httpsPorts?: number[];
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * - **true**: enables IPv6.
   * 
   * - **false** (default): disables IPv6.
   * 
   * @example
   * true
   */
  IPv6Enabled?: boolean;
  /**
   * @remarks
   * The type of protection resource to be used. Valid values:
   * 
   * - **share** (default): uses a shared cluster.
   * 
   * - **gslb**: uses intelligent load balancing of a shared cluster.
   * 
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @remarks
   * Specifies whether to allow access only from SM2 clients. This parameter is used only when SM2Enabled is set to true. Valid values:
   * 
   * - true: allows access only from SM2 clients.
   * 
   * - false: allows access from both SM2 and non-SM2 clients.
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
   * The ID of the SM2 certificate to be added. This parameter is used only when SM2Enabled is set to true.
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
   * Specifies whether to enable the SM2 certificate.
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
   * The TLS version to be added. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses the HTTPS protocol. Valid values:
   * - **tlsv1**: supports TLS 1.0 and later versions. This value provides the highest compatibility but lower security.
   * - **tlsv1.1**: supports TLS 1.1 and later versions. This value provides good compatibility and security.
   * - **tlsv1.2**: supports TLS 1.2 and later versions. This value provides good compatibility and the highest security.
   * - **tlsv1.3**: supports only TLS 1.3. This value provides the highest security but lower compatibility.
   * 
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The method used by WAF to obtain the actual IP address of the client. Valid values:
   * 
   * - **0** (default): The client access traffic is not forwarded by other Layer 7 proxies before it reaches WAF.
   * 
   * - **1**: WAF reads the first value of the X-Forwarded-For (XFF) field in the request header as the client IP address.
   * 
   * - **2**: WAF reads the value of a custom field that you specified in the request header as the client IP address.
   * 
   * - **3**: WAF reads the Client IP address in the Proxy Protocol header as the client IP address.
   * 
   * @example
   * 1
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The list of custom fields used to obtain the client IP address.
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

export class CreateDomainRequestRedirectBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The origin server.
   * 
   * @example
   * 1.1.XX.XX
   */
  backend?: string;
  /**
   * @remarks
   * The weight.
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
      weight: 'number',
    };
  }

  validate() {
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
   * The listening port.
   * 
   * @example
   * 80
   */
  listenPort?: number;
  /**
   * @remarks
   * The protocol of the listening port. Valid values:
   * 
   * - **http**: the HTTP protocol.
   * 
   * - **https**: the HTTPS protocol.
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

export class CreateDomainRequestRedirect extends $dara.Model {
  /**
   * @remarks
   * The custom back-to-origin configuration.
   */
  backendConfig?: CreateDomainRequestRedirectBackendConfig[];
  /**
   * @remarks
   * The custom port configuration.
   */
  backendPorts?: CreateDomainRequestRedirectBackendPorts[];
  /**
   * @remarks
   * The IP addresses of the origin servers or the back-to-origin domain names for the domain name.
   */
  backends?: string[];
  /**
   * @remarks
   * The IP addresses of the secondary origin servers or the secondary back-to-origin domain names for the domain name.
   */
  backupBackends?: string[];
  /**
   * @remarks
   * Specifies whether to enable public cloud disaster recovery. Valid values:
   * 
   * - **true**: enables public cloud disaster recovery.
   * 
   * - **false** (default): disables public cloud disaster recovery.
   * 
   * @example
   * true
   */
  cnameEnabled?: boolean;
  /**
   * @remarks
   * The connection timeout period. Unit: seconds.
   * Valid values: 1 to 3600.
   * Default value: 5.
   * 
   * @example
   * 120
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable forced HTTP back-to-origin. This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses the HTTPS protocol. Valid values:
   * 
   * - **true**: enables forced HTTP back-to-origin.
   * 
   * - **false**: disables forced HTTP back-to-origin.
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP/2 back-to-origin. Valid values:
   * 
   * - **true**: enables HTTP/2 back-to-origin.
   * 
   * - **false**: disables HTTP/2 back-to-origin.
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
   * Specifies whether to maintain persistent connections. Valid values:
   * 
   * - **true** (default): maintains persistent connections.
   * 
   * - **false**: does not maintain persistent connections.
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of requests that reuse a persistent connection. Valid values: 60 to 1000. Default value: 1000.
   * 
   * > The number of requests that can reuse a persistent connection after persistent connections are enabled.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for idle persistent connections. Valid values: 1 to 60. Default value: 15. Unit: seconds.
   * 
   * > The duration after which an idle persistent connection is released.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm used for back-to-origin requests. Valid values:
   * 
   * - **iphash**: the IP hash algorithm.
   * 
   * - **roundRobin**: the round-robin algorithm.
   * 
   * - **leastTime**: the least time algorithm. This value is available only when **ProtectionResource** is set to **gslb**, which indicates that intelligent load balancing of a shared cluster is used.
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
   * > This parameter is supported only by the Ultimate Edition.
   * 
   * @example
   * 2
   */
  maxBodySize?: number;
  /**
   * @remarks
   * Specifies whether to enable the feature of preserving the client source IP address. Valid values:
   * - **true**: enables the feature. After this feature is enabled, backend services can view the original IP address of the client.
   * - **false**: disables the feature.
   * 
   * @example
   * false
   */
  proxyProtocol?: boolean;
  /**
   * @remarks
   * The read timeout period. Unit: seconds.
   * Valid values: 1 to 3600.
   * Default value: 120.
   * 
   * @example
   * 200
   */
  readTimeout?: number;
  /**
   * @remarks
   * The traffic marking fields and values for the domain name, which are used to mark the traffic processed by WAF.
   * 
   * By specifying custom request header fields and their corresponding values, WAF automatically adds the specified custom field values to the request headers as traffic marks when the access traffic of the domain name passes through WAF. This facilitates the collection of related information by backend services.
   */
  requestHeaders?: CreateDomainRequestRedirectRequestHeaders[];
  /**
   * @remarks
   * Specifies whether to retry when WAF fails to forward requests to the origin server. Valid values:
   * 
   * - **true** (default): retries.
   * 
   * - **false**: does not retry.
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * The hybrid cloud forwarding rules. The value is a string transformed from a JSON array. Each element in the JSON array is a struct that contains the following fields:
   * - **rs**: Array | The list of back-to-origin IP addresses or back-to-origin CNAMEs.
   * 
   * - **backupRs**: Array | The list of secondary back-to-origin IP addresses or back-to-origin CNAMEs. This field is required. An empty array [] indicates that no secondary back-to-origin addresses are configured.
   * 
   * - **location**: String | The name of the protection node.
   * 
   * - **locationId**: Long | The ID of the protection node.
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
   * Specifies whether to enable back-to-origin Server Name Indication (SNI). This parameter is used only when **HttpsPorts** is not empty, which indicates that the domain name uses the HTTPS protocol. Valid values:
   * 
   * - **true**: enables back-to-origin SNI.
   * 
   * - **false** (default): disables back-to-origin SNI.
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The value of the custom SNI extension field. If you do not specify this parameter, the value of the **Host** field in the request header is used as the value of the SNI extension field by default.
   * In most cases, you do not need to customize SNI unless your service has special configuration requirements and you want WAF to use an SNI that is different from the actual request Host in back-to-origin requests.
   * 
   * > This parameter is required only when **SniEnabled** is set to **true**, which indicates that back-to-origin SNI is enabled.
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * Specifies whether to allow WAF to overwrite WL-Proxy-Client-IP. Valid values:
   * 
   * - **true** (default): allows WAF to overwrite WL-Proxy-Client-IP.
   * 
   * - **false**: does not allow WAF to overwrite WL-Proxy-Client-IP.
   * 
   * @example
   * true
   */
  WLProxyClientIp?: boolean;
  /**
   * @remarks
   * Specifies whether to allow WAF to overwrite Web-Server-Type. Valid values:
   * 
   * - **true** (default): allows WAF to overwrite Web-Server-Type.
   * 
   * - **false**: does not allow WAF to overwrite Web-Server-Type.
   * 
   * @example
   * true
   */
  webServerType?: boolean;
  /**
   * @remarks
   * The write timeout period. Unit: seconds.
   * Valid values: 1 to 3600.
   * Default value: 120.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  /**
   * @remarks
   * Specifies whether to allow WAF to overwrite X-Client-IP. Valid values:
   * 
   * - **true** (default): allows WAF to overwrite X-Client-IP.
   * 
   * - **false**: does not allow WAF to overwrite X-Client-IP.
   * 
   * @example
   * true
   */
  XClientIp?: boolean;
  /**
   * @remarks
   * Specifies whether to allow WAF to overwrite X-True-IP. Valid values:
   * 
   * - **true** (default): allows WAF to overwrite X-True-IP.
   * 
   * - **false**: does not allow WAF to overwrite X-True-IP.
   * 
   * @example
   * true
   */
  XTrueIp?: boolean;
  /**
   * @remarks
   * Specifies whether to pass the WAF protocol by using X-Forwarded-Proto. Valid values:
   * 
   * - **true** (default): passes the WAF protocol.
   * 
   * - **false**: does not pass the WAF protocol.
   * 
   * @example
   * false
   */
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'BackendConfig',
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
      backendConfig: { 'type': 'array', 'itemType': CreateDomainRequestRedirectBackendConfig },
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
    if(Array.isArray(this.backendConfig)) {
      $dara.Model.validateArray(this.backendConfig);
    }
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
   * > If the value is **share**, or the value is **hybrid_cloud_cname** and public cloud disaster recovery is enabled, you must first invoke the [DescribeVerifyContent](https://help.aliyun.com/document_detail/2985193.html) and [VerifyDomainOwner](https://help.aliyun.com/document_detail/2985192.html) operations to authenticate the domain name ownership. If the website config is added to a region in the Chinese mainland, it must also have an ICP filing.
   * >
   * > If the value is **hybrid_cloud_cname** and public cloud disaster recovery is disabled, you do not need to authenticate the domain name ownership and can directly invoke this operation.
   * 
   * @example
   * share
   */
  accessType?: string;
  /**
   * @remarks
   * The name of the domain name.
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
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
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
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
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
   * The list of tags. A maximum of 20 tags are supported.
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

