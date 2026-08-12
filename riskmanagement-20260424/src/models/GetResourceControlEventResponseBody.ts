// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceControlEventResponseBodyDataApplyRecordListEventTimeRecord extends $dara.Model {
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
   * The time when the control action was lifted.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  antiPunishTime?: string;
  /**
   * @remarks
   * The application time.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2025-08-21T02:26:50Z
   */
  applyTime?: string;
  /**
   * @remarks
   * The time when the alert was ignored.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  ignoreAlertTime?: string;
  /**
   * @remarks
   * The time when the instance was shut down.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  instanceCloseTime?: string;
  /**
   * @remarks
   * The time when the instance was scanned.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  instanceScanTime?: string;
  /**
   * @remarks
   * The time of the latest detection.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  lastCheckTime?: string;
  /**
   * @remarks
   * The time when the mining alert was processed.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  miningAlertProcessTime?: string;
  /**
   * @remarks
   * The estimated shutdown time.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  preCloseTime?: string;
  /**
   * @remarks
   * The processing time.
   * 
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2025-11-05 10:06:21
   */
  processTime?: string;
  /**
   * @remarks
   * The time when the control action ended.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  punishEndTime?: string;
  /**
   * @remarks
   * The time when the control action started.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  punishStartTime?: string;
  /**
   * @remarks
   * The rejection time.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  rejectTime?: string;
  /**
   * @remarks
   * The removal time.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  removeTime?: string;
  /**
   * @remarks
   * The time when the risk check succeeded.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
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
   * @remarks
   * The reason for approval.
   * 
   * @example
   * meet the requirements
   */
  approvalReason?: string;
  /**
   * @remarks
   * The time records related to the application.
   */
  eventTimeRecord?: GetResourceControlEventResponseBodyDataApplyRecordListEventTimeRecord;
  /**
   * @remarks
   * The reason for rejection.
   * 
   * @example
   * does not meet the requirements
   */
  rejectReason?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Test Desc for Draft
   */
  remark?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **Executing**: executing
   * - **Removed**: removed
   * - **Alerting**: alerting
   * - **Ended**: ended
   * - **Processed**: processed by the user and under platform review
   * 
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
  /**
   * @remarks
   * The list of application records.
   */
  applyRecordList?: GetResourceControlEventResponseBodyDataApplyRecordList[];
  /**
   * @remarks
   * The recommended action from the assistant.
   * 
   * @example
   * assistant tip
   */
  assistantTip?: string;
  /**
   * @remarks
   * The blocked IP address.
   * 
   * @example
   * 196.251.81.30
   */
  blockIp?: string;
  /**
   * @remarks
   * The traffic direction. Valid values:
   * - **in**: inbound to the cloud. 
   * - **out**: outbound from the cloud.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 10.199.31.155
   */
  dstIp?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 30629
   */
  dstPort?: string;
  /**
   * @remarks
   * The ID of the alert event.
   * 
   * @example
   * 57ed8c6ddc9aafb1a3df38e6e84d2d45
   */
  eventId?: string;
  /**
   * @remarks
   * The overview of the event impact.
   * 
   * @example
   * Instance Stopped
   */
  eventImpact?: string;
  /**
   * @remarks
   * The vulnerability name.
   * 
   * @example
   * Mining Management Event
   */
  leakName?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The reason for the penalty.
   * 
   * @example
   * This instance is connecting to a Miner Pool and has likely been compromised by hackers for mining or other illicit activities.
   */
  punishReason?: string;
  /**
   * @remarks
   * The download URL of the penalty snapshot.
   * 
   * @example
   * https://xxx.aliyun.com/v2
   */
  snapshotUrl?: string;
  /**
   * @remarks
   * The attack source IP address.
   * 
   * @example
   * 36.134.124.185
   */
  srcIp?: string;
  /**
   * @remarks
   * The source port number.
   * 
   * @example
   * 2168
   */
  srcPort?: string;
  /**
   * @remarks
   * The recommended action.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data list.
   */
  data?: GetResourceControlEventResponseBodyData;
  /**
   * @remarks
   * The prompt message.
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
   * 6B57D35D-9DAC-5393-AE39-07697E37C2E7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - **true**: The call was successful.
   * - **false**: The call failed.
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

