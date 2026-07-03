// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertsWithEventRequest extends $dara.Model {
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
   * The title of the alert.
   * 
   * @example
   * Scan-Try SNMP weak password
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
   * The ID of the asset.
   * 
   * @example
   * 09414e9ebaa9c19b84d851abb91d****
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
   * 21034e803f492b926cea9e5beab4****
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
   * The incident ID.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * Indicates whether the attack is defended. Valid values:
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
   * The threat level. The value is a JSON array. Valid values:
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
   * The region in which the data management center of Threat Analysis resides. You can determine the region based on the region in which your assets reside. Valid values:
   * 
   * - `cn-hangzhou`: Your assets reside in the Chinese mainland or Hong Kong (China).
   * 
   * - `ap-southeast-1`: Your assets reside in regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member in the resource directory.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The entity of the alert. Valid values:
   * 
   * - `0`: the current Alibaba Cloud account.
   * 
   * - `1`: all members in the resource directory.
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
   * The start of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the account that is associated with the alert.
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

