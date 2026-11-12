// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudSiemEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset associated with the event.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  assetId?: string;
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
   * The end time for querying events, in milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The UUID of the entity associated with the event.
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
   * The ID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The sort order of the event list. Valid values:
   * - desc: Descending order.
   * - asc: Ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The field used to sort the event list. Valid values:
   * - GmtModified: Sorts by event generation time (default).
   * - ThreatScore: Sorts by event threat score.
   * 
   * @example
   * ThreatScore
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
   * The region where the data management center of Cloud Threat Detection and Response (CTDR) is located. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Assets are in regions outside China.
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
   * 
   * - 0: Current Alibaba Cloud account view.
   * - 1: View of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The start time for querying events, in milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the event. Valid values:
   * - 0: Unhandled.
   * - 1: Processing.
   * - 5: Failed.
   * - 10: Handled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The threat level of the event, in JSON array format. Valid values:
   * - serious: High.
   * - suspicious: Medium.
   * - remind: Low.
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

