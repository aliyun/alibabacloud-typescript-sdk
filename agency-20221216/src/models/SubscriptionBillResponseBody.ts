// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscriptionBillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data that is returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

