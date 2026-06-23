// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeMdsCubeTaskStatusRequest extends $dara.Model {
  appId?: string;
  taskStatus?: number;
  templateResourceId?: number;
  templateTaskId?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      taskStatus: 'TaskStatus',
      templateResourceId: 'TemplateResourceId',
      templateTaskId: 'TemplateTaskId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      taskStatus: 'number',
      templateResourceId: 'number',
      templateTaskId: 'number',
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

