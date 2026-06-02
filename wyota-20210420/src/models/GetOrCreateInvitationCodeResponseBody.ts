// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrCreateInvitationCodeResponseBodyData extends $dara.Model {
  /**
   * @example
   * 000000
   */
  authCode?: string;
  /**
   * @example
   * 1772162247
   */
  expireTime?: string;
  /**
   * @example
   * True
   */
  expired?: boolean;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      expireTime: 'ExpireTime',
      expired: 'Expired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      expireTime: 'string',
      expired: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrCreateInvitationCodeResponseBody extends $dara.Model {
  /**
   * @example
   * PARAMETER_ERROR
   */
  code?: string;
  data?: GetOrCreateInvitationCodeResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * parameter error
   */
  message?: string;
  /**
   * @example
   * C5DCE54A-B266-522E-A6ED-468AF45F5AAA
   */
  requestId?: string;
  /**
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
      data: GetOrCreateInvitationCodeResponseBodyData,
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

