// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudResourceDetailResponseBodyDomainListen extends $dara.Model {
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 19312542-cn-hangzhou
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
   * 0
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
   * Indicates whether an exclusive IP address is supported. Valid values:
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Indicates whether HTTPS forced redirect is enabled. Valid values:
   * 
   * - **true**: HTTPS forced redirect is enabled.
   * 
   * - **false**: HTTPS forced redirect is disabled.
   * 
   * @example
   * true
   */
  focusHttps?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled. Valid values:
   * 
   * - **true**: HTTP/2 is enabled.
   * 
   * - **false**: HTTP/2 is disabled.
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The list of available ports for the HTTP protocol. The value is a string. When multiple ports are available, they are returned in the format of **port1,port2,port3**.
   */
  httpPorts?: number[];
  /**
   * @remarks
   * The ports for the HTTPS protocol.
   */
  httpsPorts?: number[];
  /**
   * @remarks
   * Indicates whether IPv6 is enabled. Valid values:
   * 
   * - **true**: IPv6 is enabled.
   * 
   * - **false**: IPv6 is disabled.
   * 
   * @example
   * true
   */
  IPv6Enabled?: boolean;
  /**
   * @remarks
   * The type of protection resource to use. Valid values:
   * 
   * - **share**: shared cluster.
   * 
   * - **gslb**: shared cluster with intelligent load balancing.
   * 
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @remarks
   * The TLS version. Valid values:
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
   * The method that WAF uses to obtain the actual client IP address. Valid values:
   * 
   * - **0**: No Layer 7 proxy is deployed in front of WAF.
   * 
   * - **1**: WAF reads the first value of the X-Forwarded-For (XFF) header field as the client IP address.
   * 
   * - **2**: WAF reads the value of a custom header field that you specify as the client IP address.
   * 
   * @example
   * 1
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The custom header fields used to obtain the client IP address, in the format of [**"header1","header2",……**].
   * 
   * > This parameter is required only when **XffHeaderMode** is set to 2, which indicates that WAF reads the value of a custom header field that you specify in the request header as the client IP address.
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

export class DescribeHybridCloudResourceDetailResponseBodyDomainRedirectBackendPorts extends $dara.Model {
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
   * 
   * - http: HTTP protocol.
   * - https: HTTPS protocol.
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

export class DescribeHybridCloudResourceDetailResponseBodyDomainRedirectRequestHeaders extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * L2x1ZmZ5L2NvcmUvYXBwcy9tLnl1bmR1bi53YWYuMS9wbHVnaW5z
   */
  key?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * 9506360478730
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

