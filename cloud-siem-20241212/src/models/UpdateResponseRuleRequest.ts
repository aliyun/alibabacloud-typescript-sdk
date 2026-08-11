// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResponseRuleRequest extends $dara.Model {
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
   * The pagination token that marks the position from which to start reading. If this parameter is left empty, data is read from the beginning.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the data management center of the threat analysis feature is located. Specify the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: the Chinese mainland.
   * - ap-southeast-1: outside China.
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
   * - doPlaybook: execute a playbook.
   * - changeEventStatus: update the event status.
   * - changeThreatLevel: update the event threat level.
   * - addEventTag: add an event label.
   * - deleteEventTag: delete an event label.
   * - alertWhitelist: add the alert to the whitelist.
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
  responseRuleRemark?: string;
  /**
   * @remarks
   * The status of the automated response rule. Valid values:
   * 
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
   * 
   * - event: event occurred.
   * - event_update: event updated.
   * - alert: alert occurred.
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

