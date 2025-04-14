// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddUserResponseBodyResult extends $dara.Model {
  /**
   * @example
   * xxxxxx@163.com
   */
  accountName?: string;
  /**
   * @example
   * true
   */
  adminUser?: boolean;
  /**
   * @example
   * true
   */
  authAdminUser?: boolean;
  nickName?: string;
  roleIdList?: number[];
  /**
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  /**
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      nickName: 'NickName',
      roleIdList: 'RoleIdList',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      nickName: 'string',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
      userType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.roleIdList)) {
      $dara.Model.validateArray(this.roleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceUsersResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2
   */
  failure?: number;
  /**
   * @example
   * {"2046274934845893" : "AE0150010001: This user already exists.", "1213444447906552" : "AE0150010001: This user already exists."}
   */
  failureDetail?: { [key: string]: any };
  /**
   * @example
   * 1
   */
  success?: number;
  /**
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failure: 'Failure',
      failureDetail: 'FailureDetail',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failure: 'number',
      failureDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    if(this.failureDetail) {
      $dara.Model.validateMap(this.failureDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos extends $dara.Model {
  /**
   * @example
   * ACCOUNT_EXIST
   */
  code?: string;
  codeDesc?: string;
  /**
   * @example
   * 20
   */
  input?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      codeDesc: 'CodeDesc',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      codeDesc: 'string',
      input: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersResponseBodyResultFailResults extends $dara.Model {
  failInfos?: BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos[];
  static names(): { [key: string]: string } {
    return {
      failInfos: 'FailInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failInfos: { 'type': 'array', 'itemType': BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos },
    };
  }

  validate() {
    if(Array.isArray(this.failInfos)) {
      $dara.Model.validateArray(this.failInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 10
   */
  failCount?: number;
  failResults?: BatchAddFeishuUsersResponseBodyResultFailResults[];
  /**
   * @example
   * 1
   */
  okCount?: number;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      failResults: 'FailResults',
      okCount: 'OkCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      failResults: { 'type': 'array', 'itemType': BatchAddFeishuUsersResponseBodyResultFailResults },
      okCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failResults)) {
      $dara.Model.validateArray(this.failResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSetBloodResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Work ID.
   * 
   * @example
   * ccd3428c-****-****-a608-26bae29dffee
   */
  worksId?: string;
  /**
   * @remarks
   * Work types: - REPORT: 
   * - REPORT: Workbooks
   * - dashboardOfflineQuery: Downloads
   * - DASHBOARD: Dashboard
   * - ANALYSIS: Ad Hoc Analysis
   * - SCREEN: Visualization Screen
   * - PAGE: Old dashboard
   * 
   * @example
   * PAGE
   */
  worksType?: string;
  static names(): { [key: string]: string } {
    return {
      worksId: 'WorksId',
      worksType: 'WorksType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      worksId: 'string',
      worksType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceConnectionInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Database connection string address (domain or IP).
   * 
   * @example
   * 172.**.**.48
   */
  address?: string;
  /**
   * @remarks
   * Permission level:
   * 
   * - 0 -- Private
   * - 1 -- Collaborative Editing (old)
   * - 11 -- Collaborative Editing - Space Members
   * - 12 -- Collaborative Editing - Specified to Individuals
   * 
   * @example
   * 0
   */
  authLevel?: string;
  /**
   * @remarks
   * Quick BI user ID of the creator.
   * 
   * @example
   * U240****0880C6095
   */
  creatorId?: string;
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * a201c85c-******
   */
  dsId?: string;
  /**
   * @remarks
   * Data source type.
   * 
   * @example
   * mysql
   */
  dsType?: string;
  /**
   * @remarks
   * Version of the data source.
   * 
   * @example
   * 5.7
   */
  dsVersion?: string;
  /**
   * @remarks
   * Database instance, corresponding to the database name, and for ODPS, it is the project.
   * 
   * @example
   * rm*********t44ju1
   */
  instance?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * rm*********t44ju1
   */
  instanceId?: string;
  /**
   * @remarks
   * Quick BI user ID of the modifier.
   * 
   * @example
   * U240****0880C6095
   */
  modifyUser?: string;
  /**
   * @remarks
   * Whether the impala data source requires authentication to log in:
   * 
   * - true - Requires account and password login  
   * - false - No authentication required (default)
   * 
   * @example
   * true
   */
  noSasl?: boolean;
  /**
   * @remarks
   * Primary data source type for multi-engine data sources.
   * 
   * @example
   * dataphin
   */
  parentDsType?: string;
  /**
   * @remarks
   * Port.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * Used for front-end display when obtaining connection details for ODPS.
   * 
   * @example
   * prod-ossdoc
   */
  project?: string;
  /**
   * @remarks
   * Database schema, only needs to be set for databases that support schemas.
   * 
   * @example
   * Analysis
   */
  schema?: string;
  /**
   * @remarks
   * Display name of the data source on the front end.
   * 
   * @example
   * 0327
   */
  showName?: string;
  /**
   * @remarks
   * Workspace ID to which the data source belongs.
   * 
   * @example
   * 0de6**2-d**-4720-8836-0cc****1394c
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      authLevel: 'AuthLevel',
      creatorId: 'CreatorId',
      dsId: 'DsId',
      dsType: 'DsType',
      dsVersion: 'DsVersion',
      instance: 'Instance',
      instanceId: 'InstanceId',
      modifyUser: 'ModifyUser',
      noSasl: 'NoSasl',
      parentDsType: 'ParentDsType',
      port: 'Port',
      project: 'Project',
      schema: 'Schema',
      showName: 'ShowName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      authLevel: 'string',
      creatorId: 'string',
      dsId: 'string',
      dsType: 'string',
      dsVersion: 'string',
      instance: 'string',
      instanceId: 'string',
      modifyUser: 'string',
      noSasl: 'boolean',
      parentDsType: 'string',
      port: 'string',
      project: 'string',
      schema: 'string',
      showName: 'string',
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

export class GetMailTaskStatusResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Execution time, in the format yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2024-10-09 17:34:11
   */
  execTime?: string;
  /**
   * @remarks
   * Mail ID
   * 
   * @example
   * c38f73f4c5*****c808c41b3f4d23b7852
   */
  mailId?: string;
  /**
   * @remarks
   * Mail status. Possible values:
   * 
   * - Success: SENT
   * - Failure: FAILED 
   * - In Progress: PROCESSING
   * 
   * @example
   * SENT
   */
  status?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 1282xxx610816
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      execTime: 'execTime',
      mailId: 'mailId',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execTime: 'string',
      mailId: 'string',
      status: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupInfoResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2021-03-15 17:13:55
   */
  createTime?: string;
  /**
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  createUser?: string;
  identifiedPath?: string;
  /**
   * @example
   * 2021-03-15 20:36:40
   */
  modifiedTime?: string;
  /**
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  modifyUser?: string;
  /**
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  parentUsergroupId?: string;
  usergroupDesc?: string;
  /**
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****
   */
  usergroupId?: string;
  usergroupName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      identifiedPath: 'IdentifiedPath',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      parentUsergroupId: 'ParentUsergroupId',
      usergroupDesc: 'UsergroupDesc',
      usergroupId: 'UsergroupId',
      usergroupName: 'UsergroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      identifiedPath: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      parentUsergroupId: 'string',
      usergroupDesc: 'string',
      usergroupId: 'string',
      usergroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorksEmbedListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Embed time
   * 
   * @example
   * YYYY-mm-DD hh:MM:ss
   */
  embedTime?: string;
  /**
   * @remarks
   * Report ID
   * 
   * @example
   * 897ce25e-****-****-af84-d13c5610****
   */
  worksId?: string;
  /**
   * @remarks
   * Report name
   * 
   * @example
   * test
   */
  worksName?: string;
  /**
   * @remarks
   * Report type
   * 
   * @example
   * page
   */
  worksType?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 87c6b145-****-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      embedTime: 'EmbedTime',
      worksId: 'WorksId',
      worksName: 'WorksName',
      worksType: 'WorksType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedTime: 'string',
      worksId: 'string',
      worksName: 'string',
      worksType: 'string',
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

export class GetWorksEmbedListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Array of reports
   */
  data?: GetWorksEmbedListResponseBodyResultData[];
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of items per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 18
   */
  totalNum?: number;
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 2
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetWorksEmbedListResponseBodyResultData },
      pageNo: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDatasourceResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The ID of the API data source.
   * 
   * @example
   * 0f2c3c6409be4dc0810f2a5785e816a8
   */
  apiId?: string;
  /**
   * @remarks
   * The parameter configuration of the query statement in JSON format. You can customize the parameter configuration.
   * 
   * @example
   * {"key1":"value1"}
   */
  body?: string;
  /**
   * @remarks
   * The data volume of the API data source.
   * 
   * *   Unit: Kbit/s
   * 
   * @example
   * 0.39746094
   */
  dataSize?: number;
  /**
   * @remarks
   * The last synchronization time of the API data source.
   * 
   * @example
   * 2022-05-25 16:19:43
   */
  dateUpdateTime?: string;
  /**
   * @remarks
   * The time when the quota plan was created.
   * 
   * @example
   * 2022-05-25 16:19:43
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the optimization job was modified.
   * 
   * @example
   * 2022-05-25 16:19:43
   */
  gmtModified?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * REST_API_SYNC_0f2c3c6409be4dc0810f2a5785e816a8
   */
  jobId?: string;
  /**
   * @remarks
   * The parameter configurations in the JSONArray format.
   * 
   * *   name: parameter name
   * *   value: the parameter value
   * 
   * @example
   * [{"name":"token","value":"xxxxxxxxxxxx"},{"name":"pageSize","value":100}]
   */
  parameters?: string;
  /**
   * @remarks
   * The name of the API data source.
   * 
   * @example
   * test data source
   */
  showName?: string;
  /**
   * @remarks
   * The status of the API data source synchronization task.
   * 
   * Valid values:
   * 
   * *   0: the to be run.
   * *   1: The is running.
   * *   2: The is successfully.
   * *   3: failed.
   * 
   * @example
   * 2
   */
  statusType?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      body: 'Body',
      dataSize: 'DataSize',
      dateUpdateTime: 'DateUpdateTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      jobId: 'JobId',
      parameters: 'Parameters',
      showName: 'ShowName',
      statusType: 'StatusType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      body: 'string',
      dataSize: 'number',
      dateUpdateTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      jobId: 'string',
      parameters: 'string',
      showName: 'string',
      statusType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDatasourceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The list of API data sources that were queried.
   */
  data?: ListApiDatasourceResponseBodyResultData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page set when the interface is requested.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of rows.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListApiDatasourceResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListByUserGroupIdResponseBodyResultUserGroupModels extends $dara.Model {
  /**
   * @remarks
   * The time when the Secret was created.
   * 
   * @example
   * 2021-03-15 17:13:55
   */
  createTime?: string;
  /**
   * @remarks
   * The UserID of the creator in the Quick BI.
   * 
   * @example
   * 46e5*******ee22e2a292704c8
   */
  createUser?: string;
  /**
   * @remarks
   * The path of the user group.
   * 
   * @example
   * 2fe4fbd8-****-af083ea/34fd1-****-dcbc33f
   */
  identifiedPath?: string;
  /**
   * @remarks
   * The time when the protection policy was last modified.
   * 
   * @example
   * 2021-03-15 20:36:40
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The UserID of the modifier in the Quick BI.
   * 
   * @example
   * 46e5*******ee22e2a292704c8
   */
  modifyUser?: string;
  /**
   * @remarks
   * The ID of the parent user group.
   * 
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af083ea
   */
  parentUsergroupId?: string;
  /**
   * @remarks
   * The description of the user group.
   * 
   * @example
   * Description
   */
  usergroupDesc?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * 34fd141d-****-4093-8c33-8e066dcbc33f
   */
  usergroupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * Test user group
   */
  usergroupName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      identifiedPath: 'IdentifiedPath',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      parentUsergroupId: 'ParentUsergroupId',
      usergroupDesc: 'UsergroupDesc',
      usergroupId: 'UsergroupId',
      usergroupName: 'UsergroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      identifiedPath: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      parentUsergroupId: 'string',
      usergroupDesc: 'string',
      usergroupId: 'string',
      usergroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListByUserGroupIdResponseBodyResult extends $dara.Model {
  failedUserGroupIds?: string[];
  /**
   * @remarks
   * The details of the user group that was queried.
   */
  userGroupModels?: ListByUserGroupIdResponseBodyResultUserGroupModels[];
  static names(): { [key: string]: string } {
    return {
      failedUserGroupIds: 'FailedUserGroupIds',
      userGroupModels: 'UserGroupModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUserGroupIds: { 'type': 'array', 'itemType': 'string' },
      userGroupModels: { 'type': 'array', 'itemType': ListByUserGroupIdResponseBodyResultUserGroupModels },
    };
  }

  validate() {
    if(Array.isArray(this.failedUserGroupIds)) {
      $dara.Model.validateArray(this.failedUserGroupIds);
    }
    if(Array.isArray(this.userGroupModels)) {
      $dara.Model.validateArray(this.userGroupModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 12373
   */
  favoriteId?: number;
  /**
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  ownerId?: string;
  /**
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  worksId?: string;
  worksName?: string;
  /**
   * @example
   * dashboardOfflineQuery
   */
  worksType?: string;
  /**
   * @example
   * 9337d121-a78f-4c1b-a8bc-f81de117****
   */
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      favoriteId: 'FavoriteId',
      ownerId: 'OwnerId',
      worksId: 'WorksId',
      worksName: 'WorksName',
      worksType: 'WorksType',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      favoriteId: 'number',
      ownerId: 'string',
      worksId: 'string',
      worksName: 'string',
      worksType: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataLevelPermissionWhiteListResponseBodyResultUsersModel extends $dara.Model {
  userGroups?: string[];
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      userGroups: 'UserGroups',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroups: { 'type': 'array', 'itemType': 'string' },
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataLevelPermissionWhiteListResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @example
   * ROW_LEVEL
   */
  ruleType?: string;
  usersModel?: ListDataLevelPermissionWhiteListResponseBodyResultUsersModel;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      ruleType: 'RuleType',
      usersModel: 'UsersModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      ruleType: 'string',
      usersModel: ListDataLevelPermissionWhiteListResponseBodyResultUsersModel,
    };
  }

  validate() {
    if(this.usersModel && typeof (this.usersModel as any).validate === 'function') {
      (this.usersModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Quick BI user ID of the creator.
   * 
   * @example
   * 281*****-485******-8
   */
  creatorId?: string;
  /**
   * @remarks
   * Owner\\"s nickname.
   * 
   * @example
   * system
   */
  creatorName?: string;
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * 7FC9A6A6-****-5CED-B*****E891E4075
   */
  datasourceId?: string;
  /**
   * @remarks
   * Data source type.
   * 
   * @example
   * odps
   */
  dsType?: string;
  /**
   * @remarks
   * Creation time of the data source, in yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2024-04-16 13:17:39
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2024-08-15 10:06:31
   */
  gmtModified?: string;
  /**
   * @remarks
   * Primary data source type for multi-engine data sources.
   * 
   * @example
   * dataphin
   */
  parentDsType?: string;
  /**
   * @remarks
   * Display name of the data source.
   * 
   * @example
   * 0327
   */
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      datasourceId: 'DatasourceId',
      dsType: 'DsType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      parentDsType: 'ParentDsType',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      creatorName: 'string',
      datasourceId: 'string',
      dsType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      parentDsType: 'string',
      showName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFavoriteReportsResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * true
   */
  favorite?: boolean;
  favoriteDate?: string;
  /**
   * @example
   * 1640088615000
   */
  gmtCreate?: string;
  /**
   * @example
   * 1640595729000
   */
  gmtModified?: string;
  /**
   * @example
   * true
   */
  hasEditAuth?: boolean;
  /**
   * @example
   * true
   */
  hasViewAuth?: boolean;
  name?: string;
  ownerName?: string;
  /**
   * @example
   * 1365*****238860
   */
  ownerNum?: string;
  /**
   * @example
   * 1
   */
  publishStatus?: number;
  /**
   * @example
   * 977c7698-****-****-****-44b7304d20fc
   */
  treeId?: string;
  /**
   * @example
   * PAGE
   */
  type?: string;
  /**
   * @example
   * 523793cb-****-****-****-aa71c65ffa39
   */
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      favorite: 'Favorite',
      favoriteDate: 'FavoriteDate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasEditAuth: 'HasEditAuth',
      hasViewAuth: 'HasViewAuth',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerNum: 'OwnerNum',
      publishStatus: 'PublishStatus',
      treeId: 'TreeId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      favorite: 'boolean',
      favoriteDate: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasEditAuth: 'boolean',
      hasViewAuth: 'boolean',
      name: 'string',
      ownerName: 'string',
      ownerNum: 'string',
      publishStatus: 'number',
      treeId: 'string',
      type: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFavoriteReportsResponseBodyResult extends $dara.Model {
  data?: ListFavoriteReportsResponseBodyResultData[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListFavoriteReportsResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRoleUsersResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Nickname of the organization member.
   * 
   * @example
   * Test User
   */
  nickName?: string;
  /**
   * @remarks
   * UserID of the organization member in Quick BI.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRoleUsersResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * User list.
   */
  data?: ListOrganizationRoleUsersResponseBodyResultData[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of items per page as set in the request.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListOrganizationRoleUsersResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRolesResponseBodyResultAuthConfigList extends $dara.Model {
  /**
   * @remarks
   * Permission type:
   * - quick_monitor: Metric monitoring
   * - subscription: Subscription management
   * - offline_download: Self-service data retrieval
   * - resource_package: Resource package management
   * - organization_ask: Organization identification code (AK/SK)
   * - developer_openapi: Open API
   * - data_service: Data service
   * - admin_authorize3rd: Embedded analysis
   * - component_manage: Custom component
   * - template_open: Custom template
   * - custom_driver: Custom driver (supported only in standalone deployment)
   * - open_platform_custom_plugin: Custom plugin (supported only in standalone deployment)
   * - enterprise_safety: Enterprise security
   * 
   * @example
   * enterprise_safety
   */
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRolesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of role permission configurations.
   */
  authConfigList?: ListOrganizationRolesResponseBodyResultAuthConfigList[];
  /**
   * @remarks
   * Whether it is a predefined role. Possible values:
   * - true: Yes
   * - false: No
   * 
   * @example
   * true
   */
  isSystemRole?: boolean;
  /**
   * @remarks
   * Role ID.
   * 
   * @example
   * 111111111
   */
  roleId?: number;
  /**
   * @remarks
   * Role name.
   * 
   * @example
   * Organization Admin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      authConfigList: 'AuthConfigList',
      isSystemRole: 'IsSystemRole',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigList: { 'type': 'array', 'itemType': ListOrganizationRolesResponseBodyResultAuthConfigList },
      isSystemRole: 'boolean',
      roleId: 'number',
      roleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authConfigList)) {
      $dara.Model.validateArray(this.authConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenuAuthorizationResponseBodyResultReceivers extends $dara.Model {
  /**
   * @remarks
   * The ID of the authorization object.
   * 
   * @example
   * 121344444790****
   */
  receiverId?: string;
  /**
   * @remarks
   * The type of the authorization object. Valid values:
   * 
   * *   0: user
   * *   1: user group
   * 
   * @example
   * 0
   */
  receiverType?: number;
  static names(): { [key: string]: string } {
    return {
      receiverId: 'ReceiverId',
      receiverType: 'ReceiverType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiverId: 'string',
      receiverType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenuAuthorizationResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The menu ID of the BI portal leaf node.
   * 
   * @example
   * 54kqgoa****
   */
  menuId?: string;
  /**
   * @remarks
   * The details of the object to which the menu is authorized.
   */
  receivers?: ListPortalMenuAuthorizationResponseBodyResultReceivers[];
  /**
   * @remarks
   * Whether only authorization is visible. Valid values:
   * 
   * *   true: Only the authorization is visible.
   * *   false: Both are visible.
   * 
   * @example
   * true
   */
  showOnlyWithAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      menuId: 'MenuId',
      receivers: 'Receivers',
      showOnlyWithAccess: 'ShowOnlyWithAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      menuId: 'string',
      receivers: { 'type': 'array', 'itemType': ListPortalMenuAuthorizationResponseBodyResultReceivers },
      showOnlyWithAccess: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.receivers)) {
      $dara.Model.validateArray(this.receivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentViewReportsResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * true
   */
  favorite?: boolean;
  /**
   * @example
   * 1496651577000
   */
  gmtCreate?: string;
  /**
   * @example
   * 1640595729000
   */
  gmtModified?: string;
  /**
   * @example
   * true
   */
  hasEditAuth?: boolean;
  /**
   * @example
   * true
   */
  hasViewAuth?: boolean;
  /**
   * @example
   * 1642067498000
   */
  latestViewTime?: string;
  name?: string;
  ownerName?: string;
  /**
   * @example
   * 1365*****238860
   */
  ownerNum?: string;
  /**
   * @example
   * 1
   */
  publishStatus?: number;
  /**
   * @example
   * 977c7698-****-****-****-44b7304d20fc
   */
  treeId?: string;
  /**
   * @example
   * PAGE
   */
  type?: string;
  /**
   * @example
   * 7
   */
  viewCount?: number;
  /**
   * @example
   * 523793cb-****-****-****-aa71c65ffa39
   */
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      favorite: 'Favorite',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasEditAuth: 'HasEditAuth',
      hasViewAuth: 'HasViewAuth',
      latestViewTime: 'LatestViewTime',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerNum: 'OwnerNum',
      publishStatus: 'PublishStatus',
      treeId: 'TreeId',
      type: 'Type',
      viewCount: 'ViewCount',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      favorite: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasEditAuth: 'boolean',
      hasViewAuth: 'boolean',
      latestViewTime: 'string',
      name: 'string',
      ownerName: 'string',
      ownerNum: 'string',
      publishStatus: 'number',
      treeId: 'string',
      type: 'string',
      viewCount: 'number',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentViewReportsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 当前API返回的分页参数如TotalNum等即将下线，如有使用请及时修改
   */
  attention?: string;
  data?: ListRecentViewReportsResponseBodyResultData[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      attention: 'Attention',
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attention: 'string',
      data: { 'type': 'array', 'itemType': ListRecentViewReportsResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedReportsResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * true
   */
  favorite?: boolean;
  /**
   * @example
   * 1640088615000
   */
  gmtCreate?: string;
  /**
   * @example
   * 1644373980000
   */
  gmtModified?: string;
  /**
   * @example
   * true
   */
  hasEditAuth?: boolean;
  /**
   * @example
   * true
   */
  hasViewAuth?: boolean;
  name?: string;
  ownerName?: string;
  /**
   * @example
   * 1365*****238860
   */
  ownerNum?: string;
  /**
   * @example
   * 1
   */
  publishStatus?: number;
  /**
   * @example
   * 977c7698-****-****-****-44b7304d20fc
   */
  treeId?: string;
  /**
   * @example
   * PAGE
   */
  type?: string;
  /**
   * @example
   * gfidm145-****-****-9426-8f93be23****
   */
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      favorite: 'Favorite',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasEditAuth: 'HasEditAuth',
      hasViewAuth: 'HasViewAuth',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerNum: 'OwnerNum',
      publishStatus: 'PublishStatus',
      treeId: 'TreeId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      favorite: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasEditAuth: 'boolean',
      hasViewAuth: 'boolean',
      name: 'string',
      ownerName: 'string',
      ownerNum: 'string',
      publishStatus: 'number',
      treeId: 'string',
      type: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedReportsResponseBodyResult extends $dara.Model {
  data?: ListSharedReportsResponseBodyResultData[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSharedReportsResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsByUserIdResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2021-03-15 17:13:55
   */
  createTime?: string;
  /**
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  createUser?: string;
  identifiedPath?: string;
  /**
   * @example
   * 2021-03-15 20:36:40
   */
  modifiedTime?: string;
  /**
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  modifyUser?: string;
  /**
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  parentUsergroupId?: string;
  usergroupDesc?: string;
  /**
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****
   */
  usergroupId?: string;
  usergroupName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      identifiedPath: 'IdentifiedPath',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      parentUsergroupId: 'ParentUsergroupId',
      usergroupDesc: 'UsergroupDesc',
      usergroupId: 'UsergroupId',
      usergroupName: 'UsergroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      identifiedPath: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      parentUsergroupId: 'string',
      usergroupDesc: 'string',
      usergroupId: 'string',
      usergroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceRoleUsersResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Nickname of the organization member.
   * 
   * @example
   * Test user
   */
  nickName?: string;
  /**
   * @remarks
   * UserID of the organization member in Quick BI.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 7350a155-0e94-4c6c-8620-57bbec38****
   */
  workspaceId?: string;
  /**
   * @remarks
   * Workspace name.
   * 
   * @example
   * Test space
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      userId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceRoleUsersResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * User list.
   */
  data?: ListWorkspaceRoleUsersResponseBodyResultData[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of items per page as set in the request.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListWorkspaceRoleUsersResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceRolesResponseBodyResultAuthConfigList extends $dara.Model {
  /**
   * @remarks
   * Authorization scope.
   */
  actionAuthKeys?: string[];
  /**
   * @remarks
   * Authorization type:
   * - portal_create: Data Portal
   * - dashboard_create: Dashboard
   * - report_create: Spreadsheet
   * - screen_create: Data Screen
   * - analysis: Ad-hoc Analysis
   * - offline_download: Self-service Data Retrieval
   * - data_form: Data Entry
   * - quick_etl: Data Preparation
   * - cube: Dataset
   * - datasource: Data Source
   * 
   * @example
   * portal_create
   */
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      actionAuthKeys: 'ActionAuthKeys',
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionAuthKeys: { 'type': 'array', 'itemType': 'string' },
      authKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionAuthKeys)) {
      $dara.Model.validateArray(this.actionAuthKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceRolesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of role authorization configurations.
   */
  authConfigList?: ListWorkspaceRolesResponseBodyResultAuthConfigList[];
  /**
   * @remarks
   * Whether it is a predefined role. Value range:
   * 
   * - true: Yes
   * - false: No
   * 
   * @example
   * true
   */
  isSystemRole?: boolean;
  /**
   * @remarks
   * Workspace role ID, including predefined and custom roles:
   * 
   * - 25: Workspace Administrator (predefined role)
   * - 26: Developer (predefined role)
   * - 27: Analyst (predefined role)
   * - 30: Viewer (predefined role)
   * - Custom role: The corresponding role ID for a custom role
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * Role name.
   * 
   * @example
   * Space administrator
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      authConfigList: 'AuthConfigList',
      isSystemRole: 'IsSystemRole',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigList: { 'type': 'array', 'itemType': ListWorkspaceRolesResponseBodyResultAuthConfigList },
      isSystemRole: 'boolean',
      roleId: 'number',
      roleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authConfigList)) {
      $dara.Model.validateArray(this.authConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApprovalInfoResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Applicant\\"s user ID, qbi user ID.
   * 
   * @example
   * 1359508
   */
  applicantId?: string;
  /**
   * @remarks
   * Applicant\\"s nickname.
   * 
   * @example
   * Li Fei
   */
  applicantName?: string;
  /**
   * @remarks
   * Application ID.
   * 
   * @example
   * 64813ef6da58e80eef8ed2f9
   */
  applicationId?: string;
  /**
   * @remarks
   * Application reason.
   * 
   * @example
   * Development needs
   */
  applyReason?: string;
  /**
   * @remarks
   * Approver\\"s user ID, qbi user ID.
   * 
   * @example
   * sdasascasxasd
   */
  approverId?: string;
  /**
   * @remarks
   * Approver\\"s nickname.
   * 
   * @example
   * data_fusion_002
   */
  approverName?: string;
  /**
   * @remarks
   * Whether the resource has been deleted:
   * - true: Deleted
   * - false: Not deleted
   * 
   * @example
   * true
   */
  deleteFlag?: boolean;
  /**
   * @remarks
   * Permission expiration date, timestamp.
   * 
   * @example
   * 1708568097135
   */
  expireDate?: number;
  /**
   * @remarks
   * Permission approval status:
   * - 0: Under review, corresponding to 0 in the request parameters
   * - 1: Approved, corresponding to 1 in the request parameters
   * - 2: Rejected, corresponding to 1 in the request parameters
   * 
   * @example
   * 0
   */
  flagStatus?: number;
  /**
   * @remarks
   * Application creation time, timestamp.
   * 
   * @example
   * 1687315758
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Application modification time, timestamp.
   * 
   * @example
   * 1640595729000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Handling reason.
   * 
   * @example
   * Development needs
   */
  handleReason?: string;
  /**
   * @remarks
   * The ID of the resource for which permission is requested.
   * 
   * @example
   * acl-ct4t2e4u2x4ej1bzur
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource for which permission is requested (e.g., report name, space name...).
   * 
   * @example
   * Test Resources
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * DASHBOARD
   */
  resourceType?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * Test Workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      applicantId: 'ApplicantId',
      applicantName: 'ApplicantName',
      applicationId: 'ApplicationId',
      applyReason: 'ApplyReason',
      approverId: 'ApproverId',
      approverName: 'ApproverName',
      deleteFlag: 'DeleteFlag',
      expireDate: 'ExpireDate',
      flagStatus: 'FlagStatus',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      handleReason: 'HandleReason',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantId: 'string',
      applicantName: 'string',
      applicationId: 'string',
      applyReason: 'string',
      approverId: 'string',
      approverName: 'string',
      deleteFlag: 'boolean',
      expireDate: 'number',
      flagStatus: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      handleReason: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApprovalInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Array of approval flow information.
   */
  data?: QueryApprovalInfoResponseBodyResultData[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of records requested per page.
   * 
   * @example
   * 1000
   */
  pageSize?: number;
  /**
   * @remarks
   * The starting position of the current page.
   * 
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 3
   */
  total?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      pageSize: 'PageSize',
      start: 'Start',
      total: 'Total',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryApprovalInfoResponseBodyResultData },
      page: 'number',
      pageSize: 'number',
      start: 'number',
      total: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuditLogResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2024-04-16 13:17:39
   */
  gmtCreate?: string;
  /**
   * @example
   * wukaibis
   */
  operatorAccountName?: string;
  /**
   * @example
   * buc_344078
   */
  operatorName?: string;
  /**
   * @example
   * CREATE
   */
  operatorType?: string;
  /**
   * @example
   * 1113***************8500
   */
  targetId?: string;
  targetName?: string;
  /**
   * @example
   * USER
   */
  targetType?: string;
  /**
   * @example
   * 87c6b145-090c-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      operatorAccountName: 'OperatorAccountName',
      operatorName: 'OperatorName',
      operatorType: 'OperatorType',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      operatorAccountName: 'string',
      operatorName: 'string',
      operatorType: 'string',
      targetId: 'string',
      targetName: 'string',
      targetType: 'string',
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

export class QueryComponentPerformanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The average duration of cache hits.
   * 
   * @example
   * 0.3
   */
  cacheCostTimeAvg?: number;
  /**
   * @remarks
   * The number of cache hits.
   * 
   * @example
   * 3
   */
  cacheQueryCount?: number;
  /**
   * @remarks
   * The component ID.
   * 
   * @example
   * 0696083a-ca72-4d89-8e7a-c017910e0***
   */
  componentId?: string;
  /**
   * @remarks
   * The name of the add-on.
   */
  componentName?: string;
  /**
   * @remarks
   * The average query duration associated with the SQL pattern.
   * 
   * @example
   * 0.3
   */
  costTimeAvg?: number;
  /**
   * @remarks
   * The number of queries.
   * 
   * @example
   * 5
   */
  queryCount?: number;
  /**
   * @remarks
   * The average number of queries.
   * 
   * @example
   * 0.3
   */
  queryCountAvg?: number;
  /**
   * @remarks
   * The query exceeds the 5S number of queries.
   * 
   * @example
   * 5
   */
  queryOverFivePercentNum?: number;
  /**
   * @remarks
   * Query the proportion of more than 5S.
   * 
   * @example
   * 0.3
   */
  queryOverFiveSecPercent?: string;
  /**
   * @remarks
   * The percentage of queries that exceed 10s.
   * 
   * @example
   * 0.3
   */
  queryOverTenSecPercent?: string;
  /**
   * @remarks
   * The percentage of queries that exceed 10s.
   * 
   * @example
   * 0.3
   */
  queryOverTenSecPercentNum?: number;
  /**
   * @remarks
   * The number of times that the chart query times out.
   * 
   * @example
   * 1
   */
  queryTimeoutCount?: number;
  /**
   * @remarks
   * The percentage of timeout times for chart queries.
   * 
   * @example
   * 0.3
   */
  queryTimeoutCountPercent?: number;
  /**
   * @remarks
   * The average time consumed by the Quick engine query.
   * 
   * @example
   * 0.3
   */
  quickIndexCostTimeAvg?: number;
  /**
   * @remarks
   * The number of times that the Quick engine is hit.
   * 
   * @example
   * 3
   */
  quickIndexQueryCount?: number;
  /**
   * @remarks
   * The proportion of duplicate queries.
   * 
   * @example
   * 0.3
   */
  repeatQueryPercent?: string;
  /**
   * @remarks
   * The number of duplicate queries.
   * 
   * @example
   * 2
   */
  repeatQueryPercentNum?: number;
  /**
   * @remarks
   * The number of times the query is repeated.
   * 
   * @example
   * 5
   */
  repeatSqlQueryCount?: number;
  /**
   * @remarks
   * The proportion of duplicate queries.
   * 
   * @example
   * 0.3
   */
  repeatSqlQueryPercent?: string;
  /**
   * @remarks
   * The ID of the work.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @remarks
   * The name of the report.
   * 
   * @example
   * ClusterRiskReport
   */
  reportName?: string;
  /**
   * @remarks
   * The format of the report.
   * 
   * @example
   * report
   */
  reportType?: string;
  /**
   * @remarks
   * The unique ID of the space.
   * 
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the group.
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cacheCostTimeAvg: 'CacheCostTimeAvg',
      cacheQueryCount: 'CacheQueryCount',
      componentId: 'ComponentId',
      componentName: 'ComponentName',
      costTimeAvg: 'CostTimeAvg',
      queryCount: 'QueryCount',
      queryCountAvg: 'QueryCountAvg',
      queryOverFivePercentNum: 'QueryOverFivePercentNum',
      queryOverFiveSecPercent: 'QueryOverFiveSecPercent',
      queryOverTenSecPercent: 'QueryOverTenSecPercent',
      queryOverTenSecPercentNum: 'QueryOverTenSecPercentNum',
      queryTimeoutCount: 'QueryTimeoutCount',
      queryTimeoutCountPercent: 'QueryTimeoutCountPercent',
      quickIndexCostTimeAvg: 'QuickIndexCostTimeAvg',
      quickIndexQueryCount: 'QuickIndexQueryCount',
      repeatQueryPercent: 'RepeatQueryPercent',
      repeatQueryPercentNum: 'RepeatQueryPercentNum',
      repeatSqlQueryCount: 'RepeatSqlQueryCount',
      repeatSqlQueryPercent: 'RepeatSqlQueryPercent',
      reportId: 'ReportId',
      reportName: 'ReportName',
      reportType: 'ReportType',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCostTimeAvg: 'number',
      cacheQueryCount: 'number',
      componentId: 'string',
      componentName: 'string',
      costTimeAvg: 'number',
      queryCount: 'number',
      queryCountAvg: 'number',
      queryOverFivePercentNum: 'number',
      queryOverFiveSecPercent: 'string',
      queryOverTenSecPercent: 'string',
      queryOverTenSecPercentNum: 'number',
      queryTimeoutCount: 'number',
      queryTimeoutCountPercent: 'number',
      quickIndexCostTimeAvg: 'number',
      quickIndexQueryCount: 'number',
      repeatQueryPercent: 'string',
      repeatQueryPercentNum: 'number',
      repeatSqlQueryCount: 'number',
      repeatSqlQueryPercent: 'string',
      reportId: 'string',
      reportName: 'string',
      reportType: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopilotEmbedConfigResponseBodyResultDataRange extends $dara.Model {
  /**
   * @example
   * true/false
   */
  allCube?: boolean;
  /**
   * @example
   * true/false
   */
  allTheme?: boolean;
  llmCubes?: string[];
  themes?: string[];
  static names(): { [key: string]: string } {
    return {
      allCube: 'AllCube',
      allTheme: 'AllTheme',
      llmCubes: 'LlmCubes',
      themes: 'Themes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCube: 'boolean',
      allTheme: 'boolean',
      llmCubes: { 'type': 'array', 'itemType': 'string' },
      themes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.llmCubes)) {
      $dara.Model.validateArray(this.llmCubes);
    }
    if(Array.isArray(this.themes)) {
      $dara.Model.validateArray(this.themes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopilotEmbedConfigResponseBodyResult extends $dara.Model {
  agentName?: string;
  /**
   * @example
   * 9c079710-ddbe-48b3-b495-7c83c8d57cc4
   */
  copilotId?: string;
  /**
   * @example
   * qweqw12312423521
   */
  createUser?: string;
  createUserName?: string;
  dataRange?: QueryCopilotEmbedConfigResponseBodyResultDataRange;
  /**
   * @example
   * asda1231231dfs
   */
  modifyUser?: string;
  moduleName?: string;
  /**
   * @example
   * 0327
   */
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      copilotId: 'CopilotId',
      createUser: 'CreateUser',
      createUserName: 'CreateUserName',
      dataRange: 'DataRange',
      modifyUser: 'ModifyUser',
      moduleName: 'ModuleName',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      copilotId: 'string',
      createUser: 'string',
      createUserName: 'string',
      dataRange: QueryCopilotEmbedConfigResponseBodyResultDataRange,
      modifyUser: 'string',
      moduleName: 'string',
      showName: 'string',
    };
  }

  validate() {
    if(this.dataRange && typeof (this.dataRange as any).validate === 'function') {
      (this.dataRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubeOptimizationResponseBodyResultCubePerformanceDiagnoseModel extends $dara.Model {
  /**
   * @remarks
   * The average duration of cache hits.
   * 
   * @example
   * 1
   */
  cacheCostTimeAvg?: number;
  /**
   * @remarks
   * The number of cache hits.
   * 
   * @example
   * 2
   */
  cacheQueryCount?: number;
  /**
   * @remarks
   * The average query duration associated with the SQL pattern.
   * 
   * @example
   * 1.0
   */
  costTimeAvg?: number;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * 3e45b61a-9ba8-4c7c-8248-8dbe69945636
   */
  cubeId?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * test
   */
  cubeName?: string;
  /**
   * @remarks
   * The number of queries.
   * 
   * @example
   * 50
   */
  queryCount?: number;
  /**
   * @remarks
   * The average number of queries.
   * 
   * @example
   * 2
   */
  queryCountAvg?: number;
  /**
   * @remarks
   * The percentage of the number of queries that exceed the 5S.
   * 
   * @example
   * 0.1
   */
  queryOverFivePercentNum?: number;
  /**
   * @remarks
   * Query the proportion of more than 5S.
   * 
   * @example
   * 0.5
   */
  queryOverFiveSecPercent?: string;
  /**
   * @remarks
   * The percentage of queries that exceed 10s.
   * 
   * @example
   * 0.1
   */
  queryOverTenSecPercent?: string;
  /**
   * @remarks
   * The percentage of queries that exceed 10s.
   * 
   * @example
   * 0.3
   */
  queryOverTenSecPercentNum?: number;
  /**
   * @remarks
   * The number of times that the chart query times out.
   * 
   * @example
   * 1
   */
  queryTimeoutCount?: number;
  /**
   * @remarks
   * The percentage of timeout times for chart queries.
   * 
   * @example
   * 0.3
   */
  queryTimeoutCountPercent?: number;
  /**
   * @remarks
   * The average time consumed by the Quick engine query.
   * 
   * @example
   * 1
   */
  quickIndexCostTimeAvg?: number;
  /**
   * @remarks
   * The number of times that the Quick engine is hit.
   * 
   * @example
   * 2
   */
  quickIndexQueryCount?: number;
  /**
   * @remarks
   * The proportion of duplicate queries.
   * 
   * @example
   * 0.1
   */
  repeatQueryPercent?: string;
  /**
   * @remarks
   * The number of duplicate queries.
   * 
   * @example
   * 2
   */
  repeatQueryPercentNum?: number;
  /**
   * @remarks
   * The number of times the query is repeated.
   * 
   * @example
   * 2
   */
  repeatSqlQueryCount?: number;
  /**
   * @remarks
   * The proportion of duplicate queries.
   * 
   * @example
   * 0.3
   */
  repeatSqlQueryPercent?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 6ea74bff-c818-4188-b462-dbb45a24dbac
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * eco0sh0prods
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cacheCostTimeAvg: 'CacheCostTimeAvg',
      cacheQueryCount: 'CacheQueryCount',
      costTimeAvg: 'CostTimeAvg',
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      queryCount: 'QueryCount',
      queryCountAvg: 'QueryCountAvg',
      queryOverFivePercentNum: 'QueryOverFivePercentNum',
      queryOverFiveSecPercent: 'QueryOverFiveSecPercent',
      queryOverTenSecPercent: 'QueryOverTenSecPercent',
      queryOverTenSecPercentNum: 'QueryOverTenSecPercentNum',
      queryTimeoutCount: 'QueryTimeoutCount',
      queryTimeoutCountPercent: 'QueryTimeoutCountPercent',
      quickIndexCostTimeAvg: 'QuickIndexCostTimeAvg',
      quickIndexQueryCount: 'QuickIndexQueryCount',
      repeatQueryPercent: 'RepeatQueryPercent',
      repeatQueryPercentNum: 'RepeatQueryPercentNum',
      repeatSqlQueryCount: 'RepeatSqlQueryCount',
      repeatSqlQueryPercent: 'RepeatSqlQueryPercent',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCostTimeAvg: 'number',
      cacheQueryCount: 'number',
      costTimeAvg: 'number',
      cubeId: 'string',
      cubeName: 'string',
      queryCount: 'number',
      queryCountAvg: 'number',
      queryOverFivePercentNum: 'number',
      queryOverFiveSecPercent: 'string',
      queryOverTenSecPercent: 'string',
      queryOverTenSecPercentNum: 'number',
      queryTimeoutCount: 'number',
      queryTimeoutCountPercent: 'number',
      quickIndexCostTimeAvg: 'number',
      quickIndexQueryCount: 'number',
      repeatQueryPercent: 'string',
      repeatQueryPercentNum: 'number',
      repeatSqlQueryCount: 'number',
      repeatSqlQueryPercent: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubeOptimizationResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The type of the suggestion. Valid values:
   * 
   * *   **OPEN_CACHE**: Open cache.
   * *   **OPEN_QUICK_ENGINE**: Open FAST Cache.
   * *   **INCREASE_CACHE_TIME**: Increase the cache time.
   * 
   * @example
   * OPENQUICKENGINE
   */
  adviceType?: string;
  /**
   * @remarks
   * The diagnostic information about the dataset.
   */
  cubePerformanceDiagnoseModel?: QueryCubeOptimizationResponseBodyResultCubePerformanceDiagnoseModel;
  static names(): { [key: string]: string } {
    return {
      adviceType: 'AdviceType',
      cubePerformanceDiagnoseModel: 'CubePerformanceDiagnoseModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceType: 'string',
      cubePerformanceDiagnoseModel: QueryCubeOptimizationResponseBodyResultCubePerformanceDiagnoseModel,
    };
  }

  validate() {
    if(this.cubePerformanceDiagnoseModel && typeof (this.cubePerformanceDiagnoseModel as any).validate === 'function') {
      (this.cubePerformanceDiagnoseModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubePerformanceResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  cacheCostTimeAvg?: number;
  /**
   * @example
   * 1
   */
  cacheQueryCount?: number;
  /**
   * @example
   * 1
   */
  costTimeAvg?: number;
  /**
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @example
   * test
   */
  cubeName?: string;
  /**
   * @example
   * 50
   */
  queryCount?: number;
  /**
   * @example
   * 1
   */
  queryCountAvg?: number;
  /**
   * @example
   * 1.0
   */
  queryOverFivePercentNum?: number;
  /**
   * @example
   * 1.0
   */
  queryOverFiveSecPercent?: string;
  /**
   * @example
   * 1.0
   */
  queryOverTenSecPercent?: string;
  /**
   * @example
   * 1.0
   */
  queryOverTenSecPercentNum?: number;
  /**
   * @example
   * 1
   */
  queryTimeoutCount?: number;
  /**
   * @example
   * 1
   */
  queryTimeoutCountPercent?: number;
  /**
   * @example
   * 1
   */
  quickIndexCostTimeAvg?: number;
  /**
   * @example
   * 1
   */
  quickIndexQueryCount?: number;
  /**
   * @example
   * 0.3
   */
  repeatQueryPercent?: string;
  /**
   * @example
   * 1
   */
  repeatQueryPercentNum?: number;
  /**
   * @example
   * 1
   */
  repeatSqlQueryCount?: number;
  /**
   * @example
   * 1
   */
  repeatSqlQueryPercent?: string;
  /**
   * @example
   * 87c6b145-090c-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cacheCostTimeAvg: 'CacheCostTimeAvg',
      cacheQueryCount: 'CacheQueryCount',
      costTimeAvg: 'CostTimeAvg',
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      queryCount: 'QueryCount',
      queryCountAvg: 'QueryCountAvg',
      queryOverFivePercentNum: 'QueryOverFivePercentNum',
      queryOverFiveSecPercent: 'QueryOverFiveSecPercent',
      queryOverTenSecPercent: 'QueryOverTenSecPercent',
      queryOverTenSecPercentNum: 'QueryOverTenSecPercentNum',
      queryTimeoutCount: 'QueryTimeoutCount',
      queryTimeoutCountPercent: 'QueryTimeoutCountPercent',
      quickIndexCostTimeAvg: 'QuickIndexCostTimeAvg',
      quickIndexQueryCount: 'QuickIndexQueryCount',
      repeatQueryPercent: 'RepeatQueryPercent',
      repeatQueryPercentNum: 'RepeatQueryPercentNum',
      repeatSqlQueryCount: 'RepeatSqlQueryCount',
      repeatSqlQueryPercent: 'RepeatSqlQueryPercent',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCostTimeAvg: 'number',
      cacheQueryCount: 'number',
      costTimeAvg: 'number',
      cubeId: 'string',
      cubeName: 'string',
      queryCount: 'number',
      queryCountAvg: 'number',
      queryOverFivePercentNum: 'number',
      queryOverFiveSecPercent: 'string',
      queryOverTenSecPercent: 'string',
      queryOverTenSecPercentNum: 'number',
      queryTimeoutCount: 'number',
      queryTimeoutCountPercent: 'number',
      quickIndexCostTimeAvg: 'number',
      quickIndexQueryCount: 'number',
      repeatQueryPercent: 'string',
      repeatQueryPercentNum: 'number',
      repeatSqlQueryCount: 'number',
      repeatSqlQueryPercent: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataResponseBodyResultHeaders extends $dara.Model {
  /**
   * @remarks
   * Aggregation operator. Only present for measure fields, such as SUM, AVG, and MAX.
   * - SUM: Sum
   * - MAX: Maximum value
   * - MIN: Minimum value
   * - AVG: Average
   * - COUNT: Count
   * - COUNTD: Distinct count
   * - STDDEV_POP: Population standard deviation
   * - STDDEV_SAMP: Sample standard deviation
   * - VAR_POP: Population variance
   * - VAR_SAMP: Sample variance
   * 
   * @example
   * SUM
   */
  aggregator?: string;
  /**
   * @remarks
   * Field name, corresponding to the physical table field name.
   * 
   * @example
   * Specific physical field name
   */
  column?: string;
  /**
   * @remarks
   * 字段的数据类型。一般有：
   * - number：数值
   * - string：字符串
   * - date：日期
   * - time：时间
   * - datetime：日期时间
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The granularity of the dimension field.
   * This field is returned only when the requested field is a date or geographic dimension, with the following possible values:
   * 
   * - Date Granularity: yearRegion (year), monthRegion (month), weekRegion (week), dayRegion (day), hourRegion (hour), minRegion (minute), secRegion (second)
   * 
   * - Geographic Granularity: COUNTRY (international level), PROVINCE (provincial level), CITY (city level), XIAN (district/county level), REGION (region)
   * 
   * @example
   * REGION
   */
  granularity?: string;
  /**
   * @remarks
   * Field alias, which serves as the key in the map data rows of the `values` parameter.
   * 
   * @example
   * area
   */
  label?: string;
  /**
   * @remarks
   * Field type, used to distinguish between dimension and measure fields.
   * - Dimension: dimension
   * - Measure: measure
   * 
   * @example
   * Dimension
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      column: 'Column',
      dataType: 'DataType',
      granularity: 'Granularity',
      label: 'Label',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'string',
      column: 'string',
      dataType: 'string',
      granularity: 'string',
      label: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Column headers.
   */
  headers?: QueryDataResponseBodyResultHeaders[];
  /**
   * @remarks
   * The SQL query that was executed.
   * > The filter conditions in the returned SQL statement include not only the parameters passed through this interface but also the row and column permission configurations.
   * 
   * @example
   * SELECT COMPANY_T_1_.`area` AS D_AREA_2_, COMPANY_T_1_.`city` AS D_CITY_3_, SUM(COMPANY_T_1_.`profit_amt`) AS D_PROFIT_4_ FROM `quickbi_test`.`company_sales_record_copy` AS COMPANY_T_1_ WHERE COMPANY_T_1_.`area` LIKE \\"%华东%\\" GROUP BY COMPANY_T_1_.`area`, COMPANY_T_1_.`city` HAVING SUM(COMPANY_T_1_.`order_amt`) > 1 LIMIT 0, 10
   */
  sql?: string;
  /**
   * @remarks
   * The results of the query.
   */
  values?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      sql: 'Sql',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': QueryDataResponseBodyResultHeaders },
      sql: 'string',
      values: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponseBodyResultApiCopilotLlmCubeModels extends $dara.Model {
  alias?: string;
  createUser?: string;
  /**
   * @example
   * sdasdafas23342342342
   */
  llmCubeId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      createUser: 'CreateUser',
      llmCubeId: 'LlmCubeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createUser: 'string',
      llmCubeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponseBodyResultApiCopilotThemeModelsApiCopilotLlmCubeModels extends $dara.Model {
  alias?: string;
  createUser?: string;
  /**
   * @example
   * 1231242231asdasda
   */
  llmCubeId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      createUser: 'CreateUser',
      llmCubeId: 'LlmCubeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createUser: 'string',
      llmCubeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponseBodyResultApiCopilotThemeModels extends $dara.Model {
  apiCopilotLlmCubeModels?: QueryDataRangeResponseBodyResultApiCopilotThemeModelsApiCopilotLlmCubeModels[];
  createUser?: string;
  /**
   * @example
   * 36631232342312312
   */
  themeId?: string;
  themeName?: string;
  static names(): { [key: string]: string } {
    return {
      apiCopilotLlmCubeModels: 'ApiCopilotLlmCubeModels',
      createUser: 'CreateUser',
      themeId: 'ThemeId',
      themeName: 'ThemeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCopilotLlmCubeModels: { 'type': 'array', 'itemType': QueryDataRangeResponseBodyResultApiCopilotThemeModelsApiCopilotLlmCubeModels },
      createUser: 'string',
      themeId: 'string',
      themeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiCopilotLlmCubeModels)) {
      $dara.Model.validateArray(this.apiCopilotLlmCubeModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponseBodyResult extends $dara.Model {
  apiCopilotLlmCubeModels?: QueryDataRangeResponseBodyResultApiCopilotLlmCubeModels[];
  apiCopilotThemeModels?: QueryDataRangeResponseBodyResultApiCopilotThemeModels[];
  static names(): { [key: string]: string } {
    return {
      apiCopilotLlmCubeModels: 'ApiCopilotLlmCubeModels',
      apiCopilotThemeModels: 'ApiCopilotThemeModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCopilotLlmCubeModels: { 'type': 'array', 'itemType': QueryDataRangeResponseBodyResultApiCopilotLlmCubeModels },
      apiCopilotThemeModels: { 'type': 'array', 'itemType': QueryDataRangeResponseBodyResultApiCopilotThemeModels },
    };
  }

  validate() {
    if(Array.isArray(this.apiCopilotLlmCubeModels)) {
      $dara.Model.validateArray(this.apiCopilotLlmCubeModels);
    }
    if(Array.isArray(this.apiCopilotThemeModels)) {
      $dara.Model.validateArray(this.apiCopilotThemeModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceResponseBodyResultHeaders extends $dara.Model {
  /**
   * @remarks
   * Aggregation operator. Only present for measure fields, such as SUM, AVG, and MAX.
   * 
   * @example
   * SUM
   */
  aggregator?: string;
  /**
   * @remarks
   * Field name, corresponding to the physical table field name.
   * 
   * @example
   * The alias of the field. The key of the map data row in the result parameter values.
   */
  column?: string;
  /**
   * @remarks
   * The data type of the field. Common types include number, string, date, datetime, time, and geographic.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The granularity of the dimension field.
   * This field is returned only when the requested field is a date or geographic dimension, with the following possible values:
   * 
   * - Date granularity: yearRegion (year), monthRegion (month), weekRegion (week), dayRegion (day), hourRegion (hour), minRegion (minute), secRegion (second)
   * 
   * - Geographic granularity: COUNTRY (country level), PROVINCE (province level), CITY (city level), XIAN (district/county level), REGION (region)
   * 
   * @example
   * yearRegion
   */
  granularity?: string;
  /**
   * @remarks
   * 字段别名，结果参数values中map数据行的key。
   * 
   * @example
   * area
   */
  label?: string;
  /**
   * @remarks
   * Field type, used to distinguish between dimension and measure fields.
   * 
   * @example
   * StandardDimension
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      column: 'Column',
      dataType: 'DataType',
      granularity: 'Granularity',
      label: 'Label',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'string',
      column: 'string',
      dataType: 'string',
      granularity: 'string',
      label: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Column headers.
   */
  headers?: QueryDataServiceResponseBodyResultHeaders[];
  /**
   * @remarks
   * The SQL of the query request.
   * 
   * @example
   * SELECT COMPANY_T_1_.`area` AS D_AREA_2_, COMPANY_T_1_.`city` AS D_CITY_3_, SUM(COMPANY_T_1_.`profit_amt`) AS D_PROFIT_4_ FROM `quickbi_test`.`company_sales_record_copy` AS COMPANY_T_1_ WHERE COMPANY_T_1_.`area` LIKE \\"%华东%\\" GROUP BY COMPANY_T_1_.`area`, COMPANY_T_1_.`city` HAVING SUM(COMPANY_T_1_.`order_amt`) > 1 LIMIT 0, 10
   */
  sql?: string;
  /**
   * @remarks
   * The queried results returned.
   */
  values?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      sql: 'Sql',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': QueryDataServiceResponseBodyResultHeaders },
      sql: 'string',
      values: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResultDataContentFilter extends $dara.Model {
  /**
   * @remarks
   * Combined conditions.
   */
  filters?: { [key: string]: any }[];
  /**
   * @remarks
   * Logical relationship between multiple SQL text keywords.
   * 
   * - **or**: or
   * - **and**: and
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * Type.
   * 
   * - basic: basic
   * - combined: complex
   * 
   * @example
   * basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      logicalOperator: 'LogicalOperator',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      logicalOperator: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResultDataContentReturnFieldsField extends $dara.Model {
  /**
   * @remarks
   * Display name in the cube model (can be in Chinese or English).
   * 
   * @example
   * date(year)
   */
  caption?: string;
  /**
   * @remarks
   * The corresponding physical field name.
   * 
   * @example
   * shid_star
   */
  column?: string;
  /**
   * @remarks
   * Data type.
   * 
   * - number: numeric
   * - string: string
   * - date: date
   * - datetime: datetime
   * - time: time
   * - geographic: geographic
   * - boolean: boolean
   * - url: URL
   * 
   * @example
   * datetime
   */
  dataType?: string;
  /**
   * @remarks
   * Unique identifier for the original field.
   * 
   * @example
   * 1c1f88cb7d
   */
  fid?: string;
  /**
   * @remarks
   * This attribute is included for date and geographic dimensions, indicating the supported granularity.
   * 
   * @example
   * yearRegion
   */
  granularity?: string;
  /**
   * @remarks
   * Unique name of the cube field, mainly used for unique positioning in the returned result.
   * 
   * @example
   * sss
   */
  name?: string;
  /**
   * @remarks
   * Type.
   * 
   * - Dimension: Dimension
   * - Measure: Measure
   * 
   * @example
   * dimension
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      column: 'Column',
      dataType: 'DataType',
      fid: 'Fid',
      granularity: 'Granularity',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      column: 'string',
      dataType: 'string',
      fid: 'string',
      granularity: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResultDataContentReturnFields extends $dara.Model {
  /**
   * @remarks
   * Aggregation operator. For example, SUM, AVG, and MAX.
   * 
   * @example
   * SUM
   */
  aggregator?: string;
  /**
   * @remarks
   * Field parameter name.
   * 
   * @example
   * s_number
   */
  alias?: string;
  /**
   * @remarks
   * Remark for the returned field.
   * 
   * @example
   * Theme Configuration already exists
   */
  desc?: string;
  /**
   * @remarks
   * Corresponding cube field information.
   */
  field?: QueryDataServiceListResponseBodyResultDataContentReturnFieldsField;
  /**
   * @remarks
   * Sorting.
   * 
   * - asc: Ascending
   * - desc: Descending
   * - no: No sorting
   * 
   * @example
   * no
   */
  orderby?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      alias: 'Alias',
      desc: 'Desc',
      field: 'Field',
      orderby: 'Orderby',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'string',
      alias: 'string',
      desc: 'string',
      field: QueryDataServiceListResponseBodyResultDataContentReturnFieldsField,
      orderby: 'string',
    };
  }

  validate() {
    if(this.field && typeof (this.field as any).validate === 'function') {
      (this.field as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResultDataContent extends $dara.Model {
  /**
   * @remarks
   * Cube identifier ID.
   * 
   * @example
   * 56f9f34a-bdba-496a-91a3-a18b1ff73a80
   */
  cubeId?: string;
  /**
   * @remarks
   * Dataset name.
   * 
   * @example
   * test data source
   */
  cubeName?: string;
  /**
   * @remarks
   * Detail or Summary
   * 
   * @example
   * true
   */
  detail?: boolean;
  /**
   * @remarks
   * Request parameter information.
   */
  filter?: QueryDataServiceListResponseBodyResultDataContentFilter;
  /**
   * @remarks
   * Return information.
   */
  returnFields?: QueryDataServiceListResponseBodyResultDataContentReturnFields[];
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      detail: 'Detail',
      filter: 'Filter',
      returnFields: 'ReturnFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      cubeName: 'string',
      detail: 'boolean',
      filter: QueryDataServiceListResponseBodyResultDataContentFilter,
      returnFields: { 'type': 'array', 'itemType': QueryDataServiceListResponseBodyResultDataContentReturnFields },
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(Array.isArray(this.returnFields)) {
      $dara.Model.validateArray(this.returnFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The model of the data service in JSON format.
   */
  content?: QueryDataServiceListResponseBodyResultDataContent;
  /**
   * @remarks
   * Creator ID.
   * 
   * @example
   * 7cb94cd48701
   */
  creatorId?: string;
  /**
   * @remarks
   * Creator\\"s name.
   * 
   * @example
   * zhangsan
   */
  creatorName?: string;
  /**
   * @remarks
   * Cube identifier ID.
   * 
   * @example
   * d14e7448-0eb3-40d3-9375-4afef8de29fd
   */
  cubeId?: string;
  /**
   * @remarks
   * Dataset name.
   * 
   * @example
   * test data source
   */
  cubeName?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2023-05-18 14:00:02.0
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2023-03-21 18:02:36
   */
  gmtModified?: string;
  /**
   * @remarks
   * Modifier\\"s userId.
   * 
   * @example
   * 7cb94cd48701
   */
  modifierId?: string;
  /**
   * @remarks
   * Modifier\\"s name
   * 
   * @example
   * zhangsan
   */
  modifierName?: string;
  /**
   * @remarks
   * Data service name.
   * 
   * @example
   * test report
   */
  name?: string;
  /**
   * @remarks
   * Owner ID
   * 
   * @example
   * 862801339
   */
  ownerId?: string;
  /**
   * @remarks
   * Owner\\"s name
   * 
   * @example
   * lisi
   */
  ownerName?: string;
  /**
   * @remarks
   * Unique ID of the data service.
   * 
   * @example
   * dtsuq3i31f5j8v848b
   */
  sid?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 7350a155-0e94-4c6c-8620-57bbec38****
   */
  workspaceId?: string;
  /**
   * @remarks
   * Workspace name.
   * 
   * @example
   * test workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      desc: 'Desc',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      modifierId: 'ModifierId',
      modifierName: 'ModifierName',
      name: 'Name',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      sid: 'Sid',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: QueryDataServiceListResponseBodyResultDataContent,
      creatorId: 'string',
      creatorName: 'string',
      cubeId: 'string',
      cubeName: 'string',
      desc: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      modifierId: 'string',
      modifierName: 'string',
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      sid: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Data service information.
   */
  data?: QueryDataServiceListResponseBodyResultData[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of rows.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryDataServiceListResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResultCubeTableList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the data source table is valid. Valid values:
   * 
   * *   true: data source table
   * *   false: custom table
   * 
   * @example
   * odps_40
   */
  caption?: string;
  /**
   * @remarks
   * The display name of the table.
   * 
   * @example
   * false
   */
  customsql?: boolean;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * dfefd7f4-fc6e-42c9-b4******
   */
  datasourceId?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * maxcompute
   */
  dsType?: string;
  /**
   * @remarks
   * The unique ID of the table.
   * 
   * @example
   * true
   */
  factTable?: boolean;
  /**
   * @remarks
   * Indicates whether the table is a custom SQL table. Valid values:
   * 
   * *   true: custom SQL table
   * *   false: non-custom SQL table
   * 
   * @example
   * select * from ****
   */
  sql?: string;
  /**
   * @remarks
   * The list of tables used by the dataset.
   * 
   * @example
   * viewdasb8494aab2612473cb74992159fe****
   */
  tableName?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   mysql
   * *   odps
   * *   oracle
   * *   ... and other data source types supported by Quick BI
   * 
   * @example
   * 7a62530b36
   */
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      customsql: 'Customsql',
      datasourceId: 'DatasourceId',
      dsType: 'DsType',
      factTable: 'FactTable',
      sql: 'Sql',
      tableName: 'TableName',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      customsql: 'boolean',
      datasourceId: 'string',
      dsType: 'string',
      factTable: 'boolean',
      sql: 'string',
      tableName: 'string',
      uniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResultDimensionList extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the field that is referenced by the group measure. Non-NULL if and only if the metric is a grouping metric.
   * 
   * @example
   * city
   */
  caption?: string;
  /**
   * @remarks
   * A list of all dimensions in the dataset.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The actual physical field.
   * 
   * @example
   * group_dimension
   */
  dimensionType?: string;
  /**
   * @remarks
   * Data type; value:
   * 
   * *   string: character
   * *   number: a number
   * *   datetime: time
   * 
   * @example
   * example_expression
   */
  expression?: string;
  /**
   * @remarks
   * Expression for a calculated dimension; valid only for calculated dimensions.
   * 
   * @example
   * city
   */
  factColumn?: string;
  /**
   * @example
   * hhhh
   */
  fieldDescription?: string;
  /**
   * @remarks
   * The type of the dimension. Valid values:
   * 
   * *   standard_dimension: General Dimension
   * *   calculate_dimension: calculating dimensions
   * *   group_dimension: grouping dimensions
   * 
   * @example
   * example_granularity
   */
  granularity?: string;
  /**
   * @remarks
   * The granularity.
   * 
   * @example
   * 308f7****
   */
  refUid?: string;
  /**
   * @remarks
   * The ARN.
   * 
   * @example
   * 7a62530***
   */
  tableUniqueId?: string;
  /**
   * @remarks
   * The display name of the dimension.
   * 
   * @example
   * a69774***
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      dataType: 'DataType',
      dimensionType: 'DimensionType',
      expression: 'Expression',
      factColumn: 'FactColumn',
      fieldDescription: 'FieldDescription',
      granularity: 'Granularity',
      refUid: 'RefUid',
      tableUniqueId: 'TableUniqueId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      dataType: 'string',
      dimensionType: 'string',
      expression: 'string',
      factColumn: 'string',
      fieldDescription: 'string',
      granularity: 'string',
      refUid: 'string',
      tableUniqueId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResultDirectory extends $dara.Model {
  /**
   * @remarks
   * Test directory
   * 
   * @example
   * a3eecab7-618d-4f9f-*****
   */
  id?: string;
  /**
   * @remarks
   * Test directory
   * 
   * @example
   * The name of the directory.
   */
  name?: string;
  /**
   * @remarks
   * The information about the directory to which the dataset belongs.
   * 
   * @example
   * 88b680****
   */
  pathId?: string;
  /**
   * @remarks
   * The path of the directory ID, for example, aa/bb/cc/dd.
   * 
   * @example
   * The path name of the directory ID, for example, one-level directory /two-level directory.
   */
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResultMeasureList extends $dara.Model {
  /**
   * @remarks
   * The actual physical field.
   * 
   * @example
   * profit_amt
   */
  caption?: string;
  /**
   * @remarks
   * A list of all measures for the dataset.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * Data type; value:
   * 
   * *   string: character
   * *   number: a number
   * *   datetime: time
   * 
   * @example
   * example_expression
   */
  expression?: string;
  /**
   * @remarks
   * The type of the measure. Valid values:
   * 
   * *   standard_measure: General Metrics
   * *   calculate_measure: Calculating Measures
   * 
   * @example
   * profit_amt
   */
  factColumn?: string;
  /**
   * @example
   * hhhh
   */
  fieldDescription?: string;
  /**
   * @remarks
   * An expression that calculates a measure; valid only for calculated measures.
   * 
   * @example
   * calculate_measure
   */
  measureType?: string;
  /**
   * @remarks
   * The display name of the metric.
   * 
   * @example
   * 7a62530b36
   */
  tableUniqueId?: string;
  /**
   * @remarks
   * The unique ID of the table to which the table belongs, which corresponds to the UniqueId of the CubeTypeList.
   * 
   * @example
   * 88b680****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      dataType: 'DataType',
      expression: 'Expression',
      factColumn: 'FactColumn',
      fieldDescription: 'FieldDescription',
      measureType: 'MeasureType',
      tableUniqueId: 'TableUniqueId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      dataType: 'string',
      expression: 'string',
      factColumn: 'string',
      fieldDescription: 'string',
      measureType: 'string',
      tableUniqueId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the dataset.
   */
  cubeTableList?: QueryDatasetInfoResponseBodyResultCubeTableList[];
  /**
   * @remarks
   * The unique ID of the workspace to which the dataset belongs.
   * 
   * @example
   * false
   */
  custimzeSql?: boolean;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   mysql
   * *   odps
   * *   oracle
   * *   ... Data source types supported by Quick BI such as
   * 
   * @example
   * a201c85c-******
   */
  datasetId?: string;
  /**
   * @remarks
   * The user ID of the dataset owner in the Quick BI.
   * 
   * @example
   * opds_40
   */
  datasetName?: string;
  /**
   * @remarks
   * If it is a custom SQL table, this is the specific SQL.
   */
  dimensionList?: QueryDatasetInfoResponseBodyResultDimensionList[];
  /**
   * @remarks
   * The unique ID of the metric.
   */
  directory?: QueryDatasetInfoResponseBodyResultDirectory;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * a201c85c-******
   */
  dsId?: string;
  /**
   * @remarks
   * The time when the dataset was last modified.
   * 
   * @example
   * odps
   */
  dsName?: string;
  /**
   * @remarks
   * The point in time when the training dataset was created.
   * 
   * @example
   * odps
   */
  dsType?: string;
  /**
   * @remarks
   * Indicates whether to customize SQL statements. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * 1629450382000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The information about the dataset.
   * 
   * @example
   * 1629450382000
   */
  gmtModify?: string;
  /**
   * @remarks
   * The unique ID of the table to which the table belongs, which corresponds to the UniqueId of the CubeTypeList.
   */
  measureList?: QueryDatasetInfoResponseBodyResultMeasureList[];
  openOfflineAcceleration?: boolean;
  /**
   * @remarks
   * Test Space
   * 
   * @example
   * b8494aab26124*****
   */
  ownerId?: string;
  /**
   * @remarks
   * The unique ID of the data source.
   * 
   * @example
   * The name of the dataset owner.
   */
  ownerName?: string;
  /**
   * @remarks
   * The name of the training dataset.
   * 
   * @example
   * false
   */
  rowLevel?: boolean;
  /**
   * @remarks
   * Whether row-level permissions are enabled. Valid values:
   * 
   * *   true: The VIP Netty channel is enabled.
   * *   false: The VIP Netty channel is disabled.
   * 
   * @example
   * 420abef4-a79b-4289-b12****
   */
  workspaceId?: string;
  /**
   * @remarks
   * Big Baby
   * 
   * @example
   * The name of the workspace in which the dataset resides.
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cubeTableList: 'CubeTableList',
      custimzeSql: 'CustimzeSql',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      dimensionList: 'DimensionList',
      directory: 'Directory',
      dsId: 'DsId',
      dsName: 'DsName',
      dsType: 'DsType',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      measureList: 'MeasureList',
      openOfflineAcceleration: 'OpenOfflineAcceleration',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      rowLevel: 'RowLevel',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeTableList: { 'type': 'array', 'itemType': QueryDatasetInfoResponseBodyResultCubeTableList },
      custimzeSql: 'boolean',
      datasetId: 'string',
      datasetName: 'string',
      dimensionList: { 'type': 'array', 'itemType': QueryDatasetInfoResponseBodyResultDimensionList },
      directory: QueryDatasetInfoResponseBodyResultDirectory,
      dsId: 'string',
      dsName: 'string',
      dsType: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      measureList: { 'type': 'array', 'itemType': QueryDatasetInfoResponseBodyResultMeasureList },
      openOfflineAcceleration: 'boolean',
      ownerId: 'string',
      ownerName: 'string',
      rowLevel: 'boolean',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cubeTableList)) {
      $dara.Model.validateArray(this.cubeTableList);
    }
    if(Array.isArray(this.dimensionList)) {
      $dara.Model.validateArray(this.dimensionList);
    }
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    if(Array.isArray(this.measureList)) {
      $dara.Model.validateArray(this.measureList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponseBodyResultDataDataSource extends $dara.Model {
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * @example
   * 261b252d-c3c3-498a-a0a7-5d1ec6cd****
   */
  dsId?: string;
  /**
   * @remarks
   * The time when the scaling group was modified.
   * 
   * @example
   * The name of the training dataset.
   */
  dsName?: string;
  /**
   * @remarks
   * The user ID of the dataset owner in the Quick BI.
   * 
   * @example
   * mysql
   */
  dsType?: string;
  static names(): { [key: string]: string } {
    return {
      dsId: 'DsId',
      dsName: 'DsName',
      dsType: 'DsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsId: 'string',
      dsName: 'string',
      dsType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponseBodyResultDataDirectory extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory path.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * Information about the directory where the dataset is located
   */
  name?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  pathId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * Test a data source
   */
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The details of the dataset list.
   * 
   * @example
   * 2020-11-02 10:36:05
   */
  createTime?: string;
  /**
   * @remarks
   * Test Space
   */
  dataSource?: QueryDatasetListResponseBodyResultDataDataSource;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * 5820f58c-c734-4d8a-baf1-7979af4f****
   */
  datasetId?: string;
  /**
   * @remarks
   * Tom
   * 
   * @example
   * company_sales_record_copy12
   */
  datasetName?: string;
  /**
   * @remarks
   * The number of rows per page set when the interface is requested.
   * 
   * @example
   * The total number of rows in the table.
   */
  description?: string;
  /**
   * @remarks
   * The information about the data source to which the dataset belongs.
   */
  directory?: QueryDatasetListResponseBodyResultDataDirectory;
  /**
   * @remarks
   * The nickname of the dataset owner.
   * 
   * @example
   * 2020-11-02 10:36:05
   */
  modifyTime?: string;
  openOfflineAcceleration?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 136516262323****
   */
  ownerId?: string;
  /**
   * @remarks
   * Whether to enable row-level permissions. Valid values:
   * 
   * *   true: The VIP Netty channel is enabled.
   * *   false: The incremental log backup feature is disabled.
   * 
   * @example
   * The ID of the workspace.
   */
  ownerName?: string;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * true
   */
  rowLevel?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad06adf
   */
  workspaceId?: string;
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * Test dataset
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      description: 'Description',
      directory: 'Directory',
      modifyTime: 'ModifyTime',
      openOfflineAcceleration: 'OpenOfflineAcceleration',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      rowLevel: 'RowLevel',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSource: QueryDatasetListResponseBodyResultDataDataSource,
      datasetId: 'string',
      datasetName: 'string',
      description: 'string',
      directory: QueryDatasetListResponseBodyResultDataDirectory,
      modifyTime: 'string',
      openOfflineAcceleration: 'boolean',
      ownerId: 'string',
      ownerName: 'string',
      rowLevel: 'boolean',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Returns the pagination results of the dataset list. The detailed information of the dataset list is stored in the response parameter Data.
   */
  data?: QueryDatasetListResponseBodyResultData[];
  /**
   * @remarks
   * The number of rows per page in a paged query.
   * 
   * *   Default value: 10.
   * *   Maximum value: 1,000.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * Current page number for dataset list:
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryDatasetListResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetSwitchInfoResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @example
   * 1
   */
  isOpenColumnLevelPermission?: number;
  /**
   * @example
   * 1
   */
  isOpenRowLevelPermission?: number;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      isOpenColumnLevelPermission: 'IsOpenColumnLevelPermission',
      isOpenRowLevelPermission: 'IsOpenRowLevelPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      isOpenColumnLevelPermission: 'number',
      isOpenRowLevelPermission: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedInfoResponseBodyResultDetail extends $dara.Model {
  /**
   * @example
   * 1
   */
  dashboardOfflineQuery?: number;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 1
   */
  report?: number;
  static names(): { [key: string]: string } {
    return {
      dashboardOfflineQuery: 'DashboardOfflineQuery',
      page: 'Page',
      report: 'Report',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardOfflineQuery: 'number',
      page: 'number',
      report: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedInfoResponseBodyResult extends $dara.Model {
  detail?: QueryEmbeddedInfoResponseBodyResultDetail;
  /**
   * @example
   * 3
   */
  embeddedCount?: number;
  /**
   * @example
   * 100
   */
  maxCount?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      embeddedCount: 'EmbeddedCount',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: QueryEmbeddedInfoResponseBodyResultDetail,
      embeddedCount: 'number',
      maxCount: 'number',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLlmCubeWithThemeListByUserIdResponseBodyResult extends $dara.Model {
  cubeIds?: { [key: string]: string };
  themeIds?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      cubeIds: 'CubeIds',
      themeIds: 'ThemeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      themeIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.cubeIds) {
      $dara.Model.validateMap(this.cubeIds);
    }
    if(this.themeIds) {
      $dara.Model.validateMap(this.themeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationRoleConfigResponseBodyResultAuthConfigList extends $dara.Model {
  /**
   * @remarks
   * Permission type:
   * - quick_monitor: Metric Monitoring
   * - subscription: Subscription Management
   * - offline_download: Self-service Data Retrieval
   * - resource_package: Resource Package Management
   * - organization_ask: Organization Access Key/Secret (AK/SK)
   * - developer_openapi: Open API
   * - data_service: Data Service
   * - admin_authorize3rd: Embedded Analysis
   * - component_manage: Custom Component
   * - template_open: Custom Template
   * - custom_driver: Custom Driver (supported only in standalone deployment)
   * - open_platform_custom_plugin: Custom Plugin (supported only in standalone deployment)
   * - enterprise_safety: Enterprise Security
   * 
   * @example
   * quick_monitor
   */
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationRoleConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of role permission configurations.
   */
  authConfigList?: QueryOrganizationRoleConfigResponseBodyResultAuthConfigList[];
  /**
   * @remarks
   * Whether it is a predefined role. Possible values:
   * 
   * - true: Yes
   * - false: No
   * 
   * @example
   * true
   */
  isSystemRole?: boolean;
  /**
   * @remarks
   * Organization role ID, including predefined roles and custom roles:
   * 
   * - Organization Administrator (predefined role): 111111111
   * - Permission Administrator (predefined role): 111111112
   * - Regular User (predefined role): 111111113
   * - Custom Role: The corresponding role ID of the custom role
   * 
   * @example
   * 111111111
   */
  roleId?: number;
  /**
   * @remarks
   * Role name.
   * 
   * @example
   * Organization Admin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      authConfigList: 'AuthConfigList',
      isSystemRole: 'IsSystemRole',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigList: { 'type': 'array', 'itemType': QueryOrganizationRoleConfigResponseBodyResultAuthConfigList },
      isSystemRole: 'boolean',
      roleId: 'number',
      roleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authConfigList)) {
      $dara.Model.validateArray(this.authConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * true
   */
  allowPublishOperation?: boolean;
  /**
   * @example
   * true
   */
  allowShareOperation?: boolean;
  /**
   * @example
   * 2020-11-10 17:51:07
   */
  createTime?: string;
  /**
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  createUser?: string;
  /**
   * @example
   * pop****@aliyun.com
   */
  createUserAccountName?: string;
  /**
   * @example
   * 2020-11-10 17:51:07
   */
  modifiedTime?: string;
  /**
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  modifyUser?: string;
  /**
   * @example
   * pop****@aliyun.com
   */
  modifyUserAccountName?: string;
  /**
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  organizationId?: string;
  /**
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  owner?: string;
  /**
   * @example
   * pop****@aliyun.com
   */
  ownerAccountName?: string;
  workspaceDescription?: string;
  /**
   * @example
   * 7350a155-0e94-4c6c-8620-57bbec38****
   */
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      allowPublishOperation: 'AllowPublishOperation',
      allowShareOperation: 'AllowShareOperation',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      createUserAccountName: 'CreateUserAccountName',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      modifyUserAccountName: 'ModifyUserAccountName',
      organizationId: 'OrganizationId',
      owner: 'Owner',
      ownerAccountName: 'OwnerAccountName',
      workspaceDescription: 'WorkspaceDescription',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPublishOperation: 'boolean',
      allowShareOperation: 'boolean',
      createTime: 'string',
      createUser: 'string',
      createUserAccountName: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      modifyUserAccountName: 'string',
      organizationId: 'string',
      owner: 'string',
      ownerAccountName: 'string',
      workspaceDescription: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListResponseBodyResult extends $dara.Model {
  data?: QueryOrganizationWorkspaceListResponseBodyResultData[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryOrganizationWorkspaceListResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReadableResourcesListByUserIdResponseBodyResultDirectory extends $dara.Model {
  /**
   * @example
   * e4276ea5-b232-4fb1-8f0f-efcee4a2****
   */
  id?: string;
  name?: string;
  /**
   * @example
   * e4276ea5-b232-4fb1-8f0f-efcee4a2****
   */
  pathId?: string;
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReadableResourcesListByUserIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the creation time in milliseconds.
   * 
   * @example
   * 1611023338000
   */
  createTime?: string;
  /**
   * @remarks
   * Remarks on the work.
   * 
   * @example
   * Description
   */
  description?: string;
  directory?: QueryReadableResourcesListByUserIdResponseBodyResultDirectory;
  /**
   * @remarks
   * The name of the Alibaba Cloud account to which the modifier belongs.
   * 
   * @example
   * Li Si
   */
  modifyName?: string;
  /**
   * @example
   * 1611023338000
   */
  modifyTime?: string;
  /**
   * @remarks
   * The Quick BI UserID of the work owner.
   * 
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  ownerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the owner.
   * 
   * @example
   * Tom
   */
  ownerName?: string;
  /**
   * @remarks
   * Security policies for collaborative authorization of works. Valid values:
   * 
   * *   0: private
   * *   12: Authorize specified members
   * *   1 or 11: Authorize all workspace members
   * 
   * > 
   * 
   * *   If you use legacy permissions, the return value is 1.
   * 
   * *   If you use the new permissions, the return value is 11.
   * 
   * @example
   * 0
   */
  securityLevel?: string;
  /**
   * @remarks
   * The status of the report. Valid values:
   * 
   * *   0: unpublished
   * *   1: published
   * *   2: modified but not published
   * *   3: unpublished
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Third-party embedding status. Valid values:
   * 
   * *   0: The embed service is not enabled.
   * *   1: Embed is enabled.
   * 
   * @example
   * 1
   */
  thirdPartAuthFlag?: number;
  /**
   * @remarks
   * The name of the work.
   */
  workName?: string;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   FULLPAGE: full-screen dashboards
   * *   REPORT: workbook
   * 
   * @example
   * PAGE
   */
  workType?: string;
  /**
   * @remarks
   * The ID of the work.
   * 
   * @example
   * 03366b16-69ce-43c8-b782-56c2f6ec****
   */
  worksId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * Test Workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      directory: 'Directory',
      modifyName: 'ModifyName',
      modifyTime: 'ModifyTime',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      securityLevel: 'SecurityLevel',
      status: 'Status',
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      workName: 'WorkName',
      workType: 'WorkType',
      worksId: 'WorksId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      directory: QueryReadableResourcesListByUserIdResponseBodyResultDirectory,
      modifyName: 'string',
      modifyTime: 'string',
      ownerId: 'string',
      ownerName: 'string',
      securityLevel: 'string',
      status: 'number',
      thirdPartAuthFlag: 'number',
      workName: 'string',
      workType: 'string',
      worksId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReportPerformanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The average duration of cache hits.
   * 
   * @example
   * 2.2
   */
  cacheCostTimeAvg?: number;
  /**
   * @remarks
   * The number of cache hits.
   * 
   * @example
   * 1
   */
  cacheQueryCount?: number;
  /**
   * @remarks
   * The number of times the chart is queried.
   * 
   * @example
   * 1
   */
  componentQueryCount?: number;
  /**
   * @remarks
   * The average number of times the chart is queried.
   * 
   * @example
   * 2.0
   */
  componentQueryCountAvg?: number;
  /**
   * @remarks
   * The average query duration associated with the SQL pattern.
   * 
   * @example
   * 0.2
   */
  costTimeAvg?: number;
  /**
   * @remarks
   * The number of queries.
   * 
   * @example
   * 50
   */
  queryCount?: number;
  /**
   * @remarks
   * The average number of queries.
   * 
   * @example
   * 3.3
   */
  queryCountAvg?: number;
  /**
   * @remarks
   * The percentage of the number of queries that exceed the 5S.
   * 
   * @example
   * 0.5
   */
  queryOverFivePercentNum?: number;
  /**
   * @remarks
   * Query the proportion of more than 5S.
   * 
   * @example
   * 0.5
   */
  queryOverFiveSecPercent?: string;
  /**
   * @remarks
   * The percentage of queries that exceed 10s.
   * 
   * @example
   * 0.5
   */
  queryOverTenSecPercent?: string;
  /**
   * @remarks
   * The number of queries that exceed 10 seconds.
   * 
   * @example
   * 0.5
   */
  queryOverTenSecPercentNum?: number;
  /**
   * @remarks
   * The number of times that the chart query times out.
   * 
   * @example
   * 8
   */
  queryTimeoutCount?: number;
  /**
   * @remarks
   * The percentage of timeout times for chart queries.
   * 
   * @example
   * 0.5
   */
  queryTimeoutCountPercent?: number;
  /**
   * @remarks
   * The average time consumed by the Quick engine query.
   * 
   * @example
   * 10
   */
  quickIndexCostTimeAvg?: number;
  /**
   * @remarks
   * The number of times that the Quick engine is hit.
   * 
   * @example
   * 5
   */
  quickIndexQueryCount?: number;
  /**
   * @remarks
   * The proportion of duplicate queries.
   * 
   * @example
   * 0.8
   */
  repeatQueryPercent?: string;
  /**
   * @remarks
   * The number of duplicate queries.
   * 
   * @example
   * 3
   */
  repeatQueryPercentNum?: number;
  /**
   * @remarks
   * The number of times the query is repeated.
   * 
   * @example
   * 1
   */
  repeatSqlQueryCount?: number;
  /**
   * @remarks
   * The proportion of duplicate queries.
   * 
   * @example
   * 0.7
   */
  repeatSqlQueryPercent?: string;
  /**
   * @remarks
   * The ID of the work.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @remarks
   * The name of the report.
   * 
   * @example
   * ClusterAddonUpgradeReport
   */
  reportName?: string;
  /**
   * @remarks
   * The format of the report.
   * 
   * @example
   * report
   */
  reportType?: string;
  /**
   * @remarks
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * ab46ed33-6278-4ef7-8013-8c1335f266ee
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the group.
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cacheCostTimeAvg: 'CacheCostTimeAvg',
      cacheQueryCount: 'CacheQueryCount',
      componentQueryCount: 'ComponentQueryCount',
      componentQueryCountAvg: 'ComponentQueryCountAvg',
      costTimeAvg: 'CostTimeAvg',
      queryCount: 'QueryCount',
      queryCountAvg: 'QueryCountAvg',
      queryOverFivePercentNum: 'QueryOverFivePercentNum',
      queryOverFiveSecPercent: 'QueryOverFiveSecPercent',
      queryOverTenSecPercent: 'QueryOverTenSecPercent',
      queryOverTenSecPercentNum: 'QueryOverTenSecPercentNum',
      queryTimeoutCount: 'QueryTimeoutCount',
      queryTimeoutCountPercent: 'QueryTimeoutCountPercent',
      quickIndexCostTimeAvg: 'QuickIndexCostTimeAvg',
      quickIndexQueryCount: 'QuickIndexQueryCount',
      repeatQueryPercent: 'RepeatQueryPercent',
      repeatQueryPercentNum: 'RepeatQueryPercentNum',
      repeatSqlQueryCount: 'RepeatSqlQueryCount',
      repeatSqlQueryPercent: 'RepeatSqlQueryPercent',
      reportId: 'ReportId',
      reportName: 'ReportName',
      reportType: 'ReportType',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCostTimeAvg: 'number',
      cacheQueryCount: 'number',
      componentQueryCount: 'number',
      componentQueryCountAvg: 'number',
      costTimeAvg: 'number',
      queryCount: 'number',
      queryCountAvg: 'number',
      queryOverFivePercentNum: 'number',
      queryOverFiveSecPercent: 'string',
      queryOverTenSecPercent: 'string',
      queryOverTenSecPercentNum: 'number',
      queryTimeoutCount: 'number',
      queryTimeoutCountPercent: 'number',
      quickIndexCostTimeAvg: 'number',
      quickIndexQueryCount: 'number',
      repeatQueryPercent: 'string',
      repeatQueryPercentNum: 'number',
      repeatSqlQueryCount: 'number',
      repeatSqlQueryPercent: 'string',
      reportId: 'string',
      reportName: 'string',
      reportType: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShareListResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 3
   */
  authPoint?: number;
  /**
   * @example
   * 1640102400000
   */
  expireDate?: number;
  /**
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @example
   * 0ab9659e-29cf-47d7-a364-3a91553b****
   */
  shareId?: string;
  /**
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  shareToId?: string;
  shareToName?: string;
  /**
   * @example
   * 0
   */
  shareToType?: number;
  /**
   * @example
   * product
   */
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      authPoint: 'AuthPoint',
      expireDate: 'ExpireDate',
      reportId: 'ReportId',
      shareId: 'ShareId',
      shareToId: 'ShareToId',
      shareToName: 'ShareToName',
      shareToType: 'ShareToType',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPoint: 'number',
      expireDate: 'number',
      reportId: 'string',
      shareId: 'string',
      shareToId: 'string',
      shareToName: 'string',
      shareToType: 'number',
      shareType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySharesToUserListResponseBodyResultDirectory extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory where the resource is located.
   * 
   * @example
   * f7f6e22b-83be-47fd-b49d-9ca686a9****
   */
  id?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * Chart Report
   */
  name?: string;
  /**
   * @remarks
   * The path ID of the directory where the resource is located.
   */
  pathId?: string;
  /**
   * @remarks
   * The path name of the directory where the resource is located.
   * 
   * @example
   * Level -1 Directory /Level -2 Directory
   */
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySharesToUserListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the creation time in milliseconds.
   * 
   * @example
   * 1530078690000
   */
  createTime?: string;
  /**
   * @remarks
   * Remarks on the work.
   * 
   * @example
   * Description of the test report
   */
  description?: string;
  /**
   * @remarks
   * Information about the directory where the work is located.
   */
  directory?: QuerySharesToUserListResponseBodyResultDirectory;
  /**
   * @remarks
   * The name of the Alibaba Cloud account to which the modifier belongs.
   * 
   * @example
   * 13855265****@163.com
   */
  modifyName?: string;
  /**
   * @remarks
   * The timestamp of the modification time in milliseconds.
   * 
   * @example
   * 1530078690000
   */
  modifyTime?: string;
  /**
   * @remarks
   * The UserID of the work owner in Quickbi.
   * 
   * @example
   * 74f5527216d14e9892245320ebf2****
   */
  ownerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the work owner.
   * 
   * @example
   * w****@aliyun.com
   */
  ownerName?: string;
  /**
   * @remarks
   * Security policies for collaborative authorization of works. Valid values:
   * 
   * *   0: private
   * *   12: Authorize specified members
   * *   1 or 11: Authorize all workspace members
   * 
   * > 
   * 
   * *   If you use legacy permissions, the return value is 1.
   * 
   * *   If you use the new permissions, the return value is 11.
   * 
   * @example
   * 0
   */
  securityLevel?: string;
  /**
   * @remarks
   * The publishing status of the report. Valid values:
   * 
   * *   0: unpublished
   * *   1: published
   * *   2: modified but not published
   * *   3: unpublished
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Third-party embedding status. Valid values:
   * 
   * *   0: No embedding is enabled.
   * *   1: Embed is enabled.
   * 
   * @example
   * 0
   */
  thirdPartAuthFlag?: number;
  /**
   * @remarks
   * The name of the report.
   * 
   * @example
   * Test report
   */
  workName?: string;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   FULLPAGE: full-screen dashboards
   * *   REPORT: workbook
   * *   dashboardOfflineQuery: self-service data retrieval
   * 
   * @example
   * DATAFORM
   */
  workType?: string;
  /**
   * @remarks
   * The ID of the operations report.
   * 
   * @example
   * 97f7f4c1-543a-4069-8e8d-a56cfcd6****
   */
  worksId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the report belongs.
   * 
   * @example
   * c5f86ad2-ef53-4c51-8720-162ecfdb****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the report belongs.
   * 
   * @example
   * Return to Professional Edition
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      directory: 'Directory',
      modifyName: 'ModifyName',
      modifyTime: 'ModifyTime',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      securityLevel: 'SecurityLevel',
      status: 'Status',
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      workName: 'WorkName',
      workType: 'WorkType',
      worksId: 'WorksId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      directory: QuerySharesToUserListResponseBodyResultDirectory,
      modifyName: 'string',
      modifyTime: 'string',
      ownerId: 'string',
      ownerName: 'string',
      securityLevel: 'string',
      status: 'number',
      thirdPartAuthFlag: 'number',
      workName: 'string',
      workType: 'string',
      worksId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmartqPermissionByCubeIdResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @example
   * test
   */
  cubeName?: string;
  hasPerssion?: boolean;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      hasPerssion: 'HasPerssion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      cubeName: 'string',
      hasPerssion: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketInfoResponseBodyResult extends $dara.Model {
  /**
   * @example
   * a27a9aec-****-****-bd40-1a21ea41d7c5
   */
  accessTicket?: string;
  /**
   * @example
   * sfdgsds-****-****-a608-mghdgd
   */
  cmptId?: string;
  globalParam?: string;
  /**
   * @example
   * 2022-01-30 03:03:49
   */
  invalidTime?: string;
  /**
   * @example
   * 9999
   */
  maxTicketNum?: number;
  /**
   * @example
   * 2fe4fbd8-****-****-b3e1-e92c7af083ea
   */
  organizationId?: string;
  /**
   * @example
   * 2022-01-09 22:23:49
   */
  registerTime?: string;
  /**
   * @example
   * 47
   */
  usedTicketNum?: number;
  /**
   * @example
   * 974e50**********9033f46
   */
  userId?: string;
  watermarkParam?: string;
  /**
   * @example
   * ccd3428c-****-****-a608-26bae29dffee
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      accessTicket: 'AccessTicket',
      cmptId: 'CmptId',
      globalParam: 'GlobalParam',
      invalidTime: 'InvalidTime',
      maxTicketNum: 'MaxTicketNum',
      organizationId: 'OrganizationId',
      registerTime: 'RegisterTime',
      usedTicketNum: 'UsedTicketNum',
      userId: 'UserId',
      watermarkParam: 'WatermarkParam',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTicket: 'string',
      cmptId: 'string',
      globalParam: 'string',
      invalidTime: 'string',
      maxTicketNum: 'number',
      organizationId: 'string',
      registerTime: 'string',
      usedTicketNum: 'number',
      userId: 'string',
      watermarkParam: 'string',
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupListByParentIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the sub-user group was created.
   * 
   * @example
   * 2020-10-30 10:03:09
   */
  createTime?: string;
  /**
   * @remarks
   * The creator of the sub-user group. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   * 
   * @example
   * 136516262323****
   */
  createUser?: string;
  /**
   * @remarks
   * Directory level of the sub-user group.
   */
  identifiedPath?: string;
  /**
   * @remarks
   * The time when the sub-user group was last modified.
   * 
   * @example
   * 2020-11-16 15:49:08
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The user who modified the subgroup. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   * 
   * @example
   * 136516262323****
   */
  modifyUser?: string;
  /**
   * @remarks
   * The ID of the parent user group.
   * 
   * @example
   * 3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  parentUserGroupId?: string;
  /**
   * @remarks
   * The description of the sub-user group.
   * 
   * @example
   * User Group for Testing
   */
  userGroupDescription?: string;
  /**
   * @remarks
   * The ID of the sub-user group.
   * 
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
  userGroupId?: string;
  /**
   * @remarks
   * The name of the sub-user group.
   * 
   * @example
   * popapi test group
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      identifiedPath: 'IdentifiedPath',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      parentUserGroupId: 'ParentUserGroupId',
      userGroupDescription: 'UserGroupDescription',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      identifiedPath: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      parentUserGroupId: 'string',
      userGroupDescription: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupMemberResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  id?: string;
  /**
   * @example
   * true
   */
  isUserGroup?: boolean;
  name?: string;
  /**
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  parentUserGroupId?: string;
  parentUserGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      isUserGroup: 'IsUserGroup',
      name: 'Name',
      parentUserGroupId: 'ParentUserGroupId',
      parentUserGroupName: 'ParentUserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isUserGroup: 'boolean',
      name: 'string',
      parentUserGroupId: 'string',
      parentUserGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByAccountResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 135****5848
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account that corresponds to the member. (If you use a RAM user, the domain name information that follows @ is removed. For example, if you use a <test@test.com>, test is returned.)
   * 
   * @example
   * 1386587****@163.com
   */
  accountName?: string;
  /**
   * @remarks
   * Whether you are an administrator of the organization. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  adminUser?: boolean;
  /**
   * @remarks
   * Whether you are a permission administrator. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * 1386587****@163.com
   */
  email?: string;
  /**
   * @remarks
   * The nickname of the account.
   * 
   * @example
   * Test user
   */
  nickName?: string;
  /**
   * @remarks
   * The phone number of the alert contact.
   * 
   * @example
   * 1386587****
   */
  phone?: string;
  /**
   * @remarks
   * 用户绑定的组织角色ID列表。
   */
  roleIdList?: number[];
  /**
   * @remarks
   * The UserID in the Quick BI.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  /**
   * @remarks
   * The role type of the organization member. Valid values:
   * 
   * *   1 : developer
   * *   2 : visitors
   * *   3 : Analyst
   * 
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      email: 'Email',
      nickName: 'NickName',
      phone: 'Phone',
      roleIdList: 'RoleIdList',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      email: 'string',
      nickName: 'string',
      phone: 'string',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
      userType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.roleIdList)) {
      $dara.Model.validateArray(this.roleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByUserIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 135****5848
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account that corresponds to the member.
   * 
   * @example
   * 1386587****@163.com
   */
  accountName?: string;
  /**
   * @remarks
   * Whether you are an administrator of the organization. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  adminUser?: boolean;
  /**
   * @remarks
   * Whether you are a permission administrator. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * 1386587****@163.com
   */
  email?: string;
  /**
   * @remarks
   * The nickname of the account.
   * 
   * @example
   * Test user
   */
  nickName?: string;
  /**
   * @remarks
   * The phone number of the alert contact.
   * 
   * @example
   * 1386587****
   */
  phone?: string;
  roleIdList?: number[];
  /**
   * @remarks
   * The UserID in the Quick BI.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  /**
   * @remarks
   * The role type of the organization member. Valid values:
   * 
   * *   1 : developer
   * *   2 : visitors
   * *   3 : Analyst
   * 
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      email: 'Email',
      nickName: 'NickName',
      phone: 'Phone',
      roleIdList: 'RoleIdList',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      email: 'string',
      nickName: 'string',
      phone: 'string',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
      userType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.roleIdList)) {
      $dara.Model.validateArray(this.roleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserListResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * 1355********
   */
  accountId?: string;
  accountName?: string;
  /**
   * @example
   * true
   */
  adminUser?: boolean;
  /**
   * @example
   * true
   */
  authAdminUser?: boolean;
  isDeleted?: boolean;
  joinedDate?: number;
  lastLoginTime?: number;
  nickName?: string;
  roleIdList?: number[];
  /**
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  /**
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      isDeleted: 'IsDeleted',
      joinedDate: 'JoinedDate',
      lastLoginTime: 'LastLoginTime',
      nickName: 'NickName',
      roleIdList: 'RoleIdList',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      isDeleted: 'boolean',
      joinedDate: 'number',
      lastLoginTime: 'number',
      nickName: 'string',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
      userType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.roleIdList)) {
      $dara.Model.validateArray(this.roleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserListResponseBodyResult extends $dara.Model {
  data?: QueryUserListResponseBodyResultData[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryUserListResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserRoleInfoInWorkspaceResponseBodyResult extends $dara.Model {
  /**
   * @example
   * role_workspace_admin
   */
  roleCode?: string;
  /**
   * @example
   * 25
   */
  roleId?: number;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleCode: 'RoleCode',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleCode: 'string',
      roleId: 'number',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagMetaListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The description of the tag.
   * 
   * @example
   * Used to distinguish some positions
   */
  tagDescription?: string;
  /**
   * @remarks
   * The ID of the label.
   * 
   * @example
   * pop_001
   */
  tagId?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * Position
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDescription: 'TagDescription',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDescription: 'string',
      tagId: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagValueListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Tag ID.
   * 
   * @example
   * pop_001
   */
  tagId?: string;
  /**
   * @remarks
   * Tag name.
   * 
   * @example
   * Position
   */
  tagName?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * Supervisor
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
      tagName: 'TagName',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
      tagName: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksResponseBodyResultDirectory extends $dara.Model {
  /**
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  pathId?: string;
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 0
   */
  auth3rdFlag?: number;
  description?: string;
  directory?: QueryWorksResponseBodyResultDirectory;
  /**
   * @example
   * 1496651577000
   */
  gmtCreate?: string;
  /**
   * @example
   * 1496651577000
   */
  gmtModify?: string;
  modifyName?: string;
  /**
   * @example
   * 9187a612aa474e2a8ac1414d5529****
   */
  ownerId?: string;
  ownerName?: string;
  publicFlag?: boolean;
  publicInvalidTime?: number;
  /**
   * @example
   * 0
   */
  securityLevel?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  workName?: string;
  /**
   * @example
   * PAGE
   */
  workType?: string;
  /**
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  worksId?: string;
  /**
   * @example
   * 87c6b145-090c-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      auth3rdFlag: 'Auth3rdFlag',
      description: 'Description',
      directory: 'Directory',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      modifyName: 'ModifyName',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      publicFlag: 'PublicFlag',
      publicInvalidTime: 'PublicInvalidTime',
      securityLevel: 'SecurityLevel',
      status: 'Status',
      workName: 'WorkName',
      workType: 'WorkType',
      worksId: 'WorksId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth3rdFlag: 'number',
      description: 'string',
      directory: QueryWorksResponseBodyResultDirectory,
      gmtCreate: 'string',
      gmtModify: 'string',
      modifyName: 'string',
      ownerId: 'string',
      ownerName: 'string',
      publicFlag: 'boolean',
      publicInvalidTime: 'number',
      securityLevel: 'string',
      status: 'number',
      workName: 'string',
      workType: 'string',
      worksId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksBloodRelationshipResponseBodyResultQueryParams extends $dara.Model {
  /**
   * @remarks
   * Indices whether the metric. Valid values:
   * 
   * true false
   * 
   * @example
   * area_column
   */
  areaId?: string;
  /**
   * @remarks
   * The ID of the owning location.
   * 
   * @example
   * The name of the owning location.
   */
  areaName?: string;
  /**
   * @remarks
   * The globally unique PathId.
   * 
   * @example
   * order_number
   */
  caption?: string;
  /**
   * @remarks
   * The display name of the field.
   * 
   * @example
   * number
   */
  dataType?: string;
  expression?: string;
  /**
   * @remarks
   * The type of the field. Valid values:
   * 
   * *   string: string type
   * *   date: a date type that contains only the year, month, and day parts
   * *   datetime: a common date type
   * *   time: a date type that contains only hours, minutes, and seconds.
   * *   number: numeric
   * *   boolean: Boolean type
   * *   geographical: geographical location
   * *   url: string type
   * *   imageUrl: the type of the image link.
   * *   multivalue: a multi-value column
   * 
   * @example
   * true
   */
  isMeasure?: boolean;
  /**
   * @remarks
   * The unique ID of the field.
   * 
   * @example
   * schema7d1944eb-443e-48c6-8123-bf45a99e7e74.dc78a4ed-880d-452e-b017-90cfc10c83e5_company_sales_record.[Ndc78a4_order_level].[Ndc78a4_order_level].[Ndc78a4_order_level]
   */
  pathId?: string;
  /**
   * @remarks
   * A list of query parameter reference columns.
   * 
   * @example
   * Ndc78a4_order_number
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      areaName: 'AreaName',
      caption: 'Caption',
      dataType: 'DataType',
      expression: 'Expression',
      isMeasure: 'IsMeasure',
      pathId: 'PathId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      areaName: 'string',
      caption: 'string',
      dataType: 'string',
      expression: 'string',
      isMeasure: 'boolean',
      pathId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksBloodRelationshipResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of work blood information.
   * 
   * @example
   * 0696083a-ca72-4d89-8e7a-c017910e0***
   */
  componentId?: string;
  /**
   * @remarks
   * The ID of the component that you want to modify.
   * 
   * @example
   * The name of the component.
   */
  componentName?: string;
  /**
   * @remarks
   * Line
   * 
   * @example
   * 3
   */
  componentType?: number;
  componentTypeCnName?: string;
  /**
   * @remarks
   * The type of the image component.
   * 
   * @example
   * LINE
   */
  componentTypeName?: string;
  /**
   * @remarks
   * Column (Measure)
   * 
   * @example
   * dc78a4ed-880d-452e-b017-90cfc10c83e5_company_sales_record
   */
  datasetId?: string;
  /**
   * @remarks
   * The name of the component type.
   */
  queryParams?: QueryWorksBloodRelationshipResponseBodyResultQueryParams[];
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentName: 'ComponentName',
      componentType: 'ComponentType',
      componentTypeCnName: 'ComponentTypeCnName',
      componentTypeName: 'ComponentTypeName',
      datasetId: 'DatasetId',
      queryParams: 'QueryParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      componentName: 'string',
      componentType: 'number',
      componentTypeCnName: 'string',
      componentTypeName: 'string',
      datasetId: 'string',
      queryParams: { 'type': 'array', 'itemType': QueryWorksBloodRelationshipResponseBodyResultQueryParams },
    };
  }

  validate() {
    if(Array.isArray(this.queryParams)) {
      $dara.Model.validateArray(this.queryParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByOrganizationResponseBodyResultDataDirectory extends $dara.Model {
  /**
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  pathId?: string;
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByOrganizationResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * 1
   */
  auth3rdFlag?: number;
  /**
   * @remarks
   * The hierarchical structure of the directory ID to which the directory belongs. Separate the hierarchical structure with a /.
   * 
   * @example
   * The hierarchical structure of the directory to which the directory belongs. Separate the hierarchical structure with a (/).
   */
  description?: string;
  /**
   * @remarks
   * The ID of the directory.
   */
  directory?: QueryWorksByOrganizationResponseBodyResultDataDirectory;
  /**
   * @remarks
   * Test directory
   * 
   * @example
   * 1496651577000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Test Workspace
   * 
   * @example
   * 1572334870000
   */
  gmtModify?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * The name of the work.
   */
  modifyName?: string;
  /**
   * @remarks
   * Security policies for collaborative authorization of works. Valid values:
   * 
   * *   0: private
   * *   12: Authorize specified members
   * *   1 or 11: Authorize all workspace members
   * 
   * > 
   * 
   * *   If you use legacy permissions, the return value is 1.
   * 
   * *   If you use the new permissions, the return value is 11.
   * 
   * @example
   * Remarks on the work.
   */
  ownerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the person who modified the work.
   * 
   * @example
   * Tom
   */
  ownerName?: string;
  publicFlag?: boolean;
  publicInvalidTime?: number;
  /**
   * @remarks
   * The directory to which the work belongs.
   * 
   * @example
   * 1
   */
  securityLevel?: string;
  /**
   * @remarks
   * Li Si
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Test directory
   * 
   * @example
   * The name of the directory.
   */
  workName?: string;
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * PAGE
   */
  workType?: string;
  /**
   * @remarks
   * The user ID of the work owner in the Quick BI.
   * 
   * @example
   * 897ce25e-****-****-af84-d13c5610****
   */
  worksId?: string;
  /**
   * @remarks
   * Test report
   * 
   * @example
   * The timestamp of the creation of the work in milliseconds.
   */
  workspaceId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * The name of the Alibaba Cloud account that modified the work.
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      auth3rdFlag: 'Auth3rdFlag',
      description: 'Description',
      directory: 'Directory',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      modifyName: 'ModifyName',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      publicFlag: 'PublicFlag',
      publicInvalidTime: 'PublicInvalidTime',
      securityLevel: 'SecurityLevel',
      status: 'Status',
      workName: 'WorkName',
      workType: 'WorkType',
      worksId: 'WorksId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth3rdFlag: 'number',
      description: 'string',
      directory: QueryWorksByOrganizationResponseBodyResultDataDirectory,
      gmtCreate: 'string',
      gmtModify: 'string',
      modifyName: 'string',
      ownerId: 'string',
      ownerName: 'string',
      publicFlag: 'boolean',
      publicInvalidTime: 'number',
      securityLevel: 'string',
      status: 'number',
      workName: 'string',
      workType: 'string',
      worksId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByOrganizationResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account name of the work owner.
   */
  data?: QueryWorksByOrganizationResponseBodyResultData[];
  /**
   * @remarks
   * The timestamp of the modification of the work in milliseconds.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The ID of the work.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   FULLPAGE: full-screen dashboards
   * *   REPORT: workbook
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * Third-party embedding status. Valid values:
   * 
   * *   0: The embed service is not enabled.
   * *   1: Embed is enabled.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryWorksByOrganizationResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByWorkspaceResponseBodyResultDataDirectory extends $dara.Model {
  /**
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  id?: string;
  name?: string;
  /**
   * @remarks
   * The hierarchical structure of the directory ID to which the directory belongs. Separate the hierarchical structure with a /.
   * 
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  pathId?: string;
  /**
   * @remarks
   * The hierarchical structure of the directory to which the directory belongs. Separate the hierarchical structure with a (/).
   * 
   * @example
   * Test directory
   */
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByWorkspaceResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Third-party embedding status. Valid values:
   * 
   * *   0: The embed service is not enabled.
   * *   1: Embed is enabled.
   * 
   * @example
   * 1
   */
  auth3rdFlag?: number;
  /**
   * @remarks
   * Remarks on the work.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The directory to which the work belongs.
   */
  directory?: QueryWorksByWorkspaceResponseBodyResultDataDirectory;
  /**
   * @remarks
   * The timestamp of the creation of the work in milliseconds.
   * 
   * @example
   * 1496651577000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp of the modification of the work in milliseconds.
   * 
   * @example
   * 1572334870000
   */
  gmtModify?: string;
  /**
   * @remarks
   * Nickname of the work modifier.
   * 
   * @example
   * Tom
   */
  modifyName?: string;
  /**
   * @remarks
   * The user ID of the work owner in the Quick BI.
   * 
   * @example
   * The name of the workspace to which the work belongs.
   */
  ownerId?: string;
  /**
   * @remarks
   * The nickname of the work owner.
   * 
   * @example
   * Li Si
   */
  ownerName?: string;
  publicFlag?: boolean;
  publicInvalidTime?: number;
  /**
   * @remarks
   * Security policies for collaborative authorization of works. Valid values:
   * 
   * *   0: private
   * *   12: Authorize specified members
   * *   1 or 11: Authorize all workspace members
   * 
   * > 
   * 
   * *   If you use legacy permissions, the return value is 1.
   * 
   * *   If you use the new permissions, the return value is 11.
   * 
   * @example
   * 0
   */
  securityLevel?: string;
  /**
   * @remarks
   * Status of dashboards, full-screen dashboards, spreadsheets. The default value of other work types is 1. Valid values:
   * 
   * *   0: unpublished
   * *   1: published
   * *   2: modified but not published
   * *   3: unpublished
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The name of the work.
   * 
   * @example
   * Test report
   */
  workName?: string;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   FULLPAGE: full-screen dashboards
   * *   REPORT: workbook
   * *   dashboardOfflineQuery: self-service data retrieval
   * *   Analysis: Ad hoc analysis
   * *   DATAFORM: form filling
   * 
   * @example
   * PAGE
   */
  workType?: string;
  /**
   * @remarks
   * The ID of the work.
   * 
   * @example
   * 897ce25e-f993-4abd-af84-d13c5610****
   */
  worksId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * 87c6b145-090c-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * Test Workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      auth3rdFlag: 'Auth3rdFlag',
      description: 'Description',
      directory: 'Directory',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      modifyName: 'ModifyName',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      publicFlag: 'PublicFlag',
      publicInvalidTime: 'PublicInvalidTime',
      securityLevel: 'SecurityLevel',
      status: 'Status',
      workName: 'WorkName',
      workType: 'WorkType',
      worksId: 'WorksId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth3rdFlag: 'number',
      description: 'string',
      directory: QueryWorksByWorkspaceResponseBodyResultDataDirectory,
      gmtCreate: 'string',
      gmtModify: 'string',
      modifyName: 'string',
      ownerId: 'string',
      ownerName: 'string',
      publicFlag: 'boolean',
      publicInvalidTime: 'number',
      securityLevel: 'string',
      status: 'number',
      workName: 'string',
      workType: 'string',
      worksId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByWorkspaceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The details of the list of works.
   */
  data?: QueryWorksByWorkspaceResponseBodyResultData[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page set when the interface is requested.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of rows in the table.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryWorksByWorkspaceResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceRoleConfigResponseBodyResultAuthConfigList extends $dara.Model {
  /**
   * @remarks
   * Permission scope.
   */
  actionAuthKeys?: string[];
  /**
   * @remarks
   * Permission type:
   * - portal_create: Data Portal
   * - dashboard_create: Dashboard
   * - report_create: Spreadsheet
   * - screen_create: Data Screen
   * - analysis: Ad-hoc Analysis
   * - offline_download: Self-service Data Retrieval
   * - data_form: Data Entry
   * - quick_etl: Data Preparation
   * - cube: Dataset
   * - datasource: Data Source
   * 
   * @example
   * portal_create
   */
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      actionAuthKeys: 'ActionAuthKeys',
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionAuthKeys: { 'type': 'array', 'itemType': 'string' },
      authKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionAuthKeys)) {
      $dara.Model.validateArray(this.actionAuthKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceRoleConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of role permission configurations.
   */
  authConfigList?: QueryWorkspaceRoleConfigResponseBodyResultAuthConfigList[];
  /**
   * @remarks
   * Whether it is a predefined role. Value range:
   * 
   * - true: Yes
   * - false: No
   * 
   * @example
   * true
   */
  isSystemRole?: boolean;
  /**
   * @remarks
   * Workspace role ID, including predefined roles and custom roles:
   * 
   * - 25: Workspace Administrator (predefined role)
   * - 26: Developer (predefined role)
   * - 27: Analyst (predefined role)
   * - 30: Viewer (predefined role)
   * - Custom role: The corresponding role ID for the custom role
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * Role name.
   * 
   * @example
   * pace administrator
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      authConfigList: 'AuthConfigList',
      isSystemRole: 'IsSystemRole',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigList: { 'type': 'array', 'itemType': QueryWorkspaceRoleConfigResponseBodyResultAuthConfigList },
      isSystemRole: 'boolean',
      roleId: 'number',
      roleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authConfigList)) {
      $dara.Model.validateArray(this.authConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListResponseBodyResultDataRole extends $dara.Model {
  /**
   * @example
   * role_workspace_admin
   */
  roleCode?: string;
  /**
   * @example
   * 25
   */
  roleId?: number;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleCode: 'RoleCode',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleCode: 'string',
      roleId: 'number',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * 16020915****8429
   */
  accountId?: string;
  /**
   * @example
   * pop****@aliyunid.test
   */
  accountName?: string;
  nickName?: string;
  role?: QueryWorkspaceUserListResponseBodyResultDataRole;
  /**
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      nickName: 'NickName',
      role: 'Role',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      nickName: 'string',
      role: QueryWorkspaceUserListResponseBodyResultDataRole,
      userId: 'string',
    };
  }

  validate() {
    if(this.role && typeof (this.role as any).validate === 'function') {
      (this.role as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListResponseBodyResult extends $dara.Model {
  data?: QueryWorkspaceUserListResponseBodyResultData[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryWorkspaceUserListResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqAuthorizeResponseBodyResult extends $dara.Model {
  /**
   * @example
   * INVALID_FILE_FORMAT
   */
  detailMessage?: string;
  /**
   * @example
   * 617277C****************ABA47E31
   */
  llmCube?: string;
  /**
   * @example
   * 617277C****************ABA47E31
   */
  llmCubeTheme?: string;
  /**
   * @example
   * 617277C****************ABA47E31
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      detailMessage: 'DetailMessage',
      llmCube: 'LlmCube',
      llmCubeTheme: 'LlmCubeTheme',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailMessage: 'string',
      llmCube: 'string',
      llmCubeTheme: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqQueryAbilityResponseBodyResultMetaType extends $dara.Model {
  /**
   * @example
   * Polar***STPS
   */
  key?: string;
  /**
   * @example
   * string
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqQueryAbilityResponseBodyResultValues extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  row?: string[];
  static names(): { [key: string]: string } {
    return {
      row: 'Row',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.row)) {
      $dara.Model.validateArray(this.row);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqQueryAbilityResponseBodyResult extends $dara.Model {
  chartType?: string;
  /**
   * **if can be null:**
   * true
   */
  conclusionText?: string;
  logicSql?: string;
  metaType?: SmartqQueryAbilityResponseBodyResultMetaType[];
  values?: SmartqQueryAbilityResponseBodyResultValues[];
  static names(): { [key: string]: string } {
    return {
      chartType: 'ChartType',
      conclusionText: 'ConclusionText',
      logicSql: 'LogicSql',
      metaType: 'MetaType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartType: 'string',
      conclusionText: 'string',
      logicSql: 'string',
      metaType: { 'type': 'array', 'itemType': SmartqQueryAbilityResponseBodyResultMetaType },
      values: { 'type': 'array', 'itemType': SmartqQueryAbilityResponseBodyResultValues },
    };
  }

  validate() {
    if(Array.isArray(this.metaType)) {
      $dara.Model.validateArray(this.metaType);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceUsersRoleResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 0
   */
  failure?: number;
  failureDetail?: { [key: string]: any };
  /**
   * @example
   * 2
   */
  success?: number;
  /**
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failure: 'Failure',
      failureDetail: 'FailureDetail',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failure: 'number',
      failureDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    if(this.failureDetail) {
      $dara.Model.validateMap(this.failureDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataLevelPermissionRuleUsersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"ruleId":"a5bb24da-***-a891683e14da","cubeId":"7c7223ae-***-3c744528014b","addModel":{"userGroups":["0d5fb19b-***-1248fc27ca51","3d2c23d4-***-f6390f325c2d"],"users":["4334***358","Huang***3fa822"]}}
   */
  addUserModel?: string;
  static names(): { [key: string]: string } {
    return {
      addUserModel: 'AddUserModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addUserModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataLevelPermissionRuleUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface. Valid values:\\n\\n*   true: The request was successful.\\n*   false: The request failed.\\n
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:\\n\\n*   true: The request was successful.\\n*   false: The request failed.\\n
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataLevelPermissionRuleUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDataLevelPermissionRuleUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDataLevelPermissionRuleUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataLevelPermissionWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-***-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * Operation Type: You can set this parameter to one of the following values.
   * 
   * *   ADD: Add a whitelist
   * *   DELETE: deletes a whitelist.
   * 
   * @example
   * ADD
   */
  operateType?: string;
  /**
   * @remarks
   * The type of row-level permissions.
   * 
   * *   ROW_LEVEL: row-level permissions,
   * *   COLUMN_LEVEL: column-level permissions
   * 
   * @example
   * ROW_LEVEL
   */
  ruleType?: string;
  /**
   * @example
   * 43342***435,1553a****41231
   */
  targetIds?: string;
  /**
   * @remarks
   * Modify the type of the whitelist:
   * 
   * *   1: user
   * *   2: user group
   * 
   * @example
   * 1
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      operateType: 'OperateType',
      ruleType: 'RuleType',
      targetIds: 'TargetIds',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      operateType: 'string',
      ruleType: 'string',
      targetIds: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataLevelPermissionWhiteListResponseBody extends $dara.Model {
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataLevelPermissionWhiteListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDataLevelPermissionWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDataLevelPermissionWhiteListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShareReportRequest extends $dara.Model {
  /**
   * @remarks
   * The scope of authorization. Valid values:
   * 
   * *   1: view only
   * *   3: View and export
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  authPoint?: number;
  /**
   * @remarks
   * The validity period of the share. The value is a timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1608202110838
   */
  expireDate?: number;
  /**
   * @remarks
   * The ID of the person to be shared, which may be the user ID of the Quick BI or the user group ID.
   * 
   * *   If ShareToType is 0 (user), ShareTo is the user ID.
   * *   When ShareToType is set to 1 (user group), ShareTo is the user group ID.
   * *   When ShareToType=2 (organization), ShareTo is the ID of the organization.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  shareToId?: string;
  /**
   * @remarks
   * The share type of the template. Valid values:
   * 
   * *   0: user
   * *   1: user group
   * *   2: organization
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  shareToType?: number;
  /**
   * @remarks
   * The ID of the shared work. The works here include BI portal, dashboards, spreadsheets, and self-service access.
   * 
   * This parameter is required.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      authPoint: 'AuthPoint',
      expireDate: 'ExpireDate',
      shareToId: 'ShareToId',
      shareToType: 'ShareToType',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPoint: 'number',
      expireDate: 'number',
      shareToId: 'string',
      shareToType: 'number',
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShareReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 05739b8e-3de0-4204-9669-7f04f02522b9
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShareReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddShareReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddShareReportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserRequest extends $dara.Model {
  accountId?: string;
  /**
   * @example
   * xxxxxx@163.com
   * 
   * @deprecated
   */
  accountName?: string;
  /**
   * @remarks
   * Add organization members.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   * 
   * @deprecated
   */
  adminUser?: boolean;
  /**
   * @example
   * true
   * 
   * @deprecated
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  nickName?: string;
  roleIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      nickName: 'NickName',
      roleIds: 'RoleIds',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      nickName: 'string',
      roleIds: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: AddUserResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: AddUserResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The result of adding members to a user group is returned. Valid values:
   * 
   * *   true: The task is added.
   * *   false: The tag failed to be added.
   * 
   * This parameter is required.
   * 
   * @example
   * 555c4cd****
   */
  userGroupId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e537a5****,3dadsu****
   */
  userIdList?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      userIdList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMemberResponseBody extends $dara.Model {
  /**
   * @example
   * B6141A5A-A9EF-5F16-BF34-EFB9C1CCE4F3
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMemberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserGroupMemberResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the user groups. Separate the IDs with commas (,). Example: aGroupId,bGroupId,cGroupIds
   * 
   * This parameter is required.
   * 
   * @example
   * 0d5fb19b-****-****-99da-1248fc27ca51
   */
  userGroupIds?: string;
  /**
   * @remarks
   * The user ID of the Quick BI.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e5****37a5
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupIds: 'UserGroupIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupIds: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMembersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserGroupMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserGroupMembersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserTagMetaRequest extends $dara.Model {
  tagDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDescription: 'TagDescription',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDescription: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserTagMetaResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * 0822a7d9-****-****-****-f20163ab9b0d
   */
  result?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserTagMetaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserTagMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserTagMetaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
      userId: 'string',
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

export class AddUserToWorkspaceResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToWorkspaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserToWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserToWorkspaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceUsersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
      userIds: 'UserIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
      userIds: 'string',
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

export class AddWorkspaceUsersResponseBody extends $dara.Model {
  /**
   * @example
   * 7AAB95D7-2E11-4FE2-94BC-858E4FC0C976
   */
  requestId?: string;
  result?: AddWorkspaceUsersResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: AddWorkspaceUsersResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddWorkspaceUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddWorkspaceUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllotDatasetAccelerationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllotDatasetAccelerationTaskResponseBody extends $dara.Model {
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllotDatasetAccelerationTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllotDatasetAccelerationTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AllotDatasetAccelerationTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeMenuRequest extends $dara.Model {
  /**
   * @remarks
   * Authorizes the permissions of the menu. Valid values:
   * 
   * *   1: view
   * *   3: View + Export (default)
   * 
   * @example
   * 3
   */
  authPointsValue?: number;
  /**
   * @remarks
   * The ID of the BI portal.
   * 
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
  dataPortalId?: string;
  /**
   * @remarks
   * The menu ID of the BI portal leaf node.
   * 
   * *   The directory menu cannot be authorized.
   * *   You can upload multiple parameters at a time. Separate multiple IDs with commas (,). The maximum number of parameters that can be modified at a time is 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 54kqgoa****,pg1n135****
   */
  menuIds?: string;
  /**
   * @remarks
   * The IDs of the user groups.
   * 
   * *   You can upload multiple parameters at a time. Separate multiple IDs with commas (,). The maximum number of parameters that can be modified at a time is 200.
   * *   UserGroupIds and UserIds cannot be empty at the same time
   * 
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****,3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  userGroupIds?: string;
  /**
   * @remarks
   * The IDs of the end users. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   * 
   * *   You can upload multiple parameters at a time. Separate multiple IDs with commas (,). The maximum number of parameters that can be modified at a time is 200.
   * 
   * @example
   * 204627493484****,121344444790****
   */
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      authPointsValue: 'AuthPointsValue',
      dataPortalId: 'DataPortalId',
      menuIds: 'MenuIds',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPointsValue: 'number',
      dataPortalId: 'string',
      menuIds: 'string',
      userGroupIds: 'string',
      userIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeMenuResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 188F0B12-00EF-41B3-944A-FB7EF06C9F43
   */
  requestId?: string;
  /**
   * @remarks
   * The number of authorized menus.
   * 
   * @example
   * 2
   */
  result?: number;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'number',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeMenuResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthorizeMenuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuthorizeMenuResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersRequest extends $dara.Model {
  feishuUsers?: string;
  /**
   * @example
   * False
   */
  isAdmin?: boolean;
  /**
   * @example
   * true
   */
  isAuthAdmin?: boolean;
  /**
   * @example
   * "0d5fb19b-5555-41f0-99da-1248fc27ca51,0f868dd6_68dd_4d13_8422_c5dca3bd4b61"
   */
  userGroupIds?: string;
  /**
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      feishuUsers: 'FeishuUsers',
      isAdmin: 'IsAdmin',
      isAuthAdmin: 'IsAuthAdmin',
      userGroupIds: 'UserGroupIds',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feishuUsers: 'string',
      isAdmin: 'boolean',
      isAuthAdmin: 'boolean',
      userGroupIds: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersResponseBody extends $dara.Model {
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  result?: BatchAddFeishuUsersResponseBodyResult;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: BatchAddFeishuUsersResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchAddFeishuUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchAddFeishuUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAuthorizationMenuRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
  dataPortalId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 54kqgoa****,pg1n135****
   */
  menuIds?: string;
  /**
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****,3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  userGroupIds?: string;
  /**
   * @example
   * 204627493484****,121344444790****
   */
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      dataPortalId: 'DataPortalId',
      menuIds: 'MenuIds',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPortalId: 'string',
      menuIds: 'string',
      userGroupIds: 'string',
      userIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAuthorizationMenuResponseBody extends $dara.Model {
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  result?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'number',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAuthorizationMenuResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelAuthorizationMenuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelAuthorizationMenuResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the favorite user. The user ID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 121344444790****
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the work to cancel the collection.
   * 
   * This parameter is required.
   * 
   * @example
   * 5d6ae4e7-cede-43cd-b4d3-d2fd442a9202
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCollectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCollectionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelCollectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelCollectionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelReportShareRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the work. The works here include BI portal, dashboards, spreadsheets, and self-service access.
   * 
   * This parameter is required.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the person to be shared, which may be the user ID of the Quick BI or the user group ID.
   * 
   * *   If ShareToType is 0 (user), ShareTo is the user ID.
   * *   When ShareToType is set to 1 (user group), ShareTo is the user group ID.
   * *   When ShareToType=2 (organization), ShareTo is the ID of the organization.
   * 
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  shareToIds?: string;
  /**
   * @remarks
   * The deletion method. Valid values:
   * 
   * *   0: Delete by user
   * *   1: Delete by user group
   * *   2: Delete by organization
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  shareToType?: number;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      shareToIds: 'ShareToIds',
      shareToType: 'ShareToType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
      shareToIds: 'string',
      shareToType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelReportShareResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelReportShareResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelReportShareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelReportShareResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVisibilityModelRequest extends $dara.Model {
  /**
   * @remarks
   * The number of menus that are successfully modified.
   * 
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
  dataPortalId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * This parameter is required.
   * 
   * @example
   * 54kqgoa****,pg1n135****
   */
  menuIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  showOnlyWithAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataPortalId: 'DataPortalId',
      menuIds: 'MenuIds',
      showOnlyWithAccess: 'ShowOnlyWithAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPortalId: 'string',
      menuIds: 'string',
      showOnlyWithAccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVisibilityModelResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  result?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'number',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVisibilityModelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeVisibilityModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeVisibilityModelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckReadableRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID of the Quick BI to be checked.
   * 
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the work. Resources here include BI portal, dashboards, spreadsheets, and self-service access.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckReadableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckReadableResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckReadableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckReadableResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The user\\"s account name.
   * 
   * - If the user is an Alibaba Cloud primary account **wangwu**, the format is **[Primary Account]**, for example, **wangwu**.
   * - If the user is a RAM account **zhangsan**@aliyun.cn, the format is **[Primary Account: Sub-account]**, for example, **wangwu:zhangsan**.
   * 
   * > Only one of UserId and AccountName needs to be filled in. If neither is filled in, it will default to binding the report\\"s Owner, and the report will be accessed with that user\\"s identity. If you need to configure row-level permissions, please refer to [Row-Level Permissions](https://help.aliyun.com/document_detail/322783.html).
   * 
   * @example
   * test user
   * 
   * @deprecated
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the user\\"s account.
   * - 1: Alibaba Cloud account
   * - 3: Quick BI self-built account
   * - 4: DingTalk
   * - 5: RAM sub-account
   * - 9: WeCom
   * - 10: Feishu
   * > If AccountName is not empty, then AccountType must also not be empty.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  accountType?: number;
  /**
   * @remarks
   * Component ID. This is the ID of a component within the above-mentioned dashboard; other types of works do not support this.
   * Refer to the [QueryWorksBloodRelationship](https://next.api.aliyun.com/api/quickbi-public/2022-01-01/QueryWorksBloodRelationship?spm=a2c4g.11186623.0.0.15615d7aWVvWAl&params={}&lang=JAVA&tab=DOC&sdkStyle=old) API for obtaining the component ID.
   * 
   * @example
   * 0fc6a275c7f64f17b1****a306ce0f31
   */
  cmptId?: string;
  /**
   * @remarks
   * Expiration time
   * - Unit: minutes
   * - Default: 240
   * 
   * @example
   * 200
   */
  expireTime?: number;
  /**
   * @remarks
   * Global parameters for the report filter conditions.
   * - A string in JsonArray format.
   * 
   * > If you need to use global parameter capabilities, please contact the [Quick BI Operations Manager](https://h5-alimebot.dingtalk.com/intl/index.htm?spm=a2c4g.11186623.0.0.3da14f6chrDv9e&sourceType=ding_talk&from=DEFFB9G5KBByQkwq23wneFIOmaJ).
   * 
   * @example
   * [{"paramKey":"price","joinType":"and","conditionList":[{"operate":">","value":"0"}]}]
   */
  globalParam?: string;
  /**
   * @remarks
   * The number of tickets. Each time a ticket is used, the number of tickets decreases by 1.
   * - Default value: 1
   * - Recommended value: 1
   * - Maximum value: 99999
   * 
   * @example
   * 1
   */
  ticketNum?: number;
  /**
   * @remarks
   * Quick BI\\"s UserId, which is not your Alibaba Cloud account ID.
   * You can call the [QueryUserInfoByAccount](https://next.api.aliyun.com/api/quickbi-public/2022-01-01/QueryUserInfoByAccount?spm=a2c4g.11186623.0.0.15615d7aWVvWAl&params={}&tab=DOC&sdkStyle=old) API to obtain the UserId. An example of a UserId is fe67f61a35a94b7da1a34ba174a7****.
   * 
   * > Only one of UserId and AccountName needs to be filled in. If neither is filled in, it will default to binding the report\\"s Owner, and the report will be accessed with that user\\"s identity. If you need to configure row-level permissions, please refer to [Row-Level Permissions](https://help.aliyun.com/document_detail/322783.html).
   * 
   * @example
   * 46e537466****92704c8
   */
  userId?: string;
  /**
   * @remarks
   * Watermark parameters for the report.
   * - Must not exceed 50 characters.
   * - When the report type is a large screen, watermark parameter passing is not supported.
   * 
   * @example
   * Three-party embedding
   */
  watermarkParam?: string;
  /**
   * @remarks
   * The ID of the report to be embedded. Currently supports dashboards, spreadsheets, data screens, self-service data retrieval, ad-hoc analysis, and data entry.
   * 
   * This parameter is required.
   * 
   * @example
   * a206f5f3-****-e9b17c835b03
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      cmptId: 'CmptId',
      expireTime: 'ExpireTime',
      globalParam: 'GlobalParam',
      ticketNum: 'TicketNum',
      userId: 'UserId',
      watermarkParam: 'WatermarkParam',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'number',
      cmptId: 'string',
      expireTime: 'number',
      globalParam: 'string',
      ticketNum: 'number',
      userId: 'string',
      watermarkParam: 'string',
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The generated ticket value.
   * 
   * @example
   * ccd3428c-****-****-a608-26bae29dffee
   */
  result?: string;
  /**
   * @remarks
   * 是否请求成功。取值范围：
   * - true：请求成功
   * - false：请求失败
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTicketResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicket4CopilotRequest extends $dara.Model {
  accountName?: string;
  /**
   * @example
   * 1
   */
  accountType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccd3428c-dd23-460c-a608-26bae29dffee
   */
  copilotId?: string;
  /**
   * @example
   * 200
   */
  expireTime?: number;
  /**
   * @example
   * 1
   */
  ticketNum?: number;
  /**
   * @example
   * 9c-asdawf-casxcasd-asdasd
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      copilotId: 'CopilotId',
      expireTime: 'ExpireTime',
      ticketNum: 'TicketNum',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'number',
      copilotId: 'string',
      expireTime: 'number',
      ticketNum: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicket4CopilotResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
  result?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicket4CopilotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTicket4CopilotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTicket4CopilotResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the parent user group. You can add new user groups to this group:
   * 
   * *   If you enter the ID of a parent user group, the new user group is added to the user group with the ID.
   * *   If you enter -1, the new user group is added to the root directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  parentUserGroupId?: string;
  /**
   * @remarks
   * The description of the user group.
   * 
   * *   Format verification: Maximum length 255
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * @example
   * User group description
   */
  userGroupDescription?: string;
  /**
   * @remarks
   * The unique ID of the user group.
   * 
   * *   If you specify the UserGroupId parameter, the system automatically generates the UserGroupId parameter. If you specify the UserGroupId parameter, the user ID is used as the user group ID. You must ensure that the user ID is unique within the organization.
   * *   Format verification: Maximum length 64, cannot be -1,
   * 
   * @example
   * pop0001
   */
  userGroupId?: string;
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * *   Format verification: Maximum length 255
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou Financial Report
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      parentUserGroupId: 'ParentUserGroupId',
      userGroupDescription: 'UserGroupDescription',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentUserGroupId: 'string',
      userGroupDescription: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36829379-0C38-5BC0-830A-92665BF77D4F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the added user group is returned. An empty string \\"\\" is returned if the add fails.
   * 
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUserGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSetBloodRequest extends $dara.Model {
  /**
   * @remarks
   * List of dataset IDs, separated by English commas.
   * 
   * This parameter is required.
   * 
   * @example
   * 234235234,234235235,234235235
   */
  dataSetIds?: string;
  /**
   * @remarks
   * Specify the owner of the report, which is the userId.
   * 
   * @example
   * dasasgaj342351
   */
  userId?: string;
  /**
   * @remarks
   * Specify the type of report:
   * - REPORT: Workbooks
   * - dashboardOfflineQuery: Downloads
   * - DASHBOARD: Dashboard
   * - ANALYSIS: Ad Hoc Analysis
   * - SCREEN: Visualization Screen
   * - PAGE: Old dashboard
   * 
   * @example
   * PAGE
   */
  worksType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSetIds: 'DataSetIds',
      userId: 'UserId',
      worksType: 'WorksType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetIds: 'string',
      userId: 'string',
      worksType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSetBloodResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 46e537a5****,3dadsu****
   */
  requestId?: string;
  /**
   * @remarks
   * Array of works.
   */
  result?: DataSetBloodResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: Request succeeded
   * - false: Request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DataSetBloodResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSetBloodResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DataSetBloodResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DataSetBloodResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSourceBloodRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 44051300991327000048
   */
  dataSourceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSourceBloodResponseBody extends $dara.Model {
  /**
   * @example
   * 46e537a5****,3dadsu****
   */
  requestId?: string;
  result?: string[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSourceBloodResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DataSourceBloodResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DataSourceBloodResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelayTicketExpireTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The time to postpone.
   * 
   * *   Unit: minutes. Valid values: 0 to 240. Unit: minutes. Valid values: 4 hours.
   * *   Expired bills cannot be extended.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  expireTime?: number;
  /**
   * @remarks
   * The value of the third-party embedded ticket, that is, the accessTicket value in the URL.
   * 
   * This parameter is required.
   * 
   * @example
   * 040e6f79d33444838e*****c7206c070
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      ticket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelayTicketExpireTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the extension is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelayTicketExpireTimeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DelayTicketExpireTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DelayTicketExpireTimeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLevelPermissionRuleUsersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"ruleId":"a5bb24da-***-a891683e14da","cubeId":"7c7223ae-***-3c744528014b","delModel":{"userGroups":["0d5fb19b-***-1248fc27ca51","3d2c23d4-***-f6390f325c2d"],"users":["4334***358","Huang***3fa822"]}}
   */
  deleteUserModel?: string;
  static names(): { [key: string]: string } {
    return {
      deleteUserModel: 'DeleteUserModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteUserModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLevelPermissionRuleUsersResponseBody extends $dara.Model {
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLevelPermissionRuleUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataLevelPermissionRuleUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDataLevelPermissionRuleUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLevelRuleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a5bb24da-****-a891683e14da
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLevelRuleConfigResponseBody extends $dara.Model {
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLevelRuleConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataLevelRuleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDataLevelRuleConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTicketRequest extends $dara.Model {
  /**
   * @remarks
   * Deletes a specified ticket from an embedded report.
   * 
   * This parameter is required.
   * 
   * @example
   * 040e6f79d****7d283c7206c070
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTicketResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTicketResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTicketResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $dara.Model {
  /**
   * @example
   * f5****afccd9e434a274
   */
  transferUserId?: string;
  /**
   * @remarks
   * Deletes a user from a specified organization.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      transferUserId: 'TransferUserId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferUserId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $dara.Model {
  /**
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserFromWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
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

export class DeleteUserFromWorkspaceResponseBody extends $dara.Model {
  /**
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserFromWorkspaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserFromWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserFromWorkspaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F2775AB6-DE99-5FA6-86A4-72EA0A8AFEE3
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e537****
   */
  userGroupId?: string;
  /**
   * @remarks
   * The user ID of the Quick BI.
   * 
   * This parameter is required.
   * 
   * @example
   * 2fe4fbd8****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of deleting a user group member. Valid values:
   * 
   * *   true: The task is deleted.
   * *   false: The deletion failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupMemberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserGroupMemberResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group(s) to exit.
   * 
   * - Supports batch parameters, separate IDs with a comma (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****,3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  userGroupIds?: string;
  /**
   * @remarks
   * The UserID of the user to be removed from the user group. Note that this UserID refers to the Quick BI UserID, not the Alibaba Cloud UID.
   * 
   * This parameter is required.
   * 
   * @example
   * 204627493484****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupIds: 'UserGroupIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupIds: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ABBAD906-****-5D18-B23D-****53AB0AA2
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of the interface execution. Possible values:
   * 
   * - true: Execution succeeded
   * - false: Execution failed
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: Request succeeded
   * - false: Request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupMembersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserGroupMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserGroupMembersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserTagMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * pop_001
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserTagMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the deleted tag is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserTagMetaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserTagMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserTagMetaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceConnectionInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7AAB95D-*****-****-*4FC0C976
   */
  dsId?: string;
  static names(): { [key: string]: string } {
    return {
      dsId: 'DsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceConnectionInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7AAB95D-*****-****-*4FC0C976
   */
  requestId?: string;
  /**
   * @remarks
   * Data source information.
   */
  result?: GetDataSourceConnectionInfoResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetDataSourceConnectionInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceConnectionInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataSourceConnectionInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDataSourceConnectionInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMailTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Mail ID
   * 
   * This parameter is required.
   * 
   * @example
   * d5a5****8b634d****5584f8dc159c62
   */
  mailId?: string;
  /**
   * @remarks
   * Task ID
   * 
   * > - If the task ID is not provided, the latest task status will be returned by default;
   * > - If the task ID is provided, the status of the specified task will be returned.
   * 
   * @example
   * 7218****0392****212
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      mailId: 'MailId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMailTaskStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 38C0FEC8-****-415C-A9F1-****422BDB65
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
   */
  result?: GetMailTaskStatusResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * - true: The request was successful. 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetMailTaskStatusResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMailTaskStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMailTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMailTaskStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * The user group modifier. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   */
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupInfoResponseBody extends $dara.Model {
  /**
   * @example
   * D7980306-1F08-5A88-9FE7-ECB8B9C4C0F5
   */
  requestId?: string;
  result?: GetUserGroupInfoResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetUserGroupInfoResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserGroupInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserGroupInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorksEmbedListRequest extends $dara.Model {
  /**
   * @remarks
   * Report name (fuzzy match)
   * 
   * @example
   * test dataset
   */
  keyword?: string;
  /**
   * @remarks
   * Page number (defaults to 1 if empty)
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of items per page (defaults to 10 if empty)
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Report type
   * 
   * - page, Dashboard
   * - screen, Visualization Screen
   * - report, Workbooks
   * - ANALYSIS, Ad Hoc Analysis
   * - dashboardOfflineQuery, Downloads
   * - dataForm, Forms
   * 
   * @example
   * page
   */
  worksType?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 919818-***-*****-wdasd
   */
  wsId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      worksType: 'WorksType',
      wsId: 'WsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      worksType: 'string',
      wsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorksEmbedListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 38C0F*****0-415****9F1-*****422BDB65
   */
  requestId?: string;
  /**
   * @remarks
   * Array of report objects
   */
  result?: GetWorksEmbedListResponseBodyResult;
  /**
   * @remarks
   * Whether the request was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetWorksEmbedListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorksEmbedListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorksEmbedListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWorksEmbedListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDatasourceRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword of the API data source name.
   * 
   * @example
   * test
   */
  keyWord?: string;
  /**
   * @remarks
   * Current page number for API data source list:
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page in a paged query.
   * 
   * *   Default value: 10.
   * *   Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      pageNum: 'number',
      pageSize: 'number',
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

export class ListApiDatasourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The query results are returned.
   */
  result?: ListApiDatasourceResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListApiDatasourceResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDatasourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApiDatasourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApiDatasourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListByUserGroupIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group that you want to query. Separate multiple user groups with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 34fe-***-6dcb,84q9-****-4a274
   */
  userGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListByUserGroupIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The user group query result is returned.
   */
  result?: ListByUserGroupIdResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListByUserGroupIdResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListByUserGroupIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListByUserGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListByUserGroupIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user. The user ID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 162A632E-0A88-51CF-98F8-94FDEE82DB7D
   */
  requestId?: string;
  result?: ListCollectionsResponseBodyResult[];
  /**
   * @remarks
   * The primary key ID of the favorite record.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCollectionsResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCollectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCollectionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCubeDataLevelPermissionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * The type of the dataset row and column permission. Valid values:
   * 
   * *   ROW_LEVEL: row-level permissions
   * *   COLUMN_LEVEL: column-level permissions
   * 
   * This parameter is required.
   * 
   * @example
   * ROW_LEVEL
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCubeDataLevelPermissionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * { "isOpen": 1, "extraConfigModel": { // Additional configuration information "ruleType": "ROW_LEVEL", // The row-level permission type. "missHitPolicy": "NONE", // The hit rule policy: NONE has no permissions, and ALL has permissions. "cubeId": "7c7223 ae-31d1-4d2f-b11f-3c744528014b" // The ID of the dataset. }, "ruleType": "ROW_LEVEL", // Row-column permission type\\
   * "ruleModels": [ { "ruleUsersModel": { // The target population. "userGroups": [ "0d5fb19b- ****-1248 fc27ca51", // The ID of the user group. "4aa3f089-****-85f0-0e8ac7c2dee9" ], "users": [ "HuangJia ***2e3fa822", // The ID of the user. "4334***84358" ] }, "ruleContentModel": { "ruleContentType": "ROW_FIELD", // The row-column permission type. "ruleContentJson": "{"conditionNode":{"caption": " Period ","isMeasure":false,"pathId":"7d3b073bc6","relationOperator":"not-null","name":"7d3b073bc6","value":{"value":[""}UM]," ENueType "} // The JSON string of the row-column permission rule. "ruleOriginConfigJson": "{"operator":"and","operands":[{"labelName": " Period ","isValid":true,"uniqueId":"5","fieldId":"7d3b073bc6","error":false,"fieldType":"string",": default "" value":{"conditionOp":"not-null","conditionValue":""},"valueType":"ENUM"}}],"isRelation":true}" }, // The fixed-format JSON string required by the frontend "isOpen": 1, // The status of the row-column permission configuration. 1. On. 0. Off. "hitTakeEffect": 1, // Specifies whether the rule takes effect after a column-level permission is hit. 1 takes effect and 0 takes effect. "ruleName": "Test row-level permission_Do not delete", // The name of the row-column permission rule. "ruleLevelType": "ROW_LEVEL", // The row-column permission type. "ruleId": "a5bb24 da-772f-45e8-a43c-a891683e14da", // The ID of the row-column permission rule. "cubeId": "7c7223 ae-31d1-4d2f-b11f-3c744528014b", // The ID of the dataset. "ruleTargetScope": "OTHERS" rule takes effect: ALL owner and OTHERS designated owner. } ], "cubeId": "7c7223 ae-31d1-4d2f-b11f-3c744528014b" // The ID of the dataset. }
   * 
   * @example
   * The JSON string of the row-column permission list. For more information, see the description.
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCubeDataLevelPermissionConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCubeDataLevelPermissionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCubeDataLevelPermissionConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataLevelPermissionWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3d5db23c-e4f2-49dd-a883-92285b48e14a
   */
  cubeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ROW_LEVEL
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataLevelPermissionWhiteListResponseBody extends $dara.Model {
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  result?: ListDataLevelPermissionWhiteListResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListDataLevelPermissionWhiteListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataLevelPermissionWhiteListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataLevelPermissionWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataLevelPermissionWhiteListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * Data source type.
   * 
   * @example
   * mysql
   */
  dsType?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-******c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dsType: 'DsType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsType: 'string',
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

export class ListDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7FC9A6A6-****-5CED-B*****E891E4075
   */
  requestId?: string;
  /**
   * @remarks
   * Array of data source information.
   */
  result?: ListDataSourceResponseBodyResult[];
  /**
   * @remarks
   * Whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataSourceResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataSourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFavoriteReportsRequest extends $dara.Model {
  keyword?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * PAGE
   */
  treeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageSize: 'PageSize',
      treeType: 'TreeType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageSize: 'number',
      treeType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFavoriteReportsResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: ListFavoriteReportsResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListFavoriteReportsResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFavoriteReportsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFavoriteReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFavoriteReportsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRoleUsersRequest extends $dara.Model {
  /**
   * @remarks
   * Keyword for the nickname of the organization member.
   * 
   * @example
   * zhangsan
   */
  keyword?: string;
  /**
   * @remarks
   * Page number.
   * 
   * - Default value is 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of items per page.
   * - Default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Organization role ID, including predefined roles and custom roles:
   * 
   * - Organization Administrator (predefined role): 111111111
   * - Permission Administrator (predefined role): 111111112
   * - Regular User (predefined role): 111111113
   * - Custom Role: The corresponding role ID for a custom role
   * 
   * This parameter is required.
   * 
   * @example
   * 111111111
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      roleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRoleUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BCE45E6D-****-4F94-86BB-****2B1615FF
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the list of users under the organization role.
   */
  result?: ListOrganizationRoleUsersResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * - true: Request succeeded
   * - false: Request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListOrganizationRoleUsersResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRoleUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOrganizationRoleUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOrganizationRoleUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7AAB95D7-2E11-4FE2-94BC-858E4FC0C976
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the list of organization roles.
   */
  result?: ListOrganizationRolesResponseBodyResult[];
  /**
   * @remarks
   * 是否请求成功。取值范围：
   * - true：请求成功
   * - false：请求失败
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListOrganizationRolesResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRolesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOrganizationRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOrganizationRolesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenuAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the BI portal.
   * 
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
  dataPortalId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPortalId: 'DataPortalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPortalId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenuAuthorizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The list of authorization details of the portal menu.
   */
  result?: ListPortalMenuAuthorizationResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListPortalMenuAuthorizationResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenuAuthorizationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPortalMenuAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPortalMenuAuthorizationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the BI portal.
   * 
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
  dataPortalId?: string;
  /**
   * @remarks
   * The user ID in the Quick BI. When passed in, the list displays only the menus that the user has permissions on.
   * 
   * @example
   * 1234567***
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPortalId: 'DataPortalId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPortalId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 75912036-5527-4B7E-9265-B481D6651AC2
   */
  requestId?: string;
  /**
   * @remarks
   * A JSON string that levels the details of the portal menu list. Valid values:
   * 
   * *   menuType: the type of the menu.
   * 
   *     *   0: dashboard
   *     *   1: outer chain
   *     *   2: workbook
   *     *   4: directory folder
   *     *   5: form filling
   *     *   6: self-service data retrieval
   * 
   * *   menuId: menu ID
   * 
   * *   uri: ID or URL of the resource associated with the menu
   * 
   * *   showOnlyWithAccess: Authorized Only Visible
   * 
   * *   menuName: menu display name
   * 
   * *   dependentPermisson: whether the report resource associated with the menu has permissions
   * 
   * *   children: submenu
   * 
   * @example
   * [{"children":[{"children":[{"children":[{"menuId":"54kqgoa\\*\\*\\*\\*","menuName":"Report menu","menuType":0,"showOnlyWithAccess":true,"dependentPermisson":false,"uri":"e5da4a3f-d7f9-4262-a39e-a840043c\\*\\*\\*\\*"},{\\*\\*\\*\\* "menu1nId":"pName" 135 "Directory menu","menuType":4,"showOnlyWithAccess":false,"dependentPermisson":true}],"menuId":"23a7d5d8-e55a-4737-b6a1-3c585505\\*\\*\\*\\*","menuName":"pop level -3 menu","menuType":4,"showOnlyWithAccess":true,"dependentPermisson":true}],"menuId":"80764 f3c-affd-45a1-aaa1-bb039d8a\\*\\*\\*\\*","menuName":"pop menu","menuType":4,"showOnlyWithAccess":false,"dependentPermisson":true}],"menuId":"277 f968a-22 ff-4ce6-83f0-a82950f4\\*\\*\\*\\*","menuName":"pop menu","menuType":4,"showOnlyWithAccess":false,"dependentPermisson":true}]
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPortalMenusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPortalMenusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentViewReportsRequest extends $dara.Model {
  keyword?: string;
  /**
   * @example
   * 10
   */
  offsetDay?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  queryMode?: string;
  /**
   * @example
   * PAGE
   */
  treeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      offsetDay: 'OffsetDay',
      pageSize: 'PageSize',
      queryMode: 'QueryMode',
      treeType: 'TreeType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      offsetDay: 'number',
      pageSize: 'number',
      queryMode: 'string',
      treeType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentViewReportsResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: ListRecentViewReportsResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListRecentViewReportsResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentViewReportsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRecentViewReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRecentViewReportsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedReportsRequest extends $dara.Model {
  keyword?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * PAGE
   */
  treeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageSize: 'PageSize',
      treeType: 'TreeType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageSize: 'number',
      treeType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedReportsResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: ListSharedReportsResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListSharedReportsResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedReportsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSharedReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSharedReportsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsByUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsByUserIdResponseBody extends $dara.Model {
  /**
   * @example
   * E2440604-3059-561A-AD68-DEDBC870EB2B
   */
  requestId?: string;
  result?: ListUserGroupsByUserIdResponseBodyResult[];
  /**
   * @remarks
   * The user group modifier. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListUserGroupsByUserIdResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsByUserIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserGroupsByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserGroupsByUserIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceRoleUsersRequest extends $dara.Model {
  /**
   * @remarks
   * Keyword for the user\\"s nickname.
   * 
   * @example
   * 测试pop用户
   */
  keyword?: string;
  /**
   * @remarks
   * Current page number for pagination:
   * 
   * - Starting value: 1
   * - Default value: 1
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of items per page for pagination:
   * 
   * - Default value: 10
   * - Maximum value: 1000
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Workspace role ID, including predefined roles and custom roles:
   * 
   * - 25: Workspace Administrator (predefined role)
   * - 26: Developer (predefined role)
   * - 27: Analyst (predefined role)
   * - 30: Viewer (predefined role)
   * - Custom roles: The corresponding role ID for custom roles
   * 
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 726bee5a-****-43e1-9a8e-b550f0120f35
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      roleId: 'RoleId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      roleId: 'number',
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

export class ListWorkspaceRoleUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the list of users under the specified workspace role.
   */
  result?: ListWorkspaceRoleUsersResponseBodyResult;
  /**
   * @remarks
   * 是否请求成功。取值范围：
   * - true：请求成功
   * - false：请求失败
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListWorkspaceRoleUsersResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceRoleUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkspaceRoleUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWorkspaceRoleUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceRolesRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListWorkspaceRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * List of workspace roles.
   */
  result?: ListWorkspaceRolesResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * - true: The request was successful. 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListWorkspaceRolesResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceRolesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkspaceRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWorkspaceRolesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualRunMailTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the email task in the subscription management interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 3423423sdfa****sdadw
   */
  mailId?: string;
  static names(): { [key: string]: string } {
    return {
      mailId: 'MailId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualRunMailTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * a4d1a221d-41za1-****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the execution was successful.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request was successful. Value range:
   * - true: The request succeeded 
   * - false: The request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualRunMailTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ManualRunMailTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ManualRunMailTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiDatasourceParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API data source.
   * 
   * This parameter is required.
   * 
   * @example
   * b66a66de51f24d149116c17718138194
   */
  apiId?: string;
  /**
   * @remarks
   * The configuration of API data parameters in the JSONArray format. You can modify a maximum of 10 parameters.
   * 
   * *   name: the name of a common parameter or a parameter in a query statement
   * *   value: the value of a common parameter or a parameter in a query statement.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"name":"token","value":"xxxxxxxxxxxx"},{"name":"pageSize","value":100}]
   */
  parameters?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 726bee5a-****-43e1-9a8e-b550f0120f35
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      parameters: 'Parameters',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      parameters: 'string',
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

export class ModifyApiDatasourceParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiDatasourceParametersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyApiDatasourceParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyApiDatasourceParametersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCopilotEmbedConfigRequest extends $dara.Model {
  agentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccd3428c-dd2xxxxxxxxxxxxdffee
   */
  copilotId?: string;
  /**
   * @example
   * Map<String,Object> data=new HashMap<>();
   *         data.put("allTheme",true);
   *         //data.put("allCube",true);
   *         //data.put("themes",Lists.newArrayList("1111","22222"));
   *         //data.put("llmCubes",Lists.newArrayList("33333","44444"));
   *         request.setDataRange(JSON.toJSONString(data));
   */
  dataRange?: string;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      copilotId: 'CopilotId',
      dataRange: 'DataRange',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      copilotId: 'string',
      dataRange: 'string',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCopilotEmbedConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 4BAA4694-CC27-555F-B15A-688AA9289FEE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCopilotEmbedConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCopilotEmbedConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyCopilotEmbedConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApprovalInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Page number, default is 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Number of rows per page, default is 1000.
   * 
   * @example
   * 1000
   */
  pageSize?: number;
  /**
   * @remarks
   * Approval status:
   * - 0: Pending
   * - 1: Processed
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Current approver user ID, qbi user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12352fasdavsa
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      status: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApprovalInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Return the result of the interface execution.
   */
  result?: QueryApprovalInfoResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the API call was successful. Possible values are:
   * - true: success
   * - false: failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryApprovalInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApprovalInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryApprovalInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryApprovalInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuditLogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1715856218001
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * function
   */
  logType?: string;
  /**
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0***
   */
  operatorId?: string;
  /**
   * @example
   * MODIFY
   */
  operatorTypes?: string;
  /**
   * @example
   * cube
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1715856218001
   */
  startDate?: string;
  /**
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      logType: 'LogType',
      operatorId: 'OperatorId',
      operatorTypes: 'OperatorTypes',
      resourceType: 'ResourceType',
      startDate: 'StartDate',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      logType: 'string',
      operatorId: 'string',
      operatorTypes: 'string',
      resourceType: 'string',
      startDate: 'string',
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

export class QueryAuditLogResponseBody extends $dara.Model {
  /**
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  result?: QueryAuditLogResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryAuditLogResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuditLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAuditLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAuditLogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryComponentPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The average duration (minutes).
   * 
   * @example
   * 1
   */
  costTimeAvgMin?: number;
  /**
   * @remarks
   * The current page number of the workspace member list:
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page in a paged query.
   * 
   * *   Default value: 10.
   * *   Maximum value: 1,000.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * *   **lastDay**: Yesterday
   * *   **sevenDays**: Within seven days
   * *   **thirtyDays**: Within 30 days
   * 
   * This parameter is required.
   * 
   * @example
   * sevenDays
   */
  queryType?: string;
  /**
   * @remarks
   * The ID of the work. The works here include BI portal, dashboards, spreadsheets, and self-service access.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @remarks
   * The resource types.
   * 
   * @example
   * report
   */
  resourceType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      costTimeAvgMin: 'CostTimeAvgMin',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      reportId: 'ReportId',
      resourceType: 'ResourceType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTimeAvgMin: 'number',
      pageNum: 'number',
      pageSize: 'number',
      queryType: 'string',
      reportId: 'string',
      resourceType: 'string',
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

export class QueryComponentPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BCE45E6D-9304-4F94-86BB-5A772B1615FF
   */
  requestId?: string;
  result?: QueryComponentPerformanceResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryComponentPerformanceResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryComponentPerformanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryComponentPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryComponentPerformanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopilotEmbedConfigRequest extends $dara.Model {
  /**
   * @example
   * 06-ELive
   */
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopilotEmbedConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 1FC71085-D5FD-08E0-813A-4D4BD1031BC5
   */
  requestId?: string;
  result?: QueryCopilotEmbedConfigResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryCopilotEmbedConfigResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopilotEmbedConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCopilotEmbedConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCopilotEmbedConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubeOptimizationRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class QueryCubeOptimizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryCubeOptimizationResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryCubeOptimizationResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubeOptimizationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCubeOptimizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCubeOptimizationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubePerformanceRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  costTimeAvgMin?: number;
  /**
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sevenDays
   */
  queryType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      costTimeAvgMin: 'CostTimeAvgMin',
      cubeId: 'CubeId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTimeAvgMin: 'number',
      cubeId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      queryType: 'string',
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

export class QueryCubePerformanceResponseBody extends $dara.Model {
  /**
   * @example
   * 685072a0-1fd5-40ef-ae6b-cf94e79e718f
   */
  requestId?: string;
  result?: QueryCubePerformanceResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryCubePerformanceResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubePerformanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCubePerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCubePerformanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRequest extends $dara.Model {
  /**
   * @remarks
   * The API ID in the data service. For more information, see: [Data Service](https://help.aliyun.com/document_detail/144980.html).
   * 
   * This parameter is required.
   * 
   * @example
   * f4cc43bc3***
   */
  apiId?: string;
  /**
   * @remarks
   * The query conditions for the data service, passed in as Key and Value pairs. A map-type string. Here, Key is the name of the request parameter, and Value is the value of the request parameter. Key and Value must appear in pairs.
   * 
   * **Note:**
   * 
   * - When the operator of the request parameter is set to **enumeration filtering**, the value can contain multiple values, and the format of the value should be a JSON-formatted List. For example: `area=["East China","North China","South China"]`
   * 
   * - For dates, different formats are provided based on the type:
   * 
   *     - Year: 2019
   * 
   *     - Quarter: 2019Q1
   * 
   *     - Month: 201901 (with leading zero)
   *     
   *     - Week: 2019-52
   * 
   *     - Day: 20190101
   * 
   *     - Hour: 14:00:00 (minutes and seconds are 00)
   *     
   *     - Minute: 14:12:00 (seconds are 00)
   * 
   *     - Second: 14:34:34
   * 
   * @example
   * { "area": ["华东", "华北"],  "shopping_date": "2019Q1",  }
   */
  conditions?: string;
  /**
   * @remarks
   * A list of return parameter names, in a List-type string.
   * 
   * @example
   * ["area", "city", "price", "date"]
   */
  returnFields?: string;
  /**
   * @remarks
   * The userId in Quick BI. For how to obtain the userId, see: [Query User Information by Account Interface](https://next.api.aliyun.com/document/quickbi-public/2022-01-01/QueryUserInfoByAccount)
   * > This parameter is used to specify the identity of the person using the data service, which can be used in conjunction with the row and column permission configurations of the dataset.
   * 
   * 
   * 
   * >Notice: If the parameter is not passed, an empty string is passed, or null is passed, the default userId will be the owner of the current Quick BI organization.</notice>
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      conditions: 'Conditions',
      returnFields: 'ReturnFields',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      conditions: 'string',
      returnFields: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * a4d1a221d-41za1-****
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of the interface execution. Possible values:
   * 
   * - true: Execution succeeded
   * - false: Execution failed
   */
  result?: QueryDataResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: Request succeeded
   * - false: Request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDataResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeRequest extends $dara.Model {
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llmCube
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryDataRangeResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDataRangeResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDataRangeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDataRangeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The API ID in the data service. For more information, see [Data Service](https://help.aliyun.com/document_detail/144980.html).
   * 
   * This parameter is required.
   * 
   * @example
   * f4cc43bc3***
   */
  apiId?: string;
  /**
   * @remarks
   * The query conditions for the data service, passed in as Key-Value pairs. This is a map-type string. Here, Key is the name of the request parameter, and Value is the value of the request parameter. Keys and Values must appear in pairs.
   * 
   * **Note:**
   * 
   * - When the operator of the request parameter is set to **enumeration filter**, the value can contain multiple values. In this case, the format of the value is a JSON list. For example: `area=["East China","North China","South China"]`     
   * 
   * - For dates, different formats are provided based on the type:
   * 
   *     - Year: 2019
   * 
   *     - Quarter: 2019Q1
   * 
   *     - Month: 201901 (with leading zero)
   *     
   *     - Week: 2019-52
   * 
   *     - Day: 20190101
   * 
   *     - Hour: 14:00:00 (minutes and seconds are 00)
   *     
   *     - Minute: 14:12:00 (seconds are 00)
   * 
   *     - Second: 14:34:34
   * 
   * @example
   * { "area": ["华东", "华北"],  "shopping_date": "2019Q1",  }
   */
  conditions?: string;
  /**
   * @remarks
   * A list of parameter names to be returned, as a List-type string.
   * 
   * @example
   * ["area", "city", "price", "date"]
   */
  returnFields?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      conditions: 'Conditions',
      returnFields: 'ReturnFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      conditions: 'string',
      returnFields: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of the interface query.
   */
  result?: QueryDataServiceResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request was successful
   * 
   * - false: The request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDataServiceResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDataServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDataServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListRequest extends $dara.Model {
  /**
   * @remarks
   * Data service name.
   * 
   * @example
   * 测试sql
   */
  name?: string;
  /**
   * @remarks
   * Page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of items per page in a paginated query:
   * 
   * - Default value: 10
   * - Maximum value: 1000
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * dasdfdsa-csddf-dsadsa
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
   */
  result?: QueryDataServiceListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Value range:
   * - true: The request was successful 
   * - false: The request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDataServiceListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDataServiceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDataServiceListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetDetailInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * This parameter is required.
   * 
   * @example
   * 5820f58c-c734-4d8a-baf1-7979af4f****
   */
  datasetId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetDetailInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the dataset data in JSON format: `{ "cube": { "dimensions": [ { "caption": "customer name", "dataType": "string", "dimensionType": "standard_dimension", "factColumn": "customer_name", "uid": "N5820f5_customer_name" }, { "caption": "datastring", "" standard_dimension", "factColumn": "order_id", "uid": "N5820f5_order_id" }, ], "measures": [ { "caption": "order amount ", "dataType": "number", "factColumn": "order_amt", "measureType": "standard_measure ": " Nderamid " }, " { "customsql": false, "dsId": "261b252d-c3c3-498a-a0a7-5d1ec6cd****", "tableName": "company_sales_record_copy" } }, "datasetId": "5820f58c-c734-4d8a-baf1-7979af4f****", "datasetName": "company_sales_record_copy12", "datasource": { "dsId": "261b252d-c3c3-498a-a0a7-5d1ec6cd****", "dsName": "Self-use", "dsType": "mysql" }, "directory" { "id": "schemaad8aad00-9c55-4984-a767-b4e0ec60****", "name": "My dataset", "pathId": "schemaad8aad00-9c55-4984-a767-b4e0ec60****", "pathName": "My dataset" }, "ownerId": "13651626232****", "ownerName": "Zhang San", "rowLevel": false, "workspaceId": "95296e95-ca89-4c7d-8af9-dedf0ad0****", "workspaceName": "Test Workspace" }`
   * 
   * @example
   * A JSON dataset is returned. For more information, see the description on the left.
   */
  result?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetDetailInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDatasetDetailInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDatasetDetailInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Queries information about a specified dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * a201c85c-******
   */
  datasetId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Whether the operation is successfully returned. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * a4d1a221d-41za1-****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the request.
   */
  result?: QueryDatasetInfoResponseBodyResult;
  /**
   * @remarks
   * The unique ID of the dataset.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDatasetInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDatasetInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDatasetInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  directoryId?: string;
  /**
   * @remarks
   * Information about the directory where the dataset is located
   * 
   * @example
   * Queries the datasets of a specified workspace. The datasets are sorted in descending order by creation time.
   */
  keyword?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Specifies the directory ID.
   * 
   * *   If this field is not empty, all datasets in the directory are obtained.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * true
   */
  withChildren?: boolean;
  /**
   * @remarks
   * The name of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      withChildren: 'WithChildren',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      withChildren: 'boolean',
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

export class QueryDatasetListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The keyword used to search for the dataset name.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Test dataset
   */
  result?: QueryDatasetListResponseBodyResult;
  /**
   * @remarks
   * Whether to recursively wrap the dataset in the subdirectory. Valid values:
   * 
   * *   true: returns datasets in all recursive subdirectories in the directoryId directory.
   * *   false: Only datasets in the directory specified by directoryId are returned, excluding subdirectories.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDatasetListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDatasetListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDatasetListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetSmartqStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetSmartqStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 7c7223ae-****-3c744528014b
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetSmartqStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDatasetSmartqStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDatasetSmartqStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetSwitchInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetSwitchInfoResponseBody extends $dara.Model {
  /**
   * @example
   * FAECEFA8-09BB-58AB-BC58-C8ACEFE4D232
   */
  requestId?: string;
  result?: QueryDatasetSwitchInfoResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDatasetSwitchInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetSwitchInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDatasetSwitchInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDatasetSwitchInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedInfoResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryEmbeddedInfoResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryEmbeddedInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEmbeddedInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryEmbeddedInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The work ID of the query.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the work is enabled for embedding. Valid values:
   * 
   * *   true: embedded
   * *   false: not embedded
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEmbeddedStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryEmbeddedStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLlmCubeWithThemeListByUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * adsdasd-***********-123wdasd
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLlmCubeWithThemeListByUserIdResponseBody extends $dara.Model {
  /**
   * @example
   * 2EE822B***************F-F5B42DDADC12
   */
  requestId?: string;
  result?: QueryLlmCubeWithThemeListByUserIdResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryLlmCubeWithThemeListByUserIdResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLlmCubeWithThemeListByUserIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryLlmCubeWithThemeListByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryLlmCubeWithThemeListByUserIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationRoleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Organization role ID, including predefined roles and custom roles:
   * 
   * - Organization Administrator (predefined role): 111111111
   * - Permission Administrator (predefined role): 111111112
   * - Regular User (predefined role): 111111113
   * - Custom Role: The corresponding role ID of the custom role
   * 
   * This parameter is required.
   * 
   * @example
   * 111111111
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationRoleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BCE45E6D-9304-4F94-86BB-5A772B1615FF
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the organization role configuration.
   */
  result?: QueryOrganizationRoleConfigResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * - true: The request was successful 
   * - false: The request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryOrganizationRoleConfigResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationRoleConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryOrganizationRoleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryOrganizationRoleConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListRequest extends $dara.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryOrganizationWorkspaceListResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryOrganizationWorkspaceListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryOrganizationWorkspaceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryOrganizationWorkspaceListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReadableResourcesListByUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * Quick BI the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReadableResourcesListByUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The list of works that the user has permission to view.
   */
  result?: QueryReadableResourcesListByUserIdResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryReadableResourcesListByUserIdResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReadableResourcesListByUserIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryReadableResourcesListByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryReadableResourcesListByUserIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReportPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The average duration (minutes).
   * 
   * @example
   * 1
   */
  costTimeAvgMin?: number;
  /**
   * @remarks
   * Current page number for organization member list:
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page in a paged query.
   * 
   * *   Default value: 10.
   * *   Maximum value: 1,000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * *   **lastDay**: Yesterday
   * *   **sevenDays**: Within seven days
   * *   **thirtyDays**: Within 30 days
   * 
   * This parameter is required.
   * 
   * @example
   * sevenDays
   */
  queryType?: string;
  /**
   * @remarks
   * The ID of the security report.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @remarks
   * The resource types.
   * 
   * @example
   * report
   */
  resourceType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      costTimeAvgMin: 'CostTimeAvgMin',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      reportId: 'ReportId',
      resourceType: 'ResourceType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTimeAvgMin: 'number',
      pageNum: 'number',
      pageSize: 'number',
      queryType: 'string',
      reportId: 'string',
      resourceType: 'string',
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

export class QueryReportPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1FC71085-D5FD-08E0-813A-4D4BD1031BC5
   */
  requestId?: string;
  result?: QueryReportPerformanceResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryReportPerformanceResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReportPerformanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryReportPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryReportPerformanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShareListRequest extends $dara.Model {
  /**
   * @remarks
   * The type of work being shared. Valid values:
   * 
   * *   product: BI portal
   * *   dashboard: dashboard
   * *   worksheet: workbook
   * *   dashboardOfflineQuery: self-service data retrieval
   * *   Analysis: Ad hoc analysis
   * *   DATAFORM
   * *   SCREEN: Data dashboard
   * 
   * This parameter is required.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShareListResponseBody extends $dara.Model {
  /**
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  result?: QueryShareListResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryShareListResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShareListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryShareListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryShareListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySharesToUserListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user. The user ID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e53****5ba4b679ee22e2a2927****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySharesToUserListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * Returns a list of works authorized to the user.
   */
  result?: QuerySharesToUserListResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QuerySharesToUserListResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySharesToUserListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySharesToUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySharesToUserListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmartqPermissionByCubeIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95c4d**************3852e202
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmartqPermissionByCubeIdResponseBody extends $dara.Model {
  /**
   * @example
   * 617277******************ABA47E31
   */
  requestId?: string;
  result?: QuerySmartqPermissionByCubeIdResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QuerySmartqPermissionByCubeIdResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmartqPermissionByCubeIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySmartqPermissionByCubeIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySmartqPermissionByCubeIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Obtains the details of a specified ticket for a report that is not embedded in the report.
   * 
   * This parameter is required.
   * 
   * @example
   * a27a9aec-****-****-bd40-1a21ea41d7c5
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketInfoResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryTicketInfoResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryTicketInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTicketInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTicketInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupListByParentIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the parent user group.
   * 
   * *   If you enter the ID of the parent user group, you can obtain the information of the child user group under this ID.
   * *   If you enter -1, you can obtain the sub-user group information under the root directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  parentUserGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      parentUserGroupId: 'ParentUserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentUserGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupListByParentIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 72B19D61-B37A-5C7A-9389-0856CD7935B3
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the sub-user group.
   */
  result?: QueryUserGroupListByParentIdResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryUserGroupListByParentIdResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupListByParentIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserGroupListByParentIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserGroupListByParentIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupMemberRequest extends $dara.Model {
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupMemberResponseBody extends $dara.Model {
  /**
   * @example
   * 48C930FF-DFCF-5986-902B-E24C202E2443
   */
  requestId?: string;
  result?: QueryUserGroupMemberResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryUserGroupMemberResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupMemberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserGroupMemberResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByAccountRequest extends $dara.Model {
  /**
   * @remarks
   * Enter the name or ID of the Alibaba Cloud account that you want to query.
   * 
   * *   When you enter an account name:
   * 
   *     *   If the organization user is a master account, such as main_account, the query account format is master account. That is, the main account main_account to be entered.
   *     *   If the organization user is a RAM user, such as a <zhangsan@test.onaliyun.com>, the query account format is the head of the RAM user, that is, the RAM user to be entered is zhangsan.
   * 
   * *   ID:
   * 
   *     *   Enter the UID of the account to query the account information.
   * 
   * This parameter is required.
   * 
   * @example
   * 1386587****@163.com
   */
  account?: string;
  /**
   * @remarks
   * 当查询子账号出现重复报错时，输入主账号的账号名，
   * 例如zhangsan@test.onaliyun.com。
   * 
   * @example
   * zhangsan@test.onaliyun.com
   */
  parentAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      parentAccountName: 'ParentAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      parentAccountName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The returned organization user information.
   */
  result?: QueryUserInfoByAccountResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryUserInfoByAccountResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserInfoByAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserInfoByAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user. The UserID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The returned organization user information.
   */
  result?: QueryUserInfoByUserIdResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryUserInfoByUserIdResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByUserIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserInfoByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserInfoByUserIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserListRequest extends $dara.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserListResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryUserListResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryUserListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserRoleInfoInWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f5698bedeb384b1986afccd9e434****
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
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

export class QueryUserRoleInfoInWorkspaceResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryUserRoleInfoInWorkspaceResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryUserRoleInfoInWorkspaceResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserRoleInfoInWorkspaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserRoleInfoInWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserRoleInfoInWorkspaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagMetaListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Returns a list of user tags in an organization.
   */
  result?: QueryUserTagMetaListResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryUserTagMetaListResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagMetaListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserTagMetaListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserTagMetaListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagValueListRequest extends $dara.Model {
  /**
   * @remarks
   * This UserID refers to the Quick BI UserID, not the Alibaba Cloud UID.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagValueListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request for a list of user tags and their values.
   */
  result?: QueryUserTagValueListResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryUserTagValueListResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagValueListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserTagValueListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserTagValueListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abcd****
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryWorksResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryWorksResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryWorksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryWorksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksBloodRelationshipRequest extends $dara.Model {
  /**
   * @remarks
   * Obtains the kinship of a data work, including the datasets referenced by each component and query field information. Currently, only supported data works include dashboards, workbooks, and self-service data retrieval.
   * 
   * This parameter is required.
   * 
   * @example
   * abcd****
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksBloodRelationshipResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the request.
   */
  result?: QueryWorksBloodRelationshipResponseBodyResult[];
  /**
   * @remarks
   * The response.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryWorksBloodRelationshipResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksBloodRelationshipResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryWorksBloodRelationshipResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryWorksBloodRelationshipResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByOrganizationRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page set when the interface is requested.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returns a list of all works in the organization that meet the requested criteria.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  thirdPartAuthFlag?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * PAGE
   */
  worksType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      worksType: 'WorksType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      status: 'number',
      thirdPartAuthFlag: 'number',
      worksType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByOrganizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the list of works.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the report. Valid values:
   * 
   * *   0: unpublished
   * *   1: published
   * *   2: modified but not published
   * *   3: unpublished
   */
  result?: QueryWorksByOrganizationResponseBodyResult;
  /**
   * @remarks
   * The total number of rows in the table.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryWorksByOrganizationResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByOrganizationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryWorksByOrganizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryWorksByOrganizationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the work. Valid values:
   * 
   * *   0: unpublished
   * *   1: published
   * *   2: modified but not published
   * *   3: unpublished
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Third-party embedding status. Valid values:
   * 
   * *   0: The embed service is not enabled.
   * *   1: Embed is enabled.
   * 
   * @example
   * 0
   */
  thirdPartAuthFlag?: number;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   FULLPAGE: full-screen dashboards
   * *   REPORT: workbook
   * 
   * @example
   * PAGE
   */
  worksType?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      worksType: 'WorksType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      status: 'number',
      thirdPartAuthFlag: 'number',
      worksType: 'string',
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

export class QueryWorksByWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Returns a list of all works in the organization workspace that meet the requested criteria.
   */
  result?: QueryWorksByWorkspaceResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryWorksByWorkspaceResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByWorkspaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryWorksByWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryWorksByWorkspaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceRoleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace role ID, including predefined roles and custom roles:
   * 
   * - 25: Workspace Administrator (predefined role)
   * - 26: Developer (predefined role)
   * - 27: Analyst (predefined role)
   * - 30: Viewer (predefined role)
   * - Custom role: The corresponding role ID for the custom role
   * 
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceRoleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the query result of the interface.
   */
  result?: QueryWorkspaceRoleConfigResponseBodyResult;
  /**
   * @remarks
   * 是否请求成功。取值范围：
   * 
   * - true：请求成功
   * - false：请求失败
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryWorkspaceRoleConfigResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceRoleConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryWorkspaceRoleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryWorkspaceRoleConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListRequest extends $dara.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
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

export class QueryWorkspaceUserListResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryWorkspaceUserListResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryWorkspaceUserListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryWorkspaceUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryWorkspaceUserListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the approval process.
   * 
   * This parameter is required.
   * 
   * @example
   * c5ea0db8-****-****-9081-04bc0df4c6a3
   */
  applicationId?: string;
  /**
   * @remarks
   * The reason for the approval.
   * 
   * This parameter is required.
   * 
   * @example
   * You are not a Division A analyst.
   */
  handleReason?: string;
  /**
   * @remarks
   * Approval result:
   * 
   * *   1: passed
   * *   2: rejected
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      handleReason: 'HandleReason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      handleReason: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultCallbackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultCallbackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResultCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResultCallbackResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveFavoritesRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID of the collection. The user ID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 121344444790****
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the collection.
   * 
   * This parameter is required.
   * 
   * @example
   * d23e84a1-82a0-4292-bfdb-521306c3****
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveFavoritesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveFavoritesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveFavoritesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveFavoritesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionExtraConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-******-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NONE
   */
  missHitPolicy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ROW_LEVEL
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      missHitPolicy: 'MissHitPolicy',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      missHitPolicy: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionExtraConfigResponseBody extends $dara.Model {
  /**
   * @example
   * B70E1FBD-E533-52F2-A7A1-E02B92F78DDF
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionExtraConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDataLevelPermissionExtraConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDataLevelPermissionExtraConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionRuleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ruleModel?: string;
  static names(): { [key: string]: string } {
    return {
      ruleModel: 'RuleModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionRuleConfigResponseBody extends $dara.Model {
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  result?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionRuleConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDataLevelPermissionRuleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDataLevelPermissionRuleConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * { "ruleType": "ROW_LEVEL", // The row-level permission type. "usersModel": { "userGroups": [ "0d5fb19b- ***-1248 fc27ca51", // The ID of the user group. "3d2c23d4-***-f6390f325c2d" ], "users": [ "4334 ***358", // Quick BI the UserID of the user. "Huang***3fa822" ] }, "cubeId": "7c7223ae-31d1-4d2f-b11f-3c744528014b" }
   * 
   * This parameter is required.
   * 
   * @example
   * {"ruleType":"ROW_LEVEL","usersModel":{"userGroups":["26edcb76-****-bdbab78267cb","187e6dd5-1611-4cf7-a034-1a93bd5fecf9"],"users":["4334***358","Huang***3fa822"]},"cubeId":"7c7223ae-****44528014b"}
   */
  whiteListModel?: string;
  static names(): { [key: string]: string } {
    return {
      whiteListModel: 'WhiteListModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteListModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionWhiteListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDataLevelPermissionWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDataLevelPermissionWhiteListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqAuthTransferRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ASDHASD*************12EASDA
   */
  originUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12313********dasfa,ASDASF*****SDAFEEG
   */
  targetUserIds?: string;
  static names(): { [key: string]: string } {
    return {
      originUserId: 'OriginUserId',
      targetUserIds: 'TargetUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originUserId: 'string',
      targetUserIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqAuthTransferResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1*****************5DF8D885
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqAuthTransferResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SmartqAuthTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SmartqAuthTransferResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqAuthorizeRequest extends $dara.Model {
  /**
   * @example
   * 2099-12-31
   */
  expireDay?: string;
  /**
   * @example
   * wasdasd*******1235235sd,ASDAS*********ASDAW123
   */
  llmCubeThemes?: string;
  /**
   * @example
   * wasdasd*******1235235sd,ASDAS*********ASDAW123
   */
  llmCubes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  operationType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wasdasd*******1235235sd,ASDAS*********ASDAW123
   */
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      expireDay: 'ExpireDay',
      llmCubeThemes: 'LlmCubeThemes',
      llmCubes: 'LlmCubes',
      operationType: 'OperationType',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireDay: 'string',
      llmCubeThemes: 'string',
      llmCubes: 'string',
      operationType: 'number',
      userIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqAuthorizeResponseBody extends $dara.Model {
  /**
   * @example
   * 617277C****************ABA47E31
   */
  requestId?: string;
  result?: SmartqAuthorizeResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': SmartqAuthorizeResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqAuthorizeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SmartqAuthorizeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SmartqAuthorizeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqQueryAbilityRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @example
   * 7c7223ae-****-3c744528014b
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userQuestion?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      userId: 'UserId',
      userQuestion: 'UserQuestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      userId: 'string',
      userQuestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqQueryAbilityResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A************2B05DF8D885
   */
  requestId?: string;
  result?: SmartqQueryAbilityResponseBodyResult;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: SmartqQueryAbilityResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqQueryAbilityResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SmartqQueryAbilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SmartqQueryAbilityResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataLevelPermissionStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  isOpen?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ROW_LEVEL
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      isOpen: 'IsOpen',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      isOpen: 'number',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataLevelPermissionStatusResponseBody extends $dara.Model {
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataLevelPermissionStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDataLevelPermissionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDataLevelPermissionStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEmbeddedStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  thirdPartAuthFlag?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 897ce25e-f993-4abd-af84-d13c5610****
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdPartAuthFlag: 'boolean',
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEmbeddedStatusResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  result?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'number',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEmbeddedStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEmbeddedStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEmbeddedStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketNumRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 040e6f79d33444838***83c7206c070
   */
  ticket?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ticketNum?: number;
  static names(): { [key: string]: string } {
    return {
      ticket: 'Ticket',
      ticketNum: 'TicketNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticket: 'string',
      ticketNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketNumResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketNumResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTicketNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTicketNumResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the organization administrator. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  adminUser?: boolean;
  /**
   * @remarks
   * Indicate whether the RAM user is a permission administrator. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  isDeleted?: boolean;
  /**
   * @remarks
   * The nickname of the account.
   * 
   * *   Format check: The value can be up to 50 characters in length.
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * @example
   * Xiao Zhang
   */
  nickName?: string;
  roleIds?: string;
  /**
   * @remarks
   * The ID of the user to be updated. The user ID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  /**
   * @remarks
   * The role type of the organization member. Valid values:
   * 
   * *   1 : developer
   * *   2 : visitors
   * *   3 : Analyst
   * 
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      isDeleted: 'IsDeleted',
      nickName: 'NickName',
      roleIds: 'RoleIds',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      isDeleted: 'boolean',
      nickName: 'string',
      roleIds: 'string',
      userId: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the user group.
   * 
   * *   Format verification: Maximum length 255
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * @example
   * Description
   */
  userGroupDescription?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
  userGroupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * *   Format verification: Maximum length 255
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * @example
   * pop0001
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupDescription: 'UserGroupDescription',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupDescription: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4AEF8C5C-D5D2-55D3-BB2F-9D3AA1B6F4FA
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the interface is successfully executed. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTagMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The tag description.
   * 
   * - Format check: Maximum length is 255 characters.
   * 
   * @example
   * Job Positions within the Department
   */
  tagDescription?: string;
  /**
   * @remarks
   * The specified TagID.
   * 
   * - Format check: Maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * e82f6c6c0333431bad0225b2f85e****
   */
  tagId?: string;
  /**
   * @remarks
   * The tag name.
   * - Format check: Maximum length is 50 characters.
   * - Only Chinese, English, numbers, and /\\|[]() symbols are allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * Department
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDescription: 'TagDescription',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDescription: 'string',
      tagId: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTagMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the interface was executed successfully. Possible values:
   * 
   * - true: Execution succeeded
   * - false: Execution failed
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * - true: The request succeeded - false: The request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTagMetaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserTagMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserTagMetaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTagValueRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * pop_001
   */
  tagId?: string;
  /**
   * @remarks
   * The tag value to be modified.
   * 
   * - To clear this tag, set the tag value to ($NULL$).
   * - For multiple values, use English commas to separate them.
   * - Format validation, maximum length: 3000 characters
   * 
   * This parameter is required.
   * 
   * @example
   * Product Director
   */
  tagValue?: string;
  /**
   * @remarks
   * The user ID for which the tag value is to be modified. This user ID refers to the Quick BI UserID, not the Alibaba Cloud UID.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
      tagValue: 'TagValue',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
      tagValue: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTagValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 46e5374665ba4b679ee22e2a29270
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of modifying the user tag. Possible values:
   * 
   * - true: Operation succeeded
   * - false: Operation failed
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request was successful. Value range:
   * - true: The request was successful - false: The request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTagValueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserTagValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserTagValueResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceUserRoleRequest extends $dara.Model {
  /**
   * @example
   * 25
   * 
   * @deprecated
   */
  roleId?: number;
  roleIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f5698bedeb384b1986afccd9e434****
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
      roleIds: 'RoleIds',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
      roleIds: 'string',
      userId: 'string',
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

export class UpdateWorkspaceUserRoleResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceUserRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkspaceUserRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWorkspaceUserRoleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceUsersRoleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 136516262323****,124498444445****
   */
  userIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
      userIds: 'UserIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
      userIds: 'string',
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

export class UpdateWorkspaceUsersRoleResponseBody extends $dara.Model {
  /**
   * @example
   * 7AAB95D7-2E11-4FE2-94BC-858E4FC0C976
   */
  requestId?: string;
  result?: UpdateWorkspaceUsersRoleResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateWorkspaceUsersRoleResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceUsersRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkspaceUsersRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWorkspaceUsersRoleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WithdrawAllUserGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WithdrawAllUserGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WithdrawAllUserGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WithdrawAllUserGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WithdrawAllUserGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("quickbi-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Add selected groups of people incrementally for a single row and column permission rule.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.\\n
   * 
   * @param request - AddDataLevelPermissionRuleUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDataLevelPermissionRuleUsersResponse
   */
  async addDataLevelPermissionRuleUsersWithOptions(request: AddDataLevelPermissionRuleUsersRequest, runtime: $dara.RuntimeOptions): Promise<AddDataLevelPermissionRuleUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addUserModel)) {
      query["AddUserModel"] = request.addUserModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDataLevelPermissionRuleUsers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddDataLevelPermissionRuleUsersResponse>(await this.callApi(params, req, runtime), new AddDataLevelPermissionRuleUsersResponse({}));
    } else {
      return $dara.cast<AddDataLevelPermissionRuleUsersResponse>(await this.execute(params, req, runtime), new AddDataLevelPermissionRuleUsersResponse({}));
    }

  }

  /**
   * Add selected groups of people incrementally for a single row and column permission rule.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.\\n
   * 
   * @param request - AddDataLevelPermissionRuleUsersRequest
   * @returns AddDataLevelPermissionRuleUsersResponse
   */
  async addDataLevelPermissionRuleUsers(request: AddDataLevelPermissionRuleUsersRequest): Promise<AddDataLevelPermissionRuleUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDataLevelPermissionRuleUsersWithOptions(request, runtime);
  }

  /**
   * 43342***435,1553a****41231
   * 
   * @remarks
   * ROW_LEVEL
   * 
   * @param request - AddDataLevelPermissionWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDataLevelPermissionWhiteListResponse
   */
  async addDataLevelPermissionWhiteListWithOptions(request: AddDataLevelPermissionWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<AddDataLevelPermissionWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.targetIds)) {
      query["TargetIds"] = request.targetIds;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDataLevelPermissionWhiteList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddDataLevelPermissionWhiteListResponse>(await this.callApi(params, req, runtime), new AddDataLevelPermissionWhiteListResponse({}));
    } else {
      return $dara.cast<AddDataLevelPermissionWhiteListResponse>(await this.execute(params, req, runtime), new AddDataLevelPermissionWhiteListResponse({}));
    }

  }

  /**
   * 43342***435,1553a****41231
   * 
   * @remarks
   * ROW_LEVEL
   * 
   * @param request - AddDataLevelPermissionWhiteListRequest
   * @returns AddDataLevelPermissionWhiteListResponse
   */
  async addDataLevelPermissionWhiteList(request: AddDataLevelPermissionWhiteListRequest): Promise<AddDataLevelPermissionWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDataLevelPermissionWhiteListWithOptions(request, runtime);
  }

  /**
   * Add a sharing configuration for data works.
   * 
   * @param request - AddShareReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddShareReportResponse
   */
  async addShareReportWithOptions(request: AddShareReportRequest, runtime: $dara.RuntimeOptions): Promise<AddShareReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authPoint)) {
      query["AuthPoint"] = request.authPoint;
    }

    if (!$dara.isNull(request.expireDate)) {
      query["ExpireDate"] = request.expireDate;
    }

    if (!$dara.isNull(request.shareToId)) {
      query["ShareToId"] = request.shareToId;
    }

    if (!$dara.isNull(request.shareToType)) {
      query["ShareToType"] = request.shareToType;
    }

    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddShareReport",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddShareReportResponse>(await this.callApi(params, req, runtime), new AddShareReportResponse({}));
    } else {
      return $dara.cast<AddShareReportResponse>(await this.execute(params, req, runtime), new AddShareReportResponse({}));
    }

  }

  /**
   * Add a sharing configuration for data works.
   * 
   * @param request - AddShareReportRequest
   * @returns AddShareReportResponse
   */
  async addShareReport(request: AddShareReportRequest): Promise<AddShareReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addShareReportWithOptions(request, runtime);
  }

  /**
   * auditing
   * 
   * @param request - AddUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserResponse
   */
  async addUserWithOptions(request: AddUserRequest, runtime: $dara.RuntimeOptions): Promise<AddUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.adminUser)) {
      query["AdminUser"] = request.adminUser;
    }

    if (!$dara.isNull(request.authAdminUser)) {
      query["AuthAdminUser"] = request.authAdminUser;
    }

    if (!$dara.isNull(request.nickName)) {
      query["NickName"] = request.nickName;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleIds)) {
      body["RoleIds"] = request.roleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUser",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddUserResponse>(await this.callApi(params, req, runtime), new AddUserResponse({}));
    } else {
      return $dara.cast<AddUserResponse>(await this.execute(params, req, runtime), new AddUserResponse({}));
    }

  }

  /**
   * auditing
   * 
   * @param request - AddUserRequest
   * @returns AddUserResponse
   */
  async addUser(request: AddUserRequest): Promise<AddUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
   * 
   * @param request - AddUserGroupMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserGroupMemberResponse
   */
  async addUserGroupMemberWithOptions(request: AddUserGroupMemberRequest, runtime: $dara.RuntimeOptions): Promise<AddUserGroupMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!$dara.isNull(request.userIdList)) {
      query["UserIdList"] = request.userIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserGroupMember",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddUserGroupMemberResponse>(await this.callApi(params, req, runtime), new AddUserGroupMemberResponse({}));
    } else {
      return $dara.cast<AddUserGroupMemberResponse>(await this.execute(params, req, runtime), new AddUserGroupMemberResponse({}));
    }

  }

  /**
   * The ID of the request.
   * 
   * @param request - AddUserGroupMemberRequest
   * @returns AddUserGroupMemberResponse
   */
  async addUserGroupMember(request: AddUserGroupMemberRequest): Promise<AddUserGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserGroupMemberWithOptions(request, runtime);
  }

  /**
   * Add users to a specified user group at a time.
   * 
   * @param request - AddUserGroupMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserGroupMembersResponse
   */
  async addUserGroupMembersWithOptions(request: AddUserGroupMembersRequest, runtime: $dara.RuntimeOptions): Promise<AddUserGroupMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserGroupMembers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddUserGroupMembersResponse>(await this.callApi(params, req, runtime), new AddUserGroupMembersResponse({}));
    } else {
      return $dara.cast<AddUserGroupMembersResponse>(await this.execute(params, req, runtime), new AddUserGroupMembersResponse({}));
    }

  }

  /**
   * Add users to a specified user group at a time.
   * 
   * @param request - AddUserGroupMembersRequest
   * @returns AddUserGroupMembersResponse
   */
  async addUserGroupMembers(request: AddUserGroupMembersRequest): Promise<AddUserGroupMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserGroupMembersWithOptions(request, runtime);
  }

  /**
   * Add the metadata of an organization member tag.
   * 
   * @param request - AddUserTagMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserTagMetaResponse
   */
  async addUserTagMetaWithOptions(request: AddUserTagMetaRequest, runtime: $dara.RuntimeOptions): Promise<AddUserTagMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tagDescription)) {
      query["TagDescription"] = request.tagDescription;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserTagMeta",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddUserTagMetaResponse>(await this.callApi(params, req, runtime), new AddUserTagMetaResponse({}));
    } else {
      return $dara.cast<AddUserTagMetaResponse>(await this.execute(params, req, runtime), new AddUserTagMetaResponse({}));
    }

  }

  /**
   * Add the metadata of an organization member tag.
   * 
   * @param request - AddUserTagMetaRequest
   * @returns AddUserTagMetaResponse
   */
  async addUserTagMeta(request: AddUserTagMetaRequest): Promise<AddUserTagMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserTagMetaWithOptions(request, runtime);
  }

  /**
   * 添加成员到指定工作空间。
   * 
   * @param request - AddUserToWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToWorkspaceResponse
   */
  async addUserToWorkspaceWithOptions(request: AddUserToWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<AddUserToWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToWorkspace",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddUserToWorkspaceResponse>(await this.callApi(params, req, runtime), new AddUserToWorkspaceResponse({}));
    } else {
      return $dara.cast<AddUserToWorkspaceResponse>(await this.execute(params, req, runtime), new AddUserToWorkspaceResponse({}));
    }

  }

  /**
   * 添加成员到指定工作空间。
   * 
   * @param request - AddUserToWorkspaceRequest
   * @returns AddUserToWorkspaceResponse
   */
  async addUserToWorkspace(request: AddUserToWorkspaceRequest): Promise<AddUserToWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToWorkspaceWithOptions(request, runtime);
  }

  /**
   * 批量添加成员到工作空间。
   * 
   * @param request - AddWorkspaceUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddWorkspaceUsersResponse
   */
  async addWorkspaceUsersWithOptions(request: AddWorkspaceUsersRequest, runtime: $dara.RuntimeOptions): Promise<AddWorkspaceUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddWorkspaceUsers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddWorkspaceUsersResponse>(await this.callApi(params, req, runtime), new AddWorkspaceUsersResponse({}));
    } else {
      return $dara.cast<AddWorkspaceUsersResponse>(await this.execute(params, req, runtime), new AddWorkspaceUsersResponse({}));
    }

  }

  /**
   * 批量添加成员到工作空间。
   * 
   * @param request - AddWorkspaceUsersRequest
   * @returns AddWorkspaceUsersResponse
   */
  async addWorkspaceUsers(request: AddWorkspaceUsersRequest): Promise<AddWorkspaceUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addWorkspaceUsersWithOptions(request, runtime);
  }

  /**
   * 触发数据集抽取加速。
   * 
   * @param request - AllotDatasetAccelerationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllotDatasetAccelerationTaskResponse
   */
  async allotDatasetAccelerationTaskWithOptions(request: AllotDatasetAccelerationTaskRequest, runtime: $dara.RuntimeOptions): Promise<AllotDatasetAccelerationTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllotDatasetAccelerationTask",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AllotDatasetAccelerationTaskResponse>(await this.callApi(params, req, runtime), new AllotDatasetAccelerationTaskResponse({}));
    } else {
      return $dara.cast<AllotDatasetAccelerationTaskResponse>(await this.execute(params, req, runtime), new AllotDatasetAccelerationTaskResponse({}));
    }

  }

  /**
   * 触发数据集抽取加速。
   * 
   * @param request - AllotDatasetAccelerationTaskRequest
   * @returns AllotDatasetAccelerationTaskResponse
   */
  async allotDatasetAccelerationTask(request: AllotDatasetAccelerationTaskRequest): Promise<AllotDatasetAccelerationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allotDatasetAccelerationTaskWithOptions(request, runtime);
  }

  /**
   * Batch authorization of BI portal menu will be skipped automatically.
   * 
   * @param request - AuthorizeMenuRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeMenuResponse
   */
  async authorizeMenuWithOptions(request: AuthorizeMenuRequest, runtime: $dara.RuntimeOptions): Promise<AuthorizeMenuResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authPointsValue)) {
      query["AuthPointsValue"] = request.authPointsValue;
    }

    if (!$dara.isNull(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    if (!$dara.isNull(request.menuIds)) {
      query["MenuIds"] = request.menuIds;
    }

    if (!$dara.isNull(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeMenu",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AuthorizeMenuResponse>(await this.callApi(params, req, runtime), new AuthorizeMenuResponse({}));
    } else {
      return $dara.cast<AuthorizeMenuResponse>(await this.execute(params, req, runtime), new AuthorizeMenuResponse({}));
    }

  }

  /**
   * Batch authorization of BI portal menu will be skipped automatically.
   * 
   * @param request - AuthorizeMenuRequest
   * @returns AuthorizeMenuResponse
   */
  async authorizeMenu(request: AuthorizeMenuRequest): Promise<AuthorizeMenuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeMenuWithOptions(request, runtime);
  }

  /**
   * 批量添加飞书用户。
   * 
   * @deprecated OpenAPI BatchAddFeishuUsers is deprecated
   * 
   * @param request - BatchAddFeishuUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAddFeishuUsersResponse
   */
  // Deprecated
  async batchAddFeishuUsersWithOptions(request: BatchAddFeishuUsersRequest, runtime: $dara.RuntimeOptions): Promise<BatchAddFeishuUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.feishuUsers)) {
      query["FeishuUsers"] = request.feishuUsers;
    }

    if (!$dara.isNull(request.isAdmin)) {
      query["IsAdmin"] = request.isAdmin;
    }

    if (!$dara.isNull(request.isAuthAdmin)) {
      query["IsAuthAdmin"] = request.isAuthAdmin;
    }

    if (!$dara.isNull(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchAddFeishuUsers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchAddFeishuUsersResponse>(await this.callApi(params, req, runtime), new BatchAddFeishuUsersResponse({}));
    } else {
      return $dara.cast<BatchAddFeishuUsersResponse>(await this.execute(params, req, runtime), new BatchAddFeishuUsersResponse({}));
    }

  }

  /**
   * 批量添加飞书用户。
   * 
   * @deprecated OpenAPI BatchAddFeishuUsers is deprecated
   * 
   * @param request - BatchAddFeishuUsersRequest
   * @returns BatchAddFeishuUsersResponse
   */
  // Deprecated
  async batchAddFeishuUsers(request: BatchAddFeishuUsersRequest): Promise<BatchAddFeishuUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchAddFeishuUsersWithOptions(request, runtime);
  }

  /**
   * 根据门户菜单ID，取消指定用户、用户组的授权记录。
   * 
   * @param request - CancelAuthorizationMenuRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAuthorizationMenuResponse
   */
  async cancelAuthorizationMenuWithOptions(request: CancelAuthorizationMenuRequest, runtime: $dara.RuntimeOptions): Promise<CancelAuthorizationMenuResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    if (!$dara.isNull(request.menuIds)) {
      query["MenuIds"] = request.menuIds;
    }

    if (!$dara.isNull(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAuthorizationMenu",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelAuthorizationMenuResponse>(await this.callApi(params, req, runtime), new CancelAuthorizationMenuResponse({}));
    } else {
      return $dara.cast<CancelAuthorizationMenuResponse>(await this.execute(params, req, runtime), new CancelAuthorizationMenuResponse({}));
    }

  }

  /**
   * 根据门户菜单ID，取消指定用户、用户组的授权记录。
   * 
   * @param request - CancelAuthorizationMenuRequest
   * @returns CancelAuthorizationMenuResponse
   */
  async cancelAuthorizationMenu(request: CancelAuthorizationMenuRequest): Promise<CancelAuthorizationMenuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAuthorizationMenuWithOptions(request, runtime);
  }

  /**
   * Cancel the data works from the user\\"s collection.
   * 
   * @param request - CancelCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelCollectionResponse
   */
  async cancelCollectionWithOptions(request: CancelCollectionRequest, runtime: $dara.RuntimeOptions): Promise<CancelCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelCollection",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelCollectionResponse>(await this.callApi(params, req, runtime), new CancelCollectionResponse({}));
    } else {
      return $dara.cast<CancelCollectionResponse>(await this.execute(params, req, runtime), new CancelCollectionResponse({}));
    }

  }

  /**
   * Cancel the data works from the user\\"s collection.
   * 
   * @param request - CancelCollectionRequest
   * @returns CancelCollectionResponse
   */
  async cancelCollection(request: CancelCollectionRequest): Promise<CancelCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCollectionWithOptions(request, runtime);
  }

  /**
   * Delete a share authorization for a data work.
   * 
   * @param request - CancelReportShareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelReportShareResponse
   */
  async cancelReportShareWithOptions(request: CancelReportShareRequest, runtime: $dara.RuntimeOptions): Promise<CancelReportShareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    if (!$dara.isNull(request.shareToIds)) {
      query["ShareToIds"] = request.shareToIds;
    }

    if (!$dara.isNull(request.shareToType)) {
      query["ShareToType"] = request.shareToType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelReportShare",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelReportShareResponse>(await this.callApi(params, req, runtime), new CancelReportShareResponse({}));
    } else {
      return $dara.cast<CancelReportShareResponse>(await this.execute(params, req, runtime), new CancelReportShareResponse({}));
    }

  }

  /**
   * Delete a share authorization for a data work.
   * 
   * @param request - CancelReportShareRequest
   * @returns CancelReportShareResponse
   */
  async cancelReportShare(request: CancelReportShareRequest): Promise<CancelReportShareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelReportShareWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
   * 
   * @param request - ChangeVisibilityModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeVisibilityModelResponse
   */
  async changeVisibilityModelWithOptions(request: ChangeVisibilityModelRequest, runtime: $dara.RuntimeOptions): Promise<ChangeVisibilityModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    if (!$dara.isNull(request.menuIds)) {
      query["MenuIds"] = request.menuIds;
    }

    if (!$dara.isNull(request.showOnlyWithAccess)) {
      query["ShowOnlyWithAccess"] = request.showOnlyWithAccess;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeVisibilityModel",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeVisibilityModelResponse>(await this.callApi(params, req, runtime), new ChangeVisibilityModelResponse({}));
    } else {
      return $dara.cast<ChangeVisibilityModelResponse>(await this.execute(params, req, runtime), new ChangeVisibilityModelResponse({}));
    }

  }

  /**
   * The ID of the request.
   * 
   * @param request - ChangeVisibilityModelRequest
   * @returns ChangeVisibilityModelResponse
   */
  async changeVisibilityModel(request: ChangeVisibilityModelRequest): Promise<ChangeVisibilityModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeVisibilityModelWithOptions(request, runtime);
  }

  /**
   * Queries whether a user has permissions to view data works, such as dashboards and workbooks.
   * 
   * @param request - CheckReadableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckReadableResponse
   */
  async checkReadableWithOptions(request: CheckReadableRequest, runtime: $dara.RuntimeOptions): Promise<CheckReadableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckReadable",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckReadableResponse>(await this.callApi(params, req, runtime), new CheckReadableResponse({}));
    } else {
      return $dara.cast<CheckReadableResponse>(await this.execute(params, req, runtime), new CheckReadableResponse({}));
    }

  }

  /**
   * Queries whether a user has permissions to view data works, such as dashboards and workbooks.
   * 
   * @param request - CheckReadableRequest
   * @returns CheckReadableResponse
   */
  async checkReadable(request: CheckReadableRequest): Promise<CheckReadableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkReadableWithOptions(request, runtime);
  }

  /**
   * Generates a ticket for third-party embedding.
   * 
   * @remarks
   * For detailed usage, please refer to the [Report Embedding Data Permission Control and Parameter Passing Security Enhancement Solution](https://help.aliyun.com/document_detail/391291.html).
   * 
   * @param request - CreateTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTicketResponse
   */
  async createTicketWithOptions(request: CreateTicketRequest, runtime: $dara.RuntimeOptions): Promise<CreateTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.cmptId)) {
      query["CmptId"] = request.cmptId;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.globalParam)) {
      query["GlobalParam"] = request.globalParam;
    }

    if (!$dara.isNull(request.ticketNum)) {
      query["TicketNum"] = request.ticketNum;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.watermarkParam)) {
      query["WatermarkParam"] = request.watermarkParam;
    }

    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTicket",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTicketResponse>(await this.callApi(params, req, runtime), new CreateTicketResponse({}));
    } else {
      return $dara.cast<CreateTicketResponse>(await this.execute(params, req, runtime), new CreateTicketResponse({}));
    }

  }

  /**
   * Generates a ticket for third-party embedding.
   * 
   * @remarks
   * For detailed usage, please refer to the [Report Embedding Data Permission Control and Parameter Passing Security Enhancement Solution](https://help.aliyun.com/document_detail/391291.html).
   * 
   * @param request - CreateTicketRequest
   * @returns CreateTicketResponse
   */
  async createTicket(request: CreateTicketRequest): Promise<CreateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTicketWithOptions(request, runtime);
  }

  /**
   * 生成智能小Q嵌入ticket。
   * 
   * @param request - CreateTicket4CopilotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTicket4CopilotResponse
   */
  async createTicket4CopilotWithOptions(request: CreateTicket4CopilotRequest, runtime: $dara.RuntimeOptions): Promise<CreateTicket4CopilotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.copilotId)) {
      query["CopilotId"] = request.copilotId;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.ticketNum)) {
      query["TicketNum"] = request.ticketNum;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTicket4Copilot",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTicket4CopilotResponse>(await this.callApi(params, req, runtime), new CreateTicket4CopilotResponse({}));
    } else {
      return $dara.cast<CreateTicket4CopilotResponse>(await this.execute(params, req, runtime), new CreateTicket4CopilotResponse({}));
    }

  }

  /**
   * 生成智能小Q嵌入ticket。
   * 
   * @param request - CreateTicket4CopilotRequest
   * @returns CreateTicket4CopilotResponse
   */
  async createTicket4Copilot(request: CreateTicket4CopilotRequest): Promise<CreateTicket4CopilotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTicket4CopilotWithOptions(request, runtime);
  }

  /**
   * Create a user group. You can specify a parent user group.
   * 
   * @param request - CreateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserGroupResponse
   */
  async createUserGroupWithOptions(request: CreateUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<CreateUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.parentUserGroupId)) {
      query["ParentUserGroupId"] = request.parentUserGroupId;
    }

    if (!$dara.isNull(request.userGroupDescription)) {
      query["UserGroupDescription"] = request.userGroupDescription;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!$dara.isNull(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserGroup",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateUserGroupResponse>(await this.callApi(params, req, runtime), new CreateUserGroupResponse({}));
    } else {
      return $dara.cast<CreateUserGroupResponse>(await this.execute(params, req, runtime), new CreateUserGroupResponse({}));
    }

  }

  /**
   * Create a user group. You can specify a parent user group.
   * 
   * @param request - CreateUserGroupRequest
   * @returns CreateUserGroupResponse
   */
  async createUserGroup(request: CreateUserGroupRequest): Promise<CreateUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

  /**
   * Query works information under the specified dataset.
   * 
   * @param request - DataSetBloodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DataSetBloodResponse
   */
  async dataSetBloodWithOptions(request: DataSetBloodRequest, runtime: $dara.RuntimeOptions): Promise<DataSetBloodResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataSetIds)) {
      query["DataSetIds"] = request.dataSetIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.worksType)) {
      query["WorksType"] = request.worksType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DataSetBlood",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DataSetBloodResponse>(await this.callApi(params, req, runtime), new DataSetBloodResponse({}));
    } else {
      return $dara.cast<DataSetBloodResponse>(await this.execute(params, req, runtime), new DataSetBloodResponse({}));
    }

  }

  /**
   * Query works information under the specified dataset.
   * 
   * @param request - DataSetBloodRequest
   * @returns DataSetBloodResponse
   */
  async dataSetBlood(request: DataSetBloodRequest): Promise<DataSetBloodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dataSetBloodWithOptions(request, runtime);
  }

  /**
   * 查询引用指定数据源下的数据集信息。
   * 
   * @param request - DataSourceBloodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DataSourceBloodResponse
   */
  async dataSourceBloodWithOptions(request: DataSourceBloodRequest, runtime: $dara.RuntimeOptions): Promise<DataSourceBloodResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DataSourceBlood",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DataSourceBloodResponse>(await this.callApi(params, req, runtime), new DataSourceBloodResponse({}));
    } else {
      return $dara.cast<DataSourceBloodResponse>(await this.execute(params, req, runtime), new DataSourceBloodResponse({}));
    }

  }

  /**
   * 查询引用指定数据源下的数据集信息。
   * 
   * @param request - DataSourceBloodRequest
   * @returns DataSourceBloodResponse
   */
  async dataSourceBlood(request: DataSourceBloodRequest): Promise<DataSourceBloodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dataSourceBloodWithOptions(request, runtime);
  }

  /**
   * Update the expiration time of the ticket embedded in the report.
   * 
   * @param request - DelayTicketExpireTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DelayTicketExpireTimeResponse
   */
  async delayTicketExpireTimeWithOptions(request: DelayTicketExpireTimeRequest, runtime: $dara.RuntimeOptions): Promise<DelayTicketExpireTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DelayTicketExpireTime",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DelayTicketExpireTimeResponse>(await this.callApi(params, req, runtime), new DelayTicketExpireTimeResponse({}));
    } else {
      return $dara.cast<DelayTicketExpireTimeResponse>(await this.execute(params, req, runtime), new DelayTicketExpireTimeResponse({}));
    }

  }

  /**
   * Update the expiration time of the ticket embedded in the report.
   * 
   * @param request - DelayTicketExpireTimeRequest
   * @returns DelayTicketExpireTimeResponse
   */
  async delayTicketExpireTime(request: DelayTicketExpireTimeRequest): Promise<DelayTicketExpireTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.delayTicketExpireTimeWithOptions(request, runtime);
  }

  /**
   * { "ruleId": "a5bb24da- ***-a891683e14da", // The ID of the row-column permission rule. "cubeId": "7c7223ae- ***-3c744528014b", // The ID of the dataset. "delModel": { "userGroups": [ "0d5fb19b- ***-1248 fc27ca51", // Delete the user group ID of the user group. "3d2c23d4-***-f6390f325c2d" ], "users": [ "4334 ***358", // Delete the UserID of the user group. "Huang***3fa822" ] } }
   * 
   * @remarks
   * {"ruleId":"a5bb24da-***-a891683e14da","cubeId":"7c7223ae-***-3c744528014b","delModel":{"userGroups":["0d5fb19b-***-1248fc27ca51","3d2c23d4-***-f6390f325c2d"],"users":["4334***358","Huang***3fa822"]}}
   * 
   * @param request - DeleteDataLevelPermissionRuleUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLevelPermissionRuleUsersResponse
   */
  async deleteDataLevelPermissionRuleUsersWithOptions(request: DeleteDataLevelPermissionRuleUsersRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDataLevelPermissionRuleUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteUserModel)) {
      query["DeleteUserModel"] = request.deleteUserModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLevelPermissionRuleUsers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDataLevelPermissionRuleUsersResponse>(await this.callApi(params, req, runtime), new DeleteDataLevelPermissionRuleUsersResponse({}));
    } else {
      return $dara.cast<DeleteDataLevelPermissionRuleUsersResponse>(await this.execute(params, req, runtime), new DeleteDataLevelPermissionRuleUsersResponse({}));
    }

  }

  /**
   * { "ruleId": "a5bb24da- ***-a891683e14da", // The ID of the row-column permission rule. "cubeId": "7c7223ae- ***-3c744528014b", // The ID of the dataset. "delModel": { "userGroups": [ "0d5fb19b- ***-1248 fc27ca51", // Delete the user group ID of the user group. "3d2c23d4-***-f6390f325c2d" ], "users": [ "4334 ***358", // Delete the UserID of the user group. "Huang***3fa822" ] } }
   * 
   * @remarks
   * {"ruleId":"a5bb24da-***-a891683e14da","cubeId":"7c7223ae-***-3c744528014b","delModel":{"userGroups":["0d5fb19b-***-1248fc27ca51","3d2c23d4-***-f6390f325c2d"],"users":["4334***358","Huang***3fa822"]}}
   * 
   * @param request - DeleteDataLevelPermissionRuleUsersRequest
   * @returns DeleteDataLevelPermissionRuleUsersResponse
   */
  async deleteDataLevelPermissionRuleUsers(request: DeleteDataLevelPermissionRuleUsersRequest): Promise<DeleteDataLevelPermissionRuleUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLevelPermissionRuleUsersWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
   * 
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * @param request - DeleteDataLevelRuleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLevelRuleConfigResponse
   */
  async deleteDataLevelRuleConfigWithOptions(request: DeleteDataLevelRuleConfigRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDataLevelRuleConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLevelRuleConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDataLevelRuleConfigResponse>(await this.callApi(params, req, runtime), new DeleteDataLevelRuleConfigResponse({}));
    } else {
      return $dara.cast<DeleteDataLevelRuleConfigResponse>(await this.execute(params, req, runtime), new DeleteDataLevelRuleConfigResponse({}));
    }

  }

  /**
   * The ID of the request.
   * 
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * @param request - DeleteDataLevelRuleConfigRequest
   * @returns DeleteDataLevelRuleConfigResponse
   */
  async deleteDataLevelRuleConfig(request: DeleteDataLevelRuleConfigRequest): Promise<DeleteDataLevelRuleConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLevelRuleConfigWithOptions(request, runtime);
  }

  /**
   * Deletes a specified ticket from an embedded report.
   * 
   * @param request - DeleteTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTicketResponse
   */
  async deleteTicketWithOptions(request: DeleteTicketRequest, runtime: $dara.RuntimeOptions): Promise<DeleteTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTicket",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteTicketResponse>(await this.callApi(params, req, runtime), new DeleteTicketResponse({}));
    } else {
      return $dara.cast<DeleteTicketResponse>(await this.execute(params, req, runtime), new DeleteTicketResponse({}));
    }

  }

  /**
   * Deletes a specified ticket from an embedded report.
   * 
   * @param request - DeleteTicketRequest
   * @returns DeleteTicketResponse
   */
  async deleteTicket(request: DeleteTicketRequest): Promise<DeleteTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTicketWithOptions(request, runtime);
  }

  /**
   * auditing
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.transferUserId)) {
      query["TransferUserId"] = request.transferUserId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
    } else {
      return $dara.cast<DeleteUserResponse>(await this.execute(params, req, runtime), new DeleteUserResponse({}));
    }

  }

  /**
   * auditing
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * 删除指定工作空间的成员。
   * 
   * @param request - DeleteUserFromWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserFromWorkspaceResponse
   */
  async deleteUserFromWorkspaceWithOptions(request: DeleteUserFromWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUserFromWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserFromWorkspace",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteUserFromWorkspaceResponse>(await this.callApi(params, req, runtime), new DeleteUserFromWorkspaceResponse({}));
    } else {
      return $dara.cast<DeleteUserFromWorkspaceResponse>(await this.execute(params, req, runtime), new DeleteUserFromWorkspaceResponse({}));
    }

  }

  /**
   * 删除指定工作空间的成员。
   * 
   * @param request - DeleteUserFromWorkspaceRequest
   * @returns DeleteUserFromWorkspaceResponse
   */
  async deleteUserFromWorkspace(request: DeleteUserFromWorkspaceRequest): Promise<DeleteUserFromWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserFromWorkspaceWithOptions(request, runtime);
  }

  /**
   * Deletes a user group in an organization.
   * 
   * @param request - DeleteUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroupWithOptions(request: DeleteUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserGroup",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteUserGroupResponse>(await this.callApi(params, req, runtime), new DeleteUserGroupResponse({}));
    } else {
      return $dara.cast<DeleteUserGroupResponse>(await this.execute(params, req, runtime), new DeleteUserGroupResponse({}));
    }

  }

  /**
   * Deletes a user group in an organization.
   * 
   * @param request - DeleteUserGroupRequest
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroup(request: DeleteUserGroupRequest): Promise<DeleteUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a specified member from a specified user group.
   * 
   * @param request - DeleteUserGroupMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupMemberResponse
   */
  async deleteUserGroupMemberWithOptions(request: DeleteUserGroupMemberRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUserGroupMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserGroupMember",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteUserGroupMemberResponse>(await this.callApi(params, req, runtime), new DeleteUserGroupMemberResponse({}));
    } else {
      return $dara.cast<DeleteUserGroupMemberResponse>(await this.execute(params, req, runtime), new DeleteUserGroupMemberResponse({}));
    }

  }

  /**
   * Deletes a specified member from a specified user group.
   * 
   * @param request - DeleteUserGroupMemberRequest
   * @returns DeleteUserGroupMemberResponse
   */
  async deleteUserGroupMember(request: DeleteUserGroupMemberRequest): Promise<DeleteUserGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserGroupMemberWithOptions(request, runtime);
  }

  /**
   * Batch remove specified users from user groups.
   * 
   * @param request - DeleteUserGroupMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupMembersResponse
   */
  async deleteUserGroupMembersWithOptions(request: DeleteUserGroupMembersRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUserGroupMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserGroupMembers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteUserGroupMembersResponse>(await this.callApi(params, req, runtime), new DeleteUserGroupMembersResponse({}));
    } else {
      return $dara.cast<DeleteUserGroupMembersResponse>(await this.execute(params, req, runtime), new DeleteUserGroupMembersResponse({}));
    }

  }

  /**
   * Batch remove specified users from user groups.
   * 
   * @param request - DeleteUserGroupMembersRequest
   * @returns DeleteUserGroupMembersResponse
   */
  async deleteUserGroupMembers(request: DeleteUserGroupMembersRequest): Promise<DeleteUserGroupMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserGroupMembersWithOptions(request, runtime);
  }

  /**
   * Deletes the tag metadata of an organization member.
   * 
   * @param request - DeleteUserTagMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserTagMetaResponse
   */
  async deleteUserTagMetaWithOptions(request: DeleteUserTagMetaRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUserTagMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserTagMeta",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteUserTagMetaResponse>(await this.callApi(params, req, runtime), new DeleteUserTagMetaResponse({}));
    } else {
      return $dara.cast<DeleteUserTagMetaResponse>(await this.execute(params, req, runtime), new DeleteUserTagMetaResponse({}));
    }

  }

  /**
   * Deletes the tag metadata of an organization member.
   * 
   * @param request - DeleteUserTagMetaRequest
   * @returns DeleteUserTagMetaResponse
   */
  async deleteUserTagMeta(request: DeleteUserTagMetaRequest): Promise<DeleteUserTagMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserTagMetaWithOptions(request, runtime);
  }

  /**
   * Get Data Source Information
   * 
   * @param request - GetDataSourceConnectionInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataSourceConnectionInfoResponse
   */
  async getDataSourceConnectionInfoWithOptions(request: GetDataSourceConnectionInfoRequest, runtime: $dara.RuntimeOptions): Promise<GetDataSourceConnectionInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dsId)) {
      query["DsId"] = request.dsId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataSourceConnectionInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDataSourceConnectionInfoResponse>(await this.callApi(params, req, runtime), new GetDataSourceConnectionInfoResponse({}));
    } else {
      return $dara.cast<GetDataSourceConnectionInfoResponse>(await this.execute(params, req, runtime), new GetDataSourceConnectionInfoResponse({}));
    }

  }

  /**
   * Get Data Source Information
   * 
   * @param request - GetDataSourceConnectionInfoRequest
   * @returns GetDataSourceConnectionInfoResponse
   */
  async getDataSourceConnectionInfo(request: GetDataSourceConnectionInfoRequest): Promise<GetDataSourceConnectionInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataSourceConnectionInfoWithOptions(request, runtime);
  }

  /**
   * Check the running status of mail tasks within an organization
   * 
   * @param request - GetMailTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMailTaskStatusResponse
   */
  async getMailTaskStatusWithOptions(request: GetMailTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetMailTaskStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mailId)) {
      query["MailId"] = request.mailId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMailTaskStatus",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMailTaskStatusResponse>(await this.callApi(params, req, runtime), new GetMailTaskStatusResponse({}));
    } else {
      return $dara.cast<GetMailTaskStatusResponse>(await this.execute(params, req, runtime), new GetMailTaskStatusResponse({}));
    }

  }

  /**
   * Check the running status of mail tasks within an organization
   * 
   * @param request - GetMailTaskStatusRequest
   * @returns GetMailTaskStatusResponse
   */
  async getMailTaskStatus(request: GetMailTaskStatusRequest): Promise<GetMailTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMailTaskStatusWithOptions(request, runtime);
  }

  /**
   * Test description
   * 
   * @param request - GetUserGroupInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserGroupInfoResponse
   */
  async getUserGroupInfoWithOptions(request: GetUserGroupInfoRequest, runtime: $dara.RuntimeOptions): Promise<GetUserGroupInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserGroupInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetUserGroupInfoResponse>(await this.callApi(params, req, runtime), new GetUserGroupInfoResponse({}));
    } else {
      return $dara.cast<GetUserGroupInfoResponse>(await this.execute(params, req, runtime), new GetUserGroupInfoResponse({}));
    }

  }

  /**
   * Test description
   * 
   * @param request - GetUserGroupInfoRequest
   * @returns GetUserGroupInfoResponse
   */
  async getUserGroupInfo(request: GetUserGroupInfoRequest): Promise<GetUserGroupInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserGroupInfoWithOptions(request, runtime);
  }

  /**
   * Query the list of embedded reports
   * 
   * @param request - GetWorksEmbedListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorksEmbedListResponse
   */
  async getWorksEmbedListWithOptions(request: GetWorksEmbedListRequest, runtime: $dara.RuntimeOptions): Promise<GetWorksEmbedListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.worksType)) {
      query["WorksType"] = request.worksType;
    }

    if (!$dara.isNull(request.wsId)) {
      query["WsId"] = request.wsId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorksEmbedList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetWorksEmbedListResponse>(await this.callApi(params, req, runtime), new GetWorksEmbedListResponse({}));
    } else {
      return $dara.cast<GetWorksEmbedListResponse>(await this.execute(params, req, runtime), new GetWorksEmbedListResponse({}));
    }

  }

  /**
   * Query the list of embedded reports
   * 
   * @param request - GetWorksEmbedListRequest
   * @returns GetWorksEmbedListResponse
   */
  async getWorksEmbedList(request: GetWorksEmbedListRequest): Promise<GetWorksEmbedListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorksEmbedListWithOptions(request, runtime);
  }

  /**
   * Queries API data sources.
   * 
   * @remarks
   * For more information about the parameters, see [Create an API data source](https://help.aliyun.com/document_detail/409330.html).
   * 
   * @param request - ListApiDatasourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiDatasourceResponse
   */
  async listApiDatasourceWithOptions(request: ListApiDatasourceRequest, runtime: $dara.RuntimeOptions): Promise<ListApiDatasourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiDatasource",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListApiDatasourceResponse>(await this.callApi(params, req, runtime), new ListApiDatasourceResponse({}));
    } else {
      return $dara.cast<ListApiDatasourceResponse>(await this.execute(params, req, runtime), new ListApiDatasourceResponse({}));
    }

  }

  /**
   * Queries API data sources.
   * 
   * @remarks
   * For more information about the parameters, see [Create an API data source](https://help.aliyun.com/document_detail/409330.html).
   * 
   * @param request - ListApiDatasourceRequest
   * @returns ListApiDatasourceResponse
   */
  async listApiDatasource(request: ListApiDatasourceRequest): Promise<ListApiDatasourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApiDatasourceWithOptions(request, runtime);
  }

  /**
   * Queries user group information at a time by user group ID.
   * 
   * @param request - ListByUserGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListByUserGroupIdResponse
   */
  async listByUserGroupIdWithOptions(request: ListByUserGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<ListByUserGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListByUserGroupId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListByUserGroupIdResponse>(await this.callApi(params, req, runtime), new ListByUserGroupIdResponse({}));
    } else {
      return $dara.cast<ListByUserGroupIdResponse>(await this.execute(params, req, runtime), new ListByUserGroupIdResponse({}));
    }

  }

  /**
   * Queries user group information at a time by user group ID.
   * 
   * @param request - ListByUserGroupIdRequest
   * @returns ListByUserGroupIdResponse
   */
  async listByUserGroupId(request: ListByUserGroupIdRequest): Promise<ListByUserGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listByUserGroupIdWithOptions(request, runtime);
  }

  /**
   * The ID of the work.
   * 
   * @param request - ListCollectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCollectionsResponse
   */
  async listCollectionsWithOptions(request: ListCollectionsRequest, runtime: $dara.RuntimeOptions): Promise<ListCollectionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCollections",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCollectionsResponse>(await this.callApi(params, req, runtime), new ListCollectionsResponse({}));
    } else {
      return $dara.cast<ListCollectionsResponse>(await this.execute(params, req, runtime), new ListCollectionsResponse({}));
    }

  }

  /**
   * The ID of the work.
   * 
   * @param request - ListCollectionsRequest
   * @returns ListCollectionsResponse
   */
  async listCollections(request: ListCollectionsRequest): Promise<ListCollectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCollectionsWithOptions(request, runtime);
  }

  /**
   * You can this operation to obtain a list of row and column permission configurations for a specified dataset.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.
   * 
   * @param request - ListCubeDataLevelPermissionConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCubeDataLevelPermissionConfigResponse
   */
  async listCubeDataLevelPermissionConfigWithOptions(request: ListCubeDataLevelPermissionConfigRequest, runtime: $dara.RuntimeOptions): Promise<ListCubeDataLevelPermissionConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCubeDataLevelPermissionConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCubeDataLevelPermissionConfigResponse>(await this.callApi(params, req, runtime), new ListCubeDataLevelPermissionConfigResponse({}));
    } else {
      return $dara.cast<ListCubeDataLevelPermissionConfigResponse>(await this.execute(params, req, runtime), new ListCubeDataLevelPermissionConfigResponse({}));
    }

  }

  /**
   * You can this operation to obtain a list of row and column permission configurations for a specified dataset.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.
   * 
   * @param request - ListCubeDataLevelPermissionConfigRequest
   * @returns ListCubeDataLevelPermissionConfigResponse
   */
  async listCubeDataLevelPermissionConfig(request: ListCubeDataLevelPermissionConfigRequest): Promise<ListCubeDataLevelPermissionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCubeDataLevelPermissionConfigWithOptions(request, runtime);
  }

  /**
   * 根据行列权限种类，获取数据集行列权限的白名单列表。
   * 
   * @param request - ListDataLevelPermissionWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLevelPermissionWhiteListResponse
   */
  async listDataLevelPermissionWhiteListWithOptions(request: ListDataLevelPermissionWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<ListDataLevelPermissionWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLevelPermissionWhiteList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDataLevelPermissionWhiteListResponse>(await this.callApi(params, req, runtime), new ListDataLevelPermissionWhiteListResponse({}));
    } else {
      return $dara.cast<ListDataLevelPermissionWhiteListResponse>(await this.execute(params, req, runtime), new ListDataLevelPermissionWhiteListResponse({}));
    }

  }

  /**
   * 根据行列权限种类，获取数据集行列权限的白名单列表。
   * 
   * @param request - ListDataLevelPermissionWhiteListRequest
   * @returns ListDataLevelPermissionWhiteListResponse
   */
  async listDataLevelPermissionWhiteList(request: ListDataLevelPermissionWhiteListRequest): Promise<ListDataLevelPermissionWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLevelPermissionWhiteListWithOptions(request, runtime);
  }

  /**
   * Query all data sources under the specified space
   * 
   * @param request - ListDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceResponse
   */
  async listDataSourceWithOptions(request: ListDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<ListDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dsType)) {
      query["DsType"] = request.dsType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSource",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDataSourceResponse>(await this.callApi(params, req, runtime), new ListDataSourceResponse({}));
    } else {
      return $dara.cast<ListDataSourceResponse>(await this.execute(params, req, runtime), new ListDataSourceResponse({}));
    }

  }

  /**
   * Query all data sources under the specified space
   * 
   * @param request - ListDataSourceRequest
   * @returns ListDataSourceResponse
   */
  async listDataSource(request: ListDataSourceRequest): Promise<ListDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourceWithOptions(request, runtime);
  }

  /**
   * 获取指定用户在首页看板中展示的收藏作品列表。
   * 
   * @param request - ListFavoriteReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFavoriteReportsResponse
   */
  async listFavoriteReportsWithOptions(request: ListFavoriteReportsRequest, runtime: $dara.RuntimeOptions): Promise<ListFavoriteReportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.treeType)) {
      query["TreeType"] = request.treeType;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFavoriteReports",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFavoriteReportsResponse>(await this.callApi(params, req, runtime), new ListFavoriteReportsResponse({}));
    } else {
      return $dara.cast<ListFavoriteReportsResponse>(await this.execute(params, req, runtime), new ListFavoriteReportsResponse({}));
    }

  }

  /**
   * 获取指定用户在首页看板中展示的收藏作品列表。
   * 
   * @param request - ListFavoriteReportsRequest
   * @returns ListFavoriteReportsResponse
   */
  async listFavoriteReports(request: ListFavoriteReportsRequest): Promise<ListFavoriteReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFavoriteReportsWithOptions(request, runtime);
  }

  /**
   * Get user list under the specified organization role.
   * 
   * @param request - ListOrganizationRoleUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationRoleUsersResponse
   */
  async listOrganizationRoleUsersWithOptions(request: ListOrganizationRoleUsersRequest, runtime: $dara.RuntimeOptions): Promise<ListOrganizationRoleUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationRoleUsers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListOrganizationRoleUsersResponse>(await this.callApi(params, req, runtime), new ListOrganizationRoleUsersResponse({}));
    } else {
      return $dara.cast<ListOrganizationRoleUsersResponse>(await this.execute(params, req, runtime), new ListOrganizationRoleUsersResponse({}));
    }

  }

  /**
   * Get user list under the specified organization role.
   * 
   * @param request - ListOrganizationRoleUsersRequest
   * @returns ListOrganizationRoleUsersResponse
   */
  async listOrganizationRoleUsers(request: ListOrganizationRoleUsersRequest): Promise<ListOrganizationRoleUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrganizationRoleUsersWithOptions(request, runtime);
  }

  /**
   * Retrieve the list of custom roles at the organization level.
   * 
   * @param request - ListOrganizationRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationRolesResponse
   */
  async listOrganizationRolesWithOptions(runtime: $dara.RuntimeOptions): Promise<ListOrganizationRolesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationRoles",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListOrganizationRolesResponse>(await this.callApi(params, req, runtime), new ListOrganizationRolesResponse({}));
    } else {
      return $dara.cast<ListOrganizationRolesResponse>(await this.execute(params, req, runtime), new ListOrganizationRolesResponse({}));
    }

  }

  /**
   * Retrieve the list of custom roles at the organization level.
   * @returns ListOrganizationRolesResponse
   */
  async listOrganizationRoles(): Promise<ListOrganizationRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrganizationRolesWithOptions(runtime);
  }

  /**
   * Obtains the list of authorization details for a BI portal menu.
   * 
   * @param request - ListPortalMenuAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPortalMenuAuthorizationResponse
   */
  async listPortalMenuAuthorizationWithOptions(request: ListPortalMenuAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<ListPortalMenuAuthorizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPortalMenuAuthorization",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPortalMenuAuthorizationResponse>(await this.callApi(params, req, runtime), new ListPortalMenuAuthorizationResponse({}));
    } else {
      return $dara.cast<ListPortalMenuAuthorizationResponse>(await this.execute(params, req, runtime), new ListPortalMenuAuthorizationResponse({}));
    }

  }

  /**
   * Obtains the list of authorization details for a BI portal menu.
   * 
   * @param request - ListPortalMenuAuthorizationRequest
   * @returns ListPortalMenuAuthorizationResponse
   */
  async listPortalMenuAuthorization(request: ListPortalMenuAuthorizationRequest): Promise<ListPortalMenuAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPortalMenuAuthorizationWithOptions(request, runtime);
  }

  /**
   * Gets a hierarchical list of menus under a specific BI portal.
   * 
   * @param request - ListPortalMenusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPortalMenusResponse
   */
  async listPortalMenusWithOptions(request: ListPortalMenusRequest, runtime: $dara.RuntimeOptions): Promise<ListPortalMenusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPortalMenus",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPortalMenusResponse>(await this.callApi(params, req, runtime), new ListPortalMenusResponse({}));
    } else {
      return $dara.cast<ListPortalMenusResponse>(await this.execute(params, req, runtime), new ListPortalMenusResponse({}));
    }

  }

  /**
   * Gets a hierarchical list of menus under a specific BI portal.
   * 
   * @param request - ListPortalMenusRequest
   * @returns ListPortalMenusResponse
   */
  async listPortalMenus(request: ListPortalMenusRequest): Promise<ListPortalMenusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPortalMenusWithOptions(request, runtime);
  }

  /**
   * 获取首页看板常看和足迹列表。
   * 
   * @param request - ListRecentViewReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecentViewReportsResponse
   */
  async listRecentViewReportsWithOptions(request: ListRecentViewReportsRequest, runtime: $dara.RuntimeOptions): Promise<ListRecentViewReportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.offsetDay)) {
      query["OffsetDay"] = request.offsetDay;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryMode)) {
      query["QueryMode"] = request.queryMode;
    }

    if (!$dara.isNull(request.treeType)) {
      query["TreeType"] = request.treeType;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecentViewReports",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRecentViewReportsResponse>(await this.callApi(params, req, runtime), new ListRecentViewReportsResponse({}));
    } else {
      return $dara.cast<ListRecentViewReportsResponse>(await this.execute(params, req, runtime), new ListRecentViewReportsResponse({}));
    }

  }

  /**
   * 获取首页看板常看和足迹列表。
   * 
   * @param request - ListRecentViewReportsRequest
   * @returns ListRecentViewReportsResponse
   */
  async listRecentViewReports(request: ListRecentViewReportsRequest): Promise<ListRecentViewReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecentViewReportsWithOptions(request, runtime);
  }

  /**
   * 获取指定用户在首页看板中展示的被授权的作品列表。
   * 
   * @param request - ListSharedReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSharedReportsResponse
   */
  async listSharedReportsWithOptions(request: ListSharedReportsRequest, runtime: $dara.RuntimeOptions): Promise<ListSharedReportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.treeType)) {
      query["TreeType"] = request.treeType;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSharedReports",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSharedReportsResponse>(await this.callApi(params, req, runtime), new ListSharedReportsResponse({}));
    } else {
      return $dara.cast<ListSharedReportsResponse>(await this.execute(params, req, runtime), new ListSharedReportsResponse({}));
    }

  }

  /**
   * 获取指定用户在首页看板中展示的被授权的作品列表。
   * 
   * @param request - ListSharedReportsRequest
   * @returns ListSharedReportsResponse
   */
  async listSharedReports(request: ListSharedReportsRequest): Promise<ListSharedReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSharedReportsWithOptions(request, runtime);
  }

  /**
   * Description
   * 
   * @param request - ListUserGroupsByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsByUserIdResponse
   */
  async listUserGroupsByUserIdWithOptions(request: ListUserGroupsByUserIdRequest, runtime: $dara.RuntimeOptions): Promise<ListUserGroupsByUserIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserGroupsByUserId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserGroupsByUserIdResponse>(await this.callApi(params, req, runtime), new ListUserGroupsByUserIdResponse({}));
    } else {
      return $dara.cast<ListUserGroupsByUserIdResponse>(await this.execute(params, req, runtime), new ListUserGroupsByUserIdResponse({}));
    }

  }

  /**
   * Description
   * 
   * @param request - ListUserGroupsByUserIdRequest
   * @returns ListUserGroupsByUserIdResponse
   */
  async listUserGroupsByUserId(request: ListUserGroupsByUserIdRequest): Promise<ListUserGroupsByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserGroupsByUserIdWithOptions(request, runtime);
  }

  /**
   * Get user list under the specified workspace role.
   * 
   * @param request - ListWorkspaceRoleUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceRoleUsersResponse
   */
  async listWorkspaceRoleUsersWithOptions(request: ListWorkspaceRoleUsersRequest, runtime: $dara.RuntimeOptions): Promise<ListWorkspaceRoleUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaceRoleUsers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListWorkspaceRoleUsersResponse>(await this.callApi(params, req, runtime), new ListWorkspaceRoleUsersResponse({}));
    } else {
      return $dara.cast<ListWorkspaceRoleUsersResponse>(await this.execute(params, req, runtime), new ListWorkspaceRoleUsersResponse({}));
    }

  }

  /**
   * Get user list under the specified workspace role.
   * 
   * @param request - ListWorkspaceRoleUsersRequest
   * @returns ListWorkspaceRoleUsersResponse
   */
  async listWorkspaceRoleUsers(request: ListWorkspaceRoleUsersRequest): Promise<ListWorkspaceRoleUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkspaceRoleUsersWithOptions(request, runtime);
  }

  /**
   * Get the list of workspace roles.
   * 
   * @param request - ListWorkspaceRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceRolesResponse
   */
  async listWorkspaceRolesWithOptions(request: ListWorkspaceRolesRequest, runtime: $dara.RuntimeOptions): Promise<ListWorkspaceRolesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaceRoles",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListWorkspaceRolesResponse>(await this.callApi(params, req, runtime), new ListWorkspaceRolesResponse({}));
    } else {
      return $dara.cast<ListWorkspaceRolesResponse>(await this.execute(params, req, runtime), new ListWorkspaceRolesResponse({}));
    }

  }

  /**
   * Get the list of workspace roles.
   * 
   * @param request - ListWorkspaceRolesRequest
   * @returns ListWorkspaceRolesResponse
   */
  async listWorkspaceRoles(request: ListWorkspaceRolesRequest): Promise<ListWorkspaceRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkspaceRolesWithOptions(request, runtime);
  }

  /**
   * Manually Execute Email Task
   * 
   * @param request - ManualRunMailTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManualRunMailTaskResponse
   */
  async manualRunMailTaskWithOptions(request: ManualRunMailTaskRequest, runtime: $dara.RuntimeOptions): Promise<ManualRunMailTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mailId)) {
      query["MailId"] = request.mailId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManualRunMailTask",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ManualRunMailTaskResponse>(await this.callApi(params, req, runtime), new ManualRunMailTaskResponse({}));
    } else {
      return $dara.cast<ManualRunMailTaskResponse>(await this.execute(params, req, runtime), new ManualRunMailTaskResponse({}));
    }

  }

  /**
   * Manually Execute Email Task
   * 
   * @param request - ManualRunMailTaskRequest
   * @returns ManualRunMailTaskResponse
   */
  async manualRunMailTask(request: ManualRunMailTaskRequest): Promise<ManualRunMailTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manualRunMailTaskWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a specified API data source.
   * 
   * @remarks
   * When you modify a query statement, you can modify only the top-level JsonObject. You cannot modify parameters that are nested in multiple layers. For more information about the parameters, see [Create an API data source](https://help.aliyun.com/document_detail/409330.html).
   * 
   * @param request - ModifyApiDatasourceParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApiDatasourceParametersResponse
   */
  async modifyApiDatasourceParametersWithOptions(request: ModifyApiDatasourceParametersRequest, runtime: $dara.RuntimeOptions): Promise<ModifyApiDatasourceParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApiDatasourceParameters",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyApiDatasourceParametersResponse>(await this.callApi(params, req, runtime), new ModifyApiDatasourceParametersResponse({}));
    } else {
      return $dara.cast<ModifyApiDatasourceParametersResponse>(await this.execute(params, req, runtime), new ModifyApiDatasourceParametersResponse({}));
    }

  }

  /**
   * Modifies the configurations of a specified API data source.
   * 
   * @remarks
   * When you modify a query statement, you can modify only the top-level JsonObject. You cannot modify parameters that are nested in multiple layers. For more information about the parameters, see [Create an API data source](https://help.aliyun.com/document_detail/409330.html).
   * 
   * @param request - ModifyApiDatasourceParametersRequest
   * @returns ModifyApiDatasourceParametersResponse
   */
  async modifyApiDatasourceParameters(request: ModifyApiDatasourceParametersRequest): Promise<ModifyApiDatasourceParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApiDatasourceParametersWithOptions(request, runtime);
  }

  /**
   * 修改智能问数嵌入配置。
   * 
   * @param request - ModifyCopilotEmbedConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCopilotEmbedConfigResponse
   */
  async modifyCopilotEmbedConfigWithOptions(request: ModifyCopilotEmbedConfigRequest, runtime: $dara.RuntimeOptions): Promise<ModifyCopilotEmbedConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentName)) {
      query["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.copilotId)) {
      query["CopilotId"] = request.copilotId;
    }

    if (!$dara.isNull(request.dataRange)) {
      query["DataRange"] = request.dataRange;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCopilotEmbedConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyCopilotEmbedConfigResponse>(await this.callApi(params, req, runtime), new ModifyCopilotEmbedConfigResponse({}));
    } else {
      return $dara.cast<ModifyCopilotEmbedConfigResponse>(await this.execute(params, req, runtime), new ModifyCopilotEmbedConfigResponse({}));
    }

  }

  /**
   * 修改智能问数嵌入配置。
   * 
   * @param request - ModifyCopilotEmbedConfigRequest
   * @returns ModifyCopilotEmbedConfigResponse
   */
  async modifyCopilotEmbedConfig(request: ModifyCopilotEmbedConfigRequest): Promise<ModifyCopilotEmbedConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCopilotEmbedConfigWithOptions(request, runtime);
  }

  /**
   * Get approval flow information based on the approver.
   * 
   * @param request - QueryApprovalInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryApprovalInfoResponse
   */
  async queryApprovalInfoWithOptions(request: QueryApprovalInfoRequest, runtime: $dara.RuntimeOptions): Promise<QueryApprovalInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryApprovalInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryApprovalInfoResponse>(await this.callApi(params, req, runtime), new QueryApprovalInfoResponse({}));
    } else {
      return $dara.cast<QueryApprovalInfoResponse>(await this.execute(params, req, runtime), new QueryApprovalInfoResponse({}));
    }

  }

  /**
   * Get approval flow information based on the approver.
   * 
   * @param request - QueryApprovalInfoRequest
   * @returns QueryApprovalInfoResponse
   */
  async queryApprovalInfo(request: QueryApprovalInfoRequest): Promise<QueryApprovalInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryApprovalInfoWithOptions(request, runtime);
  }

  /**
   * 查询审计日志信息。
   * 
   * @param request - QueryAuditLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAuditLogResponse
   */
  async queryAuditLogWithOptions(request: QueryAuditLogRequest, runtime: $dara.RuntimeOptions): Promise<QueryAuditLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.operatorId)) {
      query["OperatorId"] = request.operatorId;
    }

    if (!$dara.isNull(request.operatorTypes)) {
      query["OperatorTypes"] = request.operatorTypes;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAuditLog",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryAuditLogResponse>(await this.callApi(params, req, runtime), new QueryAuditLogResponse({}));
    } else {
      return $dara.cast<QueryAuditLogResponse>(await this.execute(params, req, runtime), new QueryAuditLogResponse({}));
    }

  }

  /**
   * 查询审计日志信息。
   * 
   * @param request - QueryAuditLogRequest
   * @returns QueryAuditLogResponse
   */
  async queryAuditLog(request: QueryAuditLogRequest): Promise<QueryAuditLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAuditLogWithOptions(request, runtime);
  }

  /**
   * Queries component performance logs.
   * 
   * @param request - QueryComponentPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryComponentPerformanceResponse
   */
  async queryComponentPerformanceWithOptions(request: QueryComponentPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<QueryComponentPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.costTimeAvgMin)) {
      query["CostTimeAvgMin"] = request.costTimeAvgMin;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryComponentPerformance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryComponentPerformanceResponse>(await this.callApi(params, req, runtime), new QueryComponentPerformanceResponse({}));
    } else {
      return $dara.cast<QueryComponentPerformanceResponse>(await this.execute(params, req, runtime), new QueryComponentPerformanceResponse({}));
    }

  }

  /**
   * Queries component performance logs.
   * 
   * @param request - QueryComponentPerformanceRequest
   * @returns QueryComponentPerformanceResponse
   */
  async queryComponentPerformance(request: QueryComponentPerformanceRequest): Promise<QueryComponentPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryComponentPerformanceWithOptions(request, runtime);
  }

  /**
   * 获取开通小Q嵌入的配置列表。
   * 
   * @param request - QueryCopilotEmbedConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCopilotEmbedConfigResponse
   */
  async queryCopilotEmbedConfigWithOptions(request: QueryCopilotEmbedConfigRequest, runtime: $dara.RuntimeOptions): Promise<QueryCopilotEmbedConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCopilotEmbedConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryCopilotEmbedConfigResponse>(await this.callApi(params, req, runtime), new QueryCopilotEmbedConfigResponse({}));
    } else {
      return $dara.cast<QueryCopilotEmbedConfigResponse>(await this.execute(params, req, runtime), new QueryCopilotEmbedConfigResponse({}));
    }

  }

  /**
   * 获取开通小Q嵌入的配置列表。
   * 
   * @param request - QueryCopilotEmbedConfigRequest
   * @returns QueryCopilotEmbedConfigResponse
   */
  async queryCopilotEmbedConfig(request: QueryCopilotEmbedConfigRequest): Promise<QueryCopilotEmbedConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCopilotEmbedConfigWithOptions(request, runtime);
  }

  /**
   * Queries dataset optimization suggestions.
   * 
   * @param request - QueryCubeOptimizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCubeOptimizationResponse
   */
  async queryCubeOptimizationWithOptions(request: QueryCubeOptimizationRequest, runtime: $dara.RuntimeOptions): Promise<QueryCubeOptimizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCubeOptimization",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryCubeOptimizationResponse>(await this.callApi(params, req, runtime), new QueryCubeOptimizationResponse({}));
    } else {
      return $dara.cast<QueryCubeOptimizationResponse>(await this.execute(params, req, runtime), new QueryCubeOptimizationResponse({}));
    }

  }

  /**
   * Queries dataset optimization suggestions.
   * 
   * @param request - QueryCubeOptimizationRequest
   * @returns QueryCubeOptimizationResponse
   */
  async queryCubeOptimization(request: QueryCubeOptimizationRequest): Promise<QueryCubeOptimizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCubeOptimizationWithOptions(request, runtime);
  }

  /**
   * 查询数据集性能。
   * 
   * @param request - QueryCubePerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCubePerformanceResponse
   */
  async queryCubePerformanceWithOptions(request: QueryCubePerformanceRequest, runtime: $dara.RuntimeOptions): Promise<QueryCubePerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.costTimeAvgMin)) {
      query["CostTimeAvgMin"] = request.costTimeAvgMin;
    }

    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCubePerformance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryCubePerformanceResponse>(await this.callApi(params, req, runtime), new QueryCubePerformanceResponse({}));
    } else {
      return $dara.cast<QueryCubePerformanceResponse>(await this.execute(params, req, runtime), new QueryCubePerformanceResponse({}));
    }

  }

  /**
   * 查询数据集性能。
   * 
   * @param request - QueryCubePerformanceRequest
   * @returns QueryCubePerformanceResponse
   */
  async queryCubePerformance(request: QueryCubePerformanceRequest): Promise<QueryCubePerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCubePerformanceWithOptions(request, runtime);
  }

  /**
   * Invoke the open data service API.
   * 
   * @remarks
   * ### Prerequisites
   * You need to create a data service API through Quick BI\\"s data service. For more details, see: [Data Service](https://help.aliyun.com/document_detail/144980.html).
   * ### Usage Restrictions
   * * The data service feature is only available to professional edition customers.
   * * The timeout for data service API calls is 60s, and the QPS for a single API is 10 times/second.
   * * If row-level permissions are enabled on the dataset referenced by the data service API, the API call will also be intercepted by the row-level permission policy.
   * 
   * @param request - QueryDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataResponse
   */
  async queryDataWithOptions(request: QueryDataRequest, runtime: $dara.RuntimeOptions): Promise<QueryDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.conditions)) {
      query["Conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.returnFields)) {
      query["ReturnFields"] = request.returnFields;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryData",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDataResponse>(await this.callApi(params, req, runtime), new QueryDataResponse({}));
    } else {
      return $dara.cast<QueryDataResponse>(await this.execute(params, req, runtime), new QueryDataResponse({}));
    }

  }

  /**
   * Invoke the open data service API.
   * 
   * @remarks
   * ### Prerequisites
   * You need to create a data service API through Quick BI\\"s data service. For more details, see: [Data Service](https://help.aliyun.com/document_detail/144980.html).
   * ### Usage Restrictions
   * * The data service feature is only available to professional edition customers.
   * * The timeout for data service API calls is 60s, and the QPS for a single API is 10 times/second.
   * * If row-level permissions are enabled on the dataset referenced by the data service API, the API call will also be intercepted by the row-level permission policy.
   * 
   * @param request - QueryDataRequest
   * @returns QueryDataResponse
   */
  async queryData(request: QueryDataRequest): Promise<QueryDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDataWithOptions(request, runtime);
  }

  /**
   * 获取数据范围目录列表。
   * 
   * @param request - QueryDataRangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataRangeResponse
   */
  async queryDataRangeWithOptions(request: QueryDataRangeRequest, runtime: $dara.RuntimeOptions): Promise<QueryDataRangeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDataRange",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDataRangeResponse>(await this.callApi(params, req, runtime), new QueryDataRangeResponse({}));
    } else {
      return $dara.cast<QueryDataRangeResponse>(await this.execute(params, req, runtime), new QueryDataRangeResponse({}));
    }

  }

  /**
   * 获取数据范围目录列表。
   * 
   * @param request - QueryDataRangeRequest
   * @returns QueryDataRangeResponse
   */
  async queryDataRange(request: QueryDataRangeRequest): Promise<QueryDataRangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDataRangeWithOptions(request, runtime);
  }

  /**
   * Invoke an already created API in the data service.
   * 
   * @remarks
   * #### Prerequisites
   * You create the data service API through Quick BI\\"s data service. For more details, see [Data Service](https://help.aliyun.com/document_detail/144980.html).
   * #### Usage Restrictions
   * * The data service feature is only available to professional edition customers. 
   * * The timeout for data service API calls is 60s, and the QPS for a single API is 10 times/second.
   * * If row-level permissions are enabled on the dataset referenced by the data service API, the API call may be intercepted by the row-level permission policy.
   * 
   * @deprecated OpenAPI QueryDataService is deprecated, please use quickbi-public::2022-01-01::QueryData instead.
   * 
   * @param request - QueryDataServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataServiceResponse
   */
  // Deprecated
  async queryDataServiceWithOptions(request: QueryDataServiceRequest, runtime: $dara.RuntimeOptions): Promise<QueryDataServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.conditions)) {
      query["Conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.returnFields)) {
      query["ReturnFields"] = request.returnFields;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDataService",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDataServiceResponse>(await this.callApi(params, req, runtime), new QueryDataServiceResponse({}));
    } else {
      return $dara.cast<QueryDataServiceResponse>(await this.execute(params, req, runtime), new QueryDataServiceResponse({}));
    }

  }

  /**
   * Invoke an already created API in the data service.
   * 
   * @remarks
   * #### Prerequisites
   * You create the data service API through Quick BI\\"s data service. For more details, see [Data Service](https://help.aliyun.com/document_detail/144980.html).
   * #### Usage Restrictions
   * * The data service feature is only available to professional edition customers. 
   * * The timeout for data service API calls is 60s, and the QPS for a single API is 10 times/second.
   * * If row-level permissions are enabled on the dataset referenced by the data service API, the API call may be intercepted by the row-level permission policy.
   * 
   * @deprecated OpenAPI QueryDataService is deprecated, please use quickbi-public::2022-01-01::QueryData instead.
   * 
   * @param request - QueryDataServiceRequest
   * @returns QueryDataServiceResponse
   */
  // Deprecated
  async queryDataService(request: QueryDataServiceRequest): Promise<QueryDataServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDataServiceWithOptions(request, runtime);
  }

  /**
   * Query Data Service API List
   * 
   * @param request - QueryDataServiceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataServiceListResponse
   */
  async queryDataServiceListWithOptions(request: QueryDataServiceListRequest, runtime: $dara.RuntimeOptions): Promise<QueryDataServiceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDataServiceList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDataServiceListResponse>(await this.callApi(params, req, runtime), new QueryDataServiceListResponse({}));
    } else {
      return $dara.cast<QueryDataServiceListResponse>(await this.execute(params, req, runtime), new QueryDataServiceListResponse({}));
    }

  }

  /**
   * Query Data Service API List
   * 
   * @param request - QueryDataServiceListRequest
   * @returns QueryDataServiceListResponse
   */
  async queryDataServiceList(request: QueryDataServiceListRequest): Promise<QueryDataServiceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDataServiceListWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified dataset, including the data source, directory, and dataset model.
   * 
   * @remarks
   * The data source, directory, and dataset model (including dimensions, measures, physical fields, custom SQL text, and association relationships).
   * 
   * @param request - QueryDatasetDetailInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDatasetDetailInfoResponse
   */
  async queryDatasetDetailInfoWithOptions(request: QueryDatasetDetailInfoRequest, runtime: $dara.RuntimeOptions): Promise<QueryDatasetDetailInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDatasetDetailInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDatasetDetailInfoResponse>(await this.callApi(params, req, runtime), new QueryDatasetDetailInfoResponse({}));
    } else {
      return $dara.cast<QueryDatasetDetailInfoResponse>(await this.execute(params, req, runtime), new QueryDatasetDetailInfoResponse({}));
    }

  }

  /**
   * Queries the details of a specified dataset, including the data source, directory, and dataset model.
   * 
   * @remarks
   * The data source, directory, and dataset model (including dimensions, measures, physical fields, custom SQL text, and association relationships).
   * 
   * @param request - QueryDatasetDetailInfoRequest
   * @returns QueryDatasetDetailInfoResponse
   */
  async queryDatasetDetailInfo(request: QueryDatasetDetailInfoRequest): Promise<QueryDatasetDetailInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDatasetDetailInfoWithOptions(request, runtime);
  }

  /**
   * Indicates whether the table is a custom SQL table. Valid values:
   * *   true: custom SQL table
   * *   false: non-custom SQL table
   * 
   * @param request - QueryDatasetInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDatasetInfoResponse
   */
  async queryDatasetInfoWithOptions(request: QueryDatasetInfoRequest, runtime: $dara.RuntimeOptions): Promise<QueryDatasetInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDatasetInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDatasetInfoResponse>(await this.callApi(params, req, runtime), new QueryDatasetInfoResponse({}));
    } else {
      return $dara.cast<QueryDatasetInfoResponse>(await this.execute(params, req, runtime), new QueryDatasetInfoResponse({}));
    }

  }

  /**
   * Indicates whether the table is a custom SQL table. Valid values:
   * *   true: custom SQL table
   * *   false: non-custom SQL table
   * 
   * @param request - QueryDatasetInfoRequest
   * @returns QueryDatasetInfoResponse
   */
  async queryDatasetInfo(request: QueryDatasetInfoRequest): Promise<QueryDatasetInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDatasetInfoWithOptions(request, runtime);
  }

  /**
   * The name of the training dataset.
   * 
   * @param request - QueryDatasetListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDatasetListResponse
   */
  async queryDatasetListWithOptions(request: QueryDatasetListRequest, runtime: $dara.RuntimeOptions): Promise<QueryDatasetListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.withChildren)) {
      query["WithChildren"] = request.withChildren;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDatasetList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDatasetListResponse>(await this.callApi(params, req, runtime), new QueryDatasetListResponse({}));
    } else {
      return $dara.cast<QueryDatasetListResponse>(await this.execute(params, req, runtime), new QueryDatasetListResponse({}));
    }

  }

  /**
   * The name of the training dataset.
   * 
   * @param request - QueryDatasetListRequest
   * @returns QueryDatasetListResponse
   */
  async queryDatasetList(request: QueryDatasetListRequest): Promise<QueryDatasetListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDatasetListWithOptions(request, runtime);
  }

  /**
   * 查看数据集是否开通智能问数
   * 
   * @param request - QueryDatasetSmartqStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDatasetSmartqStatusResponse
   */
  async queryDatasetSmartqStatusWithOptions(request: QueryDatasetSmartqStatusRequest, runtime: $dara.RuntimeOptions): Promise<QueryDatasetSmartqStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDatasetSmartqStatus",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDatasetSmartqStatusResponse>(await this.callApi(params, req, runtime), new QueryDatasetSmartqStatusResponse({}));
    } else {
      return $dara.cast<QueryDatasetSmartqStatusResponse>(await this.execute(params, req, runtime), new QueryDatasetSmartqStatusResponse({}));
    }

  }

  /**
   * 查看数据集是否开通智能问数
   * 
   * @param request - QueryDatasetSmartqStatusRequest
   * @returns QueryDatasetSmartqStatusResponse
   */
  async queryDatasetSmartqStatus(request: QueryDatasetSmartqStatusRequest): Promise<QueryDatasetSmartqStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDatasetSmartqStatusWithOptions(request, runtime);
  }

  /**
   * 获取指定数据集的行级权限开关状态。
   * 
   * @param request - QueryDatasetSwitchInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDatasetSwitchInfoResponse
   */
  async queryDatasetSwitchInfoWithOptions(request: QueryDatasetSwitchInfoRequest, runtime: $dara.RuntimeOptions): Promise<QueryDatasetSwitchInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDatasetSwitchInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDatasetSwitchInfoResponse>(await this.callApi(params, req, runtime), new QueryDatasetSwitchInfoResponse({}));
    } else {
      return $dara.cast<QueryDatasetSwitchInfoResponse>(await this.execute(params, req, runtime), new QueryDatasetSwitchInfoResponse({}));
    }

  }

  /**
   * 获取指定数据集的行级权限开关状态。
   * 
   * @param request - QueryDatasetSwitchInfoRequest
   * @returns QueryDatasetSwitchInfoResponse
   */
  async queryDatasetSwitchInfo(request: QueryDatasetSwitchInfoRequest): Promise<QueryDatasetSwitchInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDatasetSwitchInfoWithOptions(request, runtime);
  }

  /**
   * The number of reports that are currently embedded.
   * 
   * @param request - QueryEmbeddedInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEmbeddedInfoResponse
   */
  async queryEmbeddedInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<QueryEmbeddedInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "QueryEmbeddedInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryEmbeddedInfoResponse>(await this.callApi(params, req, runtime), new QueryEmbeddedInfoResponse({}));
    } else {
      return $dara.cast<QueryEmbeddedInfoResponse>(await this.execute(params, req, runtime), new QueryEmbeddedInfoResponse({}));
    }

  }

  /**
   * The number of reports that are currently embedded.
   * @returns QueryEmbeddedInfoResponse
   */
  async queryEmbeddedInfo(): Promise<QueryEmbeddedInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEmbeddedInfoWithOptions(runtime);
  }

  /**
   * Queries whether embedding is enabled for a report.
   * 
   * @param request - QueryEmbeddedStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEmbeddedStatusResponse
   */
  async queryEmbeddedStatusWithOptions(request: QueryEmbeddedStatusRequest, runtime: $dara.RuntimeOptions): Promise<QueryEmbeddedStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEmbeddedStatus",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryEmbeddedStatusResponse>(await this.callApi(params, req, runtime), new QueryEmbeddedStatusResponse({}));
    } else {
      return $dara.cast<QueryEmbeddedStatusResponse>(await this.execute(params, req, runtime), new QueryEmbeddedStatusResponse({}));
    }

  }

  /**
   * Queries whether embedding is enabled for a report.
   * 
   * @param request - QueryEmbeddedStatusRequest
   * @returns QueryEmbeddedStatusResponse
   */
  async queryEmbeddedStatus(request: QueryEmbeddedStatusRequest): Promise<QueryEmbeddedStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEmbeddedStatusWithOptions(request, runtime);
  }

  /**
   * 查看用户有哪些数据集和分析主题的问数授权
   * 
   * @param request - QueryLlmCubeWithThemeListByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryLlmCubeWithThemeListByUserIdResponse
   */
  async queryLlmCubeWithThemeListByUserIdWithOptions(request: QueryLlmCubeWithThemeListByUserIdRequest, runtime: $dara.RuntimeOptions): Promise<QueryLlmCubeWithThemeListByUserIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryLlmCubeWithThemeListByUserId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryLlmCubeWithThemeListByUserIdResponse>(await this.callApi(params, req, runtime), new QueryLlmCubeWithThemeListByUserIdResponse({}));
    } else {
      return $dara.cast<QueryLlmCubeWithThemeListByUserIdResponse>(await this.execute(params, req, runtime), new QueryLlmCubeWithThemeListByUserIdResponse({}));
    }

  }

  /**
   * 查看用户有哪些数据集和分析主题的问数授权
   * 
   * @param request - QueryLlmCubeWithThemeListByUserIdRequest
   * @returns QueryLlmCubeWithThemeListByUserIdResponse
   */
  async queryLlmCubeWithThemeListByUserId(request: QueryLlmCubeWithThemeListByUserIdRequest): Promise<QueryLlmCubeWithThemeListByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryLlmCubeWithThemeListByUserIdWithOptions(request, runtime);
  }

  /**
   * Retrieve Configuration Information for a Specified Organization Role
   * 
   * @param request - QueryOrganizationRoleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrganizationRoleConfigResponse
   */
  async queryOrganizationRoleConfigWithOptions(request: QueryOrganizationRoleConfigRequest, runtime: $dara.RuntimeOptions): Promise<QueryOrganizationRoleConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryOrganizationRoleConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryOrganizationRoleConfigResponse>(await this.callApi(params, req, runtime), new QueryOrganizationRoleConfigResponse({}));
    } else {
      return $dara.cast<QueryOrganizationRoleConfigResponse>(await this.execute(params, req, runtime), new QueryOrganizationRoleConfigResponse({}));
    }

  }

  /**
   * Retrieve Configuration Information for a Specified Organization Role
   * 
   * @param request - QueryOrganizationRoleConfigRequest
   * @returns QueryOrganizationRoleConfigResponse
   */
  async queryOrganizationRoleConfig(request: QueryOrganizationRoleConfigRequest): Promise<QueryOrganizationRoleConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryOrganizationRoleConfigWithOptions(request, runtime);
  }

  /**
   * 获取当前组织下的工作空间列表信息。
   * 
   * @param request - QueryOrganizationWorkspaceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrganizationWorkspaceListResponse
   */
  async queryOrganizationWorkspaceListWithOptions(request: QueryOrganizationWorkspaceListRequest, runtime: $dara.RuntimeOptions): Promise<QueryOrganizationWorkspaceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryOrganizationWorkspaceList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryOrganizationWorkspaceListResponse>(await this.callApi(params, req, runtime), new QueryOrganizationWorkspaceListResponse({}));
    } else {
      return $dara.cast<QueryOrganizationWorkspaceListResponse>(await this.execute(params, req, runtime), new QueryOrganizationWorkspaceListResponse({}));
    }

  }

  /**
   * 获取当前组织下的工作空间列表信息。
   * 
   * @param request - QueryOrganizationWorkspaceListRequest
   * @returns QueryOrganizationWorkspaceListResponse
   */
  async queryOrganizationWorkspaceList(request: QueryOrganizationWorkspaceListRequest): Promise<QueryOrganizationWorkspaceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryOrganizationWorkspaceListWithOptions(request, runtime);
  }

  /**
   * The Alibaba Cloud account name of the owner.
   * 
   * @param request - QueryReadableResourcesListByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReadableResourcesListByUserIdResponse
   */
  async queryReadableResourcesListByUserIdWithOptions(request: QueryReadableResourcesListByUserIdRequest, runtime: $dara.RuntimeOptions): Promise<QueryReadableResourcesListByUserIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryReadableResourcesListByUserId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryReadableResourcesListByUserIdResponse>(await this.callApi(params, req, runtime), new QueryReadableResourcesListByUserIdResponse({}));
    } else {
      return $dara.cast<QueryReadableResourcesListByUserIdResponse>(await this.execute(params, req, runtime), new QueryReadableResourcesListByUserIdResponse({}));
    }

  }

  /**
   * The Alibaba Cloud account name of the owner.
   * 
   * @param request - QueryReadableResourcesListByUserIdRequest
   * @returns QueryReadableResourcesListByUserIdResponse
   */
  async queryReadableResourcesListByUserId(request: QueryReadableResourcesListByUserIdRequest): Promise<QueryReadableResourcesListByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryReadableResourcesListByUserIdWithOptions(request, runtime);
  }

  /**
   * Queries report performance logs.
   * 
   * @param request - QueryReportPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReportPerformanceResponse
   */
  async queryReportPerformanceWithOptions(request: QueryReportPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<QueryReportPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.costTimeAvgMin)) {
      query["CostTimeAvgMin"] = request.costTimeAvgMin;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryReportPerformance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryReportPerformanceResponse>(await this.callApi(params, req, runtime), new QueryReportPerformanceResponse({}));
    } else {
      return $dara.cast<QueryReportPerformanceResponse>(await this.execute(params, req, runtime), new QueryReportPerformanceResponse({}));
    }

  }

  /**
   * Queries report performance logs.
   * 
   * @param request - QueryReportPerformanceRequest
   * @returns QueryReportPerformanceResponse
   */
  async queryReportPerformance(request: QueryReportPerformanceRequest): Promise<QueryReportPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryReportPerformanceWithOptions(request, runtime);
  }

  /**
   * Xiao Zhang
   * 
   * @param request - QueryShareListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryShareListResponse
   */
  async queryShareListWithOptions(request: QueryShareListRequest, runtime: $dara.RuntimeOptions): Promise<QueryShareListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryShareList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryShareListResponse>(await this.callApi(params, req, runtime), new QueryShareListResponse({}));
    } else {
      return $dara.cast<QueryShareListResponse>(await this.execute(params, req, runtime), new QueryShareListResponse({}));
    }

  }

  /**
   * Xiao Zhang
   * 
   * @param request - QueryShareListRequest
   * @returns QueryShareListResponse
   */
  async queryShareList(request: QueryShareListRequest): Promise<QueryShareListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryShareListWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the list of works authorized to a user.
   * 
   * @param request - QuerySharesToUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySharesToUserListResponse
   */
  async querySharesToUserListWithOptions(request: QuerySharesToUserListRequest, runtime: $dara.RuntimeOptions): Promise<QuerySharesToUserListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySharesToUserList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QuerySharesToUserListResponse>(await this.callApi(params, req, runtime), new QuerySharesToUserListResponse({}));
    } else {
      return $dara.cast<QuerySharesToUserListResponse>(await this.execute(params, req, runtime), new QuerySharesToUserListResponse({}));
    }

  }

  /**
   * You can call this operation to query the list of works authorized to a user.
   * 
   * @param request - QuerySharesToUserListRequest
   * @returns QuerySharesToUserListResponse
   */
  async querySharesToUserList(request: QuerySharesToUserListRequest): Promise<QuerySharesToUserListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySharesToUserListWithOptions(request, runtime);
  }

  /**
   * 查看用户是否有某个智能问数数据集权限
   * 
   * @param request - QuerySmartqPermissionByCubeIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmartqPermissionByCubeIdResponse
   */
  async querySmartqPermissionByCubeIdWithOptions(request: QuerySmartqPermissionByCubeIdRequest, runtime: $dara.RuntimeOptions): Promise<QuerySmartqPermissionByCubeIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmartqPermissionByCubeId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QuerySmartqPermissionByCubeIdResponse>(await this.callApi(params, req, runtime), new QuerySmartqPermissionByCubeIdResponse({}));
    } else {
      return $dara.cast<QuerySmartqPermissionByCubeIdResponse>(await this.execute(params, req, runtime), new QuerySmartqPermissionByCubeIdResponse({}));
    }

  }

  /**
   * 查看用户是否有某个智能问数数据集权限
   * 
   * @param request - QuerySmartqPermissionByCubeIdRequest
   * @returns QuerySmartqPermissionByCubeIdResponse
   */
  async querySmartqPermissionByCubeId(request: QuerySmartqPermissionByCubeIdRequest): Promise<QuerySmartqPermissionByCubeIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmartqPermissionByCubeIdWithOptions(request, runtime);
  }

  /**
   * auditing
   * 
   * @param request - QueryTicketInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTicketInfoResponse
   */
  async queryTicketInfoWithOptions(request: QueryTicketInfoRequest, runtime: $dara.RuntimeOptions): Promise<QueryTicketInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTicketInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryTicketInfoResponse>(await this.callApi(params, req, runtime), new QueryTicketInfoResponse({}));
    } else {
      return $dara.cast<QueryTicketInfoResponse>(await this.execute(params, req, runtime), new QueryTicketInfoResponse({}));
    }

  }

  /**
   * auditing
   * 
   * @param request - QueryTicketInfoRequest
   * @returns QueryTicketInfoResponse
   */
  async queryTicketInfo(request: QueryTicketInfoRequest): Promise<QueryTicketInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTicketInfoWithOptions(request, runtime);
  }

  /**
   * You can this operation to obtain information about child user groups under a specified parent user group.
   * 
   * @param request - QueryUserGroupListByParentIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserGroupListByParentIdResponse
   */
  async queryUserGroupListByParentIdWithOptions(request: QueryUserGroupListByParentIdRequest, runtime: $dara.RuntimeOptions): Promise<QueryUserGroupListByParentIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.parentUserGroupId)) {
      query["ParentUserGroupId"] = request.parentUserGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserGroupListByParentId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryUserGroupListByParentIdResponse>(await this.callApi(params, req, runtime), new QueryUserGroupListByParentIdResponse({}));
    } else {
      return $dara.cast<QueryUserGroupListByParentIdResponse>(await this.execute(params, req, runtime), new QueryUserGroupListByParentIdResponse({}));
    }

  }

  /**
   * You can this operation to obtain information about child user groups under a specified parent user group.
   * 
   * @param request - QueryUserGroupListByParentIdRequest
   * @returns QueryUserGroupListByParentIdResponse
   */
  async queryUserGroupListByParentId(request: QueryUserGroupListByParentIdRequest): Promise<QueryUserGroupListByParentIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserGroupListByParentIdWithOptions(request, runtime);
  }

  /**
   * 获取用户组下的成员列表信息。
   * 
   * @param request - QueryUserGroupMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserGroupMemberResponse
   */
  async queryUserGroupMemberWithOptions(request: QueryUserGroupMemberRequest, runtime: $dara.RuntimeOptions): Promise<QueryUserGroupMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserGroupMember",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryUserGroupMemberResponse>(await this.callApi(params, req, runtime), new QueryUserGroupMemberResponse({}));
    } else {
      return $dara.cast<QueryUserGroupMemberResponse>(await this.execute(params, req, runtime), new QueryUserGroupMemberResponse({}));
    }

  }

  /**
   * 获取用户组下的成员列表信息。
   * 
   * @param request - QueryUserGroupMemberRequest
   * @returns QueryUserGroupMemberResponse
   */
  async queryUserGroupMember(request: QueryUserGroupMemberRequest): Promise<QueryUserGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserGroupMemberWithOptions(request, runtime);
  }

  /**
   * Queries user information based on the Alibaba Cloud ID or Alibaba Cloud account name.
   * 
   * @param request - QueryUserInfoByAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserInfoByAccountResponse
   */
  async queryUserInfoByAccountWithOptions(request: QueryUserInfoByAccountRequest, runtime: $dara.RuntimeOptions): Promise<QueryUserInfoByAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.parentAccountName)) {
      query["ParentAccountName"] = request.parentAccountName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserInfoByAccount",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryUserInfoByAccountResponse>(await this.callApi(params, req, runtime), new QueryUserInfoByAccountResponse({}));
    } else {
      return $dara.cast<QueryUserInfoByAccountResponse>(await this.execute(params, req, runtime), new QueryUserInfoByAccountResponse({}));
    }

  }

  /**
   * Queries user information based on the Alibaba Cloud ID or Alibaba Cloud account name.
   * 
   * @param request - QueryUserInfoByAccountRequest
   * @returns QueryUserInfoByAccountResponse
   */
  async queryUserInfoByAccount(request: QueryUserInfoByAccountRequest): Promise<QueryUserInfoByAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserInfoByAccountWithOptions(request, runtime);
  }

  /**
   * Queries user information based on the user ID.
   * 
   * @param request - QueryUserInfoByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserInfoByUserIdResponse
   */
  async queryUserInfoByUserIdWithOptions(request: QueryUserInfoByUserIdRequest, runtime: $dara.RuntimeOptions): Promise<QueryUserInfoByUserIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserInfoByUserId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryUserInfoByUserIdResponse>(await this.callApi(params, req, runtime), new QueryUserInfoByUserIdResponse({}));
    } else {
      return $dara.cast<QueryUserInfoByUserIdResponse>(await this.execute(params, req, runtime), new QueryUserInfoByUserIdResponse({}));
    }

  }

  /**
   * Queries user information based on the user ID.
   * 
   * @param request - QueryUserInfoByUserIdRequest
   * @returns QueryUserInfoByUserIdResponse
   */
  async queryUserInfoByUserId(request: QueryUserInfoByUserIdRequest): Promise<QueryUserInfoByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserInfoByUserIdWithOptions(request, runtime);
  }

  /**
   * 查询组织成员列表信息。
   * 
   * @param request - QueryUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserListResponse
   */
  async queryUserListWithOptions(request: QueryUserListRequest, runtime: $dara.RuntimeOptions): Promise<QueryUserListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryUserListResponse>(await this.callApi(params, req, runtime), new QueryUserListResponse({}));
    } else {
      return $dara.cast<QueryUserListResponse>(await this.execute(params, req, runtime), new QueryUserListResponse({}));
    }

  }

  /**
   * 查询组织成员列表信息。
   * 
   * @param request - QueryUserListRequest
   * @returns QueryUserListResponse
   */
  async queryUserList(request: QueryUserListRequest): Promise<QueryUserListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserListWithOptions(request, runtime);
  }

  /**
   * 获取指定工作空间成员的预置空间角色信息。
   * 
   * @param request - QueryUserRoleInfoInWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserRoleInfoInWorkspaceResponse
   */
  async queryUserRoleInfoInWorkspaceWithOptions(request: QueryUserRoleInfoInWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<QueryUserRoleInfoInWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserRoleInfoInWorkspace",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryUserRoleInfoInWorkspaceResponse>(await this.callApi(params, req, runtime), new QueryUserRoleInfoInWorkspaceResponse({}));
    } else {
      return $dara.cast<QueryUserRoleInfoInWorkspaceResponse>(await this.execute(params, req, runtime), new QueryUserRoleInfoInWorkspaceResponse({}));
    }

  }

  /**
   * 获取指定工作空间成员的预置空间角色信息。
   * 
   * @param request - QueryUserRoleInfoInWorkspaceRequest
   * @returns QueryUserRoleInfoInWorkspaceResponse
   */
  async queryUserRoleInfoInWorkspace(request: QueryUserRoleInfoInWorkspaceRequest): Promise<QueryUserRoleInfoInWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserRoleInfoInWorkspaceWithOptions(request, runtime);
  }

  /**
   * Queries the metadata list of member tags in an organization.
   * 
   * @param request - QueryUserTagMetaListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserTagMetaListResponse
   */
  async queryUserTagMetaListWithOptions(runtime: $dara.RuntimeOptions): Promise<QueryUserTagMetaListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserTagMetaList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryUserTagMetaListResponse>(await this.callApi(params, req, runtime), new QueryUserTagMetaListResponse({}));
    } else {
      return $dara.cast<QueryUserTagMetaListResponse>(await this.execute(params, req, runtime), new QueryUserTagMetaListResponse({}));
    }

  }

  /**
   * Queries the metadata list of member tags in an organization.
   * @returns QueryUserTagMetaListResponse
   */
  async queryUserTagMetaList(): Promise<QueryUserTagMetaListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserTagMetaListWithOptions(runtime);
  }

  /**
   * Query the list of specific user tag values.
   * 
   * @param request - QueryUserTagValueListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserTagValueListResponse
   */
  async queryUserTagValueListWithOptions(request: QueryUserTagValueListRequest, runtime: $dara.RuntimeOptions): Promise<QueryUserTagValueListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserTagValueList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryUserTagValueListResponse>(await this.callApi(params, req, runtime), new QueryUserTagValueListResponse({}));
    } else {
      return $dara.cast<QueryUserTagValueListResponse>(await this.execute(params, req, runtime), new QueryUserTagValueListResponse({}));
    }

  }

  /**
   * Query the list of specific user tag values.
   * 
   * @param request - QueryUserTagValueListRequest
   * @returns QueryUserTagValueListResponse
   */
  async queryUserTagValueList(request: QueryUserTagValueListRequest): Promise<QueryUserTagValueListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserTagValueListWithOptions(request, runtime);
  }

  /**
   * 获取报表详情
   * 
   * @param request - QueryWorksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorksResponse
   */
  async queryWorksWithOptions(request: QueryWorksRequest, runtime: $dara.RuntimeOptions): Promise<QueryWorksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWorks",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryWorksResponse>(await this.callApi(params, req, runtime), new QueryWorksResponse({}));
    } else {
      return $dara.cast<QueryWorksResponse>(await this.execute(params, req, runtime), new QueryWorksResponse({}));
    }

  }

  /**
   * 获取报表详情
   * 
   * @param request - QueryWorksRequest
   * @returns QueryWorksResponse
   */
  async queryWorks(request: QueryWorksRequest): Promise<QueryWorksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWorksWithOptions(request, runtime);
  }

  /**
   * abcd****
   * 
   * @param request - QueryWorksBloodRelationshipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorksBloodRelationshipResponse
   */
  async queryWorksBloodRelationshipWithOptions(request: QueryWorksBloodRelationshipRequest, runtime: $dara.RuntimeOptions): Promise<QueryWorksBloodRelationshipResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWorksBloodRelationship",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryWorksBloodRelationshipResponse>(await this.callApi(params, req, runtime), new QueryWorksBloodRelationshipResponse({}));
    } else {
      return $dara.cast<QueryWorksBloodRelationshipResponse>(await this.execute(params, req, runtime), new QueryWorksBloodRelationshipResponse({}));
    }

  }

  /**
   * abcd****
   * 
   * @param request - QueryWorksBloodRelationshipRequest
   * @returns QueryWorksBloodRelationshipResponse
   */
  async queryWorksBloodRelationship(request: QueryWorksBloodRelationshipRequest): Promise<QueryWorksBloodRelationshipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWorksBloodRelationshipWithOptions(request, runtime);
  }

  /**
   * The total number of rows in the table.
   * 
   * @param request - QueryWorksByOrganizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorksByOrganizationResponse
   */
  async queryWorksByOrganizationWithOptions(request: QueryWorksByOrganizationRequest, runtime: $dara.RuntimeOptions): Promise<QueryWorksByOrganizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.thirdPartAuthFlag)) {
      query["ThirdPartAuthFlag"] = request.thirdPartAuthFlag;
    }

    if (!$dara.isNull(request.worksType)) {
      query["WorksType"] = request.worksType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWorksByOrganization",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryWorksByOrganizationResponse>(await this.callApi(params, req, runtime), new QueryWorksByOrganizationResponse({}));
    } else {
      return $dara.cast<QueryWorksByOrganizationResponse>(await this.execute(params, req, runtime), new QueryWorksByOrganizationResponse({}));
    }

  }

  /**
   * The total number of rows in the table.
   * 
   * @param request - QueryWorksByOrganizationRequest
   * @returns QueryWorksByOrganizationResponse
   */
  async queryWorksByOrganization(request: QueryWorksByOrganizationRequest): Promise<QueryWorksByOrganizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWorksByOrganizationWithOptions(request, runtime);
  }

  /**
   * The name of the directory.
   * 
   * @param request - QueryWorksByWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorksByWorkspaceResponse
   */
  async queryWorksByWorkspaceWithOptions(request: QueryWorksByWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<QueryWorksByWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.thirdPartAuthFlag)) {
      query["ThirdPartAuthFlag"] = request.thirdPartAuthFlag;
    }

    if (!$dara.isNull(request.worksType)) {
      query["WorksType"] = request.worksType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWorksByWorkspace",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryWorksByWorkspaceResponse>(await this.callApi(params, req, runtime), new QueryWorksByWorkspaceResponse({}));
    } else {
      return $dara.cast<QueryWorksByWorkspaceResponse>(await this.execute(params, req, runtime), new QueryWorksByWorkspaceResponse({}));
    }

  }

  /**
   * The name of the directory.
   * 
   * @param request - QueryWorksByWorkspaceRequest
   * @returns QueryWorksByWorkspaceResponse
   */
  async queryWorksByWorkspace(request: QueryWorksByWorkspaceRequest): Promise<QueryWorksByWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWorksByWorkspaceWithOptions(request, runtime);
  }

  /**
   * Get Configuration Information for a Specified Workspace Role
   * 
   * @param request - QueryWorkspaceRoleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorkspaceRoleConfigResponse
   */
  async queryWorkspaceRoleConfigWithOptions(request: QueryWorkspaceRoleConfigRequest, runtime: $dara.RuntimeOptions): Promise<QueryWorkspaceRoleConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWorkspaceRoleConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryWorkspaceRoleConfigResponse>(await this.callApi(params, req, runtime), new QueryWorkspaceRoleConfigResponse({}));
    } else {
      return $dara.cast<QueryWorkspaceRoleConfigResponse>(await this.execute(params, req, runtime), new QueryWorkspaceRoleConfigResponse({}));
    }

  }

  /**
   * Get Configuration Information for a Specified Workspace Role
   * 
   * @param request - QueryWorkspaceRoleConfigRequest
   * @returns QueryWorkspaceRoleConfigResponse
   */
  async queryWorkspaceRoleConfig(request: QueryWorkspaceRoleConfigRequest): Promise<QueryWorkspaceRoleConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWorkspaceRoleConfigWithOptions(request, runtime);
  }

  /**
   * 查询指定工作空间下的成员列表信息。
   * 
   * @param request - QueryWorkspaceUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorkspaceUserListResponse
   */
  async queryWorkspaceUserListWithOptions(request: QueryWorkspaceUserListRequest, runtime: $dara.RuntimeOptions): Promise<QueryWorkspaceUserListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWorkspaceUserList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryWorkspaceUserListResponse>(await this.callApi(params, req, runtime), new QueryWorkspaceUserListResponse({}));
    } else {
      return $dara.cast<QueryWorkspaceUserListResponse>(await this.execute(params, req, runtime), new QueryWorkspaceUserListResponse({}));
    }

  }

  /**
   * 查询指定工作空间下的成员列表信息。
   * 
   * @param request - QueryWorkspaceUserListRequest
   * @returns QueryWorkspaceUserListResponse
   */
  async queryWorkspaceUserList(request: QueryWorkspaceUserListRequest): Promise<QueryWorkspaceUserListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWorkspaceUserListWithOptions(request, runtime);
  }

  /**
   * You can customize the callback interface for approval processes to process Quick BI approval processes.
   * 
   * @param request - ResultCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResultCallbackResponse
   */
  async resultCallbackWithOptions(request: ResultCallbackRequest, runtime: $dara.RuntimeOptions): Promise<ResultCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.handleReason)) {
      query["HandleReason"] = request.handleReason;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResultCallback",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResultCallbackResponse>(await this.callApi(params, req, runtime), new ResultCallbackResponse({}));
    } else {
      return $dara.cast<ResultCallbackResponse>(await this.execute(params, req, runtime), new ResultCallbackResponse({}));
    }

  }

  /**
   * You can customize the callback interface for approval processes to process Quick BI approval processes.
   * 
   * @param request - ResultCallbackRequest
   * @returns ResultCallbackResponse
   */
  async resultCallback(request: ResultCallbackRequest): Promise<ResultCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resultCallbackWithOptions(request, runtime);
  }

  /**
   * Add the user\\"s collection data works.
   * 
   * @param request - SaveFavoritesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveFavoritesResponse
   */
  async saveFavoritesWithOptions(request: SaveFavoritesRequest, runtime: $dara.RuntimeOptions): Promise<SaveFavoritesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveFavorites",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SaveFavoritesResponse>(await this.callApi(params, req, runtime), new SaveFavoritesResponse({}));
    } else {
      return $dara.cast<SaveFavoritesResponse>(await this.execute(params, req, runtime), new SaveFavoritesResponse({}));
    }

  }

  /**
   * Add the user\\"s collection data works.
   * 
   * @param request - SaveFavoritesRequest
   * @returns SaveFavoritesResponse
   */
  async saveFavorites(request: SaveFavoritesRequest): Promise<SaveFavoritesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveFavoritesWithOptions(request, runtime);
  }

  /**
   * 设置行列权限的额外配置
   * 
   * @param request - SetDataLevelPermissionExtraConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDataLevelPermissionExtraConfigResponse
   */
  async setDataLevelPermissionExtraConfigWithOptions(request: SetDataLevelPermissionExtraConfigRequest, runtime: $dara.RuntimeOptions): Promise<SetDataLevelPermissionExtraConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.missHitPolicy)) {
      query["MissHitPolicy"] = request.missHitPolicy;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDataLevelPermissionExtraConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetDataLevelPermissionExtraConfigResponse>(await this.callApi(params, req, runtime), new SetDataLevelPermissionExtraConfigResponse({}));
    } else {
      return $dara.cast<SetDataLevelPermissionExtraConfigResponse>(await this.execute(params, req, runtime), new SetDataLevelPermissionExtraConfigResponse({}));
    }

  }

  /**
   * 设置行列权限的额外配置
   * 
   * @param request - SetDataLevelPermissionExtraConfigRequest
   * @returns SetDataLevelPermissionExtraConfigResponse
   */
  async setDataLevelPermissionExtraConfig(request: SetDataLevelPermissionExtraConfigRequest): Promise<SetDataLevelPermissionExtraConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDataLevelPermissionExtraConfigWithOptions(request, runtime);
  }

  /**
   * 设置单条数据集行列权限配置信息（新增和更新）
   * 
   * @param request - SetDataLevelPermissionRuleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDataLevelPermissionRuleConfigResponse
   */
  async setDataLevelPermissionRuleConfigWithOptions(request: SetDataLevelPermissionRuleConfigRequest, runtime: $dara.RuntimeOptions): Promise<SetDataLevelPermissionRuleConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleModel)) {
      query["RuleModel"] = request.ruleModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDataLevelPermissionRuleConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetDataLevelPermissionRuleConfigResponse>(await this.callApi(params, req, runtime), new SetDataLevelPermissionRuleConfigResponse({}));
    } else {
      return $dara.cast<SetDataLevelPermissionRuleConfigResponse>(await this.execute(params, req, runtime), new SetDataLevelPermissionRuleConfigResponse({}));
    }

  }

  /**
   * 设置单条数据集行列权限配置信息（新增和更新）
   * 
   * @param request - SetDataLevelPermissionRuleConfigRequest
   * @returns SetDataLevelPermissionRuleConfigResponse
   */
  async setDataLevelPermissionRuleConfig(request: SetDataLevelPermissionRuleConfigRequest): Promise<SetDataLevelPermissionRuleConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDataLevelPermissionRuleConfigWithOptions(request, runtime);
  }

  /**
   * Sets the whitelist for the specified row-level permissions.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.
   * 
   * @param request - SetDataLevelPermissionWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDataLevelPermissionWhiteListResponse
   */
  async setDataLevelPermissionWhiteListWithOptions(request: SetDataLevelPermissionWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<SetDataLevelPermissionWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.whiteListModel)) {
      query["WhiteListModel"] = request.whiteListModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDataLevelPermissionWhiteList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetDataLevelPermissionWhiteListResponse>(await this.callApi(params, req, runtime), new SetDataLevelPermissionWhiteListResponse({}));
    } else {
      return $dara.cast<SetDataLevelPermissionWhiteListResponse>(await this.execute(params, req, runtime), new SetDataLevelPermissionWhiteListResponse({}));
    }

  }

  /**
   * Sets the whitelist for the specified row-level permissions.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.
   * 
   * @param request - SetDataLevelPermissionWhiteListRequest
   * @returns SetDataLevelPermissionWhiteListResponse
   */
  async setDataLevelPermissionWhiteList(request: SetDataLevelPermissionWhiteListRequest): Promise<SetDataLevelPermissionWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDataLevelPermissionWhiteListWithOptions(request, runtime);
  }

  /**
   * 将指定用户的问数权限同步给其他用户
   * 
   * @param request - SmartqAuthTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmartqAuthTransferResponse
   */
  async smartqAuthTransferWithOptions(request: SmartqAuthTransferRequest, runtime: $dara.RuntimeOptions): Promise<SmartqAuthTransferResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.originUserId)) {
      query["OriginUserId"] = request.originUserId;
    }

    if (!$dara.isNull(request.targetUserIds)) {
      query["TargetUserIds"] = request.targetUserIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SmartqAuthTransfer",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SmartqAuthTransferResponse>(await this.callApi(params, req, runtime), new SmartqAuthTransferResponse({}));
    } else {
      return $dara.cast<SmartqAuthTransferResponse>(await this.execute(params, req, runtime), new SmartqAuthTransferResponse({}));
    }

  }

  /**
   * 将指定用户的问数权限同步给其他用户
   * 
   * @param request - SmartqAuthTransferRequest
   * @returns SmartqAuthTransferResponse
   */
  async smartqAuthTransfer(request: SmartqAuthTransferRequest): Promise<SmartqAuthTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.smartqAuthTransferWithOptions(request, runtime);
  }

  /**
   * 批量管理智能问数的授权
   * 
   * @param request - SmartqAuthorizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmartqAuthorizeResponse
   */
  async smartqAuthorizeWithOptions(request: SmartqAuthorizeRequest, runtime: $dara.RuntimeOptions): Promise<SmartqAuthorizeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.expireDay)) {
      query["ExpireDay"] = request.expireDay;
    }

    if (!$dara.isNull(request.llmCubeThemes)) {
      query["LlmCubeThemes"] = request.llmCubeThemes;
    }

    if (!$dara.isNull(request.llmCubes)) {
      query["LlmCubes"] = request.llmCubes;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SmartqAuthorize",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SmartqAuthorizeResponse>(await this.callApi(params, req, runtime), new SmartqAuthorizeResponse({}));
    } else {
      return $dara.cast<SmartqAuthorizeResponse>(await this.execute(params, req, runtime), new SmartqAuthorizeResponse({}));
    }

  }

  /**
   * 批量管理智能问数的授权
   * 
   * @param request - SmartqAuthorizeRequest
   * @returns SmartqAuthorizeResponse
   */
  async smartqAuthorize(request: SmartqAuthorizeRequest): Promise<SmartqAuthorizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.smartqAuthorizeWithOptions(request, runtime);
  }

  /**
   * 问数能力开放
   * 
   * @param request - SmartqQueryAbilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmartqQueryAbilityResponse
   */
  async smartqQueryAbilityWithOptions(request: SmartqQueryAbilityRequest, runtime: $dara.RuntimeOptions): Promise<SmartqQueryAbilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userQuestion)) {
      query["UserQuestion"] = request.userQuestion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SmartqQueryAbility",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SmartqQueryAbilityResponse>(await this.callApi(params, req, runtime), new SmartqQueryAbilityResponse({}));
    } else {
      return $dara.cast<SmartqQueryAbilityResponse>(await this.execute(params, req, runtime), new SmartqQueryAbilityResponse({}));
    }

  }

  /**
   * 问数能力开放
   * 
   * @param request - SmartqQueryAbilityRequest
   * @returns SmartqQueryAbilityResponse
   */
  async smartqQueryAbility(request: SmartqQueryAbilityRequest): Promise<SmartqQueryAbilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.smartqQueryAbilityWithOptions(request, runtime);
  }

  /**
   * Indicates whether the request is successful. Valid values:
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @remarks
   * The execution result of the interface. Valid values:
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @param request - UpdateDataLevelPermissionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataLevelPermissionStatusResponse
   */
  async updateDataLevelPermissionStatusWithOptions(request: UpdateDataLevelPermissionStatusRequest, runtime: $dara.RuntimeOptions): Promise<UpdateDataLevelPermissionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.isOpen)) {
      query["IsOpen"] = request.isOpen;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataLevelPermissionStatus",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDataLevelPermissionStatusResponse>(await this.callApi(params, req, runtime), new UpdateDataLevelPermissionStatusResponse({}));
    } else {
      return $dara.cast<UpdateDataLevelPermissionStatusResponse>(await this.execute(params, req, runtime), new UpdateDataLevelPermissionStatusResponse({}));
    }

  }

  /**
   * Indicates whether the request is successful. Valid values:
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @remarks
   * The execution result of the interface. Valid values:
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @param request - UpdateDataLevelPermissionStatusRequest
   * @returns UpdateDataLevelPermissionStatusResponse
   */
  async updateDataLevelPermissionStatus(request: UpdateDataLevelPermissionStatusRequest): Promise<UpdateDataLevelPermissionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLevelPermissionStatusWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
   * 
   * @param request - UpdateEmbeddedStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEmbeddedStatusResponse
   */
  async updateEmbeddedStatusWithOptions(request: UpdateEmbeddedStatusRequest, runtime: $dara.RuntimeOptions): Promise<UpdateEmbeddedStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.thirdPartAuthFlag)) {
      query["ThirdPartAuthFlag"] = request.thirdPartAuthFlag;
    }

    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEmbeddedStatus",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateEmbeddedStatusResponse>(await this.callApi(params, req, runtime), new UpdateEmbeddedStatusResponse({}));
    } else {
      return $dara.cast<UpdateEmbeddedStatusResponse>(await this.execute(params, req, runtime), new UpdateEmbeddedStatusResponse({}));
    }

  }

  /**
   * The ID of the request.
   * 
   * @param request - UpdateEmbeddedStatusRequest
   * @returns UpdateEmbeddedStatusResponse
   */
  async updateEmbeddedStatus(request: UpdateEmbeddedStatusRequest): Promise<UpdateEmbeddedStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEmbeddedStatusWithOptions(request, runtime);
  }

  /**
   * 更新三方嵌入ticket的票据数量
   * 
   * @param request - UpdateTicketNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTicketNumResponse
   */
  async updateTicketNumWithOptions(request: UpdateTicketNumRequest, runtime: $dara.RuntimeOptions): Promise<UpdateTicketNumResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    if (!$dara.isNull(request.ticketNum)) {
      query["TicketNum"] = request.ticketNum;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTicketNum",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateTicketNumResponse>(await this.callApi(params, req, runtime), new UpdateTicketNumResponse({}));
    } else {
      return $dara.cast<UpdateTicketNumResponse>(await this.execute(params, req, runtime), new UpdateTicketNumResponse({}));
    }

  }

  /**
   * 更新三方嵌入ticket的票据数量
   * 
   * @param request - UpdateTicketNumRequest
   * @returns UpdateTicketNumResponse
   */
  async updateTicketNum(request: UpdateTicketNumRequest): Promise<UpdateTicketNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTicketNumWithOptions(request, runtime);
  }

  /**
   * Updates the information of a specified member in an organization.
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adminUser)) {
      query["AdminUser"] = request.adminUser;
    }

    if (!$dara.isNull(request.authAdminUser)) {
      query["AuthAdminUser"] = request.authAdminUser;
    }

    if (!$dara.isNull(request.isDeleted)) {
      query["IsDeleted"] = request.isDeleted;
    }

    if (!$dara.isNull(request.nickName)) {
      query["NickName"] = request.nickName;
    }

    if (!$dara.isNull(request.roleIds)) {
      query["RoleIds"] = request.roleIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
    } else {
      return $dara.cast<UpdateUserResponse>(await this.execute(params, req, runtime), new UpdateUserResponse({}));
    }

  }

  /**
   * Updates the information of a specified member in an organization.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * Updates information about a specified user group in an organization.
   * 
   * @param request - UpdateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroupWithOptions(request: UpdateUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userGroupDescription)) {
      query["UserGroupDescription"] = request.userGroupDescription;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!$dara.isNull(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserGroup",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateUserGroupResponse>(await this.callApi(params, req, runtime), new UpdateUserGroupResponse({}));
    } else {
      return $dara.cast<UpdateUserGroupResponse>(await this.execute(params, req, runtime), new UpdateUserGroupResponse({}));
    }

  }

  /**
   * Updates information about a specified user group in an organization.
   * 
   * @param request - UpdateUserGroupRequest
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroup(request: UpdateUserGroupRequest): Promise<UpdateUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserGroupWithOptions(request, runtime);
  }

  /**
   * Used for updating the metadata of organization member tags
   * 
   * @param request - UpdateUserTagMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserTagMetaResponse
   */
  async updateUserTagMetaWithOptions(request: UpdateUserTagMetaRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUserTagMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tagDescription)) {
      query["TagDescription"] = request.tagDescription;
    }

    if (!$dara.isNull(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserTagMeta",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateUserTagMetaResponse>(await this.callApi(params, req, runtime), new UpdateUserTagMetaResponse({}));
    } else {
      return $dara.cast<UpdateUserTagMetaResponse>(await this.execute(params, req, runtime), new UpdateUserTagMetaResponse({}));
    }

  }

  /**
   * Used for updating the metadata of organization member tags
   * 
   * @param request - UpdateUserTagMetaRequest
   * @returns UpdateUserTagMetaResponse
   */
  async updateUserTagMeta(request: UpdateUserTagMetaRequest): Promise<UpdateUserTagMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserTagMetaWithOptions(request, runtime);
  }

  /**
   * Update the tag value of an organization member.
   * 
   * @param request - UpdateUserTagValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserTagValueResponse
   */
  async updateUserTagValueWithOptions(request: UpdateUserTagValueRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUserTagValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    if (!$dara.isNull(request.tagValue)) {
      query["TagValue"] = request.tagValue;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserTagValue",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateUserTagValueResponse>(await this.callApi(params, req, runtime), new UpdateUserTagValueResponse({}));
    } else {
      return $dara.cast<UpdateUserTagValueResponse>(await this.execute(params, req, runtime), new UpdateUserTagValueResponse({}));
    }

  }

  /**
   * Update the tag value of an organization member.
   * 
   * @param request - UpdateUserTagValueRequest
   * @returns UpdateUserTagValueResponse
   */
  async updateUserTagValue(request: UpdateUserTagValueRequest): Promise<UpdateUserTagValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserTagValueWithOptions(request, runtime);
  }

  /**
   * 修改工作空间下指定成员的角色，已有的角色会被覆盖
   * 
   * @param request - UpdateWorkspaceUserRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceUserRoleResponse
   */
  async updateWorkspaceUserRoleWithOptions(request: UpdateWorkspaceUserRoleRequest, runtime: $dara.RuntimeOptions): Promise<UpdateWorkspaceUserRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.roleIds)) {
      query["RoleIds"] = request.roleIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspaceUserRole",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateWorkspaceUserRoleResponse>(await this.callApi(params, req, runtime), new UpdateWorkspaceUserRoleResponse({}));
    } else {
      return $dara.cast<UpdateWorkspaceUserRoleResponse>(await this.execute(params, req, runtime), new UpdateWorkspaceUserRoleResponse({}));
    }

  }

  /**
   * 修改工作空间下指定成员的角色，已有的角色会被覆盖
   * 
   * @param request - UpdateWorkspaceUserRoleRequest
   * @returns UpdateWorkspaceUserRoleResponse
   */
  async updateWorkspaceUserRole(request: UpdateWorkspaceUserRoleRequest): Promise<UpdateWorkspaceUserRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkspaceUserRoleWithOptions(request, runtime);
  }

  /**
   * 批量更新工作空间成员的角色信息，已有角色会被覆盖
   * 
   * @param request - UpdateWorkspaceUsersRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceUsersRoleResponse
   */
  async updateWorkspaceUsersRoleWithOptions(request: UpdateWorkspaceUsersRoleRequest, runtime: $dara.RuntimeOptions): Promise<UpdateWorkspaceUsersRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspaceUsersRole",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateWorkspaceUsersRoleResponse>(await this.callApi(params, req, runtime), new UpdateWorkspaceUsersRoleResponse({}));
    } else {
      return $dara.cast<UpdateWorkspaceUsersRoleResponse>(await this.execute(params, req, runtime), new UpdateWorkspaceUsersRoleResponse({}));
    }

  }

  /**
   * 批量更新工作空间成员的角色信息，已有角色会被覆盖
   * 
   * @param request - UpdateWorkspaceUsersRoleRequest
   * @returns UpdateWorkspaceUsersRoleResponse
   */
  async updateWorkspaceUsersRole(request: UpdateWorkspaceUsersRoleRequest): Promise<UpdateWorkspaceUsersRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkspaceUsersRoleWithOptions(request, runtime);
  }

  /**
   * Make the user exit all user groups. This process is irreversible. Exercise caution when performing this operation.
   * 
   * @param request - WithdrawAllUserGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WithdrawAllUserGroupsResponse
   */
  async withdrawAllUserGroupsWithOptions(request: WithdrawAllUserGroupsRequest, runtime: $dara.RuntimeOptions): Promise<WithdrawAllUserGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WithdrawAllUserGroups",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<WithdrawAllUserGroupsResponse>(await this.callApi(params, req, runtime), new WithdrawAllUserGroupsResponse({}));
    } else {
      return $dara.cast<WithdrawAllUserGroupsResponse>(await this.execute(params, req, runtime), new WithdrawAllUserGroupsResponse({}));
    }

  }

  /**
   * Make the user exit all user groups. This process is irreversible. Exercise caution when performing this operation.
   * 
   * @param request - WithdrawAllUserGroupsRequest
   * @returns WithdrawAllUserGroupsResponse
   */
  async withdrawAllUserGroups(request: WithdrawAllUserGroupsRequest): Promise<WithdrawAllUserGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.withdrawAllUserGroupsWithOptions(request, runtime);
  }

}
