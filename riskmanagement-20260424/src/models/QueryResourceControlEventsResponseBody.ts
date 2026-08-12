// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResourceControlEventsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The action code.
   * 
   * @example
   * DEPLOY_STAGE_REBOOT_TASK
   */
  actionCode?: string;
  /**
   * @remarks
   * The action name.
   * 
   * @example
   * Cryptomining alert.
   */
  actionName?: string;
  /**
   * @remarks
   * The time when the alert ended.
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  alertEndTime?: string;
  /**
   * @remarks
   * The time when the first alert was triggered.
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  alertStartTime?: string;
  /**
   * @remarks
   * The time when the control action was released.
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  antiPunishTime?: string;
  /**
   * @remarks
   * The number of unblock application records.
   * 
   * @example
   * 1
   */
  applyRecordCount?: number;
  /**
   * @remarks
   * The application status.
   * 
   * @example
   * AUDIT
   */
  applyStatus?: string;
  /**
   * @remarks
   * Indicates whether the unblock application is processed through the review platform.
   * 
   * @example
   * false
   */
  applyTrial?: boolean;
  /**
   * @remarks
   * The product type name.
   * 
   * @example
   * e\\"c\\"s
   */
  businessName?: string;
  /**
   * @remarks
   * The event name code.
   * 
   * @example
   * TEST_IMS_ACCOUNT_PUNISH_WHITE_TEST
   */
  caseCode?: string;
  /**
   * @remarks
   * The controlled domain name.
   * 
   * @example
   * ubs-mm-nwwss-ddos.purchern.com
   */
  domain?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * e791c08281b41e8240f897a424c188ae
   */
  eventId?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * Mining control event.
   */
  eventName?: string;
  /**
   * @remarks
   * The extended information about the penalty.
   * 
   * @example
   * {\\"createAt\\":\\"2025-08-03 11:18:59\\",\\"updatedAt\\":\\"2025-08-03 11:18:59\\"}
   */
  extras?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * 3
   */
  formType?: string;
  /**
   * @remarks
   * The latest time.
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  gmtLatest?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-3nsvwmt67pn72py1z
   */
  instanceId?: string;
  /**
   * @remarks
   * The controlled IP address.
   * 
   * @example
   * 10.0.158.58
   */
  ip?: string;
  /**
   * @remarks
   * The latest detection time.
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  lastCheckTime?: string;
  /**
   * @remarks
   * The estimated shutdown time.
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  preCloseTime?: string;
  /**
   * @remarks
   * The source of the penalty.
   * 
   * @example
   * MRM
   */
  punishFrom?: string;
  /**
   * @remarks
   * The time when the control action was applied.
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  punishTime?: string;
  /**
   * @remarks
   * The event reason.
   * 
   * @example
   * Cryptomining alert.
   */
  reason?: string;
  /**
   * @remarks
   * The region information.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
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
   * The security hardening suggestion.
   * 
   * @example
   * Suggestion
   */
  reinforcement?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether batch unblock applications are supported.
   * 
   * @example
   * true
   */
  supportBatchApply?: boolean;
  /**
   * @remarks
   * Indicates whether a single unblock application is supported.
   * 
   * @example
   * true
   */
  supportSingleApply?: boolean;
  /**
   * @remarks
   * The trigger type.
   * 
   * @example
   * miner
   */
  triggerType?: string;
  /**
   * @remarks
   * The controlled URL.
   * 
   * @example
   * https://pm.alicdn.com/quali/bc98e42b619ad4127bf6437b87045597.jpg?auth_key=1758682451-0-0-897be72852503566bd6775cd9914f5aa
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'ActionCode',
      actionName: 'ActionName',
      alertEndTime: 'AlertEndTime',
      alertStartTime: 'AlertStartTime',
      antiPunishTime: 'AntiPunishTime',
      applyRecordCount: 'ApplyRecordCount',
      applyStatus: 'ApplyStatus',
      applyTrial: 'ApplyTrial',
      businessName: 'BusinessName',
      caseCode: 'CaseCode',
      domain: 'Domain',
      eventId: 'EventId',
      eventName: 'EventName',
      extras: 'Extras',
      formType: 'FormType',
      gmtLatest: 'GmtLatest',
      instanceId: 'InstanceId',
      ip: 'Ip',
      lastCheckTime: 'LastCheckTime',
      preCloseTime: 'PreCloseTime',
      punishFrom: 'PunishFrom',
      punishTime: 'PunishTime',
      reason: 'Reason',
      region: 'Region',
      regionId: 'RegionId',
      reinforcement: 'Reinforcement',
      status: 'Status',
      supportBatchApply: 'SupportBatchApply',
      supportSingleApply: 'SupportSingleApply',
      triggerType: 'TriggerType',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      actionName: 'string',
      alertEndTime: 'string',
      alertStartTime: 'string',
      antiPunishTime: 'string',
      applyRecordCount: 'number',
      applyStatus: 'string',
      applyTrial: 'boolean',
      businessName: 'string',
      caseCode: 'string',
      domain: 'string',
      eventId: 'string',
      eventName: 'string',
      extras: 'string',
      formType: 'string',
      gmtLatest: 'string',
      instanceId: 'string',
      ip: 'string',
      lastCheckTime: 'string',
      preCloseTime: 'string',
      punishFrom: 'string',
      punishTime: 'string',
      reason: 'string',
      region: 'string',
      regionId: 'string',
      reinforcement: 'string',
      status: 'string',
      supportBatchApply: 'boolean',
      supportSingleApply: 'boolean',
      triggerType: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceControlEventsResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 24
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of events.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceControlEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The event list data.
   */
  list?: QueryResourceControlEventsResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: QueryResourceControlEventsResponseBodyDataPageInfo;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryResourceControlEventsResponseBodyDataList },
      pageInfo: QueryResourceControlEventsResponseBodyDataPageInfo,
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

export class QueryResourceControlEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The metadata returned.
   */
  data?: QueryResourceControlEventsResponseBodyData;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 739705BB-B0EF-554B-B3A8-383F4F93E067
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
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
      data: QueryResourceControlEventsResponseBodyData,
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

