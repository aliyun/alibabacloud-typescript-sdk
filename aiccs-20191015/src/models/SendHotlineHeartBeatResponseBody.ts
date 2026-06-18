// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendHotlineHeartBeatResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A return value of "Success" indicates that the request succeeded.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
   * - **true**: Succeeded.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

