// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceDocShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
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
      tenantContextShrink: 'TenantContext',
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
      tenantContextShrink: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

