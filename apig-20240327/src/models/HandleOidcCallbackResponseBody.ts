// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleOidcCallbackResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The access token returned for this OIDC logon. The API definition marks this field as a sensitive field.
   * 
   * @example
   * access-token-xxxxxxxx
   */
  accessToken?: string;
  /**
   * @remarks
   * The validity period value of the access token (expiresIn, int64). The unit is not declared in the API definition.
   * 
   * @example
   * 3600
   */
  expiresIn?: number;
  /**
   * @remarks
   * The type identifier of the access token (tokenType). The set of valid values is not declared in the API definition.
   * 
   * @example
   * token-type-xxxxxxxx
   */
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      expiresIn: 'expiresIn',
      tokenType: 'tokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      expiresIn: 'number',
      tokenType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleOidcCallbackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: HandleOidcCallbackResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: HandleOidcCallbackResponseBodyData,
      message: 'string',
      requestId: 'string',
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

