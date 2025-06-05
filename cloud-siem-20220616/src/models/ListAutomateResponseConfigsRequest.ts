// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutomateResponseConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the handling action. Valid values:
   * 
   * *   doPlaybook: runs a playbook.
   * *   changeEventStatus: changes the status of an event.
   * *   changeThreatLevel: changes the risk level of an event.
   * 
   * @example
   * doPlaybook
   */
  actionType?: string;
  /**
   * @remarks
   * The type of the automated response rule. Valid values:
   * 
   * *   event
   * *   alert
   * 
   * @example
   * event
   */
  autoResponseType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
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
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  responseRuleType?: string;
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
   * *   0: disabled
   * *   100: enabled
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

