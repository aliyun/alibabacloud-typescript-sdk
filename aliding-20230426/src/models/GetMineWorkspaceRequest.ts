// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMineWorkspaceRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 1
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

export class GetMineWorkspaceRequest extends $dara.Model {
  request?: { [key: string]: any };
  tenantContext?: GetMineWorkspaceRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tenantContext: GetMineWorkspaceRequestTenantContext,
    };
  }

  validate() {
    if(this.request) {
      $dara.Model.validateMap(this.request);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

