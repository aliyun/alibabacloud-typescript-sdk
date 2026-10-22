// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceControlEventResponseBodyDataApplyRecordListAnomalyHours extends $dara.Model {
  /**
   * @remarks
   * The traffic exceptions in bytes.
   * 
   * @example
   * 150323855
   */
  abnormalBytes?: number;
  /**
   * @remarks
   * The anomaly description.
   * 
   * @example
   * The traffic for the domain name cdn-newfile.stomics.tech increased to 54.78 GB between 03:00 and 04:00 on October 22, 2026, approximately 386 times the historical baseline of 0.14 GB. During this period, about 99.7% of the traffic was concentrated in the 14.22.49 CIDR block. Approximately 160 IP addresses accessed the domain, with no single IP accounting for a large proportion. The traffic involved 258 large files, primarily in tar.gz format, with an empty Referer header, indicating batch downloads or abnormal data pulling. Verify whether this was caused by a version release, image synchronization, or partner downloads. If the cause cannot be confirmed, temporarily throttle or block this CIDR block and implement access control for large files
   */
  anomalyDesc?: string;
  /**
   * @remarks
   * The baseline traffic in bytes.
   * 
   * @example
   * 58819577119
   */
  baselineBytes?: number;
  /**
   * @remarks
   * The anomaly hour.
   * 
   * @example
   * 2026-10-22 03:00:23
   */
  hour?: string;
  /**
   * @remarks
   * The traffic multiplier.
   * 
   * @example
   * 391.29
   */
  trafRatio?: number;
  static names(): { [key: string]: string } {
    return {
      abnormalBytes: 'AbnormalBytes',
      anomalyDesc: 'AnomalyDesc',
      baselineBytes: 'BaselineBytes',
      hour: 'Hour',
      trafRatio: 'TrafRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalBytes: 'number',
      anomalyDesc: 'string',
      baselineBytes: 'number',
      hour: 'string',
      trafRatio: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceControlEventResponseBodyDataApplyRecordListEventTimeRecord extends $dara.Model {
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
   * The time when the restriction is lifted.
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
   * The time when the alert is ignored.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  ignoreAlertTime?: string;
  /**
   * @remarks
   * The time when the instance is shut down.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  instanceCloseTime?: string;
  /**
   * @remarks
   * The time when the instance is scanned.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  instanceScanTime?: string;
  /**
   * @remarks
   * The time of the latest check.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  lastCheckTime?: string;
  /**
   * @remarks
   * The processing time of the mining alert.
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
   * The end time of the restriction.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  punishEndTime?: string;
  /**
   * @remarks
   * The start time of the restriction.
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
   * The time when the restriction is removed.
   * > Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-16 15:15:00
   */
  removeTime?: string;
  /**
   * @remarks
   * The time when the risk check succeeds.
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
   * The details of abnormal hours for CDN traffic exceptions.
   */
  anomalyHours?: GetResourceControlEventResponseBodyDataApplyRecordListAnomalyHours[];
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
   * The remark.
   * 
   * @example
   * Test Desc for Draft
   */
  remark?: string;
  /**
   * @remarks
   * The task status.
   * 
   * - **Executing**: In progress.
   * - **Removed**: Removed.
   * - **Alerting**: Alerting.
   * - **Ended**: Ended.
   * - **Processed**: Processed by the user and under platform review.
   * 
   * @example
   * Executing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      anomalyHours: 'AnomalyHours',
      approvalReason: 'ApprovalReason',
      eventTimeRecord: 'EventTimeRecord',
      rejectReason: 'RejectReason',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anomalyHours: { 'type': 'array', 'itemType': GetResourceControlEventResponseBodyDataApplyRecordListAnomalyHours },
      approvalReason: 'string',
      eventTimeRecord: GetResourceControlEventResponseBodyDataApplyRecordListEventTimeRecord,
      rejectReason: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.anomalyHours)) {
      $dara.Model.validateArray(this.anomalyHours);
    }
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
   * The list of application record information.
   */
  applyRecordList?: GetResourceControlEventResponseBodyDataApplyRecordList[];
  /**
   * @remarks
   * The handling suggestions from the assistant.
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
   *  - **in**: Inbound to the cloud. 
   * - **out**: Outbound from the cloud.
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
   * The source IP address of the attack.
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
   * The handling suggestions.
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
   * The list of returned data.
   */
  data?: GetResourceControlEventResponseBodyData;
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
   * 6B57D35D-9DAC-5393-AE39-07697E37C2E7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * - **true**: The call is successful.
   * - **false**: The call fails.
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

