// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeWhitelistsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  pageNum?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantId?: string;
  whitelistName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      whitelistName: 'WhitelistName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tenantId: 'string',
      whitelistName: 'string',
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

