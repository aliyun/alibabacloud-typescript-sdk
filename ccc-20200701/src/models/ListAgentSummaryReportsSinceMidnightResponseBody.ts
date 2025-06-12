// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport } from "./ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport";


export class ListAgentSummaryReportsSinceMidnightResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  pagedAgentSummaryReport?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport;
  /**
   * @example
   * 27DD30C4-CAE2-481A-97CC-D3C54625341D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pagedAgentSummaryReport: 'PagedAgentSummaryReport',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pagedAgentSummaryReport: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagedAgentSummaryReport && typeof (this.pagedAgentSummaryReport as any).validate === 'function') {
      (this.pagedAgentSummaryReport as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

