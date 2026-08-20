// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The profile picture URL.
   * 
   * @example
   * https://example.com/avatar.png
   */
  avatar?: string;
  /**
   * @remarks
   * The language preference: zh-CN, en-US.
   * 
   * @example
   * string_value
   */
  languagePreference?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The user service description. Maximum length: 1000 characters.
   * 
   * @example
   * string_value
   */
  offering?: string;
  /**
   * @remarks
   * The user role description (used when profileRole is set to Others). Maximum length: 100 characters.
   * 
   * @example
   * string_value
   */
  profileRoleInfo?: string;
  /**
   * @remarks
   * The user self-introduction. Maximum length: 1000 characters.
   * 
   * @example
   * string_value
   */
  selfIntroduction?: string;
  /**
   * @remarks
   * The effective tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      languagePreference: 'languagePreference',
      name: 'name',
      offering: 'offering',
      profileRoleInfo: 'profileRoleInfo',
      selfIntroduction: 'selfIntroduction',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      languagePreference: 'string',
      name: 'string',
      offering: 'string',
      profileRoleInfo: 'string',
      selfIntroduction: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

