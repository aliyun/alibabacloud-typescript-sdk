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
   * The configuration of the action that is performed if the automated response rule is triggered.
   * 
   * @example
   * [{"actionType":"doPlaybook","playbookName":"block waf IP","playbookUuid":"system_aliyun_waf_whole_process_book","disposeParam":{"period":"7d"}}]
   */
  responseActionConfig?: string;
  /**
   * @remarks
   * The type of the action. Valid values:
   * 
   * - `doPlaybook`: executes a playbook.
   * 
   * - `changeEventStatus`: changes the status of an event.
   * 
   * - `changeThreatLevel`: changes the threat level of an event.
   * 
   * - `addEventTag`: adds a tag to an event.
   * 
   * - `deleteEventTag`: removes a tag from an event.
   * 
   * - `alertWhitelist`: adds an alert to the whitelist.
   * 
   * @example
   * doPlaybook
   */
  responseActionType?: string;
  /**
   * @remarks
   * The trigger condition of the rule.
   * 
   * @example
   * [{"left":{"value":"threat_level"},"operator":"equals","right":{"value":"suspicious"}}]
   */
  responseExecutionCondition?: string;
  /**
   * @remarks
   * The ID of the automated response rule.
   * 
   * @example
   * 403235
   */
  responseRuleId?: string;
  /**
   * @remarks
   * The name of the automated response rule.
   * 
   * @example
   * Send Notification When Generating Urgent Incident
   */
  responseRuleName?: string;
  /**
   * @remarks
   * The priority of the automated response rule.
   * 
   * @example
   * 1
   */
  responseRulePriority?: number;
  /**
   * @remarks
   * The status of the automated response rule. Valid values:
   * 
   * - `0`: disabled.
   * 
   * - `100`: enabled.
   * 
   * @example
   * 0
   */
  responseRuleStatus?: number;
  /**
   * @remarks
   * The type of the response rule. Valid values:
   * 
   * - `preset`: a predefined rule.
   * 
   * - `custom`: a custom rule.
   * 
   * @example
   * custom
   */
  responseRuleType?: string;
  /**
   * @remarks
   * The trigger type of the automated response rule. Valid values:
   * 
   * - `event`: triggered when an event occurs.
   * 
   * - `event_update`: triggered when an event is updated.
   * 
   * - `alert`: triggered when an alert is generated.
   * 
   * @example
   * event
   */
  responseTriggerType?: string;
  /**
   * @remarks
   * The time when the rule was updated.
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
   * The maximum number of entries returned for the current request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The position where the current query ends. If this parameter is empty, all data is returned.
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
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of automated response rules.
   */
  responseRules?: ListResponseRulesResponseBodyResponseRules[];
  /**
   * @remarks
   * The total number of entries that match the query conditions. This parameter is optional and may not always be returned.
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

