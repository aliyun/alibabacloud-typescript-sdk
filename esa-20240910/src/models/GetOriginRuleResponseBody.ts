// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Configuration type, which can be used to query global or rule configurations. Value range:
   * 
   * - global: Query global configuration.
   * - rule: Query rule configuration.
   * 
   * @example
   * rule
   */
  configType?: string;
  /**
   * @remarks
   * Rewrite the DNS resolution record for the origin request.
   * 
   * @example
   * test.example.com
   */
  dnsRecord?: string;
  follow302Enable?: string;
  follow302MaxTries?: string;
  follow302RetainArgs?: string;
  follow302RetainHeader?: string;
  follow302TargetHost?: string;
  /**
   * @remarks
   * HOST carried in the origin request.
   * 
   * @example
   * origin.example.com
   */
  originHost?: string;
  /**
   * @remarks
   * Port of the origin server accessed when using the HTTP protocol for origin.
   * 
   * @example
   * 8080
   */
  originHttpPort?: string;
  /**
   * @remarks
   * Port of the origin server accessed when using the HTTPS protocol for origin.
   * 
   * @example
   * 4433
   */
  originHttpsPort?: string;
  /**
   * @remarks
   * mTLS switch. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  originMtls?: string;
  originReadTimeout?: string;
  /**
   * @remarks
   * Protocol used for the origin request. Value range:
   * 
   * - http: Use HTTP protocol for origin.
   * - https: Use HTTPS protocol for origin.
   * - follow: Follow the client\\"s protocol for origin.
   * 
   * @example
   * http
   */
  originScheme?: string;
  /**
   * @remarks
   * SNI carried in the origin request.
   * 
   * @example
   * origin.example.com
   */
  originSni?: string;
  /**
   * @remarks
   * Origin certificate verification switch. Value range: 
   * - on: Enable. 
   * - off: Disable.
   * 
   * @example
   * on
   */
  originVerify?: string;
  /**
   * @remarks
   * Use the range chunk method for origin file download. Value range:
   * 
   * - on: Enable.
   * - off: Disable.
   * - force: Force.
   * 
   * @example
   * on
   */
  range?: string;
  rangeChunkSize?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter does not need to be set when adding a global configuration. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true
   * - Match specific requests: Set the value to a custom expression, e.g., (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter does not need to be set when adding a global configuration. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. This parameter does not need to be set when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * Rule execution order. The smaller the value, the higher the priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Version number of the site configuration. For sites with version management enabled, you can use this parameter to specify the effective version of the site configuration, defaulting to version 0.
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

