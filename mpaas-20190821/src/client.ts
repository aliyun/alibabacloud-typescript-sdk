// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class UpdateMpaasAppInfoRequest extends $tea.Model {
  appId?: string;
  appName?: string;
  iconFileUrl?: string;
  identifier?: string;
  onexFlag?: boolean;
  systemType?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      iconFileUrl: 'IconFileUrl',
      identifier: 'Identifier',
      onexFlag: 'OnexFlag',
      systemType: 'SystemType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      iconFileUrl: 'string',
      identifier: 'string',
      onexFlag: 'boolean',
      systemType: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMpaasAppInfoResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  resultContent: UpdateMpaasAppInfoResponseResultContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      resultContent: UpdateMpaasAppInfoResponseResultContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMsaDiffRequest extends $tea.Model {
  appId: string;
  mpaasMappcenterMsaDiffRunJsonStr: string;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMsaDiffRunJsonStr: 'MpaasMappcenterMsaDiffRunJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMsaDiffRunJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMsaDiffResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  resultContent: RunMsaDiffResponseResultContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      resultContent: RunMsaDiffResponseResultContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMsaEnhanceRequest extends $tea.Model {
  appId: string;
  mpaasMappcenterMsaEnhanceCreateJsonStr: string;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMsaEnhanceCreateJsonStr: 'MpaasMappcenterMsaEnhanceCreateJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMsaEnhanceCreateJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMsaEnhanceResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  resultContent: CreateMsaEnhanceResponseResultContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      resultContent: CreateMsaEnhanceResponseResultContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMPaaSMasTinyAppDailyDataRequest extends $tea.Model {
  appId: string;
  date: string;
  tenantId: string;
  tinyAppId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      date: 'Date',
      tenantId: 'TenantId',
      tinyAppId: 'TinyAppId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      date: 'string',
      tenantId: 'string',
      tinyAppId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMPaaSMasTinyAppDailyDataResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  resultContent: QueryMPaaSMasTinyAppDailyDataResponseResultContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      resultContent: QueryMPaaSMasTinyAppDailyDataResponseResultContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMPaaSMasTinyAppHistoryDataRequest extends $tea.Model {
  appId: string;
  date: string;
  tenantId: string;
  tinyAppId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      date: 'Date',
      tenantId: 'TenantId',
      tinyAppId: 'TinyAppId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      date: 'string',
      tenantId: 'string',
      tinyAppId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMPaaSMasTinyAppHistoryDataResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  resultContent: QueryMPaaSMasTinyAppHistoryDataResponseResultContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      resultContent: QueryMPaaSMasTinyAppHistoryDataResponseResultContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMPaaSMasTinyAppDailyPageViewRequest extends $tea.Model {
  appId: string;
  date: string;
  keyword?: string;
  order: string;
  orderCol: string;
  pageLen: string;
  pageNum: string;
  tenantId: string;
  tinyAppId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      date: 'Date',
      keyword: 'Keyword',
      order: 'Order',
      orderCol: 'OrderCol',
      pageLen: 'PageLen',
      pageNum: 'PageNum',
      tenantId: 'TenantId',
      tinyAppId: 'TinyAppId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      date: 'string',
      keyword: 'string',
      order: 'string',
      orderCol: 'string',
      pageLen: 'string',
      pageNum: 'string',
      tenantId: 'string',
      tinyAppId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMPaaSMasTinyAppDailyPageViewResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  resultContent: QueryMPaaSMasTinyAppDailyPageViewResponseResultContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      resultContent: QueryMPaaSMasTinyAppDailyPageViewResponseResultContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPaaSMasTinyAppRequest extends $tea.Model {
  appId: string;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPaaSMasTinyAppResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  resultContent: ListMPaaSMasTinyAppResponseResultContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      resultContent: ListMPaaSMasTinyAppResponseResultContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  listMappCenterAppResult: ListMappCenterAppsResponseListMappCenterAppResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      listMappCenterAppResult: 'ListMappCenterAppResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      listMappCenterAppResult: ListMappCenterAppsResponseListMappCenterAppResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterWorkspacesRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterWorkspacesResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  listMappCenterWorkspaceResult: ListMappCenterWorkspacesResponseListMappCenterWorkspaceResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      listMappCenterWorkspaceResult: 'ListMappCenterWorkspaceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      listMappCenterWorkspaceResult: ListMappCenterWorkspacesResponseListMappCenterWorkspaceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMappCenterAppRequest extends $tea.Model {
  appId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMappCenterAppResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  queryMappCenterAppResult: QueryMappCenterAppResponseQueryMappCenterAppResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      queryMappCenterAppResult: 'QueryMappCenterAppResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      queryMappCenterAppResult: QueryMappCenterAppResponseQueryMappCenterAppResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMappCenterAppConfigRequest extends $tea.Model {
  appId?: string;
  certRsaBase64?: string;
  identifier: string;
  onexFlag: boolean;
  systemType: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      certRsaBase64: 'CertRsaBase64',
      identifier: 'Identifier',
      onexFlag: 'OnexFlag',
      systemType: 'SystemType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      certRsaBase64: 'string',
      identifier: 'string',
      onexFlag: 'boolean',
      systemType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMappCenterAppConfigResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  exportMappCenterAppConfigResult: ExportMappCenterAppConfigResponseExportMappCenterAppConfigResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      exportMappCenterAppConfigResult: 'ExportMappCenterAppConfigResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      exportMappCenterAppConfigResult: ExportMappCenterAppConfigResponseExportMappCenterAppConfigResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMpaasMrtcArtvcRecordfileRequest extends $tea.Model {
  appId?: string;
  bizAppCode?: string;
  bizName?: string;
  bizRequestId?: string;
  mediaType?: string;
  recordId?: string;
  roomId?: string;
  s?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bizAppCode: 'BizAppCode',
      bizName: 'BizName',
      bizRequestId: 'BizRequestId',
      mediaType: 'MediaType',
      recordId: 'RecordId',
      roomId: 'RoomId',
      s: 'S',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bizAppCode: 'string',
      bizName: 'string',
      bizRequestId: 'string',
      mediaType: 'string',
      recordId: 'string',
      roomId: 'string',
      s: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMpaasMrtcArtvcRecordfileResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  mrtcApiRecordFileQueryWrapResp: DeleteMpaasMrtcArtvcRecordfileResponseMrtcApiRecordFileQueryWrapResp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      mrtcApiRecordFileQueryWrapResp: 'MrtcApiRecordFileQueryWrapResp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      mrtcApiRecordFileQueryWrapResp: DeleteMpaasMrtcArtvcRecordfileResponseMrtcApiRecordFileQueryWrapResp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMpaasMrtcArtvcRecordfileRequest extends $tea.Model {
  appId?: string;
  bizAppCode?: string;
  bizName?: string;
  bizRequestId?: string;
  mediaType?: string;
  recordId?: string;
  roomId?: string;
  s?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bizAppCode: 'BizAppCode',
      bizName: 'BizName',
      bizRequestId: 'BizRequestId',
      mediaType: 'MediaType',
      recordId: 'RecordId',
      roomId: 'RoomId',
      s: 'S',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bizAppCode: 'string',
      bizName: 'string',
      bizRequestId: 'string',
      mediaType: 'string',
      recordId: 'string',
      roomId: 'string',
      s: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMpaasMrtcArtvcRecordfileResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  mrtcApiRecordFileQueryWrapResp: QueryMpaasMrtcArtvcRecordfileResponseMrtcApiRecordFileQueryWrapResp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      mrtcApiRecordFileQueryWrapResp: 'MrtcApiRecordFileQueryWrapResp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      mrtcApiRecordFileQueryWrapResp: QueryMpaasMrtcArtvcRecordfileResponseMrtcApiRecordFileQueryWrapResp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniTasksRequest extends $tea.Model {
  appId: string;
  id: string;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniTasksResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  listMiniTaskResult: ListMcubeMiniTasksResponseListMiniTaskResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      listMiniTaskResult: 'ListMiniTaskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      listMiniTaskResult: ListMcubeMiniTasksResponseListMiniTaskResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniPackagesRequest extends $tea.Model {
  appId: string;
  h5Id: string;
  packageTypes: string;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      h5Id: 'H5Id',
      packageTypes: 'PackageTypes',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      h5Id: 'string',
      packageTypes: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniPackagesResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  listMiniPackageResult: ListMcubeMiniPackagesResponseListMiniPackageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      listMiniPackageResult: 'ListMiniPackageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      listMiniPackageResult: ListMcubeMiniPackagesResponseListMiniPackageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeFileTokenRequest extends $tea.Model {
  appId: string;
  onexFlag: boolean;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      onexFlag: 'OnexFlag',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      onexFlag: 'boolean',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeFileTokenResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  getFileTokenResult: GetMcubeFileTokenResponseGetFileTokenResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      getFileTokenResult: 'GetFileTokenResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      getFileTokenResult: GetMcubeFileTokenResponseGetFileTokenResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMcubeWhitelistRequest extends $tea.Model {
  appId: string;
  id: string;
  keyIds?: string;
  onexFlag: boolean;
  ossUrl?: string;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      keyIds: 'KeyIds',
      onexFlag: 'OnexFlag',
      ossUrl: 'OssUrl',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'string',
      keyIds: 'string',
      onexFlag: 'boolean',
      ossUrl: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMcubeWhitelistResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  addWhitelistResult: UpdateMcubeWhitelistResponseAddWhitelistResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      addWhitelistResult: 'AddWhitelistResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      addWhitelistResult: UpdateMcubeWhitelistResponseAddWhitelistResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeWhitelistRequest extends $tea.Model {
  appId: string;
  id: number;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeWhitelistResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  deleteWhitelistResult: DeleteMcubeWhitelistResponseDeleteWhitelistResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      deleteWhitelistResult: 'DeleteWhitelistResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      deleteWhitelistResult: DeleteMcubeWhitelistResponseDeleteWhitelistResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeMiniTaskRequest extends $tea.Model {
  appId: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  greyNum?: number;
  memo: string;
  packageId: number;
  publishMode: number;
  publishType: number;
  tenantId: string;
  whitelistIds?: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      memo: 'Memo',
      packageId: 'PackageId',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      tenantId: 'TenantId',
      whitelistIds: 'WhitelistIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      greyConfigInfo: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      memo: 'string',
      packageId: 'number',
      publishMode: 'number',
      publishType: 'number',
      tenantId: 'string',
      whitelistIds: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeMiniTaskResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  createMiniTaskResult: CreateMcubeMiniTaskResponseCreateMiniTaskResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      createMiniTaskResult: 'CreateMiniTaskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      createMiniTaskResult: CreateMcubeMiniTaskResponseCreateMiniTaskResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExistMcubeRsaKeyRequest extends $tea.Model {
  appId: string;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExistMcubeRsaKeyResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  checkRsaKeyResult: ExistMcubeRsaKeyResponseCheckRsaKeyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      checkRsaKeyResult: 'CheckRsaKeyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      checkRsaKeyResult: ExistMcubeRsaKeyResponseCheckRsaKeyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeMiniPackageRequest extends $tea.Model {
  appId: string;
  autoInstall: number;
  clientVersionMax?: string;
  clientVersionMin: string;
  enableKeepAlive: string;
  enableOptionMenu: string;
  enableTabBar: number;
  extendInfo?: string;
  h5Id: string;
  h5Name: string;
  h5Version: string;
  iconFileUrl: string;
  installType: number;
  mainUrl: string;
  onexFlag: boolean;
  packageType: number;
  platform: string;
  resourceFileUrl: string;
  resourceType: number;
  tenantId: string;
  userId: string;
  uuid?: string;
  vhost: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoInstall: 'AutoInstall',
      clientVersionMax: 'ClientVersionMax',
      clientVersionMin: 'ClientVersionMin',
      enableKeepAlive: 'EnableKeepAlive',
      enableOptionMenu: 'EnableOptionMenu',
      enableTabBar: 'EnableTabBar',
      extendInfo: 'ExtendInfo',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      h5Version: 'H5Version',
      iconFileUrl: 'IconFileUrl',
      installType: 'InstallType',
      mainUrl: 'MainUrl',
      onexFlag: 'OnexFlag',
      packageType: 'PackageType',
      platform: 'Platform',
      resourceFileUrl: 'ResourceFileUrl',
      resourceType: 'ResourceType',
      tenantId: 'TenantId',
      userId: 'UserId',
      uuid: 'Uuid',
      vhost: 'Vhost',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoInstall: 'number',
      clientVersionMax: 'string',
      clientVersionMin: 'string',
      enableKeepAlive: 'string',
      enableOptionMenu: 'string',
      enableTabBar: 'number',
      extendInfo: 'string',
      h5Id: 'string',
      h5Name: 'string',
      h5Version: 'string',
      iconFileUrl: 'string',
      installType: 'number',
      mainUrl: 'string',
      onexFlag: 'boolean',
      packageType: 'number',
      platform: 'string',
      resourceFileUrl: 'string',
      resourceType: 'number',
      tenantId: 'string',
      userId: 'string',
      uuid: 'string',
      vhost: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeMiniPackageResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  uploadMiniPackageResult: UploadMcubeMiniPackageResponseUploadMiniPackageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      uploadMiniPackageResult: 'UploadMiniPackageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      uploadMiniPackageResult: UploadMcubeMiniPackageResponseUploadMiniPackageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniTaskRequest extends $tea.Model {
  appId: string;
  taskId: number;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      taskId: 'TaskId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      taskId: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniTaskResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  queryMiniTaskResult: QueryMcubeMiniTaskResponseQueryMiniTaskResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      queryMiniTaskResult: 'QueryMiniTaskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      queryMiniTaskResult: QueryMcubeMiniTaskResponseQueryMiniTaskResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniPackageRequest extends $tea.Model {
  appId: string;
  h5Id: string;
  id: string;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      h5Id: 'H5Id',
      id: 'Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      h5Id: 'string',
      id: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniPackageResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  queryMiniPackageResult: QueryMcubeMiniPackageResponseQueryMiniPackageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      queryMiniPackageResult: 'QueryMiniPackageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      queryMiniPackageResult: QueryMcubeMiniPackageResponseQueryMiniPackageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeRsaKeyRequest extends $tea.Model {
  appId: string;
  fileUrl: string;
  onexFlag: boolean;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      fileUrl: 'FileUrl',
      onexFlag: 'OnexFlag',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fileUrl: 'string',
      onexFlag: 'boolean',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeRsaKeyResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  uploadRsaResult: UploadMcubeRsaKeyResponseUploadRsaResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      uploadRsaResult: 'UploadRsaResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      uploadRsaResult: UploadMcubeRsaKeyResponseUploadRsaResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeMiniAppRequest extends $tea.Model {
  appId: string;
  h5Id: string;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      h5Id: 'H5Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      h5Id: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeMiniAppResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  deleteMiniResult: DeleteMcubeMiniAppResponseDeleteMiniResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      deleteMiniResult: 'DeleteMiniResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      deleteMiniResult: DeleteMcubeMiniAppResponseDeleteMiniResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistRequest extends $tea.Model {
  appId: string;
  tenantId: string;
  whitelistType: string;
  whiteListName: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      whitelistType: 'WhitelistType',
      whiteListName: 'WhiteListName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      whitelistType: 'string',
      whiteListName: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  createWhitelistResult: CreateMcubeWhitelistResponseCreateWhitelistResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      createWhitelistResult: 'CreateWhitelistResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      createWhitelistResult: CreateMcubeWhitelistResponseCreateWhitelistResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistForIdeRequest extends $tea.Model {
  appId: string;
  tenantId: string;
  userId: string;
  whitelistValue: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      userId: 'UserId',
      whitelistValue: 'WhitelistValue',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      userId: 'string',
      whitelistValue: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistForIdeResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  createWhitelistForIdeResult: CreateMcubeWhitelistForIdeResponseCreateWhitelistForIdeResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      createWhitelistForIdeResult: 'CreateWhitelistForIdeResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      createWhitelistForIdeResult: CreateMcubeWhitelistForIdeResponseCreateWhitelistForIdeResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubeMiniTaskStatusRequest extends $tea.Model {
  appId: string;
  bizType: string;
  packageId: number;
  taskId: number;
  taskStatus: number;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bizType: 'BizType',
      packageId: 'PackageId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bizType: 'string',
      packageId: 'number',
      taskId: 'number',
      taskStatus: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubeMiniTaskStatusResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  changeMiniTaskStatusResult: ChangeMcubeMiniTaskStatusResponseChangeMiniTaskStatusResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      changeMiniTaskStatusResult: 'ChangeMiniTaskStatusResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      changeMiniTaskStatusResult: ChangeMcubeMiniTaskStatusResponseChangeMiniTaskStatusResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeVhostRequest extends $tea.Model {
  appId: string;
  tenantId: string;
  vhost: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      vhost: 'Vhost',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      vhost: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeVhostResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  createVhostResult: CreateMcubeVhostResponseCreateVhostResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      createVhostResult: 'CreateVhostResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      createVhostResult: CreateMcubeVhostResponseCreateVhostResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeMiniAppRequest extends $tea.Model {
  appId: string;
  h5Id: string;
  h5Name: string;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      h5Id: 'string',
      h5Name: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeMiniAppResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  createMiniResult: CreateMcubeMiniAppResponseCreateMiniResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      createMiniResult: 'CreateMiniResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      createMiniResult: CreateMcubeMiniAppResponseCreateMiniResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeVhostRequest extends $tea.Model {
  appId: string;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeVhostResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  queryVhostResult: QueryMcubeVhostResponseQueryVhostResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      queryVhostResult: 'QueryVhostResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      queryVhostResult: QueryMcubeVhostResponseQueryVhostResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniAppsRequest extends $tea.Model {
  appId: string;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniAppsResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  listMiniResult: ListMcubeMiniAppsResponseListMiniResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      listMiniResult: 'ListMiniResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      listMiniResult: ListMcubeMiniAppsResponseListMiniResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeWhitelistsRequest extends $tea.Model {
  appId: string;
  tenantId: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeWhitelistsResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  listWhitelistResult: ListMcubeWhitelistsResponseListWhitelistResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      listWhitelistResult: 'ListWhitelistResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      listWhitelistResult: ListMcubeWhitelistsResponseListWhitelistResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpenSingleDataRequest extends $tea.Model {
  appId: string;
  appMaxVersion?: string;
  appMinVersion?: string;
  bizType: string;
  checkOnline?: boolean;
  extAttrStr?: string;
  linkToken: string;
  osType?: string;
  payload: string;
  thirdMsgId: string;
  validTimeEnd?: number;
  validTimeStart?: number;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appMaxVersion: 'AppMaxVersion',
      appMinVersion: 'AppMinVersion',
      bizType: 'BizType',
      checkOnline: 'CheckOnline',
      extAttrStr: 'ExtAttrStr',
      linkToken: 'LinkToken',
      osType: 'OsType',
      payload: 'Payload',
      thirdMsgId: 'ThirdMsgId',
      validTimeEnd: 'ValidTimeEnd',
      validTimeStart: 'ValidTimeStart',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appMaxVersion: 'string',
      appMinVersion: 'string',
      bizType: 'string',
      checkOnline: 'boolean',
      extAttrStr: 'string',
      linkToken: 'string',
      osType: 'string',
      payload: 'string',
      thirdMsgId: 'string',
      validTimeEnd: 'number',
      validTimeStart: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpenSingleDataResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpenGlobalDataRequest extends $tea.Model {
  appId: string;
  appMaxVersion?: string;
  appMinVersion?: string;
  bizType: string;
  extAttrStr?: string;
  maxUid?: number;
  minUid?: number;
  osType?: string;
  payload: string;
  thirdMsgId: string;
  uids?: string;
  validTimeEnd?: number;
  validTimeStart?: number;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appMaxVersion: 'AppMaxVersion',
      appMinVersion: 'AppMinVersion',
      bizType: 'BizType',
      extAttrStr: 'ExtAttrStr',
      maxUid: 'MaxUid',
      minUid: 'MinUid',
      osType: 'OsType',
      payload: 'Payload',
      thirdMsgId: 'ThirdMsgId',
      uids: 'Uids',
      validTimeEnd: 'ValidTimeEnd',
      validTimeStart: 'ValidTimeStart',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appMaxVersion: 'string',
      appMinVersion: 'string',
      bizType: 'string',
      extAttrStr: 'string',
      maxUid: 'number',
      minUid: 'number',
      osType: 'string',
      payload: 'string',
      thirdMsgId: 'string',
      uids: 'string',
      validTimeEnd: 'number',
      validTimeStart: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpenGlobalDataResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushSimpleRequest extends $tea.Model {
  appId: string;
  content: string;
  deliveryType: number;
  expiredSeconds: number;
  extendedParams?: string;
  notifyType?: string;
  pushAction?: number;
  silent?: number;
  targetMsgkey: string;
  taskName?: string;
  title: string;
  uri?: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      deliveryType: 'DeliveryType',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      silent: 'Silent',
      targetMsgkey: 'TargetMsgkey',
      taskName: 'TaskName',
      title: 'Title',
      uri: 'Uri',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: 'string',
      deliveryType: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      notifyType: 'string',
      pushAction: 'number',
      silent: 'number',
      targetMsgkey: 'string',
      taskName: 'string',
      title: 'string',
      uri: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushSimpleResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushBroadcastRequest extends $tea.Model {
  appId: string;
  deliveryType: number;
  expiredSeconds: number;
  extendedParams?: string;
  msgkey: string;
  notifyType?: string;
  pushAction?: number;
  pushStatus?: number;
  silent?: number;
  taskName?: string;
  templateKeyValue?: string;
  templateName: string;
  unBindPeriod?: number;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deliveryType: 'DeliveryType',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      msgkey: 'Msgkey',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      pushStatus: 'PushStatus',
      silent: 'Silent',
      taskName: 'TaskName',
      templateKeyValue: 'TemplateKeyValue',
      templateName: 'TemplateName',
      unBindPeriod: 'UnBindPeriod',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deliveryType: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      msgkey: 'string',
      notifyType: 'string',
      pushAction: 'number',
      pushStatus: 'number',
      silent: 'number',
      taskName: 'string',
      templateKeyValue: 'string',
      templateName: 'string',
      unBindPeriod: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushBroadcastResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTemplateRequest extends $tea.Model {
  appId: string;
  deliveryType: number;
  expiredSeconds: number;
  extendedParams?: string;
  notifyType?: string;
  pushAction?: number;
  silent?: number;
  targetMsgkey: string;
  taskName?: string;
  templateKeyValue?: string;
  templateName: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deliveryType: 'DeliveryType',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      silent: 'Silent',
      targetMsgkey: 'TargetMsgkey',
      taskName: 'TaskName',
      templateKeyValue: 'TemplateKeyValue',
      templateName: 'TemplateName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deliveryType: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      notifyType: 'string',
      pushAction: 'number',
      silent: 'number',
      targetMsgkey: 'string',
      taskName: 'string',
      templateKeyValue: 'string',
      templateName: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTemplateResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMultipleRequest extends $tea.Model {
  appId: string;
  deliveryType: number;
  expiredSeconds: number;
  extendedParams?: string;
  notifyType?: string;
  pushAction?: number;
  silent?: number;
  targetMsg: PushMultipleRequestTargetMsg[];
  taskName?: string;
  templateName: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deliveryType: 'DeliveryType',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      silent: 'Silent',
      targetMsg: 'TargetMsg',
      taskName: 'TaskName',
      templateName: 'TemplateName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deliveryType: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      notifyType: 'string',
      pushAction: 'number',
      silent: 'number',
      targetMsg: { 'type': 'array', 'itemType': PushMultipleRequestTargetMsg },
      taskName: 'string',
      templateName: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMultipleResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcdpAimRequest extends $tea.Model {
  appId?: string;
  emptyTag?: string;
  keyword?: string;
  name?: string;
  pageNo?: number;
  pageSize?: number;
  sort?: string;
  sortField?: string;
  tenantId?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      emptyTag: 'EmptyTag',
      keyword: 'Keyword',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sort: 'Sort',
      sortField: 'SortField',
      tenantId: 'TenantId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      emptyTag: 'string',
      keyword: 'string',
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sort: 'string',
      sortField: 'string',
      tenantId: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcdpAimResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  resultContent: ListMcdpAimResponseResultContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      resultContent: ListMcdpAimResponseResultContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMgsApirestRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMgsApirestSaveJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMgsApirestSaveJsonStr: 'MpaasMappcenterMgsApirestSaveJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMgsApirestSaveJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMgsApirestResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  resultContent: SaveMgsApirestResponseResultContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      resultContent: SaveMgsApirestResponseResultContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsTestreqbodyautogenRequest extends $tea.Model {
  appId?: string;
  format?: string;
  mpaasMappcenterMgsTestreqbodyautogenQueryJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      format: 'Format',
      mpaasMappcenterMgsTestreqbodyautogenQueryJsonStr: 'MpaasMappcenterMgsTestreqbodyautogenQueryJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      format: 'string',
      mpaasMappcenterMgsTestreqbodyautogenQueryJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsTestreqbodyautogenResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  resultContent: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      resultContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestRequest extends $tea.Model {
  appId?: string;
  format?: string;
  id?: number;
  tenantId?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      format: 'Format',
      id: 'Id',
      tenantId: 'TenantId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      format: 'string',
      id: 'number',
      tenantId: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  resultContent: QueryMgsApirestResponseResultContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      resultContent: QueryMgsApirestResponseResultContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiRequest extends $tea.Model {
  apiStatus?: string;
  apiType?: string;
  appId?: string;
  format?: string;
  host?: string;
  needEncrypt?: string;
  needEtag?: string;
  needSign?: string;
  operationType?: string;
  optFuzzy?: string;
  pageIndex?: number;
  pageSize?: number;
  sysId?: number;
  sysName?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
      format: 'Format',
      host: 'Host',
      needEncrypt: 'NeedEncrypt',
      needEtag: 'NeedEtag',
      needSign: 'NeedSign',
      operationType: 'OperationType',
      optFuzzy: 'OptFuzzy',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      sysId: 'SysId',
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
      format: 'string',
      host: 'string',
      needEncrypt: 'string',
      needEtag: 'string',
      needSign: 'string',
      operationType: 'string',
      optFuzzy: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      sysId: 'number',
      sysName: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  resultContent: ListMgsApiResponseResultContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      resultContent: ListMgsApiResponseResultContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageRequest extends $tea.Model {
  apiStatus?: string;
  apiType?: string;
  appId?: string;
  format?: string;
  host?: string;
  needEncrypt?: string;
  needEtag?: string;
  needSign?: string;
  operationType?: string;
  optFuzzy?: string;
  pageIndex?: number;
  pageSize?: number;
  sysId?: number;
  sysName?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
      format: 'Format',
      host: 'Host',
      needEncrypt: 'NeedEncrypt',
      needEtag: 'NeedEtag',
      needSign: 'NeedSign',
      operationType: 'OperationType',
      optFuzzy: 'OptFuzzy',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      sysId: 'SysId',
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
      format: 'string',
      host: 'string',
      needEncrypt: 'string',
      needEtag: 'string',
      needSign: 'string',
      operationType: 'string',
      optFuzzy: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      sysId: 'number',
      sysName: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponse extends $tea.Model {
  requestId: string;
  resultCode: string;
  resultMessage: string;
  resultContent: QueryMgsApipageResponseResultContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      resultContent: QueryMgsApipageResponseResultContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMpaasAppInfoResponseResultContentData extends $tea.Model {
  appId: string;
  code: string;
  data: string;
  message: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMpaasAppInfoResponseResultContent extends $tea.Model {
  requestId: string;
  data: UpdateMpaasAppInfoResponseResultContentData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: UpdateMpaasAppInfoResponseResultContentData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMsaDiffResponseResultContent extends $tea.Model {
  code: string;
  data: string;
  message: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMsaEnhanceResponseResultContent extends $tea.Model {
  code: string;
  data: string;
  message: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMPaaSMasTinyAppDailyDataResponseResultContent extends $tea.Model {
  code: number;
  data: string;
  msg: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMPaaSMasTinyAppHistoryDataResponseResultContent extends $tea.Model {
  code: number;
  data: string;
  msg: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMPaaSMasTinyAppDailyPageViewResponseResultContent extends $tea.Model {
  code: number;
  data: string;
  msg: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPaaSMasTinyAppResponseResultContent extends $tea.Model {
  code: number;
  data: string;
  msg: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponseListMappCenterAppResultMappCenterAppListAndroidConfig extends $tea.Model {
  certRSA: string;
  packageName: string;
  static names(): { [key: string]: string } {
    return {
      certRSA: 'CertRSA',
      packageName: 'PackageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certRSA: 'string',
      packageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponseListMappCenterAppResultMappCenterAppListIosConfig extends $tea.Model {
  bundleId: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponseListMappCenterAppResultMappCenterAppList extends $tea.Model {
  appDesc: string;
  appIcon: string;
  appId: string;
  appName: string;
  appSecret: string;
  creator: string;
  gmtCreate: string;
  gmtModified: string;
  id: number;
  modifier: string;
  monitorJson: string;
  status: number;
  tenantId: string;
  type: number;
  androidConfig: ListMappCenterAppsResponseListMappCenterAppResultMappCenterAppListAndroidConfig;
  iosConfig: ListMappCenterAppsResponseListMappCenterAppResultMappCenterAppListIosConfig;
  static names(): { [key: string]: string } {
    return {
      appDesc: 'AppDesc',
      appIcon: 'AppIcon',
      appId: 'AppId',
      appName: 'AppName',
      appSecret: 'AppSecret',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      modifier: 'Modifier',
      monitorJson: 'MonitorJson',
      status: 'Status',
      tenantId: 'TenantId',
      type: 'Type',
      androidConfig: 'AndroidConfig',
      iosConfig: 'IosConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDesc: 'string',
      appIcon: 'string',
      appId: 'string',
      appName: 'string',
      appSecret: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      modifier: 'string',
      monitorJson: 'string',
      status: 'number',
      tenantId: 'string',
      type: 'number',
      androidConfig: ListMappCenterAppsResponseListMappCenterAppResultMappCenterAppListAndroidConfig,
      iosConfig: ListMappCenterAppsResponseListMappCenterAppResultMappCenterAppListIosConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponseListMappCenterAppResult extends $tea.Model {
  resultMsg: string;
  success: boolean;
  mappCenterAppList: ListMappCenterAppsResponseListMappCenterAppResultMappCenterAppList[];
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      mappCenterAppList: 'MappCenterAppList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      mappCenterAppList: { 'type': 'array', 'itemType': ListMappCenterAppsResponseListMappCenterAppResultMappCenterAppList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterWorkspacesResponseListMappCenterWorkspaceResultMappCenterWorkspaceList extends $tea.Model {
  compatibleId: string;
  createTime: string;
  displayName: string;
  id: string;
  region: string;
  status: string;
  tenantId: string;
  type: string;
  uid: number;
  updateTime: string;
  workspaceId: string;
  zones: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterWorkspacesResponseListMappCenterWorkspaceResult extends $tea.Model {
  resultMsg: string;
  success: boolean;
  userId: string;
  mappCenterWorkspaceList: ListMappCenterWorkspacesResponseListMappCenterWorkspaceResultMappCenterWorkspaceList[];
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      userId: 'UserId',
      mappCenterWorkspaceList: 'MappCenterWorkspaceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      userId: 'string',
      mappCenterWorkspaceList: { 'type': 'array', 'itemType': ListMappCenterWorkspacesResponseListMappCenterWorkspaceResultMappCenterWorkspaceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMappCenterAppResponseQueryMappCenterAppResultMappCenterAppAndroidConfig extends $tea.Model {
  certRSA: string;
  packageName: string;
  static names(): { [key: string]: string } {
    return {
      certRSA: 'CertRSA',
      packageName: 'PackageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certRSA: 'string',
      packageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMappCenterAppResponseQueryMappCenterAppResultMappCenterAppIosConfig extends $tea.Model {
  bundleId: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMappCenterAppResponseQueryMappCenterAppResultMappCenterApp extends $tea.Model {
  appDesc: string;
  appIcon: string;
  appId: string;
  appName: string;
  appSecret: string;
  creator: string;
  gmtCreate: string;
  gmtModified: string;
  id: number;
  modifier: string;
  monitorJson: string;
  status: number;
  tenantId: string;
  type: number;
  androidConfig: QueryMappCenterAppResponseQueryMappCenterAppResultMappCenterAppAndroidConfig;
  iosConfig: QueryMappCenterAppResponseQueryMappCenterAppResultMappCenterAppIosConfig;
  static names(): { [key: string]: string } {
    return {
      appDesc: 'AppDesc',
      appIcon: 'AppIcon',
      appId: 'AppId',
      appName: 'AppName',
      appSecret: 'AppSecret',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      modifier: 'Modifier',
      monitorJson: 'MonitorJson',
      status: 'Status',
      tenantId: 'TenantId',
      type: 'Type',
      androidConfig: 'AndroidConfig',
      iosConfig: 'IosConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDesc: 'string',
      appIcon: 'string',
      appId: 'string',
      appName: 'string',
      appSecret: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      modifier: 'string',
      monitorJson: 'string',
      status: 'number',
      tenantId: 'string',
      type: 'number',
      androidConfig: QueryMappCenterAppResponseQueryMappCenterAppResultMappCenterAppAndroidConfig,
      iosConfig: QueryMappCenterAppResponseQueryMappCenterAppResultMappCenterAppIosConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMappCenterAppResponseQueryMappCenterAppResult extends $tea.Model {
  resultMsg: string;
  success: boolean;
  mappCenterApp: QueryMappCenterAppResponseQueryMappCenterAppResultMappCenterApp;
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      mappCenterApp: 'MappCenterApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      mappCenterApp: QueryMappCenterAppResponseQueryMappCenterAppResultMappCenterApp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMappCenterAppConfigResponseExportMappCenterAppConfigResult extends $tea.Model {
  configDownloadUrl: string;
  resultMsg: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      configDownloadUrl: 'ConfigDownloadUrl',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configDownloadUrl: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMpaasMrtcArtvcRecordfileResponseMrtcApiRecordFileQueryWrapRespData extends $tea.Model {
  bizRequestId: string;
  filePath: string;
  fileType: string;
  recordStartTime: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      bizRequestId: 'BizRequestId',
      filePath: 'FilePath',
      fileType: 'FileType',
      recordStartTime: 'RecordStartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRequestId: 'string',
      filePath: 'string',
      fileType: 'string',
      recordStartTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMpaasMrtcArtvcRecordfileResponseMrtcApiRecordFileQueryWrapResp extends $tea.Model {
  code: string;
  msg: string;
  data: DeleteMpaasMrtcArtvcRecordfileResponseMrtcApiRecordFileQueryWrapRespData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      msg: 'Msg',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
      data: DeleteMpaasMrtcArtvcRecordfileResponseMrtcApiRecordFileQueryWrapRespData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMpaasMrtcArtvcRecordfileResponseMrtcApiRecordFileQueryWrapRespData extends $tea.Model {
  bizRequestId: string;
  filePath: string;
  fileType: string;
  recordStartTime: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      bizRequestId: 'BizRequestId',
      filePath: 'FilePath',
      fileType: 'FileType',
      recordStartTime: 'RecordStartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRequestId: 'string',
      filePath: 'string',
      fileType: 'string',
      recordStartTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMpaasMrtcArtvcRecordfileResponseMrtcApiRecordFileQueryWrapResp extends $tea.Model {
  code: string;
  msg: string;
  data: QueryMpaasMrtcArtvcRecordfileResponseMrtcApiRecordFileQueryWrapRespData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      msg: 'Msg',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
      data: QueryMpaasMrtcArtvcRecordfileResponseMrtcApiRecordFileQueryWrapRespData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniTasksResponseListMiniTaskResultMiniTaskList extends $tea.Model {
  appCode: string;
  gmtCreate: string;
  gmtModified: string;
  greyConfigInfo: string;
  greyEndtime: string;
  greyEndtimeData: string;
  greyNum: number;
  id: number;
  memo: string;
  packageId: number;
  platform: string;
  productVersion: string;
  publishMode: number;
  publishType: number;
  status: string;
  taskStatus: number;
  whitelistIds: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtime: 'GreyEndtime',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      id: 'Id',
      memo: 'Memo',
      packageId: 'PackageId',
      platform: 'Platform',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      status: 'Status',
      taskStatus: 'TaskStatus',
      whitelistIds: 'WhitelistIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      greyConfigInfo: 'string',
      greyEndtime: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      id: 'number',
      memo: 'string',
      packageId: 'number',
      platform: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      status: 'string',
      taskStatus: 'number',
      whitelistIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniTasksResponseListMiniTaskResult extends $tea.Model {
  resultMsg: string;
  success: boolean;
  miniTaskList: ListMcubeMiniTasksResponseListMiniTaskResultMiniTaskList[];
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      miniTaskList: 'MiniTaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      miniTaskList: { 'type': 'array', 'itemType': ListMcubeMiniTasksResponseListMiniTaskResultMiniTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniPackagesResponseListMiniPackageResultMiniPackageList extends $tea.Model {
  appCode: string;
  autoInstall: number;
  clientVersionMax: string;
  clientVersionMin: string;
  downloadUrl: string;
  extendInfo: string;
  extraData: string;
  fallbackBaseUrl: string;
  gmtCreate: string;
  gmtModified: string;
  h5Id: string;
  h5Name: string;
  h5Version: string;
  id: number;
  installType: number;
  mainUrl: string;
  memo: string;
  packageType: number;
  platform: string;
  publishPeriod: number;
  resourceType: number;
  status: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      autoInstall: 'AutoInstall',
      clientVersionMax: 'ClientVersionMax',
      clientVersionMin: 'ClientVersionMin',
      downloadUrl: 'DownloadUrl',
      extendInfo: 'ExtendInfo',
      extraData: 'ExtraData',
      fallbackBaseUrl: 'FallbackBaseUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      h5Version: 'H5Version',
      id: 'Id',
      installType: 'InstallType',
      mainUrl: 'MainUrl',
      memo: 'Memo',
      packageType: 'PackageType',
      platform: 'Platform',
      publishPeriod: 'PublishPeriod',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      autoInstall: 'number',
      clientVersionMax: 'string',
      clientVersionMin: 'string',
      downloadUrl: 'string',
      extendInfo: 'string',
      extraData: 'string',
      fallbackBaseUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      h5Version: 'string',
      id: 'number',
      installType: 'number',
      mainUrl: 'string',
      memo: 'string',
      packageType: 'number',
      platform: 'string',
      publishPeriod: 'number',
      resourceType: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniPackagesResponseListMiniPackageResult extends $tea.Model {
  resultMsg: string;
  success: boolean;
  miniPackageList: ListMcubeMiniPackagesResponseListMiniPackageResultMiniPackageList[];
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      miniPackageList: 'MiniPackageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      miniPackageList: { 'type': 'array', 'itemType': ListMcubeMiniPackagesResponseListMiniPackageResultMiniPackageList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeFileTokenResponseGetFileTokenResultFileToken extends $tea.Model {
  accessid: string;
  dir: string;
  expire: string;
  host: string;
  policy: string;
  signature: string;
  static names(): { [key: string]: string } {
    return {
      accessid: 'Accessid',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeFileTokenResponseGetFileTokenResult extends $tea.Model {
  resultMsg: string;
  success: boolean;
  fileToken: GetMcubeFileTokenResponseGetFileTokenResultFileToken;
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      fileToken: 'FileToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      fileToken: GetMcubeFileTokenResponseGetFileTokenResultFileToken,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMcubeWhitelistResponseAddWhitelistResultAddWhitelistInfo extends $tea.Model {
  failNum: number;
  failUserIds: string;
  successNum: number;
  static names(): { [key: string]: string } {
    return {
      failNum: 'FailNum',
      failUserIds: 'FailUserIds',
      successNum: 'SuccessNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failNum: 'number',
      failUserIds: 'string',
      successNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMcubeWhitelistResponseAddWhitelistResult extends $tea.Model {
  resultMsg: string;
  success: boolean;
  addWhitelistInfo: UpdateMcubeWhitelistResponseAddWhitelistResultAddWhitelistInfo;
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      addWhitelistInfo: 'AddWhitelistInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      addWhitelistInfo: UpdateMcubeWhitelistResponseAddWhitelistResultAddWhitelistInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeWhitelistResponseDeleteWhitelistResult extends $tea.Model {
  data: string;
  resultMsg: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeMiniTaskResponseCreateMiniTaskResult extends $tea.Model {
  miniTaskId: string;
  resultMsg: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      miniTaskId: 'MiniTaskId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      miniTaskId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExistMcubeRsaKeyResponseCheckRsaKeyResult extends $tea.Model {
  data: string;
  resultMsg: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeMiniPackageResponseUploadMiniPackageResultReturnPackageResult extends $tea.Model {
  debugUrl: string;
  packageId: string;
  userId: string;
  static names(): { [key: string]: string } {
    return {
      debugUrl: 'DebugUrl',
      packageId: 'PackageId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugUrl: 'string',
      packageId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeMiniPackageResponseUploadMiniPackageResult extends $tea.Model {
  resultMsg: string;
  success: boolean;
  returnPackageResult: UploadMcubeMiniPackageResponseUploadMiniPackageResultReturnPackageResult;
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      returnPackageResult: 'ReturnPackageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      returnPackageResult: UploadMcubeMiniPackageResponseUploadMiniPackageResultReturnPackageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniTaskResponseQueryMiniTaskResultMiniTaskInfo extends $tea.Model {
  appCode: string;
  gmtCreate: string;
  gmtModified: string;
  greyConfigInfo: string;
  greyEndtime: string;
  greyEndtimeData: string;
  greyNum: number;
  id: number;
  memo: string;
  packageId: number;
  platform: string;
  productVersion: string;
  publishMode: number;
  publishType: number;
  status: string;
  taskStatus: number;
  whitelistIds: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtime: 'GreyEndtime',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      id: 'Id',
      memo: 'Memo',
      packageId: 'PackageId',
      platform: 'Platform',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      status: 'Status',
      taskStatus: 'TaskStatus',
      whitelistIds: 'WhitelistIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      greyConfigInfo: 'string',
      greyEndtime: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      id: 'number',
      memo: 'string',
      packageId: 'number',
      platform: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      status: 'string',
      taskStatus: 'number',
      whitelistIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniTaskResponseQueryMiniTaskResult extends $tea.Model {
  resultMsg: string;
  success: boolean;
  miniTaskInfo: QueryMcubeMiniTaskResponseQueryMiniTaskResultMiniTaskInfo;
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      miniTaskInfo: 'MiniTaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      miniTaskInfo: QueryMcubeMiniTaskResponseQueryMiniTaskResultMiniTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniPackageResponseQueryMiniPackageResultMiniPackageInfo extends $tea.Model {
  appCode: string;
  autoInstall: number;
  clientVersionMax: string;
  clientVersionMin: string;
  downloadUrl: string;
  extendInfo: string;
  extraData: string;
  fallbackBaseUrl: string;
  gmtCreate: string;
  gmtModified: string;
  h5Id: string;
  h5Name: string;
  h5Version: string;
  id: number;
  installType: number;
  mainUrl: string;
  memo: string;
  packageType: number;
  platform: string;
  publishPeriod: number;
  resourceType: number;
  status: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      autoInstall: 'AutoInstall',
      clientVersionMax: 'ClientVersionMax',
      clientVersionMin: 'ClientVersionMin',
      downloadUrl: 'DownloadUrl',
      extendInfo: 'ExtendInfo',
      extraData: 'ExtraData',
      fallbackBaseUrl: 'FallbackBaseUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      h5Version: 'H5Version',
      id: 'Id',
      installType: 'InstallType',
      mainUrl: 'MainUrl',
      memo: 'Memo',
      packageType: 'PackageType',
      platform: 'Platform',
      publishPeriod: 'PublishPeriod',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      autoInstall: 'number',
      clientVersionMax: 'string',
      clientVersionMin: 'string',
      downloadUrl: 'string',
      extendInfo: 'string',
      extraData: 'string',
      fallbackBaseUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      h5Version: 'string',
      id: 'number',
      installType: 'number',
      mainUrl: 'string',
      memo: 'string',
      packageType: 'number',
      platform: 'string',
      publishPeriod: 'number',
      resourceType: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniPackageResponseQueryMiniPackageResult extends $tea.Model {
  resultMsg: string;
  success: boolean;
  miniPackageInfo: QueryMcubeMiniPackageResponseQueryMiniPackageResultMiniPackageInfo;
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      miniPackageInfo: 'MiniPackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      miniPackageInfo: QueryMcubeMiniPackageResponseQueryMiniPackageResultMiniPackageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeRsaKeyResponseUploadRsaResult extends $tea.Model {
  data: string;
  resultMsg: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeMiniAppResponseDeleteMiniResult extends $tea.Model {
  data: string;
  resultMsg: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistResponseCreateWhitelistResult extends $tea.Model {
  resultMsg: string;
  success: boolean;
  whitelistId: string;
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      whitelistId: 'WhitelistId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      whitelistId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistForIdeResponseCreateWhitelistForIdeResult extends $tea.Model {
  resultMsg: string;
  success: boolean;
  whitelistId: string;
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      whitelistId: 'WhitelistId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      whitelistId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubeMiniTaskStatusResponseChangeMiniTaskStatusResult extends $tea.Model {
  data: string;
  resultMsg: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeVhostResponseCreateVhostResult extends $tea.Model {
  data: string;
  resultMsg: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeMiniAppResponseCreateMiniResult extends $tea.Model {
  data: string;
  resultMsg: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeVhostResponseQueryVhostResult extends $tea.Model {
  data: string;
  resultMsg: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniAppsResponseListMiniResultMiniProgramList extends $tea.Model {
  appCode: string;
  gmtCreate: string;
  gmtModified: string;
  h5Id: string;
  h5Name: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniAppsResponseListMiniResult extends $tea.Model {
  resultMsg: string;
  success: boolean;
  miniProgramList: ListMcubeMiniAppsResponseListMiniResultMiniProgramList[];
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      miniProgramList: 'MiniProgramList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      miniProgramList: { 'type': 'array', 'itemType': ListMcubeMiniAppsResponseListMiniResultMiniProgramList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeWhitelistsResponseListWhitelistResultWhitelists extends $tea.Model {
  appCode: string;
  gmtCreate: string;
  gmtModified: string;
  id: number;
  whitelistType: string;
  whiteListCount: number;
  whiteListName: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      whitelistType: 'WhitelistType',
      whiteListCount: 'WhiteListCount',
      whiteListName: 'WhiteListName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      whitelistType: 'string',
      whiteListCount: 'number',
      whiteListName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeWhitelistsResponseListWhitelistResult extends $tea.Model {
  resultMsg: string;
  success: boolean;
  whitelists: ListMcubeWhitelistsResponseListWhitelistResultWhitelists[];
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      whitelists: 'Whitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      whitelists: { 'type': 'array', 'itemType': ListMcubeWhitelistsResponseListWhitelistResultWhitelists },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMultipleRequestTargetMsg extends $tea.Model {
  extendedParams?: string;
  msgKey: string;
  target: string;
  templateKeyValue?: string;
  static names(): { [key: string]: string } {
    return {
      extendedParams: 'ExtendedParams',
      msgKey: 'MsgKey',
      target: 'Target',
      templateKeyValue: 'TemplateKeyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedParams: 'string',
      msgKey: 'string',
      target: 'string',
      templateKeyValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcdpAimResponseResultContent extends $tea.Model {
  code: string;
  data: string;
  message: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMgsApirestResponseResultContent extends $tea.Model {
  errorMessage: string;
  success: boolean;
  value: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      success: 'Success',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      success: 'boolean',
      value: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseResultContentValueHeaderRule extends $tea.Model {
  headerKey: string;
  location: string;
  type: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      location: 'Location',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      location: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseResultContentValueHeaderRules extends $tea.Model {
  headerKey: string;
  location: string;
  type: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      location: 'Location',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      location: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseResultContentValueRequestParams extends $tea.Model {
  apiId: string;
  appId: string;
  defaultValue: string;
  description: string;
  id: number;
  location: string;
  name: string;
  refType: string;
  type: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appId: 'AppId',
      defaultValue: 'DefaultValue',
      description: 'Description',
      id: 'Id',
      location: 'Location',
      name: 'Name',
      refType: 'RefType',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      appId: 'string',
      defaultValue: 'string',
      description: 'string',
      id: 'number',
      location: 'string',
      name: 'string',
      refType: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseResultContentValueApiInvokerHttpInvoker extends $tea.Model {
  charset: string;
  contentType: string;
  host: string;
  method: string;
  path: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      contentType: 'ContentType',
      host: 'Host',
      method: 'Method',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      contentType: 'string',
      host: 'string',
      method: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseResultContentValueApiInvoker extends $tea.Model {
  rpcInvoker: string;
  httpInvoker: QueryMgsApirestResponseResultContentValueApiInvokerHttpInvoker;
  static names(): { [key: string]: string } {
    return {
      rpcInvoker: 'RpcInvoker',
      httpInvoker: 'HttpInvoker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rpcInvoker: 'string',
      httpInvoker: QueryMgsApirestResponseResultContentValueApiInvokerHttpInvoker,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseResultContentValueCacheRule extends $tea.Model {
  cacheKey: string;
  needCache: boolean;
  ttl: number;
  static names(): { [key: string]: string } {
    return {
      cacheKey: 'CacheKey',
      needCache: 'NeedCache',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheKey: 'string',
      needCache: 'boolean',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseResultContentValueLimitRule extends $tea.Model {
  defaultResponse: string;
  i18nResponse: string;
  interval: number;
  limit: number;
  mode: string;
  static names(): { [key: string]: string } {
    return {
      defaultResponse: 'DefaultResponse',
      i18nResponse: 'I18nResponse',
      interval: 'Interval',
      limit: 'Limit',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResponse: 'string',
      i18nResponse: 'string',
      interval: 'number',
      limit: 'number',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseResultContentValueMigrateRule extends $tea.Model {
  flowPercent: number;
  needMigrate: boolean;
  needSwitchCompletely: boolean;
  sysId: number;
  sysName: string;
  upstreamType: string;
  static names(): { [key: string]: string } {
    return {
      flowPercent: 'FlowPercent',
      needMigrate: 'NeedMigrate',
      needSwitchCompletely: 'NeedSwitchCompletely',
      sysId: 'SysId',
      sysName: 'SysName',
      upstreamType: 'UpstreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowPercent: 'number',
      needMigrate: 'boolean',
      needSwitchCompletely: 'boolean',
      sysId: 'number',
      sysName: 'string',
      upstreamType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseResultContentValueMockRule extends $tea.Model {
  mockData: string;
  needMock: boolean;
  percentage: number;
  type: string;
  static names(): { [key: string]: string } {
    return {
      mockData: 'MockData',
      needMock: 'NeedMock',
      percentage: 'Percentage',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockData: 'string',
      needMock: 'boolean',
      percentage: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseResultContentValue extends $tea.Model {
  apiName: string;
  apiStatus: string;
  apiType: string;
  appId: string;
  authRuleName: string;
  charset: string;
  contentType: string;
  description: string;
  gmtCreate: string;
  gmtModified: string;
  host: string;
  id: number;
  interfaceType: string;
  method: string;
  methodName: string;
  needEncrypt: string;
  needETag: string;
  needJsonp: string;
  needSign: string;
  operationType: string;
  paramGetMethod: string;
  path: string;
  requestBodyModel: string;
  responseBodyModel: string;
  sysId: number;
  sysName: string;
  timeout: string;
  workspaceId: string;
  headerRule: QueryMgsApirestResponseResultContentValueHeaderRule[];
  headerRules: QueryMgsApirestResponseResultContentValueHeaderRules[];
  requestParams: QueryMgsApirestResponseResultContentValueRequestParams[];
  apiInvoker: QueryMgsApirestResponseResultContentValueApiInvoker;
  cacheRule: QueryMgsApirestResponseResultContentValueCacheRule;
  limitRule: QueryMgsApirestResponseResultContentValueLimitRule;
  migrateRule: QueryMgsApirestResponseResultContentValueMigrateRule;
  mockRule: QueryMgsApirestResponseResultContentValueMockRule;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
      authRuleName: 'AuthRuleName',
      charset: 'Charset',
      contentType: 'ContentType',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      host: 'Host',
      id: 'Id',
      interfaceType: 'InterfaceType',
      method: 'Method',
      methodName: 'MethodName',
      needEncrypt: 'NeedEncrypt',
      needETag: 'NeedETag',
      needJsonp: 'NeedJsonp',
      needSign: 'NeedSign',
      operationType: 'OperationType',
      paramGetMethod: 'ParamGetMethod',
      path: 'Path',
      requestBodyModel: 'RequestBodyModel',
      responseBodyModel: 'ResponseBodyModel',
      sysId: 'SysId',
      sysName: 'SysName',
      timeout: 'Timeout',
      workspaceId: 'WorkspaceId',
      headerRule: 'HeaderRule',
      headerRules: 'HeaderRules',
      requestParams: 'RequestParams',
      apiInvoker: 'ApiInvoker',
      cacheRule: 'CacheRule',
      limitRule: 'LimitRule',
      migrateRule: 'MigrateRule',
      mockRule: 'MockRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiStatus: 'string',
      apiType: 'string',
      appId: 'string',
      authRuleName: 'string',
      charset: 'string',
      contentType: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      host: 'string',
      id: 'number',
      interfaceType: 'string',
      method: 'string',
      methodName: 'string',
      needEncrypt: 'string',
      needETag: 'string',
      needJsonp: 'string',
      needSign: 'string',
      operationType: 'string',
      paramGetMethod: 'string',
      path: 'string',
      requestBodyModel: 'string',
      responseBodyModel: 'string',
      sysId: 'number',
      sysName: 'string',
      timeout: 'string',
      workspaceId: 'string',
      headerRule: { 'type': 'array', 'itemType': QueryMgsApirestResponseResultContentValueHeaderRule },
      headerRules: { 'type': 'array', 'itemType': QueryMgsApirestResponseResultContentValueHeaderRules },
      requestParams: { 'type': 'array', 'itemType': QueryMgsApirestResponseResultContentValueRequestParams },
      apiInvoker: QueryMgsApirestResponseResultContentValueApiInvoker,
      cacheRule: QueryMgsApirestResponseResultContentValueCacheRule,
      limitRule: QueryMgsApirestResponseResultContentValueLimitRule,
      migrateRule: QueryMgsApirestResponseResultContentValueMigrateRule,
      mockRule: QueryMgsApirestResponseResultContentValueMockRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseResultContent extends $tea.Model {
  errorMessage: string;
  success: boolean;
  value: QueryMgsApirestResponseResultContentValue;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      success: 'Success',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      success: 'boolean',
      value: QueryMgsApirestResponseResultContentValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseResultContentValueHeaderRule extends $tea.Model {
  headerKey: string;
  location: string;
  type: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      location: 'Location',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      location: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseResultContentValueHeaderRules extends $tea.Model {
  headerKey: string;
  location: string;
  type: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      location: 'Location',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      location: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseResultContentValueRequestParams extends $tea.Model {
  apiId: string;
  appId: string;
  defaultValue: string;
  description: string;
  id: number;
  location: string;
  name: string;
  refType: string;
  type: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appId: 'AppId',
      defaultValue: 'DefaultValue',
      description: 'Description',
      id: 'Id',
      location: 'Location',
      name: 'Name',
      refType: 'RefType',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      appId: 'string',
      defaultValue: 'string',
      description: 'string',
      id: 'number',
      location: 'string',
      name: 'string',
      refType: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseResultContentValueApiInvokerHttpInvoker extends $tea.Model {
  charset: string;
  contentType: string;
  host: string;
  method: string;
  path: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      contentType: 'ContentType',
      host: 'Host',
      method: 'Method',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      contentType: 'string',
      host: 'string',
      method: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseResultContentValueApiInvoker extends $tea.Model {
  rpcInvoker: string;
  httpInvoker: ListMgsApiResponseResultContentValueApiInvokerHttpInvoker;
  static names(): { [key: string]: string } {
    return {
      rpcInvoker: 'RpcInvoker',
      httpInvoker: 'HttpInvoker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rpcInvoker: 'string',
      httpInvoker: ListMgsApiResponseResultContentValueApiInvokerHttpInvoker,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseResultContentValueCacheRule extends $tea.Model {
  cacheKey: string;
  needCache: boolean;
  ttl: number;
  static names(): { [key: string]: string } {
    return {
      cacheKey: 'CacheKey',
      needCache: 'NeedCache',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheKey: 'string',
      needCache: 'boolean',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseResultContentValueLimitRule extends $tea.Model {
  defaultResponse: string;
  i18nResponse: string;
  interval: number;
  limit: number;
  mode: string;
  static names(): { [key: string]: string } {
    return {
      defaultResponse: 'DefaultResponse',
      i18nResponse: 'I18nResponse',
      interval: 'Interval',
      limit: 'Limit',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResponse: 'string',
      i18nResponse: 'string',
      interval: 'number',
      limit: 'number',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseResultContentValueMigrateRule extends $tea.Model {
  flowPercent: number;
  needMigrate: boolean;
  needSwitchCompletely: boolean;
  sysId: number;
  sysName: string;
  upstreamType: string;
  static names(): { [key: string]: string } {
    return {
      flowPercent: 'FlowPercent',
      needMigrate: 'NeedMigrate',
      needSwitchCompletely: 'NeedSwitchCompletely',
      sysId: 'SysId',
      sysName: 'SysName',
      upstreamType: 'UpstreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowPercent: 'number',
      needMigrate: 'boolean',
      needSwitchCompletely: 'boolean',
      sysId: 'number',
      sysName: 'string',
      upstreamType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseResultContentValueMockRule extends $tea.Model {
  mockData: string;
  needMock: boolean;
  percentage: number;
  type: string;
  static names(): { [key: string]: string } {
    return {
      mockData: 'MockData',
      needMock: 'NeedMock',
      percentage: 'Percentage',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockData: 'string',
      needMock: 'boolean',
      percentage: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseResultContentValue extends $tea.Model {
  apiName: string;
  apiStatus: string;
  apiType: string;
  appId: string;
  authRuleName: string;
  charset: string;
  contentType: string;
  description: string;
  gmtCreate: string;
  gmtModified: string;
  host: string;
  id: number;
  interfaceType: string;
  method: string;
  methodName: string;
  needEncrypt: string;
  needETag: string;
  needJsonp: string;
  needSign: string;
  operationType: string;
  paramGetMethod: string;
  path: string;
  requestBodyModel: string;
  responseBodyModel: string;
  sysId: number;
  sysName: string;
  timeout: string;
  workspaceId: string;
  headerRule: ListMgsApiResponseResultContentValueHeaderRule[];
  headerRules: ListMgsApiResponseResultContentValueHeaderRules[];
  requestParams: ListMgsApiResponseResultContentValueRequestParams[];
  apiInvoker: ListMgsApiResponseResultContentValueApiInvoker;
  cacheRule: ListMgsApiResponseResultContentValueCacheRule;
  limitRule: ListMgsApiResponseResultContentValueLimitRule;
  migrateRule: ListMgsApiResponseResultContentValueMigrateRule;
  mockRule: ListMgsApiResponseResultContentValueMockRule;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
      authRuleName: 'AuthRuleName',
      charset: 'Charset',
      contentType: 'ContentType',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      host: 'Host',
      id: 'Id',
      interfaceType: 'InterfaceType',
      method: 'Method',
      methodName: 'MethodName',
      needEncrypt: 'NeedEncrypt',
      needETag: 'NeedETag',
      needJsonp: 'NeedJsonp',
      needSign: 'NeedSign',
      operationType: 'OperationType',
      paramGetMethod: 'ParamGetMethod',
      path: 'Path',
      requestBodyModel: 'RequestBodyModel',
      responseBodyModel: 'ResponseBodyModel',
      sysId: 'SysId',
      sysName: 'SysName',
      timeout: 'Timeout',
      workspaceId: 'WorkspaceId',
      headerRule: 'HeaderRule',
      headerRules: 'HeaderRules',
      requestParams: 'RequestParams',
      apiInvoker: 'ApiInvoker',
      cacheRule: 'CacheRule',
      limitRule: 'LimitRule',
      migrateRule: 'MigrateRule',
      mockRule: 'MockRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiStatus: 'string',
      apiType: 'string',
      appId: 'string',
      authRuleName: 'string',
      charset: 'string',
      contentType: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      host: 'string',
      id: 'number',
      interfaceType: 'string',
      method: 'string',
      methodName: 'string',
      needEncrypt: 'string',
      needETag: 'string',
      needJsonp: 'string',
      needSign: 'string',
      operationType: 'string',
      paramGetMethod: 'string',
      path: 'string',
      requestBodyModel: 'string',
      responseBodyModel: 'string',
      sysId: 'number',
      sysName: 'string',
      timeout: 'string',
      workspaceId: 'string',
      headerRule: { 'type': 'array', 'itemType': ListMgsApiResponseResultContentValueHeaderRule },
      headerRules: { 'type': 'array', 'itemType': ListMgsApiResponseResultContentValueHeaderRules },
      requestParams: { 'type': 'array', 'itemType': ListMgsApiResponseResultContentValueRequestParams },
      apiInvoker: ListMgsApiResponseResultContentValueApiInvoker,
      cacheRule: ListMgsApiResponseResultContentValueCacheRule,
      limitRule: ListMgsApiResponseResultContentValueLimitRule,
      migrateRule: ListMgsApiResponseResultContentValueMigrateRule,
      mockRule: ListMgsApiResponseResultContentValueMockRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseResultContent extends $tea.Model {
  errorMessage: string;
  success: boolean;
  value: ListMgsApiResponseResultContentValue[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      success: 'Success',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      success: 'boolean',
      value: { 'type': 'array', 'itemType': ListMgsApiResponseResultContentValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseResultContentListHeaderRule extends $tea.Model {
  headerKey: string;
  location: string;
  type: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      location: 'Location',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      location: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseResultContentListHeaderRules extends $tea.Model {
  headerKey: string;
  location: string;
  type: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      location: 'Location',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      location: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseResultContentListRequestParams extends $tea.Model {
  apiId: string;
  appId: string;
  defaultValue: string;
  description: string;
  id: number;
  location: string;
  name: string;
  refType: string;
  type: string;
  workspaceId: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appId: 'AppId',
      defaultValue: 'DefaultValue',
      description: 'Description',
      id: 'Id',
      location: 'Location',
      name: 'Name',
      refType: 'RefType',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      appId: 'string',
      defaultValue: 'string',
      description: 'string',
      id: 'number',
      location: 'string',
      name: 'string',
      refType: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseResultContentListApiInvokerHttpInvoker extends $tea.Model {
  charset: string;
  contentType: string;
  host: string;
  method: string;
  path: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      contentType: 'ContentType',
      host: 'Host',
      method: 'Method',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      contentType: 'string',
      host: 'string',
      method: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseResultContentListApiInvoker extends $tea.Model {
  rpcInvoker: string;
  httpInvoker: QueryMgsApipageResponseResultContentListApiInvokerHttpInvoker;
  static names(): { [key: string]: string } {
    return {
      rpcInvoker: 'RpcInvoker',
      httpInvoker: 'HttpInvoker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rpcInvoker: 'string',
      httpInvoker: QueryMgsApipageResponseResultContentListApiInvokerHttpInvoker,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseResultContentListCacheRule extends $tea.Model {
  cacheKey: string;
  needCache: boolean;
  ttl: number;
  static names(): { [key: string]: string } {
    return {
      cacheKey: 'CacheKey',
      needCache: 'NeedCache',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheKey: 'string',
      needCache: 'boolean',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseResultContentListLimitRule extends $tea.Model {
  defaultResponse: string;
  i18nResponse: string;
  interval: number;
  limit: number;
  mode: string;
  static names(): { [key: string]: string } {
    return {
      defaultResponse: 'DefaultResponse',
      i18nResponse: 'I18nResponse',
      interval: 'Interval',
      limit: 'Limit',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResponse: 'string',
      i18nResponse: 'string',
      interval: 'number',
      limit: 'number',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseResultContentListMigrateRule extends $tea.Model {
  flowPercent: number;
  needMigrate: boolean;
  needSwitchCompletely: boolean;
  sysId: number;
  sysName: string;
  upstreamType: string;
  static names(): { [key: string]: string } {
    return {
      flowPercent: 'FlowPercent',
      needMigrate: 'NeedMigrate',
      needSwitchCompletely: 'NeedSwitchCompletely',
      sysId: 'SysId',
      sysName: 'SysName',
      upstreamType: 'UpstreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowPercent: 'number',
      needMigrate: 'boolean',
      needSwitchCompletely: 'boolean',
      sysId: 'number',
      sysName: 'string',
      upstreamType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseResultContentListMockRule extends $tea.Model {
  mockData: string;
  needMock: boolean;
  percentage: number;
  type: string;
  static names(): { [key: string]: string } {
    return {
      mockData: 'MockData',
      needMock: 'NeedMock',
      percentage: 'Percentage',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockData: 'string',
      needMock: 'boolean',
      percentage: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseResultContentList extends $tea.Model {
  apiName: string;
  apiStatus: string;
  apiType: string;
  appId: string;
  authRuleName: string;
  charset: string;
  contentType: string;
  description: string;
  gmtCreate: string;
  gmtModified: string;
  host: string;
  id: number;
  interfaceType: string;
  method: string;
  methodName: string;
  needEncrypt: string;
  needETag: string;
  needJsonp: string;
  needSign: string;
  operationType: string;
  paramGetMethod: string;
  path: string;
  requestBodyModel: string;
  responseBodyModel: string;
  sysId: number;
  sysName: string;
  timeout: string;
  workspaceId: string;
  headerRule: QueryMgsApipageResponseResultContentListHeaderRule[];
  headerRules: QueryMgsApipageResponseResultContentListHeaderRules[];
  requestParams: QueryMgsApipageResponseResultContentListRequestParams[];
  apiInvoker: QueryMgsApipageResponseResultContentListApiInvoker;
  cacheRule: QueryMgsApipageResponseResultContentListCacheRule;
  limitRule: QueryMgsApipageResponseResultContentListLimitRule;
  migrateRule: QueryMgsApipageResponseResultContentListMigrateRule;
  mockRule: QueryMgsApipageResponseResultContentListMockRule;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
      authRuleName: 'AuthRuleName',
      charset: 'Charset',
      contentType: 'ContentType',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      host: 'Host',
      id: 'Id',
      interfaceType: 'InterfaceType',
      method: 'Method',
      methodName: 'MethodName',
      needEncrypt: 'NeedEncrypt',
      needETag: 'NeedETag',
      needJsonp: 'NeedJsonp',
      needSign: 'NeedSign',
      operationType: 'OperationType',
      paramGetMethod: 'ParamGetMethod',
      path: 'Path',
      requestBodyModel: 'RequestBodyModel',
      responseBodyModel: 'ResponseBodyModel',
      sysId: 'SysId',
      sysName: 'SysName',
      timeout: 'Timeout',
      workspaceId: 'WorkspaceId',
      headerRule: 'HeaderRule',
      headerRules: 'HeaderRules',
      requestParams: 'RequestParams',
      apiInvoker: 'ApiInvoker',
      cacheRule: 'CacheRule',
      limitRule: 'LimitRule',
      migrateRule: 'MigrateRule',
      mockRule: 'MockRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiStatus: 'string',
      apiType: 'string',
      appId: 'string',
      authRuleName: 'string',
      charset: 'string',
      contentType: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      host: 'string',
      id: 'number',
      interfaceType: 'string',
      method: 'string',
      methodName: 'string',
      needEncrypt: 'string',
      needETag: 'string',
      needJsonp: 'string',
      needSign: 'string',
      operationType: 'string',
      paramGetMethod: 'string',
      path: 'string',
      requestBodyModel: 'string',
      responseBodyModel: 'string',
      sysId: 'number',
      sysName: 'string',
      timeout: 'string',
      workspaceId: 'string',
      headerRule: { 'type': 'array', 'itemType': QueryMgsApipageResponseResultContentListHeaderRule },
      headerRules: { 'type': 'array', 'itemType': QueryMgsApipageResponseResultContentListHeaderRules },
      requestParams: { 'type': 'array', 'itemType': QueryMgsApipageResponseResultContentListRequestParams },
      apiInvoker: QueryMgsApipageResponseResultContentListApiInvoker,
      cacheRule: QueryMgsApipageResponseResultContentListCacheRule,
      limitRule: QueryMgsApipageResponseResultContentListLimitRule,
      migrateRule: QueryMgsApipageResponseResultContentListMigrateRule,
      mockRule: QueryMgsApipageResponseResultContentListMockRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseResultContent extends $tea.Model {
  current: number;
  pageSize: number;
  total: number;
  list: QueryMgsApipageResponseResultContentList[];
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      pageSize: 'PageSize',
      total: 'Total',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      pageSize: 'number',
      total: 'number',
      list: { 'type': 'array', 'itemType': QueryMgsApipageResponseResultContentList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "mpaas.aliyuncs.com",
      'ap-northeast-1': "mpaas.aliyuncs.com",
      'ap-northeast-2-pop': "mpaas.aliyuncs.com",
      'ap-south-1': "mpaas.aliyuncs.com",
      'ap-southeast-1': "mpaas.aliyuncs.com",
      'ap-southeast-2': "mpaas.aliyuncs.com",
      'ap-southeast-3': "mpaas.aliyuncs.com",
      'ap-southeast-5': "mpaas.aliyuncs.com",
      'cn-beijing': "mpaas.aliyuncs.com",
      'cn-beijing-finance-1': "mpaas.aliyuncs.com",
      'cn-beijing-finance-pop': "mpaas.aliyuncs.com",
      'cn-beijing-gov-1': "mpaas.aliyuncs.com",
      'cn-beijing-nu16-b01': "mpaas.aliyuncs.com",
      'cn-chengdu': "mpaas.aliyuncs.com",
      'cn-edge-1': "mpaas.aliyuncs.com",
      'cn-fujian': "mpaas.aliyuncs.com",
      'cn-haidian-cm12-c01': "mpaas.aliyuncs.com",
      'cn-hangzhou-bj-b01': "mpaas.aliyuncs.com",
      'cn-hangzhou-finance': "mpaas.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "mpaas.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "mpaas.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "mpaas.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "mpaas.aliyuncs.com",
      'cn-hangzhou-test-306': "mpaas.aliyuncs.com",
      'cn-hongkong': "mpaas.aliyuncs.com",
      'cn-hongkong-finance-pop': "mpaas.aliyuncs.com",
      'cn-huhehaote': "mpaas.aliyuncs.com",
      'cn-north-2-gov-1': "mpaas.aliyuncs.com",
      'cn-qingdao': "mpaas.aliyuncs.com",
      'cn-qingdao-nebula': "mpaas.aliyuncs.com",
      'cn-shanghai': "mpaas.aliyuncs.com",
      'cn-shanghai-et15-b01': "mpaas.aliyuncs.com",
      'cn-shanghai-et2-b01': "mpaas.aliyuncs.com",
      'cn-shanghai-finance-1': "mpaas.aliyuncs.com",
      'cn-shanghai-inner': "mpaas.aliyuncs.com",
      'cn-shanghai-internal-test-1': "mpaas.aliyuncs.com",
      'cn-shenzhen': "mpaas.aliyuncs.com",
      'cn-shenzhen-finance-1': "mpaas.aliyuncs.com",
      'cn-shenzhen-inner': "mpaas.aliyuncs.com",
      'cn-shenzhen-st4-d01': "mpaas.aliyuncs.com",
      'cn-shenzhen-su18-b01': "mpaas.aliyuncs.com",
      'cn-wuhan': "mpaas.aliyuncs.com",
      'cn-yushanfang': "mpaas.aliyuncs.com",
      'cn-zhangbei-na61-b01': "mpaas.aliyuncs.com",
      'cn-zhangjiakou': "mpaas.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "mpaas.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "mpaas.aliyuncs.com",
      'eu-central-1': "mpaas.aliyuncs.com",
      'eu-west-1': "mpaas.aliyuncs.com",
      'eu-west-1-oxs': "mpaas.aliyuncs.com",
      'me-east-1': "mpaas.aliyuncs.com",
      'rus-west-1-pop': "mpaas.aliyuncs.com",
      'us-east-1': "mpaas.aliyuncs.com",
      'us-west-1': "mpaas.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mpaas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async updateMpaasAppInfoWithOptions(request: UpdateMpaasAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMpaasAppInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateMpaasAppInfoResponse>(await this.doRequest("UpdateMpaasAppInfo", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new UpdateMpaasAppInfoResponse({}));
  }

  async updateMpaasAppInfo(request: UpdateMpaasAppInfoRequest): Promise<UpdateMpaasAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMpaasAppInfoWithOptions(request, runtime);
  }

  async runMsaDiffWithOptions(request: RunMsaDiffRequest, runtime: $Util.RuntimeOptions): Promise<RunMsaDiffResponse> {
    Util.validateModel(request);
    return $tea.cast<RunMsaDiffResponse>(await this.doRequest("RunMsaDiff", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new RunMsaDiffResponse({}));
  }

  async runMsaDiff(request: RunMsaDiffRequest): Promise<RunMsaDiffResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runMsaDiffWithOptions(request, runtime);
  }

  async createMsaEnhanceWithOptions(request: CreateMsaEnhanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateMsaEnhanceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateMsaEnhanceResponse>(await this.doRequest("CreateMsaEnhance", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new CreateMsaEnhanceResponse({}));
  }

  async createMsaEnhance(request: CreateMsaEnhanceRequest): Promise<CreateMsaEnhanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMsaEnhanceWithOptions(request, runtime);
  }

  async queryMPaaSMasTinyAppDailyDataWithOptions(request: QueryMPaaSMasTinyAppDailyDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryMPaaSMasTinyAppDailyDataResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMPaaSMasTinyAppDailyDataResponse>(await this.doRequest("QueryMPaaSMasTinyAppDailyData", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new QueryMPaaSMasTinyAppDailyDataResponse({}));
  }

  async queryMPaaSMasTinyAppDailyData(request: QueryMPaaSMasTinyAppDailyDataRequest): Promise<QueryMPaaSMasTinyAppDailyDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMPaaSMasTinyAppDailyDataWithOptions(request, runtime);
  }

  async queryMPaaSMasTinyAppHistoryDataWithOptions(request: QueryMPaaSMasTinyAppHistoryDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryMPaaSMasTinyAppHistoryDataResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMPaaSMasTinyAppHistoryDataResponse>(await this.doRequest("QueryMPaaSMasTinyAppHistoryData", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new QueryMPaaSMasTinyAppHistoryDataResponse({}));
  }

  async queryMPaaSMasTinyAppHistoryData(request: QueryMPaaSMasTinyAppHistoryDataRequest): Promise<QueryMPaaSMasTinyAppHistoryDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMPaaSMasTinyAppHistoryDataWithOptions(request, runtime);
  }

  async queryMPaaSMasTinyAppDailyPageViewWithOptions(request: QueryMPaaSMasTinyAppDailyPageViewRequest, runtime: $Util.RuntimeOptions): Promise<QueryMPaaSMasTinyAppDailyPageViewResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMPaaSMasTinyAppDailyPageViewResponse>(await this.doRequest("QueryMPaaSMasTinyAppDailyPageView", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new QueryMPaaSMasTinyAppDailyPageViewResponse({}));
  }

  async queryMPaaSMasTinyAppDailyPageView(request: QueryMPaaSMasTinyAppDailyPageViewRequest): Promise<QueryMPaaSMasTinyAppDailyPageViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMPaaSMasTinyAppDailyPageViewWithOptions(request, runtime);
  }

  async listMPaaSMasTinyAppWithOptions(request: ListMPaaSMasTinyAppRequest, runtime: $Util.RuntimeOptions): Promise<ListMPaaSMasTinyAppResponse> {
    Util.validateModel(request);
    return $tea.cast<ListMPaaSMasTinyAppResponse>(await this.doRequest("ListMPaaSMasTinyApp", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new ListMPaaSMasTinyAppResponse({}));
  }

  async listMPaaSMasTinyApp(request: ListMPaaSMasTinyAppRequest): Promise<ListMPaaSMasTinyAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMPaaSMasTinyAppWithOptions(request, runtime);
  }

  async listMappCenterAppsWithOptions(request: ListMappCenterAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListMappCenterAppsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListMappCenterAppsResponse>(await this.doRequest("ListMappCenterApps", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new ListMappCenterAppsResponse({}));
  }

  async listMappCenterApps(request: ListMappCenterAppsRequest): Promise<ListMappCenterAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMappCenterAppsWithOptions(request, runtime);
  }

  async listMappCenterWorkspacesWithOptions(request: ListMappCenterWorkspacesRequest, runtime: $Util.RuntimeOptions): Promise<ListMappCenterWorkspacesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListMappCenterWorkspacesResponse>(await this.doRequest("ListMappCenterWorkspaces", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new ListMappCenterWorkspacesResponse({}));
  }

  async listMappCenterWorkspaces(request: ListMappCenterWorkspacesRequest): Promise<ListMappCenterWorkspacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMappCenterWorkspacesWithOptions(request, runtime);
  }

  async queryMappCenterAppWithOptions(request: QueryMappCenterAppRequest, runtime: $Util.RuntimeOptions): Promise<QueryMappCenterAppResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMappCenterAppResponse>(await this.doRequest("QueryMappCenterApp", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new QueryMappCenterAppResponse({}));
  }

  async queryMappCenterApp(request: QueryMappCenterAppRequest): Promise<QueryMappCenterAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMappCenterAppWithOptions(request, runtime);
  }

  async exportMappCenterAppConfigWithOptions(request: ExportMappCenterAppConfigRequest, runtime: $Util.RuntimeOptions): Promise<ExportMappCenterAppConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<ExportMappCenterAppConfigResponse>(await this.doRequest("ExportMappCenterAppConfig", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new ExportMappCenterAppConfigResponse({}));
  }

  async exportMappCenterAppConfig(request: ExportMappCenterAppConfigRequest): Promise<ExportMappCenterAppConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportMappCenterAppConfigWithOptions(request, runtime);
  }

  async deleteMpaasMrtcArtvcRecordfileWithOptions(request: DeleteMpaasMrtcArtvcRecordfileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMpaasMrtcArtvcRecordfileResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteMpaasMrtcArtvcRecordfileResponse>(await this.doRequest("DeleteMpaasMrtcArtvcRecordfile", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new DeleteMpaasMrtcArtvcRecordfileResponse({}));
  }

  async deleteMpaasMrtcArtvcRecordfile(request: DeleteMpaasMrtcArtvcRecordfileRequest): Promise<DeleteMpaasMrtcArtvcRecordfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMpaasMrtcArtvcRecordfileWithOptions(request, runtime);
  }

  async queryMpaasMrtcArtvcRecordfileWithOptions(request: QueryMpaasMrtcArtvcRecordfileRequest, runtime: $Util.RuntimeOptions): Promise<QueryMpaasMrtcArtvcRecordfileResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMpaasMrtcArtvcRecordfileResponse>(await this.doRequest("QueryMpaasMrtcArtvcRecordfile", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new QueryMpaasMrtcArtvcRecordfileResponse({}));
  }

  async queryMpaasMrtcArtvcRecordfile(request: QueryMpaasMrtcArtvcRecordfileRequest): Promise<QueryMpaasMrtcArtvcRecordfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMpaasMrtcArtvcRecordfileWithOptions(request, runtime);
  }

  async listMcubeMiniTasksWithOptions(request: ListMcubeMiniTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListMcubeMiniTasksResponse> {
    Util.validateModel(request);
    return $tea.cast<ListMcubeMiniTasksResponse>(await this.doRequest("ListMcubeMiniTasks", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new ListMcubeMiniTasksResponse({}));
  }

  async listMcubeMiniTasks(request: ListMcubeMiniTasksRequest): Promise<ListMcubeMiniTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcubeMiniTasksWithOptions(request, runtime);
  }

  async listMcubeMiniPackagesWithOptions(request: ListMcubeMiniPackagesRequest, runtime: $Util.RuntimeOptions): Promise<ListMcubeMiniPackagesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListMcubeMiniPackagesResponse>(await this.doRequest("ListMcubeMiniPackages", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new ListMcubeMiniPackagesResponse({}));
  }

  async listMcubeMiniPackages(request: ListMcubeMiniPackagesRequest): Promise<ListMcubeMiniPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcubeMiniPackagesWithOptions(request, runtime);
  }

  async getMcubeFileTokenWithOptions(request: GetMcubeFileTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetMcubeFileTokenResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMcubeFileTokenResponse>(await this.doRequest("GetMcubeFileToken", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new GetMcubeFileTokenResponse({}));
  }

  async getMcubeFileToken(request: GetMcubeFileTokenRequest): Promise<GetMcubeFileTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMcubeFileTokenWithOptions(request, runtime);
  }

  async updateMcubeWhitelistWithOptions(request: UpdateMcubeWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMcubeWhitelistResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateMcubeWhitelistResponse>(await this.doRequest("UpdateMcubeWhitelist", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new UpdateMcubeWhitelistResponse({}));
  }

  async updateMcubeWhitelist(request: UpdateMcubeWhitelistRequest): Promise<UpdateMcubeWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMcubeWhitelistWithOptions(request, runtime);
  }

  async deleteMcubeWhitelistWithOptions(request: DeleteMcubeWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMcubeWhitelistResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteMcubeWhitelistResponse>(await this.doRequest("DeleteMcubeWhitelist", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new DeleteMcubeWhitelistResponse({}));
  }

  async deleteMcubeWhitelist(request: DeleteMcubeWhitelistRequest): Promise<DeleteMcubeWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMcubeWhitelistWithOptions(request, runtime);
  }

  async createMcubeMiniTaskWithOptions(request: CreateMcubeMiniTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeMiniTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateMcubeMiniTaskResponse>(await this.doRequest("CreateMcubeMiniTask", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new CreateMcubeMiniTaskResponse({}));
  }

  async createMcubeMiniTask(request: CreateMcubeMiniTaskRequest): Promise<CreateMcubeMiniTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeMiniTaskWithOptions(request, runtime);
  }

  async existMcubeRsaKeyWithOptions(request: ExistMcubeRsaKeyRequest, runtime: $Util.RuntimeOptions): Promise<ExistMcubeRsaKeyResponse> {
    Util.validateModel(request);
    return $tea.cast<ExistMcubeRsaKeyResponse>(await this.doRequest("ExistMcubeRsaKey", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new ExistMcubeRsaKeyResponse({}));
  }

  async existMcubeRsaKey(request: ExistMcubeRsaKeyRequest): Promise<ExistMcubeRsaKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.existMcubeRsaKeyWithOptions(request, runtime);
  }

  async uploadMcubeMiniPackageWithOptions(request: UploadMcubeMiniPackageRequest, runtime: $Util.RuntimeOptions): Promise<UploadMcubeMiniPackageResponse> {
    Util.validateModel(request);
    return $tea.cast<UploadMcubeMiniPackageResponse>(await this.doRequest("UploadMcubeMiniPackage", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new UploadMcubeMiniPackageResponse({}));
  }

  async uploadMcubeMiniPackage(request: UploadMcubeMiniPackageRequest): Promise<UploadMcubeMiniPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadMcubeMiniPackageWithOptions(request, runtime);
  }

  async queryMcubeMiniTaskWithOptions(request: QueryMcubeMiniTaskRequest, runtime: $Util.RuntimeOptions): Promise<QueryMcubeMiniTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMcubeMiniTaskResponse>(await this.doRequest("QueryMcubeMiniTask", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new QueryMcubeMiniTaskResponse({}));
  }

  async queryMcubeMiniTask(request: QueryMcubeMiniTaskRequest): Promise<QueryMcubeMiniTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMcubeMiniTaskWithOptions(request, runtime);
  }

  async queryMcubeMiniPackageWithOptions(request: QueryMcubeMiniPackageRequest, runtime: $Util.RuntimeOptions): Promise<QueryMcubeMiniPackageResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMcubeMiniPackageResponse>(await this.doRequest("QueryMcubeMiniPackage", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new QueryMcubeMiniPackageResponse({}));
  }

  async queryMcubeMiniPackage(request: QueryMcubeMiniPackageRequest): Promise<QueryMcubeMiniPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMcubeMiniPackageWithOptions(request, runtime);
  }

  async uploadMcubeRsaKeyWithOptions(request: UploadMcubeRsaKeyRequest, runtime: $Util.RuntimeOptions): Promise<UploadMcubeRsaKeyResponse> {
    Util.validateModel(request);
    return $tea.cast<UploadMcubeRsaKeyResponse>(await this.doRequest("UploadMcubeRsaKey", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new UploadMcubeRsaKeyResponse({}));
  }

  async uploadMcubeRsaKey(request: UploadMcubeRsaKeyRequest): Promise<UploadMcubeRsaKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadMcubeRsaKeyWithOptions(request, runtime);
  }

  async deleteMcubeMiniAppWithOptions(request: DeleteMcubeMiniAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMcubeMiniAppResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteMcubeMiniAppResponse>(await this.doRequest("DeleteMcubeMiniApp", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new DeleteMcubeMiniAppResponse({}));
  }

  async deleteMcubeMiniApp(request: DeleteMcubeMiniAppRequest): Promise<DeleteMcubeMiniAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMcubeMiniAppWithOptions(request, runtime);
  }

  async createMcubeWhitelistWithOptions(request: CreateMcubeWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeWhitelistResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateMcubeWhitelistResponse>(await this.doRequest("CreateMcubeWhitelist", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new CreateMcubeWhitelistResponse({}));
  }

  async createMcubeWhitelist(request: CreateMcubeWhitelistRequest): Promise<CreateMcubeWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeWhitelistWithOptions(request, runtime);
  }

  async createMcubeWhitelistForIdeWithOptions(request: CreateMcubeWhitelistForIdeRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeWhitelistForIdeResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateMcubeWhitelistForIdeResponse>(await this.doRequest("CreateMcubeWhitelistForIde", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new CreateMcubeWhitelistForIdeResponse({}));
  }

  async createMcubeWhitelistForIde(request: CreateMcubeWhitelistForIdeRequest): Promise<CreateMcubeWhitelistForIdeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeWhitelistForIdeWithOptions(request, runtime);
  }

  async changeMcubeMiniTaskStatusWithOptions(request: ChangeMcubeMiniTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<ChangeMcubeMiniTaskStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<ChangeMcubeMiniTaskStatusResponse>(await this.doRequest("ChangeMcubeMiniTaskStatus", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new ChangeMcubeMiniTaskStatusResponse({}));
  }

  async changeMcubeMiniTaskStatus(request: ChangeMcubeMiniTaskStatusRequest): Promise<ChangeMcubeMiniTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeMcubeMiniTaskStatusWithOptions(request, runtime);
  }

  async createMcubeVhostWithOptions(request: CreateMcubeVhostRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeVhostResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateMcubeVhostResponse>(await this.doRequest("CreateMcubeVhost", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new CreateMcubeVhostResponse({}));
  }

  async createMcubeVhost(request: CreateMcubeVhostRequest): Promise<CreateMcubeVhostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeVhostWithOptions(request, runtime);
  }

  async createMcubeMiniAppWithOptions(request: CreateMcubeMiniAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeMiniAppResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateMcubeMiniAppResponse>(await this.doRequest("CreateMcubeMiniApp", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new CreateMcubeMiniAppResponse({}));
  }

  async createMcubeMiniApp(request: CreateMcubeMiniAppRequest): Promise<CreateMcubeMiniAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeMiniAppWithOptions(request, runtime);
  }

  async queryMcubeVhostWithOptions(request: QueryMcubeVhostRequest, runtime: $Util.RuntimeOptions): Promise<QueryMcubeVhostResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMcubeVhostResponse>(await this.doRequest("QueryMcubeVhost", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new QueryMcubeVhostResponse({}));
  }

  async queryMcubeVhost(request: QueryMcubeVhostRequest): Promise<QueryMcubeVhostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMcubeVhostWithOptions(request, runtime);
  }

  async listMcubeMiniAppsWithOptions(request: ListMcubeMiniAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListMcubeMiniAppsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListMcubeMiniAppsResponse>(await this.doRequest("ListMcubeMiniApps", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new ListMcubeMiniAppsResponse({}));
  }

  async listMcubeMiniApps(request: ListMcubeMiniAppsRequest): Promise<ListMcubeMiniAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcubeMiniAppsWithOptions(request, runtime);
  }

  async listMcubeWhitelistsWithOptions(request: ListMcubeWhitelistsRequest, runtime: $Util.RuntimeOptions): Promise<ListMcubeWhitelistsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListMcubeWhitelistsResponse>(await this.doRequest("ListMcubeWhitelists", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new ListMcubeWhitelistsResponse({}));
  }

  async listMcubeWhitelists(request: ListMcubeWhitelistsRequest): Promise<ListMcubeWhitelistsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcubeWhitelistsWithOptions(request, runtime);
  }

  async createOpenSingleDataWithOptions(request: CreateOpenSingleDataRequest, runtime: $Util.RuntimeOptions): Promise<CreateOpenSingleDataResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOpenSingleDataResponse>(await this.doRequest("CreateOpenSingleData", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new CreateOpenSingleDataResponse({}));
  }

  async createOpenSingleData(request: CreateOpenSingleDataRequest): Promise<CreateOpenSingleDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOpenSingleDataWithOptions(request, runtime);
  }

  async createOpenGlobalDataWithOptions(request: CreateOpenGlobalDataRequest, runtime: $Util.RuntimeOptions): Promise<CreateOpenGlobalDataResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOpenGlobalDataResponse>(await this.doRequest("CreateOpenGlobalData", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new CreateOpenGlobalDataResponse({}));
  }

  async createOpenGlobalData(request: CreateOpenGlobalDataRequest): Promise<CreateOpenGlobalDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOpenGlobalDataWithOptions(request, runtime);
  }

  async pushSimpleWithOptions(request: PushSimpleRequest, runtime: $Util.RuntimeOptions): Promise<PushSimpleResponse> {
    Util.validateModel(request);
    return $tea.cast<PushSimpleResponse>(await this.doRequest("PushSimple", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new PushSimpleResponse({}));
  }

  async pushSimple(request: PushSimpleRequest): Promise<PushSimpleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushSimpleWithOptions(request, runtime);
  }

  async pushBroadcastWithOptions(request: PushBroadcastRequest, runtime: $Util.RuntimeOptions): Promise<PushBroadcastResponse> {
    Util.validateModel(request);
    return $tea.cast<PushBroadcastResponse>(await this.doRequest("PushBroadcast", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new PushBroadcastResponse({}));
  }

  async pushBroadcast(request: PushBroadcastRequest): Promise<PushBroadcastResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushBroadcastWithOptions(request, runtime);
  }

  async pushTemplateWithOptions(request: PushTemplateRequest, runtime: $Util.RuntimeOptions): Promise<PushTemplateResponse> {
    Util.validateModel(request);
    return $tea.cast<PushTemplateResponse>(await this.doRequest("PushTemplate", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new PushTemplateResponse({}));
  }

  async pushTemplate(request: PushTemplateRequest): Promise<PushTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushTemplateWithOptions(request, runtime);
  }

  async pushMultipleWithOptions(request: PushMultipleRequest, runtime: $Util.RuntimeOptions): Promise<PushMultipleResponse> {
    Util.validateModel(request);
    return $tea.cast<PushMultipleResponse>(await this.doRequest("PushMultiple", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new PushMultipleResponse({}));
  }

  async pushMultiple(request: PushMultipleRequest): Promise<PushMultipleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushMultipleWithOptions(request, runtime);
  }

  async listMcdpAimWithOptions(request: ListMcdpAimRequest, runtime: $Util.RuntimeOptions): Promise<ListMcdpAimResponse> {
    Util.validateModel(request);
    return $tea.cast<ListMcdpAimResponse>(await this.doRequest("ListMcdpAim", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new ListMcdpAimResponse({}));
  }

  async listMcdpAim(request: ListMcdpAimRequest): Promise<ListMcdpAimResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcdpAimWithOptions(request, runtime);
  }

  async saveMgsApirestWithOptions(request: SaveMgsApirestRequest, runtime: $Util.RuntimeOptions): Promise<SaveMgsApirestResponse> {
    Util.validateModel(request);
    return $tea.cast<SaveMgsApirestResponse>(await this.doRequest("SaveMgsApirest", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new SaveMgsApirestResponse({}));
  }

  async saveMgsApirest(request: SaveMgsApirestRequest): Promise<SaveMgsApirestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveMgsApirestWithOptions(request, runtime);
  }

  async queryMgsTestreqbodyautogenWithOptions(request: QueryMgsTestreqbodyautogenRequest, runtime: $Util.RuntimeOptions): Promise<QueryMgsTestreqbodyautogenResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMgsTestreqbodyautogenResponse>(await this.doRequest("QueryMgsTestreqbodyautogen", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new QueryMgsTestreqbodyautogenResponse({}));
  }

  async queryMgsTestreqbodyautogen(request: QueryMgsTestreqbodyautogenRequest): Promise<QueryMgsTestreqbodyautogenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMgsTestreqbodyautogenWithOptions(request, runtime);
  }

  async queryMgsApirestWithOptions(request: QueryMgsApirestRequest, runtime: $Util.RuntimeOptions): Promise<QueryMgsApirestResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMgsApirestResponse>(await this.doRequest("QueryMgsApirest", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new QueryMgsApirestResponse({}));
  }

  async queryMgsApirest(request: QueryMgsApirestRequest): Promise<QueryMgsApirestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMgsApirestWithOptions(request, runtime);
  }

  async listMgsApiWithOptions(request: ListMgsApiRequest, runtime: $Util.RuntimeOptions): Promise<ListMgsApiResponse> {
    Util.validateModel(request);
    return $tea.cast<ListMgsApiResponse>(await this.doRequest("ListMgsApi", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new ListMgsApiResponse({}));
  }

  async listMgsApi(request: ListMgsApiRequest): Promise<ListMgsApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMgsApiWithOptions(request, runtime);
  }

  async queryMgsApipageWithOptions(request: QueryMgsApipageRequest, runtime: $Util.RuntimeOptions): Promise<QueryMgsApipageResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMgsApipageResponse>(await this.doRequest("QueryMgsApipage", "HTTPS", "POST", "2019-08-21", "AK", null, $tea.toMap(request), runtime), new QueryMgsApipageResponse({}));
  }

  async queryMgsApipage(request: QueryMgsApipageRequest): Promise<QueryMgsApipageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMgsApipageWithOptions(request, runtime);
  }

  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

}
