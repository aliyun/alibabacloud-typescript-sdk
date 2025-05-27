// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventBusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The code 200 indicates that the request was successful. Other codes indicate that the request failed. For information about error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  data?: boolean;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * EventBusNotExist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C229E140-1A5C-5D55-8904-CFC5BA4CAA98
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
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

