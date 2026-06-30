// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDentriesShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
  withThumbnail?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      orderBy: 'OrderBy',
      parentId: 'ParentId',
      spaceId: 'SpaceId',
      tenantContextShrink: 'TenantContext',
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
      tenantContextShrink: 'string',
      withThumbnail: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

