// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesShrinkRequest extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parentNodeId?: string;
  tenantContextShrink?: string;
  withPermissionRole?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parentNodeId: 'ParentNodeId',
      tenantContextShrink: 'TenantContext',
      withPermissionRole: 'WithPermissionRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parentNodeId: 'string',
      tenantContextShrink: 'string',
      withPermissionRole: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

