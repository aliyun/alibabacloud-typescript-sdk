// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryConferenceMembersRequestTenantContext } from "./QueryConferenceMembersRequestTenantContext";


export class QueryConferenceMembersRequest extends $dara.Model {
  /**
   * @example
   * 300
   */
  maxResults?: number;
  /**
   * @example
   * 123000000
   */
  nextToken?: string;
  tenantContext?: QueryConferenceMembersRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tenantContext: 'TenantContext',
      conferenceId: 'conferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      tenantContext: QueryConferenceMembersRequestTenantContext,
      conferenceId: 'string',
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

