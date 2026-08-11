// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResponseRulesResponseBodyResponseRules extends $dara.Model {
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 1769843323000
   */
  createTime?: number;
  /**
   * @remarks
   * The action configuration of the automatic response rule.
   * 
   * @example
   * [{"actionType":"doPlaybook","playbookName":"block waf IP","playbookUuid":"system_aliyun_waf_whole_process_book","disposeParam":{"period":"7d"}}]
   */
  responseActionConfig?: string;
  /**
   * @remarks
   * The action type of the automatic response rule. Valid values:
   * 
   * - doPlaybook: execute a playbook
   * - changeEventStatus: update event status
   * - changeThreatLevel: update event threat level
   * - addEventTag: add an event label
   * - deleteEventTag: delete an event label
   * - alertWhitelist: add alert to whitelist
   * 
   * @example
   * doPlaybook
   */
  responseActionType?: string;
  /**
   * @remarks
   * The trigger condition configuration of the rule.
   * 
   * @example
   * [{"left":{"value":"threat_level"},"operator":"equals","right":{"value":"suspicious"}}]
   */
  responseExecutionCondition?: string;
  /**
   * @remarks
   * The ID of the automatic response rule.
   * 
   * @example
   * 403235
   */
  responseRuleId?: string;
  /**
   * @remarks
   * The name of the automatic response rule.
   * 
   * @example
   * Send Notification When Generating Urgent Incident
   */
  responseRuleName?: string;
  /**
   * @remarks
   * The execution priority of the automatic response rule.
   * 
   * @example
   * 1
   */
  responseRulePriority?: number;
  responseRuleRemark?: string;
  /**
   * @remarks
   * The status of the automatic response rule. Valid values:
   * 
   * - 0: disabled
   * - 100: enabled
   * 
   * @example
   * 0
   */
  responseRuleStatus?: number;
  /**
   * @remarks
   * The type of the response rule. Valid values:
   * 
   * - preset: predefined
   * - custom: custom
   * 
   * @example
   * custom
   */
  responseRuleType?: string;
  /**
   * @remarks
   * The trigger type of the automatic response rule. Valid values:
   * 
   * - event: event occurred
   * - event_update: event updated
   * - alert: alert occurred
   * 
   * @example
   * event
   */
  responseTriggerType?: string;
  /**
   * @remarks
   * The time when the rule was last updated.
   * 
   * @example
   * 1769843323000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      responseActionConfig: 'ResponseActionConfig',
      responseActionType: 'ResponseActionType',
      responseExecutionCondition: 'ResponseExecutionCondition',
      responseRuleId: 'ResponseRuleId',
      responseRuleName: 'ResponseRuleName',
      responseRulePriority: 'ResponseRulePriority',
      responseRuleRemark: 'ResponseRuleRemark',
      responseRuleStatus: 'ResponseRuleStatus',
      responseRuleType: 'ResponseRuleType',
      responseTriggerType: 'ResponseTriggerType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      responseActionConfig: 'string',
      responseActionType: 'string',
      responseExecutionCondition: 'string',
      responseRuleId: 'string',
      responseRuleName: 'string',
      responseRulePriority: 'number',
      responseRuleRemark: 'string',
      responseRuleStatus: 'number',
      responseRuleType: 'string',
      responseTriggerType: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResponseRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The position from which the current call starts reading. An empty value indicates that all data has been read.
   * 
   * This parameter is required.
   * 
   * @example
   * AAAAASLVeIxed4466E0LVmGkzwS6hJKd9DGVGMDRM6Lu****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of automatic response rules.
   */
  responseRules?: ListResponseRulesResponseBodyResponseRules[];
  /**
   * @remarks
   * The total number of records that match the request conditions. This parameter is optional and is not returned by default.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      responseRules: 'ResponseRules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      responseRules: { 'type': 'array', 'itemType': ListResponseRulesResponseBodyResponseRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.responseRules)) {
      $dara.Model.validateArray(this.responseRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

