// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenPlanInviteLinkResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The expiration time. Unit: milliseconds.
   * 
   * @example
   * 1778379206
   */
  expireTime?: number;
  /**
   * @remarks
   * The generated token.
   * 
   * @example
   * sk-ws-D.****.*******
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
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

export class GetTokenPlanInviteLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetTokenPlanInviteLinkResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * False
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTokenPlanInviteLinkResponseBodyData,
      message: 'string',
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

