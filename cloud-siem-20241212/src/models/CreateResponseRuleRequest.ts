// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResponseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of data records to read in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that marks the current reading position. Leave this parameter empty to start reading from the beginning.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the threat detection and response data management center resides. Specify the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * - doPlaybook: execute a playbook.
   * - changeEventStatus: update the event status.
   * - changeThreatLevel: update the event threat level.
   * - addEventTag: add an event label.
   * - deleteEventTag: delete an event label.
   * - alertWhitelist: add the alert to the whitelist.
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
  responseRuleRemark?: string;
  /**
   * @remarks
   * The trigger type of the automatic response rule. Valid values:
   * 
   * - event: event occurrence.
   * - event_update: event update.
   * - alert: alert occurrence.
   * 
   * @example
   * event
   */
  responseTriggerType?: string;
  /**
   * @remarks
   * The user ID that the administrator switches to for viewing from the perspective of another member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * - 1: the view of all accounts in the enterprise.
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

