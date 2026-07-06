// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SignOutOrgAccountRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class SignOutOrgAccountRequest extends $dara.Model {
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
  reasonI18nForEmployee?: { [key: string]: string };
  tenantContext?: SignOutOrgAccountRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      reasonI18nForEmployee: 'ReasonI18nForEmployee',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      reasonI18nForEmployee: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tenantContext: SignOutOrgAccountRequestTenantContext,
    };
  }

  validate() {
    if(this.reasonI18nForEmployee) {
      $dara.Model.validateMap(this.reasonI18nForEmployee);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

