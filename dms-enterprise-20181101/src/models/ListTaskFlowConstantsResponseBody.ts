// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskFlowConstantsResponseBodyDagConstantsDagConstant extends $dara.Model {
  /**
   * @remarks
   * The constant key.
   * 
   * @example
   * example
   */
  key?: string;
  /**
   * @remarks
   * The constant value.
   * 
   * @example
   * 0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskFlowConstantsResponseBodyDagConstants extends $dara.Model {
  dagConstant?: ListTaskFlowConstantsResponseBodyDagConstantsDagConstant[];
  static names(): { [key: string]: string } {
    return {
      dagConstant: 'DagConstant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagConstant: { 'type': 'array', 'itemType': ListTaskFlowConstantsResponseBodyDagConstantsDagConstant },
    };
  }

  validate() {
    if(Array.isArray(this.dagConstant)) {
      $dara.Model.validateArray(this.dagConstant);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskFlowConstantsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of constant key-value pairs for the task flow.
   */
  dagConstants?: ListTaskFlowConstantsResponseBodyDagConstants;
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
   * 028BF827-3801-5869-8548-F4A039256304
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
      dagConstants: 'DagConstants',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagConstants: ListTaskFlowConstantsResponseBodyDagConstants,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dagConstants && typeof (this.dagConstants as any).validate === 'function') {
      (this.dagConstants as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

