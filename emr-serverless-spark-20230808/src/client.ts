// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Artifact extends $tea.Model {
  bizId?: string;
  creator?: number;
  credential?: Credential;
  gmtCreated?: string;
  gmtModified?: string;
  location?: string;
  modifier?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      creator: 'creator',
      credential: 'credential',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      location: 'location',
      modifier: 'modifier',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      creator: 'number',
      credential: Credential,
      gmtCreated: 'string',
      gmtModified: 'string',
      location: 'string',
      modifier: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Category extends $tea.Model {
  bizId?: string;
  creator?: number;
  gmtCreated?: string;
  gmtModified?: string;
  modifier?: number;
  name?: string;
  parentBizId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      creator: 'creator',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      modifier: 'modifier',
      name: 'name',
      parentBizId: 'parentBizId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      creator: 'number',
      gmtCreated: 'string',
      gmtModified: 'string',
      modifier: 'number',
      name: 'string',
      parentBizId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Configuration extends $tea.Model {
  configFileName?: string;
  configItemKey?: string;
  configItemValue?: string;
  static names(): { [key: string]: string } {
    return {
      configFileName: 'configFileName',
      configItemKey: 'configItemKey',
      configItemValue: 'configItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileName: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationOverrides extends $tea.Model {
  configurations?: ConfigurationOverridesConfigurations[];
  static names(): { [key: string]: string } {
    return {
      configurations: 'configurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurations: { 'type': 'array', 'itemType': ConfigurationOverridesConfigurations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Credential extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  securityToken?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'accessId',
      dir: 'dir',
      expire: 'expire',
      host: 'host',
      policy: 'policy',
      securityToken: 'securityToken',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      securityToken: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobDriver extends $tea.Model {
  sparkSubmit?: JobDriverSparkSubmit;
  static names(): { [key: string]: string } {
    return {
      sparkSubmit: 'sparkSubmit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sparkSubmit: JobDriverSparkSubmit,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrincipalAction extends $tea.Model {
  actionArn?: string;
  principalArn?: string;
  static names(): { [key: string]: string } {
    return {
      actionArn: 'actionArn',
      principalArn: 'principalArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionArn: 'string',
      principalArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseVersionImage extends $tea.Model {
  cpuArchitecture?: string;
  imageId?: string;
  runtimeEngineType?: string;
  static names(): { [key: string]: string } {
    return {
      cpuArchitecture: 'cpuArchitecture',
      imageId: 'imageId',
      runtimeEngineType: 'runtimeEngineType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuArchitecture: 'string',
      imageId: 'string',
      runtimeEngineType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLog extends $tea.Model {
  driverStartup?: string;
  driverStdError?: string;
  driverStdOut?: string;
  driverSyslog?: string;
  static names(): { [key: string]: string } {
    return {
      driverStartup: 'driverStartup',
      driverStdError: 'driverStdError',
      driverStdOut: 'driverStdOut',
      driverSyslog: 'driverSyslog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverStartup: 'string',
      driverStdError: 'string',
      driverStdOut: 'string',
      driverSyslog: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SparkConf extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlOutput extends $tea.Model {
  rows?: SqlOutputRows[];
  schema?: SqlOutputSchema;
  static names(): { [key: string]: string } {
    return {
      rows: 'rows',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rows: { 'type': 'array', 'itemType': SqlOutputRows },
      schema: SqlOutputSchema,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Tag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Task extends $tea.Model {
  archives?: string[];
  artifactUrl?: string;
  bizId?: string;
  categoryBizId?: string;
  content?: string;
  creator?: number;
  defaultCatalogId?: string;
  defaultDatabase?: string;
  defaultResourceQueueId?: string;
  defaultSqlComputeId?: string;
  extraArtifactIds?: string[];
  extraSparkSubmitParams?: string;
  files?: string[];
  gmtCreated?: string;
  gmtModified?: string;
  hasChanged?: boolean;
  hasCommited?: boolean;
  jars?: string[];
  lastRunResourceQueueId?: string;
  modifier?: number;
  name?: string;
  pyFiles?: string[];
  sparkArgs?: string;
  sparkConf?: SparkConf[];
  sparkDriverCores?: number;
  sparkDriverMemory?: number;
  sparkEntrypoint?: string;
  sparkExecutorCores?: number;
  sparkExecutorMemory?: number;
  sparkLogLevel?: string;
  sparkLogPath?: string;
  sparkVersion?: string;
  tags?: { [key: string]: string };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      archives: 'archives',
      artifactUrl: 'artifactUrl',
      bizId: 'bizId',
      categoryBizId: 'categoryBizId',
      content: 'content',
      creator: 'creator',
      defaultCatalogId: 'defaultCatalogId',
      defaultDatabase: 'defaultDatabase',
      defaultResourceQueueId: 'defaultResourceQueueId',
      defaultSqlComputeId: 'defaultSqlComputeId',
      extraArtifactIds: 'extraArtifactIds',
      extraSparkSubmitParams: 'extraSparkSubmitParams',
      files: 'files',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      hasChanged: 'hasChanged',
      hasCommited: 'hasCommited',
      jars: 'jars',
      lastRunResourceQueueId: 'lastRunResourceQueueId',
      modifier: 'modifier',
      name: 'name',
      pyFiles: 'pyFiles',
      sparkArgs: 'sparkArgs',
      sparkConf: 'sparkConf',
      sparkDriverCores: 'sparkDriverCores',
      sparkDriverMemory: 'sparkDriverMemory',
      sparkEntrypoint: 'sparkEntrypoint',
      sparkExecutorCores: 'sparkExecutorCores',
      sparkExecutorMemory: 'sparkExecutorMemory',
      sparkLogLevel: 'sparkLogLevel',
      sparkLogPath: 'sparkLogPath',
      sparkVersion: 'sparkVersion',
      tags: 'tags',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archives: { 'type': 'array', 'itemType': 'string' },
      artifactUrl: 'string',
      bizId: 'string',
      categoryBizId: 'string',
      content: 'string',
      creator: 'number',
      defaultCatalogId: 'string',
      defaultDatabase: 'string',
      defaultResourceQueueId: 'string',
      defaultSqlComputeId: 'string',
      extraArtifactIds: { 'type': 'array', 'itemType': 'string' },
      extraSparkSubmitParams: 'string',
      files: { 'type': 'array', 'itemType': 'string' },
      gmtCreated: 'string',
      gmtModified: 'string',
      hasChanged: 'boolean',
      hasCommited: 'boolean',
      jars: { 'type': 'array', 'itemType': 'string' },
      lastRunResourceQueueId: 'string',
      modifier: 'number',
      name: 'string',
      pyFiles: { 'type': 'array', 'itemType': 'string' },
      sparkArgs: 'string',
      sparkConf: { 'type': 'array', 'itemType': SparkConf },
      sparkDriverCores: 'number',
      sparkDriverMemory: 'number',
      sparkEntrypoint: 'string',
      sparkExecutorCores: 'number',
      sparkExecutorMemory: 'number',
      sparkLogLevel: 'string',
      sparkLogPath: 'string',
      sparkVersion: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskInstance extends $tea.Model {
  bizId?: string;
  creator?: number;
  fenixRunId?: string;
  gmtCreated?: string;
  taskBizId?: string;
  taskInfo?: Task;
  taskStatus?: string;
  workspaceBizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      creator: 'creator',
      fenixRunId: 'fenixRunId',
      gmtCreated: 'gmtCreated',
      taskBizId: 'taskBizId',
      taskInfo: 'taskInfo',
      taskStatus: 'taskStatus',
      workspaceBizId: 'workspaceBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      creator: 'number',
      fenixRunId: 'string',
      gmtCreated: 'string',
      taskBizId: 'string',
      taskInfo: Task,
      taskStatus: 'string',
      workspaceBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskSnapshot extends $tea.Model {
  bizId?: string;
  commiter?: number;
  gmtCreated?: string;
  item?: Task;
  message?: string;
  taskBizId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      commiter: 'commiter',
      gmtCreated: 'gmtCreated',
      item: 'item',
      message: 'message',
      taskBizId: 'taskBizId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      commiter: 'number',
      gmtCreated: 'string',
      item: Task,
      message: 'string',
      taskBizId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Template extends $tea.Model {
  creator?: number;
  gmtCreated?: string;
  gmtModified?: string;
  modifier?: number;
  sparkConf?: SparkConf[];
  sparkDriverCores?: number;
  sparkDriverMemory?: number;
  sparkExecutorCores?: number;
  sparkExecutorMemory?: number;
  sparkLogLevel?: string;
  sparkLogPath?: string;
  sparkVersion?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      modifier: 'modifier',
      sparkConf: 'sparkConf',
      sparkDriverCores: 'sparkDriverCores',
      sparkDriverMemory: 'sparkDriverMemory',
      sparkExecutorCores: 'sparkExecutorCores',
      sparkExecutorMemory: 'sparkExecutorMemory',
      sparkLogLevel: 'sparkLogLevel',
      sparkLogPath: 'sparkLogPath',
      sparkVersion: 'sparkVersion',
      templateType: 'templateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'number',
      gmtCreated: 'string',
      gmtModified: 'string',
      modifier: 'number',
      sparkConf: { 'type': 'array', 'itemType': SparkConf },
      sparkDriverCores: 'number',
      sparkDriverMemory: 'number',
      sparkExecutorCores: 'number',
      sparkExecutorMemory: 'number',
      sparkLogLevel: 'string',
      sparkLogPath: 'string',
      sparkVersion: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TimeRange extends $tea.Model {
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobRunRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobRunResponseBody extends $tea.Model {
  jobRunId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobRunId: 'jobRunId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobRunId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelJobRunResponseBody;
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
      body: CancelJobRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunResponseBody extends $tea.Model {
  jobRun?: GetJobRunResponseBodyJobRun;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobRun: 'jobRun',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobRun: GetJobRunResponseBodyJobRun,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobRunResponseBody;
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
      body: GetJobRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsRequest extends $tea.Model {
  creator?: string;
  endTime?: ListJobRunsRequestEndTime;
  jobRunId?: string;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  regionId?: string;
  resourceQueueId?: string;
  startTime?: ListJobRunsRequestStartTime;
  states?: string[];
  tags?: ListJobRunsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      endTime: 'endTime',
      jobRunId: 'jobRunId',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      regionId: 'regionId',
      resourceQueueId: 'resourceQueueId',
      startTime: 'startTime',
      states: 'states',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      endTime: ListJobRunsRequestEndTime,
      jobRunId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceQueueId: 'string',
      startTime: ListJobRunsRequestStartTime,
      states: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListJobRunsRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsShrinkRequest extends $tea.Model {
  creator?: string;
  endTimeShrink?: string;
  jobRunId?: string;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  regionId?: string;
  resourceQueueId?: string;
  startTimeShrink?: string;
  statesShrink?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      endTimeShrink: 'endTime',
      jobRunId: 'jobRunId',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      regionId: 'regionId',
      resourceQueueId: 'resourceQueueId',
      startTimeShrink: 'startTime',
      statesShrink: 'states',
      tagsShrink: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      endTimeShrink: 'string',
      jobRunId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceQueueId: 'string',
      startTimeShrink: 'string',
      statesShrink: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsResponseBody extends $tea.Model {
  jobRuns?: ListJobRunsResponseBodyJobRuns[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobRuns: 'jobRuns',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobRuns: { 'type': 'array', 'itemType': ListJobRunsResponseBodyJobRuns },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobRunsResponseBody;
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
      body: ListJobRunsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRunRequest extends $tea.Model {
  clientToken?: string;
  codeType?: string;
  configurationOverrides?: StartJobRunRequestConfigurationOverrides;
  executionTimeoutSeconds?: number;
  jobDriver?: JobDriver;
  jobId?: string;
  name?: string;
  releaseVersion?: string;
  resourceQueueId?: string;
  tags?: Tag[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      codeType: 'codeType',
      configurationOverrides: 'configurationOverrides',
      executionTimeoutSeconds: 'executionTimeoutSeconds',
      jobDriver: 'jobDriver',
      jobId: 'jobId',
      name: 'name',
      releaseVersion: 'releaseVersion',
      resourceQueueId: 'resourceQueueId',
      tags: 'tags',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      codeType: 'string',
      configurationOverrides: StartJobRunRequestConfigurationOverrides,
      executionTimeoutSeconds: 'number',
      jobDriver: JobDriver,
      jobId: 'string',
      name: 'string',
      releaseVersion: 'string',
      resourceQueueId: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRunResponseBody extends $tea.Model {
  jobRunId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobRunId: 'jobRunId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobRunId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartJobRunResponseBody;
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
      body: StartJobRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationOverridesConfigurations extends $tea.Model {
  configFileName?: string;
  configItemKey?: string;
  configItemValue?: string;
  static names(): { [key: string]: string } {
    return {
      configFileName: 'configFileName',
      configItemKey: 'configItemKey',
      configItemValue: 'configItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileName: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobDriverSparkSubmit extends $tea.Model {
  entryPoint?: string;
  entryPointArguments?: string[];
  sparkSubmitParameters?: string;
  static names(): { [key: string]: string } {
    return {
      entryPoint: 'entryPoint',
      entryPointArguments: 'entryPointArguments',
      sparkSubmitParameters: 'sparkSubmitParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryPoint: 'string',
      entryPointArguments: { 'type': 'array', 'itemType': 'string' },
      sparkSubmitParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlOutputRows extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlOutputSchemaFields extends $tea.Model {
  name?: string;
  nullable?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      nullable: 'nullable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nullable: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlOutputSchema extends $tea.Model {
  fields?: SqlOutputSchemaFields[];
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': SqlOutputSchemaFields },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunResponseBodyJobRunConfigurationOverrides extends $tea.Model {
  configurations?: Configuration[];
  static names(): { [key: string]: string } {
    return {
      configurations: 'configurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurations: { 'type': 'array', 'itemType': Configuration },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunResponseBodyJobRunStateChangeReason extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunResponseBodyJobRun extends $tea.Model {
  codeType?: string;
  configurationOverrides?: GetJobRunResponseBodyJobRunConfigurationOverrides;
  endTime?: number;
  executionTimeoutSeconds?: number;
  jobDriver?: JobDriver;
  jobRunId?: string;
  log?: RunLog;
  name?: string;
  releaseVersion?: string;
  resourceOwnerId?: string;
  resourceQueueId?: string;
  state?: string;
  stateChangeReason?: GetJobRunResponseBodyJobRunStateChangeReason;
  submitTime?: number;
  tags?: Tag[];
  webUI?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      codeType: 'codeType',
      configurationOverrides: 'configurationOverrides',
      endTime: 'endTime',
      executionTimeoutSeconds: 'executionTimeoutSeconds',
      jobDriver: 'jobDriver',
      jobRunId: 'jobRunId',
      log: 'log',
      name: 'name',
      releaseVersion: 'releaseVersion',
      resourceOwnerId: 'resourceOwnerId',
      resourceQueueId: 'resourceQueueId',
      state: 'state',
      stateChangeReason: 'stateChangeReason',
      submitTime: 'submitTime',
      tags: 'tags',
      webUI: 'webUI',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeType: 'string',
      configurationOverrides: GetJobRunResponseBodyJobRunConfigurationOverrides,
      endTime: 'number',
      executionTimeoutSeconds: 'number',
      jobDriver: JobDriver,
      jobRunId: 'string',
      log: RunLog,
      name: 'string',
      releaseVersion: 'string',
      resourceOwnerId: 'string',
      resourceQueueId: 'string',
      state: 'string',
      stateChangeReason: GetJobRunResponseBodyJobRunStateChangeReason,
      submitTime: 'number',
      tags: { 'type': 'array', 'itemType': Tag },
      webUI: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsRequestEndTime extends $tea.Model {
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsRequestStartTime extends $tea.Model {
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsRequestTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsResponseBodyJobRunsConfigurationOverrides extends $tea.Model {
  configurations?: Configuration[];
  static names(): { [key: string]: string } {
    return {
      configurations: 'configurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurations: { 'type': 'array', 'itemType': Configuration },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsResponseBodyJobRunsStateChangeReason extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsResponseBodyJobRuns extends $tea.Model {
  codeType?: string;
  configurationOverrides?: ListJobRunsResponseBodyJobRunsConfigurationOverrides;
  creator?: string;
  endTime?: number;
  executionTimeoutSeconds?: number;
  jobDriver?: JobDriver;
  jobRunId?: string;
  log?: RunLog;
  name?: string;
  releaseVersion?: string;
  state?: string;
  stateChangeReason?: ListJobRunsResponseBodyJobRunsStateChangeReason;
  submitTime?: number;
  tags?: Tag[];
  webUI?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      codeType: 'codeType',
      configurationOverrides: 'configurationOverrides',
      creator: 'creator',
      endTime: 'endTime',
      executionTimeoutSeconds: 'executionTimeoutSeconds',
      jobDriver: 'jobDriver',
      jobRunId: 'jobRunId',
      log: 'log',
      name: 'name',
      releaseVersion: 'releaseVersion',
      state: 'state',
      stateChangeReason: 'stateChangeReason',
      submitTime: 'submitTime',
      tags: 'tags',
      webUI: 'webUI',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeType: 'string',
      configurationOverrides: ListJobRunsResponseBodyJobRunsConfigurationOverrides,
      creator: 'string',
      endTime: 'number',
      executionTimeoutSeconds: 'number',
      jobDriver: JobDriver,
      jobRunId: 'string',
      log: RunLog,
      name: 'string',
      releaseVersion: 'string',
      state: 'string',
      stateChangeReason: ListJobRunsResponseBodyJobRunsStateChangeReason,
      submitTime: 'number',
      tags: { 'type': 'array', 'itemType': Tag },
      webUI: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRunRequestConfigurationOverridesConfigurations extends $tea.Model {
  configFileName?: string;
  configItemKey?: string;
  configItemValue?: string;
  static names(): { [key: string]: string } {
    return {
      configFileName: 'configFileName',
      configItemKey: 'configItemKey',
      configItemValue: 'configItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileName: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRunRequestConfigurationOverrides extends $tea.Model {
  configurations?: StartJobRunRequestConfigurationOverridesConfigurations[];
  static names(): { [key: string]: string } {
    return {
      configurations: 'configurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurations: { 'type': 'array', 'itemType': StartJobRunRequestConfigurationOverridesConfigurations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("emr-serverless-spark", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary 取消jobRun作业
   *
   * @param request CancelJobRunRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelJobRunResponse
   */
  async cancelJobRunWithOptions(workspaceId: string, jobRunId: string, request: CancelJobRunRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelJobRunResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelJobRun",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(workspaceId)}/jobRuns/${OpenApiUtil.getEncodeParam(jobRunId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelJobRunResponse>(await this.callApi(params, req, runtime), new CancelJobRunResponse({}));
  }

  /**
   * @summary 取消jobRun作业
   *
   * @param request CancelJobRunRequest
   * @return CancelJobRunResponse
   */
  async cancelJobRun(workspaceId: string, jobRunId: string, request: CancelJobRunRequest): Promise<CancelJobRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelJobRunWithOptions(workspaceId, jobRunId, request, headers, runtime);
  }

  /**
   * @summary 获取任务
   *
   * @param request GetJobRunRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetJobRunResponse
   */
  async getJobRunWithOptions(workspaceId: string, jobRunId: string, request: GetJobRunRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetJobRunResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJobRun",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(workspaceId)}/jobRuns/${OpenApiUtil.getEncodeParam(jobRunId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetJobRunResponse>(await this.callApi(params, req, runtime), new GetJobRunResponse({}));
  }

  /**
   * @summary 获取任务
   *
   * @param request GetJobRunRequest
   * @return GetJobRunResponse
   */
  async getJobRun(workspaceId: string, jobRunId: string, request: GetJobRunRequest): Promise<GetJobRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobRunWithOptions(workspaceId, jobRunId, request, headers, runtime);
  }

  /**
   * @summary 查询run列表
   *
   * @param tmpReq ListJobRunsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListJobRunsResponse
   */
  async listJobRunsWithOptions(workspaceId: string, tmpReq: ListJobRunsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListJobRunsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListJobRunsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.endTime)) {
      request.endTimeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.endTime, "endTime", "json");
    }

    if (!Util.isUnset(tmpReq.startTime)) {
      request.startTimeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startTime, "startTime", "json");
    }

    if (!Util.isUnset(tmpReq.states)) {
      request.statesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.states, "states", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.creator)) {
      query["creator"] = request.creator;
    }

    if (!Util.isUnset(request.endTimeShrink)) {
      query["endTime"] = request.endTimeShrink;
    }

    if (!Util.isUnset(request.jobRunId)) {
      query["jobRunId"] = request.jobRunId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceQueueId)) {
      query["resourceQueueId"] = request.resourceQueueId;
    }

    if (!Util.isUnset(request.startTimeShrink)) {
      query["startTime"] = request.startTimeShrink;
    }

    if (!Util.isUnset(request.statesShrink)) {
      query["states"] = request.statesShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobRuns",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(workspaceId)}/jobRuns`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListJobRunsResponse>(await this.callApi(params, req, runtime), new ListJobRunsResponse({}));
  }

  /**
   * @summary 查询run列表
   *
   * @param request ListJobRunsRequest
   * @return ListJobRunsResponse
   */
  async listJobRuns(workspaceId: string, request: ListJobRunsRequest): Promise<ListJobRunsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobRunsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * @summary 启动作业
   *
   * @param request StartJobRunRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartJobRunResponse
   */
  async startJobRunWithOptions(workspaceId: string, request: StartJobRunRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartJobRunResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.codeType)) {
      body["codeType"] = request.codeType;
    }

    if (!Util.isUnset(request.configurationOverrides)) {
      body["configurationOverrides"] = request.configurationOverrides;
    }

    if (!Util.isUnset(request.executionTimeoutSeconds)) {
      body["executionTimeoutSeconds"] = request.executionTimeoutSeconds;
    }

    if (!Util.isUnset(request.jobDriver)) {
      body["jobDriver"] = request.jobDriver;
    }

    if (!Util.isUnset(request.jobId)) {
      body["jobId"] = request.jobId;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.releaseVersion)) {
      body["releaseVersion"] = request.releaseVersion;
    }

    if (!Util.isUnset(request.resourceQueueId)) {
      body["resourceQueueId"] = request.resourceQueueId;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartJobRun",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(workspaceId)}/jobRuns`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartJobRunResponse>(await this.callApi(params, req, runtime), new StartJobRunResponse({}));
  }

  /**
   * @summary 启动作业
   *
   * @param request StartJobRunRequest
   * @return StartJobRunResponse
   */
  async startJobRun(workspaceId: string, request: StartJobRunRequest): Promise<StartJobRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startJobRunWithOptions(workspaceId, request, headers, runtime);
  }

}
