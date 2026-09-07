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
   * The effective status of the approval. When the invalidation succeeds, the value is fixed as Expired, which indicates that the approval has been invalidated.
   * 
   * @example
   * Expired
   */
  effectStatus?: string;
  /**
   * @remarks
   * The approval type. Valid values:
   * * ApprovalReport: approval.
   * * BackendReport: backend approval.
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

