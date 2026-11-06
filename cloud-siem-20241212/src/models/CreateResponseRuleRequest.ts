// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResponseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of data records to return in the current read operation.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which the current read operation starts. If you leave this parameter empty, the read operation starts from the beginning.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. You must select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Assets are located outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The action configuration of the automated response rule.
   * 
   * @example
   * [{"actionType":"doPlaybook","playbookName":"block waf IP","playbookUuid":"system_aliyun_waf_whole_process_book","disposeParam":{"period":"7d"}}]
   */
  responseActionConfig?: string;
  /**
   * @remarks
   * The action type of the automated response rule. Valid values:
   * 
   * - doPlaybook: Executes a playbook.
   * - changeEventStatus: Updates the event status.
   * - changeThreatLevel: Updates the threat level of the event.
   * - addEventTag: Adds an event tag.
   * - deleteEventTag: Deletes an event tag.
   * - alertWhitelist: Adds an alert to the whitelist.
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
   * The name of the automated response rule.
   * 
   * @example
   * Send Notification When Generating Urgent Incident
   */
  responseRuleName?: string;
  /**
   * @remarks
   * The execution priority of the automated response rule.
   * 
   * @example
   * 1
   */
  responseRulePriority?: string;
  /**
   * @remarks
   * The remarks of the response rule.
   * 
   * @example
   * Automatic notification rule for high-risk alerts
   */
  responseRuleRemark?: string;
  /**
   * @remarks
   * The trigger type of the automated response rule. Valid values:
   * 
   * - event: An event occurs.
   * - event_update: An event is updated.
   * - alert: An alert is triggered.
   * 
   * @example
   * event
   */
  responseTriggerType?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * - 1: The view of all accounts in the enterprise.
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
      responseRuleRemark: 'ResponseRuleRemark',
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
      responseRuleRemark: 'string',
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

