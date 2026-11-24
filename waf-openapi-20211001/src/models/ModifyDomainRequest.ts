// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDomainRequestListen extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate to be added.
   * 
   * @example
   * 123
   */
  certId?: string;
  /**
   * @remarks
   * The type of cipher suite to be added. This parameter takes effect only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS. Valid values:
   * 
   * - **1**: adds all cipher suites.
   * 
   * - **2**: adds strong cipher suites. You can select this value only when **TLSVersion** is set to **tlsv1.2**.
   * 
   * - **99**: adds custom cipher suites. You can select this value only when **TLSVersion** is not set to **tlsv1.3**.
   * 
   * @example
   * 2
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The custom cipher suites to be added. This parameter takes effect only when **CipherSuite** is set to **99**.
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
   * > This parameter takes effect only when HttpsPorts is not empty, which indicates that the domain name uses HTTPS. If TLSVersion is set to tlsv1.3, this parameter must be set to true.
   * 
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Specifies whether to enable an exclusive IP address. This parameter takes effect only when **IPv6Enabled** is set to false, which indicates that IPv6 is disabled, and **ProtectionResource** is set to **share**, which indicates that a shared cluster is used. Valid values:
   * 
   * - **true**: enables an exclusive IP address.
   * 
   * - **false**: disables an exclusive IP address. This is the default value.
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Specifies whether to enable force redirect to HTTPS. This parameter takes effect only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS, and **HttpPorts** is empty, which indicates that the domain name does not use HTTP. Valid values:
   * 
   * - **true**: enables force redirect to HTTPS.
   * 
   * - **false**: disables force redirect to HTTPS.
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
   * false
   */
  hstsIncludeSubDomain?: boolean;
  /**
   * @remarks
   * The expiration time of HSTS. Unit: seconds.
   * 
   * @example
   * 365000
   */
  hstsMaxAge?: number;
  /**
   * @remarks
   * Specifies whether to enable HSTS preload. By default, this feature is disabled. Valid values:
   * - true: enables HSTS preload.
   * - false: disables HSTS preload.
   * 
   * @example
   * false
   */
  hstsPreload?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP/2. This parameter takes effect only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS. Valid values:
   * 
   * - **true**: enables HTTP/2.
   * 
   * - **false**: disables HTTP/2. This is the default value.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The listening ports for HTTP. Specify the ports in the [**port1,port2,...**] format.
   */
  httpPorts?: number[];
  /**
   * @remarks
   * The listening ports for HTTPS. Specify the ports in the [**port1,port2,...**] format.
   */
  httpsPorts?: number[];
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * - **true**: enables IPv6.
   * 
   * - **false**: disables IPv6. This is the default value.
   * 
   * @example
   * true
   */
  IPv6Enabled?: boolean;
  /**
   * @remarks
   * The type of protection resource to be used. Valid values:
   * 
   * - **share**: uses a shared cluster. This is the default value.
   * 
   * - **gslb**: uses intelligent load balancing of a shared cluster.
   * 
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @remarks
   * Specifies whether to allow access only from clients that support SM2. This parameter takes effect only when SM2Enabled is set to true. Valid values:
   * 
   * - true: allows access only from clients that support SM2.
   * 
   * - false: allows access from clients that support SM2 and clients that do not support SM2.
   * 
   * @example
   * true
   */
  SM2AccessOnly?: boolean;
  /**
   * @remarks
   * The ID of the SM2 certificate to be added. This parameter takes effect only when SM2Enabled is set to true.
   * 
   * @example
   * 123-cn-hangzhou
   */
  SM2CertId?: string;
  /**
   * @remarks
   * Specifies whether to enable the SM2 certificate.
   * 
   * @example
   * true
   */
  SM2Enabled?: boolean;
  /**
   * @remarks
   * The TLS version. This parameter takes effect only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS. Valid values:
   * - **tlsv1**: supports TLS 1.0 and later. This version provides the highest compatibility but lower security.
   * - **tlsv1.1**: supports TLS 1.1 and later. This version provides good compatibility and security.
   * - **tlsv1.2**: supports TLS 1.2 and later. This version provides good compatibility and the highest security.
   * - **tlsv1.3**: supports only TLS 1.3. This version provides the highest security but lower compatibility.
   * 
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The method for WAF to obtain the actual IP address of the client.
   * 
   * @example
   * 2
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The list of custom fields used to obtain the client IP address. Specify the fields in the [**"header1","header2",...**] format.
   * 
   * > You must specify this parameter only when **XffHeaderMode** is set to 2, which indicates that WAF reads the value of a custom field that you specify in the request header as the client IP address.
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

export class ModifyDomainRequestRedirectBackendConfig extends $dara.Model {
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
   * The protocol of the listening port. Valid values:
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
   * The value of the custom request header field.
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
   * The custom back-to-origin configurations.
   */
  backendConfig?: ModifyDomainRequestRedirectBackendConfig[];
  /**
   * @remarks
   * The custom port configurations.
   */
  backendPorts?: ModifyDomainRequestRedirectBackendPorts[];
  /**
   * @remarks
   * The IP addresses of the origin servers or the domain names to which requests are forwarded for the domain name. You can specify either IP addresses or domain names. If you specify domain names, only IPv4 addresses are supported. IPv6 addresses are not supported.
   * 
   * - To specify IP addresses of origin servers, use the [**"ip1","ip2",...**] format. You can add up to 20 IP addresses.
   * 
   * - To specify domain names, use the [**"domain"**] format. You can add up to 20 domain names.
   */
  backends?: string[];
  /**
   * @remarks
   * The IP addresses of the secondary origin servers or the secondary domain names to which requests are forwarded for the domain name.
   */
  backupBackends?: string[];
  /**
   * @remarks
   * Specifies whether to enable disaster recovery on Alibaba Cloud. Valid values:
   * 
   * - **true**: enables disaster recovery on Alibaba Cloud.
   * 
   * - **false**: disables disaster recovery on Alibaba Cloud. This is the default value.
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
   * Specifies whether to enable force redirect to HTTP for back-to-origin requests. This parameter takes effect only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS. Valid values:
   * 
   * - **true**: enables force redirect to HTTP for back-to-origin requests.
   * 
   * - **false**: disables force redirect to HTTP for back-to-origin requests.
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP/2 for back-to-origin requests. Valid values:
   * 
   * - **true**: enables HTTP/2 for back-to-origin requests.
   * 
   * - **false**: disables HTTP/2 for back-to-origin requests.
   * 
   * @example
   * true
   */
  http2Origin?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent HTTP/2 back-to-origin connections. Valid values: 1 to 512. Default value: 2.
   * 
   * @example
   * 128
   */
  http2OriginMaxConcurrency?: number;
  /**
   * @remarks
   * Specifies whether to maintain persistent connections. Valid values:
   * 
   * - **true**: maintains persistent connections. This is the default value.
   * 
   * - **false**: does not maintain persistent connections.
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of requests that can be reused over a persistent connection. Valid values: 60 to 1000. Default value: 1000.
   * 
   * > This parameter specifies the number of requests that can be multiplexed over a persistent connection after persistent connections are enabled.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for an idle persistent connection. Valid values: 1 to 60. Default value: 15. Unit: seconds.
   * 
   * > This parameter specifies the duration after which an idle persistent connection is released.
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
   * - **leastTime**: the least time algorithm. You can select this value only when **ProtectionResource** is set to **gslb**, which indicates that intelligent load balancing of a shared cluster is used.
   * 
   * This parameter is required.
   * 
   * @example
   * iphash
   */
  loadbalance?: string;
  /**
   * @remarks
   * The maximum size of the request body. Valid values: 2 to 10. Default value: 2. Unit: GB.
   * > This parameter is supported only by WAF Ultimate Edition.
   * 
   * @example
   * 2
   */
  maxBodySize?: number;
  /**
   * @remarks
   * Specifies whether to enable the feature of preserving the originating IP address of the client. Valid values:
   * 
   * - **true**: enables the feature. After this feature is enabled, backend services can view the originating IP address of the client.
   * 
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
   * By specifying custom request header fields and their values, WAF automatically adds the specified custom field values to the request headers as traffic marks when the access traffic of the domain name passes through WAF. This facilitates the collection of related information by backend services.
   */
  requestHeaders?: ModifyDomainRequestRedirectRequestHeaders[];
  /**
   * @remarks
   * Specifies whether to retry when WAF fails to forward requests to the origin server. Valid values:
   * 
   * - **true**: retries. This is the default value.
   * 
   * - **false**: does not retry.
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * The forwarding rules for Hybrid Cloud WAF. The value is a string transformed from a JSON array. Each element in the JSON array is a struct that contains the following fields:
   * - **rs**: Array | The list of back-to-origin IP addresses or CNAME records.
   * 
   * - **backupRs**: Array | The list of secondary back-to-origin IP addresses or CNAME records. This field is required. An empty array [] indicates that no secondary back-to-origin addresses are configured.
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
   * Specifies whether to enable Server Name Indication (SNI) for back-to-origin requests. This parameter takes effect only when **HttpsPorts** is not empty, which indicates that the domain name uses HTTPS. Valid values:
   * 
   * - **true**: enables SNI for back-to-origin requests.
   * 
   * - **false**: disables SNI for back-to-origin requests. This is the default value.
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The value of the custom SNI extension field. If you do not specify this parameter, the value of the **Host** field in the request header is used as the value of the SNI extension field by default.
   * In most cases, you do not need to customize the SNI. You can customize the SNI only when your service has special configuration requirements and you want WAF to use an SNI that is different from the actual request Host in back-to-origin requests.
   * 
   * > You must specify this parameter only when **SniEnabled** is set to true, which indicates that a custom SNI is used for back-to-origin requests.
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * Specifies whether to allow WAF to overwrite the WL-Proxy-Client-IP header. Valid values:
   * 
   * - **true**: allows WAF to overwrite the header. This is the default value.
   * 
   * - **false**: does not allow WAF to overwrite the header.
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
   * Specifies whether to allow WAF to overwrite the Web-Server-Type header. Valid values:
   * 
   * - **true**: allows WAF to overwrite the header. This is the default value.
   * 
   * - **false**: does not allow WAF to overwrite the header.
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
   * Valid values: 1 to 3600.
   * Default value: 120.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  /**
   * @remarks
   * Specifies whether to allow WAF to overwrite the X-Client-IP header. Valid values:
   * 
   * - **true**: allows WAF to overwrite the header. This is the default value.
   * 
   * - **false**: does not allow WAF to overwrite the header.
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
   * Specifies whether to allow WAF to overwrite the X-True-IP header. Valid values:
   * 
   * - **true**: allows WAF to overwrite the header. This is the default value.
   * 
   * - **false**: does not allow WAF to overwrite the header.
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
   * Specifies whether to pass the protocol used by WAF in the X-Forwarded-Proto header. Valid values:
   * 
   * - **true**: passes the protocol used by WAF. This is the default value.
   * 
   * - **false**: does not pass the protocol used by WAF.
   * 
   * @example
   * true
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
      backendConfig: { 'type': 'array', 'itemType': ModifyDomainRequestRedirectBackendConfig },
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

export class ModifyDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The access mode of the WAF instance. Valid values:
   * 
   * - **share**: CNAME access. This is the default value.
   * 
   * - **hybrid_cloud_cname**: Hybrid Cloud CNAME access.
   * 
   * @example
   * share
   */
  accessType?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * www.aliyundoc.com-waf
   */
  domainId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The listener configurations.
   * 
   * This parameter is required.
   */
  listen?: ModifyDomainRequestListen;
  /**
   * @remarks
   * The forwarding configurations.
   * 
   * This parameter is required.
   */
  redirect?: ModifyDomainRequestRedirect;
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

