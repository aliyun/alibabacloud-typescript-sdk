// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1705388704855
   */
  expiredTime?: number;
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'number',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: CreateTokenResponseBodyData;
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
   * The error description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\` indicates success and \\`false\\` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTokenResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

