// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductReportsResponseBodyDataReports extends $dara.Model {
  /**
   * @example
   * 2026-11-08T16:00:00Z
   */
  periodEnd?: string;
  /**
   * @example
   * 2026-11-01T16:00:00Z
   */
  periodStart?: string;
  /**
   * @example
   * cloudsec.demo.v1
   */
  productCode?: string;
  /**
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
  data?: ListProductReportsResponseBodyData;
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

