// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageTransformRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether image transformation is enabled. Possible values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - To match all incoming requests: Set the value to true
   * - To match specific requests: Set the value to a custom expression, for example: (http.host eq "video.example.com")
   * 
   * @example
   * (http.request.uri.path.file_name eq \\"jpg\\")
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
   * test
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
   * 123456****
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
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
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
      enable: 'string',
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

