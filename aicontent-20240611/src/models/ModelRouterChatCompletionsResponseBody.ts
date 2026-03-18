// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterChatCompletionsResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: any;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

