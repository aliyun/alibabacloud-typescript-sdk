// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserInfoRequest extends $dara.Model {
  /**
   * @remarks
   * 平台应用 Token（控制台签发）。传入后将以 opsUserId 或 opsUserCode 指定的用户身份执行
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
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
   * The language preference: zh-CN or en-US.
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
   * 代理用户编码（租户内唯一），仅当应用凭证配置为 source_uid 时使用
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * 代理用户ID（WINNEXO 平台用户ID），仅当应用凭证配置为 winnexo_uid 时使用
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The user role description. This parameter is used when profileRole is set to Others. Maximum length: 100 characters.
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
   * The ID of the effective tenant.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      avatar: 'avatar',
      languagePreference: 'languagePreference',
      name: 'name',
      offering: 'offering',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      profileRoleInfo: 'profileRoleInfo',
      selfIntroduction: 'selfIntroduction',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      avatar: 'string',
      languagePreference: 'string',
      name: 'string',
      offering: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
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

