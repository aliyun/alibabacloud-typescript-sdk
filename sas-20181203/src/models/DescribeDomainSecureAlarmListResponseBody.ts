// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSecureAlarmListResponseBodyAlarmList extends $dara.Model {
  /**
   * @remarks
   * The name of the alert event.
   * 
   * @example
   * Trojan
   */
  alarmEventName?: string;
  /**
   * @remarks
   * The original parent name of the alert event.
   * 
   * @example
   * login_common_location
   */
  alarmEventNameOriginal?: string;
  /**
   * @remarks
   * The type of the alert event.
   * 
   * @example
   * Malicious Software
   */
  alarmEventType?: string;
  /**
   * @remarks
   * The unique identifier of the alert event.
   * 
   * @example
   * 8df914418f4211fbf756efe7a6f4****
   */
  alarmUniqueInfo?: string;
  /**
   * @remarks
   * Indicates whether automatic defense is enabled.
   * 
   * @example
   * true
   */
  autoBreaking?: boolean;
  /**
   * @remarks
   * Indicates whether the alert event can be handled online, such as blocking, adding to a whitelist, or ignoring. Valid values:
   * 
   * - **true**: Can be handled online.
   * - **false**: Cannot be handled online.
   * 
   * @example
   * true
   */
  canBeDealOnLine?: boolean;
  /**
   * @remarks
   * Indicates whether the alert event can be unmarked as a false positive. Valid values:
   * 
   * - **true**: Can be unmarked.
   * - **false**: Cannot be unmarked.
   * 
   * @example
   * false
   */
  canCancelFault?: boolean;
  /**
   * @remarks
   * Indicates whether the alert event contains the critical event protection mode.
   * 
   * @example
   * true
   */
  containHwMode?: boolean;
  /**
   * @remarks
   * The data source of the alert event.
   * 
   * @example
   * aegis_****
   */
  dataSource?: string;
  /**
   * @remarks
   * Indicates whether the alert event has been handled. Valid values:
   * - **N**: Pending.
   * - **Y**: Handled.
   * 
   * @example
   * y
   */
  dealed?: boolean;
  /**
   * @remarks
   * The description of the alert event.
   * 
   * @example
   * The detection model finds that there is a Trojan horse program on your server. The Trojan horse program is a program specially used to invade the user\\"s host. Generally, it will download and release another malicious program after being implanted into the system through disguise.
   */
  description?: string;
  /**
   * @remarks
   * The timestamp of the most recent occurrence of the alert event. Unit: milliseconds.
   * 
   * @example
   * 1543740301000
   */
  endTime?: number;
  /**
   * @remarks
   * The time when the alert event was last modified.
   * 
   * @example
   * 1656901794000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Indicates whether the alert event has tracing information. Valid values:
   * 
   * - **true**: Has tracing information.
   * - **false**: Does not have tracing information.
   * 
   * @example
   * true
   */
  hasTraceInfo?: boolean;
  /**
   * @remarks
   * The ID of the asset instance affected by the alert event.
   * 
   * @example
   * i-e****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the asset instance affected by the alert event.
   * 
   * @example
   * TestInstance
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 95.214.*.*
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the asset instance affected by the alert event.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The risk level of the alert event. Valid values:
   * - **serious**: Critical.
   * - **suspicious**: Suspicious.
   * - **remind**: Reminder.
   * 
   * @example
   * serious
   */
  level?: string;
  /**
   * @remarks
   * The result code of the alert event handling.
   * 
   * @example
   * kill_and_quara.Success
   */
  operateErrorCode?: string;
  /**
   * @remarks
   * The timestamp when the alert event was handled. Unit: milliseconds.
   * 
   * @example
   * 1631699497000
   */
  operateTime?: number;
  /**
   * @remarks
   * The edition of Security Center that supports the detection of the alert event. Valid values:
   * - **0**: Basic edition.
   * - **1**: Advanced edition.
   * - **2**: Enterprise edition.
   * 
   * @example
   * 1
   */
  saleVersion?: string;
  /**
   * @remarks
   * The IDs of the alert events associated with the alert event.
   * 
   * @example
   * 270789
   */
  securityEventIds?: string;
  /**
   * @remarks
   * The solution for the alert event.
   * 
   * @example
   * A malicious program implanted by hacker after intrusion will occupy your bandwidth and attack other servers, and may affect you own service. The malicious process may also have self-deleting behavior or disguise as a system service to evade detection.
   */
  solution?: string;
  /**
   * @remarks
   * The stage of the attack or intrusion.
   * 
   * @example
   * [\\"authority_maintenance\\"]
   */
  stages?: string;
  /**
   * @remarks
   * The start timestamp of the alert event. Unit: milliseconds.
   * 
   * @example
   * 1543740301000
   */
  startTime?: number;
  /**
   * @remarks
   * The total number of security alerts for your website assets.
   * 
   * @example
   * 1
   */
  suspiciousEventCount?: number;
  /**
   * @remarks
   * The unique identifier of the instance associated with the alert event.
   * 
   * @example
   * 47900178-885d-4fa4-9d77-****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventName: 'AlarmEventName',
      alarmEventNameOriginal: 'AlarmEventNameOriginal',
      alarmEventType: 'AlarmEventType',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      autoBreaking: 'AutoBreaking',
      canBeDealOnLine: 'CanBeDealOnLine',
      canCancelFault: 'CanCancelFault',
      containHwMode: 'ContainHwMode',
      dataSource: 'DataSource',
      dealed: 'Dealed',
      description: 'Description',
      endTime: 'EndTime',
      gmtModified: 'GmtModified',
      hasTraceInfo: 'HasTraceInfo',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      level: 'Level',
      operateErrorCode: 'OperateErrorCode',
      operateTime: 'OperateTime',
      saleVersion: 'SaleVersion',
      securityEventIds: 'SecurityEventIds',
      solution: 'Solution',
      stages: 'Stages',
      startTime: 'StartTime',
      suspiciousEventCount: 'SuspiciousEventCount',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventName: 'string',
      alarmEventNameOriginal: 'string',
      alarmEventType: 'string',
      alarmUniqueInfo: 'string',
      autoBreaking: 'boolean',
      canBeDealOnLine: 'boolean',
      canCancelFault: 'boolean',
      containHwMode: 'boolean',
      dataSource: 'string',
      dealed: 'boolean',
      description: 'string',
      endTime: 'number',
      gmtModified: 'number',
      hasTraceInfo: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      level: 'string',
      operateErrorCode: 'string',
      operateTime: 'number',
      saleVersion: 'string',
      securityEventIds: 'string',
      solution: 'string',
      stages: 'string',
      startTime: 'number',
      suspiciousEventCount: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSecureAlarmListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of security alerts for website assets.
   */
  alarmList?: DescribeDomainSecureAlarmListResponseBodyAlarmList[];
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request and can be used to troubleshoot issues.
   * 
   * @example
   * D03DD0FD-6041-5107-AC00-383E28F1****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmList: 'AlarmList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmList: { 'type': 'array', 'itemType': DescribeDomainSecureAlarmListResponseBodyAlarmList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alarmList)) {
      $dara.Model.validateArray(this.alarmList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

