// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySignInRecordPopResponseBodyData extends $dara.Model {
  /**
   * @example
   * boarding
   */
  event?: string;
  /**
   * @remarks
   * nfcid
   * 
   * @example
   * cshdsaodhoashd
   */
  rfid?: string;
  /**
   * @remarks
   * sessionId
   * 
   * @example
   * 2001
   */
  sessionId?: number;
  /**
   * @example
   * 2024-09-25 14:11
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      rfid: 'Rfid',
      sessionId: 'SessionId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      rfid: 'string',
      sessionId: 'number',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySignInRecordPopResponseBody extends $dara.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: QuerySignInRecordPopResponseBodyData[];
  /**
   * @example
   * 200
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * 1skladklasmda
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': QuerySignInRecordPopResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

