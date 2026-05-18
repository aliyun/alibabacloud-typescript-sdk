// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertionsAssertions extends $dara.Model {
  operator?: string;
  property?: string;
  target?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'operator',
      property: 'property',
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      property: 'string',
      target: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertions extends $dara.Model {
  assertions?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertionsAssertions[];
  static names(): { [key: string]: string } {
    return {
      assertions: 'assertions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertions: { 'type': 'array', 'itemType': DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertionsAssertions },
    };
  }

  validate() {
    if(Array.isArray(this.assertions)) {
      $dara.Model.validateArray(this.assertions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson extends $dara.Model {
  acceptableResponseCode?: string;
  assertions?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertions;
  attempts?: number;
  authentication?: number;
  certVerify?: boolean;
  cookie?: string;
  diagnosisMtr?: boolean;
  diagnosisPing?: boolean;
  dnsMatchRule?: string;
  dnsServer?: string;
  dnsType?: string;
  enableOperatorDns?: boolean;
  failureRate?: number;
  header?: string;
  httpMethod?: string;
  isBase64Encode?: string;
  matchRule?: number;
  password?: string;
  pingNum?: number;
  port?: number;
  protocol?: string;
  proxyProtocol?: boolean;
  requestContent?: string;
  requestFormat?: string;
  responseContent?: string;
  responseFormat?: string;
  retryDelay?: number;
  timeOut?: number;
  unfollowRedirect?: boolean;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      acceptableResponseCode: 'acceptable_response_code',
      assertions: 'assertions',
      attempts: 'attempts',
      authentication: 'authentication',
      certVerify: 'cert_verify',
      cookie: 'cookie',
      diagnosisMtr: 'diagnosis_mtr',
      diagnosisPing: 'diagnosis_ping',
      dnsMatchRule: 'dns_match_rule',
      dnsServer: 'dns_server',
      dnsType: 'dns_type',
      enableOperatorDns: 'enable_operator_dns',
      failureRate: 'failure_rate',
      header: 'header',
      httpMethod: 'http_method',
      isBase64Encode: 'isBase64Encode',
      matchRule: 'match_rule',
      password: 'password',
      pingNum: 'ping_num',
      port: 'port',
      protocol: 'protocol',
      proxyProtocol: 'proxy_protocol',
      requestContent: 'request_content',
      requestFormat: 'request_format',
      responseContent: 'response_content',
      responseFormat: 'response_format',
      retryDelay: 'retry_delay',
      timeOut: 'time_out',
      unfollowRedirect: 'unfollow_redirect',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptableResponseCode: 'string',
      assertions: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertions,
      attempts: 'number',
      authentication: 'number',
      certVerify: 'boolean',
      cookie: 'string',
      diagnosisMtr: 'boolean',
      diagnosisPing: 'boolean',
      dnsMatchRule: 'string',
      dnsServer: 'string',
      dnsType: 'string',
      enableOperatorDns: 'boolean',
      failureRate: 'number',
      header: 'string',
      httpMethod: 'string',
      isBase64Encode: 'string',
      matchRule: 'number',
      password: 'string',
      pingNum: 'number',
      port: 'number',
      protocol: 'string',
      proxyProtocol: 'boolean',
      requestContent: 'string',
      requestFormat: 'string',
      responseContent: 'string',
      responseFormat: 'string',
      retryDelay: 'number',
      timeOut: 'number',
      unfollowRedirect: 'boolean',
      username: 'string',
    };
  }

  validate() {
    if(this.assertions && typeof (this.assertions as any).validate === 'function') {
      (this.assertions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitor extends $dara.Model {
  address?: string;
  agentGroup?: string;
  createTime?: string;
  interval?: string;
  optionsJson?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson;
  taskId?: string;
  taskName?: string;
  taskState?: string;
  taskType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      agentGroup: 'AgentGroup',
      createTime: 'CreateTime',
      interval: 'Interval',
      optionsJson: 'OptionsJson',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskState: 'TaskState',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      agentGroup: 'string',
      createTime: 'string',
      interval: 'string',
      optionsJson: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson,
      taskId: 'string',
      taskName: 'string',
      taskState: 'string',
      taskType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.optionsJson && typeof (this.optionsJson as any).validate === 'function') {
      (this.optionsJson as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitors extends $dara.Model {
  siteMonitor?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitor[];
  static names(): { [key: string]: string } {
    return {
      siteMonitor: 'SiteMonitor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteMonitor: { 'type': 'array', 'itemType': DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitor },
    };
  }

  validate() {
    if(Array.isArray(this.siteMonitor)) {
      $dara.Model.validateArray(this.siteMonitor);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A80DB41C-AF6C-50E1-ADB5-66DCBA3D266B
   */
  requestId?: string;
  siteMonitors?: DescribeSiteMonitorListResponseBodySiteMonitors;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      siteMonitors: 'SiteMonitors',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      siteMonitors: DescribeSiteMonitorListResponseBodySiteMonitors,
      success: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.siteMonitors && typeof (this.siteMonitors as any).validate === 'function') {
      (this.siteMonitors as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

