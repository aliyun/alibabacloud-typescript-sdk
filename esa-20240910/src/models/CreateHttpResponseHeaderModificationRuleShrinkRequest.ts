// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpResponseHeaderModificationRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Modify response headers, supporting add, delete, and modify operations.
   * 
   * This parameter is required.
   */
  responseHeaderModificationShrink?: string;
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
   * Rule switch. This parameter is not required when adding a global configuration. Possible values:
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
   * Site ID. You can obtain this by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456******
   */
  siteId?: number;
  /**
   * @remarks
   * Version number of the site configuration. For sites with version management enabled, you can use this parameter to specify the version of the site where the configuration will take effect. The default is version 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      responseHeaderModificationShrink: 'ResponseHeaderModification',
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
      responseHeaderModificationShrink: 'string',
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

