// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlarmDetailByIdResponseBodyDataEventDetails extends $dara.Model {
  /**
   * @remarks
   * Alarm event display name.
   * 
   * @example
   * Login with unusual location
   */
  nameDisplay?: string;
  /**
   * @remarks
   * Alarm event type.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * Path where the alarm event occurred.
   * 
   * @example
   * /etc/crontab
   */
  value?: string;
  /**
   * @remarks
   * Path where the alarm event occurred.
   * 
   * @example
   * /etc/crontab
   */
  valueDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      nameDisplay: 'NameDisplay',
      type: 'Type',
      value: 'Value',
      valueDisplay: 'ValueDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameDisplay: 'string',
      type: 'string',
      value: 'string',
      valueDisplay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmDetailByIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Alarm event type.
   * 
   * @example
   * Unusual Logon
   */
  alarmEventType?: string;
  /**
   * @remarks
   * Alarm event type.
   * 
   * @example
   * Login with unusual location
   */
  alarmEventTypeDisplay?: string;
  /**
   * @remarks
   * Alarm ID.
   * 
   * @example
   * 202427220
   */
  alarmId?: number;
  /**
   * @remarks
   * Alarm name.
   * 
   * @example
   * 负载均衡可挂载服务器数量告警
   */
  alarmName?: string;
  /**
   * @remarks
   * Alarm source.
   * 
   * @example
   * SUSP_EVENT
   */
  alarmSource?: string;
  /**
   * @remarks
   * Latest alarm time.
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  alarmTime?: string;
  /**
   * @remarks
   * Analysis process.
   * 
   * @example
   * [{"value":"服务器可能已被黑客攻击，存在恶意进程在运行。 分析过程：告警显示，服务端存在一个名为”dns.exe”的进程在访问”polling.burpcollaborator.net”，这是一个被黑名单列出的恶意域名。在正常情况下,”dns.exe”不应该单独存在于系统的路径下，并且也不应该访问这类恶意域名。因此，这个进程可能是黑客留下的恶意进程。","key":"结论"},{"value":"尽快对服务器进行全面扫描，清除恶意进程。同时，联系网络安全专家进行深入调查，以确定是否有其他潜在的安全威胁。","key":"处置建议"}]
   */
  analysisResult?: string;
  /**
   * @remarks
   * Whether high-protection mode is enabled. true means enabled, false means not enabled.
   * 
   * @example
   * false
   */
  containHwMode?: boolean;
  /**
   * @remarks
   * Alarm handling time.
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  dealTime?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * webshell
   */
  desc?: string;
  /**
   * @remarks
   * Event details information.
   */
  eventDetails?: GetAlarmDetailByIdResponseBodyDataEventDetails[];
  /**
   * @remarks
   * Alarm level.
   * 
   * @example
   * suspicious
   */
  eventLevel?: string;
  /**
   * @remarks
   * Primary key ID of the work order.
   * 
   * @example
   * 9772
   */
  id?: number;
  /**
   * @remarks
   * Affected asset.
   * 
   * @example
   * nginx
   */
  instanceName?: string;
  /**
   * @remarks
   * Public IP.
   * 
   * @example
   * 47.116.126.79
   */
  internetIp?: string;
  /**
   * @remarks
   * Private IP.
   * 
   * @example
   * 172.19.195.176
   */
  intranetIp?: string;
  /**
   * @remarks
   * First occurrence time
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  occurrenceTime?: string;
  /**
   * @remarks
   * Owner.
   * 
   * @example
   * 324546
   */
  ownerId?: string;
  /**
   * @remarks
   * Disposal method.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * Handling status.
   * 
   * @example
   * 要查询的告警事件状态。取值：
   * 
   * 0：全部
   * 1：待处理
   * 2：已忽略
   * 4：已确认
   * 8：已标记为误报
   * 16：处理中
   * 32：处理完毕
   * 64：已经过期
   * 128：已经删除
   * 512：自动拦截中
   * 513：自动拦截完毕
   */
  status?: string;
  /**
   * @remarks
   * ATT&CK tactic name.
   * 
   * @example
   * Malicious scripts-Malicious script code execution
   */
  tacticDisplayName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventType: 'AlarmEventType',
      alarmEventTypeDisplay: 'AlarmEventTypeDisplay',
      alarmId: 'AlarmId',
      alarmName: 'AlarmName',
      alarmSource: 'AlarmSource',
      alarmTime: 'AlarmTime',
      analysisResult: 'AnalysisResult',
      containHwMode: 'ContainHwMode',
      dealTime: 'DealTime',
      desc: 'Desc',
      eventDetails: 'EventDetails',
      eventLevel: 'EventLevel',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      occurrenceTime: 'OccurrenceTime',
      ownerId: 'OwnerId',
      remark: 'Remark',
      status: 'Status',
      tacticDisplayName: 'TacticDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventType: 'string',
      alarmEventTypeDisplay: 'string',
      alarmId: 'number',
      alarmName: 'string',
      alarmSource: 'string',
      alarmTime: 'string',
      analysisResult: 'string',
      containHwMode: 'boolean',
      dealTime: 'string',
      desc: 'string',
      eventDetails: { 'type': 'array', 'itemType': GetAlarmDetailByIdResponseBodyDataEventDetails },
      eventLevel: 'string',
      id: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      occurrenceTime: 'string',
      ownerId: 'string',
      remark: 'string',
      status: 'string',
      tacticDisplayName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventDetails)) {
      $dara.Model.validateArray(this.eventDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmDetailByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetAlarmDetailByIdResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5C1B0668-442C-57AE-9668-D894B0B012EB
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful: - true: Success. - false: Failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAlarmDetailByIdResponseBodyData,
      httpStatusCode: 'number',
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

