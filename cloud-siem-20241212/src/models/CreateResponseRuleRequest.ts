// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResponseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that specifies the position from which to start the query. If you do not specify this parameter, the query starts from the beginning.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The deployment region of the data management center for threat analysis. You must select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or Hong Kong (China).
   * 
   * - ap-southeast-1: Your assets are in regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The action configuration, specified as a JSON string.
   * 
   * @example
   * [{"actionType":"doPlaybook","playbookName":"block waf IP","playbookUuid":"system_aliyun_waf_whole_process_book","disposeParam":{"period":"7d"}}]
   */
  responseActionConfig?: string;
  /**
   * @remarks
   * The action type for the automatic response rule. Valid values:
   * 
   * - doPlaybook: Runs a playbook.
   * 
   * - changeEventStatus: Changes the status of an event.
   * 
   * - changeThreatLevel: Changes the threat level of an event.
   * 
   * - addEventTag: Adds a tag to an event.
   * 
   * - deleteEventTag: Deletes a tag from an event.
   * 
   * - alertWhitelist: Adds an alert to the allowlist.
   * 
   * @example
   * doPlaybook
   */
  responseActionType?: string;
  /**
   * @remarks
   * The trigger conditions for the rule, specified as a JSON string.
   * 
   * @example
   * [{"left":{"value":"threat_level"},"operator":"equals","right":{"value":"suspicious"}}]
   */
  responseExecutionCondition?: string;
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
  responseRulePriority?: string;
  /**
   * @remarks
   * The trigger type for the automatic response rule. Valid values:
   * 
   * - event: An event is generated.
   * 
   * - event_update: An event is updated.
   * 
   * - alert: An alert is generated.
   * 
   * @example
   * event
   */
  responseTriggerType?: string;
  /**
   * @remarks
   * The ID of the member account. An administrator uses this parameter to operate on behalf of the specified member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The operational scope. Valid values:
   * 
   * - 0: Sets the scope to the current Alibaba Cloud account.
   * 
   * - 1: Sets the scope to all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      responseActionConfig: 'ResponseActionConfig',
      responseActionType: 'ResponseActionType',
      responseExecutionCondition: 'ResponseExecutionCondition',
      responseRuleName: 'ResponseRuleName',
      responseRulePriority: 'ResponseRulePriority',
      responseTriggerType: 'ResponseTriggerType',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      responseActionConfig: 'string',
      responseActionType: 'string',
      responseExecutionCondition: 'string',
      responseRuleName: 'string',
      responseRulePriority: 'string',
      responseTriggerType: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

