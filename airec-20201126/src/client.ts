// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ExtraDataSource extends $tea.Model {
  /**
   * @example
   * E01D574F-ABD0-4C55-A5E3-8D24FD8D42EA
   */
  dataSourceId?: string;
  /**
   * @example
   * 2021-12-07T13:26:29.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2021-12-07T13:26:29.000Z
   */
  gmtModified?: string;
  meta?: ExtraDataSourceMeta;
  /**
   * @example
   * Ready 待应用；Online 已应用；Failed失败
   */
  status?: string;
  /**
   * @example
   * UserCustomDataSource、ItemCustomDataSource、BehaviorCustomDataSource、SampleCustomDataSource
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      meta: 'Meta',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: ExtraDataSourceMeta,
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeatureTable extends $tea.Model {
  /**
   * @example
   * 30E70118-FC7C-4438-9287-583CE47266A9
   */
  featureTableId?: string;
  /**
   * @example
   * 2021-12-10T02:59:54.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2021-12-10T02:59:54.000Z
   */
  gmtModified?: string;
  meta?: FeatureTableMeta;
  status?: string;
  /**
   * @example
   * ItemFeatureTable 物品特征表 UserFeatureTable 用户特征表
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      featureTableId: 'FeatureTableId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      meta: 'Meta',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureTableId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: FeatureTableMeta,
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RankingModelTemplate extends $tea.Model {
  meta?: RankingModelTemplateMeta;
  /**
   * @example
   * TRAINING_SUCCESS
   */
  status?: string;
  /**
   * @example
   * a-a-a
   */
  templateId?: string;
  /**
   * @example
   * 3
   */
  versionNum?: number;
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
      status: 'Status',
      templateId: 'TemplateId',
      versionNum: 'VersionNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: RankingModelTemplateMeta,
      status: 'string',
      templateId: 'string',
      versionNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RankingModelVersion extends $tea.Model {
  /**
   * @example
   * 模型A_t1638964800000
   */
  name?: string;
  runLog?: string;
  runResult?: RankingModelVersionRunResult;
  /**
   * @example
   * 2021-12-08T20:00:00.0Z
   */
  runTime?: string;
  /**
   * @example
   * TRAINING
   */
  status?: string;
  /**
   * @example
   * a-a-a
   */
  templateId?: string;
  /**
   * @example
   * 模型A
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      runLog: 'RunLog',
      runResult: 'RunResult',
      runTime: 'RunTime',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      runLog: 'string',
      runResult: RankingModelVersionRunResult,
      runTime: 'string',
      status: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RankingSystem extends $tea.Model {
  /**
   * @example
   * NOT_APPLIED
   */
  applyStatus?: string;
  /**
   * @example
   * NOT_DEPLOYED
   */
  deployStatus?: string;
  meta?: RankingSystemMeta;
  /**
   * @example
   * a-a-a
   */
  modelTemplateId?: string;
  /**
   * @example
   * servicea
   */
  name?: string;
  sceneIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      applyStatus: 'ApplyStatus',
      deployStatus: 'DeployStatus',
      meta: 'Meta',
      modelTemplateId: 'ModelTemplateId',
      name: 'Name',
      sceneIdList: 'SceneIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyStatus: 'string',
      deployStatus: 'string',
      meta: RankingSystemMeta,
      modelTemplateId: 'string',
      name: 'string',
      sceneIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RankingSystemHistory extends $tea.Model {
  meta?: RankingSystemHistoryMeta;
  /**
   * @example
   * servicea
   */
  name?: string;
  /**
   * @example
   * 8AC865AF-37D6-42ED-AA9A-B60D8ECDF640
   */
  operateId?: string;
  /**
   * @example
   * 2021-12-06T03:01:41.217Z
   */
  operateTime?: string;
  /**
   * @example
   * CONF_CHANGE
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
      name: 'Name',
      operateId: 'OperateId',
      operateTime: 'OperateTime',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: RankingSystemHistoryMeta,
      name: 'string',
      operateId: 'string',
      operateTime: 'string',
      operateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Sample extends $tea.Model {
  /**
   * @example
   * 2021-12-07T12:28:52.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2021-12-07T12:28:52.000Z
   */
  gmtModified?: string;
  meta?: SampleMeta;
  /**
   * @example
   * 1638880131873
   */
  sampleId?: string;
  /**
   * @example
   * 样本状态 Unready 未完成配置  Ready   配置完成  Generating 样本生成中  Success  样本生成成功  Failed 样本生成失败  Formatting 格式化中  Formatted 格式化完成  FormatFailed 格式化失败  Applied 已应用到模型中
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      meta: 'Meta',
      sampleId: 'SampleId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: SampleMeta,
      sampleId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatasetResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the dataset.
   */
  result?: AttachDatasetResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: AttachDatasetResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatasetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachIndexVersionResponseBody extends $tea.Model {
  /**
   * @example
   * E63A27A4-3411-4910-B7D5-12EEAC19389B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachIndexVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachIndexVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachIndexVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRankingModelReachableResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRankingModelReachableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckRankingModelReachableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckRankingModelReachableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentRequest extends $tea.Model {
  /**
   * @remarks
   * true: verifies experiment information. false (default): creates an experiment.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E3D6FE3B-B7C2-43DA-9A13-5EA837ACED9B
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the experiment.
   */
  result?: CloneExperimentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CloneExperimentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloneExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneSampleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: Sample;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: Sample,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneSampleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneSampleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloneSampleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColdStartRankRequest extends $tea.Model {
  /**
   * @example
   * eg: k1:v1|k2:v2|k3:v1,v2,v3
   */
  features?: string;
  /**
   * @example
   * abfsc
   */
  imei?: string;
  /**
   * @example
   * 16240:video
   */
  items?: string;
  /**
   * @example
   * sceneId
   */
  sceneId?: string;
  /**
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      features: 'features',
      imei: 'imei',
      items: 'items',
      sceneId: 'sceneId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: 'string',
      imei: 'string',
      items: 'string',
      sceneId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColdStartRankResponseBody extends $tea.Model {
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: ColdStartRankResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ColdStartRankResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColdStartRankResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ColdStartRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ColdStartRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomAnalysisTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ITEM_CUSTOM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomAnalysisTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 16B78383-2803-4964-9605-37B30C073B0E
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomAnalysisTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomAnalysisTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomAnalysisTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomSampleResponseBody extends $tea.Model {
  /**
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  result?: Sample;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: Sample,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomSampleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomSampleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomSampleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataDiagnoseTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataDiagnoseTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDataDiagnoseTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDataDiagnoseTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExtraDataSourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ExtraDataSource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ExtraDataSource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExtraDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateExtraDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateExtraDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilteringAlgorithmRequest extends $tea.Model {
  /**
   * @remarks
   * xxx
   * 
   * @example
   * true
   */
  dryRun?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilteringAlgorithmResponseBody extends $tea.Model {
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values: true: performs a dry run. false: performs a dry run and sends the request.
   */
  result?: CreateFilteringAlgorithmResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateFilteringAlgorithmResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilteringAlgorithmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFilteringAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFilteringAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowControlTaskRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowControlTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDF43C1F-99E4-431F-A7C0-8B260A5A792E
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: CreateFlowControlTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CreateFlowControlTaskResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowControlTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFlowControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFlowControlTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: CreateInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CreateInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRankingModelRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRankingModelResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  result?: CreateRankingModelResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CreateRankingModelResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRankingModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRankingModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRankingModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRankingModelTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: RankingModelTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RankingModelTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRankingModelTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRankingModelTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRankingModelTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRankingSystemResponseBody extends $tea.Model {
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: RankingSystem;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RankingSystem,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRankingSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRankingSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRankingSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: CreateRuleResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CreateRuleResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSampleFormatConfigRequest extends $tea.Model {
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSampleFormatConfigResponseBody extends $tea.Model {
  /**
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  /**
   * @example
   * result
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSampleFormatConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSampleFormatConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSampleFormatConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneRequest extends $tea.Model {
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: CreateSceneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CreateSceneResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUmengTokenRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUmengTokenResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUmengTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUmengTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUmengTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecribeRankingModelResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * xxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: DecribeRankingModelResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DecribeRankingModelResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecribeRankingModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DecribeRankingModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DecribeRankingModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the dataset.
   */
  result?: DeleteDataSetResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DeleteDataSetResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
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

export class DeleteExtraDataSourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  /**
   * @remarks
   * 返回参数。
   */
  result?: ExtraDataSource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ExtraDataSource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExtraDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExtraDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteExtraDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilteringAlgorithmResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 936BE457-5D14-4DBD-85AE-176F7BA8D96D
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DeleteFilteringAlgorithmResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteFilteringAlgorithmResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilteringAlgorithmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFilteringAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFilteringAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowControlTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6E427B10-30FC-1873-922F-FC176D3398D4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the task was deleted. Valid values: true and false.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowControlTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFlowControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFlowControlTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRankingModelResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @example
   * D486768B-8BF8-4D80-B491-43DC3D0AF8AB
   */
  requestId?: string;
  result?: DeleteRankingModelResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DeleteRankingModelResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRankingModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRankingModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRankingModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRankingModelTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  result?: RankingModelTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RankingModelTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRankingModelTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRankingModelTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRankingModelTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRankingModelVersionResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
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

export class DeleteRankingModelVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRankingModelVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRankingModelVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRankingSystemResponseBody extends $tea.Model {
  requestId?: string;
  result?: RankingSystem;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RankingSystem,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRankingSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRankingSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRankingSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSampleResponseBody extends $tea.Model {
  /**
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  result?: Sample;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: Sample,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSampleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSampleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSampleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: DeleteSceneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DeleteSceneResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployRankingSystemRequest extends $tea.Model {
  /**
   * @remarks
   * The schema of the response parameters.
   * 
   * @example
   * "meta": {
   *     "autoDeploy": true,
   *     "autoDeployAuc": "0.9",
   *     "conf":"",
   *     "predictEngineType": "EAS",
   *     "predictEngine":{
   *     	"resourceId": "eas-oljkkdrggxhx7eizjd"
   *     }
   *   }
   */
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployRankingSystemResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @remarks
   * __null__
   * 
   * @example
   * xxx
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployRankingSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployRankingSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeployRankingSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBaseExperimentResponseBody extends $tea.Model {
  /**
   * @example
   * A74E3FB7-406C-5CBB-833E-E49308B5DC05
   */
  requestId?: string;
  result?: DescribeBaseExperimentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeBaseExperimentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBaseExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBaseExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBaseExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomAnalysisTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ITEM_CUSTOM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomAnalysisTaskResponseBody extends $tea.Model {
  /**
   * @example
   * xxx
   */
  code?: string;
  /**
   * @example
   * xxx
   */
  message?: string;
  /**
   * @example
   * 16B78383-2803-4964-9605-37B30C073B0E
   */
  requestId?: string;
  /**
   * @example
   * xxx
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomAnalysisTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomAnalysisTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCustomAnalysisTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSetMessageResponseBody extends $tea.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: DescribeDataSetMessageResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeDataSetMessageResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSetMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataSetMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDataSetMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultAlgorithmsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F60021C4-57AF-5F46-9B3E-FCEF1C7A1459
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DescribeDefaultAlgorithmsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeDefaultAlgorithmsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultAlgorithmsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefaultAlgorithmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefaultAlgorithmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExperimentResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E3D6FE3B-B7C2-43DA-9A13-5EA837ACED9B
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: DescribeExperimentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeExperimentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExperimentEnvResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  result?: DescribeExperimentEnvResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeExperimentEnvResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExperimentEnvResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExperimentEnvResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExperimentEnvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExperimentEnvProgressResponseBody extends $tea.Model {
  /**
   * @example
   * E3D6FE3B-B7C2-43DA-9A13-5EA837ACED9B
   */
  requestId?: string;
  result?: DescribeExperimentEnvProgressResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeExperimentEnvProgressResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExperimentEnvProgressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExperimentEnvProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExperimentEnvProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilteringAlgorithmResponseBody extends $tea.Model {
  /**
   * @remarks
   * The metadata of the filtering table.
   * 
   * @example
   * 7585C2B2-0D61-4C96-AC5D-B960BFEDD4A3
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the request.
   */
  result?: DescribeFilteringAlgorithmResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeFilteringAlgorithmResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilteringAlgorithmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFilteringAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFilteringAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: DescribeInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  result?: DescribeLatestTaskResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeLatestTaskResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLatestTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLatestTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQuotaResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The quotas of the instance.
   */
  result?: DescribeQuotaResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeQuotaResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the response. Default value: zh-cn.
   * 
   * @example
   * zh-cn
   */
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'acceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16B78383-2803-4964-9605-37B30C073B0E
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DescribeRegionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The returned result.
   * 
   * This parameter is required.
   * 
   * @example
   * selection
   */
  ruleType?: string;
  /**
   * @remarks
   * The type of the rule.
   * 
   * Valid values: selection and operation.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleType: 'ruleType',
      sceneId: 'sceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleType: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * __null__
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the rule.
   */
  result?: DescribeRuleResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeRuleResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: DescribeSceneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeSceneResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneBucketResponseBody extends $tea.Model {
  /**
   * @example
   * E3D6FE3B-B7C2-43DA-9A13-5EA837ACED9B
   */
  requestId?: string;
  result?: DescribeSceneBucketResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeSceneBucketResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneBucketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSceneBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSceneBucketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneThroughputResponseBody extends $tea.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: DescribeSceneThroughputResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeSceneThroughputResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneThroughputResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSceneThroughputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSceneThroughputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * error
   */
  levelType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * behavior
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      levelType: 'levelType',
      startTime: 'startTime',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      levelType: 'string',
      startTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportDetailResponseBody extends $tea.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: DescribeSyncReportDetailResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeSyncReportDetailResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSyncReportDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSyncReportDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportOutliersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  levelType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      key: 'key',
      levelType: 'levelType',
      startTime: 'startTime',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      key: 'string',
      levelType: 'string',
      startTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportOutliersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportOutliersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSyncReportOutliersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSyncReportOutliersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserMetricsRequest extends $tea.Model {
  /**
   * @remarks
   * The end time. The value is a timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1567155600
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the user metric that you want to query. Valid values: pvCtr and uvCtr.
   * 
   * This parameter is required.
   * 
   * @example
   * pvCtr
   */
  metricType?: string;
  /**
   * @remarks
   * The start time. The value is a timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1567152000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      metricType: 'metricType',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      metricType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserMetricsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: DescribeUserMetricsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeUserMetricsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserMetricsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The returned results.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * Decreases the quotas of a specified instance.
   */
  result?: DowngradeInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DowngradeInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DowngradeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DowngradeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableExperimentResponseBody extends $tea.Model {
  /**
   * @example
   * E3D6FE3B-B7C2-43DA-9A13-5EA837ACED9B
   */
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSampleResponseBody extends $tea.Model {
  /**
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  result?: Sample;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: Sample,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSampleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateSampleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateSampleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExtraDataSourceResponseBody extends $tea.Model {
  /**
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  result?: ExtraDataSource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ExtraDataSource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExtraDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExtraDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetExtraDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowControlTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: GetFlowControlTaskResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetFlowControlTaskResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowControlTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFlowControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFlowControlTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestDataDiagnoseTaskStatusResponseBody extends $tea.Model {
  /**
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  /**
   * @example
   * RUNNING
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestDataDiagnoseTaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLatestDataDiagnoseTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLatestDataDiagnoseTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRankingModelTemplateResponseBody extends $tea.Model {
  requestId?: string;
  result?: RankingModelTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RankingModelTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRankingModelTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRankingModelTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRankingModelTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRankingModelVersionResponseBody extends $tea.Model {
  requestId?: string;
  result?: RankingModelVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RankingModelVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRankingModelVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRankingModelVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRankingModelVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRankingSystemResponseBody extends $tea.Model {
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: RankingSystem;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RankingSystem,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRankingSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRankingSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRankingSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRankingSystemHistoryResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  result?: RankingSystemHistory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RankingSystemHistory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRankingSystemHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRankingSystemHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRankingSystemHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSampleRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  withExtendParmas?: boolean;
  static names(): { [key: string]: string } {
    return {
      withExtendParmas: 'withExtendParmas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withExtendParmas: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSampleResponseBody extends $tea.Model {
  /**
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  result?: Sample;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: Sample,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSampleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSampleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSampleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitComputingResourceRequest extends $tea.Model {
  /**
   * @example
   * MAX_COMPUTE
   */
  key?: string;
  /**
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitComputingResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
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

export class InitComputingResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitComputingResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitComputingResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1588521600
   */
  endTime?: number;
  /**
   * @example
   * all
   */
  experimentIds?: string;
  /**
   * @example
   * hot,emb,u2x2i,hilp,new,
   */
  matchTypes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  metricType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  sceneIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1588521600
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Alibaba
   */
  traceIds?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      experimentIds: 'experimentIds',
      matchTypes: 'matchTypes',
      metricType: 'metricType',
      sceneIds: 'sceneIds',
      startTime: 'startTime',
      traceIds: 'traceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      experimentIds: 'string',
      matchTypes: 'string',
      metricType: 'string',
      sceneIds: 'string',
      startTime: 'number',
      traceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsResponseBody extends $tea.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: ListDashboardDetailsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDashboardDetailsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDashboardDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDashboardDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsFlowsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1588521600
   */
  endTime?: number;
  /**
   * @example
   * all
   */
  experimentIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * USERACTIONUV_COUNT
   */
  metricType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  sceneIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1588521600
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Alibaba
   */
  traceIds?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      experimentIds: 'experimentIds',
      metricType: 'metricType',
      sceneIds: 'sceneIds',
      startTime: 'startTime',
      traceIds: 'traceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      experimentIds: 'string',
      metricType: 'string',
      sceneIds: 'string',
      startTime: 'number',
      traceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsFlowsResponseBody extends $tea.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: ListDashboardDetailsFlowsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: ListDashboardDetailsFlowsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsFlowsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDashboardDetailsFlowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDashboardDetailsFlowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsRequest extends $tea.Model {
  /**
   * @remarks
   * The statistical results.
   * 
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  endTime?: number;
  metricQuery?: string;
  /**
   * @remarks
   * The statistical results.
   * 
   * @example
   * The details about the metric.
   */
  metricType?: string;
  metricView?: string;
  /**
   * @remarks
   * USERACTIONPV_COUNT
   * 
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      metricQuery: 'metricQuery',
      metricType: 'metricType',
      metricView: 'metricView',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      metricQuery: 'string',
      metricType: 'string',
      metricView: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsResponseBody extends $tea.Model {
  /**
   * @remarks
   * __null__
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The specific value of the metric.
   */
  result?: ListDashboardMetricsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDashboardMetricsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDashboardMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDashboardMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsFlowsRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the metric.
   * 
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  endTime?: number;
  /**
   * @remarks
   * The metric data.
   * 
   * This parameter is required.
   * 
   * @example
   * The error code.
   */
  metricType?: string;
  /**
   * @remarks
   * The statistical results.
   * 
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      metricType: 'metricType',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      metricType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsFlowsResponseBody extends $tea.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the request.
   */
  result?: ListDashboardMetricsFlowsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDashboardMetricsFlowsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsFlowsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDashboardMetricsFlowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDashboardMetricsFlowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDiagnoseReportsRequest extends $tea.Model {
  /**
   * @example
   * 1566489600
   */
  taskCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      taskCreateTime: 'taskCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskCreateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDiagnoseReportsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  /**
   * @example
   * {
   *     "todayTimeLimit":8,
   *     "totalCount":10,
   *     "reports":[
   *         {
   *             "diagnoseLevel":"low | medium | high",
   *             "startTime":1566489600,
   *             "endTime":1566489600,
   *             "taskCreateTime":1566489600,
   *             "taskSource":"manual | cycle | firstRun",
   *             "total":{
   *                 "itemCount":100,
   *                 "userCount":100,
   *                 "bhvCount":100
   *             },
   *             "details":[
   *                 {
   *                     "key":"",
   *                     "level":"error | warn | info",
   *                     "errorCount":10,
   *                     "errorPercent":10,
   *                     "sampleEnabled":true;
   *                 }
   *             ]
   *         },
   *         {
   *             "diagnoseLevel":"low | medium | high",
   *             "startTime":1566489600,
   *             "endTime":1566489600,
   *             "taskCreateTime":1566489600,
   *             "taskSource":"manual | cycle | firstRun",
   *             "total":{
   *                 "itemCount":100,
   *                 "userCount":100,
   *                 "bhvCount":100
   *             },
   *             "details":[
   *                 {
   *                     "key":"",
   *                     "level":"error | warn | info",
   *                     "errorCount":10,
   *                     "errorPercent":10,
   *                     "sampleEnabled":true;
   *                 }
   *             ]
   *         }
   *     ]
   * }
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDiagnoseReportsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataDiagnoseReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataDiagnoseReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDiagnoseSampleDetailsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1682179200
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1665158400
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1665936000000
   */
  taskCreateTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cycle
   */
  taskSource?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      key: 'key',
      startTime: 'startTime',
      taskCreateTime: 'taskCreateTime',
      taskSource: 'taskSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      key: 'string',
      startTime: 'number',
      taskCreateTime: 'number',
      taskSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDiagnoseSampleDetailsResponseBody extends $tea.Model {
  /**
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDiagnoseSampleDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataDiagnoseSampleDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataDiagnoseSampleDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned datasets.
   */
  result?: ListDataSetResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataSetResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponseBody extends $tea.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: ListDataSourceResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataSourceResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBody extends $tea.Model {
  /**
   * @example
   * E3D6FE3B-B7C2-43DA-9A13-5EA837ACED9B
   */
  requestId?: string;
  result?: ListExperimentsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListExperimentsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExperimentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListExperimentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExtraDataSourcesRequest extends $tea.Model {
  /**
   * @example
   * UserCustomDataSource ItemCustomDataSource BehaviorCustomDataSource SampleCustomDataSource
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExtraDataSourcesResponseBody extends $tea.Model {
  /**
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  result?: ExtraDataSource[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ExtraDataSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExtraDataSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExtraDataSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListExtraDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureTablesRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  dataSourceId?: string;
  /**
   * @example
   * UserFeatureTable
   */
  type?: string;
  /**
   * @example
   * 1
   */
  updateFrequency?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'dataSourceId',
      type: 'type',
      updateFrequency: 'updateFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      type: 'string',
      updateFrequency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureTablesResponseBody extends $tea.Model {
  /**
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  /**
   * @example
   * result
   */
  result?: FeatureTable[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': FeatureTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFeatureTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFeatureTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilteringAlgorithmsRequest extends $tea.Model {
  /**
   * @example
   * 123
   */
  algorithmId?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 1
   */
  size?: number;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'algorithmId',
      page: 'page',
      size: 'size',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      page: 'number',
      size: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilteringAlgorithmsResponseBody extends $tea.Model {
  headers?: ListFilteringAlgorithmsResponseBodyHeaders;
  /**
   * @example
   * 7585C2B2-0D61-4C96-AC5D-B960BFEDD4A3
   */
  requestId?: string;
  result?: ListFilteringAlgorithmsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListFilteringAlgorithmsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListFilteringAlgorithmsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilteringAlgorithmsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFilteringAlgorithmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFilteringAlgorithmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * DRAFT
   */
  status?: string;
  /**
   * @example
   * 1661506482
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 6E427B10-30FC-1873-922F-FC176D3398D4
   */
  requestId?: string;
  result?: ListFlowControlTaskResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListFlowControlTaskResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFlowControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFlowControlTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskInvalidItemsRequest extends $tea.Model {
  body?: string[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskInvalidItemsResponseBody extends $tea.Model {
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: ListFlowControlTaskInvalidItemsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListFlowControlTaskInvalidItemsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskInvalidItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFlowControlTaskInvalidItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFlowControlTaskInvalidItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskItemReportsRequest extends $tea.Model {
  /**
   * @example
   * 5
   */
  count?: string;
  /**
   * @example
   * yesterDay
   */
  selectTimeType?: string;
  /**
   * @example
   * invalidItem
   */
  selectType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      selectTimeType: 'selectTimeType',
      selectType: 'selectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      selectTimeType: 'string',
      selectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskItemReportsResponseBody extends $tea.Model {
  /**
   * @example
   * D486768B-8BF8-4D80-B491-43DC3D0AF8AB
   */
  requestId?: string;
  result?: ListFlowControlTaskItemReportsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListFlowControlTaskItemReportsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskItemReportsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFlowControlTaskItemReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFlowControlTaskItemReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskItemsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskItemsResponseBody extends $tea.Model {
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: ListFlowControlTaskItemsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListFlowControlTaskItemsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFlowControlTaskItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFlowControlTaskItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskReferenceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This helps troubleshoot issues later.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListFlowControlTaskReferenceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListFlowControlTaskReferenceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskReferenceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFlowControlTaskReferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFlowControlTaskReferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskReportsRequest extends $tea.Model {
  /**
   * @example
   * 1668268800
   */
  endTime?: string;
  /**
   * @example
   * 1666195200
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskReportsResponseBody extends $tea.Model {
  /**
   * @example
   * 16B78383-2803-4964-9605-37B30C073B0E
   */
  requestId?: string;
  result?: ListFlowControlTaskReportsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListFlowControlTaskReportsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskReportsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFlowControlTaskReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFlowControlTaskReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexVersionsResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  result?: ListIndexVersionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListIndexVersionsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIndexVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIndexVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The state of the instance. Valid values: Running, Ready, Initializing, and Starting.
   * 
   * @example
   * 1608533404
   */
  expiredTime?: string;
  /**
   * @remarks
   * The name of the instance. Fuzzy match is supported.
   * 
   * @example
   * Test instance
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * The number of entries to return on each page. Valid values: 1 to 50. Default value: 10.
   */
  name?: string;
  /**
   * @remarks
   * GET /openapi/instances?name=test&instanceId=abc&page=1&size=10
   * 
   * @example
   * 1
   */
  page?: number;
  size?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'expiredTime',
      instanceId: 'instanceId',
      name: 'name',
      page: 'page',
      size: 'size',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      instanceId: 'string',
      name: 'string',
      page: 'number',
      size: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: ListInstanceResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInstanceResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The progress of the task that is running on the instance.
   */
  result?: ListInstanceTaskResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInstanceTaskResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  size?: number;
  strategyUsed?: boolean;
  withInvalidDetail?: boolean;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
      strategyUsed: 'strategyUsed',
      withInvalidDetail: 'withInvalidDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      strategyUsed: 'boolean',
      withInvalidDetail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemsResponseBody extends $tea.Model {
  /**
   * @example
   * 6839AE7C-A984-48C1-AC17-331BAC6D97BC
   */
  requestId?: string;
  result?: ListItemsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListItemsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  /**
   * @example
   * 1
   */
  page?: number;
  queryParams?: string;
  size?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      page: 'page',
      queryParams: 'queryParams',
      size: 'size',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      page: 'number',
      queryParams: 'string',
      size: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponseBody extends $tea.Model {
  code?: string;
  headers?: ListLogsResponseBodyHeaders;
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      headers: 'headers',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      headers: ListLogsResponseBodyHeaders,
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMixCategoriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ED093A1D-1C56-57A2-B078-3C518F632F03
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListMixCategoriesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListMixCategoriesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMixCategoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMixCategoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMixCategoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineStoragesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6839AE7C-A984-48C1-AC17-331BAC6D97BC
   */
  requestId?: Buffer;
  result?: ListOfflineStoragesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'Buffer',
      result: { 'type': 'array', 'itemType': ListOfflineStoragesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineStoragesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOfflineStoragesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOfflineStoragesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingModelTemplatesRequest extends $tea.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 1
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingModelTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  result?: RankingModelTemplate[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': RankingModelTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingModelTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRankingModelTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRankingModelTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingModelVersionsRequest extends $tea.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The state of the version. Valid values: DRAFT: The version is in the draft state. EFFECTIVE: The version is effective. PUBLISHING: The version is being published. INEFFECTIVE: The version has expired. FAILED: The version has not taken effect.
   * 
   * @example
   * TRAINING
   */
  status?: string;
  /**
   * @remarks
   * The ranking model ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a-a-a
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
      status: 'status',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      status: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingModelVersionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: RankingModelVersion[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': RankingModelVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingModelVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRankingModelVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRankingModelVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingModelsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * xxx
   */
  rankingModelId?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      rankingModelId: 'rankingModelId',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      rankingModelId: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingModelsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @example
   * 2D898E45-B97A-4245-B590-6D0AFEAF626B
   */
  requestId?: string;
  result?: ListRankingModelsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRankingModelsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingModelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRankingModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRankingModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingSystemHistoriesRequest extends $tea.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * CONF_CHANGE
   */
  operateType?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The schema of the response parameters.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      operateType: 'operateType',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateType: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingSystemHistoriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @remarks
   * The response body.
   */
  result?: RankingSystemHistory[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': RankingSystemHistory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingSystemHistoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRankingSystemHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRankingSystemHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingSystemsRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the ranking service.
   * 
   * @example
   * NOT_DEPLOYED
   */
  deployStatus?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * service-a
   */
  name?: string;
  /**
   * @remarks
   * The state of the deployment. Valid values: NOT_DEPLOYED: The ranking service is not deployed. DEPLOY_SUCCESS: The ranking service is deployed.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      deployStatus: 'deployStatus',
      name: 'name',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployStatus: 'string',
      name: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingSystemsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The schema of the response parameters.
   * 
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the request.
   */
  result?: RankingSystem[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': RankingSystem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingSystemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRankingSystemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRankingSystemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleConditionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListRuleConditionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRuleConditionsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleConditionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRuleConditionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRuleConditionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleTasksRequest extends $tea.Model {
  /**
   * @remarks
   * The completion rate of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'sceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleTasksResponseBody extends $tea.Model {
  /**
   * @remarks
   * Queries the status of a rule-specific task.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The ID of the scene.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The error message.
   */
  result?: ListRuleTasksResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: ListRuleTasksResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRuleTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRuleTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesRequest extends $tea.Model {
  /**
   * @example
   * 1567584765
   */
  endTime?: number;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selection
   */
  ruleType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  sceneId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * 1567584765
   */
  startTime?: number;
  /**
   * @example
   * EFFECTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      page: 'page',
      ruleType: 'ruleType',
      sceneId: 'sceneId',
      size: 'size',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      page: 'number',
      ruleType: 'string',
      sceneId: 'string',
      size: 'number',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $tea.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: ListRulesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRulesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSampleFormatConfigsResponseBody extends $tea.Model {
  /**
   * @example
   * EDF43C1F-99E4-431F-A7C0-8B260A5A792E
   */
  requestId?: string;
  /**
   * @example
   * xxx
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSampleFormatConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSampleFormatConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSampleFormatConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSamplesRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * Sample1
   */
  sampleId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      sampleId: 'sampleId',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      sampleId: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSamplesResponseBody extends $tea.Model {
  /**
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  /**
   * @example
   * result
   */
  result?: Sample[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': Sample },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSamplesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSamplesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSamplesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneItemsRequest extends $tea.Model {
  operationRuleId?: string;
  page?: number;
  previewType?: string;
  queryCount?: number;
  selectionRuleId?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      operationRuleId: 'operationRuleId',
      page: 'page',
      previewType: 'previewType',
      queryCount: 'queryCount',
      selectionRuleId: 'selectionRuleId',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationRuleId: 'string',
      page: 'number',
      previewType: 'string',
      queryCount: 'number',
      selectionRuleId: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneItemsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: ListSceneItemsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: ListSceneItemsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSceneItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSceneItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneParametersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: ListSceneParametersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: ListSceneParametersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSceneParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSceneParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether the item can be recommended.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * test
   */
  sceneId?: string;
  /**
   * @remarks
   * The ID of the scene.
   * 
   * @example
   * 10
   */
  size?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      sceneId: 'sceneId',
      size: 'size',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      sceneId: 'string',
      size: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: ListScenesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListScenesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListScenesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListScenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUmengAppkeysResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: ListUmengAppkeysResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListUmengAppkeysResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUmengAppkeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUmengAppkeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUmengAppkeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserClustersResponseBody extends $tea.Model {
  headers?: ListUserClustersResponseBodyHeaders;
  /**
   * @example
   * 1E2CBBA8-C623-4FEE-BC84-9672E460CA39
   */
  requestId?: string;
  result?: ListUserClustersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListUserClustersResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListUserClustersResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserClustersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the data source.
   */
  result?: ModifyDataSourceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: ModifyDataSourceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFeatureTableResponseBody extends $tea.Model {
  /**
   * @remarks
   * Modifies a feature table.
   * 
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  result?: FeatureTable;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: FeatureTable,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFeatureTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFeatureTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyFeatureTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFilteringAlgorithmMetaResponseBody extends $tea.Model {
  /**
   * @example
   * 7585C2B2-0D61-4C96-AC5D-B960BFEDD4A3
   */
  requestId?: string;
  result?: ModifyFilteringAlgorithmMetaResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyFilteringAlgorithmMetaResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFilteringAlgorithmMetaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFilteringAlgorithmMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyFilteringAlgorithmMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowControlTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * testname
   */
  taskName?: string;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The end time. The value is a timestamp in seconds.
   * 
   * @example
   * 1639519200
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the metadata.
   * 
   * @example
   * FlowControlTask
   */
  metaType?: string;
  /**
   * @remarks
   * The ID of the scene.
   * 
   * @example
   * all,sy101
   */
  sceneIds?: string;
  /**
   * @remarks
   * The parameters specified for the item selection rule.
   */
  selectionParams?: ModifyFlowControlTaskRequestSelectionParams[];
  /**
   * @remarks
   * The start time. The value is a timestamp in seconds.
   * 
   * @example
   * 1638460800
   */
  startTime?: number;
  /**
   * @remarks
   * The settings for item exposure.
   */
  target?: ModifyFlowControlTaskRequestTarget;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      description: 'description',
      endTime: 'endTime',
      metaType: 'metaType',
      sceneIds: 'sceneIds',
      selectionParams: 'selectionParams',
      startTime: 'startTime',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      description: 'string',
      endTime: 'number',
      metaType: 'string',
      sceneIds: 'string',
      selectionParams: { 'type': 'array', 'itemType': ModifyFlowControlTaskRequestSelectionParams },
      startTime: 'number',
      target: ModifyFlowControlTaskRequestTarget,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowControlTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates troubleshooting.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ModifyFlowControlTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyFlowControlTaskResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowControlTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFlowControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyFlowControlTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ModifyInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: ModifyInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyItemsResponseBody extends $tea.Model {
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfflineStoragesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F176EE8-51DA-4B4D-8FFE-04448CD7A171
   */
  requestId?: Buffer;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'Buffer',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfflineStoragesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyOfflineStoragesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyOfflineStoragesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRankingModelResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  code?: string;
  /**
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @remarks
   * The data source of the filtering table. Only MaxCompute tables are supported.
   */
  result?: ModifyRankingModelResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: ModifyRankingModelResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRankingModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRankingModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyRankingModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRankingModelTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRankingModelTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the ranking model.
   */
  result?: RankingModelTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RankingModelTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRankingModelTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRankingModelTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyRankingModelTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRankingSystemRequest extends $tea.Model {
  /**
   * @remarks
   * The configurations that you want to modify.
   * 
   * @example
   * {}
   */
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRankingSystemResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @remarks
   * The ranking service that was modified.
   */
  result?: RankingSystem;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RankingSystem,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRankingSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRankingSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyRankingSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ModifyRuleResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: ModifyRuleResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySampleRequest extends $tea.Model {
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySampleResponseBody extends $tea.Model {
  /**
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  result?: Sample;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: Sample,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySampleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySampleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifySampleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySceneResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: ModifySceneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: ModifySceneResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifySceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineFilteringAlgorithmResponseBody extends $tea.Model {
  /**
   * @example
   * 7585C2B2-0D61-4C96-AC5D-B960BFEDD4A3
   */
  requestId?: string;
  result?: OfflineFilteringAlgorithmResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: OfflineFilteringAlgorithmResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineFilteringAlgorithmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OfflineFilteringAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OfflineFilteringAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishFlowControlTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishFlowControlTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishFlowControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PublishFlowControlTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the rule. Example: selection and operation.
   * 
   * This parameter is required.
   * 
   * @example
   * selection
   */
  ruleType?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleType: 'ruleType',
      sceneId: 'sceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleType: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: PublishRuleResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: PublishRuleResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PublishRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushColdStartDocumentRequest extends $tea.Model {
  body?: PushColdStartDocumentRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': PushColdStartDocumentRequestBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushColdStartDocumentResponseBody extends $tea.Model {
  /**
   * @example
   * 7585C2B2-0D61-4C96-AC5D-B960BFEDD4A3
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushColdStartDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushColdStartDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushColdStartDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDocumentResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @remarks
   * true/false
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushInterventionResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushInterventionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushInterventionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushInterventionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataMessageRequest extends $tea.Model {
  /**
   * @example
   * expose
   */
  bhvType?: string;
  /**
   * @example
   * update
   */
  cmdType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  endTime?: number;
  imei?: string;
  /**
   * @example
   * 111
   */
  itemId?: string;
  /**
   * @example
   * video
   */
  itemType?: string;
  /**
   * @example
   * CONSOLE
   */
  messageSource?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * test
   */
  sceneId?: string;
  /**
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  startTime?: number;
  /**
   * @example
   * Alibaba
   */
  traceId?: string;
  /**
   * @example
   * 222
   */
  userId?: string;
  /**
   * @example
   * app
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      bhvType: 'bhvType',
      cmdType: 'cmdType',
      endTime: 'endTime',
      imei: 'imei',
      itemId: 'itemId',
      itemType: 'itemType',
      messageSource: 'messageSource',
      page: 'page',
      sceneId: 'sceneId',
      size: 'size',
      startTime: 'startTime',
      traceId: 'traceId',
      userId: 'userId',
      userType: 'userType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bhvType: 'string',
      cmdType: 'string',
      endTime: 'number',
      imei: 'string',
      itemId: 'string',
      itemType: 'string',
      messageSource: 'string',
      page: 'number',
      sceneId: 'string',
      size: 'number',
      startTime: 'number',
      traceId: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataMessageResponseBody extends $tea.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @example
   * xxx
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDataMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDataMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataMessageStatisticsRequest extends $tea.Model {
  /**
   * @remarks
   * The type of behaviors. Valid values: expose, click, like, comment, collect, stay, cart, buy, and evaluate.
   * 
   * @example
   * expose
   */
  bhvType?: string;
  /**
   * @remarks
   * The type of the operation. Valid values: update, delete, and add.
   * 
   * @example
   * update
   */
  cmdType?: string;
  /**
   * @remarks
   * The end time. The value is a timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  endTime?: number;
  imei?: string;
  /**
   * @remarks
   * The ID of the item. This parameter is required when the value of table is set to item.
   * 
   * @example
   * 111
   */
  itemId?: string;
  /**
   * @remarks
   * The type of the item. This parameter is required when the value of table is set to item.
   * 
   * @example
   * video
   */
  itemType?: string;
  /**
   * @remarks
   * The source of the operation. Valid values:
   * 
   * CONSOLE and FEEDER.
   * 
   * @example
   * FEEDER
   */
  messageSource?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * test
   */
  sceneId?: string;
  /**
   * @remarks
   * The start time. The value is a timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  startTime?: number;
  /**
   * @remarks
   * The event tracking ID.
   * 
   * @example
   * Alibaba
   */
  traceId?: string;
  /**
   * @remarks
   * The ID of the user. This parameter is required when the value of table is set to user.
   * 
   * @example
   * 222
   */
  userId?: string;
  /**
   * @remarks
   * The type of the user. This parameter is required when the value of table is set to user.
   * 
   * @example
   * app
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      bhvType: 'bhvType',
      cmdType: 'cmdType',
      endTime: 'endTime',
      imei: 'imei',
      itemId: 'itemId',
      itemType: 'itemType',
      messageSource: 'messageSource',
      sceneId: 'sceneId',
      startTime: 'startTime',
      traceId: 'traceId',
      userId: 'userId',
      userType: 'userType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bhvType: 'string',
      cmdType: 'string',
      endTime: 'number',
      imei: 'string',
      itemId: 'string',
      itemType: 'string',
      messageSource: 'string',
      sceneId: 'string',
      startTime: 'number',
      traceId: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataMessageStatisticsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * xxx
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataMessageStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDataMessageStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDataMessageStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExceptionHistoryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExceptionHistoryResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExceptionHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryExceptionHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryExceptionHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRawDataRequest extends $tea.Model {
  imei?: string;
  /**
   * @remarks
   * The item ID. This parameter is required when the table parameter is set to item.
   * 
   * @example
   * 112
   */
  itemId?: string;
  /**
   * @remarks
   * The type of the item. This parameter is required when the table parameter is set to item.
   * 
   * @example
   * video
   */
  itemType?: string;
  /**
   * @remarks
   * The user ID. This parameter is required when the table parameter is set to user.
   * 
   * @example
   * 111
   */
  userId?: string;
  /**
   * @remarks
   * The type of the user. This parameter is required when the table parameter is set to user.
   * 
   * @example
   * app
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      imei: 'imei',
      itemId: 'itemId',
      itemType: 'itemType',
      userId: 'userId',
      userType: 'userType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imei: 'string',
      itemId: 'string',
      itemType: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRawDataResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * xxx
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      code: 'code',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      code: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRawDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRawDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRawDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleAggregationReportResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleAggregationReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySingleAggregationReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySingleAggregationReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleReportRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the single table report. This parameter is required.
   * 
   * Valid values: typeItemValidScene,
   * 
   * typeItemTag,
   * 
   * typeItemTagScene,
   * 
   * typeItemWeightScene,
   * 
   * typeItemRawScene, and
   * 
   * typeItemExpireScene
   * 
   * This parameter is required.
   * 
   * @example
   * typeItemTagScene
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      reportType: 'reportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleReportResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * xxx
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySingleReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySingleReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySyncReportAggregationRequest extends $tea.Model {
  /**
   * @remarks
   * The end time. The value is a timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1586673466
   */
  endTime?: number;
  /**
   * @remarks
   * The start time. The value is a timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1586673466
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

export class QuerySyncReportAggregationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   * 
   * @example
   * xxx
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySyncReportAggregationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySyncReportAggregationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySyncReportAggregationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildIndexResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebuildIndexResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebuildIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecommendRequest extends $tea.Model {
  /**
   * @remarks
   * The status of the execution.
   * 
   * @example
   * eyJqb2luIjoiYW5kIiwiZmlsdGVycyI6W3siY29uZCI6ImNvbnRhaW4iLCJmaWVsZCI6InRhZ3MiLCJ2YWx1ZSI6IuWPjOS6uiJ9XX0.
   */
  filter?: string;
  /**
   * @remarks
   * The ID of the scene in which the item is to be recommended.
   * 
   * @example
   * 06e1565409c9fc4887036b974421****
   */
  imei?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 192.168.1.1
   */
  ip?: string;
  /**
   * @remarks
   * The information about event tracking. The value of this parameter varies based on different items and needs to be uploaded together with the corresponding behavior data.
   * 
   * @example
   * 1001
   */
  items?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * true
   */
  rankOpen?: boolean;
  /**
   * @remarks
   * The type of the recommended item.
   * 
   * @example
   * gul
   */
  recType?: string;
  /**
   * @remarks
   * The returned results.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  returnCount?: number;
  /**
   * @remarks
   * The number of result entries to return. Valid values: 0 to 50.
   * 
   * @example
   * test
   */
  sceneId?: string;
  /**
   * @remarks
   * The position at which the recommended item is displayed. The position number starts from 0. The return results are ranked by position. You can ignore this parameter.
   * 
   * @example
   * 1
   */
  serviceType?: string;
  /**
   * @remarks
   * 如果需要使用坑位策略，请求参数内新增strategy="fixedSlot"，此时系统将按照坑位配置返回推荐结果
   * 
   * @example
   * fixedSlot
   */
  strategy?: string;
  /**
   * @remarks
   * The items used for related recommendations in specified scenes.
   * 
   * @example
   * 123
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1
   */
  userInfo?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      imei: 'imei',
      ip: 'ip',
      items: 'items',
      rankOpen: 'rankOpen',
      recType: 'recType',
      returnCount: 'returnCount',
      sceneId: 'sceneId',
      serviceType: 'serviceType',
      strategy: 'strategy',
      userId: 'userId',
      userInfo: 'userInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      imei: 'string',
      ip: 'string',
      items: 'string',
      rankOpen: 'boolean',
      recType: 'string',
      returnCount: 'number',
      sceneId: 'string',
      serviceType: 'string',
      strategy: 'string',
      userId: 'string',
      userInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecommendResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter may be used in the debugging process. You can ignore this parameter.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Queries the recommendation results of a specified instance.
   * 
   * @example
   * "i2i_common_common;NotFound;1673254401;similar product/content of clicked ones;2023-01-09 16:53:21"
   */
  message?: string;
  /**
   * @remarks
   * The weight of the specified process.
   * 
   * @example
   * 04707E49-642A-4649-827A-F8EEB07D4C27
   */
  requestId?: string;
  /**
   * @remarks
   * The unique ID of the user.
   */
  result?: RecommendResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': RecommendResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecommendResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecommendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecommendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshFeatureTableResponseBody extends $tea.Model {
  /**
   * @example
   * 8B90B646-1678-41A3-B23F-EAC6587B0E48
   */
  requestId?: string;
  result?: FeatureTable;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: FeatureTable,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshFeatureTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshFeatureTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshFeatureTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackRankingSystemRequest extends $tea.Model {
  /**
   * @example
   * {
   * 	"operateId": "a-b-c"
   * }
   */
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackRankingSystemResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackRankingSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RollbackRankingSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RollbackRankingSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether a dataset was created.
   * 
   * @example
   * false
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunRankingModelTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @example
   * xxx
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunRankingModelTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunRankingModelTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunRankingModelTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSampleFormatConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The mode of the formatting. Default value: Latest. This value indicates that the latest formatting configurations are used.
   * 
   * @example
   * latest
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSampleFormatConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * airec-test
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the sample formatting configurations are triggered.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSampleFormatConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunSampleFormatConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunSampleFormatConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDataSetResponseBody extends $tea.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  result?: StopDataSetResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: StopDataSetResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDataSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopFlowControlTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopFlowControlTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopFlowControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopFlowControlTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnLockIndexVersionResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnLockIndexVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnLockIndexVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnLockIndexVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentBasicInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E3D6FE3B-B7C2-43DA-9A13-5EA837ACED9B
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the experiment.
   */
  result?: UpdateExperimentBasicInfoResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateExperimentBasicInfoResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentBasicInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateExperimentBasicInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateExperimentBasicInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentConfigResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  result?: UpdateExperimentConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateExperimentConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateExperimentConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateExperimentConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E3D6FE3B-B7C2-43DA-9A13-5EA837ACED9B
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: UpdateExperimentStatusResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateExperimentStatusResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateExperimentStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateExperimentStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An internal server error occurred
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8F81A922-6C81-46D6-B78C-CC35E16B1691
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: UpgradeInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: UpgradeInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateInstanceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  /**
   * @example
   * 90D6B8F5-FE97-4509-9AAB-367836C51818
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ValidateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyRankingSystemRequest extends $tea.Model {
  /**
   * @example
   * {
   *   "userFeatures": "a:c,d:b",
   *   "itemFeatures": "a:1,b:2"
   * }
   */
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyRankingSystemResponseBody extends $tea.Model {
  /**
   * @example
   * 829F38F6-E2D6-4109-90A6-888160BD16C2
   */
  requestId?: string;
  /**
   * @example
   * test
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyRankingSystemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyRankingSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyRankingSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtraDataSourceMeta extends $tea.Model {
  /**
   * @example
   * true
   */
  internal?: boolean;
  /**
   * @example
   * ExtraDataSource
   */
  metaType?: string;
  /**
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @example
   * ODPS
   */
  type?: string;
  /**
   * @example
   * 86400
   */
  updateFrequency?: number;
  static names(): { [key: string]: string } {
    return {
      internal: 'Internal',
      metaType: 'MetaType',
      projectName: 'ProjectName',
      tableName: 'TableName',
      type: 'Type',
      updateFrequency: 'UpdateFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internal: 'boolean',
      metaType: 'string',
      projectName: 'string',
      tableName: 'string',
      type: 'string',
      updateFrequency: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeatureTableMetaFeatureList extends $tea.Model {
  /**
   * @example
   * com11
   */
  comment?: string;
  /**
   * @example
   * fn11
   */
  featureName?: string;
  /**
   * @example
   * fieldName11
   */
  fieldName?: string;
  /**
   * @example
   * NotApplied 未应用 Applied 已应用
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      featureName: 'FeatureName',
      fieldName: 'FieldName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      featureName: 'string',
      fieldName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeatureTableMeta extends $tea.Model {
  /**
   * @example
   * 907648f5-abae-44fd-a4c4-525cc25947e9
   */
  dataSourceId?: string;
  featureList?: FeatureTableMetaFeatureList[];
  /**
   * @example
   * true
   */
  internal?: boolean;
  /**
   * @example
   * FeatureTable
   */
  metaType?: string;
  /**
   * @example
   * test_project.test_table
   */
  source?: string;
  /**
   * @example
   * 86400
   */
  updateFrequency?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      featureList: 'FeatureList',
      internal: 'Internal',
      metaType: 'MetaType',
      source: 'Source',
      updateFrequency: 'UpdateFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      featureList: { 'type': 'array', 'itemType': FeatureTableMetaFeatureList },
      internal: 'boolean',
      metaType: 'string',
      source: 'string',
      updateFrequency: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RankingModelTemplateMeta extends $tea.Model {
  /**
   * @example
   * true
   */
  authorized?: boolean;
  /**
   * @example
   * true
   */
  autoRun?: boolean;
  /**
   * @example
   * 1
   */
  autoRunTime?: number;
  /**
   * @example
   * DAY
   */
  autoRunType?: string;
  /**
   * @example
   * true
   */
  canDeploy?: boolean;
  /**
   * @example
   * train_config {}
   */
  conf?: string;
  /**
   * @example
   * NOT_DEPLOYED
   */
  deployStatus?: string;
  /**
   * @example
   * 2021-12-06T03:01:41.217Z
   */
  lastEditTime?: string;
  /**
   * @example
   * 模型A
   */
  name?: string;
  /**
   * @example
   * acs:ram::111:role/aliyunodpspaidefaultrole
   */
  ossArn?: string;
  /**
   * @example
   * bucket-a
   */
  ossBucket?: string;
  /**
   * @example
   * oss-cn-beijing.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @example
   * 1111
   */
  sampleId?: string;
  /**
   * @example
   * 样本1
   */
  sampleName?: string;
  /**
   * @example
   * 3
   */
  sampleTimeWindow?: number;
  /**
   * @example
   * DAY
   */
  sampleTimeWindowType?: string;
  /**
   * @example
   * MULTI_TOWER
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authorized: 'Authorized',
      autoRun: 'AutoRun',
      autoRunTime: 'AutoRunTime',
      autoRunType: 'AutoRunType',
      canDeploy: 'CanDeploy',
      conf: 'Conf',
      deployStatus: 'DeployStatus',
      lastEditTime: 'LastEditTime',
      name: 'Name',
      ossArn: 'OssArn',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      sampleId: 'SampleId',
      sampleName: 'SampleName',
      sampleTimeWindow: 'SampleTimeWindow',
      sampleTimeWindowType: 'SampleTimeWindowType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorized: 'boolean',
      autoRun: 'boolean',
      autoRunTime: 'number',
      autoRunType: 'string',
      canDeploy: 'boolean',
      conf: 'string',
      deployStatus: 'string',
      lastEditTime: 'string',
      name: 'string',
      ossArn: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      sampleId: 'string',
      sampleName: 'string',
      sampleTimeWindow: 'number',
      sampleTimeWindowType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RankingModelVersionRunResult extends $tea.Model {
  /**
   * @example
   * 0.3
   */
  assessAuc?: string;
  /**
   * @example
   * 0.3
   */
  assessGauc?: string;
  /**
   * @example
   * 0.3
   */
  assessLoss?: string;
  /**
   * @example
   * 0.3
   */
  trainAuc?: string;
  /**
   * @example
   * 0.3
   */
  trainGauc?: string;
  /**
   * @example
   * 0.3
   */
  trainLoss?: string;
  static names(): { [key: string]: string } {
    return {
      assessAuc: 'AssessAuc',
      assessGauc: 'AssessGauc',
      assessLoss: 'AssessLoss',
      trainAuc: 'TrainAuc',
      trainGauc: 'TrainGauc',
      trainLoss: 'TrainLoss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assessAuc: 'string',
      assessGauc: 'string',
      assessLoss: 'string',
      trainAuc: 'string',
      trainGauc: 'string',
      trainLoss: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RankingSystemMetaPredictEngine extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  clusterId?: string;
  /**
   * @example
   * eas-oljkkdrggxhx7eizjd
   */
  resourceId?: string;
  /**
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      resourceId: 'ResourceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      resourceId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RankingSystemMeta extends $tea.Model {
  /**
   * @example
   * true
   */
  autoDeploy?: boolean;
  /**
   * @example
   * 0.3
   */
  autoDeployAuc?: string;
  conf?: string;
  failMsg?: string;
  /**
   * @example
   * 模型A_T1638964800000
   */
  modelVersionName?: string;
  predictEngine?: RankingSystemMetaPredictEngine;
  /**
   * @example
   * EAS
   */
  predictEngineType?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeploy: 'AutoDeploy',
      autoDeployAuc: 'AutoDeployAuc',
      conf: 'Conf',
      failMsg: 'FailMsg',
      modelVersionName: 'ModelVersionName',
      predictEngine: 'PredictEngine',
      predictEngineType: 'PredictEngineType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeploy: 'boolean',
      autoDeployAuc: 'string',
      conf: 'string',
      failMsg: 'string',
      modelVersionName: 'string',
      predictEngine: RankingSystemMetaPredictEngine,
      predictEngineType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RankingSystemHistoryMetaPredictEngine extends $tea.Model {
  /**
   * @example
   * eas-oljkkdrggxhx7eizjd
   */
  resourceId?: string;
  /**
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RankingSystemHistoryMeta extends $tea.Model {
  /**
   * @example
   * true
   */
  autoDeploy?: boolean;
  /**
   * @example
   * 0.3
   */
  autoDeployAuc?: string;
  conf?: string;
  /**
   * @example
   * 排序模型A
   */
  modelTemplateName?: string;
  predictEngine?: RankingSystemHistoryMetaPredictEngine;
  /**
   * @example
   * EAS
   */
  predictEngineType?: string;
  /**
   * @example
   * aaaa
   */
  previousOperateId?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeploy: 'AutoDeploy',
      autoDeployAuc: 'AutoDeployAuc',
      conf: 'Conf',
      modelTemplateName: 'ModelTemplateName',
      predictEngine: 'PredictEngine',
      predictEngineType: 'PredictEngineType',
      previousOperateId: 'PreviousOperateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeploy: 'boolean',
      autoDeployAuc: 'string',
      conf: 'string',
      modelTemplateName: 'string',
      predictEngine: RankingSystemHistoryMetaPredictEngine,
      predictEngineType: 'string',
      previousOperateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SampleMetaConfigFeatureConfig extends $tea.Model {
  /**
   * @example
   * 物品特征，支持多值，逗号分隔。
   */
  itemFeatures?: string;
  /**
   * @example
   * 用户特征，支持多值，逗号分隔。
   */
  userFeatures?: string;
  static names(): { [key: string]: string } {
    return {
      itemFeatures: 'ItemFeatures',
      userFeatures: 'UserFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemFeatures: 'string',
      userFeatures: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SampleMetaConfigLabelLogic extends $tea.Model {
  /**
   * @example
   * 86400
   */
  bhvTimeWindow?: number;
  /**
   * @example
   * click,expose
   */
  negativeBhvTypes?: string;
  /**
   * @example
   * like
   */
  positiveBhvTypes?: string;
  static names(): { [key: string]: string } {
    return {
      bhvTimeWindow: 'BhvTimeWindow',
      negativeBhvTypes: 'NegativeBhvTypes',
      positiveBhvTypes: 'PositiveBhvTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bhvTimeWindow: 'number',
      negativeBhvTypes: 'string',
      positiveBhvTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SampleMetaConfigWeightLogicList extends $tea.Model {
  /**
   * @example
   * click
   */
  bhv?: string;
  /**
   * @example
   * 1.01
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      bhv: 'Bhv',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bhv: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SampleMetaConfig extends $tea.Model {
  bhvTableSourceIds?: string[];
  featureConfig?: SampleMetaConfigFeatureConfig;
  labelLogic?: SampleMetaConfigLabelLogic;
  weightLogicList?: SampleMetaConfigWeightLogicList[];
  static names(): { [key: string]: string } {
    return {
      bhvTableSourceIds: 'BhvTableSourceIds',
      featureConfig: 'FeatureConfig',
      labelLogic: 'LabelLogic',
      weightLogicList: 'WeightLogicList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bhvTableSourceIds: { 'type': 'array', 'itemType': 'string' },
      featureConfig: SampleMetaConfigFeatureConfig,
      labelLogic: SampleMetaConfigLabelLogic,
      weightLogicList: { 'type': 'array', 'itemType': SampleMetaConfigWeightLogicList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SampleMetaExtendParams extends $tea.Model {
  /**
   * @example
   * 0 没有任务 1 正常 2 异常
   */
  latestTaskStatus?: number;
  /**
   * @example
   * 0
   */
  sampleCount?: number;
  static names(): { [key: string]: string } {
    return {
      latestTaskStatus: 'LatestTaskStatus',
      sampleCount: 'SampleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestTaskStatus: 'number',
      sampleCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SampleMeta extends $tea.Model {
  /**
   * @example
   * true
   */
  autoUpdate?: boolean;
  /**
   * @example
   * 86400
   */
  autoUpdateFrequency?: number;
  /**
   * @example
   * 1638877561147
   */
  clonedId?: string;
  config?: SampleMetaConfig;
  extendParams?: SampleMetaExtendParams;
  /**
   * @example
   * Sample
   */
  metaType?: string;
  /**
   * @example
   * 12345
   */
  name?: string;
  /**
   * @example
   * projectName.tableName
   */
  storeConfig?: string;
  /**
   * @example
   * Cloned 复制的 System 系统的 Custom 自定义的
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpdate: 'AutoUpdate',
      autoUpdateFrequency: 'AutoUpdateFrequency',
      clonedId: 'ClonedId',
      config: 'Config',
      extendParams: 'ExtendParams',
      metaType: 'MetaType',
      name: 'Name',
      storeConfig: 'StoreConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpdate: 'boolean',
      autoUpdateFrequency: 'number',
      clonedId: 'string',
      config: SampleMetaConfig,
      extendParams: SampleMetaExtendParams,
      metaType: 'string',
      name: 'string',
      storeConfig: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatasetResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the data source was created.
   * 
   * @example
   * 1544112000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the data source was last modified.
   * 
   * @example
   * 1544112000000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * airec-cn-o400whm78004
   */
  instanceId?: string;
  /**
   * @remarks
   * The state for the dataset of the current version. Example: Importing. The value indicates that the dataset of the current version is being imported.
   * 
   * @example
   * Importing
   */
  state?: string;
  /**
   * @remarks
   * The version number of the dataset.
   * 
   * @example
   * 20181023214546
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      instanceId: 'instanceId',
      state: 'state',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      instanceId: 'string',
      state: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentResponseBodyResultAlgorithmsConfig extends $tea.Model {
  /**
   * @remarks
   * The default value of the algorithm.
   * 
   * @example
   * 400
   */
  defaultValue?: string;
  /**
   * @remarks
   * The custom value of the algorithm.
   * 
   * @example
   * swing;commoni2i;pcategory;scategory
   */
  experimentValue?: string;
  /**
   * @remarks
   * The algorithm key.
   * 
   * @example
   * I2I-truncedquantity
   */
  key?: string;
  /**
   * @remarks
   * The algorithm name. (Note: If you use the default algorithm, the console obtains the algorithm name from Medusa. If you customize an algorithm for the experiment, the algorithm name is directly returned.)
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      experimentValue: 'experimentValue',
      key: 'key',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      experimentValue: 'string',
      key: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentResponseBodyResultAlgorithms extends $tea.Model {
  /**
   * @remarks
   * The algorithm category. Valid values: RECALL and RANK.
   * 
   * @example
   * RECALL
   */
  category?: string;
  /**
   * @remarks
   * The child configuration items.
   */
  config?: CloneExperimentResponseBodyResultAlgorithmsConfig[];
  /**
   * @remarks
   * The default value of the algorithm configuration item.
   * 
   * @example
   * i2i;u2x2i;new;hot;embedding;embedding
   */
  defaultValue?: string;
  /**
   * @remarks
   * The custom value of the algorithm configuration item.
   * 
   * @example
   * 300
   */
  experimentValue?: string;
  /**
   * @remarks
   * Indicates whether child configuration items exist. Valid values: true and false.
   * 
   * @example
   * true
   */
  hasConfig?: boolean;
  /**
   * @remarks
   * The algorithm key. Valid values: I2I: the I2I filtering algorithm. u2X2I: the U2X2I filtering algorithm. hot: the filtering algorithm for popular items. new: the filtering algorithm for new items. embedding: the vector filtering algorithm. mtorder: the priority of the filtering algorithm. rankservice: the ranking service.
   * 
   * @example
   * I2I
   */
  key?: string;
  /**
   * @remarks
   * The algorithm name. (Note: If you use the default algorithm, the console obtains the algorithm name from Medusa. If you customize an algorithm for the experiment, the algorithm name is directly returned.)
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The algorithm type. Valid values: SYSTEM and CUSTOM.
   * 
   * @example
   * SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      config: 'config',
      defaultValue: 'defaultValue',
      experimentValue: 'experimentValue',
      hasConfig: 'hasConfig',
      key: 'key',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      config: { 'type': 'array', 'itemType': CloneExperimentResponseBodyResultAlgorithmsConfig },
      defaultValue: 'string',
      experimentValue: 'string',
      hasConfig: 'boolean',
      key: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The algorithm configurations.
   */
  algorithms?: CloneExperimentResponseBodyResultAlgorithms[];
  /**
   * @remarks
   * N/A
   * 
   * @example
   * true
   */
  base?: boolean;
  /**
   * @remarks
   * The buckets.
   */
  buckets?: string[];
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * xxx
   */
  description?: string;
  /**
   * @remarks
   * The experiment ID.
   * 
   * @example
   * 12345
   */
  experimentId?: string;
  /**
   * @remarks
   * The experiment name.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The time when the experiment was unpublished.
   * 
   * @example
   * 2020-11-11T09:47:43.000Z
   */
  offlineTime?: string;
  /**
   * @remarks
   * The time when the experiment was published.
   * 
   * @example
   * 2020-11-11T09:47:43.000Z
   */
  onlineTime?: string;
  /**
   * @remarks
   * The experiment state.
   * 
   * @example
   * Init
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithms: 'algorithms',
      base: 'base',
      buckets: 'buckets',
      description: 'description',
      experimentId: 'experimentId',
      name: 'name',
      offlineTime: 'offlineTime',
      onlineTime: 'onlineTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithms: { 'type': 'array', 'itemType': CloneExperimentResponseBodyResultAlgorithms },
      base: 'boolean',
      buckets: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      experimentId: 'string',
      name: 'string',
      offlineTime: 'string',
      onlineTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColdStartRankResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 3_Lwm4vy1
   */
  itemId?: string;
  /**
   * @example
   * article
   */
  itemType?: string;
  /**
   * @example
   * 1007.62364.131773.100200300000000:d709586e-643c-4fcb-a35c-6c5e8cd6756e:Grr8KG::0:sy_list_gul:::1:content___3_Lwm4vy:article:i2i_common_common:9.385107352002104E-4:0.25131988525390625:null:1677207034118::context__recall_index=253,context__hour=10,context__trigger_num=2::002bc90e-0d30-4682-9de3-1f4bad73702e:i2i_scategory_common,hot_common,i2i_common_common,i2i_swing_common:::::
   */
  traceInfo?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'itemId',
      itemType: 'itemType',
      traceInfo: 'traceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      itemType: 'string',
      traceInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilteringAlgorithmResponseBodyResultMetaThreshold extends $tea.Model {
  /**
   * @remarks
   * The time when the filtering table was modified.
   * 
   * @example
   * 1
   */
  indexLossThreshold?: number;
  /**
   * @remarks
   * The fluctuation threshold for the size of the source table.
   * 
   * @example
   * 1
   */
  indexSizeThreshold?: number;
  /**
   * @remarks
   * The category of the filtering table.
   * 
   * @example
   * 1
   */
  sourceDataRecordThreshold?: number;
  /**
   * @remarks
   * The fluctuation threshold for the loss of the index data.
   * 
   * @example
   * 1
   */
  sourceDataSizeThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      indexLossThreshold: 'indexLossThreshold',
      indexSizeThreshold: 'indexSizeThreshold',
      sourceDataRecordThreshold: 'sourceDataRecordThreshold',
      sourceDataSizeThreshold: 'sourceDataSizeThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexLossThreshold: 'number',
      indexSizeThreshold: 'number',
      sourceDataRecordThreshold: 'number',
      sourceDataSizeThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilteringAlgorithmResponseBodyResultMeta extends $tea.Model {
  /**
   * @remarks
   * The name of the filtering table.
   * 
   * @example
   * algorithmTest
   */
  algorithmName?: string;
  /**
   * @remarks
   * The response body.
   * 
   * @example
   * 1_2
   */
  category?: string;
  /**
   * @remarks
   * The fluctuation threshold for the size of the index.
   * 
   * @example
   * 0 0/12 0 * *
   */
  cron?: string;
  /**
   * @remarks
   * The time when the filtering table was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed UTC.
   * 
   * @example
   * true
   */
  cronEnabled?: boolean;
  /**
   * @remarks
   * The description of the filtering table.
   * 
   * @example
   * xx
   */
  description?: string;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * {}
   */
  extInfo?: { [key: string]: any };
  /**
   * @remarks
   * The information about the filtering table.
   * 
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Indicates whether the scheduled task is enabled.
   * 
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the filtering table.
   * 
   * @example
   * testname
   */
  projectName?: string;
  /**
   * @remarks
   * The CRON expression of the scheduled task. Example: 0 0/12 0 \\* \\*, which indicates that the task is scheduled at 00:00 and 12:00 every day.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The metadata of the filtering table.
   * 
   * @example
   * table_test
   */
  tableName?: string;
  /**
   * @remarks
   * 0 0/12 0 * *"
   */
  threshold?: CreateFilteringAlgorithmResponseBodyResultMetaThreshold;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ODPS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'algorithmName',
      category: 'category',
      cron: 'cron',
      cronEnabled: 'cronEnabled',
      description: 'description',
      extInfo: 'extInfo',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      projectName: 'projectName',
      status: 'status',
      tableName: 'tableName',
      threshold: 'threshold',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      category: 'string',
      cron: 'string',
      cronEnabled: 'boolean',
      description: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      gmtModified: 'string',
      projectName: 'string',
      status: 'string',
      tableName: 'string',
      threshold: CreateFilteringAlgorithmResponseBodyResultMetaThreshold,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilteringAlgorithmResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * abc
   */
  algorithmId?: string;
  /**
   * @remarks
   * The time when the filtering table was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The fluctuation threshold for the data entries in the source table.
   * 
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The threshold.
   */
  meta?: CreateFilteringAlgorithmResponseBodyResultMeta;
  /**
   * @remarks
   * The name of the filtering algorithm.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'algorithmId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: CreateFilteringAlgorithmResponseBodyResultMeta,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowControlTaskResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-04-27T06:38:28.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2018-12-06T11:17:49.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The task state.
   * 
   * @example
   * DRAFT
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1667297014460
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * airec-cn-xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
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

export class CreateRankingModelResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtModified?: string;
  /**
   * @example
   * map
   */
  meta?: { [key: string]: any };
  /**
   * @example
   * ranktest
   */
  rankingModelId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      rankingModelId: 'rankingModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rankingModelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 2020-04-27T06:38:28.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the rule was last modified.
   * 
   * @example
   * 2020-04-27T06:38:28.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 98493A14-D619-4E88-9F8D-108939817F9F
   */
  ruleId?: string;
  /**
   * @remarks
   * Indicates whether the rule is enabled. Valid values: true and false.
   * 
   * @example
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      ruleId: 'ruleId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      ruleId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  sceneId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      sceneId: 'sceneId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      sceneId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecribeRankingModelResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the ranking model was created.
   * 
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the ranking model was last modified.
   * 
   * @example
   * 2020-04-27T06:38:28.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The metadata.
   */
  meta?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the ranking model.
   * 
   * @example
   * ranktest
   */
  rankingModelId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      rankingModelId: 'rankingModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rankingModelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the data source was created.
   * 
   * @example
   * 1544112000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the data source was last modified.
   * 
   * @example
   * 1544112000000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * airec-cn-o400whm78004
   */
  instanceId?: string;
  /**
   * @remarks
   * The state for the dataset of the current version. Example: Importing. The value indicates that the dataset of the current version is being imported.
   * 
   * @example
   * Importing
   */
  state?: string;
  /**
   * @remarks
   * The version number of the dataset.
   * 
   * @example
   * 20181023214546
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      instanceId: 'instanceId',
      state: 'state',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      instanceId: 'string',
      state: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilteringAlgorithmResponseBodyResultMetaExtInfo extends $tea.Model {
  /**
   * @remarks
   * The delimiter that is used to separate items.
   * 
   * @example
   * ;
   */
  itemSeparator?: string;
  /**
   * @remarks
   * The delimiter that is used to separate keys and values.
   * 
   * @example
   * ;
   */
  kvSeparator?: string;
  static names(): { [key: string]: string } {
    return {
      itemSeparator: 'itemSeparator',
      kvSeparator: 'kvSeparator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemSeparator: 'string',
      kvSeparator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilteringAlgorithmResponseBodyResultMetaThreshold extends $tea.Model {
  /**
   * @remarks
   * The fluctuation threshold for the loss of the index data.
   * 
   * @example
   * 1
   */
  indexLossThreshold?: number;
  /**
   * @remarks
   * The fluctuation threshold for the size of the index.
   * 
   * @example
   * 1
   */
  indexSizeThreshold?: number;
  /**
   * @remarks
   * The fluctuation threshold for the data entries in the source table.
   * 
   * @example
   * 1
   */
  sourceDataRecordThreshold?: number;
  /**
   * @remarks
   * The fluctuation threshold for the size of the source table.
   * 
   * @example
   * 1
   */
  sourceDataSizeThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      indexLossThreshold: 'indexLossThreshold',
      indexSizeThreshold: 'indexSizeThreshold',
      sourceDataRecordThreshold: 'sourceDataRecordThreshold',
      sourceDataSizeThreshold: 'sourceDataSizeThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexLossThreshold: 'number',
      indexSizeThreshold: 'number',
      sourceDataRecordThreshold: 'number',
      sourceDataSizeThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilteringAlgorithmResponseBodyResultMeta extends $tea.Model {
  /**
   * @remarks
   * The name of the filtering algorithm.
   * 
   * @example
   * user
   */
  algorithmName?: string;
  /**
   * @remarks
   * The category of the filtering algorithm.
   * 
   * @example
   * i2i
   */
  category?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * 1001
   */
  clusterId?: string;
  /**
   * @remarks
   * The CRON expression of the scheduled task. Example: 0 0/12 0 \\* \\*. The value indicates that the task is scheduled at 00:00 and 12:00 every day.
   * 
   * @example
   * 0 0/12 0 * *
   */
  cron?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * true
   */
  cronEnabled?: boolean;
  /**
   * @remarks
   * The description of the filtering table.
   * 
   * @example
   * Training task
   */
  description?: string;
  /**
   * @remarks
   * The additional information.
   */
  extInfo?: DeleteFilteringAlgorithmResponseBodyResultMetaExtInfo;
  /**
   * @remarks
   * The type of the metadata.
   * 
   * @example
   * odps
   */
  metaType?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * name01
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * table01
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * test01
   */
  taskId?: string;
  /**
   * @remarks
   * The threshold.
   */
  threshold?: DeleteFilteringAlgorithmResponseBodyResultMetaThreshold;
  /**
   * @remarks
   * The type of the data source. Only MaxCompute is supported.
   * 
   * @example
   * ODPS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'algorithmName',
      category: 'category',
      clusterId: 'clusterId',
      cron: 'cron',
      cronEnabled: 'cronEnabled',
      description: 'description',
      extInfo: 'extInfo',
      metaType: 'metaType',
      projectName: 'projectName',
      tableName: 'tableName',
      taskId: 'taskId',
      threshold: 'threshold',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      category: 'string',
      clusterId: 'string',
      cron: 'string',
      cronEnabled: 'boolean',
      description: 'string',
      extInfo: DeleteFilteringAlgorithmResponseBodyResultMetaExtInfo,
      metaType: 'string',
      projectName: 'string',
      tableName: 'string',
      taskId: 'string',
      threshold: DeleteFilteringAlgorithmResponseBodyResultMetaThreshold,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilteringAlgorithmResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The ID of the specified filtering table.
   * 
   * @example
   * 123
   */
  algorithmId?: string;
  /**
   * @remarks
   * The time when the filtering table was created.
   * 
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the filtering table was modified.
   * 
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The metadata of the filtering table.
   */
  meta?: DeleteFilteringAlgorithmResponseBodyResultMeta;
  /**
   * @remarks
   * The state of the filtering table. Valid values: Draft, Running, Offline, and Deleted.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'algorithmId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: DeleteFilteringAlgorithmResponseBodyResultMeta,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRankingModelResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * meta
   */
  meta?: { [key: string]: any };
  rankingModelId?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'meta',
      rankingModelId: 'rankingModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rankingModelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneResponseBodyResult extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'sceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBaseExperimentResponseBodyResultAlgorithmsConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  defaultValue?: string;
  /**
   * @example
   * 400
   */
  experimentValue?: string;
  /**
   * @example
   * I2I
   */
  key?: string;
  /**
   * @example
   * xxx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      experimentValue: 'experimentValue',
      key: 'key',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      experimentValue: 'string',
      key: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBaseExperimentResponseBodyResultAlgorithms extends $tea.Model {
  /**
   * @example
   * RECALL
   */
  category?: string;
  config?: DescribeBaseExperimentResponseBodyResultAlgorithmsConfig[];
  /**
   * @example
   * true
   */
  defaultValue?: string;
  /**
   * @example
   * 400
   */
  experimentValue?: string;
  /**
   * @example
   * false
   */
  hasConfig?: boolean;
  /**
   * @example
   * I2I
   */
  key?: string;
  /**
   * @example
   * xxx
   */
  name?: string;
  /**
   * @example
   * SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      config: 'config',
      defaultValue: 'defaultValue',
      experimentValue: 'experimentValue',
      hasConfig: 'hasConfig',
      key: 'key',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      config: { 'type': 'array', 'itemType': DescribeBaseExperimentResponseBodyResultAlgorithmsConfig },
      defaultValue: 'string',
      experimentValue: 'string',
      hasConfig: 'boolean',
      key: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBaseExperimentResponseBodyResult extends $tea.Model {
  algorithms?: DescribeBaseExperimentResponseBodyResultAlgorithms[];
  /**
   * @example
   * true
   */
  base?: boolean;
  buckets?: string[];
  /**
   * @example
   * xxx
   */
  description?: string;
  /**
   * @example
   * xxx
   */
  experimentId?: string;
  name?: string;
  /**
   * @example
   * 2020-12-07T06:47:30.000Z
   */
  offlineTime?: string;
  /**
   * @example
   * 2020-12-07T06:47:30.000Z
   */
  onlineTime?: string;
  /**
   * @example
   * Init
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithms: 'algorithms',
      base: 'base',
      buckets: 'buckets',
      description: 'description',
      experimentId: 'experimentId',
      name: 'name',
      offlineTime: 'offlineTime',
      onlineTime: 'onlineTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithms: { 'type': 'array', 'itemType': DescribeBaseExperimentResponseBodyResultAlgorithms },
      base: 'boolean',
      buckets: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      experimentId: 'string',
      name: 'string',
      offlineTime: 'string',
      onlineTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSetMessageResponseBodyResult extends $tea.Model {
  /**
   * @example
   * warn
   */
  errorLevel?: string;
  errorType?: string;
  message?: string;
  /**
   * @example
   * 20181211 17:27:44
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      errorLevel: 'errorLevel',
      errorType: 'errorType',
      message: 'message',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLevel: 'string',
      errorType: 'string',
      message: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultAlgorithmsResponseBodyResultConfig extends $tea.Model {
  /**
   * @remarks
   * The default value of the algorithm configuration item.
   * 
   * @example
   * swing;commoni2i;pcategory;scategory
   */
  defaultValue?: string;
  /**
   * @remarks
   * The custom value of the algorithm configuration item.
   * 
   * @example
   * 300
   */
  experimentValue?: string;
  /**
   * @remarks
   * The key of the algorithm configuration item.
   * 
   * @example
   * I2I-truncedquantity
   */
  key?: string;
  /**
   * @remarks
   * The name of the algorithm configuration item. (Note: If you use the default algorithm, the console obtains the algorithm name from Medusa. If you customize an algorithm for the experiment, the algorithm name is directly returned.)
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      experimentValue: 'experimentValue',
      key: 'key',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      experimentValue: 'string',
      key: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultAlgorithmsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The algorithm category. Valid values: RECALL and RANK.
   * 
   * @example
   * RECALL
   */
  category?: string;
  /**
   * @remarks
   * The information about the child configuration item.
   */
  config?: DescribeDefaultAlgorithmsResponseBodyResultConfig[];
  /**
   * @remarks
   * The default value of the algorithm. If you set key to i2i, hot, or new, the value of this parameter is true or false. If you set key to mtorder, the value of this parameter is a list of filtering algorithms ranked by priority.
   * 
   * @example
   * true
   */
  defaultValue?: string;
  /**
   * @remarks
   * The custom value of the algorithm.
   * 
   * @example
   * 300
   */
  experimentValue?: string;
  /**
   * @remarks
   * Indicates whether child configuration items exist. Valid values: true and false.
   * 
   * @example
   * true
   */
  hasConfig?: boolean;
  /**
   * @remarks
   * The algorithm key. Valid values: i2i: the I2I filtering algorithm. u2x2i: the U2X2I filtering algorithm. hot: the filtering algorithm for popular items. new: the filtering algorithm for new items. embedding: the vector filtering algorithm. mtorder: the priority of the filtering algorithm. rankservice: the ranking service.
   * 
   * @example
   * I2I
   */
  key?: string;
  /**
   * @remarks
   * The algorithm name. (Note: If you use the default algorithm, the console obtains the algorithm name from Medusa. If you customize an algorithm for the experiment, the algorithm name is directly returned.)
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The algorithm type. Valid values: SYSTEM and CUSTOM.
   * 
   * @example
   * SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      config: 'config',
      defaultValue: 'defaultValue',
      experimentValue: 'experimentValue',
      hasConfig: 'hasConfig',
      key: 'key',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      config: { 'type': 'array', 'itemType': DescribeDefaultAlgorithmsResponseBodyResultConfig },
      defaultValue: 'string',
      experimentValue: 'string',
      hasConfig: 'boolean',
      key: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExperimentResponseBodyResultAlgorithmsConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  defaultValue?: string;
  /**
   * @example
   * 400
   */
  experimentValue?: string;
  /**
   * @remarks
   * key
   * 
   * @example
   * I2I
   */
  key?: string;
  /**
   * @example
   * xxx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      experimentValue: 'experimentValue',
      key: 'key',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      experimentValue: 'string',
      key: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExperimentResponseBodyResultAlgorithms extends $tea.Model {
  /**
   * @remarks
   * The category of the item.
   * 
   * @example
   * 2
   */
  category?: string;
  config?: DescribeExperimentResponseBodyResultAlgorithmsConfig[];
  /**
   * @remarks
   * None
   * 
   * @example
   * true
   */
  defaultValue?: string;
  /**
   * @remarks
   * None
   */
  experimentValue?: string;
  /**
   * @remarks
   * None
   * 
   * @example
   * false
   */
  hasConfig?: boolean;
  /**
   * @remarks
   * The key.
   * 
   * @example
   * I2I
   */
  key?: string;
  /**
   * @remarks
   * The name of the experiment.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * None
   * 
   * @example
   * SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      config: 'config',
      defaultValue: 'defaultValue',
      experimentValue: 'experimentValue',
      hasConfig: 'hasConfig',
      key: 'key',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      config: { 'type': 'array', 'itemType': DescribeExperimentResponseBodyResultAlgorithmsConfig },
      defaultValue: 'string',
      experimentValue: 'string',
      hasConfig: 'boolean',
      key: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExperimentResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The parameters about the experiment.
   */
  algorithms?: DescribeExperimentResponseBodyResultAlgorithms[];
  /**
   * @remarks
   * None
   * 
   * @example
   * true
   */
  base?: boolean;
  buckets?: string[];
  /**
   * @remarks
   * The description of the experiment.
   * 
   * @example
   * xxx
   */
  description?: string;
  /**
   * @remarks
   * The experiment ID.
   * 
   * @example
   * 12345
   */
  experimentId?: string;
  /**
   * @remarks
   * The name of the experiment.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The time when the experiment was unpublished.
   * 
   * @example
   * 2020-11-11T09:47:43.000Z
   */
  offlineTime?: string;
  /**
   * @remarks
   * The time when the experiment was published.
   * 
   * @example
   * 2020-11-11T09:47:43.000Z
   */
  onlineTime?: string;
  /**
   * @remarks
   * The state of the experiment.
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithms: 'algorithms',
      base: 'base',
      buckets: 'buckets',
      description: 'description',
      experimentId: 'experimentId',
      name: 'name',
      offlineTime: 'offlineTime',
      onlineTime: 'onlineTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithms: { 'type': 'array', 'itemType': DescribeExperimentResponseBodyResultAlgorithms },
      base: 'boolean',
      buckets: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      experimentId: 'string',
      name: 'string',
      offlineTime: 'string',
      onlineTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExperimentEnvResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 10
   */
  bucketCount?: number;
  /**
   * @example
   * UID
   */
  divideType?: string;
  static names(): { [key: string]: string } {
    return {
      bucketCount: 'bucketCount',
      divideType: 'divideType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketCount: 'number',
      divideType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExperimentEnvProgressResponseBodyResult extends $tea.Model {
  progress?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'progress',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilteringAlgorithmResponseBodyResultMetaExtInfo extends $tea.Model {
  /**
   * @remarks
   * The description of the filtering table.
   * 
   * @example
   * ,
   */
  itemSeparator?: string;
  /**
   * @remarks
   * The fluctuation threshold for the size of the index.
   * 
   * @example
   * :
   */
  kvSeparator?: string;
  static names(): { [key: string]: string } {
    return {
      itemSeparator: 'itemSeparator',
      kvSeparator: 'kvSeparator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemSeparator: 'string',
      kvSeparator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilteringAlgorithmResponseBodyResultMetaThreshold extends $tea.Model {
  /**
   * @remarks
   * The ID of the specified instance.
   * 
   * @example
   * 1
   */
  indexLossThreshold?: number;
  /**
   * @remarks
   * Queries specific configuration information about a filtering table based on the ID of the filtering table.
   * 
   * @example
   * 1
   */
  indexSizeThreshold?: number;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * 1
   */
  sourceDataRecordThreshold?: number;
  /**
   * @remarks
   * The name of the filtering table.
   * 
   * @example
   * 1
   */
  sourceDataSizeThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      indexLossThreshold: 'indexLossThreshold',
      indexSizeThreshold: 'indexSizeThreshold',
      sourceDataRecordThreshold: 'sourceDataRecordThreshold',
      sourceDataSizeThreshold: 'sourceDataSizeThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexLossThreshold: 'number',
      indexSizeThreshold: 'number',
      sourceDataRecordThreshold: 'number',
      sourceDataSizeThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilteringAlgorithmResponseBodyResultMeta extends $tea.Model {
  /**
   * @remarks
   * The time when the filtering table was created.
   * 
   * @example
   * test
   */
  algorithmName?: string;
  /**
   * @remarks
   * Indicates whether the scheduled task is enabled.
   * 
   * @example
   * 1_2
   */
  category?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * 244
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the filtering table.
   * 
   * @example
   * * * 24 7 0
   */
  cron?: string;
  /**
   * @remarks
   * The ID of the filtering table.
   * 
   * @example
   * Y
   */
  cronEnabled?: boolean;
  /**
   * @remarks
   * The time when the filtering table was modified.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the task.
   */
  extInfo?: DescribeFilteringAlgorithmResponseBodyResultMetaExtInfo;
  /**
   * @remarks
   * The information about the filtering table.
   * 
   * @example
   * metaType
   */
  metaType?: string;
  /**
   * @remarks
   * The status of the filtering table.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the specified filtering table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The CRON expression of the scheduled task.
   * 
   * @example
   * taskId
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the filtering table.
   */
  threshold?: DescribeFilteringAlgorithmResponseBodyResultMetaThreshold;
  /**
   * @remarks
   * The metadata of the filtering table.
   * 
   * @example
   * ODPS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'algorithmName',
      category: 'category',
      clusterId: 'clusterId',
      cron: 'cron',
      cronEnabled: 'cronEnabled',
      description: 'description',
      extInfo: 'extInfo',
      metaType: 'metaType',
      projectName: 'projectName',
      tableName: 'tableName',
      taskId: 'taskId',
      threshold: 'threshold',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      category: 'string',
      clusterId: 'string',
      cron: 'string',
      cronEnabled: 'boolean',
      description: 'string',
      extInfo: DescribeFilteringAlgorithmResponseBodyResultMetaExtInfo,
      metaType: 'string',
      projectName: 'string',
      tableName: 'string',
      taskId: 'string',
      threshold: DescribeFilteringAlgorithmResponseBodyResultMetaThreshold,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilteringAlgorithmResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The fluctuation threshold for the size of the source table.
   * 
   * @example
   * abc
   */
  algorithmId?: string;
  /**
   * @remarks
   * The category of the filtering table.
   * 
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The time when the filtering table was modified.
   */
  meta?: DescribeFilteringAlgorithmResponseBodyResultMeta;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * The threshold for the loss of the index data.
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'algorithmId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: DescribeFilteringAlgorithmResponseBodyResultMeta,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The billing method. Valid values: PrePaid and PostPaid. Only the PrePaid billing method is supported.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the recommended item.
   * 
   * @example
   * airecpre
   */
  commodityCode?: string;
  /**
   * @remarks
   * The version of the dataset that provides online services.
   * 
   * @example
   * 20181206170353
   */
  dataSetVersion?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-06T16:00:00.000Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-06T06:14:01.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the instance was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-06T11:17:49.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The type of the industry. Valid values: content, item, news, video, and sns.
   * 
   * @example
   * news
   */
  industry?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * airec-cn-o400whm78004
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock mode of the instance. Valid values: Unlock, ManualLock, and LockByExpiration.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * Test instance
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the scene. Valid values: gul, rr, hot, and focus.
   * 
   * @example
   * gul
   */
  scene?: string;
  /**
   * @remarks
   * The state of the instance. Valid values: Initializing, Ready, and Running.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The type of the instance. Only the Standard edition is supported.
   * 
   * @example
   * Standard
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      dataSetVersion: 'dataSetVersion',
      expiredTime: 'expiredTime',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      industry: 'industry',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      name: 'name',
      regionId: 'regionId',
      scene: 'scene',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      dataSetVersion: 'string',
      expiredTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      industry: 'string',
      instanceId: 'string',
      lockMode: 'string',
      name: 'string',
      regionId: 'string',
      scene: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestTaskResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 2020-11-08T02:00:00Z
   */
  builtTime?: string;
  /**
   * @example
   * 400
   */
  code?: string;
  /**
   * @example
   * 50
   */
  costSeconds?: number;
  /**
   * @example
   * Manual
   */
  flowType?: string;
  /**
   * @example
   * xxx
   */
  message?: string;
  /**
   * @example
   * 80
   */
  progress?: number;
  /**
   * @example
   * true
   */
  rollbackEnabled?: boolean;
  /**
   * @example
   * 2938475566
   */
  size?: number;
  /**
   * @example
   * pending
   */
  status?: string;
  /**
   * @example
   * 2020-11-08T02:00:00Z
   */
  switchedTime?: string;
  /**
   * @example
   * 20102010211
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      builtTime: 'builtTime',
      code: 'code',
      costSeconds: 'costSeconds',
      flowType: 'flowType',
      message: 'message',
      progress: 'progress',
      rollbackEnabled: 'rollbackEnabled',
      size: 'size',
      status: 'status',
      switchedTime: 'switchedTime',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      builtTime: 'string',
      code: 'string',
      costSeconds: 'number',
      flowType: 'string',
      message: 'string',
      progress: 'number',
      rollbackEnabled: 'boolean',
      size: 'number',
      status: 'string',
      switchedTime: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQuotaResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The current QPS.
   * 
   * @example
   * 8
   */
  currentQps?: number;
  /**
   * @remarks
   * The number of documents in the item table. Valid values:
   * 
   * 1000000 to 10000000.
   * 
   * @example
   * 1000000
   */
  itemCount?: number;
  /**
   * @remarks
   * The number of items that are used in the item table.
   * 
   * @example
   * 100
   */
  itemCountUsed?: number;
  /**
   * @remarks
   * The queries per second (QPS). Valid values:
   * 
   * 10 to 500.
   * 
   * @example
   * 10
   */
  qps?: number;
  /**
   * @remarks
   * The number of documents in the user table. Valid values:
   * 
   * 1000000 to 10000000.
   * 
   * @example
   * 1000000
   */
  userCount?: number;
  /**
   * @remarks
   * The number of users that are used in the user table.
   * 
   * @example
   * 100
   */
  userCountUsed?: number;
  static names(): { [key: string]: string } {
    return {
      currentQps: 'currentQps',
      itemCount: 'itemCount',
      itemCountUsed: 'itemCountUsed',
      qps: 'qps',
      userCount: 'userCount',
      userCountUsed: 'userCountUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentQps: 'number',
      itemCount: 'number',
      itemCountUsed: 'number',
      qps: 'number',
      userCount: 'number',
      userCountUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The console URL.
   * 
   * @example
   * xxx
   */
  consoleUrl?: string;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * 47.109.94.218
   */
  endpoint?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * xxx
   */
  localName?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The instance state. Valid values: NotOpen, Processing, and Running.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      consoleUrl: 'consoleUrl',
      endpoint: 'endpoint',
      localName: 'localName',
      regionId: 'regionId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleUrl: 'string',
      endpoint: 'string',
      localName: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 2020-04-27T06:38:28.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The state of the rule.
   * 
   * @example
   * 2020-04-27T06:38:28.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The time when the rule was last modified.
   * 
   * @example
   * 98493A14-D619-4E88-9F8D-108939817F9F
   */
  ruleId?: string;
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * DRAFT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      ruleId: 'ruleId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      ruleId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  sceneId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      sceneId: 'sceneId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      sceneId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneBucketResponseBodyResult extends $tea.Model {
  /**
   * @example
   * xxx
   */
  detail?: { [key: string]: any };
  /**
   * @example
   * 1
   */
  inUse?: string;
  /**
   * @example
   * 2
   */
  num?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      inUse: 'inUse',
      num: 'num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inUse: 'string',
      num: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneThroughputResponseBodyResult extends $tea.Model {
  pvCount?: number;
  static names(): { [key: string]: string } {
    return {
      pvCount: 'pvCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pvCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportDetailResponseBodyResultHistoryData extends $tea.Model {
  /**
   * @example
   * 1586673466
   */
  endTime?: number;
  /**
   * @example
   * 84.6
   */
  errorPercent?: number;
  /**
   * @example
   * 1586673466
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      errorPercent: 'errorPercent',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      errorPercent: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncReportDetailResponseBodyResult extends $tea.Model {
  /**
   * @example
   * false
   */
  defaultDisplay?: boolean;
  /**
   * @example
   * 246165
   */
  errorCount?: number;
  /**
   * @example
   * 84.6
   */
  errorPercent?: number;
  historyData?: DescribeSyncReportDetailResponseBodyResultHistoryData[];
  /**
   * @example
   * true
   */
  sampleDisplay?: boolean;
  /**
   * @example
   * bhvTimeBehavior
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultDisplay: 'defaultDisplay',
      errorCount: 'errorCount',
      errorPercent: 'errorPercent',
      historyData: 'historyData',
      sampleDisplay: 'sampleDisplay',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultDisplay: 'boolean',
      errorCount: 'number',
      errorPercent: 'number',
      historyData: { 'type': 'array', 'itemType': DescribeSyncReportDetailResponseBodyResultHistoryData },
      sampleDisplay: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserMetricsResponseBodyResultDataPoints extends $tea.Model {
  /**
   * @remarks
   * The end time. The value is a timestamp in seconds.
   * 
   * @example
   * 1567152000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time. The value is a timestamp in seconds.
   * 
   * @example
   * 1567152000
   */
  startTime?: number;
  /**
   * @remarks
   * The value of the corresponding metric.
   * 
   * @example
   * 84.6
   */
  val?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      val: 'val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      val: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserMetricsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The returned metrics.
   */
  dataPoints?: DescribeUserMetricsResponseBodyResultDataPoints[];
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * all
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'dataPoints',
      sceneId: 'sceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: { 'type': 'array', 'itemType': DescribeUserMetricsResponseBodyResultDataPoints },
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeInstanceResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The new quota must be less than the selected quota.
   * 
   * The limits on the number of users: 1,000,000 to 10,000,000. The limits on the number of items: 1,000,000 to 10,000,000. The limits on the queries per second (QPS) of recommendation requests: 10 to 500.
   * 
   * @example
   * airec-cn-o400whm78004
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
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

export class GetFlowControlTaskResponseBodyResultMetaSelectionParams extends $tea.Model {
  /**
   * @remarks
   * The type of the filtering condition for the item selection rule.
   * 
   * @example
   * QUERY_PUB_TIME
   */
  selectType?: string;
  /**
   * @remarks
   * The value of the filtering condition for the item selection rule.
   * 
   * @example
   * 10000
   */
  selectValue?: string;
  /**
   * @remarks
   * The operation on the filtering condition for the item selection rule.
   * 
   * @example
   * OPERATOR_HIGHER
   */
  selectionOperation?: string;
  static names(): { [key: string]: string } {
    return {
      selectType: 'selectType',
      selectValue: 'selectValue',
      selectionOperation: 'selectionOperation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectType: 'string',
      selectValue: 'string',
      selectionOperation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowControlTaskResponseBodyResultMetaTarget extends $tea.Model {
  /**
   * @remarks
   * EXPOSE_PERCENT: daily exposure percentage. EXPOSE_COUNT: total number of exposures.
   * 
   * @example
   * EXPOSE_PERCENT
   */
  type?: string;
  /**
   * @remarks
   * The exposure value.
   * 
   * @example
   * 20
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowControlTaskResponseBodyResultMeta extends $tea.Model {
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * xx
   */
  description?: string;
  /**
   * @remarks
   * The end time. The value is a timestamp in seconds.
   * 
   * @example
   * 1656518399
   */
  endTime?: number;
  /**
   * @remarks
   * The metadata type.
   * 
   * @example
   * FlowControlTask
   */
  metaType?: string;
  /**
   * @remarks
   * The scene IDs.
   * 
   * @example
   * 1,2,3
   */
  sceneIds?: string;
  /**
   * @remarks
   * The parameters specified for the item selection rule.
   */
  selectionParams?: GetFlowControlTaskResponseBodyResultMetaSelectionParams[];
  /**
   * @remarks
   * The start time. The value is a timestamp in seconds.
   * 
   * @example
   * 1640739600
   */
  startTime?: number;
  /**
   * @remarks
   * The exposure settings.
   */
  target?: GetFlowControlTaskResponseBodyResultMetaTarget;
  /**
   * @remarks
   * The task name.
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      endTime: 'endTime',
      metaType: 'metaType',
      sceneIds: 'sceneIds',
      selectionParams: 'selectionParams',
      startTime: 'startTime',
      target: 'target',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endTime: 'number',
      metaType: 'string',
      sceneIds: 'string',
      selectionParams: { 'type': 'array', 'itemType': GetFlowControlTaskResponseBodyResultMetaSelectionParams },
      startTime: 'number',
      target: GetFlowControlTaskResponseBodyResultMetaTarget,
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowControlTaskResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the data source was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-04-23T06:08:48.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The metadata of the task.
   */
  meta?: GetFlowControlTaskResponseBodyResultMeta;
  /**
   * @remarks
   * The task state. Valid values: DRAFT, READY, RUNNING, ENDED, and AUTO_END. The value AUTO_END is not used.
   * 
   * @example
   * DRAFT
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1666854602398
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: GetFlowControlTaskResponseBodyResultMeta,
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsResponseBodyResultMetricRes extends $tea.Model {
  /**
   * @example
   * xxx
   */
  detail?: { [key: string]: any };
  /**
   * @example
   * xxx
   */
  total?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      total: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsResponseBodyResult extends $tea.Model {
  metricRes?: ListDashboardDetailsResponseBodyResultMetricRes;
  /**
   * @example
   * test
   */
  sceneId?: string;
  /**
   * @example
   * Alibaba
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      metricRes: 'metricRes',
      sceneId: 'sceneId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricRes: ListDashboardDetailsResponseBodyResultMetricRes,
      sceneId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsFlowsResponseBodyResultMetricData extends $tea.Model {
  /**
   * @example
   * xxx
   */
  metricRes?: { [key: string]: any };
  /**
   * @example
   * test
   */
  sceneId?: string;
  /**
   * @example
   * Alibaba
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      metricRes: 'metricRes',
      sceneId: 'sceneId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricRes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sceneId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardDetailsFlowsResponseBodyResult extends $tea.Model {
  metricData?: ListDashboardDetailsFlowsResponseBodyResultMetricData[];
  /**
   * @example
   * USERACTIONUV_COUNT
   */
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      metricData: 'metricData',
      metricType: 'metricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricData: { 'type': 'array', 'itemType': ListDashboardDetailsFlowsResponseBodyResultMetricData },
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsResponseBodyResultDetail extends $tea.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 1586673466
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1586673466
   */
  startTime?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 13
   */
  val?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      val: 'val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      val: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The end time. The value is a timestamp in seconds.
   */
  detail?: ListDashboardMetricsResponseBodyResultDetail[];
  /**
   * @remarks
   * The start time. The value is a timestamp in seconds.
   * 
   * @example
   * xxx
   */
  total?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': ListDashboardMetricsResponseBodyResultDetail },
      total: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardMetricsFlowsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * __null__
   * 
   * @example
   * xxx
   */
  metricData?: { [key: string]: any };
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * xxx
   */
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      metricData: 'metricData',
      metricType: 'metricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the data source was created.
   * 
   * @example
   * 1544112000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the data source was last modified.
   * 
   * @example
   * 1544112000000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * airec-cn-o400whm78004
   */
  instanceId?: string;
  /**
   * @remarks
   * The state for the dataset of the current version. Example: Importing. The value indicates that the dataset of the current version is being imported.
   * 
   * @example
   * Importing
   */
  state?: string;
  /**
   * @remarks
   * The version number of the dataset.
   * 
   * @example
   * 20181023214546
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      instanceId: 'instanceId',
      state: 'state',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      instanceId: 'string',
      state: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponseBodyResultMeta extends $tea.Model {
  /**
   * @example
   * xxx
   */
  accessKeyId?: string;
  /**
   * @example
   * airec
   */
  bucketName?: string;
  /**
   * @example
   * ds=20181122
   */
  partition?: string;
  /**
   * @example
   * oss://xxx.xxx
   */
  path?: string;
  /**
   * @example
   * openrec_gray
   */
  projectName?: string;
  /**
   * @example
   * test_maxcompute
   */
  tableName?: string;
  /**
   * @example
   * 1544112000000
   */
  timestamp?: number;
  /**
   * @example
   * ODPS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      bucketName: 'bucketName',
      partition: 'partition',
      path: 'path',
      projectName: 'projectName',
      tableName: 'tableName',
      timestamp: 'timestamp',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      bucketName: 'string',
      partition: 'string',
      path: 'string',
      projectName: 'string',
      tableName: 'string',
      timestamp: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtModified?: string;
  meta?: ListDataSourceResponseBodyResultMeta;
  /**
   * @example
   * behavior
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: ListDataSourceResponseBodyResultMeta,
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBodyResult extends $tea.Model {
  /**
   * @example
   * true
   */
  base?: boolean;
  buckets?: string[];
  /**
   * @example
   * xxx
   */
  description?: string;
  /**
   * @example
   * 123
   */
  experimentId?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 2020-12-07T06:47:30.000Z
   */
  offlineTime?: string;
  /**
   * @example
   * 2020-12-07T06:47:30.000Z
   */
  onlineTime?: string;
  /**
   * @example
   * init
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      base: 'base',
      buckets: 'buckets',
      description: 'description',
      experimentId: 'experimentId',
      name: 'name',
      offlineTime: 'offlineTime',
      onlineTime: 'onlineTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base: 'boolean',
      buckets: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      experimentId: 'string',
      name: 'string',
      offlineTime: 'string',
      onlineTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilteringAlgorithmsResponseBodyHeaders extends $tea.Model {
  /**
   * @example
   * 12
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilteringAlgorithmsResponseBodyResultMetaExtInfo extends $tea.Model {
  /**
   * @example
   * ,
   */
  itemSeparator?: string;
  /**
   * @example
   * :
   */
  kvSeparator?: string;
  static names(): { [key: string]: string } {
    return {
      itemSeparator: 'itemSeparator',
      kvSeparator: 'kvSeparator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemSeparator: 'string',
      kvSeparator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilteringAlgorithmsResponseBodyResultMetaThreshold extends $tea.Model {
  /**
   * @example
   * 1
   */
  indexLossThreshold?: number;
  /**
   * @example
   * 1
   */
  indexSizeThreshold?: number;
  /**
   * @example
   * 1
   */
  sourceDataRecordThreshold?: number;
  /**
   * @example
   * 1
   */
  sourceDataSizeThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      indexLossThreshold: 'indexLossThreshold',
      indexSizeThreshold: 'indexSizeThreshold',
      sourceDataRecordThreshold: 'sourceDataRecordThreshold',
      sourceDataSizeThreshold: 'sourceDataSizeThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexLossThreshold: 'number',
      indexSizeThreshold: 'number',
      sourceDataRecordThreshold: 'number',
      sourceDataSizeThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilteringAlgorithmsResponseBodyResultMeta extends $tea.Model {
  /**
   * @example
   * test
   */
  algorithmName?: string;
  /**
   * @example
   * odps
   */
  category?: string;
  /**
   * @example
   * 123
   */
  clusterId?: string;
  /**
   * @example
   * 0 0/12 0 * *
   */
  cron?: string;
  /**
   * @example
   * true
   */
  cronEnabled?: boolean;
  /**
   * @example
   * test
   */
  description?: string;
  extInfo?: ListFilteringAlgorithmsResponseBodyResultMetaExtInfo;
  /**
   * @example
   * ODPS
   */
  metaType?: string;
  /**
   * @example
   * airec123
   */
  projectName?: string;
  /**
   * @example
   * item
   */
  tableName?: string;
  /**
   * @example
   * 123
   */
  taskId?: string;
  threshold?: ListFilteringAlgorithmsResponseBodyResultMetaThreshold;
  /**
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'algorithmName',
      category: 'category',
      clusterId: 'clusterId',
      cron: 'cron',
      cronEnabled: 'cronEnabled',
      description: 'description',
      extInfo: 'extInfo',
      metaType: 'metaType',
      projectName: 'projectName',
      tableName: 'tableName',
      taskId: 'taskId',
      threshold: 'threshold',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      category: 'string',
      clusterId: 'string',
      cron: 'string',
      cronEnabled: 'boolean',
      description: 'string',
      extInfo: ListFilteringAlgorithmsResponseBodyResultMetaExtInfo,
      metaType: 'string',
      projectName: 'string',
      tableName: 'string',
      taskId: 'string',
      threshold: ListFilteringAlgorithmsResponseBodyResultMetaThreshold,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilteringAlgorithmsResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 123
   */
  algorithmId?: string;
  /**
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtModified?: string;
  meta?: ListFilteringAlgorithmsResponseBodyResultMeta;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'algorithmId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: ListFilteringAlgorithmsResponseBodyResultMeta,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskResponseBodyResultMetaSelectionParams extends $tea.Model {
  /**
   * @example
   * selectType
   */
  selectType?: string;
  /**
   * @example
   * selectValue
   */
  selectValue?: string;
  /**
   * @example
   * selectionOperation
   */
  selectionOperation?: string;
  static names(): { [key: string]: string } {
    return {
      selectType: 'selectType',
      selectValue: 'selectValue',
      selectionOperation: 'selectionOperation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectType: 'string',
      selectValue: 'string',
      selectionOperation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskResponseBodyResultMetaTarget extends $tea.Model {
  /**
   * @example
   * EXPOSE_PERCENT
   */
  type?: string;
  /**
   * @example
   * 50
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskResponseBodyResultMeta extends $tea.Model {
  description?: string;
  /**
   * @example
   * 1621267200
   */
  endTime?: number;
  /**
   * @example
   * metaType
   */
  metaType?: string;
  /**
   * @example
   * 1,2,3
   */
  sceneIds?: string;
  selectionParams?: ListFlowControlTaskResponseBodyResultMetaSelectionParams[];
  /**
   * @example
   * 1621267200
   */
  startTime?: number;
  target?: ListFlowControlTaskResponseBodyResultMetaTarget;
  /**
   * @example
   * testtaskname
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      endTime: 'endTime',
      metaType: 'metaType',
      sceneIds: 'sceneIds',
      selectionParams: 'selectionParams',
      startTime: 'startTime',
      target: 'target',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endTime: 'number',
      metaType: 'string',
      sceneIds: 'string',
      selectionParams: { 'type': 'array', 'itemType': ListFlowControlTaskResponseBodyResultMetaSelectionParams },
      startTime: 'number',
      target: ListFlowControlTaskResponseBodyResultMetaTarget,
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 1661506482
   */
  taskId?: string;
  /**
   * @example
   * 2022-08-06T06:14:01.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-08-06T06:14:01.000Z
   */
  gmtModified?: string;
  meta?: ListFlowControlTaskResponseBodyResultMeta;
  /**
   * @example
   * DRAFT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: ListFlowControlTaskResponseBodyResultMeta,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskInvalidItemsResponseBodyResultInvalidItems extends $tea.Model {
  /**
   * @example
   * 287723
   */
  itemId?: string;
  /**
   * @example
   * video
   */
  itemType?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'itemId',
      itemType: 'itemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      itemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskInvalidItemsResponseBodyResult extends $tea.Model {
  invalidItems?: ListFlowControlTaskInvalidItemsResponseBodyResultInvalidItems[];
  static names(): { [key: string]: string } {
    return {
      invalidItems: 'invalidItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidItems: { 'type': 'array', 'itemType': ListFlowControlTaskInvalidItemsResponseBodyResultInvalidItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskItemReportsResponseBodyResultDetail extends $tea.Model {
  /**
   * @example
   * 3.24
   */
  accClickPercent?: string;
  /**
   * @example
   * 1000
   */
  accItemClick?: string;
  /**
   * @example
   * 4.56
   */
  accItemCtr?: string;
  /**
   * @example
   * 500
   */
  accItemPv?: string;
  /**
   * @example
   * 20.12
   */
  accPvPercent?: string;
  /**
   * @example
   * 600
   */
  accTaskClick?: string;
  /**
   * @example
   * 3.22
   */
  accTaskCtr?: string;
  /**
   * @example
   * 200
   */
  accTaskPv?: string;
  /**
   * @example
   * 10
   */
  accTaskRank?: string;
  /**
   * @example
   * 1.23
   */
  clickPercent?: string;
  /**
   * @example
   * 100
   */
  itemClick?: string;
  /**
   * @example
   * 2.34
   */
  itemCtr?: string;
  /**
   * @example
   * 123
   */
  itemId?: string;
  /**
   * @example
   * 100
   */
  itemPv?: string;
  /**
   * @example
   * video
   */
  itemType?: string;
  /**
   * @example
   * 10.12
   */
  pvPercent?: string;
  /**
   * @example
   * 100
   */
  taskClick?: string;
  /**
   * @example
   * 1.23
   */
  taskCtr?: string;
  /**
   * @example
   * 1666669577221
   */
  taskId?: string;
  /**
   * @example
   * 50
   */
  taskPv?: string;
  /**
   * @example
   * 12
   */
  taskRank?: string;
  static names(): { [key: string]: string } {
    return {
      accClickPercent: 'accClickPercent',
      accItemClick: 'accItemClick',
      accItemCtr: 'accItemCtr',
      accItemPv: 'accItemPv',
      accPvPercent: 'accPvPercent',
      accTaskClick: 'accTaskClick',
      accTaskCtr: 'accTaskCtr',
      accTaskPv: 'accTaskPv',
      accTaskRank: 'accTaskRank',
      clickPercent: 'clickPercent',
      itemClick: 'itemClick',
      itemCtr: 'itemCtr',
      itemId: 'itemId',
      itemPv: 'itemPv',
      itemType: 'itemType',
      pvPercent: 'pvPercent',
      taskClick: 'taskClick',
      taskCtr: 'taskCtr',
      taskId: 'taskId',
      taskPv: 'taskPv',
      taskRank: 'taskRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accClickPercent: 'string',
      accItemClick: 'string',
      accItemCtr: 'string',
      accItemPv: 'string',
      accPvPercent: 'string',
      accTaskClick: 'string',
      accTaskCtr: 'string',
      accTaskPv: 'string',
      accTaskRank: 'string',
      clickPercent: 'string',
      itemClick: 'string',
      itemCtr: 'string',
      itemId: 'string',
      itemPv: 'string',
      itemType: 'string',
      pvPercent: 'string',
      taskClick: 'string',
      taskCtr: 'string',
      taskId: 'string',
      taskPv: 'string',
      taskRank: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskItemReportsResponseBodyResult extends $tea.Model {
  detail?: ListFlowControlTaskItemReportsResponseBodyResultDetail[];
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': ListFlowControlTaskItemReportsResponseBodyResultDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskItemsResponseBodyResultDetail extends $tea.Model {
  /**
   * @example
   * zhangsan
   */
  author?: string;
  /**
   * @example
   * 12_34
   */
  categoryPath?: string;
  /**
   * @example
   * news
   */
  channel?: string;
  /**
   * @example
   * 18
   */
  duration?: string;
  /**
   * @example
   * 1612687809
   */
  expireTime?: string;
  /**
   * @example
   * 123
   */
  itemId?: string;
  /**
   * @example
   * video
   */
  itemType?: string;
  /**
   * @example
   * 1662346558
   */
  lastModifyTime?: string;
  /**
   * @example
   * 1661931487
   */
  pubTime?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * 10
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      categoryPath: 'categoryPath',
      channel: 'channel',
      duration: 'duration',
      expireTime: 'expireTime',
      itemId: 'itemId',
      itemType: 'itemType',
      lastModifyTime: 'lastModifyTime',
      pubTime: 'pubTime',
      status: 'status',
      title: 'title',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      categoryPath: 'string',
      channel: 'string',
      duration: 'string',
      expireTime: 'string',
      itemId: 'string',
      itemType: 'string',
      lastModifyTime: 'string',
      pubTime: 'string',
      status: 'string',
      title: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskItemsResponseBodyResult extends $tea.Model {
  detail?: ListFlowControlTaskItemsResponseBodyResultDetail[];
  /**
   * @example
   * 1
   */
  totalCount?: string;
  /**
   * @example
   * 1
   */
  validCount?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      totalCount: 'totalCount',
      validCount: 'validCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': ListFlowControlTaskItemsResponseBodyResultDetail },
      totalCount: 'string',
      validCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskReferenceResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The average exposure rate of the item pool in the last seven days.
   * 
   * @example
   * 0.1
   */
  last7PvPercent?: number;
  /**
   * @remarks
   * The average number of exposures for the items in the selected scene in the last seven days.
   * 
   * @example
   * 10
   */
  last7ScenePv?: number;
  /**
   * @remarks
   * The average number of exposures for the item pool in the selected scene in the last seven days.
   * 
   * @example
   * 10
   */
  last7TaskPv?: number;
  /**
   * @remarks
   * The exposure rate of the item pool yesterday.
   * 
   * @example
   * 0.1
   */
  lastPvPercent?: number;
  /**
   * @remarks
   * The total number of exposures for the items in the selected scene yesterday.
   * 
   * @example
   * 10
   */
  lastScenePv?: number;
  /**
   * @remarks
   * The number of exposures for the item pool in the selected scene yesterday.
   * 
   * @example
   * 10
   */
  lastTaskPv?: number;
  /**
   * @remarks
   * The ID of the reference data.
   * 
   * @example
   * 421351235918
   */
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      last7PvPercent: 'last7PvPercent',
      last7ScenePv: 'last7ScenePv',
      last7TaskPv: 'last7TaskPv',
      lastPvPercent: 'lastPvPercent',
      lastScenePv: 'lastScenePv',
      lastTaskPv: 'lastTaskPv',
      referenceId: 'referenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      last7PvPercent: 'number',
      last7ScenePv: 'number',
      last7TaskPv: 'number',
      lastPvPercent: 'number',
      lastScenePv: 'number',
      lastTaskPv: 'number',
      referenceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskReportsResponseBodyResultMetricsDetails extends $tea.Model {
  /**
   * @example
   * 1664035200
   */
  endTime?: number;
  /**
   * @example
   * 1664000452
   */
  startTime?: number;
  /**
   * @example
   * 0
   */
  val?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      val: 'val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      val: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskReportsResponseBodyResultMetrics extends $tea.Model {
  details?: ListFlowControlTaskReportsResponseBodyResultMetricsDetails[];
  /**
   * @example
   * taskPv
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'details',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': ListFlowControlTaskReportsResponseBodyResultMetricsDetails },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskReportsResponseBodyResultTotal extends $tea.Model {
  /**
   * @example
   * 0.3
   */
  invalidPercent?: number;
  /**
   * @example
   * 0.1
   */
  accTaskCtr?: number;
  /**
   * @example
   * 1000
   */
  accTaskPv?: number;
  /**
   * @example
   * 0.2
   */
  accTotalCtr?: number;
  static names(): { [key: string]: string } {
    return {
      invalidPercent: 'InvalidPercent',
      accTaskCtr: 'accTaskCtr',
      accTaskPv: 'accTaskPv',
      accTotalCtr: 'accTotalCtr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidPercent: 'number',
      accTaskCtr: 'number',
      accTaskPv: 'number',
      accTotalCtr: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowControlTaskReportsResponseBodyResult extends $tea.Model {
  metrics?: ListFlowControlTaskReportsResponseBodyResultMetrics[];
  total?: ListFlowControlTaskReportsResponseBodyResultTotal;
  static names(): { [key: string]: string } {
    return {
      metrics: 'metrics',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': ListFlowControlTaskReportsResponseBodyResultMetrics },
      total: ListFlowControlTaskReportsResponseBodyResultTotal,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexVersionsResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 2020-11-08T02:00:00Z
   */
  builtTime?: string;
  /**
   * @example
   * abc
   */
  code?: string;
  /**
   * @example
   * 600
   */
  costSeconds?: number;
  /**
   * @example
   * Auto
   */
  flowType?: string;
  /**
   * @example
   * xxx
   */
  message?: string;
  /**
   * @example
   * 80
   */
  progress?: number;
  /**
   * @example
   * true
   */
  rollbackEnabled?: boolean;
  /**
   * @example
   * 300922211
   */
  size?: number;
  /**
   * @example
   * abc
   */
  status?: string;
  /**
   * @example
   * 2020-11-08T02:00:00Z
   */
  switchedTime?: string;
  /**
   * @example
   * 2020112301
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      builtTime: 'builtTime',
      code: 'code',
      costSeconds: 'costSeconds',
      flowType: 'flowType',
      message: 'message',
      progress: 'progress',
      rollbackEnabled: 'rollbackEnabled',
      size: 'size',
      status: 'status',
      switchedTime: 'switchedTime',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      builtTime: 'string',
      code: 'string',
      costSeconds: 'number',
      flowType: 'string',
      message: 'string',
      progress: 'number',
      rollbackEnabled: 'boolean',
      size: 'number',
      status: 'string',
      switchedTime: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResult extends $tea.Model {
  chargeType?: string;
  commodityCode?: string;
  dataSetVersion?: string;
  expiredTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  industry?: string;
  instanceId?: string;
  lockMode?: string;
  name?: string;
  regionId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      dataSetVersion: 'dataSetVersion',
      expiredTime: 'expiredTime',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      industry: 'industry',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      name: 'name',
      regionId: 'regionId',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      dataSetVersion: 'string',
      expiredTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      industry: 'string',
      instanceId: 'string',
      lockMode: 'string',
      name: 'string',
      regionId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceTaskResponseBodyResultSubProgressInfos extends $tea.Model {
  /**
   * @remarks
   * The detailed description of subtasks.
   * 
   * @example
   * data import progress info
   */
  detail?: string;
  /**
   * @remarks
   * The number of completed subtasks.
   * 
   * @example
   * 11
   */
  finishedNum?: number;
  /**
   * @remarks
   * The progress of subtasks.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The total number of subtasks.
   * 
   * @example
   * 11
   */
  totalNum?: number;
  /**
   * @remarks
   * The type of subtasks.
   * 
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      finishedNum: 'finishedNum',
      progress: 'progress',
      totalNum: 'totalNum',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      finishedNum: 'number',
      progress: 'number',
      totalNum: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceTaskResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The name of the step. Example: DATA_IMPORT. The value indicates that data is being imported.
   * 
   * @example
   * DATA_IMPORT
   */
  name?: string;
  /**
   * @remarks
   * The information about the progress of subtasks.
   */
  subProgressInfos?: ListInstanceTaskResponseBodyResultSubProgressInfos[];
  /**
   * @remarks
   * The overall progress of the current task.
   * 
   * @example
   * 100
   */
  totalProgress?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      subProgressInfos: 'subProgressInfos',
      totalProgress: 'totalProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subProgressInfos: { 'type': 'array', 'itemType': ListInstanceTaskResponseBodyResultSubProgressInfos },
      totalProgress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemsResponseBodyResultDetail extends $tea.Model {
  /**
   * @example
   * abc
   */
  author?: string;
  /**
   * @example
   * 1
   */
  brandId?: string;
  /**
   * @example
   * 1_2
   */
  categoryPath?: string;
  /**
   * @example
   * news
   */
  channel?: string;
  /**
   * @example
   * 30
   */
  duration?: string;
  /**
   * @example
   * 1647998107012
   */
  expireTime?: string;
  /**
   * @example
   * 123
   */
  itemId?: string;
  /**
   * @example
   * item
   */
  itemType?: string;
  /**
   * @example
   * 1647998107012
   */
  pubTime?: string;
  /**
   * @example
   * 1
   */
  shopId?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      brandId: 'brandId',
      categoryPath: 'categoryPath',
      channel: 'channel',
      duration: 'duration',
      expireTime: 'expireTime',
      itemId: 'itemId',
      itemType: 'itemType',
      pubTime: 'pubTime',
      shopId: 'shopId',
      status: 'status',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      brandId: 'string',
      categoryPath: 'string',
      channel: 'string',
      duration: 'string',
      expireTime: 'string',
      itemId: 'string',
      itemType: 'string',
      pubTime: 'string',
      shopId: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemsResponseBodyResultTotal extends $tea.Model {
  /**
   * @example
   * 200
   */
  instanceRecommendItem?: number;
  /**
   * @example
   * 3000
   */
  queryCount?: number;
  /**
   * @example
   * 200
   */
  sceneRecommendItem?: number;
  /**
   * @example
   * 10
   */
  sceneWeightItem?: number;
  /**
   * @example
   * 5000
   */
  totalCount?: number;
  /**
   * @example
   * 10
   */
  weightItem?: number;
  static names(): { [key: string]: string } {
    return {
      instanceRecommendItem: 'instanceRecommendItem',
      queryCount: 'queryCount',
      sceneRecommendItem: 'sceneRecommendItem',
      sceneWeightItem: 'sceneWeightItem',
      totalCount: 'totalCount',
      weightItem: 'weightItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRecommendItem: 'number',
      queryCount: 'number',
      sceneRecommendItem: 'number',
      sceneWeightItem: 'number',
      totalCount: 'number',
      weightItem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemsResponseBodyResult extends $tea.Model {
  detail?: ListItemsResponseBodyResultDetail[];
  total?: ListItemsResponseBodyResultTotal;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': ListItemsResponseBodyResultDetail },
      total: ListItemsResponseBodyResultTotal,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMixCategoriesResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The content type.
   */
  categories?: number[];
  static names(): { [key: string]: string } {
    return {
      categories: 'categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineStoragesResponseBodyResult extends $tea.Model {
  meta?: { [key: string]: any };
  /**
   * @example
   * item
   */
  tableName?: Buffer;
  static names(): { [key: string]: string } {
    return {
      meta: 'meta',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tableName: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRankingModelsResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  /**
   * @example
   * 2020-11-11T09:47:43.000Z
   */
  gmtModified?: string;
  meta?: { [key: string]: any };
  /**
   * @example
   * 123
   */
  rankingModelId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      rankingModelId: 'rankingModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rankingModelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleConditionsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The type of the filtering condition for the item selection rule.
   * 
   * @example
   * QUERY_ITEM_TYPE
   */
  selectType?: string;
  /**
   * @remarks
   * The specific value of the filtering condition for the item selection rule.
   * 
   * @example
   * xxx
   */
  selectValue?: string;
  /**
   * @remarks
   * The operation on the filtering condition for the item selection rule.
   * 
   * @example
   * QUERY_VALUE_IN
   */
  selectionOperation?: string;
  static names(): { [key: string]: string } {
    return {
      selectType: 'selectType',
      selectValue: 'selectValue',
      selectionOperation: 'selectionOperation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectType: 'string',
      selectValue: 'string',
      selectionOperation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleTasksResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 50
   */
  finishRate?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1588240081
   */
  finishTime?: number;
  static names(): { [key: string]: string } {
    return {
      finishRate: 'finishRate',
      finishTime: 'finishTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishRate: 'number',
      finishTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 2020-04-27T06:38:28.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2020-04-27T06:38:28.000Z
   */
  gmtModified?: string;
  /**
   * @example
   * 98493A14-D619-4E88-9F8D-108939817F9F
   */
  ruleId?: string;
  /**
   * @example
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      ruleId: 'ruleId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      ruleId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneItemsResponseBodyResultDetail extends $tea.Model {
  author?: string;
  brandId?: string;
  categoryPath?: string;
  channel?: string;
  duration?: string;
  expireTime?: string;
  itemId?: string;
  itemType?: string;
  pubTime?: string;
  shopId?: string;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      brandId: 'brandId',
      categoryPath: 'categoryPath',
      channel: 'channel',
      duration: 'duration',
      expireTime: 'expireTime',
      itemId: 'itemId',
      itemType: 'itemType',
      pubTime: 'pubTime',
      shopId: 'shopId',
      status: 'status',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      brandId: 'string',
      categoryPath: 'string',
      channel: 'string',
      duration: 'string',
      expireTime: 'string',
      itemId: 'string',
      itemType: 'string',
      pubTime: 'string',
      shopId: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneItemsResponseBodyResultTotal extends $tea.Model {
  instanceRecommendItem?: number;
  sceneRecommendItem?: number;
  sceneWeightItem?: number;
  totalCount?: number;
  weightItem?: number;
  static names(): { [key: string]: string } {
    return {
      instanceRecommendItem: 'instanceRecommendItem',
      sceneRecommendItem: 'sceneRecommendItem',
      sceneWeightItem: 'sceneWeightItem',
      totalCount: 'totalCount',
      weightItem: 'weightItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRecommendItem: 'number',
      sceneRecommendItem: 'number',
      sceneWeightItem: 'number',
      totalCount: 'number',
      weightItem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneItemsResponseBodyResult extends $tea.Model {
  detail?: ListSceneItemsResponseBodyResultDetail[];
  total?: ListSceneItemsResponseBodyResultTotal;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': ListSceneItemsResponseBodyResultDetail },
      total: ListSceneItemsResponseBodyResultTotal,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneParametersResponseBodyResult extends $tea.Model {
  sceneId?: string[];
  traceId?: string[];
  static names(): { [key: string]: string } {
    return {
      sceneId: 'sceneId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: { 'type': 'array', 'itemType': 'string' },
      traceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  sceneId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      sceneId: 'sceneId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      sceneId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUmengAppkeysResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 5ddcf39f57729e708b00000e
   */
  appkey?: string;
  /**
   * @example
   * xxx
   */
  name?: string;
  /**
   * @example
   * ios
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      appkey: 'appkey',
      name: 'name',
      platform: 'platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appkey: 'string',
      name: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserClustersResponseBodyHeaders extends $tea.Model {
  /**
   * @example
   * 1
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserClustersResponseBodyResultMeta extends $tea.Model {
  /**
   * @example
   * tst
   */
  description?: string;
  /**
   * @example
   * UserCluster
   */
  metaType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      metaType: 'metaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserClustersResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * meta
   */
  meta?: ListUserClustersResponseBodyResultMeta;
  /**
   * @example
   * mycluster-for-airec
   */
  name?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: ListUserClustersResponseBodyResultMeta,
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceResponseBodyResultMeta extends $tea.Model {
  /**
   * @remarks
   * The AccessKey ID of the Alibaba Cloud account.
   * 
   * @example
   * xxx
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket.
   * 
   * @example
   * airec
   */
  bucketName?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table.
   * 
   * @example
   * ds=20181122
   */
  partition?: string;
  /**
   * @remarks
   * The path of the OSS data source.
   * 
   * @example
   * oss://xxx.xxx
   */
  path?: string;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * openrec_gray
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the MaxCompute table.
   * 
   * @example
   * test_maxcompute
   */
  tableName?: string;
  /**
   * @remarks
   * The timestamp. The value must be accurate to the millisecond.
   * 
   * @example
   * 1544112000000
   */
  timestamp?: number;
  /**
   * @remarks
   * The type of the data source. Only MaxCompute is supported.
   * 
   * @example
   * ODPS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      bucketName: 'bucketName',
      partition: 'partition',
      path: 'path',
      projectName: 'projectName',
      tableName: 'tableName',
      timestamp: 'timestamp',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      bucketName: 'string',
      partition: 'string',
      path: 'string',
      projectName: 'string',
      tableName: 'string',
      timestamp: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the data source was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the data source was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The parameters of the data source.
   */
  meta?: ModifyDataSourceResponseBodyResultMeta;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * behavior
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: ModifyDataSourceResponseBodyResultMeta,
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFilteringAlgorithmMetaResponseBodyResultMetaExtInfo extends $tea.Model {
  /**
   * @example
   * ,
   */
  itemSeparator?: string;
  /**
   * @example
   * :
   */
  kvSeparator?: string;
  static names(): { [key: string]: string } {
    return {
      itemSeparator: 'itemSeparator',
      kvSeparator: 'kvSeparator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemSeparator: 'string',
      kvSeparator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFilteringAlgorithmMetaResponseBodyResultMetaThreshold extends $tea.Model {
  /**
   * @example
   * 1
   */
  indexLossThreshold?: number;
  /**
   * @example
   * 1
   */
  indexSizeThreshold?: number;
  /**
   * @example
   * 1
   */
  sourceDataRecordThreshold?: number;
  /**
   * @example
   * 1
   */
  sourceDataSizeThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      indexLossThreshold: 'indexLossThreshold',
      indexSizeThreshold: 'indexSizeThreshold',
      sourceDataRecordThreshold: 'sourceDataRecordThreshold',
      sourceDataSizeThreshold: 'sourceDataSizeThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexLossThreshold: 'number',
      indexSizeThreshold: 'number',
      sourceDataRecordThreshold: 'number',
      sourceDataSizeThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFilteringAlgorithmMetaResponseBodyResultMeta extends $tea.Model {
  /**
   * @example
   * test
   */
  algorithmName?: string;
  /**
   * @example
   * 1_2
   */
  category?: string;
  /**
   * @example
   * 244
   */
  clusterId?: string;
  /**
   * @example
   * * * 24 7 0
   */
  cron?: string;
  cronEnabled?: boolean;
  /**
   * @example
   * test
   */
  description?: string;
  extInfo?: ModifyFilteringAlgorithmMetaResponseBodyResultMetaExtInfo;
  /**
   * @example
   * metaType
   */
  metaType?: string;
  /**
   * @example
   * test
   */
  projectName?: string;
  /**
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @example
   * taskId
   */
  taskId?: string;
  threshold?: ModifyFilteringAlgorithmMetaResponseBodyResultMetaThreshold;
  /**
   * @example
   * ODPS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'algorithmName',
      category: 'category',
      clusterId: 'clusterId',
      cron: 'cron',
      cronEnabled: 'cronEnabled',
      description: 'description',
      extInfo: 'extInfo',
      metaType: 'metaType',
      projectName: 'projectName',
      tableName: 'tableName',
      taskId: 'taskId',
      threshold: 'threshold',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      category: 'string',
      clusterId: 'string',
      cron: 'string',
      cronEnabled: 'boolean',
      description: 'string',
      extInfo: ModifyFilteringAlgorithmMetaResponseBodyResultMetaExtInfo,
      metaType: 'string',
      projectName: 'string',
      tableName: 'string',
      taskId: 'string',
      threshold: ModifyFilteringAlgorithmMetaResponseBodyResultMetaThreshold,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFilteringAlgorithmMetaResponseBodyResult extends $tea.Model {
  /**
   * @example
   * abc
   */
  algorithmId?: string;
  /**
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtModified?: string;
  meta?: ModifyFilteringAlgorithmMetaResponseBodyResultMeta;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'algorithmId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: ModifyFilteringAlgorithmMetaResponseBodyResultMeta,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowControlTaskRequestSelectionParams extends $tea.Model {
  /**
   * @remarks
   * The type of the filtering condition for the item selection rule.
   * 
   * @example
   * invalidItem
   */
  selectType?: string;
  /**
   * @remarks
   * The number of filtering conditions for the item selection rule.
   * 
   * @example
   * 20
   */
  selectValue?: string;
  /**
   * @remarks
   * The operation on the filtering condition for the item selection rule.
   * 
   * @example
   * OPERATOR_HIGHER
   */
  selectionOperation?: string;
  static names(): { [key: string]: string } {
    return {
      selectType: 'selectType',
      selectValue: 'selectValue',
      selectionOperation: 'selectionOperation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectType: 'string',
      selectValue: 'string',
      selectionOperation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowControlTaskRequestTarget extends $tea.Model {
  /**
   * @remarks
   * The type of the exposure.
   * 
   * @example
   * EXPOSE_PERCENT
   */
  type?: string;
  /**
   * @remarks
   * The number of exposures.
   * 
   * @example
   * 50
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowControlTaskResponseBodyResultMetaSelectionParams extends $tea.Model {
  /**
   * @remarks
   * The type of the filtering condition for the item selection rule.
   * 
   * @example
   * QUERY_PUB_TIME
   */
  selectType?: string;
  /**
   * @remarks
   * The number of filtering conditions for the item selection rule.
   * 
   * @example
   * 10000
   */
  selectValue?: string;
  /**
   * @remarks
   * The operation on the filtering condition for the item selection rule.
   * 
   * @example
   * OPERATOR_HIGHER
   */
  selectionOperation?: string;
  static names(): { [key: string]: string } {
    return {
      selectType: 'selectType',
      selectValue: 'selectValue',
      selectionOperation: 'selectionOperation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectType: 'string',
      selectValue: 'string',
      selectionOperation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowControlTaskResponseBodyResultMetaTarget extends $tea.Model {
  /**
   * @remarks
   * The type of the exposure.
   * 
   * @example
   * EXPOSE_PERCENT
   */
  type?: string;
  /**
   * @remarks
   * The number of exposures.
   * 
   * @example
   * 20
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowControlTaskResponseBodyResultMeta extends $tea.Model {
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * tst
   */
  description?: string;
  /**
   * @remarks
   * The end time. The value is a timestamp in seconds.
   * 
   * @example
   * 1656518399
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the metadata.
   * 
   * @example
   * FlowControlTask
   */
  metaType?: string;
  /**
   * @remarks
   * The IDs of scenes.
   * 
   * @example
   * 1,2,3
   */
  sceneIds?: string;
  /**
   * @remarks
   * The parameters specified for the item selection rule.
   */
  selectionParams?: ModifyFlowControlTaskResponseBodyResultMetaSelectionParams[];
  /**
   * @remarks
   * The start time. The value is a timestamp in seconds.
   * 
   * @example
   * 1640739600
   */
  startTime?: number;
  /**
   * @remarks
   * The settings for item exposure.
   */
  target?: ModifyFlowControlTaskResponseBodyResultMetaTarget;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * Active user test
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      endTime: 'endTime',
      metaType: 'metaType',
      sceneIds: 'sceneIds',
      selectionParams: 'selectionParams',
      startTime: 'startTime',
      target: 'target',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endTime: 'number',
      metaType: 'string',
      sceneIds: 'string',
      selectionParams: { 'type': 'array', 'itemType': ModifyFlowControlTaskResponseBodyResultMetaSelectionParams },
      startTime: 'number',
      target: ModifyFlowControlTaskResponseBodyResultMetaTarget,
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowControlTaskResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 1661506482
   */
  taskId?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task was modified.
   * 
   * @example
   * 2020-11-11T09:47:43.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The metadata.
   */
  meta?: ModifyFlowControlTaskResponseBodyResultMeta;
  /**
   * @remarks
   * The state of the task.
   * 
   * @example
   * DRAFT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: ModifyFlowControlTaskResponseBodyResultMeta,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The billing method. Valid values: PrePaid and PostPaid. Only the PrePaid billing method is supported.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the recommended item.
   * 
   * @example
   * airecpre
   */
  commodityCode?: string;
  /**
   * @remarks
   * The version of the dataset that provides online services.
   * 
   * @example
   * 20181206170353
   */
  dataSetVersion?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format.The time is displayed in UTC.
   * 
   * @example
   * 2019-01-06T16:00:00.000Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-06T06:14:01.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the instance was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-06T11:17:49.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The type of the industry. Valid values: content, item, news, video, and sns.
   * 
   * @example
   * news
   */
  industry?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * airec-cn-o400whm78004
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock mode of the instance. Valid values: Unlock, ManualLock, and LockByExpiration.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * Test instance
   */
  name?: string;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The state of the instance. Valid values: Initializing, Ready, and Running.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The type of the instance. Only the Standard edition is supported.
   * 
   * @example
   * Standard
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      dataSetVersion: 'dataSetVersion',
      expiredTime: 'expiredTime',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      industry: 'industry',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      name: 'name',
      regionId: 'regionId',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      dataSetVersion: 'string',
      expiredTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      industry: 'string',
      instanceId: 'string',
      lockMode: 'string',
      name: 'string',
      regionId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRankingModelResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 2020-11-11T09:47:43.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2020-11-11T09:47:43.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * __null__
   * 
   * @example
   * {}
   */
  meta?: { [key: string]: any };
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * test1234
   */
  rankingModelId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      rankingModelId: 'rankingModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rankingModelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 2020-04-27T06:38:28.000Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the rule was last modified.
   * 
   * @example
   * 2020-04-27T06:38:28.000Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 98493A14-D619-4E88-9F8D-108939817F9F
   */
  ruleId?: string;
  /**
   * @remarks
   * The specific information about the rule.
   * 
   * @example
   * xxx
   */
  ruleMeta?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether the rule is enabled. Valid values: true and false.
   * 
   * @example
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      ruleId: 'ruleId',
      ruleMeta: 'ruleMeta',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      ruleId: 'string',
      ruleMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySceneResponseBodyResult extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  sceneId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      sceneId: 'sceneId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      sceneId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineFilteringAlgorithmResponseBodyResultMetaExtInfo extends $tea.Model {
  /**
   * @example
   * ,
   */
  itemSeparator?: string;
  /**
   * @example
   * :
   */
  kvSeparator?: string;
  static names(): { [key: string]: string } {
    return {
      itemSeparator: 'itemSeparator',
      kvSeparator: 'kvSeparator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemSeparator: 'string',
      kvSeparator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineFilteringAlgorithmResponseBodyResultMetaThreshold extends $tea.Model {
  /**
   * @example
   * 1
   */
  indexLossThreshold?: number;
  /**
   * @example
   * 1
   */
  indexSizeThreshold?: number;
  /**
   * @example
   * 1
   */
  sourceDataRecordThreshold?: number;
  /**
   * @example
   * 1
   */
  sourceDataSizeThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      indexLossThreshold: 'indexLossThreshold',
      indexSizeThreshold: 'indexSizeThreshold',
      sourceDataRecordThreshold: 'sourceDataRecordThreshold',
      sourceDataSizeThreshold: 'sourceDataSizeThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexLossThreshold: 'number',
      indexSizeThreshold: 'number',
      sourceDataRecordThreshold: 'number',
      sourceDataSizeThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineFilteringAlgorithmResponseBodyResultMeta extends $tea.Model {
  /**
   * @example
   * test
   */
  algorithmName?: string;
  /**
   * @example
   * 1_2
   */
  category?: string;
  /**
   * @example
   * 244
   */
  clusterId?: string;
  /**
   * @example
   * * * 24 7 0
   */
  cron?: string;
  cronEnabled?: boolean;
  /**
   * @example
   * test
   */
  description?: string;
  extInfo?: OfflineFilteringAlgorithmResponseBodyResultMetaExtInfo;
  /**
   * @example
   * metaType
   */
  metaType?: string;
  /**
   * @example
   * test
   */
  projectName?: string;
  /**
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @example
   * taskId
   */
  taskId?: string;
  threshold?: OfflineFilteringAlgorithmResponseBodyResultMetaThreshold;
  /**
   * @example
   * ODPS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'algorithmName',
      category: 'category',
      clusterId: 'clusterId',
      cron: 'cron',
      cronEnabled: 'cronEnabled',
      description: 'description',
      extInfo: 'extInfo',
      metaType: 'metaType',
      projectName: 'projectName',
      tableName: 'tableName',
      taskId: 'taskId',
      threshold: 'threshold',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      category: 'string',
      clusterId: 'string',
      cron: 'string',
      cronEnabled: 'boolean',
      description: 'string',
      extInfo: OfflineFilteringAlgorithmResponseBodyResultMetaExtInfo,
      metaType: 'string',
      projectName: 'string',
      tableName: 'string',
      taskId: 'string',
      threshold: OfflineFilteringAlgorithmResponseBodyResultMetaThreshold,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineFilteringAlgorithmResponseBodyResult extends $tea.Model {
  /**
   * @example
   * abc
   */
  algorithmId?: string;
  /**
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2018-12-07T02:24:26.000Z
   */
  gmtModified?: string;
  meta?: OfflineFilteringAlgorithmResponseBodyResultMeta;
  /**
   * @example
   * Init
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'algorithmId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      meta: 'meta',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      meta: OfflineFilteringAlgorithmResponseBodyResultMeta,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRuleResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 98493A14-D619-4E88-9F8D-108939817F9F
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'ruleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushColdStartDocumentRequestBody extends $tea.Model {
  /**
   * @example
   * add
   */
  cmd?: string;
  /**
   * @example
   * userId
   */
  fields?: any;
  static names(): { [key: string]: string } {
    return {
      cmd: 'cmd',
      fields: 'fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      fields: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecommendResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The ID of the device.
   * 
   * @example
   * 0
   */
  flowWeight?: number;
  /**
   * @remarks
   * The returned results.
   * 
   * @example
   * 123
   */
  itemId?: string;
  /**
   * @remarks
   * The ID of the recommended item.
   * 
   * @example
   * item
   */
  itemType?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * xxx
   */
  matchInfo?: string;
  /**
   * @remarks
   * The event tracking ID. This parameter is uploaded together with user behaviors on the recommended item. In this case, the value of this parameter is ali.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The string for filtering during recommendation.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * The status of the execution.
   * 
   * @example
   * ali
   */
  traceId?: string;
  /**
   * @remarks
   * Specifies whether to perform personalized ranking based on the user IDs in the filtering and ranking phases.
   * 
   * @example
   * "1007.62381.131491.100200300000000:bcb946ed-3f09-4e9b-bf4a-c19862f42231:792783::0:s101:::15:content___130788_stall:item:i2i_common_common:0.0205279946753756:null:null:1673258031504::context__recall_index=156,context__hour=17,context__trigger_num=2::C7EF99C9-6C55-5D45-A8D5-0754082E9DCF:hot_common,i2i_common_common,i2i_swing_common,hot_full:::::"
   */
  traceInfo?: string;
  /**
   * @remarks
   * The weight of the recommended item.
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      flowWeight: 'flowWeight',
      itemId: 'itemId',
      itemType: 'itemType',
      matchInfo: 'matchInfo',
      message: 'message',
      position: 'position',
      traceId: 'traceId',
      traceInfo: 'traceInfo',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowWeight: 'number',
      itemId: 'string',
      itemType: 'string',
      matchInfo: 'string',
      message: 'string',
      position: 'number',
      traceId: 'string',
      traceInfo: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDataSetResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 1544112000000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1544112000000
   */
  gmtModified?: number;
  /**
   * @example
   * airec-cn-o400whm78004
   */
  instanceId?: string;
  /**
   * @example
   * Importing
   */
  state?: string;
  /**
   * @example
   * 20181023214546
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      instanceId: 'instanceId',
      state: 'state',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      instanceId: 'string',
      state: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentBasicInfoResponseBodyResultAlgorithmsConfig extends $tea.Model {
  /**
   * @remarks
   * The default value of the algorithm configuration item.
   * 
   * @example
   * true
   */
  defaultValue?: string;
  /**
   * @remarks
   * The custom value of the algorithm configuration item.
   * 
   * @example
   * 400
   */
  experimentValue?: string;
  /**
   * @remarks
   * The key of the algorithm configuration item.
   * 
   * @example
   * I2I
   */
  key?: string;
  /**
   * @remarks
   * The name of the algorithm configuration item.
   * 
   * @example
   * I2I filtering algorithm
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      experimentValue: 'experimentValue',
      key: 'key',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      experimentValue: 'string',
      key: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentBasicInfoResponseBodyResultAlgorithms extends $tea.Model {
  /**
   * @remarks
   * The category of the algorithm.
   * 
   * @example
   * 2
   */
  category?: string;
  /**
   * @remarks
   * The information about the child configuration item.
   */
  config?: UpdateExperimentBasicInfoResponseBodyResultAlgorithmsConfig[];
  /**
   * @remarks
   * The default value of the algorithm.
   * 
   * @example
   * 400
   */
  defaultValue?: string;
  /**
   * @remarks
   * The custom value of the algorithm.
   * 
   * @example
   * 400
   */
  experimentValue?: string;
  /**
   * @remarks
   * Indicates whether child configuration items exist. Valid values: true and false.
   * 
   * @example
   * false
   */
  hasConfig?: boolean;
  /**
   * @remarks
   * The key of the algorithm.
   * 
   * @example
   * I2I
   */
  key?: string;
  /**
   * @remarks
   * The name of the experiment.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The type of the algorithm.
   * 
   * @example
   * SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      config: 'config',
      defaultValue: 'defaultValue',
      experimentValue: 'experimentValue',
      hasConfig: 'hasConfig',
      key: 'key',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      config: { 'type': 'array', 'itemType': UpdateExperimentBasicInfoResponseBodyResultAlgorithmsConfig },
      defaultValue: 'string',
      experimentValue: 'string',
      hasConfig: 'boolean',
      key: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentBasicInfoResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The parameters of the experiment.
   */
  algorithms?: UpdateExperimentBasicInfoResponseBodyResultAlgorithms[];
  /**
   * @remarks
   * Indicates whether the experiment uses default configurations.
   * 
   * @example
   * true
   */
  base?: boolean;
  /**
   * @remarks
   * The traffic buckets.
   */
  buckets?: string[];
  /**
   * @remarks
   * The description of the experiment.
   * 
   * @example
   * demo1
   */
  description?: string;
  /**
   * @remarks
   * The experiment ID.
   * 
   * @example
   * 12345
   */
  experimentId?: string;
  /**
   * @remarks
   * The name of the experiment.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The time when the experiment was unpublished.
   * 
   * @example
   * 2020-11-11T09:47:43.000Z
   */
  offlineTime?: string;
  /**
   * @remarks
   * The time when the experiment was published.
   * 
   * @example
   * 2020-11-11T09:47:43.000Z
   */
  onlineTime?: string;
  /**
   * @remarks
   * The status of the experiment.
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithms: 'algorithms',
      base: 'base',
      buckets: 'buckets',
      description: 'description',
      experimentId: 'experimentId',
      name: 'name',
      offlineTime: 'offlineTime',
      onlineTime: 'onlineTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithms: { 'type': 'array', 'itemType': UpdateExperimentBasicInfoResponseBodyResultAlgorithms },
      base: 'boolean',
      buckets: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      experimentId: 'string',
      name: 'string',
      offlineTime: 'string',
      onlineTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentConfigResponseBodyResultAlgorithmsConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  defaultValue?: string;
  /**
   * @example
   * true
   */
  experimentValue?: string;
  /**
   * @example
   * I2I
   */
  key?: string;
  /**
   * @example
   * xxx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      experimentValue: 'experimentValue',
      key: 'key',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      experimentValue: 'string',
      key: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentConfigResponseBodyResultAlgorithms extends $tea.Model {
  /**
   * @example
   * RECALL
   */
  category?: string;
  config?: UpdateExperimentConfigResponseBodyResultAlgorithmsConfig[];
  /**
   * @example
   * 400
   */
  defaultValue?: string;
  /**
   * @example
   * 300
   */
  experimentValue?: string;
  /**
   * @example
   * true
   */
  hasConfig?: boolean;
  /**
   * @example
   * I2I
   */
  key?: string;
  /**
   * @example
   * xxx
   */
  name?: string;
  /**
   * @example
   * SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      config: 'config',
      defaultValue: 'defaultValue',
      experimentValue: 'experimentValue',
      hasConfig: 'hasConfig',
      key: 'key',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      config: { 'type': 'array', 'itemType': UpdateExperimentConfigResponseBodyResultAlgorithmsConfig },
      defaultValue: 'string',
      experimentValue: 'string',
      hasConfig: 'boolean',
      key: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentConfigResponseBodyResult extends $tea.Model {
  algorithms?: UpdateExperimentConfigResponseBodyResultAlgorithms[];
  /**
   * @example
   * true
   */
  base?: boolean;
  buckets?: string[];
  /**
   * @example
   * demo1
   */
  description?: string;
  /**
   * @example
   * xxx
   */
  experimentId?: string;
  name?: string;
  /**
   * @example
   * 2020-12-07T06:47:30.000Z
   */
  offlineTime?: string;
  /**
   * @example
   * 2020-12-07T06:47:30.000Z
   */
  onlineTime?: string;
  /**
   * @example
   * Online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithms: 'algorithms',
      base: 'base',
      buckets: 'buckets',
      description: 'description',
      experimentId: 'experimentId',
      name: 'name',
      offlineTime: 'offlineTime',
      onlineTime: 'onlineTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithms: { 'type': 'array', 'itemType': UpdateExperimentConfigResponseBodyResultAlgorithms },
      base: 'boolean',
      buckets: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      experimentId: 'string',
      name: 'string',
      offlineTime: 'string',
      onlineTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentStatusResponseBodyResultAlgorithmsConfig extends $tea.Model {
  /**
   * @remarks
   * The default value of the algorithm. If you set key to i2i, hot, or new, the value of this parameter is true or false. If you set key to mtorder, the value of this parameter is a list of filtering algorithms ranked by priority.
   * 
   * @example
   * xxx
   */
  defaultValue?: string;
  /**
   * @remarks
   * The custom value of the algorithm.
   * 
   * @example
   * xxx
   */
  experimentValue?: string;
  /**
   * @remarks
   * The algorithm key. Valid values: i2i: the I2I filtering algorithm. u2x2i: the U2X2I filtering algorithm. hot: the filtering algorithm for popular items. new: the filtering algorithm for new items. embedding: the vector filtering algorithm. mtorder: the priority of the filtering algorithm. rankservice: the ranking service.
   * 
   * @example
   * hot
   */
  key?: string;
  /**
   * @remarks
   * The algorithm name. (Note: If you use the default algorithm, the console obtains the algorithm name from Medusa. If you customize an algorithm for the experiment, the algorithm name is directly returned.)
   * 
   * @example
   * xxx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      experimentValue: 'experimentValue',
      key: 'key',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      experimentValue: 'string',
      key: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentStatusResponseBodyResultAlgorithms extends $tea.Model {
  /**
   * @remarks
   * The algorithm category. Valid values: RECALL and RANK.
   * 
   * @example
   * RECALL
   */
  category?: string;
  /**
   * @remarks
   * The experiment configurations.
   */
  config?: UpdateExperimentStatusResponseBodyResultAlgorithmsConfig[];
  /**
   * @remarks
   * The default value of the algorithm configuration item.
   * 
   * @example
   * swing
   */
  defaultValue?: string;
  /**
   * @remarks
   * The custom value of the algorithm configuration item.
   * 
   * @example
   * xxx
   */
  experimentValue?: string;
  /**
   * @remarks
   * Indicates whether child configuration items exist. Valid values: true and false.
   * 
   * @example
   * false
   */
  hasConfig?: boolean;
  /**
   * @remarks
   * The algorithm key. Valid values: i2i: the I2I filtering algorithm. u2x2i: the U2X2I filtering algorithm. hot: the filtering algorithm for popular items. new: the filtering algorithm for new items. embedding: the vector filtering algorithm. mtorder: the priority of the filtering algorithm. rankservice: the ranking service.
   * 
   * @example
   * hot
   */
  key?: string;
  /**
   * @remarks
   * The algorithm name. (Note: If you use the default algorithm, the console obtains the algorithm name from Medusa. If you customize an algorithm for the experiment, the algorithm name is directly returned.)
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The algorithm type. Valid values: SYSTEM and CUSTOM.
   * 
   * @example
   * SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      config: 'config',
      defaultValue: 'defaultValue',
      experimentValue: 'experimentValue',
      hasConfig: 'hasConfig',
      key: 'key',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      config: { 'type': 'array', 'itemType': UpdateExperimentStatusResponseBodyResultAlgorithmsConfig },
      defaultValue: 'string',
      experimentValue: 'string',
      hasConfig: 'boolean',
      key: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentStatusResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The algorithm configurations.
   */
  algorithms?: UpdateExperimentStatusResponseBodyResultAlgorithms[];
  /**
   * @remarks
   * Indicates whether the default configurations are used for the experiment.
   * 
   * @example
   * true
   */
  base?: boolean;
  /**
   * @remarks
   * The buckets. This parameter takes effect only when the experiment is published.
   */
  buckets?: string[];
  /**
   * @remarks
   * The remarks of the experiment.
   * 
   * @example
   * xxx
   */
  description?: string;
  /**
   * @remarks
   * The experiment ID.
   * 
   * @example
   * 123
   */
  experimentId?: string;
  /**
   * @remarks
   * The experiment name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The time when the experiment was unpublished.
   * 
   * @example
   * 2020-11-11T09:47:43.000Z
   */
  offlineTime?: string;
  /**
   * @remarks
   * The time when the experiment was published.
   * 
   * @example
   * 2020-11-11T09:47:43.000Z
   */
  onlineTime?: string;
  /**
   * @remarks
   * The experiment state. Valid values: init, online, finish, and offline.
   * 
   * @example
   * init
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithms: 'algorithms',
      base: 'base',
      buckets: 'buckets',
      description: 'description',
      experimentId: 'experimentId',
      name: 'name',
      offlineTime: 'offlineTime',
      onlineTime: 'onlineTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithms: { 'type': 'array', 'itemType': UpdateExperimentStatusResponseBodyResultAlgorithms },
      base: 'boolean',
      buckets: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      experimentId: 'string',
      name: 'string',
      offlineTime: 'string',
      onlineTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * airec-cn-o400whm78004
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("airec", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Uses a dataset of a specified version of a specified instance to provide online services.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachDatasetResponse
   */
  async attachDatasetWithOptions(instanceId: string, versionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AttachDatasetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "AttachDataset",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/dataSets/${OpenApiUtil.getEncodeParam(versionId)}/actions/current`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AttachDatasetResponse>(await this.callApi(params, req, runtime), new AttachDatasetResponse({}));
  }

  /**
   * Uses a dataset of a specified version of a specified instance to provide online services.
   * @returns AttachDatasetResponse
   */
  async attachDataset(instanceId: string, versionId: string): Promise<AttachDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachDatasetWithOptions(instanceId, versionId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachIndexVersionResponse
   */
  async attachIndexVersionWithOptions(instanceId: string, algorithmId: string, versionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AttachIndexVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "AttachIndexVersion",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/filtering-algorithms/${OpenApiUtil.getEncodeParam(algorithmId)}/index-versions/${OpenApiUtil.getEncodeParam(versionId)}/actions/attach`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AttachIndexVersionResponse>(await this.callApi(params, req, runtime), new AttachIndexVersionResponse({}));
  }

  /**
   * @returns AttachIndexVersionResponse
   */
  async attachIndexVersion(instanceId: string, algorithmId: string, versionId: string): Promise<AttachIndexVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachIndexVersionWithOptions(instanceId, algorithmId, versionId, headers, runtime);
  }

  /**
   * Checks the network connectivity of a ranking model.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckRankingModelReachableResponse
   */
  async checkRankingModelReachableWithOptions(instanceId: string, rankingModelId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckRankingModelReachableResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CheckRankingModelReachable",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-models/${OpenApiUtil.getEncodeParam(rankingModelId)}/actions/check-connectivity`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckRankingModelReachableResponse>(await this.callApi(params, req, runtime), new CheckRankingModelReachableResponse({}));
  }

  /**
   * Checks the network connectivity of a ranking model.
   * @returns CheckRankingModelReachableResponse
   */
  async checkRankingModelReachable(instanceId: string, rankingModelId: string): Promise<CheckRankingModelReachableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkRankingModelReachableWithOptions(instanceId, rankingModelId, headers, runtime);
  }

  /**
   * Clones an experiment.
   * 
   * @param request - CloneExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneExperimentResponse
   */
  async cloneExperimentWithOptions(instanceId: string, sceneId: string, experimentId: string, request: CloneExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloneExperimentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloneExperiment",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/experiments/${OpenApiUtil.getEncodeParam(experimentId)}/actions/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CloneExperimentResponse>(await this.callApi(params, req, runtime), new CloneExperimentResponse({}));
  }

  /**
   * Clones an experiment.
   * 
   * @param request - CloneExperimentRequest
   * @returns CloneExperimentResponse
   */
  async cloneExperiment(instanceId: string, sceneId: string, experimentId: string, request: CloneExperimentRequest): Promise<CloneExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneExperimentWithOptions(instanceId, sceneId, experimentId, request, headers, runtime);
  }

  /**
   * Clones a sample.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneSampleResponse
   */
  async cloneSampleWithOptions(instanceId: string, sampleId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloneSampleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CloneSample",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/samples/${OpenApiUtil.getEncodeParam(sampleId)}/actions/clone`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CloneSampleResponse>(await this.callApi(params, req, runtime), new CloneSampleResponse({}));
  }

  /**
   * Clones a sample.
   * @returns CloneSampleResponse
   */
  async cloneSample(instanceId: string, sampleId: string): Promise<CloneSampleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneSampleWithOptions(instanceId, sampleId, headers, runtime);
  }

  /**
   * 该接口用于获取指定冷启动实例的排序结果。
   * 
   * @param request - ColdStartRankRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ColdStartRankResponse
   */
  async coldStartRankWithOptions(instanceId: string, request: ColdStartRankRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ColdStartRankResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.features)) {
      query["features"] = request.features;
    }

    if (!Util.isUnset(request.imei)) {
      query["imei"] = request.imei;
    }

    if (!Util.isUnset(request.items)) {
      query["items"] = request.items;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["sceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.userId)) {
      query["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ColdStartRank",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/cold-start/${OpenApiUtil.getEncodeParam(instanceId)}/actions/rank`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ColdStartRankResponse>(await this.callApi(params, req, runtime), new ColdStartRankResponse({}));
  }

  /**
   * 该接口用于获取指定冷启动实例的排序结果。
   * 
   * @param request - ColdStartRankRequest
   * @returns ColdStartRankResponse
   */
  async coldStartRank(instanceId: string, request: ColdStartRankRequest): Promise<ColdStartRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.coldStartRankWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 创建自定义分析任务
   * 
   * @param request - CreateCustomAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomAnalysisTaskResponse
   */
  async createCustomAnalysisTaskWithOptions(instanceId: string, request: CreateCustomAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateCustomAnalysisTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomAnalysisTask",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/dashboard/custom-analysis-tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomAnalysisTaskResponse>(await this.callApi(params, req, runtime), new CreateCustomAnalysisTaskResponse({}));
  }

  /**
   * 创建自定义分析任务
   * 
   * @param request - CreateCustomAnalysisTaskRequest
   * @returns CreateCustomAnalysisTaskResponse
   */
  async createCustomAnalysisTask(instanceId: string, request: CreateCustomAnalysisTaskRequest): Promise<CreateCustomAnalysisTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCustomAnalysisTaskWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 创建自定义样本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomSampleResponse
   */
  async createCustomSampleWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateCustomSampleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomSample",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/samples`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomSampleResponse>(await this.callApi(params, req, runtime), new CreateCustomSampleResponse({}));
  }

  /**
   * 创建自定义样本
   * @returns CreateCustomSampleResponse
   */
  async createCustomSample(instanceId: string): Promise<CreateCustomSampleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCustomSampleWithOptions(instanceId, headers, runtime);
  }

  /**
   * 创建数据诊断任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataDiagnoseTaskResponse
   */
  async createDataDiagnoseTaskWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDataDiagnoseTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateDataDiagnoseTask",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-diagnose-task`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDataDiagnoseTaskResponse>(await this.callApi(params, req, runtime), new CreateDataDiagnoseTaskResponse({}));
  }

  /**
   * 创建数据诊断任务
   * @returns CreateDataDiagnoseTaskResponse
   */
  async createDataDiagnoseTask(instanceId: string): Promise<CreateDataDiagnoseTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataDiagnoseTaskWithOptions(instanceId, headers, runtime);
  }

  /**
   * Creates a data source.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExtraDataSourceResponse
   */
  async createExtraDataSourceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateExtraDataSourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateExtraDataSource",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/extra-data-sources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateExtraDataSourceResponse>(await this.callApi(params, req, runtime), new CreateExtraDataSourceResponse({}));
  }

  /**
   * Creates a data source.
   * @returns CreateExtraDataSourceResponse
   */
  async createExtraDataSource(instanceId: string): Promise<CreateExtraDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExtraDataSourceWithOptions(instanceId, headers, runtime);
  }

  /**
   * The time when the filtering table was created.
   * 
   * @param request - CreateFilteringAlgorithmRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFilteringAlgorithmResponse
   */
  async createFilteringAlgorithmWithOptions(instanceId: string, request: CreateFilteringAlgorithmRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFilteringAlgorithmResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFilteringAlgorithm",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/filtering-algorithms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFilteringAlgorithmResponse>(await this.callApi(params, req, runtime), new CreateFilteringAlgorithmResponse({}));
  }

  /**
   * The time when the filtering table was created.
   * 
   * @param request - CreateFilteringAlgorithmRequest
   * @returns CreateFilteringAlgorithmResponse
   */
  async createFilteringAlgorithm(instanceId: string, request: CreateFilteringAlgorithmRequest): Promise<CreateFilteringAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFilteringAlgorithmWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates a throttling task.
   * 
   * @param request - CreateFlowControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowControlTaskResponse
   */
  async createFlowControlTaskWithOptions(instanceId: string, request: CreateFlowControlTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFlowControlTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFlowControlTask",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/flowControlTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFlowControlTaskResponse>(await this.callApi(params, req, runtime), new CreateFlowControlTaskResponse({}));
  }

  /**
   * Creates a throttling task.
   * 
   * @param request - CreateFlowControlTaskRequest
   * @returns CreateFlowControlTaskResponse
   */
  async createFlowControlTask(instanceId: string, request: CreateFlowControlTaskRequest): Promise<CreateFlowControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFlowControlTaskWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates an Artificial Intelligence Recommendation (AIRec) instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  /**
   * Creates an Artificial Intelligence Recommendation (AIRec) instance.
   * @returns CreateInstanceResponse
   */
  async createInstance(): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(headers, runtime);
  }

  /**
   * @param request - CreateRankingModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRankingModelResponse
   */
  async createRankingModelWithOptions(instanceId: string, request: CreateRankingModelRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRankingModelResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRankingModel",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-models`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRankingModelResponse>(await this.callApi(params, req, runtime), new CreateRankingModelResponse({}));
  }

  /**
   * @param request - CreateRankingModelRequest
   * @returns CreateRankingModelResponse
   */
  async createRankingModel(instanceId: string, request: CreateRankingModelRequest): Promise<CreateRankingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRankingModelWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 创建排序模型模板配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRankingModelTemplateResponse
   */
  async createRankingModelTemplateWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRankingModelTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateRankingModelTemplate",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-model-templates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRankingModelTemplateResponse>(await this.callApi(params, req, runtime), new CreateRankingModelTemplateResponse({}));
  }

  /**
   * 创建排序模型模板配置
   * @returns CreateRankingModelTemplateResponse
   */
  async createRankingModelTemplate(instanceId: string): Promise<CreateRankingModelTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRankingModelTemplateWithOptions(instanceId, headers, runtime);
  }

  /**
   * 创建排序服务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRankingSystemResponse
   */
  async createRankingSystemWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRankingSystemResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateRankingSystem",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-systems`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRankingSystemResponse>(await this.callApi(params, req, runtime), new CreateRankingSystemResponse({}));
  }

  /**
   * 创建排序服务
   * @returns CreateRankingSystemResponse
   */
  async createRankingSystem(instanceId: string): Promise<CreateRankingSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRankingSystemWithOptions(instanceId, headers, runtime);
  }

  /**
   * Creates a rule.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRuleResponse
   */
  async createRuleWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateRule",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/rules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRuleResponse>(await this.callApi(params, req, runtime), new CreateRuleResponse({}));
  }

  /**
   * Creates a rule.
   * @returns CreateRuleResponse
   */
  async createRule(instanceId: string): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRuleWithOptions(instanceId, headers, runtime);
  }

  /**
   * 创建样本格式化配置
   * 
   * @param request - CreateSampleFormatConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSampleFormatConfigResponse
   */
  async createSampleFormatConfigWithOptions(instanceId: string, sampleId: string, request: CreateSampleFormatConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSampleFormatConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSampleFormatConfig",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/samples/${OpenApiUtil.getEncodeParam(sampleId)}/format-configs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSampleFormatConfigResponse>(await this.callApi(params, req, runtime), new CreateSampleFormatConfigResponse({}));
  }

  /**
   * 创建样本格式化配置
   * 
   * @param request - CreateSampleFormatConfigRequest
   * @returns CreateSampleFormatConfigResponse
   */
  async createSampleFormatConfig(instanceId: string, sampleId: string, request: CreateSampleFormatConfigRequest): Promise<CreateSampleFormatConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSampleFormatConfigWithOptions(instanceId, sampleId, request, headers, runtime);
  }

  /**
   * Verifies the information that you specified for creating a scene.
   * 
   * @remarks
   * We recommend that you do not call an API operation to manage scenes. We recommend that you go to the Scenario Building page in the Artificial Intelligence Recommendation (AIRec) console to manage scenes.
   * 
   * @param request - CreateSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSceneResponse
   */
  async createSceneWithOptions(instanceId: string, request: CreateSceneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSceneResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateScene",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSceneResponse>(await this.callApi(params, req, runtime), new CreateSceneResponse({}));
  }

  /**
   * Verifies the information that you specified for creating a scene.
   * 
   * @remarks
   * We recommend that you do not call an API operation to manage scenes. We recommend that you go to the Scenario Building page in the Artificial Intelligence Recommendation (AIRec) console to manage scenes.
   * 
   * @param request - CreateSceneRequest
   * @returns CreateSceneResponse
   */
  async createScene(instanceId: string, request: CreateSceneRequest): Promise<CreateSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSceneWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 创建友盟授权token
   * 
   * @param request - CreateUmengTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUmengTokenResponse
   */
  async createUmengTokenWithOptions(request: CreateUmengTokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateUmengTokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      query["code"] = request.code;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUmengToken",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/umeng/token`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateUmengTokenResponse>(await this.callApi(params, req, runtime), new CreateUmengTokenResponse({}));
  }

  /**
   * 创建友盟授权token
   * 
   * @param request - CreateUmengTokenRequest
   * @returns CreateUmengTokenResponse
   */
  async createUmengToken(request: CreateUmengTokenRequest): Promise<CreateUmengTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUmengTokenWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information of a ranking model.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DecribeRankingModelResponse
   */
  async decribeRankingModelWithOptions(instanceId: string, rankingModelId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DecribeRankingModelResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DecribeRankingModel",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-models/${OpenApiUtil.getEncodeParam(rankingModelId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DecribeRankingModelResponse>(await this.callApi(params, req, runtime), new DecribeRankingModelResponse({}));
  }

  /**
   * Queries the information of a ranking model.
   * @returns DecribeRankingModelResponse
   */
  async decribeRankingModel(instanceId: string, rankingModelId: string): Promise<DecribeRankingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.decribeRankingModelWithOptions(instanceId, rankingModelId, headers, runtime);
  }

  /**
   * Deletes a dataset of a specified version for an instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSetResponse
   */
  async deleteDataSetWithOptions(instanceId: string, versionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDataSetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataSet",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/dataSets/${OpenApiUtil.getEncodeParam(versionId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataSetResponse>(await this.callApi(params, req, runtime), new DeleteDataSetResponse({}));
  }

  /**
   * Deletes a dataset of a specified version for an instance.
   * @returns DeleteDataSetResponse
   */
  async deleteDataSet(instanceId: string, versionId: string): Promise<DeleteDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataSetWithOptions(instanceId, versionId, headers, runtime);
  }

  /**
   * The ID of the test.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentResponse
   */
  async deleteExperimentWithOptions(instanceId: string, sceneId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteExperiment",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/experiments/${OpenApiUtil.getEncodeParam(experimentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteExperimentResponse>(await this.callApi(params, req, runtime), new DeleteExperimentResponse({}));
  }

  /**
   * The ID of the test.
   * @returns DeleteExperimentResponse
   */
  async deleteExperiment(instanceId: string, sceneId: string, experimentId: string): Promise<DeleteExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentWithOptions(instanceId, sceneId, experimentId, headers, runtime);
  }

  /**
   * 删除特征、样本等表扩展数据源
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExtraDataSourceResponse
   */
  async deleteExtraDataSourceWithOptions(instanceId: string, type: string, dataSourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteExtraDataSourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteExtraDataSource",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/extra-data-sources/${OpenApiUtil.getEncodeParam(type)}/${OpenApiUtil.getEncodeParam(dataSourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteExtraDataSourceResponse>(await this.callApi(params, req, runtime), new DeleteExtraDataSourceResponse({}));
  }

  /**
   * 删除特征、样本等表扩展数据源
   * @returns DeleteExtraDataSourceResponse
   */
  async deleteExtraDataSource(instanceId: string, type: string, dataSourceId: string): Promise<DeleteExtraDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExtraDataSourceWithOptions(instanceId, type, dataSourceId, headers, runtime);
  }

  /**
   * Deletes the configurations of a specified filtering table and the information about the related index table.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFilteringAlgorithmResponse
   */
  async deleteFilteringAlgorithmWithOptions(instanceId: string, algorithmId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFilteringAlgorithmResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFilteringAlgorithm",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/filtering-algorithms/${OpenApiUtil.getEncodeParam(algorithmId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFilteringAlgorithmResponse>(await this.callApi(params, req, runtime), new DeleteFilteringAlgorithmResponse({}));
  }

  /**
   * Deletes the configurations of a specified filtering table and the information about the related index table.
   * @returns DeleteFilteringAlgorithmResponse
   */
  async deleteFilteringAlgorithm(instanceId: string, algorithmId: string): Promise<DeleteFilteringAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFilteringAlgorithmWithOptions(instanceId, algorithmId, headers, runtime);
  }

  /**
   * Deletes a throttling task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowControlTaskResponse
   */
  async deleteFlowControlTaskWithOptions(instanceId: string, taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFlowControlTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFlowControlTask",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/flowControlTasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFlowControlTaskResponse>(await this.callApi(params, req, runtime), new DeleteFlowControlTaskResponse({}));
  }

  /**
   * Deletes a throttling task.
   * @returns DeleteFlowControlTaskResponse
   */
  async deleteFlowControlTask(instanceId: string, taskId: string): Promise<DeleteFlowControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFlowControlTaskWithOptions(instanceId, taskId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRankingModelResponse
   */
  async deleteRankingModelWithOptions(instanceId: string, rankingModelId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRankingModelResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteRankingModel",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-models/${OpenApiUtil.getEncodeParam(rankingModelId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRankingModelResponse>(await this.callApi(params, req, runtime), new DeleteRankingModelResponse({}));
  }

  /**
   * @returns DeleteRankingModelResponse
   */
  async deleteRankingModel(instanceId: string, rankingModelId: string): Promise<DeleteRankingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRankingModelWithOptions(instanceId, rankingModelId, headers, runtime);
  }

  /**
   * 删除排序模型模板
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRankingModelTemplateResponse
   */
  async deleteRankingModelTemplateWithOptions(instanceId: string, templateId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRankingModelTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteRankingModelTemplate",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-model-templates/${OpenApiUtil.getEncodeParam(templateId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRankingModelTemplateResponse>(await this.callApi(params, req, runtime), new DeleteRankingModelTemplateResponse({}));
  }

  /**
   * 删除排序模型模板
   * @returns DeleteRankingModelTemplateResponse
   */
  async deleteRankingModelTemplate(instanceId: string, templateId: string): Promise<DeleteRankingModelTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRankingModelTemplateWithOptions(instanceId, templateId, headers, runtime);
  }

  /**
   * 删除排序模型版本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRankingModelVersionResponse
   */
  async deleteRankingModelVersionWithOptions(instanceId: string, versionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRankingModelVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteRankingModelVersion",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-model-versions/${OpenApiUtil.getEncodeParam(versionId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRankingModelVersionResponse>(await this.callApi(params, req, runtime), new DeleteRankingModelVersionResponse({}));
  }

  /**
   * 删除排序模型版本
   * @returns DeleteRankingModelVersionResponse
   */
  async deleteRankingModelVersion(instanceId: string, versionId: string): Promise<DeleteRankingModelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRankingModelVersionWithOptions(instanceId, versionId, headers, runtime);
  }

  /**
   * 删除某个排序服务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRankingSystemResponse
   */
  async deleteRankingSystemWithOptions(instanceId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRankingSystemResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteRankingSystem",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-systems/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRankingSystemResponse>(await this.callApi(params, req, runtime), new DeleteRankingSystemResponse({}));
  }

  /**
   * 删除某个排序服务
   * @returns DeleteRankingSystemResponse
   */
  async deleteRankingSystem(instanceId: string, name: string): Promise<DeleteRankingSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRankingSystemWithOptions(instanceId, name, headers, runtime);
  }

  /**
   * 删除样本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSampleResponse
   */
  async deleteSampleWithOptions(instanceId: string, sampleId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSampleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteSample",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/samples/${OpenApiUtil.getEncodeParam(sampleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSampleResponse>(await this.callApi(params, req, runtime), new DeleteSampleResponse({}));
  }

  /**
   * 删除样本
   * @returns DeleteSampleResponse
   */
  async deleteSample(instanceId: string, sampleId: string): Promise<DeleteSampleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSampleWithOptions(instanceId, sampleId, headers, runtime);
  }

  /**
   * Deletes a scene.
   * 
   * @remarks
   * We recommend that you do not call an API operation to manage scenes. We recommend that you go to the Scenario Building page in the Artificial Intelligence Recommendation (AIRec) console to manage scenes.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSceneResponse
   */
  async deleteSceneWithOptions(instanceId: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSceneResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteScene",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSceneResponse>(await this.callApi(params, req, runtime), new DeleteSceneResponse({}));
  }

  /**
   * Deletes a scene.
   * 
   * @remarks
   * We recommend that you do not call an API operation to manage scenes. We recommend that you go to the Scenario Building page in the Artificial Intelligence Recommendation (AIRec) console to manage scenes.
   * @returns DeleteSceneResponse
   */
  async deleteScene(instanceId: string, sceneId: string): Promise<DeleteSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSceneWithOptions(instanceId, sceneId, headers, runtime);
  }

  /**
   * The ID of the instance.
   * 
   * @param request - DeployRankingSystemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployRankingSystemResponse
   */
  async deployRankingSystemWithOptions(instanceId: string, name: string, request: DeployRankingSystemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeployRankingSystemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeployRankingSystem",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-systems/${OpenApiUtil.getEncodeParam(name)}/actions/deploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeployRankingSystemResponse>(await this.callApi(params, req, runtime), new DeployRankingSystemResponse({}));
  }

  /**
   * The ID of the instance.
   * 
   * @param request - DeployRankingSystemRequest
   * @returns DeployRankingSystemResponse
   */
  async deployRankingSystem(instanceId: string, name: string, request: DeployRankingSystemRequest): Promise<DeployRankingSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployRankingSystemWithOptions(instanceId, name, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBaseExperimentResponse
   */
  async describeBaseExperimentWithOptions(instanceId: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeBaseExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeBaseExperiment",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/base-experiment`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeBaseExperimentResponse>(await this.callApi(params, req, runtime), new DescribeBaseExperimentResponse({}));
  }

  /**
   * @returns DescribeBaseExperimentResponse
   */
  async describeBaseExperiment(instanceId: string, sceneId: string): Promise<DescribeBaseExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeBaseExperimentWithOptions(instanceId, sceneId, headers, runtime);
  }

  /**
   * 查询自定义分析任务
   * 
   * @param request - DescribeCustomAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomAnalysisTaskResponse
   */
  async describeCustomAnalysisTaskWithOptions(instanceId: string, taskId: string, request: DescribeCustomAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeCustomAnalysisTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomAnalysisTask",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/dashboard/custom-analysis-tasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomAnalysisTaskResponse>(await this.callApi(params, req, runtime), new DescribeCustomAnalysisTaskResponse({}));
  }

  /**
   * 查询自定义分析任务
   * 
   * @param request - DescribeCustomAnalysisTaskRequest
   * @returns DescribeCustomAnalysisTaskResponse
   */
  async describeCustomAnalysisTask(instanceId: string, taskId: string, request: DescribeCustomAnalysisTaskRequest): Promise<DescribeCustomAnalysisTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeCustomAnalysisTaskWithOptions(instanceId, taskId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataSetMessageResponse
   */
  async describeDataSetMessageWithOptions(instanceId: string, versionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeDataSetMessageResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataSetMessage",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/dataSets/${OpenApiUtil.getEncodeParam(versionId)}/messages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataSetMessageResponse>(await this.callApi(params, req, runtime), new DescribeDataSetMessageResponse({}));
  }

  /**
   * @returns DescribeDataSetMessageResponse
   */
  async describeDataSetMessage(instanceId: string, versionId: string): Promise<DescribeDataSetMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDataSetMessageWithOptions(instanceId, versionId, headers, runtime);
  }

  /**
   * Queries the information of default algorithms.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefaultAlgorithmsResponse
   */
  async describeDefaultAlgorithmsWithOptions(instanceId: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeDefaultAlgorithmsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefaultAlgorithms",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/default-algorithms`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefaultAlgorithmsResponse>(await this.callApi(params, req, runtime), new DescribeDefaultAlgorithmsResponse({}));
  }

  /**
   * Queries the information of default algorithms.
   * @returns DescribeDefaultAlgorithmsResponse
   */
  async describeDefaultAlgorithms(instanceId: string, sceneId: string): Promise<DescribeDefaultAlgorithmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDefaultAlgorithmsWithOptions(instanceId, sceneId, headers, runtime);
  }

  /**
   * Queries the details about an experiment.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExperimentResponse
   */
  async describeExperimentWithOptions(instanceId: string, sceneId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeExperiment",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/experiments/${OpenApiUtil.getEncodeParam(experimentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeExperimentResponse>(await this.callApi(params, req, runtime), new DescribeExperimentResponse({}));
  }

  /**
   * Queries the details about an experiment.
   * @returns DescribeExperimentResponse
   */
  async describeExperiment(instanceId: string, sceneId: string, experimentId: string): Promise<DescribeExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeExperimentWithOptions(instanceId, sceneId, experimentId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExperimentEnvResponse
   */
  async describeExperimentEnvWithOptions(instanceId: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeExperimentEnvResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeExperimentEnv",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/experiment-env`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeExperimentEnvResponse>(await this.callApi(params, req, runtime), new DescribeExperimentEnvResponse({}));
  }

  /**
   * @returns DescribeExperimentEnvResponse
   */
  async describeExperimentEnv(instanceId: string, sceneId: string): Promise<DescribeExperimentEnvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeExperimentEnvWithOptions(instanceId, sceneId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExperimentEnvProgressResponse
   */
  async describeExperimentEnvProgressWithOptions(instanceId: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeExperimentEnvProgressResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeExperimentEnvProgress",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/experiment-progress`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeExperimentEnvProgressResponse>(await this.callApi(params, req, runtime), new DescribeExperimentEnvProgressResponse({}));
  }

  /**
   * @returns DescribeExperimentEnvProgressResponse
   */
  async describeExperimentEnvProgress(instanceId: string, sceneId: string): Promise<DescribeExperimentEnvProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeExperimentEnvProgressWithOptions(instanceId, sceneId, headers, runtime);
  }

  /**
   * The fluctuation threshold for the data entries in the source table.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFilteringAlgorithmResponse
   */
  async describeFilteringAlgorithmWithOptions(instanceId: string, algorithmId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeFilteringAlgorithmResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeFilteringAlgorithm",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/filtering-algorithms/${OpenApiUtil.getEncodeParam(algorithmId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeFilteringAlgorithmResponse>(await this.callApi(params, req, runtime), new DescribeFilteringAlgorithmResponse({}));
  }

  /**
   * The fluctuation threshold for the data entries in the source table.
   * @returns DescribeFilteringAlgorithmResponse
   */
  async describeFilteringAlgorithm(instanceId: string, algorithmId: string): Promise<DescribeFilteringAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFilteringAlgorithmWithOptions(instanceId, algorithmId, headers, runtime);
  }

  /**
   * Queries the details about an instance based on the instance ID.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstance",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceResponse>(await this.callApi(params, req, runtime), new DescribeInstanceResponse({}));
  }

  /**
   * Queries the details about an instance based on the instance ID.
   * @returns DescribeInstanceResponse
   */
  async describeInstance(instanceId: string): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLatestTaskResponse
   */
  async describeLatestTaskWithOptions(instanceId: string, algorithmId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeLatestTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeLatestTask",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/filtering-algorithms/${OpenApiUtil.getEncodeParam(algorithmId)}/tasks/latest`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeLatestTaskResponse>(await this.callApi(params, req, runtime), new DescribeLatestTaskResponse({}));
  }

  /**
   * @returns DescribeLatestTaskResponse
   */
  async describeLatestTask(instanceId: string, algorithmId: string): Promise<DescribeLatestTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeLatestTaskWithOptions(instanceId, algorithmId, headers, runtime);
  }

  /**
   * Queries the quotas of an instance based on a specified instance ID.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQuotaResponse
   */
  async describeQuotaWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeQuotaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeQuota",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/quota`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeQuotaResponse>(await this.callApi(params, req, runtime), new DescribeQuotaResponse({}));
  }

  /**
   * Queries the quotas of an instance based on a specified instance ID.
   * @returns DescribeQuotaResponse
   */
  async describeQuota(instanceId: string): Promise<DescribeQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQuotaWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries available Alibaba Cloud regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/configurations/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * Queries available Alibaba Cloud regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(request, headers, runtime);
  }

  /**
   * The ID of the instance.
   * 
   * @param request - DescribeRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleResponse
   */
  async describeRuleWithOptions(instanceId: string, ruleId: string, request: DescribeRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ruleType)) {
      query["ruleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["sceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRule",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/rules/${OpenApiUtil.getEncodeParam(ruleId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRuleResponse>(await this.callApi(params, req, runtime), new DescribeRuleResponse({}));
  }

  /**
   * The ID of the instance.
   * 
   * @param request - DescribeRuleRequest
   * @returns DescribeRuleResponse
   */
  async describeRule(instanceId: string, ruleId: string, request: DescribeRuleRequest): Promise<DescribeRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRuleWithOptions(instanceId, ruleId, request, headers, runtime);
  }

  /**
   * Queries the details about a specified scene.
   * 
   * @remarks
   * We recommend that you do not call an API operation to manage scenes. We recommend that you go to the Scenario Building page in the Artificial Intelligence Recommendation (AIRec) console to manage scenes.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSceneResponse
   */
  async describeSceneWithOptions(instanceId: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSceneResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeScene",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeSceneResponse>(await this.callApi(params, req, runtime), new DescribeSceneResponse({}));
  }

  /**
   * Queries the details about a specified scene.
   * 
   * @remarks
   * We recommend that you do not call an API operation to manage scenes. We recommend that you go to the Scenario Building page in the Artificial Intelligence Recommendation (AIRec) console to manage scenes.
   * @returns DescribeSceneResponse
   */
  async describeScene(instanceId: string, sceneId: string): Promise<DescribeSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSceneWithOptions(instanceId, sceneId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSceneBucketResponse
   */
  async describeSceneBucketWithOptions(instanceId: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSceneBucketResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeSceneBucket",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/experiment-bucket`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeSceneBucketResponse>(await this.callApi(params, req, runtime), new DescribeSceneBucketResponse({}));
  }

  /**
   * @returns DescribeSceneBucketResponse
   */
  async describeSceneBucket(instanceId: string, sceneId: string): Promise<DescribeSceneBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSceneBucketWithOptions(instanceId, sceneId, headers, runtime);
  }

  /**
   * The error message.
   * 
   * @remarks
   * __null__
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSceneThroughputResponse
   */
  async describeSceneThroughputWithOptions(instanceId: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSceneThroughputResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeSceneThroughput",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/throughput`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeSceneThroughputResponse>(await this.callApi(params, req, runtime), new DescribeSceneThroughputResponse({}));
  }

  /**
   * The error message.
   * 
   * @remarks
   * __null__
   * @returns DescribeSceneThroughputResponse
   */
  async describeSceneThroughput(instanceId: string, sceneId: string): Promise<DescribeSceneThroughputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSceneThroughputWithOptions(instanceId, sceneId, headers, runtime);
  }

  /**
   * @param request - DescribeSyncReportDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSyncReportDetailResponse
   */
  async describeSyncReportDetailWithOptions(instanceId: string, request: DescribeSyncReportDetailRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSyncReportDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.levelType)) {
      query["levelType"] = request.levelType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSyncReportDetail",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sync-reports/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeSyncReportDetailResponse>(await this.callApi(params, req, runtime), new DescribeSyncReportDetailResponse({}));
  }

  /**
   * @param request - DescribeSyncReportDetailRequest
   * @returns DescribeSyncReportDetailResponse
   */
  async describeSyncReportDetail(instanceId: string, request: DescribeSyncReportDetailRequest): Promise<DescribeSyncReportDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSyncReportDetailWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - DescribeSyncReportOutliersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSyncReportOutliersResponse
   */
  async describeSyncReportOutliersWithOptions(instanceId: string, request: DescribeSyncReportOutliersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSyncReportOutliersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.key)) {
      query["key"] = request.key;
    }

    if (!Util.isUnset(request.levelType)) {
      query["levelType"] = request.levelType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSyncReportOutliers",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sync-reports/outliers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeSyncReportOutliersResponse>(await this.callApi(params, req, runtime), new DescribeSyncReportOutliersResponse({}));
  }

  /**
   * @param request - DescribeSyncReportOutliersRequest
   * @returns DescribeSyncReportOutliersResponse
   */
  async describeSyncReportOutliers(instanceId: string, request: DescribeSyncReportOutliersRequest): Promise<DescribeSyncReportOutliersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSyncReportOutliersWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries user metrics related to the conversion rate.
   * 
   * @param request - DescribeUserMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserMetricsResponse
   */
  async describeUserMetricsWithOptions(instanceId: string, request: DescribeUserMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUserMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.metricType)) {
      query["metricType"] = request.metricType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserMetrics",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserMetricsResponse>(await this.callApi(params, req, runtime), new DescribeUserMetricsResponse({}));
  }

  /**
   * Queries user metrics related to the conversion rate.
   * 
   * @param request - DescribeUserMetricsRequest
   * @returns DescribeUserMetricsResponse
   */
  async describeUserMetrics(instanceId: string, request: DescribeUserMetricsRequest): Promise<DescribeUserMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserMetricsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * The ID of the instance.
   * 
   * @remarks
   * The returned results.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DowngradeInstanceResponse
   */
  async downgradeInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DowngradeInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DowngradeInstance",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/actions/downgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DowngradeInstanceResponse>(await this.callApi(params, req, runtime), new DowngradeInstanceResponse({}));
  }

  /**
   * The ID of the instance.
   * 
   * @remarks
   * The returned results.
   * @returns DowngradeInstanceResponse
   */
  async downgradeInstance(instanceId: string): Promise<DowngradeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.downgradeInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableExperimentResponse
   */
  async enableExperimentWithOptions(instanceId: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "EnableExperiment",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/actions/enable-experiment`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableExperimentResponse>(await this.callApi(params, req, runtime), new EnableExperimentResponse({}));
  }

  /**
   * @returns EnableExperimentResponse
   */
  async enableExperiment(instanceId: string, sceneId: string): Promise<EnableExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableExperimentWithOptions(instanceId, sceneId, headers, runtime);
  }

  /**
   * 生成样本，只针对复制创建的样本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateSampleResponse
   */
  async generateSampleWithOptions(instanceId: string, sampleId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateSampleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GenerateSample",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/samples/${OpenApiUtil.getEncodeParam(sampleId)}/actions/generate`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateSampleResponse>(await this.callApi(params, req, runtime), new GenerateSampleResponse({}));
  }

  /**
   * 生成样本，只针对复制创建的样本
   * @returns GenerateSampleResponse
   */
  async generateSample(instanceId: string, sampleId: string): Promise<GenerateSampleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateSampleWithOptions(instanceId, sampleId, headers, runtime);
  }

  /**
   * Queries the details of other data sources.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExtraDataSourceResponse
   */
  async getExtraDataSourceWithOptions(instanceId: string, type: string, dataSourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExtraDataSourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetExtraDataSource",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/extra-data-sources/${OpenApiUtil.getEncodeParam(type)}/${OpenApiUtil.getEncodeParam(dataSourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetExtraDataSourceResponse>(await this.callApi(params, req, runtime), new GetExtraDataSourceResponse({}));
  }

  /**
   * Queries the details of other data sources.
   * @returns GetExtraDataSourceResponse
   */
  async getExtraDataSource(instanceId: string, type: string, dataSourceId: string): Promise<GetExtraDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExtraDataSourceWithOptions(instanceId, type, dataSourceId, headers, runtime);
  }

  /**
   * Obtains the details of a throttling task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowControlTaskResponse
   */
  async getFlowControlTaskWithOptions(instanceId: string, taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFlowControlTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetFlowControlTask",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/flowControlTasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFlowControlTaskResponse>(await this.callApi(params, req, runtime), new GetFlowControlTaskResponse({}));
  }

  /**
   * Obtains the details of a throttling task.
   * @returns GetFlowControlTaskResponse
   */
  async getFlowControlTask(instanceId: string, taskId: string): Promise<GetFlowControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFlowControlTaskWithOptions(instanceId, taskId, headers, runtime);
  }

  /**
   * 获取最新诊断任务状态
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLatestDataDiagnoseTaskStatusResponse
   */
  async getLatestDataDiagnoseTaskStatusWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLatestDataDiagnoseTaskStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetLatestDataDiagnoseTaskStatus",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-diagnose-task/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLatestDataDiagnoseTaskStatusResponse>(await this.callApi(params, req, runtime), new GetLatestDataDiagnoseTaskStatusResponse({}));
  }

  /**
   * 获取最新诊断任务状态
   * @returns GetLatestDataDiagnoseTaskStatusResponse
   */
  async getLatestDataDiagnoseTaskStatus(instanceId: string): Promise<GetLatestDataDiagnoseTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLatestDataDiagnoseTaskStatusWithOptions(instanceId, headers, runtime);
  }

  /**
   * 查看排序模型模板配置详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRankingModelTemplateResponse
   */
  async getRankingModelTemplateWithOptions(instanceId: string, templateId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRankingModelTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRankingModelTemplate",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-model-templates/${OpenApiUtil.getEncodeParam(templateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRankingModelTemplateResponse>(await this.callApi(params, req, runtime), new GetRankingModelTemplateResponse({}));
  }

  /**
   * 查看排序模型模板配置详情
   * @returns GetRankingModelTemplateResponse
   */
  async getRankingModelTemplate(instanceId: string, templateId: string): Promise<GetRankingModelTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRankingModelTemplateWithOptions(instanceId, templateId, headers, runtime);
  }

  /**
   * 查看排序模型版本详情，包括评估结果和训练结果
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRankingModelVersionResponse
   */
  async getRankingModelVersionWithOptions(instanceId: string, versionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRankingModelVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRankingModelVersion",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-model-versions/${OpenApiUtil.getEncodeParam(versionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRankingModelVersionResponse>(await this.callApi(params, req, runtime), new GetRankingModelVersionResponse({}));
  }

  /**
   * 查看排序模型版本详情，包括评估结果和训练结果
   * @returns GetRankingModelVersionResponse
   */
  async getRankingModelVersion(instanceId: string, versionId: string): Promise<GetRankingModelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRankingModelVersionWithOptions(instanceId, versionId, headers, runtime);
  }

  /**
   * 获取某个排序服务详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRankingSystemResponse
   */
  async getRankingSystemWithOptions(instanceId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRankingSystemResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRankingSystem",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-systems/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRankingSystemResponse>(await this.callApi(params, req, runtime), new GetRankingSystemResponse({}));
  }

  /**
   * 获取某个排序服务详情
   * @returns GetRankingSystemResponse
   */
  async getRankingSystem(instanceId: string, name: string): Promise<GetRankingSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRankingSystemWithOptions(instanceId, name, headers, runtime);
  }

  /**
   * 查询某个服务操作记录
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRankingSystemHistoryResponse
   */
  async getRankingSystemHistoryWithOptions(instanceId: string, name: string, operateId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRankingSystemHistoryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRankingSystemHistory",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-systems/${OpenApiUtil.getEncodeParam(name)}/histories/${OpenApiUtil.getEncodeParam(operateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRankingSystemHistoryResponse>(await this.callApi(params, req, runtime), new GetRankingSystemHistoryResponse({}));
  }

  /**
   * 查询某个服务操作记录
   * @returns GetRankingSystemHistoryResponse
   */
  async getRankingSystemHistory(instanceId: string, name: string, operateId: string): Promise<GetRankingSystemHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRankingSystemHistoryWithOptions(instanceId, name, operateId, headers, runtime);
  }

  /**
   * 获取样本详情
   * 
   * @param request - GetSampleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSampleResponse
   */
  async getSampleWithOptions(instanceId: string, sampleId: string, request: GetSampleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSampleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.withExtendParmas)) {
      query["withExtendParmas"] = request.withExtendParmas;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSample",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/samples/${OpenApiUtil.getEncodeParam(sampleId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSampleResponse>(await this.callApi(params, req, runtime), new GetSampleResponse({}));
  }

  /**
   * 获取样本详情
   * 
   * @param request - GetSampleRequest
   * @returns GetSampleResponse
   */
  async getSample(instanceId: string, sampleId: string, request: GetSampleRequest): Promise<GetSampleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSampleWithOptions(instanceId, sampleId, request, headers, runtime);
  }

  /**
   * 初始化计算资源
   * 
   * @param request - InitComputingResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitComputingResourceResponse
   */
  async initComputingResourceWithOptions(instanceId: string, request: InitComputingResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InitComputingResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.key)) {
      query["key"] = request.key;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InitComputingResource",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/computing-resources/actions/init`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InitComputingResourceResponse>(await this.callApi(params, req, runtime), new InitComputingResourceResponse({}));
  }

  /**
   * 初始化计算资源
   * 
   * @param request - InitComputingResourceRequest
   * @returns InitComputingResourceResponse
   */
  async initComputingResource(instanceId: string, request: InitComputingResourceRequest): Promise<InitComputingResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.initComputingResourceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - ListDashboardDetailsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDashboardDetailsResponse
   */
  async listDashboardDetailsWithOptions(instanceId: string, request: ListDashboardDetailsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDashboardDetailsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.experimentIds)) {
      query["experimentIds"] = request.experimentIds;
    }

    if (!Util.isUnset(request.matchTypes)) {
      query["matchTypes"] = request.matchTypes;
    }

    if (!Util.isUnset(request.metricType)) {
      query["metricType"] = request.metricType;
    }

    if (!Util.isUnset(request.sceneIds)) {
      query["sceneIds"] = request.sceneIds;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.traceIds)) {
      query["traceIds"] = request.traceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDashboardDetails",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/dashboard/details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDashboardDetailsResponse>(await this.callApi(params, req, runtime), new ListDashboardDetailsResponse({}));
  }

  /**
   * @param request - ListDashboardDetailsRequest
   * @returns ListDashboardDetailsResponse
   */
  async listDashboardDetails(instanceId: string, request: ListDashboardDetailsRequest): Promise<ListDashboardDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDashboardDetailsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - ListDashboardDetailsFlowsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDashboardDetailsFlowsResponse
   */
  async listDashboardDetailsFlowsWithOptions(instanceId: string, request: ListDashboardDetailsFlowsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDashboardDetailsFlowsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.experimentIds)) {
      query["experimentIds"] = request.experimentIds;
    }

    if (!Util.isUnset(request.metricType)) {
      query["metricType"] = request.metricType;
    }

    if (!Util.isUnset(request.sceneIds)) {
      query["sceneIds"] = request.sceneIds;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.traceIds)) {
      query["traceIds"] = request.traceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDashboardDetailsFlows",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/dashboard/details/flows`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDashboardDetailsFlowsResponse>(await this.callApi(params, req, runtime), new ListDashboardDetailsFlowsResponse({}));
  }

  /**
   * @param request - ListDashboardDetailsFlowsRequest
   * @returns ListDashboardDetailsFlowsResponse
   */
  async listDashboardDetailsFlows(instanceId: string, request: ListDashboardDetailsFlowsRequest): Promise<ListDashboardDetailsFlowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDashboardDetailsFlowsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * The end time. The value is a timestamp in seconds.
   * 
   * @param request - ListDashboardMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDashboardMetricsResponse
   */
  async listDashboardMetricsWithOptions(instanceId: string, request: ListDashboardMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDashboardMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.metricQuery)) {
      query["metricQuery"] = request.metricQuery;
    }

    if (!Util.isUnset(request.metricType)) {
      query["metricType"] = request.metricType;
    }

    if (!Util.isUnset(request.metricView)) {
      query["metricView"] = request.metricView;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDashboardMetrics",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/dashboard/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDashboardMetricsResponse>(await this.callApi(params, req, runtime), new ListDashboardMetricsResponse({}));
  }

  /**
   * The end time. The value is a timestamp in seconds.
   * 
   * @param request - ListDashboardMetricsRequest
   * @returns ListDashboardMetricsResponse
   */
  async listDashboardMetrics(instanceId: string, request: ListDashboardMetricsRequest): Promise<ListDashboardMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDashboardMetricsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * The end time. The value is a timestamp in seconds.
   * 
   * @param request - ListDashboardMetricsFlowsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDashboardMetricsFlowsResponse
   */
  async listDashboardMetricsFlowsWithOptions(instanceId: string, request: ListDashboardMetricsFlowsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDashboardMetricsFlowsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.metricType)) {
      query["metricType"] = request.metricType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDashboardMetricsFlows",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/dashboard/metrics/flows`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDashboardMetricsFlowsResponse>(await this.callApi(params, req, runtime), new ListDashboardMetricsFlowsResponse({}));
  }

  /**
   * The end time. The value is a timestamp in seconds.
   * 
   * @param request - ListDashboardMetricsFlowsRequest
   * @returns ListDashboardMetricsFlowsResponse
   */
  async listDashboardMetricsFlows(instanceId: string, request: ListDashboardMetricsFlowsRequest): Promise<ListDashboardMetricsFlowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDashboardMetricsFlowsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 获取数据诊断报告 (包括用户手动触发的诊断、每天产出的周期报告、数据启动时诊断的报告)
   * 
   * @param request - ListDataDiagnoseReportsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataDiagnoseReportsResponse
   */
  async listDataDiagnoseReportsWithOptions(instanceId: string, request: ListDataDiagnoseReportsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataDiagnoseReportsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskCreateTime)) {
      query["taskCreateTime"] = request.taskCreateTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataDiagnoseReports",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-diagnose-reports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDataDiagnoseReportsResponse>(await this.callApi(params, req, runtime), new ListDataDiagnoseReportsResponse({}));
  }

  /**
   * 获取数据诊断报告 (包括用户手动触发的诊断、每天产出的周期报告、数据启动时诊断的报告)
   * 
   * @param request - ListDataDiagnoseReportsRequest
   * @returns ListDataDiagnoseReportsResponse
   */
  async listDataDiagnoseReports(instanceId: string, request: ListDataDiagnoseReportsRequest): Promise<ListDataDiagnoseReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataDiagnoseReportsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 获取数据诊断项抽样明细
   * 
   * @param request - ListDataDiagnoseSampleDetailsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataDiagnoseSampleDetailsResponse
   */
  async listDataDiagnoseSampleDetailsWithOptions(instanceId: string, request: ListDataDiagnoseSampleDetailsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataDiagnoseSampleDetailsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.key)) {
      query["key"] = request.key;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskCreateTime)) {
      query["taskCreateTime"] = request.taskCreateTime;
    }

    if (!Util.isUnset(request.taskSource)) {
      query["taskSource"] = request.taskSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataDiagnoseSampleDetails",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/data-diagnose-reports/sample-details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDataDiagnoseSampleDetailsResponse>(await this.callApi(params, req, runtime), new ListDataDiagnoseSampleDetailsResponse({}));
  }

  /**
   * 获取数据诊断项抽样明细
   * 
   * @param request - ListDataDiagnoseSampleDetailsRequest
   * @returns ListDataDiagnoseSampleDetailsResponse
   */
  async listDataDiagnoseSampleDetails(instanceId: string, request: ListDataDiagnoseSampleDetailsRequest): Promise<ListDataDiagnoseSampleDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataDiagnoseSampleDetailsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries datasets of a specified instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSetResponse
   */
  async listDataSetWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataSetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListDataSet",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/dataSets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDataSetResponse>(await this.callApi(params, req, runtime), new ListDataSetResponse({}));
  }

  /**
   * Queries datasets of a specified instance.
   * @returns ListDataSetResponse
   */
  async listDataSet(instanceId: string): Promise<ListDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSetWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceResponse
   */
  async listDataSourceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataSourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListDataSource",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/dataSources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourceResponse>(await this.callApi(params, req, runtime), new ListDataSourceResponse({}));
  }

  /**
   * @returns ListDataSourceResponse
   */
  async listDataSource(instanceId: string): Promise<ListDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourceWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperimentsResponse
   */
  async listExperimentsWithOptions(instanceId: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListExperimentsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListExperiments",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/experiments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListExperimentsResponse>(await this.callApi(params, req, runtime), new ListExperimentsResponse({}));
  }

  /**
   * @returns ListExperimentsResponse
   */
  async listExperiments(instanceId: string, sceneId: string): Promise<ListExperimentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentsWithOptions(instanceId, sceneId, headers, runtime);
  }

  /**
   * 获取特征、样本等表扩展数据源列表
   * 
   * @param request - ListExtraDataSourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExtraDataSourcesResponse
   */
  async listExtraDataSourcesWithOptions(instanceId: string, request: ListExtraDataSourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListExtraDataSourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExtraDataSources",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/extra-data-sources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListExtraDataSourcesResponse>(await this.callApi(params, req, runtime), new ListExtraDataSourcesResponse({}));
  }

  /**
   * 获取特征、样本等表扩展数据源列表
   * 
   * @param request - ListExtraDataSourcesRequest
   * @returns ListExtraDataSourcesResponse
   */
  async listExtraDataSources(instanceId: string, request: ListExtraDataSourcesRequest): Promise<ListExtraDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExtraDataSourcesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 获取特征表列表
   * 
   * @param request - ListFeatureTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureTablesResponse
   */
  async listFeatureTablesWithOptions(instanceId: string, request: ListFeatureTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFeatureTablesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    if (!Util.isUnset(request.updateFrequency)) {
      query["updateFrequency"] = request.updateFrequency;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFeatureTables",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/feature-tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFeatureTablesResponse>(await this.callApi(params, req, runtime), new ListFeatureTablesResponse({}));
  }

  /**
   * 获取特征表列表
   * 
   * @param request - ListFeatureTablesRequest
   * @returns ListFeatureTablesResponse
   */
  async listFeatureTables(instanceId: string, request: ListFeatureTablesRequest): Promise<ListFeatureTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureTablesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - ListFilteringAlgorithmsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFilteringAlgorithmsResponse
   */
  async listFilteringAlgorithmsWithOptions(instanceId: string, request: ListFilteringAlgorithmsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFilteringAlgorithmsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmId)) {
      query["algorithmId"] = request.algorithmId;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFilteringAlgorithms",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/filtering-algorithms`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFilteringAlgorithmsResponse>(await this.callApi(params, req, runtime), new ListFilteringAlgorithmsResponse({}));
  }

  /**
   * @param request - ListFilteringAlgorithmsRequest
   * @returns ListFilteringAlgorithmsResponse
   */
  async listFilteringAlgorithms(instanceId: string, request: ListFilteringAlgorithmsRequest): Promise<ListFilteringAlgorithmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFilteringAlgorithmsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 查询流控任务列表
   * 
   * @param request - ListFlowControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowControlTaskResponse
   */
  async listFlowControlTaskWithOptions(instanceId: string, request: ListFlowControlTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFlowControlTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowControlTask",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/flowControlTasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFlowControlTaskResponse>(await this.callApi(params, req, runtime), new ListFlowControlTaskResponse({}));
  }

  /**
   * 查询流控任务列表
   * 
   * @param request - ListFlowControlTaskRequest
   * @returns ListFlowControlTaskResponse
   */
  async listFlowControlTask(instanceId: string, request: ListFlowControlTaskRequest): Promise<ListFlowControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFlowControlTaskWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 查询失效物品 id_type
   * 
   * @param request - ListFlowControlTaskInvalidItemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowControlTaskInvalidItemsResponse
   */
  async listFlowControlTaskInvalidItemsWithOptions(instanceId: string, taskId: string, request: ListFlowControlTaskInvalidItemsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFlowControlTaskInvalidItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "ListFlowControlTaskInvalidItems",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/flowControlTasks/${OpenApiUtil.getEncodeParam(taskId)}/invalidItems`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFlowControlTaskInvalidItemsResponse>(await this.callApi(params, req, runtime), new ListFlowControlTaskInvalidItemsResponse({}));
  }

  /**
   * 查询失效物品 id_type
   * 
   * @param request - ListFlowControlTaskInvalidItemsRequest
   * @returns ListFlowControlTaskInvalidItemsResponse
   */
  async listFlowControlTaskInvalidItems(instanceId: string, taskId: string, request: ListFlowControlTaskInvalidItemsRequest): Promise<ListFlowControlTaskInvalidItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFlowControlTaskInvalidItemsWithOptions(instanceId, taskId, request, headers, runtime);
  }

  /**
   * 流量调控曝光排名物品/失效物品查询
   * 
   * @param request - ListFlowControlTaskItemReportsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowControlTaskItemReportsResponse
   */
  async listFlowControlTaskItemReportsWithOptions(instanceId: string, taskId: string, request: ListFlowControlTaskItemReportsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFlowControlTaskItemReportsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.count)) {
      query["count"] = request.count;
    }

    if (!Util.isUnset(request.selectTimeType)) {
      query["selectTimeType"] = request.selectTimeType;
    }

    if (!Util.isUnset(request.selectType)) {
      query["selectType"] = request.selectType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowControlTaskItemReports",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/flowControlTasks/${OpenApiUtil.getEncodeParam(taskId)}/itemReports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFlowControlTaskItemReportsResponse>(await this.callApi(params, req, runtime), new ListFlowControlTaskItemReportsResponse({}));
  }

  /**
   * 流量调控曝光排名物品/失效物品查询
   * 
   * @param request - ListFlowControlTaskItemReportsRequest
   * @returns ListFlowControlTaskItemReportsResponse
   */
  async listFlowControlTaskItemReports(instanceId: string, taskId: string, request: ListFlowControlTaskItemReportsRequest): Promise<ListFlowControlTaskItemReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFlowControlTaskItemReportsWithOptions(instanceId, taskId, request, headers, runtime);
  }

  /**
   * 流量调控预览
   * 
   * @param request - ListFlowControlTaskItemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowControlTaskItemsResponse
   */
  async listFlowControlTaskItemsWithOptions(instanceId: string, taskId: string, request: ListFlowControlTaskItemsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFlowControlTaskItemsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowControlTaskItems",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/flowControlTasks/${OpenApiUtil.getEncodeParam(taskId)}/actions/items`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFlowControlTaskItemsResponse>(await this.callApi(params, req, runtime), new ListFlowControlTaskItemsResponse({}));
  }

  /**
   * 流量调控预览
   * 
   * @param request - ListFlowControlTaskItemsRequest
   * @returns ListFlowControlTaskItemsResponse
   */
  async listFlowControlTaskItems(instanceId: string, taskId: string, request: ListFlowControlTaskItemsRequest): Promise<ListFlowControlTaskItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFlowControlTaskItemsWithOptions(instanceId, taskId, request, headers, runtime);
  }

  /**
   * Queries reference data for throttling.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowControlTaskReferenceResponse
   */
  async listFlowControlTaskReferenceWithOptions(instanceId: string, taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFlowControlTaskReferenceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListFlowControlTaskReference",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/flowControlTasks/${OpenApiUtil.getEncodeParam(taskId)}/reference`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFlowControlTaskReferenceResponse>(await this.callApi(params, req, runtime), new ListFlowControlTaskReferenceResponse({}));
  }

  /**
   * Queries reference data for throttling.
   * @returns ListFlowControlTaskReferenceResponse
   */
  async listFlowControlTaskReference(instanceId: string, taskId: string): Promise<ListFlowControlTaskReferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFlowControlTaskReferenceWithOptions(instanceId, taskId, headers, runtime);
  }

  /**
   * 流量调控任务曝光分析
   * 
   * @param request - ListFlowControlTaskReportsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowControlTaskReportsResponse
   */
  async listFlowControlTaskReportsWithOptions(instanceId: string, taskId: string, request: ListFlowControlTaskReportsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFlowControlTaskReportsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFlowControlTaskReports",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/flowControlTasks/${OpenApiUtil.getEncodeParam(taskId)}/flowTaskReports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFlowControlTaskReportsResponse>(await this.callApi(params, req, runtime), new ListFlowControlTaskReportsResponse({}));
  }

  /**
   * 流量调控任务曝光分析
   * 
   * @param request - ListFlowControlTaskReportsRequest
   * @returns ListFlowControlTaskReportsResponse
   */
  async listFlowControlTaskReports(instanceId: string, taskId: string, request: ListFlowControlTaskReportsRequest): Promise<ListFlowControlTaskReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFlowControlTaskReportsWithOptions(instanceId, taskId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndexVersionsResponse
   */
  async listIndexVersionsWithOptions(instanceId: string, algorithmId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIndexVersionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListIndexVersions",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/filtering-algorithms/${OpenApiUtil.getEncodeParam(algorithmId)}/index-versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIndexVersionsResponse>(await this.callApi(params, req, runtime), new ListIndexVersionsResponse({}));
  }

  /**
   * @returns ListIndexVersionsResponse
   */
  async listIndexVersions(instanceId: string, algorithmId: string): Promise<ListIndexVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexVersionsWithOptions(instanceId, algorithmId, headers, runtime);
  }

  /**
   * Queries the information of instances.
   * 
   * @remarks
   * You can call this API operation to query the list of instances. The returned instances are ranked in descending order based on the values of GmtCreate. You can specify multiple request parameters. These request parameters can be used to filter query results. The request parameters that you specify have logical AND relations. Only the specified parameters can be used to filter query results.
   * 
   * @param request - ListInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceResponse
   */
  async listInstanceWithOptions(request: ListInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.expiredTime)) {
      query["expiredTime"] = request.expiredTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstance",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceResponse>(await this.callApi(params, req, runtime), new ListInstanceResponse({}));
  }

  /**
   * Queries the information of instances.
   * 
   * @remarks
   * You can call this API operation to query the list of instances. The returned instances are ranked in descending order based on the values of GmtCreate. You can specify multiple request parameters. These request parameters can be used to filter query results. The request parameters that you specify have logical AND relations. Only the specified parameters can be used to filter query results.
   * 
   * @param request - ListInstanceRequest
   * @returns ListInstanceResponse
   */
  async listInstance(request: ListInstanceRequest): Promise<ListInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Queries all asynchronous tasks of a specified instance by using the instance ID.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceTaskResponse
   */
  async listInstanceTaskWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceTask",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceTaskResponse>(await this.callApi(params, req, runtime), new ListInstanceTaskResponse({}));
  }

  /**
   * Queries all asynchronous tasks of a specified instance by using the instance ID.
   * @returns ListInstanceTaskResponse
   */
  async listInstanceTask(instanceId: string): Promise<ListInstanceTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceTaskWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param request - ListItemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListItemsResponse
   */
  async listItemsWithOptions(instanceId: string, request: ListItemsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListItemsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.strategyUsed)) {
      query["strategyUsed"] = request.strategyUsed;
    }

    if (!Util.isUnset(request.withInvalidDetail)) {
      query["withInvalidDetail"] = request.withInvalidDetail;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListItems",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/items/actions/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListItemsResponse>(await this.callApi(params, req, runtime), new ListItemsResponse({}));
  }

  /**
   * @param request - ListItemsRequest
   * @returns ListItemsResponse
   */
  async listItems(instanceId: string, request: ListItemsRequest): Promise<ListItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listItemsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - ListLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogsResponse
   */
  async listLogsWithOptions(instanceId: string, request: ListLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLogsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.queryParams)) {
      query["queryParams"] = request.queryParams;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLogs",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListLogsResponse>(await this.callApi(params, req, runtime), new ListLogsResponse({}));
  }

  /**
   * @param request - ListLogsRequest
   * @returns ListLogsResponse
   */
  async listLogs(instanceId: string, request: ListLogsRequest): Promise<ListLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the content types supported in the diversity rule configurations of an instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMixCategoriesResponse
   */
  async listMixCategoriesWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMixCategoriesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListMixCategories",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/configurations/mixCategories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMixCategoriesResponse>(await this.callApi(params, req, runtime), new ListMixCategoriesResponse({}));
  }

  /**
   * Queries the content types supported in the diversity rule configurations of an instance.
   * @returns ListMixCategoriesResponse
   */
  async listMixCategories(): Promise<ListMixCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMixCategoriesWithOptions(headers, runtime);
  }

  /**
   * 获取离线存储列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOfflineStoragesResponse
   */
  async listOfflineStoragesWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOfflineStoragesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListOfflineStorages",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/%5BinstanceId%5D/offlineStorages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOfflineStoragesResponse>(await this.callApi(params, req, runtime), new ListOfflineStoragesResponse({}));
  }

  /**
   * 获取离线存储列表
   * @returns ListOfflineStoragesResponse
   */
  async listOfflineStorages(instanceId: string): Promise<ListOfflineStoragesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOfflineStoragesWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries the templates of a ranking model. The returned templates are sorted in reverse chronological order based on the time when the templates were created.
   * 
   * @param request - ListRankingModelTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRankingModelTemplatesResponse
   */
  async listRankingModelTemplatesWithOptions(instanceId: string, request: ListRankingModelTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRankingModelTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRankingModelTemplates",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-model-templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRankingModelTemplatesResponse>(await this.callApi(params, req, runtime), new ListRankingModelTemplatesResponse({}));
  }

  /**
   * Queries the templates of a ranking model. The returned templates are sorted in reverse chronological order based on the time when the templates were created.
   * 
   * @param request - ListRankingModelTemplatesRequest
   * @returns ListRankingModelTemplatesResponse
   */
  async listRankingModelTemplates(instanceId: string, request: ListRankingModelTemplatesRequest): Promise<ListRankingModelTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRankingModelTemplatesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries a list of versions for a ranking model.
   * 
   * @param request - ListRankingModelVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRankingModelVersionsResponse
   */
  async listRankingModelVersionsWithOptions(instanceId: string, request: ListRankingModelVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRankingModelVersionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    if (!Util.isUnset(request.templateId)) {
      query["templateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRankingModelVersions",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-model-versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRankingModelVersionsResponse>(await this.callApi(params, req, runtime), new ListRankingModelVersionsResponse({}));
  }

  /**
   * Queries a list of versions for a ranking model.
   * 
   * @param request - ListRankingModelVersionsRequest
   * @returns ListRankingModelVersionsResponse
   */
  async listRankingModelVersions(instanceId: string, request: ListRankingModelVersionsRequest): Promise<ListRankingModelVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRankingModelVersionsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - ListRankingModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRankingModelsResponse
   */
  async listRankingModelsWithOptions(instanceId: string, request: ListRankingModelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRankingModelsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.rankingModelId)) {
      query["rankingModelId"] = request.rankingModelId;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRankingModels",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-models`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRankingModelsResponse>(await this.callApi(params, req, runtime), new ListRankingModelsResponse({}));
  }

  /**
   * @param request - ListRankingModelsRequest
   * @returns ListRankingModelsResponse
   */
  async listRankingModels(instanceId: string, request: ListRankingModelsRequest): Promise<ListRankingModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRankingModelsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * The ID of the instance.
   * 
   * @param request - ListRankingSystemHistoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRankingSystemHistoriesResponse
   */
  async listRankingSystemHistoriesWithOptions(instanceId: string, name: string, request: ListRankingSystemHistoriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRankingSystemHistoriesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operateType)) {
      query["operateType"] = request.operateType;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRankingSystemHistories",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-systems/${OpenApiUtil.getEncodeParam(name)}/histories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRankingSystemHistoriesResponse>(await this.callApi(params, req, runtime), new ListRankingSystemHistoriesResponse({}));
  }

  /**
   * The ID of the instance.
   * 
   * @param request - ListRankingSystemHistoriesRequest
   * @returns ListRankingSystemHistoriesResponse
   */
  async listRankingSystemHistories(instanceId: string, name: string, request: ListRankingSystemHistoriesRequest): Promise<ListRankingSystemHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRankingSystemHistoriesWithOptions(instanceId, name, request, headers, runtime);
  }

  /**
   * 获取排序服务列表
   * 
   * @param request - ListRankingSystemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRankingSystemsResponse
   */
  async listRankingSystemsWithOptions(instanceId: string, request: ListRankingSystemsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRankingSystemsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deployStatus)) {
      query["deployStatus"] = request.deployStatus;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRankingSystems",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-systems`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRankingSystemsResponse>(await this.callApi(params, req, runtime), new ListRankingSystemsResponse({}));
  }

  /**
   * 获取排序服务列表
   * 
   * @param request - ListRankingSystemsRequest
   * @returns ListRankingSystemsResponse
   */
  async listRankingSystems(instanceId: string, request: ListRankingSystemsRequest): Promise<ListRankingSystemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRankingSystemsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries item selection rules of an instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRuleConditionsResponse
   */
  async listRuleConditionsWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRuleConditionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListRuleConditions",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/rule-conditions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRuleConditionsResponse>(await this.callApi(params, req, runtime), new ListRuleConditionsResponse({}));
  }

  /**
   * Queries item selection rules of an instance.
   * @returns ListRuleConditionsResponse
   */
  async listRuleConditions(instanceId: string): Promise<ListRuleConditionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRuleConditionsWithOptions(instanceId, headers, runtime);
  }

  /**
   * The returned results.
   * 
   * @param request - ListRuleTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRuleTasksResponse
   */
  async listRuleTasksWithOptions(instanceId: string, request: ListRuleTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRuleTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sceneId)) {
      query["sceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRuleTasks",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/rule-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRuleTasksResponse>(await this.callApi(params, req, runtime), new ListRuleTasksResponse({}));
  }

  /**
   * The returned results.
   * 
   * @param request - ListRuleTasksRequest
   * @returns ListRuleTasksResponse
   */
  async listRuleTasks(instanceId: string, request: ListRuleTasksRequest): Promise<ListRuleTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRuleTasksWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - ListRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRulesResponse
   */
  async listRulesWithOptions(instanceId: string, request: ListRulesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRulesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["ruleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["sceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRules",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/rules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRulesResponse>(await this.callApi(params, req, runtime), new ListRulesResponse({}));
  }

  /**
   * @param request - ListRulesRequest
   * @returns ListRulesResponse
   */
  async listRules(instanceId: string, request: ListRulesRequest): Promise<ListRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRulesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 获取样本格式化配置列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSampleFormatConfigsResponse
   */
  async listSampleFormatConfigsWithOptions(instanceId: string, sampleId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSampleFormatConfigsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListSampleFormatConfigs",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/samples/${OpenApiUtil.getEncodeParam(sampleId)}/format-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSampleFormatConfigsResponse>(await this.callApi(params, req, runtime), new ListSampleFormatConfigsResponse({}));
  }

  /**
   * 获取样本格式化配置列表
   * @returns ListSampleFormatConfigsResponse
   */
  async listSampleFormatConfigs(instanceId: string, sampleId: string): Promise<ListSampleFormatConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSampleFormatConfigsWithOptions(instanceId, sampleId, headers, runtime);
  }

  /**
   * 获取样本列表
   * 
   * @param request - ListSamplesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSamplesResponse
   */
  async listSamplesWithOptions(instanceId: string, request: ListSamplesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSamplesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.sampleId)) {
      query["sampleId"] = request.sampleId;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSamples",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/samples`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSamplesResponse>(await this.callApi(params, req, runtime), new ListSamplesResponse({}));
  }

  /**
   * 获取样本列表
   * 
   * @param request - ListSamplesRequest
   * @returns ListSamplesResponse
   */
  async listSamples(instanceId: string, request: ListSamplesRequest): Promise<ListSamplesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSamplesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries preview results.
   * 
   * @remarks
   * We recommend that you do not call an API operation to manage scenes. We recommend that you go to the Scenario Building page in the Artificial Intelligence Recommendation (AIRec) console to manage scenes.
   * 
   * @param request - ListSceneItemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSceneItemsResponse
   */
  async listSceneItemsWithOptions(instanceId: string, sceneId: string, request: ListSceneItemsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSceneItemsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operationRuleId)) {
      query["operationRuleId"] = request.operationRuleId;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.previewType)) {
      query["previewType"] = request.previewType;
    }

    if (!Util.isUnset(request.queryCount)) {
      query["queryCount"] = request.queryCount;
    }

    if (!Util.isUnset(request.selectionRuleId)) {
      query["selectionRuleId"] = request.selectionRuleId;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSceneItems",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/items`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSceneItemsResponse>(await this.callApi(params, req, runtime), new ListSceneItemsResponse({}));
  }

  /**
   * Queries preview results.
   * 
   * @remarks
   * We recommend that you do not call an API operation to manage scenes. We recommend that you go to the Scenario Building page in the Artificial Intelligence Recommendation (AIRec) console to manage scenes.
   * 
   * @param request - ListSceneItemsRequest
   * @returns ListSceneItemsResponse
   */
  async listSceneItems(instanceId: string, sceneId: string, request: ListSceneItemsRequest): Promise<ListSceneItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSceneItemsWithOptions(instanceId, sceneId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSceneParametersResponse
   */
  async listSceneParametersWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSceneParametersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListSceneParameters",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/dashboard/scene-parameters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSceneParametersResponse>(await this.callApi(params, req, runtime), new ListSceneParametersResponse({}));
  }

  /**
   * @returns ListSceneParametersResponse
   */
  async listSceneParameters(instanceId: string): Promise<ListSceneParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSceneParametersWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries scenes of a specified instance.
   * 
   * @remarks
   * We recommend that you do not call an API operation to manage scenes. Go to the Scenario Building page in the AIRec console to manage scenes.
   * 
   * @param request - ListScenesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScenesResponse
   */
  async listScenesWithOptions(instanceId: string, request: ListScenesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListScenesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["sceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScenes",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListScenesResponse>(await this.callApi(params, req, runtime), new ListScenesResponse({}));
  }

  /**
   * Queries scenes of a specified instance.
   * 
   * @remarks
   * We recommend that you do not call an API operation to manage scenes. Go to the Scenario Building page in the AIRec console to manage scenes.
   * 
   * @param request - ListScenesRequest
   * @returns ListScenesResponse
   */
  async listScenes(instanceId: string, request: ListScenesRequest): Promise<ListScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScenesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUmengAppkeysResponse
   */
  async listUmengAppkeysWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUmengAppkeysResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListUmengAppkeys",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/umeng/appkeys`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUmengAppkeysResponse>(await this.callApi(params, req, runtime), new ListUmengAppkeysResponse({}));
  }

  /**
   * @returns ListUmengAppkeysResponse
   */
  async listUmengAppkeys(): Promise<ListUmengAppkeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUmengAppkeysWithOptions(headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserClustersResponse
   */
  async listUserClustersWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUserClustersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListUserClusters",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/user-clusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUserClustersResponse>(await this.callApi(params, req, runtime), new ListUserClustersResponse({}));
  }

  /**
   * @returns ListUserClustersResponse
   */
  async listUserClusters(instanceId: string): Promise<ListUserClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserClustersWithOptions(instanceId, headers, runtime);
  }

  /**
   * Modifies the information of a single data source in a table of a specified instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataSourceResponse
   */
  async modifyDataSourceWithOptions(instanceId: string, tableName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyDataSourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ModifyDataSource",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/dataSources/${OpenApiUtil.getEncodeParam(tableName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyDataSourceResponse>(await this.callApi(params, req, runtime), new ModifyDataSourceResponse({}));
  }

  /**
   * Modifies the information of a single data source in a table of a specified instance.
   * @returns ModifyDataSourceResponse
   */
  async modifyDataSource(instanceId: string, tableName: string): Promise<ModifyDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDataSourceWithOptions(instanceId, tableName, headers, runtime);
  }

  /**
   * 修改特征表，只支表级别持特征列表的全量修改
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFeatureTableResponse
   */
  async modifyFeatureTableWithOptions(instanceId: string, type: string, featureTableId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyFeatureTableResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ModifyFeatureTable",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/feature-tables/${OpenApiUtil.getEncodeParam(type)}/${OpenApiUtil.getEncodeParam(featureTableId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyFeatureTableResponse>(await this.callApi(params, req, runtime), new ModifyFeatureTableResponse({}));
  }

  /**
   * 修改特征表，只支表级别持特征列表的全量修改
   * @returns ModifyFeatureTableResponse
   */
  async modifyFeatureTable(instanceId: string, type: string, featureTableId: string): Promise<ModifyFeatureTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyFeatureTableWithOptions(instanceId, type, featureTableId, headers, runtime);
  }

  /**
   * The name of the project.
   * 
   * @remarks
   * The name of the filtering algorithm.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFilteringAlgorithmMetaResponse
   */
  async modifyFilteringAlgorithmMetaWithOptions(instanceId: string, algorithmId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyFilteringAlgorithmMetaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ModifyFilteringAlgorithmMeta",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/filtering-algorithms/${OpenApiUtil.getEncodeParam(algorithmId)}/meta`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyFilteringAlgorithmMetaResponse>(await this.callApi(params, req, runtime), new ModifyFilteringAlgorithmMetaResponse({}));
  }

  /**
   * The name of the project.
   * 
   * @remarks
   * The name of the filtering algorithm.
   * @returns ModifyFilteringAlgorithmMetaResponse
   */
  async modifyFilteringAlgorithmMeta(instanceId: string, algorithmId: string): Promise<ModifyFilteringAlgorithmMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyFilteringAlgorithmMetaWithOptions(instanceId, algorithmId, headers, runtime);
  }

  /**
   * Modifies a throttling task.
   * 
   * @param request - ModifyFlowControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFlowControlTaskResponse
   */
  async modifyFlowControlTaskWithOptions(instanceId: string, taskId: string, request: ModifyFlowControlTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyFlowControlTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.metaType)) {
      body["metaType"] = request.metaType;
    }

    if (!Util.isUnset(request.sceneIds)) {
      body["sceneIds"] = request.sceneIds;
    }

    if (!Util.isUnset(request.selectionParams)) {
      body["selectionParams"] = request.selectionParams;
    }

    if (!Util.isUnset(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.target)) {
      body["target"] = request.target;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFlowControlTask",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/flowControlTasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyFlowControlTaskResponse>(await this.callApi(params, req, runtime), new ModifyFlowControlTaskResponse({}));
  }

  /**
   * Modifies a throttling task.
   * 
   * @param request - ModifyFlowControlTaskRequest
   * @returns ModifyFlowControlTaskResponse
   */
  async modifyFlowControlTask(instanceId: string, taskId: string, request: ModifyFlowControlTaskRequest): Promise<ModifyFlowControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyFlowControlTaskWithOptions(instanceId, taskId, request, headers, runtime);
  }

  /**
   * Modifies the configurations of a specified instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceResponse
   */
  async modifyInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstance",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceResponse>(await this.callApi(params, req, runtime), new ModifyInstanceResponse({}));
  }

  /**
   * Modifies the configurations of a specified instance.
   * @returns ModifyInstanceResponse
   */
  async modifyInstance(instanceId: string): Promise<ModifyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyItemsResponse
   */
  async modifyItemsWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyItemsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ModifyItems",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/items`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyItemsResponse>(await this.callApi(params, req, runtime), new ModifyItemsResponse({}));
  }

  /**
   * @returns ModifyItemsResponse
   */
  async modifyItems(instanceId: string): Promise<ModifyItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyItemsWithOptions(instanceId, headers, runtime);
  }

  /**
   * Modifies the offline storage configurations of an instance. You need to modify three tables at the same time.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyOfflineStoragesResponse
   */
  async modifyOfflineStoragesWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyOfflineStoragesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ModifyOfflineStorages",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/%5BinstanceId%5D/offlineStorages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyOfflineStoragesResponse>(await this.callApi(params, req, runtime), new ModifyOfflineStoragesResponse({}));
  }

  /**
   * Modifies the offline storage configurations of an instance. You need to modify three tables at the same time.
   * @returns ModifyOfflineStoragesResponse
   */
  async modifyOfflineStorages(instanceId: string): Promise<ModifyOfflineStoragesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyOfflineStoragesWithOptions(instanceId, headers, runtime);
  }

  /**
   * The ID of the ranking model.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRankingModelResponse
   */
  async modifyRankingModelWithOptions(instanceId: string, rankingModelId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyRankingModelResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ModifyRankingModel",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-models/${OpenApiUtil.getEncodeParam(rankingModelId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyRankingModelResponse>(await this.callApi(params, req, runtime), new ModifyRankingModelResponse({}));
  }

  /**
   * The ID of the ranking model.
   * @returns ModifyRankingModelResponse
   */
  async modifyRankingModel(instanceId: string, rankingModelId: string): Promise<ModifyRankingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyRankingModelWithOptions(instanceId, rankingModelId, headers, runtime);
  }

  /**
   * Modifies a ranking model.
   * 
   * @param request - ModifyRankingModelTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRankingModelTemplateResponse
   */
  async modifyRankingModelTemplateWithOptions(instanceId: string, templateId: string, request: ModifyRankingModelTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyRankingModelTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRankingModelTemplate",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-model-templates/${OpenApiUtil.getEncodeParam(templateId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyRankingModelTemplateResponse>(await this.callApi(params, req, runtime), new ModifyRankingModelTemplateResponse({}));
  }

  /**
   * Modifies a ranking model.
   * 
   * @param request - ModifyRankingModelTemplateRequest
   * @returns ModifyRankingModelTemplateResponse
   */
  async modifyRankingModelTemplate(instanceId: string, templateId: string, request: ModifyRankingModelTemplateRequest): Promise<ModifyRankingModelTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyRankingModelTemplateWithOptions(instanceId, templateId, request, headers, runtime);
  }

  /**
   * Modifies a ranking service.
   * 
   * @param request - ModifyRankingSystemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRankingSystemResponse
   */
  async modifyRankingSystemWithOptions(instanceId: string, name: string, request: ModifyRankingSystemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyRankingSystemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRankingSystem",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-systems/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyRankingSystemResponse>(await this.callApi(params, req, runtime), new ModifyRankingSystemResponse({}));
  }

  /**
   * Modifies a ranking service.
   * 
   * @param request - ModifyRankingSystemRequest
   * @returns ModifyRankingSystemResponse
   */
  async modifyRankingSystem(instanceId: string, name: string, request: ModifyRankingSystemRequest): Promise<ModifyRankingSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyRankingSystemWithOptions(instanceId, name, request, headers, runtime);
  }

  /**
   * Modifies a rule.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRuleResponse
   */
  async modifyRuleWithOptions(instanceId: string, ruleId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyRuleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ModifyRule",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/rules/${OpenApiUtil.getEncodeParam(ruleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyRuleResponse>(await this.callApi(params, req, runtime), new ModifyRuleResponse({}));
  }

  /**
   * Modifies a rule.
   * @returns ModifyRuleResponse
   */
  async modifyRule(instanceId: string, ruleId: string): Promise<ModifyRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyRuleWithOptions(instanceId, ruleId, headers, runtime);
  }

  /**
   * 修改样本配置
   * 
   * @param request - ModifySampleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySampleResponse
   */
  async modifySampleWithOptions(instanceId: string, sampleId: string, request: ModifySampleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifySampleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifySample",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/samples/${OpenApiUtil.getEncodeParam(sampleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifySampleResponse>(await this.callApi(params, req, runtime), new ModifySampleResponse({}));
  }

  /**
   * 修改样本配置
   * 
   * @param request - ModifySampleRequest
   * @returns ModifySampleResponse
   */
  async modifySample(instanceId: string, sampleId: string, request: ModifySampleRequest): Promise<ModifySampleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifySampleWithOptions(instanceId, sampleId, request, headers, runtime);
  }

  /**
   * Modifies the information about a scene.
   * 
   * @remarks
   * We recommend that you do not call an API operation to manage scenes. We recommend that you go to the Scenario Building page in the Artificial Intelligence Recommendation (AIRec) console to manage scenes.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySceneResponse
   */
  async modifySceneWithOptions(instanceId: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifySceneResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ModifyScene",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifySceneResponse>(await this.callApi(params, req, runtime), new ModifySceneResponse({}));
  }

  /**
   * Modifies the information about a scene.
   * 
   * @remarks
   * We recommend that you do not call an API operation to manage scenes. We recommend that you go to the Scenario Building page in the Artificial Intelligence Recommendation (AIRec) console to manage scenes.
   * @returns ModifySceneResponse
   */
  async modifyScene(instanceId: string, sceneId: string): Promise<ModifySceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifySceneWithOptions(instanceId, sceneId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineFilteringAlgorithmResponse
   */
  async offlineFilteringAlgorithmWithOptions(instanceId: string, algorithmId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OfflineFilteringAlgorithmResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "OfflineFilteringAlgorithm",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/filtering-algorithms/${OpenApiUtil.getEncodeParam(algorithmId)}/actions/offline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OfflineFilteringAlgorithmResponse>(await this.callApi(params, req, runtime), new OfflineFilteringAlgorithmResponse({}));
  }

  /**
   * @returns OfflineFilteringAlgorithmResponse
   */
  async offlineFilteringAlgorithm(instanceId: string, algorithmId: string): Promise<OfflineFilteringAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineFilteringAlgorithmWithOptions(instanceId, algorithmId, headers, runtime);
  }

  /**
   * 发布流调任务接口
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishFlowControlTaskResponse
   */
  async publishFlowControlTaskWithOptions(instanceId: string, taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishFlowControlTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "PublishFlowControlTask",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/flowControlTasks/${OpenApiUtil.getEncodeParam(taskId)}/actions/publish`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishFlowControlTaskResponse>(await this.callApi(params, req, runtime), new PublishFlowControlTaskResponse({}));
  }

  /**
   * 发布流调任务接口
   * @returns PublishFlowControlTaskResponse
   */
  async publishFlowControlTask(instanceId: string, taskId: string): Promise<PublishFlowControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishFlowControlTaskWithOptions(instanceId, taskId, headers, runtime);
  }

  /**
   * Publishes a rule.
   * 
   * @param request - PublishRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishRuleResponse
   */
  async publishRuleWithOptions(ruleId: string, instanceId: string, request: PublishRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ruleType)) {
      query["ruleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["sceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PublishRule",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/rules/${OpenApiUtil.getEncodeParam(ruleId)}/actions/publish`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishRuleResponse>(await this.callApi(params, req, runtime), new PublishRuleResponse({}));
  }

  /**
   * Publishes a rule.
   * 
   * @param request - PublishRuleRequest
   * @returns PublishRuleResponse
   */
  async publishRule(ruleId: string, instanceId: string, request: PublishRuleRequest): Promise<PublishRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishRuleWithOptions(ruleId, instanceId, request, headers, runtime);
  }

  /**
   * 该接口用于向指定冷启动实例指定表推送文档
   * 
   * @param request - PushColdStartDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushColdStartDocumentResponse
   */
  async pushColdStartDocumentWithOptions(instanceId: string, tableName: string, request: PushColdStartDocumentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushColdStartDocumentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PushColdStartDocument",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/cold-start/${OpenApiUtil.getEncodeParam(instanceId)}/tables/${OpenApiUtil.getEncodeParam(tableName)}/actions/bulk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PushColdStartDocumentResponse>(await this.callApi(params, req, runtime), new PushColdStartDocumentResponse({}));
  }

  /**
   * 该接口用于向指定冷启动实例指定表推送文档
   * 
   * @param request - PushColdStartDocumentRequest
   * @returns PushColdStartDocumentResponse
   */
  async pushColdStartDocument(instanceId: string, tableName: string, request: PushColdStartDocumentRequest): Promise<PushColdStartDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushColdStartDocumentWithOptions(instanceId, tableName, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushDocumentResponse
   */
  async pushDocumentWithOptions(instanceId: string, tableName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushDocumentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "PushDocument",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tables/${OpenApiUtil.getEncodeParam(tableName)}/actions/bulk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PushDocumentResponse>(await this.callApi(params, req, runtime), new PushDocumentResponse({}));
  }

  /**
   * @returns PushDocumentResponse
   */
  async pushDocument(instanceId: string, tableName: string): Promise<PushDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushDocumentWithOptions(instanceId, tableName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushInterventionResponse
   */
  async pushInterventionWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushInterventionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "PushIntervention",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/actions/intervene`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PushInterventionResponse>(await this.callApi(params, req, runtime), new PushInterventionResponse({}));
  }

  /**
   * @returns PushInterventionResponse
   */
  async pushIntervention(instanceId: string): Promise<PushInterventionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushInterventionWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param request - QueryDataMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataMessageResponse
   */
  async queryDataMessageWithOptions(instanceId: string, table: string, request: QueryDataMessageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryDataMessageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bhvType)) {
      query["bhvType"] = request.bhvType;
    }

    if (!Util.isUnset(request.cmdType)) {
      query["cmdType"] = request.cmdType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.imei)) {
      query["imei"] = request.imei;
    }

    if (!Util.isUnset(request.itemId)) {
      query["itemId"] = request.itemId;
    }

    if (!Util.isUnset(request.itemType)) {
      query["itemType"] = request.itemType;
    }

    if (!Util.isUnset(request.messageSource)) {
      query["messageSource"] = request.messageSource;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["sceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.traceId)) {
      query["traceId"] = request.traceId;
    }

    if (!Util.isUnset(request.userId)) {
      query["userId"] = request.userId;
    }

    if (!Util.isUnset(request.userType)) {
      query["userType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDataMessage",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tables/${OpenApiUtil.getEncodeParam(table)}/data-message`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryDataMessageResponse>(await this.callApi(params, req, runtime), new QueryDataMessageResponse({}));
  }

  /**
   * @param request - QueryDataMessageRequest
   * @returns QueryDataMessageResponse
   */
  async queryDataMessage(instanceId: string, table: string, request: QueryDataMessageRequest): Promise<QueryDataMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryDataMessageWithOptions(instanceId, table, request, headers, runtime);
  }

  /**
   * Queries statistics on update messages in a data table of an instance.
   * 
   * @remarks
   * You can call this API operation to query statistics on update messages in a specified data table of a specified instance.
   * 
   * @param request - QueryDataMessageStatisticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataMessageStatisticsResponse
   */
  async queryDataMessageStatisticsWithOptions(instanceId: string, table: string, request: QueryDataMessageStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryDataMessageStatisticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bhvType)) {
      query["bhvType"] = request.bhvType;
    }

    if (!Util.isUnset(request.cmdType)) {
      query["cmdType"] = request.cmdType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.imei)) {
      query["imei"] = request.imei;
    }

    if (!Util.isUnset(request.itemId)) {
      query["itemId"] = request.itemId;
    }

    if (!Util.isUnset(request.itemType)) {
      query["itemType"] = request.itemType;
    }

    if (!Util.isUnset(request.messageSource)) {
      query["messageSource"] = request.messageSource;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["sceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.traceId)) {
      query["traceId"] = request.traceId;
    }

    if (!Util.isUnset(request.userId)) {
      query["userId"] = request.userId;
    }

    if (!Util.isUnset(request.userType)) {
      query["userType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDataMessageStatistics",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tables/${OpenApiUtil.getEncodeParam(table)}/data-message-statistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryDataMessageStatisticsResponse>(await this.callApi(params, req, runtime), new QueryDataMessageStatisticsResponse({}));
  }

  /**
   * Queries statistics on update messages in a data table of an instance.
   * 
   * @remarks
   * You can call this API operation to query statistics on update messages in a specified data table of a specified instance.
   * 
   * @param request - QueryDataMessageStatisticsRequest
   * @returns QueryDataMessageStatisticsResponse
   */
  async queryDataMessageStatistics(instanceId: string, table: string, request: QueryDataMessageStatisticsRequest): Promise<QueryDataMessageStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryDataMessageStatisticsWithOptions(instanceId, table, request, headers, runtime);
  }

  /**
   * @param request - QueryExceptionHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryExceptionHistoryResponse
   */
  async queryExceptionHistoryWithOptions(instanceId: string, request: QueryExceptionHistoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryExceptionHistoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryExceptionHistory",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sync-reports/exception-history`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryExceptionHistoryResponse>(await this.callApi(params, req, runtime), new QueryExceptionHistoryResponse({}));
  }

  /**
   * @param request - QueryExceptionHistoryRequest
   * @returns QueryExceptionHistoryResponse
   */
  async queryExceptionHistory(instanceId: string, request: QueryExceptionHistoryRequest): Promise<QueryExceptionHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryExceptionHistoryWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries raw data in a specific data table of an instance by using the primary key.
   * 
   * @remarks
   * You can call this operation to query raw data in a specific data table of an instance by using the primary key. The returned results need to be confirmed by customers.
   * 
   * @param request - QueryRawDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRawDataResponse
   */
  async queryRawDataWithOptions(instanceId: string, table: string, request: QueryRawDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryRawDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imei)) {
      query["imei"] = request.imei;
    }

    if (!Util.isUnset(request.itemId)) {
      query["itemId"] = request.itemId;
    }

    if (!Util.isUnset(request.itemType)) {
      query["itemType"] = request.itemType;
    }

    if (!Util.isUnset(request.userId)) {
      query["userId"] = request.userId;
    }

    if (!Util.isUnset(request.userType)) {
      query["userType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRawData",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tables/${OpenApiUtil.getEncodeParam(table)}/raw-data`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryRawDataResponse>(await this.callApi(params, req, runtime), new QueryRawDataResponse({}));
  }

  /**
   * Queries raw data in a specific data table of an instance by using the primary key.
   * 
   * @remarks
   * You can call this operation to query raw data in a specific data table of an instance by using the primary key. The returned results need to be confirmed by customers.
   * 
   * @param request - QueryRawDataRequest
   * @returns QueryRawDataResponse
   */
  async queryRawData(instanceId: string, table: string, request: QueryRawDataRequest): Promise<QueryRawDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryRawDataWithOptions(instanceId, table, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySingleAggregationReportResponse
   */
  async querySingleAggregationReportWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QuerySingleAggregationReportResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "QuerySingleAggregationReport",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sync-reports/single-aggregation-report`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QuerySingleAggregationReportResponse>(await this.callApi(params, req, runtime), new QuerySingleAggregationReportResponse({}));
  }

  /**
   * @returns QuerySingleAggregationReportResponse
   */
  async querySingleAggregationReport(instanceId: string): Promise<QuerySingleAggregationReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySingleAggregationReportWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries a single table report. More report types may be supported.
   * 
   * @param request - QuerySingleReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySingleReportResponse
   */
  async querySingleReportWithOptions(instanceId: string, request: QuerySingleReportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QuerySingleReportResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.reportType)) {
      query["reportType"] = request.reportType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySingleReport",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sync-reports/single-report`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QuerySingleReportResponse>(await this.callApi(params, req, runtime), new QuerySingleReportResponse({}));
  }

  /**
   * Queries a single table report. More report types may be supported.
   * 
   * @param request - QuerySingleReportRequest
   * @returns QuerySingleReportResponse
   */
  async querySingleReport(instanceId: string, request: QuerySingleReportRequest): Promise<QuerySingleReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySingleReportWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the data overview.
   * 
   * @param request - QuerySyncReportAggregationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySyncReportAggregationResponse
   */
  async querySyncReportAggregationWithOptions(instanceId: string, request: QuerySyncReportAggregationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QuerySyncReportAggregationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySyncReportAggregation",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/sync-reports/aggregation`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QuerySyncReportAggregationResponse>(await this.callApi(params, req, runtime), new QuerySyncReportAggregationResponse({}));
  }

  /**
   * Queries the data overview.
   * 
   * @param request - QuerySyncReportAggregationRequest
   * @returns QuerySyncReportAggregationResponse
   */
  async querySyncReportAggregation(instanceId: string, request: QuerySyncReportAggregationRequest): Promise<QuerySyncReportAggregationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySyncReportAggregationWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Rebuilds an index.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebuildIndexResponse
   */
  async rebuildIndexWithOptions(instanceId: string, algorithmId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RebuildIndexResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RebuildIndex",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/filtering-algorithms/${OpenApiUtil.getEncodeParam(algorithmId)}/actions/rebuild`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RebuildIndexResponse>(await this.callApi(params, req, runtime), new RebuildIndexResponse({}));
  }

  /**
   * Rebuilds an index.
   * @returns RebuildIndexResponse
   */
  async rebuildIndex(instanceId: string, algorithmId: string): Promise<RebuildIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rebuildIndexWithOptions(instanceId, algorithmId, headers, runtime);
  }

  /**
   * The type of the recommendation service.
   * 
   * @param request - RecommendRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecommendResponse
   */
  async recommendWithOptions(instanceId: string, request: RecommendRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RecommendResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!Util.isUnset(request.imei)) {
      query["imei"] = request.imei;
    }

    if (!Util.isUnset(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!Util.isUnset(request.items)) {
      query["items"] = request.items;
    }

    if (!Util.isUnset(request.rankOpen)) {
      query["rankOpen"] = request.rankOpen;
    }

    if (!Util.isUnset(request.recType)) {
      query["recType"] = request.recType;
    }

    if (!Util.isUnset(request.returnCount)) {
      query["returnCount"] = request.returnCount;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["sceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.strategy)) {
      query["strategy"] = request.strategy;
    }

    if (!Util.isUnset(request.userId)) {
      query["userId"] = request.userId;
    }

    if (!Util.isUnset(request.userInfo)) {
      query["userInfo"] = request.userInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Recommend",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/actions/recommend`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RecommendResponse>(await this.callApi(params, req, runtime), new RecommendResponse({}));
  }

  /**
   * The type of the recommendation service.
   * 
   * @param request - RecommendRequest
   * @returns RecommendResponse
   */
  async recommend(instanceId: string, request: RecommendRequest): Promise<RecommendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recommendWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Refreshes a feature table based on the source table in MaxCompute. The refresh policy is subject to data in the source table.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshFeatureTableResponse
   */
  async refreshFeatureTableWithOptions(instanceId: string, type: string, featureTableId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RefreshFeatureTableResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RefreshFeatureTable",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/feature-tables/${OpenApiUtil.getEncodeParam(type)}/${OpenApiUtil.getEncodeParam(featureTableId)}/actions/refresh`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RefreshFeatureTableResponse>(await this.callApi(params, req, runtime), new RefreshFeatureTableResponse({}));
  }

  /**
   * Refreshes a feature table based on the source table in MaxCompute. The refresh policy is subject to data in the source table.
   * @returns RefreshFeatureTableResponse
   */
  async refreshFeatureTable(instanceId: string, type: string, featureTableId: string): Promise<RefreshFeatureTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.refreshFeatureTableWithOptions(instanceId, type, featureTableId, headers, runtime);
  }

  /**
   * 回滚某个排序服务
   * 
   * @param request - RollbackRankingSystemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackRankingSystemResponse
   */
  async rollbackRankingSystemWithOptions(instanceId: string, name: string, request: RollbackRankingSystemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RollbackRankingSystemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RollbackRankingSystem",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-systems/${OpenApiUtil.getEncodeParam(name)}/actions/rollback`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RollbackRankingSystemResponse>(await this.callApi(params, req, runtime), new RollbackRankingSystemResponse({}));
  }

  /**
   * 回滚某个排序服务
   * 
   * @param request - RollbackRankingSystemRequest
   * @returns RollbackRankingSystemResponse
   */
  async rollbackRankingSystem(instanceId: string, name: string, request: RollbackRankingSystemRequest): Promise<RollbackRankingSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rollbackRankingSystemWithOptions(instanceId, name, request, headers, runtime);
  }

  /**
   * Runs an instance to start a full data import task.
   * 
   * @remarks
   * You can call this API operation to run an instance to start a full data import task. After you call this API operation, the system creates a dataset. Then, the system imports all data from your data sources into the dataset for data training.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunInstanceResponse
   */
  async runInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RunInstance",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/actions/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RunInstanceResponse>(await this.callApi(params, req, runtime), new RunInstanceResponse({}));
  }

  /**
   * Runs an instance to start a full data import task.
   * 
   * @remarks
   * You can call this API operation to run an instance to start a full data import task. After you call this API operation, the system creates a dataset. Then, the system imports all data from your data sources into the dataset for data training.
   * @returns RunInstanceResponse
   */
  async runInstance(instanceId: string): Promise<RunInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * 启动模型训练
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunRankingModelTemplateResponse
   */
  async runRankingModelTemplateWithOptions(instanceId: string, templateId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunRankingModelTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RunRankingModelTemplate",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-model-templates/${OpenApiUtil.getEncodeParam(templateId)}/actions/run`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RunRankingModelTemplateResponse>(await this.callApi(params, req, runtime), new RunRankingModelTemplateResponse({}));
  }

  /**
   * 启动模型训练
   * @returns RunRankingModelTemplateResponse
   */
  async runRankingModelTemplate(instanceId: string, templateId: string): Promise<RunRankingModelTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runRankingModelTemplateWithOptions(instanceId, templateId, headers, runtime);
  }

  /**
   * Triggers sample formatting configurations.
   * 
   * @param request - RunSampleFormatConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSampleFormatConfigResponse
   */
  async runSampleFormatConfigWithOptions(instanceId: string, sampleId: string, request: RunSampleFormatConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunSampleFormatConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mode)) {
      query["mode"] = request.mode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunSampleFormatConfig",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/samples/${OpenApiUtil.getEncodeParam(sampleId)}/format-configs/actions/run`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RunSampleFormatConfigResponse>(await this.callApi(params, req, runtime), new RunSampleFormatConfigResponse({}));
  }

  /**
   * Triggers sample formatting configurations.
   * 
   * @param request - RunSampleFormatConfigRequest
   * @returns RunSampleFormatConfigResponse
   */
  async runSampleFormatConfig(instanceId: string, sampleId: string, request: RunSampleFormatConfigRequest): Promise<RunSampleFormatConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runSampleFormatConfigWithOptions(instanceId, sampleId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDataSetResponse
   */
  async stopDataSetWithOptions(instanceId: string, versionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopDataSetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopDataSet",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/dataSets/${OpenApiUtil.getEncodeParam(versionId)}/actions/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopDataSetResponse>(await this.callApi(params, req, runtime), new StopDataSetResponse({}));
  }

  /**
   * @returns StopDataSetResponse
   */
  async stopDataSet(instanceId: string, versionId: string): Promise<StopDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopDataSetWithOptions(instanceId, versionId, headers, runtime);
  }

  /**
   * 停止流调任务接口
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopFlowControlTaskResponse
   */
  async stopFlowControlTaskWithOptions(instanceId: string, taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopFlowControlTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopFlowControlTask",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/flowControlTasks/${OpenApiUtil.getEncodeParam(taskId)}/actions/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopFlowControlTaskResponse>(await this.callApi(params, req, runtime), new StopFlowControlTaskResponse({}));
  }

  /**
   * 停止流调任务接口
   * @returns StopFlowControlTaskResponse
   */
  async stopFlowControlTask(instanceId: string, taskId: string): Promise<StopFlowControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopFlowControlTaskWithOptions(instanceId, taskId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnLockIndexVersionResponse
   */
  async unLockIndexVersionWithOptions(instanceId: string, algorithmId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UnLockIndexVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "UnLockIndexVersion",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/filtering-algorithms/${OpenApiUtil.getEncodeParam(algorithmId)}/actions/unlock`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UnLockIndexVersionResponse>(await this.callApi(params, req, runtime), new UnLockIndexVersionResponse({}));
  }

  /**
   * @returns UnLockIndexVersionResponse
   */
  async unLockIndexVersion(instanceId: string, algorithmId: string): Promise<UnLockIndexVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unLockIndexVersionWithOptions(instanceId, algorithmId, headers, runtime);
  }

  /**
   * Updates the basic information about an experiment.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExperimentBasicInfoResponse
   */
  async updateExperimentBasicInfoWithOptions(instanceId: string, sceneId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentBasicInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "UpdateExperimentBasicInfo",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/experiments/${OpenApiUtil.getEncodeParam(experimentId)}/basic`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateExperimentBasicInfoResponse>(await this.callApi(params, req, runtime), new UpdateExperimentBasicInfoResponse({}));
  }

  /**
   * Updates the basic information about an experiment.
   * @returns UpdateExperimentBasicInfoResponse
   */
  async updateExperimentBasicInfo(instanceId: string, sceneId: string, experimentId: string): Promise<UpdateExperimentBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentBasicInfoWithOptions(instanceId, sceneId, experimentId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExperimentConfigResponse
   */
  async updateExperimentConfigWithOptions(instanceId: string, sceneId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "UpdateExperimentConfig",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/experiments/${OpenApiUtil.getEncodeParam(experimentId)}/config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateExperimentConfigResponse>(await this.callApi(params, req, runtime), new UpdateExperimentConfigResponse({}));
  }

  /**
   * @returns UpdateExperimentConfigResponse
   */
  async updateExperimentConfig(instanceId: string, sceneId: string, experimentId: string): Promise<UpdateExperimentConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentConfigWithOptions(instanceId, sceneId, experimentId, headers, runtime);
  }

  /**
   * Updates the state of an experiment.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExperimentStatusResponse
   */
  async updateExperimentStatusWithOptions(instanceId: string, sceneId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "UpdateExperimentStatus",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/experiments/${OpenApiUtil.getEncodeParam(experimentId)}/status`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateExperimentStatusResponse>(await this.callApi(params, req, runtime), new UpdateExperimentStatusResponse({}));
  }

  /**
   * Updates the state of an experiment.
   * @returns UpdateExperimentStatusResponse
   */
  async updateExperimentStatus(instanceId: string, sceneId: string, experimentId: string): Promise<UpdateExperimentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentStatusWithOptions(instanceId, sceneId, experimentId, headers, runtime);
  }

  /**
   * Modifies the quotas of a specified instance.
   * 
   * @remarks
   * You can call this operation to modify the quotas of a specified instance.
   * The limits on the number of users: 1,000,000 to 10,000,000. The limits on the number of items: 1,000,000 to 10,000,000. The limits on the queries per second (QPS) for recommendation requests: 10 to 500.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeInstanceResponse
   */
  async upgradeInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpgradeInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "UpgradeInstance",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/actions/upgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpgradeInstanceResponse>(await this.callApi(params, req, runtime), new UpgradeInstanceResponse({}));
  }

  /**
   * Modifies the quotas of a specified instance.
   * 
   * @remarks
   * You can call this operation to modify the quotas of a specified instance.
   * The limits on the number of users: 1,000,000 to 10,000,000. The limits on the number of items: 1,000,000 to 10,000,000. The limits on the queries per second (QPS) for recommendation requests: 10 to 500.
   * @returns UpgradeInstanceResponse
   */
  async upgradeInstance(instanceId: string): Promise<UpgradeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateInstanceResponse
   */
  async validateInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ValidateInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ValidateInstance",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/actions/validate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ValidateInstanceResponse>(await this.callApi(params, req, runtime), new ValidateInstanceResponse({}));
  }

  /**
   * @returns ValidateInstanceResponse
   */
  async validateInstance(instanceId: string): Promise<ValidateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * 调试排序服务
   * 
   * @param request - VerifyRankingSystemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyRankingSystemResponse
   */
  async verifyRankingSystemWithOptions(instanceId: string, name: string, request: VerifyRankingSystemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VerifyRankingSystemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VerifyRankingSystem",
      version: "2020-11-26",
      protocol: "HTTPS",
      pathname: `/v2/openapi/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ranking-systems/${OpenApiUtil.getEncodeParam(name)}/actions/verify`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VerifyRankingSystemResponse>(await this.callApi(params, req, runtime), new VerifyRankingSystemResponse({}));
  }

  /**
   * 调试排序服务
   * 
   * @param request - VerifyRankingSystemRequest
   * @returns VerifyRankingSystemResponse
   */
  async verifyRankingSystem(instanceId: string, name: string, request: VerifyRankingSystemRequest): Promise<VerifyRankingSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.verifyRankingSystemWithOptions(instanceId, name, request, headers, runtime);
  }

}
