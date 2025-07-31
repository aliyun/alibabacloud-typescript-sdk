// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBatchTaskResponseBodyUpdateResult extends $dara.Model {
  /**
   * @example
   * 12113111
   */
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskResponseBody extends $dara.Model {
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
  success?: boolean;
  updateResult?: UpdateBatchTaskResponseBodyUpdateResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      updateResult: UpdateBatchTaskResponseBodyUpdateResult,
    };
  }

  validate() {
    if(this.updateResult && typeof (this.updateResult as any).validate === 'function') {
      (this.updateResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

