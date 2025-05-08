// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCompressionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Brotli compression. Value range:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  brotli?: string;
  /**
   * @remarks
   * Gzip compression. Value range:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - To match all incoming requests: Set the value to true
   * - To match specific requests: Set the value to a custom expression, for example: (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. Value range:
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
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 1231231221***
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with version management enabled, you can use this parameter to specify the effective version of the site configuration, defaulting to version 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @remarks
   * Zstd compression. Value range:
   * 
   * - on: Enable.
   * - off: Disable.
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

