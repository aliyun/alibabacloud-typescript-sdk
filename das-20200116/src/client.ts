// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataResultValue extends $tea.Model {
  sqlId?: string;
  instanceId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      sqlId: 'sqlId',
      instanceId: 'instanceId',
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlId: 'string',
      instanceId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSessionStatClientStatsValue extends $tea.Model {
  activeCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSessionStatDbStatsValue extends $tea.Model {
  activeCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataValue extends $tea.Model {
  timestamp?: string;
  value?: any;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'string',
      value: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHDMInstanceRequest extends $tea.Model {
  engine?: string;
  flushAccount?: string;
  instanceAlias?: string;
  instanceArea?: string;
  instanceId?: string;
  ip?: string;
  networkType?: string;
  password?: string;
  port?: string;
  region?: string;
  username?: string;
  vpcId?: string;
  context?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      flushAccount: 'FlushAccount',
      instanceAlias: 'InstanceAlias',
      instanceArea: 'InstanceArea',
      instanceId: 'InstanceId',
      ip: 'Ip',
      networkType: 'NetworkType',
      password: 'Password',
      port: 'Port',
      region: 'Region',
      username: 'Username',
      vpcId: 'VpcId',
      context: '__context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      flushAccount: 'string',
      instanceAlias: 'string',
      instanceArea: 'string',
      instanceId: 'string',
      ip: 'string',
      networkType: 'string',
      password: 'string',
      port: 'string',
      region: 'string',
      username: 'string',
      vpcId: 'string',
      context: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHDMInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: AddHDMInstanceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddHDMInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHDMInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddHDMInstanceResponseBody;
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
      body: AddHDMInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdamBenchTaskRequest extends $tea.Model {
  description?: string;
  dstInstanceId?: string;
  dstSuperAccount?: string;
  dstSuperPassword?: string;
  rate?: number;
  requestDuration?: number;
  requestStartTime?: number;
  srcEngine?: string;
  srcEngineVersion?: string;
  srcMaxQps?: number;
  srcMeanQps?: number;
  srcSqlOssAddr?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dstInstanceId: 'DstInstanceId',
      dstSuperAccount: 'DstSuperAccount',
      dstSuperPassword: 'DstSuperPassword',
      rate: 'Rate',
      requestDuration: 'RequestDuration',
      requestStartTime: 'RequestStartTime',
      srcEngine: 'SrcEngine',
      srcEngineVersion: 'SrcEngineVersion',
      srcMaxQps: 'SrcMaxQps',
      srcMeanQps: 'SrcMeanQps',
      srcSqlOssAddr: 'SrcSqlOssAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dstInstanceId: 'string',
      dstSuperAccount: 'string',
      dstSuperPassword: 'string',
      rate: 'number',
      requestDuration: 'number',
      requestStartTime: 'number',
      srcEngine: 'string',
      srcEngineVersion: 'string',
      srcMaxQps: 'number',
      srcMeanQps: 'number',
      srcSqlOssAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdamBenchTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdamBenchTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAdamBenchTaskResponseBody;
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
      body: CreateAdamBenchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCacheAnalysisJobRequest extends $tea.Model {
  backupSetId?: string;
  instanceId?: string;
  nodeId?: string;
  separators?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      separators: 'Separators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      instanceId: 'string',
      nodeId: 'string',
      separators: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCacheAnalysisJobResponseBody extends $tea.Model {
  code?: string;
  data?: CreateCacheAnalysisJobResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateCacheAnalysisJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCacheAnalysisJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCacheAnalysisJobResponseBody;
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
      body: CreateCacheAnalysisJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudBenchTasksRequest extends $tea.Model {
  amount?: string;
  backupId?: string;
  backupTime?: string;
  clientType?: string;
  description?: string;
  dstConnectionString?: string;
  dstInstanceId?: string;
  dstPort?: string;
  dstSuperAccount?: string;
  dstSuperPassword?: string;
  dstType?: string;
  dtsJobClass?: string;
  dtsJobId?: string;
  endState?: string;
  gatewayVpcId?: string;
  gatewayVpcIp?: string;
  rate?: string;
  requestDuration?: string;
  requestEndTime?: string;
  requestStartTime?: string;
  smartPressureTime?: string;
  srcInstanceId?: string;
  srcPublicIp?: string;
  srcSuperAccount?: string;
  srcSuperPassword?: string;
  taskType?: string;
  workDir?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      backupId: 'BackupId',
      backupTime: 'BackupTime',
      clientType: 'ClientType',
      description: 'Description',
      dstConnectionString: 'DstConnectionString',
      dstInstanceId: 'DstInstanceId',
      dstPort: 'DstPort',
      dstSuperAccount: 'DstSuperAccount',
      dstSuperPassword: 'DstSuperPassword',
      dstType: 'DstType',
      dtsJobClass: 'DtsJobClass',
      dtsJobId: 'DtsJobId',
      endState: 'EndState',
      gatewayVpcId: 'GatewayVpcId',
      gatewayVpcIp: 'GatewayVpcIp',
      rate: 'Rate',
      requestDuration: 'RequestDuration',
      requestEndTime: 'RequestEndTime',
      requestStartTime: 'RequestStartTime',
      smartPressureTime: 'SmartPressureTime',
      srcInstanceId: 'SrcInstanceId',
      srcPublicIp: 'SrcPublicIp',
      srcSuperAccount: 'SrcSuperAccount',
      srcSuperPassword: 'SrcSuperPassword',
      taskType: 'TaskType',
      workDir: 'WorkDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      backupId: 'string',
      backupTime: 'string',
      clientType: 'string',
      description: 'string',
      dstConnectionString: 'string',
      dstInstanceId: 'string',
      dstPort: 'string',
      dstSuperAccount: 'string',
      dstSuperPassword: 'string',
      dstType: 'string',
      dtsJobClass: 'string',
      dtsJobId: 'string',
      endState: 'string',
      gatewayVpcId: 'string',
      gatewayVpcIp: 'string',
      rate: 'string',
      requestDuration: 'string',
      requestEndTime: 'string',
      requestStartTime: 'string',
      smartPressureTime: 'string',
      srcInstanceId: 'string',
      srcPublicIp: 'string',
      srcSuperAccount: 'string',
      srcSuperPassword: 'string',
      taskType: 'string',
      workDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudBenchTasksResponseBody extends $tea.Model {
  code?: string;
  data?: CreateCloudBenchTasksResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateCloudBenchTasksResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudBenchTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCloudBenchTasksResponseBody;
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
      body: CreateCloudBenchTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticReportRequest extends $tea.Model {
  DBInstanceId?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticReportResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDiagnosticReportResponseBody;
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
      body: CreateDiagnosticReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKillInstanceSessionTaskRequest extends $tea.Model {
  dbUser?: string;
  dbUserPassword?: string;
  ignoredUsers?: string;
  instanceId?: string;
  killAllSessions?: boolean;
  nodeId?: string;
  sessionIds?: string;
  static names(): { [key: string]: string } {
    return {
      dbUser: 'DbUser',
      dbUserPassword: 'DbUserPassword',
      ignoredUsers: 'IgnoredUsers',
      instanceId: 'InstanceId',
      killAllSessions: 'KillAllSessions',
      nodeId: 'NodeId',
      sessionIds: 'SessionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbUser: 'string',
      dbUserPassword: 'string',
      ignoredUsers: 'string',
      instanceId: 'string',
      killAllSessions: 'boolean',
      nodeId: 'string',
      sessionIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKillInstanceSessionTaskResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKillInstanceSessionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateKillInstanceSessionTaskResponseBody;
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
      body: CreateKillInstanceSessionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKillInstanceSessionTaskWithMaintainUserRequest extends $tea.Model {
  ignoredUsers?: string;
  instanceId?: string;
  killAllSessions?: boolean;
  nodeId?: string;
  sessionIds?: string;
  static names(): { [key: string]: string } {
    return {
      ignoredUsers: 'IgnoredUsers',
      instanceId: 'InstanceId',
      killAllSessions: 'KillAllSessions',
      nodeId: 'NodeId',
      sessionIds: 'SessionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoredUsers: 'string',
      instanceId: 'string',
      killAllSessions: 'boolean',
      nodeId: 'string',
      sessionIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKillInstanceSessionTaskWithMaintainUserResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKillInstanceSessionTaskWithMaintainUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateKillInstanceSessionTaskWithMaintainUserResponseBody;
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
      body: CreateKillInstanceSessionTaskWithMaintainUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueryOptimizeTagRequest extends $tea.Model {
  comments?: string;
  engine?: string;
  instanceId?: string;
  sqlIds?: string;
  status?: number;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      engine: 'Engine',
      instanceId: 'InstanceId',
      sqlIds: 'SqlIds',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      engine: 'string',
      instanceId: 'string',
      sqlIds: 'string',
      status: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueryOptimizeTagResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueryOptimizeTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateQueryOptimizeTagResponseBody;
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
      body: CreateQueryOptimizeTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRequestDiagnosisRequest extends $tea.Model {
  database?: string;
  instanceId?: string;
  nodeId?: string;
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      instanceId: 'string',
      nodeId: 'string',
      sql: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRequestDiagnosisResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRequestDiagnosisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRequestDiagnosisResponseBody;
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
      body: CreateRequestDiagnosisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStorageAnalysisTaskRequest extends $tea.Model {
  dbName?: string;
  instanceId?: string;
  nodeId?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      instanceId: 'string',
      nodeId: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStorageAnalysisTaskResponseBody extends $tea.Model {
  code?: number;
  data?: CreateStorageAnalysisTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateStorageAnalysisTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStorageAnalysisTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateStorageAnalysisTaskResponseBody;
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
      body: CreateStorageAnalysisTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudBenchTaskRequest extends $tea.Model {
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

export class DeleteCloudBenchTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudBenchTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCloudBenchTaskResponseBody;
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
      body: DeleteCloudBenchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStopGatewayRequest extends $tea.Model {
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStopGatewayResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStopGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteStopGatewayResponseBody;
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
      body: DeleteStopGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeAutoScalingConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeAutoScalingConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAutoScalingConfigResponseBody;
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
      body: DescribeAutoScalingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingHistoryRequest extends $tea.Model {
  autoScalingTaskType?: string;
  endTime?: number;
  instanceId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      autoScalingTaskType: 'AutoScalingTaskType',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScalingTaskType: 'string',
      endTime: 'number',
      instanceId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingHistoryResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeAutoScalingHistoryResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeAutoScalingHistoryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAutoScalingHistoryResponseBody;
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
      body: DescribeAutoScalingHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobRequest extends $tea.Model {
  instanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeCacheAnalysisJobResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeCacheAnalysisJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCacheAnalysisJobResponseBody;
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
      body: DescribeCacheAnalysisJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobsRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  pageNo?: string;
  pageSize?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      pageNo: 'string',
      pageSize: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeCacheAnalysisJobsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeCacheAnalysisJobsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCacheAnalysisJobsResponseBody;
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
      body: DescribeCacheAnalysisJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudBenchTasksRequest extends $tea.Model {
  endTime?: string;
  pageNo?: string;
  pageSize?: string;
  startTime?: string;
  status?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNo: 'string',
      pageSize: 'string',
      startTime: 'string',
      status: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudBenchTasksResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeCloudBenchTasksResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeCloudBenchTasksResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudBenchTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCloudBenchTasksResponseBody;
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
      body: DescribeCloudBenchTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudbenchTaskRequest extends $tea.Model {
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

export class DescribeCloudbenchTaskResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeCloudbenchTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeCloudbenchTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudbenchTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCloudbenchTaskResponseBody;
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
      body: DescribeCloudbenchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudbenchTaskConfigRequest extends $tea.Model {
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

export class DescribeCloudbenchTaskConfigResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeCloudbenchTaskConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeCloudbenchTaskConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudbenchTaskConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCloudbenchTaskConfigResponseBody;
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
      body: DescribeCloudbenchTaskConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportListRequest extends $tea.Model {
  DBInstanceId?: string;
  endTime?: string;
  pageNo?: string;
  pageSize?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      pageNo: 'string',
      pageSize: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportListResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDiagnosticReportListResponseBody;
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
      body: DescribeDiagnosticReportListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotBigKeysRequest extends $tea.Model {
  consoleContext?: string;
  instanceId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotBigKeysResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeHotBigKeysResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeHotBigKeysResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotBigKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeHotBigKeysResponseBody;
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
      body: DescribeHotBigKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotKeysRequest extends $tea.Model {
  instanceId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotKeysResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeHotKeysResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeHotKeysResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeHotKeysResponseBody;
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
      body: DescribeHotKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDasProRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDasProResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDasProResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceDasProResponseBody;
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
      body: DescribeInstanceDasProResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopBigKeysRequest extends $tea.Model {
  consoleContext?: string;
  endTime?: string;
  instanceId?: string;
  nodeId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      endTime: 'string',
      instanceId: 'string',
      nodeId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopBigKeysResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeTopBigKeysResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeTopBigKeysResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopBigKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTopBigKeysResponseBody;
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
      body: DescribeTopBigKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopHotKeysRequest extends $tea.Model {
  consoleContext?: string;
  endTime?: string;
  instanceId?: string;
  nodeId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      endTime: 'string',
      instanceId: 'string',
      nodeId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopHotKeysResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeTopHotKeysResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeTopHotKeysResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopHotKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTopHotKeysResponseBody;
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
      body: DescribeTopHotKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAllSqlConcurrencyControlRulesRequest extends $tea.Model {
  consoleContext?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAllSqlConcurrencyControlRulesResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAllSqlConcurrencyControlRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableAllSqlConcurrencyControlRulesResponseBody;
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
      body: DisableAllSqlConcurrencyControlRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoResourceOptimizeRulesRequest extends $tea.Model {
  consoleContext?: string;
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoResourceOptimizeRulesResponseBody extends $tea.Model {
  code?: number;
  data?: DisableAutoResourceOptimizeRulesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DisableAutoResourceOptimizeRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoResourceOptimizeRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableAutoResourceOptimizeRulesResponseBody;
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
      body: DisableAutoResourceOptimizeRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoThrottleRulesRequest extends $tea.Model {
  consoleContext?: string;
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoThrottleRulesResponseBody extends $tea.Model {
  code?: number;
  data?: DisableAutoThrottleRulesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DisableAutoThrottleRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoThrottleRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableAutoThrottleRulesResponseBody;
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
      body: DisableAutoThrottleRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDasProRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDasProResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDasProResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableDasProResponseBody;
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
      body: DisableDasProResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInstanceDasConfigRequest extends $tea.Model {
  engine?: string;
  instanceId?: string;
  scaleType?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      instanceId: 'InstanceId',
      scaleType: 'ScaleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      instanceId: 'string',
      scaleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInstanceDasConfigResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInstanceDasConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableInstanceDasConfigResponseBody;
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
      body: DisableInstanceDasConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSqlConcurrencyControlRequest extends $tea.Model {
  consoleContext?: string;
  instanceId?: string;
  itemId?: number;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceId: 'string',
      itemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSqlConcurrencyControlResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSqlConcurrencyControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableSqlConcurrencyControlResponseBody;
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
      body: DisableSqlConcurrencyControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDasProRequest extends $tea.Model {
  instanceId?: string;
  sqlRetention?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sqlRetention: 'SqlRetention',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sqlRetention: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDasProResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDasProResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableDasProResponseBody;
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
      body: EnableDasProResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlConcurrencyControlRequest extends $tea.Model {
  concurrencyControlTime?: number;
  consoleContext?: string;
  instanceId?: string;
  maxConcurrency?: number;
  sqlKeywords?: string;
  sqlType?: string;
  static names(): { [key: string]: string } {
    return {
      concurrencyControlTime: 'ConcurrencyControlTime',
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
      maxConcurrency: 'MaxConcurrency',
      sqlKeywords: 'SqlKeywords',
      sqlType: 'SqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrencyControlTime: 'number',
      consoleContext: 'string',
      instanceId: 'string',
      maxConcurrency: 'number',
      sqlKeywords: 'string',
      sqlType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlConcurrencyControlResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlConcurrencyControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableSqlConcurrencyControlResponseBody;
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
      body: EnableSqlConcurrencyControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestListByCodeRequest extends $tea.Model {
  end?: number;
  errorCode?: string;
  instanceId?: string;
  nodeId?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      errorCode: 'ErrorCode',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      errorCode: 'string',
      instanceId: 'string',
      nodeId: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestListByCodeResponseBody extends $tea.Model {
  code?: number;
  data?: GetAsyncErrorRequestListByCodeResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAsyncErrorRequestListByCodeResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestListByCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAsyncErrorRequestListByCodeResponseBody;
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
      body: GetAsyncErrorRequestListByCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestStatByCodeRequest extends $tea.Model {
  dbName?: string;
  end?: number;
  instanceId?: string;
  nodeId?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      end: 'End',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      end: 'number',
      instanceId: 'string',
      nodeId: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestStatByCodeResponseBody extends $tea.Model {
  code?: number;
  data?: GetAsyncErrorRequestStatByCodeResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAsyncErrorRequestStatByCodeResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestStatByCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAsyncErrorRequestStatByCodeResponseBody;
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
      body: GetAsyncErrorRequestStatByCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestStatResultRequest extends $tea.Model {
  dbName?: string;
  end?: number;
  instanceId?: string;
  nodeId?: string;
  sqlIdList?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      end: 'End',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      sqlIdList: 'SqlIdList',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      end: 'number',
      instanceId: 'string',
      nodeId: 'string',
      sqlIdList: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestStatResultResponseBody extends $tea.Model {
  code?: number;
  data?: GetAsyncErrorRequestStatResultResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAsyncErrorRequestStatResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestStatResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAsyncErrorRequestStatResultResponseBody;
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
      body: GetAsyncErrorRequestStatResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoIncrementUsageStatisticRequest extends $tea.Model {
  dbNames?: string;
  instanceId?: string;
  ratioFilter?: number;
  realTime?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbNames: 'DbNames',
      instanceId: 'InstanceId',
      ratioFilter: 'RatioFilter',
      realTime: 'RealTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbNames: 'string',
      instanceId: 'string',
      ratioFilter: 'number',
      realTime: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoIncrementUsageStatisticResponseBody extends $tea.Model {
  code?: number;
  data?: GetAutoIncrementUsageStatisticResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAutoIncrementUsageStatisticResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoIncrementUsageStatisticResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAutoIncrementUsageStatisticResponseBody;
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
      body: GetAutoIncrementUsageStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoResourceOptimizeRulesRequest extends $tea.Model {
  consoleContext?: string;
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoResourceOptimizeRulesResponseBody extends $tea.Model {
  code?: number;
  data?: GetAutoResourceOptimizeRulesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAutoResourceOptimizeRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoResourceOptimizeRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAutoResourceOptimizeRulesResponseBody;
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
      body: GetAutoResourceOptimizeRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoThrottleRulesRequest extends $tea.Model {
  consoleContext?: string;
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoThrottleRulesResponseBody extends $tea.Model {
  code?: number;
  data?: GetAutoThrottleRulesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAutoThrottleRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoThrottleRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAutoThrottleRulesResponseBody;
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
      body: GetAutoThrottleRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutonomousNotifyEventContentRequest extends $tea.Model {
  instanceId?: string;
  spanId?: string;
  context?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      spanId: 'SpanId',
      context: '__context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      spanId: 'string',
      context: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutonomousNotifyEventContentResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutonomousNotifyEventContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAutonomousNotifyEventContentResponseBody;
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
      body: GetAutonomousNotifyEventContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutonomousNotifyEventsInRangeRequest extends $tea.Model {
  endTime?: string;
  eventContext?: string;
  instanceId?: string;
  level?: string;
  minLevel?: string;
  nodeId?: string;
  pageOffset?: string;
  pageSize?: string;
  startTime?: string;
  context?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventContext: 'EventContext',
      instanceId: 'InstanceId',
      level: 'Level',
      minLevel: 'MinLevel',
      nodeId: 'NodeId',
      pageOffset: 'PageOffset',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      context: '__context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventContext: 'string',
      instanceId: 'string',
      level: 'string',
      minLevel: 'string',
      nodeId: 'string',
      pageOffset: 'string',
      pageSize: 'string',
      startTime: 'string',
      context: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutonomousNotifyEventsInRangeResponseBody extends $tea.Model {
  code?: string;
  data?: GetAutonomousNotifyEventsInRangeResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAutonomousNotifyEventsInRangeResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutonomousNotifyEventsInRangeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAutonomousNotifyEventsInRangeResponseBody;
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
      body: GetAutonomousNotifyEventsInRangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBlockingDetailListRequest extends $tea.Model {
  dbNameList?: string;
  endTime?: string;
  instanceId?: string;
  pageNo?: string;
  pageSize?: string;
  queryHash?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dbNameList: 'DbNameList',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      queryHash: 'QueryHash',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbNameList: 'string',
      endTime: 'string',
      instanceId: 'string',
      pageNo: 'string',
      pageSize: 'string',
      queryHash: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBlockingDetailListResponseBody extends $tea.Model {
  code?: string;
  data?: GetBlockingDetailListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBlockingDetailListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBlockingDetailListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBlockingDetailListResponseBody;
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
      body: GetBlockingDetailListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBInstanceConnectivityDiagnosisRequest extends $tea.Model {
  instanceId?: string;
  srcIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      srcIp: 'SrcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      srcIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBInstanceConnectivityDiagnosisResponseBody extends $tea.Model {
  code?: string;
  data?: GetDBInstanceConnectivityDiagnosisResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDBInstanceConnectivityDiagnosisResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBInstanceConnectivityDiagnosisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDBInstanceConnectivityDiagnosisResponseBody;
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
      body: GetDBInstanceConnectivityDiagnosisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasProServiceUsageRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasProServiceUsageResponseBody extends $tea.Model {
  code?: number;
  data?: GetDasProServiceUsageResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetDasProServiceUsageResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasProServiceUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDasProServiceUsageResponseBody;
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
      body: GetDasProServiceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasSQLLogHotDataRequest extends $tea.Model {
  accountName?: string;
  childDBInstanceIDs?: string;
  DBName?: string;
  end?: number;
  fail?: string;
  hostAddress?: string;
  instanceId?: string;
  logicalOperator?: string;
  maxLatancy?: number;
  maxRecordsPerPage?: number;
  maxRows?: number;
  maxScanRows?: number;
  maxSpillCnt?: number;
  minLatancy?: number;
  minRows?: number;
  minScanRows?: number;
  minSpillCnt?: number;
  pageNumbers?: number;
  queryKeyword?: string;
  role?: string;
  sortKey?: string;
  sortMethod?: string;
  sqlType?: string;
  start?: number;
  state?: string;
  threadID?: string;
  traceId?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      childDBInstanceIDs: 'ChildDBInstanceIDs',
      DBName: 'DBName',
      end: 'End',
      fail: 'Fail',
      hostAddress: 'HostAddress',
      instanceId: 'InstanceId',
      logicalOperator: 'LogicalOperator',
      maxLatancy: 'MaxLatancy',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      maxRows: 'MaxRows',
      maxScanRows: 'MaxScanRows',
      maxSpillCnt: 'MaxSpillCnt',
      minLatancy: 'MinLatancy',
      minRows: 'MinRows',
      minScanRows: 'MinScanRows',
      minSpillCnt: 'MinSpillCnt',
      pageNumbers: 'PageNumbers',
      queryKeyword: 'QueryKeyword',
      role: 'Role',
      sortKey: 'SortKey',
      sortMethod: 'SortMethod',
      sqlType: 'SqlType',
      start: 'Start',
      state: 'State',
      threadID: 'ThreadID',
      traceId: 'TraceId',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      childDBInstanceIDs: 'string',
      DBName: 'string',
      end: 'number',
      fail: 'string',
      hostAddress: 'string',
      instanceId: 'string',
      logicalOperator: 'string',
      maxLatancy: 'number',
      maxRecordsPerPage: 'number',
      maxRows: 'number',
      maxScanRows: 'number',
      maxSpillCnt: 'number',
      minLatancy: 'number',
      minRows: 'number',
      minScanRows: 'number',
      minSpillCnt: 'number',
      pageNumbers: 'number',
      queryKeyword: 'string',
      role: 'string',
      sortKey: 'string',
      sortMethod: 'string',
      sqlType: 'string',
      start: 'number',
      state: 'string',
      threadID: 'string',
      traceId: 'string',
      transactionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasSQLLogHotDataResponseBody extends $tea.Model {
  code?: string;
  data?: GetDasSQLLogHotDataResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDasSQLLogHotDataResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasSQLLogHotDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDasSQLLogHotDataResponseBody;
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
      body: GetDasSQLLogHotDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeadLockDetailListRequest extends $tea.Model {
  dbNameList?: string;
  endTime?: string;
  instanceId?: string;
  pageNo?: string;
  pageSize?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dbNameList: 'DbNameList',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbNameList: 'string',
      endTime: 'string',
      instanceId: 'string',
      pageNo: 'string',
      pageSize: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeadLockDetailListResponseBody extends $tea.Model {
  code?: string;
  data?: GetDeadLockDetailListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeadLockDetailListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeadLockDetailListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeadLockDetailListResponseBody;
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
      body: GetDeadLockDetailListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndpointSwitchTaskRequest extends $tea.Model {
  taskId?: string;
  uid?: string;
  userId?: string;
  context?: string;
  accessKey?: string;
  signature?: string;
  skipAuth?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      uid: 'Uid',
      userId: 'UserId',
      context: '__context',
      accessKey: 'accessKey',
      signature: 'signature',
      skipAuth: 'skipAuth',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      uid: 'string',
      userId: 'string',
      context: 'string',
      accessKey: 'string',
      signature: 'string',
      skipAuth: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndpointSwitchTaskResponseBody extends $tea.Model {
  code?: string;
  data?: GetEndpointSwitchTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEndpointSwitchTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndpointSwitchTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEndpointSwitchTaskResponseBody;
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
      body: GetEndpointSwitchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorRequestSampleRequest extends $tea.Model {
  dbName?: string;
  end?: number;
  instanceId?: string;
  nodeId?: string;
  sqlId?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      end: 'End',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      sqlId: 'SqlId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      end: 'number',
      instanceId: 'string',
      nodeId: 'string',
      sqlId: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorRequestSampleResponseBody extends $tea.Model {
  code?: number;
  data?: GetErrorRequestSampleResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetErrorRequestSampleResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorRequestSampleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetErrorRequestSampleResponseBody;
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
      body: GetErrorRequestSampleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventSubscriptionRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventSubscriptionResponseBody extends $tea.Model {
  code?: string;
  data?: GetEventSubscriptionResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEventSubscriptionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventSubscriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEventSubscriptionResponseBody;
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
      body: GetEventSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestOriginStatByInstanceIdRequest extends $tea.Model {
  asc?: boolean;
  end?: number;
  instanceId?: string;
  nodeId?: string;
  orderBy?: string;
  pageNo?: number;
  pageSize?: number;
  role?: string;
  sqlType?: string;
  start?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      end: 'End',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      orderBy: 'OrderBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      role: 'Role',
      sqlType: 'SqlType',
      start: 'Start',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      end: 'number',
      instanceId: 'string',
      nodeId: 'string',
      orderBy: 'string',
      pageNo: 'number',
      pageSize: 'number',
      role: 'string',
      sqlType: 'string',
      start: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestOriginStatByInstanceIdResponseBody extends $tea.Model {
  code?: number;
  data?: GetFullRequestOriginStatByInstanceIdResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetFullRequestOriginStatByInstanceIdResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestOriginStatByInstanceIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFullRequestOriginStatByInstanceIdResponseBody;
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
      body: GetFullRequestOriginStatByInstanceIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestSampleByInstanceIdRequest extends $tea.Model {
  end?: number;
  instanceId?: string;
  role?: string;
  sqlId?: string;
  start?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      instanceId: 'InstanceId',
      role: 'Role',
      sqlId: 'SqlId',
      start: 'Start',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      instanceId: 'string',
      role: 'string',
      sqlId: 'string',
      start: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestSampleByInstanceIdResponseBody extends $tea.Model {
  code?: number;
  data?: GetFullRequestSampleByInstanceIdResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetFullRequestSampleByInstanceIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestSampleByInstanceIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFullRequestSampleByInstanceIdResponseBody;
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
      body: GetFullRequestSampleByInstanceIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestStatResultByInstanceIdRequest extends $tea.Model {
  asc?: boolean;
  dbName?: string;
  end?: number;
  instanceId?: string;
  keyword?: string;
  nodeId?: string;
  orderBy?: string;
  originHost?: string;
  pageNo?: number;
  pageSize?: number;
  role?: string;
  sqlId?: string;
  sqlType?: string;
  start?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      dbName: 'DbName',
      end: 'End',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      nodeId: 'NodeId',
      orderBy: 'OrderBy',
      originHost: 'OriginHost',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      role: 'Role',
      sqlId: 'SqlId',
      sqlType: 'SqlType',
      start: 'Start',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      dbName: 'string',
      end: 'number',
      instanceId: 'string',
      keyword: 'string',
      nodeId: 'string',
      orderBy: 'string',
      originHost: 'string',
      pageNo: 'number',
      pageSize: 'number',
      role: 'string',
      sqlId: 'string',
      sqlType: 'string',
      start: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestStatResultByInstanceIdResponseBody extends $tea.Model {
  code?: number;
  data?: GetFullRequestStatResultByInstanceIdResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetFullRequestStatResultByInstanceIdResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestStatResultByInstanceIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFullRequestStatResultByInstanceIdResponseBody;
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
      body: GetFullRequestStatResultByInstanceIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHDMAliyunResourceSyncResultRequest extends $tea.Model {
  taskId?: string;
  uid?: string;
  userId?: string;
  context?: string;
  accessKey?: string;
  signature?: string;
  skipAuth?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      uid: 'Uid',
      userId: 'UserId',
      context: '__context',
      accessKey: 'accessKey',
      signature: 'signature',
      skipAuth: 'skipAuth',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      uid: 'string',
      userId: 'string',
      context: 'string',
      accessKey: 'string',
      signature: 'string',
      skipAuth: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHDMAliyunResourceSyncResultResponseBody extends $tea.Model {
  code?: string;
  data?: GetHDMAliyunResourceSyncResultResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHDMAliyunResourceSyncResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHDMAliyunResourceSyncResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHDMAliyunResourceSyncResultResponseBody;
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
      body: GetHDMAliyunResourceSyncResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHDMLastAliyunResourceSyncResultRequest extends $tea.Model {
  uid?: string;
  userId?: string;
  context?: string;
  accessKey?: string;
  signature?: string;
  skipAuth?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
      userId: 'UserId',
      context: '__context',
      accessKey: 'accessKey',
      signature: 'signature',
      skipAuth: 'skipAuth',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
      userId: 'string',
      context: 'string',
      accessKey: 'string',
      signature: 'string',
      skipAuth: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHDMLastAliyunResourceSyncResultResponseBody extends $tea.Model {
  code?: string;
  data?: GetHDMLastAliyunResourceSyncResultResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHDMLastAliyunResourceSyncResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHDMLastAliyunResourceSyncResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHDMLastAliyunResourceSyncResultResponseBody;
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
      body: GetHDMLastAliyunResourceSyncResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionsRequest extends $tea.Model {
  endTime?: string;
  engine?: string;
  instanceArea?: string;
  pageNo?: string;
  pageSize?: string;
  resourceGroupId?: string;
  searchMap?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      engine: 'Engine',
      instanceArea: 'InstanceArea',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      searchMap: 'SearchMap',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      engine: 'string',
      instanceArea: 'string',
      pageNo: 'string',
      pageSize: 'string',
      resourceGroupId: 'string',
      searchMap: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionsResponseBody extends $tea.Model {
  code?: string;
  data?: GetInstanceInspectionsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInstanceInspectionsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceInspectionsResponseBody;
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
      body: GetInstanceInspectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMissingIndexListRequest extends $tea.Model {
  avgTotalUserCost?: string;
  avgUserImpact?: string;
  endTime?: string;
  indexCount?: string;
  instanceId?: string;
  objectName?: string;
  pageNo?: string;
  pageSize?: string;
  reservedPages?: string;
  reservedSize?: string;
  rowCount?: string;
  startTime?: string;
  uniqueCompiles?: string;
  userScans?: string;
  userSeeks?: string;
  static names(): { [key: string]: string } {
    return {
      avgTotalUserCost: 'AvgTotalUserCost',
      avgUserImpact: 'AvgUserImpact',
      endTime: 'EndTime',
      indexCount: 'IndexCount',
      instanceId: 'InstanceId',
      objectName: 'ObjectName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      reservedPages: 'ReservedPages',
      reservedSize: 'ReservedSize',
      rowCount: 'RowCount',
      startTime: 'StartTime',
      uniqueCompiles: 'UniqueCompiles',
      userScans: 'UserScans',
      userSeeks: 'UserSeeks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgTotalUserCost: 'string',
      avgUserImpact: 'string',
      endTime: 'string',
      indexCount: 'string',
      instanceId: 'string',
      objectName: 'string',
      pageNo: 'string',
      pageSize: 'string',
      reservedPages: 'string',
      reservedSize: 'string',
      rowCount: 'string',
      startTime: 'string',
      uniqueCompiles: 'string',
      userScans: 'string',
      userSeeks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMissingIndexListResponseBody extends $tea.Model {
  code?: string;
  data?: GetInstanceMissingIndexListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInstanceMissingIndexListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMissingIndexListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceMissingIndexListResponseBody;
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
      body: GetInstanceMissingIndexListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSqlOptimizeStatisticRequest extends $tea.Model {
  endTime?: string;
  filterEnable?: string;
  instanceId?: string;
  nodeId?: string;
  startTime?: string;
  threshold?: string;
  useMerging?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      filterEnable: 'FilterEnable',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      startTime: 'StartTime',
      threshold: 'Threshold',
      useMerging: 'UseMerging',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      filterEnable: 'string',
      instanceId: 'string',
      nodeId: 'string',
      startTime: 'string',
      threshold: 'string',
      useMerging: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSqlOptimizeStatisticResponseBody extends $tea.Model {
  code?: string;
  data?: GetInstanceSqlOptimizeStatisticResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInstanceSqlOptimizeStatisticResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSqlOptimizeStatisticResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceSqlOptimizeStatisticResponseBody;
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
      body: GetInstanceSqlOptimizeStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKillInstanceSessionTaskResultRequest extends $tea.Model {
  instanceId?: string;
  nodeId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKillInstanceSessionTaskResultResponseBody extends $tea.Model {
  code?: number;
  data?: GetKillInstanceSessionTaskResultResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetKillInstanceSessionTaskResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKillInstanceSessionTaskResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetKillInstanceSessionTaskResultResponseBody;
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
      body: GetKillInstanceSessionTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMongoDBCurrentOpRequest extends $tea.Model {
  filterDoc?: string;
  instanceId?: string;
  nodeId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      filterDoc: 'FilterDoc',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterDoc: 'string',
      instanceId: 'string',
      nodeId: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMongoDBCurrentOpResponseBody extends $tea.Model {
  code?: number;
  data?: GetMongoDBCurrentOpResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetMongoDBCurrentOpResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMongoDBCurrentOpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMongoDBCurrentOpResponseBody;
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
      body: GetMongoDBCurrentOpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncRequest extends $tea.Model {
  instanceId?: string;
  nodeId?: string;
  resultId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      resultId: 'ResultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'string',
      resultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncResponseBody extends $tea.Model {
  code?: number;
  data?: GetMySQLAllSessionAsyncResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetMySQLAllSessionAsyncResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMySQLAllSessionAsyncResponseBody;
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
      body: GetMySQLAllSessionAsyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartitionsHeatmapRequest extends $tea.Model {
  consoleContext?: string;
  instanceId?: string;
  timeRange?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
      timeRange: 'TimeRange',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceId: 'string',
      timeRange: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartitionsHeatmapResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartitionsHeatmapResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPartitionsHeatmapResponseBody;
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
      body: GetPartitionsHeatmapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsMetricTrendsRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  metric?: string;
  nodeId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      metric: 'Metric',
      nodeId: 'NodeId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      metric: 'string',
      nodeId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsMetricTrendsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: DataValue[] };
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataValue } },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsMetricTrendsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPfsMetricTrendsResponseBody;
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
      body: GetPfsMetricTrendsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsSqlSampleRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  nodeId?: string;
  sqlId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      sqlId: 'SqlId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      nodeId: 'string',
      sqlId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsSqlSampleResponseBody extends $tea.Model {
  code?: number;
  data?: GetPfsSqlSampleResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetPfsSqlSampleResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsSqlSampleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPfsSqlSampleResponseBody;
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
      body: GetPfsSqlSampleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsSqlSummariesRequest extends $tea.Model {
  asc?: boolean;
  endTime?: number;
  instanceId?: string;
  keywords?: string;
  nodeId?: string;
  orderBy?: string;
  pageNo?: number;
  pageSize?: number;
  sqlId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      keywords: 'Keywords',
      nodeId: 'NodeId',
      orderBy: 'OrderBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sqlId: 'SqlId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      endTime: 'number',
      instanceId: 'string',
      keywords: 'string',
      nodeId: 'string',
      orderBy: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sqlId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsSqlSummariesResponseBody extends $tea.Model {
  code?: number;
  data?: GetPfsSqlSummariesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetPfsSqlSummariesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsSqlSummariesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPfsSqlSummariesResponseBody;
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
      body: GetPfsSqlSummariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataStatsRequest extends $tea.Model {
  asc?: string;
  dbNames?: string;
  engine?: string;
  instanceIds?: string;
  keywords?: string;
  logicalOperator?: string;
  onlyOptimizedSql?: string;
  orderBy?: string;
  pageNo?: string;
  pageSize?: string;
  region?: string;
  rules?: string;
  sqlIds?: string;
  tagNames?: string;
  time?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      dbNames: 'DbNames',
      engine: 'Engine',
      instanceIds: 'InstanceIds',
      keywords: 'Keywords',
      logicalOperator: 'LogicalOperator',
      onlyOptimizedSql: 'OnlyOptimizedSql',
      orderBy: 'OrderBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      region: 'Region',
      rules: 'Rules',
      sqlIds: 'SqlIds',
      tagNames: 'TagNames',
      time: 'Time',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'string',
      dbNames: 'string',
      engine: 'string',
      instanceIds: 'string',
      keywords: 'string',
      logicalOperator: 'string',
      onlyOptimizedSql: 'string',
      orderBy: 'string',
      pageNo: 'string',
      pageSize: 'string',
      region: 'string',
      rules: 'string',
      sqlIds: 'string',
      tagNames: 'string',
      time: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataStatsResponseBody extends $tea.Model {
  code?: string;
  data?: GetQueryOptimizeDataStatsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQueryOptimizeDataStatsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataStatsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQueryOptimizeDataStatsResponseBody;
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
      body: GetQueryOptimizeDataStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataTopRequest extends $tea.Model {
  engine?: string;
  instanceIds?: string;
  region?: string;
  tagNames?: string;
  time?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      instanceIds: 'InstanceIds',
      region: 'Region',
      tagNames: 'TagNames',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      instanceIds: 'string',
      region: 'string',
      tagNames: 'string',
      time: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataTopResponseBody extends $tea.Model {
  code?: string;
  data?: GetQueryOptimizeDataTopResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQueryOptimizeDataTopResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataTopResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQueryOptimizeDataTopResponseBody;
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
      body: GetQueryOptimizeDataTopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataTrendRequest extends $tea.Model {
  end?: string;
  engine?: string;
  instanceIds?: string;
  region?: string;
  start?: string;
  tagNames?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      engine: 'Engine',
      instanceIds: 'InstanceIds',
      region: 'Region',
      start: 'Start',
      tagNames: 'TagNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      engine: 'string',
      instanceIds: 'string',
      region: 'string',
      start: 'string',
      tagNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataTrendResponseBody extends $tea.Model {
  code?: string;
  data?: GetQueryOptimizeDataTrendResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQueryOptimizeDataTrendResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataTrendResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQueryOptimizeDataTrendResponseBody;
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
      body: GetQueryOptimizeDataTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeExecErrorSampleRequest extends $tea.Model {
  engine?: string;
  instanceId?: string;
  sqlId?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      instanceId: 'InstanceId',
      sqlId: 'SqlId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      instanceId: 'string',
      sqlId: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeExecErrorSampleResponseBody extends $tea.Model {
  code?: string;
  data?: GetQueryOptimizeExecErrorSampleResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQueryOptimizeExecErrorSampleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeExecErrorSampleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQueryOptimizeExecErrorSampleResponseBody;
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
      body: GetQueryOptimizeExecErrorSampleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeExecErrorStatsRequest extends $tea.Model {
  asc?: string;
  dbNames?: string;
  engine?: string;
  instanceIds?: string;
  keywords?: string;
  logicalOperator?: string;
  orderBy?: string;
  pageNo?: string;
  pageSize?: string;
  region?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      dbNames: 'DbNames',
      engine: 'Engine',
      instanceIds: 'InstanceIds',
      keywords: 'Keywords',
      logicalOperator: 'LogicalOperator',
      orderBy: 'OrderBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      region: 'Region',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'string',
      dbNames: 'string',
      engine: 'string',
      instanceIds: 'string',
      keywords: 'string',
      logicalOperator: 'string',
      orderBy: 'string',
      pageNo: 'string',
      pageSize: 'string',
      region: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeExecErrorStatsResponseBody extends $tea.Model {
  code?: string;
  data?: GetQueryOptimizeExecErrorStatsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQueryOptimizeExecErrorStatsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeExecErrorStatsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQueryOptimizeExecErrorStatsResponseBody;
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
      body: GetQueryOptimizeExecErrorStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeRuleListRequest extends $tea.Model {
  engine?: string;
  instanceIds?: string;
  region?: string;
  tagNames?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      instanceIds: 'InstanceIds',
      region: 'Region',
      tagNames: 'TagNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      instanceIds: 'string',
      region: 'string',
      tagNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeRuleListResponseBody extends $tea.Model {
  code?: string;
  data?: GetQueryOptimizeRuleListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQueryOptimizeRuleListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeRuleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQueryOptimizeRuleListResponseBody;
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
      body: GetQueryOptimizeRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeShareUrlRequest extends $tea.Model {
  asc?: boolean;
  dbNames?: string;
  engine?: string;
  instanceIds?: string;
  keywords?: string;
  logicalOperator?: string;
  onlyOptimizedSql?: boolean;
  orderBy?: string;
  pageNo?: number;
  pageSize?: number;
  region?: string;
  rules?: string;
  sqlIds?: string;
  tagNames?: string;
  time?: number;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      dbNames: 'DbNames',
      engine: 'Engine',
      instanceIds: 'InstanceIds',
      keywords: 'Keywords',
      logicalOperator: 'LogicalOperator',
      onlyOptimizedSql: 'OnlyOptimizedSql',
      orderBy: 'OrderBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      region: 'Region',
      rules: 'Rules',
      sqlIds: 'SqlIds',
      tagNames: 'TagNames',
      time: 'Time',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      dbNames: 'string',
      engine: 'string',
      instanceIds: 'string',
      keywords: 'string',
      logicalOperator: 'string',
      onlyOptimizedSql: 'boolean',
      orderBy: 'string',
      pageNo: 'number',
      pageSize: 'number',
      region: 'string',
      rules: 'string',
      sqlIds: 'string',
      tagNames: 'string',
      time: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeShareUrlResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeShareUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQueryOptimizeShareUrlResponseBody;
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
      body: GetQueryOptimizeShareUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeSolutionRequest extends $tea.Model {
  engine?: string;
  instanceId?: string;
  ruleIds?: string;
  sqlId?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      instanceId: 'InstanceId',
      ruleIds: 'RuleIds',
      sqlId: 'SqlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      instanceId: 'string',
      ruleIds: 'string',
      sqlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeSolutionResponseBody extends $tea.Model {
  code?: string;
  data?: GetQueryOptimizeSolutionResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQueryOptimizeSolutionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeSolutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQueryOptimizeSolutionResponseBody;
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
      body: GetQueryOptimizeSolutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeTagRequest extends $tea.Model {
  engine?: string;
  instanceId?: string;
  sqlId?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      instanceId: 'InstanceId',
      sqlId: 'SqlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      instanceId: 'string',
      sqlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeTagResponseBody extends $tea.Model {
  code?: string;
  data?: GetQueryOptimizeTagResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQueryOptimizeTagResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQueryOptimizeTagResponseBody;
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
      body: GetQueryOptimizeTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRedisAllSessionRequest extends $tea.Model {
  consoleContext?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRedisAllSessionResponseBody extends $tea.Model {
  code?: number;
  data?: GetRedisAllSessionResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetRedisAllSessionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRedisAllSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRedisAllSessionResponseBody;
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
      body: GetRedisAllSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestDiagnosisPageRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  nodeId?: string;
  pageNo?: number;
  pageSize?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      nodeId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestDiagnosisPageResponseBody extends $tea.Model {
  code?: string;
  data?: GetRequestDiagnosisPageResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRequestDiagnosisPageResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestDiagnosisPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRequestDiagnosisPageResponseBody;
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
      body: GetRequestDiagnosisPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestDiagnosisResultRequest extends $tea.Model {
  instanceId?: string;
  messageId?: string;
  nodeId?: string;
  source?: string;
  sqlId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      messageId: 'MessageId',
      nodeId: 'NodeId',
      source: 'Source',
      sqlId: 'SqlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      messageId: 'string',
      nodeId: 'string',
      source: 'string',
      sqlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestDiagnosisResultResponseBody extends $tea.Model {
  code?: string;
  data?: GetRequestDiagnosisResultResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRequestDiagnosisResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestDiagnosisResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRequestDiagnosisResultResponseBody;
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
      body: GetRequestDiagnosisResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningSqlConcurrencyControlRulesRequest extends $tea.Model {
  consoleContext?: string;
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningSqlConcurrencyControlRulesResponseBody extends $tea.Model {
  code?: string;
  data?: GetRunningSqlConcurrencyControlRulesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRunningSqlConcurrencyControlRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningSqlConcurrencyControlRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRunningSqlConcurrencyControlRulesResponseBody;
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
      body: GetRunningSqlConcurrencyControlRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlConcurrencyControlKeywordsFromSqlTextRequest extends $tea.Model {
  consoleContext?: string;
  instanceId?: string;
  sqlText?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
      sqlText: 'SqlText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceId: 'string',
      sqlText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlConcurrencyControlKeywordsFromSqlTextResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlConcurrencyControlKeywordsFromSqlTextResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSqlConcurrencyControlKeywordsFromSqlTextResponseBody;
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
      body: GetSqlConcurrencyControlKeywordsFromSqlTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlConcurrencyControlRulesHistoryRequest extends $tea.Model {
  consoleContext?: string;
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlConcurrencyControlRulesHistoryResponseBody extends $tea.Model {
  code?: string;
  data?: GetSqlConcurrencyControlRulesHistoryResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSqlConcurrencyControlRulesHistoryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlConcurrencyControlRulesHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSqlConcurrencyControlRulesHistoryResponseBody;
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
      body: GetSqlConcurrencyControlRulesHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlOptimizeAdviceRequest extends $tea.Model {
  consoleContext?: string;
  endDt?: string;
  engine?: string;
  instanceIds?: string;
  region?: string;
  startDt?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      endDt: 'EndDt',
      engine: 'Engine',
      instanceIds: 'InstanceIds',
      region: 'Region',
      startDt: 'StartDt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      endDt: 'string',
      engine: 'string',
      instanceIds: 'string',
      region: 'string',
      startDt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlOptimizeAdviceResponseBody extends $tea.Model {
  code?: string;
  data?: GetSqlOptimizeAdviceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSqlOptimizeAdviceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlOptimizeAdviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSqlOptimizeAdviceResponseBody;
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
      body: GetSqlOptimizeAdviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageAnalysisResultRequest extends $tea.Model {
  instanceId?: string;
  nodeId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageAnalysisResultResponseBody extends $tea.Model {
  code?: number;
  data?: GetStorageAnalysisResultResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetStorageAnalysisResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageAnalysisResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStorageAnalysisResultResponseBody;
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
      body: GetStorageAnalysisResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillInstanceAllSessionRequest extends $tea.Model {
  consoleContext?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillInstanceAllSessionResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillInstanceAllSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: KillInstanceAllSessionResponseBody;
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
      body: KillInstanceAllSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoScalingConfigRequest extends $tea.Model {
  bandwidth?: ModifyAutoScalingConfigRequestBandwidth;
  instanceId?: string;
  resource?: ModifyAutoScalingConfigRequestResource;
  shard?: ModifyAutoScalingConfigRequestShard;
  spec?: ModifyAutoScalingConfigRequestSpec;
  storage?: ModifyAutoScalingConfigRequestStorage;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      instanceId: 'InstanceId',
      resource: 'Resource',
      shard: 'Shard',
      spec: 'Spec',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: ModifyAutoScalingConfigRequestBandwidth,
      instanceId: 'string',
      resource: ModifyAutoScalingConfigRequestResource,
      shard: ModifyAutoScalingConfigRequestShard,
      spec: ModifyAutoScalingConfigRequestSpec,
      storage: ModifyAutoScalingConfigRequestStorage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoScalingConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoScalingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAutoScalingConfigResponseBody;
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
      body: ModifyAutoScalingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCloudBenchTaskRequest extends $tea.Model {
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

export class RunCloudBenchTaskResponseBody extends $tea.Model {
  code?: string;
  data?: RunCloudBenchTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RunCloudBenchTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCloudBenchTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RunCloudBenchTaskResponseBody;
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
      body: RunCloudBenchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEventSubscriptionRequest extends $tea.Model {
  active?: string;
  channelType?: string;
  contactGroupName?: string;
  contactName?: string;
  dispatchRule?: string;
  eventContext?: string;
  instanceId?: string;
  lang?: string;
  level?: string;
  minInterval?: string;
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      channelType: 'ChannelType',
      contactGroupName: 'ContactGroupName',
      contactName: 'ContactName',
      dispatchRule: 'DispatchRule',
      eventContext: 'EventContext',
      instanceId: 'InstanceId',
      lang: 'Lang',
      level: 'Level',
      minInterval: 'MinInterval',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'string',
      channelType: 'string',
      contactGroupName: 'string',
      contactName: 'string',
      dispatchRule: 'string',
      eventContext: 'string',
      instanceId: 'string',
      lang: 'string',
      level: 'string',
      minInterval: 'string',
      severity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEventSubscriptionResponseBody extends $tea.Model {
  code?: string;
  data?: SetEventSubscriptionResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SetEventSubscriptionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEventSubscriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetEventSubscriptionResponseBody;
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
      body: SetEventSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCloudBenchTaskRequest extends $tea.Model {
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

export class StopCloudBenchTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCloudBenchTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopCloudBenchTaskResponseBody;
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
      body: StopCloudBenchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncHDMAliyunResourceRequest extends $tea.Model {
  async?: string;
  resourceTypes?: string;
  uid?: string;
  userId?: string;
  waitForModifySecurityIps?: string;
  context?: string;
  accessKey?: string;
  signature?: string;
  skipAuth?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      resourceTypes: 'ResourceTypes',
      uid: 'Uid',
      userId: 'UserId',
      waitForModifySecurityIps: 'WaitForModifySecurityIps',
      context: '__context',
      accessKey: 'accessKey',
      signature: 'signature',
      skipAuth: 'skipAuth',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'string',
      resourceTypes: 'string',
      uid: 'string',
      userId: 'string',
      waitForModifySecurityIps: 'string',
      context: 'string',
      accessKey: 'string',
      signature: 'string',
      skipAuth: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncHDMAliyunResourceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncHDMAliyunResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SyncHDMAliyunResourceResponseBody;
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
      body: SyncHDMAliyunResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoResourceOptimizeRulesAsyncRequest extends $tea.Model {
  consoleContext?: string;
  instanceIds?: string;
  resultId?: string;
  tableFragmentationRatio?: number;
  tableSpaceSize?: number;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceIds: 'InstanceIds',
      resultId: 'ResultId',
      tableFragmentationRatio: 'TableFragmentationRatio',
      tableSpaceSize: 'TableSpaceSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceIds: 'string',
      resultId: 'string',
      tableFragmentationRatio: 'number',
      tableSpaceSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoResourceOptimizeRulesAsyncResponseBody extends $tea.Model {
  code?: number;
  data?: UpdateAutoResourceOptimizeRulesAsyncResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: UpdateAutoResourceOptimizeRulesAsyncResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoResourceOptimizeRulesAsyncResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAutoResourceOptimizeRulesAsyncResponseBody;
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
      body: UpdateAutoResourceOptimizeRulesAsyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoSqlOptimizeStatusRequest extends $tea.Model {
  instances?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoSqlOptimizeStatusResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateAutoSqlOptimizeStatusResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateAutoSqlOptimizeStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoSqlOptimizeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAutoSqlOptimizeStatusResponseBody;
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
      body: UpdateAutoSqlOptimizeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoThrottleRulesAsyncRequest extends $tea.Model {
  abnormalDuration?: number;
  activeSessions?: number;
  allowThrottleEndTime?: string;
  allowThrottleStartTime?: string;
  autoKillSession?: boolean;
  consoleContext?: string;
  cpuSessionRelation?: string;
  cpuUsage?: number;
  instanceIds?: string;
  maxThrottleTime?: number;
  resultId?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalDuration: 'AbnormalDuration',
      activeSessions: 'ActiveSessions',
      allowThrottleEndTime: 'AllowThrottleEndTime',
      allowThrottleStartTime: 'AllowThrottleStartTime',
      autoKillSession: 'AutoKillSession',
      consoleContext: 'ConsoleContext',
      cpuSessionRelation: 'CpuSessionRelation',
      cpuUsage: 'CpuUsage',
      instanceIds: 'InstanceIds',
      maxThrottleTime: 'MaxThrottleTime',
      resultId: 'ResultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalDuration: 'number',
      activeSessions: 'number',
      allowThrottleEndTime: 'string',
      allowThrottleStartTime: 'string',
      autoKillSession: 'boolean',
      consoleContext: 'string',
      cpuSessionRelation: 'string',
      cpuUsage: 'number',
      instanceIds: 'string',
      maxThrottleTime: 'number',
      resultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoThrottleRulesAsyncResponseBody extends $tea.Model {
  code?: number;
  data?: UpdateAutoThrottleRulesAsyncResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: UpdateAutoThrottleRulesAsyncResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoThrottleRulesAsyncResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAutoThrottleRulesAsyncResponseBody;
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
      body: UpdateAutoThrottleRulesAsyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHDMInstanceResponseBodyData extends $tea.Model {
  callerUid?: string;
  code?: number;
  error?: string;
  instanceId?: string;
  ip?: string;
  ownerId?: string;
  port?: number;
  role?: string;
  tenantId?: string;
  token?: string;
  uuid?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      callerUid: 'CallerUid',
      code: 'Code',
      error: 'Error',
      instanceId: 'InstanceId',
      ip: 'Ip',
      ownerId: 'OwnerId',
      port: 'Port',
      role: 'Role',
      tenantId: 'TenantId',
      token: 'Token',
      uuid: 'Uuid',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerUid: 'string',
      code: 'number',
      error: 'string',
      instanceId: 'string',
      ip: 'string',
      ownerId: 'string',
      port: 'number',
      role: 'string',
      tenantId: 'string',
      token: 'string',
      uuid: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCacheAnalysisJobResponseBodyDataBigKeysKeyInfo extends $tea.Model {
  bytes?: number;
  count?: number;
  db?: number;
  encoding?: string;
  expirationTimeMillis?: number;
  key?: string;
  nodeId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bytes: 'Bytes',
      count: 'Count',
      db: 'Db',
      encoding: 'Encoding',
      expirationTimeMillis: 'ExpirationTimeMillis',
      key: 'Key',
      nodeId: 'NodeId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytes: 'number',
      count: 'number',
      db: 'number',
      encoding: 'string',
      expirationTimeMillis: 'number',
      key: 'string',
      nodeId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCacheAnalysisJobResponseBodyDataBigKeys extends $tea.Model {
  keyInfo?: CreateCacheAnalysisJobResponseBodyDataBigKeysKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': CreateCacheAnalysisJobResponseBodyDataBigKeysKeyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCacheAnalysisJobResponseBodyData extends $tea.Model {
  bigKeys?: CreateCacheAnalysisJobResponseBodyDataBigKeys;
  instanceId?: string;
  jobId?: string;
  message?: string;
  nodeId?: string;
  taskState?: string;
  static names(): { [key: string]: string } {
    return {
      bigKeys: 'BigKeys',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      message: 'Message',
      nodeId: 'NodeId',
      taskState: 'TaskState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKeys: CreateCacheAnalysisJobResponseBodyDataBigKeys,
      instanceId: 'string',
      jobId: 'string',
      message: 'string',
      nodeId: 'string',
      taskState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudBenchTasksResponseBodyData extends $tea.Model {
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      taskIds: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStorageAnalysisTaskResponseBodyData extends $tea.Model {
  createTaskSuccess?: boolean;
  errorMessage?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTaskSuccess: 'CreateTaskSuccess',
      errorMessage: 'ErrorMessage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTaskSuccess: 'boolean',
      errorMessage: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigResponseBodyDataBandwidth extends $tea.Model {
  bandwidthUsageLowerThreshold?: number;
  bandwidthUsageUpperThreshold?: number;
  downgrade?: boolean;
  observationWindowSize?: string;
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      bandwidthUsageLowerThreshold: 'BandwidthUsageLowerThreshold',
      bandwidthUsageUpperThreshold: 'BandwidthUsageUpperThreshold',
      downgrade: 'Downgrade',
      observationWindowSize: 'ObservationWindowSize',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthUsageLowerThreshold: 'number',
      bandwidthUsageUpperThreshold: 'number',
      downgrade: 'boolean',
      observationWindowSize: 'string',
      upgrade: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigResponseBodyDataResource extends $tea.Model {
  cpuStep?: number;
  cpuUsageUpperThreshold?: number;
  downgradeObservationWindowSize?: string;
  enable?: boolean;
  upgradeObservationWindowSize?: string;
  static names(): { [key: string]: string } {
    return {
      cpuStep: 'CpuStep',
      cpuUsageUpperThreshold: 'CpuUsageUpperThreshold',
      downgradeObservationWindowSize: 'DowngradeObservationWindowSize',
      enable: 'Enable',
      upgradeObservationWindowSize: 'UpgradeObservationWindowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuStep: 'number',
      cpuUsageUpperThreshold: 'number',
      downgradeObservationWindowSize: 'string',
      enable: 'boolean',
      upgradeObservationWindowSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigResponseBodyDataShard extends $tea.Model {
  downgrade?: boolean;
  downgradeObservationWindowSize?: string;
  maxShards?: number;
  memUsageLowerThreshold?: number;
  memUsageUpperThreshold?: number;
  minShards?: number;
  upgrade?: boolean;
  upgradeObservationWindowSize?: string;
  static names(): { [key: string]: string } {
    return {
      downgrade: 'Downgrade',
      downgradeObservationWindowSize: 'DowngradeObservationWindowSize',
      maxShards: 'MaxShards',
      memUsageLowerThreshold: 'MemUsageLowerThreshold',
      memUsageUpperThreshold: 'MemUsageUpperThreshold',
      minShards: 'MinShards',
      upgrade: 'Upgrade',
      upgradeObservationWindowSize: 'UpgradeObservationWindowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downgrade: 'boolean',
      downgradeObservationWindowSize: 'string',
      maxShards: 'number',
      memUsageLowerThreshold: 'number',
      memUsageUpperThreshold: 'number',
      minShards: 'number',
      upgrade: 'boolean',
      upgradeObservationWindowSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigResponseBodyDataSpec extends $tea.Model {
  coolDownTime?: string;
  cpuUsageUpperThreshold?: number;
  downgrade?: boolean;
  maxReadOnlyNodes?: number;
  maxSpec?: string;
  memUsageUpperThreshold?: number;
  observationWindowSize?: string;
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      coolDownTime: 'CoolDownTime',
      cpuUsageUpperThreshold: 'CpuUsageUpperThreshold',
      downgrade: 'Downgrade',
      maxReadOnlyNodes: 'MaxReadOnlyNodes',
      maxSpec: 'MaxSpec',
      memUsageUpperThreshold: 'MemUsageUpperThreshold',
      observationWindowSize: 'ObservationWindowSize',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coolDownTime: 'string',
      cpuUsageUpperThreshold: 'number',
      downgrade: 'boolean',
      maxReadOnlyNodes: 'number',
      maxSpec: 'string',
      memUsageUpperThreshold: 'number',
      observationWindowSize: 'string',
      upgrade: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigResponseBodyDataStorage extends $tea.Model {
  diskUsageUpperThreshold?: number;
  maxStorage?: number;
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      diskUsageUpperThreshold: 'DiskUsageUpperThreshold',
      maxStorage: 'MaxStorage',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskUsageUpperThreshold: 'number',
      maxStorage: 'number',
      upgrade: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingConfigResponseBodyData extends $tea.Model {
  bandwidth?: DescribeAutoScalingConfigResponseBodyDataBandwidth;
  resource?: DescribeAutoScalingConfigResponseBodyDataResource;
  shard?: DescribeAutoScalingConfigResponseBodyDataShard;
  spec?: DescribeAutoScalingConfigResponseBodyDataSpec;
  storage?: DescribeAutoScalingConfigResponseBodyDataStorage;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      resource: 'Resource',
      shard: 'Shard',
      spec: 'Spec',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: DescribeAutoScalingConfigResponseBodyDataBandwidth,
      resource: DescribeAutoScalingConfigResponseBodyDataResource,
      shard: DescribeAutoScalingConfigResponseBodyDataShard,
      spec: DescribeAutoScalingConfigResponseBodyDataSpec,
      storage: DescribeAutoScalingConfigResponseBodyDataStorage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingHistoryResponseBodyDataSpecHistory extends $tea.Model {
  errorCode?: string;
  originCore?: number;
  originInstanceClass?: string;
  originMemory?: number;
  scaleType?: string;
  targetCore?: number;
  targetInstanceClass?: string;
  targetMemory?: number;
  taskExcuteStatus?: boolean;
  taskTime?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      originCore: 'OriginCore',
      originInstanceClass: 'OriginInstanceClass',
      originMemory: 'OriginMemory',
      scaleType: 'ScaleType',
      targetCore: 'TargetCore',
      targetInstanceClass: 'TargetInstanceClass',
      targetMemory: 'TargetMemory',
      taskExcuteStatus: 'TaskExcuteStatus',
      taskTime: 'TaskTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      originCore: 'number',
      originInstanceClass: 'string',
      originMemory: 'number',
      scaleType: 'string',
      targetCore: 'number',
      targetInstanceClass: 'string',
      targetMemory: 'number',
      taskExcuteStatus: 'boolean',
      taskTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingHistoryResponseBodyData extends $tea.Model {
  bandwidth?: { [key: string]: any }[];
  instanceId?: string;
  resource?: { [key: string]: any }[];
  shard?: { [key: string]: any }[];
  specHistory?: DescribeAutoScalingHistoryResponseBodyDataSpecHistory[];
  storage?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      instanceId: 'InstanceId',
      resource: 'Resource',
      shard: 'Shard',
      specHistory: 'SpecHistory',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      instanceId: 'string',
      resource: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      shard: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      specHistory: { 'type': 'array', 'itemType': DescribeAutoScalingHistoryResponseBodyDataSpecHistory },
      storage: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBodyDataBigKeysKeyInfo extends $tea.Model {
  bytes?: number;
  count?: number;
  db?: number;
  encoding?: string;
  expirationTimeMillis?: number;
  key?: string;
  nodeId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bytes: 'Bytes',
      count: 'Count',
      db: 'Db',
      encoding: 'Encoding',
      expirationTimeMillis: 'ExpirationTimeMillis',
      key: 'Key',
      nodeId: 'NodeId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytes: 'number',
      count: 'number',
      db: 'number',
      encoding: 'string',
      expirationTimeMillis: 'number',
      key: 'string',
      nodeId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBodyDataBigKeys extends $tea.Model {
  keyInfo?: DescribeCacheAnalysisJobResponseBodyDataBigKeysKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataBigKeysKeyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNumKeyInfo extends $tea.Model {
  bytes?: number;
  count?: number;
  db?: number;
  encoding?: string;
  expirationTimeMillis?: number;
  key?: string;
  nodeId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bytes: 'Bytes',
      count: 'Count',
      db: 'Db',
      encoding: 'Encoding',
      expirationTimeMillis: 'ExpirationTimeMillis',
      key: 'Key',
      nodeId: 'NodeId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytes: 'number',
      count: 'number',
      db: 'number',
      encoding: 'string',
      expirationTimeMillis: 'number',
      key: 'string',
      nodeId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNum extends $tea.Model {
  keyInfo?: DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNumKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNumKeyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBodyDataKeyPrefixesPrefix extends $tea.Model {
  bytes?: number;
  count?: number;
  keyNum?: number;
  prefix?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bytes: 'Bytes',
      count: 'Count',
      keyNum: 'KeyNum',
      prefix: 'Prefix',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytes: 'number',
      count: 'number',
      keyNum: 'number',
      prefix: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBodyDataKeyPrefixes extends $tea.Model {
  prefix?: DescribeCacheAnalysisJobResponseBodyDataKeyPrefixesPrefix[];
  static names(): { [key: string]: string } {
    return {
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefix: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataKeyPrefixesPrefix },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytesKeyInfo extends $tea.Model {
  bytes?: number;
  count?: number;
  db?: number;
  encoding?: string;
  expirationTimeMillis?: number;
  key?: string;
  nodeId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bytes: 'Bytes',
      count: 'Count',
      db: 'Db',
      encoding: 'Encoding',
      expirationTimeMillis: 'ExpirationTimeMillis',
      key: 'Key',
      nodeId: 'NodeId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytes: 'number',
      count: 'number',
      db: 'number',
      encoding: 'string',
      expirationTimeMillis: 'number',
      key: 'string',
      nodeId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytes extends $tea.Model {
  keyInfo?: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytesKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytesKeyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNumKeyInfo extends $tea.Model {
  bytes?: number;
  count?: number;
  db?: number;
  encoding?: string;
  expirationTimeMillis?: number;
  key?: string;
  nodeId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bytes: 'Bytes',
      count: 'Count',
      db: 'Db',
      encoding: 'Encoding',
      expirationTimeMillis: 'ExpirationTimeMillis',
      key: 'Key',
      nodeId: 'NodeId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytes: 'number',
      count: 'number',
      db: 'number',
      encoding: 'string',
      expirationTimeMillis: 'number',
      key: 'string',
      nodeId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNum extends $tea.Model {
  keyInfo?: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNumKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNumKeyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobResponseBodyData extends $tea.Model {
  bigKeys?: DescribeCacheAnalysisJobResponseBodyDataBigKeys;
  bigKeysOfNum?: DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNum;
  instanceId?: string;
  jobId?: string;
  keyPrefixes?: DescribeCacheAnalysisJobResponseBodyDataKeyPrefixes;
  message?: string;
  nodeId?: string;
  taskState?: string;
  unexBigKeysOfBytes?: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytes;
  unexBigKeysOfNum?: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNum;
  static names(): { [key: string]: string } {
    return {
      bigKeys: 'BigKeys',
      bigKeysOfNum: 'BigKeysOfNum',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      keyPrefixes: 'KeyPrefixes',
      message: 'Message',
      nodeId: 'NodeId',
      taskState: 'TaskState',
      unexBigKeysOfBytes: 'UnexBigKeysOfBytes',
      unexBigKeysOfNum: 'UnexBigKeysOfNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKeys: DescribeCacheAnalysisJobResponseBodyDataBigKeys,
      bigKeysOfNum: DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNum,
      instanceId: 'string',
      jobId: 'string',
      keyPrefixes: DescribeCacheAnalysisJobResponseBodyDataKeyPrefixes,
      message: 'string',
      nodeId: 'string',
      taskState: 'string',
      unexBigKeysOfBytes: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytes,
      unexBigKeysOfNum: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNum,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeysKeyInfo extends $tea.Model {
  bytes?: number;
  count?: number;
  db?: number;
  encoding?: string;
  expirationTimeMillis?: number;
  key?: string;
  nodeId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bytes: 'Bytes',
      count: 'Count',
      db: 'Db',
      encoding: 'Encoding',
      expirationTimeMillis: 'ExpirationTimeMillis',
      key: 'Key',
      nodeId: 'NodeId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytes: 'number',
      count: 'number',
      db: 'number',
      encoding: 'string',
      expirationTimeMillis: 'number',
      key: 'string',
      nodeId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeys extends $tea.Model {
  keyInfo?: DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeysKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeysKeyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJob extends $tea.Model {
  bigKeys?: DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeys;
  instanceId?: string;
  jobId?: string;
  message?: string;
  nodeId?: string;
  taskState?: string;
  static names(): { [key: string]: string } {
    return {
      bigKeys: 'BigKeys',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      message: 'Message',
      nodeId: 'NodeId',
      taskState: 'TaskState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKeys: DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeys,
      instanceId: 'string',
      jobId: 'string',
      message: 'string',
      nodeId: 'string',
      taskState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobsResponseBodyDataList extends $tea.Model {
  cacheAnalysisJob?: DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJob[];
  static names(): { [key: string]: string } {
    return {
      cacheAnalysisJob: 'CacheAnalysisJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheAnalysisJob: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisJobsResponseBodyData extends $tea.Model {
  extra?: string;
  list?: DescribeCacheAnalysisJobsResponseBodyDataList;
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: DescribeCacheAnalysisJobsResponseBodyDataList,
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudBenchTasksResponseBodyDataListCloudbenchTasks extends $tea.Model {
  archiveJobId?: string;
  archiveOssTableName?: string;
  archiveState?: number;
  backupId?: string;
  backupType?: string;
  benchStep?: string;
  benchStepStatus?: string;
  clientGatewayId?: string;
  clientType?: string;
  description?: string;
  dstInstanceUuid?: string;
  dstIp?: string;
  dstPort?: number;
  dstType?: string;
  dtsJobClass?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  dtsJobState?: number;
  dtsJobStatus?: string;
  ecsInstanceId?: string;
  endState?: string;
  errorCode?: string;
  errorMessage?: string;
  external?: string;
  rate?: number;
  requestDuration?: number;
  smartPressureTime?: number;
  source?: string;
  sqlCompleteReuse?: string;
  srcInstanceArea?: string;
  srcInstanceUuid?: string;
  srcPublicIp?: string;
  state?: string;
  status?: string;
  tableSchema?: string;
  taskId?: string;
  taskType?: string;
  topic?: string;
  userId?: string;
  version?: string;
  workDir?: string;
  static names(): { [key: string]: string } {
    return {
      archiveJobId: 'ArchiveJobId',
      archiveOssTableName: 'ArchiveOssTableName',
      archiveState: 'ArchiveState',
      backupId: 'BackupId',
      backupType: 'BackupType',
      benchStep: 'BenchStep',
      benchStepStatus: 'BenchStepStatus',
      clientGatewayId: 'ClientGatewayId',
      clientType: 'ClientType',
      description: 'Description',
      dstInstanceUuid: 'DstInstanceUuid',
      dstIp: 'DstIp',
      dstPort: 'DstPort',
      dstType: 'DstType',
      dtsJobClass: 'DtsJobClass',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      dtsJobState: 'DtsJobState',
      dtsJobStatus: 'DtsJobStatus',
      ecsInstanceId: 'EcsInstanceId',
      endState: 'EndState',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      external: 'External',
      rate: 'Rate',
      requestDuration: 'RequestDuration',
      smartPressureTime: 'SmartPressureTime',
      source: 'Source',
      sqlCompleteReuse: 'SqlCompleteReuse',
      srcInstanceArea: 'SrcInstanceArea',
      srcInstanceUuid: 'SrcInstanceUuid',
      srcPublicIp: 'SrcPublicIp',
      state: 'State',
      status: 'Status',
      tableSchema: 'TableSchema',
      taskId: 'TaskId',
      taskType: 'TaskType',
      topic: 'Topic',
      userId: 'UserId',
      version: 'Version',
      workDir: 'WorkDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveJobId: 'string',
      archiveOssTableName: 'string',
      archiveState: 'number',
      backupId: 'string',
      backupType: 'string',
      benchStep: 'string',
      benchStepStatus: 'string',
      clientGatewayId: 'string',
      clientType: 'string',
      description: 'string',
      dstInstanceUuid: 'string',
      dstIp: 'string',
      dstPort: 'number',
      dstType: 'string',
      dtsJobClass: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      dtsJobState: 'number',
      dtsJobStatus: 'string',
      ecsInstanceId: 'string',
      endState: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      external: 'string',
      rate: 'number',
      requestDuration: 'number',
      smartPressureTime: 'number',
      source: 'string',
      sqlCompleteReuse: 'string',
      srcInstanceArea: 'string',
      srcInstanceUuid: 'string',
      srcPublicIp: 'string',
      state: 'string',
      status: 'string',
      tableSchema: 'string',
      taskId: 'string',
      taskType: 'string',
      topic: 'string',
      userId: 'string',
      version: 'string',
      workDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudBenchTasksResponseBodyDataList extends $tea.Model {
  cloudbenchTasks?: DescribeCloudBenchTasksResponseBodyDataListCloudbenchTasks[];
  static names(): { [key: string]: string } {
    return {
      cloudbenchTasks: 'cloudbenchTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudbenchTasks: { 'type': 'array', 'itemType': DescribeCloudBenchTasksResponseBodyDataListCloudbenchTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudBenchTasksResponseBodyData extends $tea.Model {
  extra?: string;
  list?: DescribeCloudBenchTasksResponseBodyDataList;
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: DescribeCloudBenchTasksResponseBodyDataList,
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudbenchTaskResponseBodyData extends $tea.Model {
  archiveJobId?: string;
  archiveOssTableName?: string;
  archiveState?: number;
  backupId?: string;
  backupType?: string;
  benchStep?: string;
  benchStepStatus?: string;
  clientGatewayId?: string;
  clientType?: string;
  description?: string;
  dstInstanceUuid?: string;
  dstIp?: string;
  dstPort?: number;
  dstType?: string;
  dtsJobClass?: string;
  dtsJobId?: string;
  dtsJobName?: string;
  dtsJobState?: number;
  dtsJobStatus?: string;
  ecsInstanceId?: string;
  endState?: string;
  errorCode?: string;
  errorMessage?: string;
  external?: string;
  rate?: number;
  requestDuration?: number;
  smartPressureTime?: number;
  source?: string;
  sqlCompleteReuse?: string;
  srcInstanceArea?: string;
  srcInstanceUuid?: string;
  srcPublicIp?: string;
  state?: string;
  status?: string;
  tableSchema?: string;
  taskId?: string;
  taskType?: string;
  topic?: string;
  userId?: string;
  version?: string;
  workDir?: string;
  static names(): { [key: string]: string } {
    return {
      archiveJobId: 'ArchiveJobId',
      archiveOssTableName: 'ArchiveOssTableName',
      archiveState: 'ArchiveState',
      backupId: 'BackupId',
      backupType: 'BackupType',
      benchStep: 'BenchStep',
      benchStepStatus: 'BenchStepStatus',
      clientGatewayId: 'ClientGatewayId',
      clientType: 'ClientType',
      description: 'Description',
      dstInstanceUuid: 'DstInstanceUuid',
      dstIp: 'DstIp',
      dstPort: 'DstPort',
      dstType: 'DstType',
      dtsJobClass: 'DtsJobClass',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      dtsJobState: 'DtsJobState',
      dtsJobStatus: 'DtsJobStatus',
      ecsInstanceId: 'EcsInstanceId',
      endState: 'EndState',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      external: 'External',
      rate: 'Rate',
      requestDuration: 'RequestDuration',
      smartPressureTime: 'SmartPressureTime',
      source: 'Source',
      sqlCompleteReuse: 'SqlCompleteReuse',
      srcInstanceArea: 'SrcInstanceArea',
      srcInstanceUuid: 'SrcInstanceUuid',
      srcPublicIp: 'SrcPublicIp',
      state: 'State',
      status: 'Status',
      tableSchema: 'TableSchema',
      taskId: 'TaskId',
      taskType: 'TaskType',
      topic: 'Topic',
      userId: 'UserId',
      version: 'Version',
      workDir: 'WorkDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveJobId: 'string',
      archiveOssTableName: 'string',
      archiveState: 'number',
      backupId: 'string',
      backupType: 'string',
      benchStep: 'string',
      benchStepStatus: 'string',
      clientGatewayId: 'string',
      clientType: 'string',
      description: 'string',
      dstInstanceUuid: 'string',
      dstIp: 'string',
      dstPort: 'number',
      dstType: 'string',
      dtsJobClass: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      dtsJobState: 'number',
      dtsJobStatus: 'string',
      ecsInstanceId: 'string',
      endState: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      external: 'string',
      rate: 'number',
      requestDuration: 'number',
      smartPressureTime: 'number',
      source: 'string',
      sqlCompleteReuse: 'string',
      srcInstanceArea: 'string',
      srcInstanceUuid: 'string',
      srcPublicIp: 'string',
      state: 'string',
      status: 'string',
      tableSchema: 'string',
      taskId: 'string',
      taskType: 'string',
      topic: 'string',
      userId: 'string',
      version: 'string',
      workDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudbenchTaskConfigResponseBodyData extends $tea.Model {
  archiveFolder?: string;
  benchCmd?: string;
  clientJarPath?: string;
  jarOnOss?: string;
  loadCmd?: string;
  metaFileName?: string;
  metaFileOnOss?: string;
  metaFilePath?: string;
  parseCmd?: string;
  parseFilePath?: string;
  rocksDbPath?: string;
  sqlFileName?: string;
  sqlFileOnOss?: string;
  sqlFilePath?: string;
  taskId?: string;
  userId?: string;
  workDir?: string;
  static names(): { [key: string]: string } {
    return {
      archiveFolder: 'ArchiveFolder',
      benchCmd: 'BenchCmd',
      clientJarPath: 'ClientJarPath',
      jarOnOss: 'JarOnOss',
      loadCmd: 'LoadCmd',
      metaFileName: 'MetaFileName',
      metaFileOnOss: 'MetaFileOnOss',
      metaFilePath: 'MetaFilePath',
      parseCmd: 'ParseCmd',
      parseFilePath: 'ParseFilePath',
      rocksDbPath: 'RocksDbPath',
      sqlFileName: 'SqlFileName',
      sqlFileOnOss: 'SqlFileOnOss',
      sqlFilePath: 'SqlFilePath',
      taskId: 'TaskId',
      userId: 'UserId',
      workDir: 'WorkDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveFolder: 'string',
      benchCmd: 'string',
      clientJarPath: 'string',
      jarOnOss: 'string',
      loadCmd: 'string',
      metaFileName: 'string',
      metaFileOnOss: 'string',
      metaFilePath: 'string',
      parseCmd: 'string',
      parseFilePath: 'string',
      rocksDbPath: 'string',
      sqlFileName: 'string',
      sqlFileOnOss: 'string',
      sqlFilePath: 'string',
      taskId: 'string',
      userId: 'string',
      workDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotBigKeysResponseBodyDataBigKeysBigKey extends $tea.Model {
  db?: number;
  key?: string;
  keyType?: string;
  nodeId?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      db: 'Db',
      key: 'Key',
      keyType: 'KeyType',
      nodeId: 'NodeId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: 'number',
      key: 'string',
      keyType: 'string',
      nodeId: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotBigKeysResponseBodyDataBigKeys extends $tea.Model {
  bigKey?: DescribeHotBigKeysResponseBodyDataBigKeysBigKey[];
  static names(): { [key: string]: string } {
    return {
      bigKey: 'BigKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKey: { 'type': 'array', 'itemType': DescribeHotBigKeysResponseBodyDataBigKeysBigKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotBigKeysResponseBodyDataHotKeysHotKey extends $tea.Model {
  db?: number;
  hot?: string;
  key?: string;
  keyType?: string;
  lfu?: number;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      db: 'Db',
      hot: 'Hot',
      key: 'Key',
      keyType: 'KeyType',
      lfu: 'Lfu',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: 'number',
      hot: 'string',
      key: 'string',
      keyType: 'string',
      lfu: 'number',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotBigKeysResponseBodyDataHotKeys extends $tea.Model {
  hotKey?: DescribeHotBigKeysResponseBodyDataHotKeysHotKey[];
  static names(): { [key: string]: string } {
    return {
      hotKey: 'HotKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotKey: { 'type': 'array', 'itemType': DescribeHotBigKeysResponseBodyDataHotKeysHotKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotBigKeysResponseBodyData extends $tea.Model {
  bigKeyMsg?: string;
  bigKeys?: DescribeHotBigKeysResponseBodyDataBigKeys;
  hotKeyMsg?: string;
  hotKeys?: DescribeHotBigKeysResponseBodyDataHotKeys;
  static names(): { [key: string]: string } {
    return {
      bigKeyMsg: 'BigKeyMsg',
      bigKeys: 'BigKeys',
      hotKeyMsg: 'HotKeyMsg',
      hotKeys: 'HotKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKeyMsg: 'string',
      bigKeys: DescribeHotBigKeysResponseBodyDataBigKeys,
      hotKeyMsg: 'string',
      hotKeys: DescribeHotBigKeysResponseBodyDataHotKeys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotKeysResponseBodyDataHotKey extends $tea.Model {
  db?: number;
  hot?: string;
  key?: string;
  keyType?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      db: 'Db',
      hot: 'Hot',
      key: 'Key',
      keyType: 'KeyType',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: 'number',
      hot: 'string',
      key: 'string',
      keyType: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotKeysResponseBodyData extends $tea.Model {
  hotKey?: DescribeHotKeysResponseBodyDataHotKey[];
  static names(): { [key: string]: string } {
    return {
      hotKey: 'HotKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotKey: { 'type': 'array', 'itemType': DescribeHotKeysResponseBodyDataHotKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopBigKeysResponseBodyDataBigKey extends $tea.Model {
  db?: number;
  key?: string;
  keyType?: string;
  nodeId?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      db: 'Db',
      key: 'Key',
      keyType: 'KeyType',
      nodeId: 'NodeId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: 'number',
      key: 'string',
      keyType: 'string',
      nodeId: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopBigKeysResponseBodyData extends $tea.Model {
  bigKey?: DescribeTopBigKeysResponseBodyDataBigKey[];
  static names(): { [key: string]: string } {
    return {
      bigKey: 'BigKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKey: { 'type': 'array', 'itemType': DescribeTopBigKeysResponseBodyDataBigKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopHotKeysResponseBodyDataHotKey extends $tea.Model {
  db?: number;
  hot?: string;
  key?: string;
  keyType?: string;
  lfu?: number;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      db: 'Db',
      hot: 'Hot',
      key: 'Key',
      keyType: 'KeyType',
      lfu: 'Lfu',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: 'number',
      hot: 'string',
      key: 'string',
      keyType: 'string',
      lfu: 'number',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopHotKeysResponseBodyData extends $tea.Model {
  hotKey?: DescribeTopHotKeysResponseBodyDataHotKey[];
  static names(): { [key: string]: string } {
    return {
      hotKey: 'HotKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotKey: { 'type': 'array', 'itemType': DescribeTopHotKeysResponseBodyDataHotKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoResourceOptimizeRulesResponseBodyDataConfigFailInstanceList extends $tea.Model {
  configSuccess?: boolean;
  errorMessage?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configSuccess: 'ConfigSuccess',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSuccess: 'boolean',
      errorMessage: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoResourceOptimizeRulesResponseBodyDataConfigSuccessInstanceList extends $tea.Model {
  configSuccess?: boolean;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configSuccess: 'ConfigSuccess',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSuccess: 'boolean',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoResourceOptimizeRulesResponseBodyData extends $tea.Model {
  configFailInstanceCount?: number;
  configFailInstanceList?: DisableAutoResourceOptimizeRulesResponseBodyDataConfigFailInstanceList[];
  configSuccessInstanceCount?: number;
  configSuccessInstanceList?: DisableAutoResourceOptimizeRulesResponseBodyDataConfigSuccessInstanceList[];
  totalInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      configFailInstanceCount: 'ConfigFailInstanceCount',
      configFailInstanceList: 'ConfigFailInstanceList',
      configSuccessInstanceCount: 'ConfigSuccessInstanceCount',
      configSuccessInstanceList: 'ConfigSuccessInstanceList',
      totalInstanceCount: 'TotalInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFailInstanceCount: 'number',
      configFailInstanceList: { 'type': 'array', 'itemType': DisableAutoResourceOptimizeRulesResponseBodyDataConfigFailInstanceList },
      configSuccessInstanceCount: 'number',
      configSuccessInstanceList: { 'type': 'array', 'itemType': DisableAutoResourceOptimizeRulesResponseBodyDataConfigSuccessInstanceList },
      totalInstanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoThrottleRulesResponseBodyDataConfigFailInstanceList extends $tea.Model {
  configSuccess?: boolean;
  errorMessage?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configSuccess: 'ConfigSuccess',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSuccess: 'boolean',
      errorMessage: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoThrottleRulesResponseBodyDataConfigSuccessInstanceList extends $tea.Model {
  configSuccess?: boolean;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configSuccess: 'ConfigSuccess',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSuccess: 'boolean',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoThrottleRulesResponseBodyData extends $tea.Model {
  configFailInstanceCount?: number;
  configFailInstanceList?: DisableAutoThrottleRulesResponseBodyDataConfigFailInstanceList[];
  configSuccessInstanceCount?: number;
  configSuccessInstanceList?: DisableAutoThrottleRulesResponseBodyDataConfigSuccessInstanceList[];
  totalInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      configFailInstanceCount: 'ConfigFailInstanceCount',
      configFailInstanceList: 'ConfigFailInstanceList',
      configSuccessInstanceCount: 'ConfigSuccessInstanceCount',
      configSuccessInstanceList: 'ConfigSuccessInstanceList',
      totalInstanceCount: 'TotalInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFailInstanceCount: 'number',
      configFailInstanceList: { 'type': 'array', 'itemType': DisableAutoThrottleRulesResponseBodyDataConfigFailInstanceList },
      configSuccessInstanceCount: 'number',
      configSuccessInstanceList: { 'type': 'array', 'itemType': DisableAutoThrottleRulesResponseBodyDataConfigSuccessInstanceList },
      totalInstanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestListByCodeResponseBodyDataResult extends $tea.Model {
  instanceId?: string;
  sqlId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      sqlId: 'sqlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sqlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestListByCodeResponseBodyData extends $tea.Model {
  complete?: boolean;
  fail?: boolean;
  isFinish?: boolean;
  result?: GetAsyncErrorRequestListByCodeResponseBodyDataResult[];
  resultId?: string;
  state?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      complete: 'complete',
      fail: 'fail',
      isFinish: 'isFinish',
      result: 'result',
      resultId: 'resultId',
      state: 'state',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      fail: 'boolean',
      isFinish: 'boolean',
      result: { 'type': 'array', 'itemType': GetAsyncErrorRequestListByCodeResponseBodyDataResult },
      resultId: 'string',
      state: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestStatByCodeResponseBodyDataResult extends $tea.Model {
  count?: number;
  errorCode?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      errorCode: 'errorCode',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      errorCode: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestStatByCodeResponseBodyData extends $tea.Model {
  complete?: boolean;
  fail?: boolean;
  isFinish?: boolean;
  result?: GetAsyncErrorRequestStatByCodeResponseBodyDataResult[];
  resultId?: string;
  state?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      complete: 'complete',
      fail: 'fail',
      isFinish: 'isFinish',
      result: 'result',
      resultId: 'resultId',
      state: 'state',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      fail: 'boolean',
      isFinish: 'boolean',
      result: { 'type': 'array', 'itemType': GetAsyncErrorRequestStatByCodeResponseBodyDataResult },
      resultId: 'string',
      state: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncErrorRequestStatResultResponseBodyData extends $tea.Model {
  complete?: boolean;
  fail?: boolean;
  isFinish?: boolean;
  result?: { [key: string]: DataResultValue }[];
  resultId?: string;
  state?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      complete: 'complete',
      fail: 'fail',
      isFinish: 'isFinish',
      result: 'result',
      resultId: 'resultId',
      state: 'state',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      fail: 'boolean',
      isFinish: 'boolean',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': DataResultValue } },
      resultId: 'string',
      state: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoIncrementUsageStatisticResponseBodyDataAutoIncrementUsageList extends $tea.Model {
  autoIncrementCurrentValue?: number;
  autoIncrementRatio?: number;
  columnName?: string;
  dbName?: string;
  maximumValue?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrementCurrentValue: 'AutoIncrementCurrentValue',
      autoIncrementRatio: 'AutoIncrementRatio',
      columnName: 'ColumnName',
      dbName: 'DbName',
      maximumValue: 'MaximumValue',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementCurrentValue: 'number',
      autoIncrementRatio: 'number',
      columnName: 'string',
      dbName: 'string',
      maximumValue: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoIncrementUsageStatisticResponseBodyData extends $tea.Model {
  autoIncrementUsageList?: GetAutoIncrementUsageStatisticResponseBodyDataAutoIncrementUsageList[];
  errorInfo?: string;
  finish?: boolean;
  taskStatus?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      autoIncrementUsageList: 'AutoIncrementUsageList',
      errorInfo: 'ErrorInfo',
      finish: 'Finish',
      taskStatus: 'TaskStatus',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementUsageList: { 'type': 'array', 'itemType': GetAutoIncrementUsageStatisticResponseBodyDataAutoIncrementUsageList },
      errorInfo: 'string',
      finish: 'boolean',
      taskStatus: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoResourceOptimizeRulesResponseBodyDataEnableAutoResourceOptimizeList extends $tea.Model {
  autoDefragment?: boolean;
  dasProOn?: boolean;
  instanceId?: string;
  tableFragmentationRatio?: number;
  tableSpaceSize?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      autoDefragment: 'AutoDefragment',
      dasProOn: 'DasProOn',
      instanceId: 'InstanceId',
      tableFragmentationRatio: 'TableFragmentationRatio',
      tableSpaceSize: 'TableSpaceSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDefragment: 'boolean',
      dasProOn: 'boolean',
      instanceId: 'string',
      tableFragmentationRatio: 'number',
      tableSpaceSize: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoResourceOptimizeRulesResponseBodyDataHasEnableRuleButNotDasProList extends $tea.Model {
  autoDefragment?: boolean;
  dasProOn?: boolean;
  instanceId?: string;
  tableFragmentationRatio?: number;
  tableSpaceSize?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      autoDefragment: 'AutoDefragment',
      dasProOn: 'DasProOn',
      instanceId: 'InstanceId',
      tableFragmentationRatio: 'TableFragmentationRatio',
      tableSpaceSize: 'TableSpaceSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDefragment: 'boolean',
      dasProOn: 'boolean',
      instanceId: 'string',
      tableFragmentationRatio: 'number',
      tableSpaceSize: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoResourceOptimizeRulesResponseBodyDataTurnOffAutoResourceOptimizeList extends $tea.Model {
  autoDefragment?: boolean;
  dasProOn?: boolean;
  instanceId?: string;
  tableFragmentationRatio?: number;
  tableSpaceSize?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      autoDefragment: 'AutoDefragment',
      dasProOn: 'DasProOn',
      instanceId: 'InstanceId',
      tableFragmentationRatio: 'TableFragmentationRatio',
      tableSpaceSize: 'TableSpaceSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDefragment: 'boolean',
      dasProOn: 'boolean',
      instanceId: 'string',
      tableFragmentationRatio: 'number',
      tableSpaceSize: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoResourceOptimizeRulesResponseBodyData extends $tea.Model {
  enableAutoResourceOptimizeCount?: number;
  enableAutoResourceOptimizeList?: GetAutoResourceOptimizeRulesResponseBodyDataEnableAutoResourceOptimizeList[];
  hasEnableRuleButNotDasProCount?: number;
  hasEnableRuleButNotDasProList?: GetAutoResourceOptimizeRulesResponseBodyDataHasEnableRuleButNotDasProList[];
  neverEnableAutoResourceOptimizeOrReleasedInstanceCount?: number;
  neverEnableAutoResourceOptimizeOrReleasedInstanceIdList?: string[];
  totalAutoResourceOptimizeRulesCount?: number;
  turnOffAutoResourceOptimizeCount?: number;
  turnOffAutoResourceOptimizeList?: GetAutoResourceOptimizeRulesResponseBodyDataTurnOffAutoResourceOptimizeList[];
  static names(): { [key: string]: string } {
    return {
      enableAutoResourceOptimizeCount: 'EnableAutoResourceOptimizeCount',
      enableAutoResourceOptimizeList: 'EnableAutoResourceOptimizeList',
      hasEnableRuleButNotDasProCount: 'HasEnableRuleButNotDasProCount',
      hasEnableRuleButNotDasProList: 'HasEnableRuleButNotDasProList',
      neverEnableAutoResourceOptimizeOrReleasedInstanceCount: 'NeverEnableAutoResourceOptimizeOrReleasedInstanceCount',
      neverEnableAutoResourceOptimizeOrReleasedInstanceIdList: 'NeverEnableAutoResourceOptimizeOrReleasedInstanceIdList',
      totalAutoResourceOptimizeRulesCount: 'TotalAutoResourceOptimizeRulesCount',
      turnOffAutoResourceOptimizeCount: 'TurnOffAutoResourceOptimizeCount',
      turnOffAutoResourceOptimizeList: 'TurnOffAutoResourceOptimizeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAutoResourceOptimizeCount: 'number',
      enableAutoResourceOptimizeList: { 'type': 'array', 'itemType': GetAutoResourceOptimizeRulesResponseBodyDataEnableAutoResourceOptimizeList },
      hasEnableRuleButNotDasProCount: 'number',
      hasEnableRuleButNotDasProList: { 'type': 'array', 'itemType': GetAutoResourceOptimizeRulesResponseBodyDataHasEnableRuleButNotDasProList },
      neverEnableAutoResourceOptimizeOrReleasedInstanceCount: 'number',
      neverEnableAutoResourceOptimizeOrReleasedInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      totalAutoResourceOptimizeRulesCount: 'number',
      turnOffAutoResourceOptimizeCount: 'number',
      turnOffAutoResourceOptimizeList: { 'type': 'array', 'itemType': GetAutoResourceOptimizeRulesResponseBodyDataTurnOffAutoResourceOptimizeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoThrottleRulesResponseBodyDataEnableAutoThrottleList extends $tea.Model {
  abnormalDuration?: number;
  activeSessions?: number;
  allowThrottleEndTime?: string;
  allowThrottleStartTime?: string;
  autoKillSession?: boolean;
  cpuSessionRelation?: string;
  cpuUsage?: number;
  instanceId?: string;
  maxThrottleTime?: number;
  userId?: string;
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      abnormalDuration: 'AbnormalDuration',
      activeSessions: 'ActiveSessions',
      allowThrottleEndTime: 'AllowThrottleEndTime',
      allowThrottleStartTime: 'AllowThrottleStartTime',
      autoKillSession: 'AutoKillSession',
      cpuSessionRelation: 'CpuSessionRelation',
      cpuUsage: 'CpuUsage',
      instanceId: 'InstanceId',
      maxThrottleTime: 'MaxThrottleTime',
      userId: 'UserId',
      visible: 'Visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalDuration: 'number',
      activeSessions: 'number',
      allowThrottleEndTime: 'string',
      allowThrottleStartTime: 'string',
      autoKillSession: 'boolean',
      cpuSessionRelation: 'string',
      cpuUsage: 'number',
      instanceId: 'string',
      maxThrottleTime: 'number',
      userId: 'string',
      visible: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoThrottleRulesResponseBodyDataTurnOffAutoThrottleList extends $tea.Model {
  abnormalDuration?: number;
  activeSessions?: number;
  allowThrottleEndTime?: string;
  allowThrottleStartTime?: string;
  autoKillSession?: boolean;
  cpuSessionRelation?: string;
  cpuUsage?: number;
  instanceId?: string;
  maxThrottleTime?: number;
  userId?: string;
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      abnormalDuration: 'AbnormalDuration',
      activeSessions: 'ActiveSessions',
      allowThrottleEndTime: 'AllowThrottleEndTime',
      allowThrottleStartTime: 'AllowThrottleStartTime',
      autoKillSession: 'AutoKillSession',
      cpuSessionRelation: 'CpuSessionRelation',
      cpuUsage: 'CpuUsage',
      instanceId: 'InstanceId',
      maxThrottleTime: 'MaxThrottleTime',
      userId: 'UserId',
      visible: 'Visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalDuration: 'number',
      activeSessions: 'number',
      allowThrottleEndTime: 'string',
      allowThrottleStartTime: 'string',
      autoKillSession: 'boolean',
      cpuSessionRelation: 'string',
      cpuUsage: 'number',
      instanceId: 'string',
      maxThrottleTime: 'number',
      userId: 'string',
      visible: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoThrottleRulesResponseBodyData extends $tea.Model {
  enableAutoThrottleCount?: number;
  enableAutoThrottleList?: GetAutoThrottleRulesResponseBodyDataEnableAutoThrottleList[];
  neverEnableAutoThrottleOrReleasedInstanceCount?: number;
  neverEnableAutoThrottleOrReleasedInstanceIdList?: string[];
  totalAutoThrottleRulesCount?: number;
  turnOffAutoThrottleCount?: number;
  turnOffAutoThrottleList?: GetAutoThrottleRulesResponseBodyDataTurnOffAutoThrottleList[];
  static names(): { [key: string]: string } {
    return {
      enableAutoThrottleCount: 'EnableAutoThrottleCount',
      enableAutoThrottleList: 'EnableAutoThrottleList',
      neverEnableAutoThrottleOrReleasedInstanceCount: 'NeverEnableAutoThrottleOrReleasedInstanceCount',
      neverEnableAutoThrottleOrReleasedInstanceIdList: 'NeverEnableAutoThrottleOrReleasedInstanceIdList',
      totalAutoThrottleRulesCount: 'TotalAutoThrottleRulesCount',
      turnOffAutoThrottleCount: 'TurnOffAutoThrottleCount',
      turnOffAutoThrottleList: 'TurnOffAutoThrottleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAutoThrottleCount: 'number',
      enableAutoThrottleList: { 'type': 'array', 'itemType': GetAutoThrottleRulesResponseBodyDataEnableAutoThrottleList },
      neverEnableAutoThrottleOrReleasedInstanceCount: 'number',
      neverEnableAutoThrottleOrReleasedInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      totalAutoThrottleRulesCount: 'number',
      turnOffAutoThrottleCount: 'number',
      turnOffAutoThrottleList: { 'type': 'array', 'itemType': GetAutoThrottleRulesResponseBodyDataTurnOffAutoThrottleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutonomousNotifyEventsInRangeResponseBodyDataList extends $tea.Model {
  t?: string[];
  static names(): { [key: string]: string } {
    return {
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      t: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutonomousNotifyEventsInRangeResponseBodyData extends $tea.Model {
  extra?: string;
  list?: GetAutonomousNotifyEventsInRangeResponseBodyDataList;
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: GetAutonomousNotifyEventsInRangeResponseBodyDataList,
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBlockingDetailListResponseBodyDataList extends $tea.Model {
  batchId?: number;
  clientAppName?: string;
  currentCollectionTime?: number;
  dataBase?: string;
  hostName?: string;
  loginId?: string;
  queryHash?: string;
  spid?: string;
  sqlText?: string;
  startTime?: string;
  waitTimeMs?: number;
  waitType?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      clientAppName: 'ClientAppName',
      currentCollectionTime: 'CurrentCollectionTime',
      dataBase: 'DataBase',
      hostName: 'HostName',
      loginId: 'LoginId',
      queryHash: 'QueryHash',
      spid: 'Spid',
      sqlText: 'SqlText',
      startTime: 'StartTime',
      waitTimeMs: 'WaitTimeMs',
      waitType: 'WaitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      clientAppName: 'string',
      currentCollectionTime: 'number',
      dataBase: 'string',
      hostName: 'string',
      loginId: 'string',
      queryHash: 'string',
      spid: 'string',
      sqlText: 'string',
      startTime: 'string',
      waitTimeMs: 'number',
      waitType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBlockingDetailListResponseBodyData extends $tea.Model {
  list?: GetBlockingDetailListResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetBlockingDetailListResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBInstanceConnectivityDiagnosisResponseBodyData extends $tea.Model {
  connCheckErrorCode?: string;
  connCheckErrorMessage?: string;
  failType?: string;
  instanceId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      connCheckErrorCode: 'connCheckErrorCode',
      connCheckErrorMessage: 'connCheckErrorMessage',
      failType: 'failType',
      instanceId: 'instanceId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connCheckErrorCode: 'string',
      connCheckErrorMessage: 'string',
      failType: 'string',
      instanceId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasProServiceUsageResponseBodyData extends $tea.Model {
  commodityInstanceId?: string;
  engine?: string;
  expireTime?: number;
  instanceAlias?: string;
  instanceId?: string;
  ip?: string;
  isSpare?: boolean;
  migrationPredictRemainingTime?: number;
  port?: number;
  region?: string;
  serviceUnitId?: string;
  sqlRetention?: string;
  startTime?: number;
  storageFreeQuotaInMB?: number;
  storageUsed?: number;
  userId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityInstanceId: 'commodityInstanceId',
      engine: 'engine',
      expireTime: 'expireTime',
      instanceAlias: 'instanceAlias',
      instanceId: 'instanceId',
      ip: 'ip',
      isSpare: 'isSpare',
      migrationPredictRemainingTime: 'migrationPredictRemainingTime',
      port: 'port',
      region: 'region',
      serviceUnitId: 'serviceUnitId',
      sqlRetention: 'sqlRetention',
      startTime: 'startTime',
      storageFreeQuotaInMB: 'storageFreeQuotaInMB',
      storageUsed: 'storageUsed',
      userId: 'userId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityInstanceId: 'string',
      engine: 'string',
      expireTime: 'number',
      instanceAlias: 'string',
      instanceId: 'string',
      ip: 'string',
      isSpare: 'boolean',
      migrationPredictRemainingTime: 'number',
      port: 'number',
      region: 'string',
      serviceUnitId: 'string',
      sqlRetention: 'string',
      startTime: 'number',
      storageFreeQuotaInMB: 'number',
      storageUsed: 'number',
      userId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasSQLLogHotDataResponseBodyDataList extends $tea.Model {
  accountName?: string;
  DBName?: string;
  executeTime?: string;
  ext?: string;
  hostAddress?: string;
  latancy?: number;
  lockTime?: number;
  logicRead?: number;
  originTime?: string;
  physicAsyncRead?: number;
  physicSyncRead?: number;
  returnRows?: number;
  SQLText?: string;
  scanRows?: number;
  sqlType?: string;
  state?: string;
  threadID?: number;
  transactionId?: string;
  updateRows?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      ext: 'Ext',
      hostAddress: 'HostAddress',
      latancy: 'Latancy',
      lockTime: 'LockTime',
      logicRead: 'LogicRead',
      originTime: 'OriginTime',
      physicAsyncRead: 'PhysicAsyncRead',
      physicSyncRead: 'PhysicSyncRead',
      returnRows: 'ReturnRows',
      SQLText: 'SQLText',
      scanRows: 'ScanRows',
      sqlType: 'SqlType',
      state: 'State',
      threadID: 'ThreadID',
      transactionId: 'TransactionId',
      updateRows: 'UpdateRows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBName: 'string',
      executeTime: 'string',
      ext: 'string',
      hostAddress: 'string',
      latancy: 'number',
      lockTime: 'number',
      logicRead: 'number',
      originTime: 'string',
      physicAsyncRead: 'number',
      physicSyncRead: 'number',
      returnRows: 'number',
      SQLText: 'string',
      scanRows: 'number',
      sqlType: 'string',
      state: 'string',
      threadID: 'number',
      transactionId: 'string',
      updateRows: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasSQLLogHotDataResponseBodyData extends $tea.Model {
  extra?: any;
  list?: GetDasSQLLogHotDataResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'any',
      list: { 'type': 'array', 'itemType': GetDasSQLLogHotDataResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeadLockDetailListResponseBodyDataListBlockProcessList extends $tea.Model {
  clientApp?: string;
  databaseName?: string;
  hostName?: string;
  lastTranStarted?: number;
  lockMode?: string;
  logUsed?: number;
  loginName?: string;
  objectOwned?: string;
  objectRequested?: string;
  ownMode?: string;
  spid?: number;
  sqlText?: string;
  status?: string;
  victim?: number;
  waitMode?: string;
  waitResource?: string;
  waitResourceDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientApp: 'ClientApp',
      databaseName: 'DatabaseName',
      hostName: 'HostName',
      lastTranStarted: 'LastTranStarted',
      lockMode: 'LockMode',
      logUsed: 'LogUsed',
      loginName: 'LoginName',
      objectOwned: 'ObjectOwned',
      objectRequested: 'ObjectRequested',
      ownMode: 'OwnMode',
      spid: 'Spid',
      sqlText: 'SqlText',
      status: 'Status',
      victim: 'Victim',
      waitMode: 'WaitMode',
      waitResource: 'WaitResource',
      waitResourceDescription: 'WaitResourceDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientApp: 'string',
      databaseName: 'string',
      hostName: 'string',
      lastTranStarted: 'number',
      lockMode: 'string',
      logUsed: 'number',
      loginName: 'string',
      objectOwned: 'string',
      objectRequested: 'string',
      ownMode: 'string',
      spid: 'number',
      sqlText: 'string',
      status: 'string',
      victim: 'number',
      waitMode: 'string',
      waitResource: 'string',
      waitResourceDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeadLockDetailListResponseBodyDataList extends $tea.Model {
  batchId?: number;
  blockProcessList?: GetDeadLockDetailListResponseBodyDataListBlockProcessList[];
  clientApp?: string;
  databaseName?: string;
  hostName?: string;
  lastTranStarted?: number;
  lockMode?: string;
  logUsed?: number;
  loginName?: string;
  objectOwned?: string;
  objectRequested?: string;
  ownMode?: string;
  spid?: number;
  sqlText?: string;
  status?: string;
  victim?: number;
  waitMode?: string;
  waitResource?: string;
  waitResourceDescription?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      blockProcessList: 'BlockProcessList',
      clientApp: 'ClientApp',
      databaseName: 'DatabaseName',
      hostName: 'HostName',
      lastTranStarted: 'LastTranStarted',
      lockMode: 'LockMode',
      logUsed: 'LogUsed',
      loginName: 'LoginName',
      objectOwned: 'ObjectOwned',
      objectRequested: 'ObjectRequested',
      ownMode: 'OwnMode',
      spid: 'Spid',
      sqlText: 'SqlText',
      status: 'Status',
      victim: 'Victim',
      waitMode: 'WaitMode',
      waitResource: 'WaitResource',
      waitResourceDescription: 'WaitResourceDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      blockProcessList: { 'type': 'array', 'itemType': GetDeadLockDetailListResponseBodyDataListBlockProcessList },
      clientApp: 'string',
      databaseName: 'string',
      hostName: 'string',
      lastTranStarted: 'number',
      lockMode: 'string',
      logUsed: 'number',
      loginName: 'string',
      objectOwned: 'string',
      objectRequested: 'string',
      ownMode: 'string',
      spid: 'number',
      sqlText: 'string',
      status: 'string',
      victim: 'number',
      waitMode: 'string',
      waitResource: 'string',
      waitResourceDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeadLockDetailListResponseBodyData extends $tea.Model {
  list?: GetDeadLockDetailListResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetDeadLockDetailListResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndpointSwitchTaskResponseBodyData extends $tea.Model {
  accountId?: string;
  dbLinkId?: number;
  errMsg?: string;
  oriUuid?: string;
  status?: string;
  taskId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      dbLinkId: 'DbLinkId',
      errMsg: 'ErrMsg',
      oriUuid: 'OriUuid',
      status: 'Status',
      taskId: 'TaskId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      dbLinkId: 'number',
      errMsg: 'string',
      oriUuid: 'string',
      status: 'string',
      taskId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorRequestSampleResponseBodyData extends $tea.Model {
  database?: string;
  errorCode?: string;
  instanceId?: string;
  originHost?: string;
  sql?: string;
  sqlId?: string;
  tables?: string[];
  timestamp?: number;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'database',
      errorCode: 'errorCode',
      instanceId: 'instanceId',
      originHost: 'originHost',
      sql: 'sql',
      sqlId: 'sqlId',
      tables: 'tables',
      timestamp: 'timestamp',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      errorCode: 'string',
      instanceId: 'string',
      originHost: 'string',
      sql: 'string',
      sqlId: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
      timestamp: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventSubscriptionResponseBodyDataContactGroups extends $tea.Model {
  contacts?: string;
  description?: string;
  name?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      contacts: 'contacts',
      description: 'description',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: 'string',
      description: 'string',
      name: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventSubscriptionResponseBodyDataContacts extends $tea.Model {
  dingtalkHook?: string;
  email?: string;
  groups?: string[];
  isCmsReduplicated?: boolean;
  name?: string;
  phone?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dingtalkHook: 'dingtalkHook',
      email: 'email',
      groups: 'groups',
      isCmsReduplicated: 'isCmsReduplicated',
      name: 'name',
      phone: 'phone',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkHook: 'string',
      email: 'string',
      groups: { 'type': 'array', 'itemType': 'string' },
      isCmsReduplicated: 'boolean',
      name: 'string',
      phone: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventSubscriptionResponseBodyData extends $tea.Model {
  active?: number;
  channelType?: string;
  contactGroupName?: string;
  contactGroups?: GetEventSubscriptionResponseBodyDataContactGroups[];
  contactName?: string;
  contacts?: GetEventSubscriptionResponseBodyDataContacts[];
  eventContext?: string;
  eventSendGroup?: string[];
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  instanceId?: string;
  lang?: string;
  level?: string;
  minInterval?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      channelType: 'channelType',
      contactGroupName: 'contactGroupName',
      contactGroups: 'contactGroups',
      contactName: 'contactName',
      contacts: 'contacts',
      eventContext: 'eventContext',
      eventSendGroup: 'eventSendGroup',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      instanceId: 'instanceId',
      lang: 'lang',
      level: 'level',
      minInterval: 'minInterval',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      channelType: 'string',
      contactGroupName: 'string',
      contactGroups: { 'type': 'array', 'itemType': GetEventSubscriptionResponseBodyDataContactGroups },
      contactName: 'string',
      contacts: { 'type': 'array', 'itemType': GetEventSubscriptionResponseBodyDataContacts },
      eventContext: 'string',
      eventSendGroup: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      instanceId: 'string',
      lang: 'string',
      level: 'string',
      minInterval: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestOriginStatByInstanceIdResponseBodyDataList extends $tea.Model {
  avgExaminedRows?: number;
  avgFetchRows?: number;
  avgLockWaitTime?: number;
  avgLogicalRead?: number;
  avgPhysicalAsyncRead?: number;
  avgPhysicalSyncRead?: number;
  avgReturnedRows?: number;
  avgRows?: number;
  avgRt?: number;
  avgSqlCount?: number;
  avgUpdatedRows?: number;
  count?: number;
  countRate?: number;
  database?: string;
  errorCount?: number;
  examinedRows?: number;
  fetchRows?: number;
  ip?: string;
  key?: string;
  lockWaitTime?: number;
  logicalRead?: number;
  originHost?: string;
  physicalAsyncRead?: number;
  physicalSyncRead?: number;
  port?: number;
  rows?: number;
  rtGreaterThanOneSecondCount?: number;
  rtRate?: number;
  sqlCount?: number;
  sumUpdatedRows?: number;
  version?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      avgExaminedRows: 'AvgExaminedRows',
      avgFetchRows: 'AvgFetchRows',
      avgLockWaitTime: 'AvgLockWaitTime',
      avgLogicalRead: 'AvgLogicalRead',
      avgPhysicalAsyncRead: 'AvgPhysicalAsyncRead',
      avgPhysicalSyncRead: 'AvgPhysicalSyncRead',
      avgReturnedRows: 'AvgReturnedRows',
      avgRows: 'AvgRows',
      avgRt: 'AvgRt',
      avgSqlCount: 'AvgSqlCount',
      avgUpdatedRows: 'AvgUpdatedRows',
      count: 'Count',
      countRate: 'CountRate',
      database: 'Database',
      errorCount: 'ErrorCount',
      examinedRows: 'ExaminedRows',
      fetchRows: 'FetchRows',
      ip: 'Ip',
      key: 'Key',
      lockWaitTime: 'LockWaitTime',
      logicalRead: 'LogicalRead',
      originHost: 'OriginHost',
      physicalAsyncRead: 'PhysicalAsyncRead',
      physicalSyncRead: 'PhysicalSyncRead',
      port: 'Port',
      rows: 'Rows',
      rtGreaterThanOneSecondCount: 'RtGreaterThanOneSecondCount',
      rtRate: 'RtRate',
      sqlCount: 'SqlCount',
      sumUpdatedRows: 'SumUpdatedRows',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgExaminedRows: 'number',
      avgFetchRows: 'number',
      avgLockWaitTime: 'number',
      avgLogicalRead: 'number',
      avgPhysicalAsyncRead: 'number',
      avgPhysicalSyncRead: 'number',
      avgReturnedRows: 'number',
      avgRows: 'number',
      avgRt: 'number',
      avgSqlCount: 'number',
      avgUpdatedRows: 'number',
      count: 'number',
      countRate: 'number',
      database: 'string',
      errorCount: 'number',
      examinedRows: 'number',
      fetchRows: 'number',
      ip: 'string',
      key: 'string',
      lockWaitTime: 'number',
      logicalRead: 'number',
      originHost: 'string',
      physicalAsyncRead: 'number',
      physicalSyncRead: 'number',
      port: 'number',
      rows: 'number',
      rtGreaterThanOneSecondCount: 'number',
      rtRate: 'number',
      sqlCount: 'number',
      sumUpdatedRows: 'number',
      version: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestOriginStatByInstanceIdResponseBodyData extends $tea.Model {
  list?: GetFullRequestOriginStatByInstanceIdResponseBodyDataList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetFullRequestOriginStatByInstanceIdResponseBodyDataList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestSampleByInstanceIdResponseBodyData extends $tea.Model {
  database?: string;
  frows?: number;
  lockWaitTime?: number;
  logicalRead?: number;
  originHost?: string;
  physicalAsyncRead?: number;
  physicalSyncRead?: number;
  rows?: number;
  rowsExamined?: number;
  rowsReturned?: number;
  rt?: number;
  scanRows?: number;
  scnt?: number;
  sql?: string;
  sqlId?: string;
  sqlType?: string;
  timestamp?: number;
  updateRows?: number;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      frows: 'Frows',
      lockWaitTime: 'LockWaitTime',
      logicalRead: 'LogicalRead',
      originHost: 'OriginHost',
      physicalAsyncRead: 'PhysicalAsyncRead',
      physicalSyncRead: 'PhysicalSyncRead',
      rows: 'Rows',
      rowsExamined: 'RowsExamined',
      rowsReturned: 'RowsReturned',
      rt: 'Rt',
      scanRows: 'ScanRows',
      scnt: 'Scnt',
      sql: 'Sql',
      sqlId: 'SqlId',
      sqlType: 'SqlType',
      timestamp: 'Timestamp',
      updateRows: 'UpdateRows',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      frows: 'number',
      lockWaitTime: 'number',
      logicalRead: 'number',
      originHost: 'string',
      physicalAsyncRead: 'number',
      physicalSyncRead: 'number',
      rows: 'number',
      rowsExamined: 'number',
      rowsReturned: 'number',
      rt: 'number',
      scanRows: 'number',
      scnt: 'number',
      sql: 'string',
      sqlId: 'string',
      sqlType: 'string',
      timestamp: 'number',
      updateRows: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestStatResultByInstanceIdResponseBodyDataResultList extends $tea.Model {
  avgExaminedRows?: number;
  avgFetchRows?: number;
  avgLockWaitTime?: number;
  avgLogicalRead?: number;
  avgPhysicalAsyncRead?: number;
  avgPhysicalSyncRead?: number;
  avgReturnedRows?: number;
  avgRt?: number;
  avgSqlCount?: number;
  avgUpdatedRows?: number;
  count?: number;
  countRate?: number;
  database?: string;
  errorCount?: number;
  examinedRows?: number;
  fetchRows?: number;
  ip?: string;
  lockWaitTime?: number;
  logicalRead?: number;
  physicalAsyncRead?: number;
  physicalSyncRead?: number;
  port?: number;
  psql?: string;
  rows?: number;
  rtGreaterThanOneSecondCount?: number;
  rtRate?: number;
  sqlCount?: number;
  sqlId?: string;
  sumUpdatedRows?: number;
  tables?: string[];
  version?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      avgExaminedRows: 'AvgExaminedRows',
      avgFetchRows: 'AvgFetchRows',
      avgLockWaitTime: 'AvgLockWaitTime',
      avgLogicalRead: 'AvgLogicalRead',
      avgPhysicalAsyncRead: 'AvgPhysicalAsyncRead',
      avgPhysicalSyncRead: 'AvgPhysicalSyncRead',
      avgReturnedRows: 'AvgReturnedRows',
      avgRt: 'AvgRt',
      avgSqlCount: 'AvgSqlCount',
      avgUpdatedRows: 'AvgUpdatedRows',
      count: 'Count',
      countRate: 'CountRate',
      database: 'Database',
      errorCount: 'ErrorCount',
      examinedRows: 'ExaminedRows',
      fetchRows: 'FetchRows',
      ip: 'Ip',
      lockWaitTime: 'LockWaitTime',
      logicalRead: 'LogicalRead',
      physicalAsyncRead: 'PhysicalAsyncRead',
      physicalSyncRead: 'PhysicalSyncRead',
      port: 'Port',
      psql: 'Psql',
      rows: 'Rows',
      rtGreaterThanOneSecondCount: 'RtGreaterThanOneSecondCount',
      rtRate: 'RtRate',
      sqlCount: 'SqlCount',
      sqlId: 'SqlId',
      sumUpdatedRows: 'SumUpdatedRows',
      tables: 'Tables',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgExaminedRows: 'number',
      avgFetchRows: 'number',
      avgLockWaitTime: 'number',
      avgLogicalRead: 'number',
      avgPhysicalAsyncRead: 'number',
      avgPhysicalSyncRead: 'number',
      avgReturnedRows: 'number',
      avgRt: 'number',
      avgSqlCount: 'number',
      avgUpdatedRows: 'number',
      count: 'number',
      countRate: 'number',
      database: 'string',
      errorCount: 'number',
      examinedRows: 'number',
      fetchRows: 'number',
      ip: 'string',
      lockWaitTime: 'number',
      logicalRead: 'number',
      physicalAsyncRead: 'number',
      physicalSyncRead: 'number',
      port: 'number',
      psql: 'string',
      rows: 'number',
      rtGreaterThanOneSecondCount: 'number',
      rtRate: 'number',
      sqlCount: 'number',
      sqlId: 'string',
      sumUpdatedRows: 'number',
      tables: { 'type': 'array', 'itemType': 'string' },
      version: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestStatResultByInstanceIdResponseBodyDataResult extends $tea.Model {
  list?: GetFullRequestStatResultByInstanceIdResponseBodyDataResultList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetFullRequestStatResultByInstanceIdResponseBodyDataResultList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFullRequestStatResultByInstanceIdResponseBodyData extends $tea.Model {
  fail?: boolean;
  isFinish?: boolean;
  result?: GetFullRequestStatResultByInstanceIdResponseBodyDataResult;
  resultId?: string;
  state?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      fail: 'Fail',
      isFinish: 'IsFinish',
      result: 'Result',
      resultId: 'ResultId',
      state: 'State',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fail: 'boolean',
      isFinish: 'boolean',
      result: GetFullRequestStatResultByInstanceIdResponseBodyDataResult,
      resultId: 'string',
      state: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHDMAliyunResourceSyncResultResponseBodyDataSubResultsResourceSyncSubResult extends $tea.Model {
  errMsg?: string;
  resourceType?: string;
  success?: boolean;
  syncCount?: number;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      resourceType: 'ResourceType',
      success: 'Success',
      syncCount: 'SyncCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      resourceType: 'string',
      success: 'boolean',
      syncCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHDMAliyunResourceSyncResultResponseBodyDataSubResults extends $tea.Model {
  resourceSyncSubResult?: GetHDMAliyunResourceSyncResultResponseBodyDataSubResultsResourceSyncSubResult[];
  static names(): { [key: string]: string } {
    return {
      resourceSyncSubResult: 'ResourceSyncSubResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceSyncSubResult: { 'type': 'array', 'itemType': GetHDMAliyunResourceSyncResultResponseBodyDataSubResultsResourceSyncSubResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHDMAliyunResourceSyncResultResponseBodyData extends $tea.Model {
  errorMsg?: string;
  results?: string;
  subResults?: GetHDMAliyunResourceSyncResultResponseBodyDataSubResults;
  syncStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      results: 'Results',
      subResults: 'SubResults',
      syncStatus: 'SyncStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      results: 'string',
      subResults: GetHDMAliyunResourceSyncResultResponseBodyDataSubResults,
      syncStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResultsResourceSyncSubResult extends $tea.Model {
  errMsg?: string;
  resourceType?: string;
  success?: boolean;
  syncCount?: number;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      resourceType: 'ResourceType',
      success: 'Success',
      syncCount: 'SyncCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      resourceType: 'string',
      success: 'boolean',
      syncCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResults extends $tea.Model {
  resourceSyncSubResult?: GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResultsResourceSyncSubResult[];
  static names(): { [key: string]: string } {
    return {
      resourceSyncSubResult: 'ResourceSyncSubResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceSyncSubResult: { 'type': 'array', 'itemType': GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResultsResourceSyncSubResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHDMLastAliyunResourceSyncResultResponseBodyData extends $tea.Model {
  errorMsg?: string;
  results?: string;
  subResults?: GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResults;
  syncStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      results: 'Results',
      subResults: 'SubResults',
      syncStatus: 'SyncStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      results: 'string',
      subResults: GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResults,
      syncStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionsResponseBodyDataListAutoFunction extends $tea.Model {
  autoIndex?: number;
  autoLimitedSql?: number;
  autoResourceOptimize?: number;
  autoScale?: number;
  eventSubscription?: number;
  static names(): { [key: string]: string } {
    return {
      autoIndex: 'AutoIndex',
      autoLimitedSql: 'AutoLimitedSql',
      autoResourceOptimize: 'AutoResourceOptimize',
      autoScale: 'AutoScale',
      eventSubscription: 'EventSubscription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIndex: 'number',
      autoLimitedSql: 'number',
      autoResourceOptimize: 'number',
      autoScale: 'number',
      eventSubscription: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionsResponseBodyDataListInstance extends $tea.Model {
  accountId?: string;
  category?: string;
  cpu?: string;
  engine?: string;
  engineVersion?: string;
  instanceAlias?: string;
  instanceArea?: string;
  instanceClass?: string;
  instanceId?: string;
  memory?: number;
  networkType?: string;
  nodeId?: string;
  region?: string;
  storage?: number;
  uuid?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      category: 'Category',
      cpu: 'Cpu',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceAlias: 'InstanceAlias',
      instanceArea: 'InstanceArea',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      memory: 'Memory',
      networkType: 'NetworkType',
      nodeId: 'NodeId',
      region: 'Region',
      storage: 'Storage',
      uuid: 'Uuid',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      category: 'string',
      cpu: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceAlias: 'string',
      instanceArea: 'string',
      instanceClass: 'string',
      instanceId: 'string',
      memory: 'number',
      networkType: 'string',
      nodeId: 'string',
      region: 'string',
      storage: 'number',
      uuid: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionsResponseBodyDataList extends $tea.Model {
  autoFunction?: GetInstanceInspectionsResponseBodyDataListAutoFunction;
  data?: { [key: string]: any };
  enableDasPro?: number;
  endTime?: number;
  gmtCreate?: number;
  instance?: GetInstanceInspectionsResponseBodyDataListInstance;
  score?: number;
  scoreMap?: { [key: string]: any };
  startTime?: number;
  state?: number;
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      autoFunction: 'AutoFunction',
      data: 'Data',
      enableDasPro: 'EnableDasPro',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      instance: 'Instance',
      score: 'Score',
      scoreMap: 'ScoreMap',
      startTime: 'StartTime',
      state: 'State',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoFunction: GetInstanceInspectionsResponseBodyDataListAutoFunction,
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      enableDasPro: 'number',
      endTime: 'number',
      gmtCreate: 'number',
      instance: GetInstanceInspectionsResponseBodyDataListInstance,
      score: 'number',
      scoreMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      startTime: 'number',
      state: 'number',
      taskType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionsResponseBodyData extends $tea.Model {
  list?: GetInstanceInspectionsResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetInstanceInspectionsResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMissingIndexListResponseBodyDataList extends $tea.Model {
  avgTotalUserCost?: number;
  avgUserImpact?: number;
  createIndex?: string;
  databaseName?: string;
  equalityColumns?: string;
  includedColumns?: string;
  indexCount?: number;
  inequalityColumns?: string;
  lastUserSeek?: number;
  objectName?: string;
  reservedPages?: number;
  reservedSize?: number;
  rowCount?: number;
  schemaName?: string;
  systemScans?: number;
  systemSeeks?: number;
  uniqueCompiles?: number;
  userScans?: number;
  userSeeks?: number;
  static names(): { [key: string]: string } {
    return {
      avgTotalUserCost: 'AvgTotalUserCost',
      avgUserImpact: 'AvgUserImpact',
      createIndex: 'CreateIndex',
      databaseName: 'DatabaseName',
      equalityColumns: 'EqualityColumns',
      includedColumns: 'IncludedColumns',
      indexCount: 'IndexCount',
      inequalityColumns: 'InequalityColumns',
      lastUserSeek: 'LastUserSeek',
      objectName: 'ObjectName',
      reservedPages: 'ReservedPages',
      reservedSize: 'ReservedSize',
      rowCount: 'RowCount',
      schemaName: 'SchemaName',
      systemScans: 'SystemScans',
      systemSeeks: 'SystemSeeks',
      uniqueCompiles: 'UniqueCompiles',
      userScans: 'UserScans',
      userSeeks: 'UserSeeks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgTotalUserCost: 'number',
      avgUserImpact: 'number',
      createIndex: 'string',
      databaseName: 'string',
      equalityColumns: 'string',
      includedColumns: 'string',
      indexCount: 'number',
      inequalityColumns: 'string',
      lastUserSeek: 'number',
      objectName: 'string',
      reservedPages: 'number',
      reservedSize: 'number',
      rowCount: 'number',
      schemaName: 'string',
      systemScans: 'number',
      systemSeeks: 'number',
      uniqueCompiles: 'number',
      userScans: 'number',
      userSeeks: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMissingIndexListResponseBodyData extends $tea.Model {
  list?: GetInstanceMissingIndexListResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetInstanceMissingIndexListResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSqlOptimizeStatisticResponseBodyData extends $tea.Model {
  count?: number;
  improvement?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      improvement: 'improvement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      improvement: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKillInstanceSessionTaskResultResponseBodyDataResult extends $tea.Model {
  active?: boolean;
  command?: string;
  db?: string;
  host?: string;
  id?: number;
  info?: string;
  reason?: string;
  state?: string;
  taskId?: string;
  time?: number;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      command: 'Command',
      db: 'Db',
      host: 'Host',
      id: 'Id',
      info: 'Info',
      reason: 'Reason',
      state: 'State',
      taskId: 'TaskId',
      time: 'Time',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      command: 'string',
      db: 'string',
      host: 'string',
      id: 'number',
      info: 'string',
      reason: 'string',
      state: 'string',
      taskId: 'string',
      time: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKillInstanceSessionTaskResultResponseBodyData extends $tea.Model {
  ignoredUserSessionCount?: number;
  instanceId?: string;
  killFailCount?: number;
  killSuccessCount?: number;
  nodeId?: string;
  result?: GetKillInstanceSessionTaskResultResponseBodyDataResult[];
  sessions?: number[];
  taskId?: string;
  taskState?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      ignoredUserSessionCount: 'IgnoredUserSessionCount',
      instanceId: 'InstanceId',
      killFailCount: 'KillFailCount',
      killSuccessCount: 'KillSuccessCount',
      nodeId: 'NodeId',
      result: 'Result',
      sessions: 'Sessions',
      taskId: 'TaskId',
      taskState: 'TaskState',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoredUserSessionCount: 'number',
      instanceId: 'string',
      killFailCount: 'number',
      killSuccessCount: 'number',
      nodeId: 'string',
      result: { 'type': 'array', 'itemType': GetKillInstanceSessionTaskResultResponseBodyDataResult },
      sessions: { 'type': 'array', 'itemType': 'number' },
      taskId: 'string',
      taskState: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMongoDBCurrentOpResponseBodyDataSessionList extends $tea.Model {
  active?: boolean;
  client?: string;
  command?: string;
  connectionId?: number;
  desc?: string;
  driver?: string;
  host?: string;
  killPending?: boolean;
  ns?: string;
  op?: string;
  opId?: string;
  osArch?: string;
  osName?: string;
  osType?: string;
  planSummary?: string;
  platform?: string;
  secsRunning?: number;
  shard?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      client: 'Client',
      command: 'Command',
      connectionId: 'ConnectionId',
      desc: 'Desc',
      driver: 'Driver',
      host: 'Host',
      killPending: 'KillPending',
      ns: 'Ns',
      op: 'Op',
      opId: 'OpId',
      osArch: 'OsArch',
      osName: 'OsName',
      osType: 'OsType',
      planSummary: 'PlanSummary',
      platform: 'Platform',
      secsRunning: 'SecsRunning',
      shard: 'Shard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      client: 'string',
      command: 'string',
      connectionId: 'number',
      desc: 'string',
      driver: 'string',
      host: 'string',
      killPending: 'boolean',
      ns: 'string',
      op: 'string',
      opId: 'string',
      osArch: 'string',
      osName: 'string',
      osType: 'string',
      planSummary: 'string',
      platform: 'string',
      secsRunning: 'number',
      shard: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMongoDBCurrentOpResponseBodyDataSessionStat extends $tea.Model {
  activeCount?: number;
  clientStats?: { [key: string]: DataSessionStatClientStatsValue };
  dbStats?: { [key: string]: DataSessionStatDbStatsValue };
  longestSecsRunning?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      clientStats: 'ClientStats',
      dbStats: 'DbStats',
      longestSecsRunning: 'LongestSecsRunning',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      clientStats: { 'type': 'map', 'keyType': 'string', 'valueType': DataSessionStatClientStatsValue },
      dbStats: { 'type': 'map', 'keyType': 'string', 'valueType': DataSessionStatDbStatsValue },
      longestSecsRunning: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMongoDBCurrentOpResponseBodyData extends $tea.Model {
  sessionList?: GetMongoDBCurrentOpResponseBodyDataSessionList[];
  sessionStat?: GetMongoDBCurrentOpResponseBodyDataSessionStat;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      sessionList: 'SessionList',
      sessionStat: 'SessionStat',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionList: { 'type': 'array', 'itemType': GetMongoDBCurrentOpResponseBodyDataSessionList },
      sessionStat: GetMongoDBCurrentOpResponseBodyDataSessionStat,
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncResponseBodyDataSessionDataClientStats extends $tea.Model {
  activeCount?: number;
  key?: string;
  threadIdList?: number[];
  totalCount?: number;
  userList?: string[];
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      key: 'Key',
      threadIdList: 'ThreadIdList',
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      key: 'string',
      threadIdList: { 'type': 'array', 'itemType': 'number' },
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncResponseBodyDataSessionDataDbStats extends $tea.Model {
  activeCount?: number;
  key?: string;
  threadIdList?: number[];
  totalCount?: number;
  userList?: string[];
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      key: 'Key',
      threadIdList: 'ThreadIdList',
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      key: 'string',
      threadIdList: { 'type': 'array', 'itemType': 'number' },
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncResponseBodyDataSessionDataSessionList extends $tea.Model {
  client?: string;
  command?: string;
  dbName?: string;
  sessionId?: number;
  sqlTemplateId?: string;
  sqlText?: string;
  state?: string;
  time?: number;
  trxDuration?: number;
  trxId?: string;
  user?: string;
  userClientAlias?: string;
  static names(): { [key: string]: string } {
    return {
      client: 'Client',
      command: 'Command',
      dbName: 'DbName',
      sessionId: 'SessionId',
      sqlTemplateId: 'SqlTemplateId',
      sqlText: 'SqlText',
      state: 'State',
      time: 'Time',
      trxDuration: 'TrxDuration',
      trxId: 'TrxId',
      user: 'User',
      userClientAlias: 'UserClientAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: 'string',
      command: 'string',
      dbName: 'string',
      sessionId: 'number',
      sqlTemplateId: 'string',
      sqlText: 'string',
      state: 'string',
      time: 'number',
      trxDuration: 'number',
      trxId: 'string',
      user: 'string',
      userClientAlias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncResponseBodyDataSessionDataUserStats extends $tea.Model {
  activeCount?: number;
  key?: string;
  threadIdList?: number[];
  totalCount?: number;
  userList?: string[];
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      key: 'Key',
      threadIdList: 'ThreadIdList',
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      key: 'string',
      threadIdList: { 'type': 'array', 'itemType': 'number' },
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncResponseBodyDataSessionData extends $tea.Model {
  activeSessionCount?: number;
  clientStats?: GetMySQLAllSessionAsyncResponseBodyDataSessionDataClientStats[];
  dbStats?: GetMySQLAllSessionAsyncResponseBodyDataSessionDataDbStats[];
  maxActiveTime?: number;
  sessionList?: GetMySQLAllSessionAsyncResponseBodyDataSessionDataSessionList[];
  timeStamp?: number;
  totalSessionCount?: number;
  userStats?: GetMySQLAllSessionAsyncResponseBodyDataSessionDataUserStats[];
  static names(): { [key: string]: string } {
    return {
      activeSessionCount: 'ActiveSessionCount',
      clientStats: 'ClientStats',
      dbStats: 'DbStats',
      maxActiveTime: 'MaxActiveTime',
      sessionList: 'SessionList',
      timeStamp: 'TimeStamp',
      totalSessionCount: 'TotalSessionCount',
      userStats: 'UserStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessionCount: 'number',
      clientStats: { 'type': 'array', 'itemType': GetMySQLAllSessionAsyncResponseBodyDataSessionDataClientStats },
      dbStats: { 'type': 'array', 'itemType': GetMySQLAllSessionAsyncResponseBodyDataSessionDataDbStats },
      maxActiveTime: 'number',
      sessionList: { 'type': 'array', 'itemType': GetMySQLAllSessionAsyncResponseBodyDataSessionDataSessionList },
      timeStamp: 'number',
      totalSessionCount: 'number',
      userStats: { 'type': 'array', 'itemType': GetMySQLAllSessionAsyncResponseBodyDataSessionDataUserStats },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncResponseBodyData extends $tea.Model {
  complete?: boolean;
  fail?: boolean;
  isFinish?: boolean;
  resultId?: string;
  sessionData?: GetMySQLAllSessionAsyncResponseBodyDataSessionData;
  state?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      complete: 'Complete',
      fail: 'Fail',
      isFinish: 'IsFinish',
      resultId: 'ResultId',
      sessionData: 'SessionData',
      state: 'State',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      fail: 'boolean',
      isFinish: 'boolean',
      resultId: 'string',
      sessionData: GetMySQLAllSessionAsyncResponseBodyDataSessionData,
      state: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsSqlSampleResponseBodyData extends $tea.Model {
  createTmpDiskTables?: number;
  createTmpTables?: number;
  db?: string;
  endEventId?: number;
  errors?: number;
  eventId?: number;
  eventName?: string;
  instanceId?: string;
  latency?: number;
  lockLatency?: number;
  logicId?: string;
  noGoodIndexUsed?: number;
  noIndexUsed?: number;
  nodeId?: string;
  rowsAffected?: number;
  rowsExamined?: number;
  rowsSent?: number;
  selectFullJoin?: number;
  selectFullRangeJoin?: number;
  selectRange?: number;
  selectRangeCheck?: number;
  selectScan?: number;
  sortMergePasses?: number;
  sortRange?: number;
  sortRows?: number;
  sortScan?: number;
  sql?: string;
  sqlId?: string;
  threadId?: number;
  timestamp?: number;
  userId?: string;
  warnings?: number;
  static names(): { [key: string]: string } {
    return {
      createTmpDiskTables: 'CreateTmpDiskTables',
      createTmpTables: 'CreateTmpTables',
      db: 'Db',
      endEventId: 'EndEventId',
      errors: 'Errors',
      eventId: 'EventId',
      eventName: 'EventName',
      instanceId: 'InstanceId',
      latency: 'Latency',
      lockLatency: 'LockLatency',
      logicId: 'LogicId',
      noGoodIndexUsed: 'NoGoodIndexUsed',
      noIndexUsed: 'NoIndexUsed',
      nodeId: 'NodeId',
      rowsAffected: 'RowsAffected',
      rowsExamined: 'RowsExamined',
      rowsSent: 'RowsSent',
      selectFullJoin: 'SelectFullJoin',
      selectFullRangeJoin: 'SelectFullRangeJoin',
      selectRange: 'SelectRange',
      selectRangeCheck: 'SelectRangeCheck',
      selectScan: 'SelectScan',
      sortMergePasses: 'SortMergePasses',
      sortRange: 'SortRange',
      sortRows: 'SortRows',
      sortScan: 'SortScan',
      sql: 'Sql',
      sqlId: 'SqlId',
      threadId: 'ThreadId',
      timestamp: 'Timestamp',
      userId: 'UserId',
      warnings: 'Warnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTmpDiskTables: 'number',
      createTmpTables: 'number',
      db: 'string',
      endEventId: 'number',
      errors: 'number',
      eventId: 'number',
      eventName: 'string',
      instanceId: 'string',
      latency: 'number',
      lockLatency: 'number',
      logicId: 'string',
      noGoodIndexUsed: 'number',
      noIndexUsed: 'number',
      nodeId: 'string',
      rowsAffected: 'number',
      rowsExamined: 'number',
      rowsSent: 'number',
      selectFullJoin: 'number',
      selectFullRangeJoin: 'number',
      selectRange: 'number',
      selectRangeCheck: 'number',
      selectScan: 'number',
      sortMergePasses: 'number',
      sortRange: 'number',
      sortRows: 'number',
      sortScan: 'number',
      sql: 'string',
      sqlId: 'string',
      threadId: 'number',
      timestamp: 'number',
      userId: 'string',
      warnings: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsSqlSummariesResponseBodyDataList extends $tea.Model {
  avgLatency?: number;
  count?: number;
  countRate?: number;
  cpuRate?: number;
  cpuTime?: number;
  dataReadTime?: number;
  dataReads?: number;
  dataWriteTime?: number;
  dataWrites?: number;
  db?: string;
  elapsedTime?: number;
  errCount?: number;
  firstTime?: number;
  fullScan?: boolean;
  id?: number;
  instanceId?: string;
  lastTime?: number;
  lockLatencyAvg?: number;
  logicId?: number;
  logicReads?: number;
  maxLatency?: number;
  mutexSpins?: number;
  mutexWaits?: number;
  nodeId?: string;
  physicalAsyncReads?: number;
  physicalReads?: number;
  psql?: string;
  redoWrites?: number;
  rowsAffected?: number;
  rowsAffectedAvg?: number;
  rowsExamined?: number;
  rowsExaminedAvg?: number;
  rowsSendAvg?: number;
  rowsSent?: number;
  rowsSentAvg?: number;
  rowsSorted?: number;
  rtRate?: number;
  rwlockOsWaits?: number;
  rwlockSpinRounds?: number;
  rwlockSpinWaits?: number;
  selectFullJoinAvg?: number;
  selectFullRangeJoinAvg?: number;
  selectRangeAvg?: number;
  selectScanAvg?: number;
  semisyncDelayTime?: number;
  serverLockTime?: number;
  sortMergePasses?: number;
  sortRangeAvg?: number;
  sortRowsAvg?: number;
  sortScanAvg?: number;
  sqlId?: string;
  sqlType?: string;
  tables?: string[];
  timerWaitAvg?: number;
  timestamp?: number;
  tmpDiskTables?: number;
  tmpDiskTablesAvg?: number;
  tmpTables?: number;
  tmpTablesAvg?: number;
  totalLatency?: number;
  transactionLockTime?: number;
  userId?: string;
  warnCount?: number;
  static names(): { [key: string]: string } {
    return {
      avgLatency: 'AvgLatency',
      count: 'Count',
      countRate: 'CountRate',
      cpuRate: 'CpuRate',
      cpuTime: 'CpuTime',
      dataReadTime: 'DataReadTime',
      dataReads: 'DataReads',
      dataWriteTime: 'DataWriteTime',
      dataWrites: 'DataWrites',
      db: 'Db',
      elapsedTime: 'ElapsedTime',
      errCount: 'ErrCount',
      firstTime: 'FirstTime',
      fullScan: 'FullScan',
      id: 'Id',
      instanceId: 'InstanceId',
      lastTime: 'LastTime',
      lockLatencyAvg: 'LockLatencyAvg',
      logicId: 'LogicId',
      logicReads: 'LogicReads',
      maxLatency: 'MaxLatency',
      mutexSpins: 'MutexSpins',
      mutexWaits: 'MutexWaits',
      nodeId: 'NodeId',
      physicalAsyncReads: 'PhysicalAsyncReads',
      physicalReads: 'PhysicalReads',
      psql: 'Psql',
      redoWrites: 'RedoWrites',
      rowsAffected: 'RowsAffected',
      rowsAffectedAvg: 'RowsAffectedAvg',
      rowsExamined: 'RowsExamined',
      rowsExaminedAvg: 'RowsExaminedAvg',
      rowsSendAvg: 'RowsSendAvg',
      rowsSent: 'RowsSent',
      rowsSentAvg: 'RowsSentAvg',
      rowsSorted: 'RowsSorted',
      rtRate: 'RtRate',
      rwlockOsWaits: 'RwlockOsWaits',
      rwlockSpinRounds: 'RwlockSpinRounds',
      rwlockSpinWaits: 'RwlockSpinWaits',
      selectFullJoinAvg: 'SelectFullJoinAvg',
      selectFullRangeJoinAvg: 'SelectFullRangeJoinAvg',
      selectRangeAvg: 'SelectRangeAvg',
      selectScanAvg: 'SelectScanAvg',
      semisyncDelayTime: 'SemisyncDelayTime',
      serverLockTime: 'ServerLockTime',
      sortMergePasses: 'SortMergePasses',
      sortRangeAvg: 'SortRangeAvg',
      sortRowsAvg: 'SortRowsAvg',
      sortScanAvg: 'SortScanAvg',
      sqlId: 'SqlId',
      sqlType: 'SqlType',
      tables: 'Tables',
      timerWaitAvg: 'TimerWaitAvg',
      timestamp: 'Timestamp',
      tmpDiskTables: 'TmpDiskTables',
      tmpDiskTablesAvg: 'TmpDiskTablesAvg',
      tmpTables: 'TmpTables',
      tmpTablesAvg: 'TmpTablesAvg',
      totalLatency: 'TotalLatency',
      transactionLockTime: 'TransactionLockTime',
      userId: 'UserId',
      warnCount: 'WarnCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgLatency: 'number',
      count: 'number',
      countRate: 'number',
      cpuRate: 'number',
      cpuTime: 'number',
      dataReadTime: 'number',
      dataReads: 'number',
      dataWriteTime: 'number',
      dataWrites: 'number',
      db: 'string',
      elapsedTime: 'number',
      errCount: 'number',
      firstTime: 'number',
      fullScan: 'boolean',
      id: 'number',
      instanceId: 'string',
      lastTime: 'number',
      lockLatencyAvg: 'number',
      logicId: 'number',
      logicReads: 'number',
      maxLatency: 'number',
      mutexSpins: 'number',
      mutexWaits: 'number',
      nodeId: 'string',
      physicalAsyncReads: 'number',
      physicalReads: 'number',
      psql: 'string',
      redoWrites: 'number',
      rowsAffected: 'number',
      rowsAffectedAvg: 'number',
      rowsExamined: 'number',
      rowsExaminedAvg: 'number',
      rowsSendAvg: 'number',
      rowsSent: 'number',
      rowsSentAvg: 'number',
      rowsSorted: 'number',
      rtRate: 'number',
      rwlockOsWaits: 'number',
      rwlockSpinRounds: 'number',
      rwlockSpinWaits: 'number',
      selectFullJoinAvg: 'number',
      selectFullRangeJoinAvg: 'number',
      selectRangeAvg: 'number',
      selectScanAvg: 'number',
      semisyncDelayTime: 'number',
      serverLockTime: 'number',
      sortMergePasses: 'number',
      sortRangeAvg: 'number',
      sortRowsAvg: 'number',
      sortScanAvg: 'number',
      sqlId: 'string',
      sqlType: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
      timerWaitAvg: 'number',
      timestamp: 'number',
      tmpDiskTables: 'number',
      tmpDiskTablesAvg: 'number',
      tmpTables: 'number',
      tmpTablesAvg: 'number',
      totalLatency: 'number',
      transactionLockTime: 'number',
      userId: 'string',
      warnCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsSqlSummariesResponseBodyData extends $tea.Model {
  extra?: any;
  list?: GetPfsSqlSummariesResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'any',
      list: { 'type': 'array', 'itemType': GetPfsSqlSummariesResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataStatsResponseBodyDataListRuleList extends $tea.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataStatsResponseBodyDataList extends $tea.Model {
  avgLockTime?: number;
  avgQueryTime?: number;
  avgRowsAffected?: number;
  avgRowsExamined?: number;
  avgRowsSent?: number;
  count?: number;
  dbname?: string;
  instanceId?: string;
  maxLockTime?: number;
  maxQueryTime?: number;
  maxRowsAffected?: number;
  maxRowsExamined?: number;
  maxRowsSent?: number;
  psql?: string;
  ruleList?: GetQueryOptimizeDataStatsResponseBodyDataListRuleList[];
  sqlId?: string;
  sqlSample?: string;
  sqlType?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      avgLockTime: 'AvgLockTime',
      avgQueryTime: 'AvgQueryTime',
      avgRowsAffected: 'AvgRowsAffected',
      avgRowsExamined: 'AvgRowsExamined',
      avgRowsSent: 'AvgRowsSent',
      count: 'Count',
      dbname: 'Dbname',
      instanceId: 'InstanceId',
      maxLockTime: 'MaxLockTime',
      maxQueryTime: 'MaxQueryTime',
      maxRowsAffected: 'MaxRowsAffected',
      maxRowsExamined: 'MaxRowsExamined',
      maxRowsSent: 'MaxRowsSent',
      psql: 'Psql',
      ruleList: 'RuleList',
      sqlId: 'SqlId',
      sqlSample: 'SqlSample',
      sqlType: 'SqlType',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgLockTime: 'number',
      avgQueryTime: 'number',
      avgRowsAffected: 'number',
      avgRowsExamined: 'number',
      avgRowsSent: 'number',
      count: 'number',
      dbname: 'string',
      instanceId: 'string',
      maxLockTime: 'number',
      maxQueryTime: 'number',
      maxRowsAffected: 'number',
      maxRowsExamined: 'number',
      maxRowsSent: 'number',
      psql: 'string',
      ruleList: { 'type': 'array', 'itemType': GetQueryOptimizeDataStatsResponseBodyDataListRuleList },
      sqlId: 'string',
      sqlSample: 'string',
      sqlType: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataStatsResponseBodyData extends $tea.Model {
  extra?: string;
  list?: GetQueryOptimizeDataStatsResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: { 'type': 'array', 'itemType': GetQueryOptimizeDataStatsResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataTopResponseBodyDataList extends $tea.Model {
  instanceId?: string;
  type?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataTopResponseBodyData extends $tea.Model {
  extra?: string;
  list?: GetQueryOptimizeDataTopResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: { 'type': 'array', 'itemType': GetQueryOptimizeDataTopResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataTrendResponseBodyDataList extends $tea.Model {
  kpi?: string;
  timestamp?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      kpi: 'Kpi',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kpi: 'string',
      timestamp: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataTrendResponseBodyData extends $tea.Model {
  extra?: string;
  list?: GetQueryOptimizeDataTrendResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: { 'type': 'array', 'itemType': GetQueryOptimizeDataTrendResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeExecErrorSampleResponseBodyDataList extends $tea.Model {
  dbname?: string;
  errorCode?: string;
  origHost?: string;
  sqlId?: string;
  sqlText?: string;
  timestamp?: number;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      dbname: 'Dbname',
      errorCode: 'ErrorCode',
      origHost: 'OrigHost',
      sqlId: 'SqlId',
      sqlText: 'SqlText',
      timestamp: 'Timestamp',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbname: 'string',
      errorCode: 'string',
      origHost: 'string',
      sqlId: 'string',
      sqlText: 'string',
      timestamp: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeExecErrorSampleResponseBodyData extends $tea.Model {
  extra?: string;
  list?: GetQueryOptimizeExecErrorSampleResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: { 'type': 'array', 'itemType': GetQueryOptimizeExecErrorSampleResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeExecErrorStatsResponseBodyDataList extends $tea.Model {
  dbname?: string;
  errorCode?: string;
  errorCount?: number;
  instanceId?: string;
  instanceName?: string;
  sqlId?: string;
  sqlText?: string;
  static names(): { [key: string]: string } {
    return {
      dbname: 'Dbname',
      errorCode: 'ErrorCode',
      errorCount: 'ErrorCount',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      sqlId: 'SqlId',
      sqlText: 'SqlText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbname: 'string',
      errorCode: 'string',
      errorCount: 'number',
      instanceId: 'string',
      instanceName: 'string',
      sqlId: 'string',
      sqlText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeExecErrorStatsResponseBodyData extends $tea.Model {
  extra?: string;
  list?: GetQueryOptimizeExecErrorStatsResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: { 'type': 'array', 'itemType': GetQueryOptimizeExecErrorStatsResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeRuleListResponseBodyDataList extends $tea.Model {
  name?: string;
  ruleId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleId: 'RuleId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeRuleListResponseBodyData extends $tea.Model {
  extra?: string;
  list?: GetQueryOptimizeRuleListResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: { 'type': 'array', 'itemType': GetQueryOptimizeRuleListResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeSolutionResponseBodyDataList extends $tea.Model {
  level?: string;
  ruleId?: string;
  solution?: string;
  solutionExt?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      ruleId: 'RuleId',
      solution: 'Solution',
      solutionExt: 'SolutionExt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      ruleId: 'string',
      solution: 'string',
      solutionExt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeSolutionResponseBodyData extends $tea.Model {
  extra?: string;
  list?: GetQueryOptimizeSolutionResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: { 'type': 'array', 'itemType': GetQueryOptimizeSolutionResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeTagResponseBodyData extends $tea.Model {
  comments?: string;
  sqlId?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      sqlId: 'SqlId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      sqlId: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRedisAllSessionResponseBodyDataSessions extends $tea.Model {
  addr?: string;
  age?: string;
  client?: string;
  clientDesc?: string;
  cmd?: string;
  db?: number;
  events?: string;
  fd?: number;
  flags?: string;
  id?: number;
  idle?: number;
  multi?: number;
  name?: string;
  nodeId?: string;
  obl?: number;
  oll?: number;
  omem?: number;
  psub?: number;
  qbuf?: number;
  qbufFree?: number;
  sub?: number;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      age: 'Age',
      client: 'Client',
      clientDesc: 'ClientDesc',
      cmd: 'Cmd',
      db: 'Db',
      events: 'Events',
      fd: 'Fd',
      flags: 'Flags',
      id: 'Id',
      idle: 'Idle',
      multi: 'Multi',
      name: 'Name',
      nodeId: 'NodeId',
      obl: 'Obl',
      oll: 'Oll',
      omem: 'Omem',
      psub: 'Psub',
      qbuf: 'Qbuf',
      qbufFree: 'QbufFree',
      sub: 'Sub',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      age: 'string',
      client: 'string',
      clientDesc: 'string',
      cmd: 'string',
      db: 'number',
      events: 'string',
      fd: 'number',
      flags: 'string',
      id: 'number',
      idle: 'number',
      multi: 'number',
      name: 'string',
      nodeId: 'string',
      obl: 'number',
      oll: 'number',
      omem: 'number',
      psub: 'number',
      qbuf: 'number',
      qbufFree: 'number',
      sub: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRedisAllSessionResponseBodyDataSourceStats extends $tea.Model {
  count?: string;
  ids?: number[];
  key?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ids: 'Ids',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      ids: { 'type': 'array', 'itemType': 'number' },
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRedisAllSessionResponseBodyData extends $tea.Model {
  sessions?: GetRedisAllSessionResponseBodyDataSessions[];
  sourceStats?: GetRedisAllSessionResponseBodyDataSourceStats[];
  timestamp?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      sessions: 'Sessions',
      sourceStats: 'SourceStats',
      timestamp: 'Timestamp',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessions: { 'type': 'array', 'itemType': GetRedisAllSessionResponseBodyDataSessions },
      sourceStats: { 'type': 'array', 'itemType': GetRedisAllSessionResponseBodyDataSourceStats },
      timestamp: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestDiagnosisPageResponseBodyDataList extends $tea.Model {
  accountId?: string;
  dbSchema?: string;
  engine?: string;
  gmtCreate?: string;
  gmtModified?: string;
  messageId?: string;
  param?: string;
  result?: string;
  sqlId?: string;
  state?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      dbSchema: 'dbSchema',
      engine: 'engine',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      messageId: 'messageId',
      param: 'param',
      result: 'result',
      sqlId: 'sqlId',
      state: 'state',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      dbSchema: 'string',
      engine: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      messageId: 'string',
      param: 'string',
      result: 'string',
      sqlId: 'string',
      state: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestDiagnosisPageResponseBodyData extends $tea.Model {
  extra?: string;
  list?: GetRequestDiagnosisPageResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'extra',
      list: 'list',
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: { 'type': 'array', 'itemType': GetRequestDiagnosisPageResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestDiagnosisResultResponseBodyData extends $tea.Model {
  accountId?: string;
  dbSchema?: string;
  engine?: string;
  gmtCreate?: string;
  gmtModified?: string;
  messageId?: string;
  param?: string;
  result?: string;
  sqlId?: string;
  state?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      dbSchema: 'dbSchema',
      engine: 'engine',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      messageId: 'messageId',
      param: 'param',
      result: 'result',
      sqlId: 'sqlId',
      state: 'state',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      dbSchema: 'string',
      engine: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      messageId: 'string',
      param: 'string',
      result: 'string',
      sqlId: 'string',
      state: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningSqlConcurrencyControlRulesResponseBodyDataListRunningRules extends $tea.Model {
  concurrencyControlTime?: number;
  instanceId?: string;
  itemId?: number;
  keywordsHash?: string;
  maxConcurrency?: string;
  sqlKeywords?: string;
  sqlType?: string;
  startTime?: number;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      concurrencyControlTime: 'ConcurrencyControlTime',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
      keywordsHash: 'KeywordsHash',
      maxConcurrency: 'MaxConcurrency',
      sqlKeywords: 'SqlKeywords',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrencyControlTime: 'number',
      instanceId: 'string',
      itemId: 'number',
      keywordsHash: 'string',
      maxConcurrency: 'string',
      sqlKeywords: 'string',
      sqlType: 'string',
      startTime: 'number',
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningSqlConcurrencyControlRulesResponseBodyDataList extends $tea.Model {
  runningRules?: GetRunningSqlConcurrencyControlRulesResponseBodyDataListRunningRules[];
  static names(): { [key: string]: string } {
    return {
      runningRules: 'runningRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runningRules: { 'type': 'array', 'itemType': GetRunningSqlConcurrencyControlRulesResponseBodyDataListRunningRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningSqlConcurrencyControlRulesResponseBodyData extends $tea.Model {
  list?: GetRunningSqlConcurrencyControlRulesResponseBodyDataList;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: GetRunningSqlConcurrencyControlRulesResponseBodyDataList,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlConcurrencyControlRulesHistoryResponseBodyDataListRules extends $tea.Model {
  concurrencyControlTime?: number;
  instanceId?: string;
  itemId?: number;
  keywordsHash?: string;
  maxConcurrency?: number;
  sqlKeywords?: string;
  sqlType?: string;
  startTime?: number;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      concurrencyControlTime: 'ConcurrencyControlTime',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
      keywordsHash: 'KeywordsHash',
      maxConcurrency: 'MaxConcurrency',
      sqlKeywords: 'SqlKeywords',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrencyControlTime: 'number',
      instanceId: 'string',
      itemId: 'number',
      keywordsHash: 'string',
      maxConcurrency: 'number',
      sqlKeywords: 'string',
      sqlType: 'string',
      startTime: 'number',
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlConcurrencyControlRulesHistoryResponseBodyDataList extends $tea.Model {
  rules?: GetSqlConcurrencyControlRulesHistoryResponseBodyDataListRules[];
  static names(): { [key: string]: string } {
    return {
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': GetSqlConcurrencyControlRulesHistoryResponseBodyDataListRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlConcurrencyControlRulesHistoryResponseBodyData extends $tea.Model {
  list?: GetSqlConcurrencyControlRulesHistoryResponseBodyDataList;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: GetSqlConcurrencyControlRulesHistoryResponseBodyDataList,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlOptimizeAdviceResponseBodyData extends $tea.Model {
  createTime?: string;
  downloadUrl?: string;
  expireTime?: string;
  status?: string;
  statusCode?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      downloadUrl: 'DownloadUrl',
      expireTime: 'ExpireTime',
      status: 'Status',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      downloadUrl: 'string',
      expireTime: 'string',
      status: 'string',
      statusCode: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultNeedOptimizeItemList extends $tea.Model {
  associatedData?: string;
  dbName?: string;
  optimizeAdvice?: string;
  optimizeItemName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      associatedData: 'AssociatedData',
      dbName: 'DbName',
      optimizeAdvice: 'OptimizeAdvice',
      optimizeItemName: 'OptimizeItemName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedData: 'string',
      dbName: 'string',
      optimizeAdvice: 'string',
      optimizeItemName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultTableStats extends $tea.Model {
  avgRowLength?: number;
  dataFree?: number;
  dataSize?: number;
  dbName?: string;
  engine?: string;
  indexSize?: number;
  phyTotalSize?: number;
  physicalFileSize?: number;
  tableName?: string;
  tableRows?: number;
  tableType?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      avgRowLength: 'AvgRowLength',
      dataFree: 'DataFree',
      dataSize: 'DataSize',
      dbName: 'DbName',
      engine: 'Engine',
      indexSize: 'IndexSize',
      phyTotalSize: 'PhyTotalSize',
      physicalFileSize: 'PhysicalFileSize',
      tableName: 'TableName',
      tableRows: 'TableRows',
      tableType: 'TableType',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgRowLength: 'number',
      dataFree: 'number',
      dataSize: 'number',
      dbName: 'string',
      engine: 'string',
      indexSize: 'number',
      phyTotalSize: 'number',
      physicalFileSize: 'number',
      tableName: 'string',
      tableRows: 'number',
      tableType: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageAnalysisResultResponseBodyDataStorageAnalysisResult extends $tea.Model {
  analysisErrorType?: string;
  analysisSuccess?: boolean;
  dailyIncrement?: number;
  estimateAvailableDays?: number;
  needOptimizeItemList?: GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultNeedOptimizeItemList[];
  tableStats?: GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultTableStats[];
  totalFreeStorageSize?: number;
  totalStorageSize?: number;
  totalUsedStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      analysisErrorType: 'AnalysisErrorType',
      analysisSuccess: 'AnalysisSuccess',
      dailyIncrement: 'DailyIncrement',
      estimateAvailableDays: 'EstimateAvailableDays',
      needOptimizeItemList: 'NeedOptimizeItemList',
      tableStats: 'TableStats',
      totalFreeStorageSize: 'TotalFreeStorageSize',
      totalStorageSize: 'TotalStorageSize',
      totalUsedStorageSize: 'TotalUsedStorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisErrorType: 'string',
      analysisSuccess: 'boolean',
      dailyIncrement: 'number',
      estimateAvailableDays: 'number',
      needOptimizeItemList: { 'type': 'array', 'itemType': GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultNeedOptimizeItemList },
      tableStats: { 'type': 'array', 'itemType': GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultTableStats },
      totalFreeStorageSize: 'number',
      totalStorageSize: 'number',
      totalUsedStorageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageAnalysisResultResponseBodyData extends $tea.Model {
  analyzedDbCount?: number;
  storageAnalysisResult?: GetStorageAnalysisResultResponseBodyDataStorageAnalysisResult;
  taskFinish?: boolean;
  taskId?: string;
  taskProgress?: number;
  taskState?: string;
  taskSuccess?: boolean;
  totalDbCount?: number;
  static names(): { [key: string]: string } {
    return {
      analyzedDbCount: 'AnalyzedDbCount',
      storageAnalysisResult: 'StorageAnalysisResult',
      taskFinish: 'TaskFinish',
      taskId: 'TaskId',
      taskProgress: 'TaskProgress',
      taskState: 'TaskState',
      taskSuccess: 'TaskSuccess',
      totalDbCount: 'TotalDbCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzedDbCount: 'number',
      storageAnalysisResult: GetStorageAnalysisResultResponseBodyDataStorageAnalysisResult,
      taskFinish: 'boolean',
      taskId: 'string',
      taskProgress: 'number',
      taskState: 'string',
      taskSuccess: 'boolean',
      totalDbCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoScalingConfigRequestBandwidth extends $tea.Model {
  apply?: boolean;
  bandwidthUsageLowerThreshold?: number;
  bandwidthUsageUpperThreshold?: number;
  downgrade?: boolean;
  observationWindowSize?: string;
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      apply: 'Apply',
      bandwidthUsageLowerThreshold: 'BandwidthUsageLowerThreshold',
      bandwidthUsageUpperThreshold: 'BandwidthUsageUpperThreshold',
      downgrade: 'Downgrade',
      observationWindowSize: 'ObservationWindowSize',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apply: 'boolean',
      bandwidthUsageLowerThreshold: 'number',
      bandwidthUsageUpperThreshold: 'number',
      downgrade: 'boolean',
      observationWindowSize: 'string',
      upgrade: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoScalingConfigRequestResource extends $tea.Model {
  apply?: boolean;
  cpuUsageUpperThreshold?: number;
  downgradeObservationWindowSize?: string;
  enable?: boolean;
  upgradeObservationWindowSize?: string;
  static names(): { [key: string]: string } {
    return {
      apply: 'Apply',
      cpuUsageUpperThreshold: 'CpuUsageUpperThreshold',
      downgradeObservationWindowSize: 'DowngradeObservationWindowSize',
      enable: 'Enable',
      upgradeObservationWindowSize: 'UpgradeObservationWindowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apply: 'boolean',
      cpuUsageUpperThreshold: 'number',
      downgradeObservationWindowSize: 'string',
      enable: 'boolean',
      upgradeObservationWindowSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoScalingConfigRequestShard extends $tea.Model {
  apply?: boolean;
  downgrade?: boolean;
  downgradeObservationWindowSize?: string;
  maxShards?: number;
  memUsageLowerThreshold?: number;
  memUsageUpperThreshold?: number;
  minShards?: number;
  upgrade?: boolean;
  upgradeObservationWindowSize?: string;
  static names(): { [key: string]: string } {
    return {
      apply: 'Apply',
      downgrade: 'Downgrade',
      downgradeObservationWindowSize: 'DowngradeObservationWindowSize',
      maxShards: 'MaxShards',
      memUsageLowerThreshold: 'MemUsageLowerThreshold',
      memUsageUpperThreshold: 'MemUsageUpperThreshold',
      minShards: 'MinShards',
      upgrade: 'Upgrade',
      upgradeObservationWindowSize: 'UpgradeObservationWindowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apply: 'boolean',
      downgrade: 'boolean',
      downgradeObservationWindowSize: 'string',
      maxShards: 'number',
      memUsageLowerThreshold: 'number',
      memUsageUpperThreshold: 'number',
      minShards: 'number',
      upgrade: 'boolean',
      upgradeObservationWindowSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoScalingConfigRequestSpec extends $tea.Model {
  apply?: boolean;
  coolDownTime?: string;
  cpuUsageUpperThreshold?: number;
  downgrade?: boolean;
  maxReadOnlyNodes?: number;
  maxSpec?: string;
  memUsageUpperThreshold?: number;
  observationWindowSize?: string;
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      apply: 'Apply',
      coolDownTime: 'CoolDownTime',
      cpuUsageUpperThreshold: 'CpuUsageUpperThreshold',
      downgrade: 'Downgrade',
      maxReadOnlyNodes: 'MaxReadOnlyNodes',
      maxSpec: 'MaxSpec',
      memUsageUpperThreshold: 'MemUsageUpperThreshold',
      observationWindowSize: 'ObservationWindowSize',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apply: 'boolean',
      coolDownTime: 'string',
      cpuUsageUpperThreshold: 'number',
      downgrade: 'boolean',
      maxReadOnlyNodes: 'number',
      maxSpec: 'string',
      memUsageUpperThreshold: 'number',
      observationWindowSize: 'string',
      upgrade: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoScalingConfigRequestStorage extends $tea.Model {
  apply?: boolean;
  diskUsageUpperThreshold?: number;
  maxStorage?: number;
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      apply: 'Apply',
      diskUsageUpperThreshold: 'DiskUsageUpperThreshold',
      maxStorage: 'MaxStorage',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apply: 'boolean',
      diskUsageUpperThreshold: 'number',
      maxStorage: 'number',
      upgrade: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCloudBenchTaskResponseBodyDataPreCheckItem extends $tea.Model {
  code?: number;
  details?: string;
  message?: string;
  name?: string;
  order?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      message: 'Message',
      name: 'Name',
      order: 'Order',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      message: 'string',
      name: 'string',
      order: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCloudBenchTaskResponseBodyData extends $tea.Model {
  preCheckItem?: RunCloudBenchTaskResponseBodyDataPreCheckItem[];
  static names(): { [key: string]: string } {
    return {
      preCheckItem: 'PreCheckItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckItem: { 'type': 'array', 'itemType': RunCloudBenchTaskResponseBodyDataPreCheckItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEventSubscriptionResponseBodyData extends $tea.Model {
  active?: number;
  channelType?: string;
  contactGroupName?: string;
  contactName?: string;
  eventContext?: string;
  instanceId?: string;
  lang?: string;
  level?: string;
  minInterval?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      channelType: 'channelType',
      contactGroupName: 'contactGroupName',
      contactName: 'contactName',
      eventContext: 'eventContext',
      instanceId: 'instanceId',
      lang: 'lang',
      level: 'level',
      minInterval: 'minInterval',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      channelType: 'string',
      contactGroupName: 'string',
      contactName: 'string',
      eventContext: 'string',
      instanceId: 'string',
      lang: 'string',
      level: 'string',
      minInterval: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList extends $tea.Model {
  configSuccess?: boolean;
  errorMessage?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configSuccess: 'ConfigSuccess',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSuccess: 'boolean',
      errorMessage: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList extends $tea.Model {
  configSuccess?: boolean;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configSuccess: 'ConfigSuccess',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSuccess: 'boolean',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponse extends $tea.Model {
  configFailInstanceCount?: number;
  configFailInstanceList?: UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList[];
  configSuccessInstanceCount?: number;
  configSuccessInstanceList?: UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList[];
  totalInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      configFailInstanceCount: 'ConfigFailInstanceCount',
      configFailInstanceList: 'ConfigFailInstanceList',
      configSuccessInstanceCount: 'ConfigSuccessInstanceCount',
      configSuccessInstanceList: 'ConfigSuccessInstanceList',
      totalInstanceCount: 'TotalInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFailInstanceCount: 'number',
      configFailInstanceList: { 'type': 'array', 'itemType': UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList },
      configSuccessInstanceCount: 'number',
      configSuccessInstanceList: { 'type': 'array', 'itemType': UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList },
      totalInstanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoResourceOptimizeRulesAsyncResponseBodyData extends $tea.Model {
  complete?: boolean;
  configResponse?: UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponse;
  fail?: boolean;
  isFinish?: boolean;
  resultId?: string;
  state?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      complete: 'Complete',
      configResponse: 'ConfigResponse',
      fail: 'Fail',
      isFinish: 'IsFinish',
      resultId: 'ResultId',
      state: 'State',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      configResponse: UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponse,
      fail: 'boolean',
      isFinish: 'boolean',
      resultId: 'string',
      state: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoSqlOptimizeStatusResponseBodyData extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList extends $tea.Model {
  configSuccess?: boolean;
  errorMessage?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configSuccess: 'ConfigSuccess',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSuccess: 'boolean',
      errorMessage: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList extends $tea.Model {
  configSuccess?: boolean;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configSuccess: 'ConfigSuccess',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSuccess: 'boolean',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponse extends $tea.Model {
  configFailInstanceCount?: number;
  configFailInstanceList?: UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList[];
  configSuccessInstanceCount?: number;
  configSuccessInstanceList?: UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList[];
  totalInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      configFailInstanceCount: 'ConfigFailInstanceCount',
      configFailInstanceList: 'ConfigFailInstanceList',
      configSuccessInstanceCount: 'ConfigSuccessInstanceCount',
      configSuccessInstanceList: 'ConfigSuccessInstanceList',
      totalInstanceCount: 'TotalInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFailInstanceCount: 'number',
      configFailInstanceList: { 'type': 'array', 'itemType': UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList },
      configSuccessInstanceCount: 'number',
      configSuccessInstanceList: { 'type': 'array', 'itemType': UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList },
      totalInstanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoThrottleRulesAsyncResponseBodyData extends $tea.Model {
  complete?: boolean;
  configResponse?: UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponse;
  fail?: boolean;
  isFinish?: boolean;
  resultId?: string;
  state?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      complete: 'Complete',
      configResponse: 'ConfigResponse',
      fail: 'Fail',
      isFinish: 'IsFinish',
      resultId: 'ResultId',
      state: 'State',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      configResponse: UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponse,
      fail: 'boolean',
      isFinish: 'boolean',
      resultId: 'string',
      state: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'cn-shanghai': "das.cn-shanghai.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("das", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call DAS, you must set the region to cn-shanghai.
    *
    * @param request AddHDMInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddHDMInstanceResponse
   */
  async addHDMInstanceWithOptions(request: AddHDMInstanceRequest, runtime: $Util.RuntimeOptions): Promise<AddHDMInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.flushAccount)) {
      query["FlushAccount"] = request.flushAccount;
    }

    if (!Util.isUnset(request.instanceAlias)) {
      query["InstanceAlias"] = request.instanceAlias;
    }

    if (!Util.isUnset(request.instanceArea)) {
      query["InstanceArea"] = request.instanceArea;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.context)) {
      query["__context"] = request.context;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddHDMInstance",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddHDMInstanceResponse>(await this.callApi(params, req, runtime), new AddHDMInstanceResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call DAS, you must set the region to cn-shanghai.
    *
    * @param request AddHDMInstanceRequest
    * @return AddHDMInstanceResponse
   */
  async addHDMInstance(request: AddHDMInstanceRequest): Promise<AddHDMInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addHDMInstanceWithOptions(request, runtime);
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. You use an ADAM stress testing task to check whether you need to scale up or scale out your database instance to handle workloads during peak hours. For more information, see [Intelligent Stress Testing](~~155068~~).
    * Make sure that your database instances meet the following requirements:
    * *   The source instance supports the following database engines: ApsaraDB RDS for MySQL on High-availability Edition or Enterprise Edition, and PolarDB for MySQL on Cluster Edition or X-Engine.
    * *   The destination instance is an ApsaraDB RDS for MySQL instance or a PolarDB for MySQL instance.
    * *   The database instance is connected to DAS. For information about how to connect database instances to DAS, see [Connect an Alibaba Cloud database instance to DAS](~~65405~~).
    * *   DAS Professional Edition is activated for the source and destination database instances. For more information, see [DAS Professional Edition](~~190912~~).
    *
    * @param request CreateAdamBenchTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateAdamBenchTaskResponse
   */
  async createAdamBenchTaskWithOptions(request: CreateAdamBenchTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateAdamBenchTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dstInstanceId)) {
      query["DstInstanceId"] = request.dstInstanceId;
    }

    if (!Util.isUnset(request.dstSuperAccount)) {
      query["DstSuperAccount"] = request.dstSuperAccount;
    }

    if (!Util.isUnset(request.dstSuperPassword)) {
      query["DstSuperPassword"] = request.dstSuperPassword;
    }

    if (!Util.isUnset(request.rate)) {
      query["Rate"] = request.rate;
    }

    if (!Util.isUnset(request.requestDuration)) {
      query["RequestDuration"] = request.requestDuration;
    }

    if (!Util.isUnset(request.requestStartTime)) {
      query["RequestStartTime"] = request.requestStartTime;
    }

    if (!Util.isUnset(request.srcEngine)) {
      query["SrcEngine"] = request.srcEngine;
    }

    if (!Util.isUnset(request.srcEngineVersion)) {
      query["SrcEngineVersion"] = request.srcEngineVersion;
    }

    if (!Util.isUnset(request.srcMaxQps)) {
      query["SrcMaxQps"] = request.srcMaxQps;
    }

    if (!Util.isUnset(request.srcMeanQps)) {
      query["SrcMeanQps"] = request.srcMeanQps;
    }

    if (!Util.isUnset(request.srcSqlOssAddr)) {
      query["SrcSqlOssAddr"] = request.srcSqlOssAddr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAdamBenchTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAdamBenchTaskResponse>(await this.callApi(params, req, runtime), new CreateAdamBenchTaskResponse({}));
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. You use an ADAM stress testing task to check whether you need to scale up or scale out your database instance to handle workloads during peak hours. For more information, see [Intelligent Stress Testing](~~155068~~).
    * Make sure that your database instances meet the following requirements:
    * *   The source instance supports the following database engines: ApsaraDB RDS for MySQL on High-availability Edition or Enterprise Edition, and PolarDB for MySQL on Cluster Edition or X-Engine.
    * *   The destination instance is an ApsaraDB RDS for MySQL instance or a PolarDB for MySQL instance.
    * *   The database instance is connected to DAS. For information about how to connect database instances to DAS, see [Connect an Alibaba Cloud database instance to DAS](~~65405~~).
    * *   DAS Professional Edition is activated for the source and destination database instances. For more information, see [DAS Professional Edition](~~190912~~).
    *
    * @param request CreateAdamBenchTaskRequest
    * @return CreateAdamBenchTaskResponse
   */
  async createAdamBenchTask(request: CreateAdamBenchTaskRequest): Promise<CreateAdamBenchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAdamBenchTaskWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call DAS, you must set the region to cn-shanghai.
    * *   This operation is applicable only to ApsaraDB for Redis Community Edition instances and performance-enhanced instances of the ApsaraDB for Redis Enhanced Edition (Tair).
    * >  Redis 7.0 is not supported. You are not allowed to use custom modules.
    *
    * @param request CreateCacheAnalysisJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCacheAnalysisJobResponse
   */
  async createCacheAnalysisJobWithOptions(request: CreateCacheAnalysisJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateCacheAnalysisJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.separators)) {
      query["Separators"] = request.separators;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCacheAnalysisJob",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCacheAnalysisJobResponse>(await this.callApi(params, req, runtime), new CreateCacheAnalysisJobResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call DAS, you must set the region to cn-shanghai.
    * *   This operation is applicable only to ApsaraDB for Redis Community Edition instances and performance-enhanced instances of the ApsaraDB for Redis Enhanced Edition (Tair).
    * >  Redis 7.0 is not supported. You are not allowed to use custom modules.
    *
    * @param request CreateCacheAnalysisJobRequest
    * @return CreateCacheAnalysisJobResponse
   */
  async createCacheAnalysisJob(request: CreateCacheAnalysisJobRequest): Promise<CreateCacheAnalysisJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCacheAnalysisJobWithOptions(request, runtime);
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to handle traffic spikes in an effective manner. For more information, see [Intelligent stress testing](~~155068~~). Before you call this API operation, make sure that your database instances meet the following requirements:
    * *   The source database instance must be an ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition instance, or a PolarDB for MySQL Cluster Edition or X-Engine Edition instance.
    * *   The destination instance is an ApsaraDB RDS for MySQL instance or a PolarDB for MySQL instance.
    * *   The source instance and the destination instance are connected to DAS. For information about how to connect database instances to DAS, see [Connect an Alibaba Cloud database instance to DAS](~~65405~~).
    * *   DAS Professional Edition is enabled for the source instance and the destination instance. For more information, see [DAS Professional Edition](~~190912~~).
    *
    * @param request CreateCloudBenchTasksRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCloudBenchTasksResponse
   */
  async createCloudBenchTasksWithOptions(request: CreateCloudBenchTasksRequest, runtime: $Util.RuntimeOptions): Promise<CreateCloudBenchTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.backupTime)) {
      query["BackupTime"] = request.backupTime;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dstConnectionString)) {
      query["DstConnectionString"] = request.dstConnectionString;
    }

    if (!Util.isUnset(request.dstInstanceId)) {
      query["DstInstanceId"] = request.dstInstanceId;
    }

    if (!Util.isUnset(request.dstPort)) {
      query["DstPort"] = request.dstPort;
    }

    if (!Util.isUnset(request.dstSuperAccount)) {
      query["DstSuperAccount"] = request.dstSuperAccount;
    }

    if (!Util.isUnset(request.dstSuperPassword)) {
      query["DstSuperPassword"] = request.dstSuperPassword;
    }

    if (!Util.isUnset(request.dstType)) {
      query["DstType"] = request.dstType;
    }

    if (!Util.isUnset(request.dtsJobClass)) {
      query["DtsJobClass"] = request.dtsJobClass;
    }

    if (!Util.isUnset(request.dtsJobId)) {
      query["DtsJobId"] = request.dtsJobId;
    }

    if (!Util.isUnset(request.endState)) {
      query["EndState"] = request.endState;
    }

    if (!Util.isUnset(request.gatewayVpcId)) {
      query["GatewayVpcId"] = request.gatewayVpcId;
    }

    if (!Util.isUnset(request.gatewayVpcIp)) {
      query["GatewayVpcIp"] = request.gatewayVpcIp;
    }

    if (!Util.isUnset(request.rate)) {
      query["Rate"] = request.rate;
    }

    if (!Util.isUnset(request.requestDuration)) {
      query["RequestDuration"] = request.requestDuration;
    }

    if (!Util.isUnset(request.requestEndTime)) {
      query["RequestEndTime"] = request.requestEndTime;
    }

    if (!Util.isUnset(request.requestStartTime)) {
      query["RequestStartTime"] = request.requestStartTime;
    }

    if (!Util.isUnset(request.smartPressureTime)) {
      query["SmartPressureTime"] = request.smartPressureTime;
    }

    if (!Util.isUnset(request.srcInstanceId)) {
      query["SrcInstanceId"] = request.srcInstanceId;
    }

    if (!Util.isUnset(request.srcPublicIp)) {
      query["SrcPublicIp"] = request.srcPublicIp;
    }

    if (!Util.isUnset(request.srcSuperAccount)) {
      query["SrcSuperAccount"] = request.srcSuperAccount;
    }

    if (!Util.isUnset(request.srcSuperPassword)) {
      query["SrcSuperPassword"] = request.srcSuperPassword;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.workDir)) {
      query["WorkDir"] = request.workDir;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCloudBenchTasks",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCloudBenchTasksResponse>(await this.callApi(params, req, runtime), new CreateCloudBenchTasksResponse({}));
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to handle traffic spikes in an effective manner. For more information, see [Intelligent stress testing](~~155068~~). Before you call this API operation, make sure that your database instances meet the following requirements:
    * *   The source database instance must be an ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition instance, or a PolarDB for MySQL Cluster Edition or X-Engine Edition instance.
    * *   The destination instance is an ApsaraDB RDS for MySQL instance or a PolarDB for MySQL instance.
    * *   The source instance and the destination instance are connected to DAS. For information about how to connect database instances to DAS, see [Connect an Alibaba Cloud database instance to DAS](~~65405~~).
    * *   DAS Professional Edition is enabled for the source instance and the destination instance. For more information, see [DAS Professional Edition](~~190912~~).
    *
    * @param request CreateCloudBenchTasksRequest
    * @return CreateCloudBenchTasksResponse
   */
  async createCloudBenchTasks(request: CreateCloudBenchTasksRequest): Promise<CreateCloudBenchTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCloudBenchTasksWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
    * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.3 or later.
    * *   If you use an SDK to call DAS, you must set the region to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   RDS MySQL
    *     *   PolarDB for MySQL
    *     *   Redis
    *
    * @param request CreateDiagnosticReportRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDiagnosticReportResponse
   */
  async createDiagnosticReportWithOptions(request: CreateDiagnosticReportRequest, runtime: $Util.RuntimeOptions): Promise<CreateDiagnosticReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDiagnosticReport",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDiagnosticReportResponse>(await this.callApi(params, req, runtime), new CreateDiagnosticReportResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
    * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.3 or later.
    * *   If you use an SDK to call DAS, you must set the region to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   RDS MySQL
    *     *   PolarDB for MySQL
    *     *   Redis
    *
    * @param request CreateDiagnosticReportRequest
    * @return CreateDiagnosticReportResponse
   */
  async createDiagnosticReport(request: CreateDiagnosticReportRequest): Promise<CreateDiagnosticReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDiagnosticReportWithOptions(request, runtime);
  }

  /**
    * *   This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request CreateKillInstanceSessionTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateKillInstanceSessionTaskResponse
   */
  async createKillInstanceSessionTaskWithOptions(request: CreateKillInstanceSessionTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateKillInstanceSessionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbUser)) {
      query["DbUser"] = request.dbUser;
    }

    if (!Util.isUnset(request.dbUserPassword)) {
      query["DbUserPassword"] = request.dbUserPassword;
    }

    if (!Util.isUnset(request.ignoredUsers)) {
      query["IgnoredUsers"] = request.ignoredUsers;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.killAllSessions)) {
      query["KillAllSessions"] = request.killAllSessions;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.sessionIds)) {
      query["SessionIds"] = request.sessionIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateKillInstanceSessionTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateKillInstanceSessionTaskResponse>(await this.callApi(params, req, runtime), new CreateKillInstanceSessionTaskResponse({}));
  }

  /**
    * *   This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request CreateKillInstanceSessionTaskRequest
    * @return CreateKillInstanceSessionTaskResponse
   */
  async createKillInstanceSessionTask(request: CreateKillInstanceSessionTaskRequest): Promise<CreateKillInstanceSessionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKillInstanceSessionTaskWithOptions(request, runtime);
  }

  async createKillInstanceSessionTaskWithMaintainUserWithOptions(request: CreateKillInstanceSessionTaskWithMaintainUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateKillInstanceSessionTaskWithMaintainUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ignoredUsers)) {
      query["IgnoredUsers"] = request.ignoredUsers;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.killAllSessions)) {
      query["KillAllSessions"] = request.killAllSessions;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.sessionIds)) {
      query["SessionIds"] = request.sessionIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateKillInstanceSessionTaskWithMaintainUser",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateKillInstanceSessionTaskWithMaintainUserResponse>(await this.callApi(params, req, runtime), new CreateKillInstanceSessionTaskWithMaintainUserResponse({}));
  }

  async createKillInstanceSessionTaskWithMaintainUser(request: CreateKillInstanceSessionTaskWithMaintainUserRequest): Promise<CreateKillInstanceSessionTaskWithMaintainUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKillInstanceSessionTaskWithMaintainUserWithOptions(request, runtime);
  }

  /**
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request CreateQueryOptimizeTagRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateQueryOptimizeTagResponse
   */
  async createQueryOptimizeTagWithOptions(request: CreateQueryOptimizeTagRequest, runtime: $Util.RuntimeOptions): Promise<CreateQueryOptimizeTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sqlIds)) {
      query["SqlIds"] = request.sqlIds;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateQueryOptimizeTag",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQueryOptimizeTagResponse>(await this.callApi(params, req, runtime), new CreateQueryOptimizeTagResponse({}));
  }

  /**
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request CreateQueryOptimizeTagRequest
    * @return CreateQueryOptimizeTagResponse
   */
  async createQueryOptimizeTag(request: CreateQueryOptimizeTagRequest): Promise<CreateQueryOptimizeTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQueryOptimizeTagWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call Database Autonomy Service (DAS), you must set the region to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *     *   ApsaraDB RDS for SQL Server
    *     *   PolarDB for MySQL
    *     *   PolarDB for PostgreSQL (compatible with Oracle)
    *     *   ApsaraDB for MongoDB
    * >  The minor engine version of ApsaraDB RDS for PostgreSQL instances must be 20221230 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](~~146895~~).
    *
    * @param request CreateRequestDiagnosisRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateRequestDiagnosisResponse
   */
  async createRequestDiagnosisWithOptions(request: CreateRequestDiagnosisRequest, runtime: $Util.RuntimeOptions): Promise<CreateRequestDiagnosisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.sql)) {
      query["Sql"] = request.sql;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRequestDiagnosis",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRequestDiagnosisResponse>(await this.callApi(params, req, runtime), new CreateRequestDiagnosisResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call Database Autonomy Service (DAS), you must set the region to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *     *   ApsaraDB RDS for SQL Server
    *     *   PolarDB for MySQL
    *     *   PolarDB for PostgreSQL (compatible with Oracle)
    *     *   ApsaraDB for MongoDB
    * >  The minor engine version of ApsaraDB RDS for PostgreSQL instances must be 20221230 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](~~146895~~).
    *
    * @param request CreateRequestDiagnosisRequest
    * @return CreateRequestDiagnosisResponse
   */
  async createRequestDiagnosis(request: CreateRequestDiagnosisRequest): Promise<CreateRequestDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRequestDiagnosisWithOptions(request, runtime);
  }

  async createStorageAnalysisTaskWithOptions(request: CreateStorageAnalysisTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateStorageAnalysisTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateStorageAnalysisTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStorageAnalysisTaskResponse>(await this.callApi(params, req, runtime), new CreateStorageAnalysisTaskResponse({}));
  }

  async createStorageAnalysisTask(request: CreateStorageAnalysisTaskRequest): Promise<CreateStorageAnalysisTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStorageAnalysisTaskWithOptions(request, runtime);
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to handle traffic spikes in an effective manner. For more information, see [Intelligent stress testing](~~155068~~).
    *
    * @param request DeleteCloudBenchTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteCloudBenchTaskResponse
   */
  async deleteCloudBenchTaskWithOptions(request: DeleteCloudBenchTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCloudBenchTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCloudBenchTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCloudBenchTaskResponse>(await this.callApi(params, req, runtime), new DeleteCloudBenchTaskResponse({}));
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to handle traffic spikes in an effective manner. For more information, see [Intelligent stress testing](~~155068~~).
    *
    * @param request DeleteCloudBenchTaskRequest
    * @return DeleteCloudBenchTaskResponse
   */
  async deleteCloudBenchTask(request: DeleteCloudBenchTaskRequest): Promise<DeleteCloudBenchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCloudBenchTaskWithOptions(request, runtime);
  }

  /**
    * *   This operation is used to delete the metadata of a DBGateway that is released in a stress testing task created by calling the [CreateCloudBenchTasks](~~230665~~) operation.
    * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * >  If the heartbeat is lost between a DBGateway and the access point for more than 20 seconds, the DBGateway is considered stopped.
    *
    * @param request DeleteStopGatewayRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteStopGatewayResponse
   */
  async deleteStopGatewayWithOptions(request: DeleteStopGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStopGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStopGateway",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteStopGatewayResponse>(await this.callApi(params, req, runtime), new DeleteStopGatewayResponse({}));
  }

  /**
    * *   This operation is used to delete the metadata of a DBGateway that is released in a stress testing task created by calling the [CreateCloudBenchTasks](~~230665~~) operation.
    * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * >  If the heartbeat is lost between a DBGateway and the access point for more than 20 seconds, the DBGateway is considered stopped.
    *
    * @param request DeleteStopGatewayRequest
    * @return DeleteStopGatewayResponse
   */
  async deleteStopGateway(request: DeleteStopGatewayRequest): Promise<DeleteStopGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStopGatewayWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request DescribeAutoScalingConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeAutoScalingConfigResponse
   */
  async describeAutoScalingConfigWithOptions(request: DescribeAutoScalingConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoScalingConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAutoScalingConfig",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAutoScalingConfigResponse>(await this.callApi(params, req, runtime), new DescribeAutoScalingConfigResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request DescribeAutoScalingConfigRequest
    * @return DescribeAutoScalingConfigResponse
   */
  async describeAutoScalingConfig(request: DescribeAutoScalingConfigRequest): Promise<DescribeAutoScalingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoScalingConfigWithOptions(request, runtime);
  }

  /**
    * *   You can query only the history of automatic performance scaling of ApsaraDB RDS for MySQL instances.
    * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region to cn-shanghai.
    *
    * @param request DescribeAutoScalingHistoryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeAutoScalingHistoryResponse
   */
  async describeAutoScalingHistoryWithOptions(request: DescribeAutoScalingHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoScalingHistoryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAutoScalingHistory",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAutoScalingHistoryResponse>(await this.callApi(params, req, runtime), new DescribeAutoScalingHistoryResponse({}));
  }

  /**
    * *   You can query only the history of automatic performance scaling of ApsaraDB RDS for MySQL instances.
    * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region to cn-shanghai.
    *
    * @param request DescribeAutoScalingHistoryRequest
    * @return DescribeAutoScalingHistoryResponse
   */
  async describeAutoScalingHistory(request: DescribeAutoScalingHistoryRequest): Promise<DescribeAutoScalingHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoScalingHistoryWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region to cn-shanghai.
    * *   This operation is applicable only to ApsaraDB for Redis.
    *
    * @param request DescribeCacheAnalysisJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCacheAnalysisJobResponse
   */
  async describeCacheAnalysisJobWithOptions(request: DescribeCacheAnalysisJobRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCacheAnalysisJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCacheAnalysisJob",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCacheAnalysisJobResponse>(await this.callApi(params, req, runtime), new DescribeCacheAnalysisJobResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region to cn-shanghai.
    * *   This operation is applicable only to ApsaraDB for Redis.
    *
    * @param request DescribeCacheAnalysisJobRequest
    * @return DescribeCacheAnalysisJobResponse
   */
  async describeCacheAnalysisJob(request: DescribeCacheAnalysisJobRequest): Promise<DescribeCacheAnalysisJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCacheAnalysisJobWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation is applicable only to ApsaraDB for Redis.
    *
    * @param request DescribeCacheAnalysisJobsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCacheAnalysisJobsResponse
   */
  async describeCacheAnalysisJobsWithOptions(request: DescribeCacheAnalysisJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCacheAnalysisJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCacheAnalysisJobs",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCacheAnalysisJobsResponse>(await this.callApi(params, req, runtime), new DescribeCacheAnalysisJobsResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation is applicable only to ApsaraDB for Redis.
    *
    * @param request DescribeCacheAnalysisJobsRequest
    * @return DescribeCacheAnalysisJobsResponse
   */
  async describeCacheAnalysisJobs(request: DescribeCacheAnalysisJobsRequest): Promise<DescribeCacheAnalysisJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCacheAnalysisJobsWithOptions(request, runtime);
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](~~155068~~).
    *
    * @param request DescribeCloudBenchTasksRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCloudBenchTasksResponse
   */
  async describeCloudBenchTasksWithOptions(request: DescribeCloudBenchTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudBenchTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudBenchTasks",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudBenchTasksResponse>(await this.callApi(params, req, runtime), new DescribeCloudBenchTasksResponse({}));
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](~~155068~~).
    *
    * @param request DescribeCloudBenchTasksRequest
    * @return DescribeCloudBenchTasksResponse
   */
  async describeCloudBenchTasks(request: DescribeCloudBenchTasksRequest): Promise<DescribeCloudBenchTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudBenchTasksWithOptions(request, runtime);
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether you need to scale up your database instance to handle workloads during peak hours. For more information, see [Intelligent stress testing](~~155068~~).
    *
    * @param request DescribeCloudbenchTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCloudbenchTaskResponse
   */
  async describeCloudbenchTaskWithOptions(request: DescribeCloudbenchTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudbenchTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudbenchTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudbenchTaskResponse>(await this.callApi(params, req, runtime), new DescribeCloudbenchTaskResponse({}));
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether you need to scale up your database instance to handle workloads during peak hours. For more information, see [Intelligent stress testing](~~155068~~).
    *
    * @param request DescribeCloudbenchTaskRequest
    * @return DescribeCloudbenchTaskResponse
   */
  async describeCloudbenchTask(request: DescribeCloudbenchTaskRequest): Promise<DescribeCloudbenchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudbenchTaskWithOptions(request, runtime);
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](~~155068~~).
    *
    * @param request DescribeCloudbenchTaskConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCloudbenchTaskConfigResponse
   */
  async describeCloudbenchTaskConfigWithOptions(request: DescribeCloudbenchTaskConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudbenchTaskConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudbenchTaskConfig",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudbenchTaskConfigResponse>(await this.callApi(params, req, runtime), new DescribeCloudbenchTaskConfigResponse({}));
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](~~155068~~).
    *
    * @param request DescribeCloudbenchTaskConfigRequest
    * @return DescribeCloudbenchTaskConfigResponse
   */
  async describeCloudbenchTaskConfig(request: DescribeCloudbenchTaskConfigRequest): Promise<DescribeCloudbenchTaskConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudbenchTaskConfigWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation is applicable to the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB for Redis
    *
    * @param request DescribeDiagnosticReportListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDiagnosticReportListResponse
   */
  async describeDiagnosticReportListWithOptions(request: DescribeDiagnosticReportListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosticReportListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiagnosticReportList",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiagnosticReportListResponse>(await this.callApi(params, req, runtime), new DescribeDiagnosticReportListResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation is applicable to the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB for Redis
    *
    * @param request DescribeDiagnosticReportListRequest
    * @return DescribeDiagnosticReportListResponse
   */
  async describeDiagnosticReportList(request: DescribeDiagnosticReportListRequest): Promise<DescribeDiagnosticReportListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosticReportListWithOptions(request, runtime);
  }

  /**
    * This operation sorts list, hash, set, and zset keys based on the number of elements contained in these keys. The top three keys that contain the most elements are considered large keys. If the number of queries per second (QPS) of a key is greater than 3,000, the key is considered a hot key.
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
    * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation is available only for ApsaraDB for Redis instances that meet the following requirements:
    *     *   The instance is a Community Edition instance that uses a major version of 5.0 or later or a performance-enhanced instance of the Enhanced Edition (Tair).
    *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
    * >  For information about how to query and update the minor version of an instance, see [ModifyInstanceMinorVersion](~~129381~~) and [DescribeEngineVersion](~~95268~~).
    *
    * @param request DescribeHotBigKeysRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeHotBigKeysResponse
   */
  async describeHotBigKeysWithOptions(request: DescribeHotBigKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHotBigKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHotBigKeys",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHotBigKeysResponse>(await this.callApi(params, req, runtime), new DescribeHotBigKeysResponse({}));
  }

  /**
    * This operation sorts list, hash, set, and zset keys based on the number of elements contained in these keys. The top three keys that contain the most elements are considered large keys. If the number of queries per second (QPS) of a key is greater than 3,000, the key is considered a hot key.
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
    * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation is available only for ApsaraDB for Redis instances that meet the following requirements:
    *     *   The instance is a Community Edition instance that uses a major version of 5.0 or later or a performance-enhanced instance of the Enhanced Edition (Tair).
    *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
    * >  For information about how to query and update the minor version of an instance, see [ModifyInstanceMinorVersion](~~129381~~) and [DescribeEngineVersion](~~95268~~).
    *
    * @param request DescribeHotBigKeysRequest
    * @return DescribeHotBigKeysResponse
   */
  async describeHotBigKeys(request: DescribeHotBigKeysRequest): Promise<DescribeHotBigKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHotBigKeysWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V4.3.3. We recommend that you use the latest version.
    * *   The version of your Database Autonomy Service (DAS) SDK must be V1.0.2 or later.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation is applicable only to ApsaraDB for Redis instances that meet the following requirements:
    *     *   The ApsaraDB for Redis instance is a Community Edition instance that uses a major version of 4.0 or later or a performance-enhanced instance of the Enhanced Edition (Tair).
    *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
    * >  For more information about how to query and update the minor version of an instance, see [ModifyInstanceMinorVersion](~~129381~~) and [DescribeEngineVersion](~~95268~~).
    *
    * @param request DescribeHotKeysRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeHotKeysResponse
   */
  async describeHotKeysWithOptions(request: DescribeHotKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHotKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHotKeys",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHotKeysResponse>(await this.callApi(params, req, runtime), new DescribeHotKeysResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V4.3.3. We recommend that you use the latest version.
    * *   The version of your Database Autonomy Service (DAS) SDK must be V1.0.2 or later.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation is applicable only to ApsaraDB for Redis instances that meet the following requirements:
    *     *   The ApsaraDB for Redis instance is a Community Edition instance that uses a major version of 4.0 or later or a performance-enhanced instance of the Enhanced Edition (Tair).
    *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
    * >  For more information about how to query and update the minor version of an instance, see [ModifyInstanceMinorVersion](~~129381~~) and [DescribeEngineVersion](~~95268~~).
    *
    * @param request DescribeHotKeysRequest
    * @return DescribeHotKeysResponse
   */
  async describeHotKeys(request: DescribeHotKeysRequest): Promise<DescribeHotKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHotKeysWithOptions(request, runtime);
  }

  /**
    * *   For more information about database instances that support DAS Professional Edition, see [Overview](~~190912~~).
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request DescribeInstanceDasProRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeInstanceDasProResponse
   */
  async describeInstanceDasProWithOptions(request: DescribeInstanceDasProRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceDasProResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceDasPro",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceDasProResponse>(await this.callApi(params, req, runtime), new DescribeInstanceDasProResponse({}));
  }

  /**
    * *   For more information about database instances that support DAS Professional Edition, see [Overview](~~190912~~).
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request DescribeInstanceDasProRequest
    * @return DescribeInstanceDasProResponse
   */
  async describeInstanceDasPro(request: DescribeInstanceDasProRequest): Promise<DescribeInstanceDasProResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceDasProWithOptions(request, runtime);
  }

  /**
    * The list, hash, set, and zset keys are sorted based on the number of elements in these keys. The top three keys that have the most elements are considered large keys.
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
    * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation is available only for an ApsaraDB for Redis instance of one of the following versions:
    *     *   The instance is ApsaraDB for Redis Community Edition instances that use a major version of 5.0 or later or a performance-enhanced instance of the ApsaraDB for Redis Enhanced Edition (Tair).
    *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
    * >  For information about how to query and update the minor version of an instance, see [ModifyInstanceMinorVersion](~~129381~~) and [DescribeEngineVersion](~~95268~~).
    *
    * @param request DescribeTopBigKeysRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeTopBigKeysResponse
   */
  async describeTopBigKeysWithOptions(request: DescribeTopBigKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTopBigKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTopBigKeys",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTopBigKeysResponse>(await this.callApi(params, req, runtime), new DescribeTopBigKeysResponse({}));
  }

  /**
    * The list, hash, set, and zset keys are sorted based on the number of elements in these keys. The top three keys that have the most elements are considered large keys.
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
    * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation is available only for an ApsaraDB for Redis instance of one of the following versions:
    *     *   The instance is ApsaraDB for Redis Community Edition instances that use a major version of 5.0 or later or a performance-enhanced instance of the ApsaraDB for Redis Enhanced Edition (Tair).
    *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
    * >  For information about how to query and update the minor version of an instance, see [ModifyInstanceMinorVersion](~~129381~~) and [DescribeEngineVersion](~~95268~~).
    *
    * @param request DescribeTopBigKeysRequest
    * @return DescribeTopBigKeysResponse
   */
  async describeTopBigKeys(request: DescribeTopBigKeysRequest): Promise<DescribeTopBigKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTopBigKeysWithOptions(request, runtime);
  }

  /**
    * If the number of queries per second (QPS) of a key is greater than 3,000, the key is considered a hot key.
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
    * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation is available only for an ApsaraDB for Redis instance of one of the following versions:
    *     *   The instance is a Community Edition instance that uses a major version of 4.0 or later or a performance-enhanced instance of the Enhanced Edition (Tair).
    *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
    * >  For information about how to query and update the minor version of an instance, see [DescribeEngineVersion](~~95268~~) and [ModifyInstanceMinorVersion](~~129381~~).
    *
    * @param request DescribeTopHotKeysRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeTopHotKeysResponse
   */
  async describeTopHotKeysWithOptions(request: DescribeTopHotKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTopHotKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTopHotKeys",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTopHotKeysResponse>(await this.callApi(params, req, runtime), new DescribeTopHotKeysResponse({}));
  }

  /**
    * If the number of queries per second (QPS) of a key is greater than 3,000, the key is considered a hot key.
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than 4.3.3. We recommend that you use the latest version.
    * *   The version of Database Autonomy Service (DAS) SDK must be 1.0.2 or later.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation is available only for an ApsaraDB for Redis instance of one of the following versions:
    *     *   The instance is a Community Edition instance that uses a major version of 4.0 or later or a performance-enhanced instance of the Enhanced Edition (Tair).
    *     *   The ApsaraDB for Redis instance is updated to the latest minor version.
    * >  For information about how to query and update the minor version of an instance, see [DescribeEngineVersion](~~95268~~) and [ModifyInstanceMinorVersion](~~129381~~).
    *
    * @param request DescribeTopHotKeysRequest
    * @return DescribeTopHotKeysResponse
   */
  async describeTopHotKeys(request: DescribeTopHotKeysRequest): Promise<DescribeTopHotKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTopHotKeysWithOptions(request, runtime);
  }

  /**
    * This operation supports the following database engines:
    * *   ApsaraDB RDS for MySQL
    * *   PolarDB for MySQL
    *
    * @param request DisableAllSqlConcurrencyControlRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableAllSqlConcurrencyControlRulesResponse
   */
  async disableAllSqlConcurrencyControlRulesWithOptions(request: DisableAllSqlConcurrencyControlRulesRequest, runtime: $Util.RuntimeOptions): Promise<DisableAllSqlConcurrencyControlRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableAllSqlConcurrencyControlRules",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableAllSqlConcurrencyControlRulesResponse>(await this.callApi(params, req, runtime), new DisableAllSqlConcurrencyControlRulesResponse({}));
  }

  /**
    * This operation supports the following database engines:
    * *   ApsaraDB RDS for MySQL
    * *   PolarDB for MySQL
    *
    * @param request DisableAllSqlConcurrencyControlRulesRequest
    * @return DisableAllSqlConcurrencyControlRulesResponse
   */
  async disableAllSqlConcurrencyControlRules(request: DisableAllSqlConcurrencyControlRulesRequest): Promise<DisableAllSqlConcurrencyControlRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAllSqlConcurrencyControlRulesWithOptions(request, runtime);
  }

  /**
    * If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    *
    * @param request DisableAutoResourceOptimizeRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableAutoResourceOptimizeRulesResponse
   */
  async disableAutoResourceOptimizeRulesWithOptions(request: DisableAutoResourceOptimizeRulesRequest, runtime: $Util.RuntimeOptions): Promise<DisableAutoResourceOptimizeRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableAutoResourceOptimizeRules",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableAutoResourceOptimizeRulesResponse>(await this.callApi(params, req, runtime), new DisableAutoResourceOptimizeRulesResponse({}));
  }

  /**
    * If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    *
    * @param request DisableAutoResourceOptimizeRulesRequest
    * @return DisableAutoResourceOptimizeRulesResponse
   */
  async disableAutoResourceOptimizeRules(request: DisableAutoResourceOptimizeRulesRequest): Promise<DisableAutoResourceOptimizeRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAutoResourceOptimizeRulesWithOptions(request, runtime);
  }

  /**
    * If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    *
    * @param request DisableAutoThrottleRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableAutoThrottleRulesResponse
   */
  async disableAutoThrottleRulesWithOptions(request: DisableAutoThrottleRulesRequest, runtime: $Util.RuntimeOptions): Promise<DisableAutoThrottleRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableAutoThrottleRules",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableAutoThrottleRulesResponse>(await this.callApi(params, req, runtime), new DisableAutoThrottleRulesResponse({}));
  }

  /**
    * If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    *
    * @param request DisableAutoThrottleRulesRequest
    * @return DisableAutoThrottleRulesResponse
   */
  async disableAutoThrottleRules(request: DisableAutoThrottleRulesRequest): Promise<DisableAutoThrottleRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAutoThrottleRulesWithOptions(request, runtime);
  }

  /**
    * *   For information about database instances that support DAS Professional Edition, see [Overview](~~190912~~).
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request DisableDasProRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableDasProResponse
   */
  async disableDasProWithOptions(request: DisableDasProRequest, runtime: $Util.RuntimeOptions): Promise<DisableDasProResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableDasPro",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableDasProResponse>(await this.callApi(params, req, runtime), new DisableDasProResponse({}));
  }

  /**
    * *   For information about database instances that support DAS Professional Edition, see [Overview](~~190912~~).
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request DisableDasProRequest
    * @return DisableDasProResponse
   */
  async disableDasPro(request: DisableDasProRequest): Promise<DisableDasProResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableDasProWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation is applicable only to ApsaraDB for Redis instances.
    *
    * @param request DisableInstanceDasConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableInstanceDasConfigResponse
   */
  async disableInstanceDasConfigWithOptions(request: DisableInstanceDasConfigRequest, runtime: $Util.RuntimeOptions): Promise<DisableInstanceDasConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scaleType)) {
      query["ScaleType"] = request.scaleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableInstanceDasConfig",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableInstanceDasConfigResponse>(await this.callApi(params, req, runtime), new DisableInstanceDasConfigResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation is applicable only to ApsaraDB for Redis instances.
    *
    * @param request DisableInstanceDasConfigRequest
    * @return DisableInstanceDasConfigResponse
   */
  async disableInstanceDasConfig(request: DisableInstanceDasConfigRequest): Promise<DisableInstanceDasConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableInstanceDasConfigWithOptions(request, runtime);
  }

  /**
    * This operation is applicable to the following database engines:
    * *   ApsaraDB RDS for MySQL
    * *   PolarDB for MySQL
    *
    * @param request DisableSqlConcurrencyControlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableSqlConcurrencyControlResponse
   */
  async disableSqlConcurrencyControlWithOptions(request: DisableSqlConcurrencyControlRequest, runtime: $Util.RuntimeOptions): Promise<DisableSqlConcurrencyControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableSqlConcurrencyControl",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableSqlConcurrencyControlResponse>(await this.callApi(params, req, runtime), new DisableSqlConcurrencyControlResponse({}));
  }

  /**
    * This operation is applicable to the following database engines:
    * *   ApsaraDB RDS for MySQL
    * *   PolarDB for MySQL
    *
    * @param request DisableSqlConcurrencyControlRequest
    * @return DisableSqlConcurrencyControlResponse
   */
  async disableSqlConcurrencyControl(request: DisableSqlConcurrencyControlRequest): Promise<DisableSqlConcurrencyControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSqlConcurrencyControlWithOptions(request, runtime);
  }

  /**
    * *   For more information about database instances that support DAS Professional Edition, see [Overview](~~190912~~).
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request EnableDasProRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EnableDasProResponse
   */
  async enableDasProWithOptions(request: EnableDasProRequest, runtime: $Util.RuntimeOptions): Promise<EnableDasProResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sqlRetention)) {
      query["SqlRetention"] = request.sqlRetention;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableDasPro",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableDasProResponse>(await this.callApi(params, req, runtime), new EnableDasProResponse({}));
  }

  /**
    * *   For more information about database instances that support DAS Professional Edition, see [Overview](~~190912~~).
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request EnableDasProRequest
    * @return EnableDasProResponse
   */
  async enableDasPro(request: EnableDasProRequest): Promise<EnableDasProResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableDasProWithOptions(request, runtime);
  }

  /**
    * This operation supports the following database engines:
    * *   ApsaraDB RDS for MySQL
    * *   PolarDB for MySQL
    *
    * @param request EnableSqlConcurrencyControlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EnableSqlConcurrencyControlResponse
   */
  async enableSqlConcurrencyControlWithOptions(request: EnableSqlConcurrencyControlRequest, runtime: $Util.RuntimeOptions): Promise<EnableSqlConcurrencyControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.concurrencyControlTime)) {
      query["ConcurrencyControlTime"] = request.concurrencyControlTime;
    }

    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxConcurrency)) {
      query["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!Util.isUnset(request.sqlKeywords)) {
      query["SqlKeywords"] = request.sqlKeywords;
    }

    if (!Util.isUnset(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableSqlConcurrencyControl",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableSqlConcurrencyControlResponse>(await this.callApi(params, req, runtime), new EnableSqlConcurrencyControlResponse({}));
  }

  /**
    * This operation supports the following database engines:
    * *   ApsaraDB RDS for MySQL
    * *   PolarDB for MySQL
    *
    * @param request EnableSqlConcurrencyControlRequest
    * @return EnableSqlConcurrencyControlResponse
   */
  async enableSqlConcurrencyControl(request: EnableSqlConcurrencyControlRequest): Promise<EnableSqlConcurrencyControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSqlConcurrencyControlWithOptions(request, runtime);
  }

  /**
    * >  When an asynchronous call is made, the complete query results are not immediately returned. If the value of **isFinish** is **false** in the response, wait for 1 second and then re-initiate the call. The complete query results are returned until the value of **isFinish** is **true**.
    * *   This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which DAS Professional Edition is enabled. For more information, see [Purchase DAS Professional Edition](~~163298~~).
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetAsyncErrorRequestListByCodeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAsyncErrorRequestListByCodeResponse
   */
  async getAsyncErrorRequestListByCodeWithOptions(request: GetAsyncErrorRequestListByCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncErrorRequestListByCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.errorCode)) {
      query["ErrorCode"] = request.errorCode;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncErrorRequestListByCode",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAsyncErrorRequestListByCodeResponse>(await this.callApi(params, req, runtime), new GetAsyncErrorRequestListByCodeResponse({}));
  }

  /**
    * >  When an asynchronous call is made, the complete query results are not immediately returned. If the value of **isFinish** is **false** in the response, wait for 1 second and then re-initiate the call. The complete query results are returned until the value of **isFinish** is **true**.
    * *   This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which DAS Professional Edition is enabled. For more information, see [Purchase DAS Professional Edition](~~163298~~).
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetAsyncErrorRequestListByCodeRequest
    * @return GetAsyncErrorRequestListByCodeResponse
   */
  async getAsyncErrorRequestListByCode(request: GetAsyncErrorRequestListByCodeRequest): Promise<GetAsyncErrorRequestListByCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncErrorRequestListByCodeWithOptions(request, runtime);
  }

  /**
    * >  When an asynchronous call is made, the complete query results are not returned immediately. If the value of **isFinish** is **false** in the response, wait for 1 second and then re-initiate the call. The complete query results are returned until the value of **isFinish** is **true**.
    * *   This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Professional Edition is enabled. For more information, see [Purchase DAS Professional Edition](~~163298~~).
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetAsyncErrorRequestStatByCodeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAsyncErrorRequestStatByCodeResponse
   */
  async getAsyncErrorRequestStatByCodeWithOptions(request: GetAsyncErrorRequestStatByCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncErrorRequestStatByCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncErrorRequestStatByCode",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAsyncErrorRequestStatByCodeResponse>(await this.callApi(params, req, runtime), new GetAsyncErrorRequestStatByCodeResponse({}));
  }

  /**
    * >  When an asynchronous call is made, the complete query results are not returned immediately. If the value of **isFinish** is **false** in the response, wait for 1 second and then re-initiate the call. The complete query results are returned until the value of **isFinish** is **true**.
    * *   This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Professional Edition is enabled. For more information, see [Purchase DAS Professional Edition](~~163298~~).
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetAsyncErrorRequestStatByCodeRequest
    * @return GetAsyncErrorRequestStatByCodeResponse
   */
  async getAsyncErrorRequestStatByCode(request: GetAsyncErrorRequestStatByCodeRequest): Promise<GetAsyncErrorRequestStatByCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncErrorRequestStatByCodeWithOptions(request, runtime);
  }

  /**
    * >  When an asynchronous call is made, the complete query results are not returned immediately. If the value of **isFinish** is **false** in the response, wait for 1 second and then re-initiate the call. The complete query results are returned until the value of **isFinish** is **true**.
    * *   This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Professional Edition is enabled. For more information, see [Purchase DAS Professional Edition](~~163298~~).
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetAsyncErrorRequestStatResultRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAsyncErrorRequestStatResultResponse
   */
  async getAsyncErrorRequestStatResultWithOptions(request: GetAsyncErrorRequestStatResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncErrorRequestStatResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.sqlIdList)) {
      query["SqlIdList"] = request.sqlIdList;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncErrorRequestStatResult",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAsyncErrorRequestStatResultResponse>(await this.callApi(params, req, runtime), new GetAsyncErrorRequestStatResultResponse({}));
  }

  /**
    * >  When an asynchronous call is made, the complete query results are not returned immediately. If the value of **isFinish** is **false** in the response, wait for 1 second and then re-initiate the call. The complete query results are returned until the value of **isFinish** is **true**.
    * *   This API operation supports only ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Professional Edition is enabled. For more information, see [Purchase DAS Professional Edition](~~163298~~).
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetAsyncErrorRequestStatResultRequest
    * @return GetAsyncErrorRequestStatResultResponse
   */
  async getAsyncErrorRequestStatResult(request: GetAsyncErrorRequestStatResultRequest): Promise<GetAsyncErrorRequestStatResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncErrorRequestStatResultWithOptions(request, runtime);
  }

  async getAutoIncrementUsageStatisticWithOptions(request: GetAutoIncrementUsageStatisticRequest, runtime: $Util.RuntimeOptions): Promise<GetAutoIncrementUsageStatisticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbNames)) {
      query["DbNames"] = request.dbNames;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ratioFilter)) {
      query["RatioFilter"] = request.ratioFilter;
    }

    if (!Util.isUnset(request.realTime)) {
      query["RealTime"] = request.realTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAutoIncrementUsageStatistic",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAutoIncrementUsageStatisticResponse>(await this.callApi(params, req, runtime), new GetAutoIncrementUsageStatisticResponse({}));
  }

  async getAutoIncrementUsageStatistic(request: GetAutoIncrementUsageStatisticRequest): Promise<GetAutoIncrementUsageStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAutoIncrementUsageStatisticWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * *   The database instance for which you want to query automatic fragment recycling rules is an ApsaraDB RDS for MySQL High-availability Edition instance.
    * *   The database instance has four or more cores, and **innodb_file_per_table** is set to **ON**.
    *
    * @param request GetAutoResourceOptimizeRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAutoResourceOptimizeRulesResponse
   */
  async getAutoResourceOptimizeRulesWithOptions(request: GetAutoResourceOptimizeRulesRequest, runtime: $Util.RuntimeOptions): Promise<GetAutoResourceOptimizeRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAutoResourceOptimizeRules",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAutoResourceOptimizeRulesResponse>(await this.callApi(params, req, runtime), new GetAutoResourceOptimizeRulesResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * *   The database instance for which you want to query automatic fragment recycling rules is an ApsaraDB RDS for MySQL High-availability Edition instance.
    * *   The database instance has four or more cores, and **innodb_file_per_table** is set to **ON**.
    *
    * @param request GetAutoResourceOptimizeRulesRequest
    * @return GetAutoResourceOptimizeRulesResponse
   */
  async getAutoResourceOptimizeRules(request: GetAutoResourceOptimizeRulesRequest): Promise<GetAutoResourceOptimizeRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAutoResourceOptimizeRulesWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * *   The database instance that you want to manage is of one of the following types:
    *     *   ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition instance that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0.
    *     *   PolarDB for MySQL Cluster Edition instance that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0, or PolarDB for MySQL X-Engine Edition instance that runs MySQL 8.0.
    *
    * @param request GetAutoThrottleRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAutoThrottleRulesResponse
   */
  async getAutoThrottleRulesWithOptions(request: GetAutoThrottleRulesRequest, runtime: $Util.RuntimeOptions): Promise<GetAutoThrottleRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAutoThrottleRules",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAutoThrottleRulesResponse>(await this.callApi(params, req, runtime), new GetAutoThrottleRulesResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * *   The database instance that you want to manage is of one of the following types:
    *     *   ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition instance that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0.
    *     *   PolarDB for MySQL Cluster Edition instance that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0, or PolarDB for MySQL X-Engine Edition instance that runs MySQL 8.0.
    *
    * @param request GetAutoThrottleRulesRequest
    * @return GetAutoThrottleRulesResponse
   */
  async getAutoThrottleRules(request: GetAutoThrottleRulesRequest): Promise<GetAutoThrottleRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAutoThrottleRulesWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   After your instance is connected to DAS, notification events such as snapshot capture are triggered if DAS detects changes to database monitoring metrics during anomaly detection.
    * >  You can query the details of notification events only if the autonomy center is enabled. For more information, see [Autonomy center](~~152139~~).
    *
    * @param request GetAutonomousNotifyEventContentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAutonomousNotifyEventContentResponse
   */
  async getAutonomousNotifyEventContentWithOptions(request: GetAutonomousNotifyEventContentRequest, runtime: $Util.RuntimeOptions): Promise<GetAutonomousNotifyEventContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.spanId)) {
      query["SpanId"] = request.spanId;
    }

    if (!Util.isUnset(request.context)) {
      query["__context"] = request.context;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAutonomousNotifyEventContent",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAutonomousNotifyEventContentResponse>(await this.callApi(params, req, runtime), new GetAutonomousNotifyEventContentResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   After your instance is connected to DAS, notification events such as snapshot capture are triggered if DAS detects changes to database monitoring metrics during anomaly detection.
    * >  You can query the details of notification events only if the autonomy center is enabled. For more information, see [Autonomy center](~~152139~~).
    *
    * @param request GetAutonomousNotifyEventContentRequest
    * @return GetAutonomousNotifyEventContentResponse
   */
  async getAutonomousNotifyEventContent(request: GetAutonomousNotifyEventContentRequest): Promise<GetAutonomousNotifyEventContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAutonomousNotifyEventContentWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   After your instance is connected to DAS, notification events such as snapshot capture are triggered if DAS detects changes to database monitoring metrics during anomaly detection.
    * >  You can query the details of notification events only if the autonomy center is enabled. For more information, see [Autonomy center](~~152139~~).
    *
    * @param request GetAutonomousNotifyEventsInRangeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAutonomousNotifyEventsInRangeResponse
   */
  async getAutonomousNotifyEventsInRangeWithOptions(request: GetAutonomousNotifyEventsInRangeRequest, runtime: $Util.RuntimeOptions): Promise<GetAutonomousNotifyEventsInRangeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventContext)) {
      query["EventContext"] = request.eventContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.minLevel)) {
      query["MinLevel"] = request.minLevel;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.pageOffset)) {
      query["PageOffset"] = request.pageOffset;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.context)) {
      query["__context"] = request.context;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAutonomousNotifyEventsInRange",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAutonomousNotifyEventsInRangeResponse>(await this.callApi(params, req, runtime), new GetAutonomousNotifyEventsInRangeResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   After your instance is connected to DAS, notification events such as snapshot capture are triggered if DAS detects changes to database monitoring metrics during anomaly detection.
    * >  You can query the details of notification events only if the autonomy center is enabled. For more information, see [Autonomy center](~~152139~~).
    *
    * @param request GetAutonomousNotifyEventsInRangeRequest
    * @return GetAutonomousNotifyEventsInRangeResponse
   */
  async getAutonomousNotifyEventsInRange(request: GetAutonomousNotifyEventsInRangeRequest): Promise<GetAutonomousNotifyEventsInRangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAutonomousNotifyEventsInRangeWithOptions(request, runtime);
  }

  async getBlockingDetailListWithOptions(request: GetBlockingDetailListRequest, runtime: $Util.RuntimeOptions): Promise<GetBlockingDetailListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbNameList)) {
      query["DbNameList"] = request.dbNameList;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryHash)) {
      query["QueryHash"] = request.queryHash;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBlockingDetailList",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBlockingDetailListResponse>(await this.callApi(params, req, runtime), new GetBlockingDetailListResponse({}));
  }

  async getBlockingDetailList(request: GetBlockingDetailListRequest): Promise<GetBlockingDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBlockingDetailListWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   The database instance that you want to manage is connected to DAS.
    *
    * @param request GetDBInstanceConnectivityDiagnosisRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDBInstanceConnectivityDiagnosisResponse
   */
  async getDBInstanceConnectivityDiagnosisWithOptions(request: GetDBInstanceConnectivityDiagnosisRequest, runtime: $Util.RuntimeOptions): Promise<GetDBInstanceConnectivityDiagnosisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.srcIp)) {
      query["SrcIp"] = request.srcIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDBInstanceConnectivityDiagnosis",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDBInstanceConnectivityDiagnosisResponse>(await this.callApi(params, req, runtime), new GetDBInstanceConnectivityDiagnosisResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   The database instance that you want to manage is connected to DAS.
    *
    * @param request GetDBInstanceConnectivityDiagnosisRequest
    * @return GetDBInstanceConnectivityDiagnosisResponse
   */
  async getDBInstanceConnectivityDiagnosis(request: GetDBInstanceConnectivityDiagnosisRequest): Promise<GetDBInstanceConnectivityDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDBInstanceConnectivityDiagnosisWithOptions(request, runtime);
  }

  /**
    * *   For information about databases that are supported, see [Overview](~~190912~~).
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetDasProServiceUsageRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDasProServiceUsageResponse
   */
  async getDasProServiceUsageWithOptions(request: GetDasProServiceUsageRequest, runtime: $Util.RuntimeOptions): Promise<GetDasProServiceUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDasProServiceUsage",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDasProServiceUsageResponse>(await this.callApi(params, req, runtime), new GetDasProServiceUsageResponse({}));
  }

  /**
    * *   For information about databases that are supported, see [Overview](~~190912~~).
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetDasProServiceUsageRequest
    * @return GetDasProServiceUsageResponse
   */
  async getDasProServiceUsage(request: GetDasProServiceUsageRequest): Promise<GetDasProServiceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDasProServiceUsageWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   An ApsaraDB RDS for MySQL database or a PolarDB for MySQL database in the China (Shanghai) region is connected to DAS.
    * *   The new SQL Explorer and Audit feature is enabled for the database instance. For more information, see the [Enable the SQL Explorer and Audit feature](~~92561~~) section of the "Overview" topic.
    * >  You can query only the data that is generated after the new SQL Explorer and Audit feature is enabled. The start time can be up to seven days earlier than the current time. The interval between the start time and the end time cannot exceed 24 hours.
    *
    * @param request GetDasSQLLogHotDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDasSQLLogHotDataResponse
   */
  async getDasSQLLogHotDataWithOptions(request: GetDasSQLLogHotDataRequest, runtime: $Util.RuntimeOptions): Promise<GetDasSQLLogHotDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.childDBInstanceIDs)) {
      body["ChildDBInstanceIDs"] = request.childDBInstanceIDs;
    }

    if (!Util.isUnset(request.DBName)) {
      body["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.end)) {
      body["End"] = request.end;
    }

    if (!Util.isUnset(request.fail)) {
      body["Fail"] = request.fail;
    }

    if (!Util.isUnset(request.hostAddress)) {
      body["HostAddress"] = request.hostAddress;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logicalOperator)) {
      body["LogicalOperator"] = request.logicalOperator;
    }

    if (!Util.isUnset(request.maxLatancy)) {
      body["MaxLatancy"] = request.maxLatancy;
    }

    if (!Util.isUnset(request.maxRecordsPerPage)) {
      body["MaxRecordsPerPage"] = request.maxRecordsPerPage;
    }

    if (!Util.isUnset(request.maxRows)) {
      body["MaxRows"] = request.maxRows;
    }

    if (!Util.isUnset(request.maxScanRows)) {
      body["MaxScanRows"] = request.maxScanRows;
    }

    if (!Util.isUnset(request.maxSpillCnt)) {
      body["MaxSpillCnt"] = request.maxSpillCnt;
    }

    if (!Util.isUnset(request.minLatancy)) {
      body["MinLatancy"] = request.minLatancy;
    }

    if (!Util.isUnset(request.minRows)) {
      body["MinRows"] = request.minRows;
    }

    if (!Util.isUnset(request.minScanRows)) {
      body["MinScanRows"] = request.minScanRows;
    }

    if (!Util.isUnset(request.minSpillCnt)) {
      body["MinSpillCnt"] = request.minSpillCnt;
    }

    if (!Util.isUnset(request.pageNumbers)) {
      body["PageNumbers"] = request.pageNumbers;
    }

    if (!Util.isUnset(request.queryKeyword)) {
      body["QueryKeyword"] = request.queryKeyword;
    }

    if (!Util.isUnset(request.role)) {
      body["Role"] = request.role;
    }

    if (!Util.isUnset(request.sortKey)) {
      body["SortKey"] = request.sortKey;
    }

    if (!Util.isUnset(request.sortMethod)) {
      body["SortMethod"] = request.sortMethod;
    }

    if (!Util.isUnset(request.sqlType)) {
      body["SqlType"] = request.sqlType;
    }

    if (!Util.isUnset(request.start)) {
      body["Start"] = request.start;
    }

    if (!Util.isUnset(request.state)) {
      body["State"] = request.state;
    }

    if (!Util.isUnset(request.threadID)) {
      body["ThreadID"] = request.threadID;
    }

    if (!Util.isUnset(request.traceId)) {
      body["TraceId"] = request.traceId;
    }

    if (!Util.isUnset(request.transactionId)) {
      body["TransactionId"] = request.transactionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDasSQLLogHotData",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDasSQLLogHotDataResponse>(await this.callApi(params, req, runtime), new GetDasSQLLogHotDataResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   An ApsaraDB RDS for MySQL database or a PolarDB for MySQL database in the China (Shanghai) region is connected to DAS.
    * *   The new SQL Explorer and Audit feature is enabled for the database instance. For more information, see the [Enable the SQL Explorer and Audit feature](~~92561~~) section of the "Overview" topic.
    * >  You can query only the data that is generated after the new SQL Explorer and Audit feature is enabled. The start time can be up to seven days earlier than the current time. The interval between the start time and the end time cannot exceed 24 hours.
    *
    * @param request GetDasSQLLogHotDataRequest
    * @return GetDasSQLLogHotDataResponse
   */
  async getDasSQLLogHotData(request: GetDasSQLLogHotDataRequest): Promise<GetDasSQLLogHotDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDasSQLLogHotDataWithOptions(request, runtime);
  }

  async getDeadLockDetailListWithOptions(request: GetDeadLockDetailListRequest, runtime: $Util.RuntimeOptions): Promise<GetDeadLockDetailListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbNameList)) {
      query["DbNameList"] = request.dbNameList;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeadLockDetailList",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeadLockDetailListResponse>(await this.callApi(params, req, runtime), new GetDeadLockDetailListResponse({}));
  }

  async getDeadLockDetailList(request: GetDeadLockDetailListRequest): Promise<GetDeadLockDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeadLockDetailListWithOptions(request, runtime);
  }

  async getEndpointSwitchTaskWithOptions(request: GetEndpointSwitchTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetEndpointSwitchTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.context)) {
      query["__context"] = request.context;
    }

    if (!Util.isUnset(request.accessKey)) {
      query["accessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.signature)) {
      query["signature"] = request.signature;
    }

    if (!Util.isUnset(request.skipAuth)) {
      query["skipAuth"] = request.skipAuth;
    }

    if (!Util.isUnset(request.timestamp)) {
      query["timestamp"] = request.timestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEndpointSwitchTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEndpointSwitchTaskResponse>(await this.callApi(params, req, runtime), new GetEndpointSwitchTaskResponse({}));
  }

  async getEndpointSwitchTask(request: GetEndpointSwitchTaskRequest): Promise<GetEndpointSwitchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEndpointSwitchTaskWithOptions(request, runtime);
  }

  /**
    * >  The complete query results are not immediately returned after an asynchronous request is sent. If the value of **isFinish** is **false** in the response, wait for 1 second and send the request again. The complete query results are returned until the value of **isFinish** is **true**.
    * *   This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Professional Edition is enabled. For more information, see [Purchase DAS Professional Edition](~~163298~~).
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetErrorRequestSampleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetErrorRequestSampleResponse
   */
  async getErrorRequestSampleWithOptions(request: GetErrorRequestSampleRequest, runtime: $Util.RuntimeOptions): Promise<GetErrorRequestSampleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.sqlId)) {
      query["SqlId"] = request.sqlId;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetErrorRequestSample",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetErrorRequestSampleResponse>(await this.callApi(params, req, runtime), new GetErrorRequestSampleResponse({}));
  }

  /**
    * >  The complete query results are not immediately returned after an asynchronous request is sent. If the value of **isFinish** is **false** in the response, wait for 1 second and send the request again. The complete query results are returned until the value of **isFinish** is **true**.
    * *   This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters for which Database Autonomy Service (DAS) Professional Edition is enabled. For more information, see [Purchase DAS Professional Edition](~~163298~~).
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetErrorRequestSampleRequest
    * @return GetErrorRequestSampleResponse
   */
  async getErrorRequestSample(request: GetErrorRequestSampleRequest): Promise<GetErrorRequestSampleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getErrorRequestSampleWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   The database instance that you want to manage is connected to DAS.
    *
    * @param request GetEventSubscriptionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetEventSubscriptionResponse
   */
  async getEventSubscriptionWithOptions(request: GetEventSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<GetEventSubscriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEventSubscription",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEventSubscriptionResponse>(await this.callApi(params, req, runtime), new GetEventSubscriptionResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   The database instance that you want to manage is connected to DAS.
    *
    * @param request GetEventSubscriptionRequest
    * @return GetEventSubscriptionResponse
   */
  async getEventSubscription(request: GetEventSubscriptionRequest): Promise<GetEventSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventSubscriptionWithOptions(request, runtime);
  }

  /**
    * The SQL Explorer feature allows you to check the health status of SQL statements and troubleshoot performance issues. For more information, see [SQL Explorer](~~204096~~).
    * *   For information about database instances that support SQL Explorer, see [Overview](~~190912~~).
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetFullRequestOriginStatByInstanceIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetFullRequestOriginStatByInstanceIdResponse
   */
  async getFullRequestOriginStatByInstanceIdWithOptions(request: GetFullRequestOriginStatByInstanceIdRequest, runtime: $Util.RuntimeOptions): Promise<GetFullRequestOriginStatByInstanceIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asc)) {
      query["Asc"] = request.asc;
    }

    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    if (!Util.isUnset(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFullRequestOriginStatByInstanceId",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFullRequestOriginStatByInstanceIdResponse>(await this.callApi(params, req, runtime), new GetFullRequestOriginStatByInstanceIdResponse({}));
  }

  /**
    * The SQL Explorer feature allows you to check the health status of SQL statements and troubleshoot performance issues. For more information, see [SQL Explorer](~~204096~~).
    * *   For information about database instances that support SQL Explorer, see [Overview](~~190912~~).
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetFullRequestOriginStatByInstanceIdRequest
    * @return GetFullRequestOriginStatByInstanceIdResponse
   */
  async getFullRequestOriginStatByInstanceId(request: GetFullRequestOriginStatByInstanceIdRequest): Promise<GetFullRequestOriginStatByInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFullRequestOriginStatByInstanceIdWithOptions(request, runtime);
  }

  /**
    * The SQL Explorer feature allows you to check the health status of SQL statements and troubleshoot performance issues. For more information, see [SQL Explorer](~~204096~~).
    * *   For more information about the database engines that support SQL Explorer, see [SQL Explorer](~~204096~~).
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetFullRequestSampleByInstanceIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetFullRequestSampleByInstanceIdResponse
   */
  async getFullRequestSampleByInstanceIdWithOptions(request: GetFullRequestSampleByInstanceIdRequest, runtime: $Util.RuntimeOptions): Promise<GetFullRequestSampleByInstanceIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.end)) {
      body["End"] = request.end;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!Util.isUnset(request.start)) {
      body["Start"] = request.start;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFullRequestSampleByInstanceId",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFullRequestSampleByInstanceIdResponse>(await this.callApi(params, req, runtime), new GetFullRequestSampleByInstanceIdResponse({}));
  }

  /**
    * The SQL Explorer feature allows you to check the health status of SQL statements and troubleshoot performance issues. For more information, see [SQL Explorer](~~204096~~).
    * *   For more information about the database engines that support SQL Explorer, see [SQL Explorer](~~204096~~).
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetFullRequestSampleByInstanceIdRequest
    * @return GetFullRequestSampleByInstanceIdResponse
   */
  async getFullRequestSampleByInstanceId(request: GetFullRequestSampleByInstanceIdRequest): Promise<GetFullRequestSampleByInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFullRequestSampleByInstanceIdWithOptions(request, runtime);
  }

  /**
    * >  The complete query results are not returned immediately after an asynchronous request is sent. If the value of isFinish is **false** in the response, wait for 1 second and send the request again. The complete query results are returned until the value of isFinish is **true**.
    * The SQL Explorer feature allows you to check the health status of SQL statements and troubleshoot performance issues. For more information, see [SQL Explorer](~~204096~~).
    * *   For more information about database instances that support SQL Explorer, see [Overview](~~190912~~).
    * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    *
    * @param request GetFullRequestStatResultByInstanceIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetFullRequestStatResultByInstanceIdResponse
   */
  async getFullRequestStatResultByInstanceIdWithOptions(request: GetFullRequestStatResultByInstanceIdRequest, runtime: $Util.RuntimeOptions): Promise<GetFullRequestStatResultByInstanceIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asc)) {
      query["Asc"] = request.asc;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.originHost)) {
      query["OriginHost"] = request.originHost;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    if (!Util.isUnset(request.sqlId)) {
      query["SqlId"] = request.sqlId;
    }

    if (!Util.isUnset(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFullRequestStatResultByInstanceId",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFullRequestStatResultByInstanceIdResponse>(await this.callApi(params, req, runtime), new GetFullRequestStatResultByInstanceIdResponse({}));
  }

  /**
    * >  The complete query results are not returned immediately after an asynchronous request is sent. If the value of isFinish is **false** in the response, wait for 1 second and send the request again. The complete query results are returned until the value of isFinish is **true**.
    * The SQL Explorer feature allows you to check the health status of SQL statements and troubleshoot performance issues. For more information, see [SQL Explorer](~~204096~~).
    * *   For more information about database instances that support SQL Explorer, see [Overview](~~190912~~).
    * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    *
    * @param request GetFullRequestStatResultByInstanceIdRequest
    * @return GetFullRequestStatResultByInstanceIdResponse
   */
  async getFullRequestStatResultByInstanceId(request: GetFullRequestStatResultByInstanceIdRequest): Promise<GetFullRequestStatResultByInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFullRequestStatResultByInstanceIdWithOptions(request, runtime);
  }

  async getHDMAliyunResourceSyncResultWithOptions(request: GetHDMAliyunResourceSyncResultRequest, runtime: $Util.RuntimeOptions): Promise<GetHDMAliyunResourceSyncResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.context)) {
      query["__context"] = request.context;
    }

    if (!Util.isUnset(request.accessKey)) {
      query["accessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.signature)) {
      query["signature"] = request.signature;
    }

    if (!Util.isUnset(request.skipAuth)) {
      query["skipAuth"] = request.skipAuth;
    }

    if (!Util.isUnset(request.timestamp)) {
      query["timestamp"] = request.timestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHDMAliyunResourceSyncResult",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHDMAliyunResourceSyncResultResponse>(await this.callApi(params, req, runtime), new GetHDMAliyunResourceSyncResultResponse({}));
  }

  async getHDMAliyunResourceSyncResult(request: GetHDMAliyunResourceSyncResultRequest): Promise<GetHDMAliyunResourceSyncResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHDMAliyunResourceSyncResultWithOptions(request, runtime);
  }

  async getHDMLastAliyunResourceSyncResultWithOptions(request: GetHDMLastAliyunResourceSyncResultRequest, runtime: $Util.RuntimeOptions): Promise<GetHDMLastAliyunResourceSyncResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.context)) {
      query["__context"] = request.context;
    }

    if (!Util.isUnset(request.accessKey)) {
      query["accessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.signature)) {
      query["signature"] = request.signature;
    }

    if (!Util.isUnset(request.skipAuth)) {
      query["skipAuth"] = request.skipAuth;
    }

    if (!Util.isUnset(request.timestamp)) {
      query["timestamp"] = request.timestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHDMLastAliyunResourceSyncResult",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHDMLastAliyunResourceSyncResultResponse>(await this.callApi(params, req, runtime), new GetHDMLastAliyunResourceSyncResultResponse({}));
  }

  async getHDMLastAliyunResourceSyncResult(request: GetHDMLastAliyunResourceSyncResultRequest): Promise<GetHDMLastAliyunResourceSyncResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHDMLastAliyunResourceSyncResultWithOptions(request, runtime);
  }

  /**
    * Database Autonomy Service (DAS) provides the inspection and scoring feature. This feature allows you to inspect and score the health status of your instance on a regular basis. This helps you obtain information about the status of your databases. For more information, see [Inspection and scoring](~~205659~~).
    * Before you call this operation, take note of the following items:
    * *   This operation is applicable only to ApsaraDB RDS for MySQL databases, self-managed MySQL databases hosted on Elastic Compute Service (ECS) instances, self-managed MySQL databases in data centers, ApsaraDB for Redis databases, and PolarDB for MySQL databases.
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V4.3.3. We recommend that you use the latest version.
    * *   The version of DAS SDK must be V1.0.3 or later.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetInstanceInspectionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetInstanceInspectionsResponse
   */
  async getInstanceInspectionsWithOptions(request: GetInstanceInspectionsRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceInspectionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.instanceArea)) {
      query["InstanceArea"] = request.instanceArea;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.searchMap)) {
      query["SearchMap"] = request.searchMap;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceInspections",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceInspectionsResponse>(await this.callApi(params, req, runtime), new GetInstanceInspectionsResponse({}));
  }

  /**
    * Database Autonomy Service (DAS) provides the inspection and scoring feature. This feature allows you to inspect and score the health status of your instance on a regular basis. This helps you obtain information about the status of your databases. For more information, see [Inspection and scoring](~~205659~~).
    * Before you call this operation, take note of the following items:
    * *   This operation is applicable only to ApsaraDB RDS for MySQL databases, self-managed MySQL databases hosted on Elastic Compute Service (ECS) instances, self-managed MySQL databases in data centers, ApsaraDB for Redis databases, and PolarDB for MySQL databases.
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V4.3.3. We recommend that you use the latest version.
    * *   The version of DAS SDK must be V1.0.3 or later.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetInstanceInspectionsRequest
    * @return GetInstanceInspectionsResponse
   */
  async getInstanceInspections(request: GetInstanceInspectionsRequest): Promise<GetInstanceInspectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceInspectionsWithOptions(request, runtime);
  }

  async getInstanceMissingIndexListWithOptions(request: GetInstanceMissingIndexListRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceMissingIndexListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.avgTotalUserCost)) {
      query["AvgTotalUserCost"] = request.avgTotalUserCost;
    }

    if (!Util.isUnset(request.avgUserImpact)) {
      query["AvgUserImpact"] = request.avgUserImpact;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.indexCount)) {
      query["IndexCount"] = request.indexCount;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.objectName)) {
      query["ObjectName"] = request.objectName;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.reservedPages)) {
      query["ReservedPages"] = request.reservedPages;
    }

    if (!Util.isUnset(request.reservedSize)) {
      query["ReservedSize"] = request.reservedSize;
    }

    if (!Util.isUnset(request.rowCount)) {
      query["RowCount"] = request.rowCount;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.uniqueCompiles)) {
      query["UniqueCompiles"] = request.uniqueCompiles;
    }

    if (!Util.isUnset(request.userScans)) {
      query["UserScans"] = request.userScans;
    }

    if (!Util.isUnset(request.userSeeks)) {
      query["UserSeeks"] = request.userSeeks;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceMissingIndexList",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceMissingIndexListResponse>(await this.callApi(params, req, runtime), new GetInstanceMissingIndexListResponse({}));
  }

  async getInstanceMissingIndexList(request: GetInstanceMissingIndexListRequest): Promise<GetInstanceMissingIndexListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceMissingIndexListWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   The database engine is ApsaraDB RDS for MySQL or PolarDB for MySQL.
    *
    * @param request GetInstanceSqlOptimizeStatisticRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetInstanceSqlOptimizeStatisticResponse
   */
  async getInstanceSqlOptimizeStatisticWithOptions(request: GetInstanceSqlOptimizeStatisticRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceSqlOptimizeStatisticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.filterEnable)) {
      query["FilterEnable"] = request.filterEnable;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!Util.isUnset(request.useMerging)) {
      query["UseMerging"] = request.useMerging;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceSqlOptimizeStatistic",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceSqlOptimizeStatisticResponse>(await this.callApi(params, req, runtime), new GetInstanceSqlOptimizeStatisticResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   The database engine is ApsaraDB RDS for MySQL or PolarDB for MySQL.
    *
    * @param request GetInstanceSqlOptimizeStatisticRequest
    * @return GetInstanceSqlOptimizeStatisticResponse
   */
  async getInstanceSqlOptimizeStatistic(request: GetInstanceSqlOptimizeStatisticRequest): Promise<GetInstanceSqlOptimizeStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceSqlOptimizeStatisticWithOptions(request, runtime);
  }

  /**
    * *   This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetKillInstanceSessionTaskResultRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetKillInstanceSessionTaskResultResponse
   */
  async getKillInstanceSessionTaskResultWithOptions(request: GetKillInstanceSessionTaskResultRequest, runtime: $Util.RuntimeOptions): Promise<GetKillInstanceSessionTaskResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetKillInstanceSessionTaskResult",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetKillInstanceSessionTaskResultResponse>(await this.callApi(params, req, runtime), new GetKillInstanceSessionTaskResultResponse({}));
  }

  /**
    * *   This operation is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetKillInstanceSessionTaskResultRequest
    * @return GetKillInstanceSessionTaskResultResponse
   */
  async getKillInstanceSessionTaskResult(request: GetKillInstanceSessionTaskResultRequest): Promise<GetKillInstanceSessionTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKillInstanceSessionTaskResultWithOptions(request, runtime);
  }

  /**
    * *   This operation is applicable only to MongoDB instances.
    * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region to cn-shanghai.
    *
    * @param request GetMongoDBCurrentOpRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetMongoDBCurrentOpResponse
   */
  async getMongoDBCurrentOpWithOptions(request: GetMongoDBCurrentOpRequest, runtime: $Util.RuntimeOptions): Promise<GetMongoDBCurrentOpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterDoc)) {
      query["FilterDoc"] = request.filterDoc;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMongoDBCurrentOp",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMongoDBCurrentOpResponse>(await this.callApi(params, req, runtime), new GetMongoDBCurrentOpResponse({}));
  }

  /**
    * *   This operation is applicable only to MongoDB instances.
    * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region to cn-shanghai.
    *
    * @param request GetMongoDBCurrentOpRequest
    * @return GetMongoDBCurrentOpResponse
   */
  async getMongoDBCurrentOp(request: GetMongoDBCurrentOpRequest): Promise<GetMongoDBCurrentOpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMongoDBCurrentOpWithOptions(request, runtime);
  }

  /**
    * >  Asynchronous calls do not immediately return the complete results. You must use the value of **ResultId** returned in the response to re-initiate the call. The complete results are returned only if the value of **IsFinish** is **true**.
    * *   This operation is applicable only to ApsaraDB RDS for MySQL, PolarDB for MySQL, and PolarDB-X 2.0 instances.
    * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetMySQLAllSessionAsyncRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetMySQLAllSessionAsyncResponse
   */
  async getMySQLAllSessionAsyncWithOptions(request: GetMySQLAllSessionAsyncRequest, runtime: $Util.RuntimeOptions): Promise<GetMySQLAllSessionAsyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.resultId)) {
      query["ResultId"] = request.resultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMySQLAllSessionAsync",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMySQLAllSessionAsyncResponse>(await this.callApi(params, req, runtime), new GetMySQLAllSessionAsyncResponse({}));
  }

  /**
    * >  Asynchronous calls do not immediately return the complete results. You must use the value of **ResultId** returned in the response to re-initiate the call. The complete results are returned only if the value of **IsFinish** is **true**.
    * *   This operation is applicable only to ApsaraDB RDS for MySQL, PolarDB for MySQL, and PolarDB-X 2.0 instances.
    * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetMySQLAllSessionAsyncRequest
    * @return GetMySQLAllSessionAsyncResponse
   */
  async getMySQLAllSessionAsync(request: GetMySQLAllSessionAsyncRequest): Promise<GetMySQLAllSessionAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMySQLAllSessionAsyncWithOptions(request, runtime);
  }

  /**
    * We recommend that you do not call this operation. The data is returned in a special format and is complex to parse. You can use the [heatmap](~~470302~~) feature of Database Autonomy Service (DAS) to query the data.
    *
    * @param request GetPartitionsHeatmapRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetPartitionsHeatmapResponse
   */
  async getPartitionsHeatmapWithOptions(request: GetPartitionsHeatmapRequest, runtime: $Util.RuntimeOptions): Promise<GetPartitionsHeatmapResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPartitionsHeatmap",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPartitionsHeatmapResponse>(await this.callApi(params, req, runtime), new GetPartitionsHeatmapResponse({}));
  }

  /**
    * We recommend that you do not call this operation. The data is returned in a special format and is complex to parse. You can use the [heatmap](~~470302~~) feature of Database Autonomy Service (DAS) to query the data.
    *
    * @param request GetPartitionsHeatmapRequest
    * @return GetPartitionsHeatmapResponse
   */
  async getPartitionsHeatmap(request: GetPartitionsHeatmapRequest): Promise<GetPartitionsHeatmapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPartitionsHeatmapWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
    * *   The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](~~469117~~).
    *
    * @param request GetPfsMetricTrendsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetPfsMetricTrendsResponse
   */
  async getPfsMetricTrendsWithOptions(request: GetPfsMetricTrendsRequest, runtime: $Util.RuntimeOptions): Promise<GetPfsMetricTrendsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.metric)) {
      body["Metric"] = request.metric;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPfsMetricTrends",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPfsMetricTrendsResponse>(await this.callApi(params, req, runtime), new GetPfsMetricTrendsResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
    * *   The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](~~469117~~).
    *
    * @param request GetPfsMetricTrendsRequest
    * @return GetPfsMetricTrendsResponse
   */
  async getPfsMetricTrends(request: GetPfsMetricTrendsRequest): Promise<GetPfsMetricTrendsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPfsMetricTrendsWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
    * *   The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](~~469117~~).
    *
    * @param request GetPfsSqlSampleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetPfsSqlSampleResponse
   */
  async getPfsSqlSampleWithOptions(request: GetPfsSqlSampleRequest, runtime: $Util.RuntimeOptions): Promise<GetPfsSqlSampleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPfsSqlSample",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPfsSqlSampleResponse>(await this.callApi(params, req, runtime), new GetPfsSqlSampleResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
    * *   The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](~~469117~~).
    *
    * @param request GetPfsSqlSampleRequest
    * @return GetPfsSqlSampleResponse
   */
  async getPfsSqlSample(request: GetPfsSqlSampleRequest): Promise<GetPfsSqlSampleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPfsSqlSampleWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
    * *   The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](~~469117~~).
    *
    * @param request GetPfsSqlSummariesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetPfsSqlSummariesResponse
   */
  async getPfsSqlSummariesWithOptions(request: GetPfsSqlSummariesRequest, runtime: $Util.RuntimeOptions): Promise<GetPfsSqlSummariesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.asc)) {
      body["Asc"] = request.asc;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keywords)) {
      body["Keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.orderBy)) {
      body["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPfsSqlSummaries",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPfsSqlSummariesResponse>(await this.callApi(params, req, runtime), new GetPfsSqlSummariesResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this API operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   An ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster is connected to DAS.
    * *   The new version of the performance insight feature is enabled for the database instance. For more information, see [Performance insight (new version)](~~469117~~).
    *
    * @param request GetPfsSqlSummariesRequest
    * @return GetPfsSqlSummariesResponse
   */
  async getPfsSqlSummaries(request: GetPfsSqlSummariesRequest): Promise<GetPfsSqlSummariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPfsSqlSummariesWithOptions(request, runtime);
  }

  /**
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
    * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeDataStatsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetQueryOptimizeDataStatsResponse
   */
  async getQueryOptimizeDataStatsWithOptions(request: GetQueryOptimizeDataStatsRequest, runtime: $Util.RuntimeOptions): Promise<GetQueryOptimizeDataStatsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueryOptimizeDataStats",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueryOptimizeDataStatsResponse>(await this.callApi(params, req, runtime), new GetQueryOptimizeDataStatsResponse({}));
  }

  /**
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
    * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeDataStatsRequest
    * @return GetQueryOptimizeDataStatsResponse
   */
  async getQueryOptimizeDataStats(request: GetQueryOptimizeDataStatsRequest): Promise<GetQueryOptimizeDataStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueryOptimizeDataStatsWithOptions(request, runtime);
  }

  /**
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
    * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeDataTopRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetQueryOptimizeDataTopResponse
   */
  async getQueryOptimizeDataTopWithOptions(request: GetQueryOptimizeDataTopRequest, runtime: $Util.RuntimeOptions): Promise<GetQueryOptimizeDataTopResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueryOptimizeDataTop",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueryOptimizeDataTopResponse>(await this.callApi(params, req, runtime), new GetQueryOptimizeDataTopResponse({}));
  }

  /**
    * *   If you use an Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
    * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeDataTopRequest
    * @return GetQueryOptimizeDataTopResponse
   */
  async getQueryOptimizeDataTop(request: GetQueryOptimizeDataTopRequest): Promise<GetQueryOptimizeDataTopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueryOptimizeDataTopWithOptions(request, runtime);
  }

  /**
    * *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
    * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeDataTrendRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetQueryOptimizeDataTrendResponse
   */
  async getQueryOptimizeDataTrendWithOptions(request: GetQueryOptimizeDataTrendRequest, runtime: $Util.RuntimeOptions): Promise<GetQueryOptimizeDataTrendResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueryOptimizeDataTrend",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueryOptimizeDataTrendResponse>(await this.callApi(params, req, runtime), new GetQueryOptimizeDataTrendResponse({}));
  }

  /**
    * *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
    * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeDataTrendRequest
    * @return GetQueryOptimizeDataTrendResponse
   */
  async getQueryOptimizeDataTrend(request: GetQueryOptimizeDataTrendRequest): Promise<GetQueryOptimizeDataTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueryOptimizeDataTrendWithOptions(request, runtime);
  }

  /**
    * *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
    * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeExecErrorSampleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetQueryOptimizeExecErrorSampleResponse
   */
  async getQueryOptimizeExecErrorSampleWithOptions(request: GetQueryOptimizeExecErrorSampleRequest, runtime: $Util.RuntimeOptions): Promise<GetQueryOptimizeExecErrorSampleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueryOptimizeExecErrorSample",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueryOptimizeExecErrorSampleResponse>(await this.callApi(params, req, runtime), new GetQueryOptimizeExecErrorSampleResponse({}));
  }

  /**
    * *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
    * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeExecErrorSampleRequest
    * @return GetQueryOptimizeExecErrorSampleResponse
   */
  async getQueryOptimizeExecErrorSample(request: GetQueryOptimizeExecErrorSampleRequest): Promise<GetQueryOptimizeExecErrorSampleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueryOptimizeExecErrorSampleWithOptions(request, runtime);
  }

  /**
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeExecErrorStatsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetQueryOptimizeExecErrorStatsResponse
   */
  async getQueryOptimizeExecErrorStatsWithOptions(request: GetQueryOptimizeExecErrorStatsRequest, runtime: $Util.RuntimeOptions): Promise<GetQueryOptimizeExecErrorStatsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueryOptimizeExecErrorStats",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueryOptimizeExecErrorStatsResponse>(await this.callApi(params, req, runtime), new GetQueryOptimizeExecErrorStatsResponse({}));
  }

  /**
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeExecErrorStatsRequest
    * @return GetQueryOptimizeExecErrorStatsResponse
   */
  async getQueryOptimizeExecErrorStats(request: GetQueryOptimizeExecErrorStatsRequest): Promise<GetQueryOptimizeExecErrorStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueryOptimizeExecErrorStatsWithOptions(request, runtime);
  }

  /**
    * *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
    * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeRuleListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetQueryOptimizeRuleListResponse
   */
  async getQueryOptimizeRuleListWithOptions(request: GetQueryOptimizeRuleListRequest, runtime: $Util.RuntimeOptions): Promise<GetQueryOptimizeRuleListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueryOptimizeRuleList",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueryOptimizeRuleListResponse>(await this.callApi(params, req, runtime), new GetQueryOptimizeRuleListResponse({}));
  }

  /**
    * *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V2.1.8. We recommend that you use the latest version.
    * *   The version of your Database Autonomy Service (DAS) SDK must be V2.1.8 or later.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeRuleListRequest
    * @return GetQueryOptimizeRuleListResponse
   */
  async getQueryOptimizeRuleList(request: GetQueryOptimizeRuleListRequest): Promise<GetQueryOptimizeRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueryOptimizeRuleListWithOptions(request, runtime);
  }

  /**
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeShareUrlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetQueryOptimizeShareUrlResponse
   */
  async getQueryOptimizeShareUrlWithOptions(request: GetQueryOptimizeShareUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetQueryOptimizeShareUrlResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueryOptimizeShareUrl",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueryOptimizeShareUrlResponse>(await this.callApi(params, req, runtime), new GetQueryOptimizeShareUrlResponse({}));
  }

  /**
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeShareUrlRequest
    * @return GetQueryOptimizeShareUrlResponse
   */
  async getQueryOptimizeShareUrl(request: GetQueryOptimizeShareUrlRequest): Promise<GetQueryOptimizeShareUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueryOptimizeShareUrlWithOptions(request, runtime);
  }

  /**
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeSolutionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetQueryOptimizeSolutionResponse
   */
  async getQueryOptimizeSolutionWithOptions(request: GetQueryOptimizeSolutionRequest, runtime: $Util.RuntimeOptions): Promise<GetQueryOptimizeSolutionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueryOptimizeSolution",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueryOptimizeSolutionResponse>(await this.callApi(params, req, runtime), new GetQueryOptimizeSolutionResponse({}));
  }

  /**
    * *   If you use an Alibaba Cloud SDK or a Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeSolutionRequest
    * @return GetQueryOptimizeSolutionResponse
   */
  async getQueryOptimizeSolution(request: GetQueryOptimizeSolutionRequest): Promise<GetQueryOptimizeSolutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueryOptimizeSolutionWithOptions(request, runtime);
  }

  /**
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeTagRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetQueryOptimizeTagResponse
   */
  async getQueryOptimizeTagWithOptions(request: GetQueryOptimizeTagRequest, runtime: $Util.RuntimeOptions): Promise<GetQueryOptimizeTagResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueryOptimizeTag",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueryOptimizeTagResponse>(await this.callApi(params, req, runtime), new GetQueryOptimizeTagResponse({}));
  }

  /**
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   PolarDB for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *
    * @param request GetQueryOptimizeTagRequest
    * @return GetQueryOptimizeTagResponse
   */
  async getQueryOptimizeTag(request: GetQueryOptimizeTagRequest): Promise<GetQueryOptimizeTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueryOptimizeTagWithOptions(request, runtime);
  }

  /**
    * *   This operation is applicable only to ApsaraDB for Redis instances.
    * *   If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * >  This operation cannot be used to query sessions generated in direct connection mode on ApsaraDB for Redis cluster instances.
    *
    * @param request GetRedisAllSessionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetRedisAllSessionResponse
   */
  async getRedisAllSessionWithOptions(request: GetRedisAllSessionRequest, runtime: $Util.RuntimeOptions): Promise<GetRedisAllSessionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRedisAllSession",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRedisAllSessionResponse>(await this.callApi(params, req, runtime), new GetRedisAllSessionResponse({}));
  }

  /**
    * *   This operation is applicable only to ApsaraDB for Redis instances.
    * *   If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * >  This operation cannot be used to query sessions generated in direct connection mode on ApsaraDB for Redis cluster instances.
    *
    * @param request GetRedisAllSessionRequest
    * @return GetRedisAllSessionResponse
   */
  async getRedisAllSession(request: GetRedisAllSessionRequest): Promise<GetRedisAllSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRedisAllSessionWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *     *   ApsaraDB RDS for SQL Server
    *     *   PolarDB for MySQL
    *     *   PolarDB for PostgreSQL (Compatible with Oracle)
    *     *   ApsaraDB for MongoDB
    * >  The minor engine version of the Apsara RDS for PostgreSQL instance must be 20220130 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](~~146895~~).
    *
    * @param request GetRequestDiagnosisPageRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetRequestDiagnosisPageResponse
   */
  async getRequestDiagnosisPageWithOptions(request: GetRequestDiagnosisPageRequest, runtime: $Util.RuntimeOptions): Promise<GetRequestDiagnosisPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRequestDiagnosisPage",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRequestDiagnosisPageResponse>(await this.callApi(params, req, runtime), new GetRequestDiagnosisPageResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call API operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *     *   ApsaraDB RDS for SQL Server
    *     *   PolarDB for MySQL
    *     *   PolarDB for PostgreSQL (Compatible with Oracle)
    *     *   ApsaraDB for MongoDB
    * >  The minor engine version of the Apsara RDS for PostgreSQL instance must be 20220130 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](~~146895~~).
    *
    * @param request GetRequestDiagnosisPageRequest
    * @return GetRequestDiagnosisPageResponse
   */
  async getRequestDiagnosisPage(request: GetRequestDiagnosisPageRequest): Promise<GetRequestDiagnosisPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRequestDiagnosisPageWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *     *   ApsaraDB RDS for SQL Server
    *     *   PolarDB for MySQL
    *     *   PolarDB for PostgreSQL (compatible with Oracle)
    *     *   ApsaraDB for MongoDB
    * >  The minor engine version of the Apsara RDS for PostgreSQL instance must be 20220130 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](~~146895~~).
    *
    * @param request GetRequestDiagnosisResultRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetRequestDiagnosisResultResponse
   */
  async getRequestDiagnosisResultWithOptions(request: GetRequestDiagnosisResultRequest, runtime: $Util.RuntimeOptions): Promise<GetRequestDiagnosisResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sqlId)) {
      query["SqlId"] = request.sqlId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRequestDiagnosisResult",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRequestDiagnosisResultResponse>(await this.callApi(params, req, runtime), new GetRequestDiagnosisResultResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL
    *     *   ApsaraDB RDS for PostgreSQL
    *     *   ApsaraDB RDS for SQL Server
    *     *   PolarDB for MySQL
    *     *   PolarDB for PostgreSQL (compatible with Oracle)
    *     *   ApsaraDB for MongoDB
    * >  The minor engine version of the Apsara RDS for PostgreSQL instance must be 20220130 or later. For more information about how to check and update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](~~146895~~).
    *
    * @param request GetRequestDiagnosisResultRequest
    * @return GetRequestDiagnosisResultResponse
   */
  async getRequestDiagnosisResult(request: GetRequestDiagnosisResultRequest): Promise<GetRequestDiagnosisResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRequestDiagnosisResultWithOptions(request, runtime);
  }

  /**
    * This operation supports the following database engines:
    * *   ApsaraDB RDS for MySQL
    * *   PolarDB for MySQL
    *
    * @param request GetRunningSqlConcurrencyControlRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetRunningSqlConcurrencyControlRulesResponse
   */
  async getRunningSqlConcurrencyControlRulesWithOptions(request: GetRunningSqlConcurrencyControlRulesRequest, runtime: $Util.RuntimeOptions): Promise<GetRunningSqlConcurrencyControlRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRunningSqlConcurrencyControlRules",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRunningSqlConcurrencyControlRulesResponse>(await this.callApi(params, req, runtime), new GetRunningSqlConcurrencyControlRulesResponse({}));
  }

  /**
    * This operation supports the following database engines:
    * *   ApsaraDB RDS for MySQL
    * *   PolarDB for MySQL
    *
    * @param request GetRunningSqlConcurrencyControlRulesRequest
    * @return GetRunningSqlConcurrencyControlRulesResponse
   */
  async getRunningSqlConcurrencyControlRules(request: GetRunningSqlConcurrencyControlRulesRequest): Promise<GetRunningSqlConcurrencyControlRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRunningSqlConcurrencyControlRulesWithOptions(request, runtime);
  }

  /**
    * This operation supports the following database engines:
    * *   ApsaraDB RDS for MySQL
    * *   PolarDB for MySQL
    *
    * @param request GetSqlConcurrencyControlKeywordsFromSqlTextRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetSqlConcurrencyControlKeywordsFromSqlTextResponse
   */
  async getSqlConcurrencyControlKeywordsFromSqlTextWithOptions(request: GetSqlConcurrencyControlKeywordsFromSqlTextRequest, runtime: $Util.RuntimeOptions): Promise<GetSqlConcurrencyControlKeywordsFromSqlTextResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sqlText)) {
      query["SqlText"] = request.sqlText;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSqlConcurrencyControlKeywordsFromSqlText",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSqlConcurrencyControlKeywordsFromSqlTextResponse>(await this.callApi(params, req, runtime), new GetSqlConcurrencyControlKeywordsFromSqlTextResponse({}));
  }

  /**
    * This operation supports the following database engines:
    * *   ApsaraDB RDS for MySQL
    * *   PolarDB for MySQL
    *
    * @param request GetSqlConcurrencyControlKeywordsFromSqlTextRequest
    * @return GetSqlConcurrencyControlKeywordsFromSqlTextResponse
   */
  async getSqlConcurrencyControlKeywordsFromSqlText(request: GetSqlConcurrencyControlKeywordsFromSqlTextRequest): Promise<GetSqlConcurrencyControlKeywordsFromSqlTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSqlConcurrencyControlKeywordsFromSqlTextWithOptions(request, runtime);
  }

  /**
    * This operation supports the following database engines:
    * *   ApsaraDB RDS for MySQL
    * *   PolarDB for MySQL
    *
    * @param request GetSqlConcurrencyControlRulesHistoryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetSqlConcurrencyControlRulesHistoryResponse
   */
  async getSqlConcurrencyControlRulesHistoryWithOptions(request: GetSqlConcurrencyControlRulesHistoryRequest, runtime: $Util.RuntimeOptions): Promise<GetSqlConcurrencyControlRulesHistoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSqlConcurrencyControlRulesHistory",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSqlConcurrencyControlRulesHistoryResponse>(await this.callApi(params, req, runtime), new GetSqlConcurrencyControlRulesHistoryResponse({}));
  }

  /**
    * This operation supports the following database engines:
    * *   ApsaraDB RDS for MySQL
    * *   PolarDB for MySQL
    *
    * @param request GetSqlConcurrencyControlRulesHistoryRequest
    * @return GetSqlConcurrencyControlRulesHistoryResponse
   */
  async getSqlConcurrencyControlRulesHistory(request: GetSqlConcurrencyControlRulesHistoryRequest): Promise<GetSqlConcurrencyControlRulesHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSqlConcurrencyControlRulesHistoryWithOptions(request, runtime);
  }

  /**
    * The SQL diagnostics feature provides optimization suggestions for instances based on diagnostics results. You can use the optimization suggestions to optimize instance indexes. For more information, see [Automatic SQL optimization](~~167895~~).
    * >  You can call this operation to query only the optimization suggestions that are automatically generated by the SQL diagnostics feature.
    * Before you call this operation, take note of the following items:
    * *   This operation is applicable to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
    * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetSqlOptimizeAdviceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetSqlOptimizeAdviceResponse
   */
  async getSqlOptimizeAdviceWithOptions(request: GetSqlOptimizeAdviceRequest, runtime: $Util.RuntimeOptions): Promise<GetSqlOptimizeAdviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.endDt)) {
      query["EndDt"] = request.endDt;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startDt)) {
      query["StartDt"] = request.startDt;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSqlOptimizeAdvice",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSqlOptimizeAdviceResponse>(await this.callApi(params, req, runtime), new GetSqlOptimizeAdviceResponse({}));
  }

  /**
    * The SQL diagnostics feature provides optimization suggestions for instances based on diagnostics results. You can use the optimization suggestions to optimize instance indexes. For more information, see [Automatic SQL optimization](~~167895~~).
    * >  You can call this operation to query only the optimization suggestions that are automatically generated by the SQL diagnostics feature.
    * Before you call this operation, take note of the following items:
    * *   This operation is applicable to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
    * *   If you use an Alibaba Cloud SDK or DAS SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request GetSqlOptimizeAdviceRequest
    * @return GetSqlOptimizeAdviceResponse
   */
  async getSqlOptimizeAdvice(request: GetSqlOptimizeAdviceRequest): Promise<GetSqlOptimizeAdviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSqlOptimizeAdviceWithOptions(request, runtime);
  }

  async getStorageAnalysisResultWithOptions(request: GetStorageAnalysisResultRequest, runtime: $Util.RuntimeOptions): Promise<GetStorageAnalysisResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStorageAnalysisResult",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStorageAnalysisResultResponse>(await this.callApi(params, req, runtime), new GetStorageAnalysisResultResponse({}));
  }

  async getStorageAnalysisResult(request: GetStorageAnalysisResultRequest): Promise<GetStorageAnalysisResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStorageAnalysisResultWithOptions(request, runtime);
  }

  /**
    * *   This operation is applicable only to ApsaraDB for Redis.
    * *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V4.3.3. We recommend that you use the latest version.
    * *   The version of your Database Autonomy Service (DAS) SDK must be V1.0.2 or later.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request KillInstanceAllSessionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return KillInstanceAllSessionResponse
   */
  async killInstanceAllSessionWithOptions(request: KillInstanceAllSessionRequest, runtime: $Util.RuntimeOptions): Promise<KillInstanceAllSessionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "KillInstanceAllSession",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KillInstanceAllSessionResponse>(await this.callApi(params, req, runtime), new KillInstanceAllSessionResponse({}));
  }

  /**
    * *   This operation is applicable only to ApsaraDB for Redis.
    * *   If you use Alibaba Cloud SDK, make sure that the aliyun-sdk-core version is later than V4.3.3. We recommend that you use the latest version.
    * *   The version of your Database Autonomy Service (DAS) SDK must be V1.0.2 or later.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request KillInstanceAllSessionRequest
    * @return KillInstanceAllSessionResponse
   */
  async killInstanceAllSession(request: KillInstanceAllSessionRequest): Promise<KillInstanceAllSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killInstanceAllSessionWithOptions(request, runtime);
  }

  /**
    * You can call this operation to modify the following auto scaling configurations of an instance: **auto scaling for specifications**, **automatic storage expansion**, **automatic bandwidth adjustment**, and **auto scaling for resources**.
    * *   You can modify the configurations of the **auto scaling feature for specifications** for the following types of database instances:
    *     *   PolarDB for MySQL Cluster Edition instances. For more information about the feature and the billing rules, see [Automatic performance scaling](~~169686~~).
    *     *   ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or enhanced SSDs (ESSDs). For more information about the feature and the billing rules, see [Automatic performance scaling](~~169686~~).
    * *   You can modify the configurations of the **automatic storage expansion** feature for the following types of database instances:
    *     *   ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or ESSDs. For more information about the feature and the billing rules, see [Automatic space expansion](~~173345~~).
    * *   You can modify the configurations of the **automatic bandwidth adjustment** feature for the following types of database instances:
    *     *   ApsaraDB for Redis Classic (Local Disk-based) Edition instances. For more information about the feature and the billing rules, see [Automatic bandwidth adjustment](~~216312~~).
    * *   You can modify the configurations of the **auto scaling feature for resources** for the following types of database instances:
    *     *   General-purpose ApsaraDB RDS for MySQL Enterprise Edition instances. For more information about the feature and the billing rules, see [Automatic performance scaling](~~169686~~).
    * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request ModifyAutoScalingConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyAutoScalingConfigResponse
   */
  async modifyAutoScalingConfigWithOptions(request: ModifyAutoScalingConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAutoScalingConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.shard)) {
      query["Shard"] = request.shard;
    }

    if (!Util.isUnset(request.spec)) {
      query["Spec"] = request.spec;
    }

    if (!Util.isUnset(request.storage)) {
      query["Storage"] = request.storage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAutoScalingConfig",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAutoScalingConfigResponse>(await this.callApi(params, req, runtime), new ModifyAutoScalingConfigResponse({}));
  }

  /**
    * You can call this operation to modify the following auto scaling configurations of an instance: **auto scaling for specifications**, **automatic storage expansion**, **automatic bandwidth adjustment**, and **auto scaling for resources**.
    * *   You can modify the configurations of the **auto scaling feature for specifications** for the following types of database instances:
    *     *   PolarDB for MySQL Cluster Edition instances. For more information about the feature and the billing rules, see [Automatic performance scaling](~~169686~~).
    *     *   ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or enhanced SSDs (ESSDs). For more information about the feature and the billing rules, see [Automatic performance scaling](~~169686~~).
    * *   You can modify the configurations of the **automatic storage expansion** feature for the following types of database instances:
    *     *   ApsaraDB RDS for MySQL High-availability Edition instances that use standard SSDs or ESSDs. For more information about the feature and the billing rules, see [Automatic space expansion](~~173345~~).
    * *   You can modify the configurations of the **automatic bandwidth adjustment** feature for the following types of database instances:
    *     *   ApsaraDB for Redis Classic (Local Disk-based) Edition instances. For more information about the feature and the billing rules, see [Automatic bandwidth adjustment](~~216312~~).
    * *   You can modify the configurations of the **auto scaling feature for resources** for the following types of database instances:
    *     *   General-purpose ApsaraDB RDS for MySQL Enterprise Edition instances. For more information about the feature and the billing rules, see [Automatic performance scaling](~~169686~~).
    * *   If you use an Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call API operations of DAS, you must set the region ID to cn-shanghai.
    *
    * @param request ModifyAutoScalingConfigRequest
    * @return ModifyAutoScalingConfigResponse
   */
  async modifyAutoScalingConfig(request: ModifyAutoScalingConfigRequest): Promise<ModifyAutoScalingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAutoScalingConfigWithOptions(request, runtime);
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](~~155068~~).
    *
    * @param request RunCloudBenchTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RunCloudBenchTaskResponse
   */
  async runCloudBenchTaskWithOptions(request: RunCloudBenchTaskRequest, runtime: $Util.RuntimeOptions): Promise<RunCloudBenchTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunCloudBenchTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunCloudBenchTaskResponse>(await this.callApi(params, req, runtime), new RunCloudBenchTaskResponse({}));
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](~~155068~~).
    *
    * @param request RunCloudBenchTaskRequest
    * @return RunCloudBenchTaskResponse
   */
  async runCloudBenchTask(request: RunCloudBenchTaskRequest): Promise<RunCloudBenchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCloudBenchTaskWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   The database instance that you want to manage is connected to DAS.
    *
    * @param request SetEventSubscriptionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetEventSubscriptionResponse
   */
  async setEventSubscriptionWithOptions(request: SetEventSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<SetEventSubscriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.active)) {
      query["Active"] = request.active;
    }

    if (!Util.isUnset(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!Util.isUnset(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.dispatchRule)) {
      query["DispatchRule"] = request.dispatchRule;
    }

    if (!Util.isUnset(request.eventContext)) {
      query["EventContext"] = request.eventContext;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.minInterval)) {
      query["MinInterval"] = request.minInterval;
    }

    if (!Util.isUnset(request.severity)) {
      query["Severity"] = request.severity;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetEventSubscription",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetEventSubscriptionResponse>(await this.callApi(params, req, runtime), new SetEventSubscriptionResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use Alibaba Cloud SDK or Database Autonomy Service (DAS) SDK to call this operation, we recommend that you use the latest version of the SDK.
    * *   If you use an SDK to call operations of DAS, you must set the region ID to cn-shanghai.
    * *   The database instance that you want to manage is connected to DAS.
    *
    * @param request SetEventSubscriptionRequest
    * @return SetEventSubscriptionResponse
   */
  async setEventSubscription(request: SetEventSubscriptionRequest): Promise<SetEventSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setEventSubscriptionWithOptions(request, runtime);
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](~~155068~~).
    *
    * @param request StopCloudBenchTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopCloudBenchTaskResponse
   */
  async stopCloudBenchTaskWithOptions(request: StopCloudBenchTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopCloudBenchTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopCloudBenchTask",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopCloudBenchTaskResponse>(await this.callApi(params, req, runtime), new StopCloudBenchTaskResponse({}));
  }

  /**
    * Database Autonomy Service (DAS) provides the intelligent stress testing feature. This feature helps you check whether your instance needs to be scaled up to effectively handle traffic spikes. For more information, see [Intelligent stress testing](~~155068~~).
    *
    * @param request StopCloudBenchTaskRequest
    * @return StopCloudBenchTaskResponse
   */
  async stopCloudBenchTask(request: StopCloudBenchTaskRequest): Promise<StopCloudBenchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopCloudBenchTaskWithOptions(request, runtime);
  }

  async syncHDMAliyunResourceWithOptions(request: SyncHDMAliyunResourceRequest, runtime: $Util.RuntimeOptions): Promise<SyncHDMAliyunResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.async)) {
      query["Async"] = request.async;
    }

    if (!Util.isUnset(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.waitForModifySecurityIps)) {
      query["WaitForModifySecurityIps"] = request.waitForModifySecurityIps;
    }

    if (!Util.isUnset(request.context)) {
      query["__context"] = request.context;
    }

    if (!Util.isUnset(request.accessKey)) {
      query["accessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.signature)) {
      query["signature"] = request.signature;
    }

    if (!Util.isUnset(request.skipAuth)) {
      query["skipAuth"] = request.skipAuth;
    }

    if (!Util.isUnset(request.timestamp)) {
      query["timestamp"] = request.timestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SyncHDMAliyunResource",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncHDMAliyunResourceResponse>(await this.callApi(params, req, runtime), new SyncHDMAliyunResourceResponse({}));
  }

  async syncHDMAliyunResource(request: SyncHDMAliyunResourceRequest): Promise<SyncHDMAliyunResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncHDMAliyunResourceWithOptions(request, runtime);
  }

  /**
    * >  When an asynchronous call is made, the complete query results are not immediately returned. If the value of **isFinish** is **false** in the response, wait for 1 second and then re-initiate the call. The complete query results are returned until the value of **isFinish** is **true**.
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * *   The database instance is an ApsaraDB RDS for MySQL High-availability Edition instance.
    * *   DAS Professional Edition is enabled for the database instance. You can call the [DescribeInstanceDasPro](~~413866~~) operation to check whether DAS Professional Edition is enabled for a database instance.
    * *   The database instance has four or more cores, and **innodb_file_per_table** is set to **ON**.
    *
    * @param request UpdateAutoResourceOptimizeRulesAsyncRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateAutoResourceOptimizeRulesAsyncResponse
   */
  async updateAutoResourceOptimizeRulesAsyncWithOptions(request: UpdateAutoResourceOptimizeRulesAsyncRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAutoResourceOptimizeRulesAsyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.resultId)) {
      query["ResultId"] = request.resultId;
    }

    if (!Util.isUnset(request.tableFragmentationRatio)) {
      query["TableFragmentationRatio"] = request.tableFragmentationRatio;
    }

    if (!Util.isUnset(request.tableSpaceSize)) {
      query["TableSpaceSize"] = request.tableSpaceSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAutoResourceOptimizeRulesAsync",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAutoResourceOptimizeRulesAsyncResponse>(await this.callApi(params, req, runtime), new UpdateAutoResourceOptimizeRulesAsyncResponse({}));
  }

  /**
    * >  When an asynchronous call is made, the complete query results are not immediately returned. If the value of **isFinish** is **false** in the response, wait for 1 second and then re-initiate the call. The complete query results are returned until the value of **isFinish** is **true**.
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * *   The database instance is an ApsaraDB RDS for MySQL High-availability Edition instance.
    * *   DAS Professional Edition is enabled for the database instance. You can call the [DescribeInstanceDasPro](~~413866~~) operation to check whether DAS Professional Edition is enabled for a database instance.
    * *   The database instance has four or more cores, and **innodb_file_per_table** is set to **ON**.
    *
    * @param request UpdateAutoResourceOptimizeRulesAsyncRequest
    * @return UpdateAutoResourceOptimizeRulesAsyncResponse
   */
  async updateAutoResourceOptimizeRulesAsync(request: UpdateAutoResourceOptimizeRulesAsyncRequest): Promise<UpdateAutoResourceOptimizeRulesAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAutoResourceOptimizeRulesAsyncWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * *   DAS Professional Edition is enabled for the database instance that you want to manage. To enable DAS Professional Edition for a database instance, you can call the [EnableDasPro](~~411645~~) operation.
    * *   The autonomy service is enabled for the database instance. For more information, see [Autonomy center](~~152139~~).
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL High-availability Edition and Enterprise Edition
    *     *   PolarDB for MySQL Cluster Edition and X-Engine Edition
    *
    * @param request UpdateAutoSqlOptimizeStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateAutoSqlOptimizeStatusResponse
   */
  async updateAutoSqlOptimizeStatusWithOptions(request: UpdateAutoSqlOptimizeStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAutoSqlOptimizeStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instances)) {
      query["Instances"] = request.instances;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAutoSqlOptimizeStatus",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAutoSqlOptimizeStatusResponse>(await this.callApi(params, req, runtime), new UpdateAutoSqlOptimizeStatusResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * *   DAS Professional Edition is enabled for the database instance that you want to manage. To enable DAS Professional Edition for a database instance, you can call the [EnableDasPro](~~411645~~) operation.
    * *   The autonomy service is enabled for the database instance. For more information, see [Autonomy center](~~152139~~).
    * *   This operation supports the following database engines:
    *     *   ApsaraDB RDS for MySQL High-availability Edition and Enterprise Edition
    *     *   PolarDB for MySQL Cluster Edition and X-Engine Edition
    *
    * @param request UpdateAutoSqlOptimizeStatusRequest
    * @return UpdateAutoSqlOptimizeStatusResponse
   */
  async updateAutoSqlOptimizeStatus(request: UpdateAutoSqlOptimizeStatusRequest): Promise<UpdateAutoSqlOptimizeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAutoSqlOptimizeStatusWithOptions(request, runtime);
  }

  /**
    * >  When an asynchronous call is made, the complete query results are not immediately returned. If the value of **isFinish** is **false** in the response, wait for 1 second and then re-initiate the call. The complete query results are returned until the value of **isFinish** is **true**.
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * *   Enable Autonomy Service is turned on for the database instance. For more information, see [Autonomy center](~~152139~~).
    * *   The database instance that you want to manage is of one of the following types:
    *     *   ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0.
    *     *   PolarDB for MySQL Cluster Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0, and PolarDB for MySQL X-Engine Edition that runs MySQL 8.0.
    *
    * @param request UpdateAutoThrottleRulesAsyncRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateAutoThrottleRulesAsyncResponse
   */
  async updateAutoThrottleRulesAsyncWithOptions(request: UpdateAutoThrottleRulesAsyncRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAutoThrottleRulesAsyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.abnormalDuration)) {
      query["AbnormalDuration"] = request.abnormalDuration;
    }

    if (!Util.isUnset(request.activeSessions)) {
      query["ActiveSessions"] = request.activeSessions;
    }

    if (!Util.isUnset(request.allowThrottleEndTime)) {
      query["AllowThrottleEndTime"] = request.allowThrottleEndTime;
    }

    if (!Util.isUnset(request.allowThrottleStartTime)) {
      query["AllowThrottleStartTime"] = request.allowThrottleStartTime;
    }

    if (!Util.isUnset(request.autoKillSession)) {
      query["AutoKillSession"] = request.autoKillSession;
    }

    if (!Util.isUnset(request.consoleContext)) {
      query["ConsoleContext"] = request.consoleContext;
    }

    if (!Util.isUnset(request.cpuSessionRelation)) {
      query["CpuSessionRelation"] = request.cpuSessionRelation;
    }

    if (!Util.isUnset(request.cpuUsage)) {
      query["CpuUsage"] = request.cpuUsage;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.maxThrottleTime)) {
      query["MaxThrottleTime"] = request.maxThrottleTime;
    }

    if (!Util.isUnset(request.resultId)) {
      query["ResultId"] = request.resultId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAutoThrottleRulesAsync",
      version: "2020-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAutoThrottleRulesAsyncResponse>(await this.callApi(params, req, runtime), new UpdateAutoThrottleRulesAsyncResponse({}));
  }

  /**
    * >  When an asynchronous call is made, the complete query results are not immediately returned. If the value of **isFinish** is **false** in the response, wait for 1 second and then re-initiate the call. The complete query results are returned until the value of **isFinish** is **true**.
    * Before you call this operation, take note of the following items:
    * *   If you use an SDK to call operations of Database Autonomy Service (DAS), you must set the region ID to cn-shanghai.
    * *   Enable Autonomy Service is turned on for the database instance. For more information, see [Autonomy center](~~152139~~).
    * *   The database instance that you want to manage is of one of the following types:
    *     *   ApsaraDB RDS for MySQL High-availability Edition or Enterprise Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0.
    *     *   PolarDB for MySQL Cluster Edition that runs MySQL 5.6, MySQL 5.7, or MySQL 8.0, and PolarDB for MySQL X-Engine Edition that runs MySQL 8.0.
    *
    * @param request UpdateAutoThrottleRulesAsyncRequest
    * @return UpdateAutoThrottleRulesAsyncResponse
   */
  async updateAutoThrottleRulesAsync(request: UpdateAutoThrottleRulesAsyncRequest): Promise<UpdateAutoThrottleRulesAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAutoThrottleRulesAsyncWithOptions(request, runtime);
  }

}
