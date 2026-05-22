// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpsApplicationConfigurationsResponseBodyConfigs extends $dara.Model {
  altSvc?: string;
  altSvcClear?: string;
  altSvcMa?: string;
  altSvcPersist?: string;
  configId?: number;
  configType?: string;
  hsts?: string;
  hstsIncludeSubdomains?: string;
  hstsMaxAge?: string;
  hstsPreload?: string;
  httpsForce?: string;
  httpsForceCode?: string;
  httpsNoSniDeny?: string;
  httpsSniVerify?: string;
  httpsSniWhitelist?: string;
  rule?: string;
  ruleEnable?: string;
  ruleName?: string;
  sequence?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      altSvc: 'AltSvc',
      altSvcClear: 'AltSvcClear',
      altSvcMa: 'AltSvcMa',
      altSvcPersist: 'AltSvcPersist',
      configId: 'ConfigId',
      configType: 'ConfigType',
      hsts: 'Hsts',
      hstsIncludeSubdomains: 'HstsIncludeSubdomains',
      hstsMaxAge: 'HstsMaxAge',
      hstsPreload: 'HstsPreload',
      httpsForce: 'HttpsForce',
      httpsForceCode: 'HttpsForceCode',
      httpsNoSniDeny: 'HttpsNoSniDeny',
      httpsSniVerify: 'HttpsSniVerify',
      httpsSniWhitelist: 'HttpsSniWhitelist',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      altSvc: 'string',
      altSvcClear: 'string',
      altSvcMa: 'string',
      altSvcPersist: 'string',
      configId: 'number',
      configType: 'string',
      hsts: 'string',
      hstsIncludeSubdomains: 'string',
      hstsMaxAge: 'string',
      hstsPreload: 'string',
      httpsForce: 'string',
      httpsForceCode: 'string',
      httpsNoSniDeny: 'string',
      httpsSniVerify: 'string',
      httpsSniWhitelist: 'string',
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

export class ListHttpsApplicationConfigurationsResponseBody extends $dara.Model {
  configs?: ListHttpsApplicationConfigurationsResponseBodyConfigs[];
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
      configs: { 'type': 'array', 'itemType': ListHttpsApplicationConfigurationsResponseBodyConfigs },
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

