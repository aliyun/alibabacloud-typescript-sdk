// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsResponseBodyItemsData extends $dara.Model {
  /**
   * @remarks
   * The type of the Alibaba Cloud service for the application group. Valid values:
   * 
   * - **web**: web application.
   * 
   * - **native**: native application.
   * 
   * @example
   * web
   */
  cmsProduct?: string;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * This parameter is used for pagination.
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
   * xxxx
   */
  detailReason?: string;
  /**
   * @remarks
   * The end of the query time range. The end time must be later than the start time. The interval between the start time and the end time must be within 24 hours. The time is in the `YYYY-MM-DDThh:mmZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-12-24T02:24:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The category of the system event. Valid values:
   * 
   * - **Exception**: anomalous activity
   * 
   * - **Optimize**: optimization events
   * 
   * - **Notification**: notification events
   * 
   * - **Maintenance**: scheduled O\\&M events
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
   * xxxx
   */
  eventDetail?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 600324
   */
  eventId?: string;
  /**
   * @remarks
   * An overview of the event\\"s impact.
   * 
   * @example
   * xxxx
   */
  eventImpact?: string;
  /**
   * @remarks
   * The event level. Valid values:
   * 
   * - **INFO**: notification
   * 
   * - **WARN**: warning
   * 
   * - **CRITICAL**: urgent
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
   * xxxxx
   */
  eventReason?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * 
   * - **Inquiring**: The event is being inquired.
   * 
   * - **Scheduled**: The event is scheduled.
   * 
   * - **Running**: The event is in progress.
   * 
   * - **Succeed**: The event is successful.
   * 
   * - **Failed**: The event failed.
   * 
   * - **Canceled**: The event is canceled.
   * 
   * @example
   * Inquiring
   */
  eventStatus?: string;
  /**
   * @remarks
   * The type of the system event. Valid values:
   * 
   * - **SystemMaintenance.Reboot**: The instance is restarted due to system maintenance.
   * 
   * - **SystemMaintenance.Redeploy**: The instance is redeployed due to system maintenance.
   * 
   * - **SystemFailure.Reboot**: The instance is restarted due to a system fault.
   * 
   * - **SystemFailure.Redeploy**: The instance is redeployed due to a system fault.
   * 
   * - **SystemFailure.Delete**: The instance is released because it failed to be created.
   * 
   * - **InstanceFailure.Reboot**: The instance is restarted due to an instance fault.
   * 
   * - **InstanceExpiration.Stop**: The subscription instance is stopped because its subscription expires.
   * 
   * - **InstanceExpiration.Delete**: The subscription instance is released because its subscription expires.
   * 
   * - **AccountUnbalanced.Stop**: The pay-as-you-go instance is stopped due to an overdue payment.
   * 
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
   * The processing status.
   * 
   * @example
   * done
   */
  handleStatus?: string;
  /**
   * @remarks
   * Indicates whether a lifecycle exists.
   * 
   * @example
   * false
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
   * The instance name.
   * 
   * @example
   * dhimgsearch
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the event is successfully closed. Valid values:
   * 
   * - **0**: closed
   * 
   * - **1**: open
   * 
   * @example
   * 1
   */
  isClosed?: number;
  /**
   * @remarks
   * The product name.
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
   * The resource type. Valid values:
   * 
   * - **Instance**: instance resource
   * 
   * - **Host**: host resource
   * 
   * - **User**: user resource
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
   * The start of the query time range. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2025-02-27T02:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the user to whom the resource belongs.
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
   */
  data?: DescribeHistoryEventsResponseBodyItemsData;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The ID of the region where the task is located.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The event source.
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
   * The name of the pending event.
   * 
   * @example
   * QiTian
   */
  subject?: string;
  /**
   * @remarks
   * The runtime of the query task. Unit: seconds (s).
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
   */
  items?: DescribeHistoryEventsResponseBodyItems[];
  /**
   * @remarks
   * The page number of the returned page. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values:
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
   * The request ID.
   * 
   * @example
   * EB07CFF0-D8A4-5C76-AED7-D00E26FC2***
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the list.
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

