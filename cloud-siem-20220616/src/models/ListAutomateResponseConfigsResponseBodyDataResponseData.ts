// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutomateResponseConfigsResponseBodyDataResponseData extends $dara.Model {
  /**
   * @remarks
   * The configuration of the action that is performed after the automated response rule is hit. The value is in the JSON format.
   * 
   * @example
   * [
   *       {
   *             "actionType": "doPlaybook",
   *             "playbookName": "WafBlockIP",
   *             "playbookUuid": "bdad6220-6584-41b2-9704-fc6584568758"
   *       }
   * ]
   */
  actionConfig?: string;
  /**
   * @remarks
   * The type of the handling action. Multiple types are separated by commas (,). Valid values:
   * 
   * *   **doPlaybook**: runs the playbook.
   * *   **changeEventStatus**: changes the event status.
   * *   **changeThreatLevel**: changes the risk level of the event.
   * 
   * @example
   * doPlaybook,changeEventStatus
   */
  actionType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is associated with the rule in SIEM.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The type of the automated response rule. Valid values:
   * 
   * *   **event**
   * *   **alert**
   * 
   * @example
   * event
   */
  autoResponseType?: string;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * 0: the current Alibaba Cloud account
   * 1: the global account
   * 
   * @example
   * 1
   */
  dataType?: number;
  /**
   * @remarks
   * The trigger condition of the automated response rule. The value is in the JSON format.
   * 
   * @example
   * [{"left":{"value":"alert_name"},"operator":"containsString","right":{"value":"webshell_online"}}]
   */
  executionCondition?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the automated response rule.
   * 
   * @example
   * 123
   */
  id?: number;
  responseRuleType?: string;
  /**
   * @remarks
   * The name of the automated response rule.
   * 
   * @example
   * cfw kill quara book
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **0**: disabled.
   * *   **100**: enabled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The ID of the user who created the rule.
   * 
   * @example
   * 17108579417****
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      actionConfig: 'ActionConfig',
      actionType: 'ActionType',
      aliuid: 'Aliuid',
      autoResponseType: 'AutoResponseType',
      dataType: 'DataType',
      executionCondition: 'ExecutionCondition',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      responseRuleType: 'ResponseRuleType',
      ruleName: 'RuleName',
      status: 'Status',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionConfig: 'string',
      actionType: 'string',
      aliuid: 'number',
      autoResponseType: 'string',
      dataType: 'number',
      executionCondition: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      responseRuleType: 'string',
      ruleName: 'string',
      status: 'number',
      subUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

