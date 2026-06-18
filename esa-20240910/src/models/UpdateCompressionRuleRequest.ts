// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCompressionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Brotli compression. Valid values:
   * 
   * - on: Enable.
   * 
   * - off: Disable.
   * 
   * @example
   * on
   */
  brotli?: string;
  /**
   * @remarks
   * Configuration ID. Get this value by calling the [ListCompressionRules](~~ListCompressionRules~~) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * Gzip compression. Valid values:
   * 
   * - on: Enable.
   * 
   * - off: Disable.
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Rule content, using a conditional expression to match user requests. Do not set this parameter when adding a global configuration. Two scenarios apply:
   * 
   * - Match all incoming requests: Set the value to true.
   * 
   * - Match specific requests: Set the value to a custom expression, such as: (http.host eq "video.example.com")
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. Do not set this parameter when adding a global configuration. Valid values:
   * 
   * - on: Enable.
   * 
   * - off: Disable.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. Do not set this parameter when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * Rule execution order. Rules with smaller values take precedence.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Site ID. Get this value by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 5407498413****
   */
  siteId?: number;
  /**
   * @remarks
   * Zstd compression. Valid values:
   * 
   * - on: Enable.
   * 
   * - off: Disable.
   * 
   * @example
   * on
   */
  zstd?: string;
  static names(): { [key: string]: string } {
    return {
      brotli: 'Brotli',
      configId: 'ConfigId',
      gzip: 'Gzip',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      zstd: 'Zstd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brotli: 'string',
      configId: 'number',
      gzip: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
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

