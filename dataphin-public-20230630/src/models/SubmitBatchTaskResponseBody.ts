// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitBatchTaskResponseBodySubmitResult extends $dara.Model {
  /**
   * @example
   * n_12113111
   */
  nodeId?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  submitResult?: SubmitBatchTaskResponseBodySubmitResult;
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

