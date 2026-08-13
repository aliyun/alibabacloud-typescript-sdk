// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncOrgStructureShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 企业标识（必须与 listAvailableConfigs 返回的 corpId 一致）
   * 
   * This parameter is required.
   * 
   * @example
   * exampleCorpId
   */
  corpId?: string;
  /**
   * @remarks
   * 部门列表（至少包含一个根部门）
   * 
   * This parameter is required.
   */
  departmentsShrink?: string;
  /**
   * @remarks
   * 成员列表（syncMembers=true 时必须提供）
   */
  membersShrink?: string;
  /**
   * @remarks
   * 平台类型: saml / oauth2 / custom
   * 
   * This parameter is required.
   * 
   * @example
   * saml
   */
  platformType?: string;
  /**
   * @remarks
   * SSO 配置 ID（SAML/OAuth2 可选：不传时按 corpId 自动推导；若存在多个 IdP 使用相同 corpId 则必须显式传入，否则报 AMBIGUOUS 错误；custom 不需要）
   * 
   * @example
   * exampleSsoSettingsId
   */
  ssoSettingsId?: string;
  /**
   * @remarks
   * 是否同步成员关系（custom 模式强制为 false）
   * 
   * @example
   * false
   */
  syncMembers?: boolean;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      departmentsShrink: 'departments',
      membersShrink: 'members',
      platformType: 'platformType',
      ssoSettingsId: 'ssoSettingsId',
      syncMembers: 'syncMembers',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      departmentsShrink: 'string',
      membersShrink: 'string',
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

