// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSuspEventPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Alarm event type.
   * 
   * @example
   * 精准防御
   */
  alarmEventType?: string;
  /**
   * @remarks
   * Alarm ID.
   * 
   * @example
   * 5b1eeebe4f22daa2b177298234214fa3
   */
  alarmId?: number;
  /**
   * @remarks
   * Alarm name.
   * 
   * @example
   * Web服务漏洞利用
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
   * 1722515522000
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
   * Alarm handling time.
   * 
   * @example
   * 1732515522000
   */
  dealTime?: string;
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
   * Ticket primary key id.
   * 
   * @example
   * 9947
   */
  id?: number;
  /**
   * @remarks
   * Affected asset.
   * 
   * @example
   * shells-azhou
   */
  instanceName?: string;
  /**
   * @remarks
   * Public IP address.
   * 
   * @example
   * 47.99.188.31
   */
  internetIp?: string;
  /**
   * @remarks
   * Private IP address.
   * 
   * @example
   * 172.16.109.130
   */
  intranetIp?: string;
  /**
   * @remarks
   * First occurrence time.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  occurrenceTime?: string;
  /**
   * @remarks
   * Owner ID.
   * 
   * @example
   * 张三
   */
  ownerId?: string;
  /**
   * @remarks
   * Disposal method.
   * 
   * @example
   * 处理完成
   */
  remark?: string;
  /**
   * @remarks
   * Handling status.
   * 
   * @example
   * 未处理
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventType: 'AlarmEventType',
      alarmId: 'AlarmId',
      alarmName: 'AlarmName',
      alarmSource: 'AlarmSource',
      alarmTime: 'AlarmTime',
      analysisResult: 'AnalysisResult',
      dealTime: 'DealTime',
      eventLevel: 'EventLevel',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      occurrenceTime: 'OccurrenceTime',
      ownerId: 'OwnerId',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventType: 'string',
      alarmId: 'number',
      alarmName: 'string',
      alarmSource: 'string',
      alarmTime: 'string',
      analysisResult: 'string',
      dealTime: 'string',
      eventLevel: 'string',
      id: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      occurrenceTime: 'string',
      ownerId: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventPageResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number in pagination queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of items displayed per page in the returned data.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of query results.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetSuspEventPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetSuspEventPageResponseBodyData[];
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
   * Prompt message of the returned result.
   * 
   * @example
   * system error
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: GetSuspEventPageResponseBodyPageInfo;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AFA6F7B7-7C4B-58BB-B8FB-E0FFA4483561
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * - **true**: The call was successful. - **false**: The call failed.
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
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetSuspEventPageResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: GetSuspEventPageResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
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

