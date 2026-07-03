// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResponseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response messages. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of results to return for a single request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. If you do not specify this parameter, the query starts from the first page.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the data management center of Cloud SIEM is located. Select a region based on the location of your assets. Valid values:
   * 
   * - `cn-hangzhou`: China (Hangzhou). For assets in the Chinese mainland.
   * 
   * - `ap-southeast-1`: Asia Pacific SE 1 (Singapore). For assets in overseas regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The action configuration for the automatic response rule.
   * 
   * @example
   * [{"actionType":"doPlaybook","playbookName":"block waf IP","playbookUuid":"system_aliyun_waf_whole_process_book","disposeParam":{"period":"7d"}}]
   */
  responseActionConfig?: string;
  /**
   * @remarks
   * The action for the automatic response rule. Valid values:
   * 
   * - `doPlaybook`: Executes a playbook.
   * 
   * - `changeEventStatus`: Updates the event status.
   * 
   * - `changeThreatLevel`: Updates the event threat level.
   * 
   * - `addEventTag`: Adds an event tag.
   * 
   * - `deleteEventTag`: Deletes an event tag.
   * 
   * - `alertWhitelist`: Adds the alert to a whitelist.
   * 
   * @example
   * alertWhitelist
   */
  responseActionType?: string;
  /**
   * @remarks
   * The trigger conditions for the rule.
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
   * 440918
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
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - `0`: disabled
   * 
   * - `100`: enabled
   * 
   * @example
   * 0
   */
  responseRuleStatus?: number;
  /**
   * @remarks
   * The trigger for the automatic response rule. Valid values:
   * 
   * - `event`: The rule is triggered when an event occurs.
   * 
   * - `event_update`: The rule is triggered when an event is updated.
   * 
   * - `alert`: The rule is triggered when an alert is generated.
   * 
   * @example
   * event
   */
  responseTriggerType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      responseActionConfig: 'ResponseActionConfig',
      responseActionType: 'ResponseActionType',
      responseExecutionCondition: 'ResponseExecutionCondition',
      responseRuleId: 'ResponseRuleId',
      responseRuleName: 'ResponseRuleName',
      responseRulePriority: 'ResponseRulePriority',
      responseRuleStatus: 'ResponseRuleStatus',
      responseTriggerType: 'ResponseTriggerType',
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
      responseRuleId: 'string',
      responseRuleName: 'string',
      responseRulePriority: 'number',
      responseRuleStatus: 'number',
      responseTriggerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

