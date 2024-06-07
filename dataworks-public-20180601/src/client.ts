// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateManualDagRequest extends $tea.Model {
  bizdate?: string;
  dagPara?: string;
  flowName?: string;
  nodePara?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      dagPara: 'DagPara',
      flowName: 'FlowName',
      nodePara: 'NodePara',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'string',
      dagPara: 'string',
      flowName: 'string',
      nodePara: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManualDagResponseBody extends $tea.Model {
  requestId?: string;
  returnCode?: string;
  returnErrorSolution?: string;
  returnMessage?: string;
  returnValue?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      returnCode: 'ReturnCode',
      returnErrorSolution: 'ReturnErrorSolution',
      returnMessage: 'ReturnMessage',
      returnValue: 'ReturnValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      returnCode: 'string',
      returnErrorSolution: 'string',
      returnMessage: 'string',
      returnValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateManualDagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateManualDagResponseBody;
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
      body: CreateManualDagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileRequest extends $tea.Model {
  fileId?: number;
  projectId?: number;
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFileResponseBody;
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
      body: DeleteFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmrHiveTableRequest extends $tea.Model {
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmrHiveTableResponseBody extends $tea.Model {
  data?: DescribeEmrHiveTableResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeEmrHiveTableResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmrHiveTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEmrHiveTableResponseBody;
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
      body: DescribeEmrHiveTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiContextRequest extends $tea.Model {
  apiId?: number;
  apiStatus?: number;
  cacheKey?: string;
  forPrivateResGroup?: boolean;
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiStatus: 'ApiStatus',
      cacheKey: 'CacheKey',
      forPrivateResGroup: 'ForPrivateResGroup',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiStatus: 'number',
      cacheKey: 'string',
      forPrivateResGroup: 'boolean',
      verbose: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiContextResponseBody extends $tea.Model {
  data?: string;
  errCode?: string;
  errMsg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiContextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataServiceApiContextResponseBody;
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
      body: GetDataServiceApiContextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceContextUpdateEventResponseBody extends $tea.Model {
  data?: string;
  errCode?: string;
  errMsg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceContextUpdateEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataServiceContextUpdateEventResponseBody;
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
      body: GetDataServiceContextUpdateEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchValueRequest extends $tea.Model {
  switchName?: string;
  static names(): { [key: string]: string } {
    return {
      switchName: 'SwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchValueResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchValueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSwitchValueResponseBody;
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
      body: GetSwitchValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTimeMachineTaskRequest extends $tea.Model {
  taskId?: string;
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

export class GetTimeMachineTaskResponseBody extends $tea.Model {
  data?: GetTimeMachineTaskResponseBodyData;
  errCode?: string;
  errMsg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTimeMachineTaskResponseBodyData,
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTimeMachineTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTimeMachineTaskResponseBody;
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
      body: GetTimeMachineTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrHiveAuditLogsRequest extends $tea.Model {
  clusterId?: string;
  databaseName?: string;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrHiveAuditLogsResponseBody extends $tea.Model {
  data?: ListEmrHiveAuditLogsResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListEmrHiveAuditLogsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrHiveAuditLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEmrHiveAuditLogsResponseBody;
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
      body: ListEmrHiveAuditLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrHiveDatabasesRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrHiveDatabasesResponseBody extends $tea.Model {
  data?: ListEmrHiveDatabasesResponseBodyData[];
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListEmrHiveDatabasesResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrHiveDatabasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEmrHiveDatabasesResponseBody;
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
      body: ListEmrHiveDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrHiveTablesRequest extends $tea.Model {
  clusterId?: string;
  databaseName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrHiveTablesResponseBody extends $tea.Model {
  data?: ListEmrHiveTablesResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListEmrHiveTablesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrHiveTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEmrHiveTablesResponseBody;
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
      body: ListEmrHiveTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceIssueDataServiceAPIsRequest extends $tea.Model {
  bizDate?: string;
  ownerId?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  ruleCategory?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      ruleCategory: 'RuleCategory',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      ownerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      ruleCategory: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceIssueDataServiceAPIsResponseBody extends $tea.Model {
  data?: ListGovernanceIssueDataServiceAPIsResponseBodyData;
  dynamicErrorCode?: string;
  dynamicErrorMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dynamicErrorCode: 'DynamicErrorCode',
      dynamicErrorMessage: 'DynamicErrorMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListGovernanceIssueDataServiceAPIsResponseBodyData,
      dynamicErrorCode: 'string',
      dynamicErrorMessage: 'string',
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

export class ListGovernanceIssueDataServiceAPIsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGovernanceIssueDataServiceAPIsResponseBody;
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
      body: ListGovernanceIssueDataServiceAPIsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceIssueTablesRequest extends $tea.Model {
  bizDate?: string;
  ownerId?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  ruleCategory?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      ruleCategory: 'RuleCategory',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      ownerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      ruleCategory: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceIssueTablesResponseBody extends $tea.Model {
  data?: ListGovernanceIssueTablesResponseBodyData;
  dynamicErrorCode?: string;
  dynamicErrorMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dynamicErrorCode: 'DynamicErrorCode',
      dynamicErrorMessage: 'DynamicErrorMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListGovernanceIssueTablesResponseBodyData,
      dynamicErrorCode: 'string',
      dynamicErrorMessage: 'string',
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

export class ListGovernanceIssueTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGovernanceIssueTablesResponseBody;
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
      body: ListGovernanceIssueTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceIssueTasksRequest extends $tea.Model {
  bizDate?: string;
  ownerId?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: number;
  ruleCategory?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      ruleCategory: 'RuleCategory',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      ownerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      ruleCategory: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceIssueTasksResponseBody extends $tea.Model {
  data?: ListGovernanceIssueTasksResponseBodyData;
  dynamicErrorCode?: string;
  dynamicErrorMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dynamicErrorCode: 'DynamicErrorCode',
      dynamicErrorMessage: 'DynamicErrorMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListGovernanceIssueTasksResponseBodyData,
      dynamicErrorCode: 'string',
      dynamicErrorMessage: 'string',
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

export class ListGovernanceIssueTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGovernanceIssueTasksResponseBody;
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
      body: ListGovernanceIssueTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceRulesRequest extends $tea.Model {
  category?: string;
  issueType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      issueType: 'IssueType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      issueType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceRulesResponseBody extends $tea.Model {
  data?: ListGovernanceRulesResponseBodyData;
  dynamicErrorCode?: string;
  dynamicErrorMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dynamicErrorCode: 'DynamicErrorCode',
      dynamicErrorMessage: 'DynamicErrorMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListGovernanceRulesResponseBodyData,
      dynamicErrorCode: 'string',
      dynamicErrorMessage: 'string',
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

export class ListGovernanceRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGovernanceRulesResponseBody;
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
      body: ListGovernanceRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHiveColumnLineagesRequest extends $tea.Model {
  clusterId?: string;
  columnName?: string;
  databaseName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      columnName: 'ColumnName',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      columnName: 'string',
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHiveColumnLineagesResponseBody extends $tea.Model {
  data?: ListHiveColumnLineagesResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListHiveColumnLineagesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHiveColumnLineagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHiveColumnLineagesResponseBody;
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
      body: ListHiveColumnLineagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHiveTableLineagesRequest extends $tea.Model {
  clusterId?: string;
  databaseName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHiveTableLineagesResponseBody extends $tea.Model {
  data?: ListHiveTableLineagesResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListHiveTableLineagesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHiveTableLineagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHiveTableLineagesResponseBody;
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
      body: ListHiveTableLineagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablePartitionsRequest extends $tea.Model {
  clusterId?: string;
  databaseName?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablePartitionsResponseBody extends $tea.Model {
  data?: ListTablePartitionsResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTablePartitionsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablePartitionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTablePartitionsResponseBody;
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
      body: ListTablePartitionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDataWorksStandardServiceRequest extends $tea.Model {
  region?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDataWorksStandardServiceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDataWorksStandardServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenDataWorksStandardServiceResponseBody;
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
      body: OpenDataWorksStandardServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchManualDagNodeInstanceRequest extends $tea.Model {
  dagId?: number;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchManualDagNodeInstanceResponseBody extends $tea.Model {
  data?: SearchManualDagNodeInstanceResponseBodyData;
  errCode?: string;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SearchManualDagNodeInstanceResponseBodyData,
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchManualDagNodeInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchManualDagNodeInstanceResponseBody;
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
      body: SearchManualDagNodeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTaskMetaCallbackRequest extends $tea.Model {
  code?: string;
  connectionInfo?: string;
  endTime?: number;
  resources?: string[];
  startTime?: number;
  subType?: string;
  taskEnvParam?: string;
  tenantId?: number;
  type?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      connectionInfo: 'ConnectionInfo',
      endTime: 'EndTime',
      resources: 'Resources',
      startTime: 'StartTime',
      subType: 'SubType',
      taskEnvParam: 'TaskEnvParam',
      tenantId: 'TenantId',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      connectionInfo: 'string',
      endTime: 'number',
      resources: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      subType: 'string',
      taskEnvParam: 'string',
      tenantId: 'number',
      type: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTaskMetaCallbackResponseBody extends $tea.Model {
  data?: string;
  errMsg?: string;
  errorCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errMsg: 'ErrMsg',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errMsg: 'string',
      errorCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTaskMetaCallbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendTaskMetaCallbackResponseBody;
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
      body: SendTaskMetaCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSwitchValueRequest extends $tea.Model {
  switchName?: string;
  switchValue?: string;
  static names(): { [key: string]: string } {
    return {
      switchName: 'SwitchName',
      switchValue: 'SwitchValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchName: 'string',
      switchValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSwitchValueResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSwitchValueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetSwitchValueResponseBody;
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
      body: SetSwitchValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCollectQualityRequest extends $tea.Model {
  callbackResultString?: string;
  static names(): { [key: string]: string } {
    return {
      callbackResultString: 'CallbackResultString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackResultString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCollectQualityResponseBody extends $tea.Model {
  requestId?: string;
  returnCode?: string;
  returnValue?: StartCollectQualityResponseBodyReturnValue[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      returnCode: 'ReturnCode',
      returnValue: 'ReturnValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      returnCode: 'string',
      returnValue: { 'type': 'array', 'itemType': StartCollectQualityResponseBodyReturnValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCollectQualityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartCollectQualityResponseBody;
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
      body: StartCollectQualityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDoCheckQualityRequest extends $tea.Model {
  callbackResultString?: string;
  static names(): { [key: string]: string } {
    return {
      callbackResultString: 'CallbackResultString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackResultString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDoCheckQualityResponseBody extends $tea.Model {
  requestId?: string;
  returnCode?: string;
  returnValue?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      returnCode: 'ReturnCode',
      returnValue: 'ReturnValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      returnCode: 'string',
      returnValue: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDoCheckQualityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDoCheckQualityResponseBody;
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
      body: StartDoCheckQualityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskQualityRequest extends $tea.Model {
  callbackResultString?: string;
  static names(): { [key: string]: string } {
    return {
      callbackResultString: 'CallbackResultString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackResultString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskQualityResponseBody extends $tea.Model {
  requestId?: string;
  returnCode?: string;
  returnValue?: StartTaskQualityResponseBodyReturnValue;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      returnCode: 'ReturnCode',
      returnValue: 'ReturnValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      returnCode: 'string',
      returnValue: StartTaskQualityResponseBodyReturnValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskQualityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartTaskQualityResponseBody;
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
      body: StartTaskQualityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerDataLoaderResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerDataLoaderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TriggerDataLoaderResponseBody;
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
      body: TriggerDataLoaderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerTimeMachineTaskResponseBody extends $tea.Model {
  data?: TriggerTimeMachineTaskResponseBodyData;
  errCode?: string;
  errMsg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TriggerTimeMachineTaskResponseBodyData,
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerTimeMachineTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TriggerTimeMachineTaskResponseBody;
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
      body: TriggerTimeMachineTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmrHiveTableResponseBodyDataColumns extends $tea.Model {
  columnComment?: string;
  columnName?: string;
  columnPosition?: number;
  columnType?: string;
  comment?: string;
  gmtCreate?: string;
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      columnComment: 'ColumnComment',
      columnName: 'ColumnName',
      columnPosition: 'ColumnPosition',
      columnType: 'ColumnType',
      comment: 'Comment',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnComment: 'string',
      columnName: 'string',
      columnPosition: 'number',
      columnType: 'string',
      comment: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmrHiveTableResponseBodyData extends $tea.Model {
  clusterBizId?: string;
  clusterBizName?: string;
  columns?: DescribeEmrHiveTableResponseBodyDataColumns[];
  databaseName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  inputFormat?: string;
  isCompressed?: boolean;
  isTemporary?: boolean;
  lastAccessTime?: string;
  lastModifyTime?: string;
  location?: string;
  outputFormat?: string;
  owner?: string;
  ownerId?: string;
  ownerType?: string;
  partitionKeys?: string;
  serializationLib?: string;
  tableComment?: string;
  tableDesc?: string;
  tableName?: string;
  tableParameters?: string;
  tableSize?: number;
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
      clusterBizName: 'ClusterBizName',
      columns: 'Columns',
      databaseName: 'DatabaseName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      inputFormat: 'InputFormat',
      isCompressed: 'IsCompressed',
      isTemporary: 'IsTemporary',
      lastAccessTime: 'LastAccessTime',
      lastModifyTime: 'LastModifyTime',
      location: 'Location',
      outputFormat: 'OutputFormat',
      owner: 'Owner',
      ownerId: 'OwnerId',
      ownerType: 'OwnerType',
      partitionKeys: 'PartitionKeys',
      serializationLib: 'SerializationLib',
      tableComment: 'TableComment',
      tableDesc: 'TableDesc',
      tableName: 'TableName',
      tableParameters: 'TableParameters',
      tableSize: 'TableSize',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
      clusterBizName: 'string',
      columns: { 'type': 'array', 'itemType': DescribeEmrHiveTableResponseBodyDataColumns },
      databaseName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      inputFormat: 'string',
      isCompressed: 'boolean',
      isTemporary: 'boolean',
      lastAccessTime: 'string',
      lastModifyTime: 'string',
      location: 'string',
      outputFormat: 'string',
      owner: 'string',
      ownerId: 'string',
      ownerType: 'string',
      partitionKeys: 'string',
      serializationLib: 'string',
      tableComment: 'string',
      tableDesc: 'string',
      tableName: 'string',
      tableParameters: 'string',
      tableSize: 'number',
      tableType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTimeMachineTaskResponseBodyData extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  hostName?: string;
  id?: string;
  objId?: string;
  objName?: string;
  operType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hostName: 'HostName',
      id: 'Id',
      objId: 'ObjId',
      objName: 'ObjName',
      operType: 'OperType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      hostName: 'string',
      id: 'string',
      objId: 'string',
      objName: 'string',
      operType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrHiveAuditLogsResponseBodyDataPagedData extends $tea.Model {
  database?: string;
  eventTime?: number;
  groups?: string[];
  operation?: string;
  table?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      eventTime: 'EventTime',
      groups: 'Groups',
      operation: 'Operation',
      table: 'Table',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      eventTime: 'number',
      groups: { 'type': 'array', 'itemType': 'string' },
      operation: 'string',
      table: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrHiveAuditLogsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  pagedData?: ListEmrHiveAuditLogsResponseBodyDataPagedData[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pagedData: 'PagedData',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pagedData: { 'type': 'array', 'itemType': ListEmrHiveAuditLogsResponseBodyDataPagedData },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrHiveDatabasesResponseBodyData extends $tea.Model {
  comment?: string;
  gmtCreate?: number;
  gmtModified?: number;
  location?: string;
  name?: string;
  owner?: string;
  ownerId?: string;
  ownerType?: string;
  parameters?: string;
  region?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      location: 'Location',
      name: 'Name',
      owner: 'Owner',
      ownerId: 'OwnerId',
      ownerType: 'OwnerType',
      parameters: 'Parameters',
      region: 'Region',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      location: 'string',
      name: 'string',
      owner: 'string',
      ownerId: 'string',
      ownerType: 'string',
      parameters: 'string',
      region: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrHiveTablesResponseBodyDataPagedData extends $tea.Model {
  clusterBizId?: string;
  clusterBizName?: string;
  databaseName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  inputFormat?: string;
  isCompressed?: boolean;
  isTemporary?: boolean;
  lastAccessTime?: string;
  lastModifyTime?: string;
  location?: string;
  outputFormat?: string;
  owner?: string;
  ownerId?: string;
  ownerType?: string;
  partitionKeys?: string;
  serializationLib?: string;
  tableComment?: string;
  tableDesc?: string;
  tableName?: string;
  tableParameters?: string;
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
      clusterBizName: 'ClusterBizName',
      databaseName: 'DatabaseName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      inputFormat: 'InputFormat',
      isCompressed: 'IsCompressed',
      isTemporary: 'IsTemporary',
      lastAccessTime: 'LastAccessTime',
      lastModifyTime: 'LastModifyTime',
      location: 'Location',
      outputFormat: 'OutputFormat',
      owner: 'Owner',
      ownerId: 'OwnerId',
      ownerType: 'OwnerType',
      partitionKeys: 'PartitionKeys',
      serializationLib: 'SerializationLib',
      tableComment: 'TableComment',
      tableDesc: 'TableDesc',
      tableName: 'TableName',
      tableParameters: 'TableParameters',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
      clusterBizName: 'string',
      databaseName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      inputFormat: 'string',
      isCompressed: 'boolean',
      isTemporary: 'boolean',
      lastAccessTime: 'string',
      lastModifyTime: 'string',
      location: 'string',
      outputFormat: 'string',
      owner: 'string',
      ownerId: 'string',
      ownerType: 'string',
      partitionKeys: 'string',
      serializationLib: 'string',
      tableComment: 'string',
      tableDesc: 'string',
      tableName: 'string',
      tableParameters: 'string',
      tableType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrHiveTablesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  pagedData?: ListEmrHiveTablesResponseBodyDataPagedData[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pagedData: 'PagedData',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pagedData: { 'type': 'array', 'itemType': ListEmrHiveTablesResponseBodyDataPagedData },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceIssueDataServiceAPIsResponseBodyDataAPIs extends $tea.Model {
  apiId?: string;
  apiName?: string;
  bizDate?: string;
  ownerId?: string;
  projectId?: number;
  properties?: string;
  ruleCategory?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      bizDate: 'BizDate',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      properties: 'Properties',
      ruleCategory: 'RuleCategory',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      bizDate: 'string',
      ownerId: 'string',
      projectId: 'number',
      properties: 'string',
      ruleCategory: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceIssueDataServiceAPIsResponseBodyData extends $tea.Model {
  APIs?: ListGovernanceIssueDataServiceAPIsResponseBodyDataAPIs[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      APIs: 'APIs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIs: { 'type': 'array', 'itemType': ListGovernanceIssueDataServiceAPIsResponseBodyDataAPIs },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceIssueTablesResponseBodyDataTables extends $tea.Model {
  bizDate?: string;
  clusterId?: string;
  createTime?: number;
  databaseName?: string;
  datasourceType?: string;
  downstreamDependencyCount?: number;
  lastAccessTime?: number;
  lifeCycle?: number;
  mcProjectName?: string;
  ownerId?: string;
  projectId?: number;
  properties?: string;
  ruleCategory?: string;
  ruleId?: string;
  schema?: string;
  tableGuid?: string;
  tableName?: string;
  tableSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      databaseName: 'DatabaseName',
      datasourceType: 'DatasourceType',
      downstreamDependencyCount: 'DownstreamDependencyCount',
      lastAccessTime: 'LastAccessTime',
      lifeCycle: 'LifeCycle',
      mcProjectName: 'McProjectName',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      properties: 'Properties',
      ruleCategory: 'RuleCategory',
      ruleId: 'RuleId',
      schema: 'Schema',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
      tableSize: 'TableSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      clusterId: 'string',
      createTime: 'number',
      databaseName: 'string',
      datasourceType: 'string',
      downstreamDependencyCount: 'number',
      lastAccessTime: 'number',
      lifeCycle: 'number',
      mcProjectName: 'string',
      ownerId: 'string',
      projectId: 'number',
      properties: 'string',
      ruleCategory: 'string',
      ruleId: 'string',
      schema: 'string',
      tableGuid: 'string',
      tableName: 'string',
      tableSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceIssueTablesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tables?: ListGovernanceIssueTablesResponseBodyDataTables[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tables: 'Tables',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tables: { 'type': 'array', 'itemType': ListGovernanceIssueTablesResponseBodyDataTables },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceIssueTasksResponseBodyDataTasks extends $tea.Model {
  bizDate?: string;
  nodeId?: number;
  nodeName?: string;
  nodeType?: string;
  ownerId?: string;
  projectId?: number;
  properties?: string;
  ruleCategory?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      properties: 'Properties',
      ruleCategory: 'RuleCategory',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      nodeId: 'number',
      nodeName: 'string',
      nodeType: 'string',
      ownerId: 'string',
      projectId: 'number',
      properties: 'string',
      ruleCategory: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceIssueTasksResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tasks?: ListGovernanceIssueTasksResponseBodyDataTasks[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tasks: { 'type': 'array', 'itemType': ListGovernanceIssueTasksResponseBodyDataTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceRulesResponseBodyDataRules extends $tea.Model {
  category?: string;
  description?: string;
  guide?: string;
  id?: string;
  issueType?: string;
  name?: string;
  note?: string;
  rule?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      guide: 'Guide',
      id: 'Id',
      issueType: 'IssueType',
      name: 'Name',
      note: 'Note',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      guide: 'string',
      id: 'string',
      issueType: 'string',
      name: 'string',
      note: 'string',
      rule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernanceRulesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  rules?: ListGovernanceRulesResponseBodyDataRules[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      rules: { 'type': 'array', 'itemType': ListGovernanceRulesResponseBodyDataRules },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHiveColumnLineagesResponseBodyDataDownstreamLineages extends $tea.Model {
  clusterId?: string;
  columnName?: string;
  createTime?: string;
  databaseName?: string;
  directDownColumnNumber?: number;
  directDownTableNumber?: number;
  directUpperColumnNumber?: number;
  directUpperTableNumber?: number;
  modifiedTime?: string;
  source?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      columnName: 'ColumnName',
      createTime: 'CreateTime',
      databaseName: 'DatabaseName',
      directDownColumnNumber: 'DirectDownColumnNumber',
      directDownTableNumber: 'DirectDownTableNumber',
      directUpperColumnNumber: 'DirectUpperColumnNumber',
      directUpperTableNumber: 'DirectUpperTableNumber',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      columnName: 'string',
      createTime: 'string',
      databaseName: 'string',
      directDownColumnNumber: 'number',
      directDownTableNumber: 'number',
      directUpperColumnNumber: 'number',
      directUpperTableNumber: 'number',
      modifiedTime: 'string',
      source: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHiveColumnLineagesResponseBodyDataUpstreamLineages extends $tea.Model {
  clusterId?: string;
  columnName?: string;
  createTime?: string;
  databaseName?: string;
  directDownColumnNumber?: number;
  directDownTableNumber?: number;
  directUpperColumnNumber?: number;
  directUpperTableNumber?: number;
  modifiedTime?: string;
  source?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      columnName: 'ColumnName',
      createTime: 'CreateTime',
      databaseName: 'DatabaseName',
      directDownColumnNumber: 'DirectDownColumnNumber',
      directDownTableNumber: 'DirectDownTableNumber',
      directUpperColumnNumber: 'DirectUpperColumnNumber',
      directUpperTableNumber: 'DirectUpperTableNumber',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      columnName: 'string',
      createTime: 'string',
      databaseName: 'string',
      directDownColumnNumber: 'number',
      directDownTableNumber: 'number',
      directUpperColumnNumber: 'number',
      directUpperTableNumber: 'number',
      modifiedTime: 'string',
      source: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHiveColumnLineagesResponseBodyData extends $tea.Model {
  downstreamLineages?: ListHiveColumnLineagesResponseBodyDataDownstreamLineages[];
  downstreamNumber?: number;
  upstreamLineages?: ListHiveColumnLineagesResponseBodyDataUpstreamLineages[];
  upstreamNumber?: number;
  static names(): { [key: string]: string } {
    return {
      downstreamLineages: 'DownstreamLineages',
      downstreamNumber: 'DownstreamNumber',
      upstreamLineages: 'UpstreamLineages',
      upstreamNumber: 'UpstreamNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downstreamLineages: { 'type': 'array', 'itemType': ListHiveColumnLineagesResponseBodyDataDownstreamLineages },
      downstreamNumber: 'number',
      upstreamLineages: { 'type': 'array', 'itemType': ListHiveColumnLineagesResponseBodyDataUpstreamLineages },
      upstreamNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHiveTableLineagesResponseBodyDataDownstreamLineages extends $tea.Model {
  clusterId?: string;
  createTime?: string;
  databaseName?: string;
  engine?: string;
  jobId?: string;
  modifiedTime?: string;
  queryText?: string;
  source?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      databaseName: 'DatabaseName',
      engine: 'Engine',
      jobId: 'JobId',
      modifiedTime: 'ModifiedTime',
      queryText: 'QueryText',
      source: 'Source',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      createTime: 'string',
      databaseName: 'string',
      engine: 'string',
      jobId: 'string',
      modifiedTime: 'string',
      queryText: 'string',
      source: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHiveTableLineagesResponseBodyDataUpstreamLineages extends $tea.Model {
  clusterId?: string;
  createTime?: string;
  databaseName?: string;
  engine?: string;
  jobId?: string;
  modifiedTime?: string;
  queryText?: string;
  source?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      databaseName: 'DatabaseName',
      engine: 'Engine',
      jobId: 'JobId',
      modifiedTime: 'ModifiedTime',
      queryText: 'QueryText',
      source: 'Source',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      createTime: 'string',
      databaseName: 'string',
      engine: 'string',
      jobId: 'string',
      modifiedTime: 'string',
      queryText: 'string',
      source: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHiveTableLineagesResponseBodyData extends $tea.Model {
  downstreamLineages?: ListHiveTableLineagesResponseBodyDataDownstreamLineages[];
  downstreamNumber?: number;
  upstreamLineages?: ListHiveTableLineagesResponseBodyDataUpstreamLineages[];
  upstreamNumber?: number;
  static names(): { [key: string]: string } {
    return {
      downstreamLineages: 'DownstreamLineages',
      downstreamNumber: 'DownstreamNumber',
      upstreamLineages: 'UpstreamLineages',
      upstreamNumber: 'UpstreamNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downstreamLineages: { 'type': 'array', 'itemType': ListHiveTableLineagesResponseBodyDataDownstreamLineages },
      downstreamNumber: 'number',
      upstreamLineages: { 'type': 'array', 'itemType': ListHiveTableLineagesResponseBodyDataUpstreamLineages },
      upstreamNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablePartitionsResponseBodyDataPagedData extends $tea.Model {
  gmtCreate?: number;
  gmtModified?: number;
  location?: string;
  partitionComment?: string;
  partitionName?: string;
  partitionPath?: string;
  partitionType?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      location: 'Location',
      partitionComment: 'PartitionComment',
      partitionName: 'PartitionName',
      partitionPath: 'PartitionPath',
      partitionType: 'PartitionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      location: 'string',
      partitionComment: 'string',
      partitionName: 'string',
      partitionPath: 'string',
      partitionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablePartitionsResponseBodyData extends $tea.Model {
  pageSize?: number;
  pagedData?: ListTablePartitionsResponseBodyDataPagedData[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pagedData: 'PagedData',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pagedData: { 'type': 'array', 'itemType': ListTablePartitionsResponseBodyDataPagedData },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchManualDagNodeInstanceResponseBodyDataNodeInsInfo extends $tea.Model {
  beginRunningTime?: string;
  beginWaitResTime?: string;
  beginWaitTimeTime?: string;
  bizdate?: string;
  createTime?: string;
  dagId?: number;
  dagType?: number;
  finishTime?: string;
  instanceId?: number;
  modifyTime?: string;
  nodeName?: string;
  paraValue?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      beginRunningTime: 'BeginRunningTime',
      beginWaitResTime: 'BeginWaitResTime',
      beginWaitTimeTime: 'BeginWaitTimeTime',
      bizdate: 'Bizdate',
      createTime: 'CreateTime',
      dagId: 'DagId',
      dagType: 'DagType',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      modifyTime: 'ModifyTime',
      nodeName: 'NodeName',
      paraValue: 'ParaValue',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginRunningTime: 'string',
      beginWaitResTime: 'string',
      beginWaitTimeTime: 'string',
      bizdate: 'string',
      createTime: 'string',
      dagId: 'number',
      dagType: 'number',
      finishTime: 'string',
      instanceId: 'number',
      modifyTime: 'string',
      nodeName: 'string',
      paraValue: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchManualDagNodeInstanceResponseBodyData extends $tea.Model {
  nodeInsInfo?: SearchManualDagNodeInstanceResponseBodyDataNodeInsInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInsInfo: 'NodeInsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInsInfo: { 'type': 'array', 'itemType': SearchManualDagNodeInstanceResponseBodyDataNodeInsInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCollectQualityResponseBodyReturnValueStrongMethodSet extends $tea.Model {
  colName?: string;
  isColRule?: boolean;
  isSqlRule?: boolean;
  isStrongRule?: boolean;
  methodName?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      colName: 'ColName',
      isColRule: 'IsColRule',
      isSqlRule: 'IsSqlRule',
      isStrongRule: 'IsStrongRule',
      methodName: 'MethodName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colName: 'string',
      isColRule: 'boolean',
      isSqlRule: 'boolean',
      isStrongRule: 'boolean',
      methodName: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCollectQualityResponseBodyReturnValueWeakMethodSet extends $tea.Model {
  colName?: string;
  isColRule?: boolean;
  isSqlRule?: boolean;
  isStrongRule?: boolean;
  methodName?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      colName: 'ColName',
      isColRule: 'IsColRule',
      isSqlRule: 'IsSqlRule',
      isStrongRule: 'IsStrongRule',
      methodName: 'MethodName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colName: 'string',
      isColRule: 'boolean',
      isSqlRule: 'boolean',
      isStrongRule: 'boolean',
      methodName: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCollectQualityResponseBodyReturnValue extends $tea.Model {
  actualExpression?: string;
  bizDate?: string;
  callbackUrl?: string;
  connection?: string;
  entityId?: number;
  matchExpression?: string;
  pluginName?: string;
  strongMethodSet?: StartCollectQualityResponseBodyReturnValueStrongMethodSet[];
  tableGuid?: string;
  taskId?: string;
  weakMethodSet?: StartCollectQualityResponseBodyReturnValueWeakMethodSet[];
  static names(): { [key: string]: string } {
    return {
      actualExpression: 'ActualExpression',
      bizDate: 'BizDate',
      callbackUrl: 'CallbackUrl',
      connection: 'Connection',
      entityId: 'EntityId',
      matchExpression: 'MatchExpression',
      pluginName: 'PluginName',
      strongMethodSet: 'StrongMethodSet',
      tableGuid: 'TableGuid',
      taskId: 'TaskId',
      weakMethodSet: 'WeakMethodSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualExpression: 'string',
      bizDate: 'string',
      callbackUrl: 'string',
      connection: 'string',
      entityId: 'number',
      matchExpression: 'string',
      pluginName: 'string',
      strongMethodSet: { 'type': 'array', 'itemType': StartCollectQualityResponseBodyReturnValueStrongMethodSet },
      tableGuid: 'string',
      taskId: 'string',
      weakMethodSet: { 'type': 'array', 'itemType': StartCollectQualityResponseBodyReturnValueWeakMethodSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskQualityResponseBodyReturnValueStrongMethodSet extends $tea.Model {
  colName?: string;
  isColRule?: boolean;
  isSqlRule?: boolean;
  isStrongRule?: boolean;
  methodName?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      colName: 'ColName',
      isColRule: 'IsColRule',
      isSqlRule: 'IsSqlRule',
      isStrongRule: 'IsStrongRule',
      methodName: 'MethodName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colName: 'string',
      isColRule: 'boolean',
      isSqlRule: 'boolean',
      isStrongRule: 'boolean',
      methodName: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskQualityResponseBodyReturnValueWeakMethodSet extends $tea.Model {
  colName?: string;
  isColRule?: boolean;
  isSqlRule?: boolean;
  isStrongRule?: boolean;
  methodName?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      colName: 'ColName',
      isColRule: 'IsColRule',
      isSqlRule: 'IsSqlRule',
      isStrongRule: 'IsStrongRule',
      methodName: 'MethodName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colName: 'string',
      isColRule: 'boolean',
      isSqlRule: 'boolean',
      isStrongRule: 'boolean',
      methodName: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskQualityResponseBodyReturnValue extends $tea.Model {
  actualExpression?: string;
  bizDate?: string;
  callbackUrl?: string;
  connection?: string;
  entityId?: number;
  matchExpression?: string;
  pluginName?: string;
  statisticsFlag?: number;
  strongMethodSet?: StartTaskQualityResponseBodyReturnValueStrongMethodSet[];
  tableGuid?: string;
  taskId?: string;
  triggerFlag?: number;
  weakMethodSet?: StartTaskQualityResponseBodyReturnValueWeakMethodSet[];
  static names(): { [key: string]: string } {
    return {
      actualExpression: 'ActualExpression',
      bizDate: 'BizDate',
      callbackUrl: 'CallbackUrl',
      connection: 'Connection',
      entityId: 'EntityId',
      matchExpression: 'MatchExpression',
      pluginName: 'PluginName',
      statisticsFlag: 'StatisticsFlag',
      strongMethodSet: 'StrongMethodSet',
      tableGuid: 'TableGuid',
      taskId: 'TaskId',
      triggerFlag: 'TriggerFlag',
      weakMethodSet: 'WeakMethodSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualExpression: 'string',
      bizDate: 'string',
      callbackUrl: 'string',
      connection: 'string',
      entityId: 'number',
      matchExpression: 'string',
      pluginName: 'string',
      statisticsFlag: 'number',
      strongMethodSet: { 'type': 'array', 'itemType': StartTaskQualityResponseBodyReturnValueStrongMethodSet },
      tableGuid: 'string',
      taskId: 'string',
      triggerFlag: 'number',
      weakMethodSet: { 'type': 'array', 'itemType': StartTaskQualityResponseBodyReturnValueWeakMethodSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerTimeMachineTaskResponseBodyData extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  hostName?: string;
  id?: string;
  objId?: string;
  objName?: string;
  operType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hostName: 'HostName',
      id: 'Id',
      objId: 'ObjId',
      objName: 'ObjName',
      operType: 'OperType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      hostName: 'string',
      id: 'string',
      objId: 'string',
      objName: 'string',
      operType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
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


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request CreateManualDagRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateManualDagResponse
   */
  async createManualDagWithOptions(request: CreateManualDagRequest, runtime: $Util.RuntimeOptions): Promise<CreateManualDagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizdate)) {
      query["Bizdate"] = request.bizdate;
    }

    if (!Util.isUnset(request.dagPara)) {
      query["DagPara"] = request.dagPara;
    }

    if (!Util.isUnset(request.flowName)) {
      query["FlowName"] = request.flowName;
    }

    if (!Util.isUnset(request.nodePara)) {
      query["NodePara"] = request.nodePara;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateManualDag",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateManualDagResponse>(await this.callApi(params, req, runtime), new CreateManualDagResponse({}));
  }

  /**
   * @param request CreateManualDagRequest
   * @return CreateManualDagResponse
   */
  async createManualDag(request: CreateManualDagRequest): Promise<CreateManualDagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createManualDagWithOptions(request, runtime);
  }

  /**
   * @param request DeleteFileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteFileResponse
   */
  async deleteFileWithOptions(request: DeleteFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFile",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFileResponse>(await this.callApi(params, req, runtime), new DeleteFileResponse({}));
  }

  /**
   * @param request DeleteFileRequest
   * @return DeleteFileResponse
   */
  async deleteFile(request: DeleteFileRequest): Promise<DeleteFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileWithOptions(request, runtime);
  }

  /**
   * @param request DescribeEmrHiveTableRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeEmrHiveTableResponse
   */
  async describeEmrHiveTableWithOptions(request: DescribeEmrHiveTableRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEmrHiveTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEmrHiveTable",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEmrHiveTableResponse>(await this.callApi(params, req, runtime), new DescribeEmrHiveTableResponse({}));
  }

  /**
   * @param request DescribeEmrHiveTableRequest
   * @return DescribeEmrHiveTableResponse
   */
  async describeEmrHiveTable(request: DescribeEmrHiveTableRequest): Promise<DescribeEmrHiveTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEmrHiveTableWithOptions(request, runtime);
  }

  /**
   * @summary 查询apiContext接口
   *
   * @param request GetDataServiceApiContextRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDataServiceApiContextResponse
   */
  async getDataServiceApiContextWithOptions(request: GetDataServiceApiContextRequest, runtime: $Util.RuntimeOptions): Promise<GetDataServiceApiContextResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataServiceApiContext",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataServiceApiContextResponse>(await this.callApi(params, req, runtime), new GetDataServiceApiContextResponse({}));
  }

  /**
   * @summary 查询apiContext接口
   *
   * @param request GetDataServiceApiContextRequest
   * @return GetDataServiceApiContextResponse
   */
  async getDataServiceApiContext(request: GetDataServiceApiContextRequest): Promise<GetDataServiceApiContextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServiceApiContextWithOptions(request, runtime);
  }

  /**
   * @summary 查询apiContext更新事件接口
   *
   * @param request GetDataServiceContextUpdateEventRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDataServiceContextUpdateEventResponse
   */
  async getDataServiceContextUpdateEventWithOptions(runtime: $Util.RuntimeOptions): Promise<GetDataServiceContextUpdateEventResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetDataServiceContextUpdateEvent",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataServiceContextUpdateEventResponse>(await this.callApi(params, req, runtime), new GetDataServiceContextUpdateEventResponse({}));
  }

  /**
   * @summary 查询apiContext更新事件接口
   *
   * @return GetDataServiceContextUpdateEventResponse
   */
  async getDataServiceContextUpdateEvent(): Promise<GetDataServiceContextUpdateEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataServiceContextUpdateEventWithOptions(runtime);
  }

  /**
   * @summary 根据Switch名称获取值
   *
   * @param request GetSwitchValueRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSwitchValueResponse
   */
  async getSwitchValueWithOptions(request: GetSwitchValueRequest, runtime: $Util.RuntimeOptions): Promise<GetSwitchValueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.switchName)) {
      query["SwitchName"] = request.switchName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSwitchValue",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSwitchValueResponse>(await this.callApi(params, req, runtime), new GetSwitchValueResponse({}));
  }

  /**
   * @summary 根据Switch名称获取值
   *
   * @param request GetSwitchValueRequest
   * @return GetSwitchValueResponse
   */
  async getSwitchValue(request: GetSwitchValueRequest): Promise<GetSwitchValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSwitchValueWithOptions(request, runtime);
  }

  /**
   * @summary 查询timeMachine任务详情
   *
   * @param request GetTimeMachineTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTimeMachineTaskResponse
   */
  async getTimeMachineTaskWithOptions(request: GetTimeMachineTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetTimeMachineTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTimeMachineTask",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTimeMachineTaskResponse>(await this.callApi(params, req, runtime), new GetTimeMachineTaskResponse({}));
  }

  /**
   * @summary 查询timeMachine任务详情
   *
   * @param request GetTimeMachineTaskRequest
   * @return GetTimeMachineTaskResponse
   */
  async getTimeMachineTask(request: GetTimeMachineTaskRequest): Promise<GetTimeMachineTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTimeMachineTaskWithOptions(request, runtime);
  }

  /**
   * @param request ListEmrHiveAuditLogsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListEmrHiveAuditLogsResponse
   */
  async listEmrHiveAuditLogsWithOptions(request: ListEmrHiveAuditLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListEmrHiveAuditLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEmrHiveAuditLogs",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEmrHiveAuditLogsResponse>(await this.callApi(params, req, runtime), new ListEmrHiveAuditLogsResponse({}));
  }

  /**
   * @param request ListEmrHiveAuditLogsRequest
   * @return ListEmrHiveAuditLogsResponse
   */
  async listEmrHiveAuditLogs(request: ListEmrHiveAuditLogsRequest): Promise<ListEmrHiveAuditLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEmrHiveAuditLogsWithOptions(request, runtime);
  }

  /**
   * @param request ListEmrHiveDatabasesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListEmrHiveDatabasesResponse
   */
  async listEmrHiveDatabasesWithOptions(request: ListEmrHiveDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<ListEmrHiveDatabasesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEmrHiveDatabases",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEmrHiveDatabasesResponse>(await this.callApi(params, req, runtime), new ListEmrHiveDatabasesResponse({}));
  }

  /**
   * @param request ListEmrHiveDatabasesRequest
   * @return ListEmrHiveDatabasesResponse
   */
  async listEmrHiveDatabases(request: ListEmrHiveDatabasesRequest): Promise<ListEmrHiveDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEmrHiveDatabasesWithOptions(request, runtime);
  }

  /**
   * @param request ListEmrHiveTablesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListEmrHiveTablesResponse
   */
  async listEmrHiveTablesWithOptions(request: ListEmrHiveTablesRequest, runtime: $Util.RuntimeOptions): Promise<ListEmrHiveTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEmrHiveTables",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEmrHiveTablesResponse>(await this.callApi(params, req, runtime), new ListEmrHiveTablesResponse({}));
  }

  /**
   * @param request ListEmrHiveTablesRequest
   * @return ListEmrHiveTablesResponse
   */
  async listEmrHiveTables(request: ListEmrHiveTablesRequest): Promise<ListEmrHiveTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEmrHiveTablesWithOptions(request, runtime);
  }

  /**
   * @summary 查询数据服务API
   *
   * @param request ListGovernanceIssueDataServiceAPIsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListGovernanceIssueDataServiceAPIsResponse
   */
  async listGovernanceIssueDataServiceAPIsWithOptions(request: ListGovernanceIssueDataServiceAPIsRequest, runtime: $Util.RuntimeOptions): Promise<ListGovernanceIssueDataServiceAPIsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!Util.isUnset(request.ownerId)) {
      body["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.ruleCategory)) {
      body["RuleCategory"] = request.ruleCategory;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListGovernanceIssueDataServiceAPIs",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGovernanceIssueDataServiceAPIsResponse>(await this.callApi(params, req, runtime), new ListGovernanceIssueDataServiceAPIsResponse({}));
  }

  /**
   * @summary 查询数据服务API
   *
   * @param request ListGovernanceIssueDataServiceAPIsRequest
   * @return ListGovernanceIssueDataServiceAPIsResponse
   */
  async listGovernanceIssueDataServiceAPIs(request: ListGovernanceIssueDataServiceAPIsRequest): Promise<ListGovernanceIssueDataServiceAPIsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGovernanceIssueDataServiceAPIsWithOptions(request, runtime);
  }

  /**
   * @summary 查询治理项问题详情
   *
   * @param request ListGovernanceIssueTablesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListGovernanceIssueTablesResponse
   */
  async listGovernanceIssueTablesWithOptions(request: ListGovernanceIssueTablesRequest, runtime: $Util.RuntimeOptions): Promise<ListGovernanceIssueTablesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!Util.isUnset(request.ownerId)) {
      body["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.ruleCategory)) {
      body["RuleCategory"] = request.ruleCategory;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListGovernanceIssueTables",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGovernanceIssueTablesResponse>(await this.callApi(params, req, runtime), new ListGovernanceIssueTablesResponse({}));
  }

  /**
   * @summary 查询治理项问题详情
   *
   * @param request ListGovernanceIssueTablesRequest
   * @return ListGovernanceIssueTablesResponse
   */
  async listGovernanceIssueTables(request: ListGovernanceIssueTablesRequest): Promise<ListGovernanceIssueTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGovernanceIssueTablesWithOptions(request, runtime);
  }

  /**
   * @summary 查询治理项-任务问题详情
   *
   * @param request ListGovernanceIssueTasksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListGovernanceIssueTasksResponse
   */
  async listGovernanceIssueTasksWithOptions(request: ListGovernanceIssueTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListGovernanceIssueTasksResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!Util.isUnset(request.ownerId)) {
      body["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.ruleCategory)) {
      body["RuleCategory"] = request.ruleCategory;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListGovernanceIssueTasks",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGovernanceIssueTasksResponse>(await this.callApi(params, req, runtime), new ListGovernanceIssueTasksResponse({}));
  }

  /**
   * @summary 查询治理项-任务问题详情
   *
   * @param request ListGovernanceIssueTasksRequest
   * @return ListGovernanceIssueTasksResponse
   */
  async listGovernanceIssueTasks(request: ListGovernanceIssueTasksRequest): Promise<ListGovernanceIssueTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGovernanceIssueTasksWithOptions(request, runtime);
  }

  /**
   * @summary 查询治理项定义信息
   *
   * @param request ListGovernanceRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListGovernanceRulesResponse
   */
  async listGovernanceRulesWithOptions(request: ListGovernanceRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListGovernanceRulesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.category)) {
      body["Category"] = request.category;
    }

    if (!Util.isUnset(request.issueType)) {
      body["IssueType"] = request.issueType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListGovernanceRules",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGovernanceRulesResponse>(await this.callApi(params, req, runtime), new ListGovernanceRulesResponse({}));
  }

  /**
   * @summary 查询治理项定义信息
   *
   * @param request ListGovernanceRulesRequest
   * @return ListGovernanceRulesResponse
   */
  async listGovernanceRules(request: ListGovernanceRulesRequest): Promise<ListGovernanceRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGovernanceRulesWithOptions(request, runtime);
  }

  /**
   * @param request ListHiveColumnLineagesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListHiveColumnLineagesResponse
   */
  async listHiveColumnLineagesWithOptions(request: ListHiveColumnLineagesRequest, runtime: $Util.RuntimeOptions): Promise<ListHiveColumnLineagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHiveColumnLineages",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHiveColumnLineagesResponse>(await this.callApi(params, req, runtime), new ListHiveColumnLineagesResponse({}));
  }

  /**
   * @param request ListHiveColumnLineagesRequest
   * @return ListHiveColumnLineagesResponse
   */
  async listHiveColumnLineages(request: ListHiveColumnLineagesRequest): Promise<ListHiveColumnLineagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHiveColumnLineagesWithOptions(request, runtime);
  }

  /**
   * @param request ListHiveTableLineagesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListHiveTableLineagesResponse
   */
  async listHiveTableLineagesWithOptions(request: ListHiveTableLineagesRequest, runtime: $Util.RuntimeOptions): Promise<ListHiveTableLineagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHiveTableLineages",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHiveTableLineagesResponse>(await this.callApi(params, req, runtime), new ListHiveTableLineagesResponse({}));
  }

  /**
   * @param request ListHiveTableLineagesRequest
   * @return ListHiveTableLineagesResponse
   */
  async listHiveTableLineages(request: ListHiveTableLineagesRequest): Promise<ListHiveTableLineagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHiveTableLineagesWithOptions(request, runtime);
  }

  /**
   * @param request ListTablePartitionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTablePartitionsResponse
   */
  async listTablePartitionsWithOptions(request: ListTablePartitionsRequest, runtime: $Util.RuntimeOptions): Promise<ListTablePartitionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTablePartitions",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTablePartitionsResponse>(await this.callApi(params, req, runtime), new ListTablePartitionsResponse({}));
  }

  /**
   * @param request ListTablePartitionsRequest
   * @return ListTablePartitionsResponse
   */
  async listTablePartitions(request: ListTablePartitionsRequest): Promise<ListTablePartitionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTablePartitionsWithOptions(request, runtime);
  }

  /**
   * @param request OpenDataWorksStandardServiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return OpenDataWorksStandardServiceResponse
   */
  async openDataWorksStandardServiceWithOptions(request: OpenDataWorksStandardServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenDataWorksStandardServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenDataWorksStandardService",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenDataWorksStandardServiceResponse>(await this.callApi(params, req, runtime), new OpenDataWorksStandardServiceResponse({}));
  }

  /**
   * @param request OpenDataWorksStandardServiceRequest
   * @return OpenDataWorksStandardServiceResponse
   */
  async openDataWorksStandardService(request: OpenDataWorksStandardServiceRequest): Promise<OpenDataWorksStandardServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openDataWorksStandardServiceWithOptions(request, runtime);
  }

  /**
   * @param request SearchManualDagNodeInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SearchManualDagNodeInstanceResponse
   */
  async searchManualDagNodeInstanceWithOptions(request: SearchManualDagNodeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<SearchManualDagNodeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dagId)) {
      query["DagId"] = request.dagId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchManualDagNodeInstance",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchManualDagNodeInstanceResponse>(await this.callApi(params, req, runtime), new SearchManualDagNodeInstanceResponse({}));
  }

  /**
   * @param request SearchManualDagNodeInstanceRequest
   * @return SearchManualDagNodeInstanceResponse
   */
  async searchManualDagNodeInstance(request: SearchManualDagNodeInstanceRequest): Promise<SearchManualDagNodeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchManualDagNodeInstanceWithOptions(request, runtime);
  }

  /**
   * @param request SendTaskMetaCallbackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SendTaskMetaCallbackResponse
   */
  async sendTaskMetaCallbackWithOptions(request: SendTaskMetaCallbackRequest, runtime: $Util.RuntimeOptions): Promise<SendTaskMetaCallbackResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["Code"] = request.code;
    }

    if (!Util.isUnset(request.connectionInfo)) {
      body["ConnectionInfo"] = request.connectionInfo;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.resources)) {
      body["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.subType)) {
      body["SubType"] = request.subType;
    }

    if (!Util.isUnset(request.taskEnvParam)) {
      body["TaskEnvParam"] = request.taskEnvParam;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.user)) {
      body["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendTaskMetaCallback",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendTaskMetaCallbackResponse>(await this.callApi(params, req, runtime), new SendTaskMetaCallbackResponse({}));
  }

  /**
   * @param request SendTaskMetaCallbackRequest
   * @return SendTaskMetaCallbackResponse
   */
  async sendTaskMetaCallback(request: SendTaskMetaCallbackRequest): Promise<SendTaskMetaCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendTaskMetaCallbackWithOptions(request, runtime);
  }

  /**
   * @summary 设置Switch的值
   *
   * @param request SetSwitchValueRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetSwitchValueResponse
   */
  async setSwitchValueWithOptions(request: SetSwitchValueRequest, runtime: $Util.RuntimeOptions): Promise<SetSwitchValueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.switchName)) {
      query["SwitchName"] = request.switchName;
    }

    if (!Util.isUnset(request.switchValue)) {
      query["SwitchValue"] = request.switchValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetSwitchValue",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetSwitchValueResponse>(await this.callApi(params, req, runtime), new SetSwitchValueResponse({}));
  }

  /**
   * @summary 设置Switch的值
   *
   * @param request SetSwitchValueRequest
   * @return SetSwitchValueResponse
   */
  async setSwitchValue(request: SetSwitchValueRequest): Promise<SetSwitchValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSwitchValueWithOptions(request, runtime);
  }

  /**
   * @summary startCollect
   *
   * @param request StartCollectQualityRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartCollectQualityResponse
   */
  async startCollectQualityWithOptions(request: StartCollectQualityRequest, runtime: $Util.RuntimeOptions): Promise<StartCollectQualityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.callbackResultString)) {
      body["CallbackResultString"] = request.callbackResultString;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartCollectQuality",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartCollectQualityResponse>(await this.callApi(params, req, runtime), new StartCollectQualityResponse({}));
  }

  /**
   * @summary startCollect
   *
   * @param request StartCollectQualityRequest
   * @return StartCollectQualityResponse
   */
  async startCollectQuality(request: StartCollectQualityRequest): Promise<StartCollectQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCollectQualityWithOptions(request, runtime);
  }

  /**
   * @param request StartDoCheckQualityRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartDoCheckQualityResponse
   */
  async startDoCheckQualityWithOptions(request: StartDoCheckQualityRequest, runtime: $Util.RuntimeOptions): Promise<StartDoCheckQualityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.callbackResultString)) {
      body["CallbackResultString"] = request.callbackResultString;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartDoCheckQuality",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDoCheckQualityResponse>(await this.callApi(params, req, runtime), new StartDoCheckQualityResponse({}));
  }

  /**
   * @param request StartDoCheckQualityRequest
   * @return StartDoCheckQualityResponse
   */
  async startDoCheckQuality(request: StartDoCheckQualityRequest): Promise<StartDoCheckQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDoCheckQualityWithOptions(request, runtime);
  }

  /**
   * @param request StartTaskQualityRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartTaskQualityResponse
   */
  async startTaskQualityWithOptions(request: StartTaskQualityRequest, runtime: $Util.RuntimeOptions): Promise<StartTaskQualityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.callbackResultString)) {
      body["CallbackResultString"] = request.callbackResultString;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartTaskQuality",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartTaskQualityResponse>(await this.callApi(params, req, runtime), new StartTaskQualityResponse({}));
  }

  /**
   * @param request StartTaskQualityRequest
   * @return StartTaskQualityResponse
   */
  async startTaskQuality(request: StartTaskQualityRequest): Promise<StartTaskQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startTaskQualityWithOptions(request, runtime);
  }

  /**
   * @summary 触发元数据的Merge操作
   *
   * @param request TriggerDataLoaderRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TriggerDataLoaderResponse
   */
  async triggerDataLoaderWithOptions(runtime: $Util.RuntimeOptions): Promise<TriggerDataLoaderResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "TriggerDataLoader",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TriggerDataLoaderResponse>(await this.callApi(params, req, runtime), new TriggerDataLoaderResponse({}));
  }

  /**
   * @summary 触发元数据的Merge操作
   *
   * @return TriggerDataLoaderResponse
   */
  async triggerDataLoader(): Promise<TriggerDataLoaderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerDataLoaderWithOptions(runtime);
  }

  /**
   * @summary 触发timeMachine任务
   *
   * @param request TriggerTimeMachineTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TriggerTimeMachineTaskResponse
   */
  async triggerTimeMachineTaskWithOptions(runtime: $Util.RuntimeOptions): Promise<TriggerTimeMachineTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "TriggerTimeMachineTask",
      version: "2018-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TriggerTimeMachineTaskResponse>(await this.callApi(params, req, runtime), new TriggerTimeMachineTaskResponse({}));
  }

  /**
   * @summary 触发timeMachine任务
   *
   * @return TriggerTimeMachineTaskResponse
   */
  async triggerTimeMachineTask(): Promise<TriggerTimeMachineTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerTimeMachineTaskWithOptions(runtime);
  }

}
