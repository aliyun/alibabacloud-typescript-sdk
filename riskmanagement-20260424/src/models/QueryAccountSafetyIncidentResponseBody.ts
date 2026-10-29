// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountSafetyIncidentResponseBodyDataListDateExtras extends $dara.Model {
  /**
   * @remarks
   * The end time of the alert.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  alertEndTime?: string;
  /**
   * @remarks
   * The time of the first alert.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  alertStartTime?: string;
  /**
   * @remarks
   * The time of the latest check.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  lastCheckTime?: string;
  static names(): { [key: string]: string } {
    return {
      alertEndTime: 'AlertEndTime',
      alertStartTime: 'AlertStartTime',
      lastCheckTime: 'LastCheckTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEndTime: 'string',
      alertStartTime: 'string',
      lastCheckTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountSafetyIncidentResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The code of the control action name.
   * 
   * @example
   * success_service
   */
  actionCode?: string;
  /**
   * @remarks
   * The name of the control action.
   * 
   * @example
   * Penalty applied successfully
   */
  actionName?: string;
  /**
   * @remarks
   * The time when the control is revoked.
   * 
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  antiPunishTime?: string;
  /**
   * @remarks
   * The cloud service code.
   * 
   * @example
   * ram
   */
  businessCode?: string;
  /**
   * @remarks
   * The called API operation.
   * 
   * @example
   * AddDomainRecord
   */
  callApi?: string;
  /**
   * @remarks
   * The control time information.
   */
  dateExtras?: QueryAccountSafetyIncidentResponseBodyDataListDateExtras;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 4ba4065e0b2206c05f86d5eaa00ae520
   */
  eventId?: string;
  /**
   * @remarks
   * The event impact.
   * 
   * @example
   * ak leak.
   */
  eventImpact?: string;
  /**
   * @remarks
   * The name of the control event.
   * 
   * @example
   * ak leak.
   */
  eventName?: string;
  /**
   * @remarks
   * The cause of the event.
   * 
   * @example
   * ak leak.
   */
  eventReason?: string;
  /**
   * @remarks
   * The name of the event subtype.
   * 
   * @example
   * Suspicious identity calling sensitive APIs
   */
  eventType?: string;
  /**
   * @remarks
   * The time of the abnormal call.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  exceptionCallTime?: string;
  /**
   * @remarks
   * The abnormal IP address.
   * 
   * @example
   * 39.1X4.63.XX9
   */
  exceptionIp?: string;
  /**
   * @remarks
   * The start time of the control action.
   * 
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  punishTime?: string;
  /**
   * @remarks
   * The hardening suggestions.
   * 
   * @example
   * suggestion
   */
  reinforcement?: string;
  /**
   * @remarks
   * The ID of the cloud resource.
   * 
   * @example
   * i-2zeanc2b2vgfpbvp60cs
   */
  resourceId?: string;
  /**
   * @remarks
   * The control object type.
   * 
   * @example
   * customer
   */
  resourceType?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * - **Executing**: The event is being executed.
   * - **Removed**: The event is removed.
   * - **Alerting**: The event is in the alerting state.
   * - **Ended**: The event has ended.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The remediation suggestions.
   * 
   * @example
   * suggestion
   */
  tip?: string;
  /**
   * @remarks
   * The name of the help document.
   * 
   * @example
   * help
   */
  userGuideName?: string;
  /**
   * @remarks
   * The URL of the help document.
   * 
   * @example
   * https://xxx.aliyun.com/
   */
  userGuideUrl?: string;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'ActionCode',
      actionName: 'ActionName',
      antiPunishTime: 'AntiPunishTime',
      businessCode: 'BusinessCode',
      callApi: 'CallApi',
      dateExtras: 'DateExtras',
      eventId: 'EventId',
      eventImpact: 'EventImpact',
      eventName: 'EventName',
      eventReason: 'EventReason',
      eventType: 'EventType',
      exceptionCallTime: 'ExceptionCallTime',
      exceptionIp: 'ExceptionIp',
      punishTime: 'PunishTime',
      reinforcement: 'Reinforcement',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
      tip: 'Tip',
      userGuideName: 'UserGuideName',
      userGuideUrl: 'UserGuideUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      actionName: 'string',
      antiPunishTime: 'string',
      businessCode: 'string',
      callApi: 'string',
      dateExtras: QueryAccountSafetyIncidentResponseBodyDataListDateExtras,
      eventId: 'string',
      eventImpact: 'string',
      eventName: 'string',
      eventReason: 'string',
      eventType: 'string',
      exceptionCallTime: 'string',
      exceptionIp: 'string',
      punishTime: 'string',
      reinforcement: 'string',
      resourceId: 'string',
      resourceType: 'string',
      status: 'string',
      tip: 'string',
      userGuideName: 'string',
      userGuideUrl: 'string',
    };
  }

  validate() {
    if(this.dateExtras && typeof (this.dateExtras as any).validate === 'function') {
      (this.dateExtras as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountSafetyIncidentResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  current?: string;
  /**
   * @remarks
   * The number of assets displayed per page when you configure Settings for paging in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of events.
   * 
   * @example
   * 20
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'string',
      pageSize: 'string',
      total: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountSafetyIncidentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The event data.
   */
  list?: QueryAccountSafetyIncidentResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: QueryAccountSafetyIncidentResponseBodyDataPageInfo;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryAccountSafetyIncidentResponseBodyDataList },
      pageInfo: QueryAccountSafetyIncidentResponseBodyDataPageInfo,
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountSafetyIncidentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > 200: Success. Other values (such as 500 or 400): Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryAccountSafetyIncidentResponseBodyData;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * successful‌
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FBDD713-00A5-5C98-B661-3FD31A349B6E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAccountSafetyIncidentResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

