// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesRequestTenantContext extends $dara.Model {
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

export class ListWorkspacesRequest extends $dara.Model {
  /**
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @example
   * 123123
   */
  nextToken?: string;
  /**
   * @example
   * VIEW_TIME_DESC
   */
  orderBy?: string;
  /**
   * @example
   * qweqwe
   */
  teamId?: string;
  tenantContext?: ListWorkspacesRequestTenantContext;
  /**
   * @example
   * true
   */
  withPermissionRole?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      teamId: 'TeamId',
      tenantContext: 'TenantContext',
      withPermissionRole: 'WithPermissionRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      teamId: 'string',
      tenantContext: ListWorkspacesRequestTenantContext,
      withPermissionRole: 'boolean',
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

