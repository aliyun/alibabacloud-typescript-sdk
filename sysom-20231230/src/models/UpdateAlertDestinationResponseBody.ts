// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertDestinationResponseBody extends $dara.Model {
  /**
   * @remarks
   * status code  
   * - If `code == Success`, authorization succeeded.  
   * - Other status codes indicate Failed to Authorize. When authorization fails, check the `message` field for detailed error message.
   * 
   * @example
   * SysomOpenAPI.InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * Return Result.
   * 
   * @example
   * {
   * "webhook":"",
   * "sec":""
   * }
   */
  data?: any;
  /**
   * @remarks
   * error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * request ID
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

