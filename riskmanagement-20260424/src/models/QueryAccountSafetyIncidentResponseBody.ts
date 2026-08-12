// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountSafetyIncidentResponseBodyDataListDateExtras extends $dara.Model {
  /**
   * @remarks
   * The time when the alert ended.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  alertEndTime?: string;
  /**
   * @remarks
   * The time when the first alert was triggered.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  alertStartTime?: string;
  /**
   * @remarks
   * The time of the latest detection.
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
   * The control action name code.
   * 
   * @example
   * success_service
   */
  actionCode?: string;
  /**
   * @remarks
   * The control action name.
   * 
   * @example
   * Penalty executed successfully.
   */
  actionName?: string;
  /**
   * @remarks
   * The time when the control action was removed.
   * 
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  antiPunishTime?: string;
  /**
   * @remarks
   * The control action time information.
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
   * The control event name.
   * 
   * @example
   * ak leak.
   */
  eventName?: string;
  /**
   * @remarks
   * The event reason.
   * 
   * @example
   * ak leak.
   */
  eventReason?: string;
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
   * The hardening suggestion.
   * 
   * @example
   * suggestion
   */
  reinforcement?: string;
  /**
   * @remarks
   * The cloud resource ID.
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
   * 
   * - **Executing**: In progress.
   * - **Removed**: Removed.
   * - **Alerting**: Alerting.
   * - **Ended**: Ended.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The handling suggestion.
   * 
   * @example
   * suggestion
   */
  tip?: string;
  /**
   * @remarks
   * The help topic name.
   * 
   * @example
   * help
   */
  userGuideName?: string;
  /**
   * @remarks
   * The help topic URL.
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
      dateExtras: 'DateExtras',
      eventId: 'EventId',
      eventImpact: 'EventImpact',
      eventName: 'EventName',
      eventReason: 'EventReason',
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
      dateExtras: QueryAccountSafetyIncidentResponseBodyDataListDateExtras,
      eventId: 'string',
      eventImpact: 'string',
      eventName: 'string',
      eventReason: 'string',
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
   * The number of assets displayed per page when you perform a paging query.
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
   * > 200: The request was successful. Other values (such as 500 or 400): An error occurred.
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
   * The message returned.
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
   * Indicates whether the request was successful.
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

