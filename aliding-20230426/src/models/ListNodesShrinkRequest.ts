// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesShrinkRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MNDoBb60VLBPraakI1Ywxyyn8lemrZQ3
   */
  parentNodeId?: string;
  tenantContextShrink?: string;
  /**
   * @example
   * false
   */
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

