// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCompressionRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Brotli compression. Possible values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  brotli?: string;
  /**
   * @remarks
   * Configuration ID.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * Configuration type. Possible values:
   * - global: Global configuration.
   * - rule: Rule-based configuration.
   * 
   * @example
   * rule
   */
  configType?: string;
  /**
   * @remarks
   * Gzip compression. Possible values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 186C6DF2-D96A-5102-B04E-FB92C16C9867
   */
  requestId?: string;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true
   * - Match specific requests: Set the value to a custom expression, for example: (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. Possible values:
   * - on: Enabled.
   * - off: Disabled.
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
   * The version number of the site configuration. For sites with version management enabled, this parameter can specify the effective version of the configuration, defaulting to version 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @remarks
   * Zstd compression. Value range: 
   * - on: enabled. 
   * - off: disabled.
   * 
   * @example
   * on
   */
  zstd?: string;
  static names(): { [key: string]: string } {
    return {
      brotli: 'Brotli',
      configId: 'ConfigId',
      configType: 'ConfigType',
      gzip: 'Gzip',
      requestId: 'RequestId',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
      zstd: 'Zstd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brotli: 'string',
      configId: 'number',
      configType: 'string',
      gzip: 'string',
      requestId: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
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

