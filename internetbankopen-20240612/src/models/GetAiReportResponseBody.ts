// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetAiReportResponseBodyDataReport extends $dara.Model {
  /**
   * @example
   * 2026-12-12T06:20:00Z
   */
  contentExpiresAt?: string;
  /**
   * @example
   * https://reports.example.com/report-3f2b8c1e-6d4a-4b7e-9a1c-2e5f7d8b9c0a.pdf
   */
  downloadUrl?: string;
  /**
   * @example
   * report-3f2b8c1e-6d4a-4b7e-9a1c-2e5f7d8b9c0a
   */
  reportId?: string;
  /**
   * @example
   * 2026-11-12T06:25:00Z
   */
  urlExpiresAt?: string;
  static names(): { [key: string]: string } {
    return {
      contentExpiresAt: 'ContentExpiresAt',
      downloadUrl: 'DownloadUrl',
      reportId: 'ReportId',
      urlExpiresAt: 'UrlExpiresAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentExpiresAt: 'string',
      downloadUrl: 'string',
      reportId: 'string',
      urlExpiresAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiReportResponseBodyData extends $dara.Model {
  report?: GetAiReportResponseBodyDataReport;
  /**
   * @example
   * AVAILABLE
   */
  reportStatus?: string;
  static names(): { [key: string]: string } {
    return {
      report: 'Report',
      reportStatus: 'ReportStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      report: GetAiReportResponseBodyDataReport,
      reportStatus: 'string',
    };
  }

  validate() {
    if(this.report && typeof (this.report as any).validate === 'function') {
      (this.report as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiReportResponseBody extends $dara.Model {
  data?: GetAiReportResponseBodyData;
  /**
   * @example
   * 9634F2B3-B59C-5475-BA9F-96D95271882C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAiReportResponseBodyData,
      requestId: 'string',
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

