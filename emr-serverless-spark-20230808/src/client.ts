// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Artifact extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizId?: string;
  catagoryBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  creator?: number;
  credential?: Credential;
  fullPath?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  gmtCreated?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtModified?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  location?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modifier?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      catagoryBizId: 'catagoryBizId',
      creator: 'creator',
      credential: 'credential',
      fullPath: 'fullPath',
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
      catagoryBizId: 'string',
      creator: 'number',
      credential: Credential,
      fullPath: { 'type': 'array', 'itemType': 'string' },
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
  /**
   * @remarks
   * This parameter is required.
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  creator?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtCreated?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtModified?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modifier?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  parentBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  accessId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dir?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  expire?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  host?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  policy?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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

export class KerberosConf extends $tea.Model {
  creator?: string;
  enabled?: boolean;
  gmtCreated?: string;
  gmtModified?: string;
  kerberosConfId?: string;
  keytabs?: string[];
  krb5Conf?: string;
  name?: string;
  networkServiceId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      enabled: 'enabled',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      kerberosConfId: 'kerberosConfId',
      keytabs: 'keytabs',
      krb5Conf: 'krb5Conf',
      name: 'name',
      networkServiceId: 'networkServiceId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      enabled: 'boolean',
      gmtCreated: 'string',
      gmtModified: 'string',
      kerberosConfId: 'string',
      keytabs: { 'type': 'array', 'itemType': 'string' },
      krb5Conf: 'string',
      name: 'string',
      networkServiceId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrincipalAction extends $tea.Model {
  /**
   * @example
   * acs:emr::workspaceId:action/create_queue
   */
  actionArn?: string;
  /**
   * @example
   * acs:emr::workspaceId:user/237593691541622267
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * 标签key值。
   * 
   * @example
   * workflowId
   */
  key?: string;
  /**
   * @remarks
   * 标签key值。
   * 
   * @example
   * wf-123test
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  bizId?: string;
  categoryBizId?: string;
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  creator?: number;
  credential?: TaskCredential;
  defaultCatalogId?: string;
  defaultDatabase?: string;
  defaultResourceQueueId?: string;
  defaultSqlComputeId?: string;
  deploymentId?: string;
  environmentId?: string;
  extraArtifactIds?: string[];
  extraSparkSubmitParams?: string;
  files?: string[];
  fusion?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtCreated?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtModified?: string;
  hasChanged?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  hasCommited?: boolean;
  isStreaming?: boolean;
  jars?: string[];
  lastRunResourceQueueId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modifier?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  pyFiles?: string[];
  /**
   * @example
   * 100
   */
  sparkArgs?: string;
  sparkConf?: SparkConf[];
  /**
   * @remarks
   * This parameter is required.
   */
  sparkDriverCores?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkDriverMemory?: number;
  sparkEntrypoint?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkExecutorCores?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkExecutorMemory?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkLogLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkLogPath?: string;
  sparkSubmitClause?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkVersion?: string;
  tags?: { [key: string]: string };
  timeout?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      archives: 'archives',
      artifactUrl: 'artifactUrl',
      bizId: 'bizId',
      categoryBizId: 'categoryBizId',
      content: 'content',
      creator: 'creator',
      credential: 'credential',
      defaultCatalogId: 'defaultCatalogId',
      defaultDatabase: 'defaultDatabase',
      defaultResourceQueueId: 'defaultResourceQueueId',
      defaultSqlComputeId: 'defaultSqlComputeId',
      deploymentId: 'deploymentId',
      environmentId: 'environmentId',
      extraArtifactIds: 'extraArtifactIds',
      extraSparkSubmitParams: 'extraSparkSubmitParams',
      files: 'files',
      fusion: 'fusion',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      hasChanged: 'hasChanged',
      hasCommited: 'hasCommited',
      isStreaming: 'isStreaming',
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
      sparkSubmitClause: 'sparkSubmitClause',
      sparkVersion: 'sparkVersion',
      tags: 'tags',
      timeout: 'timeout',
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
      credential: TaskCredential,
      defaultCatalogId: 'string',
      defaultDatabase: 'string',
      defaultResourceQueueId: 'string',
      defaultSqlComputeId: 'string',
      deploymentId: 'string',
      environmentId: 'string',
      extraArtifactIds: { 'type': 'array', 'itemType': 'string' },
      extraSparkSubmitParams: 'string',
      files: { 'type': 'array', 'itemType': 'string' },
      fusion: 'boolean',
      gmtCreated: 'string',
      gmtModified: 'string',
      hasChanged: 'boolean',
      hasCommited: 'boolean',
      isStreaming: 'boolean',
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
      sparkSubmitClause: 'string',
      sparkVersion: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      timeout: 'number',
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
  /**
   * @remarks
   * This parameter is required.
   */
  creator?: number;
  displaySparkVersion?: string;
  fusion?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtCreated?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtModified?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modifier?: number;
  sparkConf?: SparkConf[];
  /**
   * @remarks
   * This parameter is required.
   */
  sparkDriverCores?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkDriverMemory?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkExecutorCores?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkExecutorMemory?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkLogLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkLogPath?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkVersion?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      displaySparkVersion: 'displaySparkVersion',
      fusion: 'fusion',
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
      displaySparkVersion: 'string',
      fusion: 'boolean',
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
  /**
   * @remarks
   * 时间范围结束时间。
   * 
   * @example
   * 1688370894339
   */
  endTime?: number;
  /**
   * @remarks
   * 时间范围开始时间。
   * 
   * @example
   * 1688370894339
   */
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

export class AddMembersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  memberArns?: string[];
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * w-975bcfda9625****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      memberArns: 'memberArns',
      workspaceId: 'workspaceId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberArns: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMembersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class AddMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddMembersResponseBody;
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
      body: AddMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobRunRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * jr-1a2bc3
   */
  jobRunId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
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

