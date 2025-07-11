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
   * The types of cipher suites that are added. Valid values:
   * 
   * *   **1:** all cipher suites.
   * *   **2:** strong cipher suites.
   * *   **99:** custom cipher suites.
   * 
   * @example
   * 1
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The custom cipher suites.
   * 
   * >  This parameter is returned only if the value of **CipherSuite** is **99**.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Indicates whether TLS 1.3 is supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Indicates whether exclusive IP addresses are supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Indicates whether the HTTP to HTTPS redirection feature is enabled for the domain name. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  focusHttps?: boolean;
  /**
   * @remarks
   * Indicates whether HTTP/2 is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
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
   * Specifies whether to enable IPv6. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  IPv6Enabled?: boolean;
  /**
   * @remarks
   * The type of the protection resource. Valid values:
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
   * The method that is used to obtain the actual IP address of a client. Valid values:
   * 
   * *   **0**: No Layer 7 proxies are deployed in front of WAF.
   * *   **1**: WAF reads the first value of the X-Forwarded-For (XFF) header field as the actual IP address of the client.
   * *   **2**: WAF reads the value of a custom header field as the actual IP address of the client.
   * 
   * @example
   * 0
   */
  xffHeaderMode?: number;
  /**
   * @remarks
   * The custom header fields that are used to obtain the actual IP addresses of clients. The value is in the ["header1","header2",...] format.
   * 
   * >  This parameter is returned only if the value of **XffHeaderMode** is 2.
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

export class DescribeHybridCloudResourcesResponseBodyDomainsRedirect extends $dara.Model {
  /**
   * @remarks
   * The IP addresses or domain names of the origin server.
   */
  backends?: string[];
  /**
   * @remarks
   * Indicates whether the public cloud disaster recovery feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  cnameEnabled?: boolean;
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
   * Indicates whether the HTTPS to HTTP redirection feature is enabled for back-to-origin requests. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @remarks
   * Indicates whether the persistent connection feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @remarks
   * The number of reused persistent connections. Valid values: 60 to 1000.
   * 
   * >  This parameter indicates the number of reused persistent connections after the persistent connection feature is enabled.
   * 
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @remarks
   * The timeout period for persistent connections that are in the Idle state. Unit: seconds. Valid values: 1 to 60. Default value: 15.
   * 
   * >  This parameter indicates the period of time during which a reused persistent connection can remain in the Idle state before the persistent connection is released.
   * 
   * @example
   * 15
   */
  keepaliveTimeout?: number;
  /**
   * @remarks
   * The load balancing algorithm that is used to forward requests to the origin server. Valid values:
   * 
   * *   **iphash**
   * *   **roundRobin**
   * *   **leastTime**
   * 
   * @example
   * iphash
   */
  loadbalance?: string;
  /**
   * @remarks
   * The timeout period for read connections. Unit: seconds. Valid values: 5 to 1800.
   * 
   * @example
   * 200
   */
  readTimeout?: number;
  /**
   * @remarks
   * The key-value pair that is used to label requests that pass through WAF.
   */
  requestHeaders?: DescribeHybridCloudResourcesResponseBodyDomainsRedirectRequestHeaders[];
  /**
   * @remarks
   * Indicates whether WAF retries forwarding requests if requests fail to be forwarded to the origin server. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @remarks
   * The forwarding rules that are configured for the domain name. This parameter is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
   * 
   * *   **rs**: the back-to-origin IP addresses or CNAMEs. The value is of the ARRAY type.
   * *   **location**: the name of the protection node. The value is of the STRING type.
   * *   **locationId**: the ID of the protection node. The value is of the LONG type.
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
   * Indicates whether the origin Server Name Indication (SNI) feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @remarks
   * The value of the custom SNI field. If the parameter is left empty, the value of the **Host** field in the request header is automatically used as the value of the SNI field.
   * 
   * >  This parameter is returned only if the value of **SniEnabled** is **true**.
   * 
   * @example
   * www.aliyundoc.com
   */
  sniHost?: string;
  /**
   * @remarks
   * The timeout period for write connections. Unit: seconds. Valid values: 5 to 1800.
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
   * The CNAME assigned by WAF.
   * 
   * >  This parameter is returned only if the value of **CnameEnabled** is true.
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
   * The access ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The listeners.
   */
  listen?: DescribeHybridCloudResourcesResponseBodyDomainsListen;
  /**
   * @remarks
   * The configurations of the forwarding rule.
   */
  redirect?: DescribeHybridCloudResourcesResponseBodyDomainsRedirect;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfmvtc5z52****
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **1:** The domain name is in a normal state.
   * *   **2:** The domain name is being created.
   * *   **3:** The domain name is being modified.
   * *   **4:** The domain name is being released.
   * *   **5:** WAF no longer forwards the traffic of the domain name.
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
   * The domain names.
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
   * The total number of entries that are returned.
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

