// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOriginRulesResponseBodyConfigs extends $dara.Model {
  configId?: number;
  configType?: string;
  dnsRecord?: string;
  follow302Enable?: string;
  follow302MaxTries?: string;
  follow302RetainArgs?: string;
  follow302RetainHeader?: string;
  follow302TargetHost?: string;
  originHost?: string;
  originHttpPort?: string;
  originHttpsPort?: string;
  originMtls?: string;
  originReadTimeout?: string;
  originScheme?: string;
  originSni?: string;
  originVerify?: string;
  range?: string;
  rangeChunkSize?: string;
  rule?: string;
  ruleEnable?: string;
  ruleName?: string;
  sequence?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
      dnsRecord: 'DnsRecord',
      follow302Enable: 'Follow302Enable',
      follow302MaxTries: 'Follow302MaxTries',
      follow302RetainArgs: 'Follow302RetainArgs',
      follow302RetainHeader: 'Follow302RetainHeader',
      follow302TargetHost: 'Follow302TargetHost',
      originHost: 'OriginHost',
      originHttpPort: 'OriginHttpPort',
      originHttpsPort: 'OriginHttpsPort',
      originMtls: 'OriginMtls',
      originReadTimeout: 'OriginReadTimeout',
      originScheme: 'OriginScheme',
      originSni: 'OriginSni',
      originVerify: 'OriginVerify',
      range: 'Range',
      rangeChunkSize: 'RangeChunkSize',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      configType: 'string',
      dnsRecord: 'string',
      follow302Enable: 'string',
      follow302MaxTries: 'string',
      follow302RetainArgs: 'string',
      follow302RetainHeader: 'string',
      follow302TargetHost: 'string',
      originHost: 'string',
      originHttpPort: 'string',
      originHttpsPort: 'string',
      originMtls: 'string',
      originReadTimeout: 'string',
      originScheme: 'string',
      originSni: 'string',
      originVerify: 'string',
      range: 'string',
      rangeChunkSize: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOriginRulesResponseBody extends $dara.Model {
  configs?: ListOriginRulesResponseBodyConfigs[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListOriginRulesResponseBodyConfigs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

