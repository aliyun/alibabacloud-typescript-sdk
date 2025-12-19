// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPptConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * AppKey
   * 
   * @example
   * 333444766
   */
  appKey?: string;
  /**
   * @remarks
   * Code
   * 
   * @example
   * r4wr5y6g
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      code: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPptConfigResponseBody extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: GetPptConfigResponseBodyData;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
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
      data: GetPptConfigResponseBodyData,
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

