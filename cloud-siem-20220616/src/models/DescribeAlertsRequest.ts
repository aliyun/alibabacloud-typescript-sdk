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
   * The unique ID of the alert.
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
   * The end of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * Specifies whether the threat is defended. Valid values:
   * 
   * - `0`: detected
   * 
   * - `1`: blocked
   * 
   * @example
   * 1
   */
  isDefend?: string;
  /**
   * @remarks
   * The alert type. Valid values:
   * 
   * - `system`: An alert generated from aggregated analysis
   * 
   * - `custom`: An alert generated from custom analysis
   * 
   * - `cfw`: firewall
   * 
   * - `waf`: web application firewall
   * 
   * - `edr`: endpoint detection and response
   * 
   * - `other`: other
   * 
   * @example
   * custom
   */
  labelType?: string;
  /**
   * @remarks
   * The threat levels. This parameter is a JSON array. Valid values:
   * 
   * - `serious`: high
   * 
   * - `suspicious`: medium
   * 
   * - `remind`: low
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
   * The region where the data management center of the threat analysis feature resides. You are required to specify this parameter based on the region where your assets reside. Valid values:
   * 
   * - `cn-hangzhou`: Your assets reside in the Chinese mainland or Hong Kong (China).
   * 
   * - `ap-southeast-1`: Your assets reside outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user who is used to switch the account to view the data of the member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type of the alert. Valid values:
   * 
   * - `0`: current account
   * 
   * - `1`: all accounts
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The source of the alert.
   * 
   * @example
   * sas
   */
  source?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is associated with the alert.
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

