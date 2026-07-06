// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SignOutOrgAccountShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 企业安全合规要求，执行账号强制登出
   */
  reason?: string;
  /**
   * @example
   * {"zh_CN":"管理员已执行登出","en_US":"Signed out by admin"}
   */
  reasonI18nForEmployeeShrink?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      reasonI18nForEmployeeShrink: 'ReasonI18nForEmployee',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      reasonI18nForEmployeeShrink: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

