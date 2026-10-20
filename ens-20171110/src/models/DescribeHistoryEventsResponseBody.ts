// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * e-d71ff150945b9c02eb6ebc0016328468
   */
  eventId?: string;
  /**
   * @remarks
   * The event level. Valid values:
   * - CRITICAL: Critical.
   * - WARN: Warning.
   * - INFO: Information.
   * 
   * @example
   * WARN
   */
  eventLevel?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * - Inquiring: Inquiring.
   * - Scheduled: Scheduled.
   * - Executing: Executing.
   * - Executed: Executed.
   * - Failed: Failed.
   * - Canceled: Canceled.
   * - Avoided: Avoided.
   * 
   * @example
   * Inquiring
   */
  eventStatus?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * - Instance:SystemFailure.Redeploy: The instance deployment due to a system fault.
   * - Instance:SystemFailure.Reboot: The instance is restarted due to a system fault.
   * - Instance:RegionNetworkDown: The edge zone network break.
   * - Disk:Stalled: The disk performance is degraded.
   * - EnsRegion:NetworkMigration: Instance migration due to a system fault.
   * - IP:SafeRisk: IP alerting.
   * - IP:SafeBan: The IP address is blocked.
   * - Instance:SystemUpgrade.Migrate: The instance needs to be migrated due to an underlying upgrade.
   * - Instance:SystemMaintenance.Redeploy: The instance deployment due to system maintenance.
   * 
   * @example
   * Instance:SystemFailure.Reboot
   */
  eventType?: string;
  /**
   * @remarks
   * The extended attribute.
   * 
   * @example
   * {}
   */
  extendedAttribute?: string;
  /**
   * @remarks
   * The scheduled execution time of the event, in milliseconds.
   * 
   * @example
   * 1715578245000
   */
  notBefore?: number;
  notBeforeUtcTime?: string;
  /**
   * @remarks
   * The publish time, in milliseconds.
   * 
   * @example
   * 1715578245000
   */
  publishTime?: number;
  publishUtcTime?: string;
  /**
   * @remarks
   * The reason for the event.
   * 
   * @example
   * The current system policy quota is insufficient
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the associated resource.
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
      notBeforeUtcTime: 'NotBeforeUtcTime',
      publishTime: 'PublishTime',
      publishUtcTime: 'PublishUtcTime',
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
      notBeforeUtcTime: 'string',
      publishTime: 'number',
      publishUtcTime: 'string',
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
   * The list of events.
   */
  events?: DescribeHistoryEventsResponseBodyEvents[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5359599C-F656-57BD-8A0D-329A2FD511A6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

