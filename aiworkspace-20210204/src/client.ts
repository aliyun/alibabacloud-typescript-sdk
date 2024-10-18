// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CodeSourceItem extends $tea.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * master
   */
  codeBranch?: string;
  /**
   * @example
   * 44da109b59f8596152987eaa8f3b2487bb72ea63
   */
  codeCommit?: string;
  /**
   * @example
   * https://code.aliyun.com/pai-dlc/examples.git
   */
  codeRepo?: string;
  codeRepoAccessToken?: string;
  /**
   * @example
   * user
   */
  codeRepoUserName?: string;
  /**
   * @example
   * code-20210111103721-85qz78ia96lu
   */
  codeSourceId?: string;
  /**
   * @example
   * code source of dlc examples
   */
  description?: string;
  /**
   * @example
   * MyCodeSourceName1
   */
  displayName?: string;
  /**
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * /root/code/
   */
  mountPath?: string;
  /**
   * @example
   * 1157290171663117
   */
  userId?: string;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      codeBranch: 'CodeBranch',
      codeCommit: 'CodeCommit',
      codeRepo: 'CodeRepo',
      codeRepoAccessToken: 'CodeRepoAccessToken',
      codeRepoUserName: 'CodeRepoUserName',
      codeSourceId: 'CodeSourceId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      mountPath: 'MountPath',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      codeBranch: 'string',
      codeCommit: 'string',
      codeRepo: 'string',
      codeRepoAccessToken: 'string',
      codeRepoUserName: 'string',
      codeSourceId: 'string',
      description: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      mountPath: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Collection extends $tea.Model {
  /**
   * @example
   * AI4D
   */
  collectionName?: string;
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 155770209******
   */
  ownerId?: string;
  /**
   * @example
   * 155770209******
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'CollectionName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      ownerId: 'OwnerId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionName: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      ownerId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Dataset extends $tea.Model {
  /**
   * @example
   * PRIVATE PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * OSS URL
   */
  dataSourceType?: string;
  /**
   * @example
   * COMMON PIC TEXT VIDEO AUDIO
   */
  dataType?: string;
  /**
   * @example
   * d-c0h44g3wlwkj8o4348
   */
  datasetId?: string;
  /**
   * @example
   * Animal images.
   */
  description?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  labels?: Label[];
  latestVersion?: DatasetVersion;
  /**
   * @example
   * AnimalDataset
   */
  name?: string;
  /**
   * @example
   * jsonstring
   */
  options?: string;
  /**
   * @example
   * 1004110000006048
   */
  ownerId?: string;
  /**
   * @example
   * FILE DIRECTORY TABULAR
   */
  property?: string;
  /**
   * @example
   * Ecs
   */
  providerType?: string;
  /**
   * @example
   * d-bvfasdf4wxxj8o411
   */
  sourceDatasetId?: string;
  /**
   * @example
   * v2
   */
  sourceDatasetVersion?: string;
  /**
   * @example
   * Source Id
   */
  sourceId?: string;
  /**
   * @example
   * USER ITAG  PAI_PUBLIC_DATASET
   */
  sourceType?: string;
  /**
   * @example
   * text-classification
   */
  tagTemplateType?: string;
  /**
   * @example
   * oss://xxx
   */
  uri?: string;
  /**
   * @example
   * 2004110000006048
   */
  userId?: string;
  /**
   * @example
   * Workspace Id
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      dataSourceType: 'DataSourceType',
      dataType: 'DataType',
      datasetId: 'DatasetId',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      name: 'Name',
      options: 'Options',
      ownerId: 'OwnerId',
      property: 'Property',
      providerType: 'ProviderType',
      sourceDatasetId: 'SourceDatasetId',
      sourceDatasetVersion: 'SourceDatasetVersion',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      tagTemplateType: 'TagTemplateType',
      uri: 'Uri',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      dataSourceType: 'string',
      dataType: 'string',
      datasetId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestVersion: DatasetVersion,
      name: 'string',
      options: 'string',
      ownerId: 'string',
      property: 'string',
      providerType: 'string',
      sourceDatasetId: 'string',
      sourceDatasetVersion: 'string',
      sourceId: 'string',
      sourceType: 'string',
      tagTemplateType: 'string',
      uri: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatasetLabel extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatasetVersion extends $tea.Model {
  dataCount?: number;
  dataSize?: number;
  /**
   * @example
   * OSS
   */
  dataSourceType?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labels?: Label[];
  options?: string;
  /**
   * @example
   * FILE
   */
  property?: string;
  sourceId?: string;
  sourceType?: string;
  /**
   * @example
   * OSS://xxx
   */
  uri?: string;
  /**
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      dataSourceType: 'DataSourceType',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      options: 'Options',
      property: 'Property',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      uri: 'Uri',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataSize: 'number',
      dataSourceType: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      options: 'string',
      property: 'string',
      sourceId: 'string',
      sourceType: 'string',
      uri: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Experiment extends $tea.Model {
  accessibility?: string;
  artifactUri?: string;
  experimentId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labels?: ExperimentLabel[];
  latestRun?: Run;
  name?: string;
  ownerId?: string;
  requestId?: string;
  tensorboardLogUri?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      artifactUri: 'ArtifactUri',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestRun: 'LatestRun',
      name: 'Name',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      tensorboardLogUri: 'TensorboardLogUri',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      artifactUri: 'string',
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': ExperimentLabel },
      latestRun: Run,
      name: 'string',
      ownerId: 'string',
      requestId: 'string',
      tensorboardLogUri: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExperimentLabel extends $tea.Model {
  /**
   * @example
   * exp-890waerw09a0f
   */
  experimentId?: string;
  /**
   * @example
   * 2023-12-27T03:30:04Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-12-27T03:30:04Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * key
   */
  key?: string;
  /**
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Label extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LabelInfo extends $tea.Model {
  /**
   * @example
   * key
   */
  key?: string;
  /**
   * @example
   * value
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Model extends $tea.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * cv
   */
  domain?: string;
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtModifiedTime?: string;
  labels?: Label[];
  latestVersion?: ModelVersion;
  modelDescription?: string;
  /**
   * @example
   * https://***.md
   */
  modelDoc?: string;
  /**
   * @example
   * model-1123*****
   */
  modelId?: string;
  modelName?: string;
  /**
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @example
   * 101
   */
  orderNumber?: number;
  /**
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @example
   * 1557702098******
   */
  ownerId?: string;
  /**
   * @example
   * pai
   */
  provider?: string;
  /**
   * @example
   * text-classifiaction
   */
  task?: string;
  /**
   * @example
   * 1557702098******
   */
  userId?: string;
  /**
   * @example
   * 234**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      domain: 'Domain',
      extraInfo: 'ExtraInfo',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      modelDescription: 'ModelDescription',
      modelDoc: 'ModelDoc',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelType: 'ModelType',
      orderNumber: 'OrderNumber',
      origin: 'Origin',
      ownerId: 'OwnerId',
      provider: 'Provider',
      task: 'Task',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      domain: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestVersion: ModelVersion,
      modelDescription: 'string',
      modelDoc: 'string',
      modelId: 'string',
      modelName: 'string',
      modelType: 'string',
      orderNumber: 'number',
      origin: 'string',
      ownerId: 'string',
      provider: 'string',
      task: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelVersion extends $tea.Model {
  approvalStatus?: string;
  compressionSpec?: { [key: string]: any };
  evaluationSpec?: { [key: string]: any };
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtModifiedTime?: string;
  inferenceSpec?: { [key: string]: any };
  labels?: Label[];
  metrics?: { [key: string]: any };
  options?: string;
  /**
   * @example
   * 155770209******
   */
  ownerId?: string;
  sourceId?: string;
  sourceType?: string;
  trainingSpec?: { [key: string]: any };
  /**
   * @example
   * oss://bucket/path-to-model
   */
  uri?: string;
  /**
   * @example
   * 155770209******
   */
  userId?: string;
  versionDescription?: string;
  /**
   * @example
   * 1.0.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      compressionSpec: 'CompressionSpec',
      evaluationSpec: 'EvaluationSpec',
      extraInfo: 'ExtraInfo',
      formatType: 'FormatType',
      frameworkType: 'FrameworkType',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      inferenceSpec: 'InferenceSpec',
      labels: 'Labels',
      metrics: 'Metrics',
      options: 'Options',
      ownerId: 'OwnerId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trainingSpec: 'TrainingSpec',
      uri: 'Uri',
      userId: 'UserId',
      versionDescription: 'VersionDescription',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      compressionSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evaluationSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formatType: 'string',
      frameworkType: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      inferenceSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'array', 'itemType': Label },
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      options: 'string',
      ownerId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trainingSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      uri: 'string',
      userId: 'string',
      versionDescription: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Run extends $tea.Model {
  accessibility?: string;
  experimentId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labels?: RunLabel[];
  metrics?: RunMetric[];
  name?: string;
  ownerId?: string;
  params?: RunParam[];
  requestId?: string;
  runId?: string;
  sourceId?: string;
  sourceType?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      metrics: 'Metrics',
      name: 'Name',
      ownerId: 'OwnerId',
      params: 'Params',
      requestId: 'RequestId',
      runId: 'RunId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': RunLabel },
      metrics: { 'type': 'array', 'itemType': RunMetric },
      name: 'string',
      ownerId: 'string',
      params: { 'type': 'array', 'itemType': RunParam },
      requestId: 'string',
      runId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLabel extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  runId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      key: 'Key',
      runId: 'RunId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      key: 'string',
      runId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMetric extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  step?: number;
  timestamp?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      step: 'Step',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      step: 'number',
      timestamp: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunParam extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Trial extends $tea.Model {
  accessibility?: string;
  experimentId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labels?: { [key: string]: any }[];
  name?: string;
  ownerId?: string;
  sourceId?: string;
  sourceType?: string;
  trialId?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      name: 'Name',
      ownerId: 'OwnerId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trialId: 'TrialId',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      name: 'string',
      ownerId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trialId: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrialLabel extends $tea.Model {
  /**
   * @example
   * 2023-12-27T03:30:04Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-12-27T03:30:04Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * key
   */
  key?: string;
  trialId?: string;
  /**
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      key: 'Key',
      trialId: 'TrialId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      key: 'string',
      trialId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequest extends $tea.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  description?: string;
  imageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/pai-compression/nlp:gpu
   */
  imageUri?: string;
  labels?: AddImageRequestLabels[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nlp-compression
   */
  name?: string;
  size?: number;
  /**
   * @example
   * 15******45
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      imageId: 'ImageId',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
      size: 'Size',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      imageId: 'string',
      imageUri: 'string',
      labels: { 'type': 'array', 'itemType': AddImageRequestLabels },
      name: 'string',
      size: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBody extends $tea.Model {
  /**
   * @example
   * image-4c62******53uor
   */
  imageId?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddImageResponseBody;
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
      body: AddImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageLabelsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  labels?: AddImageLabelsRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': AddImageLabelsRequestLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageLabelsResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class AddImageLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddImageLabelsResponseBody;
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
      body: AddImageLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemberRoleResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class AddMemberRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddMemberRoleResponseBody;
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
      body: AddMemberRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCodeSourceRequest extends $tea.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * master
   */
  codeBranch?: string;
  /**
   * @example
   * https://code.aliyun.com/******
   */
  codeRepo?: string;
  /**
   * @example
   * ***
   */
  codeRepoAccessToken?: string;
  /**
   * @example
   * use***
   */
  codeRepoUserName?: string;
  /**
   * @example
   * code source of dlc examples
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyCodeSource1
   */
  displayName?: string;
  /**
   * @example
   * /root/code/code-source-1
   */
  mountPath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      codeBranch: 'CodeBranch',
      codeRepo: 'CodeRepo',
      codeRepoAccessToken: 'CodeRepoAccessToken',
      codeRepoUserName: 'CodeRepoUserName',
      description: 'Description',
      displayName: 'DisplayName',
      mountPath: 'MountPath',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      codeBranch: 'string',
      codeRepo: 'string',
      codeRepoAccessToken: 'string',
      codeRepoUserName: 'string',
      description: 'string',
      displayName: 'string',
      mountPath: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCodeSourceResponseBody extends $tea.Model {
  /**
   * @example
   * code-20********
   */
  codeSourceId?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3**********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeSourceId: 'CodeSourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSourceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCodeSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCodeSourceResponseBody;
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
      body: CreateCodeSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequest extends $tea.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  dataCount?: number;
  dataSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NAS
   */
  dataSourceType?: string;
  /**
   * @example
   * COMMON
   */
  dataType?: string;
  description?: string;
  labels?: Label[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  provider?: string;
  /**
   * @example
   * Ecs
   */
  providerType?: string;
  sourceDatasetId?: string;
  sourceDatasetVersion?: string;
  /**
   * @example
   * jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nas://09f****f2.cn-hangzhou/
   */
  uri?: string;
  /**
   * @example
   * 29884000000186970
   */
  userId?: string;
  versionDescription?: string;
  versionLabels?: Label[];
  /**
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      dataSourceType: 'DataSourceType',
      dataType: 'DataType',
      description: 'Description',
      labels: 'Labels',
      name: 'Name',
      options: 'Options',
      property: 'Property',
      provider: 'Provider',
      providerType: 'ProviderType',
      sourceDatasetId: 'SourceDatasetId',
      sourceDatasetVersion: 'SourceDatasetVersion',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      uri: 'Uri',
      userId: 'UserId',
      versionDescription: 'VersionDescription',
      versionLabels: 'VersionLabels',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      dataCount: 'number',
      dataSize: 'number',
      dataSourceType: 'string',
      dataType: 'string',
      description: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      name: 'string',
      options: 'string',
      property: 'string',
      provider: 'string',
      providerType: 'string',
      sourceDatasetId: 'string',
      sourceDatasetVersion: 'string',
      sourceId: 'string',
      sourceType: 'string',
      uri: 'string',
      userId: 'string',
      versionDescription: 'string',
      versionLabels: { 'type': 'array', 'itemType': Label },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponseBody extends $tea.Model {
  /**
   * @example
   * d-rbvg5*****jhc9ks92
   */
  datasetId?: string;
  /**
   * @example
   * B2C51F93-1C07-5477-9705-5FDB****F19F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatasetResponseBody;
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
      body: CreateDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetLabelsRequest extends $tea.Model {
  labels?: Label[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': Label },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetLabelsResponseBody extends $tea.Model {
  /**
   * @example
   * A083731B-4973-54D1-B324-E53****4DD44
   */
  requestId?: string;
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

export class CreateDatasetLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatasetLabelsResponseBody;
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
      body: CreateDatasetLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentRequest extends $tea.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * Artifact的OSS存储路径
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou.aliyuncs.com/test
   */
  artifactUri?: string;
  /**
   * @remarks
   * 标签
   */
  labels?: LabelInfo[];
  /**
   * @remarks
   * 名称
   * 
   * This parameter is required.
   * 
   * @example
   * exp-test
   */
  name?: string;
  /**
   * @remarks
   * 工作空间ID
   * 
   * This parameter is required.
   * 
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      artifactUri: 'ArtifactUri',
      labels: 'Labels',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      artifactUri: 'string',
      labels: { 'type': 'array', 'itemType': LabelInfo },
      name: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentResponseBody extends $tea.Model {
  experimentId?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateExperimentResponseBody;
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
      body: CreateExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  members?: CreateMemberRequestMembers[];
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': CreateMemberRequestMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberResponseBody extends $tea.Model {
  members?: CreateMemberResponseBodyMembers[];
  /**
   * @example
   * DA869D1B-035A-43B2-ACC1-C56681BD9FAA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': CreateMemberResponseBodyMembers },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMemberResponseBody;
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
      body: CreateMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequest extends $tea.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * nlp
   */
  domain?: string;
  /**
   * **if can be null:**
   * true
   */
  extraInfo?: { [key: string]: any };
  labels?: Label[];
  modelDescription?: string;
  /**
   * @example
   * https://*.md
   */
  modelDoc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modelName?: string;
  /**
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @example
   * 101
   */
  orderNumber?: number;
  /**
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @example
   * 796**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      domain: 'Domain',
      extraInfo: 'ExtraInfo',
      labels: 'Labels',
      modelDescription: 'ModelDescription',
      modelDoc: 'ModelDoc',
      modelName: 'ModelName',
      modelType: 'ModelType',
      orderNumber: 'OrderNumber',
      origin: 'Origin',
      task: 'Task',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      domain: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'array', 'itemType': Label },
      modelDescription: 'string',
      modelDoc: 'string',
      modelName: 'string',
      modelType: 'string',
      orderNumber: 'number',
      origin: 'string',
      task: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponseBody extends $tea.Model {
  /**
   * @example
   * model-rbvg5wzljz****ks92
   */
  modelId?: string;
  /**
   * @example
   * 9DAD3112-AE22-5563-9A02-5C7E8****E35
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModelResponseBody;
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
      body: CreateModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelLabelsRequest extends $tea.Model {
  labels?: Label[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': Label },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelLabelsResponseBody extends $tea.Model {
  /**
   * @example
   * F81D9EC0-1872-50F5-A96C-A0647D****1D
   */
  requestId?: string;
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

export class CreateModelLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModelLabelsResponseBody;
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
      body: CreateModelLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelVersionRequest extends $tea.Model {
  /**
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @example
   * {}
   */
  compressionSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  evaluationSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @example
   * {
   *     "processor": "tensorflow_gpu_1.12"
   * }
   */
  inferenceSpec?: { [key: string]: any };
  labels?: Label[];
  /**
   * @example
   * {}
   */
  metrics?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  options?: string;
  /**
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/
   */
  uri?: string;
  versionDescription?: string;
  /**
   * @example
   * 0.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      compressionSpec: 'CompressionSpec',
      evaluationSpec: 'EvaluationSpec',
      extraInfo: 'ExtraInfo',
      formatType: 'FormatType',
      frameworkType: 'FrameworkType',
      inferenceSpec: 'InferenceSpec',
      labels: 'Labels',
      metrics: 'Metrics',
      options: 'Options',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trainingSpec: 'TrainingSpec',
      uri: 'Uri',
      versionDescription: 'VersionDescription',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      compressionSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evaluationSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formatType: 'string',
      frameworkType: 'string',
      inferenceSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'array', 'itemType': Label },
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      options: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trainingSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      uri: 'string',
      versionDescription: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelVersionResponseBody extends $tea.Model {
  /**
   * @example
   * 21645FCD-BAB9-5742-89AE-AEB27****B2E
   */
  requestId?: string;
  /**
   * @example
   * 0.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModelVersionResponseBody;
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
      body: CreateModelVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelVersionLabelsRequest extends $tea.Model {
  labels?: Label[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': Label },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelVersionLabelsResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class CreateModelVersionLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModelVersionLabelsResponseBody;
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
      body: CreateModelVersionLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductOrdersRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  products?: CreateProductOrdersRequestProducts[];
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      products: 'Products',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      products: { 'type': 'array', 'itemType': CreateProductOrdersRequestProducts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductOrdersResponseBody extends $tea.Model {
  /**
   * @example
   * 3ed6a882-0d85-4dd8-ad36-cd8d74ab9fdb
   */
  buyProductRequestId?: string;
  message?: string;
  /**
   * @example
   * 210292536260646
   */
  orderId?: string;
  /**
   * @example
   * ksdjf-jksd-*****slkdjf
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buyProductRequestId: 'BuyProductRequestId',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyProductRequestId: 'string',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductOrdersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProductOrdersResponseBody;
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
      body: CreateProductOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * exp-6thbb5xrbmp*****
   */
  experimentId?: string;
  labels?: Label[];
  /**
   * @example
   * myName
   */
  name?: string;
  params?: RunParam[];
  /**
   * @example
   * job-jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @example
   * DLC
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      labels: 'Labels',
      name: 'Name',
      params: 'Params',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      name: 'string',
      params: { 'type': 'array', 'itemType': RunParam },
      sourceId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunResponseBody extends $tea.Model {
  /**
   * @example
   * run-1meoz7VJd2C6f****
   */
  runId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRunResponseBody;
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
      body: CreateRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * display name
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  envTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * workspace_example
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      envTypes: 'EnvTypes',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponseBody extends $tea.Model {
  /**
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWorkspaceResponseBody;
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
      body: CreateWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResourceRequest extends $tea.Model {
  /**
   * @example
   * CreateAndAttach
   */
  option?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resources?: CreateWorkspaceResourceRequestResources[];
  static names(): { [key: string]: string } {
    return {
      option: 'Option',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      option: 'string',
      resources: { 'type': 'array', 'itemType': CreateWorkspaceResourceRequestResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  resources?: CreateWorkspaceResourceResponseBodyResources[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': CreateWorkspaceResourceResponseBodyResources },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWorkspaceResourceResponseBody;
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
      body: CreateWorkspaceResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCodeSourceResponseBody extends $tea.Model {
  /**
   * @example
   * code-20210111103721-85qz78ia96lu
   */
  codeSourceId?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeSourceId: 'CodeSourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSourceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCodeSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCodeSourceResponseBody;
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
      body: DeleteCodeSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetResponseBody extends $tea.Model {
  /**
   * @example
   * A0F049F0-8D69-5BAC-8F10-B******A34C
   */
  requestId?: string;
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

export class DeleteDatasetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatasetResponseBody;
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
      body: DeleteDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetLabelsRequest extends $tea.Model {
  /**
   * @example
   * key1,key2
   */
  labelKeys?: string;
  static names(): { [key: string]: string } {
    return {
      labelKeys: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKeys: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetLabelsResponseBody extends $tea.Model {
  /**
   * @example
   * 64B50C1D-D4C2-560C-86A3-A6ED****16D
   */
  requestId?: string;
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

export class DeleteDatasetLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatasetLabelsResponseBody;
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
      body: DeleteDatasetLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentResponseBody extends $tea.Model {
  /**
   * @example
   * 8D7B2E70-F770-505B-A672-09F1D8F2EC1E
   */
  requestId?: string;
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

export class DeleteExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExperimentResponseBody;
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
      body: DeleteExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentLabelResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class DeleteExperimentLabelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExperimentLabelResponseBody;
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
      body: DeleteExperimentLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMembersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 145883-21513926******88039,145883-2769726******87513
   */
  memberIds?: string;
  static names(): { [key: string]: string } {
    return {
      memberIds: 'MemberIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMembersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  /**
   * @example
   * D5BFFEE3-6025-443F-8A03-02D619B5C4B9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMembersResponseBody;
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
      body: DeleteMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class DeleteModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteModelResponseBody;
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
      body: DeleteModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelLabelsRequest extends $tea.Model {
  /**
   * @example
   * key1,key2
   */
  labelKeys?: string;
  static names(): { [key: string]: string } {
    return {
      labelKeys: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKeys: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelLabelsResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class DeleteModelLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteModelLabelsResponseBody;
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
      body: DeleteModelLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelVersionResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class DeleteModelVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteModelVersionResponseBody;
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
      body: DeleteModelVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelVersionLabelsRequest extends $tea.Model {
  /**
   * @example
   * key1,key2
   */
  labelKeys?: string;
  static names(): { [key: string]: string } {
    return {
      labelKeys: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKeys: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelVersionLabelsResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class DeleteModelVersionLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteModelVersionLabelsResponseBody;
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
      body: DeleteModelVersionLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRunResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
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

export class DeleteRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRunResponseBody;
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
      body: DeleteRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRunLabelResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
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

export class DeleteRunLabelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRunLabelResponseBody;
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
      body: DeleteRunLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class DeleteWorkspaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkspaceResponseBody;
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
      body: DeleteWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResourceRequest extends $tea.Model {
  /**
   * @example
   * group
   */
  groupName?: string;
  labels?: string;
  /**
   * @example
   * DetachAndDelete
   */
  option?: string;
  /**
   * @example
   * DLC
   */
  productType?: string;
  resourceIds?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      labels: 'Labels',
      option: 'Option',
      productType: 'ProductType',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      labels: 'string',
      option: 'string',
      productType: 'string',
      resourceIds: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  resourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkspaceResourceResponseBody;
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
      body: DeleteWorkspaceResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeSourceResponseBody extends $tea.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * master
   */
  codeBranch?: string;
  /**
   * @example
   * 44da10***********
   */
  codeCommit?: string;
  /**
   * @example
   * https://code.aliyun.com/pai-dlc/examples.git
   */
  codeRepo?: string;
  /**
   * @example
   * xxxx
   */
  codeRepoAccessToken?: string;
  /**
   * @example
   * user1
   */
  codeRepoUserName?: string;
  /**
   * @example
   * code-202**********
   */
  codeSourceId?: string;
  /**
   * @example
   * This is my data source 1.
   */
  description?: string;
  /**
   * @example
   * MyCodeSource1
   */
  displayName?: string;
  /**
   * @example
   * 2021-01-12T23:36:01.123Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T23:36:01.123Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * /root/code
   */
  mountPath?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * 1722********
   */
  userId?: string;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      codeBranch: 'CodeBranch',
      codeCommit: 'CodeCommit',
      codeRepo: 'CodeRepo',
      codeRepoAccessToken: 'CodeRepoAccessToken',
      codeRepoUserName: 'CodeRepoUserName',
      codeSourceId: 'CodeSourceId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      mountPath: 'MountPath',
      requestId: 'RequestId',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      codeBranch: 'string',
      codeCommit: 'string',
      codeRepo: 'string',
      codeRepoAccessToken: 'string',
      codeRepoUserName: 'string',
      codeSourceId: 'string',
      description: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      mountPath: 'string',
      requestId: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCodeSourceResponseBody;
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
      body: GetCodeSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBody extends $tea.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * NAS
   */
  dataSourceType?: string;
  /**
   * @example
   * COMMON
   */
  dataType?: string;
  /**
   * @example
   * d-rbvg5wz****c9ks92
   */
  datasetId?: string;
  description?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  labels?: Label[];
  latestVersion?: DatasetVersion;
  /**
   * @example
   * myName
   */
  name?: string;
  /**
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @example
   * 1631044****3440
   */
  ownerId?: string;
  /**
   * @example
   * DIRECTORY
   */
  property?: string;
  provider?: string;
  providerType?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  sourceDatasetId?: string;
  sourceDatasetVersion?: string;
  /**
   * @example
   * jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @example
   * USER
   */
  sourceType?: string;
  tagTemplateType?: string;
  /**
   * @example
   * nas://09f****f2.cn-hangzhou/
   */
  uri?: string;
  /**
   * @example
   * 2485765****023475
   */
  userId?: string;
  /**
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      dataSourceType: 'DataSourceType',
      dataType: 'DataType',
      datasetId: 'DatasetId',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      name: 'Name',
      options: 'Options',
      ownerId: 'OwnerId',
      property: 'Property',
      provider: 'Provider',
      providerType: 'ProviderType',
      requestId: 'RequestId',
      sourceDatasetId: 'SourceDatasetId',
      sourceDatasetVersion: 'SourceDatasetVersion',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      tagTemplateType: 'TagTemplateType',
      uri: 'Uri',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      dataSourceType: 'string',
      dataType: 'string',
      datasetId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestVersion: DatasetVersion,
      name: 'string',
      options: 'string',
      ownerId: 'string',
      property: 'string',
      provider: 'string',
      providerType: 'string',
      requestId: 'string',
      sourceDatasetId: 'string',
      sourceDatasetVersion: 'string',
      sourceId: 'string',
      sourceType: 'string',
      tagTemplateType: 'string',
      uri: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatasetResponseBody;
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
      body: GetDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultWorkspaceRequest extends $tea.Model {
  /**
   * @example
   * false
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultWorkspaceResponseBody extends $tea.Model {
  conditions?: GetDefaultWorkspaceResponseBodyConditions[];
  /**
   * @example
   * 17915******4216
   */
  creator?: string;
  /**
   * @example
   * workspace description example
   */
  description?: string;
  /**
   * @example
   * workspace-example
   */
  displayName?: string;
  envTypes?: string[];
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  owner?: GetDefaultWorkspaceResponseBodyOwner;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  /**
   * @example
   * workspace-example
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      creator: 'Creator',
      description: 'Description',
      displayName: 'DisplayName',
      envTypes: 'EnvTypes',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      owner: 'Owner',
      requestId: 'RequestId',
      status: 'Status',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': GetDefaultWorkspaceResponseBodyConditions },
      creator: 'string',
      description: 'string',
      displayName: 'string',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      owner: GetDefaultWorkspaceResponseBodyOwner,
      requestId: 'string',
      status: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultWorkspaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDefaultWorkspaceResponseBody;
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
      body: GetDefaultWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentRequest extends $tea.Model {
  /**
   * @example
   * false
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Experiment;
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
      body: Experiment,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageRequest extends $tea.Model {
  /**
   * @example
   * false
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBody extends $tea.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  description?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * registry.cn-hangzhou.aliyuncs.******ession/nlp:gpu
   */
  imageUri?: string;
  labels?: GetImageResponseBodyLabels[];
  /**
   * @example
   * nlp-compression
   */
  name?: string;
  /**
   * @example
   * 15577******8921
   */
  parentUserId?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  size?: number;
  /**
   * @example
   * 15577******8921
   */
  userId?: string;
  /**
   * @example
   * 15945
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
      parentUserId: 'ParentUserId',
      requestId: 'RequestId',
      size: 'Size',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageUri: 'string',
      labels: { 'type': 'array', 'itemType': GetImageResponseBodyLabels },
      name: 'string',
      parentUserId: 'string',
      requestId: 'string',
      size: 'number',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetImageResponseBody;
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
      body: GetImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberRequest extends $tea.Model {
  memberId?: string;
  /**
   * @example
   * 21513926******88039
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberResponseBody extends $tea.Model {
  /**
   * @example
   * myDisplayName
   */
  displayName?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 145883-21513926******88039
   */
  memberId?: string;
  /**
   * @example
   * user1
   */
  memberName?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  roles?: string[];
  /**
   * @example
   * 21513926******88039
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      memberId: 'MemberId',
      memberName: 'MemberName',
      requestId: 'RequestId',
      roles: 'Roles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      gmtCreateTime: 'string',
      memberId: 'string',
      memberName: 'string',
      requestId: 'string',
      roles: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMemberResponseBody;
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
      body: GetMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBody extends $tea.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * cv
   */
  domain?: string;
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  labels?: Label[];
  latestVersion?: ModelVersion;
  modelDescription?: string;
  /**
   * @example
   * https://***.md
   */
  modelDoc?: string;
  /**
   * @example
   * model-rbvg5wzljz****ks92
   */
  modelId?: string;
  modelName?: string;
  /**
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @example
   * 1
   */
  orderNumber?: number;
  /**
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @example
   * 1234567890******
   */
  ownerId?: string;
  /**
   * @example
   * pai
   */
  provider?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @example
   * 1234567890******
   */
  userId?: string;
  /**
   * @example
   * 234**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      domain: 'Domain',
      extraInfo: 'ExtraInfo',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      modelDescription: 'ModelDescription',
      modelDoc: 'ModelDoc',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelType: 'ModelType',
      orderNumber: 'OrderNumber',
      origin: 'Origin',
      ownerId: 'OwnerId',
      provider: 'Provider',
      requestId: 'RequestId',
      task: 'Task',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      domain: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestVersion: ModelVersion,
      modelDescription: 'string',
      modelDoc: 'string',
      modelId: 'string',
      modelName: 'string',
      modelType: 'string',
      orderNumber: 'number',
      origin: 'string',
      ownerId: 'string',
      provider: 'string',
      requestId: 'string',
      task: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModelResponseBody;
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
      body: GetModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelVersionResponseBody extends $tea.Model {
  /**
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @example
   * {}
   */
  compressionSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  evaluationSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * {
   *     "Processor": "tensorflow_gpu_1.12"
   * }
   */
  inferenceSpec?: { [key: string]: any };
  labels?: Label[];
  /**
   * @example
   * {}
   */
  metrics?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  options?: string;
  /**
   * @example
   * 1234567890******
   */
  ownerId?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  uri?: string;
  /**
   * @example
   * 1234567890******
   */
  userId?: string;
  versionDescription?: string;
  /**
   * @example
   * 0.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      compressionSpec: 'CompressionSpec',
      evaluationSpec: 'EvaluationSpec',
      extraInfo: 'ExtraInfo',
      formatType: 'FormatType',
      frameworkType: 'FrameworkType',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      inferenceSpec: 'InferenceSpec',
      labels: 'Labels',
      metrics: 'Metrics',
      options: 'Options',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trainingSpec: 'TrainingSpec',
      uri: 'Uri',
      userId: 'UserId',
      versionDescription: 'VersionDescription',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      compressionSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evaluationSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formatType: 'string',
      frameworkType: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      inferenceSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'array', 'itemType': Label },
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      options: 'string',
      ownerId: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trainingSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      uri: 'string',
      userId: 'string',
      versionDescription: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModelVersionResponseBody;
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
      body: GetModelVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionRequest extends $tea.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * 17915******4216
   */
  creator?: string;
  option?: string;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      creator: 'Creator',
      option: 'Option',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      creator: 'string',
      option: 'string',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionResponseBody extends $tea.Model {
  /**
   * @example
   * PaiDLC:ListJobs
   */
  permissionCode?: string;
  permissionRules?: GetPermissionResponseBodyPermissionRules[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      permissionCode: 'PermissionCode',
      permissionRules: 'PermissionRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionCode: 'string',
      permissionRules: { 'type': 'array', 'itemType': GetPermissionResponseBodyPermissionRules },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPermissionResponseBody;
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
      body: GetPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Run;
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
      body: Run,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBody extends $tea.Model {
  adminNames?: string[];
  /**
   * @example
   * 1157******94123
   */
  creator?: string;
  /**
   * @example
   * workspace description example
   */
  description?: string;
  /**
   * @example
   * workspace-example
   */
  displayName?: string;
  envTypes?: string[];
  /**
   * @example
   * {"TenantId": "4286******98"}
   */
  extraInfos?: { [key: string]: any };
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  owner?: GetWorkspaceResponseBodyOwner;
  /**
   * @example
   * A0F049F0-8D69-5BAC-8F10-B4DED1B5A34C
   */
  requestId?: string;
  /**
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  /**
   * @example
   * workspace-example
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      adminNames: 'AdminNames',
      creator: 'Creator',
      description: 'Description',
      displayName: 'DisplayName',
      envTypes: 'EnvTypes',
      extraInfos: 'ExtraInfos',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      isDefault: 'IsDefault',
      owner: 'Owner',
      requestId: 'RequestId',
      status: 'Status',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminNames: { 'type': 'array', 'itemType': 'string' },
      creator: 'string',
      description: 'string',
      displayName: 'string',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      extraInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      isDefault: 'boolean',
      owner: GetWorkspaceResponseBodyOwner,
      requestId: 'string',
      status: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkspaceResponseBody;
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
      body: GetWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCodeSourcesRequest extends $tea.Model {
  /**
   * @example
   * MyDataSource
   */
  displayName?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * GmtModifyTime
   */
  sortBy?: string;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCodeSourcesResponseBody extends $tea.Model {
  codeSources?: CodeSourceItem[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      codeSources: 'CodeSources',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSources: { 'type': 'array', 'itemType': CodeSourceItem },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCodeSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCodeSourcesResponseBody;
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
      body: ListCodeSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsRequest extends $tea.Model {
  /**
   * @example
   * OSS
   */
  dataSourceTypes?: string;
  /**
   * @example
   * COMMON,TEXT
   */
  dataTypes?: string;
  /**
   * @example
   * test
   */
  label?: string;
  /**
   * @example
   * myName
   */
  name?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * FILE
   */
  properties?: string;
  provider?: string;
  sourceDatasetId?: string;
  /**
   * @example
   * d-rbvg5wzljzjhc9ks92
   */
  sourceId?: string;
  /**
   * @example
   * USER,ITAG
   */
  sourceTypes?: string;
  /**
   * @example
   * 324**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceTypes: 'DataSourceTypes',
      dataTypes: 'DataTypes',
      label: 'Label',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      properties: 'Properties',
      provider: 'Provider',
      sourceDatasetId: 'SourceDatasetId',
      sourceId: 'SourceId',
      sourceTypes: 'SourceTypes',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceTypes: 'string',
      dataTypes: 'string',
      label: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      properties: 'string',
      provider: 'string',
      sourceDatasetId: 'string',
      sourceId: 'string',
      sourceTypes: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBody extends $tea.Model {
  datasets?: Dataset[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasets: 'Datasets',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': Dataset },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatasetsResponseBody;
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
      body: ListDatasetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentRequest extends $tea.Model {
  /**
   * @example
   * is_evaluation:true
   */
  labels?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * exp-test
   */
  name?: string;
  options?: ListExperimentRequestOptions;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * GmtCreateTime DESC,Name ASC
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * false
   */
  verbose?: boolean;
  /**
   * @example
   * 151739
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      maxResults: 'MaxResults',
      name: 'Name',
      options: 'Options',
      order: 'Order',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pageToken: 'PageToken',
      sortBy: 'SortBy',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      maxResults: 'number',
      name: 'string',
      options: ListExperimentRequestOptions,
      order: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pageToken: 'number',
      sortBy: 'string',
      verbose: 'boolean',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentShrinkRequest extends $tea.Model {
  /**
   * @example
   * is_evaluation:true
   */
  labels?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * exp-test
   */
  name?: string;
  optionsShrink?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * GmtCreateTime DESC,Name ASC
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * false
   */
  verbose?: boolean;
  /**
   * @example
   * 151739
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      maxResults: 'MaxResults',
      name: 'Name',
      optionsShrink: 'Options',
      order: 'Order',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pageToken: 'PageToken',
      sortBy: 'SortBy',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      maxResults: 'number',
      name: 'string',
      optionsShrink: 'string',
      order: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pageToken: 'number',
      sortBy: 'string',
      verbose: 'boolean',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentResponseBody extends $tea.Model {
  experiments?: Experiment[];
  /**
   * @example
   * 0
   */
  nextPageToken?: number;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @example
   * 0C6835C5-A424-5AFB-ACC2-F1E3CA1ABF7C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experiments: 'Experiments',
      nextPageToken: 'NextPageToken',
      totalCount: 'TotalCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experiments: { 'type': 'array', 'itemType': Experiment },
      nextPageToken: 'number',
      totalCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExperimentResponseBody;
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
      body: ListExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLabelsRequest extends $tea.Model {
  /**
   * @example
   * image-4c62******53uor
   */
  imageId?: string;
  /**
   * @example
   * system.framework=XGBoost 1.6.0,system.official=true
   */
  labelFilter?: string;
  /**
   * @example
   * system.framework,system.official
   */
  labelKeys?: string;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      labelFilter: 'LabelFilter',
      labelKeys: 'LabelKeys',
      region: 'Region',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      labelFilter: 'string',
      labelKeys: 'string',
      region: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLabelsResponseBody extends $tea.Model {
  labels?: ListImageLabelsResponseBodyLabels[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': ListImageLabelsResponseBodyLabels },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImageLabelsResponseBody;
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
      body: ListImageLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesRequest extends $tea.Model {
  accessibility?: string;
  imageUri?: string;
  /**
   * @example
   * system.framework=XGBoost 1.6.0,system.official=true
   */
  labels?: string;
  /**
   * @example
   * tensorflow_2.9
   */
  name?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 155**********904
   */
  parentUserId?: string;
  query?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * 155**********904
   */
  userId?: string;
  /**
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @example
   * 20******55
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentUserId: 'ParentUserId',
      query: 'Query',
      sortBy: 'SortBy',
      userId: 'UserId',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      imageUri: 'string',
      labels: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentUserId: 'string',
      query: 'string',
      sortBy: 'string',
      userId: 'string',
      verbose: 'boolean',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $tea.Model {
  images?: ListImagesResponseBodyImages[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImagesResponseBody;
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
      body: ListImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersRequest extends $tea.Model {
  /**
   * @example
   * zhangsan
   */
  memberName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * PAI.AlgoDeveloper
   */
  roles?: string;
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      roles: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBody extends $tea.Model {
  members?: ListMembersResponseBodyMembers[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': ListMembersResponseBodyMembers },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMembersResponseBody;
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
      body: ListMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelVersionsRequest extends $tea.Model {
  /**
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @example
   * key1
   */
  label?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @example
   * 1.0.1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      formatType: 'FormatType',
      frameworkType: 'FrameworkType',
      label: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      formatType: 'string',
      frameworkType: 'string',
      label: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sourceId: 'string',
      sourceType: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelVersionsResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC***3C83E
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  versions?: ModelVersion[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      versions: { 'type': 'array', 'itemType': ModelVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModelVersionsResponseBody;
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
      body: ListModelVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsRequest extends $tea.Model {
  /**
   * @example
   * AI4D,QuickStart
   */
  collections?: string;
  /**
   * @example
   * nlp
   */
  domain?: string;
  /**
   * @example
   * key1
   */
  label?: string;
  modelName?: string;
  /**
   * @example
   * Endpoint
   */
  modelType?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * pai
   */
  provider?: string;
  /**
   * @example
   * nlp
   */
  query?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @example
   * 324**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collections: 'Collections',
      domain: 'Domain',
      label: 'Label',
      modelName: 'ModelName',
      modelType: 'ModelType',
      order: 'Order',
      origin: 'Origin',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      provider: 'Provider',
      query: 'Query',
      sortBy: 'SortBy',
      task: 'Task',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collections: 'string',
      domain: 'string',
      label: 'string',
      modelName: 'string',
      modelType: 'string',
      order: 'string',
      origin: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      provider: 'string',
      query: 'string',
      sortBy: 'string',
      task: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBody extends $tea.Model {
  models?: Model[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      models: 'Models',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      models: { 'type': 'array', 'itemType': Model },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModelsResponseBody;
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
      body: ListModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponseBody extends $tea.Model {
  permissions?: ListPermissionsResponseBodyPermissions[];
  /**
   * @example
   * 2AE63638-5420-56DC-B******8174039A0
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': ListPermissionsResponseBodyPermissions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPermissionsResponseBody;
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
      body: ListPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsRequest extends $tea.Model {
  /**
   * @example
   * PAI_isolate
   */
  productCodes?: string;
  /**
   * @example
   * oss
   */
  serviceCodes?: string;
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      productCodes: 'ProductCodes',
      serviceCodes: 'ServiceCodes',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCodes: 'string',
      serviceCodes: 'string',
      verbose: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $tea.Model {
  products?: ListProductsResponseBodyProducts[];
  /**
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  services?: ListProductsResponseBodyServices[];
  static names(): { [key: string]: string } {
    return {
      products: 'Products',
      requestId: 'RequestId',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      products: { 'type': 'array', 'itemType': ListProductsResponseBodyProducts },
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListProductsResponseBodyServices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductsResponseBody;
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
      body: ListProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasRequest extends $tea.Model {
  /**
   * @example
   * quota-name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBody extends $tea.Model {
  quotas?: ListQuotasResponseBodyQuotas[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      quotas: 'Quotas',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotas: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotas },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQuotasResponseBody;
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
      body: ListQuotasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesRequest extends $tea.Model {
  /**
   * @example
   * group
   */
  groupName?: string;
  labels?: string;
  /**
   * @example
   * ListResourceByWorkspace
   */
  option?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * MaxCompute
   */
  productTypes?: string;
  quotaIds?: string;
  /**
   * @example
   * resource
   */
  resourceName?: string;
  resourceTypes?: string;
  /**
   * @example
   * true
   */
  verbose?: boolean;
  verboseFields?: string;
  /**
   * @example
   * 123
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      labels: 'Labels',
      option: 'Option',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productTypes: 'ProductTypes',
      quotaIds: 'QuotaIds',
      resourceName: 'ResourceName',
      resourceTypes: 'ResourceTypes',
      verbose: 'Verbose',
      verboseFields: 'VerboseFields',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      labels: 'string',
      option: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productTypes: 'string',
      quotaIds: 'string',
      resourceName: 'string',
      resourceTypes: 'string',
      verbose: 'boolean',
      verboseFields: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  resources?: ListResourcesResponseBodyResources[];
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListResourcesResponseBodyResources },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesResponseBody;
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
      body: ListResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunMetricsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * loss
   */
  key?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 0
   */
  pageToken?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      maxResults: 'MaxResults',
      pageToken: 'PageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      maxResults: 'number',
      pageToken: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunMetricsResponseBody extends $tea.Model {
  metrics?: RunMetric[];
  /**
   * @example
   * 0
   */
  nextPageToken?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      nextPageToken: 'NextPageToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': RunMetric },
      nextPageToken: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunMetricsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRunMetricsResponseBody;
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
      body: ListRunMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsRequest extends $tea.Model {
  /**
   * @example
   * exp-1zpfthdx******
   */
  experimentId?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * is_evaluation:true
   */
  labels?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * myName
   */
  name?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * GmtCreateTime DESC,Name ASC
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * job-rbvg5wzlj****
   */
  sourceId?: string;
  /**
   * @example
   * TrainingService
   */
  sourceType?: string;
  /**
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @example
   * 22840
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      labels: 'Labels',
      maxResults: 'MaxResults',
      name: 'Name',
      order: 'Order',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pageToken: 'PageToken',
      sortBy: 'SortBy',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      gmtCreateTime: 'string',
      labels: 'string',
      maxResults: 'number',
      name: 'string',
      order: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pageToken: 'number',
      sortBy: 'string',
      sourceId: 'string',
      sourceType: 'string',
      verbose: 'boolean',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  nextPageToken?: number;
  runs?: Run[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      runs: 'Runs',
      totalCount: 'TotalCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'number',
      runs: { 'type': 'array', 'itemType': Run },
      totalCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRunsResponseBody;
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
      body: ListRunsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceUsersRequest extends $tea.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceUsersResponseBody extends $tea.Model {
  /**
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  users?: ListWorkspaceUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListWorkspaceUsersResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkspaceUsersResponseBody;
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
      body: ListWorkspaceUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesRequest extends $tea.Model {
  /**
   * @example
   * Id
   */
  fields?: string;
  /**
   * @example
   * PAI
   */
  moduleList?: string;
  /**
   * @example
   * GetWorkspaces
   */
  option?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @example
   * 123,234
   */
  workspaceIds?: string;
  /**
   * @example
   * abc
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      moduleList: 'ModuleList',
      option: 'Option',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      status: 'Status',
      verbose: 'Verbose',
      workspaceIds: 'WorkspaceIds',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: 'string',
      moduleList: 'string',
      option: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      status: 'string',
      verbose: 'boolean',
      workspaceIds: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBody extends $tea.Model {
  /**
   * @example
   * 8D7B2E70-F770-505B-A672-09F1D8F2EC1E
   */
  requestId?: string;
  /**
   * @example
   * {
   *    "MaxCompute_share": 1,
   *    "MaxCompute_isolate": 1,
   *    "DLC_share": 1
   * }
   */
  resourceLimits?: { [key: string]: any };
  /**
   * @example
   * 1
   */
  totalCount?: number;
  workspaces?: ListWorkspacesResponseBodyWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceLimits: 'ResourceLimits',
      totalCount: 'TotalCount',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceLimits: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class LogRunMetricsRequest extends $tea.Model {
  metrics?: RunMetric[];
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': RunMetric },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogRunMetricsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
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

export class LogRunMetricsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LogRunMetricsResponseBody;
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
      body: LogRunMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishCodeSourceResponseBody extends $tea.Model {
  /**
   * @example
   * code-a797*******
   */
  codeSourceId?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeSourceId: 'CodeSourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSourceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishCodeSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishCodeSourceResponseBody;
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
      body: PublishCodeSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDatasetResponseBody extends $tea.Model {
  /**
   * @example
   * A0F049F0-8D69-5BAC-8F10-B******A34C
   */
  requestId?: string;
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

export class PublishDatasetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishDatasetResponseBody;
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
      body: PublishDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishImageResponseBody extends $tea.Model {
  /**
   * @example
   * image-dk******fa
   */
  imageId?: string;
  /**
   * @example
   * A0F049F0-8D69-5BAC-8F10-B******A34C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishImageResponseBody;
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
      body: PublishImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class RemoveImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveImageResponseBody;
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
      body: RemoveImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageLabelsResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class RemoveImageLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveImageLabelsResponseBody;
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
      body: RemoveImageLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMemberRoleResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class RemoveMemberRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveMemberRoleResponseBody;
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
      body: RemoveMemberRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetExperimentLabelsRequest extends $tea.Model {
  labels?: LabelInfo[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': LabelInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetExperimentLabelsResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class SetExperimentLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetExperimentLabelsResponseBody;
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
      body: SetExperimentLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequest extends $tea.Model {
  description?: string;
  /**
   * @example
   * myName
   */
  name?: string;
  /**
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      options: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class UpdateDatasetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDatasetResponseBody;
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
      body: UpdateDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDefaultWorkspaceRequest extends $tea.Model {
  /**
   * @example
   * 12345
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDefaultWorkspaceResponseBody extends $tea.Model {
  /**
   * @example
   * 17915******4216
   */
  requestId?: string;
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

export class UpdateDefaultWorkspaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDefaultWorkspaceResponseBody;
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
      body: UpdateDefaultWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentRequest extends $tea.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * 名称
   * 
   * @example
   * myName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class UpdateExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateExperimentResponseBody;
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
      body: UpdateExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelRequest extends $tea.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * nlp
   */
  domain?: string;
  extraInfo?: { [key: string]: any };
  modelDescription?: string;
  /**
   * @example
   * https://*.md
   */
  modelDoc?: string;
  modelName?: string;
  /**
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @example
   * 101
   */
  orderNumber?: number;
  /**
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @example
   * text-classification
   */
  task?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      domain: 'Domain',
      extraInfo: 'ExtraInfo',
      modelDescription: 'ModelDescription',
      modelDoc: 'ModelDoc',
      modelName: 'ModelName',
      modelType: 'ModelType',
      orderNumber: 'OrderNumber',
      origin: 'Origin',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      domain: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      modelDescription: 'string',
      modelDoc: 'string',
      modelName: 'string',
      modelType: 'string',
      orderNumber: 'number',
      origin: 'string',
      task: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelResponseBody extends $tea.Model {
  /**
   * @example
   * A0F049F0-8D69-5BAC-8F10-B******A34C
   */
  requestId?: string;
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

export class UpdateModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateModelResponseBody;
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
      body: UpdateModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelVersionRequest extends $tea.Model {
  /**
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @example
   * {}
   */
  compressionSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  evaluationSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * {     "processor": "tensorflow_gpu_1.12" }
   */
  inferenceSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  metrics?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  options?: string;
  /**
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      compressionSpec: 'CompressionSpec',
      evaluationSpec: 'EvaluationSpec',
      extraInfo: 'ExtraInfo',
      inferenceSpec: 'InferenceSpec',
      metrics: 'Metrics',
      options: 'Options',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trainingSpec: 'TrainingSpec',
      versionDescription: 'VersionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      compressionSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evaluationSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inferenceSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      options: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trainingSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      versionDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelVersionResponseBody extends $tea.Model {
  /**
   * @example
   * D5BFFEE3-6025-443F-8A03-02D61***C4B9
   */
  requestId?: string;
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

export class UpdateModelVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateModelVersionResponseBody;
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
      body: UpdateModelVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRunRequest extends $tea.Model {
  labels?: Label[];
  /**
   * @example
   * myName
   */
  name?: string;
  params?: RunParam[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      name: 'Name',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': Label },
      name: 'string',
      params: { 'type': 'array', 'itemType': RunParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRunResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
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

export class UpdateRunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRunResponseBody;
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
      body: UpdateRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceRequest extends $tea.Model {
  /**
   * @example
   * Description
   */
  description?: string;
  /**
   * @example
   * workspace-example
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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

export class UpdateWorkspaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkspaceResponseBody;
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
      body: UpdateWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResourceRequest extends $tea.Model {
  /**
   * @example
   * group-kjds******sd
   */
  groupName?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  labels?: UpdateWorkspaceResourceRequestLabels[];
  /**
   * @example
   * MaxCompute
   */
  productType?: string;
  resourceIds?: string[];
  resourceType?: string;
  spec?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      isDefault: 'IsDefault',
      labels: 'Labels',
      productType: 'ProductType',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      isDefault: 'boolean',
      labels: { 'type': 'array', 'itemType': UpdateWorkspaceResourceRequestLabels },
      productType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      spec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  resourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkspaceResourceResponseBody;
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
      body: UpdateWorkspaceResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequestLabels extends $tea.Model {
  /**
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @example
   * GPU
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageLabelsRequestLabels extends $tea.Model {
  /**
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @example
   * GPU
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberRequestMembers extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  roles?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 21513926******88039
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      roles: 'Roles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberResponseBodyMembers extends $tea.Model {
  /**
   * @example
   * myDisplayName
   */
  displayName?: string;
  /**
   * @example
   * 145883-21513926******88039
   */
  memberId?: string;
  roles?: string[];
  /**
   * @example
   * 21513926******88039
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      memberId: 'MemberId',
      roles: 'Roles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      memberId: 'string',
      roles: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductOrdersRequestProductsInstanceProperties extends $tea.Model {
  /**
   * @example
   * commodity_type。
   */
  code?: string;
  name?: string;
  /**
   * @example
   * oss。
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductOrdersRequestProducts extends $tea.Model {
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  instanceProperties?: CreateProductOrdersRequestProductsInstanceProperties[];
  /**
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @example
   * DataWorks_share
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      duration: 'Duration',
      instanceProperties: 'InstanceProperties',
      orderType: 'OrderType',
      pricingCycle: 'PricingCycle',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      chargeType: 'string',
      duration: 'number',
      instanceProperties: { 'type': 'array', 'itemType': CreateProductOrdersRequestProductsInstanceProperties },
      orderType: 'string',
      pricingCycle: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResourceRequestResourcesLabels extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResourceRequestResourcesQuotas extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 232892******92912
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResourceRequestResources extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * prod
   */
  envType?: string;
  /**
   * @example
   * groupName
   */
  groupName?: string;
  /**
   * @example
   * false
   */
  isDefault?: boolean;
  labels?: CreateWorkspaceResourceRequestResourcesLabels[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ResourceName
   */
  name?: string;
  /**
   * @example
   * MaxCompute
   */
  productType?: string;
  quotas?: CreateWorkspaceResourceRequestResourcesQuotas[];
  resourceType?: string;
  spec?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      groupName: 'GroupName',
      isDefault: 'IsDefault',
      labels: 'Labels',
      name: 'Name',
      productType: 'ProductType',
      quotas: 'Quotas',
      resourceType: 'ResourceType',
      spec: 'Spec',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      groupName: 'string',
      isDefault: 'boolean',
      labels: { 'type': 'array', 'itemType': CreateWorkspaceResourceRequestResourcesLabels },
      name: 'string',
      productType: 'string',
      quotas: { 'type': 'array', 'itemType': CreateWorkspaceResourceRequestResourcesQuotas },
      resourceType: 'string',
      spec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResourceResponseBodyResources extends $tea.Model {
  /**
   * @example
   * 1234
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultWorkspaceResponseBodyConditions extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Create Failed
   */
  message?: string;
  /**
   * @example
   * CREATING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultWorkspaceResponseBodyOwner extends $tea.Model {
  /**
   * @example
   * 17915******4216
   */
  userId?: string;
  /**
   * @example
   * 17915******4216
   */
  userKp?: string;
  /**
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userKp: 'UserKp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userKp: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyLabels extends $tea.Model {
  /**
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @example
   * GPU
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionResponseBodyPermissionRules extends $tea.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * CREATOR
   */
  entityAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      entityAccessType: 'EntityAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      entityAccessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBodyOwner extends $tea.Model {
  /**
   * @example
   * mings****t
   */
  displayName?: string;
  /**
   * @example
   * 1157******94123
   */
  userId?: string;
  /**
   * @example
   * 1157******94123
   */
  userKp?: string;
  /**
   * @example
   * mings****t
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
      userKp: 'UserKp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
      userKp: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentRequestOptions extends $tea.Model {
  /**
   * @example
   * true
   */
  matchNameExactly?: string;
  static names(): { [key: string]: string } {
    return {
      matchNameExactly: 'match_name_exactly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchNameExactly: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLabelsResponseBodyLabels extends $tea.Model {
  /**
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @example
   * GPU
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImagesLabels extends $tea.Model {
  /**
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @example
   * GPU
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImages extends $tea.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * desc
   */
  description?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * image-tzi7f9******s45t
   */
  imageId?: string;
  imageUri?: string;
  labels?: ListImagesResponseBodyImagesLabels[];
  /**
   * @example
   * tensorflow_2.9
   */
  name?: string;
  /**
   * @example
   * 15577******82932
   */
  parentUserId?: string;
  size?: number;
  /**
   * @example
   * 15577******82932
   */
  userId?: string;
  /**
   * @example
   * 20******55
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
      parentUserId: 'ParentUserId',
      size: 'Size',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageUri: 'string',
      labels: { 'type': 'array', 'itemType': ListImagesResponseBodyImagesLabels },
      name: 'string',
      parentUserId: 'string',
      size: 'number',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBodyMembers extends $tea.Model {
  /**
   * @example
   * myDisplayName
   */
  displayName?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 14588*****51688039
   */
  memberId?: string;
  /**
   * @example
   * user1
   */
  memberName?: string;
  roles?: string[];
  /**
   * @example
   * 215139******88039
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      memberId: 'MemberId',
      memberName: 'MemberName',
      roles: 'Roles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      gmtCreateTime: 'string',
      memberId: 'string',
      memberName: 'string',
      roles: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponseBodyPermissionsPermissionRules extends $tea.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * CREATOR
   */
  entityAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      entityAccessType: 'EntityAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      entityAccessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponseBodyPermissions extends $tea.Model {
  /**
   * @example
   * PaiDLC:GetTensorboard
   */
  permissionCode?: string;
  permissionRules?: ListPermissionsResponseBodyPermissionsPermissionRules[];
  static names(): { [key: string]: string } {
    return {
      permissionCode: 'PermissionCode',
      permissionRules: 'PermissionRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionCode: 'string',
      permissionRules: { 'type': 'array', 'itemType': ListPermissionsResponseBodyPermissionsPermissionRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyProducts extends $tea.Model {
  hasPermissionToPurchase?: boolean;
  /**
   * @example
   * true
   */
  isPurchased?: boolean;
  /**
   * @example
   * DataWorks_isolate
   */
  productCode?: string;
  productInstanceId?: string;
  /**
   * @example
   * https://common-buy.aliy
   */
  purchaseUrl?: string;
  static names(): { [key: string]: string } {
    return {
      hasPermissionToPurchase: 'HasPermissionToPurchase',
      isPurchased: 'IsPurchased',
      productCode: 'ProductCode',
      productInstanceId: 'ProductInstanceId',
      purchaseUrl: 'PurchaseUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPermissionToPurchase: 'boolean',
      isPurchased: 'boolean',
      productCode: 'string',
      productInstanceId: 'string',
      purchaseUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyServices extends $tea.Model {
  /**
   * @example
   * true
   */
  isOpen?: boolean;
  openUrl?: string;
  /**
   * @example
   * oss
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      isOpen: 'IsOpen',
      openUrl: 'OpenUrl',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isOpen: 'boolean',
      openUrl: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotasSpecs extends $tea.Model {
  /**
   * @example
   * cu
   */
  name?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * 11500
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotas extends $tea.Model {
  displayName?: string;
  /**
   * @example
   * 1828233
   */
  id?: string;
  /**
   * @example
   * isolate
   */
  mode?: string;
  /**
   * @example
   * quota-name
   */
  name?: string;
  /**
   * @example
   * MaxCompute_share
   */
  productCode?: string;
  /**
   * @example
   * MaxCompute
   */
  quotaType?: string;
  /**
   * @example
   * {\\"cu\\":\\"11500\\",\\"minCu\\":\\"2300\\",\\"parentId\\":\\"0\\"}
   */
  specs?: ListQuotasResponseBodyQuotasSpecs[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
      mode: 'Mode',
      name: 'Name',
      productCode: 'ProductCode',
      quotaType: 'QuotaType',
      specs: 'Specs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
      mode: 'string',
      name: 'string',
      productCode: 'string',
      quotaType: 'string',
      specs: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotasSpecs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResourcesEncryption extends $tea.Model {
  algorithm?: string;
  enabled?: boolean;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      enabled: 'Enabled',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      enabled: 'boolean',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResourcesExecutor extends $tea.Model {
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResourcesLabels extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResourcesQuotasSpecs extends $tea.Model {
  /**
   * @example
   * cu
   */
  name?: string;
  /**
   * @example
   * 11500
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResourcesQuotas extends $tea.Model {
  /**
   * @example
   * cpu
   */
  cardType?: string;
  displayName?: string;
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * develop
   */
  mode?: string;
  /**
   * @example
   * QuotaName
   */
  name?: string;
  /**
   * @example
   * MaxCompute_isolate
   */
  productCode?: string;
  /**
   * @example
   * MaxCompute
   */
  quotaType?: string;
  /**
   * @example
   * {\\"cu\\":\\"11500\\",\\"minCu\\":\\"2300\\",\\"parentId\\":\\"0\\"}
   */
  specs?: ListResourcesResponseBodyResourcesQuotasSpecs[];
  static names(): { [key: string]: string } {
    return {
      cardType: 'CardType',
      displayName: 'DisplayName',
      id: 'Id',
      mode: 'Mode',
      name: 'Name',
      productCode: 'ProductCode',
      quotaType: 'QuotaType',
      specs: 'Specs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardType: 'string',
      displayName: 'string',
      id: 'string',
      mode: 'string',
      name: 'string',
      productCode: 'string',
      quotaType: 'string',
      specs: { 'type': 'array', 'itemType': ListResourcesResponseBodyResourcesQuotasSpecs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResources extends $tea.Model {
  encryption?: ListResourcesResponseBodyResourcesEncryption;
  /**
   * @example
   * prod
   */
  envType?: string;
  executor?: ListResourcesResponseBodyResourcesExecutor;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * groupName
   */
  groupName?: string;
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  labels?: ListResourcesResponseBodyResourcesLabels[];
  /**
   * @example
   * ResourceName
   */
  name?: string;
  /**
   * @example
   * MaxCompute
   */
  productType?: string;
  quotas?: ListResourcesResponseBodyResourcesQuotas[];
  resourceType?: string;
  /**
   * @example
   * 对于MaxCompute {"Endpoint": "odps.alibaba-inc.com", "Project": "mignshi"}
   */
  spec?: { [key: string]: any };
  /**
   * @example
   * 123
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      encryption: 'Encryption',
      envType: 'EnvType',
      executor: 'Executor',
      gmtCreateTime: 'GmtCreateTime',
      groupName: 'GroupName',
      id: 'Id',
      isDefault: 'IsDefault',
      labels: 'Labels',
      name: 'Name',
      productType: 'ProductType',
      quotas: 'Quotas',
      resourceType: 'ResourceType',
      spec: 'Spec',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryption: ListResourcesResponseBodyResourcesEncryption,
      envType: 'string',
      executor: ListResourcesResponseBodyResourcesExecutor,
      gmtCreateTime: 'string',
      groupName: 'string',
      id: 'string',
      isDefault: 'boolean',
      labels: { 'type': 'array', 'itemType': ListResourcesResponseBodyResourcesLabels },
      name: 'string',
      productType: 'string',
      quotas: { 'type': 'array', 'itemType': ListResourcesResponseBodyResourcesQuotas },
      resourceType: 'string',
      spec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceUsersResponseBodyUsers extends $tea.Model {
  /**
   * @example
   * 1611******3000
   */
  userId?: string;
  /**
   * @example
   * she******mo
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyWorkspaces extends $tea.Model {
  adminNames?: string[];
  /**
   * @example
   * 122424353535
   */
  creator?: string;
  /**
   * @example
   * workspace description example
   */
  description?: string;
  envTypes?: string[];
  /**
   * @example
   * {"TenantId": "4286******98"}
   */
  extraInfos?: { [key: string]: any };
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @example
   * 123
   */
  workspaceId?: string;
  /**
   * @example
   * workspace-example
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      adminNames: 'AdminNames',
      creator: 'Creator',
      description: 'Description',
      envTypes: 'EnvTypes',
      extraInfos: 'ExtraInfos',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      isDefault: 'IsDefault',
      status: 'Status',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminNames: { 'type': 'array', 'itemType': 'string' },
      creator: 'string',
      description: 'string',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      extraInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      isDefault: 'boolean',
      status: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResourceRequestLabels extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aiworkspace", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 增加 Image
   * 
   * @param request - AddImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImageResponse
   */
  async addImageWithOptions(request: AddImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageUri)) {
      body["ImageUri"] = request.imageUri;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddImage",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddImageResponse>(await this.callApi(params, req, runtime), new AddImageResponse({}));
  }

  /**
   * 增加 Image
   * 
   * @param request - AddImageRequest
   * @returns AddImageResponse
   */
  async addImage(request: AddImageRequest): Promise<AddImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addImageWithOptions(request, headers, runtime);
  }

  /**
   * 增加 Image 的标签
   * 
   * @param request - AddImageLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImageLabelsResponse
   */
  async addImageLabelsWithOptions(ImageId: string, request: AddImageLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddImageLabelsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddImageLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${OpenApiUtil.getEncodeParam(ImageId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddImageLabelsResponse>(await this.callApi(params, req, runtime), new AddImageLabelsResponse({}));
  }

  /**
   * 增加 Image 的标签
   * 
   * @param request - AddImageLabelsRequest
   * @returns AddImageLabelsResponse
   */
  async addImageLabels(ImageId: string, request: AddImageLabelsRequest): Promise<AddImageLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addImageLabelsWithOptions(ImageId, request, headers, runtime);
  }

  /**
   * 增加成员角色
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMemberRoleResponse
   */
  async addMemberRoleWithOptions(WorkspaceId: string, MemberId: string, RoleName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddMemberRoleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "AddMemberRole",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}/members/${OpenApiUtil.getEncodeParam(MemberId)}/roles/${OpenApiUtil.getEncodeParam(RoleName)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddMemberRoleResponse>(await this.callApi(params, req, runtime), new AddMemberRoleResponse({}));
  }

  /**
   * 增加成员角色
   * @returns AddMemberRoleResponse
   */
  async addMemberRole(WorkspaceId: string, MemberId: string, RoleName: string): Promise<AddMemberRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addMemberRoleWithOptions(WorkspaceId, MemberId, RoleName, headers, runtime);
  }

  /**
   * 创建一个代码源配置
   * 
   * @param request - CreateCodeSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCodeSourceResponse
   */
  async createCodeSourceWithOptions(request: CreateCodeSourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateCodeSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.codeBranch)) {
      body["CodeBranch"] = request.codeBranch;
    }

    if (!Util.isUnset(request.codeRepo)) {
      body["CodeRepo"] = request.codeRepo;
    }

    if (!Util.isUnset(request.codeRepoAccessToken)) {
      body["CodeRepoAccessToken"] = request.codeRepoAccessToken;
    }

    if (!Util.isUnset(request.codeRepoUserName)) {
      body["CodeRepoUserName"] = request.codeRepoUserName;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.mountPath)) {
      body["MountPath"] = request.mountPath;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCodeSource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateCodeSourceResponse>(await this.callApi(params, req, runtime), new CreateCodeSourceResponse({}));
  }

  /**
   * 创建一个代码源配置
   * 
   * @param request - CreateCodeSourceRequest
   * @returns CreateCodeSourceResponse
   */
  async createCodeSource(request: CreateCodeSourceRequest): Promise<CreateCodeSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCodeSourceWithOptions(request, headers, runtime);
  }

  /**
   * 创建数据集
   * 
   * @param request - CreateDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetResponse
   */
  async createDatasetWithOptions(request: CreateDatasetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDatasetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.dataCount)) {
      body["DataCount"] = request.dataCount;
    }

    if (!Util.isUnset(request.dataSize)) {
      body["DataSize"] = request.dataSize;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.dataType)) {
      body["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.options)) {
      body["Options"] = request.options;
    }

    if (!Util.isUnset(request.property)) {
      body["Property"] = request.property;
    }

    if (!Util.isUnset(request.provider)) {
      body["Provider"] = request.provider;
    }

    if (!Util.isUnset(request.providerType)) {
      body["ProviderType"] = request.providerType;
    }

    if (!Util.isUnset(request.sourceDatasetId)) {
      body["SourceDatasetId"] = request.sourceDatasetId;
    }

    if (!Util.isUnset(request.sourceDatasetVersion)) {
      body["SourceDatasetVersion"] = request.sourceDatasetVersion;
    }

    if (!Util.isUnset(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.uri)) {
      body["Uri"] = request.uri;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.versionDescription)) {
      body["VersionDescription"] = request.versionDescription;
    }

    if (!Util.isUnset(request.versionLabels)) {
      body["VersionLabels"] = request.versionLabels;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDatasetResponse>(await this.callApi(params, req, runtime), new CreateDatasetResponse({}));
  }

  /**
   * 创建数据集
   * 
   * @param request - CreateDatasetRequest
   * @returns CreateDatasetResponse
   */
  async createDataset(request: CreateDatasetRequest): Promise<CreateDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetWithOptions(request, headers, runtime);
  }

  /**
   * 创建或更新 Dataset 的标签
   * 
   * @param request - CreateDatasetLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetLabelsResponse
   */
  async createDatasetLabelsWithOptions(DatasetId: string, request: CreateDatasetLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDatasetLabelsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDatasetLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${OpenApiUtil.getEncodeParam(DatasetId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDatasetLabelsResponse>(await this.callApi(params, req, runtime), new CreateDatasetLabelsResponse({}));
  }

  /**
   * 创建或更新 Dataset 的标签
   * 
   * @param request - CreateDatasetLabelsRequest
   * @returns CreateDatasetLabelsResponse
   */
  async createDatasetLabels(DatasetId: string, request: CreateDatasetLabelsRequest): Promise<CreateDatasetLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetLabelsWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 创建实验
   * 
   * @param request - CreateExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExperimentResponse
   */
  async createExperimentWithOptions(request: CreateExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.artifactUri)) {
      body["ArtifactUri"] = request.artifactUri;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateExperimentResponse>(await this.callApi(params, req, runtime), new CreateExperimentResponse({}));
  }

  /**
   * 创建实验
   * 
   * @param request - CreateExperimentRequest
   * @returns CreateExperimentResponse
   */
  async createExperiment(request: CreateExperimentRequest): Promise<CreateExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentWithOptions(request, headers, runtime);
  }

  /**
   * 创建成员
   * 
   * @param request - CreateMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemberResponse
   */
  async createMemberWithOptions(WorkspaceId: string, request: CreateMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.members)) {
      body["Members"] = request.members;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMember",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateMemberResponse>(await this.callApi(params, req, runtime), new CreateMemberResponse({}));
  }

  /**
   * 创建成员
   * 
   * @param request - CreateMemberRequest
   * @returns CreateMemberResponse
   */
  async createMember(WorkspaceId: string, request: CreateMemberRequest): Promise<CreateMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemberWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 创建模型
   * 
   * @param request - CreateModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelResponse
   */
  async createModelWithOptions(request: CreateModelRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateModelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.modelDescription)) {
      body["ModelDescription"] = request.modelDescription;
    }

    if (!Util.isUnset(request.modelDoc)) {
      body["ModelDoc"] = request.modelDoc;
    }

    if (!Util.isUnset(request.modelName)) {
      body["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.modelType)) {
      body["ModelType"] = request.modelType;
    }

    if (!Util.isUnset(request.orderNumber)) {
      body["OrderNumber"] = request.orderNumber;
    }

    if (!Util.isUnset(request.origin)) {
      body["Origin"] = request.origin;
    }

    if (!Util.isUnset(request.task)) {
      body["Task"] = request.task;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateModel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateModelResponse>(await this.callApi(params, req, runtime), new CreateModelResponse({}));
  }

  /**
   * 创建模型
   * 
   * @param request - CreateModelRequest
   * @returns CreateModelResponse
   */
  async createModel(request: CreateModelRequest): Promise<CreateModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelWithOptions(request, headers, runtime);
  }

  /**
   * 创建或更新模型的标签
   * 
   * @param request - CreateModelLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelLabelsResponse
   */
  async createModelLabelsWithOptions(ModelId: string, request: CreateModelLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateModelLabelsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateModelLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${OpenApiUtil.getEncodeParam(ModelId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateModelLabelsResponse>(await this.callApi(params, req, runtime), new CreateModelLabelsResponse({}));
  }

  /**
   * 创建或更新模型的标签
   * 
   * @param request - CreateModelLabelsRequest
   * @returns CreateModelLabelsResponse
   */
  async createModelLabels(ModelId: string, request: CreateModelLabelsRequest): Promise<CreateModelLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelLabelsWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * 创建模型版本
   * 
   * @param request - CreateModelVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelVersionResponse
   */
  async createModelVersionWithOptions(ModelId: string, request: CreateModelVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateModelVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.approvalStatus)) {
      body["ApprovalStatus"] = request.approvalStatus;
    }

    if (!Util.isUnset(request.compressionSpec)) {
      body["CompressionSpec"] = request.compressionSpec;
    }

    if (!Util.isUnset(request.evaluationSpec)) {
      body["EvaluationSpec"] = request.evaluationSpec;
    }

    if (!Util.isUnset(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!Util.isUnset(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!Util.isUnset(request.frameworkType)) {
      body["FrameworkType"] = request.frameworkType;
    }

    if (!Util.isUnset(request.inferenceSpec)) {
      body["InferenceSpec"] = request.inferenceSpec;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.metrics)) {
      body["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.options)) {
      body["Options"] = request.options;
    }

    if (!Util.isUnset(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.trainingSpec)) {
      body["TrainingSpec"] = request.trainingSpec;
    }

    if (!Util.isUnset(request.uri)) {
      body["Uri"] = request.uri;
    }

    if (!Util.isUnset(request.versionDescription)) {
      body["VersionDescription"] = request.versionDescription;
    }

    if (!Util.isUnset(request.versionName)) {
      body["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateModelVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${OpenApiUtil.getEncodeParam(ModelId)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateModelVersionResponse>(await this.callApi(params, req, runtime), new CreateModelVersionResponse({}));
  }

  /**
   * 创建模型版本
   * 
   * @param request - CreateModelVersionRequest
   * @returns CreateModelVersionResponse
   */
  async createModelVersion(ModelId: string, request: CreateModelVersionRequest): Promise<CreateModelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelVersionWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * 创建或更新模型版本的标签
   * 
   * @param request - CreateModelVersionLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelVersionLabelsResponse
   */
  async createModelVersionLabelsWithOptions(ModelId: string, VersionName: string, request: CreateModelVersionLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateModelVersionLabelsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateModelVersionLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${OpenApiUtil.getEncodeParam(ModelId)}/versions/${OpenApiUtil.getEncodeParam(VersionName)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateModelVersionLabelsResponse>(await this.callApi(params, req, runtime), new CreateModelVersionLabelsResponse({}));
  }

  /**
   * 创建或更新模型版本的标签
   * 
   * @param request - CreateModelVersionLabelsRequest
   * @returns CreateModelVersionLabelsResponse
   */
  async createModelVersionLabels(ModelId: string, VersionName: string, request: CreateModelVersionLabelsRequest): Promise<CreateModelVersionLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelVersionLabelsWithOptions(ModelId, VersionName, request, headers, runtime);
  }

  /**
   * 创建产品订单
   * 
   * @param request - CreateProductOrdersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProductOrdersResponse
   */
  async createProductOrdersWithOptions(request: CreateProductOrdersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProductOrdersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoPay)) {
      body["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.products)) {
      body["Products"] = request.products;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProductOrders",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/productorders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProductOrdersResponse>(await this.callApi(params, req, runtime), new CreateProductOrdersResponse({}));
  }

  /**
   * 创建产品订单
   * 
   * @param request - CreateProductOrdersRequest
   * @returns CreateProductOrdersResponse
   */
  async createProductOrders(request: CreateProductOrdersRequest): Promise<CreateProductOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProductOrdersWithOptions(request, headers, runtime);
  }

  /**
   * 创建一次运行
   * 
   * @param request - CreateRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRunResponse
   */
  async createRunWithOptions(request: CreateRunRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRunResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.experimentId)) {
      body["ExperimentId"] = request.experimentId;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    if (!Util.isUnset(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRun",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRunResponse>(await this.callApi(params, req, runtime), new CreateRunResponse({}));
  }

  /**
   * 创建一次运行
   * 
   * @param request - CreateRunRequest
   * @returns CreateRunResponse
   */
  async createRun(request: CreateRunRequest): Promise<CreateRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRunWithOptions(request, headers, runtime);
  }

  /**
   * 创建工作空间
   * 
   * @param request - CreateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
  async createWorkspaceWithOptions(request: CreateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateWorkspaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.envTypes)) {
      body["EnvTypes"] = request.envTypes;
    }

    if (!Util.isUnset(request.workspaceName)) {
      body["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new CreateWorkspaceResponse({}));
  }

  /**
   * 创建工作空间
   * 
   * @param request - CreateWorkspaceRequest
   * @returns CreateWorkspaceResponse
   */
  async createWorkspace(request: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * 创建资源
   * 
   * @param request - CreateWorkspaceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResourceResponse
   */
  async createWorkspaceResourceWithOptions(WorkspaceId: string, request: CreateWorkspaceResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateWorkspaceResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.option)) {
      body["Option"] = request.option;
    }

    if (!Util.isUnset(request.resources)) {
      body["Resources"] = request.resources;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWorkspaceResource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateWorkspaceResourceResponse>(await this.callApi(params, req, runtime), new CreateWorkspaceResourceResponse({}));
  }

  /**
   * 创建资源
   * 
   * @param request - CreateWorkspaceResourceRequest
   * @returns CreateWorkspaceResourceResponse
   */
  async createWorkspaceResource(WorkspaceId: string, request: CreateWorkspaceResourceRequest): Promise<CreateWorkspaceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkspaceResourceWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 删除一个代码源配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCodeSourceResponse
   */
  async deleteCodeSourceWithOptions(CodeSourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteCodeSourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteCodeSource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources/${OpenApiUtil.getEncodeParam(CodeSourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteCodeSourceResponse>(await this.callApi(params, req, runtime), new DeleteCodeSourceResponse({}));
  }

  /**
   * 删除一个代码源配置
   * @returns DeleteCodeSourceResponse
   */
  async deleteCodeSource(CodeSourceId: string): Promise<DeleteCodeSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCodeSourceWithOptions(CodeSourceId, headers, runtime);
  }

  /**
   * 删除数据集
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetResponse
   */
  async deleteDatasetWithOptions(DatasetId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDatasetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${OpenApiUtil.getEncodeParam(DatasetId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatasetResponse>(await this.callApi(params, req, runtime), new DeleteDatasetResponse({}));
  }

  /**
   * 删除数据集
   * @returns DeleteDatasetResponse
   */
  async deleteDataset(DatasetId: string): Promise<DeleteDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetWithOptions(DatasetId, headers, runtime);
  }

  /**
   * 删除 Dataset 的标签
   * 
   * @param request - DeleteDatasetLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetLabelsResponse
   */
  async deleteDatasetLabelsWithOptions(DatasetId: string, request: DeleteDatasetLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDatasetLabelsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDatasetLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${OpenApiUtil.getEncodeParam(DatasetId)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatasetLabelsResponse>(await this.callApi(params, req, runtime), new DeleteDatasetLabelsResponse({}));
  }

  /**
   * 删除 Dataset 的标签
   * 
   * @param request - DeleteDatasetLabelsRequest
   * @returns DeleteDatasetLabelsResponse
   */
  async deleteDatasetLabels(DatasetId: string, request: DeleteDatasetLabelsRequest): Promise<DeleteDatasetLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetLabelsWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 删除实验
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentResponse
   */
  async deleteExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${OpenApiUtil.getEncodeParam(ExperimentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteExperimentResponse>(await this.callApi(params, req, runtime), new DeleteExperimentResponse({}));
  }

  /**
   * 删除实验
   * @returns DeleteExperimentResponse
   */
  async deleteExperiment(ExperimentId: string): Promise<DeleteExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentWithOptions(ExperimentId, headers, runtime);
  }

  /**
   * 删除实验标签
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentLabelResponse
   */
  async deleteExperimentLabelWithOptions(ExperimentId: string, Key: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteExperimentLabelResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteExperimentLabel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${OpenApiUtil.getEncodeParam(ExperimentId)}/labels/${OpenApiUtil.getEncodeParam(Key)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteExperimentLabelResponse>(await this.callApi(params, req, runtime), new DeleteExperimentLabelResponse({}));
  }

  /**
   * 删除实验标签
   * @returns DeleteExperimentLabelResponse
   */
  async deleteExperimentLabel(ExperimentId: string, Key: string): Promise<DeleteExperimentLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentLabelWithOptions(ExperimentId, Key, headers, runtime);
  }

  /**
   * 删除工作空间成员
   * 
   * @param request - DeleteMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMembersResponse
   */
  async deleteMembersWithOptions(WorkspaceId: string, request: DeleteMembersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteMembersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.memberIds)) {
      query["MemberIds"] = request.memberIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMembers",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}/members`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteMembersResponse>(await this.callApi(params, req, runtime), new DeleteMembersResponse({}));
  }

  /**
   * 删除工作空间成员
   * 
   * @param request - DeleteMembersRequest
   * @returns DeleteMembersResponse
   */
  async deleteMembers(WorkspaceId: string, request: DeleteMembersRequest): Promise<DeleteMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMembersWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 删除模型
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelResponse
   */
  async deleteModelWithOptions(ModelId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteModelResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteModel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${OpenApiUtil.getEncodeParam(ModelId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteModelResponse>(await this.callApi(params, req, runtime), new DeleteModelResponse({}));
  }

  /**
   * 删除模型
   * @returns DeleteModelResponse
   */
  async deleteModel(ModelId: string): Promise<DeleteModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelWithOptions(ModelId, headers, runtime);
  }

  /**
   * 删除模型的标签
   * 
   * @param request - DeleteModelLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelLabelsResponse
   */
  async deleteModelLabelsWithOptions(ModelId: string, request: DeleteModelLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteModelLabelsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteModelLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${OpenApiUtil.getEncodeParam(ModelId)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteModelLabelsResponse>(await this.callApi(params, req, runtime), new DeleteModelLabelsResponse({}));
  }

  /**
   * 删除模型的标签
   * 
   * @param request - DeleteModelLabelsRequest
   * @returns DeleteModelLabelsResponse
   */
  async deleteModelLabels(ModelId: string, request: DeleteModelLabelsRequest): Promise<DeleteModelLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelLabelsWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * 删除模型版本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelVersionResponse
   */
  async deleteModelVersionWithOptions(ModelId: string, VersionName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteModelVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteModelVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${OpenApiUtil.getEncodeParam(ModelId)}/versions/${OpenApiUtil.getEncodeParam(VersionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteModelVersionResponse>(await this.callApi(params, req, runtime), new DeleteModelVersionResponse({}));
  }

  /**
   * 删除模型版本
   * @returns DeleteModelVersionResponse
   */
  async deleteModelVersion(ModelId: string, VersionName: string): Promise<DeleteModelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelVersionWithOptions(ModelId, VersionName, headers, runtime);
  }

  /**
   * 删除模型版本的标签
   * 
   * @param request - DeleteModelVersionLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelVersionLabelsResponse
   */
  async deleteModelVersionLabelsWithOptions(ModelId: string, VersionName: string, request: DeleteModelVersionLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteModelVersionLabelsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteModelVersionLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${OpenApiUtil.getEncodeParam(ModelId)}/versions/${OpenApiUtil.getEncodeParam(VersionName)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteModelVersionLabelsResponse>(await this.callApi(params, req, runtime), new DeleteModelVersionLabelsResponse({}));
  }

  /**
   * 删除模型版本的标签
   * 
   * @param request - DeleteModelVersionLabelsRequest
   * @returns DeleteModelVersionLabelsResponse
   */
  async deleteModelVersionLabels(ModelId: string, VersionName: string, request: DeleteModelVersionLabelsRequest): Promise<DeleteModelVersionLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelVersionLabelsWithOptions(ModelId, VersionName, request, headers, runtime);
  }

  /**
   * 删除Run
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRunResponse
   */
  async deleteRunWithOptions(RunId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRunResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteRun",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${OpenApiUtil.getEncodeParam(RunId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRunResponse>(await this.callApi(params, req, runtime), new DeleteRunResponse({}));
  }

  /**
   * 删除Run
   * @returns DeleteRunResponse
   */
  async deleteRun(RunId: string): Promise<DeleteRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRunWithOptions(RunId, headers, runtime);
  }

  /**
   * 删除Run标签
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRunLabelResponse
   */
  async deleteRunLabelWithOptions(RunId: string, Key: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRunLabelResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteRunLabel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${OpenApiUtil.getEncodeParam(RunId)}/labels/${OpenApiUtil.getEncodeParam(Key)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRunLabelResponse>(await this.callApi(params, req, runtime), new DeleteRunLabelResponse({}));
  }

  /**
   * 删除Run标签
   * @returns DeleteRunLabelResponse
   */
  async deleteRunLabel(RunId: string, Key: string): Promise<DeleteRunLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRunLabelWithOptions(RunId, Key, headers, runtime);
  }

  /**
   * 删除工作空间
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspaceWithOptions(WorkspaceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteWorkspaceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteWorkspaceResponse>(await this.callApi(params, req, runtime), new DeleteWorkspaceResponse({}));
  }

  /**
   * 删除工作空间
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(WorkspaceId: string): Promise<DeleteWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceWithOptions(WorkspaceId, headers, runtime);
  }

  /**
   * 删除工作空间资源
   * 
   * @param request - DeleteWorkspaceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResourceResponse
   */
  async deleteWorkspaceResourceWithOptions(WorkspaceId: string, request: DeleteWorkspaceResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteWorkspaceResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.option)) {
      query["Option"] = request.option;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWorkspaceResource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}/resources`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteWorkspaceResourceResponse>(await this.callApi(params, req, runtime), new DeleteWorkspaceResourceResponse({}));
  }

  /**
   * 删除工作空间资源
   * 
   * @param request - DeleteWorkspaceResourceRequest
   * @returns DeleteWorkspaceResourceResponse
   */
  async deleteWorkspaceResource(WorkspaceId: string, request: DeleteWorkspaceResourceRequest): Promise<DeleteWorkspaceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceResourceWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获取一个代码源配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCodeSourceResponse
   */
  async getCodeSourceWithOptions(CodeSourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCodeSourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetCodeSource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources/${OpenApiUtil.getEncodeParam(CodeSourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCodeSourceResponse>(await this.callApi(params, req, runtime), new GetCodeSourceResponse({}));
  }

  /**
   * 获取一个代码源配置
   * @returns GetCodeSourceResponse
   */
  async getCodeSource(CodeSourceId: string): Promise<GetCodeSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCodeSourceWithOptions(CodeSourceId, headers, runtime);
  }

  /**
   * 获取数据集
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetResponse
   */
  async getDatasetWithOptions(DatasetId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDatasetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${OpenApiUtil.getEncodeParam(DatasetId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDatasetResponse>(await this.callApi(params, req, runtime), new GetDatasetResponse({}));
  }

  /**
   * 获取数据集
   * @returns GetDatasetResponse
   */
  async getDataset(DatasetId: string): Promise<GetDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetWithOptions(DatasetId, headers, runtime);
  }

  /**
   * 获取默认工作空间
   * 
   * @param request - GetDefaultWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDefaultWorkspaceResponse
   */
  async getDefaultWorkspaceWithOptions(request: GetDefaultWorkspaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDefaultWorkspaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDefaultWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/defaultWorkspaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDefaultWorkspaceResponse>(await this.callApi(params, req, runtime), new GetDefaultWorkspaceResponse({}));
  }

  /**
   * 获取默认工作空间
   * 
   * @param request - GetDefaultWorkspaceRequest
   * @returns GetDefaultWorkspaceResponse
   */
  async getDefaultWorkspace(request: GetDefaultWorkspaceRequest): Promise<GetDefaultWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDefaultWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * 获取实验
   * 
   * @param request - GetExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperimentResponse
   */
  async getExperimentWithOptions(ExperimentId: string, request: GetExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${OpenApiUtil.getEncodeParam(ExperimentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetExperimentResponse>(await this.callApi(params, req, runtime), new GetExperimentResponse({}));
  }

  /**
   * 获取实验
   * 
   * @param request - GetExperimentRequest
   * @returns GetExperimentResponse
   */
  async getExperiment(ExperimentId: string, request: GetExperimentRequest): Promise<GetExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * 获取镜像
   * 
   * @param request - GetImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageResponse
   */
  async getImageWithOptions(ImageId: string, request: GetImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetImageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetImage",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${OpenApiUtil.getEncodeParam(ImageId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetImageResponse>(await this.callApi(params, req, runtime), new GetImageResponse({}));
  }

  /**
   * 获取镜像
   * 
   * @param request - GetImageRequest
   * @returns GetImageResponse
   */
  async getImage(ImageId: string, request: GetImageRequest): Promise<GetImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageWithOptions(ImageId, request, headers, runtime);
  }

  /**
   * 获取成员
   * 
   * @param request - GetMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemberResponse
   */
  async getMemberWithOptions(WorkspaceId: string, request: GetMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMemberResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMember",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}/member`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMemberResponse>(await this.callApi(params, req, runtime), new GetMemberResponse({}));
  }

  /**
   * 获取成员
   * 
   * @param request - GetMemberRequest
   * @returns GetMemberResponse
   */
  async getMember(WorkspaceId: string, request: GetMemberRequest): Promise<GetMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemberWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获取模型
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelResponse
   */
  async getModelWithOptions(ModelId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetModelResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetModel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${OpenApiUtil.getEncodeParam(ModelId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetModelResponse>(await this.callApi(params, req, runtime), new GetModelResponse({}));
  }

  /**
   * 获取模型
   * @returns GetModelResponse
   */
  async getModel(ModelId: string): Promise<GetModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelWithOptions(ModelId, headers, runtime);
  }

  /**
   * 获取模型版本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelVersionResponse
   */
  async getModelVersionWithOptions(ModelId: string, VersionName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetModelVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetModelVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${OpenApiUtil.getEncodeParam(ModelId)}/versions/${OpenApiUtil.getEncodeParam(VersionName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetModelVersionResponse>(await this.callApi(params, req, runtime), new GetModelVersionResponse({}));
  }

  /**
   * 获取模型版本
   * @returns GetModelVersionResponse
   */
  async getModelVersion(ModelId: string, VersionName: string): Promise<GetModelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelVersionWithOptions(ModelId, VersionName, headers, runtime);
  }

  /**
   * 获取权限，若无权限则返回错误
   * 
   * @param request - GetPermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPermissionResponse
   */
  async getPermissionWithOptions(WorkspaceId: string, PermissionCode: string, request: GetPermissionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPermissionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!Util.isUnset(request.option)) {
      query["Option"] = request.option;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPermission",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}/permissions/${OpenApiUtil.getEncodeParam(PermissionCode)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPermissionResponse>(await this.callApi(params, req, runtime), new GetPermissionResponse({}));
  }

  /**
   * 获取权限，若无权限则返回错误
   * 
   * @param request - GetPermissionRequest
   * @returns GetPermissionResponse
   */
  async getPermission(WorkspaceId: string, PermissionCode: string, request: GetPermissionRequest): Promise<GetPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPermissionWithOptions(WorkspaceId, PermissionCode, request, headers, runtime);
  }

  /**
   * 获取Run详情
   * 
   * @param request - GetRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRunResponse
   */
  async getRunWithOptions(RunId: string, request: GetRunRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRunResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRun",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${OpenApiUtil.getEncodeParam(RunId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRunResponse>(await this.callApi(params, req, runtime), new GetRunResponse({}));
  }

  /**
   * 获取Run详情
   * 
   * @param request - GetRunRequest
   * @returns GetRunResponse
   */
  async getRun(RunId: string, request: GetRunRequest): Promise<GetRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRunWithOptions(RunId, request, headers, runtime);
  }

  /**
   * 获取工作空间
   * 
   * @param request - GetWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceResponse
   */
  async getWorkspaceWithOptions(WorkspaceId: string, request: GetWorkspaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetWorkspaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetWorkspaceResponse>(await this.callApi(params, req, runtime), new GetWorkspaceResponse({}));
  }

  /**
   * 获取工作空间
   * 
   * @param request - GetWorkspaceRequest
   * @returns GetWorkspaceResponse
   */
  async getWorkspace(WorkspaceId: string, request: GetWorkspaceRequest): Promise<GetWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获取代码源配置列表
   * 
   * @param request - ListCodeSourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCodeSourcesResponse
   */
  async listCodeSourcesWithOptions(request: ListCodeSourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCodeSourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
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

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCodeSources",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCodeSourcesResponse>(await this.callApi(params, req, runtime), new ListCodeSourcesResponse({}));
  }

  /**
   * 获取代码源配置列表
   * 
   * @param request - ListCodeSourcesRequest
   * @returns ListCodeSourcesResponse
   */
  async listCodeSources(request: ListCodeSourcesRequest): Promise<ListCodeSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCodeSourcesWithOptions(request, headers, runtime);
  }

  /**
   * 获取数据集列表
   * 
   * @param request - ListDatasetsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetsResponse
   */
  async listDatasetsWithOptions(request: ListDatasetsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDatasetsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceTypes)) {
      query["DataSourceTypes"] = request.dataSourceTypes;
    }

    if (!Util.isUnset(request.dataTypes)) {
      query["DataTypes"] = request.dataTypes;
    }

    if (!Util.isUnset(request.label)) {
      query["Label"] = request.label;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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

    if (!Util.isUnset(request.properties)) {
      query["Properties"] = request.properties;
    }

    if (!Util.isUnset(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!Util.isUnset(request.sourceDatasetId)) {
      query["SourceDatasetId"] = request.sourceDatasetId;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceTypes)) {
      query["SourceTypes"] = request.sourceTypes;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDatasets",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDatasetsResponse>(await this.callApi(params, req, runtime), new ListDatasetsResponse({}));
  }

  /**
   * 获取数据集列表
   * 
   * @param request - ListDatasetsRequest
   * @returns ListDatasetsResponse
   */
  async listDatasets(request: ListDatasetsRequest): Promise<ListDatasetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasetsWithOptions(request, headers, runtime);
  }

  /**
   * 获取实验列表
   * 
   * @param tmpReq - ListExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperimentResponse
   */
  async listExperimentWithOptions(tmpReq: ListExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListExperimentResponse> {
    Util.validateModel(tmpReq);
    let request = new ListExperimentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.options)) {
      request.optionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.options, "Options", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.optionsShrink)) {
      query["Options"] = request.optionsShrink;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageToken)) {
      query["PageToken"] = request.pageToken;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListExperimentResponse>(await this.callApi(params, req, runtime), new ListExperimentResponse({}));
  }

  /**
   * 获取实验列表
   * 
   * @param request - ListExperimentRequest
   * @returns ListExperimentResponse
   */
  async listExperiment(request: ListExperimentRequest): Promise<ListExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentWithOptions(request, headers, runtime);
  }

  /**
   * 列举标签
   * 
   * @param request - ListImageLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImageLabelsResponse
   */
  async listImageLabelsWithOptions(request: ListImageLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListImageLabelsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.labelFilter)) {
      query["LabelFilter"] = request.labelFilter;
    }

    if (!Util.isUnset(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListImageLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/image/labels`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListImageLabelsResponse>(await this.callApi(params, req, runtime), new ListImageLabelsResponse({}));
  }

  /**
   * 列举标签
   * 
   * @param request - ListImageLabelsRequest
   * @returns ListImageLabelsResponse
   */
  async listImageLabels(request: ListImageLabelsRequest): Promise<ListImageLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listImageLabelsWithOptions(request, headers, runtime);
  }

  /**
   * 列举已注册镜像
   * 
   * @param request - ListImagesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesResponse
   */
  async listImagesWithOptions(request: ListImagesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListImagesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.imageUri)) {
      query["ImageUri"] = request.imageUri;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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

    if (!Util.isUnset(request.parentUserId)) {
      query["ParentUserId"] = request.parentUserId;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListImages",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListImagesResponse>(await this.callApi(params, req, runtime), new ListImagesResponse({}));
  }

  /**
   * 列举已注册镜像
   * 
   * @param request - ListImagesRequest
   * @returns ListImagesResponse
   */
  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listImagesWithOptions(request, headers, runtime);
  }

  /**
   * 列举工作空间成员
   * 
   * @param request - ListMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMembersResponse
   */
  async listMembersWithOptions(WorkspaceId: string, request: ListMembersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMembersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.memberName)) {
      query["MemberName"] = request.memberName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.roles)) {
      query["Roles"] = request.roles;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMembers",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMembersResponse>(await this.callApi(params, req, runtime), new ListMembersResponse({}));
  }

  /**
   * 列举工作空间成员
   * 
   * @param request - ListMembersRequest
   * @returns ListMembersResponse
   */
  async listMembers(WorkspaceId: string, request: ListMembersRequest): Promise<ListMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMembersWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获取模型版本列表
   * 
   * @param request - ListModelVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelVersionsResponse
   */
  async listModelVersionsWithOptions(ModelId: string, request: ListModelVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListModelVersionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.approvalStatus)) {
      query["ApprovalStatus"] = request.approvalStatus;
    }

    if (!Util.isUnset(request.formatType)) {
      query["FormatType"] = request.formatType;
    }

    if (!Util.isUnset(request.frameworkType)) {
      query["FrameworkType"] = request.frameworkType;
    }

    if (!Util.isUnset(request.label)) {
      query["Label"] = request.label;
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

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModelVersions",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${OpenApiUtil.getEncodeParam(ModelId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListModelVersionsResponse>(await this.callApi(params, req, runtime), new ListModelVersionsResponse({}));
  }

  /**
   * 获取模型版本列表
   * 
   * @param request - ListModelVersionsRequest
   * @returns ListModelVersionsResponse
   */
  async listModelVersions(ModelId: string, request: ListModelVersionsRequest): Promise<ListModelVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelVersionsWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * 获取模型列表
   * 
   * @param request - ListModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelsResponse
   */
  async listModelsWithOptions(request: ListModelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListModelsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.collections)) {
      query["Collections"] = request.collections;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.label)) {
      query["Label"] = request.label;
    }

    if (!Util.isUnset(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.modelType)) {
      query["ModelType"] = request.modelType;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.task)) {
      query["Task"] = request.task;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListModelsResponse>(await this.callApi(params, req, runtime), new ListModelsResponse({}));
  }

  /**
   * 获取模型列表
   * 
   * @param request - ListModelsRequest
   * @returns ListModelsResponse
   */
  async listModels(request: ListModelsRequest): Promise<ListModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelsWithOptions(request, headers, runtime);
  }

  /**
   * 列举权限
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionsResponse
   */
  async listPermissionsWithOptions(WorkspaceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPermissionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListPermissions",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}/permissions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPermissionsResponse>(await this.callApi(params, req, runtime), new ListPermissionsResponse({}));
  }

  /**
   * 列举权限
   * @returns ListPermissionsResponse
   */
  async listPermissions(WorkspaceId: string): Promise<ListPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPermissionsWithOptions(WorkspaceId, headers, runtime);
  }

  /**
   * 列举产品
   * 
   * @param request - ListProductsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsResponse
   */
  async listProductsWithOptions(request: ListProductsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProductsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productCodes)) {
      query["ProductCodes"] = request.productCodes;
    }

    if (!Util.isUnset(request.serviceCodes)) {
      query["ServiceCodes"] = request.serviceCodes;
    }

    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProducts",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/products`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProductsResponse>(await this.callApi(params, req, runtime), new ListProductsResponse({}));
  }

  /**
   * 列举产品
   * 
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  async listProducts(request: ListProductsRequest): Promise<ListProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductsWithOptions(request, headers, runtime);
  }

  /**
   * 获取已有配额列表
   * 
   * @param request - ListQuotasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotasResponse
   */
  async listQuotasWithOptions(request: ListQuotasRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListQuotasResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListQuotas",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListQuotasResponse>(await this.callApi(params, req, runtime), new ListQuotasResponse({}));
  }

  /**
   * 获取已有配额列表
   * 
   * @param request - ListQuotasRequest
   * @returns ListQuotasResponse
   */
  async listQuotas(request: ListQuotasRequest): Promise<ListQuotasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotasWithOptions(request, headers, runtime);
  }

  /**
   * 列举工作空间资源
   * 
   * @param request - ListResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: ListResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.option)) {
      query["Option"] = request.option;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productTypes)) {
      query["ProductTypes"] = request.productTypes;
    }

    if (!Util.isUnset(request.quotaIds)) {
      query["QuotaIds"] = request.quotaIds;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!Util.isUnset(request.verboseFields)) {
      query["VerboseFields"] = request.verboseFields;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResources",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourcesResponse>(await this.callApi(params, req, runtime), new ListResourcesResponse({}));
  }

  /**
   * 列举工作空间资源
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 获取Run的指标记录列表
   * 
   * @param request - ListRunMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRunMetricsResponse
   */
  async listRunMetricsWithOptions(RunId: string, request: ListRunMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRunMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.pageToken)) {
      query["PageToken"] = request.pageToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRunMetrics",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${OpenApiUtil.getEncodeParam(RunId)}/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRunMetricsResponse>(await this.callApi(params, req, runtime), new ListRunMetricsResponse({}));
  }

  /**
   * 获取Run的指标记录列表
   * 
   * @param request - ListRunMetricsRequest
   * @returns ListRunMetricsResponse
   */
  async listRunMetrics(RunId: string, request: ListRunMetricsRequest): Promise<ListRunMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRunMetricsWithOptions(RunId, request, headers, runtime);
  }

  /**
   * 获取Run列表
   * 
   * @param request - ListRunsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRunsResponse
   */
  async listRunsWithOptions(request: ListRunsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRunsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!Util.isUnset(request.gmtCreateTime)) {
      query["GmtCreateTime"] = request.gmtCreateTime;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageToken)) {
      query["PageToken"] = request.pageToken;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRuns",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRunsResponse>(await this.callApi(params, req, runtime), new ListRunsResponse({}));
  }

  /**
   * 获取Run列表
   * 
   * @param request - ListRunsRequest
   * @returns ListRunsResponse
   */
  async listRuns(request: ListRunsRequest): Promise<ListRunsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRunsWithOptions(request, headers, runtime);
  }

  /**
   * 列出工作空间的可变为成员的用户
   * 
   * @param request - ListWorkspaceUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceUsersResponse
   */
  async listWorkspaceUsersWithOptions(WorkspaceId: string, request: ListWorkspaceUsersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWorkspaceUsersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkspaceUsers",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListWorkspaceUsersResponse>(await this.callApi(params, req, runtime), new ListWorkspaceUsersResponse({}));
  }

  /**
   * 列出工作空间的可变为成员的用户
   * 
   * @param request - ListWorkspaceUsersRequest
   * @returns ListWorkspaceUsersResponse
   */
  async listWorkspaceUsers(WorkspaceId: string, request: ListWorkspaceUsersRequest): Promise<ListWorkspaceUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspaceUsersWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获得工作空间列表
   * 
   * @param request - ListWorkspacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(request: ListWorkspacesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWorkspacesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fields)) {
      query["Fields"] = request.fields;
    }

    if (!Util.isUnset(request.moduleList)) {
      query["ModuleList"] = request.moduleList;
    }

    if (!Util.isUnset(request.option)) {
      query["Option"] = request.option;
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

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!Util.isUnset(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    if (!Util.isUnset(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkspaces",
      version: "2021-02-04",
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
   * 获得工作空间列表
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
   * 批量记录Run的指标
   * 
   * @param request - LogRunMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LogRunMetricsResponse
   */
  async logRunMetricsWithOptions(RunId: string, request: LogRunMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<LogRunMetricsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.metrics)) {
      body["Metrics"] = request.metrics;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LogRunMetrics",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${OpenApiUtil.getEncodeParam(RunId)}/metrics/action/log`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<LogRunMetricsResponse>(await this.callApi(params, req, runtime), new LogRunMetricsResponse({}));
  }

  /**
   * 批量记录Run的指标
   * 
   * @param request - LogRunMetricsRequest
   * @returns LogRunMetricsResponse
   */
  async logRunMetrics(RunId: string, request: LogRunMetricsRequest): Promise<LogRunMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.logRunMetricsWithOptions(RunId, request, headers, runtime);
  }

  /**
   * 发布一个代码源配置为本工作空间下所有人可见
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishCodeSourceResponse
   */
  async publishCodeSourceWithOptions(CodeSourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishCodeSourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "PublishCodeSource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources/${OpenApiUtil.getEncodeParam(CodeSourceId)}/publish`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishCodeSourceResponse>(await this.callApi(params, req, runtime), new PublishCodeSourceResponse({}));
  }

  /**
   * 发布一个代码源配置为本工作空间下所有人可见
   * @returns PublishCodeSourceResponse
   */
  async publishCodeSource(CodeSourceId: string): Promise<PublishCodeSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishCodeSourceWithOptions(CodeSourceId, headers, runtime);
  }

  /**
   * 更新数据集
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishDatasetResponse
   */
  async publishDatasetWithOptions(DatasetId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishDatasetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "PublishDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${OpenApiUtil.getEncodeParam(DatasetId)}/publish`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishDatasetResponse>(await this.callApi(params, req, runtime), new PublishDatasetResponse({}));
  }

  /**
   * 更新数据集
   * @returns PublishDatasetResponse
   */
  async publishDataset(DatasetId: string): Promise<PublishDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishDatasetWithOptions(DatasetId, headers, runtime);
  }

  /**
   * 发布 Image
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishImageResponse
   */
  async publishImageWithOptions(ImageId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishImageResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "PublishImage",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${OpenApiUtil.getEncodeParam(ImageId)}/publish`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishImageResponse>(await this.callApi(params, req, runtime), new PublishImageResponse({}));
  }

  /**
   * 发布 Image
   * @returns PublishImageResponse
   */
  async publishImage(ImageId: string): Promise<PublishImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishImageWithOptions(ImageId, headers, runtime);
  }

  /**
   * 删除 Image
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveImageResponse
   */
  async removeImageWithOptions(ImageId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveImageResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveImage",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${OpenApiUtil.getEncodeParam(ImageId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveImageResponse>(await this.callApi(params, req, runtime), new RemoveImageResponse({}));
  }

  /**
   * 删除 Image
   * @returns RemoveImageResponse
   */
  async removeImage(ImageId: string): Promise<RemoveImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeImageWithOptions(ImageId, headers, runtime);
  }

  /**
   * 删除 Image 的标签
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveImageLabelsResponse
   */
  async removeImageLabelsWithOptions(ImageId: string, LabelKey: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveImageLabelsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveImageLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${OpenApiUtil.getEncodeParam(ImageId)}/labels/${OpenApiUtil.getEncodeParam(LabelKey)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveImageLabelsResponse>(await this.callApi(params, req, runtime), new RemoveImageLabelsResponse({}));
  }

  /**
   * 删除 Image 的标签
   * @returns RemoveImageLabelsResponse
   */
  async removeImageLabels(ImageId: string, LabelKey: string): Promise<RemoveImageLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeImageLabelsWithOptions(ImageId, LabelKey, headers, runtime);
  }

  /**
   * 删除成员角色
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveMemberRoleResponse
   */
  async removeMemberRoleWithOptions(WorkspaceId: string, MemberId: string, RoleName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveMemberRoleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveMemberRole",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}/members/${OpenApiUtil.getEncodeParam(MemberId)}/roles/${OpenApiUtil.getEncodeParam(RoleName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveMemberRoleResponse>(await this.callApi(params, req, runtime), new RemoveMemberRoleResponse({}));
  }

  /**
   * 删除成员角色
   * @returns RemoveMemberRoleResponse
   */
  async removeMemberRole(WorkspaceId: string, MemberId: string, RoleName: string): Promise<RemoveMemberRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeMemberRoleWithOptions(WorkspaceId, MemberId, RoleName, headers, runtime);
  }

  /**
   * 更新实验标签
   * 
   * @param request - SetExperimentLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetExperimentLabelsResponse
   */
  async setExperimentLabelsWithOptions(ExperimentId: string, request: SetExperimentLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SetExperimentLabelsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetExperimentLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${OpenApiUtil.getEncodeParam(ExperimentId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SetExperimentLabelsResponse>(await this.callApi(params, req, runtime), new SetExperimentLabelsResponse({}));
  }

  /**
   * 更新实验标签
   * 
   * @param request - SetExperimentLabelsRequest
   * @returns SetExperimentLabelsResponse
   */
  async setExperimentLabels(ExperimentId: string, request: SetExperimentLabelsRequest): Promise<SetExperimentLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.setExperimentLabelsWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * 更新数据集
   * 
   * @param request - UpdateDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetResponse
   */
  async updateDatasetWithOptions(DatasetId: string, request: UpdateDatasetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDatasetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.options)) {
      body["Options"] = request.options;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${OpenApiUtil.getEncodeParam(DatasetId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDatasetResponse>(await this.callApi(params, req, runtime), new UpdateDatasetResponse({}));
  }

  /**
   * 更新数据集
   * 
   * @param request - UpdateDatasetRequest
   * @returns UpdateDatasetResponse
   */
  async updateDataset(DatasetId: string, request: UpdateDatasetRequest): Promise<UpdateDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasetWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 更新默认工作空间
   * 
   * @param request - UpdateDefaultWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDefaultWorkspaceResponse
   */
  async updateDefaultWorkspaceWithOptions(request: UpdateDefaultWorkspaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDefaultWorkspaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDefaultWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/defaultWorkspaces`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDefaultWorkspaceResponse>(await this.callApi(params, req, runtime), new UpdateDefaultWorkspaceResponse({}));
  }

  /**
   * 更新默认工作空间
   * 
   * @param request - UpdateDefaultWorkspaceRequest
   * @returns UpdateDefaultWorkspaceResponse
   */
  async updateDefaultWorkspace(request: UpdateDefaultWorkspaceRequest): Promise<UpdateDefaultWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDefaultWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * 更新实验
   * 
   * @param request - UpdateExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExperimentResponse
   */
  async updateExperimentWithOptions(ExperimentId: string, request: UpdateExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${OpenApiUtil.getEncodeParam(ExperimentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateExperimentResponse>(await this.callApi(params, req, runtime), new UpdateExperimentResponse({}));
  }

  /**
   * 更新实验
   * 
   * @param request - UpdateExperimentRequest
   * @returns UpdateExperimentResponse
   */
  async updateExperiment(ExperimentId: string, request: UpdateExperimentRequest): Promise<UpdateExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * 更新模型
   * 
   * @param request - UpdateModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelResponse
   */
  async updateModelWithOptions(ModelId: string, request: UpdateModelRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateModelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!Util.isUnset(request.modelDescription)) {
      body["ModelDescription"] = request.modelDescription;
    }

    if (!Util.isUnset(request.modelDoc)) {
      body["ModelDoc"] = request.modelDoc;
    }

    if (!Util.isUnset(request.modelName)) {
      body["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.modelType)) {
      body["ModelType"] = request.modelType;
    }

    if (!Util.isUnset(request.orderNumber)) {
      body["OrderNumber"] = request.orderNumber;
    }

    if (!Util.isUnset(request.origin)) {
      body["Origin"] = request.origin;
    }

    if (!Util.isUnset(request.task)) {
      body["Task"] = request.task;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateModel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${OpenApiUtil.getEncodeParam(ModelId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateModelResponse>(await this.callApi(params, req, runtime), new UpdateModelResponse({}));
  }

  /**
   * 更新模型
   * 
   * @param request - UpdateModelRequest
   * @returns UpdateModelResponse
   */
  async updateModel(ModelId: string, request: UpdateModelRequest): Promise<UpdateModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * 更新模型版本
   * 
   * @param request - UpdateModelVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelVersionResponse
   */
  async updateModelVersionWithOptions(ModelId: string, VersionName: string, request: UpdateModelVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateModelVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.approvalStatus)) {
      body["ApprovalStatus"] = request.approvalStatus;
    }

    if (!Util.isUnset(request.compressionSpec)) {
      body["CompressionSpec"] = request.compressionSpec;
    }

    if (!Util.isUnset(request.evaluationSpec)) {
      body["EvaluationSpec"] = request.evaluationSpec;
    }

    if (!Util.isUnset(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!Util.isUnset(request.inferenceSpec)) {
      body["InferenceSpec"] = request.inferenceSpec;
    }

    if (!Util.isUnset(request.metrics)) {
      body["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.options)) {
      body["Options"] = request.options;
    }

    if (!Util.isUnset(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.trainingSpec)) {
      body["TrainingSpec"] = request.trainingSpec;
    }

    if (!Util.isUnset(request.versionDescription)) {
      body["VersionDescription"] = request.versionDescription;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateModelVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${OpenApiUtil.getEncodeParam(ModelId)}/versions/${OpenApiUtil.getEncodeParam(VersionName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateModelVersionResponse>(await this.callApi(params, req, runtime), new UpdateModelVersionResponse({}));
  }

  /**
   * 更新模型版本
   * 
   * @param request - UpdateModelVersionRequest
   * @returns UpdateModelVersionResponse
   */
  async updateModelVersion(ModelId: string, VersionName: string, request: UpdateModelVersionRequest): Promise<UpdateModelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelVersionWithOptions(ModelId, VersionName, request, headers, runtime);
  }

  /**
   * 更新Run
   * 
   * @param request - UpdateRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRunResponse
   */
  async updateRunWithOptions(RunId: string, request: UpdateRunRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRunResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRun",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${OpenApiUtil.getEncodeParam(RunId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateRunResponse>(await this.callApi(params, req, runtime), new UpdateRunResponse({}));
  }

  /**
   * 更新Run
   * 
   * @param request - UpdateRunRequest
   * @returns UpdateRunResponse
   */
  async updateRun(RunId: string, request: UpdateRunRequest): Promise<UpdateRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRunWithOptions(RunId, request, headers, runtime);
  }

  /**
   * 更新工作空间
   * 
   * @param request - UpdateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspaceWithOptions(WorkspaceId: string, request: UpdateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateWorkspaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkspaceResponse>(await this.callApi(params, req, runtime), new UpdateWorkspaceResponse({}));
  }

  /**
   * 更新工作空间
   * 
   * @param request - UpdateWorkspaceRequest
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspace(WorkspaceId: string, request: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkspaceWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 更新工作空间资源
   * 
   * @param request - UpdateWorkspaceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceResourceResponse
   */
  async updateWorkspaceResourceWithOptions(WorkspaceId: string, request: UpdateWorkspaceResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateWorkspaceResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.isDefault)) {
      body["IsDefault"] = request.isDefault;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkspaceResource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${OpenApiUtil.getEncodeParam(WorkspaceId)}/resources`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkspaceResourceResponse>(await this.callApi(params, req, runtime), new UpdateWorkspaceResourceResponse({}));
  }

  /**
   * 更新工作空间资源
   * 
   * @param request - UpdateWorkspaceResourceRequest
   * @returns UpdateWorkspaceResourceResponse
   */
  async updateWorkspaceResource(WorkspaceId: string, request: UpdateWorkspaceResourceRequest): Promise<UpdateWorkspaceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkspaceResourceWithOptions(WorkspaceId, request, headers, runtime);
  }

}
