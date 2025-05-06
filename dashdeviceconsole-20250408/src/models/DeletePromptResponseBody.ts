// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePromptResponseBody extends $dara.Model {
  /**
   * @example
   * {$PromptContent}
   */
  data?: any;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5090DEE5-E7DB-59A8-B712-28918D3AAA8A
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      message: 'message',
      requestId: 'requestId',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

