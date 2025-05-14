// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryOrgHonorsRequestTenantContext } from "./QueryOrgHonorsRequestTenantContext";


export class QueryOrgHonorsRequest extends $dara.Model {
  tenantContext?: QueryOrgHonorsRequestTenantContext;
  /**
   * @example
   * 48
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  orgId?: number;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      orgId: 'orgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: QueryOrgHonorsRequestTenantContext,
      maxResults: 'number',
      nextToken: 'string',
      orgId: 'number',
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

