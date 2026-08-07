// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserDocumentPermissionShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dentryId: 'DentryId',
      dentryUuid: 'DentryUuid',
      resourceType: 'ResourceType',
      spaceId: 'SpaceId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryId: 'number',
      dentryUuid: 'string',
      resourceType: 'number',
      spaceId: 'number',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

