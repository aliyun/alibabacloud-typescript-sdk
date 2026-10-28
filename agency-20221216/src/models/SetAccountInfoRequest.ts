// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAccountInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The nickname of the sub-account. For enterprise customers, this is the company name. For T2 partners, this is the partner name.
   * 
   * @example
   * 我的账号
   */
  accountNickname?: string;
  /**
   * @remarks
   * The customer business manager. Maximum length: 50 characters.
   * 
   * @example
   * 张三
   */
  customerBd?: string;
  /**
   * @remarks
   * The description of the sub-account.
   * 
   * @example
   * 测试的账号
   */
  remark?: string;
  /**
   * @remarks
   * The UID of the sub-account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1133166938931507
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      accountNickname: 'AccountNickname',
      customerBd: 'CustomerBd',
      remark: 'Remark',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNickname: 'string',
      customerBd: 'string',
      remark: 'string',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

