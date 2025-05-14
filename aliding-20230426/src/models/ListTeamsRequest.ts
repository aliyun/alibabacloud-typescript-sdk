// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTeamsRequestTenantContext } from "./ListTeamsRequestTenantContext";


export class ListTeamsRequest extends $dara.Model {
  /**
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @example
   * 2023-05-15T11:29Z
   */
  nextToken?: string;
  tenantContext?: ListTeamsRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      tenantContext: ListTeamsRequestTenantContext,
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

