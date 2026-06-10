// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBeebotIntentUserSayResponseBody extends $dara.Model {
  /**
   * @remarks
   * Internal request ID
   * 
   * @example
   * 0B219FCB-EC71-1F08-BB1B-0E87C20158C8
   */
  beebotRequestId?: string;
  /**
   * @remarks
   * Status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Success
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * User Say ID
   * 
   * @example
   * 17448458
   */
  userSayId?: number;
  static names(): { [key: string]: string } {
    return {
      beebotRequestId: 'BeebotRequestId',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beebotRequestId: 'string',
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userSayId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

