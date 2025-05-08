// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNacosConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 202
   */
  httpCode?: string;
  /**
   * @remarks
   * Message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 4FEFC13F-EB50-51E1-97D8-C5CBA8CD1B84
   */
  requestId?: string;
  /**
   * @remarks
   * Request result, with the following values: - `true`: The request was successful. - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

