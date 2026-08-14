// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebRulesResponseBodyWebRulesGmCert extends $dara.Model {
  certId?: string;
  gmEnable?: number;
  gmOnly?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      gmEnable: 'GmEnable',
      gmOnly: 'GmOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      gmEnable: 'number',
      gmOnly: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebRulesResponseBodyWebRulesProxyTypes extends $dara.Model {
  proxyPorts?: string[];
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

export class DescribeWebRulesResponseBodyWebRulesRealServers extends $dara.Model {
  realServer?: string;
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

export class DescribeWebRulesResponseBodyWebRules extends $dara.Model {
  blackList?: string[];
  ccEnabled?: boolean;
  ccRuleEnabled?: boolean;
  ccTemplate?: string;
  certExpireTime?: number;
  certName?: string;
  certRegion?: string;
  cname?: string;
  customCiphers?: string[];
  domain?: string;
  gmCert?: DescribeWebRulesResponseBodyWebRulesGmCert;
  http2Enable?: boolean;
  http2HttpsEnable?: boolean;
  https2HttpEnable?: boolean;
  ocspEnabled?: boolean;
  policyMode?: string;
  proxyEnabled?: boolean;
  proxyTypes?: DescribeWebRulesResponseBodyWebRulesProxyTypes[];
  punishReason?: number;
  punishStatus?: boolean;
  realServers?: DescribeWebRulesResponseBodyWebRulesRealServers[];
  ssl13Enabled?: boolean;
  sslCiphers?: string;
  sslProtocols?: string;
  tls13CustomCiphers?: string[];
  userCertName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wafProtectionEnable?: boolean;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      ccEnabled: 'CcEnabled',
      ccRuleEnabled: 'CcRuleEnabled',
      ccTemplate: 'CcTemplate',
      certExpireTime: 'CertExpireTime',
      certName: 'CertName',
      certRegion: 'CertRegion',
      cname: 'Cname',
      customCiphers: 'CustomCiphers',
      domain: 'Domain',
      gmCert: 'GmCert',
      http2Enable: 'Http2Enable',
      http2HttpsEnable: 'Http2HttpsEnable',
      https2HttpEnable: 'Https2HttpEnable',
      ocspEnabled: 'OcspEnabled',
      policyMode: 'PolicyMode',
      proxyEnabled: 'ProxyEnabled',
      proxyTypes: 'ProxyTypes',
      punishReason: 'PunishReason',
      punishStatus: 'PunishStatus',
      realServers: 'RealServers',
      ssl13Enabled: 'Ssl13Enabled',
      sslCiphers: 'SslCiphers',
      sslProtocols: 'SslProtocols',
      tls13CustomCiphers: 'Tls13CustomCiphers',
      userCertName: 'UserCertName',
      wafProtectionEnable: 'WafProtectionEnable',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: { 'type': 'array', 'itemType': 'string' },
      ccEnabled: 'boolean',
      ccRuleEnabled: 'boolean',
      ccTemplate: 'string',
      certExpireTime: 'number',
      certName: 'string',
      certRegion: 'string',
      cname: 'string',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      gmCert: DescribeWebRulesResponseBodyWebRulesGmCert,
      http2Enable: 'boolean',
      http2HttpsEnable: 'boolean',
      https2HttpEnable: 'boolean',
      ocspEnabled: 'boolean',
      policyMode: 'string',
      proxyEnabled: 'boolean',
      proxyTypes: { 'type': 'array', 'itemType': DescribeWebRulesResponseBodyWebRulesProxyTypes },
      punishReason: 'number',
      punishStatus: 'boolean',
      realServers: { 'type': 'array', 'itemType': DescribeWebRulesResponseBodyWebRulesRealServers },
      ssl13Enabled: 'boolean',
      sslCiphers: 'string',
      sslProtocols: 'string',
      tls13CustomCiphers: { 'type': 'array', 'itemType': 'string' },
      userCertName: 'string',
      wafProtectionEnable: 'boolean',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.blackList)) {
      $dara.Model.validateArray(this.blackList);
    }
    if(Array.isArray(this.customCiphers)) {
      $dara.Model.validateArray(this.customCiphers);
    }
    if(this.gmCert && typeof (this.gmCert as any).validate === 'function') {
      (this.gmCert as any).validate();
    }
    if(Array.isArray(this.proxyTypes)) {
      $dara.Model.validateArray(this.proxyTypes);
    }
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    if(Array.isArray(this.tls13CustomCiphers)) {
      $dara.Model.validateArray(this.tls13CustomCiphers);
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

export class DescribeWebRulesResponseBody extends $dara.Model {
  requestId?: string;
  totalCount?: number;
  webRules?: DescribeWebRulesResponseBodyWebRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      webRules: 'WebRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      webRules: { 'type': 'array', 'itemType': DescribeWebRulesResponseBodyWebRules },
    };
  }

  validate() {
    if(Array.isArray(this.webRules)) {
      $dara.Model.validateArray(this.webRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

