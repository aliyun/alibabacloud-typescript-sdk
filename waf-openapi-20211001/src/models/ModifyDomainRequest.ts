// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDomainRequestListen extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 123
   */
  certId?: string;
  /**
   * @remarks
   * The type of the cipher suite. This parameter is available only when **HttpsPorts** is not empty, which indicates that the domain uses HTTPS. Valid values:
   * 
   * - **1**: all cipher suites.
   * 
   * - **2**: strong cipher suites. You can select this value only when you set **TLSVersion** to **tlsv1.2**.
   * 
   * - **99**: custom cipher suites.
   * 
   * @example
   * 2
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The custom cipher suites. This parameter is available only when you set **CipherSuite** to **99**.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Indicates whether TLS 1.3 is supported. This parameter is available only when **HttpsPorts** is not empty, which indicates that the domain uses HTTPS. Valid values:
   * 
   * - **true**: TLS 1.3 is supported.
   * 
   * - **false**: TLS 1.3 is not supported.
   * 
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Indicates whether an exclusive IP address is enabled. This parameter is available only when you set **IPv6Enabled** to false and **ProtectionResource** to **share**. Valid values:
   * 
   * - **true**: An exclusive IP address is enabled.
   * 
   * - **false** (default): An exclusive IP address is disabled.
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Indicates whether forced HTTPS redirection is enabled. This parameter is available only when the domain uses HTTPS but not HTTP. Valid values:
   * 
   * - **true**: Forced HTTPS redirection is enabled.
   * 
   * - **false**: Forced HTTPS redirection is disabled.
   * 
   * @example
   * true
   */
  focusHttps?: boolean;
  /**
   * @remarks
   * Indicates whether subdomains are included in the HTTP Strict Transport Security (HSTS) policy. Valid values:
   * 
   * - **true**: Subdomains are included.
   * 
   * - **false**: Subdomains are not included.
   * 
   * @example
   * false
   */
  hstsIncludeSubDomain?: boolean;
  /**
   * @remarks
   * The time-to-live (TTL) of the HSTS policy. Unit: seconds.
   * 
   * @example
   * 365000
   */
  hstsMaxAge?: number;
  /**
   * @remarks
   * Indicates whether HSTS preload is enabled. Default value: false. Valid values:
   * 
   * - true: HSTS preload is enabled.
   * 
   * - false: HSTS preload is disabled.
   * 
   * @example
   * false
   */
  hstsPreload?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled. This parameter is available only when **HttpsPorts** is not empty, which indicates that the domain uses HTTPS. Valid values:
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
   * The HTTP listening ports. The format is [**port1,port2,...**].
   */
  httpPorts?: number[];
  /**
   * @remarks
   * The HTTPS listening ports. The format is [**port1,port2,...**].
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
   * The type of the protection resource. Valid values:
   * 
   * - **share** (default): a shared cluster.
   * 
   * - **gslb**: a shared cluster with global server load balancing.
   * 
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @remarks
   * Indicates whether access is allowed only from SM clients. This parameter is available only when SM2Enabled is set to true. Valid values:
   * 
   * - true: Only SM clients can access the website.
   * 
   * - false: Both SM and non-SM clients can access the website.
   * 
   * @example
   * true
   */
  SM2AccessOnly?: boolean;
  /**
   * @remarks
   * The ID of the SM certificate. This parameter is required only when SM2Enabled is set to true.
   * 
   * @example
   * 123-cn-hangzhou
   */
  SM2CertId?: string;
  /**
   * @remarks
   * Indicates whether SM certificates are enabled.
   * 
   * @example
   * true
   */
  SM2Enabled?: boolean;
  /**
   * @remarks
   * The TLS version. This parameter is available only when **HttpsPorts** is not empty, which indicates that the domain uses HTTPS. Valid values:
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
   * The method that WAF uses to obtain the real IP address of a client. Valid values:
   * 
   * - **0** (default): WAF obtains the client IP address from the TCP connection. This option is suitable if no Layer 7 proxies are deployed in front of WAF.
   * 
   * - **1**: WAF obtains the client IP address from the first value of the X-Forwarded-For (XFF) header.
   * 
   * - **2**: WAF obtains the client IP address from a custom header field.
   * 
   * @example
   * 2
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The custom header fields that are used to obtain the client IP address. The format is [**"header1","header2",...**].
   * 
   * > This parameter is required only when you set **XffHeaderMode** to 2.
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
   * The port of the origin server.
   * 
   * @example
   * 80
   */
  backendPort?: number;
  /**
   * @remarks
   * The WAF listening port.
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

export class ModifyDomainRequestRedirect extends $dara.Model {
  /**
   * @remarks
   * The custom port mappings for back-to-origin.
   */
  backendPorts?: ModifyDomainRequestRedirectBackendPorts[];
  /**
   * @remarks
   * The IP addresses or domain names of the origin server. You can specify only one type of address. If you specify a domain name, only IPv4 is supported. IPv6 is not supported.
   * 
   * - IP addresses: The format is [**"ip1","ip2",...**]. You can specify up to 20 IP addresses.
   * 
   * - Domain names: The format is [**"domain"**]. You can specify up to 20 domain names.
   */
  backends?: string[];
  /**
   * @remarks
   * The IP addresses or domain names of the backup origin server.
   */
  backupBackends?: string[];
  /**
   * @remarks
   * Indicates whether public cloud disaster recovery is enabled. Valid values:
   * 
   * - **true**: Public cloud disaster recovery is enabled.
   * 
   * - **false** (default): Public cloud disaster recovery is disabled.
   * 
   * @example
   * true
   */
  cnameEnabled?: boolean;
  /**
   * @remarks
   * The connection timeout period. Unit: seconds. Valid values: 1 to 3600. Default value: 5.
   * 
   * @example
   * 120
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Indicates whether forced HTTP back-to-origin is enabled. This parameter is available only when you specify **HttpsPorts**. Valid values:
   * 
   * - **true**: Forced HTTP back-to-origin is enabled.
   * 
   * - **false**: Forced HTTP back-to-origin is disabled.
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled for back-to-origin requests. Valid values:
   * 
   * - **true**: HTTP/2 is enabled for back-to-origin requests.
   * 
   * - **false**: HTTP/2 is disabled for back-to-origin requests.
   * 
   * @example
   * true
   */
  http2Origin?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent HTTP/2 back-to-origin requests. Valid values: 1 to 512. Default value: 2.
   * 
   * @example
   * 128
   */
  http2OriginMaxConcurrency?: number;
  /**
   * @remarks
   * Indicates whether persistent connections are enabled. Valid values:
   * 
   * - **true** (default): Persistent connections are enabled.
   * 
   * - **false**: Persistent connections are disabled.
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of requests that can be reused in a persistent connection. Valid values: 60 to 1000. Default value: 1000.
   * 
   * > This parameter is available only when you enable persistent connections.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The idle timeout for a persistent connection. Unit: seconds. Valid values: 1 to 60. Default value: 15.
   * 
   * > This parameter specifies the amount of time that an idle persistent connection can remain open.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm for back-to-origin requests. Valid values:
   * 
   * - **iphash**: the IP hash algorithm.
   * 
   * - **roundRobin**: the round-robin algorithm.
   * 
   * - **leastTime**: the least time algorithm. This value is available only when you set **ProtectionResource** to **gslb**.
   * 
   * This parameter is required.
   * 
   * @example
   * iphash
   */
  loadbalance?: string;
  /**
   * @remarks
   * The maximum size of a request body. Unit: GB. Valid values: 2 to 10. Default value: 2.
   * 
   * > This parameter is supported only by the WAF Ultimate edition.
   * 
   * @example
   * 2
   */
  maxBodySize?: number;
  /**
   * @remarks
   * Indicates whether the Proxy Protocol is enabled to preserve client IP addresses.
   * 
   * - **true**: The Proxy Protocol is enabled. If you select this option, you can view the client IP address on the origin server.
   * 
   * - **false**: The Proxy Protocol is disabled.
   * 
   * @example
   * false
   */
  proxyProtocol?: boolean;
  /**
   * @remarks
   * The read timeout period. Unit: seconds. Valid values: 1 to 3600. Default value: 120.
   * 
   * @example
   * 200
   */
  readTimeout?: number;
  /**
   * @remarks
   * The custom header fields and their values for traffic marking.
   * 
   * WAF adds these fields and values to the request headers when traffic passes through WAF. This helps backend services identify and collect statistics on WAF-processed traffic.
   */
  requestHeaders?: ModifyDomainRequestRedirectRequestHeaders[];
  /**
   * @remarks
   * Indicates whether forwarding requests to the origin server are retried when the requests fail. Valid values:
   * 
   * - **true** (default): Requests are retried.
   * 
   * - **false**: Requests are not retried.
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * The forwarding rules for a hybrid cloud deployment. This parameter is a string that contains a JSON array. Each element in the array is a struct that contains the following fields:
   * 
   * - **rs**: an array of strings. The back-to-origin IP addresses or CNAMEs.
   * 
   * - **backupRs**: an array of strings. The backup back-to-origin IP addresses or CNAMEs. This field is required. If you do not want to specify backup addresses, set it to [].
   * 
   * - **location**: a string. The name of the protection node.
   * 
   * - **locationId**: a long integer. The ID of the protection node.
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
   * Indicates whether back-to-origin Server Name Indication (SNI) is enabled. This parameter is available only when you specify **HttpsPorts**. Valid values:
   * 
   * - **true**: Back-to-origin SNI is enabled.
   * 
   * - **false** (default): Back-to-origin SNI is disabled.
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The value of the custom SNI field. If you do not set this parameter, the value of the **Host** field from the request header is used by default. You typically do not need to set this parameter unless your business requires a custom SNI value for back-to-origin requests.
   * 
   * > This parameter is available only when you set **SniEnabled** to true.
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * Indicates whether WAF is allowed to overwrite the WL-Proxy-Client-IP header. Valid values:
   * 
   * - **true** (default): WAF is allowed to overwrite the header.
   * 
   * - **false**: WAF is not allowed to overwrite the header.
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
   * Indicates whether WAF is allowed to overwrite the Web-Server-Type header. Valid values:
   * 
   * - **true** (default): WAF is allowed to overwrite the header.
   * 
   * - **false**: WAF is not allowed to overwrite the header.
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
   * The write timeout period. Unit: seconds. Valid values: 1 to 3600. Default value: 120.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  /**
   * @remarks
   * Indicates whether WAF is allowed to overwrite the X-Client-IP header. Valid values:
   * 
   * - **true** (default): WAF is allowed to overwrite the header.
   * 
   * - **false**: WAF is not allowed to overwrite the header.
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
   * Indicates whether WAF is allowed to overwrite the X-True-IP header. Valid values:
   * 
   * - **true** (default): WAF is allowed to overwrite the header.
   * 
   * - **false**: WAF is not allowed to overwrite the header.
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
   * Indicates whether the X-Forwarded-Proto header is used to pass the protocol used by WAF to the origin server. Valid values:
   * 
   * - **true** (default): The WAF protocol is passed.
   * 
   * - **false**: The WAF protocol is not passed.
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
   * The access mode of the WAF instance. Valid values:
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
   * The domain name whose configurations you want to modify.
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
   * The listening settings.
   * 
   * This parameter is required.
   */
  listen?: ModifyDomainRequestListen;
  /**
   * @remarks
   * The forwarding settings.
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

