// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOnlineDDLProgressResponseBodyOnlineDDLTaskDetail } from "./GetOnlineDdlprogressResponseBodyOnlineDdltaskDetail";


export class GetOnlineDDLProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 403
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
   * The details of the task.
   */
  onlineDDLTaskDetail?: GetOnlineDDLProgressResponseBodyOnlineDDLTaskDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34E01EDD-6A16-4CF0-9541-C644D1BE01AA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      onlineDDLTaskDetail: 'OnlineDDLTaskDetail',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      onlineDDLTaskDetail: GetOnlineDDLProgressResponseBodyOnlineDDLTaskDetail,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.onlineDDLTaskDetail && typeof (this.onlineDDLTaskDetail as any).validate === 'function') {
      (this.onlineDDLTaskDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

