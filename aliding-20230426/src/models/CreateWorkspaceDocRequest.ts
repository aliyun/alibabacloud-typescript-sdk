// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceDocRequestTenantContext extends $dara.Model {
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

export class CreateWorkspaceDocRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DOC
   */
  docType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试文档
   */
  name?: string;
  /**
   * @example
   * YRBGv0Ye
   */
  parentNodeId?: string;
  /**
   * @example
   * 123243
   */
  templateId?: string;
  /**
   * @example
   * team_template
   */
  templateType?: string;
  tenantContext?: CreateWorkspaceDocRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docType: 'DocType',
      name: 'Name',
      parentNodeId: 'ParentNodeId',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      tenantContext: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docType: 'string',
      name: 'string',
      parentNodeId: 'string',
      templateId: 'string',
      templateType: 'string',
      tenantContext: CreateWorkspaceDocRequestTenantContext,
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

