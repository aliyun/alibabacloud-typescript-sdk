// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResponseRulesRequest extends $dara.Model {
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
   * The pagination token that marks the current reading position. Leave this parameter empty to read from the beginning.
   * 
   * @example
   * AAAAASLVeIxed4466E0LVmGkzwS6hJKd9DGVGMDRM6Lu****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the threat analysis data management center resides. Select the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: Your assets belong to the Chinese mainland or Hong Kong (China).
   * - ap-southeast-1: Your assets belong to regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The action type of the automatic response rule. Valid values:
   * 
   * - doPlaybook: execute a playbook
   * - changeEventStatus: update event status
   * - changeThreatLevel: update event threat level
   * - addEventTag: add an event label
   * - deleteEventTag: delete an event label
   * - alertWhitelist: add alert to whitelist
   * 
   * @example
   * doPlaybook
   */
  responseActionType?: string;
  /**
   * @remarks
   * The name of the automatic response rule.
   * 
   * @example
   * Send Notification When Generating Urgent Incident
   */
  responseRuleName?: string;
  /**
   * @remarks
   * The status of the automatic response rule. Valid values:
   * 
   * - 0: disabled
   * - 100: enabled
   * 
   * @example
   * 0
   */
  responseRuleStatus?: number;
  /**
   * @remarks
   * The type of the response rule. Valid values:
   * 
   * - preset: predefined
   * - custom: custom
   * 
   * @example
   * custom
   */
  responseRuleType?: string;
  /**
   * @remarks
   * The trigger type of the automatic response rule. Valid values:
   * 
   * - event: event occurred
   * - event_update: event updated
   * - alert: alert occurred
   * 
   * @example
   * event
   */
  responseTriggerType?: string;
  /**
   * @remarks
   * The user ID that the administrator switches to when viewing from another member\\"s perspective.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: the current Alibaba Cloud account view.
   * - 1: the view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      responseActionType: 'ResponseActionType',
      responseRuleName: 'ResponseRuleName',
      responseRuleStatus: 'ResponseRuleStatus',
      responseRuleType: 'ResponseRuleType',
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
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      responseActionType: 'string',
      responseRuleName: 'string',
      responseRuleStatus: 'number',
      responseRuleType: 'string',
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

