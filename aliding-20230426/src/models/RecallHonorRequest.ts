// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RecallHonorRequestTenantContext } from "./RecallHonorRequestTenantContext";


export class RecallHonorRequest extends $dara.Model {
  tenantContext?: RecallHonorRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 21660610
   */
  honorId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 345391052
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
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      honorId: 'honorId',
      orgId: 'orgId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: RecallHonorRequestTenantContext,
      honorId: 'string',
      orgId: 'number',
      userId: 'string',
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