export class DescribeHybridCloudResourceDetailResponseBodyDomainRedirect extends $dara.Model {
  /**
   * @remarks
   * The custom port configuration. By default, this is the same as the listening port.
   */
  backendPorts?: DescribeHybridCloudResourceDetailResponseBodyDomainRedirectBackendPorts[];
  /**
   * @remarks
   * The IP address of the origin server or the domain name used for back-to-origin.
   */
  backends?: string[];
  /**
   * @remarks
   * Specifies whether to enable public cloud disaster recovery. Valid values:
   * 
   * - **true**: Public cloud disaster recovery is enabled.
   * 
   * - **false**: Public cloud disaster recovery is disabled.
   * 
   * @example
   * true
   */
  cnameEnabled?: boolean;
  /**
   * @remarks
   * The connection timeout period. Unit: milliseconds.
   * 
   * @example
   * 1
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Indicates whether forced HTTP back-to-origin is enabled. Valid values:
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
   * The number of requests that reuse persistent connections. Valid values: 60 to 1000.
   * 
   * > This specifies how many persistent connections are reused after persistent connections are enabled.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The idle timeout period of persistent connections.
   * 
   * @example
   * 1
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm used for back-to-origin. Valid values:
   * 
   * - **iphash**: IP hash algorithm.
   * 
   * - **roundRobin**: round-robin algorithm.
   * 
   * - **leastTime**: least-time back-to-origin algorithm.
   * 
   * @example
   * iphash
   */
  loadbalance?: string;
  /**
   * @remarks
   * Indicates whether the client source IP preservation feature is enabled.
   * 
   * - true: The client source IP preservation feature is enabled. After this feature is enabled, the backend service can view the originating IP address of the client.
   * - false: The client source IP preservation feature is disabled.
   * 
   * @example
   * false
   */
  proxyProtocol?: boolean;
  /**
   * @remarks
   * The read timeout period of the request.
   * 
   * @example
   * 1
   */
  readTimeout?: number;
  /**
   * @remarks
   * The HTTP request headers.
   */
  requestHeaders?: DescribeHybridCloudResourceDetailResponseBodyDomainRedirectRequestHeaders[];
  /**
   * @remarks
   * Indicates whether WAF retries when back-to-origin fails. Valid values:
   * 
   * - **true**: WAF retries.
   * 
   * - **false**: WAF does not retry.
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * The hybrid cloud forwarding rules, expressed as a string converted from a JSON array. Each element in the JSON array is a structure that contains the following field:
   * - **rs**: Array type.
   * 
   * @example
   * [{\\"backupRs\\":[],\\"location\\":\\"v3-test\\",\\"locationId\\":1148,\\"rs\\":[\\"39.98.217.197\\",\\"2.2.2.2\\"]}]
   */
  routingRules?: string;
  /**
   * @remarks
   * Indicates whether back-to-origin Server Name Indication (SNI) is enabled. Valid values:
   * 
   * - **true**: Back-to-origin SNI is enabled.
   * 
   * - **false**: Back-to-origin SNI is disabled.
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The custom value of the SNI extension field. If the value is empty, the SNI value is not customized, and the value of the **Host** field in the request header is used as the value of the SNI extension field by default.
   * 
   * > This parameter is returned only when **SniStatus** is set to **1**, which indicates that back-to-origin SNI is enabled.
   * 
   * @example
   * eew111
   */
  sniHost?: string;
  /**
   * @remarks
   * The write timeout period. Unit: milliseconds.
   * 
   * @example
   * 1
   */
  writeTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      backendPorts: 'BackendPorts',
      backends: 'Backends',
      cnameEnabled: 'CnameEnabled',
      connectTimeout: 'ConnectTimeout',
      focusHttpBackend: 'FocusHttpBackend',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadbalance: 'Loadbalance',
      proxyProtocol: 'ProxyProtocol',
      readTimeout: 'ReadTimeout',
      requestHeaders: 'RequestHeaders',
      retry: 'Retry',
      routingRules: 'RoutingRules',
      sniEnabled: 'SniEnabled',
      sniHost: 'SniHost',
      writeTimeout: 'WriteTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPorts: { 'type': 'array', 'itemType': DescribeHybridCloudResourceDetailResponseBodyDomainRedirectBackendPorts },
      backends: { 'type': 'array', 'itemType': 'string' },
      cnameEnabled: 'boolean',
      connectTimeout: 'number',
      focusHttpBackend: 'boolean',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadbalance: 'string',
      proxyProtocol: 'boolean',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': DescribeHybridCloudResourceDetailResponseBodyDomainRedirectRequestHeaders },
      retry: 'boolean',
      routingRules: 'string',
      sniEnabled: 'boolean',
      sniHost: 'string',
      writeTimeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.backendPorts)) {
      $dara.Model.validateArray(this.backendPorts);
    }
    if(Array.isArray(this.backends)) {
      $dara.Model.validateArray(this.backends);
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

export class DescribeHybridCloudResourceDetailResponseBodyDomain extends $dara.Model {
  /**
   * @remarks
   * CNAME
   * 
   * @example
   * kdmqyi3ck7xogegxpiyfpb0fj21mgkxn.****.com
   */
  cname?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.*****.com
   */
  domain?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 31323
   */
  id?: number;
  /**
   * @remarks
   * The listening information.
   */
  listen?: DescribeHybridCloudResourceDetailResponseBodyDomainListen;
  /**
   * @remarks
   * The rules for returning response header values.
   */
  redirect?: DescribeHybridCloudResourceDetailResponseBodyDomainRedirect;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-***aby
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1046011128270720
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      id: 'Id',
      listen: 'Listen',
      redirect: 'Redirect',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      id: 'number',
      listen: DescribeHybridCloudResourceDetailResponseBodyDomainListen,
      redirect: DescribeHybridCloudResourceDetailResponseBodyDomainRedirect,
      resourceManagerResourceGroupId: 'string',
      status: 'number',
      uid: 'string',
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

export class DescribeHybridCloudResourceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name information.
   */
  domain?: DescribeHybridCloudResourceDetailResponseBodyDomain;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: DescribeHybridCloudResourceDetailResponseBodyDomain,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domain && typeof (this.domain as any).validate === 'function') {
      (this.domain as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

