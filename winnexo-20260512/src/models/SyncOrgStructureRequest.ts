// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncOrgStructureRequestDepartments extends $dara.Model {
  /**
   * @remarks
   * 部门 ID（外部标识，客户端自行保证唯一性）
   * 
   * @example
   * exampleDeptId
   */
  deptId?: string;
  /**
   * @remarks
   * 部门名称
   * 
   * @example
   * string_value
   */
  deptName?: string;
  /**
   * @remarks
   * 排序号（数值越小越靠前）
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * 父部门 ID（null 表示一级部门/根部门）
   * 
   * @example
   * exampleParentDeptId
   */
  parentDeptId?: string;
  static names(): { [key: string]: string } {
    return {
      deptId: 'deptId',
      deptName: 'deptName',
      order: 'order',
      parentDeptId: 'parentDeptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptId: 'string',
      deptName: 'string',
      order: 'number',
      parentDeptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncOrgStructureRequestMembers extends $dara.Model {
  /**
   * @remarks
   * 用户标识（SAML 场景为邮箱/UPN，需与 rbj_user_account.account_id 匹配）
   * 
   * @example
   * exampleAccountId
   */
  accountId?: string;
  /**
   * @remarks
   * 所属部门 ID（必须与 departments 中的 deptId 对应）
   * 
   * @example
   * exampleDeptId
   */
  deptId?: string;
  /**
   * @remarks
   * 用户姓名（展示用，可选）
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      deptId: 'deptId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      deptId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncOrgStructureRequest extends $dara.Model {
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
  departments?: SyncOrgStructureRequestDepartments[];
  /**
   * @remarks
   * 成员列表（syncMembers=true 时必须提供）
   */
  members?: SyncOrgStructureRequestMembers[];
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
      departments: 'departments',
      members: 'members',
      platformType: 'platformType',
      ssoSettingsId: 'ssoSettingsId',
      syncMembers: 'syncMembers',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      departments: { 'type': 'array', 'itemType': SyncOrgStructureRequestDepartments },
      members: { 'type': 'array', 'itemType': SyncOrgStructureRequestMembers },
      platformType: 'string',
      ssoSettingsId: 'string',
      syncMembers: 'boolean',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.departments)) {
      $dara.Model.validateArray(this.departments);
    }
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

