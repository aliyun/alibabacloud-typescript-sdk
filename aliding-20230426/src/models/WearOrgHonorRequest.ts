// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WearOrgHonorRequestTenantContext } from "./WearOrgHonorRequestTenantContext";


export class WearOrgHonorRequest extends $dara.Model {
  tenantContext?: WearOrgHonorRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 21659595
   */
  honorId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  orgId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 363784
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  wear?: boolean;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      honorId: 'honorId',
      orgId: 'orgId',
      userId: 'userId',
      wear: 'wear',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: WearOrgHonorRequestTenantContext,
      honorId: 'string',
      orgId: 'number',
      userId: 'string',
      wear: 'boolean',
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

