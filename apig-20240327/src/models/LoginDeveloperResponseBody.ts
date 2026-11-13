// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoginDeveloperResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The access token returned for the current developer logon. This field is marked as sensitive in the API definition.
   * 
   * @example
   * access-token-xxxxxxxx
   */
  accessToken?: string;
  /**
   * @remarks
   * The int64 numeric field associated with the access token. The unit and exact meaning are not specified in the API definition.
   * 
   * @example
   * 3600
   */
  expiresIn?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      expiresIn: 'expiresIn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      expiresIn: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginDeveloperResponseBody extends $dara.Model {
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
  data?: LoginDeveloperResponseBodyData;
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
      data: LoginDeveloperResponseBodyData,
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

