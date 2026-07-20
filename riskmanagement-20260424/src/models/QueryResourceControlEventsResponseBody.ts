// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResourceControlEventsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * DEPLOY_STAGE_REBOOT_TASK
   */
  actionCode?: string;
  /**
   * @example
   * 挖矿告警
   */
  actionName?: string;
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
  antiPunishTime?: string;
  /**
   * @example
   * 1
   */
  applyRecordCount?: number;
  /**
   * @example
   * AUDIT
   */
  applyStatus?: string;
  /**
   * @example
   * false
   */
  applyTrial?: boolean;
  /**
   * @example
   * e\\"c\\"s
   */
  businessName?: string;
  /**
   * @example
   * TEST_IMS_ACCOUNT_PUNISH_WHITE_TEST
   */
  caseCode?: string;
  /**
   * @example
   * ubs-mm-nwwss-ddos.purchern.com
   */
  domain?: string;
  /**
   * @example
   * e791c08281b41e8240f897a424c188ae
   */
  eventId?: string;
  /**
   * @example
   * 挖矿管控事件
   */
  eventName?: string;
  /**
   * @example
   * {\\"createAt\\":\\"2025-08-03 11:18:59\\",\\"updatedAt\\":\\"2025-08-03 11:18:59\\"}
   */
  extras?: string;
  /**
   * @example
   * 3
   */
  formType?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  gmtLatest?: string;
  /**
   * @example
   * rm-3nsvwmt67pn72py1z
   */
  instanceId?: string;
  /**
   * @example
   * 10.0.158.58
   */
  ip?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  lastCheckTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  preCloseTime?: string;
  /**
   * @example
   * MRM
   */
  punishFrom?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  punishTime?: string;
  /**
   * @example
   * 挖矿告警
   */
  reason?: string;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Suggestion
   */
  reinforcement?: string;
  /**
   * @example
   * Executing
   */
  status?: string;
  /**
   * @example
   * true
   */
  supportBatchApply?: boolean;
  /**
   * @example
   * true
   */
  supportSingleApply?: boolean;
  /**
   * @example
   * miner
   */
  triggerType?: string;
  /**
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
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 24
   */
  pageSize?: number;
  /**
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
  list?: QueryResourceControlEventsResponseBodyDataList[];
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
   * @example
   * 200
   */
  code?: string;
  data?: QueryResourceControlEventsResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 739705BB-B0EF-554B-B3A8-383F4F93E067
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

