// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountForAppResponseBodyRetValue extends $dara.Model {
  /**
   * @example
   * true
   */
  isVip?: boolean;
  /**
   * @example
   * 2022-05-12 15:22:18
   */
  strVipExpire?: string;
  /**
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
   * @example
   * 0
   */
  retCode?: number;
  retMsg?: string;
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

