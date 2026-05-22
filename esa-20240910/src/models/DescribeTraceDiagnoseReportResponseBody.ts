// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTraceDiagnoseReportResponseBodyClientInfo extends $dara.Model {
  browserInfo?: string;
  os?: string;
  uaString?: string;
  static names(): { [key: string]: string } {
    return {
      browserInfo: 'BrowserInfo',
      os: 'Os',
      uaString: 'UaString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserInfo: 'string',
      os: 'string',
      uaString: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceDiagnoseReportResponseBodyReport extends $dara.Model {
  clientInfo?: string;
  diagnoseResult?: string;
  responseHeader?: string;
  staticHtml?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      diagnoseResult: 'DiagnoseResult',
      responseHeader: 'ResponseHeader',
      staticHtml: 'StaticHtml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      diagnoseResult: 'string',
      responseHeader: 'string',
      staticHtml: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceDiagnoseReportResponseBody extends $dara.Model {
  clientAddr?: string;
  clientInfo?: DescribeTraceDiagnoseReportResponseBodyClientInfo;
  clientIp?: string;
  createTime?: string;
  diagnoseId?: string;
  diagnoseReportLink?: string;
  diagnoseUrl?: string;
  domain?: string;
  expireTime?: number;
  remainDiagnoseTimes?: number;
  report?: DescribeTraceDiagnoseReportResponseBodyReport;
  requestId?: string;
  state?: string;
  status?: number;
  taskId?: string;
  timeConsuming?: number;
  traceDisplayLink?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
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
      requestId: 'RequestId',
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
      clientAddr: 'string',
      clientInfo: DescribeTraceDiagnoseReportResponseBodyClientInfo,
      clientIp: 'string',
      createTime: 'string',
      diagnoseId: 'string',
      diagnoseReportLink: 'string',
      diagnoseUrl: 'string',
      domain: 'string',
      expireTime: 'number',
      remainDiagnoseTimes: 'number',
      report: DescribeTraceDiagnoseReportResponseBodyReport,
      requestId: 'string',
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

