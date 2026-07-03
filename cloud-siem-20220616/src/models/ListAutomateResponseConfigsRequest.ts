// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutomateResponseConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the handling action. Valid values:
   * 
   * - **doPlaybook**: executes a playbook.
   * 
   * - **changeEventStatus**: changes the status of an event.
   * 
   * - **changeThreatLevel**: changes the threat level of an event.
   * 
   * @example
   * doPlaybook
   */
  actionType?: string;
  /**
   * @remarks
   * The type of the automated response. Valid values:
   * 
   * - **event**
   * 
   * - **alert**
   * 
   * @example
   * event
   */
  autoResponseType?: string;
  /**
   * @remarks
   * The page number. The value must be 1 or greater.
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
   * The number of entries per page. The maximum value is 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the playbook.
   * 
   * @example
   * system_aliyun_aegis_kill_quara_book
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The region of the Data Management center. Select a region based on the region where your assets are located. Valid values:
   * 
   * - **cn-hangzhou**: your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - **ap-southeast-1**: your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the response rule.
   * 
   * - preset: predefined
   * 
   * - custom: custom
   * 
   * @example
   * custom
   */
  responseRuleType?: string;
  /**
   * @remarks
   * The ID of the member to which the administrator switches.
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
   * - 1: the view of all accounts that belong to the enterprise.
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
   * 
   * - **0**: disabled
   * 
   * - **100**: enabled
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

