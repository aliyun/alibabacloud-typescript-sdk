// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationEventsResponseBodyDataFollowerInstances extends $dara.Model {
  /**
   * @example
   * hgxxxx
   */
  instanceId?: string;
  /**
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
   * @example
   * true
   */
  cancelable?: boolean;
  /**
   * @example
   * true
   */
  changeScheduleTime?: boolean;
  /**
   * @example
   * {}
   */
  detail?: string;
  /**
   * @example
   * HOT_UPGRADE
   */
  eventName?: string;
  /**
   * @example
   * UPGRADE_ON_CUSTOMERS_BEHALF
   */
  eventType?: string;
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
   * @example
   * haha
   */
  instanceName?: string;
  /**
   * @example
   * 21:00-22:00
   */
  maintainWindow?: string;
  /**
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
  data?: ListOperationEventsResponseBodyData[];
  /**
   * @example
   * 3
   */
  pageNumber?: number;
  /**
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

