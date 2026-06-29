// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitBatchTaskResponseBodySubmitResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the scheduling node.
   * 
   * @example
   * n_12113111
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the object pending publish.
   * 
   * @example
   * 1010312911
   */
  submitId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      submitId: 'SubmitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      submitId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * The submit result.
   */
  submitResult?: SubmitBatchTaskResponseBodySubmitResult;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      submitResult: 'SubmitResult',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      submitResult: SubmitBatchTaskResponseBodySubmitResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.submitResult && typeof (this.submitResult as any).validate === 'function') {
      (this.submitResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

