// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesShrinkRequest extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  teamId?: string;
  tenantContextShrink?: string;
  withPermissionRole?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      teamId: 'TeamId',
      tenantContextShrink: 'TenantContext',
      withPermissionRole: 'WithPermissionRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      teamId: 'string',
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

