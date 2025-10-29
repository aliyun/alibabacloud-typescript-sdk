// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * e-d71ff150945b9c02eb6ebc0016328468
   */
  eventId?: string;
  /**
   * @remarks
   * The level of the specific event. Valid values:
   * 
   * *   CRITICAL
   * *   WARN
   * *   INFO
   * 
   * @example
   * WARN
   */
  eventLevel?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   Inquiring
   * *   Scheduled
   * *   Executing
   * *   Executed
   * *   Failed
   * *   Canceled
   * *   Avoided
   * 
   * @example
   * Inquiring
   */
  eventStatus?: string;
  /**
   * @remarks
   * The type of the event. Description:
   * 
   * *   Instance:SystemFailure.Redeploy: The instance is redeployed due to system issues.
   * *   Instance:SystemFailure.Reboot: The instance is restarted due to a system error.
   * *   Instance:RegionNetworkDown: The node network is interrupted.
   * *   Disk:Stalled: The disk performance is impaired.
   * *   EnsRegion:NetworkMigration: The instance is migrated due to a system error.
   * *   IP:SafeRisk: IP alerts.
   * *   IP:SafeBan: IP blocking.
   * *   Instance:SystemUpgrade.Migrate: The instance needs to be migrated due to underlying upgrades.
   * *   Instance:SystemMaintenance.Redeploy: The instance is redeployed due to system maintenance.
   * 
   * @example
   * Instance:SystemFailure.Reboot
   */
  eventType?: string;
  /**
   * @remarks
   * The extended attributes.
   * 
   * @example
   * {}
   */
  extendedAttribute?: string;
  /**
   * @remarks
   * The scheduled execution time of the event in milliseconds.
   * 
   * @example
   * 1715578245000
   */
  notBefore?: number;
  /**
   * @remarks
   * The release time in milliseconds.
   * 
   * @example
   * 1715578245000
   */
  publishTime?: number;
  /**
   * @remarks
   * The event cause.
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the associated resources.
   * 
   * @example
   * i-55qi8m11rr53c4i964md8a00l
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      eventLevel: 'EventLevel',
      eventStatus: 'EventStatus',
      eventType: 'EventType',
      extendedAttribute: 'ExtendedAttribute',
      notBefore: 'NotBefore',
      publishTime: 'PublishTime',
      reason: 'Reason',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      eventLevel: 'string',
      eventStatus: 'string',
      eventType: 'string',
      extendedAttribute: 'string',
      notBefore: 'number',
      publishTime: 'number',
      reason: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried events.
   */
  events?: DescribeHistoryEventsResponseBodyEvents[];
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 5359599C-F656-57BD-8A0D-329A2FD511A6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeHistoryEventsResponseBodyEvents },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

