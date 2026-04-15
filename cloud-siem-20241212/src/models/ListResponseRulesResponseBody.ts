// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResponseRulesResponseBodyResponseRules extends $dara.Model {
  /**
   * @example
   * 1769843323000
   */
  createTime?: number;
  /**
   * @example
   * [{"actionType":"doPlaybook","playbookName":"block waf IP","playbookUuid":"system_aliyun_waf_whole_process_book","disposeParam":{"period":"7d"}}]
   */
  responseActionConfig?: string;
  /**
   * @example
   * doPlaybook
   */
  responseActionType?: string;
  /**
   * @example
   * [{"left":{"value":"threat_level"},"operator":"equals","right":{"value":"suspicious"}}]
   */
  responseExecutionCondition?: string;
  /**
   * @example
   * 403235
   */
  responseRuleId?: string;
  /**
   * @example
   * Send Notification When Generating Urgent Incident
   */
  responseRuleName?: string;
  /**
   * @example
   * 1
   */
  responseRulePriority?: number;
  /**
   * @example
   * 0
   */
  responseRuleStatus?: number;
  /**
   * @example
   * custom
   */
  responseRuleType?: string;
  /**
   * @example
   * event
   */
  responseTriggerType?: string;
  /**
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
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAAAASLVeIxed4466E0LVmGkzwS6hJKd9DGVGMDRM6Lu****
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
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
  responseRules?: ListResponseRulesResponseBodyResponseRules[];
  /**
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

