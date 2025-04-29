// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExternalUserQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2000-01-02
   */
  birthday?: string;
  /**
   * @example
   * btrip123456
   */
  corpId?: string;
  /**
   * @example
   * zhangsan@alibaba-inc.com
   */
  email?: string;
  /**
   * @example
   * 000001
   */
  externalUserId?: string;
  /**
   * @example
   * 13438009765
   */
  phone?: string;
  realName?: string;
  /**
   * @example
   * zhang/san
   */
  realNameEn?: string;
  /**
   * @example
   * e1$12345678
   */
  userId?: string;
  userNick?: string;
  /**
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      corpId: 'corp_id',
      email: 'email',
      externalUserId: 'external_user_id',
      phone: 'phone',
      realName: 'real_name',
      realNameEn: 'real_name_en',
      userId: 'user_id',
      userNick: 'user_nick',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      corpId: 'string',
      email: 'string',
      externalUserId: 'string',
      phone: 'string',
      realName: 'string',
      realNameEn: 'string',
      userId: 'string',
      userNick: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

