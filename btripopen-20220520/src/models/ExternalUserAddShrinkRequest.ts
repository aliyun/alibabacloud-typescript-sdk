// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExternalUserAddShrinkRequest extends $dara.Model {
  birthday?: string;
  certRequestListShrink?: string;
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  externalUserId?: string;
  phone?: string;
  realName?: string;
  realNameEn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      certRequestListShrink: 'cert_request_list',
      email: 'email',
      externalUserId: 'external_user_id',
      phone: 'phone',
      realName: 'real_name',
      realNameEn: 'real_name_en',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      certRequestListShrink: 'string',
      email: 'string',
      externalUserId: 'string',
      phone: 'string',
      realName: 'string',
      realNameEn: 'string',
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

