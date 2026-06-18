// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOriginRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * Overrides the DNS record for the origin request.
   * 
   * @example
   * test.example.com
   */
  dnsRecord?: string;
  /**
   * @remarks
   * Indicates whether to follow 302 redirects for origin requests. Valid values:
   * 
   * - `on`: Follows 302 redirects.
   * 
   * - `off`: Does not follow 302 redirects.
   * 
   * @example
   * on
   */
  follow302Enable?: string;
  /**
   * @remarks
   * The maximum number of 302 redirects to follow. The value must be an integer from 1 to 5.
   * 
   * @example
   * 1
   */
  follow302MaxTries?: string;
  /**
   * @remarks
   * Indicates whether to retain the original request parameters when following a 302 redirect. Valid values:
   * 
   * - `on`: Retains the parameters.
   * 
   * - `off`: Does not retain the parameters.
   * 
   * @example
   * on
   */
  follow302RetainArgs?: string;
  /**
   * @remarks
   * Indicates whether to retain the original request headers when following a 302 redirect. Valid values:
   * 
   * - `on`: Retains the headers.
   * 
   * - `off`: Does not retain the headers.
   * 
   * @example
   * on
   */
  follow302RetainHeader?: string;
  /**
   * @remarks
   * The `Host` header for the redirected origin request.
   * 
   * @example
   * test.com
   */
  follow302TargetHost?: string;
  /**
   * @remarks
   * The `Host` header for the origin request.
   * 
   * @example
   * origin.example.com
   */
  originHost?: string;
  /**
   * @remarks
   * The origin server port for HTTP requests.
   * 
   * @example
   * 8080
   */
  originHttpPort?: string;
  /**
   * @remarks
   * The origin server port for HTTPS requests.
   * 
   * @example
   * 4433
   */
  originHttpsPort?: string;
  /**
   * @remarks
   * Indicates whether to enable mutual TLS (mTLS) for origin requests. Valid values:
   * 
   * - `on`: Enables mTLS.
   * 
   * - `off`: Disables mTLS.
   * 
   * @example
   * on
   */
  originMtls?: string;
  /**
   * @remarks
   * The read timeout period for the origin server, in seconds.
   * 
   * @example
   * 10
   */
  originReadTimeout?: string;
  /**
   * @remarks
   * The protocol for origin requests. Valid values:
   * 
   * - `http`: The origin request uses HTTP.
   * 
   * - `https`: The origin request uses HTTPS.
   * 
   * - `follow`: The origin request uses the same protocol as the client request.
   * 
   * @example
   * http
   */
  originScheme?: string;
  /**
   * @remarks
   * The Server Name Indication (SNI) for the origin request.
   * 
   * @example
   * origin.example.com
   */
  originSni?: string;
  /**
   * @remarks
   * Indicates whether to enable origin certificate verification. Valid values:
   * 
   * - `on`: Enables verification.
   * 
   * - `off`: Disables verification.
   * 
   * @example
   * on
   */
  originVerify?: string;
  /**
   * @remarks
   * Indicates whether to use range requests when fetching files from the origin server. Valid values:
   * 
   * - `on`: Enables range requests.
   * 
   * - `off`: Disables range requests.
   * 
   * - `force`: Enforces range requests.
   * 
   * @example
   * on
   */
  range?: string;
  /**
   * @remarks
   * The size of each chunk for range requests. Valid values:
   * 
   * - 512KB
   * 
   * - 1MB
   * 
   * - 2MB
   * 
   * - 4MB
   * 
   * @example
   * 1MB
   */
  rangeChunkSize?: string;
  /**
   * @remarks
   * The rule content, which is a conditional expression that matches user requests. This parameter is not required when you add a global configuration.
   * 
   * - To match all incoming requests, set the value to `true`.
   * 
   * - To match specific requests, set the value to a custom expression, such as `(http.host eq "video.example.com")`.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Indicates whether the rule is enabled. This parameter is not required when you add a global configuration. Valid values:
   * 
   * - `on`: Enables the rule.
   * 
   * - `off`: Disables the rule.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. This parameter is not required when you add a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution priority of the rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The site ID. You can get this ID by calling the [ListSites](~~ListSites~~) operation.
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

