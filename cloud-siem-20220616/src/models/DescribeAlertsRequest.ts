// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * Try SNMP weak password
   */
  alertName?: string;
  /**
   * @remarks
   * The status of the alert.
   */
  alertStatus?: string[];
  /**
   * @remarks
   * The title of the alert.
   * 
   * @example
   * Unusual Logon-login_common_account
   */
  alertTitle?: string;
  /**
   * @remarks
   * The type of the alert.
   * 
   * @example
   * Scan
   */
  alertType?: string;
  /**
   * @remarks
   * The ID of the alert associated with the event.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The ID of the asset.
   * 
   * @example
   * F3385128-69A5-3EE8-BD05-FBEE7DB2****
   */
  assetId?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * hostname-****
   */
  assetName?: string;
  /**
   * @remarks
   * The current page number of the list. The value must be greater than or equal to 1.
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
   * The ID of the entity.
   * 
   * @example
   * f366e287ea530e7a324cbe987993****
   */
  entityId?: string;
  /**
   * @remarks
   * The name of the entity.
   * 
   * @example
   * launch-advisor-*****
   */
  entityName?: string;
  /**
   * @remarks
   * Specifies whether the threat is blocked. Valid values:
   * - 0: Detected.
   * - 1: Blocked.
   * 
   * @example
   * 1
   */
  isDefend?: string;
  /**
   * @remarks
   * The alert query type. Valid values:
   * - system: Aggregation analysis alert.
   * - custom: Custom analysis alert.
   * - cfw: Cloud Firewall.
   * - waf: Web Application Firewall.
   * - edr: Endpoint Detection and Response.
   * - other: Other.
   * 
   * @example
   * custom
   */
  labelType?: string;
  /**
   * @remarks
   * The threat level. The value is a JSON array. Valid values:
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
   * The region where the data management center of Threat Analysis is located. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Assets in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose view the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * - 0: View of the current Alibaba Cloud account.
   * - 1: View of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The source product of the alert associated with the event.
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
   * The ID of the Alibaba Cloud account actually associated with the alert.
   * 
   * @example
   * 176555323***
   */
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      alertStatus: 'AlertStatus',
      alertTitle: 'AlertTitle',
      alertType: 'AlertType',
      alertUuid: 'AlertUuid',
      assetId: 'AssetId',
      assetName: 'AssetName',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      entityId: 'EntityId',
      entityName: 'EntityName',
      isDefend: 'IsDefend',
      labelType: 'LabelType',
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
      alertStatus: { 'type': 'array', 'itemType': 'string' },
      alertTitle: 'string',
      alertType: 'string',
      alertUuid: 'string',
      assetId: 'string',
      assetName: 'string',
      currentPage: 'number',
      endTime: 'number',
      entityId: 'string',
      entityName: 'string',
      isDefend: 'string',
      labelType: 'string',
      level: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      source: 'string',
      startTime: 'number',
      subUserId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertStatus)) {
      $dara.Model.validateArray(this.alertStatus);
    }
    if(Array.isArray(this.level)) {
      $dara.Model.validateArray(this.level);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

