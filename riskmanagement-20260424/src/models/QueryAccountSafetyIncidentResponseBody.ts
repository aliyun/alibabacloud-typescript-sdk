// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountSafetyIncidentResponseBodyDataListDateExtras extends $dara.Model {
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  alertEndTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  alertStartTime?: string;
  /**
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
   * @example
   * success_service
   */
  actionCode?: string;
  /**
   * @example
   * 处罚直接成功
   */
  actionName?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  antiPunishTime?: string;
  dateExtras?: QueryAccountSafetyIncidentResponseBodyDataListDateExtras;
  /**
   * @example
   * 4ba4065e0b2206c05f86d5eaa00ae520
   */
  eventId?: string;
  /**
   * @example
   * ak leak.
   */
  eventImpact?: string;
  /**
   * @example
   * ak leak.
   */
  eventName?: string;
  /**
   * @example
   * ak leak.
   */
  eventReason?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  punishTime?: string;
  /**
   * @example
   * suggestion
   */
  reinforcement?: string;
  /**
   * @example
   * i-2zeanc2b2vgfpbvp60cs
   */
  resourceId?: string;
  /**
   * @example
   * customer
   */
  resourceType?: string;
  /**
   * @example
   * Executing
   */
  status?: string;
  /**
   * @example
   * suggestion
   */
  tip?: string;
  /**
   * @example
   * help
   */
  userGuideName?: string;
  /**
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
   * @example
   * 1
   */
  current?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
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
  list?: QueryAccountSafetyIncidentResponseBodyDataList[];
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
   * @example
   * 200
   */
  code?: string;
  data?: QueryAccountSafetyIncidentResponseBodyData;
  /**
   * @example
   * successful‌
   */
  message?: string;
  /**
   * @example
   * 2FBDD713-00A5-5C98-B661-3FD31A349B6E
   */
  requestId?: string;
  /**
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

