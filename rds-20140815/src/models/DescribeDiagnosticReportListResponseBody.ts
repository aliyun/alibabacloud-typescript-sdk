// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosticReportListResponseBodyReportList } from "./DescribeDiagnosticReportListResponseBodyReportList";


export class DescribeDiagnosticReportListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The details of a diagnostic report.
   */
  reportList?: DescribeDiagnosticReportListResponseBodyReportList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B7E9A79C-DE1B-4398-845F-D654FC0958BD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      reportList: 'ReportList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      reportList: { 'type': 'array', 'itemType': DescribeDiagnosticReportListResponseBodyReportList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reportList)) {
      $dara.Model.validateArray(this.reportList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

