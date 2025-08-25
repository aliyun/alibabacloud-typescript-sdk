// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeMcubePublicTaskStatusRequest extends $dara.Model {
  appId?: string;
  taskId?: string;
  taskStatus?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      taskId: 'string',
      taskStatus: 'string',
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

