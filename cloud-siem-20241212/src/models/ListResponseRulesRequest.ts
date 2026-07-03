// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResponseRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. If you leave this parameter empty, the first page of results is returned.
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
   * The region of the data management center for threat analysis. Select the region where your assets are located. Valid values:
   * 
   * - `cn-hangzhou`: Your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - `ap-southeast-1`: Your assets are in international regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The action of the automated response rule. Valid values:
   * 
   * - `doPlaybook`: Executes a playbook.
   * 
   * - `changeEventStatus`: Updates the status of an event.
   * 
   * - `changeThreatLevel`: Updates the threat level of an event.
   * 
   * - `addEventTag`: Adds a tag to an event.
   * 
   * - `deleteEventTag`: Removes a tag from an event.
   * 
   * - `alertWhitelist`: Adds an alert to the allowlist.
   * 
   * @example
   * doPlaybook
   */
  responseActionType?: string;
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
   * The status of the automated response rule. Valid values:
   * 
   * - `0`: disabled
   * 
   * - `100`: enabled
   * 
   * @example
   * 0
   */
  responseRuleStatus?: number;
  /**
   * @remarks
   * The type of the automated response rule. Valid values:
   * 
   * - `preset`: A preset rule.
   * 
   * - `custom`: A custom rule.
   * 
   * @example
   * custom
   */
  responseRuleType?: string;
  /**
   * @remarks
   * The trigger type of the automated response rule. Valid values:
   * 
   * - `event`: An event is generated.
   * 
   * - `event_update`: An event is updated.
   * 
   * - `alert`: An alert is generated.
   * 
   * @example
   * event
   */
  responseTriggerType?: string;
  /**
   * @remarks
   * The ID of a member. An administrator can use this parameter to view data as the specified member.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - `0`: Displays data from the current Alibaba Cloud account.
   * 
   * - `1`: Displays data from all accounts in the enterprise.
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

