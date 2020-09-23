// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ListQualityResultsByEntityRequest extends $tea.Model {
  entityId: number;
  startDate: string;
  endDate: string;
  pageSize: number;
  pageNumber: number;
  projectName: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      startDate: 'string',
      endDate: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponse extends $tea.Model {
  requestId: string;
  qualityResults: ListQualityResultsByEntityResponseQualityResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      qualityResults: 'QualityResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      qualityResults: ListQualityResultsByEntityResponseQualityResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeTypeListInfoRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  pageNumber: number;
  pageSize: number;
  keyword?: string;
  locale?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyword: 'Keyword',
      locale: 'Locale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      keyword: 'string',
      locale: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeTypeListInfoResponse extends $tea.Model {
  requestId: string;
  nodeTypeInfoList: GetNodeTypeListInfoResponseNodeTypeInfoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nodeTypeInfoList: 'NodeTypeInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nodeTypeInfoList: GetNodeTypeListInfoResponseNodeTypeInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStatusCountRequest extends $tea.Model {
  projectId: number;
  projectEnv: string;
  bizDate: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectEnv: 'ProjectEnv',
      bizDate: 'BizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectEnv: 'string',
      bizDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStatusCountResponse extends $tea.Model {
  requestId: string;
  statusCount: GetInstanceStatusCountResponseStatusCount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusCount: 'StatusCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusCount: GetInstanceStatusCountResponseStatusCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceFoldersRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId: number;
  tenantId: number;
  groupId?: string;
  folderNameKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
      groupId: 'GroupId',
      folderNameKeyword: 'FolderNameKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
      groupId: 'string',
      folderNameKeyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceFoldersResponse extends $tea.Model {
  requestId: string;
  folderPagingResult: ListDataServiceFoldersResponseFolderPagingResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      folderPagingResult: 'FolderPagingResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      folderPagingResult: ListDataServiceFoldersResponseFolderPagingResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleRequest extends $tea.Model {
  ruleId: number;
  startDate: string;
  endDate: string;
  pageSize: number;
  pageNumber: number;
  projectName: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      startDate: 'string',
      endDate: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponse extends $tea.Model {
  requestId: string;
  qualityResults: ListQualityResultsByRuleResponseQualityResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      qualityResults: 'QualityResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      qualityResults: ListQualityResultsByRuleResponseQualityResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDBRequest extends $tea.Model {
  projectId: number;
  dataSourceType: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDBResponse extends $tea.Model {
  requestId: string;
  databaseInfo: ListMetaDBResponseDatabaseInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      databaseInfo: 'DatabaseInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      databaseInfo: ListMetaDBResponseDatabaseInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequest extends $tea.Model {
  hasPart?: number;
  columns: CreateTableRequestColumns[];
  isView?: number;
  visibility?: number;
  lifeCycle?: number;
  categoryId?: number;
  logicalLevelId?: number;
  physicsLevelId?: number;
  externalTableType?: string;
  location?: string;
  projectId?: number;
  tableName: string;
  endpoint?: string;
  envType?: number;
  themes?: CreateTableRequestThemes[];
  appGuid?: string;
  static names(): { [key: string]: string } {
    return {
      hasPart: 'HasPart',
      columns: 'Columns',
      isView: 'IsView',
      visibility: 'Visibility',
      lifeCycle: 'LifeCycle',
      categoryId: 'CategoryId',
      logicalLevelId: 'LogicalLevelId',
      physicsLevelId: 'PhysicsLevelId',
      externalTableType: 'ExternalTableType',
      location: 'Location',
      projectId: 'ProjectId',
      tableName: 'TableName',
      endpoint: 'Endpoint',
      envType: 'EnvType',
      themes: 'Themes',
      appGuid: 'AppGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPart: 'number',
      columns: { 'type': 'array', 'itemType': CreateTableRequestColumns },
      isView: 'number',
      visibility: 'number',
      lifeCycle: 'number',
      categoryId: 'number',
      logicalLevelId: 'number',
      physicsLevelId: 'number',
      externalTableType: 'string',
      location: 'string',
      projectId: 'number',
      tableName: 'string',
      endpoint: 'string',
      envType: 'number',
      themes: { 'type': 'array', 'itemType': CreateTableRequestThemes },
      appGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableResponse extends $tea.Model {
  requestId: string;
  taskInfo: CreateTableResponseTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: CreateTableResponseTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableThemeRequest extends $tea.Model {
  projectId?: number;
  level: number;
  name: string;
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      level: 'Level',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      level: 'number',
      name: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableThemeResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  themeId: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      themeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceErrorRankRequest extends $tea.Model {
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceErrorRankResponse extends $tea.Model {
  requestId: string;
  instanceErrorRank: GetInstanceErrorRankResponseInstanceErrorRank;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceErrorRank: 'InstanceErrorRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceErrorRank: GetInstanceErrorRankResponseInstanceErrorRank,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDDLJobStatusRequest extends $tea.Model {
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDDLJobStatusResponse extends $tea.Model {
  requestId: string;
  data: GetDDLJobStatusResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetDDLJobStatusResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsumeTimeRankRequest extends $tea.Model {
  projectId: number;
  bizdate: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      bizdate: 'Bizdate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      bizdate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsumeTimeRankResponse extends $tea.Model {
  requestId: string;
  instanceConsumeTimeRank: GetInstanceConsumeTimeRankResponseInstanceConsumeTimeRank;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceConsumeTimeRank: 'InstanceConsumeTimeRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceConsumeTimeRank: GetInstanceConsumeTimeRankResponseInstanceConsumeTimeRank,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiAuthorityRequest extends $tea.Model {
  tenantId: number;
  projectId: number;
  apiId: number;
  authorizedProjectId: number;
  endTime: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiId: 'ApiId',
      authorizedProjectId: 'AuthorizedProjectId',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiId: 'number',
      authorizedProjectId: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiAuthorityResponse extends $tea.Model {
  success: boolean;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataServiceApiAuthorityRequest extends $tea.Model {
  tenantId: number;
  projectId: number;
  apiId: number;
  authorizedProjectId: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiId: 'ApiId',
      authorizedProjectId: 'AuthorizedProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiId: 'number',
      authorizedProjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataServiceApiAuthorityResponse extends $tea.Model {
  success: boolean;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceGroupRequest extends $tea.Model {
  tenantId: number;
  projectId: number;
  apiGatewayGroupId: string;
  groupName: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiGatewayGroupId: 'ApiGatewayGroupId',
      groupName: 'GroupName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiGatewayGroupId: 'string',
      groupName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceGroupResponse extends $tea.Model {
  groupId: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaTableRequest extends $tea.Model {
  projectId?: number;
  tableName?: string;
  envType?: number;
  tableGuid?: string;
  newOwnerId?: string;
  addedLabels?: string;
  removedLabels?: string;
  categoryId?: number;
  visibility?: number;
  caption?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      tableName: 'TableName',
      envType: 'EnvType',
      tableGuid: 'TableGuid',
      newOwnerId: 'NewOwnerId',
      addedLabels: 'AddedLabels',
      removedLabels: 'RemovedLabels',
      categoryId: 'CategoryId',
      visibility: 'Visibility',
      caption: 'Caption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      tableName: 'string',
      envType: 'number',
      tableGuid: 'string',
      newOwnerId: 'string',
      addedLabels: 'string',
      removedLabels: 'string',
      categoryId: 'number',
      visibility: 'number',
      caption: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaTableResponse extends $tea.Model {
  requestId: string;
  updateResult: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      updateResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceCountTrendRequest extends $tea.Model {
  projectId: number;
  beginDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceCountTrendResponse extends $tea.Model {
  requestId: string;
  instanceCounts: GetInstanceCountTrendResponseInstanceCounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceCounts: 'InstanceCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceCounts: { 'type': 'array', 'itemType': GetInstanceCountTrendResponseInstanceCounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableRequest extends $tea.Model {
  projectId?: number;
  tableName: string;
  envType?: number;
  appGuid?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      tableName: 'TableName',
      envType: 'EnvType',
      appGuid: 'AppGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      tableName: 'string',
      envType: 'number',
      appGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableResponse extends $tea.Model {
  requestId: string;
  taskInfo: DeleteTableResponseTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: DeleteTableResponseTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableThemeRequest extends $tea.Model {
  projectId?: number;
  parentId?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      parentId: 'ParentId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      parentId: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableThemeResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: ListTableThemeResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: ListTableThemeResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendRequest extends $tea.Model {
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponse extends $tea.Model {
  requestId: string;
  instanceStatusTrend: GetSuccessInstanceTrendResponseInstanceStatusTrend;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceStatusTrend: 'InstanceStatusTrend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceStatusTrend: GetSuccessInstanceTrendResponseInstanceStatusTrend,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableRequest extends $tea.Model {
  hasPart?: number;
  columns: UpdateTableRequestColumns[];
  isView?: number;
  visibility?: number;
  lifeCycle?: number;
  categoryId?: number;
  logicalLevelId?: number;
  physicsLevelId?: number;
  externalTableType?: string;
  location?: string;
  projectId?: number;
  tableName: string;
  endpoint?: string;
  envType?: number;
  themes?: UpdateTableRequestThemes[];
  appGuid?: string;
  createIfNotExists?: boolean;
  static names(): { [key: string]: string } {
    return {
      hasPart: 'HasPart',
      columns: 'Columns',
      isView: 'IsView',
      visibility: 'Visibility',
      lifeCycle: 'LifeCycle',
      categoryId: 'CategoryId',
      logicalLevelId: 'LogicalLevelId',
      physicsLevelId: 'PhysicsLevelId',
      externalTableType: 'ExternalTableType',
      location: 'Location',
      projectId: 'ProjectId',
      tableName: 'TableName',
      endpoint: 'Endpoint',
      envType: 'EnvType',
      themes: 'Themes',
      appGuid: 'AppGuid',
      createIfNotExists: 'CreateIfNotExists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPart: 'number',
      columns: { 'type': 'array', 'itemType': UpdateTableRequestColumns },
      isView: 'number',
      visibility: 'number',
      lifeCycle: 'number',
      categoryId: 'number',
      logicalLevelId: 'number',
      physicsLevelId: 'number',
      externalTableType: 'string',
      location: 'string',
      projectId: 'number',
      tableName: 'string',
      endpoint: 'string',
      envType: 'number',
      themes: { 'type': 'array', 'itemType': UpdateTableRequestThemes },
      appGuid: 'string',
      createIfNotExists: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableResponse extends $tea.Model {
  requestId: string;
  taskInfo: UpdateTableResponseTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: UpdateTableResponseTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceFolderRequest extends $tea.Model {
  tenantId: number;
  projectId: number;
  folderId: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      folderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceFolderResponse extends $tea.Model {
  requestId: string;
  folder: GetDataServiceFolderResponseFolder;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      folder: GetDataServiceFolderResponseFolder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableLevelRequest extends $tea.Model {
  projectId: number;
  levelType: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      levelType: 'LevelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      levelType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableLevelResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  tableLevelInfo: ListTableLevelResponseTableLevelInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      tableLevelInfo: 'TableLevelInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      tableLevelInfo: ListTableLevelResponseTableLevelInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceGroupsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId: number;
  tenantId: number;
  groupNameKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
      groupNameKeyword: 'GroupNameKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
      groupNameKeyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceGroupsResponse extends $tea.Model {
  requestId: string;
  groupPagingResult: ListDataServiceGroupsResponseGroupPagingResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groupPagingResult: 'GroupPagingResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groupPagingResult: ListDataServiceGroupsResponseGroupPagingResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableThemeRequest extends $tea.Model {
  projectId?: number;
  name: string;
  themeId: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      themeId: 'ThemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      name: 'string',
      themeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableThemeResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  updateResult: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      updateResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceFolderRequest extends $tea.Model {
  tenantId: number;
  projectId: number;
  folderName: string;
  parentId: number;
  groupId: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      folderName: 'FolderName',
      parentId: 'ParentId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      folderName: 'string',
      parentId: 'number',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceFolderResponse extends $tea.Model {
  folderId: number;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceGroupRequest extends $tea.Model {
  tenantId: number;
  projectId: number;
  groupId: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceGroupResponse extends $tea.Model {
  requestId: string;
  group: GetDataServiceGroupResponseGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      group: GetDataServiceGroupResponseGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableLevelRequest extends $tea.Model {
  projectId?: number;
  levelType: number;
  name: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      levelType: 'LevelType',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      levelType: 'number',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableLevelResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  levelId: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      levelId: 'LevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      levelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaTableIntroWikiRequest extends $tea.Model {
  tableGuid: string;
  content: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaTableIntroWikiResponse extends $tea.Model {
  requestId: string;
  updateResult: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      updateResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableLevelRequest extends $tea.Model {
  levelId: number;
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      levelId: 'LevelId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableLevelResponse extends $tea.Model {
  requestId: string;
  deleteResult: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deleteResult: 'DeleteResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deleteResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableLevelRequest extends $tea.Model {
  projectId: number;
  levelType?: number;
  name?: string;
  description?: string;
  levelId: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      levelType: 'LevelType',
      name: 'Name',
      description: 'Description',
      levelId: 'LevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      levelType: 'number',
      name: 'string',
      description: 'string',
      levelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableLevelResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  updateResult: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      updateResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableThemeRequest extends $tea.Model {
  themeId: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      themeId: 'ThemeId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      themeId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableThemeResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  deleteResult: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      deleteResult: 'DeleteResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      deleteResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProgramTypeCountRequest extends $tea.Model {
  projectId: number;
  projectEnv: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProgramTypeCountResponse extends $tea.Model {
  requestId: string;
  programTypeAndCounts: ListProgramTypeCountResponseProgramTypeAndCounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      programTypeAndCounts: 'ProgramTypeAndCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      programTypeAndCounts: { 'type': 'array', 'itemType': ListProgramTypeCountResponseProgramTypeAndCounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableModelInfoRequest extends $tea.Model {
  firstLevelThemeId?: number;
  secondLevelThemeId?: number;
  levelId?: number;
  tableGuid: string;
  levelType?: number;
  static names(): { [key: string]: string } {
    return {
      firstLevelThemeId: 'FirstLevelThemeId',
      secondLevelThemeId: 'SecondLevelThemeId',
      levelId: 'LevelId',
      tableGuid: 'TableGuid',
      levelType: 'LevelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstLevelThemeId: 'number',
      secondLevelThemeId: 'number',
      levelId: 'number',
      tableGuid: 'string',
      levelType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableModelInfoResponse extends $tea.Model {
  requestId: string;
  updateResult: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      updateResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  requestId: string;
  pageResult: ListProjectsResponsePageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageResult: 'PageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageResult: ListProjectsResponsePageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersRequest extends $tea.Model {
  projectId: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponse extends $tea.Model {
  requestId: string;
  data: ListProjectMembersResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListProjectMembersResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectMemberRequest extends $tea.Model {
  projectId: number;
  userId: string;
  clientToken?: string;
  roleCode?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      userId: 'UserId',
      clientToken: 'ClientToken',
      roleCode: 'RoleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      userId: 'string',
      clientToken: 'string',
      roleCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectMemberResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesRequest extends $tea.Model {
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponse extends $tea.Model {
  requestId: string;
  projectRoleList: ListProjectRolesResponseProjectRoleList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectRoleList: 'ProjectRoleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectRoleList: { 'type': 'array', 'itemType': ListProjectRolesResponseProjectRoleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProjectMemberToRoleRequest extends $tea.Model {
  projectId: number;
  userId: string;
  roleCode: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      userId: 'UserId',
      roleCode: 'RoleCode',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      userId: 'string',
      roleCode: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProjectMemberToRoleResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveProjectMemberFromRoleRequest extends $tea.Model {
  projectId: number;
  userId: string;
  roleCode: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      userId: 'UserId',
      roleCode: 'RoleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      userId: 'string',
      roleCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveProjectMemberFromRoleResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectMemberRequest extends $tea.Model {
  projectId: number;
  userId: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectMemberResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDagComplementRequest extends $tea.Model {
  projectEnv: string;
  startBizDate: string;
  name: string;
  rootNodeId: number;
  includeNodeIds: string;
  excludeNodeIds?: string;
  bizBeginTime?: string;
  bizEndTime?: string;
  parallelism: boolean;
  endBizDate: string;
  nodeParams?: string;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      startBizDate: 'StartBizDate',
      name: 'Name',
      rootNodeId: 'RootNodeId',
      includeNodeIds: 'IncludeNodeIds',
      excludeNodeIds: 'ExcludeNodeIds',
      bizBeginTime: 'BizBeginTime',
      bizEndTime: 'BizEndTime',
      parallelism: 'Parallelism',
      endBizDate: 'EndBizDate',
      nodeParams: 'NodeParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      startBizDate: 'string',
      name: 'string',
      rootNodeId: 'number',
      includeNodeIds: 'string',
      excludeNodeIds: 'string',
      bizBeginTime: 'string',
      bizEndTime: 'string',
      parallelism: 'boolean',
      endBizDate: 'string',
      nodeParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDagComplementResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: number[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDagTestRequest extends $tea.Model {
  projectEnv: string;
  bizdate: string;
  name: string;
  nodeId: number;
  nodeParams?: string;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      bizdate: 'Bizdate',
      name: 'Name',
      nodeId: 'NodeId',
      nodeParams: 'NodeParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      bizdate: 'string',
      name: 'string',
      nodeId: 'number',
      nodeParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDagTestResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalcEnginesRequest extends $tea.Model {
  projectId: number;
  name?: string;
  calcEngineType: string;
  envType?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      calcEngineType: 'CalcEngineType',
      envType: 'EnvType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      name: 'string',
      calcEngineType: 'string',
      envType: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalcEnginesResponse extends $tea.Model {
  httpStatusCode: number;
  success: boolean;
  requestId: string;
  data: ListCalcEnginesResponseData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      success: 'boolean',
      requestId: 'string',
      data: ListCalcEnginesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsRequest extends $tea.Model {
  projectId: number;
  name?: string;
  connectionType?: string;
  subType?: string;
  status?: string;
  envType?: number;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      connectionType: 'ConnectionType',
      subType: 'SubType',
      status: 'Status',
      envType: 'EnvType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      name: 'string',
      connectionType: 'string',
      subType: 'string',
      status: 'string',
      envType: 'number',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponse extends $tea.Model {
  httpStatusCode: number;
  success: boolean;
  requestId: string;
  data: ListConnectionsResponseData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      success: 'boolean',
      requestId: 'string',
      data: ListConnectionsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionRequest extends $tea.Model {
  description?: string;
  envType?: number;
  content?: string;
  status?: string;
  connectionId: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      envType: 'EnvType',
      content: 'Content',
      status: 'Status',
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      envType: 'number',
      content: 'string',
      status: 'string',
      connectionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionResponse extends $tea.Model {
  success: boolean;
  httpStatusCode: string;
  data: boolean;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      httpStatusCode: 'string',
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectionRequest extends $tea.Model {
  connectionId: number;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectionResponse extends $tea.Model {
  success: boolean;
  httpStatusCode: string;
  data: boolean;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      httpStatusCode: 'string',
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectDetailRequest extends $tea.Model {
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectDetailResponse extends $tea.Model {
  httpStatusCode: number;
  success: boolean;
  requestId: string;
  data: GetProjectDetailResponseData;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      success: 'boolean',
      requestId: 'string',
      data: GetProjectDetailResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsRequest extends $tea.Model {
  resourceGroupType: number;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupType: 'ResourceGroupType',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupType: 'number',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponse extends $tea.Model {
  httpStatusCode: number;
  success: boolean;
  requestId: string;
  data: ListResourceGroupsResponseData[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      success: 'boolean',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListResourceGroupsResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequest extends $tea.Model {
  projectId: number;
  name: string;
  description?: string;
  connectionType: string;
  subType?: string;
  envType: number;
  content: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      description: 'Description',
      connectionType: 'ConnectionType',
      subType: 'SubType',
      envType: 'EnvType',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      name: 'string',
      description: 'string',
      connectionType: 'string',
      subType: 'string',
      envType: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionResponse extends $tea.Model {
  success: boolean;
  httpStatusCode: string;
  data: number;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      httpStatusCode: 'string',
      data: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApplicationRequest extends $tea.Model {
  tenantId: number;
  projectId: number;
  applicationId: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      applicationId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApplicationResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: GetDataServiceApplicationResponseData;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: GetDataServiceApplicationResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApplicationsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectIdList: string;
  tenantId: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectIdList: 'ProjectIdList',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectIdList: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApplicationsResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: ListDataServiceApplicationsResponseData;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: ListDataServiceApplicationsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeOnBaselineRequest extends $tea.Model {
  baselineId: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeOnBaselineResponse extends $tea.Model {
  success: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: GetNodeOnBaselineResponseData[];
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetNodeOnBaselineResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineConfigsRequest extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  owner?: string;
  projectId: number;
  priority?: string;
  useflag?: boolean;
  baselineTypes?: string;
  searchText?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      owner: 'Owner',
      projectId: 'ProjectId',
      priority: 'Priority',
      useflag: 'Useflag',
      baselineTypes: 'BaselineTypes',
      searchText: 'SearchText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      owner: 'string',
      projectId: 'number',
      priority: 'string',
      useflag: 'boolean',
      baselineTypes: 'string',
      searchText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineConfigsResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: ListBaselineConfigsResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: ListBaselineConfigsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableChangeLogRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tableGuid: string;
  changeType?: string;
  objectType?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableGuid: 'TableGuid',
      changeType: 'ChangeType',
      objectType: 'ObjectType',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tableGuid: 'string',
      changeType: 'string',
      objectType: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableChangeLogResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: GetMetaTableChangeLogResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: GetMetaTableChangeLogResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableOutputRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tableGuid: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableGuid: 'TableGuid',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tableGuid: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableOutputResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: GetMetaTableOutputResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: GetMetaTableOutputResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tableGuid?: string;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableGuid: 'TableGuid',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tableGuid: 'string',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: GetMetaTablePartitionResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: GetMetaTablePartitionResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableFullInfoRequest extends $tea.Model {
  tableGuid?: string;
  pageNum?: number;
  pageSize?: number;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      pageNum: 'number',
      pageSize: 'number',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableFullInfoResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: GetMetaTableFullInfoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: GetMetaTableFullInfoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileVersionRequest extends $tea.Model {
  fileId: number;
  projectId?: number;
  projectIdentifier?: string;
  fileVersion: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      fileVersion: 'FileVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
      fileVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileVersionResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  data: GetFileVersionResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      data: GetFileVersionResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableBasicInfoRequest extends $tea.Model {
  tableGuid?: string;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableBasicInfoResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: GetMetaTableBasicInfoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: GetMetaTableBasicInfoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnRequest extends $tea.Model {
  tableGuid?: string;
  pageNum?: number;
  pageSize?: number;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      pageNum: 'number',
      pageSize: 'number',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: GetMetaTableColumnResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: GetMetaTableColumnResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBInfoRequest extends $tea.Model {
  appGuid?: string;
  clusterId?: string;
  databaseName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      clusterId: 'string',
      databaseName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBInfoResponse extends $tea.Model {
  requestId: string;
  data: GetMetaDBInfoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetMetaDBInfoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaCategoryRequest extends $tea.Model {
  parentCategoryId?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      parentCategoryId: 'ParentCategoryId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentCategoryId: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaCategoryResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: GetMetaCategoryResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: GetMetaCategoryResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesRequest extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  beginTime: string;
  endTime: string;
  remindId?: number;
  alertMethods?: string;
  alertUser?: string;
  alertRuleTypes?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      remindId: 'RemindId',
      alertMethods: 'AlertMethods',
      alertUser: 'AlertUser',
      alertRuleTypes: 'AlertRuleTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      beginTime: 'string',
      endTime: 'string',
      remindId: 'number',
      alertMethods: 'string',
      alertUser: 'string',
      alertRuleTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: ListAlertMessagesResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: ListAlertMessagesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineConfigRequest extends $tea.Model {
  baselineId: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineConfigResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: GetBaselineConfigResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: GetBaselineConfigResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMetaTablesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  appGuid?: string;
  keyword: string;
  entityType?: number;
  clusterId?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      appGuid: 'AppGuid',
      keyword: 'Keyword',
      entityType: 'EntityType',
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      appGuid: 'string',
      keyword: 'string',
      entityType: 'number',
      clusterId: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMetaTablesResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: SearchMetaTablesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: SearchMetaTablesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableListByCategoryRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  categoryId: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableListByCategoryResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: GetMetaTableListByCategoryResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: GetMetaTableListByCategoryResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetaCategoryRequest extends $tea.Model {
  categoryId: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetaCategoryResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaCategoryRequest extends $tea.Model {
  name?: string;
  comment?: string;
  categoryId: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      comment: 'Comment',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      comment: 'string',
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetaCategoryResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsRequest extends $tea.Model {
  beginTime: string;
  endTime: string;
  topicTypes?: string;
  topicStatuses?: string;
  nodeId?: number;
  instanceId?: number;
  owner?: string;
  pageNumber: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      topicTypes: 'TopicTypes',
      topicStatuses: 'TopicStatuses',
      nodeId: 'NodeId',
      instanceId: 'InstanceId',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      topicTypes: 'string',
      topicStatuses: 'string',
      nodeId: 'number',
      instanceId: 'number',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: ListTopicsResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: ListTopicsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileVersionsRequest extends $tea.Model {
  fileId: number;
  projectId?: number;
  projectIdentifier?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileVersionsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  data: ListFileVersionsResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      data: ListFileVersionsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetaCategoryRequest extends $tea.Model {
  name: string;
  comment?: string;
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      comment: 'Comment',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      comment: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetaCategoryResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: CreateMetaCategoryResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: CreateMetaCategoryResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeIORequest extends $tea.Model {
  nodeId: number;
  projectEnv: string;
  ioType: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
      ioType: 'IoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      projectEnv: 'string',
      ioType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeIOResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: ListNodeIOResponseData[];
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListNodeIOResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicInfluenceRequest extends $tea.Model {
  topicId: number;
  static names(): { [key: string]: string } {
    return {
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicInfluenceResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: GetTopicInfluenceResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: GetTopicInfluenceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicRequest extends $tea.Model {
  topicId: number;
  static names(): { [key: string]: string } {
    return {
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: GetTopicResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: GetTopicResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFromMetaCategoryRequest extends $tea.Model {
  categoryId: number;
  tableGuid: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFromMetaCategoryResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeRequest extends $tea.Model {
  nodeId: number;
  projectEnv: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: GetNodeResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: GetNodeResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $tea.Model {
  owner?: string;
  bizName?: string;
  programType?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId: number;
  projectEnv: string;
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      bizName: 'BizName',
      programType: 'ProgramType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectEnv: 'ProjectEnv',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      bizName: 'string',
      programType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectEnv: 'string',
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponse extends $tea.Model {
  success: boolean;
  httpStatusCode: number;
  errorCode: string;
  errorMessage: string;
  requestId: string;
  data: ListNodesResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      httpStatusCode: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      data: ListNodesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeCodeRequest extends $tea.Model {
  nodeId: number;
  projectEnv: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeCodeResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstablishRelationTableToBusinessRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  businessId: string;
  tableGuid: string;
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      businessId: 'BusinessId',
      tableGuid: 'TableGuid',
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      businessId: 'string',
      tableGuid: 'string',
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstablishRelationTableToBusinessResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataServiceApiRequest extends $tea.Model {
  tenantId: number;
  projectId: number;
  apiId: number;
  requestMethod: number;
  responseContentType: number;
  timeout: number;
  visibleRange: number;
  protocols: string;
  wizardDetails?: string;
  scriptDetails?: string;
  registrationDetails?: string;
  apiPath: string;
  apiDescription: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiId: 'ApiId',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      protocols: 'Protocols',
      wizardDetails: 'WizardDetails',
      scriptDetails: 'ScriptDetails',
      registrationDetails: 'RegistrationDetails',
      apiPath: 'ApiPath',
      apiDescription: 'ApiDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiId: 'number',
      requestMethod: 'number',
      responseContentType: 'number',
      timeout: 'number',
      visibleRange: 'number',
      protocols: 'string',
      wizardDetails: 'string',
      scriptDetails: 'string',
      registrationDetails: 'string',
      apiPath: 'string',
      apiDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataServiceApiResponse extends $tea.Model {
  data: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfFileRequest extends $tea.Model {
  fileFolderPath?: string;
  projectId?: number;
  functionType: string;
  className: string;
  resources: string;
  udfDescription?: string;
  cmdDescription?: string;
  parameterDescription?: string;
  returnValue?: string;
  example?: string;
  projectIdentifier?: string;
  fileId: string;
  static names(): { [key: string]: string } {
    return {
      fileFolderPath: 'FileFolderPath',
      projectId: 'ProjectId',
      functionType: 'FunctionType',
      className: 'ClassName',
      resources: 'Resources',
      udfDescription: 'UdfDescription',
      cmdDescription: 'CmdDescription',
      parameterDescription: 'ParameterDescription',
      returnValue: 'ReturnValue',
      example: 'Example',
      projectIdentifier: 'ProjectIdentifier',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileFolderPath: 'string',
      projectId: 'number',
      functionType: 'string',
      className: 'string',
      resources: 'string',
      udfDescription: 'string',
      cmdDescription: 'string',
      parameterDescription: 'string',
      returnValue: 'string',
      example: 'string',
      projectIdentifier: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfFileResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfFileRequest extends $tea.Model {
  fileFolderPath?: string;
  projectId?: number;
  fileName: string;
  functionType: string;
  className: string;
  resources: string;
  udfDescription?: string;
  cmdDescription?: string;
  parameterDescription?: string;
  returnValue?: string;
  example?: string;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fileFolderPath: 'FileFolderPath',
      projectId: 'ProjectId',
      fileName: 'FileName',
      functionType: 'FunctionType',
      className: 'ClassName',
      resources: 'Resources',
      udfDescription: 'UdfDescription',
      cmdDescription: 'CmdDescription',
      parameterDescription: 'ParameterDescription',
      returnValue: 'ReturnValue',
      example: 'Example',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileFolderPath: 'string',
      projectId: 'number',
      fileName: 'string',
      functionType: 'string',
      className: 'string',
      resources: 'string',
      udfDescription: 'string',
      cmdDescription: 'string',
      parameterDescription: 'string',
      returnValue: 'string',
      example: 'string',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfFileResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  data: number;
  httpStatusCode: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      data: 'number',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesRequest extends $tea.Model {
  fileFolderPath?: string;
  projectId?: number;
  keyword?: string;
  projectIdentifier?: string;
  pageNumber?: number;
  pageSize?: number;
  useType?: string;
  fileTypes?: string;
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      fileFolderPath: 'FileFolderPath',
      projectId: 'ProjectId',
      keyword: 'Keyword',
      projectIdentifier: 'ProjectIdentifier',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      useType: 'UseType',
      fileTypes: 'FileTypes',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileFolderPath: 'string',
      projectId: 'number',
      keyword: 'string',
      projectIdentifier: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      useType: 'string',
      fileTypes: 'string',
      owner: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  data: ListFilesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      data: ListFilesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedApisRequest extends $tea.Model {
  projectId: number;
  pageNumber?: number;
  pageSize?: number;
  tenantId: number;
  apiNameKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      apiNameKeyword: 'ApiNameKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      tenantId: 'number',
      apiNameKeyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedApisResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: ListDataServiceAuthorizedApisResponseData;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: ListDataServiceAuthorizedApisResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileRequest extends $tea.Model {
  fileFolderPath?: string;
  projectId?: number;
  fileName?: string;
  fileDescription?: string;
  content?: string;
  autoRerunTimes?: number;
  autoRerunIntervalMillis?: number;
  rerunMode?: string;
  stop?: boolean;
  paraValue?: string;
  startEffectDate?: number;
  endEffectDate?: number;
  cronExpress?: string;
  cycleType?: string;
  dependentType?: string;
  dependentNodeIdList?: string;
  inputList?: string;
  projectIdentifier?: string;
  fileId: number;
  outputList?: string;
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fileFolderPath: 'FileFolderPath',
      projectId: 'ProjectId',
      fileName: 'FileName',
      fileDescription: 'FileDescription',
      content: 'Content',
      autoRerunTimes: 'AutoRerunTimes',
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      rerunMode: 'RerunMode',
      stop: 'Stop',
      paraValue: 'ParaValue',
      startEffectDate: 'StartEffectDate',
      endEffectDate: 'EndEffectDate',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentType: 'DependentType',
      dependentNodeIdList: 'DependentNodeIdList',
      inputList: 'InputList',
      projectIdentifier: 'ProjectIdentifier',
      fileId: 'FileId',
      outputList: 'OutputList',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileFolderPath: 'string',
      projectId: 'number',
      fileName: 'string',
      fileDescription: 'string',
      content: 'string',
      autoRerunTimes: 'number',
      autoRerunIntervalMillis: 'number',
      rerunMode: 'string',
      stop: 'boolean',
      paraValue: 'string',
      startEffectDate: 'number',
      endEffectDate: 'number',
      cronExpress: 'string',
      cycleType: 'string',
      dependentType: 'string',
      dependentNodeIdList: 'string',
      inputList: 'string',
      projectIdentifier: 'string',
      fileId: 'number',
      outputList: 'string',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  folderId: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  parentFolderPath: string;
  pageNumber: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      parentFolderPath: 'ParentFolderPath',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      parentFolderPath: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  data: ListFoldersResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      data: ListFoldersResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMetaPartitionRequest extends $tea.Model {
  tableGuid?: string;
  partition: string;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      partition: 'Partition',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      partition: 'string',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMetaPartitionResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  folderId: string;
  folderName: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      folderId: 'FolderId',
      folderName: 'FolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      folderId: 'string',
      folderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRemindRequest extends $tea.Model {
  remindId: number;
  static names(): { [key: string]: string } {
    return {
      remindId: 'RemindId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRemindResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddToMetaCategoryRequest extends $tea.Model {
  categoryId: number;
  tableGuid: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddToMetaCategoryResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  projectEnv: string;
  nodeId?: number;
  nodeName?: string;
  owner?: string;
  projectId: number;
  bizName?: string;
  programType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectEnv: 'ProjectEnv',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
      bizName: 'BizName',
      programType: 'ProgramType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectEnv: 'string',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
      bizName: 'string',
      programType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  success: boolean;
  httpStatusCode: number;
  errorCode: string;
  errorMessage: string;
  requestId: string;
  data: ListInstancesResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      httpStatusCode: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      data: ListInstancesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSuccessInstanceRequest extends $tea.Model {
  instanceId: number;
  projectEnv: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSuccessInstanceResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileRequest extends $tea.Model {
  fileFolderPath?: string;
  projectId?: number;
  fileName: string;
  fileDescription?: string;
  fileType: number;
  owner?: string;
  content?: string;
  autoRerunTimes?: number;
  autoRerunIntervalMillis?: number;
  rerunMode?: string;
  stop?: boolean;
  paraValue?: string;
  startEffectDate?: number;
  endEffectDate?: number;
  cronExpress?: string;
  cycleType?: string;
  dependentType?: string;
  dependentNodeIdList?: string;
  inputList: string;
  projectIdentifier?: string;
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fileFolderPath: 'FileFolderPath',
      projectId: 'ProjectId',
      fileName: 'FileName',
      fileDescription: 'FileDescription',
      fileType: 'FileType',
      owner: 'Owner',
      content: 'Content',
      autoRerunTimes: 'AutoRerunTimes',
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      rerunMode: 'RerunMode',
      stop: 'Stop',
      paraValue: 'ParaValue',
      startEffectDate: 'StartEffectDate',
      endEffectDate: 'EndEffectDate',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentType: 'DependentType',
      dependentNodeIdList: 'DependentNodeIdList',
      inputList: 'InputList',
      projectIdentifier: 'ProjectIdentifier',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileFolderPath: 'string',
      projectId: 'number',
      fileName: 'string',
      fileDescription: 'string',
      fileType: 'number',
      owner: 'string',
      content: 'string',
      autoRerunTimes: 'number',
      autoRerunIntervalMillis: 'number',
      rerunMode: 'string',
      stop: 'boolean',
      paraValue: 'string',
      startEffectDate: 'number',
      endEffectDate: 'number',
      cronExpress: 'string',
      cycleType: 'string',
      dependentType: 'string',
      dependentNodeIdList: 'string',
      inputList: 'string',
      projectIdentifier: 'string',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  data: number;
  httpStatusCode: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      data: 'number',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceRequest extends $tea.Model {
  instanceId: number;
  projectEnv: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeInstanceRequest extends $tea.Model {
  instanceId: number;
  projectEnv: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeInstanceResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendInstanceRequest extends $tea.Model {
  instanceId: number;
  projectEnv: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendInstanceResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceRequest extends $tea.Model {
  instanceId: number;
  projectEnv: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesRequest extends $tea.Model {
  projectId: number;
  pageNumber?: number;
  pageSize?: number;
  tenantId: number;
  apiNameKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      apiNameKeyword: 'ApiNameKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      tenantId: 'number',
      apiNameKeyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: ListDataServiceApiAuthoritiesResponseData;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: ListDataServiceApiAuthoritiesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId: number;
  tenantId: number;
  apiNameKeyword?: string;
  apiPathKeyword?: string;
  creatorId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
      apiNameKeyword: 'ApiNameKeyword',
      apiPathKeyword: 'ApiPathKeyword',
      creatorId: 'CreatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
      apiNameKeyword: 'string',
      apiPathKeyword: 'string',
      creatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: ListDataServicePublishedApisResponseData;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: ListDataServicePublishedApisResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLogRequest extends $tea.Model {
  instanceId: number;
  projectEnv: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLogResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  folderPath: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      folderPath: 'FolderPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      folderPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  data: string;
  httpStatusCode: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      data: 'string',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  businessId: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      businessId: 'BusinessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      businessId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  data: GetBusinessResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      data: GetBusinessResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRequest extends $tea.Model {
  instanceId: number;
  projectEnv: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: GetInstanceResponseData;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: GetInstanceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  data: GetFileResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      data: GetFileResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  pageNumber: number;
  pageSize: number;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  data: ListBusinessResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      data: ListBusinessResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBTableListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  appGuid?: string;
  clusterId?: string;
  databaseName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      appGuid: 'AppGuid',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      appGuid: 'string',
      clusterId: 'string',
      databaseName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBTableListResponse extends $tea.Model {
  requestId: string;
  data: GetMetaDBTableListResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetMetaDBTableListResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMetaTableRequest extends $tea.Model {
  tableGuid?: string;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMetaTableResponse extends $tea.Model {
  requestId: string;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  folderId?: string;
  folderPath?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      folderId: 'FolderId',
      folderPath: 'FolderPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      folderId: 'string',
      folderPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  data: GetFolderResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      data: GetFolderResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFileRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  fileId?: number;
  comment?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      fileId: 'FileId',
      comment: 'Comment',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      fileId: 'number',
      comment: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFileResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  data: number;
  httpStatusCode: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      data: 'number',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  businessId: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      businessId: 'BusinessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      businessId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  fileId: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesRequest extends $tea.Model {
  projectName: string;
  entityId: number;
  pageNumber: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      entityId: 'EntityId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      entityId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponse extends $tea.Model {
  errorCode: string;
  success: boolean;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: ListQualityRulesResponseData;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      success: 'boolean',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: ListQualityRulesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRemindRequest extends $tea.Model {
  remindName: string;
  dndEnd?: string;
  remindUnit: string;
  nodeIds?: string;
  baselineIds?: string;
  projectId?: number;
  bizProcessIds?: string;
  remindType: string;
  maxAlertTimes?: number;
  alertInterval?: number;
  detail?: string;
  alertUnit: string;
  alertMethods?: string;
  alertTargets?: string;
  robotUrls?: string;
  static names(): { [key: string]: string } {
    return {
      remindName: 'RemindName',
      dndEnd: 'DndEnd',
      remindUnit: 'RemindUnit',
      nodeIds: 'NodeIds',
      baselineIds: 'BaselineIds',
      projectId: 'ProjectId',
      bizProcessIds: 'BizProcessIds',
      remindType: 'RemindType',
      maxAlertTimes: 'MaxAlertTimes',
      alertInterval: 'AlertInterval',
      detail: 'Detail',
      alertUnit: 'AlertUnit',
      alertMethods: 'AlertMethods',
      alertTargets: 'AlertTargets',
      robotUrls: 'RobotUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindName: 'string',
      dndEnd: 'string',
      remindUnit: 'string',
      nodeIds: 'string',
      baselineIds: 'string',
      projectId: 'number',
      bizProcessIds: 'string',
      remindType: 'string',
      maxAlertTimes: 'number',
      alertInterval: 'number',
      detail: 'string',
      alertUnit: 'string',
      alertMethods: 'string',
      alertTargets: 'string',
      robotUrls: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRemindResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: number;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleRequest extends $tea.Model {
  ruleId: number;
  projectName: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: GetQualityRuleResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: GetQualityRuleResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  deploymentId: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      deploymentId: 'DeploymentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      deploymentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  data: GetDeploymentResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      data: GetDeploymentResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRemindRequest extends $tea.Model {
  remindId: number;
  remindName?: string;
  dndEnd?: string;
  remindUnit?: string;
  nodeIds?: string;
  baselineIds?: string;
  projectId?: number;
  bizProcessIds?: string;
  remindType?: string;
  maxAlertTimes?: number;
  alertInterval?: number;
  detail?: string;
  alertUnit?: string;
  alertMethods?: string;
  alertTargets?: string;
  useFlag?: boolean;
  robotUrls?: string;
  static names(): { [key: string]: string } {
    return {
      remindId: 'RemindId',
      remindName: 'RemindName',
      dndEnd: 'DndEnd',
      remindUnit: 'RemindUnit',
      nodeIds: 'NodeIds',
      baselineIds: 'BaselineIds',
      projectId: 'ProjectId',
      bizProcessIds: 'BizProcessIds',
      remindType: 'RemindType',
      maxAlertTimes: 'MaxAlertTimes',
      alertInterval: 'AlertInterval',
      detail: 'Detail',
      alertUnit: 'AlertUnit',
      alertMethods: 'AlertMethods',
      alertTargets: 'AlertTargets',
      useFlag: 'UseFlag',
      robotUrls: 'RobotUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindId: 'number',
      remindName: 'string',
      dndEnd: 'string',
      remindUnit: 'string',
      nodeIds: 'string',
      baselineIds: 'string',
      projectId: 'number',
      bizProcessIds: 'string',
      remindType: 'string',
      maxAlertTimes: 'number',
      alertInterval: 'number',
      detail: 'string',
      alertUnit: 'string',
      alertMethods: 'string',
      alertTargets: 'string',
      useFlag: 'boolean',
      robotUrls: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRemindResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaColumnLineageRequest extends $tea.Model {
  columnGuid?: string;
  direction: string;
  pageNum?: number;
  pageSize?: number;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  columnName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      columnGuid: 'ColumnGuid',
      direction: 'Direction',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      columnName: 'ColumnName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnGuid: 'string',
      direction: 'string',
      pageNum: 'number',
      pageSize: 'number',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      columnName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaColumnLineageResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: GetMetaColumnLineageResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: GetMetaColumnLineageResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  businessName?: string;
  description?: string;
  owner?: string;
  businessId: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      businessName: 'BusinessName',
      description: 'Description',
      owner: 'Owner',
      businessId: 'BusinessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      businessName: 'string',
      description: 'string',
      owner: 'string',
      businessId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityRuleRequest extends $tea.Model {
  blockType?: number;
  entityId?: number;
  comment?: string;
  checker?: number;
  expectValue?: string;
  id: number;
  trend?: string;
  methodName?: string;
  operator?: string;
  projectName: string;
  property?: string;
  propertyType?: string;
  ruleType?: number;
  whereCondition?: string;
  criticalThreshold?: string;
  warningThreshold?: string;
  templateId?: number;
  ruleName?: string;
  predictType?: number;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      entityId: 'EntityId',
      comment: 'Comment',
      checker: 'Checker',
      expectValue: 'ExpectValue',
      id: 'Id',
      trend: 'Trend',
      methodName: 'MethodName',
      operator: 'Operator',
      projectName: 'ProjectName',
      property: 'Property',
      propertyType: 'PropertyType',
      ruleType: 'RuleType',
      whereCondition: 'WhereCondition',
      criticalThreshold: 'CriticalThreshold',
      warningThreshold: 'WarningThreshold',
      templateId: 'TemplateId',
      ruleName: 'RuleName',
      predictType: 'PredictType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      entityId: 'number',
      comment: 'string',
      checker: 'number',
      expectValue: 'string',
      id: 'number',
      trend: 'string',
      methodName: 'string',
      operator: 'string',
      projectName: 'string',
      property: 'string',
      propertyType: 'string',
      ruleType: 'number',
      whereCondition: 'string',
      criticalThreshold: 'string',
      warningThreshold: 'string',
      templateId: 'number',
      ruleName: 'string',
      predictType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityRuleResponse extends $tea.Model {
  errorCode: string;
  data: boolean;
  success: boolean;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      data: 'Data',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      data: 'boolean',
      success: 'boolean',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRuleRequest extends $tea.Model {
  projectName: string;
  ruleId: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRuleResponse extends $tea.Model {
  errorCode: string;
  data: boolean;
  errorMessage: string;
  success: boolean;
  httpStatusCode: number;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      data: 'boolean',
      errorMessage: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFileRequest extends $tea.Model {
  projectId?: number;
  projectIdentifier?: string;
  fileId: number;
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      fileId: 'FileId',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
      fileId: 'number',
      comment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFileResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorCode: string;
  errorMessage: string;
  data: number;
  httpStatusCode: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      data: 'number',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiRequest extends $tea.Model {
  tenantId: number;
  projectId: number;
  apiId: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: GetDataServiceApiResponseData;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: GetDataServiceApiResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId: number;
  tenantId: number;
  apiNameKeyword?: string;
  apiPathKeyword?: string;
  creatorId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
      apiNameKeyword: 'ApiNameKeyword',
      apiPathKeyword: 'ApiPathKeyword',
      creatorId: 'CreatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
      apiNameKeyword: 'string',
      apiPathKeyword: 'string',
      creatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: ListDataServiceApisResponseData;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: ListDataServiceApisResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiRequest extends $tea.Model {
  projectId: number;
  tenantId: number;
  apiId: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      tenantId: 'TenantId',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      tenantId: 'number',
      apiId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponse extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  data: GetDataServicePublishedApiResponseData;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      data: GetDataServicePublishedApiResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathRequest extends $tea.Model {
  baselineId: number;
  bizdate: string;
  inGroupId: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      bizdate: 'Bizdate',
      inGroupId: 'InGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      bizdate: 'string',
      inGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: GetBaselineKeyPathResponseData[];
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetBaselineKeyPathResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindRequest extends $tea.Model {
  remindId: number;
  static names(): { [key: string]: string } {
    return {
      remindId: 'RemindId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: GetRemindResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: GetRemindResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableIntroWikiRequest extends $tea.Model {
  tableGuid: string;
  wikiVersion?: number;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      wikiVersion: 'WikiVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      wikiVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableIntroWikiResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: GetMetaTableIntroWikiResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: GetMetaTableIntroWikiResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusRequest extends $tea.Model {
  baselineId: number;
  bizdate: string;
  inGroupId: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      bizdate: 'Bizdate',
      inGroupId: 'InGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      bizdate: 'string',
      inGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: GetBaselineStatusResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: GetBaselineStatusResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataServiceApiRequest extends $tea.Model {
  tenantId: number;
  projectId: number;
  apiId: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataServiceApiResponse extends $tea.Model {
  data: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDataServiceApiRequest extends $tea.Model {
  tenantId: number;
  projectId: number;
  apiId: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDataServiceApiResponse extends $tea.Model {
  data: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableLineageRequest extends $tea.Model {
  tableGuid?: string;
  direction: string;
  nextPrimaryKey?: string;
  pageSize?: number;
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      direction: 'Direction',
      nextPrimaryKey: 'NextPrimaryKey',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      direction: 'string',
      nextPrimaryKey: 'string',
      pageSize: 'number',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableLineageResponse extends $tea.Model {
  requestId: string;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  data: GetMetaTableLineageResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      data: GetMetaTableLineageResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineStatusesRequest extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  bizdate: string;
  priority?: string;
  searchText?: string;
  owner?: string;
  topicId?: number;
  finishStatus?: string;
  status?: string;
  baselineTypes?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      bizdate: 'Bizdate',
      priority: 'Priority',
      searchText: 'SearchText',
      owner: 'Owner',
      topicId: 'TopicId',
      finishStatus: 'FinishStatus',
      status: 'Status',
      baselineTypes: 'BaselineTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      bizdate: 'string',
      priority: 'string',
      searchText: 'string',
      owner: 'string',
      topicId: 'number',
      finishStatus: 'string',
      status: 'string',
      baselineTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineStatusesResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: ListBaselineStatusesResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: ListBaselineStatusesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindsRequest extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  founder?: string;
  nodeId?: number;
  remindTypes?: string;
  alertTarget?: string;
  searchText?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      founder: 'Founder',
      nodeId: 'NodeId',
      remindTypes: 'RemindTypes',
      alertTarget: 'AlertTarget',
      searchText: 'SearchText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      founder: 'string',
      nodeId: 'number',
      remindTypes: 'string',
      alertTarget: 'string',
      searchText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindsResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: ListRemindsResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: ListRemindsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityEntityRequest extends $tea.Model {
  entityId: number;
  projectName: string;
  envType: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      projectName: 'ProjectName',
      envType: 'EnvType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      projectName: 'string',
      envType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityEntityResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  data: boolean;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityFollowerRequest extends $tea.Model {
  projectName: string;
  follower: string;
  alarmMode: number;
  entityId: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      follower: 'Follower',
      alarmMode: 'AlarmMode',
      entityId: 'EntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      follower: 'string',
      alarmMode: 'number',
      entityId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityFollowerResponse extends $tea.Model {
  errorCode: string;
  data: number;
  success: boolean;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      data: 'Data',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      data: 'number',
      success: 'boolean',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiRequest extends $tea.Model {
  tenantId: number;
  projectId: number;
  apiName: string;
  groupId: string;
  apiMode: number;
  requestMethod: number;
  responseContentType: number;
  timeout: number;
  visibleRange: number;
  protocols: string;
  wizardDetails?: string;
  scriptDetails?: string;
  registrationDetails?: string;
  apiPath: string;
  apiDescription: string;
  folderId?: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      apiMode: 'ApiMode',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      protocols: 'Protocols',
      wizardDetails: 'WizardDetails',
      scriptDetails: 'ScriptDetails',
      registrationDetails: 'RegistrationDetails',
      apiPath: 'ApiPath',
      apiDescription: 'ApiDescription',
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiName: 'string',
      groupId: 'string',
      apiMode: 'number',
      requestMethod: 'number',
      responseContentType: 'number',
      timeout: 'number',
      visibleRange: 'number',
      protocols: 'string',
      wizardDetails: 'string',
      scriptDetails: 'string',
      registrationDetails: 'string',
      apiPath: 'string',
      apiDescription: 'string',
      folderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiResponse extends $tea.Model {
  data: number;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  success: boolean;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishDataServiceApiRequest extends $tea.Model {
  tenantId: number;
  projectId: number;
  apiId: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      apiId: 'ApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      apiId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishDataServiceApiResponse extends $tea.Model {
  data: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityEntityRequest extends $tea.Model {
  projectName: string;
  tableName: string;
  envType: string;
  matchExpression?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      tableName: 'TableName',
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      tableName: 'string',
      envType: 'string',
      matchExpression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityEntityResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: GetQualityEntityResponseData[];
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetQualityEntityResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityFollowerRequest extends $tea.Model {
  projectName: string;
  entityId: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      entityId: 'EntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      entityId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityFollowerResponse extends $tea.Model {
  errorCode: string;
  success: boolean;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  data: GetQualityFollowerResponseData[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      success: 'boolean',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetQualityFollowerResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityFollowerRequest extends $tea.Model {
  projectName: string;
  followerId: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      followerId: 'FollowerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      followerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityFollowerResponse extends $tea.Model {
  errorCode: string;
  data: boolean;
  success: boolean;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      data: 'Data',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      data: 'boolean',
      success: 'boolean',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityEntityRequest extends $tea.Model {
  projectName: string;
  tableName: string;
  envType: string;
  matchExpression: string;
  entityLevel: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      tableName: 'TableName',
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
      entityLevel: 'EntityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      tableName: 'string',
      envType: 'string',
      matchExpression: 'string',
      entityLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityEntityResponse extends $tea.Model {
  success: boolean;
  data: number;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      data: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRuleRequest extends $tea.Model {
  blockType: number;
  entityId: number;
  comment?: string;
  checker?: number;
  expectValue?: string;
  trend?: string;
  methodName?: string;
  operator?: string;
  projectName: string;
  property?: string;
  propertyType?: string;
  ruleType: number;
  whereCondition?: string;
  criticalThreshold?: string;
  warningThreshold?: string;
  templateId?: number;
  ruleName: string;
  predictType: number;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      entityId: 'EntityId',
      comment: 'Comment',
      checker: 'Checker',
      expectValue: 'ExpectValue',
      trend: 'Trend',
      methodName: 'MethodName',
      operator: 'Operator',
      projectName: 'ProjectName',
      property: 'Property',
      propertyType: 'PropertyType',
      ruleType: 'RuleType',
      whereCondition: 'WhereCondition',
      criticalThreshold: 'CriticalThreshold',
      warningThreshold: 'WarningThreshold',
      templateId: 'TemplateId',
      ruleName: 'RuleName',
      predictType: 'PredictType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'number',
      entityId: 'number',
      comment: 'string',
      checker: 'number',
      expectValue: 'string',
      trend: 'string',
      methodName: 'string',
      operator: 'string',
      projectName: 'string',
      property: 'string',
      propertyType: 'string',
      ruleType: 'number',
      whereCondition: 'string',
      criticalThreshold: 'string',
      warningThreshold: 'string',
      templateId: 'number',
      ruleName: 'string',
      predictType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRuleResponse extends $tea.Model {
  errorCode: string;
  data: string;
  success: boolean;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      data: 'Data',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      data: 'string',
      success: 'boolean',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityFollowerRequest extends $tea.Model {
  projectName: string;
  followerId: number;
  follower: string;
  alarmMode: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      followerId: 'FollowerId',
      follower: 'Follower',
      alarmMode: 'AlarmMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      followerId: 'number',
      follower: 'string',
      alarmMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityFollowerResponse extends $tea.Model {
  errorCode: string;
  data: boolean;
  success: boolean;
  errorMessage: string;
  httpStatusCode: number;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      data: 'Data',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      data: 'boolean',
      success: 'boolean',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRelativeNodeRequest extends $tea.Model {
  envType: string;
  matchExpression: string;
  nodeId: number;
  projectId: number;
  targetNodeProjectName: string;
  projectName: string;
  tableName: string;
  targetNodeProjectId: number;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      targetNodeProjectName: 'TargetNodeProjectName',
      projectName: 'ProjectName',
      tableName: 'TableName',
      targetNodeProjectId: 'TargetNodeProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      matchExpression: 'string',
      nodeId: 'number',
      projectId: 'number',
      targetNodeProjectName: 'string',
      projectName: 'string',
      tableName: 'string',
      targetNodeProjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRelativeNodeResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  data: boolean;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRelativeNodeRequest extends $tea.Model {
  envType: string;
  matchExpression: string;
  nodeId: number;
  projectId: number;
  targetNodeProjectName: string;
  projectName: string;
  tableName: string;
  targetNodeProjectId: number;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      targetNodeProjectName: 'TargetNodeProjectName',
      projectName: 'ProjectName',
      tableName: 'TableName',
      targetNodeProjectId: 'TargetNodeProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      matchExpression: 'string',
      nodeId: 'number',
      projectId: 'number',
      targetNodeProjectName: 'string',
      projectName: 'string',
      tableName: 'string',
      targetNodeProjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRelativeNodeResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorMessage: string;
  httpStatusCode: number;
  data: boolean;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponseQualityResultsRuleChecksReferenceValue extends $tea.Model {
  bizDate: number;
  discreteProperty: string;
  value: number;
  threshold: number;
  singleCheckResult: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      discreteProperty: 'DiscreteProperty',
      value: 'Value',
      threshold: 'Threshold',
      singleCheckResult: 'SingleCheckResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'number',
      discreteProperty: 'string',
      value: 'number',
      threshold: 'number',
      singleCheckResult: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponseQualityResultsRuleChecksSampleValue extends $tea.Model {
  bizDate: number;
  discreteProperty: string;
  value: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      discreteProperty: 'DiscreteProperty',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'number',
      discreteProperty: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponseQualityResultsRuleChecks extends $tea.Model {
  id: number;
  taskId: string;
  entityId: number;
  ruleId: number;
  property: string;
  bizDate: number;
  dateType: string;
  actualExpression: string;
  matchExpression: string;
  blockType: number;
  checkResult: number;
  checkResultStatus: number;
  methodName: string;
  comment: string;
  whereCondition: string;
  beginTime: number;
  endTime: number;
  timeCost: string;
  externalType: string;
  externalId: string;
  discreteCheck: boolean;
  fixedCheck: boolean;
  trend: string;
  warningThreshold: number;
  criticalThreshold: number;
  expectValue: number;
  op: string;
  projectName: string;
  tableName: string;
  templateId: number;
  templateName: string;
  resultString: string;
  checkerId: number;
  checkerType: number;
  ruleName: string;
  isPrediction: boolean;
  upperValue: number;
  lowerValue: number;
  checkerName: string;
  referenceValue: ListQualityResultsByEntityResponseQualityResultsRuleChecksReferenceValue[];
  sampleValue: ListQualityResultsByEntityResponseQualityResultsRuleChecksSampleValue[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      taskId: 'TaskId',
      entityId: 'EntityId',
      ruleId: 'RuleId',
      property: 'Property',
      bizDate: 'BizDate',
      dateType: 'DateType',
      actualExpression: 'ActualExpression',
      matchExpression: 'MatchExpression',
      blockType: 'BlockType',
      checkResult: 'CheckResult',
      checkResultStatus: 'CheckResultStatus',
      methodName: 'MethodName',
      comment: 'Comment',
      whereCondition: 'WhereCondition',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      timeCost: 'TimeCost',
      externalType: 'ExternalType',
      externalId: 'ExternalId',
      discreteCheck: 'DiscreteCheck',
      fixedCheck: 'FixedCheck',
      trend: 'Trend',
      warningThreshold: 'WarningThreshold',
      criticalThreshold: 'CriticalThreshold',
      expectValue: 'ExpectValue',
      op: 'Op',
      projectName: 'ProjectName',
      tableName: 'TableName',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      resultString: 'ResultString',
      checkerId: 'CheckerId',
      checkerType: 'CheckerType',
      ruleName: 'RuleName',
      isPrediction: 'IsPrediction',
      upperValue: 'UpperValue',
      lowerValue: 'LowerValue',
      checkerName: 'CheckerName',
      referenceValue: 'ReferenceValue',
      sampleValue: 'SampleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      taskId: 'string',
      entityId: 'number',
      ruleId: 'number',
      property: 'string',
      bizDate: 'number',
      dateType: 'string',
      actualExpression: 'string',
      matchExpression: 'string',
      blockType: 'number',
      checkResult: 'number',
      checkResultStatus: 'number',
      methodName: 'string',
      comment: 'string',
      whereCondition: 'string',
      beginTime: 'number',
      endTime: 'number',
      timeCost: 'string',
      externalType: 'string',
      externalId: 'string',
      discreteCheck: 'boolean',
      fixedCheck: 'boolean',
      trend: 'string',
      warningThreshold: 'number',
      criticalThreshold: 'number',
      expectValue: 'number',
      op: 'string',
      projectName: 'string',
      tableName: 'string',
      templateId: 'number',
      templateName: 'string',
      resultString: 'string',
      checkerId: 'number',
      checkerType: 'number',
      ruleName: 'string',
      isPrediction: 'boolean',
      upperValue: 'number',
      lowerValue: 'number',
      checkerName: 'string',
      referenceValue: { 'type': 'array', 'itemType': ListQualityResultsByEntityResponseQualityResultsRuleChecksReferenceValue },
      sampleValue: { 'type': 'array', 'itemType': ListQualityResultsByEntityResponseQualityResultsRuleChecksSampleValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByEntityResponseQualityResults extends $tea.Model {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  ruleChecks: ListQualityResultsByEntityResponseQualityResultsRuleChecks[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleChecks: 'RuleChecks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      ruleChecks: { 'type': 'array', 'itemType': ListQualityResultsByEntityResponseQualityResultsRuleChecks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeTypeListInfoResponseNodeTypeInfoListNodeTypeInfo extends $tea.Model {
  nodeType: number;
  nodeTypeName: string;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'NodeType',
      nodeTypeName: 'NodeTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'number',
      nodeTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeTypeListInfoResponseNodeTypeInfoList extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  nodeTypeInfo: GetNodeTypeListInfoResponseNodeTypeInfoListNodeTypeInfo[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      nodeTypeInfo: 'NodeTypeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      nodeTypeInfo: { 'type': 'array', 'itemType': GetNodeTypeListInfoResponseNodeTypeInfoListNodeTypeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceStatusCountResponseStatusCount extends $tea.Model {
  totalCount: number;
  notRunCount: number;
  waitTimeCount: number;
  waitResCount: number;
  runningCount: number;
  failureCount: number;
  successCount: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      notRunCount: 'NotRunCount',
      waitTimeCount: 'WaitTimeCount',
      waitResCount: 'WaitResCount',
      runningCount: 'RunningCount',
      failureCount: 'FailureCount',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      notRunCount: 'number',
      waitTimeCount: 'number',
      waitResCount: 'number',
      runningCount: 'number',
      failureCount: 'number',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceFoldersResponseFolderPagingResultFolders extends $tea.Model {
  folderId: number;
  folderName: string;
  projectId: number;
  tenantId: number;
  createdTime: string;
  modifiedTime: string;
  groupId: string;
  parentId: number;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      folderName: 'FolderName',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
      createdTime: 'CreatedTime',
      modifiedTime: 'ModifiedTime',
      groupId: 'GroupId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'number',
      folderName: 'string',
      projectId: 'number',
      tenantId: 'number',
      createdTime: 'string',
      modifiedTime: 'string',
      groupId: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceFoldersResponseFolderPagingResult extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  folders: ListDataServiceFoldersResponseFolderPagingResultFolders[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      folders: 'Folders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      folders: { 'type': 'array', 'itemType': ListDataServiceFoldersResponseFolderPagingResultFolders },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseQualityResultsRuleChecksReferenceValue extends $tea.Model {
  bizDate: number;
  discreteProperty: string;
  value: number;
  threshold: number;
  singleCheckResult: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      discreteProperty: 'DiscreteProperty',
      value: 'Value',
      threshold: 'Threshold',
      singleCheckResult: 'SingleCheckResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'number',
      discreteProperty: 'string',
      value: 'number',
      threshold: 'number',
      singleCheckResult: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseQualityResultsRuleChecksSampleValue extends $tea.Model {
  bizDate: number;
  discreteProperty: string;
  value: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      discreteProperty: 'DiscreteProperty',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'number',
      discreteProperty: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseQualityResultsRuleChecks extends $tea.Model {
  id: number;
  taskId: string;
  entityId: number;
  ruleId: number;
  property: string;
  bizDate: number;
  dateType: string;
  actualExpression: string;
  matchExpression: string;
  blockType: number;
  checkResult: number;
  checkResultStatus: number;
  methodName: string;
  comment: string;
  whereCondition: string;
  beginTime: number;
  endTime: number;
  timeCost: string;
  externalType: string;
  externalId: string;
  discreteCheck: boolean;
  fixedCheck: boolean;
  trend: string;
  warningThreshold: number;
  criticalThreshold: number;
  expectValue: number;
  op: string;
  projectName: string;
  tableName: string;
  templateId: number;
  templateName: string;
  resultString: string;
  checkerId: number;
  checkerType: number;
  ruleName: string;
  isPrediction: boolean;
  upperValue: number;
  lowerValue: number;
  checkerName: string;
  referenceValue: ListQualityResultsByRuleResponseQualityResultsRuleChecksReferenceValue[];
  sampleValue: ListQualityResultsByRuleResponseQualityResultsRuleChecksSampleValue[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      taskId: 'TaskId',
      entityId: 'EntityId',
      ruleId: 'RuleId',
      property: 'Property',
      bizDate: 'BizDate',
      dateType: 'DateType',
      actualExpression: 'ActualExpression',
      matchExpression: 'MatchExpression',
      blockType: 'BlockType',
      checkResult: 'CheckResult',
      checkResultStatus: 'CheckResultStatus',
      methodName: 'MethodName',
      comment: 'Comment',
      whereCondition: 'WhereCondition',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      timeCost: 'TimeCost',
      externalType: 'ExternalType',
      externalId: 'ExternalId',
      discreteCheck: 'DiscreteCheck',
      fixedCheck: 'FixedCheck',
      trend: 'Trend',
      warningThreshold: 'WarningThreshold',
      criticalThreshold: 'CriticalThreshold',
      expectValue: 'ExpectValue',
      op: 'Op',
      projectName: 'ProjectName',
      tableName: 'TableName',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      resultString: 'ResultString',
      checkerId: 'CheckerId',
      checkerType: 'CheckerType',
      ruleName: 'RuleName',
      isPrediction: 'IsPrediction',
      upperValue: 'UpperValue',
      lowerValue: 'LowerValue',
      checkerName: 'CheckerName',
      referenceValue: 'ReferenceValue',
      sampleValue: 'SampleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      taskId: 'string',
      entityId: 'number',
      ruleId: 'number',
      property: 'string',
      bizDate: 'number',
      dateType: 'string',
      actualExpression: 'string',
      matchExpression: 'string',
      blockType: 'number',
      checkResult: 'number',
      checkResultStatus: 'number',
      methodName: 'string',
      comment: 'string',
      whereCondition: 'string',
      beginTime: 'number',
      endTime: 'number',
      timeCost: 'string',
      externalType: 'string',
      externalId: 'string',
      discreteCheck: 'boolean',
      fixedCheck: 'boolean',
      trend: 'string',
      warningThreshold: 'number',
      criticalThreshold: 'number',
      expectValue: 'number',
      op: 'string',
      projectName: 'string',
      tableName: 'string',
      templateId: 'number',
      templateName: 'string',
      resultString: 'string',
      checkerId: 'number',
      checkerType: 'number',
      ruleName: 'string',
      isPrediction: 'boolean',
      upperValue: 'number',
      lowerValue: 'number',
      checkerName: 'string',
      referenceValue: { 'type': 'array', 'itemType': ListQualityResultsByRuleResponseQualityResultsRuleChecksReferenceValue },
      sampleValue: { 'type': 'array', 'itemType': ListQualityResultsByRuleResponseQualityResultsRuleChecksSampleValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityResultsByRuleResponseQualityResults extends $tea.Model {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  ruleChecks: ListQualityResultsByRuleResponseQualityResultsRuleChecks[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleChecks: 'RuleChecks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      ruleChecks: { 'type': 'array', 'itemType': ListQualityResultsByRuleResponseQualityResultsRuleChecks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDBResponseDatabaseInfoDbList extends $tea.Model {
  name: string;
  type: string;
  ownerId: string;
  location: string;
  createTimeStamp: number;
  modifiedTimeStamp: number;
  UUID: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      ownerId: 'OwnerId',
      location: 'Location',
      createTimeStamp: 'CreateTimeStamp',
      modifiedTimeStamp: 'ModifiedTimeStamp',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      ownerId: 'string',
      location: 'string',
      createTimeStamp: 'number',
      modifiedTimeStamp: 'number',
      UUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDBResponseDatabaseInfo extends $tea.Model {
  totalCount: number;
  dbList: ListMetaDBResponseDatabaseInfoDbList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      dbList: 'DbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      dbList: { 'type': 'array', 'itemType': ListMetaDBResponseDatabaseInfoDbList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestColumns extends $tea.Model {
  columnName: string;
  columnNameCn?: string;
  columnType: string;
  seqNumber?: number;
  length?: number;
  isPartitionCol?: number;
  isPrimaryKey?: number;
  isNullable?: number;
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnNameCn: 'ColumnNameCn',
      columnType: 'ColumnType',
      seqNumber: 'SeqNumber',
      length: 'Length',
      isPartitionCol: 'IsPartitionCol',
      isPrimaryKey: 'IsPrimaryKey',
      isNullable: 'IsNullable',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnNameCn: 'string',
      columnType: 'string',
      seqNumber: 'number',
      length: 'number',
      isPartitionCol: 'number',
      isPrimaryKey: 'number',
      isNullable: 'number',
      comment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestThemes extends $tea.Model {
  themeId?: number;
  themeLevel?: number;
  static names(): { [key: string]: string } {
    return {
      themeId: 'ThemeId',
      themeLevel: 'ThemeLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      themeId: 'number',
      themeLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableResponseTaskInfo extends $tea.Model {
  taskId: string;
  content: string;
  status: string;
  nextTaskId: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      content: 'Content',
      status: 'Status',
      nextTaskId: 'NextTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      content: 'string',
      status: 'string',
      nextTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceErrorRankResponseInstanceErrorRankErrorRank extends $tea.Model {
  nodeId: number;
  nodeName: string;
  owner: string;
  count: number;
  projectId: number;
  prgType: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      count: 'Count',
      projectId: 'ProjectId',
      prgType: 'PrgType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      count: 'number',
      projectId: 'number',
      prgType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceErrorRankResponseInstanceErrorRank extends $tea.Model {
  updateTime: number;
  errorRank: GetInstanceErrorRankResponseInstanceErrorRankErrorRank[];
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      errorRank: 'ErrorRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      errorRank: { 'type': 'array', 'itemType': GetInstanceErrorRankResponseInstanceErrorRankErrorRank },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDDLJobStatusResponseData extends $tea.Model {
  nextTaskId: string;
  content: string;
  status: string;
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      nextTaskId: 'NextTaskId',
      content: 'Content',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextTaskId: 'string',
      content: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsumeTimeRankResponseInstanceConsumeTimeRankConsumeTimeRank extends $tea.Model {
  nodeName: string;
  nodeId: number;
  bizdate: number;
  owner: string;
  consumed: number;
  instanceId: number;
  prgType: number;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
      nodeId: 'NodeId',
      bizdate: 'Bizdate',
      owner: 'Owner',
      consumed: 'Consumed',
      instanceId: 'InstanceId',
      prgType: 'PrgType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
      nodeId: 'number',
      bizdate: 'number',
      owner: 'string',
      consumed: 'number',
      instanceId: 'number',
      prgType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsumeTimeRankResponseInstanceConsumeTimeRank extends $tea.Model {
  updateTime: number;
  consumeTimeRank: GetInstanceConsumeTimeRankResponseInstanceConsumeTimeRankConsumeTimeRank[];
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      consumeTimeRank: 'ConsumeTimeRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      consumeTimeRank: { 'type': 'array', 'itemType': GetInstanceConsumeTimeRankResponseInstanceConsumeTimeRankConsumeTimeRank },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceCountTrendResponseInstanceCounts extends $tea.Model {
  date: number;
  count: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableResponseTaskInfo extends $tea.Model {
  taskId: string;
  content: string;
  status: string;
  nextTaskId: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      content: 'Content',
      status: 'Status',
      nextTaskId: 'NextTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      content: 'string',
      status: 'string',
      nextTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableThemeResponseDataThemeList extends $tea.Model {
  themeId: number;
  name: string;
  level: number;
  parentId: number;
  projectId: number;
  creator: string;
  createTimeStamp: number;
  static names(): { [key: string]: string } {
    return {
      themeId: 'ThemeId',
      name: 'Name',
      level: 'Level',
      parentId: 'ParentId',
      projectId: 'ProjectId',
      creator: 'Creator',
      createTimeStamp: 'CreateTimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      themeId: 'number',
      name: 'string',
      level: 'number',
      parentId: 'number',
      projectId: 'number',
      creator: 'string',
      createTimeStamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableThemeResponseData extends $tea.Model {
  totalCount: number;
  themeList: ListTableThemeResponseDataThemeList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      themeList: 'ThemeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      themeList: { 'type': 'array', 'itemType': ListTableThemeResponseDataThemeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseInstanceStatusTrendTodayTrend extends $tea.Model {
  count: number;
  timePoint: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseInstanceStatusTrendYesterdayTrend extends $tea.Model {
  count: number;
  timePoint: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseInstanceStatusTrendAvgTrend extends $tea.Model {
  count: number;
  timePoint: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuccessInstanceTrendResponseInstanceStatusTrend extends $tea.Model {
  todayTrend: GetSuccessInstanceTrendResponseInstanceStatusTrendTodayTrend[];
  yesterdayTrend: GetSuccessInstanceTrendResponseInstanceStatusTrendYesterdayTrend[];
  avgTrend: GetSuccessInstanceTrendResponseInstanceStatusTrendAvgTrend[];
  static names(): { [key: string]: string } {
    return {
      todayTrend: 'TodayTrend',
      yesterdayTrend: 'YesterdayTrend',
      avgTrend: 'AvgTrend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      todayTrend: { 'type': 'array', 'itemType': GetSuccessInstanceTrendResponseInstanceStatusTrendTodayTrend },
      yesterdayTrend: { 'type': 'array', 'itemType': GetSuccessInstanceTrendResponseInstanceStatusTrendYesterdayTrend },
      avgTrend: { 'type': 'array', 'itemType': GetSuccessInstanceTrendResponseInstanceStatusTrendAvgTrend },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableRequestColumns extends $tea.Model {
  columnName: string;
  columnNameCn?: string;
  columnType: string;
  seqNumber?: number;
  length?: number;
  isPartitionCol?: number;
  isPrimaryKey?: number;
  isNullable?: number;
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnNameCn: 'ColumnNameCn',
      columnType: 'ColumnType',
      seqNumber: 'SeqNumber',
      length: 'Length',
      isPartitionCol: 'IsPartitionCol',
      isPrimaryKey: 'IsPrimaryKey',
      isNullable: 'IsNullable',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnNameCn: 'string',
      columnType: 'string',
      seqNumber: 'number',
      length: 'number',
      isPartitionCol: 'number',
      isPrimaryKey: 'number',
      isNullable: 'number',
      comment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableRequestThemes extends $tea.Model {
  themeId?: number;
  themeLevel?: number;
  static names(): { [key: string]: string } {
    return {
      themeId: 'ThemeId',
      themeLevel: 'ThemeLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      themeId: 'number',
      themeLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableResponseTaskInfo extends $tea.Model {
  taskId: string;
  content: string;
  status: string;
  nextTaskId: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      content: 'Content',
      status: 'Status',
      nextTaskId: 'NextTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      content: 'string',
      status: 'string',
      nextTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceFolderResponseFolder extends $tea.Model {
  tenantId: number;
  projectId: number;
  folderId: number;
  folderName: string;
  createdTime: string;
  modifiedTime: string;
  groupId: string;
  parentId: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      folderId: 'FolderId',
      folderName: 'FolderName',
      createdTime: 'CreatedTime',
      modifiedTime: 'ModifiedTime',
      groupId: 'GroupId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      folderId: 'number',
      folderName: 'string',
      createdTime: 'string',
      modifiedTime: 'string',
      groupId: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableLevelResponseTableLevelInfoLevelList extends $tea.Model {
  levelId: number;
  name: string;
  projectId: number;
  levelType: number;
  description: string;
  static names(): { [key: string]: string } {
    return {
      levelId: 'LevelId',
      name: 'Name',
      projectId: 'ProjectId',
      levelType: 'LevelType',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelId: 'number',
      name: 'string',
      projectId: 'number',
      levelType: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableLevelResponseTableLevelInfo extends $tea.Model {
  totalCount: number;
  levelList: ListTableLevelResponseTableLevelInfoLevelList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      levelList: 'LevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      levelList: { 'type': 'array', 'itemType': ListTableLevelResponseTableLevelInfoLevelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceGroupsResponseGroupPagingResultGroups extends $tea.Model {
  tenantId: number;
  groupId: string;
  apiGatewayGroupId: string;
  groupName: string;
  description: string;
  createdTime: string;
  modifiedTime: string;
  creatorId: string;
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      groupId: 'GroupId',
      apiGatewayGroupId: 'ApiGatewayGroupId',
      groupName: 'GroupName',
      description: 'Description',
      createdTime: 'CreatedTime',
      modifiedTime: 'ModifiedTime',
      creatorId: 'CreatorId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      groupId: 'string',
      apiGatewayGroupId: 'string',
      groupName: 'string',
      description: 'string',
      createdTime: 'string',
      modifiedTime: 'string',
      creatorId: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceGroupsResponseGroupPagingResult extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  groups: ListDataServiceGroupsResponseGroupPagingResultGroups[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      groups: { 'type': 'array', 'itemType': ListDataServiceGroupsResponseGroupPagingResultGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceGroupResponseGroup extends $tea.Model {
  tenantId: number;
  projectId: number;
  groupId: string;
  apiGatewayGroupId: string;
  groupName: string;
  description: string;
  createdTime: string;
  modifiedTime: string;
  creatorId: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      groupId: 'GroupId',
      apiGatewayGroupId: 'ApiGatewayGroupId',
      groupName: 'GroupName',
      description: 'Description',
      createdTime: 'CreatedTime',
      modifiedTime: 'ModifiedTime',
      creatorId: 'CreatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      projectId: 'number',
      groupId: 'string',
      apiGatewayGroupId: 'string',
      groupName: 'string',
      description: 'string',
      createdTime: 'string',
      modifiedTime: 'string',
      creatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProgramTypeCountResponseProgramTypeAndCounts extends $tea.Model {
  programType: string;
  count: number;
  static names(): { [key: string]: string } {
    return {
      programType: 'ProgramType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      programType: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponsePageResultProjectList extends $tea.Model {
  projectName: string;
  projectIdentifier: string;
  projectDescription: string;
  projectStatus: number;
  projectId: number;
  projectOwnerBaseId: string;
  projectStatusCode: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      projectIdentifier: 'ProjectIdentifier',
      projectDescription: 'ProjectDescription',
      projectStatus: 'ProjectStatus',
      projectId: 'ProjectId',
      projectOwnerBaseId: 'ProjectOwnerBaseId',
      projectStatusCode: 'ProjectStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      projectIdentifier: 'string',
      projectDescription: 'string',
      projectStatus: 'number',
      projectId: 'number',
      projectOwnerBaseId: 'string',
      projectStatusCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponsePageResult extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  projectList: ListProjectsResponsePageResultProjectList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      projectList: 'ProjectList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      projectList: { 'type': 'array', 'itemType': ListProjectsResponsePageResultProjectList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseDataProjectMemberListProjectRoleList extends $tea.Model {
  projectRoleCode: string;
  projectRoleId: number;
  projectRoleName: string;
  projectRoleType: string;
  static names(): { [key: string]: string } {
    return {
      projectRoleCode: 'ProjectRoleCode',
      projectRoleId: 'ProjectRoleId',
      projectRoleName: 'ProjectRoleName',
      projectRoleType: 'ProjectRoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectRoleCode: 'string',
      projectRoleId: 'number',
      projectRoleName: 'string',
      projectRoleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseDataProjectMemberList extends $tea.Model {
  nick: string;
  projectMemberId: string;
  projectMemberName: string;
  projectMemberType: string;
  status: string;
  projectRoleList: ListProjectMembersResponseDataProjectMemberListProjectRoleList[];
  static names(): { [key: string]: string } {
    return {
      nick: 'Nick',
      projectMemberId: 'ProjectMemberId',
      projectMemberName: 'ProjectMemberName',
      projectMemberType: 'ProjectMemberType',
      status: 'Status',
      projectRoleList: 'ProjectRoleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nick: 'string',
      projectMemberId: 'string',
      projectMemberName: 'string',
      projectMemberType: 'string',
      status: 'string',
      projectRoleList: { 'type': 'array', 'itemType': ListProjectMembersResponseDataProjectMemberListProjectRoleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  projectMemberList: ListProjectMembersResponseDataProjectMemberList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      projectMemberList: 'ProjectMemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      projectMemberList: { 'type': 'array', 'itemType': ListProjectMembersResponseDataProjectMemberList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponseProjectRoleList extends $tea.Model {
  projectRoleCode: string;
  projectRoleId: number;
  projectRoleName: string;
  projectRoleType: string;
  static names(): { [key: string]: string } {
    return {
      projectRoleCode: 'ProjectRoleCode',
      projectRoleId: 'ProjectRoleId',
      projectRoleName: 'ProjectRoleName',
      projectRoleType: 'ProjectRoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectRoleCode: 'string',
      projectRoleId: 'number',
      projectRoleName: 'string',
      projectRoleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalcEnginesResponseDataCalcEngines extends $tea.Model {
  calcEngineType: string;
  gmtCreate: string;
  dwRegion: string;
  isDefault: boolean;
  bindingProjectId: number;
  envType: string;
  tenantId: number;
  name: string;
  bindingProjectName: string;
  region: string;
  engineId: number;
  engineInfo: { [key: string]: any };
  taskAuthType: string;
  static names(): { [key: string]: string } {
    return {
      calcEngineType: 'CalcEngineType',
      gmtCreate: 'GmtCreate',
      dwRegion: 'DwRegion',
      isDefault: 'IsDefault',
      bindingProjectId: 'BindingProjectId',
      envType: 'EnvType',
      tenantId: 'TenantId',
      name: 'Name',
      bindingProjectName: 'BindingProjectName',
      region: 'Region',
      engineId: 'EngineId',
      engineInfo: 'EngineInfo',
      taskAuthType: 'TaskAuthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calcEngineType: 'string',
      gmtCreate: 'string',
      dwRegion: 'string',
      isDefault: 'boolean',
      bindingProjectId: 'number',
      envType: 'string',
      tenantId: 'number',
      name: 'string',
      bindingProjectName: 'string',
      region: 'string',
      engineId: 'number',
      engineInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      taskAuthType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalcEnginesResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  calcEngines: ListCalcEnginesResponseDataCalcEngines[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      calcEngines: 'CalcEngines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      calcEngines: { 'type': 'array', 'itemType': ListCalcEnginesResponseDataCalcEngines },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseDataConnections extends $tea.Model {
  shared: boolean;
  gmtModified: string;
  connectStatus: number;
  bindingCalcEngineId: number;
  description: string;
  connectionType: string;
  gmtCreate: string;
  defaultEngine: boolean;
  operator: string;
  sequence: number;
  envType: number;
  tenantId: number;
  name: string;
  subType: string;
  id: number;
  projectId: number;
  status: number;
  content: string;
  static names(): { [key: string]: string } {
    return {
      shared: 'Shared',
      gmtModified: 'GmtModified',
      connectStatus: 'ConnectStatus',
      bindingCalcEngineId: 'BindingCalcEngineId',
      description: 'Description',
      connectionType: 'ConnectionType',
      gmtCreate: 'GmtCreate',
      defaultEngine: 'DefaultEngine',
      operator: 'Operator',
      sequence: 'Sequence',
      envType: 'EnvType',
      tenantId: 'TenantId',
      name: 'Name',
      subType: 'SubType',
      id: 'Id',
      projectId: 'ProjectId',
      status: 'Status',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shared: 'boolean',
      gmtModified: 'string',
      connectStatus: 'number',
      bindingCalcEngineId: 'number',
      description: 'string',
      connectionType: 'string',
      gmtCreate: 'string',
      defaultEngine: 'boolean',
      operator: 'string',
      sequence: 'number',
      envType: 'number',
      tenantId: 'number',
      name: 'string',
      subType: 'string',
      id: 'number',
      projectId: 'number',
      status: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  connections: ListConnectionsResponseDataConnections[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      connections: 'Connections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      connections: { 'type': 'array', 'itemType': ListConnectionsResponseDataConnections },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectDetailResponseData extends $tea.Model {
  gmtModified: string;
  defaultDiResourceGroupIdentifier: string;
  isAllowDownload: number;
  schedulerRetryInterval: number;
  residentArea: string;
  projectOwnerBaseId: string;
  projectMode: number;
  gmtCreate: string;
  protectedMode: number;
  tenantId: number;
  projectDescription: string;
  schedulerMaxRetryTimes: number;
  projectName: string;
  projectIdentifier: string;
  projectId: number;
  status: number;
  developmentType: number;
  envTypes: string[];
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      defaultDiResourceGroupIdentifier: 'DefaultDiResourceGroupIdentifier',
      isAllowDownload: 'IsAllowDownload',
      schedulerRetryInterval: 'SchedulerRetryInterval',
      residentArea: 'ResidentArea',
      projectOwnerBaseId: 'ProjectOwnerBaseId',
      projectMode: 'ProjectMode',
      gmtCreate: 'GmtCreate',
      protectedMode: 'ProtectedMode',
      tenantId: 'TenantId',
      projectDescription: 'ProjectDescription',
      schedulerMaxRetryTimes: 'SchedulerMaxRetryTimes',
      projectName: 'ProjectName',
      projectIdentifier: 'ProjectIdentifier',
      projectId: 'ProjectId',
      status: 'Status',
      developmentType: 'DevelopmentType',
      envTypes: 'EnvTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'string',
      defaultDiResourceGroupIdentifier: 'string',
      isAllowDownload: 'number',
      schedulerRetryInterval: 'number',
      residentArea: 'string',
      projectOwnerBaseId: 'string',
      projectMode: 'number',
      gmtCreate: 'string',
      protectedMode: 'number',
      tenantId: 'number',
      projectDescription: 'string',
      schedulerMaxRetryTimes: 'number',
      projectName: 'string',
      projectIdentifier: 'string',
      projectId: 'number',
      status: 'number',
      developmentType: 'number',
      envTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseData extends $tea.Model {
  identifier: string;
  cluster: string;
  bizExtKey: string;
  enableKp: boolean;
  updateTime: string;
  resourceGroupType: string;
  mode: string;
  sequence: number;
  isDefault: boolean;
  createTime: string;
  name: string;
  tenantId: number;
  id: number;
  status: number;
  specs: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      cluster: 'Cluster',
      bizExtKey: 'BizExtKey',
      enableKp: 'EnableKp',
      updateTime: 'UpdateTime',
      resourceGroupType: 'ResourceGroupType',
      mode: 'Mode',
      sequence: 'Sequence',
      isDefault: 'IsDefault',
      createTime: 'CreateTime',
      name: 'Name',
      tenantId: 'TenantId',
      id: 'Id',
      status: 'Status',
      specs: 'Specs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      cluster: 'string',
      bizExtKey: 'string',
      enableKp: 'boolean',
      updateTime: 'string',
      resourceGroupType: 'string',
      mode: 'string',
      sequence: 'number',
      isDefault: 'boolean',
      createTime: 'string',
      name: 'string',
      tenantId: 'number',
      id: 'number',
      status: 'number',
      specs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApplicationResponseData extends $tea.Model {
  applicationCode: string;
  applicationId: number;
  applicationKey: string;
  applicationName: string;
  applicationSecret: string;
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      applicationId: 'ApplicationId',
      applicationKey: 'ApplicationKey',
      applicationName: 'ApplicationName',
      applicationSecret: 'ApplicationSecret',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      applicationId: 'number',
      applicationKey: 'string',
      applicationName: 'string',
      applicationSecret: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApplicationsResponseDataApplications extends $tea.Model {
  applicationId: number;
  applicationName: string;
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      applicationName: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApplicationsResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  applications: ListDataServiceApplicationsResponseDataApplications[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      applications: 'Applications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      applications: { 'type': 'array', 'itemType': ListDataServiceApplicationsResponseDataApplications },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeOnBaselineResponseData extends $tea.Model {
  nodeId: number;
  nodeName: string;
  owner: string;
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineConfigsResponseDataBaselines extends $tea.Model {
  baselineId: number;
  priority: number;
  baselineName: string;
  owner: string;
  projectId: number;
  useFlag: boolean;
  baselineType: string;
  expHour: number;
  expMinu: number;
  slaHour: number;
  slaMinu: number;
  hourExpDetail: string;
  hourSlaDetail: string;
  isDefault: boolean;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      priority: 'Priority',
      baselineName: 'BaselineName',
      owner: 'Owner',
      projectId: 'ProjectId',
      useFlag: 'UseFlag',
      baselineType: 'BaselineType',
      expHour: 'ExpHour',
      expMinu: 'ExpMinu',
      slaHour: 'SlaHour',
      slaMinu: 'SlaMinu',
      hourExpDetail: 'HourExpDetail',
      hourSlaDetail: 'HourSlaDetail',
      isDefault: 'IsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      priority: 'number',
      baselineName: 'string',
      owner: 'string',
      projectId: 'number',
      useFlag: 'boolean',
      baselineType: 'string',
      expHour: 'number',
      expMinu: 'number',
      slaHour: 'number',
      slaMinu: 'number',
      hourExpDetail: 'string',
      hourSlaDetail: 'string',
      isDefault: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineConfigsResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  baselines: ListBaselineConfigsResponseDataBaselines[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      baselines: 'Baselines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      baselines: { 'type': 'array', 'itemType': ListBaselineConfigsResponseDataBaselines },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableChangeLogResponseDataDataEntityList extends $tea.Model {
  createTime: number;
  modifiedTime: number;
  changeType: string;
  operator: string;
  objectType: string;
  changeContent: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      changeType: 'ChangeType',
      operator: 'Operator',
      objectType: 'ObjectType',
      changeContent: 'ChangeContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      modifiedTime: 'number',
      changeType: 'string',
      operator: 'string',
      objectType: 'string',
      changeContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableChangeLogResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  dataEntityList: GetMetaTableChangeLogResponseDataDataEntityList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dataEntityList: 'DataEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTableChangeLogResponseDataDataEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableOutputResponseDataDataEntityList extends $tea.Model {
  tableGuid: string;
  taskId: string;
  startTime: string;
  endTime: string;
  waitTime: string;
  projectId: number;
  taskInstanceId: number;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      taskId: 'TaskId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      waitTime: 'WaitTime',
      projectId: 'ProjectId',
      taskInstanceId: 'TaskInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
      taskId: 'string',
      startTime: 'string',
      endTime: 'string',
      waitTime: 'string',
      projectId: 'number',
      taskInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableOutputResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  dataEntityList: GetMetaTableOutputResponseDataDataEntityList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dataEntityList: 'DataEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTableOutputResponseDataDataEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionResponseDataDataEntityList extends $tea.Model {
  partitionGuid: string;
  partitionName: string;
  createTime: number;
  dataSize: number;
  recordCount: number;
  modifiedTime: number;
  tableGuid: string;
  comment: string;
  partitionType: string;
  partitionPath: string;
  partitionLocation: string;
  static names(): { [key: string]: string } {
    return {
      partitionGuid: 'PartitionGuid',
      partitionName: 'PartitionName',
      createTime: 'CreateTime',
      dataSize: 'DataSize',
      recordCount: 'RecordCount',
      modifiedTime: 'ModifiedTime',
      tableGuid: 'TableGuid',
      comment: 'Comment',
      partitionType: 'PartitionType',
      partitionPath: 'PartitionPath',
      partitionLocation: 'PartitionLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitionGuid: 'string',
      partitionName: 'string',
      createTime: 'number',
      dataSize: 'number',
      recordCount: 'number',
      modifiedTime: 'number',
      tableGuid: 'string',
      comment: 'string',
      partitionType: 'string',
      partitionPath: 'string',
      partitionLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  dataEntityList: GetMetaTablePartitionResponseDataDataEntityList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dataEntityList: 'DataEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTablePartitionResponseDataDataEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableFullInfoResponseDataColumnList extends $tea.Model {
  columnGuid: string;
  columnName: string;
  columnType: string;
  isPrimaryKey: boolean;
  comment: string;
  isPartitionColumn: boolean;
  isForeignKey: boolean;
  caption: string;
  static names(): { [key: string]: string } {
    return {
      columnGuid: 'ColumnGuid',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      isPrimaryKey: 'IsPrimaryKey',
      comment: 'Comment',
      isPartitionColumn: 'IsPartitionColumn',
      isForeignKey: 'IsForeignKey',
      caption: 'Caption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnGuid: 'string',
      columnName: 'string',
      columnType: 'string',
      isPrimaryKey: 'boolean',
      comment: 'string',
      isPartitionColumn: 'boolean',
      isForeignKey: 'boolean',
      caption: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableFullInfoResponseData extends $tea.Model {
  tableName: string;
  tableGuid: string;
  ownerId: string;
  tenantId: number;
  projectId: number;
  createTime: number;
  lastModifyTime: number;
  lifeCycle: number;
  isVisible: number;
  projectName: string;
  dataSize: number;
  envType: number;
  comment: string;
  totalColumnCount: number;
  lastDdlTime: number;
  lastAccessTime: number;
  databaseName: string;
  partitionKeys: string;
  location: string;
  clusterId: string;
  columnList: GetMetaTableFullInfoResponseDataColumnList[];
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      tableGuid: 'TableGuid',
      ownerId: 'OwnerId',
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      createTime: 'CreateTime',
      lastModifyTime: 'LastModifyTime',
      lifeCycle: 'LifeCycle',
      isVisible: 'IsVisible',
      projectName: 'ProjectName',
      dataSize: 'DataSize',
      envType: 'EnvType',
      comment: 'Comment',
      totalColumnCount: 'TotalColumnCount',
      lastDdlTime: 'LastDdlTime',
      lastAccessTime: 'LastAccessTime',
      databaseName: 'DatabaseName',
      partitionKeys: 'PartitionKeys',
      location: 'Location',
      clusterId: 'ClusterId',
      columnList: 'ColumnList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      tableGuid: 'string',
      ownerId: 'string',
      tenantId: 'number',
      projectId: 'number',
      createTime: 'number',
      lastModifyTime: 'number',
      lifeCycle: 'number',
      isVisible: 'number',
      projectName: 'string',
      dataSize: 'number',
      envType: 'number',
      comment: 'string',
      totalColumnCount: 'number',
      lastDdlTime: 'number',
      lastAccessTime: 'number',
      databaseName: 'string',
      partitionKeys: 'string',
      location: 'string',
      clusterId: 'string',
      columnList: { 'type': 'array', 'itemType': GetMetaTableFullInfoResponseDataColumnList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileVersionResponseData extends $tea.Model {
  fileVersion: number;
  fileContent: string;
  filePropertyContent: string;
  nodeContent: string;
  comment: string;
  nodeId: number;
  isCurrentProd: boolean;
  changeType: string;
  status: string;
  fileName: string;
  commitUser: string;
  commitTime: number;
  useType: string;
  static names(): { [key: string]: string } {
    return {
      fileVersion: 'FileVersion',
      fileContent: 'FileContent',
      filePropertyContent: 'FilePropertyContent',
      nodeContent: 'NodeContent',
      comment: 'Comment',
      nodeId: 'NodeId',
      isCurrentProd: 'IsCurrentProd',
      changeType: 'ChangeType',
      status: 'Status',
      fileName: 'FileName',
      commitUser: 'CommitUser',
      commitTime: 'CommitTime',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileVersion: 'number',
      fileContent: 'string',
      filePropertyContent: 'string',
      nodeContent: 'string',
      comment: 'string',
      nodeId: 'number',
      isCurrentProd: 'boolean',
      changeType: 'string',
      status: 'string',
      fileName: 'string',
      commitUser: 'string',
      commitTime: 'number',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableBasicInfoResponseData extends $tea.Model {
  tableName: string;
  tableGuid: string;
  ownerId: string;
  tenantId: number;
  projectId: number;
  createTime: number;
  lastModifyTime: number;
  lifeCycle: number;
  isVisible: number;
  lastDdlTime: number;
  lastAccessTime: number;
  envType: number;
  dataSize: number;
  comment: string;
  projectName: string;
  databaseName: string;
  partitionKeys: string;
  location: string;
  clusterId: string;
  caption: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      tableGuid: 'TableGuid',
      ownerId: 'OwnerId',
      tenantId: 'TenantId',
      projectId: 'ProjectId',
      createTime: 'CreateTime',
      lastModifyTime: 'LastModifyTime',
      lifeCycle: 'LifeCycle',
      isVisible: 'IsVisible',
      lastDdlTime: 'LastDdlTime',
      lastAccessTime: 'LastAccessTime',
      envType: 'EnvType',
      dataSize: 'DataSize',
      comment: 'Comment',
      projectName: 'ProjectName',
      databaseName: 'DatabaseName',
      partitionKeys: 'PartitionKeys',
      location: 'Location',
      clusterId: 'ClusterId',
      caption: 'Caption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      tableGuid: 'string',
      ownerId: 'string',
      tenantId: 'number',
      projectId: 'number',
      createTime: 'number',
      lastModifyTime: 'number',
      lifeCycle: 'number',
      isVisible: 'number',
      lastDdlTime: 'number',
      lastAccessTime: 'number',
      envType: 'number',
      dataSize: 'number',
      comment: 'string',
      projectName: 'string',
      databaseName: 'string',
      partitionKeys: 'string',
      location: 'string',
      clusterId: 'string',
      caption: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponseDataColumnList extends $tea.Model {
  columnName: string;
  columnGuid: string;
  comment: string;
  isPrimaryKey: boolean;
  columnType: string;
  isPartitionColumn: boolean;
  isForeignKey: boolean;
  caption: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnGuid: 'ColumnGuid',
      comment: 'Comment',
      isPrimaryKey: 'IsPrimaryKey',
      columnType: 'ColumnType',
      isPartitionColumn: 'IsPartitionColumn',
      isForeignKey: 'IsForeignKey',
      caption: 'Caption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnGuid: 'string',
      comment: 'string',
      isPrimaryKey: 'boolean',
      columnType: 'string',
      isPartitionColumn: 'boolean',
      isForeignKey: 'boolean',
      caption: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableColumnResponseData extends $tea.Model {
  totalCount: number;
  pageNum: number;
  pageSize: number;
  columnList: GetMetaTableColumnResponseDataColumnList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      columnList: 'ColumnList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      columnList: { 'type': 'array', 'itemType': GetMetaTableColumnResponseDataColumnList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBInfoResponseData extends $tea.Model {
  appGuid: string;
  tenantId: number;
  endpoint: string;
  projectId: number;
  envType: number;
  projectName: string;
  projectNameCn: string;
  createTime: number;
  modifyTime: number;
  ownerId: string;
  ownerName: string;
  name: string;
  type: string;
  comment: string;
  location: string;
  clusterBizId: string;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      tenantId: 'TenantId',
      endpoint: 'Endpoint',
      projectId: 'ProjectId',
      envType: 'EnvType',
      projectName: 'ProjectName',
      projectNameCn: 'ProjectNameCn',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      name: 'Name',
      type: 'Type',
      comment: 'Comment',
      location: 'Location',
      clusterBizId: 'ClusterBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      tenantId: 'number',
      endpoint: 'string',
      projectId: 'number',
      envType: 'number',
      projectName: 'string',
      projectNameCn: 'string',
      createTime: 'number',
      modifyTime: 'number',
      ownerId: 'string',
      ownerName: 'string',
      name: 'string',
      type: 'string',
      comment: 'string',
      location: 'string',
      clusterBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaCategoryResponseDataDataEntityList extends $tea.Model {
  categoryId: number;
  name: string;
  createTime: number;
  modifiedTime: number;
  comment: string;
  ownerId: string;
  lastOperatorId: string;
  parentCategoryId: number;
  depth: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      name: 'Name',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      comment: 'Comment',
      ownerId: 'OwnerId',
      lastOperatorId: 'LastOperatorId',
      parentCategoryId: 'ParentCategoryId',
      depth: 'Depth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      name: 'string',
      createTime: 'number',
      modifiedTime: 'number',
      comment: 'string',
      ownerId: 'string',
      lastOperatorId: 'string',
      parentCategoryId: 'number',
      depth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaCategoryResponseData extends $tea.Model {
  pageNum: number;
  pageSize: number;
  totalCount: number;
  dataEntityList: GetMetaCategoryResponseDataDataEntityList[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dataEntityList: 'DataEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      dataEntityList: { 'type': 'array', 'itemType': GetMetaCategoryResponseDataDataEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseDataAlertMessagesInstances extends $tea.Model {
  nodeId: number;
  nodeName: string;
  projectId: number;
  status: string;
  instanceId: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      projectId: 'ProjectId',
      status: 'Status',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeName: 'string',
      projectId: 'number',
      status: 'string',
      instanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseDataAlertMessagesTopics extends $tea.Model {
  nodeId: number;
  instanceId: number;
  topicId: number;
  topicName: string;
  topicOwner: string;
  topicStatus: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      instanceId: 'InstanceId',
      topicId: 'TopicId',
      topicName: 'TopicName',
      topicOwner: 'TopicOwner',
      topicStatus: 'TopicStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      instanceId: 'number',
      topicId: 'number',
      topicName: 'string',
      topicOwner: 'string',
      topicStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseDataAlertMessagesNodes extends $tea.Model {
  nodeId: number;
  nodeName: string;
  owner: string;
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseDataAlertMessagesSlaAlert extends $tea.Model {
  baselineId: number;
  baselineName: string;
  baselineOwner: string;
  bizdate: number;
  inGroupId: number;
  projectId: number;
  status: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      baselineOwner: 'BaselineOwner',
      bizdate: 'Bizdate',
      inGroupId: 'InGroupId',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
      baselineOwner: 'string',
      bizdate: 'number',
      inGroupId: 'number',
      projectId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseDataAlertMessages extends $tea.Model {
  alertId: number;
  alertTime: number;
  source: string;
  remindId: number;
  remindName: string;
  alertUser: string;
  alertMethod: string;
  alertMessageStatus: string;
  content: string;
  instances: ListAlertMessagesResponseDataAlertMessagesInstances[];
  topics: ListAlertMessagesResponseDataAlertMessagesTopics[];
  nodes: ListAlertMessagesResponseDataAlertMessagesNodes[];
  slaAlert: ListAlertMessagesResponseDataAlertMessagesSlaAlert;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertTime: 'AlertTime',
      source: 'Source',
      remindId: 'RemindId',
      remindName: 'RemindName',
      alertUser: 'AlertUser',
      alertMethod: 'AlertMethod',
      alertMessageStatus: 'AlertMessageStatus',
      content: 'Content',
      instances: 'Instances',
      topics: 'Topics',
      nodes: 'Nodes',
      slaAlert: 'SlaAlert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertTime: 'number',
      source: 'string',
      remindId: 'number',
      remindName: 'string',
      alertUser: 'string',
      alertMethod: 'string',
      alertMessageStatus: 'string',
      content: 'string',
      instances: { 'type': 'array', 'itemType': ListAlertMessagesResponseDataAlertMessagesInstances },
      topics: { 'type': 'array', 'itemType': ListAlertMessagesResponseDataAlertMessagesTopics },
      nodes: { 'type': 'array', 'itemType': ListAlertMessagesResponseDataAlertMessagesNodes },
      slaAlert: ListAlertMessagesResponseDataAlertMessagesSlaAlert,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertMessagesResponseData extends $tea.Model {
  pageNumber: string;
  pageSize: string;
  totalCount: string;
  alertMessages: ListAlertMessagesResponseDataAlertMessages[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      alertMessages: 'AlertMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
      alertMessages: { 'type': 'array', 'itemType': ListAlertMessagesResponseDataAlertMessages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineConfigResponseData extends $tea.Model {
  baselineId: number;
  priority: number;
  baselineName: string;
  owner: string;
  projectId: number;
  useFlag: boolean;
  baselineType: string;
  expHour: number;
  expMinu: number;
  slaHour: number;
  slaMinu: number;
  hourExpDetail: string;
  hourSlaDetail: string;
  isDefault: boolean;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      priority: 'Priority',
      baselineName: 'BaselineName',
      owner: 'Owner',
      projectId: 'ProjectId',
      useFlag: 'UseFlag',
      baselineType: 'BaselineType',
      expHour: 'ExpHour',
      expMinu: 'ExpMinu',
      slaHour: 'SlaHour',
      slaMinu: 'SlaMinu',
      hourExpDetail: 'HourExpDetail',
      hourSlaDetail: 'HourSlaDetail',
      isDefault: 'IsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      priority: 'number',
      baselineName: 'string',
      owner: 'string',
      projectId: 'number',
      useFlag: 'boolean',
      baselineType: 'string',
      expHour: 'number',
      expMinu: 'number',
      slaHour: 'number',
      slaMinu: 'number',
      hourExpDetail: 'string',
      hourSlaDetail: 'string',
      isDefault: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMetaTablesResponseDataDataEntityList extends $tea.Model {
  tableName: string;
  tableGuid: string;
  ownerId: string;
  tenantId: number;
  envType: number;
  entityType: number;
  projectId: number;
  projectName: string;
  clusterId: string;
  databaseName: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      tableGuid: 'TableGuid',
      ownerId: 'OwnerId',
      tenantId: 'TenantId',
      envType: 'EnvType',
      entityType: 'EntityType',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      tableGuid: 'string',
      ownerId: 'string',
      tenantId: 'number',
      envType: 'number',
      entityType: 'number',
      projectId: 'number',
      projectName: 'string',
      clusterId: 'string',
      databaseName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMetaTablesResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  dataEntityList: SearchMetaTablesResponseDataDataEntityList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dataEntityList: 'DataEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      dataEntityList: { 'type': 'array', 'itemType': SearchMetaTablesResponseDataDataEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableListByCategoryResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  tableGuidList: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      tableGuidList: 'TableGuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      tableGuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseDataTopics extends $tea.Model {
  topicId: number;
  topicName: string;
  topicStatus: string;
  topicType: string;
  addTime: number;
  happenTime: number;
  fixTime: number;
  instanceId: number;
  nodeId: number;
  nodeName: string;
  nodeOwner: string;
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      topicId: 'TopicId',
      topicName: 'TopicName',
      topicStatus: 'TopicStatus',
      topicType: 'TopicType',
      addTime: 'AddTime',
      happenTime: 'HappenTime',
      fixTime: 'FixTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeOwner: 'NodeOwner',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicId: 'number',
      topicName: 'string',
      topicStatus: 'string',
      topicType: 'string',
      addTime: 'number',
      happenTime: 'number',
      fixTime: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      nodeOwner: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  topics: ListTopicsResponseDataTopics[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      topics: { 'type': 'array', 'itemType': ListTopicsResponseDataTopics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileVersionsResponseDataFileVersions extends $tea.Model {
  fileVersion: number;
  fileContent: string;
  commitTime: number;
  commitUser: string;
  fileName: string;
  status: string;
  changeType: string;
  isCurrentProd: boolean;
  nodeId: number;
  comment: string;
  nodeContent: string;
  filePropertyContent: string;
  useType: string;
  static names(): { [key: string]: string } {
    return {
      fileVersion: 'FileVersion',
      fileContent: 'FileContent',
      commitTime: 'CommitTime',
      commitUser: 'CommitUser',
      fileName: 'FileName',
      status: 'Status',
      changeType: 'ChangeType',
      isCurrentProd: 'IsCurrentProd',
      nodeId: 'NodeId',
      comment: 'Comment',
      nodeContent: 'NodeContent',
      filePropertyContent: 'FilePropertyContent',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileVersion: 'number',
      fileContent: 'string',
      commitTime: 'number',
      commitUser: 'string',
      fileName: 'string',
      status: 'string',
      changeType: 'string',
      isCurrentProd: 'boolean',
      nodeId: 'number',
      comment: 'string',
      nodeContent: 'string',
      filePropertyContent: 'string',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileVersionsResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  fileVersions: ListFileVersionsResponseDataFileVersions[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      fileVersions: 'FileVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      fileVersions: { 'type': 'array', 'itemType': ListFileVersionsResponseDataFileVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetaCategoryResponseData extends $tea.Model {
  categoryId: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeIOResponseData extends $tea.Model {
  tableName: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicInfluenceResponseDataInfluences extends $tea.Model {
  baselineId: number;
  bizdate: number;
  inGroupId: number;
  baselineName: string;
  owner: string;
  status: string;
  projectId: number;
  priority: number;
  buffer: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      bizdate: 'Bizdate',
      inGroupId: 'InGroupId',
      baselineName: 'BaselineName',
      owner: 'Owner',
      status: 'Status',
      projectId: 'ProjectId',
      priority: 'Priority',
      buffer: 'Buffer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      bizdate: 'number',
      inGroupId: 'number',
      baselineName: 'string',
      owner: 'string',
      status: 'string',
      projectId: 'number',
      priority: 'number',
      buffer: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicInfluenceResponseData extends $tea.Model {
  topicId: number;
  influences: GetTopicInfluenceResponseDataInfluences[];
  static names(): { [key: string]: string } {
    return {
      topicId: 'TopicId',
      influences: 'Influences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicId: 'number',
      influences: { 'type': 'array', 'itemType': GetTopicInfluenceResponseDataInfluences },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicResponseData extends $tea.Model {
  topicId: number;
  topicName: string;
  topicStatus: string;
  topicType: string;
  addTime: number;
  alertTime: number;
  assigner: string;
  baselineId: number;
  baselineName: string;
  baselineInGroupId: number;
  baselineStatus: string;
  baselineBuffer: number;
  buffer: number;
  dealTime: number;
  dealUser: string;
  fixTime: number;
  happenTime: number;
  instanceId: number;
  nextAlertTime: number;
  nodeId: number;
  nodeName: string;
  owner: string;
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      topicId: 'TopicId',
      topicName: 'TopicName',
      topicStatus: 'TopicStatus',
      topicType: 'TopicType',
      addTime: 'AddTime',
      alertTime: 'AlertTime',
      assigner: 'Assigner',
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      baselineInGroupId: 'BaselineInGroupId',
      baselineStatus: 'BaselineStatus',
      baselineBuffer: 'BaselineBuffer',
      buffer: 'Buffer',
      dealTime: 'DealTime',
      dealUser: 'DealUser',
      fixTime: 'FixTime',
      happenTime: 'HappenTime',
      instanceId: 'InstanceId',
      nextAlertTime: 'NextAlertTime',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicId: 'number',
      topicName: 'string',
      topicStatus: 'string',
      topicType: 'string',
      addTime: 'number',
      alertTime: 'number',
      assigner: 'string',
      baselineId: 'number',
      baselineName: 'string',
      baselineInGroupId: 'number',
      baselineStatus: 'string',
      baselineBuffer: 'number',
      buffer: 'number',
      dealTime: 'number',
      dealUser: 'string',
      fixTime: 'number',
      happenTime: 'number',
      instanceId: 'number',
      nextAlertTime: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponseData extends $tea.Model {
  nodeId: number;
  ownerId: string;
  description: string;
  resGroupName: string;
  nodeName: string;
  cronExpress: string;
  repeatability: string;
  programType: string;
  projectId: number;
  schedulerType: string;
  paramValues: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      ownerId: 'OwnerId',
      description: 'Description',
      resGroupName: 'ResGroupName',
      nodeName: 'NodeName',
      cronExpress: 'CronExpress',
      repeatability: 'Repeatability',
      programType: 'ProgramType',
      projectId: 'ProjectId',
      schedulerType: 'SchedulerType',
      paramValues: 'ParamValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      ownerId: 'string',
      description: 'string',
      resGroupName: 'string',
      nodeName: 'string',
      cronExpress: 'string',
      repeatability: 'string',
      programType: 'string',
      projectId: 'number',
      schedulerType: 'string',
      paramValues: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseDataNodes extends $tea.Model {
  nodeId: number;
  nodeName: string;
  cronExpress: string;
  schedulerType: string;
  programType: string;
  ownerId: string;
  projectId: number;
  repeatability: boolean;
  paramValues: string;
  description: string;
  resGroupName: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      cronExpress: 'CronExpress',
      schedulerType: 'SchedulerType',
      programType: 'ProgramType',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      repeatability: 'Repeatability',
      paramValues: 'ParamValues',
      description: 'Description',
      resGroupName: 'ResGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeName: 'string',
      cronExpress: 'string',
      schedulerType: 'string',
      programType: 'string',
      ownerId: 'string',
      projectId: 'number',
      repeatability: 'boolean',
      paramValues: 'string',
      description: 'string',
      resGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  nodes: ListNodesResponseDataNodes[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      nodes: { 'type': 'array', 'itemType': ListNodesResponseDataNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseDataFiles extends $tea.Model {
  connectionName: string;
  parentId: number;
  isMaxCompute: boolean;
  createTime: number;
  createUser: string;
  bizId: number;
  fileFolderId: string;
  fileName: string;
  fileType: number;
  useType: string;
  fileDescription: string;
  content: string;
  nodeId: number;
  currentVersion: number;
  owner: string;
  lastEditUser: string;
  lastEditTime: number;
  commitStatus: number;
  fileId: number;
  static names(): { [key: string]: string } {
    return {
      connectionName: 'ConnectionName',
      parentId: 'ParentId',
      isMaxCompute: 'IsMaxCompute',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      bizId: 'BizId',
      fileFolderId: 'FileFolderId',
      fileName: 'FileName',
      fileType: 'FileType',
      useType: 'UseType',
      fileDescription: 'FileDescription',
      content: 'Content',
      nodeId: 'NodeId',
      currentVersion: 'CurrentVersion',
      owner: 'Owner',
      lastEditUser: 'LastEditUser',
      lastEditTime: 'LastEditTime',
      commitStatus: 'CommitStatus',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionName: 'string',
      parentId: 'number',
      isMaxCompute: 'boolean',
      createTime: 'number',
      createUser: 'string',
      bizId: 'number',
      fileFolderId: 'string',
      fileName: 'string',
      fileType: 'number',
      useType: 'string',
      fileDescription: 'string',
      content: 'string',
      nodeId: 'number',
      currentVersion: 'number',
      owner: 'string',
      lastEditUser: 'string',
      lastEditTime: 'number',
      commitStatus: 'number',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  files: ListFilesResponseDataFiles[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      files: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      files: { 'type': 'array', 'itemType': ListFilesResponseDataFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedApisResponseDataApiAuthorizedList extends $tea.Model {
  apiId: number;
  apiName: string;
  apiPath: string;
  apiStatus: number;
  createdTime: string;
  creatorId: string;
  grantCreatedTime: string;
  grantEndTime: string;
  grantOperatorId: string;
  groupId: string;
  modifiedTime: string;
  projectId: number;
  tenantId: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      apiStatus: 'ApiStatus',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      grantCreatedTime: 'GrantCreatedTime',
      grantEndTime: 'GrantEndTime',
      grantOperatorId: 'GrantOperatorId',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      apiPath: 'string',
      apiStatus: 'number',
      createdTime: 'string',
      creatorId: 'string',
      grantCreatedTime: 'string',
      grantEndTime: 'string',
      grantOperatorId: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceAuthorizedApisResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  apiAuthorizedList: ListDataServiceAuthorizedApisResponseDataApiAuthorizedList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apiAuthorizedList: 'ApiAuthorizedList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      apiAuthorizedList: { 'type': 'array', 'itemType': ListDataServiceAuthorizedApisResponseDataApiAuthorizedList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersResponseDataFolders extends $tea.Model {
  folderId: string;
  folderPath: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      folderPath: 'FolderPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      folderPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  folders: ListFoldersResponseDataFolders[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      folders: 'Folders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      folders: { 'type': 'array', 'itemType': ListFoldersResponseDataFolders },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseDataInstances extends $tea.Model {
  nodeId: number;
  instanceId: number;
  dagId: number;
  dagType: string;
  status: string;
  bizdate: number;
  cycTime: number;
  createTime: number;
  modifyTime: number;
  nodeName: string;
  beginWaitTimeTime: number;
  beginWaitResTime: number;
  beginRunningTime: number;
  paramValues: string;
  finishTime: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      instanceId: 'InstanceId',
      dagId: 'DagId',
      dagType: 'DagType',
      status: 'Status',
      bizdate: 'Bizdate',
      cycTime: 'CycTime',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      nodeName: 'NodeName',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      beginWaitResTime: 'BeginWaitResTime',
      beginRunningTime: 'BeginRunningTime',
      paramValues: 'ParamValues',
      finishTime: 'FinishTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      instanceId: 'number',
      dagId: 'number',
      dagType: 'string',
      status: 'string',
      bizdate: 'number',
      cycTime: 'number',
      createTime: 'number',
      modifyTime: 'number',
      nodeName: 'string',
      beginWaitTimeTime: 'number',
      beginWaitResTime: 'number',
      beginRunningTime: 'number',
      paramValues: 'string',
      finishTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  instances: ListInstancesResponseDataInstances[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      instances: { 'type': 'array', 'itemType': ListInstancesResponseDataInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseDataApiAuthorizationListAuthorizationRecords extends $tea.Model {
  createdTime: string;
  creatorId: string;
  endTime: string;
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      endTime: 'EndTime',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      creatorId: 'string',
      endTime: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseDataApiAuthorizationList extends $tea.Model {
  apiId: number;
  apiName: string;
  apiPath: string;
  apiStatus: number;
  createdTime: string;
  creatorId: string;
  groupId: string;
  modifiedTime: string;
  projectId: number;
  tenantId: number;
  authorizationRecords: ListDataServiceApiAuthoritiesResponseDataApiAuthorizationListAuthorizationRecords[];
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      apiStatus: 'ApiStatus',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
      authorizationRecords: 'AuthorizationRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      apiPath: 'string',
      apiStatus: 'number',
      createdTime: 'string',
      creatorId: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      projectId: 'number',
      tenantId: 'number',
      authorizationRecords: { 'type': 'array', 'itemType': ListDataServiceApiAuthoritiesResponseDataApiAuthorizationListAuthorizationRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  apiAuthorizationList: ListDataServiceApiAuthoritiesResponseDataApiAuthorizationList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apiAuthorizationList: 'ApiAuthorizationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      apiAuthorizationList: { 'type': 'array', 'itemType': ListDataServiceApiAuthoritiesResponseDataApiAuthorizationList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseDataApisRegistrationDetailsRegistrationErrorCodes extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  errorSolution: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseDataApisRegistrationDetailsRegistrationRequestParameters extends $tea.Model {
  defaultValue: string;
  exampleValue: string;
  isRequiredParameter: boolean;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  parameterOperator: number;
  parameterPosition: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseDataApisRegistrationDetails extends $tea.Model {
  failedResultSample: string;
  serviceContentType: number;
  serviceHost: string;
  servicePath: string;
  serviceRequestBodyDescription: string;
  successfulResultSample: string;
  registrationErrorCodes: ListDataServicePublishedApisResponseDataApisRegistrationDetailsRegistrationErrorCodes[];
  registrationRequestParameters: ListDataServicePublishedApisResponseDataApisRegistrationDetailsRegistrationRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      serviceContentType: 'ServiceContentType',
      serviceHost: 'ServiceHost',
      servicePath: 'ServicePath',
      serviceRequestBodyDescription: 'ServiceRequestBodyDescription',
      successfulResultSample: 'SuccessfulResultSample',
      registrationErrorCodes: 'RegistrationErrorCodes',
      registrationRequestParameters: 'RegistrationRequestParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      serviceContentType: 'number',
      serviceHost: 'string',
      servicePath: 'string',
      serviceRequestBodyDescription: 'string',
      successfulResultSample: 'string',
      registrationErrorCodes: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseDataApisRegistrationDetailsRegistrationErrorCodes },
      registrationRequestParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseDataApisRegistrationDetailsRegistrationRequestParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseDataApisScriptDetailsScriptErrorCodes extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  errorSolution: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseDataApisScriptDetailsScriptRequestParameters extends $tea.Model {
  defaultValue: string;
  exampleValue: string;
  isRequiredParameter: boolean;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  parameterOperator: number;
  parameterPosition: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseDataApisScriptDetailsScriptResponseParameters extends $tea.Model {
  exampleValue: string;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseDataApisScriptDetailsScriptConnection extends $tea.Model {
  connectionId: number;
  tableName: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseDataApisScriptDetails extends $tea.Model {
  failedResultSample: string;
  isPagedResponse: boolean;
  script: string;
  successfulResultSample: string;
  scriptErrorCodes: ListDataServicePublishedApisResponseDataApisScriptDetailsScriptErrorCodes[];
  scriptRequestParameters: ListDataServicePublishedApisResponseDataApisScriptDetailsScriptRequestParameters[];
  scriptResponseParameters: ListDataServicePublishedApisResponseDataApisScriptDetailsScriptResponseParameters[];
  scriptConnection: ListDataServicePublishedApisResponseDataApisScriptDetailsScriptConnection;
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      isPagedResponse: 'IsPagedResponse',
      script: 'Script',
      successfulResultSample: 'SuccessfulResultSample',
      scriptErrorCodes: 'ScriptErrorCodes',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
      scriptConnection: 'ScriptConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      isPagedResponse: 'boolean',
      script: 'string',
      successfulResultSample: 'string',
      scriptErrorCodes: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseDataApisScriptDetailsScriptErrorCodes },
      scriptRequestParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseDataApisScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseDataApisScriptDetailsScriptResponseParameters },
      scriptConnection: ListDataServicePublishedApisResponseDataApisScriptDetailsScriptConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseDataApisWizardDetailsWizardErrorCodes extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  errorSolution: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseDataApisWizardDetailsWizardRequestParameters extends $tea.Model {
  defaultValue: string;
  exampleValue: string;
  isRequiredParameter: boolean;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  parameterOperator: number;
  parameterPosition: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseDataApisWizardDetailsWizardResponseParameters extends $tea.Model {
  exampleValue: string;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseDataApisWizardDetailsWizardConnection extends $tea.Model {
  connectionId: number;
  tableName: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseDataApisWizardDetails extends $tea.Model {
  failedResultSample: string;
  isPagedResponse: boolean;
  successfulResultSample: string;
  wizardErrorCodes: ListDataServicePublishedApisResponseDataApisWizardDetailsWizardErrorCodes[];
  wizardRequestParameters: ListDataServicePublishedApisResponseDataApisWizardDetailsWizardRequestParameters[];
  wizardResponseParameters: ListDataServicePublishedApisResponseDataApisWizardDetailsWizardResponseParameters[];
  wizardConnection: ListDataServicePublishedApisResponseDataApisWizardDetailsWizardConnection;
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      isPagedResponse: 'IsPagedResponse',
      successfulResultSample: 'SuccessfulResultSample',
      wizardErrorCodes: 'WizardErrorCodes',
      wizardRequestParameters: 'WizardRequestParameters',
      wizardResponseParameters: 'WizardResponseParameters',
      wizardConnection: 'WizardConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      isPagedResponse: 'boolean',
      successfulResultSample: 'string',
      wizardErrorCodes: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseDataApisWizardDetailsWizardErrorCodes },
      wizardRequestParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseDataApisWizardDetailsWizardRequestParameters },
      wizardResponseParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseDataApisWizardDetailsWizardResponseParameters },
      wizardConnection: ListDataServicePublishedApisResponseDataApisWizardDetailsWizardConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseDataApis extends $tea.Model {
  apiId: number;
  apiMode: number;
  apiName: string;
  apiPath: string;
  createdTime: string;
  creatorId: string;
  description: string;
  groupId: string;
  modifiedTime: string;
  operatorId: string;
  projectId: number;
  requestMethod: number;
  responseContentType: number;
  status: number;
  tenantId: number;
  timeout: number;
  visibleRange: number;
  registrationDetails: ListDataServicePublishedApisResponseDataApisRegistrationDetails;
  scriptDetails: ListDataServicePublishedApisResponseDataApisScriptDetails;
  wizardDetails: ListDataServicePublishedApisResponseDataApisWizardDetails;
  protocols: number[];
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMode: 'ApiMode',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      description: 'Description',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      operatorId: 'OperatorId',
      projectId: 'ProjectId',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      status: 'Status',
      tenantId: 'TenantId',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      registrationDetails: 'RegistrationDetails',
      scriptDetails: 'ScriptDetails',
      wizardDetails: 'WizardDetails',
      protocols: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiMode: 'number',
      apiName: 'string',
      apiPath: 'string',
      createdTime: 'string',
      creatorId: 'string',
      description: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      operatorId: 'string',
      projectId: 'number',
      requestMethod: 'number',
      responseContentType: 'number',
      status: 'number',
      tenantId: 'number',
      timeout: 'number',
      visibleRange: 'number',
      registrationDetails: ListDataServicePublishedApisResponseDataApisRegistrationDetails,
      scriptDetails: ListDataServicePublishedApisResponseDataApisScriptDetails,
      wizardDetails: ListDataServicePublishedApisResponseDataApisWizardDetails,
      protocols: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  apis: ListDataServicePublishedApisResponseDataApis[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apis: 'Apis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      apis: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseDataApis },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessResponseData extends $tea.Model {
  businessId: number;
  businessName: string;
  projectId: string;
  owner: string;
  description: string;
  useType: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      projectId: 'ProjectId',
      owner: 'Owner',
      description: 'Description',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      businessName: 'string',
      projectId: 'string',
      owner: 'string',
      description: 'string',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseData extends $tea.Model {
  nodeId: number;
  instanceId: number;
  dagId: number;
  dagType: string;
  status: string;
  bizdate: number;
  paramValues: string;
  cycTime: number;
  finishTime: number;
  beginWaitTimeTime: number;
  beginWaitResTime: number;
  beginRunningTime: number;
  createTime: number;
  modifyTime: number;
  nodeName: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      instanceId: 'InstanceId',
      dagId: 'DagId',
      dagType: 'DagType',
      status: 'Status',
      bizdate: 'Bizdate',
      paramValues: 'ParamValues',
      cycTime: 'CycTime',
      finishTime: 'FinishTime',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      beginWaitResTime: 'BeginWaitResTime',
      beginRunningTime: 'BeginRunningTime',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      instanceId: 'number',
      dagId: 'number',
      dagType: 'string',
      status: 'string',
      bizdate: 'number',
      paramValues: 'string',
      cycTime: 'number',
      finishTime: 'number',
      beginWaitTimeTime: 'number',
      beginWaitResTime: 'number',
      beginRunningTime: 'number',
      createTime: 'number',
      modifyTime: 'number',
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseDataFile extends $tea.Model {
  connectionName: string;
  parentId: number;
  isMaxCompute: boolean;
  createTime: number;
  createUser: string;
  bizId: number;
  fileFolderId: string;
  fileName: string;
  fileType: number;
  useType: string;
  fileDescription: string;
  content: string;
  nodeId: number;
  currentVersion: number;
  owner: string;
  lastEditUser: string;
  lastEditTime: number;
  commitStatus: number;
  static names(): { [key: string]: string } {
    return {
      connectionName: 'ConnectionName',
      parentId: 'ParentId',
      isMaxCompute: 'IsMaxCompute',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      bizId: 'BizId',
      fileFolderId: 'FileFolderId',
      fileName: 'FileName',
      fileType: 'FileType',
      useType: 'UseType',
      fileDescription: 'FileDescription',
      content: 'Content',
      nodeId: 'NodeId',
      currentVersion: 'CurrentVersion',
      owner: 'Owner',
      lastEditUser: 'LastEditUser',
      lastEditTime: 'LastEditTime',
      commitStatus: 'CommitStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionName: 'string',
      parentId: 'number',
      isMaxCompute: 'boolean',
      createTime: 'number',
      createUser: 'string',
      bizId: 'number',
      fileFolderId: 'string',
      fileName: 'string',
      fileType: 'number',
      useType: 'string',
      fileDescription: 'string',
      content: 'string',
      nodeId: 'number',
      currentVersion: 'number',
      owner: 'string',
      lastEditUser: 'string',
      lastEditTime: 'number',
      commitStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseDataNodeConfigurationInputList extends $tea.Model {
  input: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseDataNodeConfigurationOutputList extends $tea.Model {
  output: string;
  refTableName: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      refTableName: 'RefTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      refTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseDataNodeConfiguration extends $tea.Model {
  autoRerunTimes: number;
  autoRerunIntervalMillis: number;
  rerunMode: string;
  stop: boolean;
  paraValue: string;
  startEffectDate: number;
  endEffectDate: number;
  cronExpress: string;
  cycleType: string;
  dependentType: string;
  dependentNodeIdList: string;
  resourceGroupId: number;
  inputList: GetFileResponseDataNodeConfigurationInputList[];
  outputList: GetFileResponseDataNodeConfigurationOutputList[];
  static names(): { [key: string]: string } {
    return {
      autoRerunTimes: 'AutoRerunTimes',
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      rerunMode: 'RerunMode',
      stop: 'Stop',
      paraValue: 'ParaValue',
      startEffectDate: 'StartEffectDate',
      endEffectDate: 'EndEffectDate',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentType: 'DependentType',
      dependentNodeIdList: 'DependentNodeIdList',
      resourceGroupId: 'ResourceGroupId',
      inputList: 'InputList',
      outputList: 'OutputList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRerunTimes: 'number',
      autoRerunIntervalMillis: 'number',
      rerunMode: 'string',
      stop: 'boolean',
      paraValue: 'string',
      startEffectDate: 'number',
      endEffectDate: 'number',
      cronExpress: 'string',
      cycleType: 'string',
      dependentType: 'string',
      dependentNodeIdList: 'string',
      resourceGroupId: 'number',
      inputList: { 'type': 'array', 'itemType': GetFileResponseDataNodeConfigurationInputList },
      outputList: { 'type': 'array', 'itemType': GetFileResponseDataNodeConfigurationOutputList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseData extends $tea.Model {
  file: GetFileResponseDataFile;
  nodeConfiguration: GetFileResponseDataNodeConfiguration;
  static names(): { [key: string]: string } {
    return {
      file: 'File',
      nodeConfiguration: 'NodeConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      file: GetFileResponseDataFile,
      nodeConfiguration: GetFileResponseDataNodeConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessResponseDataBusiness extends $tea.Model {
  businessId: number;
  businessName: string;
  projectId: number;
  owner: string;
  description: string;
  useType: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      projectId: 'ProjectId',
      owner: 'Owner',
      description: 'Description',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      businessName: 'string',
      projectId: 'number',
      owner: 'string',
      description: 'string',
      useType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  business: ListBusinessResponseDataBusiness[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      business: 'Business',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      business: { 'type': 'array', 'itemType': ListBusinessResponseDataBusiness },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBTableListResponseDataTableEntityList extends $tea.Model {
  tableName: string;
  tableGuid: string;
  databaseName: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      tableGuid: 'TableGuid',
      databaseName: 'DatabaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      tableGuid: 'string',
      databaseName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBTableListResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  tableEntityList: GetMetaDBTableListResponseDataTableEntityList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      tableEntityList: 'TableEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      tableEntityList: { 'type': 'array', 'itemType': GetMetaDBTableListResponseDataTableEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseData extends $tea.Model {
  folderId: string;
  folderPath: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      folderPath: 'FolderPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      folderPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponseDataRules extends $tea.Model {
  projectName: string;
  tableName: string;
  id: number;
  entityId: number;
  property: string;
  methodId: number;
  methodName: string;
  onDuty: string;
  ruleType: number;
  blockType: number;
  templateId: number;
  templateName: string;
  ruleCheckerRelationId: number;
  checkerId: number;
  fixCheck: boolean;
  trend: string;
  warningThreshold: string;
  criticalThreshold: string;
  historyWarningThreshold: string;
  historyCriticalThreshold: string;
  propertyKey: string;
  matchExpression: string;
  comment: string;
  expectValue: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      tableName: 'TableName',
      id: 'Id',
      entityId: 'EntityId',
      property: 'Property',
      methodId: 'MethodId',
      methodName: 'MethodName',
      onDuty: 'OnDuty',
      ruleType: 'RuleType',
      blockType: 'BlockType',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      ruleCheckerRelationId: 'RuleCheckerRelationId',
      checkerId: 'CheckerId',
      fixCheck: 'FixCheck',
      trend: 'Trend',
      warningThreshold: 'WarningThreshold',
      criticalThreshold: 'CriticalThreshold',
      historyWarningThreshold: 'HistoryWarningThreshold',
      historyCriticalThreshold: 'HistoryCriticalThreshold',
      propertyKey: 'PropertyKey',
      matchExpression: 'MatchExpression',
      comment: 'Comment',
      expectValue: 'ExpectValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      tableName: 'string',
      id: 'number',
      entityId: 'number',
      property: 'string',
      methodId: 'number',
      methodName: 'string',
      onDuty: 'string',
      ruleType: 'number',
      blockType: 'number',
      templateId: 'number',
      templateName: 'string',
      ruleCheckerRelationId: 'number',
      checkerId: 'number',
      fixCheck: 'boolean',
      trend: 'string',
      warningThreshold: 'string',
      criticalThreshold: 'string',
      historyWarningThreshold: 'string',
      historyCriticalThreshold: 'string',
      propertyKey: 'string',
      matchExpression: 'string',
      comment: 'string',
      expectValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponseData extends $tea.Model {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  rules: ListQualityRulesResponseDataRules[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      rules: { 'type': 'array', 'itemType': ListQualityRulesResponseDataRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleResponseData extends $tea.Model {
  id: number;
  entityId: number;
  property: string;
  methodId: number;
  methodName: string;
  whereCondition: string;
  onDuty: string;
  ruleType: number;
  blockType: number;
  templateId: number;
  templateName: string;
  comment: string;
  ruleName: string;
  predictType: number;
  warningThreshold: string;
  criticalThreshold: string;
  operator: string;
  expectValue: string;
  trend: string;
  checkerName: string;
  checker: number;
  fixCheck: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      entityId: 'EntityId',
      property: 'Property',
      methodId: 'MethodId',
      methodName: 'MethodName',
      whereCondition: 'WhereCondition',
      onDuty: 'OnDuty',
      ruleType: 'RuleType',
      blockType: 'BlockType',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      comment: 'Comment',
      ruleName: 'RuleName',
      predictType: 'PredictType',
      warningThreshold: 'WarningThreshold',
      criticalThreshold: 'CriticalThreshold',
      operator: 'Operator',
      expectValue: 'ExpectValue',
      trend: 'Trend',
      checkerName: 'CheckerName',
      checker: 'Checker',
      fixCheck: 'FixCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      entityId: 'number',
      property: 'string',
      methodId: 'number',
      methodName: 'string',
      whereCondition: 'string',
      onDuty: 'string',
      ruleType: 'number',
      blockType: 'number',
      templateId: 'number',
      templateName: 'string',
      comment: 'string',
      ruleName: 'string',
      predictType: 'number',
      warningThreshold: 'string',
      criticalThreshold: 'string',
      operator: 'string',
      expectValue: 'string',
      trend: 'string',
      checkerName: 'string',
      checker: 'number',
      fixCheck: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseDataDeployment extends $tea.Model {
  name: string;
  creatorId: string;
  handlerId: string;
  createTime: number;
  executeTime: number;
  status: number;
  fromEnvironment: number;
  toEnvironment: number;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      creatorId: 'CreatorId',
      handlerId: 'HandlerId',
      createTime: 'CreateTime',
      executeTime: 'ExecuteTime',
      status: 'Status',
      fromEnvironment: 'FromEnvironment',
      toEnvironment: 'ToEnvironment',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      creatorId: 'string',
      handlerId: 'string',
      createTime: 'number',
      executeTime: 'number',
      status: 'number',
      fromEnvironment: 'number',
      toEnvironment: 'number',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseData extends $tea.Model {
  deployment: GetDeploymentResponseDataDeployment;
  static names(): { [key: string]: string } {
    return {
      deployment: 'Deployment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployment: GetDeploymentResponseDataDeployment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaColumnLineageResponseDataDataEntityList extends $tea.Model {
  columnName: string;
  columnGuid: string;
  clusterId: string;
  databaseName: string;
  tableName: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnGuid: 'ColumnGuid',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnGuid: 'string',
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaColumnLineageResponseData extends $tea.Model {
  totalCount: number;
  pageNum: number;
  pageSize: number;
  dataEntityList: GetMetaColumnLineageResponseDataDataEntityList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      dataEntityList: 'DataEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      dataEntityList: { 'type': 'array', 'itemType': GetMetaColumnLineageResponseDataDataEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseDataRegistrationDetailsRegistrationErrorCodes extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  errorSolution: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseDataRegistrationDetailsRegistrationRequestParameters extends $tea.Model {
  columnName: string;
  defaultValue: string;
  exampleValue: string;
  isRequiredParameter: boolean;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  parameterOperator: number;
  parameterPosition: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseDataRegistrationDetails extends $tea.Model {
  failedResultSample: string;
  serviceContentType: number;
  serviceHost: string;
  servicePath: string;
  serviceRequestBodyDescription: string;
  successfulResultSample: string;
  registrationErrorCodes: GetDataServiceApiResponseDataRegistrationDetailsRegistrationErrorCodes[];
  registrationRequestParameters: GetDataServiceApiResponseDataRegistrationDetailsRegistrationRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      serviceContentType: 'ServiceContentType',
      serviceHost: 'ServiceHost',
      servicePath: 'ServicePath',
      serviceRequestBodyDescription: 'ServiceRequestBodyDescription',
      successfulResultSample: 'SuccessfulResultSample',
      registrationErrorCodes: 'RegistrationErrorCodes',
      registrationRequestParameters: 'RegistrationRequestParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      serviceContentType: 'number',
      serviceHost: 'string',
      servicePath: 'string',
      serviceRequestBodyDescription: 'string',
      successfulResultSample: 'string',
      registrationErrorCodes: { 'type': 'array', 'itemType': GetDataServiceApiResponseDataRegistrationDetailsRegistrationErrorCodes },
      registrationRequestParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseDataRegistrationDetailsRegistrationRequestParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseDataScriptDetailsScriptRequestParameters extends $tea.Model {
  columnName: string;
  defaultValue: string;
  exampleValue: string;
  isRequiredParameter: boolean;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  parameterOperator: number;
  parameterPosition: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseDataScriptDetailsScriptResponseParameters extends $tea.Model {
  columnName: string;
  exampleValue: string;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseDataScriptDetailsScriptConnection extends $tea.Model {
  connectionId: number;
  tableName: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseDataScriptDetails extends $tea.Model {
  isPagedResponse: boolean;
  script: string;
  scriptRequestParameters: GetDataServiceApiResponseDataScriptDetailsScriptRequestParameters[];
  scriptResponseParameters: GetDataServiceApiResponseDataScriptDetailsScriptResponseParameters[];
  scriptConnection: GetDataServiceApiResponseDataScriptDetailsScriptConnection;
  static names(): { [key: string]: string } {
    return {
      isPagedResponse: 'IsPagedResponse',
      script: 'Script',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
      scriptConnection: 'ScriptConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPagedResponse: 'boolean',
      script: 'string',
      scriptRequestParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseDataScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseDataScriptDetailsScriptResponseParameters },
      scriptConnection: GetDataServiceApiResponseDataScriptDetailsScriptConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseDataWizardDetailsWizardRequestParameters extends $tea.Model {
  columnName: string;
  defaultValue: string;
  exampleValue: string;
  isRequiredParameter: boolean;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  parameterOperator: number;
  parameterPosition: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseDataWizardDetailsWizardResponseParameters extends $tea.Model {
  columnName: string;
  exampleValue: string;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseDataWizardDetailsWizardConnection extends $tea.Model {
  connectionId: number;
  tableName: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseDataWizardDetails extends $tea.Model {
  isPagedResponse: boolean;
  wizardRequestParameters: GetDataServiceApiResponseDataWizardDetailsWizardRequestParameters[];
  wizardResponseParameters: GetDataServiceApiResponseDataWizardDetailsWizardResponseParameters[];
  wizardConnection: GetDataServiceApiResponseDataWizardDetailsWizardConnection;
  static names(): { [key: string]: string } {
    return {
      isPagedResponse: 'IsPagedResponse',
      wizardRequestParameters: 'WizardRequestParameters',
      wizardResponseParameters: 'WizardResponseParameters',
      wizardConnection: 'WizardConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPagedResponse: 'boolean',
      wizardRequestParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseDataWizardDetailsWizardRequestParameters },
      wizardResponseParameters: { 'type': 'array', 'itemType': GetDataServiceApiResponseDataWizardDetailsWizardResponseParameters },
      wizardConnection: GetDataServiceApiResponseDataWizardDetailsWizardConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiResponseData extends $tea.Model {
  apiId: number;
  apiMode: number;
  apiName: string;
  apiPath: string;
  createdTime: string;
  creatorId: string;
  description: string;
  groupId: string;
  modifiedTime: string;
  operatorId: string;
  projectId: number;
  requestMethod: number;
  responseContentType: number;
  status: number;
  tenantId: number;
  timeout: number;
  visibleRange: number;
  folderId: number;
  registrationDetails: GetDataServiceApiResponseDataRegistrationDetails;
  scriptDetails: GetDataServiceApiResponseDataScriptDetails;
  wizardDetails: GetDataServiceApiResponseDataWizardDetails;
  protocols: number[];
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMode: 'ApiMode',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      description: 'Description',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      operatorId: 'OperatorId',
      projectId: 'ProjectId',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      status: 'Status',
      tenantId: 'TenantId',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      folderId: 'FolderId',
      registrationDetails: 'RegistrationDetails',
      scriptDetails: 'ScriptDetails',
      wizardDetails: 'WizardDetails',
      protocols: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiMode: 'number',
      apiName: 'string',
      apiPath: 'string',
      createdTime: 'string',
      creatorId: 'string',
      description: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      operatorId: 'string',
      projectId: 'number',
      requestMethod: 'number',
      responseContentType: 'number',
      status: 'number',
      tenantId: 'number',
      timeout: 'number',
      visibleRange: 'number',
      folderId: 'number',
      registrationDetails: GetDataServiceApiResponseDataRegistrationDetails,
      scriptDetails: GetDataServiceApiResponseDataScriptDetails,
      wizardDetails: GetDataServiceApiResponseDataWizardDetails,
      protocols: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseDataApisRegistrationDetailsRegistrationErrorCodes extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  errorSolution: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseDataApisRegistrationDetailsRegistrationRequestParameters extends $tea.Model {
  columnName: string;
  defaultValue: string;
  exampleValue: string;
  isRequiredParameter: boolean;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  parameterOperator: number;
  parameterPosition: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseDataApisRegistrationDetails extends $tea.Model {
  failedResultSample: string;
  serviceContentType: number;
  serviceHost: string;
  servicePath: string;
  serviceRequestBodyDescription: string;
  successfulResultSample: string;
  registrationErrorCodes: ListDataServiceApisResponseDataApisRegistrationDetailsRegistrationErrorCodes[];
  registrationRequestParameters: ListDataServiceApisResponseDataApisRegistrationDetailsRegistrationRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      serviceContentType: 'ServiceContentType',
      serviceHost: 'ServiceHost',
      servicePath: 'ServicePath',
      serviceRequestBodyDescription: 'ServiceRequestBodyDescription',
      successfulResultSample: 'SuccessfulResultSample',
      registrationErrorCodes: 'RegistrationErrorCodes',
      registrationRequestParameters: 'RegistrationRequestParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      serviceContentType: 'number',
      serviceHost: 'string',
      servicePath: 'string',
      serviceRequestBodyDescription: 'string',
      successfulResultSample: 'string',
      registrationErrorCodes: { 'type': 'array', 'itemType': ListDataServiceApisResponseDataApisRegistrationDetailsRegistrationErrorCodes },
      registrationRequestParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseDataApisRegistrationDetailsRegistrationRequestParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseDataApisScriptDetailsScriptRequestParameters extends $tea.Model {
  columnName: string;
  defaultValue: string;
  exampleValue: string;
  isRequiredParameter: boolean;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  parameterOperator: number;
  parameterPosition: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseDataApisScriptDetailsScriptResponseParameters extends $tea.Model {
  columnName: string;
  exampleValue: string;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseDataApisScriptDetailsScriptConnection extends $tea.Model {
  connectionId: number;
  tableName: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseDataApisScriptDetails extends $tea.Model {
  isPagedResponse: boolean;
  script: string;
  scriptRequestParameters: ListDataServiceApisResponseDataApisScriptDetailsScriptRequestParameters[];
  scriptResponseParameters: ListDataServiceApisResponseDataApisScriptDetailsScriptResponseParameters[];
  scriptConnection: ListDataServiceApisResponseDataApisScriptDetailsScriptConnection;
  static names(): { [key: string]: string } {
    return {
      isPagedResponse: 'IsPagedResponse',
      script: 'Script',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
      scriptConnection: 'ScriptConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPagedResponse: 'boolean',
      script: 'string',
      scriptRequestParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseDataApisScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseDataApisScriptDetailsScriptResponseParameters },
      scriptConnection: ListDataServiceApisResponseDataApisScriptDetailsScriptConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseDataApisWizardDetailsWizardRequestParameters extends $tea.Model {
  columnName: string;
  defaultValue: string;
  exampleValue: string;
  isRequiredParameter: boolean;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  parameterOperator: number;
  parameterPosition: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseDataApisWizardDetailsWizardResponseParameters extends $tea.Model {
  columnName: string;
  exampleValue: string;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseDataApisWizardDetailsWizardConnection extends $tea.Model {
  connectionId: number;
  tableName: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseDataApisWizardDetails extends $tea.Model {
  isPagedResponse: boolean;
  wizardRequestParameters: ListDataServiceApisResponseDataApisWizardDetailsWizardRequestParameters[];
  wizardResponseParameters: ListDataServiceApisResponseDataApisWizardDetailsWizardResponseParameters[];
  wizardConnection: ListDataServiceApisResponseDataApisWizardDetailsWizardConnection;
  static names(): { [key: string]: string } {
    return {
      isPagedResponse: 'IsPagedResponse',
      wizardRequestParameters: 'WizardRequestParameters',
      wizardResponseParameters: 'WizardResponseParameters',
      wizardConnection: 'WizardConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPagedResponse: 'boolean',
      wizardRequestParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseDataApisWizardDetailsWizardRequestParameters },
      wizardResponseParameters: { 'type': 'array', 'itemType': ListDataServiceApisResponseDataApisWizardDetailsWizardResponseParameters },
      wizardConnection: ListDataServiceApisResponseDataApisWizardDetailsWizardConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseDataApis extends $tea.Model {
  apiId: number;
  apiMode: number;
  apiName: string;
  apiPath: string;
  createdTime: string;
  creatorId: string;
  description: string;
  groupId: string;
  modifiedTime: string;
  operatorId: string;
  projectId: number;
  requestMethod: number;
  responseContentType: number;
  status: number;
  tenantId: number;
  timeout: number;
  visibleRange: number;
  folderId: number;
  registrationDetails: ListDataServiceApisResponseDataApisRegistrationDetails;
  scriptDetails: ListDataServiceApisResponseDataApisScriptDetails;
  wizardDetails: ListDataServiceApisResponseDataApisWizardDetails;
  protocols: number[];
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMode: 'ApiMode',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      description: 'Description',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      operatorId: 'OperatorId',
      projectId: 'ProjectId',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      status: 'Status',
      tenantId: 'TenantId',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      folderId: 'FolderId',
      registrationDetails: 'RegistrationDetails',
      scriptDetails: 'ScriptDetails',
      wizardDetails: 'WizardDetails',
      protocols: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiMode: 'number',
      apiName: 'string',
      apiPath: 'string',
      createdTime: 'string',
      creatorId: 'string',
      description: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      operatorId: 'string',
      projectId: 'number',
      requestMethod: 'number',
      responseContentType: 'number',
      status: 'number',
      tenantId: 'number',
      timeout: 'number',
      visibleRange: 'number',
      folderId: 'number',
      registrationDetails: ListDataServiceApisResponseDataApisRegistrationDetails,
      scriptDetails: ListDataServiceApisResponseDataApisScriptDetails,
      wizardDetails: ListDataServiceApisResponseDataApisWizardDetails,
      protocols: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApisResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  apis: ListDataServiceApisResponseDataApis[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      apis: 'Apis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      apis: { 'type': 'array', 'itemType': ListDataServiceApisResponseDataApis },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseDataRegistrationDetailsRegistrationErrorCodes extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  errorSolution: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseDataRegistrationDetailsRegistrationRequestParameters extends $tea.Model {
  defaultValue: string;
  exampleValue: string;
  isRequiredParameter: boolean;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  parameterOperator: number;
  parameterPosition: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseDataRegistrationDetails extends $tea.Model {
  failedResultSample: string;
  serviceContentType: number;
  serviceHost: string;
  servicePath: string;
  serviceRequestBodyDescription: string;
  successfulResultSample: string;
  registrationErrorCodes: GetDataServicePublishedApiResponseDataRegistrationDetailsRegistrationErrorCodes[];
  registrationRequestParameters: GetDataServicePublishedApiResponseDataRegistrationDetailsRegistrationRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      serviceContentType: 'ServiceContentType',
      serviceHost: 'ServiceHost',
      servicePath: 'ServicePath',
      serviceRequestBodyDescription: 'ServiceRequestBodyDescription',
      successfulResultSample: 'SuccessfulResultSample',
      registrationErrorCodes: 'RegistrationErrorCodes',
      registrationRequestParameters: 'RegistrationRequestParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      serviceContentType: 'number',
      serviceHost: 'string',
      servicePath: 'string',
      serviceRequestBodyDescription: 'string',
      successfulResultSample: 'string',
      registrationErrorCodes: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseDataRegistrationDetailsRegistrationErrorCodes },
      registrationRequestParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseDataRegistrationDetailsRegistrationRequestParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseDataScriptDetailsScriptErrorCodes extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  errorSolution: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseDataScriptDetailsScriptRequestParameters extends $tea.Model {
  defaultValue: string;
  exampleValue: string;
  isRequiredParameter: boolean;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  parameterOperator: number;
  parameterPosition: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseDataScriptDetailsScriptResponseParameters extends $tea.Model {
  exampleValue: string;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseDataScriptDetailsScriptConnection extends $tea.Model {
  connectionId: number;
  tableName: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseDataScriptDetails extends $tea.Model {
  failedResultSample: string;
  isPagedResponse: boolean;
  script: string;
  successfulResultSample: string;
  scriptErrorCodes: GetDataServicePublishedApiResponseDataScriptDetailsScriptErrorCodes[];
  scriptRequestParameters: GetDataServicePublishedApiResponseDataScriptDetailsScriptRequestParameters[];
  scriptResponseParameters: GetDataServicePublishedApiResponseDataScriptDetailsScriptResponseParameters[];
  scriptConnection: GetDataServicePublishedApiResponseDataScriptDetailsScriptConnection;
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      isPagedResponse: 'IsPagedResponse',
      script: 'Script',
      successfulResultSample: 'SuccessfulResultSample',
      scriptErrorCodes: 'ScriptErrorCodes',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
      scriptConnection: 'ScriptConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      isPagedResponse: 'boolean',
      script: 'string',
      successfulResultSample: 'string',
      scriptErrorCodes: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseDataScriptDetailsScriptErrorCodes },
      scriptRequestParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseDataScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseDataScriptDetailsScriptResponseParameters },
      scriptConnection: GetDataServicePublishedApiResponseDataScriptDetailsScriptConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseDataWizardDetailsWizardErrorCodes extends $tea.Model {
  errorCode: string;
  errorMessage: string;
  errorSolution: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseDataWizardDetailsWizardRequestParameters extends $tea.Model {
  defaultValue: string;
  exampleValue: string;
  isRequiredParameter: boolean;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  parameterOperator: number;
  parameterPosition: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseDataWizardDetailsWizardResponseParameters extends $tea.Model {
  exampleValue: string;
  parameterDataType: number;
  parameterDescription: string;
  parameterName: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseDataWizardDetailsWizardConnection extends $tea.Model {
  connectionId: number;
  tableName: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseDataWizardDetails extends $tea.Model {
  failedResultSample: string;
  isPagedResponse: boolean;
  successfulResultSample: string;
  wizardErrorCodes: GetDataServicePublishedApiResponseDataWizardDetailsWizardErrorCodes[];
  wizardRequestParameters: GetDataServicePublishedApiResponseDataWizardDetailsWizardRequestParameters[];
  wizardResponseParameters: GetDataServicePublishedApiResponseDataWizardDetailsWizardResponseParameters[];
  wizardConnection: GetDataServicePublishedApiResponseDataWizardDetailsWizardConnection;
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      isPagedResponse: 'IsPagedResponse',
      successfulResultSample: 'SuccessfulResultSample',
      wizardErrorCodes: 'WizardErrorCodes',
      wizardRequestParameters: 'WizardRequestParameters',
      wizardResponseParameters: 'WizardResponseParameters',
      wizardConnection: 'WizardConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      isPagedResponse: 'boolean',
      successfulResultSample: 'string',
      wizardErrorCodes: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseDataWizardDetailsWizardErrorCodes },
      wizardRequestParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseDataWizardDetailsWizardRequestParameters },
      wizardResponseParameters: { 'type': 'array', 'itemType': GetDataServicePublishedApiResponseDataWizardDetailsWizardResponseParameters },
      wizardConnection: GetDataServicePublishedApiResponseDataWizardDetailsWizardConnection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServicePublishedApiResponseData extends $tea.Model {
  apiId: number;
  apiMode: number;
  apiName: string;
  apiPath: string;
  createdTime: string;
  creatorId: string;
  description: string;
  groupId: string;
  modifiedTime: string;
  operatorId: string;
  projectId: number;
  requestMethod: number;
  responseContentType: number;
  status: number;
  tenantId: number;
  timeout: number;
  visibleRange: number;
  registrationDetails: GetDataServicePublishedApiResponseDataRegistrationDetails;
  scriptDetails: GetDataServicePublishedApiResponseDataScriptDetails;
  wizardDetails: GetDataServicePublishedApiResponseDataWizardDetails;
  protocols: number[];
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMode: 'ApiMode',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      description: 'Description',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      operatorId: 'OperatorId',
      projectId: 'ProjectId',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      status: 'Status',
      tenantId: 'TenantId',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      registrationDetails: 'RegistrationDetails',
      scriptDetails: 'ScriptDetails',
      wizardDetails: 'WizardDetails',
      protocols: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiMode: 'number',
      apiName: 'string',
      apiPath: 'string',
      createdTime: 'string',
      creatorId: 'string',
      description: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      operatorId: 'string',
      projectId: 'number',
      requestMethod: 'number',
      responseContentType: 'number',
      status: 'number',
      tenantId: 'number',
      timeout: 'number',
      visibleRange: 'number',
      registrationDetails: GetDataServicePublishedApiResponseDataRegistrationDetails,
      scriptDetails: GetDataServicePublishedApiResponseDataScriptDetails,
      wizardDetails: GetDataServicePublishedApiResponseDataWizardDetails,
      protocols: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponseDataRuns extends $tea.Model {
  absTime: number;
  beginCast: number;
  beginRunningTime: number;
  beginWaitResTime: number;
  beginWaitTimeTime: number;
  bizdate: number;
  cycTime: number;
  endCast: number;
  finishTime: number;
  inGroupId: number;
  instanceId: number;
  nodeId: number;
  nodeName: string;
  owner: string;
  projectId: number;
  status: string;
  static names(): { [key: string]: string } {
    return {
      absTime: 'AbsTime',
      beginCast: 'BeginCast',
      beginRunningTime: 'BeginRunningTime',
      beginWaitResTime: 'BeginWaitResTime',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      bizdate: 'Bizdate',
      cycTime: 'CycTime',
      endCast: 'EndCast',
      finishTime: 'FinishTime',
      inGroupId: 'InGroupId',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absTime: 'number',
      beginCast: 'number',
      beginRunningTime: 'number',
      beginWaitResTime: 'number',
      beginWaitTimeTime: 'number',
      bizdate: 'number',
      cycTime: 'number',
      endCast: 'number',
      finishTime: 'number',
      inGroupId: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponseDataTopics extends $tea.Model {
  instanceId: number;
  topicId: number;
  topicName: number;
  addTime: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topicId: 'TopicId',
      topicName: 'TopicName',
      addTime: 'AddTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      topicId: 'number',
      topicName: 'number',
      addTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineKeyPathResponseData extends $tea.Model {
  instanceId: number;
  projectId: number;
  nodeId: number;
  nodeName: string;
  bizdate: number;
  inGroupId: number;
  owner: string;
  prgType: number;
  runs: GetBaselineKeyPathResponseDataRuns[];
  topics: GetBaselineKeyPathResponseDataTopics[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      bizdate: 'Bizdate',
      inGroupId: 'InGroupId',
      owner: 'Owner',
      prgType: 'PrgType',
      runs: 'Runs',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      bizdate: 'number',
      inGroupId: 'number',
      owner: 'string',
      prgType: 'number',
      runs: { 'type': 'array', 'itemType': GetBaselineKeyPathResponseDataRuns },
      topics: { 'type': 'array', 'itemType': GetBaselineKeyPathResponseDataTopics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseDataRobots extends $tea.Model {
  webUrl: string;
  atAll: boolean;
  static names(): { [key: string]: string } {
    return {
      webUrl: 'WebUrl',
      atAll: 'AtAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webUrl: 'string',
      atAll: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseDataNodes extends $tea.Model {
  nodeId: number;
  nodeName: string;
  owner: string;
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseDataBaselines extends $tea.Model {
  baselineId: number;
  baselineName: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseDataProjects extends $tea.Model {
  projectId: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseDataBizProcesses extends $tea.Model {
  bizId: number;
  bizProcessName: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizProcessName: 'BizProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'number',
      bizProcessName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemindResponseData extends $tea.Model {
  remindId: number;
  remindName: string;
  dndStart: string;
  dndEnd: string;
  remindUnit: string;
  remindType: string;
  alertUnit: string;
  useflag: boolean;
  founder: string;
  alertInterval: number;
  detail: string;
  maxAlertTimes: number;
  robots: GetRemindResponseDataRobots[];
  nodes: GetRemindResponseDataNodes[];
  baselines: GetRemindResponseDataBaselines[];
  projects: GetRemindResponseDataProjects[];
  bizProcesses: GetRemindResponseDataBizProcesses[];
  alertMethods: string[];
  alertTargets: string[];
  static names(): { [key: string]: string } {
    return {
      remindId: 'RemindId',
      remindName: 'RemindName',
      dndStart: 'DndStart',
      dndEnd: 'DndEnd',
      remindUnit: 'RemindUnit',
      remindType: 'RemindType',
      alertUnit: 'AlertUnit',
      useflag: 'Useflag',
      founder: 'Founder',
      alertInterval: 'AlertInterval',
      detail: 'Detail',
      maxAlertTimes: 'MaxAlertTimes',
      robots: 'Robots',
      nodes: 'Nodes',
      baselines: 'Baselines',
      projects: 'Projects',
      bizProcesses: 'BizProcesses',
      alertMethods: 'AlertMethods',
      alertTargets: 'AlertTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindId: 'number',
      remindName: 'string',
      dndStart: 'string',
      dndEnd: 'string',
      remindUnit: 'string',
      remindType: 'string',
      alertUnit: 'string',
      useflag: 'boolean',
      founder: 'string',
      alertInterval: 'number',
      detail: 'string',
      maxAlertTimes: 'number',
      robots: { 'type': 'array', 'itemType': GetRemindResponseDataRobots },
      nodes: { 'type': 'array', 'itemType': GetRemindResponseDataNodes },
      baselines: { 'type': 'array', 'itemType': GetRemindResponseDataBaselines },
      projects: { 'type': 'array', 'itemType': GetRemindResponseDataProjects },
      bizProcesses: { 'type': 'array', 'itemType': GetRemindResponseDataBizProcesses },
      alertMethods: { 'type': 'array', 'itemType': 'string' },
      alertTargets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableIntroWikiResponseData extends $tea.Model {
  createTime: number;
  modifiedTime: number;
  creator: string;
  version: number;
  creatorName: string;
  content: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      creator: 'Creator',
      version: 'Version',
      creatorName: 'CreatorName',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      modifiedTime: 'number',
      creator: 'string',
      version: 'number',
      creatorName: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusResponseDataLastInstance extends $tea.Model {
  instanceId: number;
  status: string;
  projectId: number;
  owner: string;
  nodeId: number;
  finishTime: number;
  endCast: number;
  nodeName: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
      projectId: 'ProjectId',
      owner: 'Owner',
      nodeId: 'NodeId',
      finishTime: 'FinishTime',
      endCast: 'EndCast',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      status: 'string',
      projectId: 'number',
      owner: 'string',
      nodeId: 'number',
      finishTime: 'number',
      endCast: 'number',
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusResponseDataBlockInstance extends $tea.Model {
  instanceId: number;
  status: string;
  projectId: number;
  owner: string;
  nodeId: number;
  finishTime: number;
  endCast: number;
  nodeName: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
      projectId: 'ProjectId',
      owner: 'Owner',
      nodeId: 'NodeId',
      finishTime: 'FinishTime',
      endCast: 'EndCast',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      status: 'string',
      projectId: 'number',
      owner: 'string',
      nodeId: 'number',
      finishTime: 'number',
      endCast: 'number',
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineStatusResponseData extends $tea.Model {
  baselineName: string;
  baselineId: number;
  bizdate: number;
  owner: string;
  expTime: number;
  finishTime: number;
  endCast: number;
  slaTime: number;
  priority: number;
  projectId: number;
  buffer: number;
  status: string;
  finishStatus: string;
  inGroupId: number;
  lastInstance: GetBaselineStatusResponseDataLastInstance;
  blockInstance: GetBaselineStatusResponseDataBlockInstance;
  static names(): { [key: string]: string } {
    return {
      baselineName: 'BaselineName',
      baselineId: 'BaselineId',
      bizdate: 'Bizdate',
      owner: 'Owner',
      expTime: 'ExpTime',
      finishTime: 'FinishTime',
      endCast: 'EndCast',
      slaTime: 'SlaTime',
      priority: 'Priority',
      projectId: 'ProjectId',
      buffer: 'Buffer',
      status: 'Status',
      finishStatus: 'FinishStatus',
      inGroupId: 'InGroupId',
      lastInstance: 'LastInstance',
      blockInstance: 'BlockInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineName: 'string',
      baselineId: 'number',
      bizdate: 'number',
      owner: 'string',
      expTime: 'number',
      finishTime: 'number',
      endCast: 'number',
      slaTime: 'number',
      priority: 'number',
      projectId: 'number',
      buffer: 'number',
      status: 'string',
      finishStatus: 'string',
      inGroupId: 'number',
      lastInstance: GetBaselineStatusResponseDataLastInstance,
      blockInstance: GetBaselineStatusResponseDataBlockInstance,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableLineageResponseDataDataEntityList extends $tea.Model {
  tableName: string;
  tableGuid: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableLineageResponseData extends $tea.Model {
  hasNext: boolean;
  nextPrimaryKey: string;
  dataEntityList: GetMetaTableLineageResponseDataDataEntityList[];
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      nextPrimaryKey: 'NextPrimaryKey',
      dataEntityList: 'DataEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      nextPrimaryKey: 'string',
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTableLineageResponseDataDataEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineStatusesResponseDataBaselineStatuses extends $tea.Model {
  baselineName: string;
  baselineId: number;
  bizdate: number;
  owner: string;
  expTime: number;
  finishTime: number;
  endCast: number;
  slaTime: number;
  priority: number;
  projectId: number;
  buffer: number;
  status: string;
  finishStatus: string;
  inGroupId: number;
  static names(): { [key: string]: string } {
    return {
      baselineName: 'BaselineName',
      baselineId: 'BaselineId',
      bizdate: 'Bizdate',
      owner: 'Owner',
      expTime: 'ExpTime',
      finishTime: 'FinishTime',
      endCast: 'EndCast',
      slaTime: 'SlaTime',
      priority: 'Priority',
      projectId: 'ProjectId',
      buffer: 'Buffer',
      status: 'Status',
      finishStatus: 'FinishStatus',
      inGroupId: 'InGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineName: 'string',
      baselineId: 'number',
      bizdate: 'number',
      owner: 'string',
      expTime: 'number',
      finishTime: 'number',
      endCast: 'number',
      slaTime: 'number',
      priority: 'number',
      projectId: 'number',
      buffer: 'number',
      status: 'string',
      finishStatus: 'string',
      inGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaselineStatusesResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  baselineStatuses: ListBaselineStatusesResponseDataBaselineStatuses[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      baselineStatuses: 'BaselineStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      baselineStatuses: { 'type': 'array', 'itemType': ListBaselineStatusesResponseDataBaselineStatuses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindsResponseDataReminds extends $tea.Model {
  remindId: number;
  remindName: string;
  dndStart: string;
  dndEnd: string;
  remindUnit: string;
  remindType: string;
  alertUnit: string;
  useflag: boolean;
  founder: string;
  nodeIds: number[];
  baselineIds: number[];
  projectIds: number[];
  bizProcessIds: number[];
  alertMethods: string[];
  alertTargets: string[];
  static names(): { [key: string]: string } {
    return {
      remindId: 'RemindId',
      remindName: 'RemindName',
      dndStart: 'DndStart',
      dndEnd: 'DndEnd',
      remindUnit: 'RemindUnit',
      remindType: 'RemindType',
      alertUnit: 'AlertUnit',
      useflag: 'Useflag',
      founder: 'Founder',
      nodeIds: 'NodeIds',
      baselineIds: 'BaselineIds',
      projectIds: 'ProjectIds',
      bizProcessIds: 'BizProcessIds',
      alertMethods: 'AlertMethods',
      alertTargets: 'AlertTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindId: 'number',
      remindName: 'string',
      dndStart: 'string',
      dndEnd: 'string',
      remindUnit: 'string',
      remindType: 'string',
      alertUnit: 'string',
      useflag: 'boolean',
      founder: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'number' },
      baselineIds: { 'type': 'array', 'itemType': 'number' },
      projectIds: { 'type': 'array', 'itemType': 'number' },
      bizProcessIds: { 'type': 'array', 'itemType': 'number' },
      alertMethods: { 'type': 'array', 'itemType': 'string' },
      alertTargets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindsResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  reminds: ListRemindsResponseDataReminds[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      reminds: 'Reminds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      reminds: { 'type': 'array', 'itemType': ListRemindsResponseDataReminds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityEntityResponseData extends $tea.Model {
  id: number;
  projectName: string;
  tableName: string;
  envType: string;
  matchExpression: string;
  entityLevel: number;
  onDuty: string;
  modifyUser: string;
  createTime: number;
  modifyTime: number;
  sql: number;
  task: number;
  followers: string;
  hasRelativeNode: boolean;
  relativeNode: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectName: 'ProjectName',
      tableName: 'TableName',
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
      entityLevel: 'EntityLevel',
      onDuty: 'OnDuty',
      modifyUser: 'ModifyUser',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      sql: 'Sql',
      task: 'Task',
      followers: 'Followers',
      hasRelativeNode: 'HasRelativeNode',
      relativeNode: 'RelativeNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      projectName: 'string',
      tableName: 'string',
      envType: 'string',
      matchExpression: 'string',
      entityLevel: 'number',
      onDuty: 'string',
      modifyUser: 'string',
      createTime: 'number',
      modifyTime: 'number',
      sql: 'number',
      task: 'number',
      followers: 'string',
      hasRelativeNode: 'boolean',
      relativeNode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityFollowerResponseData extends $tea.Model {
  projectName: string;
  tableName: string;
  id: number;
  entityId: string;
  follower: string;
  alarmMode: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      tableName: 'TableName',
      id: 'Id',
      entityId: 'EntityId',
      follower: 'Follower',
      alarmMode: 'AlarmMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      tableName: 'string',
      id: 'number',
      entityId: 'string',
      follower: 'string',
      alarmMode: 'number',
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
      'ap-northeast-1': "dataworks.ap-northeast-1.aliyuncs.com",
      'ap-south-1': "dataworks.ap-south-1.aliyuncs.com",
      'ap-southeast-1': "dataworks.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "dataworks.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "dataworks.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "dataworks.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "dataworks.cn-beijing.aliyuncs.com",
      'cn-chengdu': "dataworks.cn-chengdu.aliyuncs.com",
      'cn-hangzhou': "dataworks.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "dataworks.cn-hongkong.aliyuncs.com",
      'cn-huhehaote': "dataworks.aliyuncs.com",
      'cn-qingdao': "dataworks.aliyuncs.com",
      'cn-shanghai': "dataworks.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "dataworks.cn-shenzhen.aliyuncs.com",
      'cn-zhangjiakou': "dataworks.aliyuncs.com",
      'eu-central-1': "dataworks.eu-central-1.aliyuncs.com",
      'eu-west-1': "dataworks.eu-west-1.aliyuncs.com",
      'me-east-1': "dataworks.me-east-1.aliyuncs.com",
      'us-east-1': "dataworks.us-east-1.aliyuncs.com",
      'us-west-1': "dataworks.us-west-1.aliyuncs.com",
      'cn-hangzhou-finance': "dataworks.aliyuncs.com",
      'cn-shenzhen-finance-1': "dataworks.aliyuncs.com",
      'cn-shanghai-finance-1': "dataworks.aliyuncs.com",
      'cn-north-2-gov-1': "dataworks.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dataworks-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async listQualityResultsByEntityWithOptions(request: ListQualityResultsByEntityRequest, runtime: $Util.RuntimeOptions): Promise<ListQualityResultsByEntityResponse> {
    Util.validateModel(request);
    return $tea.cast<ListQualityResultsByEntityResponse>(await this.doRequest("ListQualityResultsByEntity", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListQualityResultsByEntityResponse({}));
  }

  async listQualityResultsByEntity(request: ListQualityResultsByEntityRequest): Promise<ListQualityResultsByEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQualityResultsByEntityWithOptions(request, runtime);
  }

  async getNodeTypeListInfoWithOptions(request: GetNodeTypeListInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeTypeListInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<GetNodeTypeListInfoResponse>(await this.doRequest("GetNodeTypeListInfo", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetNodeTypeListInfoResponse({}));
  }

  async getNodeTypeListInfo(request: GetNodeTypeListInfoRequest): Promise<GetNodeTypeListInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeTypeListInfoWithOptions(request, runtime);
  }

  async getInstanceStatusCountWithOptions(request: GetInstanceStatusCountRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceStatusCountResponse> {
    Util.validateModel(request);
    return $tea.cast<GetInstanceStatusCountResponse>(await this.doRequest("GetInstanceStatusCount", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetInstanceStatusCountResponse({}));
  }

  async getInstanceStatusCount(request: GetInstanceStatusCountRequest): Promise<GetInstanceStatusCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceStatusCountWithOptions(request, runtime);
  }

  async listDataServiceFoldersWithOptions(request: ListDataServiceFoldersRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceFoldersResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDataServiceFoldersResponse>(await this.doRequest("ListDataServiceFolders", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListDataServiceFoldersResponse({}));
  }

  async listDataServiceFolders(request: ListDataServiceFoldersRequest): Promise<ListDataServiceFoldersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceFoldersWithOptions(request, runtime);
  }

  async listQualityResultsByRuleWithOptions(request: ListQualityResultsByRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListQualityResultsByRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<ListQualityResultsByRuleResponse>(await this.doRequest("ListQualityResultsByRule", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListQualityResultsByRuleResponse({}));
  }

  async listQualityResultsByRule(request: ListQualityResultsByRuleRequest): Promise<ListQualityResultsByRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQualityResultsByRuleWithOptions(request, runtime);
  }

  async listMetaDBWithOptions(request: ListMetaDBRequest, runtime: $Util.RuntimeOptions): Promise<ListMetaDBResponse> {
    Util.validateModel(request);
    return $tea.cast<ListMetaDBResponse>(await this.doRequest("ListMetaDB", "HTTPS", "GET", "2020-05-18", "AK", $tea.toMap(request), null, runtime), new ListMetaDBResponse({}));
  }

  async listMetaDB(request: ListMetaDBRequest): Promise<ListMetaDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMetaDBWithOptions(request, runtime);
  }

  async createTableWithOptions(request: CreateTableRequest, runtime: $Util.RuntimeOptions): Promise<CreateTableResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateTableResponse>(await this.doRequest("CreateTable", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateTableResponse({}));
  }

  async createTable(request: CreateTableRequest): Promise<CreateTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTableWithOptions(request, runtime);
  }

  async createTableThemeWithOptions(request: CreateTableThemeRequest, runtime: $Util.RuntimeOptions): Promise<CreateTableThemeResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateTableThemeResponse>(await this.doRequest("CreateTableTheme", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateTableThemeResponse({}));
  }

  async createTableTheme(request: CreateTableThemeRequest): Promise<CreateTableThemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTableThemeWithOptions(request, runtime);
  }

  async getInstanceErrorRankWithOptions(request: GetInstanceErrorRankRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceErrorRankResponse> {
    Util.validateModel(request);
    return $tea.cast<GetInstanceErrorRankResponse>(await this.doRequest("GetInstanceErrorRank", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetInstanceErrorRankResponse({}));
  }

  async getInstanceErrorRank(request: GetInstanceErrorRankRequest): Promise<GetInstanceErrorRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceErrorRankWithOptions(request, runtime);
  }

  async getDDLJobStatusWithOptions(request: GetDDLJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetDDLJobStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDDLJobStatusResponse>(await this.doRequest("GetDDLJobStatus", "HTTPS", "GET", "2020-05-18", "AK", $tea.toMap(request), null, runtime), new GetDDLJobStatusResponse({}));
  }

  async getDDLJobStatus(request: GetDDLJobStatusRequest): Promise<GetDDLJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDDLJobStatusWithOptions(request, runtime);
  }

  async getInstanceConsumeTimeRankWithOptions(request: GetInstanceConsumeTimeRankRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceConsumeTimeRankResponse> {
    Util.validateModel(request);
    return $tea.cast<GetInstanceConsumeTimeRankResponse>(await this.doRequest("GetInstanceConsumeTimeRank", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetInstanceConsumeTimeRankResponse({}));
  }

  async getInstanceConsumeTimeRank(request: GetInstanceConsumeTimeRankRequest): Promise<GetInstanceConsumeTimeRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceConsumeTimeRankWithOptions(request, runtime);
  }

  async createDataServiceApiAuthorityWithOptions(request: CreateDataServiceApiAuthorityRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataServiceApiAuthorityResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDataServiceApiAuthorityResponse>(await this.doRequest("CreateDataServiceApiAuthority", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateDataServiceApiAuthorityResponse({}));
  }

  async createDataServiceApiAuthority(request: CreateDataServiceApiAuthorityRequest): Promise<CreateDataServiceApiAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataServiceApiAuthorityWithOptions(request, runtime);
  }

  async deleteDataServiceApiAuthorityWithOptions(request: DeleteDataServiceApiAuthorityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataServiceApiAuthorityResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDataServiceApiAuthorityResponse>(await this.doRequest("DeleteDataServiceApiAuthority", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteDataServiceApiAuthorityResponse({}));
  }

  async deleteDataServiceApiAuthority(request: DeleteDataServiceApiAuthorityRequest): Promise<DeleteDataServiceApiAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataServiceApiAuthorityWithOptions(request, runtime);
  }

  async createDataServiceGroupWithOptions(request: CreateDataServiceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataServiceGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDataServiceGroupResponse>(await this.doRequest("CreateDataServiceGroup", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateDataServiceGroupResponse({}));
  }

  async createDataServiceGroup(request: CreateDataServiceGroupRequest): Promise<CreateDataServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataServiceGroupWithOptions(request, runtime);
  }

  async updateMetaTableWithOptions(request: UpdateMetaTableRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMetaTableResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateMetaTableResponse>(await this.doRequest("UpdateMetaTable", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateMetaTableResponse({}));
  }

  async updateMetaTable(request: UpdateMetaTableRequest): Promise<UpdateMetaTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMetaTableWithOptions(request, runtime);
  }

  async getInstanceCountTrendWithOptions(request: GetInstanceCountTrendRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceCountTrendResponse> {
    Util.validateModel(request);
    return $tea.cast<GetInstanceCountTrendResponse>(await this.doRequest("GetInstanceCountTrend", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetInstanceCountTrendResponse({}));
  }

  async getInstanceCountTrend(request: GetInstanceCountTrendRequest): Promise<GetInstanceCountTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceCountTrendWithOptions(request, runtime);
  }

  async deleteTableWithOptions(request: DeleteTableRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTableResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteTableResponse>(await this.doRequest("DeleteTable", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteTableResponse({}));
  }

  async deleteTable(request: DeleteTableRequest): Promise<DeleteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTableWithOptions(request, runtime);
  }

  async listTableThemeWithOptions(request: ListTableThemeRequest, runtime: $Util.RuntimeOptions): Promise<ListTableThemeResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTableThemeResponse>(await this.doRequest("ListTableTheme", "HTTPS", "GET", "2020-05-18", "AK", $tea.toMap(request), null, runtime), new ListTableThemeResponse({}));
  }

  async listTableTheme(request: ListTableThemeRequest): Promise<ListTableThemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTableThemeWithOptions(request, runtime);
  }

  async getSuccessInstanceTrendWithOptions(request: GetSuccessInstanceTrendRequest, runtime: $Util.RuntimeOptions): Promise<GetSuccessInstanceTrendResponse> {
    Util.validateModel(request);
    return $tea.cast<GetSuccessInstanceTrendResponse>(await this.doRequest("GetSuccessInstanceTrend", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetSuccessInstanceTrendResponse({}));
  }

  async getSuccessInstanceTrend(request: GetSuccessInstanceTrendRequest): Promise<GetSuccessInstanceTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSuccessInstanceTrendWithOptions(request, runtime);
  }

  async updateTableWithOptions(request: UpdateTableRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTableResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateTableResponse>(await this.doRequest("UpdateTable", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateTableResponse({}));
  }

  async updateTable(request: UpdateTableRequest): Promise<UpdateTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTableWithOptions(request, runtime);
  }

  async getDataServiceFolderWithOptions(request: GetDataServiceFolderRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServiceFolderResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDataServiceFolderResponse>(await this.doRequest("GetDataServiceFolder", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetDataServiceFolderResponse({}));
  }

  async getDataServiceFolder(request: GetDataServiceFolderRequest): Promise<GetDataServiceFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServiceFolderWithOptions(request, runtime);
  }

  async listTableLevelWithOptions(request: ListTableLevelRequest, runtime: $Util.RuntimeOptions): Promise<ListTableLevelResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTableLevelResponse>(await this.doRequest("ListTableLevel", "HTTPS", "GET", "2020-05-18", "AK", $tea.toMap(request), null, runtime), new ListTableLevelResponse({}));
  }

  async listTableLevel(request: ListTableLevelRequest): Promise<ListTableLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTableLevelWithOptions(request, runtime);
  }

  async listDataServiceGroupsWithOptions(request: ListDataServiceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceGroupsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDataServiceGroupsResponse>(await this.doRequest("ListDataServiceGroups", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListDataServiceGroupsResponse({}));
  }

  async listDataServiceGroups(request: ListDataServiceGroupsRequest): Promise<ListDataServiceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceGroupsWithOptions(request, runtime);
  }

  async updateTableThemeWithOptions(request: UpdateTableThemeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTableThemeResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateTableThemeResponse>(await this.doRequest("UpdateTableTheme", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateTableThemeResponse({}));
  }

  async updateTableTheme(request: UpdateTableThemeRequest): Promise<UpdateTableThemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTableThemeWithOptions(request, runtime);
  }

  async createDataServiceFolderWithOptions(request: CreateDataServiceFolderRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataServiceFolderResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDataServiceFolderResponse>(await this.doRequest("CreateDataServiceFolder", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateDataServiceFolderResponse({}));
  }

  async createDataServiceFolder(request: CreateDataServiceFolderRequest): Promise<CreateDataServiceFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataServiceFolderWithOptions(request, runtime);
  }

  async getDataServiceGroupWithOptions(request: GetDataServiceGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServiceGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDataServiceGroupResponse>(await this.doRequest("GetDataServiceGroup", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetDataServiceGroupResponse({}));
  }

  async getDataServiceGroup(request: GetDataServiceGroupRequest): Promise<GetDataServiceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServiceGroupWithOptions(request, runtime);
  }

  async createTableLevelWithOptions(request: CreateTableLevelRequest, runtime: $Util.RuntimeOptions): Promise<CreateTableLevelResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateTableLevelResponse>(await this.doRequest("CreateTableLevel", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateTableLevelResponse({}));
  }

  async createTableLevel(request: CreateTableLevelRequest): Promise<CreateTableLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTableLevelWithOptions(request, runtime);
  }

  async updateMetaTableIntroWikiWithOptions(request: UpdateMetaTableIntroWikiRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMetaTableIntroWikiResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateMetaTableIntroWikiResponse>(await this.doRequest("UpdateMetaTableIntroWiki", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateMetaTableIntroWikiResponse({}));
  }

  async updateMetaTableIntroWiki(request: UpdateMetaTableIntroWikiRequest): Promise<UpdateMetaTableIntroWikiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMetaTableIntroWikiWithOptions(request, runtime);
  }

  async deleteTableLevelWithOptions(request: DeleteTableLevelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTableLevelResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteTableLevelResponse>(await this.doRequest("DeleteTableLevel", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteTableLevelResponse({}));
  }

  async deleteTableLevel(request: DeleteTableLevelRequest): Promise<DeleteTableLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTableLevelWithOptions(request, runtime);
  }

  async updateTableLevelWithOptions(request: UpdateTableLevelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTableLevelResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateTableLevelResponse>(await this.doRequest("UpdateTableLevel", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateTableLevelResponse({}));
  }

  async updateTableLevel(request: UpdateTableLevelRequest): Promise<UpdateTableLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTableLevelWithOptions(request, runtime);
  }

  async deleteTableThemeWithOptions(request: DeleteTableThemeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTableThemeResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteTableThemeResponse>(await this.doRequest("DeleteTableTheme", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteTableThemeResponse({}));
  }

  async deleteTableTheme(request: DeleteTableThemeRequest): Promise<DeleteTableThemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTableThemeWithOptions(request, runtime);
  }

  async listProgramTypeCountWithOptions(request: ListProgramTypeCountRequest, runtime: $Util.RuntimeOptions): Promise<ListProgramTypeCountResponse> {
    Util.validateModel(request);
    return $tea.cast<ListProgramTypeCountResponse>(await this.doRequest("ListProgramTypeCount", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListProgramTypeCountResponse({}));
  }

  async listProgramTypeCount(request: ListProgramTypeCountRequest): Promise<ListProgramTypeCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProgramTypeCountWithOptions(request, runtime);
  }

  async updateTableModelInfoWithOptions(request: UpdateTableModelInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTableModelInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateTableModelInfoResponse>(await this.doRequest("UpdateTableModelInfo", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateTableModelInfoResponse({}));
  }

  async updateTableModelInfo(request: UpdateTableModelInfoRequest): Promise<UpdateTableModelInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTableModelInfoWithOptions(request, runtime);
  }

  async listProjectsWithOptions(request: ListProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListProjectsResponse>(await this.doRequest("ListProjects", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListProjectsResponse({}));
  }

  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  async listProjectMembersWithOptions(request: ListProjectMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectMembersResponse> {
    Util.validateModel(request);
    return $tea.cast<ListProjectMembersResponse>(await this.doRequest("ListProjectMembers", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListProjectMembersResponse({}));
  }

  async listProjectMembers(request: ListProjectMembersRequest): Promise<ListProjectMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectMembersWithOptions(request, runtime);
  }

  async createProjectMemberWithOptions(request: CreateProjectMemberRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectMemberResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateProjectMemberResponse>(await this.doRequest("CreateProjectMember", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateProjectMemberResponse({}));
  }

  async createProjectMember(request: CreateProjectMemberRequest): Promise<CreateProjectMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectMemberWithOptions(request, runtime);
  }

  async listProjectRolesWithOptions(request: ListProjectRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectRolesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListProjectRolesResponse>(await this.doRequest("ListProjectRoles", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListProjectRolesResponse({}));
  }

  async listProjectRoles(request: ListProjectRolesRequest): Promise<ListProjectRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectRolesWithOptions(request, runtime);
  }

  async addProjectMemberToRoleWithOptions(request: AddProjectMemberToRoleRequest, runtime: $Util.RuntimeOptions): Promise<AddProjectMemberToRoleResponse> {
    Util.validateModel(request);
    return $tea.cast<AddProjectMemberToRoleResponse>(await this.doRequest("AddProjectMemberToRole", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new AddProjectMemberToRoleResponse({}));
  }

  async addProjectMemberToRole(request: AddProjectMemberToRoleRequest): Promise<AddProjectMemberToRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addProjectMemberToRoleWithOptions(request, runtime);
  }

  async removeProjectMemberFromRoleWithOptions(request: RemoveProjectMemberFromRoleRequest, runtime: $Util.RuntimeOptions): Promise<RemoveProjectMemberFromRoleResponse> {
    Util.validateModel(request);
    return $tea.cast<RemoveProjectMemberFromRoleResponse>(await this.doRequest("RemoveProjectMemberFromRole", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new RemoveProjectMemberFromRoleResponse({}));
  }

  async removeProjectMemberFromRole(request: RemoveProjectMemberFromRoleRequest): Promise<RemoveProjectMemberFromRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeProjectMemberFromRoleWithOptions(request, runtime);
  }

  async deleteProjectMemberWithOptions(request: DeleteProjectMemberRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectMemberResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteProjectMemberResponse>(await this.doRequest("DeleteProjectMember", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteProjectMemberResponse({}));
  }

  async deleteProjectMember(request: DeleteProjectMemberRequest): Promise<DeleteProjectMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectMemberWithOptions(request, runtime);
  }

  async createDagComplementWithOptions(request: CreateDagComplementRequest, runtime: $Util.RuntimeOptions): Promise<CreateDagComplementResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDagComplementResponse>(await this.doRequest("CreateDagComplement", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateDagComplementResponse({}));
  }

  async createDagComplement(request: CreateDagComplementRequest): Promise<CreateDagComplementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDagComplementWithOptions(request, runtime);
  }

  async createDagTestWithOptions(request: CreateDagTestRequest, runtime: $Util.RuntimeOptions): Promise<CreateDagTestResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDagTestResponse>(await this.doRequest("CreateDagTest", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateDagTestResponse({}));
  }

  async createDagTest(request: CreateDagTestRequest): Promise<CreateDagTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDagTestWithOptions(request, runtime);
  }

  async listCalcEnginesWithOptions(request: ListCalcEnginesRequest, runtime: $Util.RuntimeOptions): Promise<ListCalcEnginesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListCalcEnginesResponse>(await this.doRequest("ListCalcEngines", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListCalcEnginesResponse({}));
  }

  async listCalcEngines(request: ListCalcEnginesRequest): Promise<ListCalcEnginesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCalcEnginesWithOptions(request, runtime);
  }

  async listConnectionsWithOptions(request: ListConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectionsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListConnectionsResponse>(await this.doRequest("ListConnections", "HTTPS", "GET", "2020-05-18", "AK", $tea.toMap(request), null, runtime), new ListConnectionsResponse({}));
  }

  async listConnections(request: ListConnectionsRequest): Promise<ListConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectionsWithOptions(request, runtime);
  }

  async updateConnectionWithOptions(request: UpdateConnectionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConnectionResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateConnectionResponse>(await this.doRequest("UpdateConnection", "HTTPS", "PUT", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateConnectionResponse({}));
  }

  async updateConnection(request: UpdateConnectionRequest): Promise<UpdateConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConnectionWithOptions(request, runtime);
  }

  async deleteConnectionWithOptions(request: DeleteConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConnectionResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteConnectionResponse>(await this.doRequest("DeleteConnection", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteConnectionResponse({}));
  }

  async deleteConnection(request: DeleteConnectionRequest): Promise<DeleteConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConnectionWithOptions(request, runtime);
  }

  async getProjectDetailWithOptions(request: GetProjectDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<GetProjectDetailResponse>(await this.doRequest("GetProjectDetail", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetProjectDetailResponse({}));
  }

  async getProjectDetail(request: GetProjectDetailRequest): Promise<GetProjectDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectDetailWithOptions(request, runtime);
  }

  async listResourceGroupsWithOptions(request: ListResourceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceGroupsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListResourceGroupsResponse>(await this.doRequest("ListResourceGroups", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListResourceGroupsResponse({}));
  }

  async listResourceGroups(request: ListResourceGroupsRequest): Promise<ListResourceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceGroupsWithOptions(request, runtime);
  }

  async createConnectionWithOptions(request: CreateConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CreateConnectionResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateConnectionResponse>(await this.doRequest("CreateConnection", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateConnectionResponse({}));
  }

  async createConnection(request: CreateConnectionRequest): Promise<CreateConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConnectionWithOptions(request, runtime);
  }

  async getDataServiceApplicationWithOptions(request: GetDataServiceApplicationRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServiceApplicationResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDataServiceApplicationResponse>(await this.doRequest("GetDataServiceApplication", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetDataServiceApplicationResponse({}));
  }

  async getDataServiceApplication(request: GetDataServiceApplicationRequest): Promise<GetDataServiceApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServiceApplicationWithOptions(request, runtime);
  }

  async listDataServiceApplicationsWithOptions(request: ListDataServiceApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceApplicationsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDataServiceApplicationsResponse>(await this.doRequest("ListDataServiceApplications", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListDataServiceApplicationsResponse({}));
  }

  async listDataServiceApplications(request: ListDataServiceApplicationsRequest): Promise<ListDataServiceApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceApplicationsWithOptions(request, runtime);
  }

  async getNodeOnBaselineWithOptions(request: GetNodeOnBaselineRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeOnBaselineResponse> {
    Util.validateModel(request);
    return $tea.cast<GetNodeOnBaselineResponse>(await this.doRequest("GetNodeOnBaseline", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetNodeOnBaselineResponse({}));
  }

  async getNodeOnBaseline(request: GetNodeOnBaselineRequest): Promise<GetNodeOnBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeOnBaselineWithOptions(request, runtime);
  }

  async listBaselineConfigsWithOptions(request: ListBaselineConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListBaselineConfigsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListBaselineConfigsResponse>(await this.doRequest("ListBaselineConfigs", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListBaselineConfigsResponse({}));
  }

  async listBaselineConfigs(request: ListBaselineConfigsRequest): Promise<ListBaselineConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBaselineConfigsWithOptions(request, runtime);
  }

  async getMetaTableChangeLogWithOptions(request: GetMetaTableChangeLogRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableChangeLogResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMetaTableChangeLogResponse>(await this.doRequest("GetMetaTableChangeLog", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetMetaTableChangeLogResponse({}));
  }

  async getMetaTableChangeLog(request: GetMetaTableChangeLogRequest): Promise<GetMetaTableChangeLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableChangeLogWithOptions(request, runtime);
  }

  async getMetaTableOutputWithOptions(request: GetMetaTableOutputRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableOutputResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMetaTableOutputResponse>(await this.doRequest("GetMetaTableOutput", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetMetaTableOutputResponse({}));
  }

  async getMetaTableOutput(request: GetMetaTableOutputRequest): Promise<GetMetaTableOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableOutputWithOptions(request, runtime);
  }

  async getMetaTablePartitionWithOptions(request: GetMetaTablePartitionRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTablePartitionResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMetaTablePartitionResponse>(await this.doRequest("GetMetaTablePartition", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetMetaTablePartitionResponse({}));
  }

  async getMetaTablePartition(request: GetMetaTablePartitionRequest): Promise<GetMetaTablePartitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTablePartitionWithOptions(request, runtime);
  }

  async getMetaTableFullInfoWithOptions(request: GetMetaTableFullInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableFullInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMetaTableFullInfoResponse>(await this.doRequest("GetMetaTableFullInfo", "HTTPS", "GET", "2020-05-18", "AK", $tea.toMap(request), null, runtime), new GetMetaTableFullInfoResponse({}));
  }

  async getMetaTableFullInfo(request: GetMetaTableFullInfoRequest): Promise<GetMetaTableFullInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableFullInfoWithOptions(request, runtime);
  }

  async getFileVersionWithOptions(request: GetFileVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetFileVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<GetFileVersionResponse>(await this.doRequest("GetFileVersion", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetFileVersionResponse({}));
  }

  async getFileVersion(request: GetFileVersionRequest): Promise<GetFileVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileVersionWithOptions(request, runtime);
  }

  async getMetaTableBasicInfoWithOptions(request: GetMetaTableBasicInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableBasicInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMetaTableBasicInfoResponse>(await this.doRequest("GetMetaTableBasicInfo", "HTTPS", "GET", "2020-05-18", "AK", $tea.toMap(request), null, runtime), new GetMetaTableBasicInfoResponse({}));
  }

  async getMetaTableBasicInfo(request: GetMetaTableBasicInfoRequest): Promise<GetMetaTableBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableBasicInfoWithOptions(request, runtime);
  }

  async getMetaTableColumnWithOptions(request: GetMetaTableColumnRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableColumnResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMetaTableColumnResponse>(await this.doRequest("GetMetaTableColumn", "HTTPS", "GET", "2020-05-18", "AK", $tea.toMap(request), null, runtime), new GetMetaTableColumnResponse({}));
  }

  async getMetaTableColumn(request: GetMetaTableColumnRequest): Promise<GetMetaTableColumnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableColumnWithOptions(request, runtime);
  }

  async getMetaDBInfoWithOptions(request: GetMetaDBInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaDBInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMetaDBInfoResponse>(await this.doRequest("GetMetaDBInfo", "HTTPS", "GET", "2020-05-18", "AK", $tea.toMap(request), null, runtime), new GetMetaDBInfoResponse({}));
  }

  async getMetaDBInfo(request: GetMetaDBInfoRequest): Promise<GetMetaDBInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaDBInfoWithOptions(request, runtime);
  }

  async getMetaCategoryWithOptions(request: GetMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaCategoryResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMetaCategoryResponse>(await this.doRequest("GetMetaCategory", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetMetaCategoryResponse({}));
  }

  async getMetaCategory(request: GetMetaCategoryRequest): Promise<GetMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaCategoryWithOptions(request, runtime);
  }

  async listAlertMessagesWithOptions(request: ListAlertMessagesRequest, runtime: $Util.RuntimeOptions): Promise<ListAlertMessagesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListAlertMessagesResponse>(await this.doRequest("ListAlertMessages", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListAlertMessagesResponse({}));
  }

  async listAlertMessages(request: ListAlertMessagesRequest): Promise<ListAlertMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlertMessagesWithOptions(request, runtime);
  }

  async getBaselineConfigWithOptions(request: GetBaselineConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetBaselineConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<GetBaselineConfigResponse>(await this.doRequest("GetBaselineConfig", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetBaselineConfigResponse({}));
  }

  async getBaselineConfig(request: GetBaselineConfigRequest): Promise<GetBaselineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBaselineConfigWithOptions(request, runtime);
  }

  async searchMetaTablesWithOptions(request: SearchMetaTablesRequest, runtime: $Util.RuntimeOptions): Promise<SearchMetaTablesResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchMetaTablesResponse>(await this.doRequest("SearchMetaTables", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new SearchMetaTablesResponse({}));
  }

  async searchMetaTables(request: SearchMetaTablesRequest): Promise<SearchMetaTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchMetaTablesWithOptions(request, runtime);
  }

  async getMetaTableListByCategoryWithOptions(request: GetMetaTableListByCategoryRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableListByCategoryResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMetaTableListByCategoryResponse>(await this.doRequest("GetMetaTableListByCategory", "HTTPS", "GET", "2020-05-18", "AK", $tea.toMap(request), null, runtime), new GetMetaTableListByCategoryResponse({}));
  }

  async getMetaTableListByCategory(request: GetMetaTableListByCategoryRequest): Promise<GetMetaTableListByCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableListByCategoryWithOptions(request, runtime);
  }

  async deleteMetaCategoryWithOptions(request: DeleteMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetaCategoryResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteMetaCategoryResponse>(await this.doRequest("DeleteMetaCategory", "HTTPS", "GET", "2020-05-18", "AK", $tea.toMap(request), null, runtime), new DeleteMetaCategoryResponse({}));
  }

  async deleteMetaCategory(request: DeleteMetaCategoryRequest): Promise<DeleteMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetaCategoryWithOptions(request, runtime);
  }

  async updateMetaCategoryWithOptions(request: UpdateMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMetaCategoryResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateMetaCategoryResponse>(await this.doRequest("UpdateMetaCategory", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateMetaCategoryResponse({}));
  }

  async updateMetaCategory(request: UpdateMetaCategoryRequest): Promise<UpdateMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMetaCategoryWithOptions(request, runtime);
  }

  async listTopicsWithOptions(request: ListTopicsRequest, runtime: $Util.RuntimeOptions): Promise<ListTopicsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTopicsResponse>(await this.doRequest("ListTopics", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListTopicsResponse({}));
  }

  async listTopics(request: ListTopicsRequest): Promise<ListTopicsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTopicsWithOptions(request, runtime);
  }

  async listFileVersionsWithOptions(request: ListFileVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListFileVersionsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListFileVersionsResponse>(await this.doRequest("ListFileVersions", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListFileVersionsResponse({}));
  }

  async listFileVersions(request: ListFileVersionsRequest): Promise<ListFileVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFileVersionsWithOptions(request, runtime);
  }

  async createMetaCategoryWithOptions(request: CreateMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateMetaCategoryResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateMetaCategoryResponse>(await this.doRequest("CreateMetaCategory", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateMetaCategoryResponse({}));
  }

  async createMetaCategory(request: CreateMetaCategoryRequest): Promise<CreateMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMetaCategoryWithOptions(request, runtime);
  }

  async listNodeIOWithOptions(request: ListNodeIORequest, runtime: $Util.RuntimeOptions): Promise<ListNodeIOResponse> {
    Util.validateModel(request);
    return $tea.cast<ListNodeIOResponse>(await this.doRequest("ListNodeIO", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListNodeIOResponse({}));
  }

  async listNodeIO(request: ListNodeIORequest): Promise<ListNodeIOResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodeIOWithOptions(request, runtime);
  }

  async getTopicInfluenceWithOptions(request: GetTopicInfluenceRequest, runtime: $Util.RuntimeOptions): Promise<GetTopicInfluenceResponse> {
    Util.validateModel(request);
    return $tea.cast<GetTopicInfluenceResponse>(await this.doRequest("GetTopicInfluence", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetTopicInfluenceResponse({}));
  }

  async getTopicInfluence(request: GetTopicInfluenceRequest): Promise<GetTopicInfluenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTopicInfluenceWithOptions(request, runtime);
  }

  async getTopicWithOptions(request: GetTopicRequest, runtime: $Util.RuntimeOptions): Promise<GetTopicResponse> {
    Util.validateModel(request);
    return $tea.cast<GetTopicResponse>(await this.doRequest("GetTopic", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetTopicResponse({}));
  }

  async getTopic(request: GetTopicRequest): Promise<GetTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTopicWithOptions(request, runtime);
  }

  async deleteFromMetaCategoryWithOptions(request: DeleteFromMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFromMetaCategoryResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteFromMetaCategoryResponse>(await this.doRequest("DeleteFromMetaCategory", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteFromMetaCategoryResponse({}));
  }

  async deleteFromMetaCategory(request: DeleteFromMetaCategoryRequest): Promise<DeleteFromMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFromMetaCategoryWithOptions(request, runtime);
  }

  async getNodeWithOptions(request: GetNodeRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeResponse> {
    Util.validateModel(request);
    return $tea.cast<GetNodeResponse>(await this.doRequest("GetNode", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetNodeResponse({}));
  }

  async getNode(request: GetNodeRequest): Promise<GetNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeWithOptions(request, runtime);
  }

  async listNodesWithOptions(request: ListNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListNodesResponse>(await this.doRequest("ListNodes", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListNodesResponse({}));
  }

  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  async getNodeCodeWithOptions(request: GetNodeCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeCodeResponse> {
    Util.validateModel(request);
    return $tea.cast<GetNodeCodeResponse>(await this.doRequest("GetNodeCode", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetNodeCodeResponse({}));
  }

  async getNodeCode(request: GetNodeCodeRequest): Promise<GetNodeCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeCodeWithOptions(request, runtime);
  }

  async establishRelationTableToBusinessWithOptions(request: EstablishRelationTableToBusinessRequest, runtime: $Util.RuntimeOptions): Promise<EstablishRelationTableToBusinessResponse> {
    Util.validateModel(request);
    return $tea.cast<EstablishRelationTableToBusinessResponse>(await this.doRequest("EstablishRelationTableToBusiness", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new EstablishRelationTableToBusinessResponse({}));
  }

  async establishRelationTableToBusiness(request: EstablishRelationTableToBusinessRequest): Promise<EstablishRelationTableToBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.establishRelationTableToBusinessWithOptions(request, runtime);
  }

  async updateDataServiceApiWithOptions(request: UpdateDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDataServiceApiResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateDataServiceApiResponse>(await this.doRequest("UpdateDataServiceApi", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateDataServiceApiResponse({}));
  }

  async updateDataServiceApi(request: UpdateDataServiceApiRequest): Promise<UpdateDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataServiceApiWithOptions(request, runtime);
  }

  async updateUdfFileWithOptions(request: UpdateUdfFileRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUdfFileResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateUdfFileResponse>(await this.doRequest("UpdateUdfFile", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateUdfFileResponse({}));
  }

  async updateUdfFile(request: UpdateUdfFileRequest): Promise<UpdateUdfFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUdfFileWithOptions(request, runtime);
  }

  async createUdfFileWithOptions(request: CreateUdfFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateUdfFileResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateUdfFileResponse>(await this.doRequest("CreateUdfFile", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateUdfFileResponse({}));
  }

  async createUdfFile(request: CreateUdfFileRequest): Promise<CreateUdfFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUdfFileWithOptions(request, runtime);
  }

  async listFilesWithOptions(request: ListFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListFilesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListFilesResponse>(await this.doRequest("ListFiles", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListFilesResponse({}));
  }

  async listFiles(request: ListFilesRequest): Promise<ListFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFilesWithOptions(request, runtime);
  }

  async listDataServiceAuthorizedApisWithOptions(request: ListDataServiceAuthorizedApisRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceAuthorizedApisResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDataServiceAuthorizedApisResponse>(await this.doRequest("ListDataServiceAuthorizedApis", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListDataServiceAuthorizedApisResponse({}));
  }

  async listDataServiceAuthorizedApis(request: ListDataServiceAuthorizedApisRequest): Promise<ListDataServiceAuthorizedApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceAuthorizedApisWithOptions(request, runtime);
  }

  async updateFileWithOptions(request: UpdateFileRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFileResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateFileResponse>(await this.doRequest("UpdateFile", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateFileResponse({}));
  }

  async updateFile(request: UpdateFileRequest): Promise<UpdateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFileWithOptions(request, runtime);
  }

  async deleteFolderWithOptions(request: DeleteFolderRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFolderResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteFolderResponse>(await this.doRequest("DeleteFolder", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteFolderResponse({}));
  }

  async deleteFolder(request: DeleteFolderRequest): Promise<DeleteFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFolderWithOptions(request, runtime);
  }

  async listFoldersWithOptions(request: ListFoldersRequest, runtime: $Util.RuntimeOptions): Promise<ListFoldersResponse> {
    Util.validateModel(request);
    return $tea.cast<ListFoldersResponse>(await this.doRequest("ListFolders", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListFoldersResponse({}));
  }

  async listFolders(request: ListFoldersRequest): Promise<ListFoldersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFoldersWithOptions(request, runtime);
  }

  async checkMetaPartitionWithOptions(request: CheckMetaPartitionRequest, runtime: $Util.RuntimeOptions): Promise<CheckMetaPartitionResponse> {
    Util.validateModel(request);
    return $tea.cast<CheckMetaPartitionResponse>(await this.doRequest("CheckMetaPartition", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CheckMetaPartitionResponse({}));
  }

  async checkMetaPartition(request: CheckMetaPartitionRequest): Promise<CheckMetaPartitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMetaPartitionWithOptions(request, runtime);
  }

  async updateFolderWithOptions(request: UpdateFolderRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFolderResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateFolderResponse>(await this.doRequest("UpdateFolder", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateFolderResponse({}));
  }

  async updateFolder(request: UpdateFolderRequest): Promise<UpdateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFolderWithOptions(request, runtime);
  }

  async deleteRemindWithOptions(request: DeleteRemindRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRemindResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteRemindResponse>(await this.doRequest("DeleteRemind", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteRemindResponse({}));
  }

  async deleteRemind(request: DeleteRemindRequest): Promise<DeleteRemindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRemindWithOptions(request, runtime);
  }

  async addToMetaCategoryWithOptions(request: AddToMetaCategoryRequest, runtime: $Util.RuntimeOptions): Promise<AddToMetaCategoryResponse> {
    Util.validateModel(request);
    return $tea.cast<AddToMetaCategoryResponse>(await this.doRequest("AddToMetaCategory", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new AddToMetaCategoryResponse({}));
  }

  async addToMetaCategory(request: AddToMetaCategoryRequest): Promise<AddToMetaCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addToMetaCategoryWithOptions(request, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListInstancesResponse>(await this.doRequest("ListInstances", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListInstancesResponse({}));
  }

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  async setSuccessInstanceWithOptions(request: SetSuccessInstanceRequest, runtime: $Util.RuntimeOptions): Promise<SetSuccessInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<SetSuccessInstanceResponse>(await this.doRequest("SetSuccessInstance", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new SetSuccessInstanceResponse({}));
  }

  async setSuccessInstance(request: SetSuccessInstanceRequest): Promise<SetSuccessInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSuccessInstanceWithOptions(request, runtime);
  }

  async createFileWithOptions(request: CreateFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateFileResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateFileResponse>(await this.doRequest("CreateFile", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateFileResponse({}));
  }

  async createFile(request: CreateFileRequest): Promise<CreateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFileWithOptions(request, runtime);
  }

  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<StopInstanceResponse>(await this.doRequest("StopInstance", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new StopInstanceResponse({}));
  }

  async stopInstance(request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  async resumeInstanceWithOptions(request: ResumeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ResumeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<ResumeInstanceResponse>(await this.doRequest("ResumeInstance", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ResumeInstanceResponse({}));
  }

  async resumeInstance(request: ResumeInstanceRequest): Promise<ResumeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeInstanceWithOptions(request, runtime);
  }

  async suspendInstanceWithOptions(request: SuspendInstanceRequest, runtime: $Util.RuntimeOptions): Promise<SuspendInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<SuspendInstanceResponse>(await this.doRequest("SuspendInstance", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new SuspendInstanceResponse({}));
  }

  async suspendInstance(request: SuspendInstanceRequest): Promise<SuspendInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendInstanceWithOptions(request, runtime);
  }

  async restartInstanceWithOptions(request: RestartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<RestartInstanceResponse>(await this.doRequest("RestartInstance", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new RestartInstanceResponse({}));
  }

  async restartInstance(request: RestartInstanceRequest): Promise<RestartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  async listDataServiceApiAuthoritiesWithOptions(request: ListDataServiceApiAuthoritiesRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceApiAuthoritiesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDataServiceApiAuthoritiesResponse>(await this.doRequest("ListDataServiceApiAuthorities", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListDataServiceApiAuthoritiesResponse({}));
  }

  async listDataServiceApiAuthorities(request: ListDataServiceApiAuthoritiesRequest): Promise<ListDataServiceApiAuthoritiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceApiAuthoritiesWithOptions(request, runtime);
  }

  async listDataServicePublishedApisWithOptions(request: ListDataServicePublishedApisRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServicePublishedApisResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDataServicePublishedApisResponse>(await this.doRequest("ListDataServicePublishedApis", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListDataServicePublishedApisResponse({}));
  }

  async listDataServicePublishedApis(request: ListDataServicePublishedApisRequest): Promise<ListDataServicePublishedApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServicePublishedApisWithOptions(request, runtime);
  }

  async getInstanceLogWithOptions(request: GetInstanceLogRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceLogResponse> {
    Util.validateModel(request);
    return $tea.cast<GetInstanceLogResponse>(await this.doRequest("GetInstanceLog", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetInstanceLogResponse({}));
  }

  async getInstanceLog(request: GetInstanceLogRequest): Promise<GetInstanceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceLogWithOptions(request, runtime);
  }

  async createFolderWithOptions(request: CreateFolderRequest, runtime: $Util.RuntimeOptions): Promise<CreateFolderResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateFolderResponse>(await this.doRequest("CreateFolder", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateFolderResponse({}));
  }

  async createFolder(request: CreateFolderRequest): Promise<CreateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFolderWithOptions(request, runtime);
  }

  async getBusinessWithOptions(request: GetBusinessRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessResponse> {
    Util.validateModel(request);
    return $tea.cast<GetBusinessResponse>(await this.doRequest("GetBusiness", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetBusinessResponse({}));
  }

  async getBusiness(request: GetBusinessRequest): Promise<GetBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessWithOptions(request, runtime);
  }

  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<GetInstanceResponse>(await this.doRequest("GetInstance", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetInstanceResponse({}));
  }

  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  async getFileWithOptions(request: GetFileRequest, runtime: $Util.RuntimeOptions): Promise<GetFileResponse> {
    Util.validateModel(request);
    return $tea.cast<GetFileResponse>(await this.doRequest("GetFile", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetFileResponse({}));
  }

  async getFile(request: GetFileRequest): Promise<GetFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileWithOptions(request, runtime);
  }

  async listBusinessWithOptions(request: ListBusinessRequest, runtime: $Util.RuntimeOptions): Promise<ListBusinessResponse> {
    Util.validateModel(request);
    return $tea.cast<ListBusinessResponse>(await this.doRequest("ListBusiness", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListBusinessResponse({}));
  }

  async listBusiness(request: ListBusinessRequest): Promise<ListBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBusinessWithOptions(request, runtime);
  }

  async getMetaDBTableListWithOptions(request: GetMetaDBTableListRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaDBTableListResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMetaDBTableListResponse>(await this.doRequest("GetMetaDBTableList", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetMetaDBTableListResponse({}));
  }

  async getMetaDBTableList(request: GetMetaDBTableListRequest): Promise<GetMetaDBTableListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaDBTableListWithOptions(request, runtime);
  }

  async checkMetaTableWithOptions(request: CheckMetaTableRequest, runtime: $Util.RuntimeOptions): Promise<CheckMetaTableResponse> {
    Util.validateModel(request);
    return $tea.cast<CheckMetaTableResponse>(await this.doRequest("CheckMetaTable", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CheckMetaTableResponse({}));
  }

  async checkMetaTable(request: CheckMetaTableRequest): Promise<CheckMetaTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMetaTableWithOptions(request, runtime);
  }

  async getFolderWithOptions(request: GetFolderRequest, runtime: $Util.RuntimeOptions): Promise<GetFolderResponse> {
    Util.validateModel(request);
    return $tea.cast<GetFolderResponse>(await this.doRequest("GetFolder", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetFolderResponse({}));
  }

  async getFolder(request: GetFolderRequest): Promise<GetFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFolderWithOptions(request, runtime);
  }

  async deployFileWithOptions(request: DeployFileRequest, runtime: $Util.RuntimeOptions): Promise<DeployFileResponse> {
    Util.validateModel(request);
    return $tea.cast<DeployFileResponse>(await this.doRequest("DeployFile", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeployFileResponse({}));
  }

  async deployFile(request: DeployFileRequest): Promise<DeployFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployFileWithOptions(request, runtime);
  }

  async deleteBusinessWithOptions(request: DeleteBusinessRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBusinessResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteBusinessResponse>(await this.doRequest("DeleteBusiness", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteBusinessResponse({}));
  }

  async deleteBusiness(request: DeleteBusinessRequest): Promise<DeleteBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBusinessWithOptions(request, runtime);
  }

  async deleteFileWithOptions(request: DeleteFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFileResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteFileResponse>(await this.doRequest("DeleteFile", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteFileResponse({}));
  }

  async deleteFile(request: DeleteFileRequest): Promise<DeleteFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileWithOptions(request, runtime);
  }

  async listQualityRulesWithOptions(request: ListQualityRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListQualityRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListQualityRulesResponse>(await this.doRequest("ListQualityRules", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListQualityRulesResponse({}));
  }

  async listQualityRules(request: ListQualityRulesRequest): Promise<ListQualityRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQualityRulesWithOptions(request, runtime);
  }

  async createRemindWithOptions(request: CreateRemindRequest, runtime: $Util.RuntimeOptions): Promise<CreateRemindResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateRemindResponse>(await this.doRequest("CreateRemind", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateRemindResponse({}));
  }

  async createRemind(request: CreateRemindRequest): Promise<CreateRemindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRemindWithOptions(request, runtime);
  }

  async getQualityRuleWithOptions(request: GetQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<GetQualityRuleResponse>(await this.doRequest("GetQualityRule", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetQualityRuleResponse({}));
  }

  async getQualityRule(request: GetQualityRuleRequest): Promise<GetQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityRuleWithOptions(request, runtime);
  }

  async getDeploymentWithOptions(request: GetDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<GetDeploymentResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDeploymentResponse>(await this.doRequest("GetDeployment", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetDeploymentResponse({}));
  }

  async getDeployment(request: GetDeploymentRequest): Promise<GetDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeploymentWithOptions(request, runtime);
  }

  async updateRemindWithOptions(request: UpdateRemindRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRemindResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateRemindResponse>(await this.doRequest("UpdateRemind", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateRemindResponse({}));
  }

  async updateRemind(request: UpdateRemindRequest): Promise<UpdateRemindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRemindWithOptions(request, runtime);
  }

  async getMetaColumnLineageWithOptions(request: GetMetaColumnLineageRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaColumnLineageResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMetaColumnLineageResponse>(await this.doRequest("GetMetaColumnLineage", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetMetaColumnLineageResponse({}));
  }

  async getMetaColumnLineage(request: GetMetaColumnLineageRequest): Promise<GetMetaColumnLineageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaColumnLineageWithOptions(request, runtime);
  }

  async updateBusinessWithOptions(request: UpdateBusinessRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBusinessResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateBusinessResponse>(await this.doRequest("UpdateBusiness", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateBusinessResponse({}));
  }

  async updateBusiness(request: UpdateBusinessRequest): Promise<UpdateBusinessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBusinessWithOptions(request, runtime);
  }

  async updateQualityRuleWithOptions(request: UpdateQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateQualityRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateQualityRuleResponse>(await this.doRequest("UpdateQualityRule", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateQualityRuleResponse({}));
  }

  async updateQualityRule(request: UpdateQualityRuleRequest): Promise<UpdateQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateQualityRuleWithOptions(request, runtime);
  }

  async deleteQualityRuleWithOptions(request: DeleteQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteQualityRuleResponse>(await this.doRequest("DeleteQualityRule", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteQualityRuleResponse({}));
  }

  async deleteQualityRule(request: DeleteQualityRuleRequest): Promise<DeleteQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityRuleWithOptions(request, runtime);
  }

  async submitFileWithOptions(request: SubmitFileRequest, runtime: $Util.RuntimeOptions): Promise<SubmitFileResponse> {
    Util.validateModel(request);
    return $tea.cast<SubmitFileResponse>(await this.doRequest("SubmitFile", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new SubmitFileResponse({}));
  }

  async submitFile(request: SubmitFileRequest): Promise<SubmitFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFileWithOptions(request, runtime);
  }

  async getDataServiceApiWithOptions(request: GetDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServiceApiResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDataServiceApiResponse>(await this.doRequest("GetDataServiceApi", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetDataServiceApiResponse({}));
  }

  async getDataServiceApi(request: GetDataServiceApiRequest): Promise<GetDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServiceApiWithOptions(request, runtime);
  }

  async listDataServiceApisWithOptions(request: ListDataServiceApisRequest, runtime: $Util.RuntimeOptions): Promise<ListDataServiceApisResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDataServiceApisResponse>(await this.doRequest("ListDataServiceApis", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListDataServiceApisResponse({}));
  }

  async listDataServiceApis(request: ListDataServiceApisRequest): Promise<ListDataServiceApisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataServiceApisWithOptions(request, runtime);
  }

  async getDataServicePublishedApiWithOptions(request: GetDataServicePublishedApiRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServicePublishedApiResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDataServicePublishedApiResponse>(await this.doRequest("GetDataServicePublishedApi", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetDataServicePublishedApiResponse({}));
  }

  async getDataServicePublishedApi(request: GetDataServicePublishedApiRequest): Promise<GetDataServicePublishedApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServicePublishedApiWithOptions(request, runtime);
  }

  async getBaselineKeyPathWithOptions(request: GetBaselineKeyPathRequest, runtime: $Util.RuntimeOptions): Promise<GetBaselineKeyPathResponse> {
    Util.validateModel(request);
    return $tea.cast<GetBaselineKeyPathResponse>(await this.doRequest("GetBaselineKeyPath", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetBaselineKeyPathResponse({}));
  }

  async getBaselineKeyPath(request: GetBaselineKeyPathRequest): Promise<GetBaselineKeyPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBaselineKeyPathWithOptions(request, runtime);
  }

  async getRemindWithOptions(request: GetRemindRequest, runtime: $Util.RuntimeOptions): Promise<GetRemindResponse> {
    Util.validateModel(request);
    return $tea.cast<GetRemindResponse>(await this.doRequest("GetRemind", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetRemindResponse({}));
  }

  async getRemind(request: GetRemindRequest): Promise<GetRemindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRemindWithOptions(request, runtime);
  }

  async getMetaTableIntroWikiWithOptions(request: GetMetaTableIntroWikiRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableIntroWikiResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMetaTableIntroWikiResponse>(await this.doRequest("GetMetaTableIntroWiki", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetMetaTableIntroWikiResponse({}));
  }

  async getMetaTableIntroWiki(request: GetMetaTableIntroWikiRequest): Promise<GetMetaTableIntroWikiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableIntroWikiWithOptions(request, runtime);
  }

  async getBaselineStatusWithOptions(request: GetBaselineStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetBaselineStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<GetBaselineStatusResponse>(await this.doRequest("GetBaselineStatus", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetBaselineStatusResponse({}));
  }

  async getBaselineStatus(request: GetBaselineStatusRequest): Promise<GetBaselineStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBaselineStatusWithOptions(request, runtime);
  }

  async deleteDataServiceApiWithOptions(request: DeleteDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataServiceApiResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDataServiceApiResponse>(await this.doRequest("DeleteDataServiceApi", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteDataServiceApiResponse({}));
  }

  async deleteDataServiceApi(request: DeleteDataServiceApiRequest): Promise<DeleteDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataServiceApiWithOptions(request, runtime);
  }

  async publishDataServiceApiWithOptions(request: PublishDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<PublishDataServiceApiResponse> {
    Util.validateModel(request);
    return $tea.cast<PublishDataServiceApiResponse>(await this.doRequest("PublishDataServiceApi", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new PublishDataServiceApiResponse({}));
  }

  async publishDataServiceApi(request: PublishDataServiceApiRequest): Promise<PublishDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishDataServiceApiWithOptions(request, runtime);
  }

  async getMetaTableLineageWithOptions(request: GetMetaTableLineageRequest, runtime: $Util.RuntimeOptions): Promise<GetMetaTableLineageResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMetaTableLineageResponse>(await this.doRequest("GetMetaTableLineage", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetMetaTableLineageResponse({}));
  }

  async getMetaTableLineage(request: GetMetaTableLineageRequest): Promise<GetMetaTableLineageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetaTableLineageWithOptions(request, runtime);
  }

  async listBaselineStatusesWithOptions(request: ListBaselineStatusesRequest, runtime: $Util.RuntimeOptions): Promise<ListBaselineStatusesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListBaselineStatusesResponse>(await this.doRequest("ListBaselineStatuses", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListBaselineStatusesResponse({}));
  }

  async listBaselineStatuses(request: ListBaselineStatusesRequest): Promise<ListBaselineStatusesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBaselineStatusesWithOptions(request, runtime);
  }

  async listRemindsWithOptions(request: ListRemindsRequest, runtime: $Util.RuntimeOptions): Promise<ListRemindsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListRemindsResponse>(await this.doRequest("ListReminds", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new ListRemindsResponse({}));
  }

  async listReminds(request: ListRemindsRequest): Promise<ListRemindsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRemindsWithOptions(request, runtime);
  }

  async deleteQualityEntityWithOptions(request: DeleteQualityEntityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityEntityResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteQualityEntityResponse>(await this.doRequest("DeleteQualityEntity", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteQualityEntityResponse({}));
  }

  async deleteQualityEntity(request: DeleteQualityEntityRequest): Promise<DeleteQualityEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityEntityWithOptions(request, runtime);
  }

  async createQualityFollowerWithOptions(request: CreateQualityFollowerRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityFollowerResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateQualityFollowerResponse>(await this.doRequest("CreateQualityFollower", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateQualityFollowerResponse({}));
  }

  async createQualityFollower(request: CreateQualityFollowerRequest): Promise<CreateQualityFollowerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityFollowerWithOptions(request, runtime);
  }

  async createDataServiceApiWithOptions(request: CreateDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataServiceApiResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDataServiceApiResponse>(await this.doRequest("CreateDataServiceApi", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateDataServiceApiResponse({}));
  }

  async createDataServiceApi(request: CreateDataServiceApiRequest): Promise<CreateDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataServiceApiWithOptions(request, runtime);
  }

  async abolishDataServiceApiWithOptions(request: AbolishDataServiceApiRequest, runtime: $Util.RuntimeOptions): Promise<AbolishDataServiceApiResponse> {
    Util.validateModel(request);
    return $tea.cast<AbolishDataServiceApiResponse>(await this.doRequest("AbolishDataServiceApi", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new AbolishDataServiceApiResponse({}));
  }

  async abolishDataServiceApi(request: AbolishDataServiceApiRequest): Promise<AbolishDataServiceApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abolishDataServiceApiWithOptions(request, runtime);
  }

  async getQualityEntityWithOptions(request: GetQualityEntityRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityEntityResponse> {
    Util.validateModel(request);
    return $tea.cast<GetQualityEntityResponse>(await this.doRequest("GetQualityEntity", "HTTP", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetQualityEntityResponse({}));
  }

  async getQualityEntity(request: GetQualityEntityRequest): Promise<GetQualityEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityEntityWithOptions(request, runtime);
  }

  async getQualityFollowerWithOptions(request: GetQualityFollowerRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityFollowerResponse> {
    Util.validateModel(request);
    return $tea.cast<GetQualityFollowerResponse>(await this.doRequest("GetQualityFollower", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new GetQualityFollowerResponse({}));
  }

  async getQualityFollower(request: GetQualityFollowerRequest): Promise<GetQualityFollowerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityFollowerWithOptions(request, runtime);
  }

  async deleteQualityFollowerWithOptions(request: DeleteQualityFollowerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityFollowerResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteQualityFollowerResponse>(await this.doRequest("DeleteQualityFollower", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteQualityFollowerResponse({}));
  }

  async deleteQualityFollower(request: DeleteQualityFollowerRequest): Promise<DeleteQualityFollowerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityFollowerWithOptions(request, runtime);
  }

  async createQualityEntityWithOptions(request: CreateQualityEntityRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityEntityResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateQualityEntityResponse>(await this.doRequest("CreateQualityEntity", "HTTP", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateQualityEntityResponse({}));
  }

  async createQualityEntity(request: CreateQualityEntityRequest): Promise<CreateQualityEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityEntityWithOptions(request, runtime);
  }

  async createQualityRuleWithOptions(request: CreateQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateQualityRuleResponse>(await this.doRequest("CreateQualityRule", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateQualityRuleResponse({}));
  }

  async createQualityRule(request: CreateQualityRuleRequest): Promise<CreateQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityRuleWithOptions(request, runtime);
  }

  async updateQualityFollowerWithOptions(request: UpdateQualityFollowerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateQualityFollowerResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateQualityFollowerResponse>(await this.doRequest("UpdateQualityFollower", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new UpdateQualityFollowerResponse({}));
  }

  async updateQualityFollower(request: UpdateQualityFollowerRequest): Promise<UpdateQualityFollowerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateQualityFollowerWithOptions(request, runtime);
  }

  async createQualityRelativeNodeWithOptions(request: CreateQualityRelativeNodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityRelativeNodeResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateQualityRelativeNodeResponse>(await this.doRequest("CreateQualityRelativeNode", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new CreateQualityRelativeNodeResponse({}));
  }

  async createQualityRelativeNode(request: CreateQualityRelativeNodeRequest): Promise<CreateQualityRelativeNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityRelativeNodeWithOptions(request, runtime);
  }

  async deleteQualityRelativeNodeWithOptions(request: DeleteQualityRelativeNodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityRelativeNodeResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteQualityRelativeNodeResponse>(await this.doRequest("DeleteQualityRelativeNode", "HTTPS", "POST", "2020-05-18", "AK", null, $tea.toMap(request), runtime), new DeleteQualityRelativeNodeResponse({}));
  }

  async deleteQualityRelativeNode(request: DeleteQualityRelativeNodeRequest): Promise<DeleteQualityRelativeNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityRelativeNodeWithOptions(request, runtime);
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
