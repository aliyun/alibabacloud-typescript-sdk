// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMdsCubeTemplateRequest extends $dara.Model {
  appId?: string;
  templateDesc?: string;
  templateId?: string;
  templateName?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      templateDesc: 'TemplateDesc',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      templateDesc: 'string',
      templateId: 'string',
      templateName: 'string',
      tenantId: 'string',
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

