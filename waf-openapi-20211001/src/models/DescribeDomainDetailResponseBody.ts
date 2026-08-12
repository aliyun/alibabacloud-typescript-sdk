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
   * The time when the certificate expires. The value is a UNIX timestamp (UTC). Unit: milliseconds.
   * 
   * @example
   * 1685590400000
   */
  endTime?: number;
  /**
   * @remarks
   * The SSL certificate ID.
   * 
   * @example
   * 123-cn-hangzhou
   */
  id?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * test-cert-name
   */
  name?: string;
  /**
   * @remarks
   * All domain names that are bound to the certificate.
   */
  sans?: string[];
  /**
   * @remarks
   * The effective period of the certificate. The value is in the format of a UNIX timestamp (UTC). Unit: milliseconds.
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
   * The type of the cipher suite. Valid values:
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
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Indicates whether an exclusive IP address is enabled. Valid values:
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
   * Indicates whether HTTPS forced redirect is enabled. Valid values:
   * 
   * @example
   * true
   */
  focusHttps?: boolean;
  /**
   * @remarks
   * Indicates whether HSTS includes subdomains. Valid values:
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
   * Indicates whether HSTS preloading is enabled. This feature is disabled by default. Valid values:
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
   * The listening port for the HTTP protocol.
   */
  httpPorts?: number[];
  /**
   * @remarks
   * The listening port for the HTTPS protocol.
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
   * The type of protection resource to use. Valid values:
   * 
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @remarks
   * Indicates whether only SM client access is allowed. This parameter is used only when SM2Enable is set to true.
   * 
   * @example
   * true
   */
  SM2AccessOnly?: boolean;
  /**
   * @remarks
   * The ID of the China Encryption Standard (SM) certificate to add. This parameter is used only when SM2Enable is set to true.
   * 
   * @example
   * 123-cn-hangzhou
   */
  SM2CertId?: string;
  /**
   * @remarks
   * Indicates whether the China Encryption Standard (SM) certificate is enabled. Valid values:
   * 
   * @example
   * true
   */
  SM2Enabled?: boolean;
  /**
   * @remarks
   * The TLS version. Valid values:
   * 
   * - **tlsv1**: Supports TLS 1.0 and later. Provides the highest compatibility and the lowest security.
   * 
   * - **tlsv1.1**: Supports TLS 1.1 and later. Provides good compatibility and good security.
   * 
   * - **tlsv1.2**: Supports TLS 1.2 and later. Provides good compatibility and the highest security.
   * 
   * - **tlsv1.3**: Supports only TLS 1.3. Provides the highest security and the lowest compatibility.
   * 
   * @example
   * tlsv1.2
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The method that WAF uses to obtain the originating IP address of the client. Valid values:
   * 
   * - **0**: The client access traffic is not forwarded by other Layer 7 proxies before reaching WAF.
   * 
   * - **1**: WAF reads the first value in the X-Forwarded-For (XFF) header field of the request as the client IP address.
   * 
   * - **2**: WAF reads the value of a custom header field that you specify in the request as the client IP address.
   * 
   * - **3**: WAF reads the Client IP from the Proxy Protocol header as the client IP address.
   * 
   * @example
   * 2
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The custom header fields used to obtain the client IP address.
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
   * The protocol type of the listener port. Valid values:
   * 
   * - **http**: HTTP protocol.
   * - **https**: HTTPS protocol.
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
   * The IP address or domain name of the origin server for the domain name.
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
   * The IP address or domain name of the secondary origin server for the domain name.
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

export class DescribeDomainDetailResponseBodyRedirect extends $dara.Model {
  /**
   * @remarks
   * The list of backup origin server IP addresses or back-to-origin domain names for the domain name.
   */
  backUpBackendList?: string[];
  /**
   * @remarks
   * The list of origin server IP addresses or back-to-origin domain names for the domain name.
   */
  backendList?: string[];
  /**
   * @remarks
   * The custom port configuration. By default, the port is the same as the listener port.
   */
  backendPorts?: DescribeDomainDetailResponseBodyRedirectBackendPorts[];
  /**
   * @remarks
   * The back-to-origin addresses of the domain name.
   * 
   * @deprecated
   */
  backends?: DescribeDomainDetailResponseBodyRedirectBackends[];
  /**
   * @remarks
   * The secondary origin addresses of the domain name.
   * 
   * > This parameter is about to be deprecated. Use **BackUpBackendList** to obtain the related information.
   * 
   * @deprecated
   */
  backupBackends?: DescribeDomainDetailResponseBodyRedirectBackupBackends[];
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
   * Indicates whether forced HTTP back-to-origin is enabled. Valid values:
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
   * Indicates whether HTTP/2 back-to-origin is enabled.
   * 
   * @example
   * true
   */
  http2Origin?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent connections for HTTP/2 back-to-origin.
   * 
   * @example
   * 128
   */
  http2OriginMaxConcurrency?: number;
  /**
   * @remarks
   * Specifies whether to keep the connection alive. Valid values:
   * 
   * - **true** (default): The connection is kept alive.
   * 
   * - **false**: The connection is not kept alive.
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of requests that reuse a persistent connection. Valid values: 60 to 1000.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The idle timeout period for persistent connections. Valid values: 1 to 60. Default value: 15. Unit: seconds.
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
   * - **roundRobin**: round-robin algorithm.
   * 
   * - **leastTime**: Least Time algorithm.
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
   * Indicates whether the client source IP address preservation feature is enabled.
   * - **true**: The client source IP address preservation feature is enabled. After this feature is enabled, backend services can view the original IP address of the client.
   * - **false**: The client source IP address preservation feature is not enabled.
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
   * The traffic tag fields and values of the domain name, which are used to tag traffic processed by WAF.
   */
  requestHeaders?: DescribeDomainDetailResponseBodyRedirectRequestHeaders[];
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
   * Indicates whether Server Name Indication (SNI) is enabled for back-to-origin requests. Valid values:
   * 
   * - **true**: SNI is enabled for back-to-origin requests.
   * 
   * - **false** (default): SNI is not enabled for back-to-origin requests.
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
   * Specifies whether WAF is allowed to overwrite the Web-Server-Type header. Valid values:
   * 
   * - **true** (default): WAF is allowed to overwrite the header.
   * 
   * - **false**: WAF is not allowed to overwrite the header.
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
   * Specifies whether WAF is allowed to overwrite X-Client-IP. Valid values:
   * 
   * - **true** (default): WAF is allowed to overwrite the header.
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
   * - **true** (default): WAF is allowed to overwrite the header.
   * 
   * - **false**: WAF is not allowed to overwrite the header.
   * 
   * @example
   * true
   */
  XTrueIp?: boolean;
  /**
   * @remarks
   * Indicates whether X-Forward-For-Proto is used to pass the protocol used by WAF. Valid values:
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
   * The common name (CN).
   * 
   * @example
   * test.aliyundoc.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the certificate expires. The value is a UNIX timestamp (UTC). Unit: milliseconds.
   * 
   * @example
   * 1665590400000
   */
  endTime?: number;
  /**
   * @remarks
   * The SSL certificate ID.
   * 
   * @example
   * 123-cn-hangzhou
   */
  id?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * test-sm2-cert-name
   */
  name?: string;
  /**
   * @remarks
   * All domain names that are bound to the certificate.
   */
  sans?: string[];
  /**
   * @remarks
   * The effective period of the certificate. The value is in the format of a UNIX timestamp (UTC). Unit: milliseconds.
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
   * The SSL certificate details.
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
   * The domain name.
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
   * The listener configuration.
   */
  listen?: DescribeDomainDetailResponseBodyListen;
  /**
   * @remarks
   * The forwarding configuration.
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
   * The Alibaba Cloud resource group ID.
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

