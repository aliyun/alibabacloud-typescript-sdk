// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsResponseBodyItemsData extends $dara.Model {
  /**
   * @remarks
   * The type of the cloud service for the application group. Valid values:
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
   * redis
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
   * xxxx
   */
  detailReason?: string;
  /**
   * @remarks
   * The end time of the alert.
   * 
   * Specify the time in the YYYY-MM-DDTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-03-06T11:46:01Z
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
   * The code of the event.
   * 
   * @example
   * ENT000014
   */
  eventCode?: string;
  /**
   * @remarks
   * The details of the event.
   * 
   * @example
   * xxxxx
   */
  eventDetail?: string;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 669036
   */
  eventId?: string;
  /**
   * @remarks
   * The impact overview of the event.
   * 
   * @example
   * xxxxx
   */
  eventImpact?: string;
  /**
   * @remarks
   * The event level. Valid values:
   * - **INFO**: Information.
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
   * xxxxx
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
   * Succeed
   */
  eventStatus?: string;
  /**
   * @remarks
   * The system event type. Valid values: 
   * - **SystemMaintenance.Reboot**: The instance is restarted due to system maintenance.
   * - **SystemMaintenance.Redeploy**: Redeployment of the instance due to system maintenance.
   * - **SystemFailure.Reboot**: The instance is restarted due to a system fault.
   * - **SystemFailure.Redeploy**: Redeployment of the instance due to a system fault.
   * - **SystemFailure.Delete**: The instance is released due to a failed creation.
   * - **InstanceFailure.Reboot**: The instance is restarted due to an instance fault.
   * - **InstanceExpiration.Stop**: The subscription instance is stopped due to expiration.
   * - **InstanceExpiration.Delete**: The subscription instance is released due to expiration.
   * - **AccountUnbalanced.Stop**: The pay-as-you-go instance is stopped due to an overdue payment.
   * - **AccountUnbalanced.Delete**: The pay-as-you-go instance is released due to an overdue payment.
   * 
   * @example
   * StatusNotification
   */
  eventType?: string;
  /**
   * @remarks
   * The creation time of the event.
   * 
   * @example
   * 2024-12-13 05:34:23
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The update time of the event.
   * 
   * @example
   * 2025-03-05 10:41:59
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
   * false
   */
  hasLifeCycle?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-bp15kjsoovqjam****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * normandy
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the event is closed. Valid values:
   * - **0**: Closed.
   * - **1**: Open.
   * 
   * @example
   * 0
   */
  isClosed?: number;
  /**
   * @remarks
   * The name of the product.
   * 
   * @example
   * kvstore
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
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
   * Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The type of the source data.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time.
   * 
   * Specify the time in the YYYY-MM-DDTHH:mmZ format. The time must be in UTC.
   * 
   * @example
   * 2025-09-30T21:13Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the user to which the resource belongs.
   * 
   * @example
   * 15532817595*****
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
   * The ID of the task.
   * 
   * @example
   * 4309
   */
  id?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hanghzou
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
   * The name of the pending event.
   * 
   * @example
   * Qitian
   */
  subject?: string;
  /**
   * @remarks
   * The running duration of the query task. Unit: seconds.
   * 
   * @example
   * 1734919325126
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
   * The page number.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 27B911BF-4E17-5F8A-A932-79DF2D3F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 430
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

