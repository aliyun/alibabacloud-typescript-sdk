// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserDocumentPermissionRequestTenantContext extends $dara.Model {
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

export class GetUserDocumentPermissionRequest extends $dara.Model {
  /**
   * @example
   * 87654321
   */
  dentryId?: number;
  /**
   * @example
   * a9E05BDRVQRkezKGCDOvkbzrJ63zgkYA
   */
  dentryUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  resourceType?: number;
  /**
   * @example
   * 12345678
   */
  spaceId?: number;
  tenantContext?: GetUserDocumentPermissionRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      dentryId: 'DentryId',
      dentryUuid: 'DentryUuid',
      resourceType: 'ResourceType',
      spaceId: 'SpaceId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryId: 'number',
      dentryUuid: 'string',
      resourceType: 'number',
      spaceId: 'number',
      tenantContext: GetUserDocumentPermissionRequestTenantContext,
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

