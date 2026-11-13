// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductReportsResponseBodyDataReports extends $dara.Model {
  /**
   * @remarks
   * The end time of the natural week to which the report belongs, exclusive. The natural week ends at 00:00:00 on the following Monday in UTC+8 (Asia/Shanghai). This field is transformed to UTC RFC 3339 format and ends with Z. The example corresponds to 00:00:00 on Monday, November 9, 2026, UTC+8.
   * 
   * @example
   * 2026-11-08T16:00:00Z
   */
  periodEnd?: string;
  /**
   * @remarks
   * The start time of the natural week to which the report belongs, inclusive. The natural week is calculated based on UTC+8 (Asia/Shanghai) and starts at 00:00:00 on Monday. This field is transformed to UTC RFC 3339 format and ends with Z. The example corresponds to 00:00:00 on Monday, November 2, 2026, UTC+8.
   * 
   * @example
   * 2026-11-01T16:00:00Z
   */
  periodStart?: string;
  /**
   * @remarks
   * The product code of the data product to which the report belongs. This is consistent with the ProductCode of the current request.
   * 
   * @example
   * cloudsec.demo.v1
   */
  productCode?: string;
  /**
   * @remarks
   * The unique ID of the periodic report. Pass this value as the reportId parameter to GetAiReport to query the current status of the report and obtain the download URL when it is available.
   * 
   * @example
   * report-3f2b8c1e-6d4a-4b7e-9a1c-2e5f7d8b9c0a
   */
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      periodEnd: 'PeriodEnd',
      periodStart: 'PeriodStart',
      productCode: 'ProductCode',
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodEnd: 'string',
      periodStart: 'string',
      productCode: 'string',
      reportId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductReportsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The available report records sorted by period in descending order. By default, up to ten records are returned. If LatestOnly is set to true, at most one record is returned. The array is empty if no reports exist. A single natural week may have multiple report records; use ReportId to distinguish them. The list does not contain download URLs. The actual download status is subject to GetAiReport.
   */
  reports?: ListProductReportsResponseBodyDataReports[];
  static names(): { [key: string]: string } {
    return {
      reports: 'Reports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reports: { 'type': 'array', 'itemType': ListProductReportsResponseBodyDataReports },
    };
  }

  validate() {
    if(Array.isArray(this.reports)) {
      $dara.Model.validateArray(this.reports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query results of the periodic report list, which includes the Reports array. The array is empty if no available reports exist.
   */
  data?: ListProductReportsResponseBodyData;
  /**
   * @remarks
   * The unique identity of the request, which is used for Tracing Analysis and troubleshooting. Provide this identity when troubleshooting exceptions.
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
      data: ListProductReportsResponseBodyData,
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

