// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainResourceResponseBodyWebRulesProxyTypes extends $dara.Model {
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

export class DescribeDomainResourceResponseBodyWebRules extends $dara.Model {
  blackList?: string[];
  ccEnabled?: boolean;
  ccRuleEnabled?: boolean;
  ccTemplate?: string;
  certName?: string;
  cname?: string;
  customCiphers?: string[];
  domain?: string;
  http2Enable?: boolean;
  http2HttpsEnable?: boolean;
  https2HttpEnable?: boolean;
  httpsExt?: string;
  instanceIds?: string[];
  ocspEnabled?: boolean;
  policyMode?: string;
  proxyEnabled?: boolean;
  proxyTypes?: DescribeDomainResourceResponseBodyWebRulesProxyTypes[];
  punishReason?: number;
  punishStatus?: boolean;
  realServers?: string[];
  rsType?: number;
  ssl13Enabled?: boolean;
  sslCiphers?: string;
  sslProtocols?: string;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      ccEnabled: 'CcEnabled',
      ccRuleEnabled: 'CcRuleEnabled',
      ccTemplate: 'CcTemplate',
      certName: 'CertName',
      cname: 'Cname',
      customCiphers: 'CustomCiphers',
      domain: 'Domain',
      http2Enable: 'Http2Enable',
      http2HttpsEnable: 'Http2HttpsEnable',
      https2HttpEnable: 'Https2HttpEnable',
      httpsExt: 'HttpsExt',
      instanceIds: 'InstanceIds',
      ocspEnabled: 'OcspEnabled',
      policyMode: 'PolicyMode',
      proxyEnabled: 'ProxyEnabled',
      proxyTypes: 'ProxyTypes',
      punishReason: 'PunishReason',
      punishStatus: 'PunishStatus',
      realServers: 'RealServers',
      rsType: 'RsType',
      ssl13Enabled: 'Ssl13Enabled',
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
      cname: 'string',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      http2Enable: 'boolean',
      http2HttpsEnable: 'boolean',
      https2HttpEnable: 'boolean',
      httpsExt: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ocspEnabled: 'boolean',
      policyMode: 'string',
      proxyEnabled: 'boolean',
      proxyTypes: { 'type': 'array', 'itemType': DescribeDomainResourceResponseBodyWebRulesProxyTypes },
      punishReason: 'number',
      punishStatus: 'boolean',
      realServers: { 'type': 'array', 'itemType': 'string' },
      rsType: 'number',
      ssl13Enabled: 'boolean',
      sslCiphers: 'string',
      sslProtocols: 'string',
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
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.proxyTypes)) {
      $dara.Model.validateArray(this.proxyTypes);
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

export class DescribeDomainResourceResponseBody extends $dara.Model {
  requestId?: string;
  totalCount?: number;
  webRules?: DescribeDomainResourceResponseBodyWebRules[];
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
      webRules: { 'type': 'array', 'itemType': DescribeDomainResourceResponseBodyWebRules },
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

