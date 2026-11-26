// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncOrgStructureShrinkRequest extends $dara.Model {
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
   * The enterprise identifier. This value must match the corpId returned by listAvailableConfigs.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleCorpId
   */
  corpId?: string;
  /**
   * @remarks
   * The department list. At least one root department must be included.
   * 
   * This parameter is required.
   */
  departmentsShrink?: string;
  /**
   * @remarks
   * The member list. This parameter is required when syncMembers is set to true.
   */
  membersShrink?: string;
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
   * The platform type. Valid values: saml, oauth2, or custom.
   * 
   * This parameter is required.
   * 
   * @example
   * saml
   */
  platformType?: string;
  /**
   * @remarks
   * The SSO configuration ID. For SAML/OAuth2, this parameter is optional. If not specified, the value is automatically derived based on corpId. If multiple IdPs use the same corpId, you must explicitly specify this parameter. Otherwise, an AMBIGUOUS error is returned. This parameter is not required for custom.
   * 
   * @example
   * exampleSsoSettingsId
   */
  ssoSettingsId?: string;
  /**
   * @remarks
   * Specifies whether to synchronize member relationships. In custom mode, this parameter is forced to false.
   * 
   * @example
   * false
   */
  syncMembers?: boolean;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      corpId: 'corpId',
      departmentsShrink: 'departments',
      membersShrink: 'members',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      platformType: 'platformType',
      ssoSettingsId: 'ssoSettingsId',
      syncMembers: 'syncMembers',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      corpId: 'string',
      departmentsShrink: 'string',
      membersShrink: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      platformType: 'string',
      ssoSettingsId: 'string',
      syncMembers: 'boolean',
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

