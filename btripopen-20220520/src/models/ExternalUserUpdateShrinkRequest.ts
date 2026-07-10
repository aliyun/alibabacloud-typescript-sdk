// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExternalUserUpdateShrinkRequest extends $dara.Model {
  birthday?: string;
  certRequestListShrink?: string;
  email?: string;
  phone?: string;
  realName?: string;
  realNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      certRequestListShrink: 'cert_request_list',
      email: 'email',
      phone: 'phone',
      realName: 'real_name',
      realNameEn: 'real_name_en',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      certRequestListShrink: 'string',
      email: 'string',
      phone: 'string',
      realName: 'string',
      realNameEn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

