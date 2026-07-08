// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileContentLengthResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * File length
   * 
   * @example
   * 1024
   */
  wordNum?: number;
  static names(): { [key: string]: string } {
    return {
      wordNum: 'WordNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wordNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileContentLengthResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: GetFileContentLengthResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Unique request identifier
   * 
   * @example
   * DD656AF9-0839-521A-A3D2-F320009F9C87
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded. true means success. false means failure.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetFileContentLengthResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

