// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTemplateRequestTenantContext } from "./ListTemplateRequestTenantContext";


export class ListTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * zzz
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * public_template
   */
  templateType?: string;
  tenantContext?: ListTemplateRequestTenantContext;
  /**
   * @example
   * workspaceId
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      templateType: 'TemplateType',
      tenantContext: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      templateType: 'string',
      tenantContext: ListTemplateRequestTenantContext,
      workspaceId: 'string',
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

