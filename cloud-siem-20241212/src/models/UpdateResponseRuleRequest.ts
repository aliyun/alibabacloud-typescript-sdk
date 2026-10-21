// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResponseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response messages. Valid values:
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
   * The token that marks the start position of the current read. Leave this parameter empty to start from the beginning.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the data management center of Cloud Threat Detection and Response (CTDR) is located. Select the management center region based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland.
   * - ap-southeast-1: Your assets reside outside China.
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
   * - doPlaybook: runs a playbook.
   * - changeEventStatus: updates the event status.
   * - changeThreatLevel: updates the threat level of an event.
   * - addEventTag: adds a label to an event.
   * - deleteEventTag: deletes a label from an event.
   * - alertWhitelist: adds an alert to the whitelist.
   * 
   * @example
   * alertWhitelist
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
   * The ID of the automated response rule.
   * 
   * @example
   * 440918
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
   * The execution priority of the automated response rule.
   * 
   * @example
   * 1
   */
  responseRulePriority?: number;
  /**
   * @remarks
   * The remarks for the response rule.
   */
  responseRuleRemark?: string;
  /**
   * @remarks
   * The status of the automated response rule. Valid values:
   * - 0: disabled.
   * - 100: enabled.
   * 
   * @example
   * 0
   */
  responseRuleStatus?: number;
  /**
   * @remarks
   * The trigger type of the automated response rule. Valid values:
   * - event: an event occurs.
   * - event_update: an event is updated.
   * - alert: an alert occurs.
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
      responseRuleRemark: 'ResponseRuleRemark',
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
      responseRuleRemark: 'string',
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

