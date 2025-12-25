// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The return code of the request result.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The return value is the work order number.
   * 
   * @example
   * 0005PYGCW
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
   * The unique ID of the API request. The requestID is unique for each call.
   * 
   * @example
   * 0254B7DE-7365-57B4-8E38-14FE927E3FEB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is normal.
   * 
   * @example
   * True
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

