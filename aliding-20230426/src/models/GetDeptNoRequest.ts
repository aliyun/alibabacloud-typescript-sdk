// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeptNoRequestTenantContext extends $dara.Model {
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

export class GetDeptNoRequest extends $dara.Model {
  tenantContext?: GetDeptNoRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 012345
   */
  deptId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      deptId: 'deptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: GetDeptNoRequestTenantContext,
      deptId: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

