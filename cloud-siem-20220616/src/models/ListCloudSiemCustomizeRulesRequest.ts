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
   * The end of the time range to query. Unit: milliseconds.
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
   * The sort method. Valid values:
   * 
   * *   desc: descending order.
   * *   asc: ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The field that is used to sort the rules. Valid values:
   * 
   * *   GmtModified: The rules are sorted based on the modification time.
   * *   Id (default): The rules are sorted based on the rule ID.
   * 
   * @example
   * Id
   */
  orderField?: string;
  /**
   * @remarks
   * The number of entries per page. The value can be up to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The ID of the destination account to which you switch the view from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * *   0: view of the current Alibaba Cloud account.
   * *   1: view of all accounts for the enterprise.
   * 
   * @example
   * 0
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
   * *   **predefine**
   * *   **customize**
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **0**: The rule is in the initial state.
   * *   **10**: The simulation data is tested.
   * *   **15**: The business data is being tested.
   * *   **20**: The business data test is complete.
   * *   **100**: The rule is in effect.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The threat level. The value must be a JSON array. Valid values:
   * 
   * *   **serious**: high-risk.
   * *   **suspicious**: medium-risk.
   * *   **remind**: low-risk.
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

