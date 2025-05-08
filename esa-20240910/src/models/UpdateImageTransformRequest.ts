// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageTransformRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration ID. It can be obtained by calling the [ListImageTransforms](https://help.aliyun.com/document_detail/2869056.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Indicates whether to enable image transformation. Possible values:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * Rule content, used to match user requests with conditional expressions. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - To match all incoming requests: Set the value to true.
   * - To match specific requests: Set the value to a custom expression, for example: (http.host eq "video.example.com")
   * 
   * @example
   * (http.request.uri.path.file_name eq \\"jpg\\")
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
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      enable: 'Enable',
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
      enable: 'string',
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

