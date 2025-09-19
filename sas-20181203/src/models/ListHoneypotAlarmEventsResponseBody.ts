// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotAlarmEventsResponseBodyHoneypotAlarmEventsMergeFieldList extends $dara.Model {
  /**
   * @remarks
   * The extended value that corresponds to the field key.
   * 
   * @example
   * dest_ip_ext
   */
  fieldExtInfo?: string;
  /**
   * @remarks
   * The key of the field.
   * 
   * @example
   * dest_ip_count
   */
  fieldKey?: string;
  /**
   * @remarks
   * The type of the field. You can ignore this internal parameter.
   * 
   * @example
   * level1_item3
   */
  fieldType?: string;
  /**
   * @remarks
   * The value that corresponds to the field key.
   * 
   * @example
   * 1
   */
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldExtInfo: 'FieldExtInfo',
      fieldKey: 'FieldKey',
      fieldType: 'FieldType',
      fieldValue: 'FieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldExtInfo: 'string',
      fieldKey: 'string',
      fieldType: 'string',
      fieldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotAlarmEventsResponseBodyHoneypotAlarmEvents extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 940272
   */
  alarmEventId?: number;
  /**
   * @remarks
   * The name of the alert event.
   * 
   * @example
   * Attack Honeypot
   */
  alarmEventName?: string;
  /**
   * @remarks
   * The type of the alert event.
   * 
   * @example
   * Initial Access
   */
  alarmEventType?: string;
  /**
   * @remarks
   * The unique identifier of the alert event.
   * 
   * @example
   * 167e6fc0d931917d2059efcd1d00f6ab
   */
  alarmUniqueInfo?: string;
  /**
   * @remarks
   * The total number of times that the alert event was generated.
   * 
   * @example
   * 11
   */
  eventCount?: number;
  /**
   * @remarks
   * The timestamp that indicates the time when the alert event was first detected. Unit: milliseconds.
   * 
   * @example
   * 1658193602000
   */
  firstTime?: number;
  /**
   * @remarks
   * The timestamp that indicates the time when the alert event was last detected. Unit: milliseconds.
   * 
   * @example
   * 1660610772000
   */
  lastTime?: number;
  /**
   * @remarks
   * The risk information.
   */
  mergeFieldList?: ListHoneypotAlarmEventsResponseBodyHoneypotAlarmEventsMergeFieldList[];
  /**
   * @remarks
   * The handling status of the alert event. Valid values:
   * 
   * *   **1**: pending
   * *   **2**: ignored
   * *   **4**: confirmed
   * 
   * @example
   * 1
   */
  operateStatus?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **2**: low
   * *   **3**: medium
   * *   **4**: high
   * 
   * @example
   * 2
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventId: 'AlarmEventId',
      alarmEventName: 'AlarmEventName',
      alarmEventType: 'AlarmEventType',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      eventCount: 'EventCount',
      firstTime: 'FirstTime',
      lastTime: 'LastTime',
      mergeFieldList: 'MergeFieldList',
      operateStatus: 'OperateStatus',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventId: 'number',
      alarmEventName: 'string',
      alarmEventType: 'string',
      alarmUniqueInfo: 'string',
      eventCount: 'number',
      firstTime: 'number',
      lastTime: 'number',
      mergeFieldList: { 'type': 'array', 'itemType': ListHoneypotAlarmEventsResponseBodyHoneypotAlarmEventsMergeFieldList },
      operateStatus: 'number',
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mergeFieldList)) {
      $dara.Model.validateArray(this.mergeFieldList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotAlarmEventsResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 69
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHoneypotAlarmEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert events.
   */
  honeypotAlarmEvents?: ListHoneypotAlarmEventsResponseBodyHoneypotAlarmEvents[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListHoneypotAlarmEventsResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 513C9554-55A4-5504-B7C4-6E17EB4FC7A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      honeypotAlarmEvents: 'HoneypotAlarmEvents',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honeypotAlarmEvents: { 'type': 'array', 'itemType': ListHoneypotAlarmEventsResponseBodyHoneypotAlarmEvents },
      pageInfo: ListHoneypotAlarmEventsResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.honeypotAlarmEvents)) {
      $dara.Model.validateArray(this.honeypotAlarmEvents);
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

