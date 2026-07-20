// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceControlEventResponseBodyDataApplyRecordListEventTimeRecord extends $dara.Model {
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
   * 2025-08-21T02:26:50Z
   */
  applyTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  ignoreAlertTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  instanceCloseTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  instanceScanTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  lastCheckTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  miningAlertProcessTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  preCloseTime?: string;
  /**
   * @example
   * 2025-11-05 10:06:21
   */
  processTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  punishEndTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  punishStartTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  rejectTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  removeTime?: string;
  /**
   * @example
   * 2026-03-16 15:15:00
   */
  riskCheckSuccessTime?: string;
  static names(): { [key: string]: string } {
    return {
      alertEndTime: 'AlertEndTime',
      alertStartTime: 'AlertStartTime',
      antiPunishTime: 'AntiPunishTime',
      applyTime: 'ApplyTime',
      ignoreAlertTime: 'IgnoreAlertTime',
      instanceCloseTime: 'InstanceCloseTime',
      instanceScanTime: 'InstanceScanTime',
      lastCheckTime: 'LastCheckTime',
      miningAlertProcessTime: 'MiningAlertProcessTime',
      preCloseTime: 'PreCloseTime',
      processTime: 'ProcessTime',
      punishEndTime: 'PunishEndTime',
      punishStartTime: 'PunishStartTime',
      rejectTime: 'RejectTime',
      removeTime: 'RemoveTime',
      riskCheckSuccessTime: 'RiskCheckSuccessTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEndTime: 'string',
      alertStartTime: 'string',
      antiPunishTime: 'string',
      applyTime: 'string',
      ignoreAlertTime: 'string',
      instanceCloseTime: 'string',
      instanceScanTime: 'string',
      lastCheckTime: 'string',
      miningAlertProcessTime: 'string',
      preCloseTime: 'string',
      processTime: 'string',
      punishEndTime: 'string',
      punishStartTime: 'string',
      rejectTime: 'string',
      removeTime: 'string',
      riskCheckSuccessTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceControlEventResponseBodyDataApplyRecordList extends $dara.Model {
  /**
   * @example
   * meet the requirements
   */
  approvalReason?: string;
  eventTimeRecord?: GetResourceControlEventResponseBodyDataApplyRecordListEventTimeRecord;
  /**
   * @example
   * does not meet the requirements
   */
  rejectReason?: string;
  /**
   * @example
   * Test Desc for Draft
   */
  remark?: string;
  /**
   * @example
   * Executing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      approvalReason: 'ApprovalReason',
      eventTimeRecord: 'EventTimeRecord',
      rejectReason: 'RejectReason',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalReason: 'string',
      eventTimeRecord: GetResourceControlEventResponseBodyDataApplyRecordListEventTimeRecord,
      rejectReason: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.eventTimeRecord && typeof (this.eventTimeRecord as any).validate === 'function') {
      (this.eventTimeRecord as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceControlEventResponseBodyData extends $dara.Model {
  applyRecordList?: GetResourceControlEventResponseBodyDataApplyRecordList[];
  /**
   * @example
   * assistant tip
   */
  assistantTip?: string;
  /**
   * @example
   * 196.251.81.30
   */
  blockIp?: string;
  /**
   * @example
   * out
   */
  direction?: string;
  /**
   * @example
   * 10.199.31.155
   */
  dstIp?: string;
  /**
   * @example
   * 30629
   */
  dstPort?: string;
  /**
   * @example
   * 57ed8c6ddc9aafb1a3df38e6e84d2d45
   */
  eventId?: string;
  /**
   * @example
   * Instance Stopped
   */
  eventImpact?: string;
  /**
   * @example
   * Mining Management Event
   */
  leakName?: string;
  /**
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @example
   * This instance is connecting to a Miner Pool and has likely been compromised by hackers for mining or other illicit activities.
   */
  punishReason?: string;
  /**
   * @example
   * https://xxx.aliyun.com/v2
   */
  snapshotUrl?: string;
  /**
   * @example
   * 36.134.124.185
   */
  srcIp?: string;
  /**
   * @example
   * 2168
   */
  srcPort?: string;
  /**
   * @example
   * Suggestion
   */
  tip?: string;
  static names(): { [key: string]: string } {
    return {
      applyRecordList: 'ApplyRecordList',
      assistantTip: 'AssistantTip',
      blockIp: 'BlockIp',
      direction: 'Direction',
      dstIp: 'DstIp',
      dstPort: 'DstPort',
      eventId: 'EventId',
      eventImpact: 'EventImpact',
      leakName: 'LeakName',
      protocol: 'Protocol',
      punishReason: 'PunishReason',
      snapshotUrl: 'SnapshotUrl',
      srcIp: 'SrcIp',
      srcPort: 'SrcPort',
      tip: 'Tip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyRecordList: { 'type': 'array', 'itemType': GetResourceControlEventResponseBodyDataApplyRecordList },
      assistantTip: 'string',
      blockIp: 'string',
      direction: 'string',
      dstIp: 'string',
      dstPort: 'string',
      eventId: 'string',
      eventImpact: 'string',
      leakName: 'string',
      protocol: 'string',
      punishReason: 'string',
      snapshotUrl: 'string',
      srcIp: 'string',
      srcPort: 'string',
      tip: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applyRecordList)) {
      $dara.Model.validateArray(this.applyRecordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceControlEventResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetResourceControlEventResponseBodyData;
  /**
   * @example
   * successful‌
   */
  message?: string;
  /**
   * @example
   * 6B57D35D-9DAC-5393-AE39-07697E37C2E7
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
      data: GetResourceControlEventResponseBodyData,
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

