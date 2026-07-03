// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostAutomateResponseConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the action that is specified in the automated response rule. The value is a JSON array.
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
   * The type of the action. Separate multiple values with commas. Valid values:
   * 
   * - **doPlaybook**: runs a playbook
   * 
   * - **changeEventStatus**: changes the status of the event
   * 
   * - **changeThreatLevel**: changes the threat level of the event
   * 
   * @example
   * doPlaybook,changeEventStatus
   */
  actionType?: string;
  /**
   * @remarks
   * The type of the automated response. Valid values:
   * 
   * - **event**: event
   * 
   * - **alert**: alert
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
   * The ID of the automated response rule.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The region where the Data Management center of Threat Analysis is located. Select a region based on the location of your assets. Valid values:
   * 
   * - **cn-hangzhou**: your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - **ap-southeast-1**: your assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user that the administrator uses to switch the view. This parameter is used when an administrator switches to the perspective of a member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * 
   * - 1: the view of all accounts that are managed by the administrator.
   * 
   * @example
   * 1
   */
  roleType?: number;
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

