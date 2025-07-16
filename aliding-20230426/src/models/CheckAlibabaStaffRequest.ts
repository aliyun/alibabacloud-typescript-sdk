// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAlibabaStaffRequestTenantContext extends $dara.Model {
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

export class CheckAlibabaStaffRequest extends $dara.Model {
  /**
   * @example
   * 156****9665
   */
  mobile?: string;
  tenantContext?: CheckAlibabaStaffRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      tenantContext: CheckAlibabaStaffRequestTenantContext,
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

