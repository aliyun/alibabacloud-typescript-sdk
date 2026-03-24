// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudResourcesResponseBodyDomainsListen extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 72***76-cn-hangzhou
   */
  certId?: string;
  /**
   * @remarks
   * The type of the cipher suite. Valid values:
   * 
   * - **1**: all cipher suites.
   * 
   * - **2**: strong cipher suites.
   * 
   * - **99**: custom cipher suites.
   * 
   * @example
   * 1
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The custom cipher suites to be added.
   * 
   * > This parameter is returned only when **CipherSuite** is set to **99**.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Indicates whether TLS 1.3 is supported. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Indicates whether an exclusive IP address is used. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Indicates whether HTTPS to HTTP redirection is enabled. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * false
   */
  focusHttps?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * false
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The list of HTTP listener ports.
   */
  httpPorts?: number[];
  /**
   * @remarks
   * The list of HTTPS ports.
   */
  httpsPorts?: number[];
  /**
   * @remarks
   * Indicates whether IPv6 is enabled. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * false
   */
  IPv6Enabled?: boolean;
  /**
   * @remarks
   * The type of the protection resource. Valid values:
   * 
   * - **share**: shared cluster.
   * 
   * - **gslb**: intelligent load balancing for a shared cluster.
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
   * tlsv1.2
   */
  TLSVersion?: string;
  /**
   * @remarks
   * The method that WAF uses to obtain the client IP address. Valid values:
   * 
   * - **0**: No Layer 7 proxies are deployed in front of WAF.
   * 
   * - **1**: WAF reads the first value of the X-Forwarded-For (XFF) header field as the client IP address.
   * 
   * - **2**: WAF reads the value of a custom header field as the client IP address.
   * 
   * @example
   * 0
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The list of custom header fields that are used to obtain the client IP address. The value is in the \\`["header1","header2",...]\\` format.
   * 
   * > This parameter is returned only when XffHeaderMode is set to **2**.
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

export class DescribeHybridCloudResourcesResponseBodyDomainsRedirectRequestHeaders extends $dara.Model {
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

export class DescribeHybridCloudResourcesResponseBodyDomainsRedirect extends $dara.Model {
  /**
   * @remarks
   * The IP addresses or domain names of the origin servers for back-to-origin.
   */
  backends?: string[];
  /**
   * @remarks
   * Indicates whether public cloud disaster recovery is enabled. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  cnameEnabled?: boolean;
  /**
   * @remarks
   * The connection timeout period. Unit: seconds. Valid values: 5 to 120.
   * 
   * @example
   * 120
   */
  connectTimeout?: number;
  /**
   * @remarks
   * Indicates whether back-to-origin requests are forcefully sent over HTTP. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @remarks
   * Indicates whether persistent connections are enabled. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The maximum number of requests that can be sent over a persistent connection. Valid values: 60 to 1000.
   * 
   * > After the specified number of requests are sent, the persistent connection is closed and a new connection is established.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for an idle persistent connection. Valid values: 1 to 60. Default value: 15. Unit: seconds.
   * 
   * > An idle persistent connection is released after the timeout period expires.
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
   * - **leastTime**: the least time algorithm.
   * 
   * @example
   * iphash
   */
  loadbalance?: string;
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
   * The custom header field and value that are used to mark the traffic that is processed by WAF.
   */
  requestHeaders?: DescribeHybridCloudResourcesResponseBodyDomainsRedirectRequestHeaders[];
  /**
   * @remarks
   * Indicates whether WAF retries forwarding requests when a back-to-origin request fails. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * The forwarding rules for the hybrid cloud. The value is a string that consists of a JSON array. Each element in the array is a struct that contains the following fields:
   * 
   * - **rs**: The back-to-origin IP addresses or CNAMEs. This field is of the Array type.
   * 
   * - **location**: The name of the protection node. This field is of the String type.
   * 
   * - **locationId**: The ID of the protection node. This field is of the Long type.
   * 
   * @example
   * [
   *       {
   *             "rs": [
   *                   "1.1.XX.XX"
   *             ],
   *             "locationId": 535,
   *             "location": "test1111"
   *       }
   * ]
   */
  routingRules?: string;
  /**
   * @remarks
   * Indicates whether back-to-origin Server Name Indication (SNI) is enabled. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The custom value of the SNI extension field. If this parameter is not specified, the value of the **Host** field in the request header is used as the value of the SNI extension field by default.
   * 
   * > This parameter is returned only when **SniEnabled** is set to **true**.
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * The write timeout period. Unit: seconds. Valid values: 5 to 1800.
   * 
   * @example
   * 200
   */
  writeTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      backends: 'Backends',
      cnameEnabled: 'CnameEnabled',
      connectTimeout: 'ConnectTimeout',
      focusHttpBackend: 'FocusHttpBackend',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadbalance: 'Loadbalance',
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
      backends: { 'type': 'array', 'itemType': 'string' },
      cnameEnabled: 'boolean',
      connectTimeout: 'number',
      focusHttpBackend: 'boolean',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadbalance: 'string',
      readTimeout: 'number',
      requestHeaders: { 'type': 'array', 'itemType': DescribeHybridCloudResourcesResponseBodyDomainsRedirectRequestHeaders },
      retry: 'boolean',
      routingRules: 'string',
      sniEnabled: 'boolean',
      sniHost: 'string',
      writeTimeout: 'number',
    };
  }

  validate() {
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

export class DescribeHybridCloudResourcesResponseBodyDomains extends $dara.Model {
  /**
   * @remarks
   * The CNAME that is assigned by WAF to the domain name.
   * 
   * > This parameter is returned only when **CnameEnabled** is set to true.
   * 
   * @example
   * 50fqmu1ci7g0xtiyxnrhgx6qdhmn****.yundunwaf5.com
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
   * The ID of the domain name configuration.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * The listener configuration.
   */
  listen?: DescribeHybridCloudResourcesResponseBodyDomainsListen;
  /**
   * @remarks
   * The forwarding configuration.
   */
  redirect?: DescribeHybridCloudResourcesResponseBodyDomainsRedirect;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmvtc5z52****
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * - **1**: The domain name is in a normal state.
   * 
   * - **2**: The domain name is being created.
   * 
   * - **3**: The domain name is being modified.
   * 
   * - **4**: The domain name is being released.
   * 
   * - **5**: Forwarding is disabled for the domain name.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 130715431409****
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
      listen: DescribeHybridCloudResourcesResponseBodyDomainsListen,
      redirect: DescribeHybridCloudResourcesResponseBodyDomainsRedirect,
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

export class DescribeHybridCloudResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of domain names.
   */
  domains?: DescribeHybridCloudResourcesResponseBodyDomains[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 98D2AA9A-5959-5CCD-83E3-B6606232A2BE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 24
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeHybridCloudResourcesResponseBodyDomains },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

