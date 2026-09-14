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
   * The current page number. The value must be greater than or equal to 1.
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
   * The incident ID.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * Specifies whether the alert has been defended. Valid values:
   * 
   * - 0: detected
   * - 1: blocked
   * 
   * @example
   * 1
   */
  isDefend?: string;
  /**
   * @remarks
   * The threat level in JSON array format. Valid values:
   * - serious: High.
   * - suspicious: Medium.
   * - remind: Low.
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
   * The region where the threat analysis data management center resides. Specify the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: Your assets reside in Chinese mainland or China (Hong Kong).
   * - ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The member account ID of the resource directory.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * - 1: the view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The alert data source.
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
   * The ID of the account associated with the alert.
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

