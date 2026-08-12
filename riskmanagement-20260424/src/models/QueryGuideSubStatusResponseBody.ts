// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGuideSubStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the API call.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The subscription status. Valid values:
   * 
   * - **SUBSCRIBED**: Subscribed.
   * - **UNSUBSCRIBED**: Unsubscribed.
   * 
   * @example
   * SUBSCRIBED
   */
  data?: string;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C107939-59BD-5EB9-B250-39559C830A85
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - **true**: The call was successful.              
   * - **false**: The call failed.
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
      data: 'string',
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

