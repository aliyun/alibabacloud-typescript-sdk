// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsResponseBodyItemsData extends $dara.Model {
  /**
   * @remarks
   * The cloud service type of the application group. Valid values: **web** and native. The value web indicates a web application. The value **native** indicates a local application.
   * 
   * @example
   * web
   */
  cmsProduct?: string;
  /**
   * @remarks
   * The database engine.
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
   * xxxx
   */
  detailReason?: string;
  /**
   * @remarks
   * The time when the alert was closed. The time follows the ISO 8601 standard in the *yyyy-mm-dd*t*hh:mm*z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-06T11:46:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The system event category. For more information, see [View the event history of an ApsaraDB RDS instance](https://help.aliyun.com/document_detail/129759.html).
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
   * ENT000014
   */
  eventCode?: string;
  /**
   * @remarks
   * The event details.
   * 
   * @example
   * xxxxx
   */
  eventDetail?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 669036
   */
  eventId?: string;
  /**
   * @remarks
   * The event impact.
   * 
   * @example
   * xxxxx
   */
  eventImpact?: string;
  /**
   * @remarks
   * The event level. For more information, see [View the event history of an ApsaraDB RDS instance](https://help.aliyun.com/document_detail/129759.html).
   * 
   * @example
   * high
   */
  eventLevel?: string;
  /**
   * @remarks
   * The event source.
   * 
   * @example
   * xxxxx
   */
  eventReason?: string;
  /**
   * @remarks
   * The status of the alert event. Valid values:
   * 
   * *   **1**: pending
   * *   **2**: ignored
   * *   **4**: confirmed
   * *   **8**: marked as false positive
   * *   **16**: handling
   * *   **32**: handled
   * *   **64**: expired
   * 
   * @example
   * 1
   */
  eventStatus?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * @example
   * StatusNotification
   */
  eventType?: string;
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in the *yyyy-mm-dd*t*hh:mm*z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-17T16:05:40Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The update time. The time follows the ISO 8601 standard in the *yyyy-mm-dd*t*hh:mm*z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-14T09:44:39.000+0000
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
   * rg-acfmy****
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
   * Indicates whether the alert is closed. Valid values: **0**: closed. **1**: not closed.
   * 
   * @example
   * 0
   */
  isClosed?: number;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * rds
   */
  product?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-guangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type. The value is fixed as **INSTANCE**.
   * 
   * @example
   * INSTANCE
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
   * The start time. The time follows the ISO 8601 standard in the *yyyy-mm-dd*t*hh:mm*z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-29T07:23Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the resource owner.
   * 
   * @example
   * 16986832xxxxx
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
   * The details of the data.
   */
  data?: DescribeHistoryEventsResponseBodyItemsData;
  /**
   * @remarks
   * The task ID
   * 
   * @example
   * 4309
   */
  id?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
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
   * The database engine version.
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
   * The amount of time that has elapsed from the start time of the query. Unit: seconds.
   * 
   * @example
   * 1675232573125
   */
  time?: string;
  /**
   * @remarks
   * The event type. For more information, see [View the event history of an ApsaraDB RDS instance](https://help.aliyun.com/document_detail/129759.html).
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
   * The events.
   */
  items?: DescribeHistoryEventsResponseBodyItems[];
  /**
   * @remarks
   * The page number. Valid values: any non-zero positive integer. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 30.
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
   * 7A41C147-C8D0-4DAE-A1A2-17EBCD60DFA1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
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

