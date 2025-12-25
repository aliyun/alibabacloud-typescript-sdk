// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplyTicketResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned value is the dialogID of the response to the ticket.
   * 
   * @example
   * 46434030
   */
  data?: string;
  /**
   * @remarks
   * The error message. If success is set to false, the message is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the API request. The requestid is unique for each call.
   * 
   * @example
   * C1DA4C6F-963E-5741-AB57-67A554D102FD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is normal.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
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

