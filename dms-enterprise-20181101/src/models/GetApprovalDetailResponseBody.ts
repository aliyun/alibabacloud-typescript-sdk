// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApprovalDetailResponseBodyApprovalDetail } from "./GetApprovalDetailResponseBodyApprovalDetail";


export class GetApprovalDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The approval details of the ticket.
   */
  approvalDetail?: GetApprovalDetailResponseBodyApprovalDetail;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * MissingWorkflowInstanceId
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * WorkflowInstanceId is mandatory for this action.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66DE630B-ECA1-52A3-9198-602066F9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      approvalDetail: 'ApprovalDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalDetail: GetApprovalDetailResponseBodyApprovalDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.approvalDetail && typeof (this.approvalDetail as any).validate === 'function') {
      (this.approvalDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

