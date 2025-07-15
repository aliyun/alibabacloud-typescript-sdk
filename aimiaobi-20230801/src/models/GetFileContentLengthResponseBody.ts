// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileContentLengthResponseBodyData extends $dara.Model {
  /**
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
   * @example
   * successful
   */
  code?: string;
  data?: GetFileContentLengthResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * DD656AF9-0839-521A-A3D2-F320009F9C87
   */
  requestId?: string;
  /**
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

