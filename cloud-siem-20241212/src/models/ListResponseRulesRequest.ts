// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResponseRulesRequest extends $dara.Model {
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
   * AAAAASLVeIxed4466E0LVmGkzwS6hJKd9DGVGMDRM6Lu****
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * doPlaybook
   */
  responseActionType?: string;
  /**
   * @example
   * Send Notification When Generating Urgent Incident
   */
  responseRuleName?: string;
  /**
   * @example
   * 0
   */
  responseRuleStatus?: number;
  /**
   * @example
   * custom
   */
  responseRuleType?: string;
  /**
   * @example
   * event
   */
  responseTriggerType?: string;
  /**
   * @example
   * 173326*******
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

