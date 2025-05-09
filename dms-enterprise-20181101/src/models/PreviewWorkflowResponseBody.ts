// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreviewWorkflowResponseBodyWorkflowDetail } from "./PreviewWorkflowResponseBodyWorkflowDetail";


export class PreviewWorkflowResponseBody extends $dara.Model {
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  workflowDetail?: PreviewWorkflowResponseBodyWorkflowDetail;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      workflowDetail: 'WorkflowDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      workflowDetail: PreviewWorkflowResponseBodyWorkflowDetail,
    };
  }

  validate() {
    if(this.workflowDetail && typeof (this.workflowDetail as any).validate === 'function') {
      (this.workflowDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

