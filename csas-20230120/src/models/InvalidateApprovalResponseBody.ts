// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvalidateApprovalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the invalidated approval instance.
   * 
   * @example
   * approval-6b5188a28634****
   */
  approvalId?: string;
  /**
   * @remarks
   * The effective status of the report. If the invalidation succeeds, Expired is returned to indicate that the report is invalidated.
   * 
   * @example
   * Expired
   */
  effectStatus?: string;
  /**
   * @remarks
   * The report type. Valid values:
   * * ApprovalReport: approval report.
   * * BackendReport: backend report.
   * 
   * @example
   * BackendReport
   */
  reportType?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalId: 'ApprovalId',
      effectStatus: 'EffectStatus',
      reportType: 'ReportType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalId: 'string',
      effectStatus: 'string',
      reportType: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

