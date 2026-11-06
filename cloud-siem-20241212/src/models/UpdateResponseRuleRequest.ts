// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResponseRuleRequest extends $dara.Model {
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
   * The maximum number of data records to read in the current request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that specifies the position from which to start reading. If this parameter is left empty, the reading starts from the beginning.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. You must select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: The assets are located in the Chinese mainland.
   * - ap-southeast-1: The assets are located outside the Chinese mainland.
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
   * - doPlaybook: Executes a playbook.
   * - changeEventStatus: Updates the event status.
   * - changeThreatLevel: Updates the threat level of the event.
   * - addEventTag: Adds an event tag.
   * - deleteEventTag: Deletes an event tag.
   * - alertWhitelist: Adds an alert to the whitelist.
   * 
   * @example
   * alertWhitelist
   */
  responseActionType?: string;
  /**
   * @remarks
   * The rule trigger condition configuration.
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
   * The remarks of the response rule.
   * 
   * @example
   * Verified as a low-risk alert and scheduled for regular cleanup
   */
  responseRuleRemark?: string;
  /**
   * @remarks
   * The status of the automated response rule. Valid values:
   * - 0: Disabled.
   * - 100: Enabled.
   * 
   * @example
   * 0
   */
  responseRuleStatus?: number;
  /**
   * @remarks
   * The trigger type of the automated response rule. Valid values:
   * - event: An event occurs.
   * - event_update: An event is updated.
   * - alert: An alert is triggered.
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

