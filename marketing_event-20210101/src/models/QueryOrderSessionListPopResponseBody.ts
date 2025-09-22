// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrderSessionListPopResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  sessionId?: number;
  /**
   * @example
   * 2024-09-25 14:11
   */
  signInDate?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      signInDate: 'SignInDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'number',
      signInDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderSessionListPopResponseBody extends $dara.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: QueryOrderSessionListPopResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': QueryOrderSessionListPopResponseBodyData },
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

