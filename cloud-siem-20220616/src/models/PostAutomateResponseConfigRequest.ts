// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostAutomateResponseConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The action configuration of the automated response rule. The value is in the JSON format.
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
   * *   **changeThreatLevel**: changes the threat level of the event.
   * 
   * @example
   * doPlaybook,changeEventStatus
   */
  actionType?: string;
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
   * The trigger condition of the automated response rule. The value is in the JSON format.
   * 
   * @example
   * [{"left":{"value":"alert_name"},"operator":"containsString","right":{"value":"webshell_online"}}]
   */
  executionCondition?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   **cn-hangzhou**: Your assets reside in regions in China.
   * *   **ap-southeast-1**: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * cfw kill quara book
   */
  ruleName?: string;
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
      autoResponseType: 'AutoResponseType',
      executionCondition: 'ExecutionCondition',
      id: 'Id',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleName: 'RuleName',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionConfig: 'string',
      actionType: 'string',
      autoResponseType: 'string',
      executionCondition: 'string',
      id: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ruleName: 'string',
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

