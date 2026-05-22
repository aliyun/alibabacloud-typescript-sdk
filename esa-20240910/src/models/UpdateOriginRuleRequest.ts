// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOriginRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * Rewrite the DNS resolution record of the origin request.
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
   * The HOST carried in the origin request.
   * 
   * @example
   * origin.example.com
   */
  originHost?: string;
  /**
   * @remarks
   * Port of the origin server when using HTTP protocol for origin pull.
   * 
   * @example
   * 8080
   */
  originHttpPort?: string;
  /**
   * @remarks
   * Port of the origin server when using HTTPS protocol for origin pull.
   * 
   * @example
   * 4433
   */
  originHttpsPort?: string;
  /**
   * @remarks
   * mTLS switch. Valid values:
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
   * Protocol used for the origin request. Valid values:
   * - http: Use HTTP protocol for origin pull.
   * - https: Use HTTPS protocol for origin pull.
   * - follow: Follow the client\\"s protocol for origin pull.
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
   * Origin certificate verification switch. Valid values:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  originVerify?: string;
  /**
   * @remarks
   * Use range chunking for origin pull file download. Valid values:
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
   * Rule content, used to match user requests with conditional expressions. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true
   * - Match specific requests: Set the value to a custom expression, for example: (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. Valid values:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. This parameter is not required when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  sequence?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 5407498413****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
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
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
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
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

