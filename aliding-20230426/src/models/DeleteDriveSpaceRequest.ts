// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteDriveSpaceRequestTenantContext } from "./DeleteDriveSpaceRequestTenantContext";


export class DeleteDriveSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  spaceId?: string;
  tenantContext?: DeleteDriveSpaceRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      tenantContext: DeleteDriveSpaceRequestTenantContext,
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

