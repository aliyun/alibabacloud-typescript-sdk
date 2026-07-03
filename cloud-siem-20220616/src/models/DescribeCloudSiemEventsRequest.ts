// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudSiemEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset that is associated with the event.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  assetId?: string;
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
   * The end time of the query. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The UUID of the entity that is associated with the event.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  entityUuid?: string;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * ECS unusual log in
   */
  eventName?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
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
   * The field to sort the event list by. Valid values:
   * 
   * - GmtModified: Sorts by modification time. This is the default value.
   * 
   * - ThreatScore: Sorts by threat score.
   * 
   * @example
   * ThreatScore
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
   * The region where the Data Management center of Threat Analysis & Response is located. Select the region based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Your assets are in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member. The administrator can use this ID to view the data of the member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all accounts that are managed by the administrator account.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The start time of the query. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * - 0: unhandled
   * 
   * - 1: in progress
   * 
   * - 5: failed
   * 
   * - 10: handled
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The threat level of the event. The value is a JSON array. Valid values:
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
  threadLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      assetId: 'AssetId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      entityUuid: 'EntityUuid',
      eventName: 'EventName',
      incidentUuid: 'IncidentUuid',
      order: 'Order',
      orderField: 'OrderField',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      startTime: 'StartTime',
      status: 'Status',
      threadLevel: 'ThreadLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'string',
      currentPage: 'number',
      endTime: 'number',
      entityUuid: 'string',
      eventName: 'string',
      incidentUuid: 'string',
      order: 'string',
      orderField: 'string',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      startTime: 'number',
      status: 'number',
      threadLevel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.threadLevel)) {
      $dara.Model.validateArray(this.threadLevel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

