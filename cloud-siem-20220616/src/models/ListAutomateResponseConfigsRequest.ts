// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutomateResponseConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the action. Valid values:
   * - **doPlaybook**: Execute a playbook.
   * - **changeEventStatus**: Change the event status.
   * - **changeThreatLevel**: Change the event threat level.
   * 
   * @example
   * doPlaybook
   */
  actionType?: string;
  /**
   * @remarks
   * The type of the automated response. Valid values:
   * - **event**: Event.
   * - **alert**: Alert.
   * 
   * @example
   * event
   */
  autoResponseType?: string;
  /**
   * @remarks
   * The current page number. The value must be greater than or equal to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * system_aliyun_aegis_kill_quara_book
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. Select the region based on the region where your assets are located. Valid values:
   * - **cn-hangzhou**: Assets are located in the Chinese mainland and Hong Kong (China).
   * - **ap-southeast-1**: Assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the response rule. Valid values:
   * - preset: Predefined.
   * - custom: Custom.
   * 
   * @example
   * custom
   */
  responseRuleType?: string;
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
   * - 0: Current Alibaba Cloud account view.
   * - 1: View of all accounts in the enterprise.
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
   * The status of the rule. Valid values:
   * - **0**: Disabled.
   * - **100**: Enabled.
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
      actionType: 'ActionType',
      autoResponseType: 'AutoResponseType',
      currentPage: 'CurrentPage',
      id: 'Id',
      pageSize: 'PageSize',
      playbookUuid: 'PlaybookUuid',
      regionId: 'RegionId',
      responseRuleType: 'ResponseRuleType',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleName: 'RuleName',
      status: 'Status',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      autoResponseType: 'string',
      currentPage: 'number',
      id: 'number',
      pageSize: 'number',
      playbookUuid: 'string',
      regionId: 'string',
      responseRuleType: 'string',
      roleFor: 'number',
      roleType: 'number',
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

