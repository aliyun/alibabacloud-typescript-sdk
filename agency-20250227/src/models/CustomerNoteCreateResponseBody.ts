// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerNoteCreateResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 成功
   */
  message?: string;
  /**
   * @example
   * 成功
   */
  msg?: string;
  /**
   * @example
   * A9B725C7-3DBD-576B-AC91-F6F22AB99A77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

