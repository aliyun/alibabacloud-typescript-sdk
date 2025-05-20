// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDentriesInfoRequestTenantContext } from "./QueryDentriesInfoRequestTenantContext";


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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * urv3ZIAtcmmIgQzHq08YcAiEiE
   */
  unionId?: string;
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
      unionId: 'UnionId',
      withThumbnail: 'WithThumbnail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdsForAppProperties: { 'type': 'array', 'itemType': 'string' },
      dentryId: 'string',
      spaceId: 'string',
      tenantContext: QueryDentriesInfoRequestTenantContext,
      unionId: 'string',
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

