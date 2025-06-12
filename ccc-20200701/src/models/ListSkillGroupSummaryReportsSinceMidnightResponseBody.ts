// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport } from "./ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport";


export class ListSkillGroupSummaryReportsSinceMidnightResponseBody extends $dara.Model {
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
  pagedSkillGroupSummaryReport?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport;
  /**
   * @example
   * 2B36CEBC-6D11-5451-9E6B-C6D1927841C5
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
      pagedSkillGroupSummaryReport: 'PagedSkillGroupSummaryReport',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pagedSkillGroupSummaryReport: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagedSkillGroupSummaryReport && typeof (this.pagedSkillGroupSummaryReport as any).validate === 'function') {
      (this.pagedSkillGroupSummaryReport as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

