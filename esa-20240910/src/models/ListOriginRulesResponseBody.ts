// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOriginRulesResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 395386449776640
   */
  configId?: number;
  /**
   * @remarks
   * The configuration type. You can query global or rule configurations based on this parameter. Valid values:
   * 
   * - global: Query global configurations.
   * - rule: Query rule configurations.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * The rewritten DNS resolution record for back-to-origin requests.
   * 
   * @example
   * test.example.com
   */
  dnsRecord?: string;
  /**
   * @remarks
   * The back-to-origin 302 redirect follow switch. Valid values:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  follow302Enable?: string;
  /**
   * @remarks
   * The maximum number of 302 redirect follows. Valid values: 1 to 5.
   * 
   * @example
   * 1
   */
  follow302MaxTries?: string;
  /**
   * @remarks
   * The switch for retaining original request parameters. Valid values:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  follow302RetainArgs?: string;
  /**
   * @remarks
   * The switch for retaining original request headers. Valid values:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  follow302RetainHeader?: string;
  /**
   * @remarks
   * The back-to-origin host after 302 redirect modification.
   * 
   * @example
   * test.com
   */
  follow302TargetHost?: string;
  /**
   * @remarks
   * The HOST carried in the back-to-origin request.
   * 
   * @example
   * origin.example.com
   */
  originHost?: string;
  /**
   * @remarks
   * The origin server port accessed when using the HTTP protocol for back-to-origin.
   * 
   * @example
   * 8080
   */
  originHttpPort?: string;
  /**
   * @remarks
   * The origin server port accessed when using the HTTPS protocol for back-to-origin.
   * 
   * @example
   * 4433
   */
  originHttpsPort?: string;
  /**
   * @remarks
   * The mTLS switch. Valid values:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  originMtls?: string;
  /**
   * @remarks
   * The origin server read timeout period, in seconds.
   * 
   * @example
   * 10
   */
  originReadTimeout?: string;
  /**
   * @remarks
   * The protocol used for back-to-origin requests. Valid values:
   * - http: Use the HTTP protocol for back-to-origin.
   * - https: Use the HTTPS protocol for back-to-origin.
   * - follow: Follow the client protocol for back-to-origin.
   * 
   * @example
   * http
   */
  originScheme?: string;
  /**
   * @remarks
   * The SNI carried in the back-to-origin request.
   * 
   * @example
   * origin.example.com
   */
  originSni?: string;
  /**
   * @remarks
   * The origin server certificate verification switch. Valid values:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  originVerify?: string;
  /**
   * @remarks
   * Use range-based slicing for back-to-origin file downloads. Valid values:
   * - on: Enable.
   * - off: Disable.
   * - force: Force enable.
   * 
   * @example
   * on
   */
  range?: string;
  /**
   * @remarks
   * The range chunk size.
   * 
   * @example
   * 1MB
   */
  rangeChunkSize?: string;
  /**
   * @remarks
   * The rule content, which uses conditional expressions to match user requests. You do not need to set this parameter when adding a global configuration. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true.
   * - Match specified requests: Set the value to a custom expression, for example: (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. You do not need to set this parameter when adding a global configuration. Valid values:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. You do not need to set this parameter when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with configuration version management enabled, you can use this parameter to specify the site version for which the configuration takes effect. Default value: 0.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The configurations in the response.
   */
  configs?: ListOriginRulesResponseBodyConfigs[];
  /**
   * @remarks
   * The current page number, same as the PageNumber request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 2
   */
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

