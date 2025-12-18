// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The configuration type to query. Valid values:
   * 
   * *   global: global configurations.
   * *   rule: rule configurations.
   * 
   * @example
   * rule
   */
  configType?: string;
  /**
   * @remarks
   * The hostname that overrides the resolved hostname of an incoming request.
   * 
   * @example
   * test.example.com
   */
  dnsRecord?: string;
  /**
   * @remarks
   * 302 follow switch. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  follow302Enable?: string;
  /**
   * @remarks
   * The maximum number of 302 follow times. Valid values: 1 to 5.
   * 
   * @example
   * 1
   */
  follow302MaxTries?: string;
  /**
   * @remarks
   * Retains the original request parameters switch. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  follow302RetainArgs?: string;
  /**
   * @remarks
   * Retain the original request header switch. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  follow302RetainHeader?: string;
  /**
   * @remarks
   * Target Host
   * 
   * @example
   * test.com
   */
  follow302TargetHost?: string;
  /**
   * @remarks
   * The Host header in origin requests.
   * 
   * @example
   * origin.example.com
   */
  originHost?: string;
  /**
   * @remarks
   * The origin port that is accessed when the HTTP protocol is used to back to the origin.
   * 
   * @example
   * 8080
   */
  originHttpPort?: string;
  /**
   * @remarks
   * The origin port that is accessed when the HTTPS protocol is used to back to the origin.
   * 
   * @example
   * 4433
   */
  originHttpsPort?: string;
  /**
   * @remarks
   * The MTLS switch. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  originMtls?: string;
  /**
   * @remarks
   * The read timeout period (in seconds) on the origin.
   * 
   * @example
   * 10
   */
  originReadTimeout?: string;
  /**
   * @remarks
   * The protocol used for origin requests. Valid values:
   * 
   * *   http: HTTP.
   * *   https: HTTPS.
   * *   follow: follows the protocol used by the client.
   * 
   * @example
   * http
   */
  originScheme?: string;
  /**
   * @remarks
   * The SNI in origin requests.
   * 
   * @example
   * origin.example.com
   */
  originSni?: string;
  /**
   * @remarks
   * The origin certificate verification switch. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  originVerify?: string;
  /**
   * @remarks
   * Use range requests to download an object from the source. Valid values:
   * 
   * *   on
   * *   off
   * *   force: enables range origin fetch by force.
   * 
   * @example
   * on
   */
  range?: string;
  /**
   * @remarks
   * The size of the range part. Valid values:
   * 
   * *   512KB
   * *   1MB
   * *   2MB
   * *   4MB
   * 
   * @example
   * 1MB
   */
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
   * The content of the rule. A conditional expression is used to match a user request. You do not need to set this parameter when you add global configuration. Use cases:
   * 
   * *   true: Match all incoming requests.
   * *   Set the value to a custom expression, for example, (http.host eq "video.example.com"): Match the specified request.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. Valid values: You do not need to set this parameter when you add global configuration. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. You do not need to set this parameter when you add global configurations.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule execution order. The smaller the value, the higher the priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The version number of the configurations. You can use this parameter to specify a version of your website to apply the feature settings. By default, version 0 is used.
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