export class CreateProcessDefinitionWithScheduleRequest extends $tea.Model {
  /**
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ods batch workflow
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PARALLEL
   */
  executionType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ods_batch_workflow
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SS
   */
  productNamespace?: string;
  /**
   * @example
   * true
   */
  publish?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * root_queue
   */
  resourceQueue?: string;
  /**
   * @example
   * 1
   */
  retryTimes?: number;
  /**
   * @example
   * 113***************
   */
  runAs?: string;
  schedule?: CreateProcessDefinitionWithScheduleRequestSchedule;
  tags?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   */
  taskDefinitionJson?: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJson[];
  /**
   * @example
   * 1
   */
  taskParallelism?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskRelationJson?: CreateProcessDefinitionWithScheduleRequestTaskRelationJson[];
  /**
   * @example
   * 60
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      alertEmailAddress: 'alertEmailAddress',
      description: 'description',
      executionType: 'executionType',
      name: 'name',
      productNamespace: 'productNamespace',
      publish: 'publish',
      regionId: 'regionId',
      resourceQueue: 'resourceQueue',
      retryTimes: 'retryTimes',
      runAs: 'runAs',
      schedule: 'schedule',
      tags: 'tags',
      taskDefinitionJson: 'taskDefinitionJson',
      taskParallelism: 'taskParallelism',
      taskRelationJson: 'taskRelationJson',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEmailAddress: 'string',
      description: 'string',
      executionType: 'string',
      name: 'string',
      productNamespace: 'string',
      publish: 'boolean',
      regionId: 'string',
      resourceQueue: 'string',
      retryTimes: 'number',
      runAs: 'string',
      schedule: CreateProcessDefinitionWithScheduleRequestSchedule,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      taskDefinitionJson: { 'type': 'array', 'itemType': CreateProcessDefinitionWithScheduleRequestTaskDefinitionJson },
      taskParallelism: 'number',
      taskRelationJson: { 'type': 'array', 'itemType': CreateProcessDefinitionWithScheduleRequestTaskRelationJson },
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionWithScheduleShrinkRequest extends $tea.Model {
  /**
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ods batch workflow
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PARALLEL
   */
  executionType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ods_batch_workflow
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SS
   */
  productNamespace?: string;
  /**
   * @example
   * true
   */
  publish?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * root_queue
   */
  resourceQueue?: string;
  /**
   * @example
   * 1
   */
  retryTimes?: number;
  /**
   * @example
   * 113***************
   */
  runAs?: string;
  scheduleShrink?: string;
  tagsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskDefinitionJsonShrink?: string;
  /**
   * @example
   * 1
   */
  taskParallelism?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskRelationJsonShrink?: string;
  /**
   * @example
   * 60
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      alertEmailAddress: 'alertEmailAddress',
      description: 'description',
      executionType: 'executionType',
      name: 'name',
      productNamespace: 'productNamespace',
      publish: 'publish',
      regionId: 'regionId',
      resourceQueue: 'resourceQueue',
      retryTimes: 'retryTimes',
      runAs: 'runAs',
      scheduleShrink: 'schedule',
      tagsShrink: 'tags',
      taskDefinitionJsonShrink: 'taskDefinitionJson',
      taskParallelism: 'taskParallelism',
      taskRelationJsonShrink: 'taskRelationJson',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEmailAddress: 'string',
      description: 'string',
      executionType: 'string',
      name: 'string',
      productNamespace: 'string',
      publish: 'boolean',
      regionId: 'string',
      resourceQueue: 'string',
      retryTimes: 'number',
      runAs: 'string',
      scheduleShrink: 'string',
      tagsShrink: 'string',
      taskDefinitionJsonShrink: 'string',
      taskParallelism: 'number',
      taskRelationJsonShrink: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionWithScheduleResponseBody extends $tea.Model {
  /**
   * @example
   * 1400009
   */
  code?: number;
  data?: CreateProcessDefinitionWithScheduleResponseBodyData;
  /**
   * @example
   * false
   */
  failed?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * No permission for resource action
   */
  msg?: string;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      failed: 'failed',
      httpStatusCode: 'httpStatusCode',
      msg: 'msg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateProcessDefinitionWithScheduleResponseBodyData,
      failed: 'string',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionWithScheduleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProcessDefinitionWithScheduleResponseBody;
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
      body: CreateProcessDefinitionWithScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlStatementRequest extends $tea.Model {
  /**
   * @remarks
   * The SQL code. You can specify one or more SQL statements.
   * 
   * @example
   * SHOW TABLES
   */
  codeContent?: string;
  /**
   * @remarks
   * The default Data Lake Formation (DLF) catalog ID.
   * 
   * @example
   * default_catalog
   */
  defaultCatalog?: string;
  /**
   * @remarks
   * The name of the default database.
   * 
   * @example
   * default
   */
  defaultDatabase?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 10000.
   * 
   * @example
   * 1000
   */
  limit?: number;
  /**
   * @remarks
   * The SQL session ID. You can create an SQL session in the workspace created in EMR Serverless Spark.
   * 
   * @example
   * sc-dfahdfjafhajd****
   */
  sqlComputeId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      codeContent: 'codeContent',
      defaultCatalog: 'defaultCatalog',
      defaultDatabase: 'defaultDatabase',
      limit: 'limit',
      sqlComputeId: 'sqlComputeId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeContent: 'string',
      defaultCatalog: 'string',
      defaultDatabase: 'string',
      limit: 'number',
      sqlComputeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlStatementResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateSqlStatementResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateSqlStatementResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlStatementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSqlStatementResponseBody;
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
      body: CreateSqlStatementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The details of the job.
   */
  jobRun?: GetJobRunResponseBodyJobRun;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
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

export class GetSessionClusterRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
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

export class GetSessionClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The session.
   */
  sessionCluster?: GetSessionClusterResponseBodySessionCluster;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      sessionCluster: 'sessionCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessionCluster: GetSessionClusterResponseBodySessionCluster,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSessionClusterResponseBody;
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
      body: GetSessionClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlStatementRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
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

export class GetSqlStatementResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetSqlStatementResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSqlStatementResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlStatementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSqlStatementResponseBody;
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
      body: GetSqlStatementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The template type.
   * 
   * *   TASK
   * *   SESSION
   * 
   * @example
   * TASK
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      templateType: 'templateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: Template;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * 040003
   */
  errorCode?: string;
  /**
   * @remarks
   * *   If the value of success was false, an error message was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * InvalidUser.NotFound
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 484D9DDA-300D-525E-AF7A-0CCCA5C64A7A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Template,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTemplateResponseBody;
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
      body: GetTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantRoleToUsersRequest extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * @example
   * acs:emr::w-975bcfda9625****:role/Owner
   */
  roleArn?: string;
  /**
   * @remarks
   * The user ARNs.
   */
  userArns?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'roleArn',
      userArns: 'userArns',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      userArns: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantRoleToUsersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class GrantRoleToUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantRoleToUsersResponseBody;
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
      body: GrantRoleToUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the user who created the job.
   * 
   * @example
   * 1509789347011222
   */
  creator?: string;
  /**
   * @remarks
   * The range of end time.
   */
  endTime?: ListJobRunsRequestEndTime;
  jobRunDeploymentId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * j-xxx
   */
  jobRunId?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * emr-spark-demo-job
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the resource queue on which the Spark jobs run.
   * 
   * @example
   * dev_queue
   */
  resourceQueueId?: string;
  /**
   * @remarks
   * The range of start time.
   */
  startTime?: ListJobRunsRequestStartTime;
  /**
   * @remarks
   * The job states.
   * 
   * @example
   * ["Running","Submitted"]
   */
  states?: string[];
  /**
   * @remarks
   * The tags of the job.
   */
  tags?: ListJobRunsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      endTime: 'endTime',
      jobRunDeploymentId: 'jobRunDeploymentId',
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
      jobRunDeploymentId: 'string',
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
  /**
   * @remarks
   * The ID of the user who created the job.
   * 
   * @example
   * 1509789347011222
   */
  creator?: string;
  /**
   * @remarks
   * The range of end time.
   */
  endTimeShrink?: string;
  jobRunDeploymentId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * j-xxx
   */
  jobRunId?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * emr-spark-demo-job
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the resource queue on which the Spark jobs run.
   * 
   * @example
   * dev_queue
   */
  resourceQueueId?: string;
  /**
   * @remarks
   * The range of start time.
   */
  startTimeShrink?: string;
  /**
   * @remarks
   * The job states.
   * 
   * @example
   * ["Running","Submitted"]
   */
  statesShrink?: string;
  /**
   * @remarks
   * The tags of the job.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      endTimeShrink: 'endTime',
      jobRunDeploymentId: 'jobRunDeploymentId',
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
      jobRunDeploymentId: 'string',
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
  /**
   * @remarks
   * The Spark jobs.
   */
  jobRuns?: ListJobRunsResponseBodyJobRuns[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
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

export class ListLogContentsRequest extends $tea.Model {
  fileName?: string;
  /**
   * @example
   * 9999
   */
  length?: number;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      length: 'length',
      offset: 'offset',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      length: 'number',
      offset: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogContentsResponseBody extends $tea.Model {
  listLogContent?: ListLogContentsResponseBodyListLogContent;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listLogContent: 'listLogContent',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listLogContent: ListLogContentsResponseBodyListLogContent,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogContentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLogContentsResponseBody;
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
      body: ListLogContentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReleaseVersionsRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the version.
   * 
   * Valid values:
   * 
   * *   stable
   * *   Beta
   * 
   * @example
   * stable
   */
  releaseType?: string;
  /**
   * @remarks
   * The version of EMR Serverless Spark.
   * 
   * @example
   * esr-2.1 (Spark 3.3.1, Scala 2.12, Java Runtime)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The status of the version.
   * 
   * Valid values:
   * 
   * *   ONLINE
   * *   OFFLINE
   * 
   * @example
   * ONLINE
   */
  releaseVersionStatus?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-d2d82aa09155****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      releaseType: 'releaseType',
      releaseVersion: 'releaseVersion',
      releaseVersionStatus: 'releaseVersionStatus',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      releaseType: 'string',
      releaseVersion: 'string',
      releaseVersionStatus: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReleaseVersionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The versions.
   */
  releaseVersions?: ListReleaseVersionsResponseBodyReleaseVersions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      releaseVersions: 'releaseVersions',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      releaseVersions: { 'type': 'array', 'itemType': ListReleaseVersionsResponseBodyReleaseVersions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReleaseVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListReleaseVersionsResponseBody;
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
      body: ListReleaseVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionClustersRequest extends $tea.Model {
  /**
   * @remarks
   * The session type.
   * 
   * Valid values:
   * 
   * *   NOTEBOOK
   * *   THRIFT
   * *   SQL
   * 
   * @example
   * SQL
   */
  kind?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the queue.
   * 
   * @example
   * root
   */
  queueName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * emr-spark-demo-job
   */
  sessionClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      kind: 'kind',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      queueName: 'queueName',
      regionId: 'regionId',
      sessionClusterId: 'sessionClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kind: 'string',
      maxResults: 'number',
      nextToken: 'string',
      queueName: 'string',
      regionId: 'string',
      sessionClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionClustersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The sessions.
   */
  sessionClusters?: ListSessionClustersResponseBodySessionClusters[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      sessionClusters: 'sessionClusters',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      sessionClusters: { 'type': 'array', 'itemType': ListSessionClustersResponseBodySessionClusters },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionClustersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSessionClustersResponseBody;
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
      body: ListSessionClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceQueuesRequest extends $tea.Model {
  /**
   * @remarks
   * The environment type.
   * 
   * Valid values:
   * 
   * *   dev
   * *   production
   * 
   * @example
   * production
   */
  environment?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'environment',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceQueuesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of queues.
   */
  queues?: ListWorkspaceQueuesResponseBodyQueues[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      queues: 'queues',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      queues: { 'type': 'array', 'itemType': ListWorkspaceQueuesResponseBodyQueues },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceQueuesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkspaceQueuesResponseBody;
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
      body: ListWorkspaceQueuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesRequest extends $tea.Model {
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Fuzzy match is supported.
   * 
   * @example
   * test_workspace
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The workspace status.
   * 
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      regionId: 'regionId',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  /**
   * @remarks
   * The workspaces.
   */
  workspaces?: ListWorkspacesResponseBodyWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
      workspaces: 'workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      workspaces: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyWorkspaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkspacesResponseBody;
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
      body: ListWorkspacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRunRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 8e6aae2810c8f67229ca70bb31cd6028
   */
  clientToken?: string;
  /**
   * @remarks
   * The code type of the job. Valid values:
   * 
   * *   SQL
   * *   JAR
   * *   PYTHON
   * 
   * @example
   * SQL
   */
  codeType?: string;
  /**
   * @remarks
   * The advanced configurations of Spark.
   */
  configurationOverrides?: StartJobRunRequestConfigurationOverrides;
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The timeout period of the job.
   * 
   * @example
   * 100
   */
  executionTimeoutSeconds?: number;
  fusion?: boolean;
  /**
   * @remarks
   * The information about Spark Driver.
   */
  jobDriver?: JobDriver;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * jr-12345
   */
  jobId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * spark_job_name
   */
  name?: string;
  /**
   * @remarks
   * The version number of Spark.
   * 
   * @example
   * esr-3.3.1
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The name of the resource queue on which the Spark job runs.
   * 
   * @example
   * dev_queue
   */
  resourceQueueId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      codeType: 'codeType',
      configurationOverrides: 'configurationOverrides',
      displayReleaseVersion: 'displayReleaseVersion',
      executionTimeoutSeconds: 'executionTimeoutSeconds',
      fusion: 'fusion',
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
      displayReleaseVersion: 'string',
      executionTimeoutSeconds: 'number',
      fusion: 'boolean',
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
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * jr-54321
   */
  jobRunId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
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

export class StartProcessInstanceRequest extends $tea.Model {
  /**
   * @example
   * false
   */
  isProd?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12***********
   */
  processDefinitionCode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SS
   */
  productNamespace?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * root_queue
   */
  runtimeQueue?: string;
  /**
   * @example
   * dh*********
   */
  versionHashCode?: string;
  /**
   * @example
   * 1
   */
  versionNumber?: number;
  static names(): { [key: string]: string } {
    return {
      isProd: 'isProd',
      processDefinitionCode: 'processDefinitionCode',
      productNamespace: 'productNamespace',
      regionId: 'regionId',
      runtimeQueue: 'runtimeQueue',
      versionHashCode: 'versionHashCode',
      versionNumber: 'versionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isProd: 'boolean',
      processDefinitionCode: 'number',
      productNamespace: 'string',
      regionId: 'string',
      runtimeQueue: 'string',
      versionHashCode: 'string',
      versionNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartProcessInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * 1400009
   */
  code?: number;
  /**
   * @example
   * {\\"sessionBizId\\": \\"sc-dc85644dba1c8c63\\", \\"bizId\\": \\"st-aeed3b0d4f87418a9a9dcbd757477658\\", \\"gmtCreated\\": \\"Thu Sep 12 02:28:45 UTC 2024\\"}
   */
  data?: any;
  /**
   * @example
   * false
   */
  failed?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * No permission for resource action
   */
  msg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      failed: 'failed',
      httpStatusCode: 'httpStatusCode',
      msg: 'msg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      failed: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartProcessInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartProcessInstanceResponseBody;
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
      body: StartProcessInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSessionClusterRequest extends $tea.Model {
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * root_queue
   */
  queueName?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * sc-xxxxxxxxxxx
   */
  sessionClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      queueName: 'queueName',
      sessionClusterId: 'sessionClusterId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueName: 'string',
      sessionClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSessionClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-******
   */
  sessionClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      sessionClusterId: 'sessionClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessionClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSessionClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartSessionClusterResponseBody;
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
      body: StartSessionClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSessionClusterRequest extends $tea.Model {
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * root_queue
   */
  queueName?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * sc-xxxxxxxxxxxx
   */
  sessionClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      queueName: 'queueName',
      sessionClusterId: 'sessionClusterId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueName: 'string',
      sessionClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSessionClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-******
   */
  sessionClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      sessionClusterId: 'sessionClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessionClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSessionClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopSessionClusterResponseBody;
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
      body: StopSessionClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateSqlStatementRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
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

export class TerminateSqlStatementResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class TerminateSqlStatementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TerminateSqlStatementResponseBody;
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
      body: TerminateSqlStatementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProcessDefinitionWithScheduleRequest extends $tea.Model {
  /**
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @example
   * ods batch workflow
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PARALLEL
   */
  executionType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ods_batch_workflow
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SS
   */
  productNamespace?: string;
  /**
   * @example
   * true
   */
  publish?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ONLINE
   */
  releaseState?: string;
  /**
   * @example
   * root_queue
   */
  resourceQueue?: string;
  /**
   * @example
   * 1
   */
  retryTimes?: number;
  /**
   * @example
   * 113***************
   */
  runAs?: string;
  schedule?: UpdateProcessDefinitionWithScheduleRequestSchedule;
  tags?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   */
  taskDefinitionJson?: UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJson[];
  /**
   * @example
   * 1
   */
  taskParallelism?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskRelationJson?: UpdateProcessDefinitionWithScheduleRequestTaskRelationJson[];
  /**
   * @example
   * 300
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      alertEmailAddress: 'alertEmailAddress',
      description: 'description',
      executionType: 'executionType',
      name: 'name',
      productNamespace: 'productNamespace',
      publish: 'publish',
      regionId: 'regionId',
      releaseState: 'releaseState',
      resourceQueue: 'resourceQueue',
      retryTimes: 'retryTimes',
      runAs: 'runAs',
      schedule: 'schedule',
      tags: 'tags',
      taskDefinitionJson: 'taskDefinitionJson',
      taskParallelism: 'taskParallelism',
      taskRelationJson: 'taskRelationJson',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEmailAddress: 'string',
      description: 'string',
      executionType: 'string',
      name: 'string',
      productNamespace: 'string',
      publish: 'boolean',
      regionId: 'string',
      releaseState: 'string',
      resourceQueue: 'string',
      retryTimes: 'number',
      runAs: 'string',
      schedule: UpdateProcessDefinitionWithScheduleRequestSchedule,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      taskDefinitionJson: { 'type': 'array', 'itemType': UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJson },
      taskParallelism: 'number',
      taskRelationJson: { 'type': 'array', 'itemType': UpdateProcessDefinitionWithScheduleRequestTaskRelationJson },
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProcessDefinitionWithScheduleShrinkRequest extends $tea.Model {
  /**
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @example
   * ods batch workflow
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PARALLEL
   */
  executionType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ods_batch_workflow
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SS
   */
  productNamespace?: string;
  /**
   * @example
   * true
   */
  publish?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ONLINE
   */
  releaseState?: string;
  /**
   * @example
   * root_queue
   */
  resourceQueue?: string;
  /**
   * @example
   * 1
   */
  retryTimes?: number;
  /**
   * @example
   * 113***************
   */
  runAs?: string;
  scheduleShrink?: string;
  tagsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskDefinitionJsonShrink?: string;
  /**
   * @example
   * 1
   */
  taskParallelism?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskRelationJsonShrink?: string;
  /**
   * @example
   * 300
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      alertEmailAddress: 'alertEmailAddress',
      description: 'description',
      executionType: 'executionType',
      name: 'name',
      productNamespace: 'productNamespace',
      publish: 'publish',
      regionId: 'regionId',
      releaseState: 'releaseState',
      resourceQueue: 'resourceQueue',
      retryTimes: 'retryTimes',
      runAs: 'runAs',
      scheduleShrink: 'schedule',
      tagsShrink: 'tags',
      taskDefinitionJsonShrink: 'taskDefinitionJson',
      taskParallelism: 'taskParallelism',
      taskRelationJsonShrink: 'taskRelationJson',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEmailAddress: 'string',
      description: 'string',
      executionType: 'string',
      name: 'string',
      productNamespace: 'string',
      publish: 'boolean',
      regionId: 'string',
      releaseState: 'string',
      resourceQueue: 'string',
      retryTimes: 'number',
      runAs: 'string',
      scheduleShrink: 'string',
      tagsShrink: 'string',
      taskDefinitionJsonShrink: 'string',
      taskParallelism: 'number',
      taskRelationJsonShrink: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProcessDefinitionWithScheduleResponseBody extends $tea.Model {
  /**
   * @example
   * 1400009
   */
  code?: number;
  data?: UpdateProcessDefinitionWithScheduleResponseBodyData;
  /**
   * @example
   * false
   */
  failed?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * No permission for resource action
   */
  msg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      failed: 'failed',
      httpStatusCode: 'httpStatusCode',
      msg: 'msg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: UpdateProcessDefinitionWithScheduleResponseBodyData,
      failed: 'string',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProcessDefinitionWithScheduleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProcessDefinitionWithScheduleResponseBody;
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
      body: UpdateProcessDefinitionWithScheduleResponseBody,
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
  /**
   * @example
   * null
   */
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

export class TaskCredential extends $tea.Model {
  accessId?: string;
  accessUrl?: string;
  expire?: number;
  host?: string;
  path?: string;
  policy?: string;
  securityToken?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'accessId',
      accessUrl: 'accessUrl',
      expire: 'expire',
      host: 'host',
      path: 'path',
      policy: 'policy',
      securityToken: 'securityToken',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessUrl: 'string',
      expire: 'number',
      host: 'string',
      path: 'string',
      policy: 'string',
      securityToken: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionWithScheduleRequestSchedule extends $tea.Model {
  /**
   * @example
   * 0 0 0 * * ?
   */
  crontab?: string;
  /**
   * @example
   * 2025-12-23 16:13:27
   */
  endTime?: string;
  /**
   * @example
   * 2024-12-23 16:13:27
   */
  startTime?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timezoneId?: string;
  static names(): { [key: string]: string } {
    return {
      crontab: 'crontab',
      endTime: 'endTime',
      startTime: 'startTime',
      timezoneId: 'timezoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crontab: 'string',
      endTime: 'string',
      startTime: 'string',
      timezoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf extends $tea.Model {
  /**
   * @example
   * spark.dynamicAllocation.enabled
   */
  key?: string;
  /**
   * @example
   * true
   */
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

export class CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams extends $tea.Model {
  /**
   * @example
   * esr-4.0.0 (Spark 3.5.2, Scala 2.12)
   */
  displaySparkVersion?: string;
  /**
   * @example
   * env-crhq2h5lhtgju93buhkg
   */
  environmentId?: string;
  /**
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * root_queue
   */
  resourceQueueId?: string;
  sparkConf?: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf[];
  /**
   * @example
   * 1
   */
  sparkDriverCores?: number;
  /**
   * @example
   * 4g
   */
  sparkDriverMemory?: number;
  /**
   * @example
   * 1
   */
  sparkExecutorCores?: number;
  /**
   * @example
   * 4g
   */
  sparkExecutorMemory?: number;
  /**
   * @example
   * INFO
   */
  sparkLogLevel?: string;
  sparkLogPath?: string;
  /**
   * @example
   * esr-4.0.0 (Spark 3.5.2, Scala 2.12)
   */
  sparkVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TSK-d87******************
   */
  taskBizId?: string;
  /**
   * @example
   * VPC
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * w-d8********
   */
  workspaceBizId?: string;
  static names(): { [key: string]: string } {
    return {
      displaySparkVersion: 'displaySparkVersion',
      environmentId: 'environmentId',
      fusion: 'fusion',
      resourceQueueId: 'resourceQueueId',
      sparkConf: 'sparkConf',
      sparkDriverCores: 'sparkDriverCores',
      sparkDriverMemory: 'sparkDriverMemory',
      sparkExecutorCores: 'sparkExecutorCores',
      sparkExecutorMemory: 'sparkExecutorMemory',
      sparkLogLevel: 'sparkLogLevel',
      sparkLogPath: 'sparkLogPath',
      sparkVersion: 'sparkVersion',
      taskBizId: 'taskBizId',
      type: 'type',
      workspaceBizId: 'workspaceBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displaySparkVersion: 'string',
      environmentId: 'string',
      fusion: 'boolean',
      resourceQueueId: 'string',
      sparkConf: { 'type': 'array', 'itemType': CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf },
      sparkDriverCores: 'number',
      sparkDriverMemory: 'number',
      sparkExecutorCores: 'number',
      sparkExecutorMemory: 'number',
      sparkLogLevel: 'string',
      sparkLogPath: 'string',
      sparkVersion: 'string',
      taskBizId: 'string',
      type: 'string',
      workspaceBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionWithScheduleRequestTaskDefinitionJson extends $tea.Model {
  /**
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 36************
   */
  code?: number;
  /**
   * @example
   * ods transform task
   */
  description?: string;
  /**
   * @example
   * false
   */
  failAlertEnable?: boolean;
  /**
   * @example
   * 1
   */
  failRetryTimes?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ods_transform_task
   */
  name?: string;
  /**
   * @example
   * false
   */
  startAlertEnable?: boolean;
  tags?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   */
  taskParams?: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MigrateData
   */
  taskType?: string;
  /**
   * @example
   * 1200
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      alertEmailAddress: 'alertEmailAddress',
      code: 'code',
      description: 'description',
      failAlertEnable: 'failAlertEnable',
      failRetryTimes: 'failRetryTimes',
      name: 'name',
      startAlertEnable: 'startAlertEnable',
      tags: 'tags',
      taskParams: 'taskParams',
      taskType: 'taskType',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEmailAddress: 'string',
      code: 'number',
      description: 'string',
      failAlertEnable: 'boolean',
      failRetryTimes: 'number',
      name: 'string',
      startAlertEnable: 'boolean',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      taskParams: CreateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams,
      taskType: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionWithScheduleRequestTaskRelationJson extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ods batch workflow
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 28************
   */
  postTaskCode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  postTaskVersion?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 16************
   */
  preTaskCode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  preTaskVersion?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      postTaskCode: 'postTaskCode',
      postTaskVersion: 'postTaskVersion',
      preTaskCode: 'preTaskCode',
      preTaskVersion: 'preTaskVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      postTaskCode: 'number',
      postTaskVersion: 'number',
      preTaskCode: 'number',
      preTaskVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionWithScheduleResponseBodyData extends $tea.Model {
  /**
   * @example
   * 160************
   */
  code?: number;
  /**
   * @example
   * 12342
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlStatementResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the SQL query.
   * 
   * @example
   * st-1231dfafadfa***
   */
  statementId?: string;
  static names(): { [key: string]: string } {
    return {
      statementId: 'statementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statementId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunResponseBodyJobRunConfigurationOverrides extends $tea.Model {
  /**
   * @remarks
   * The configurations.
   */
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
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ERR-100000
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * connection refused
   */
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
  /**
   * @remarks
   * The code type of the job. Valid values:
   * 
   * *   SQL
   * *   JAR
   * *   PYTHON
   * 
   * @example
   * SQL
   */
  codeType?: string;
  /**
   * @remarks
   * The job configurations of Spark.
   */
  configurationOverrides?: GetJobRunResponseBodyJobRunConfigurationOverrides;
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The end time of the job.
   * 
   * @example
   * 1684119314000
   */
  endTime?: number;
  environmentId?: string;
  /**
   * @remarks
   * The timeout period of the job.
   * 
   * @example
   * 3600
   */
  executionTimeoutSeconds?: number;
  fusion?: boolean;
  /**
   * @remarks
   * The information about Spark Driver.
   */
  jobDriver?: JobDriver;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * jr-231231
   */
  jobRunId?: string;
  /**
   * @remarks
   * The path where the operational logs are stored.
   */
  log?: RunLog;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * jobName
   */
  name?: string;
  /**
   * @remarks
   * The version of the Spark engine on which the job runs.
   * 
   * @example
   * esr-3.3.1
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The ID of the user who created the job.
   * 
   * @example
   * 1509789347011222
   */
  resourceOwnerId?: string;
  /**
   * @remarks
   * The name of the queue on which the job runs.
   * 
   * @example
   * root_queue
   */
  resourceQueueId?: string;
  /**
   * @remarks
   * The job state.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The reason of the job status change.
   */
  stateChangeReason?: GetJobRunResponseBodyJobRunStateChangeReason;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 1684119314000
   */
  submitTime?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The web UI of the job.
   * 
   * @example
   * http://spark-ui
   */
  webUI?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-1234abcd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      codeType: 'codeType',
      configurationOverrides: 'configurationOverrides',
      displayReleaseVersion: 'displayReleaseVersion',
      endTime: 'endTime',
      environmentId: 'environmentId',
      executionTimeoutSeconds: 'executionTimeoutSeconds',
      fusion: 'fusion',
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
      displayReleaseVersion: 'string',
      endTime: 'number',
      environmentId: 'string',
      executionTimeoutSeconds: 'number',
      fusion: 'boolean',
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

export class GetSessionClusterResponseBodySessionClusterApplicationConfigs extends $tea.Model {
  /**
   * @remarks
   * The name of the configuration file.
   * 
   * @example
   * spark-defaults.conf
   */
  configFileName?: string;
  /**
   * @remarks
   * The key of the configuration.
   * 
   * @example
   * spark.app.name
   */
  configItemKey?: string;
  /**
   * @remarks
   * The configuration value.
   * 
   * @example
   * test
   */
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

export class GetSessionClusterResponseBodySessionClusterAutoStartConfiguration extends $tea.Model {
  /**
   * @remarks
   * Indicates whether automatic startup is enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionClusterResponseBodySessionClusterAutoStopConfiguration extends $tea.Model {
  /**
   * @remarks
   * Indicates whether automatic termination is enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The idle timeout period. The session is automatically terminated when the idle timeout period is exceeded.
   * 
   * @example
   * 60
   */
  idleTimeoutMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      idleTimeoutMinutes: 'idleTimeoutMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      idleTimeoutMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionClusterResponseBodySessionClusterStateChangeReason extends $tea.Model {
  /**
   * @remarks
   * The status change code.
   * 
   * @example
   * 1000000
   */
  code?: string;
  /**
   * @remarks
   * The status change message.
   * 
   * @example
   * ok
   */
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

export class GetSessionClusterResponseBodySessionCluster extends $tea.Model {
  /**
   * @remarks
   * The Spark configurations.
   */
  applicationConfigs?: GetSessionClusterResponseBodySessionClusterApplicationConfigs[];
  /**
   * @remarks
   * The automatic startup configurations.
   */
  autoStartConfiguration?: GetSessionClusterResponseBodySessionClusterAutoStartConfiguration;
  /**
   * @remarks
   * The automatic termination configurations.
   */
  autoStopConfiguration?: GetSessionClusterResponseBodySessionClusterAutoStopConfiguration;
  /**
   * @remarks
   * The version of the Spark engine.
   * 
   * @example
   * esr-2.2(Java Runtime)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The domain name to which the Spark UI of the session belongs.
   * 
   * @example
   * your.domain.com
   */
  domain?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * emr-spark-gateway-cn-hangzhou-internal.data.aliyuncs.com
   */
  domainInner?: string;
  /**
   * @remarks
   * The ID of the job that is associated with the session.
   * 
   * @example
   * TSK-xxxxxxxx
   */
  draftId?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cpv569tlhtgndjl86t40
   */
  envId?: string;
  /**
   * @remarks
   * Indicates whether the Fusion engine is used for acceleration.
   * 
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-09-01 06:23:01
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The type of the job. This parameter is required and cannot be modified after the deployment is created. Valid values:
   * 
   * *   SQLSCRIPT
   * *   JAR
   * *   PYTHON
   * 
   * @example
   * SQL
   */
  kind?: string;
  /**
   * @remarks
   * The name of the session.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * jobName
   */
  queueName?: string;
  /**
   * @remarks
   * The version of E-MapReduce (EMR) Serverless Spark.
   * 
   * @example
   * esr-2.2(Java Runtime)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-1234567890ab
   */
  sessionClusterId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2024-09-01 06:23:01
   */
  startTime?: number;
  /**
   * @remarks
   * The job status.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The reason of the job status change.
   */
  stateChangeReason?: GetSessionClusterResponseBodySessionClusterStateChangeReason;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * jr-231231
   */
  userId?: string;
  /**
   * @remarks
   * The name of the account that is used to create the session.
   * 
   * @example
   * user1
   */
  userName?: string;
  /**
   * @remarks
   * The Spark UI of the session.
   * 
   * @example
   * https://spark-ui/link
   */
  webUI?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-1234abcd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'applicationConfigs',
      autoStartConfiguration: 'autoStartConfiguration',
      autoStopConfiguration: 'autoStopConfiguration',
      displayReleaseVersion: 'displayReleaseVersion',
      domain: 'domain',
      domainInner: 'domainInner',
      draftId: 'draftId',
      envId: 'envId',
      fusion: 'fusion',
      gmtCreate: 'gmtCreate',
      kind: 'kind',
      name: 'name',
      queueName: 'queueName',
      releaseVersion: 'releaseVersion',
      sessionClusterId: 'sessionClusterId',
      startTime: 'startTime',
      state: 'state',
      stateChangeReason: 'stateChangeReason',
      userId: 'userId',
      userName: 'userName',
      webUI: 'webUI',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: { 'type': 'array', 'itemType': GetSessionClusterResponseBodySessionClusterApplicationConfigs },
      autoStartConfiguration: GetSessionClusterResponseBodySessionClusterAutoStartConfiguration,
      autoStopConfiguration: GetSessionClusterResponseBodySessionClusterAutoStopConfiguration,
      displayReleaseVersion: 'string',
      domain: 'string',
      domainInner: 'string',
      draftId: 'string',
      envId: 'string',
      fusion: 'boolean',
      gmtCreate: 'number',
      kind: 'string',
      name: 'string',
      queueName: 'string',
      releaseVersion: 'string',
      sessionClusterId: 'string',
      startTime: 'number',
      state: 'string',
      stateChangeReason: GetSessionClusterResponseBodySessionClusterStateChangeReason,
      userId: 'string',
      userName: 'string',
      webUI: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlStatementResponseBodyDataSqlOutputs extends $tea.Model {
  /**
   * @remarks
   * The queried data, which is a string in the JSON format.
   * 
   * @example
   * [{\\"values\\":[\\"test_db\\",\\"test_table\\",false]}
   */
  rows?: string;
  /**
   * @remarks
   * The information about the schema, which is a string in the JSON format.
   * 
   * @example
   * {\\"type\\":\\"struct\\",\\"fields\\":[{\\"name\\":\\"namespace\\",\\"type\\":\\"string\\",\\"nullable\\":false,\\"metadata\\":{}},{\\"name\\":\\"tableName\\",\\"type\\":\\"string\\",\\"nullable\\":false,\\"metadata\\":{}},{\\"name\\":\\"isTemporary\\",\\"type\\":\\"boolean\\",\\"nullable\\":false,\\"metadata\\":{}}]}
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      rows: 'rows',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rows: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlStatementResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The list of time that is consumed by SQL queries.
   */
  executionTime?: number[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ERROR-102
   */
  sqlErrorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error message
   */
  sqlErrorMessage?: string;
  /**
   * @remarks
   * The query results.
   */
  sqlOutputs?: GetSqlStatementResponseBodyDataSqlOutputs[];
  /**
   * @remarks
   * The query status.
   * 
   * Valid values:
   * 
   * *   running
   * *   available
   * *   cancelled
   * *   error
   * *   cancelling
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * st-1231311abadfaa
   */
  statementId?: string;
  static names(): { [key: string]: string } {
    return {
      executionTime: 'executionTime',
      sqlErrorCode: 'sqlErrorCode',
      sqlErrorMessage: 'sqlErrorMessage',
      sqlOutputs: 'sqlOutputs',
      state: 'state',
      statementId: 'statementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionTime: { 'type': 'array', 'itemType': 'number' },
      sqlErrorCode: 'string',
      sqlErrorMessage: 'string',
      sqlOutputs: { 'type': 'array', 'itemType': GetSqlStatementResponseBodyDataSqlOutputs },
      state: 'string',
      statementId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsRequestEndTime extends $tea.Model {
  /**
   * @remarks
   * The end of the end time range.
   * 
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @remarks
   * The beginning of the end time range.
   * 
   * @example
   * 1709740800000
   */
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
  /**
   * @remarks
   * The end of the start time range.
   * 
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @remarks
   * The beginning of the start time range.
   * 
   * @example
   * 1709740800000
   */
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
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * @example
   * value
   */
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
  /**
   * @remarks
   * The SparkConf objects.
   */
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
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
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
  /**
   * @remarks
   * The code type of the job. Valid values:
   * 
   * SQL
   * 
   * JAR
   * 
   * PYTHON
   * 
   * @example
   * SQL
   */
  codeType?: string;
  /**
   * @remarks
   * The advanced configurations of Spark.
   */
  configurationOverrides?: ListJobRunsResponseBodyJobRunsConfigurationOverrides;
  /**
   * @remarks
   * The ID of the user who created the job.
   * 
   * @example
   * 1509789347011222
   */
  creator?: string;
  /**
   * @example
   * 2.059
   */
  cuHours?: number;
  /**
   * @example
   * esr-3.0.0 (Spark 3.4.3, Scala 2.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The end time of the job.
   * 
   * @example
   * 1684119314000
   */
  endTime?: number;
  /**
   * @remarks
   * The timeout period of the job.
   * 
   * @example
   * 3600
   */
  executionTimeoutSeconds?: number;
  /**
   * @example
   * true
   */
  fusion?: boolean;
  /**
   * @remarks
   * The information about Spark Driver.
   */
  jobDriver?: JobDriver;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * jr-231231
   */
  jobRunId?: string;
  /**
   * @remarks
   * The path where the operational logs are stored.
   */
  log?: RunLog;
  /**
   * @example
   * 33030784
   */
  mbSeconds?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * jobName
   */
  name?: string;
  /**
   * @remarks
   * The version of Spark on which the jobs run.
   * 
   * @example
   * esr-native-3.4.0
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The job state.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The reason of the job status change.
   */
  stateChangeReason?: ListJobRunsResponseBodyJobRunsStateChangeReason;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 1684119314000
   */
  submitTime?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: Tag[];
  /**
   * @example
   * 8236
   */
  vcoreSeconds?: number;
  /**
   * @remarks
   * The web UI of the job.
   * 
   * @example
   * http://spark-ui
   */
  webUI?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-1234abcd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      codeType: 'codeType',
      configurationOverrides: 'configurationOverrides',
      creator: 'creator',
      cuHours: 'cuHours',
      displayReleaseVersion: 'displayReleaseVersion',
      endTime: 'endTime',
      executionTimeoutSeconds: 'executionTimeoutSeconds',
      fusion: 'fusion',
      jobDriver: 'jobDriver',
      jobRunId: 'jobRunId',
      log: 'log',
      mbSeconds: 'mbSeconds',
      name: 'name',
      releaseVersion: 'releaseVersion',
      state: 'state',
      stateChangeReason: 'stateChangeReason',
      submitTime: 'submitTime',
      tags: 'tags',
      vcoreSeconds: 'vcoreSeconds',
      webUI: 'webUI',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeType: 'string',
      configurationOverrides: ListJobRunsResponseBodyJobRunsConfigurationOverrides,
      creator: 'string',
      cuHours: 'number',
      displayReleaseVersion: 'string',
      endTime: 'number',
      executionTimeoutSeconds: 'number',
      fusion: 'boolean',
      jobDriver: JobDriver,
      jobRunId: 'string',
      log: RunLog,
      mbSeconds: 'number',
      name: 'string',
      releaseVersion: 'string',
      state: 'string',
      stateChangeReason: ListJobRunsResponseBodyJobRunsStateChangeReason,
      submitTime: 'number',
      tags: { 'type': 'array', 'itemType': Tag },
      vcoreSeconds: 'number',
      webUI: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogContentsResponseBodyListLogContentContents extends $tea.Model {
  /**
   * @example
   * spark pi is 3.14\\n
   */
  lineContent?: string;
  static names(): { [key: string]: string } {
    return {
      lineContent: 'LineContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogContentsResponseBodyListLogContent extends $tea.Model {
  contents?: ListLogContentsResponseBodyListLogContentContents[];
  /**
   * @example
   * 10
   */
  totalLength?: number;
  static names(): { [key: string]: string } {
    return {
      contents: 'contents',
      totalLength: 'totalLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': ListLogContentsResponseBodyListLogContentContents },
      totalLength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReleaseVersionsResponseBodyReleaseVersions extends $tea.Model {
  /**
   * @remarks
   * The version number of open source Spark.
   * 
   * @example
   * Spark 3.3.1
   */
  communityVersion?: string;
  /**
   * @remarks
   * The CPU architectures.
   */
  cpuArchitectures?: string[];
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * esr-2.1 (Spark 3.3.1, Scala 2.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * Indicates whether the Fusion engine is used for acceleration.
   * 
   * @example
   * true
   */
  fusion?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1716215854101
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The type of the Infrastructure as a Service (IaaS) layer.
   * 
   * @example
   * ASI
   */
  iaasType?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * esr-2.1 (Spark 3.3.1, Scala 2.12, Java Runtime)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The version of Scala.
   * 
   * @example
   * 2.12
   */
  scalaVersion?: string;
  /**
   * @remarks
   * The status of the version.
   * 
   * @example
   * ONLINE
   */
  state?: string;
  /**
   * @remarks
   * The type of the version.
   * 
   * @example
   * stable
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      communityVersion: 'communityVersion',
      cpuArchitectures: 'cpuArchitectures',
      displayReleaseVersion: 'displayReleaseVersion',
      fusion: 'fusion',
      gmtCreate: 'gmtCreate',
      iaasType: 'iaasType',
      releaseVersion: 'releaseVersion',
      scalaVersion: 'scalaVersion',
      state: 'state',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      communityVersion: 'string',
      cpuArchitectures: { 'type': 'array', 'itemType': 'string' },
      displayReleaseVersion: 'string',
      fusion: 'boolean',
      gmtCreate: 'number',
      iaasType: 'string',
      releaseVersion: 'string',
      scalaVersion: 'string',
      state: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionClustersResponseBodySessionClustersApplicationConfigs extends $tea.Model {
  /**
   * @remarks
   * The name of the configuration file.
   * 
   * @example
   * spark-default.conf
   */
  configFileName?: string;
  /**
   * @remarks
   * The key of the configuration.
   * 
   * @example
   * spark.app.name
   */
  configItemKey?: string;
  /**
   * @remarks
   * The configuration value.
   * 
   * @example
   * test_application
   */
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

export class ListSessionClustersResponseBodySessionClustersAutoStartConfiguration extends $tea.Model {
  /**
   * @remarks
   * Indicates whether automatic startup is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionClustersResponseBodySessionClustersAutoStopConfiguration extends $tea.Model {
  /**
   * @remarks
   * Indicates whether automatic termination is enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The idle timeout period. The session is automatically terminated when the idle timeout period is exceeded.
   * 
   * @example
   * 45
   */
  idleTimeoutMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      idleTimeoutMinutes: 'idleTimeoutMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      idleTimeoutMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionClustersResponseBodySessionClustersStateChangeReason extends $tea.Model {
  /**
   * @remarks
   * The status change code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status change message.
   * 
   * @example
   * ok
   */
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

export class ListSessionClustersResponseBodySessionClusters extends $tea.Model {
  /**
   * @remarks
   * The session configurations, which are equivalent to the configurations of the Spark job.
   */
  applicationConfigs?: ListSessionClustersResponseBodySessionClustersApplicationConfigs[];
  /**
   * @remarks
   * The automatic startup configurations.
   */
  autoStartConfiguration?: ListSessionClustersResponseBodySessionClustersAutoStartConfiguration;
  /**
   * @remarks
   * The configurations of automatic termination.
   */
  autoStopConfiguration?: ListSessionClustersResponseBodySessionClustersAutoStopConfiguration;
  /**
   * @remarks
   * The version of the Spark engine.
   * 
   * @example
   * esr-4.0.0 (Spark 3.5.2, Scala 2.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The public endpoint of the Thrift server.
   * 
   * @example
   * emr-spark-gateway-cn-hangzhou.data.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The internal endpoint of the Thrift server.
   * 
   * @example
   * emr-spark-gateway-cn-hangzhou-internal.data.aliyuncs.com
   */
  domainInner?: string;
  /**
   * @remarks
   * The ID of the job that is associated with the session.
   * 
   * @example
   * TSK-xxxxxxxxx
   */
  draftId?: string;
  /**
   * @remarks
   * Indicates whether the Fusion engine is used for acceleration.
   * 
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1732267598000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The session type.
   * 
   * Valid values:
   * 
   * *   NOTEBOOK
   * *   THRIFT
   * *   SQL
   * 
   * @example
   * SQL
   */
  kind?: string;
  /**
   * @remarks
   * The name of the session.
   * 
   * @example
   * adhoc_query
   */
  name?: string;
  /**
   * @remarks
   * The name of the queue that is used to run the session.
   * 
   * @example
   * dev_queue
   */
  queueName?: string;
  /**
   * @remarks
   * The version of EMR Serverless Spark.
   * 
   * @example
   * esr-2.1
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * sc-123131
   */
  sessionClusterId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1732267598000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the session.
   * 
   * *   Starting
   * *   Running
   * *   Stopping
   * *   Stopped
   * *   Error
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The details of the most recent status change of the session.
   */
  stateChangeReason?: ListSessionClustersResponseBodySessionClustersStateChangeReason;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123131
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test_user
   */
  userName?: string;
  /**
   * @remarks
   * The Spark UI of the session.
   * 
   * @example
   * http://spark-ui-xxxx
   */
  webUI?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-1234abcd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'applicationConfigs',
      autoStartConfiguration: 'autoStartConfiguration',
      autoStopConfiguration: 'autoStopConfiguration',
      displayReleaseVersion: 'displayReleaseVersion',
      domain: 'domain',
      domainInner: 'domainInner',
      draftId: 'draftId',
      fusion: 'fusion',
      gmtCreate: 'gmtCreate',
      kind: 'kind',
      name: 'name',
      queueName: 'queueName',
      releaseVersion: 'releaseVersion',
      sessionClusterId: 'sessionClusterId',
      startTime: 'startTime',
      state: 'state',
      stateChangeReason: 'stateChangeReason',
      userId: 'userId',
      userName: 'userName',
      webUI: 'webUI',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: { 'type': 'array', 'itemType': ListSessionClustersResponseBodySessionClustersApplicationConfigs },
      autoStartConfiguration: ListSessionClustersResponseBodySessionClustersAutoStartConfiguration,
      autoStopConfiguration: ListSessionClustersResponseBodySessionClustersAutoStopConfiguration,
      displayReleaseVersion: 'string',
      domain: 'string',
      domainInner: 'string',
      draftId: 'string',
      fusion: 'boolean',
      gmtCreate: 'number',
      kind: 'string',
      name: 'string',
      queueName: 'string',
      releaseVersion: 'string',
      sessionClusterId: 'string',
      startTime: 'number',
      state: 'string',
      stateChangeReason: ListSessionClustersResponseBodySessionClustersStateChangeReason,
      userId: 'string',
      userName: 'string',
      webUI: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceQueuesResponseBodyQueuesAllowActions extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of a behavior.
   * 
   * @example
   * acs:emr::workspaceId:action/create_queue
   */
  actionArn?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * view
   */
  actionName?: string;
  /**
   * @remarks
   * The dependencies of the operation.
   * 
   * @example
   * ["view"]
   */
  dependencies?: string[];
  /**
   * @remarks
   * The description of the operation.
   * 
   * @example
   * 文件目录遍历、文件浏览
   */
  description?: string;
  /**
   * @remarks
   * The display name of the permission.
   * 
   * @example
   * 文件目录遍历、文件浏览
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      actionArn: 'actionArn',
      actionName: 'actionName',
      dependencies: 'dependencies',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionArn: 'string',
      actionName: 'string',
      dependencies: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      displayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceQueuesResponseBodyQueues extends $tea.Model {
  /**
   * @remarks
   * The operations allowed for the queue.
   */
  allowActions?: ListWorkspaceQueuesResponseBodyQueuesAllowActions[];
  /**
   * @remarks
   * The ID of the user who created the queue.
   * 
   * @example
   * 237109
   */
  creator?: string;
  /**
   * @remarks
   * The environment types of the queue.
   */
  environments?: string[];
  /**
   * @remarks
   * The maximum capacity of resources that can be used in the queue.
   * 
   * @example
   * {"cpu": "2","memory": "2Gi"}
   */
  maxResource?: string;
  /**
   * @remarks
   * The minimum capacity of resources that can be used in the queue.
   * 
   * @example
   * {"cpu": "2","memory": "2Gi"}
   */
  minResource?: string;
  /**
   * @remarks
   * The queue label.
   * 
   * @example
   * dev_queue
   */
  properties?: string;
  /**
   * @remarks
   * The name of the queue.
   * 
   * @example
   * dev_queue
   */
  queueName?: string;
  /**
   * @remarks
   * The queue architecture.
   * 
   * @example
   * {"arch": "x86"}
   */
  queueScope?: string;
  /**
   * @remarks
   * The status of the queue.
   * 
   * @example
   * RUNNING
   */
  queueStatus?: string;
  /**
   * @remarks
   * The queue type.
   * 
   * @example
   * instance, instanceChildren
   */
  queueType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The capacity of resources that are used in the queue.
   * 
   * @example
   * {"cpu": "2","memory": "2Gi"}
   */
  usedResource?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-1234abcd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      allowActions: 'allowActions',
      creator: 'creator',
      environments: 'environments',
      maxResource: 'maxResource',
      minResource: 'minResource',
      properties: 'properties',
      queueName: 'queueName',
      queueScope: 'queueScope',
      queueStatus: 'queueStatus',
      queueType: 'queueType',
      regionId: 'regionId',
      usedResource: 'usedResource',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowActions: { 'type': 'array', 'itemType': ListWorkspaceQueuesResponseBodyQueuesAllowActions },
      creator: 'string',
      environments: { 'type': 'array', 'itemType': 'string' },
      maxResource: 'string',
      minResource: 'string',
      properties: 'string',
      queueName: 'string',
      queueScope: 'string',
      queueStatus: 'string',
      queueType: 'string',
      regionId: 'string',
      usedResource: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyWorkspacesStateChangeReason extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Success
   */
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

export class ListWorkspacesResponseBodyWorkspaces extends $tea.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled. This parameter is required only if the paymentType parameter is set to Subscription.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. This parameter is required only if the paymentType parameter is set to Subscription.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The unit of the auto-renewal duration. This parameter is required only if the paymentType parameter is set to Subscription.
   * 
   * @example
   * YEAR, MONTH, WEEK, DAY, HOUR, MINUTE
   */
  autoRenewPeriodUnit?: string;
  /**
   * @remarks
   * The time when the workspace was created.
   * 
   * @example
   * 1684115879955
   */
  createTime?: number;
  /**
   * @remarks
   * The information of the Data Lake Formation (DLF) catalog.
   * 
   * @example
   * default
   */
  dlfCatalogId?: string;
  dlfType?: string;
  /**
   * @remarks
   * The subscription period. This parameter is required only if the paymentType parameter is set to Subscription.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The time when the workspace was released.
   * 
   * @example
   * 1687103999999
   */
  endTime?: number;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * out of stock
   */
  failReason?: string;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is required only if the paymentType parameter is set to Subscription.
   * 
   * @example
   * YEAR, MONTH, WEEK, DAY, HOUR, MINUTE
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The status of the payment.
   * 
   * @example
   * PAID/UNPAID
   */
  paymentStatus?: string;
  /**
   * @remarks
   * The payment type.
   * 
   * @example
   * PayAsYouGo or Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The reason why the workspace is released.
   * 
   * @example
   * SERVICE_RELEASE
   */
  releaseType?: string;
  /**
   * @remarks
   * The resource specifications.
   * 
   * @example
   * 100cu
   */
  resourceSpec?: string;
  /**
   * @remarks
   * The information about the workspace status change.
   */
  stateChangeReason?: ListWorkspacesResponseBodyWorkspacesStateChangeReason;
  /**
   * @remarks
   * The Object Storage Service (OSS) path.
   * 
   * @example
   * spark-result
   */
  storage?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-******
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * spark批作业空间-1
   */
  workspaceName?: string;
  /**
   * @remarks
   * The workspace status.
   * 
   * @example
   * STARTING,RUNNING,TERMINATED
   */
  workspaceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'autoRenew',
      autoRenewPeriod: 'autoRenewPeriod',
      autoRenewPeriodUnit: 'autoRenewPeriodUnit',
      createTime: 'createTime',
      dlfCatalogId: 'dlfCatalogId',
      dlfType: 'dlfType',
      duration: 'duration',
      endTime: 'endTime',
      failReason: 'failReason',
      paymentDurationUnit: 'paymentDurationUnit',
      paymentStatus: 'paymentStatus',
      paymentType: 'paymentType',
      regionId: 'regionId',
      releaseType: 'releaseType',
      resourceSpec: 'resourceSpec',
      stateChangeReason: 'stateChangeReason',
      storage: 'storage',
      workspaceId: 'workspaceId',
      workspaceName: 'workspaceName',
      workspaceStatus: 'workspaceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      autoRenewPeriodUnit: 'string',
      createTime: 'number',
      dlfCatalogId: 'string',
      dlfType: 'string',
      duration: 'number',
      endTime: 'number',
      failReason: 'string',
      paymentDurationUnit: 'string',
      paymentStatus: 'string',
      paymentType: 'string',
      regionId: 'string',
      releaseType: 'string',
      resourceSpec: 'string',
      stateChangeReason: ListWorkspacesResponseBodyWorkspacesStateChangeReason,
      storage: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
      workspaceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRunRequestConfigurationOverridesConfigurations extends $tea.Model {
  /**
   * @remarks
   * The configuration file of SparkConf.
   * 
   * @example
   * spark-default.conf
   */
  configFileName?: string;
  /**
   * @remarks
   * The key of SparkConf.
   * 
   * @example
   * spark.app.name
   */
  configItemKey?: string;
  /**
   * @remarks
   * The value of SparkConf.
   * 
   * @example
   * test_app
   */
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
  /**
   * @remarks
   * The SparkConf objects.
   */
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

export class UpdateProcessDefinitionWithScheduleRequestSchedule extends $tea.Model {
  /**
   * @example
   * 0 0 0 * * ?
   */
  crontab?: string;
  /**
   * @example
   * 2025-12-23 16:13:27
   */
  endTime?: string;
  /**
   * @example
   * 2024-12-23 16:13:27
   */
  startTime?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timezoneId?: string;
  static names(): { [key: string]: string } {
    return {
      crontab: 'crontab',
      endTime: 'endTime',
      startTime: 'startTime',
      timezoneId: 'timezoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crontab: 'string',
      endTime: 'string',
      startTime: 'string',
      timezoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf extends $tea.Model {
  /**
   * @example
   * spark.dynamicAllocation.enabled
   */
  key?: string;
  /**
   * @example
   * true
   */
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

export class UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams extends $tea.Model {
  /**
   * @example
   * esr-4.0.0 (Spark 3.5.2, Scala 2.12)
   */
  displaySparkVersion?: string;
  /**
   * @example
   * ev-h*************
   */
  environmentId?: string;
  /**
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * root_queue
   */
  resourceQueueId?: string;
  sparkConf?: UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf[];
  /**
   * @example
   * 1
   */
  sparkDriverCores?: number;
  /**
   * @example
   * 4g
   */
  sparkDriverMemory?: number;
  /**
   * @example
   * 1
   */
  sparkExecutorCores?: number;
  /**
   * @example
   * 4g
   */
  sparkExecutorMemory?: number;
  /**
   * @example
   * INFO
   */
  sparkLogLevel?: string;
  sparkLogPath?: string;
  /**
   * @example
   * esr-4.0.0 (Spark 3.5.2, Scala 2.12)
   */
  sparkVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TSK-d87******************
   */
  taskBizId?: string;
  /**
   * @example
   * SQL
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * w-d8********
   */
  workspaceBizId?: string;
  static names(): { [key: string]: string } {
    return {
      displaySparkVersion: 'displaySparkVersion',
      environmentId: 'environmentId',
      fusion: 'fusion',
      resourceQueueId: 'resourceQueueId',
      sparkConf: 'sparkConf',
      sparkDriverCores: 'sparkDriverCores',
      sparkDriverMemory: 'sparkDriverMemory',
      sparkExecutorCores: 'sparkExecutorCores',
      sparkExecutorMemory: 'sparkExecutorMemory',
      sparkLogLevel: 'sparkLogLevel',
      sparkLogPath: 'sparkLogPath',
      sparkVersion: 'sparkVersion',
      taskBizId: 'taskBizId',
      type: 'type',
      workspaceBizId: 'workspaceBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displaySparkVersion: 'string',
      environmentId: 'string',
      fusion: 'boolean',
      resourceQueueId: 'string',
      sparkConf: { 'type': 'array', 'itemType': UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParamsSparkConf },
      sparkDriverCores: 'number',
      sparkDriverMemory: 'number',
      sparkExecutorCores: 'number',
      sparkExecutorMemory: 'number',
      sparkLogLevel: 'string',
      sparkLogPath: 'string',
      sparkVersion: 'string',
      taskBizId: 'string',
      type: 'string',
      workspaceBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJson extends $tea.Model {
  /**
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23************
   */
  code?: number;
  /**
   * @example
   * ods transform task
   */
  description?: string;
  /**
   * @example
   * true
   */
  failAlertEnable?: boolean;
  /**
   * @example
   * 1
   */
  failRetryTimes?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ods_transform_task
   */
  name?: string;
  /**
   * @example
   * true
   */
  startAlertEnable?: boolean;
  tags?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   */
  taskParams?: UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EMR-SERVERLESS-SPARK
   */
  taskType?: string;
  /**
   * @example
   * 30
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      alertEmailAddress: 'alertEmailAddress',
      code: 'code',
      description: 'description',
      failAlertEnable: 'failAlertEnable',
      failRetryTimes: 'failRetryTimes',
      name: 'name',
      startAlertEnable: 'startAlertEnable',
      tags: 'tags',
      taskParams: 'taskParams',
      taskType: 'taskType',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEmailAddress: 'string',
      code: 'number',
      description: 'string',
      failAlertEnable: 'boolean',
      failRetryTimes: 'number',
      name: 'string',
      startAlertEnable: 'boolean',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      taskParams: UpdateProcessDefinitionWithScheduleRequestTaskDefinitionJsonTaskParams,
      taskType: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProcessDefinitionWithScheduleRequestTaskRelationJson extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ods batch workflow
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 19************
   */
  postTaskCode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  postTaskVersion?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 16************
   */
  preTaskCode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  preTaskVersion?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      postTaskCode: 'postTaskCode',
      postTaskVersion: 'postTaskVersion',
      preTaskCode: 'preTaskCode',
      preTaskVersion: 'preTaskVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      postTaskCode: 'number',
      postTaskVersion: 'number',
      preTaskCode: 'number',
      preTaskVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProcessDefinitionWithScheduleResponseBodyData extends $tea.Model {
  /**
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @example
   * alicloud_ack_one_cluster
   */
  bizId?: string;
  /**
   * @example
   * 12***********
   */
  code?: string;
  /**
   * @example
   * 2024-09-05T02:03:19Z
   */
  createTime?: string;
  /**
   * @example
   * 0 0 0 * * ?
   */
  crontab?: string;
  /**
   * @example
   * 1
   */
  description?: string;
  /**
   * @example
   * 1710432000000
   */
  endTime?: string;
  /**
   * @example
   * SERIAL
   */
  executionType?: string;
  /**
   * @example
   * 123223
   */
  id?: string;
  /**
   * @example
   * ods_batch_workflow
   */
  name?: string;
  /**
   * @example
   * w-********
   */
  projectName?: string;
  /**
   * @example
   * ONLINE
   */
  releaseState?: string;
  /**
   * @example
   * 0
   */
  startTime?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timezoneId?: string;
  /**
   * @example
   * 2024-03-05T06:24:27Z
   */
  updateTime?: string;
  /**
   * @example
   * 113*********
   */
  userId?: string;
  /**
   * @example
   * w-********
   */
  userName?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  /**
   * @example
   * dwerf*********
   */
  versionHashCode?: string;
  static names(): { [key: string]: string } {
    return {
      alertEmailAddress: 'alertEmailAddress',
      bizId: 'bizId',
      code: 'code',
      createTime: 'createTime',
      crontab: 'crontab',
      description: 'description',
      endTime: 'endTime',
      executionType: 'executionType',
      id: 'id',
      name: 'name',
      projectName: 'projectName',
      releaseState: 'releaseState',
      startTime: 'startTime',
      timezoneId: 'timezoneId',
      updateTime: 'updateTime',
      userId: 'userId',
      userName: 'userName',
      version: 'version',
      versionHashCode: 'versionHashCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEmailAddress: 'string',
      bizId: 'string',
      code: 'string',
      createTime: 'string',
      crontab: 'string',
      description: 'string',
      endTime: 'string',
      executionType: 'string',
      id: 'string',
      name: 'string',
      projectName: 'string',
      releaseState: 'string',
      startTime: 'string',
      timezoneId: 'string',
      updateTime: 'string',
      userId: 'string',
      userName: 'string',
      version: 'number',
      versionHashCode: 'string',
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
   * Adds a RAM user or RAM role to a workspace as a member.
   * 
   * @param request - AddMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMembersResponse
   */
  async addMembersWithOptions(request: AddMembersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddMembersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.memberArns)) {
      body["memberArns"] = request.memberArns;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddMembers",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/auth/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddMembersResponse>(await this.callApi(params, req, runtime), new AddMembersResponse({}));
  }

  /**
   * Adds a RAM user or RAM role to a workspace as a member.
   * 
   * @param request - AddMembersRequest
   * @returns AddMembersResponse
   */
  async addMembers(request: AddMembersRequest): Promise<AddMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addMembersWithOptions(request, headers, runtime);
  }

  /**
   * Terminates a Spark job.
   * 
   * @param request - CancelJobRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelJobRunResponse
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
   * Terminates a Spark job.
   * 
   * @param request - CancelJobRunRequest
   * @returns CancelJobRunResponse
   */
  async cancelJobRun(workspaceId: string, jobRunId: string, request: CancelJobRunRequest): Promise<CancelJobRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelJobRunWithOptions(workspaceId, jobRunId, request, headers, runtime);
  }

  /**
   * 创建工作流定义
   * 
   * @param tmpReq - CreateProcessDefinitionWithScheduleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProcessDefinitionWithScheduleResponse
   */
  async createProcessDefinitionWithScheduleWithOptions(bizId: string, tmpReq: CreateProcessDefinitionWithScheduleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProcessDefinitionWithScheduleResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateProcessDefinitionWithScheduleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.schedule)) {
      request.scheduleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedule, "schedule", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    if (!Util.isUnset(tmpReq.taskDefinitionJson)) {
      request.taskDefinitionJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskDefinitionJson, "taskDefinitionJson", "json");
    }

    if (!Util.isUnset(tmpReq.taskRelationJson)) {
      request.taskRelationJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskRelationJson, "taskRelationJson", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertEmailAddress)) {
      query["alertEmailAddress"] = request.alertEmailAddress;
    }

    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    if (!Util.isUnset(request.executionType)) {
      query["executionType"] = request.executionType;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.productNamespace)) {
      query["productNamespace"] = request.productNamespace;
    }

    if (!Util.isUnset(request.publish)) {
      query["publish"] = request.publish;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceQueue)) {
      query["resourceQueue"] = request.resourceQueue;
    }

    if (!Util.isUnset(request.retryTimes)) {
      query["retryTimes"] = request.retryTimes;
    }

    if (!Util.isUnset(request.runAs)) {
      query["runAs"] = request.runAs;
    }

    if (!Util.isUnset(request.scheduleShrink)) {
      query["schedule"] = request.scheduleShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.taskDefinitionJsonShrink)) {
      query["taskDefinitionJson"] = request.taskDefinitionJsonShrink;
    }

    if (!Util.isUnset(request.taskParallelism)) {
      query["taskParallelism"] = request.taskParallelism;
    }

    if (!Util.isUnset(request.taskRelationJsonShrink)) {
      query["taskRelationJson"] = request.taskRelationJsonShrink;
    }

    if (!Util.isUnset(request.timeout)) {
      query["timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateProcessDefinitionWithSchedule",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/projects/${OpenApiUtil.getEncodeParam(bizId)}/process-definition`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProcessDefinitionWithScheduleResponse>(await this.callApi(params, req, runtime), new CreateProcessDefinitionWithScheduleResponse({}));
  }

  /**
   * 创建工作流定义
   * 
   * @param request - CreateProcessDefinitionWithScheduleRequest
   * @returns CreateProcessDefinitionWithScheduleResponse
   */
  async createProcessDefinitionWithSchedule(bizId: string, request: CreateProcessDefinitionWithScheduleRequest): Promise<CreateProcessDefinitionWithScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProcessDefinitionWithScheduleWithOptions(bizId, request, headers, runtime);
  }

  /**
   * Creates an SQL query task.
   * 
   * @param request - CreateSqlStatementRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSqlStatementResponse
   */
  async createSqlStatementWithOptions(workspaceId: string, request: CreateSqlStatementRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSqlStatementResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.codeContent)) {
      body["codeContent"] = request.codeContent;
    }

    if (!Util.isUnset(request.defaultCatalog)) {
      body["defaultCatalog"] = request.defaultCatalog;
    }

    if (!Util.isUnset(request.defaultDatabase)) {
      body["defaultDatabase"] = request.defaultDatabase;
    }

    if (!Util.isUnset(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!Util.isUnset(request.sqlComputeId)) {
      body["sqlComputeId"] = request.sqlComputeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSqlStatement",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${OpenApiUtil.getEncodeParam(workspaceId)}/statement`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSqlStatementResponse>(await this.callApi(params, req, runtime), new CreateSqlStatementResponse({}));
  }

  /**
   * Creates an SQL query task.
   * 
   * @param request - CreateSqlStatementRequest
   * @returns CreateSqlStatementResponse
   */
  async createSqlStatement(workspaceId: string, request: CreateSqlStatementRequest): Promise<CreateSqlStatementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSqlStatementWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Obtain the job details.
   * 
   * @param request - GetJobRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobRunResponse
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
   * Obtain the job details.
   * 
   * @param request - GetJobRunRequest
   * @returns GetJobRunResponse
   */
  async getJobRun(workspaceId: string, jobRunId: string, request: GetJobRunRequest): Promise<GetJobRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobRunWithOptions(workspaceId, jobRunId, request, headers, runtime);
  }

  /**
   * Queries a list of sessions.
   * 
   * @param request - GetSessionClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSessionClusterResponse
   */
  async getSessionClusterWithOptions(workspaceId: string, sessionClusterId: string, request: GetSessionClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSessionClusterResponse> {
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
      action: "GetSessionCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(workspaceId)}/sessionClusters/${OpenApiUtil.getEncodeParam(sessionClusterId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSessionClusterResponse>(await this.callApi(params, req, runtime), new GetSessionClusterResponse({}));
  }

  /**
   * Queries a list of sessions.
   * 
   * @param request - GetSessionClusterRequest
   * @returns GetSessionClusterResponse
   */
  async getSessionCluster(workspaceId: string, sessionClusterId: string, request: GetSessionClusterRequest): Promise<GetSessionClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSessionClusterWithOptions(workspaceId, sessionClusterId, request, headers, runtime);
  }

  /**
   * Queries the status of an SQL query task.
   * 
   * @param request - GetSqlStatementRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlStatementResponse
   */
  async getSqlStatementWithOptions(workspaceId: string, statementId: string, request: GetSqlStatementRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSqlStatementResponse> {
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
      action: "GetSqlStatement",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${OpenApiUtil.getEncodeParam(workspaceId)}/statement/${OpenApiUtil.getEncodeParam(statementId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSqlStatementResponse>(await this.callApi(params, req, runtime), new GetSqlStatementResponse({}));
  }

  /**
   * Queries the status of an SQL query task.
   * 
   * @param request - GetSqlStatementRequest
   * @returns GetSqlStatementResponse
   */
  async getSqlStatement(workspaceId: string, statementId: string, request: GetSqlStatementRequest): Promise<GetSqlStatementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSqlStatementWithOptions(workspaceId, statementId, request, headers, runtime);
  }

  /**
   * Queries task templates.
   * 
   * @param request - GetTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(workspaceBizId: string, request: GetTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateType)) {
      query["templateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${OpenApiUtil.getEncodeParam(workspaceBizId)}/template`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateResponse>(await this.callApi(params, req, runtime), new GetTemplateResponse({}));
  }

  /**
   * Queries task templates.
   * 
   * @param request - GetTemplateRequest
   * @returns GetTemplateResponse
   */
  async getTemplate(workspaceBizId: string, request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(workspaceBizId, request, headers, runtime);
  }

  /**
   * Assigns a specified role to users.
   * 
   * @param request - GrantRoleToUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantRoleToUsersResponse
   */
  async grantRoleToUsersWithOptions(request: GrantRoleToUsersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GrantRoleToUsersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleArn)) {
      body["roleArn"] = request.roleArn;
    }

    if (!Util.isUnset(request.userArns)) {
      body["userArns"] = request.userArns;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GrantRoleToUsers",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/auth/roles/grant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GrantRoleToUsersResponse>(await this.callApi(params, req, runtime), new GrantRoleToUsersResponse({}));
  }

  /**
   * Assigns a specified role to users.
   * 
   * @param request - GrantRoleToUsersRequest
   * @returns GrantRoleToUsersResponse
   */
  async grantRoleToUsers(request: GrantRoleToUsersRequest): Promise<GrantRoleToUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantRoleToUsersWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of Spark jobs.
   * 
   * @param tmpReq - ListJobRunsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobRunsResponse
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

    if (!Util.isUnset(request.jobRunDeploymentId)) {
      query["jobRunDeploymentId"] = request.jobRunDeploymentId;
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
   * Queries a list of Spark jobs.
   * 
   * @param request - ListJobRunsRequest
   * @returns ListJobRunsResponse
   */
  async listJobRuns(workspaceId: string, request: ListJobRunsRequest): Promise<ListJobRunsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobRunsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Obtains the log content.
   * 
   * @param request - ListLogContentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogContentsResponse
   */
  async listLogContentsWithOptions(workspaceId: string, request: ListLogContentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLogContentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!Util.isUnset(request.length)) {
      query["length"] = request.length;
    }

    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLogContents",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(workspaceId)}/action/listLogContents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListLogContentsResponse>(await this.callApi(params, req, runtime), new ListLogContentsResponse({}));
  }

  /**
   * Obtains the log content.
   * 
   * @param request - ListLogContentsRequest
   * @returns ListLogContentsResponse
   */
  async listLogContents(workspaceId: string, request: ListLogContentsRequest): Promise<ListLogContentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogContentsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the list of published versions of E-MapReduce (EMR) Serverless Spark.
   * 
   * @param request - ListReleaseVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReleaseVersionsResponse
   */
  async listReleaseVersionsWithOptions(request: ListReleaseVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListReleaseVersionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.releaseType)) {
      query["releaseType"] = request.releaseType;
    }

    if (!Util.isUnset(request.releaseVersion)) {
      query["releaseVersion"] = request.releaseVersion;
    }

    if (!Util.isUnset(request.releaseVersionStatus)) {
      query["releaseVersionStatus"] = request.releaseVersionStatus;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListReleaseVersions",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/releaseVersions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListReleaseVersionsResponse>(await this.callApi(params, req, runtime), new ListReleaseVersionsResponse({}));
  }

  /**
   * Queries the list of published versions of E-MapReduce (EMR) Serverless Spark.
   * 
   * @param request - ListReleaseVersionsRequest
   * @returns ListReleaseVersionsResponse
   */
  async listReleaseVersions(request: ListReleaseVersionsRequest): Promise<ListReleaseVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listReleaseVersionsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of sessions.
   * 
   * @param request - ListSessionClustersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSessionClustersResponse
   */
  async listSessionClustersWithOptions(workspaceId: string, request: ListSessionClustersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSessionClustersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.kind)) {
      query["kind"] = request.kind;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.queueName)) {
      query["queueName"] = request.queueName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionClusterId)) {
      query["sessionClusterId"] = request.sessionClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSessionClusters",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(workspaceId)}/sessionClusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSessionClustersResponse>(await this.callApi(params, req, runtime), new ListSessionClustersResponse({}));
  }

  /**
   * Queries the list of sessions.
   * 
   * @param request - ListSessionClustersRequest
   * @returns ListSessionClustersResponse
   */
  async listSessionClusters(workspaceId: string, request: ListSessionClustersRequest): Promise<ListSessionClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSessionClustersWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the list of queues in a Spark workspace.
   * 
   * @param request - ListWorkspaceQueuesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceQueuesResponse
   */
  async listWorkspaceQueuesWithOptions(workspaceId: string, request: ListWorkspaceQueuesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWorkspaceQueuesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environment)) {
      query["environment"] = request.environment;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkspaceQueues",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(workspaceId)}/queues`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListWorkspaceQueuesResponse>(await this.callApi(params, req, runtime), new ListWorkspaceQueuesResponse({}));
  }

  /**
   * Queries the list of queues in a Spark workspace.
   * 
   * @param request - ListWorkspaceQueuesRequest
   * @returns ListWorkspaceQueuesResponse
   */
  async listWorkspaceQueues(workspaceId: string, request: ListWorkspaceQueuesRequest): Promise<ListWorkspaceQueuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspaceQueuesWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries a list of workspaces.
   * 
   * @param request - ListWorkspacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(request: ListWorkspacesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWorkspacesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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

    if (!Util.isUnset(request.state)) {
      query["state"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkspaces",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListWorkspacesResponse>(await this.callApi(params, req, runtime), new ListWorkspacesResponse({}));
  }

  /**
   * Queries a list of workspaces.
   * 
   * @param request - ListWorkspacesRequest
   * @returns ListWorkspacesResponse
   */
  async listWorkspaces(request: ListWorkspacesRequest): Promise<ListWorkspacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspacesWithOptions(request, headers, runtime);
  }

  /**
   * Starts a Spark job.
   * 
   * @param request - StartJobRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartJobRunResponse
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

    if (!Util.isUnset(request.displayReleaseVersion)) {
      body["displayReleaseVersion"] = request.displayReleaseVersion;
    }

    if (!Util.isUnset(request.executionTimeoutSeconds)) {
      body["executionTimeoutSeconds"] = request.executionTimeoutSeconds;
    }

    if (!Util.isUnset(request.fusion)) {
      body["fusion"] = request.fusion;
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
   * Starts a Spark job.
   * 
   * @param request - StartJobRunRequest
   * @returns StartJobRunResponse
   */
  async startJobRun(workspaceId: string, request: StartJobRunRequest): Promise<StartJobRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startJobRunWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 启动工作流实例
   * 
   * @param request - StartProcessInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartProcessInstanceResponse
   */
  async startProcessInstanceWithOptions(bizId: string, request: StartProcessInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartProcessInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isProd)) {
      query["isProd"] = request.isProd;
    }

    if (!Util.isUnset(request.processDefinitionCode)) {
      query["processDefinitionCode"] = request.processDefinitionCode;
    }

    if (!Util.isUnset(request.productNamespace)) {
      query["productNamespace"] = request.productNamespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.runtimeQueue)) {
      query["runtimeQueue"] = request.runtimeQueue;
    }

    if (!Util.isUnset(request.versionHashCode)) {
      query["versionHashCode"] = request.versionHashCode;
    }

    if (!Util.isUnset(request.versionNumber)) {
      query["versionNumber"] = request.versionNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartProcessInstance",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/projects/${OpenApiUtil.getEncodeParam(bizId)}/executors/start-process-instance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartProcessInstanceResponse>(await this.callApi(params, req, runtime), new StartProcessInstanceResponse({}));
  }

  /**
   * 启动工作流实例
   * 
   * @param request - StartProcessInstanceRequest
   * @returns StartProcessInstanceResponse
   */
  async startProcessInstance(bizId: string, request: StartProcessInstanceRequest): Promise<StartProcessInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startProcessInstanceWithOptions(bizId, request, headers, runtime);
  }

  /**
   * Starts a session.
   * 
   * @param request - StartSessionClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSessionClusterResponse
   */
  async startSessionClusterWithOptions(workspaceId: string, request: StartSessionClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartSessionClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.queueName)) {
      body["queueName"] = request.queueName;
    }

    if (!Util.isUnset(request.sessionClusterId)) {
      body["sessionClusterId"] = request.sessionClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartSessionCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(workspaceId)}/sessionClusters/action/startSessionCluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartSessionClusterResponse>(await this.callApi(params, req, runtime), new StartSessionClusterResponse({}));
  }

  /**
   * Starts a session.
   * 
   * @param request - StartSessionClusterRequest
   * @returns StartSessionClusterResponse
   */
  async startSessionCluster(workspaceId: string, request: StartSessionClusterRequest): Promise<StartSessionClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startSessionClusterWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Stops a session.
   * 
   * @param request - StopSessionClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopSessionClusterResponse
   */
  async stopSessionClusterWithOptions(workspaceId: string, request: StopSessionClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopSessionClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.queueName)) {
      body["queueName"] = request.queueName;
    }

    if (!Util.isUnset(request.sessionClusterId)) {
      body["sessionClusterId"] = request.sessionClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopSessionCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(workspaceId)}/sessionClusters/action/stopSessionCluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopSessionClusterResponse>(await this.callApi(params, req, runtime), new StopSessionClusterResponse({}));
  }

  /**
   * Stops a session.
   * 
   * @param request - StopSessionClusterRequest
   * @returns StopSessionClusterResponse
   */
  async stopSessionCluster(workspaceId: string, request: StopSessionClusterRequest): Promise<StopSessionClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopSessionClusterWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Terminates an SQL query task.
   * 
   * @param request - TerminateSqlStatementRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateSqlStatementResponse
   */
  async terminateSqlStatementWithOptions(workspaceId: string, statementId: string, request: TerminateSqlStatementRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TerminateSqlStatementResponse> {
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
      action: "TerminateSqlStatement",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${OpenApiUtil.getEncodeParam(workspaceId)}/statement/${OpenApiUtil.getEncodeParam(statementId)}/terminate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TerminateSqlStatementResponse>(await this.callApi(params, req, runtime), new TerminateSqlStatementResponse({}));
  }

  /**
   * Terminates an SQL query task.
   * 
   * @param request - TerminateSqlStatementRequest
   * @returns TerminateSqlStatementResponse
   */
  async terminateSqlStatement(workspaceId: string, statementId: string, request: TerminateSqlStatementRequest): Promise<TerminateSqlStatementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.terminateSqlStatementWithOptions(workspaceId, statementId, request, headers, runtime);
  }

  /**
   * 更新工作流定义和定时调度
   * 
   * @param tmpReq - UpdateProcessDefinitionWithScheduleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProcessDefinitionWithScheduleResponse
   */
  async updateProcessDefinitionWithScheduleWithOptions(bizId: string, code: string, tmpReq: UpdateProcessDefinitionWithScheduleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProcessDefinitionWithScheduleResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateProcessDefinitionWithScheduleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.schedule)) {
      request.scheduleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedule, "schedule", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    if (!Util.isUnset(tmpReq.taskDefinitionJson)) {
      request.taskDefinitionJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskDefinitionJson, "taskDefinitionJson", "json");
    }

    if (!Util.isUnset(tmpReq.taskRelationJson)) {
      request.taskRelationJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskRelationJson, "taskRelationJson", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertEmailAddress)) {
      query["alertEmailAddress"] = request.alertEmailAddress;
    }

    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    if (!Util.isUnset(request.executionType)) {
      query["executionType"] = request.executionType;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.productNamespace)) {
      query["productNamespace"] = request.productNamespace;
    }

    if (!Util.isUnset(request.publish)) {
      query["publish"] = request.publish;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.releaseState)) {
      query["releaseState"] = request.releaseState;
    }

    if (!Util.isUnset(request.resourceQueue)) {
      query["resourceQueue"] = request.resourceQueue;
    }

    if (!Util.isUnset(request.retryTimes)) {
      query["retryTimes"] = request.retryTimes;
    }

    if (!Util.isUnset(request.runAs)) {
      query["runAs"] = request.runAs;
    }

    if (!Util.isUnset(request.scheduleShrink)) {
      query["schedule"] = request.scheduleShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.taskDefinitionJsonShrink)) {
      query["taskDefinitionJson"] = request.taskDefinitionJsonShrink;
    }

    if (!Util.isUnset(request.taskParallelism)) {
      query["taskParallelism"] = request.taskParallelism;
    }

    if (!Util.isUnset(request.taskRelationJsonShrink)) {
      query["taskRelationJson"] = request.taskRelationJsonShrink;
    }

    if (!Util.isUnset(request.timeout)) {
      query["timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProcessDefinitionWithSchedule",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/projects/${OpenApiUtil.getEncodeParam(bizId)}/process-definition/${OpenApiUtil.getEncodeParam(code)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProcessDefinitionWithScheduleResponse>(await this.callApi(params, req, runtime), new UpdateProcessDefinitionWithScheduleResponse({}));
  }

  /**
   * 更新工作流定义和定时调度
   * 
   * @param request - UpdateProcessDefinitionWithScheduleRequest
   * @returns UpdateProcessDefinitionWithScheduleResponse
   */
  async updateProcessDefinitionWithSchedule(bizId: string, code: string, request: UpdateProcessDefinitionWithScheduleRequest): Promise<UpdateProcessDefinitionWithScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProcessDefinitionWithScheduleWithOptions(bizId, code, request, headers, runtime);
  }

}
