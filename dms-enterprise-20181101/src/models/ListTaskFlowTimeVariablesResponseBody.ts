// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskFlowTimeVariablesResponseBodyTimeVariables } from "./ListTaskFlowTimeVariablesResponseBodyTimeVariables";


export class ListTaskFlowTimeVariablesResponseBody extends $dara.Model {
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
   * EC12A3BE-149F-5365-AF33-12CC8C963923
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
  /**
   * @remarks
   * The time variables for the task flow.
   */
  timeVariables?: ListTaskFlowTimeVariablesResponseBodyTimeVariables;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      timeVariables: 'TimeVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      timeVariables: ListTaskFlowTimeVariablesResponseBodyTimeVariables,
    };
  }

  validate() {
    if(this.timeVariables && typeof (this.timeVariables as any).validate === 'function') {
      (this.timeVariables as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

