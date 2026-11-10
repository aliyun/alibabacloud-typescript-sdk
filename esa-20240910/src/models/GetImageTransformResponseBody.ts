// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageTransformResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether adaptive AVIF is enabled. Valid values:
   * - on: enabled
   * - off: disabled
   * 
   * @example
   * on
   */
  autoAvif?: string;
  /**
   * @remarks
   * Specifies whether adaptive WebP is enabled. Valid values:
   * - on: enabled
   * - off: disabled
   * 
   * @example
   * on
   */
  autoWebp?: string;
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The type of the configuration. Valid values:
   * - global: global configuration
   * - rule: rule configuration
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * Specifies whether image transform is enabled. Valid values:
   * - on: enabled
   * - off: disabled
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB1A380B-09F0-41BB-280B-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The rule content, which uses a conditional expression to match user requests. You do not need to set this parameter when adding a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq "video.example.com").
   * 
   * @example
   * (http.request.uri.path.file_name eq \\"jpg\\")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. You do not need to set this parameter when adding a global configuration. Valid values:
   * - on: enabled
   * - off: disabled
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. You do not need to set this parameter when adding a global configuration.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution sequence of the rule. A smaller value indicates a higher execution priority.
   * 
   * @example
   * 2
   */
  sequence?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with configuration version management enabled, you can use this parameter to specify the site version for which the configuration takes effect. Default value: 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      autoAvif: 'AutoAvif',
      autoWebp: 'AutoWebp',
      configId: 'ConfigId',
      configType: 'ConfigType',
      enable: 'Enable',
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
      autoAvif: 'string',
      autoWebp: 'string',
      configId: 'number',
      configType: 'string',
      enable: 'string',
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

