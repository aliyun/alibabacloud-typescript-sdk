// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsResponseBodyItemsData extends $dara.Model {
  /**
   * @remarks
   * The cloud service type of the application group. Valid values:
   * - **web**: Web applications.
   * - **native**: Native applications.
   * 
   * @example
   * web
   */
  cmsProduct?: string;
  /**
   * @remarks
   * The type of the database.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The pagination parameter.
   * 
   * @example
   * 1
   */
  detailImpact?: string;
  /**
   * @remarks
   * The details of the instance operation.
   * 
   * @example
   * The instance needs to be restarted due to system maintenance
   */
  detailReason?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time, and the interval between the start time and the end time must be within 24 hours. Specify the time in the `YYYY-MM-DDThh:mmZ` format (UTC time).
   * 
   * @example
   * 2025-12-24T02:24:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The category of the system event. Valid values:
   * - **Exception**: Exception events.
   * - **Optimize**: Optimization events.
   * - **Notification**: Notification events.
   * - **Maintenance**: Scheduled O&M events.
   * 
   * @example
   * Exception
   */
  eventCategory?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aamexg3015
   */
  eventCode?: string;
  /**
   * @remarks
   * The event details.
   * 
   * @example
   * The instance will be restarted within the maintenance window
   */
  eventDetail?: string;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 600324
   */
  eventId?: string;
  /**
   * @remarks
   * The impact overview of the event.
   * 
   * @example
   * The instance connection may be briefly interrupted
   */
  eventImpact?: string;
  /**
   * @remarks
   * The event level. Valid values:
   * - **INFO**: Notification.
   * - **WARN**: Warning.
   * - **CRITICAL**: Critical.
   * 
   * @example
   * INFO
   */
  eventLevel?: string;
  /**
   * @remarks
   * The source of the event operation.
   * 
   * @example
   * System maintenance
   */
  eventReason?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * - **Inquiring**: Inquiring.
   * - **Scheduled**: Scheduled.
   * - **Running**: Running.
   * - **Succeed**: Succeeded.
   * - **Failed**: Failed.
   * - **Canceled**: Canceled.
   * 
   * @example
   * Inquiring
   */
  eventStatus?: string;
  /**
   * @remarks
   * The system event type. Valid values: 
   * - **SystemMaintenance.Reboot**: The instance is restarted due to system maintenance.
   * - **SystemMaintenance.Redeploy**: Redeployment of the instance due to system maintenance.
   * - **SystemFailure.Reboot**: The instance is restarted due to a system fault.
   * - **SystemFailure.Redeploy**: Redeployment of the instance due to a system fault.
   * - **SystemFailure.Delete**: The instance is released because instance creation failed.
   * - **InstanceFailure.Reboot**: The instance is restarted due to an instance fault.
   * - **InstanceExpiration.Stop**: The subscription instance is stopped due to expiration.
   * - **InstanceExpiration.Delete**: The subscription instance is released due to expiration.
   * - **AccountUnbalanced.Stop**: The pay-as-you-go instance is stopped due to an overdue payment.
   * - **AccountUnbalanced.Delete**: The pay-as-you-go instance is released due to an overdue payment.
   * 
   * @example
   * SystemFailure.Delete
   */
  eventType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-07-15T14:53:06+08:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-01-07T15:10:32+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The handling status.
   * 
   * @example
   * done
   */
  handleStatus?: string;
  /**
   * @remarks
   * Indicates whether the event has a lifecycle.
   * 
   * @example
   * 0
   */
  hasLifeCycle?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pc-2ze150h1p29t***
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * dhimgsearch
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the item is closed. Valid values:
   * - **0**: Closed.
   * - **1**: Open.
   * 
   * @example
   * 1
   */
  isClosed?: number;
  /**
   * @remarks
   * The name of the product.
   * 
   * @example
   * polardb
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * - **Instance**: Instance resources.
   * - **Host**: Host resources.
   * - **User**: User resources.
   * 
   * @example
   * Host
   */
  resourceType?: string;
  /**
   * @remarks
   * The type of the source data.
   * 
   * @example
   * loanBill
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the query. Format: `yyyy-MM-ddTHH:mm:ssZ` (UTC time).
   * 
   * @example
   * 2025-02-27T02:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the user to which the resource belongs.
   * 
   * @example
   * 1540497309282125
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      cmsProduct: 'CmsProduct',
      dbType: 'DbType',
      detailImpact: 'DetailImpact',
      detailReason: 'DetailReason',
      endTime: 'EndTime',
      eventCategory: 'EventCategory',
      eventCode: 'EventCode',
      eventDetail: 'EventDetail',
      eventId: 'EventId',
      eventImpact: 'EventImpact',
      eventLevel: 'EventLevel',
      eventReason: 'EventReason',
      eventStatus: 'EventStatus',
      eventType: 'EventType',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      handleStatus: 'HandleStatus',
      hasLifeCycle: 'HasLifeCycle',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isClosed: 'IsClosed',
      product: 'Product',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsProduct: 'string',
      dbType: 'string',
      detailImpact: 'string',
      detailReason: 'string',
      endTime: 'string',
      eventCategory: 'string',
      eventCode: 'string',
      eventDetail: 'string',
      eventId: 'string',
      eventImpact: 'string',
      eventLevel: 'string',
      eventReason: 'string',
      eventStatus: 'string',
      eventType: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      handleStatus: 'string',
      hasLifeCycle: 'number',
      instanceId: 'string',
      instanceName: 'string',
      isClosed: 'number',
      product: 'string',
      regionId: 'string',
      resourceType: 'string',
      sourceType: 'string',
      startTime: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryEventsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The data overview.
   * 
   * @example
   * {}
   */
  data?: DescribeHistoryEventsResponseBodyItemsData;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The region ID of the region where the task is located.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The source of the event.
   * 
   * @example
   * loanBill
   */
  source?: string;
  /**
   * @remarks
   * The database version.
   * 
   * @example
   * 8.0
   */
  specversion?: string;
  /**
   * @remarks
   * The name of the event to be processed.
   * 
   * @example
   * QiTian
   */
  subject?: string;
  /**
   * @remarks
   * The running time of the queried task. Unit: seconds.
   * 
   * @example
   * 1758680209206
   */
  time?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * host
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      id: 'Id',
      region: 'Region',
      source: 'Source',
      specversion: 'Specversion',
      subject: 'Subject',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeHistoryEventsResponseBodyItemsData,
      id: 'string',
      region: 'string',
      source: 'string',
      specversion: 'string',
      subject: 'string',
      time: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
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
   * 
   * @example
   * []
   */
  items?: DescribeHistoryEventsResponseBodyItems[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EB07CFF0-D8A4-5C76-AED7-D00E26FC2***
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeHistoryEventsResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

