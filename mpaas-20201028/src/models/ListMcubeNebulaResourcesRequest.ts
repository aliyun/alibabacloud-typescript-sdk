// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeNebulaResourcesRequest extends $dara.Model {
  appId?: string;
  h5Id?: string;
  pageNum?: number;
  pageSize?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      h5Id: 'H5Id',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      h5Id: 'string',
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

