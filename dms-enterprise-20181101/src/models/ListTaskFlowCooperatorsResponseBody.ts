// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskFlowCooperatorsResponseBodyCooperatorList } from "./ListTaskFlowCooperatorsResponseBodyCooperatorList";


export class ListTaskFlowCooperatorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The users that are involved in the task flow.
   */
  cooperatorList?: ListTaskFlowCooperatorsResponseBodyCooperatorList;
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
   * The ID of the request. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 54C99C70-2DFF-5A8C-A252-EBAA1EB668EC
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
      cooperatorList: 'CooperatorList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cooperatorList: ListTaskFlowCooperatorsResponseBodyCooperatorList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.cooperatorList && typeof (this.cooperatorList as any).validate === 'function') {
      (this.cooperatorList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

