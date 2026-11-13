// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetAiReportResponseBodyDataReport extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the report content retention period. The time is in UTC RFC 3339 format, ends with Z, and may contain fractional seconds. No download URL is issued after this time. If the delivery is not suspended, EXPIRED is returned. If the delivery is also suspended, UNAVAILABLE is returned preferentially. This is the content expiration time, not the expiration time of a single URL.
   * 
   * @example
   * 2026-12-12T06:20:00Z
   */
  contentExpiresAt?: string;
  /**
   * @remarks
   * The temporary signed download URL. Use the URL before UrlExpiresAt. The validity period of the signed URL does not exceed 300 seconds and is no later than ContentExpiresAt. If the URL expires but the content has not expired, you can query again to obtain a new URL. The example only shows the URL format and is not a real downloadable link. Use the complete URL in the actual response. Do not concatenate the URL yourself or share it publicly.
   * 
   * @example
   * https://reports.example.com/report-3f2b8c1e-6d4a-4b7e-9a1c-2e5f7d8b9c0a.pdf
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The unique ID of the report. You can use this ID as the reportId parameter to query the report again. This is the report asset ID, not an internal task ID.
   * 
   * @example
   * report-3f2b8c1e-6d4a-4b7e-9a1c-2e5f7d8b9c0a
   */
  reportId?: string;
  /**
   * @remarks
   * The expiration time of the current DownloadUrl. The time is in UTC RFC 3339 format, ends with Z, and may contain fractional seconds. You cannot use the URL after it expires, and this time is no later than ContentExpiresAt.
   * 
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
  /**
   * @remarks
   * The download information of the available report, which is returned only when ReportStatus is AVAILABLE. The report ownership and the corresponding object version are verified before the download.
   */
  report?: GetAiReportResponseBodyDataReport;
  /**
   * @remarks
   * The report status. Valid values:
   * - NOT_APPLICABLE: The product does not include a report.
   * - WAITING_DATA: The data call result is not determined.
   * - NO_DATA: No data is found, and no per-use report is generated.
   * - WAITING_PERIOD: The query result for the callId of a periodic product. You must obtain the ReportId by calling ListProductReports and then query the report.
   * - QUEUED: The report task is queued.
   * - RUNNING: The report task is being processed.
   * - AVAILABLE: The report is available, and the Report object is returned in this response.
   * - FAILED: The data call or report generation failed.
   * - EXPIRED: The report content has expired.
   * - UNAVAILABLE: The delivery of the report is suspended.
   * 
   * You can query again later by using the same ID when the status is WAITING_DATA, QUEUED, or RUNNING. Repeated queries do not regenerate the report when the status is FAILED. The Report object is not returned unless the status is AVAILABLE.
   * 
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
  /**
   * @remarks
   * The report query result, which contains ReportStatus. The Report object is included only when the report is available.
   */
  data?: GetAiReportResponseBodyData;
  /**
   * @remarks
   * The unique identity of the request, which is used for Tracing Analysis and troubleshooting. Provide this ID when you troubleshoot exceptions.
   * 
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

