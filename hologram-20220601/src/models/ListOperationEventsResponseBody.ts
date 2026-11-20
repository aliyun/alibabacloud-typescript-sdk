// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationEventsResponseBodyDataFollowerInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * hi
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the event can be canceled.
   * 
   * @example
   * true
   */
  cancelable?: boolean;
  /**
   * @remarks
   * Indicates whether the event schedule can be modified.
   * 
   * @example
   * true
   */
  changeScheduleTime?: boolean;
  /**
   * @remarks
   * The event details.
   * 
   * @example
   * {}
   */
  detail?: string;
  /**
   * @remarks
   * The event name filter.
   * 
   * @example
   * HOT_UPGRADE
   */
  eventName?: string;
  /**
   * @remarks
   * The event type filter.
   * 
   * @example
   * UPGRADE_ON_CUSTOMERS_BEHALF
   */
  eventType?: string;
  /**
   * @remarks
   * The list of follower instances.
   */
  followerInstances?: ListOperationEventsResponseBodyDataFollowerInstances[];
  /**
   * @remarks
   * Id
   * 
   * @example
   * 1826503661244379138
   */
  id?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * haha
   */
  instanceName?: string;
  /**
   * @remarks
   * The maintenance time window.
   * 
   * @example
   * 21:00-22:00
   */
  maintainWindow?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * hgpost-cn-sxfsdfsd
   */
  resourceId?: string;
  /**
   * @remarks
   * ScheduleTime
   * 
   * @example
   * 2024-08-22 15:49:28
   */
  scheduleTime?: string;
  /**
   * @remarks
   * State
   * 
   * @example
   * queued
   */
  state?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cancelable: 'Cancelable',
      changeScheduleTime: 'ChangeScheduleTime',
      detail: 'Detail',
      eventName: 'EventName',
      eventType: 'EventType',
      followerInstances: 'FollowerInstances',
      id: 'Id',
      instanceName: 'InstanceName',
      maintainWindow: 'MaintainWindow',
      resourceId: 'ResourceId',
      scheduleTime: 'ScheduleTime',
      state: 'State',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelable: 'boolean',
      changeScheduleTime: 'boolean',
      detail: 'string',
      eventName: 'string',
      eventType: 'string',
      followerInstances: { 'type': 'array', 'itemType': ListOperationEventsResponseBodyDataFollowerInstances },
      id: 'string',
      instanceName: 'string',
      maintainWindow: 'string',
      resourceId: 'string',
      scheduleTime: 'string',
      state: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.followerInstances)) {
      $dara.Model.validateArray(this.followerInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of events.
   */
  data?: ListOperationEventsResponseBodyData[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 50. Maximum value: 100.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D3AE84AB-0873-5FC7-A4C4-8CF869D2FA70
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 120
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListOperationEventsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

