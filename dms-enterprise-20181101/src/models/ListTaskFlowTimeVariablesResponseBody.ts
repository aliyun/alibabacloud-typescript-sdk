// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskFlowTimeVariablesResponseBodyTimeVariablesTimeVariable extends $dara.Model {
  /**
   * @remarks
   * The name of the time variable.
   * 
   * @example
   * time_test
   */
  name?: string;
  /**
   * @remarks
   * The format of the time variable.
   * 
   * @example
   * 2018-09-26|+7h
   */
  pattern?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pattern: 'Pattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskFlowTimeVariablesResponseBodyTimeVariables extends $dara.Model {
  timeVariable?: ListTaskFlowTimeVariablesResponseBodyTimeVariablesTimeVariable[];
  static names(): { [key: string]: string } {
    return {
      timeVariable: 'TimeVariable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeVariable: { 'type': 'array', 'itemType': ListTaskFlowTimeVariablesResponseBodyTimeVariablesTimeVariable },
    };
  }

  validate() {
    if(Array.isArray(this.timeVariable)) {
      $dara.Model.validateArray(this.timeVariable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

