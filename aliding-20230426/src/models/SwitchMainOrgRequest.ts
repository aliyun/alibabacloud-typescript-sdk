// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SwitchMainOrgRequestTenantContext } from "./SwitchMainOrgRequestTenantContext";


export class SwitchMainOrgRequest extends $dara.Model {
  /**
   * @example
   * 21001
   */
  targetOrgId?: number;
  tenantContext?: SwitchMainOrgRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      targetOrgId: 'TargetOrgId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetOrgId: 'number',
      tenantContext: SwitchMainOrgRequestTenantContext,
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

