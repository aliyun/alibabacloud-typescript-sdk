// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainsResponseBodyDomainsProxyTypeList extends $dara.Model {
  proxyPorts?: string[];
  /**
   * @example
   * http
   */
  proxyType?: string;
  static names(): { [key: string]: string } {
    return {
      proxyPorts: 'ProxyPorts',
      proxyType: 'ProxyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyPorts: { 'type': 'array', 'itemType': 'string' },
      proxyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.proxyPorts)) {
      $dara.Model.validateArray(this.proxyPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsRealServers extends $dara.Model {
  /**
   * @example
   * 1.1.1.1
   */
  realServer?: string;
  /**
   * @example
   * 0
   */
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      realServer: 'RealServer',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realServer: 'string',
      rsType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomains extends $dara.Model {
  blackList?: string[];
  /**
   * @example
   * true
   */
  ccEnabled?: boolean;
  /**
   * @example
   * true
   */
  ccRuleEnabled?: boolean;
  /**
   * @example
   * normal
   */
  ccTemplate?: string;
  /**
   * @example
   * testCertName
   */
  certName?: string;
  certRegion?: string;
  /**
   * @example
   * xxxxxxx.aliyunddos1006.com
   */
  cname?: string;
  /**
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * true
   */
  http2Enable?: boolean;
  proxyTypeList?: DescribeDomainsResponseBodyDomainsProxyTypeList[];
  realServers?: DescribeDomainsResponseBodyDomainsRealServers[];
  /**
   * @example
   * xx
   */
  sslCiphers?: string;
  /**
   * @example
   * xx
   */
  sslProtocols?: string;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      ccEnabled: 'CcEnabled',
      ccRuleEnabled: 'CcRuleEnabled',
      ccTemplate: 'CcTemplate',
      certName: 'CertName',
      certRegion: 'CertRegion',
      cname: 'Cname',
      domain: 'Domain',
      http2Enable: 'Http2Enable',
      proxyTypeList: 'ProxyTypeList',
      realServers: 'RealServers',
      sslCiphers: 'SslCiphers',
      sslProtocols: 'SslProtocols',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: { 'type': 'array', 'itemType': 'string' },
      ccEnabled: 'boolean',
      ccRuleEnabled: 'boolean',
      ccTemplate: 'string',
      certName: 'string',
      certRegion: 'string',
      cname: 'string',
      domain: 'string',
      http2Enable: 'boolean',
      proxyTypeList: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsProxyTypeList },
      realServers: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsRealServers },
      sslCiphers: 'string',
      sslProtocols: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.blackList)) {
      $dara.Model.validateArray(this.blackList);
    }
    if(Array.isArray(this.proxyTypeList)) {
      $dara.Model.validateArray(this.proxyTypeList);
    }
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    if(Array.isArray(this.whiteList)) {
      $dara.Model.validateArray(this.whiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBody extends $dara.Model {
  domains?: DescribeDomainsResponseBodyDomains[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomains },
      requestId: 'string',
      total: 'number',
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

