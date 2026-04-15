// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResponseRuleRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * Send Notification When Generating Urgent Incident
   */
  responseRuleName?: string;
  /**
   * @example
   * 1
   */
  responseRulePriority?: string;
  /**
   * @example
   * event
   */
  responseTriggerType?: string;
  /**
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
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

