// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWaitingRoomRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding global configuration. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true
   * - Match specific requests: Set the value to a custom expression, for example: (http.host eq "video.example.com")
   * 
   * This parameter is required.
   * 
   * @example
   * (http.request.uri.path.file_name eq \\"jpg\\")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding global configuration. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. This parameter is not required when adding global configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  ruleName?: string;
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
   * The ID of the waiting room bypass rule to be updated, which can be obtained by calling the [ListWaitingRoomRules](https://help.aliyun.com/document_detail/2850279.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 8987739839****
   */
  waitingRoomRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      siteId: 'SiteId',
      waitingRoomRuleId: 'WaitingRoomRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      siteId: 'number',
      waitingRoomRuleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

