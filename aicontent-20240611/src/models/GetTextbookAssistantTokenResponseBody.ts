// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextbookAssistantTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The authorization token. Use this token to make API calls to the English textbook-style AI teacher service.
   * 
   * @example
   * tc_197bf5bb81889cc79eb51ae9b8c0cea3
   */
  authToken?: string;
  /**
   * @remarks
   * The expiration time of the authorization token, in seconds.
   * 
   * @example
   * 5400
   */
  expire?: number;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      expire: 'expire',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      expire: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextbookAssistantTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   */
  data?: GetTextbookAssistantTokenResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A5E9849-A2F0-551D-A7D8-1A8118557BAB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
   * 
   * - **true**: The API call succeeded.
   * 
   * - **false**: The API call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTextbookAssistantTokenResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

