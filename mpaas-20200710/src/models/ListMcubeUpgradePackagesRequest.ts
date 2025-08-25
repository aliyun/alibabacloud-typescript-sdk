// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeUpgradePackagesRequest extends $dara.Model {
  appId?: string;
  pageNum?: number;
  pageSize?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNum: 'number',
      pageSize: 'number',
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

