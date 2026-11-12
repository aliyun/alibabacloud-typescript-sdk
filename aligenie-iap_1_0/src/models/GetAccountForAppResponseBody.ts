// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountForAppResponseBodyRetValue extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the user is an authorized member.
   * 
   * @example
   * true
   */
  isVip?: boolean;
  /**
   * @remarks
   * Membership expiration time.
   * 
   * @example
   * 2022-05-12 15:22:18
   */
  strVipExpire?: string;
  /**
   * @remarks
   * Millisecond-level UNIX timestamp.
   * 
   * - If the user has activated membership, returns the membership expiration time.
   * - If the user has never activated membership, the value is always `0`.
   * 
   * @example
   * 1652340138347
   */
  vipExpireAt?: number;
  static names(): { [key: string]: string } {
    return {
      isVip: 'IsVip',
      strVipExpire: 'StrVipExpire',
      vipExpireAt: 'VipExpireAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isVip: 'boolean',
      strVipExpire: 'string',
      vipExpireAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountForAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code returned. A value of `0` indicates success.
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * Error message returned. No message is returned upon success.
   * 
   * @example
   * 请求异常
   */
  retMsg?: string;
  /**
   * @remarks
   * List of result objects returned.
   */
  retValue?: GetAccountForAppResponseBodyRetValue;
  static names(): { [key: string]: string } {
    return {
      retCode: 'RetCode',
      retMsg: 'RetMsg',
      retValue: 'RetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retCode: 'number',
      retMsg: 'string',
      retValue: GetAccountForAppResponseBodyRetValue,
    };
  }

  validate() {
    if(this.retValue && typeof (this.retValue as any).validate === 'function') {
      (this.retValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

