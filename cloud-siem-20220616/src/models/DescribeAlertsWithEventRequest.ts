// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertsWithEventRequest extends $dara.Model {
  /**
   * @remarks
   * The alert name.
   * 
   * @example
   * Try SNMP weak password
   */
  alertName?: string;
  /**
   * @remarks
   * The alert title.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitle?: string;
  /**
   * @remarks
   * The alert type.
   * 
   * @example
   * Scan
   */
  alertType?: string;
  /**
   * @remarks
   * The asset ID.
   * 
   * @example
   * 09414e9ebaa9c19b84d851abb91d****
   */
  assetId?: string;
  /**
   * @remarks
   * The asset name.
   * 
   * @example
   * hostname-****
   */
  assetName?: string;
  /**
   * @remarks
   * The page number of the current page. The value must be greater than or equal to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * 21034e803f492b926cea9e5beab4****
   */
  entityId?: string;
  /**
   * @remarks
   * The entity name.
   * 
   * @example
   * launch-advisor-*****
   */
  entityName?: string;
  /**
   * @remarks
   * The aggregation drill-down dimension. Valid values: ALERT_NAME and ALERT_TYPE. This parameter is used together with GroupByValue.
   * 
   * @example
   * ALERT_NAME
   */
  groupBy?: string;
  /**
   * @remarks
   * The original grouping key returned by DescribeAlertsGroup. The name can contain up to 300 characters, and the type can contain up to 100 characters. Exact match is performed based on the original field.
   * 
   * @example
   * network_web_security_rule_10005239
   */
  groupByValue?: string;
  /**
   * @remarks
   * The incident ID.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * Specifies whether the threat is blocked. Valid values:
   * 
   * - 0: Detected.
   * - 1: Blocked.
   * 
   * @example
   * 1
   */
  isDefend?: string;
  /**
   * @remarks
   * The threat level. The value is formatted as a JSON array. Valid values:
   * - serious: High risk.
   * - suspicious: Medium risk.
   * - remind: Low risk.
   * 
   * @example
   * ["serious","suspicious","remind"]
   */
  level?: string[];
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
   * The region where the data management center of Threat Analysis is deployed. You must select the region of the management center based on the region where your assets are deployed. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member accounts in the resource folder.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * - 1: The view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The data source of the alert.
   * 
   * @example
   * sas
   */
  source?: string;
  /**
   * @remarks
   * The start time of the query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the linked account associated with the alert.
   * 
   * @example
   * 176555323***
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      alertTitle: 'AlertTitle',
      alertType: 'AlertType',
      assetId: 'AssetId',
      assetName: 'AssetName',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      entityId: 'EntityId',
      entityName: 'EntityName',
      groupBy: 'GroupBy',
      groupByValue: 'GroupByValue',
      incidentUuid: 'IncidentUuid',
      isDefend: 'IsDefend',
      level: 'Level',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      source: 'Source',
      startTime: 'StartTime',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      alertTitle: 'string',
      alertType: 'string',
      assetId: 'string',
      assetName: 'string',
      currentPage: 'number',
      endTime: 'number',
      entityId: 'string',
      entityName: 'string',
      groupBy: 'string',
      groupByValue: 'string',
      incidentUuid: 'string',
      isDefend: 'string',
      level: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      source: 'string',
      startTime: 'number',
      subUserId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.level)) {
      $dara.Model.validateArray(this.level);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

