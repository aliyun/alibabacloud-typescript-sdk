// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSLARulesResponseBodySLARuleList } from "./ListSlarulesResponseBodySlaruleList";


export class ListSLARulesResponseBody extends $dara.Model {
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
   * The ID of the request. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 3D1A59F4-EB2B-5D24-80A5-90C446A00DE2
   */
  requestId?: string;
  /**
   * @remarks
   * The list of SLA rules.
   */
  SLARuleList?: ListSLARulesResponseBodySLARuleList;
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
      requestId: 'RequestId',
      SLARuleList: 'SLARuleList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      SLARuleList: ListSLARulesResponseBodySLARuleList,
      success: 'boolean',
    };
  }

  validate() {
    if(this.SLARuleList && typeof (this.SLARuleList as any).validate === 'function') {
      (this.SLARuleList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

