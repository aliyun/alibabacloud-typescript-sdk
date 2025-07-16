// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDriveSpaceRequestTenantContext extends $dara.Model {
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

export class AddDriveSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  tenantContext?: AddDriveSpaceRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tenantContext: AddDriveSpaceRequestTenantContext,
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

