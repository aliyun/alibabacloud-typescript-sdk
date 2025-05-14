// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDentryRequestTenantContext } from "./QueryDentryRequestTenantContext";


export class QueryDentryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  dentryId?: string;
  /**
   * @example
   * true
   */
  includeSpace?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * space-fxhb96vuddz8htqt
   */
  spaceId?: string;
  tenantContext?: QueryDentryRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      dentryId: 'DentryId',
      includeSpace: 'IncludeSpace',
      spaceId: 'SpaceId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryId: 'string',
      includeSpace: 'boolean',
      spaceId: 'string',
      tenantContext: QueryDentryRequestTenantContext,
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

