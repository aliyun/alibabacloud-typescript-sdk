// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateWorkspaceRequestTenantContext } from "./CreateWorkspaceRequestTenantContext";


export class CreateWorkspaceRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  tenantContext?: CreateWorkspaceRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      tenantContext: CreateWorkspaceRequestTenantContext,
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

