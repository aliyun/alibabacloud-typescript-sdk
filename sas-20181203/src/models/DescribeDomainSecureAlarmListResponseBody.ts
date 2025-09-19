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
   * The unique ID of the alert event.
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
   * Indicates whether the alert event can be handled online, such as quarantining the source file of the malicious process, adding the alert event to the whitelist, and ignoring the alert event. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  canBeDealOnLine?: boolean;
  /**
   * @remarks
   * Indicates whether you can cancel marking the alert event as a false positive. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  canCancelFault?: boolean;
  /**
   * @remarks
   * Indicates whether the safeguard mode for major activities is supported.
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
   * Indicates whether the alert event is handled. Valid values:
   * 
   * *   **N**: unhandled
   * *   **Y**: handled
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
   * The timestamp generated when the alert event was last detected. Unit: milliseconds.
   * 
   * @example
   * 1543740301000
   */
  endTime?: number;
  /**
   * @remarks
   * The time of the last modification.
   * 
   * @example
   * 1656901794000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Indicates whether the alert event has tracing information. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  hasTraceInfo?: boolean;
  /**
   * @remarks
   * The instance ID of the affected asset.
   * 
   * @example
   * i-e****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the affected asset.
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
   * The private IP address of the affected instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The risk level of the alert event. Valid values:
   * 
   * *   **serious**
   * *   **suspicious**
   * *   **remind**
   * 
   * @example
   * serious
   */
  level?: string;
  /**
   * @remarks
   * The handling result code of the alert event.
   * 
   * @example
   * kill_and_quara.Success
   */
  operateErrorCode?: string;
  /**
   * @remarks
   * The timestamp generated when the alert event was handled. Unit: milliseconds.
   * 
   * @example
   * 1631699497000
   */
  operateTime?: number;
  /**
   * @remarks
   * The edition of Security Center in which the alert event can be detected. Valid values:
   * 
   * *   **0**: Basic edition.
   * *   **1**: Advanced edition.
   * *   **2**: Enterprise edition.
   * 
   * @example
   * 1
   */
  saleVersion?: string;
  /**
   * @remarks
   * The ID of the associated alert event.
   * 
   * @example
   * 270789
   */
  securityEventIds?: string;
  /**
   * @remarks
   * The solution to the alert event.
   * 
   * @example
   * A malicious program implanted by hacker after intrusion will occupy your bandwidth and attack other servers, and may affect you own service. The malicious process may also have self-deleting behavior or disguise as a system service to evade detection.
   */
  solution?: string;
  /**
   * @remarks
   * The stage at which the attack or intrusion is detected.
   * 
   * @example
   * [\\"authority_maintenance\\"]
   */
  stages?: string;
  /**
   * @remarks
   * The timestamp generated when the alert event was first detected. Unit: milliseconds.
   * 
   * @example
   * 1543740301000
   */
  startTime?: number;
  /**
   * @remarks
   * The total number of security alerts in your website assets.
   * 
   * @example
   * 1
   */
  suspiciousEventCount?: number;
  /**
   * @remarks
   * The unique ID of the associated instance.
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
   * The security alerts in your website assets.
   */
  alarmList?: DescribeDomainSecureAlarmListResponseBodyAlarmList[];
  /**
   * @remarks
   * The request ID.
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

