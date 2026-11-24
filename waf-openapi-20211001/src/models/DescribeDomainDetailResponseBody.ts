// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainDetailResponseBodyCertDetail extends $dara.Model {
  /**
   * @remarks
   * The common name (CN).
   * 
   * @example
   * test.aliyundoc.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the certificate expires. The value is a UNIX timestamp in milliseconds.
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
   * The name of the certificate.
   * 
   * @example
   * test-cert-name
   */
  name?: string;
  /**
   * @remarks
   * All domain names bound to the certificate.
   */
  sans?: string[];
  /**
   * @remarks
   * The effective period of the certificate. The format is a UNIX timestamp (UTC time) in milliseconds.
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
   * The cipher suite type. Valid values:
   * 
   * - **1**: All cipher suites are added.
   * 
   * - **2**: Strong cipher suites are added. This value is available only when TLSVersion is set to tlsv1.2.
   * 
   * - **99**: Custom cipher suites are added. This value is available only when TLSVersion is not set to tlsv1.3.
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
   * Specifies whether TLS 1.3 is supported. Valid values:
   * 
   * - **true**: TLS 1.3 is supported.
   * 
   * - **false**: TLS 1.3 is not supported.
   * 
   * > This parameter is used only when the HttpsPorts parameter is not empty, which indicates that the domain name uses the HTTPS protocol. When TLSVersion is set to tlsv1.3, this value must be set to true.
   * 
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Specifies whether an exclusive IP address is enabled. Valid values:
   * 
   * - **true**: An exclusive IP address is enabled.
   * 
   * - **false**: An exclusive IP address is not enabled.
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Specifies whether forcible HTTPS redirects are enabled. Valid values:
   * 
   * - **true**: Forcible HTTPS redirects are enabled.
   * 
   * - **false**: Forcible HTTPS redirects are not enabled.
   * 
   * @example
   * true
   */
  focusHttps?: boolean;
  /**
   * @remarks
   * Specifies whether HTTP Strict Transport Security (HSTS) includes subdomains. Valid values:
   * 
   * - **true**: HSTS includes subdomains.
   * 
   * - **false**: HSTS does not include subdomains.
   */
  hstsIncludeSubDomain?: boolean;
  /**
   * @remarks
   * The expiration time of HSTS, in seconds.
   * 
   * @example
   * 365000
   */
  hstsMaxAge?: number;
  /**
   * @remarks
   * Specifies whether HSTS preload is enabled. Default value: false. Valid values:
   * - **true**: HSTS preload is enabled.
   * - **false**: HSTS preload is disabled.
   * 
   * @example
   * false
   */
  hstsPreload?: boolean;
  /**
   * @remarks
   * Specifies whether HTTP/2 is enabled. Valid values:
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
   * Specifies whether IPv6 is enabled. Valid values:
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
   * The type of protection resource to be used. Valid values:
   * 
   * - **share**: shared cluster
   * 
   * - **gslb**: shared cluster with intelligent load balancing
   * 
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @remarks
   * Specifies whether only SM clients are allowed to access the domain name. This parameter is used only when SM2Enabled is set to true. Valid values:
   * 
   * - **true**: Only SM clients are allowed to access the domain name.
   * 
   * - **false**: Both SM and non-SM clients are allowed to access the domain name.
   * 
   * @example
   * true
   */
  SM2AccessOnly?: boolean;
  /**
   * @remarks
   * The ID of the SM certificate to be added. This parameter is used only when SM2Enabled is set to true.
   * 
   * @example
   * 123-cn-hangzhou
   */
  SM2CertId?: string;
  /**
   * @remarks
   * Specifies whether SM certificates are enabled. Valid values:
   * 
   * - **true**: SM certificates are enabled.
   * 
   * - **false**: SM certificates are not enabled.
   * 
   * @example
   * true
   */
  SM2Enabled?: boolean;
  /**
   * @remarks
   * The TLS version. Valid values:
   * 
   * - **tlsv1**: Supports TLS 1.0 and later versions. This version provides the highest compatibility but lower security.
   * 
   * - **tlsv1.1**: Supports TLS 1.1 and later versions. This version provides good compatibility and better security.
   * 
   * - **tlsv1.2**: Supports TLS 1.2 and later versions. This version provides good compatibility and the highest security.
   * 
   * - **tlsv1.3**: Supports only TLS 1.3. This version provides the highest security but lower compatibility.
   * 
   * @example
   * tlsv1.2
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The method used by WAF to obtain the actual IP address of the client. Valid values:
   * 
   * - **0**: The client access traffic is not forwarded by other Layer 7 proxies before it reaches WAF.
   * 
   * - **1**: WAF reads the first value of the X-Forwarded-For (XFF) field in the request header as the client IP address.
   * 
   * - **2**: WAF reads the value of a custom field that you specified in the request header as the client IP address.
   * 
   * - **3**: WAF reads the Client IP address in the Proxy Protocol header as the client IP address.
   * 
   * @example
   * 2
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

export class DescribeDomainDetailResponseBodyRedirectBackendConfig extends $dara.Model {
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
   * The listening port.
   * 
   * @example
   * 80
   */
  listenPort?: number;
  /**
   * @remarks
   * The protocol type of the listening port. Valid values:
   * - **http**: HTTP.
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
   * The IP address of the origin server or the back-to-origin domain name of the server for the domain name.
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
   * The IP address of the secondary origin server or the secondary back-to-origin domain name of the server for the domain name.
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
   * The specified custom request header field.
   * 
   * @example
   * aaa
   */
  key?: string;
  /**
   * @remarks
   * The value of the specified custom request header field.
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
   * The list of IP addresses of secondary origin servers or back-to-origin domain names for the domain name.
   */
  backUpBackendList?: string[];
  /**
   * @remarks
   * The custom back-to-origin configurations.
   */
  backendConfig?: DescribeDomainDetailResponseBodyRedirectBackendConfig[];
  /**
   * @remarks
   * The list of IP addresses of the origin servers or back-to-origin domain names of the servers for the domain name.
   */
  backendList?: string[];
  /**
   * @remarks
   * The custom port configurations. By default, the configurations are the same as the listening ports.
   */
  backendPorts?: DescribeDomainDetailResponseBodyRedirectBackendPorts[];
  /**
   * @remarks
   * The back-to-origin addresses for the domain name.
   * 
   * > This parameter will be deprecated soon. We recommend that you use **BackendList** to obtain the relevant information.
   * 
   * @deprecated
   */
  backends?: DescribeDomainDetailResponseBodyRedirectBackends[];
  /**
   * @remarks
   * The secondary back-to-origin addresses for the domain name.
   * 
   * > This parameter will be deprecated soon. We recommend that you use **BackUpBackendList** to obtain the relevant information.
   * 
   * @deprecated
   */
  backupBackends?: DescribeDomainDetailResponseBodyRedirectBackupBackends[];
  /**
   * @remarks
   * The connection timeout period, in seconds. Valid values: 5 to 120.
   * 
   * @example
   * 120
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Specifies whether forcible HTTP back-to-origin routing is enabled. Valid values:
   * 
   * - **true**: Forcible HTTP back-to-origin routing is enabled.
   * 
   * - **false**: Forcible HTTP back-to-origin routing is not enabled.
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @remarks
   * The HTTP/2 back-to-origin configuration.
   * 
   * @example
   * true
   */
  http2Origin?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent connections for HTTP/2 back-to-origin routing.
   * 
   * @example
   * 128
   */
  http2OriginMaxConcurrency?: number;
  /**
   * @remarks
   * Specifies whether persistent connections are maintained. Valid values:
   * 
   * - **true**: Persistent connections are maintained. This is the default value.
   * 
   * - **false**: Persistent connections are not maintained.
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of requests that reuse a persistent connection. Valid values: 60 to 1000.
   * 
   * > This parameter specifies the number of persistent connections that can be reused after persistent connections are enabled.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for idle persistent connections, in seconds. Valid values: 1 to 60. Default value: 15.
   * 
   * > This parameter specifies the duration after which an idle reused persistent connection is released.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm used for back-to-origin routing. Valid values:
   * 
   * - **iphash**: IP hash algorithm
   * 
   * - **roundRobin**: round-robin algorithm
   * 
   * - **leastTime**: least time algorithm
   * 
   * @example
   * iphash
   */
  loadbalance?: string;
  /**
   * @remarks
   * The maximum request body size, in GB. Valid values: 2 to 10. Default value: 2.
   * 
   * > This feature is supported only by the Enterprise Edition.
   * 
   * @example
   * 2
   */
  maxBodySize?: number;
  /**
   * @remarks
   * Specifies whether the feature to preserve the originating IP address of the client is enabled. Valid values:
   * - **true**: The feature is enabled. After this feature is enabled, backend services can view the original IP address of the client.
   * - **false**: The feature is not enabled.
   * 
   * @example
   * false
   */
  proxyProtocol?: boolean;
  /**
   * @remarks
   * The read timeout period, in seconds. Valid values: 5 to 1800.
   * 
   * @example
   * 200
   */
  readTimeout?: number;
  /**
   * @remarks
   * The traffic marking fields and values for the domain name, which are used to mark the traffic processed by WAF.
   */
  requestHeaders?: DescribeDomainDetailResponseBodyRedirectRequestHeaders[];
  /**
   * @remarks
   * Specifies whether to retry when WAF fails to route traffic back to the origin server. Valid values:
   * 
   * - **true**: Retries are performed. This is the default value.
   * 
   * - **false**: Retries are not performed.
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * Specifies whether back-to-origin Server Name Indication (SNI) is enabled. Valid values:
   * 
   * - **true**: Back-to-origin SNI is enabled.
   * 
   * - **false**: Back-to-origin SNI is not enabled. This is the default value.
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The value of the custom SNI extension field.
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * Specifies whether WAF is allowed to overwrite the WL-Proxy-Client-IP header. Valid values:
   * 
   * - **true**: WAF is allowed to overwrite the header. This is the default value.
   * 
   * - **false**: WAF is not allowed to overwrite the header.
   * 
   * @example
   * true
   */
  WLProxyClientIp?: boolean;
  /**
   * @remarks
   * Specifies whether WAF is allowed to overwrite the Web-Server-Type header. Valid values:
   * 
   * - **true**: WAF is allowed to overwrite the header. This is the default value.
   * 
   * - **false**: WAF is not allowed to overwrite the header.
   * 
   * @example
   * true
   */
  webServerType?: boolean;
  /**
   * @remarks
   * The write timeout period, in seconds. Valid values: 5 to 1800.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  /**
   * @remarks
   * Specifies whether WAF is allowed to overwrite the X-Client-IP header. Valid values:
   * 
   * - **true**: WAF is allowed to overwrite the header. This is the default value.
   * 
   * - **false**: WAF is not allowed to overwrite the header.
   * 
   * @example
   * true
   */
  XClientIp?: boolean;
  /**
   * @remarks
   * Specifies whether WAF is allowed to overwrite the X-True-IP header. Valid values:
   * 
   * - **true**: WAF is allowed to overwrite the header. This is the default value.
   * 
   * - **false**: WAF is not allowed to overwrite the header.
   * 
   * @example
   * true
   */
  XTrueIp?: boolean;
  /**
   * @remarks
   * Specifies whether the X-Forwarded-Proto header is used to pass the protocol used by WAF. Valid values:
   * 
   * - **true**: The protocol used by WAF is passed. This is the default value.
   * 
   * - **false**: The protocol used by WAF is not passed.
   * 
   * @example
   * true
   */
  xffProto?: boolean;
  static names(): { [key: string]: string } {
    return {
      backUpBackendList: 'BackUpBackendList',
      backendConfig: 'BackendConfig',
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
      backendConfig: { 'type': 'array', 'itemType': DescribeDomainDetailResponseBodyRedirectBackendConfig },
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
    if(Array.isArray(this.backendConfig)) {
      $dara.Model.validateArray(this.backendConfig);
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
   * The common name (CN).
   * 
   * @example
   * test.aliyundoc.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the certificate expires. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1665590400000
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
   * The name of the certificate.
   * 
   * @example
   * test-sm2-cert-name
   */
  name?: string;
  /**
   * @remarks
   * All domain names bound to the certificate.
   */
  sans?: string[];
  /**
   * @remarks
   * The effective period of the certificate. The format is a UNIX timestamp (UTC time) in milliseconds.
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
   * The CNAME address assigned by WAF to the domain name.
   * 
   * @example
   * xxxxxcvdaf.****.com
   */
  cname?: string;
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
   * The listener configuration information.
   */
  listen?: DescribeDomainDetailResponseBodyListen;
  /**
   * @remarks
   * The forwarding configuration information.
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
   * The SM2 certificate information.
   */
  SM2CertDetail?: DescribeDomainDetailResponseBodySM2CertDetail;
  /**
   * @remarks
   * The domain name status. Valid values:
   * 
   * - **1**: The domain name is in a normal state.
   * 
   * - **2**: The domain name is being created.
   * 
   * - **3**: The domain name is being modified.
   * 
   * - **4**: The domain name is being released.
   * 
   * - **5**: Traffic forwarding for the domain name is stopped.
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

