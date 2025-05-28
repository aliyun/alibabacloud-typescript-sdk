// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddWorkspaceUsersResponseBodyResult } from "./AddWorkspaceUsersResponseBodyResult";


export class AddWorkspaceUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7AAB95D7-2E11-4FE2-94BC-858E4FC0C976
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of the API execution.
   */
  result?: AddWorkspaceUsersResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Value range:
   * - true: The request was successful. There may be cases where some members are added successfully and others fail. For the reasons of failure, refer to the FailureDetail in the response.
   * - false: The request failed, and no data will be persisted.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: AddWorkspaceUsersResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

