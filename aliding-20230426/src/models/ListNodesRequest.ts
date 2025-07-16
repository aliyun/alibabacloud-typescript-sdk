// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesRequestTenantContext extends $dara.Model {
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

export class ListNodesRequest extends $dara.Model {
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
  tenantContext?: ListNodesRequestTenantContext;
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
      tenantContext: 'TenantContext',
      withPermissionRole: 'WithPermissionRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parentNodeId: 'string',
      tenantContext: ListNodesRequestTenantContext,
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

