// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudResourceDetailResponseBodyDomainListen extends $dara.Model {
  /**
   * @example
   * 19312542-cn-hangzhou
   */
  certId?: string;
  /**
   * @example
   * 0
   */
  cipherSuite?: number;
  customCiphers?: string[];
  /**
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @example
   * true
   */
  focusHttps?: boolean;
  /**
   * @example
   * true
   */
  http2Enabled?: boolean;
  httpPorts?: number[];
  httpsPorts?: number[];
  /**
   * @example
   * true
   */
  IPv6Enabled?: boolean;
  /**
   * @example
   * share
   */
  protectionResource?: string;
  /**
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  /**
   * @example
   * 1
   */
  xffHeaderMode?: number;
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

export class DescribeHybridCloudResourceDetailResponseBodyDomainRedirectRequestHeaders extends $dara.Model {
  /**
   * @example
   * L2x1ZmZ5L2NvcmUvYXBwcy9tLnl1bmR1bi53YWYuMS9wbHVnaW5z
   */
  key?: string;
  /**
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
  backends?: string[];
  /**
   * @example
   * true
   */
  cnameEnabled?: boolean;
  /**
   * @example
   * 1
   */
  connectTimeout?: number;
  /**
   * @example
   * true
   */
  focusHttpBackend?: boolean;
  /**
   * @example
   * true
   */
  keepalive?: boolean;
  /**
   * @example
   * 1000
   */
  keepaliveRequests?: number;
  /**
   * @example
   * 1
   */
  keepaliveTimeout?: number;
  /**
   * @example
   * iphash
   */
  loadbalance?: string;
  /**
   * @example
   * 1
   */
  readTimeout?: number;
  requestHeaders?: DescribeHybridCloudResourceDetailResponseBodyDomainRedirectRequestHeaders[];
  /**
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @example
   * [{\\"backupRs\\":[],\\"location\\":\\"v3-test\\",\\"locationId\\":1148,\\"rs\\":[\\"39.98.217.197\\",\\"2.2.2.2\\"]}]
   */
  routingRules?: string;
  /**
   * @example
   * true
   */
  sniEnabled?: boolean;
  /**
   * @example
   * eew111
   */
  sniHost?: string;
  /**
   * @example
   * 1
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
      requestHeaders: { 'type': 'array', 'itemType': DescribeHybridCloudResourceDetailResponseBodyDomainRedirectRequestHeaders },
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
  listen?: DescribeHybridCloudResourceDetailResponseBodyDomainListen;
  redirect?: DescribeHybridCloudResourceDetailResponseBodyDomainRedirect;
  /**
   * @example
   * rg-***aby
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
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
  domain?: DescribeHybridCloudResourceDetailResponseBodyDomain;
  /**
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

