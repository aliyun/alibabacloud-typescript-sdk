// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTraceDiagnoseReportResponseBodyClientInfo extends $dara.Model {
  /**
   * @remarks
   * Browser.
   * 
   * @example
   * Chrome
   */
  browserInfo?: string;
  /**
   * @remarks
   * Operating system name.
   * 
   * @example
   * Macintosh
   */
  os?: string;
  /**
   * @remarks
   * Version.
   * 
   * @example
   * Mozilla/5.0 (Macintosh Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36
   */
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
  /**
   * @remarks
   * Client information.
   * 
   * @example
   * Client IP : xxx.xxx.xxx.xxx DNS_IP : xxx.xxx.xxx.xxx
   */
  clientInfo?: string;
  /**
   * @remarks
   * Diagnostic result.
   * 
   * @example
   * Diagnosis Result: Normal Scheduling Result: Normal Check Item Details: Exception Item: [Request Normal]
   */
  diagnoseResult?: string;
  /**
   * @remarks
   * Client request response header.
   * 
   * @example
   * <br>connection: keep-alive<br>content-type: application/json
   */
  responseHeader?: string;
  /**
   * @remarks
   * Static snapshot page.
   * 
   * @example
   * https://cdn.dns-detect.alicdn.com/diagnose_v2#/snapshot?data=H4sIAAAAAAACA%2B1aeW%2FcxhX%2FKgSLFkm7pGbI4bWGUSiSEqmxZMG7Tow4hjAkh1pGFLkmuVorgYE4QeI0cc7eB3IgLpIWTdO4ORzXQb6MV5b%2F6lfomyG5u1xpbUW2mwSNpAWWM2%2FmHfPm935DzTNyHm6yLKebXbkpa0gzFWQo2Gkjp4nNpm6qBJtPyA052WLpVsj6cvMZ2Y%2BzeZYzLw%2BTmD%2Fn7FwOo%2BdXWjsfvT%2B4ehXEvSRKUmj7kaF5BFP5fEOOEo9GJ9OoDerGRt18%2BfOdZy%2FcfPcCQWRw%2FbmJ4UFAfBLw4Vm42YtoziaG73z43s4r7%2Bx89srux7%2B59fyHg5devN0kfrJJw3iFbjJoH3xxZXD54s57L8lVxxxL8zAIPVDDp66cSVmWRFtsrsO8jTHVS6tb5u4H7%2B%2B8%2FcbtVAq355I45vHaCvPtceNfemPw8js3X7t44%2Bo1jNCP%2F3P90u7Xb9969o87z34wPZTcD5bTMMr4VGF3KQ4S%2Fk1oWuLriJGpYqzqRMUazBDBgvFWW1MdDZoM1YTWsHu8y1Kai8lv%2Ff7rWxcvDV584eZXb4q%2B1TTZCmNPxOnS725c%2B%2Fvg6nOiYy7pxXkKXsg3rn40%2BNNXPHhxtmeqG9feLHqmTAQ9%2B8wEiZj3wNY87bGJ2MnN08%2FIvTQC8X6%2Fr54NadxnseolmyJGPijQEKpPAU89z2NZoUpu6g15k%2Fkwcr4H1ors1bHWkCkkN11nY60azOSXjzDZac2wVQcVP5qmG1oDBqq6U%2FzYBnKchm7bKi5lMHEQPnO%2BMW4yjcLt3t1bjG17H4uxY9Ytxoah6qU1yCIGMhvYtlRz3ECtoRFDtSq%2FHBtp%2BoTRZ8%2FevcGOsY%2FBGiYTBuuQm2VAHc0gDmlgh6j2WIzBcx0T1axJTRjs0tDv3b3NJrH2i7JorlltErBxLM4NaDHHTeQtBqqtxZnzZxqym4iUTkFzCvld2sLzLqTrcZKF2XKeLvngFnjSah0r90E75OCFLTCaZhkHrCQ%2BwbJelGeFaDeM1%2BcFPhTPi%2B32am2s6cA%2BzjhOENMAAZamSTonQgUY3JBzmq6zvNq3cyvFNDBCfC2R4otP4a%2FYsWneTmmcBSxtFWEFKR7mCjl7Rewq21oszld6m0UDTRld4NMu9uhDLJS59mxjIfbbo7KELcsB7MK2AX9j4VmFyar4FDYvZd2F0tx2ktOo8FfXYYtnSS%2F12FJ3yyz6AX9aUNFYKuAS8Y2rQv7psEvGnuzSoJbwch%2BTiG3oPM8Ekon4DLGsWwZQWLTCYHC8vt4TIWPd2oqVw4XgXCeMaW0VH07STZrnrPR0kVH%2Bja%2FqDFaxBEsmrSS59DBM4j%2BZPhnDWucQYuUY6Ms7TQnxxhbLlbkk2QhZU6Jefy33jmqB5WLNZaPwIqLbJrYZ1glyYKPZpuXqtmH5gYlp4Gg6CVwMAHKkS%2FPO0Zkji3nePR5H20eW6Tlldp0d1aFzUpvnx2sZ8%2B6zxnko2U2pDXtbwo60TLclzmWkgsVoRHpkuc3FYAkhrspsFCV95XgarodxU%2FppYTJPhqa00Jrlj4%2FRdLspzUI6d3NlIQYggXGiI6RNicWZ4lGvw3SsRhpLsGkq2DoNZbeBGvOrZxrTJewG%2F8CiKVizUWN5XNZyarIYNdB4N7FUL7aww7usPYrqvRibU5QQbSRngwLu1CmlFeZMmeP9SksgZVNaXmq1eOdsFCqtfhjkyiNR4tJIaQEsctbYlEYLWc4ixEb909bDqNajGrLAIagpJbAiEmBGF7CVSeTUKUlg07iksLHUztsX6HrEQr8pTU8uLsY%2FsHmAop6g%2FXHImANGVmGGB1WkjrI64E2a9HL2i6yCsM1zWW382NYX%2FKjq5ZBIBUUWGBV4nmlBiVM8x7AU4miB4riupvgAOQwh6um%2BXZqwmrK8BNQK7IeoLOgd0AyolZpmqhrHb2FgobVCuVIIQExXsSVQ7Fw%2BsgxEBGesgHAStnOvuzcOXhWpx4GHx16HuhzM%2BmGaM45J%2B6A%2Fx6j5pB9HCfVbXcYRDBXIthzGxczyhFjRiorGE2UmjNWmKjkeSvztUQUR0R%2B8%2BhoQTLkwlBc3XRS3c93qoFIVIMCOkfJ6sasyAQKwx5s4KwOY9ZIpQQ7L%2BgNbxqUurXxbaZVhRMZYpRrlnKgu9SXXdTyqIIV7L76w%2B9YfBq9f3r34t50r%2Fx5cula6c4J5LNxi%2FrCm5vuVTsRJEKx1m69%2BUX0K6Yp%2FDCM%2F2heFQD8FbDjBzvZg0j1BAU0ZMCRe4aoaBK094CUi67Hp6Lph246t2Zhgwh2O4fRVRjKA8tZL2Qla5W%2BxWnvTohU%2BXTNurGDK5TFhvjjj3LaUQ0Bd1t7ucm2h78mjiCzT3OsUs5WuFjkNTatAATcB9OOkAFBRYwVS8kqbJlG96yT4zktTnDeluU6abLIZwxI4KooJlJsZUXAWkyxv%2BjTrZF7SZSrojMNefwPAeQyveCoXrOLLS4MX%2Fjn4%2BJ3B1eeLAxSnJSLGvqEFPtKJQm3bVQgzdMUB%2Bqn4VIeou55p0IBnbRZNrB7nzYdknwY5NPu0ze8p%2BySGrh%2BCfRIL3z%2F2iUz8HWOf0%2Br0fgSUWo5j4FHFJpquEThpMwsR2zKohjUfiqbNCDVNm3iIBpDPcBQ8NAG9fxoPSEDr9BG4GBC%2BnmMoGAE3xHtJXU3AAF5nTON1GqmJOnXuiDEAi20QHQ6sxh41o17NQA3%2B2V8HRiM5POKOB6RwExT7rkkn%2BWak8wCHgBGZnJooU09YU08Mh6SeyLpX1NOAo5QeoEDxLYKgQECpcOzAVwLPtUzX1d0AW1Opp1GnnoS%2FP4SNTxzVwVO5p%2B4AhhFVQ5ZqobsmnzwSQ%2FK52OuwDk1y9p3mnqZl3nfuORnkO5BP0z4o9xQV6x5yT%2FID9zws97wHPHM%2F%2BvrNuOfgzeuDty7tfPbXm7%2F88tvnnpp2aOr5fX3vSbCDD8E8%2BXug%2B8c8%2BTuJOzPPReYK776Nd551rmVawI%2B82NI157RO9lCgiW6g%2BvtTIBOPyRl1kqVxGmWZhnXa1vcoqHXa2rS3c%2BZQikwQrG%2FAcO74ssxyDEenLhlbT8cghqaxKVx9%2BgCsa4hgz3Cp5wfUdhAUJNMknu8xIBfOoV8W30eNt%2BfqehXFA3PQg747vi3jPTiPns5fD0k1yb1imh6jrufbQDI94ijE1XyFEuIqvh5Yhm76xKZ0GtPkuD5GNOE0BNQGEAkbqkZuxzQdWwU2ajh3zTPJGM18okPj9adCupF8t19yGkj%2FXxDNsRjf6R2nflCaKcpTjWbuXPkXOHfzzxd%2BYJf%2FR%2Bzy%2BruDf3w%2BeP39e0Ytz9Tv%2BRT%2F8YdwPMbSMNgG8Kf8tkzW63aTNF9j4nJMQKOMS4Xra%2BVtn%2BHAoqnIqrmV2eWFpvRAnMTsQQiGBCmapH7WfDKWpPF%2Fy%2FBnYsFZWVeh8GtYm2jQUb0BO059imLE6NkCbfAzVDi0QezVwpWwu0VGNxyGbebQPY9xh891YVv4E41BIO4nsbW8QI3hVTAiIauJSFPD0s%2F49QXpZHtOrk1VH2IDq6mGoL1DqnsYcpyMTDnfkDtQrIeJOfjVq4Nrvx5c%2FvTG1%2B%2FtXPh497UvBq%2F%2FdnD5k91P%2FyIXouO0HbQfd58S16oKQ0xsq5q0mXGdPClLIMQqKRq5GDDMagsC0ogNbVSD8hGHHjWDjUlWXbVKuAfL1AvjPMk6MMRNk35WbCqxWzhUUC6TPB1GEZ0xVCQ9MBxwRFoCvhoB9fCk4y3plITRGjbWrAel2W43Yo8z99EwnzF0S9VN6YFHF9vLxxpSFG4w6RHmbSQPVlsSE1tF%2FFdq0YCmYTlE0GtOqBZi6kZ8qYucEGjSyhN%2Bp2WiK4mPhTEb5sQwHUpIIevijhzEK4w3%2BCsZQNecn9kgKjlAyklx%2FYYvTNacmdl378%2F8nEbhGid4PnN762t8prXQP1oAuWHZWEHw61gYeB0KGMYscC3MgNthD3m6ZzKNIvMnfCE4Cgtw%2BtYifP6%2Fq6Vk7DkpAAA%3D
   */
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
  /**
   * @remarks
   * IP address of the local DNS server.
   * 
   * @example
   * 47.xx.112.120
   */
  clientAddr?: string;
  /**
   * @remarks
   * Client information.
   */
  clientInfo?: DescribeTraceDiagnoseReportResponseBodyClientInfo;
  /**
   * @remarks
   * Client IP.
   * 
   * @example
   * 33.7.98.136
   */
  clientIp?: string;
  /**
   * @remarks
   * Creation time. Format: yyyy-MM-dd HH:mm:ss, timezone: +08:00.
   * 
   * @example
   * 2024-03-11T01:23:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * Diagnostic ID.
   * 
   * @example
   * vpndgn-hn316ixao7ut50ybl5qui
   */
  diagnoseId?: string;
  /**
   * @remarks
   * Diagnostic report link.
   * 
   * @example
   * https://cdnskyeye.alibaba-inc.com/#/databrain/detectionPlatformAction?module=trace&id=xxx&instance_id=xxxx&type=copy&edition_id=xxxxx
   */
  diagnoseReportLink?: string;
  /**
   * @remarks
   * Diagnostic link.
   * 
   * @example
   * http://cdn.dns-detect.alicdn.com/diagnose/xxxxxx
   */
  diagnoseUrl?: string;
  /**
   * @remarks
   * The diagnosed domain name.
   * 
   * @example
   * www.pecmnr.cn
   */
  domain?: string;
  /**
   * @remarks
   * Expiration time. Timestamp in seconds.
   * 
   * @example
   * 1678701915
   */
  expireTime?: number;
  /**
   * @remarks
   * Remaining available diagnosis count.
   * 
   * @example
   * 10
   */
  remainDiagnoseTimes?: number;
  /**
   * @remarks
   * Diagnostic report details.
   */
  report?: DescribeTraceDiagnoseReportResponseBodyReport;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * Report generation status.
   * 
   * 0: Success.
   * 1: Failure.
   * 2: Timeout.
   * 3: Running.
   * 4: Waiting.
   * 
   * @example
   * ok
   */
  state?: string;
  /**
   * @remarks
   * Status of the diagnostic link.
   * 
   * 1: Active.
   * 0: Expired.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * xxxxxxx-xxxxx-xxxxx-xxxxxxxxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * Time consumed for report generation, in seconds.
   * 
   * @example
   * 10
   */
  timeConsuming?: number;
  /**
   * @remarks
   * Trace display link.
   * 
   * @example
   * https://tracing-sk.alibaba-inc.com/trace/xxxxxxxxxxxxxx
   */
  traceDisplayLink?: string;
  /**
   * @remarks
   * Diagnostic trace ID.
   * 
   * @example
   * 0000006xxxxxxxxxxxx533427e
   */
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

