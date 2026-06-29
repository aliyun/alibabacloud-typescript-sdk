// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWaitingRoomRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The rule content. Use a conditional expression to match user requests. This parameter is not required when you add a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specified requests: Set the value to a custom expression, for example, (http.host eq \\"video.example.com\\").
   * 
   * For the complete syntax of rule expressions, refer to <props="china">https://www.alibabacloud.com/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/<props="intl">https://www.alibabacloud.com/help/edge-security-acceleration/esa/user-guide/work-with-rules-engine/
   * 
   * This parameter is required.
   * 
   * @example
   * (http.request.uri.path.file_name eq \\"jpg\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. This parameter is not required when you add a global configuration. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. This parameter is not required when you add a global configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * waitingroom_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The ID of the waiting room to bypass.
   * 
   * This parameter is required.
   * 
   * @example
   * 25133f536f1b1f6b6091f6a92c614dd4
   */
  waitingRoomId?: string;
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      siteId: 'SiteId',
      waitingRoomId: 'WaitingRoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      siteId: 'number',
      waitingRoomId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

