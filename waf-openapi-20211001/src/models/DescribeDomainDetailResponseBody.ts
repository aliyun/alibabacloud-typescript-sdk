// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainDetailResponseBodyCertDetail extends $dara.Model {
  /**
   * @remarks
   * The common name of the SSL certificate.
   * 
   * @example
   * test.aliyundoc.com
   */
  commonName?: string;
  /**
   * @remarks
   * The end of the validity period of the SSL certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1685590400000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the SSL certificate.
   * 
   * @example
   * 123-cn-hangzhou
   */
  id?: string;
  /**
   * @remarks
   * The name of the SSL certificate.
   * 
   * @example
   * test-cert-name
   */
  name?: string;
  /**
   * @remarks
   * The domain names that are bound to the certificate.
   */
  sans?: string[];
  /**
   * @remarks
   * The beginning of the validity period of the SSL certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1677772800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      endTime: 'EndTime',
      id: 'Id',
      name: 'Name',
      sans: 'Sans',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      endTime: 'number',
      id: 'string',
      name: 'string',
      sans: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sans)) {
      $dara.Model.validateArray(this.sans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodyListen extends $dara.Model {
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
   * The type of cipher suite. Valid values:
   * 
   * - **1**: all cipher suites.
   * 
   * - **2**: strong cipher suites.
   * 
   * - **99**: custom cipher suites.
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
   * Indicates whether TLS 1.3 is supported. Valid values:
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
   * Indicates whether an exclusive IP address is enabled for the domain name. Valid values:
   * 
   * - **true**: An exclusive IP address is enabled for the domain name.
   * 
   * - **false**: An exclusive IP address is not enabled for the domain name.
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP to HTTPS redirection is enabled for the domain name. Valid values:
   * 
   * - **true**: HTTP to HTTPS redirection is enabled for the domain name.
   * 
   * - **false**: HTTP to HTTPS redirection is not enabled for the domain name.
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
   * The maximum age value of the HSTS policy. Unit: seconds.
   * 
   * @example
   * 365000
   */
  hstsMaxAge?: number;
  /**
   * @remarks
   * Indicates whether HSTS preload is enabled. Default value: false. Valid values:
   * 
   * - **true**: HSTS preload is enabled.
   * 
   * - **false**: HSTS preload is disabled.
   * 
   * @example
   * false
   */
  hstsPreload?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled. Valid values:
   * 
   * - **true**: HTTP/2 is enabled.
   * 
   * - **false**: HTTP/2 is not enabled.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The HTTP listener ports.
   */
  httpPorts?: number[];
  /**
   * @remarks
   * The HTTPS listener ports.
   */
  httpsPorts?: number[];
  /**
   * @remarks
   * Indicates whether IPv6 is enabled. Valid values:
   * 
   * - **true**: IPv6 is enabled.
   * 
   * - **false**: IPv6 is not enabled.
   * 
   * @example
   * true
   */
  IPv6Enabled?: boolean;
  /**
   * @remarks
   * The type of the protection resource. Valid values:
   * 
   * - **share**: shared cluster.
   * 
   * - **gslb**: intelligent load balancing for shared clusters.
   * 
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @remarks
   * Indicates whether only SM certificate-based clients can access the domain name. This parameter is available only if you set SM2Enabled to true. Valid values:
   * 
   * - **true**: Only SM certificate-based clients can access the domain name.
   * 
   * - **false**: Both SM certificate-based and non-SM certificate-based clients can access the domain name.
   * 
   * @example
   * true
   */
  SM2AccessOnly?: boolean;
  /**
   * @remarks
   * The ID of the SM certificate. This parameter is available only if you set SM2Enabled to true.
   * 
   * @example
   * 123-cn-hangzhou
   */
  SM2CertId?: string;
  /**
   * @remarks
   * Indicates whether SM certificate-based verification is enabled. Valid values:
   * 
   * - **true**: SM certificate-based verification is enabled.
   * 
   * - **false**: SM certificate-based verification is not enabled.
   * 
   * @example
   * true
   */
  SM2Enabled?: boolean;
  /**
   * @remarks
   * The version of the Transport Layer Security (TLS) protocol. Valid values:
   * 
   * - **tlsv1**
   * 
   * - **tlsv1.1**
   * 
   * - **tlsv1.2**
   * 
   * @example
   * tlsv1.2
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The method that WAF uses to obtain the originating IP address of a client. Valid values:
   * 
   * - **0**: The client traffic is not forwarded by a Layer 7 proxy before the traffic reaches WAF.
   * 
   * - **1**: WAF reads the first value of the X-Forwarded-For (XFF) field in the request header as the client IP address.
   * 
   * - **2**: WAF reads the value of a custom field that you specify in the request header as the client IP address.
   * 
   * @example
   * 2
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The custom header fields used to obtain the actual IP address of a client.
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

export class DescribeDomainDetailResponseBodyRedirectBackendPorts extends $dara.Model {
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
   * The protocol of the back-to-origin port. Valid values:
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

export class DescribeDomainDetailResponseBodyRedirectBackends extends $dara.Model {
  /**
   * @remarks
   * The IP address or domain name of the origin server.
   * 
   * @example
   * 1.1.XX.XX
   */
  backend?: string;
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodyRedirectBackupBackends extends $dara.Model {
  /**
   * @remarks
   * The backup IP address or domain name of the origin server.
   * 
   * @example
   * [
   *     "1.1.XX.XX",
   *     "2.2.XX.XX"
   * ]
   */
  backend?: string;
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodyRedirectRequestHeaders extends $dara.Model {
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

export class DescribeDomainDetailResponseBodyRedirect extends $dara.Model {
  /**
   * @remarks
   * The list of IP addresses or domain names of the backup origin servers for the domain name.
   */
  backUpBackendList?: string[];
  /**
   * @remarks
   * The list of IP addresses or domain names of the origin servers for the domain name.
   */
  backendList?: string[];
  /**
   * @remarks
   * The custom back-to-origin port mappings. By default, the back-to-origin port is the same as the listener port.
   */
  backendPorts?: DescribeDomainDetailResponseBodyRedirectBackendPorts[];
  /**
   * @remarks
   * The addresses of origin servers.
   * 
   * > This parameter will be deprecated. We recommend that you use **BackendList** instead.
   * 
   * @deprecated
   */
  backends?: DescribeDomainDetailResponseBodyRedirectBackends[];
  /**
   * @remarks
   * The addresses of backup origin servers.
   * 
   * > This parameter will be deprecated. We recommend that you use **BackUpBackendList** instead.
   * 
   * @deprecated
   */
  backupBackends?: DescribeDomainDetailResponseBodyRedirectBackupBackends[];
  /**
   * @remarks
   * The timeout period for connections. Unit: seconds. Valid values: 5 to 120.
   * 
   * @example
   * 120
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Indicates whether back-to-origin requests are forced to use HTTP. Valid values:
   * 
   * - **true**: Requests are forced to use HTTP.
   * 
   * - **false**: Requests are not forced to use HTTP.
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled for back-to-origin requests.
   * 
   * @example
   * true
   */
  http2Origin?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent connections for HTTP/2 back-to-origin requests.
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
   * The maximum number of requests that reuse a persistent connection. Valid values: 60 to 1,000.
   * 
   * > The number of reused persistent connections after the persistent connection feature is enabled.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for idle persistent connections. Valid values: 1 to 60. Default value: 15. Unit: seconds.
   * 
   * > The period of time during which a reused persistent connection is allowed to remain idle before the connection is closed.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm used when WAF forwards requests to the origin server. Valid values:
   * 
   * - **iphash**: the IP hash algorithm.
   * 
   * - **roundRobin**: the round-robin algorithm.
   * 
   * - **leastTime**: the least time algorithm.
   * 
   * @example
   * iphash
   */
  loadbalance?: string;
  /**
   * @remarks
   * The maximum size of a request body. Valid values: 2 to 10. Default value: 2. Unit: GB.
   * 
   * > This feature is available only for the Ultimate edition.
   * 
   * @example
   * 2
   */
  maxBodySize?: number;
  /**
   * @remarks
   * Indicates whether the Proxy Protocol feature is enabled for back-to-origin requests. Valid values:
   * 
   * - **true**: The Proxy Protocol feature is enabled.
   * 
   * - **false**: The Proxy Protocol feature is disabled.
   * 
   * @example
   * false
   */
  proxyProtocol?: boolean;
  /**
   * @remarks
   * The timeout period for read operations. Unit: seconds. Valid values: 5 to 1,800.
   * 
   * @example
   * 200
   */
  readTimeout?: number;
  /**
   * @remarks
   * The custom header fields used to mark requests that pass through WAF.
   */
  requestHeaders?: DescribeDomainDetailResponseBodyRedirectRequestHeaders[];
  /**
   * @remarks
   * Indicates whether WAF retries forwarding requests to the origin server upon failure. Valid values:
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
   * Indicates whether origin Server Name Indication (SNI) is enabled. Valid values:
   * 
   * - **true**: Origin SNI is enabled.
   * 
   * - **false** (default): Origin SNI is not enabled.
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The value of the SNI field.
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * Indicates whether the WL-Proxy-Client-IP header is included in back-to-origin requests. Valid values:
   * 
   * - **true** (default): The WL-Proxy-Client-IP header is included.
   * 
   * - **false**: The WL-Proxy-Client-IP header is not included.
   * 
   * @example
   * true
   */
  WLProxyClientIp?: boolean;
  /**
   * @remarks
   * Indicates whether the Web-Server-Type header is included in back-to-origin requests. Valid values:
   * 
   * - **true** (default): The Web-Server-Type header is included.
   * 
   * - **false**: The Web-Server-Type header is not included.
   * 
   * @example
   * true
   */
  webServerType?: boolean;
  /**
   * @remarks
   * The timeout period for write operations. Unit: seconds. Valid values: 5 to 1,800.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  /**
   * @remarks
   * Indicates whether the X-Client-IP header is included in back-to-origin requests. Valid values:
   * 
   * - **true** (default): The X-Client-IP header is included.
   * 
   * - **false**: The X-Client-IP header is not included.
   * 
   * @example
   * true
   */
  XClientIp?: boolean;
  /**
   * @remarks
   * Indicates whether the X-True-IP header is included in back-to-origin requests. Valid values:
   * 
   * - **true** (default): The X-True-IP header is included.
   * 
   * - **false**: The X-True-IP header is not included.
   * 
   * @example
   * true
   */
  XTrueIp?: boolean;
  /**
   * @remarks
   * Indicates whether the X-Forward-For-Proto header is included in back-to-origin requests to pass the protocol used by WAF. Valid values:
   * 
   * - **true** (default): The X-Forward-For-Proto header is included.
   * 
   * - **false**: The X-Forward-For-Proto header is not included.
   * 
   * @example
   * true
   */
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      backUpBackendList: 'BackUpBackendList',
      backendList: 'BackendList',
      backendPorts: 'BackendPorts',
      backends: 'Backends',
      backupBackends: 'BackupBackends',
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
      backUpBackendList: { 'type': 'array', 'itemType': 'string' },
      backendList: { 'type': 'array', 'itemType': 'string' },
      backendPorts: { 'type': 'array', 'itemType': DescribeDomainDetailResponseBodyRedirectBackendPorts },
      backends: { 'type': 'array', 'itemType': DescribeDomainDetailResponseBodyRedirectBackends },
      backupBackends: { 'type': 'array', 'itemType': DescribeDomainDetailResponseBodyRedirectBackupBackends },
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
      requestHeaders: { 'type': 'array', 'itemType': DescribeDomainDetailResponseBodyRedirectRequestHeaders },
      retry: 'boolean',
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
    if(Array.isArray(this.backUpBackendList)) {
      $dara.Model.validateArray(this.backUpBackendList);
    }
    if(Array.isArray(this.backendList)) {
      $dara.Model.validateArray(this.backendList);
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

export class DescribeDomainDetailResponseBodySM2CertDetail extends $dara.Model {
  /**
   * @remarks
   * The common name of the SM certificate.
   * 
   * @example
   * test.aliyundoc.com
   */
  commonName?: string;
  /**
   * @remarks
   * The end of the validity period of the SM certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1665590400000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the SM certificate.
   * 
   * @example
   * 123-cn-hangzhou
   */
  id?: string;
  /**
   * @remarks
   * The name of the SM certificate.
   * 
   * @example
   * test-sm2-cert-name
   */
  name?: string;
  /**
   * @remarks
   * The domain names that are bound to the SM certificate.
   */
  sans?: string[];
  /**
   * @remarks
   * The beginning of the validity period of the SM certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1657551525000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      endTime: 'EndTime',
      id: 'Id',
      name: 'Name',
      sans: 'Sans',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      endTime: 'number',
      id: 'string',
      name: 'string',
      sans: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sans)) {
      $dara.Model.validateArray(this.sans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the SSL certificate.
   */
  certDetail?: DescribeDomainDetailResponseBodyCertDetail;
  /**
   * @remarks
   * The CNAME assigned by WAF to the domain name.
   * 
   * @example
   * xxxxxcvdaf.****.com
   */
  cname?: string;
  /**
   * @remarks
   * The domain name that is onboarded to WAF.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the domain name that is onboarded to WAF.
   * 
   * @example
   * www.aliyundoc.com-waf
   */
  domainId?: string;
  /**
   * @remarks
   * The listener configurations.
   */
  listen?: DescribeDomainDetailResponseBodyListen;
  /**
   * @remarks
   * The forwarding configurations.
   */
  redirect?: DescribeDomainDetailResponseBodyRedirect;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BAEF9CA9-66A0-533E-BD09-5D5D7AA8****
   */
  requestId?: string;
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
   * The details of the SM certificate.
   */
  SM2CertDetail?: DescribeDomainDetailResponseBodySM2CertDetail;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * - **1**: The domain name is in normal status.
   * 
   * - **2**: The domain name is being created.
   * 
   * - **3**: The domain name is being modified.
   * 
   * - **4**: The domain name is being released.
   * 
   * - **5**: The domain name stops forwarding traffic.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      certDetail: 'CertDetail',
      cname: 'Cname',
      domain: 'Domain',
      domainId: 'DomainId',
      listen: 'Listen',
      redirect: 'Redirect',
      requestId: 'RequestId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      SM2CertDetail: 'SM2CertDetail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDetail: DescribeDomainDetailResponseBodyCertDetail,
      cname: 'string',
      domain: 'string',
      domainId: 'string',
      listen: DescribeDomainDetailResponseBodyListen,
      redirect: DescribeDomainDetailResponseBodyRedirect,
      requestId: 'string',
      resourceManagerResourceGroupId: 'string',
      SM2CertDetail: DescribeDomainDetailResponseBodySM2CertDetail,
      status: 'number',
    };
  }

  validate() {
    if(this.certDetail && typeof (this.certDetail as any).validate === 'function') {
      (this.certDetail as any).validate();
    }
    if(this.listen && typeof (this.listen as any).validate === 'function') {
      (this.listen as any).validate();
    }
    if(this.redirect && typeof (this.redirect as any).validate === 'function') {
      (this.redirect as any).validate();
    }
    if(this.SM2CertDetail && typeof (this.SM2CertDetail as any).validate === 'function') {
      (this.SM2CertDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

