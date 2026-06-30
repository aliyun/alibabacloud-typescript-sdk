// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDentriesRequestTenantContext extends $dara.Model {
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

export class ListDentriesRequest extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  order?: string;
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parentId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spaceId?: string;
  tenantContext?: ListDentriesRequestTenantContext;
  withThumbnail?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      orderBy: 'OrderBy',
      parentId: 'ParentId',
      spaceId: 'SpaceId',
      tenantContext: 'TenantContext',
      withThumbnail: 'WithThumbnail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      orderBy: 'string',
      parentId: 'string',
      spaceId: 'string',
      tenantContext: ListDentriesRequestTenantContext,
      withThumbnail: 'boolean',
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

