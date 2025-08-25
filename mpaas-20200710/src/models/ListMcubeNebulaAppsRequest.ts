// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeNebulaAppsRequest extends $dara.Model {
  appId?: string;
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      keyword: 'string',
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

