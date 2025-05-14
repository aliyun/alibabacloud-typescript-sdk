// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRelatedWorkspacesRequestTenantContext } from "./GetRelatedWorkspacesRequestTenantContext";


export class GetRelatedWorkspacesRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  includeRecent?: boolean;
  tenantContext?: GetRelatedWorkspacesRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      includeRecent: 'IncludeRecent',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeRecent: 'boolean',
      tenantContext: GetRelatedWorkspacesRequestTenantContext,
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

