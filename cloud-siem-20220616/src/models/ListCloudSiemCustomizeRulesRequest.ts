// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudSiemCustomizeRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The alert type.
   * 
   * @example
   * scan
   */
  alertType?: string;
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
   * The end time of the query. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the custom rule.
   * 
   * @example
   * 10223
   */
  id?: string;
  /**
   * @remarks
   * The order in which you want to sort the custom rules. Valid values:
   * 
   * - desc: descending order
   * 
   * - asc: ascending order
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The field that you use to sort the custom rules. Valid values:
   * 
   * - GmtModified: sorts the rules by modification time.
   * 
   * - Id: sorts the rules by rule ID. This is the default value.
   * 
   * @example
   * Id
   */
  orderField?: string;
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
   * The region where the data management center of Threat Analysis is deployed. You must select the region where your assets reside. Valid values:
   * 
   * - **cn-hangzhou**: your assets are in the Chinese mainland or Hong Kong (China).
   * 
   * - **ap-southeast-1**: your assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that is used to switch the administrator\\"s view to the view of a member.
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
   * - 1: the view of all members in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The name of the rule. The name can contain letters, digits, underscores (_), and periods (.).
   * 
   * @example
   * waf_scan
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * - **predefine**: predefined
   * 
   * - **customize**: custom
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - **0**: initial
   * 
   * - **10**: testing with simulated data
   * 
   * - **15**: testing with business data
   * 
   * - **20**: testing with business data is complete
   * 
   * - **100**: published
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The threat level. The value is a JSON array. Valid values:
   * 
   * - **serious**: high
   * 
   * - **suspicious**: medium
   * 
   * - **remind**: low
   * 
   * @example
   * ["serious","suspicious","remind"]
   */
  threatLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      id: 'Id',
      order: 'Order',
      orderField: 'OrderField',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      startTime: 'StartTime',
      status: 'Status',
      threatLevel: 'ThreatLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      currentPage: 'number',
      endTime: 'number',
      id: 'string',
      order: 'string',
      orderField: 'string',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ruleName: 'string',
      ruleType: 'string',
      startTime: 'number',
      status: 'number',
      threatLevel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.threatLevel)) {
      $dara.Model.validateArray(this.threatLevel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

