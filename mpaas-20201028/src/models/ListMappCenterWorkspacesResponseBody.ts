// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMappCenterWorkspacesResponseBodyListMappCenterWorkspaceResultMappCenterWorkspaceList extends $dara.Model {
  compatibleId?: string;
  createTime?: string;
  displayName?: string;
  id?: string;
  region?: string;
  status?: string;
  tenantId?: string;
  type?: string;
  uid?: number;
  updateTime?: string;
  workspaceId?: string;
  zones?: string;
  static names(): { [key: string]: string } {
    return {
      compatibleId: 'CompatibleId',
      createTime: 'CreateTime',
      displayName: 'DisplayName',
      id: 'Id',
      region: 'Region',
      status: 'Status',
      tenantId: 'TenantId',
      type: 'Type',
      uid: 'Uid',
      updateTime: 'UpdateTime',
      workspaceId: 'WorkspaceId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibleId: 'string',
      createTime: 'string',
      displayName: 'string',
      id: 'string',
      region: 'string',
      status: 'string',
      tenantId: 'string',
      type: 'string',
      uid: 'number',
      updateTime: 'string',
      workspaceId: 'string',
      zones: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterWorkspacesResponseBodyListMappCenterWorkspaceResult extends $dara.Model {
  mappCenterWorkspaceList?: ListMappCenterWorkspacesResponseBodyListMappCenterWorkspaceResultMappCenterWorkspaceList[];
  resultMsg?: string;
  success?: boolean;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      mappCenterWorkspaceList: 'MappCenterWorkspaceList',
      resultMsg: 'ResultMsg',
      success: 'Success',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappCenterWorkspaceList: { 'type': 'array', 'itemType': ListMappCenterWorkspacesResponseBodyListMappCenterWorkspaceResultMappCenterWorkspaceList },
      resultMsg: 'string',
      success: 'boolean',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mappCenterWorkspaceList)) {
      $dara.Model.validateArray(this.mappCenterWorkspaceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterWorkspacesResponseBody extends $dara.Model {
  listMappCenterWorkspaceResult?: ListMappCenterWorkspacesResponseBodyListMappCenterWorkspaceResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMappCenterWorkspaceResult: 'ListMappCenterWorkspaceResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMappCenterWorkspaceResult: ListMappCenterWorkspacesResponseBodyListMappCenterWorkspaceResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.listMappCenterWorkspaceResult && typeof (this.listMappCenterWorkspaceResult as any).validate === 'function') {
      (this.listMappCenterWorkspaceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

