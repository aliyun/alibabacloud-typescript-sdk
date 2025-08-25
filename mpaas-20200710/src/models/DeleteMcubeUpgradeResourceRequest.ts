// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMcubeUpgradeResourceRequest extends $dara.Model {
  appId?: string;
  id?: string;
  platform?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      platform: 'Platform',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'string',
      platform: 'string',
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

