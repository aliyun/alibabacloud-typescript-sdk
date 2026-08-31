// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerNoteCreateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial returned by the POP API when the caller does not have RAM permissions.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * true
   */
  data?: number;
  /**
   * @remarks
   * The HTTP status code returned by the POP API.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned with the result.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * Same as Message.
   * 
   * @example
   * 成功
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

