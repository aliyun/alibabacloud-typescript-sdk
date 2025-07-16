// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WearOrgHonorRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 306752103647458
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

