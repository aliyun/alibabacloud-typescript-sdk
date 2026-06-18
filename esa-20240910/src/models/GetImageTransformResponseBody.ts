// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageTransformResponseBody extends $dara.Model {
  /**
   * @example
   * on
   */
  autoAvif?: string;
  /**
   * @example
   * on
   */
  autoWebp?: string;
  /**
   * @remarks
   * The config ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The configuration type. Valid values:
   * 
   * - global: The global configuration.
   * 
   * - rule: A rule configuration.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * Indicates whether image transformation is enabled. Valid values:
   * 
   * - on: Enabled.
   * 
   * - off: Disabled.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-280B-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The conditional expression of the rule, used to match user requests. This parameter is relevant only for a rule configuration.
   * 
   * - A value of true matches all incoming requests.
   * 
   * - A custom expression, such as (http.host eq "video.example.com"), matches specific requests.
   * 
   * @example
   * (http.request.uri.path.file_name eq \\"jpg\\")
   */
  rule?: string;
  /**
   * @remarks
   * The status of the rule. This parameter is relevant only for a rule configuration. Valid values:
   * 
   * - on: Enabled.
   * 
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. This parameter is relevant only for a rule configuration.
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
   * The version number of the site configuration. For a site that has configuration versioning enabled, this value indicates the version to which the configuration applies. The default value is 0.
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

