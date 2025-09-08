// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertsWithEventRequest extends $dara.Model {
  alertName?: string;
  /**
   * @remarks
   * The title of the alert.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitle?: string;
  alertType?: string;
  assetId?: string;
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
   * @example
   * 1577808000000
   */
  endTime?: number;
  entityId?: string;
  entityName?: string;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * Specifies whether an attack is defended. Valid values:
   * 
   * *   0: detected
   * *   1: blocked
   * 
   * @example
   * 1
   */
  isDefend?: string;
  /**
   * @remarks
   * The risk levels. The value is a JSON array. Valid values:
   * 
   * *   serious: high
   * *   suspicious: medium
   * *   remind: low
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
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
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
   * The type of the view.
   * 
   * *   0: view of the current Alibaba Cloud account.
   * *   1: view of all accounts for the enterprise.
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
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the account within which the alert is generated.
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

