// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDentryRequestTenantContext extends $dara.Model {
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

export class DeleteDentryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b9XJlZ44W3NeDGyA
   */
  dentryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nb9XJx4EPx16QGyA
   */
  spaceId?: string;
  tenantContext?: DeleteDentryRequestTenantContext;
  toRecycleBin?: boolean;
  static names(): { [key: string]: string } {
    return {
      dentryId: 'DentryId',
      spaceId: 'SpaceId',
      tenantContext: 'TenantContext',
      toRecycleBin: 'ToRecycleBin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryId: 'string',
      spaceId: 'string',
      tenantContext: DeleteDentryRequestTenantContext,
      toRecycleBin: 'boolean',
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

