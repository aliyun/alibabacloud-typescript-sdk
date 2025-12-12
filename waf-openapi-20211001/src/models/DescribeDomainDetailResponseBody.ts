// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainDetailResponseBodyCertDetail extends $dara.Model {
  /**
   * @remarks
   * The domain name of your website.
   * 
   * @example
   * test.aliyundoc.com
   */
  commonName?: string;
  /**
   * @remarks
   * The end of the validity period of the SSL certificate. The value is in the UNIX timestamp format. Unit: milliseconds.
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
   * All domain names that are bound to the certificate.
   */
  sans?: string[];
  /**
   * @remarks
   * The beginning of the validity period of the SSL certificate. The value is in the UNIX timestamp format. Unit: milliseconds.
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
   * The type of the cipher suites. Valid values:
   * 
   * *   **1:** all cipher suites.
   * *   **2:** strong cipher suites.
   * *   **99:** custom cipher suites.
   * 
   * @example
   * 2
   */
  cipherSuite?: number;
  /**
   * @remarks
   * An array of custom cipher suites.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Indicates whether TLS 1.3 is supported. Valid values:
   * 
   * *   **true:** TLS 1.3 is supported.
   * *   **false:** TLS 1.3 is not supported.
   * 
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Indicates whether an exclusive IP address is enabled. Valid values:
   * 
   * *   **true:** An exclusive IP address is enabled for the domain name.
   * *   **false:** No exclusive IP addresses are enabled for the domain name.
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP to HTTPS redirection is enabled for the domain name. Valid values:
   * 
   * *   **true:** HTTP to HTTPS redirection is enabled.
   * *   **false:** HTTP to HTTPS redirection is disabled.
   * 
   * @example
   * true
   */
  focusHttps?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled. Valid values:
   * 
   * *   **true:** HTTP/2 is enabled.
   * *   **false:** HTTP/2 is disabled.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * An array of HTTP listener ports.
   */
  httpPorts?: number[];
  /**
   * @remarks
   * An array of HTTPS listener ports.
   */
  httpsPorts?: number[];
  /**
   * @remarks
   * Indicates whether IPv6 is enabled. Valid values:
   * 
   * *   **true:** IPv6 is enabled.
   * *   **false:** IPv6 is disabled.
   * 
   * @example
   * true
   */
  IPv6Enabled?: boolean;
  /**
   * @remarks
   * The type of protection resource that is used. Valid values:
   * 
   * *   **share:** shared cluster.
   * *   **gslb:** shared cluster-based intelligent load balancing.
   * 
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @remarks
   * Indicates whether only SM certificate-based clients can access the domain name. This parameter is returned only if the value of SM2Enabled is true. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  SM2AccessOnly?: boolean;
  /**
   * @remarks
   * The ID of the SM certificate that is added. This parameter is returned only if the value of SM2Enabled is true.
   * 
   * @example
   * 123-cn-hangzhou
   */
  SM2CertId?: string;
  /**
   * @remarks
   * Indicates whether SM certificate-based verification is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  SM2Enabled?: boolean;
  /**
   * @remarks
   * The version of the Transport Layer Security (TLS) protocol. Valid values:
   * 
   * *   **tlsv1**
   * *   **tlsv1.1**
   * *   **tlsv1.2**
   * 
   * @example
   * tlsv1.2
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The method that WAF uses to obtain the actual IP address of a client. Valid values:
   * 
   * *   **0:** No Layer 7 proxies are deployed in front of WAF.
   * *   **1:** WAF reads the first value of the X-Forwarded-For (XFF) header field as the actual IP address of the client.
   * *   **2:** WAF reads the value of a custom header field as the actual IP address of the client.
   * 
   * @example
   * 2
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * An array of custom header fields that are used to obtain the actual IP address of a client.
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
  backendPort?: number;
  listenPort?: number;
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
   * The back-to-origin IP address or domain name.
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
   * The custom header field.
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
  backUpBackendList?: string[];
  backendList?: string[];
  backendPorts?: DescribeDomainDetailResponseBodyRedirectBackendPorts[];
  /**
   * @remarks
   * An array of addresses of origin servers.
   * 
   * @deprecated
   */
  backends?: DescribeDomainDetailResponseBodyRedirectBackends[];
  /**
   * @remarks
   * An array of HTTPS listener ports.
   * 
   * @deprecated
   */
  backupBackends?: DescribeDomainDetailResponseBodyRedirectBackupBackends[];
  /**
   * @remarks
   * The timeout period of the connection. Unit: seconds. Valid values: 5 to 120.
   * 
   * @example
   * 120
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Indicates whether HTTPS to HTTP redirection is enabled for back-to-origin requests of the domain name. Valid values:
   * 
   * *   **true:** HTTPS to HTTP redirection for back-to-origin requests of the domain name is enabled.
   * *   **false:** HTTPS to HTTP redirection for back-to-origin requests of the domain name is disabled.
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  http2Origin?: boolean;
  /**
   * @example
   * 128
   */
  http2OriginMaxConcurrency?: number;
  /**
   * @remarks
   * Indicates whether the persistent connection feature is enabled. Valid values:
   * 
   * *   **true:** The persistent connection feature is enabled. This is the default value.
   * *   **false:** The persistent connection feature is disabled.
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of reused persistent connections. Valid values: 60 to 1000.
   * 
   * >  This parameter specifies the number of reused persistent connections when you enable the persistent connection feature.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period of persistent connections that are in the Idle state. Valid values: 1 to 60. Default value: 15. Unit: seconds.
   * 
   * >  This parameter specifies the period of time during which a reused persistent connection is allowed to remain in the Idle state before the persistent connection is released.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm that is used when WAF forwards requests to the origin server. Valid values:
   * 
   * *   **ip_hash:** the IP hash algorithm.
   * *   **roundRobin:** the round-robin algorithm.
   * *   **leastTime:** the least response time algorithm.
   * 
   * @example
   * iphash
   */
  loadbalance?: string;
  /**
   * @example
   * 2
   */
  maxBodySize?: number;
  /**
   * @remarks
   * The read timeout period. Unit: seconds. Valid values: 5 to 1800.
   * 
   * @example
   * 200
   */
  readTimeout?: number;
  /**
   * @remarks
   * An array of key-value pairs that are used to mark the requests that pass through the WAF instance.
   */
  requestHeaders?: DescribeDomainDetailResponseBodyRedirectRequestHeaders[];
  /**
   * @remarks
   * Indicates whether WAF retries when requests fail to be forwarded to the origin server. Valid values:
   * 
   * *   **true:** WAF retries. This is the default value.
   * *   **false:** WAF does not retry.
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * Indicates whether origin Server Name Indication (SNI) is enabled. Valid values:
   * 
   * *   **true:** Origin SNI is enabled.
   * *   **false:** Origin SNI is disabled. This is the default value.
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The value of the custom SNI field.
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  WLProxyClientIp?: boolean;
  webServerType?: boolean;
  /**
   * @remarks
   * The write timeout period. Unit: seconds. Valid values: 5 to 1800.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  XClientIp?: boolean;
  XTrueIp?: boolean;
  /**
   * @remarks
   * Indicates whether the X-Forward-For-Proto header is used to identify the protocol used by WAF to forward requests to the origin server. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
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
   * The domain name of your website.
   * 
   * @example
   * test.aliyundoc.com
   */
  commonName?: string;
  /**
   * @remarks
   * The end of the validity period of the SSL certificate. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * The name of the SSL certificate.
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
   * The beginning of the validity period of the SSL certificate. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * The CNAME that is assigned by WAF to the domain name.
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
  domainId?: string;
  /**
   * @remarks
   * The configurations of the listeners.
   */
  listen?: DescribeDomainDetailResponseBodyListen;
  /**
   * @remarks
   * The configurations of the forwarding rule.
   */
  redirect?: DescribeDomainDetailResponseBodyRedirect;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BAEF9CA9-66A0-533E-BD09-5D5D7AA8****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The information about the SM certificate.
   */
  SM2CertDetail?: DescribeDomainDetailResponseBodySM2CertDetail;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **1:** The domain name is in a normal state.
   * *   **2:** The domain name is being created.
   * *   **3:** The domain name is being modified.
   * *   **4:** The domain name is being released.
   * *   **5:** WAF no longer forwards traffic of the domain name.
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

