// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCompressionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Brotli compression. Valid values:
   * 
   * - `on`: Enables Brotli compression.
   * 
   * - `off`: Disables Brotli compression.
   * 
   * @example
   * on
   */
  brotli?: string;
  /**
   * @remarks
   * Specifies whether to enable Gzip compression. Valid values:
   * 
   * - `on`: Enables Gzip compression.
   * 
   * - `off`: Disables Gzip compression.
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * The conditional expression used to match user requests. This parameter is not required when adding a global configuration. There are two use cases:
   * 
   * - To match all incoming requests, set the value to `true`.
   * 
   * - To match specific requests, set the value to a custom expression, for example, `(http.host eq "video.example.com")`.
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. This parameter is not required when adding a global configuration. Valid values:
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
   * The name of the rule. This parameter is not required when adding a global configuration.
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
   * The unique identifier of the site. To obtain this value, call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 1231231221***
   */
  siteId?: number;
  /**
   * @remarks
   * The version of the site\\"s configuration. If versioning is enabled for the site, this parameter specifies the version to modify. Defaults to 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @remarks
   * Specifies whether to enable Zstd compression. Valid values:
   * 
   * - `on`: Enables Zstd compression.
   * 
   * - `off`: Disables Zstd compression.
   * 
   * @example
   * on
   */
  zstd?: string;
  static names(): { [key: string]: string } {
    return {
      brotli: 'Brotli',
      gzip: 'Gzip',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
      zstd: 'Zstd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brotli: 'string',
      gzip: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
      siteVersion: 'number',
      zstd: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

