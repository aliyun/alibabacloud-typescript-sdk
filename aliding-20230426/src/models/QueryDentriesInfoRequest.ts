// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDentriesInfoRequestTenantContext extends $dara.Model {
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

export class QueryDentriesInfoRequest extends $dara.Model {
  appIdsForAppProperties?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 140901622636
   */
  dentryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 22443475065
   */
  spaceId?: string;
  tenantContext?: QueryDentriesInfoRequestTenantContext;
  /**
   * @example
   * false
   */
  withThumbnail?: boolean;
  static names(): { [key: string]: string } {
    return {
      appIdsForAppProperties: 'AppIdsForAppProperties',
      dentryId: 'DentryId',
      spaceId: 'SpaceId',
      tenantContext: 'TenantContext',
      withThumbnail: 'WithThumbnail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdsForAppProperties: { 'type': 'array', 'itemType': 'string' },
      dentryId: 'string',
      spaceId: 'string',
      tenantContext: QueryDentriesInfoRequestTenantContext,
      withThumbnail: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.appIdsForAppProperties)) {
      $dara.Model.validateArray(this.appIdsForAppProperties);
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

