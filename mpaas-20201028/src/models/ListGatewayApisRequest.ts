// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayApisRequest extends $dara.Model {
  apiStatus?: string;
  apiType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  groupId?: number;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  sysName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
      groupId: 'GroupId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sysName: 'SysName',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiStatus: 'string',
      apiType: 'string',
      appId: 'string',
      groupId: 'number',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sysName: 'string',
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

