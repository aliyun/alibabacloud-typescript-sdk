// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertDestinationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code  
   * - If `code == Success`, authorization succeeded.  
   * - Other status codes indicate authorization failed. When authorization fails, view the `message` field to obtain detailed error information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   * 
   * @example
   * {}
   */
  data?: any;
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
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

