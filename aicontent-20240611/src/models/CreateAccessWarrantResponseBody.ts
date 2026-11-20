// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessWarrantResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * 1234567890
   */
  accessToken?: string;
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * ex2xxxxxxxx
   */
  accessWarrantId?: string;
  /**
   * @remarks
   * The application access ID (AppKey).
   * 
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1672531200
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time of the token.
   * 
   * @example
   * 1672531200
   */
  expireTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1234567890
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      accessWarrantId: 'AccessWarrantId',
      applicationAccessId: 'ApplicationAccessId',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      accessWarrantId: 'string',
      applicationAccessId: 'string',
      createTime: 'string',
      expireTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessWarrantResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   * 
   * @example
   * []
   */
  data?: CreateAccessWarrantResponseBodyData;
  /**
   * @remarks
   * The fault message code.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Unknown error
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
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: CreateAccessWarrantResponseBodyData,
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

