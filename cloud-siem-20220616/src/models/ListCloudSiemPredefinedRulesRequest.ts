// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudSiemPredefinedRulesRequest extends $dara.Model {
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
   * The ATT\\&CK technique.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The page number. The value must be greater than or equal to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The event generation method. Valid values:
   * 
   * - default: the default built-in method
   * 
   * - singleToSingle: An event is generated for each alert.
   * 
   * - allToSingle: An event is generated for all alerts in an epoch.
   * 
   * @example
   * allToSingle
   */
  eventTransferType?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 10223
   */
  id?: string;
  /**
   * @remarks
   * The log source.
   * 
   * @example
   * cloud_siem_alb_flow_log
   */
  logSource?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - desc: descending
   * 
   * - asc: ascending
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The field to sort the rules by. Valid values:
   * 
   * - GmtModified: Sorts by modification time.
   * 
   * - Id: Sorts by rule ID. This is the default value.
   * 
   * @example
   * Id
   */
  orderField?: string;
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
   * The region where the Data Management center of the threat analysis feature is located. Select the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: assets in the Chinese mainland or China (Hong Kong)
   * 
   * - ap-southeast-1: assets outside China
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that the administrator uses to switch to the perspective of a member.
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
   * - 1: the view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The rule name. The name can contain only letters, digits, underscores (_), and periods (.).
   * 
   * @example
   * waf_scan
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * 
   * - predefine: predefined
   * 
   * - customize: custom
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The start of the time range to query. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The rule status. Valid values:
   * 
   * - 0: initial
   * 
   * - 10: testing with simulated data
   * 
   * - 15: testing with production data
   * 
   * - 20: testing with production data is complete
   * 
   * - 100: published
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The threat level. The value is a JSON array. Valid values:
   * 
   * - serious: high
   * 
   * - suspicious: medium
   * 
   * - remind: low
   * 
   * @example
   * ["serious","suspicious","remind"]
   */
  threatLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      attCk: 'AttCk',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      eventTransferType: 'EventTransferType',
      id: 'Id',
      logSource: 'LogSource',
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
      attCk: 'string',
      currentPage: 'number',
      endTime: 'number',
      eventTransferType: 'string',
      id: 'string',
      logSource: 'string',
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

