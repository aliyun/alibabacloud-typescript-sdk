// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * 被拒绝的 RAM action，如 agentrun:ListTemplates
   * 
   * **if can be null:**
   * true
   */
  authAction?: string;
  /**
   * @remarks
   * 鉴权主体展示名
   * 
   * **if can be null:**
   * true
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * 鉴权主体所属账号 ID
   * 
   * **if can be null:**
   * true
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * 鉴权主体类型，如 SubUser、AssumedRoleUser
   * 
   * **if can be null:**
   * true
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * Base64 编码的诊断信息，可用于 RAM 控制台自诊断
   * 
   * **if can be null:**
   * true
   */
  encodedDiagnosticInfo?: string;
  /**
   * @remarks
   * 无权限类型：ImplicitDeny 或 ExplicitDeny
   * 
   * **if can be null:**
   * true
   */
  noPermissionType?: string;
  /**
   * @remarks
   * 策略类型，如 ResourceBasedPolicy、IdentityBasedPolicy
   * 
   * **if can be null:**
   * true
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'authAction',
      authPrincipalDisplayName: 'authPrincipalDisplayName',
      authPrincipalOwnerId: 'authPrincipalOwnerId',
      authPrincipalType: 'authPrincipalType',
      encodedDiagnosticInfo: 'encodedDiagnosticInfo',
      noPermissionType: 'noPermissionType',
      policyType: 'policyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticInfo: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

