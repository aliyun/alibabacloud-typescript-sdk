// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDentriesShrinkRequest extends $dara.Model {
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * next_token
   */
  nextToken?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  /**
   * @example
   * MODIFIED_TIME
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  parentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 854xxxxx
   */
  spaceId?: string;
  tenantContextShrink?: string;
  /**
   * @example
   * true
   */
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

