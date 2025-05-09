// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkFlowTemplatesResponseBodyWorkFlowTemplates } from "./ListWorkFlowTemplatesResponseBodyWorkFlowTemplates";


export class ListWorkFlowTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 41067071-0243-4AAB-B3CF-4DE6D54F53B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The approval templates.
   */
  workFlowTemplates?: ListWorkFlowTemplatesResponseBodyWorkFlowTemplates;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      workFlowTemplates: 'WorkFlowTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      workFlowTemplates: ListWorkFlowTemplatesResponseBodyWorkFlowTemplates,
    };
  }

  validate() {
    if(this.workFlowTemplates && typeof (this.workFlowTemplates as any).validate === 'function') {
      (this.workFlowTemplates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

