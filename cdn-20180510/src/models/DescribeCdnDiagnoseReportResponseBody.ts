// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDiagnoseReportResponseBodyContentClientInfo extends $dara.Model {
  /**
   * @example
   * Chrome
   */
  browserInfo?: string;
  /**
   * @example
   * Macintosh
   */
  os?: string;
  /**
   * @example
   * Mozilla/5.0 (Macintosh Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36
   */
  UAString?: string;
  static names(): { [key: string]: string } {
    return {
      browserInfo: 'BrowserInfo',
      os: 'Os',
      UAString: 'UAString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserInfo: 'string',
      os: 'string',
      UAString: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDiagnoseReportResponseBodyContentReportL1Tengine extends $dara.Model {
  /**
   * @example
   * 150.xxx.xxx.197:81
   */
  addr?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Unmatched CNAME.
   */
  errorLog?: string;
  /**
   * @example
   * 107ms
   */
  fbt?: string;
  intro?: string;
  /**
   * @example
   * aG9zd******8tbWVtYmV
   */
  reqHeader?: string;
  /**
   * @example
   * 2023-02-06 12:17:47
   */
  reqTime?: string;
  /**
   * @example
   * U2VydmV*******Qo
   */
  respHeader?: string;
  /**
   * @example
   * 2892
   */
  respSize?: number;
  /**
   * @example
   * 107ms
   */
  rt?: string;
  /**
   * @example
   * cn4461
   */
  station?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      code: 'Code',
      errorLog: 'ErrorLog',
      fbt: 'Fbt',
      intro: 'Intro',
      reqHeader: 'ReqHeader',
      reqTime: 'ReqTime',
      respHeader: 'RespHeader',
      respSize: 'RespSize',
      rt: 'Rt',
      station: 'Station',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      code: 'string',
      errorLog: 'string',
      fbt: 'string',
      intro: 'string',
      reqHeader: 'string',
      reqTime: 'string',
      respHeader: 'string',
      respSize: 'number',
      rt: 'string',
      station: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDiagnoseReportResponseBodyContentReport extends $dara.Model {
  clientInfo?: string;
  diagnoseResult?: string;
  l1Node?: string;
  l1Tengine?: DescribeCdnDiagnoseReportResponseBodyContentReportL1Tengine;
  sourceInfo?: string[];
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      diagnoseResult: 'DiagnoseResult',
      l1Node: 'L1Node',
      l1Tengine: 'L1Tengine',
      sourceInfo: 'SourceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      diagnoseResult: 'string',
      l1Node: 'string',
      l1Tengine: DescribeCdnDiagnoseReportResponseBodyContentReportL1Tengine,
      sourceInfo: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.l1Tengine && typeof (this.l1Tengine as any).validate === 'function') {
      (this.l1Tengine as any).validate();
    }
    if(Array.isArray(this.sourceInfo)) {
      $dara.Model.validateArray(this.sourceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDiagnoseReportResponseBodyContent extends $dara.Model {
  /**
   * @example
   * 1077********7468
   */
  aliuid?: string;
  /**
   * @example
   * xx.xx.xx.xx
   */
  clientAddr?: string;
  clientInfo?: DescribeCdnDiagnoseReportResponseBodyContentClientInfo;
  /**
   * @example
   * xx.xx.xx.xx
   */
  clientIp?: string;
  /**
   * @example
   * 2022-12-10 15:11:47
   */
  createTime?: string;
  /**
   * @example
   * f2xxxxd5
   */
  diagnoseId?: string;
  diagnoseReportLink?: string;
  /**
   * @example
   * http://cdn.dns-detect.alicdn.com/diagnose/xxxxxx
   */
  diagnoseUrl?: string;
  /**
   * @example
   * http://www.example.com
   */
  domain?: string;
  /**
   * @example
   * 1678701915
   */
  expireTime?: number;
  /**
   * @example
   * 10
   */
  remainDiagnoseTimes?: number;
  report?: DescribeCdnDiagnoseReportResponseBodyContentReport;
  /**
   * @example
   * 0
   */
  state?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * xxxxxxx-xxxxx-xxxxx-xxxxxxxxxxx
   */
  taskId?: string;
  /**
   * @example
   * 1s
   */
  timeConsuming?: number;
  /**
   * @example
   * https://tracing-sk.alibaba-inc.com/trace/xxxxxxxxxxxxxx
   */
  traceDisplayLink?: string;
  /**
   * @example
   * 0000006xxxxxxxxxxxx533427e
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      clientAddr: 'ClientAddr',
      clientInfo: 'ClientInfo',
      clientIp: 'ClientIp',
      createTime: 'CreateTime',
      diagnoseId: 'DiagnoseId',
      diagnoseReportLink: 'DiagnoseReportLink',
      diagnoseUrl: 'DiagnoseUrl',
      domain: 'Domain',
      expireTime: 'ExpireTime',
      remainDiagnoseTimes: 'RemainDiagnoseTimes',
      report: 'Report',
      state: 'State',
      status: 'Status',
      taskId: 'TaskId',
      timeConsuming: 'TimeConsuming',
      traceDisplayLink: 'TraceDisplayLink',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      clientAddr: 'string',
      clientInfo: DescribeCdnDiagnoseReportResponseBodyContentClientInfo,
      clientIp: 'string',
      createTime: 'string',
      diagnoseId: 'string',
      diagnoseReportLink: 'string',
      diagnoseUrl: 'string',
      domain: 'string',
      expireTime: 'number',
      remainDiagnoseTimes: 'number',
      report: DescribeCdnDiagnoseReportResponseBodyContentReport,
      state: 'string',
      status: 'number',
      taskId: 'string',
      timeConsuming: 'number',
      traceDisplayLink: 'string',
      traceId: 'string',
    };
  }

  validate() {
    if(this.clientInfo && typeof (this.clientInfo as any).validate === 'function') {
      (this.clientInfo as any).validate();
    }
    if(this.report && typeof (this.report as any).validate === 'function') {
      (this.report as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDiagnoseReportResponseBody extends $dara.Model {
  content?: DescribeCdnDiagnoseReportResponseBodyContent;
  /**
   * @example
   * 64D28B53-xxxxx-xxx-xxxxx-FD46680144FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeCdnDiagnoseReportResponseBodyContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

