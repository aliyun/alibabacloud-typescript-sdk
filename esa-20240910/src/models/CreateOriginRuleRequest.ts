// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOriginRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Overrides the DNS Record for Origin requests.
   * 
   * @example
   * test.example.com
   */
  dnsRecord?: string;
  /**
   * @remarks
   * Specifies whether to follow 302 redirects from the Origin. Valid values:
   * 
   * - `on`: Enables following redirects.
   * 
   * - `off`: Disables following redirects.
   * 
   * @example
   * on
   */
  follow302Enable?: string;
  /**
   * @remarks
   * The maximum number of 302 redirects to follow. Valid range: 1 to 5.
   * 
   * @example
   * 1
   */
  follow302MaxTries?: string;
  /**
   * @remarks
   * Specifies whether to retain the original request parameters when following a 302 redirect. Valid values:
   * 
   * - `on`: Retains the request parameters.
   * 
   * - `off`: Does not retain the request parameters.
   * 
   * @example
   * on
   */
  follow302RetainArgs?: string;
  /**
   * @remarks
   * Specifies whether to retain the original request header when following a 302 redirect. Valid values:
   * 
   * - `on`: Retains the request header.
   * 
   * - `off`: Does not retain the request header.
   * 
   * @example
   * on
   */
  follow302RetainHeader?: string;
  /**
   * @remarks
   * The Origin `Host` header to use after a 302 redirect.
   * 
   * @example
   * test.com
   */
  follow302TargetHost?: string;
  /**
   * @remarks
   * The `Host` header to use in Origin requests.
   * 
   * @example
   * origin.example.com
   */
  originHost?: string;
  /**
   * @remarks
   * The Origin Port to use for HTTP Origin requests.
   * 
   * @example
   * 8080
   */
  originHttpPort?: string;
  /**
   * @remarks
   * The Origin Port to use for HTTPS Origin requests.
   * 
   * @example
   * 4433
   */
  originHttpsPort?: string;
  /**
   * @remarks
   * Specifies whether to enable mutual Transport Layer Security (mTLS) for Origin connections. Valid values:
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
   * The Origin read timeout in seconds.
   * 
   * @example
   * 10
   */
  originReadTimeout?: string;
  /**
   * @remarks
   * The protocol for Origin requests. Valid values:
   * 
   * - `http`: Uses the HTTP protocol.
   * 
   * - `https`: Uses the HTTPS protocol.
   * 
   * - `follow`: Uses the same protocol as the client request.
   * 
   * @example
   * http
   */
  originScheme?: string;
  /**
   * @remarks
   * The Server Name Indication (SNI) to use in Origin requests.
   * 
   * @example
   * origin.example.com
   */
  originSni?: string;
  /**
   * @remarks
   * Specifies whether to enable Origin Certificate Verification. Valid values:
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
   * Specifies whether to use range requests to download files from the Origin. Valid values:
   * 
   * - `on`: Enables range requests.
   * 
   * - `off`: Disables range requests.
   * 
   * - `force`: Forces range requests.
   * 
   * @example
   * on
   */
  range?: string;
  /**
   * @remarks
   * The size of each chunk for range requests. Valid values:
   * 
   * - `512KB`
   * 
   * - `1MB`
   * 
   * - `2MB`
   * 
   * - `4MB`
   * 
   * @example
   * 1MB
   */
  rangeChunkSize?: string;
  /**
   * @remarks
   * The content of the rule, a Conditional Expression that matches user requests. Not required when creating a Global Configuration. There are two scenarios:
   * 
   * - To match all incoming requests, set the value to `true`.
   * 
   * - To match specific requests, set the value to a custom expression. Example: `(http.host eq "video.example.com")`.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. Not required when creating a Global Configuration. Valid values:
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
   * The rule name. Not required when creating a Global Configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The priority of the rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The ID of the site. You can obtain this ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 340035003106221
   */
  siteId?: number;
  /**
   * @remarks
   * For sites with version management enabled, this specifies the version to which the configuration applies. The default value is 0.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
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
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

