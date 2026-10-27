// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EndSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of OK indicates that the operation was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The HTTP response message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The dynamic error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DB8BA95-4513-54B9-9C67-A28909CFB4AD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

