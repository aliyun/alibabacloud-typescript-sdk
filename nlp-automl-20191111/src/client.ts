// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateAsyncPredictRequest extends $tea.Model {
  modelId?: number;
  content?: string;
  modelVersion?: string;
  detailTag?: string;
  topK?: number;
  fileType?: string;
  fileUrl?: string;
  fileContent?: string;
  fetchContent?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      content: 'Content',
      modelVersion: 'ModelVersion',
      detailTag: 'DetailTag',
      topK: 'TopK',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      fileContent: 'FileContent',
      fetchContent: 'FetchContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      content: 'string',
      modelVersion: 'string',
      detailTag: 'string',
      topK: 'number',
      fileType: 'string',
      fileUrl: 'string',
      fileContent: 'string',
      fetchContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsyncPredictResponseBody extends $tea.Model {
  requestId?: string;
  asyncPredictId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      asyncPredictId: 'AsyncPredictId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      asyncPredictId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsyncPredictResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAsyncPredictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAsyncPredictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequest extends $tea.Model {
  projectId?: number;
  datasetName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      datasetName: 'DatasetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      datasetName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  datasetId?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      datasetId: 'DatasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
      datasetId: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRecordRequest extends $tea.Model {
  datasetId?: number;
  datasetRecord?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetRecord: 'DatasetRecord',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetRecord: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRecordResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  datasetRecordId?: { [key: string]: any };
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      datasetRecordId: 'DatasetRecordId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      datasetRecordId: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDatasetRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDatasetRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequest extends $tea.Model {
  modelId?: number;
  modelType?: string;
  projectId?: number;
  modelName?: string;
  datasetIdList?: { [key: string]: any };
  testDatasetIdList?: { [key: string]: any };
  isIncrementalTrain?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      modelType: 'ModelType',
      projectId: 'ProjectId',
      modelName: 'ModelName',
      datasetIdList: 'DatasetIdList',
      testDatasetIdList: 'TestDatasetIdList',
      isIncrementalTrain: 'IsIncrementalTrain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      modelType: 'string',
      projectId: 'number',
      modelName: 'string',
      datasetIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      testDatasetIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      isIncrementalTrain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelShrinkRequest extends $tea.Model {
  modelId?: number;
  modelType?: string;
  projectId?: number;
  modelName?: string;
  datasetIdListShrink?: string;
  testDatasetIdListShrink?: string;
  isIncrementalTrain?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      modelType: 'ModelType',
      projectId: 'ProjectId',
      modelName: 'ModelName',
      datasetIdListShrink: 'DatasetIdList',
      testDatasetIdListShrink: 'TestDatasetIdList',
      isIncrementalTrain: 'IsIncrementalTrain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      modelType: 'string',
      projectId: 'number',
      modelName: 'string',
      datasetIdListShrink: 'string',
      testDatasetIdListShrink: 'string',
      isIncrementalTrain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  projectType?: string;
  projectName?: string;
  projectDescription?: string;
  static names(): { [key: string]: string } {
    return {
      projectType: 'ProjectType',
      projectName: 'ProjectName',
      projectDescription: 'ProjectDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectType: 'string',
      projectName: 'string',
      projectDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  projectId?: { [key: string]: any };
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      projectId: 'ProjectId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      projectId: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelRequest extends $tea.Model {
  modelId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployModelRequest extends $tea.Model {
  modelId?: number;
  optType?: string;
  projectId?: number;
  modelVersion?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      optType: 'OptType',
      projectId: 'ProjectId',
      modelVersion: 'ModelVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      optType: 'string',
      projectId: 'number',
      modelVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployModelResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncPredictRequest extends $tea.Model {
  asyncPredictId?: number;
  static names(): { [key: string]: string } {
    return {
      asyncPredictId: 'AsyncPredictId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncPredictId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncPredictResponseBody extends $tea.Model {
  status?: number;
  requestId?: string;
  content?: string;
  asyncPredictId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      content: 'Content',
      asyncPredictId: 'AsyncPredictId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      requestId: 'string',
      content: 'string',
      asyncPredictId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncPredictResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAsyncPredictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAsyncPredictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelRequest extends $tea.Model {
  modelId?: number;
  projectId?: number;
  modelVersion?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      projectId: 'ProjectId',
      modelVersion: 'ModelVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      projectId: 'number',
      modelVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeaturesInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeaturesInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetModelFeaturesInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetModelFeaturesInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictResultRequest extends $tea.Model {
  modelId?: number;
  content?: string;
  modelVersion?: string;
  detailTag?: string;
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      content: 'Content',
      modelVersion: 'ModelVersion',
      detailTag: 'DetailTag',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      content: 'string',
      modelVersion: 'string',
      detailTag: 'string',
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictResultResponseBody extends $tea.Model {
  requestId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPredictResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPredictResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetRequest extends $tea.Model {
  projectId?: number;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsRequest extends $tea.Model {
  projectId?: number;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContactReviewRequest extends $tea.Model {
  contactScene?: string;
  contactPath?: string;
  static names(): { [key: string]: string } {
    return {
      contactScene: 'ContactScene',
      contactPath: 'ContactPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactScene: 'string',
      contactPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContactReviewResponseBody extends $tea.Model {
  requestId?: string;
  rawContractContent?: string;
  contactContent?: RunContactReviewResponseBodyContactContent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rawContractContent: 'RawContractContent',
      contactContent: 'ContactContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rawContractContent: 'string',
      contactContent: RunContactReviewResponseBodyContactContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContactReviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunContactReviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunContactReviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPreTrainServiceRequest extends $tea.Model {
  serviceName?: string;
  serviceVersion?: string;
  predictContent?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
      serviceVersion: 'ServiceVersion',
      predictContent: 'PredictContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
      serviceVersion: 'string',
      predictContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPreTrainServiceResponseBody extends $tea.Model {
  requestId?: string;
  predictResult?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      predictResult: 'PredictResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      predictResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPreTrainServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunPreTrainServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunPreTrainServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSmartCallServiceRequest extends $tea.Model {
  serviceName?: string;
  paramContent?: string;
  robotId?: number;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
      paramContent: 'ParamContent',
      robotId: 'RobotId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
      paramContent: 'string',
      robotId: 'number',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSmartCallServiceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSmartCallServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunSmartCallServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunSmartCallServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContactReviewResponseBodyContactContentReviewResults extends $tea.Model {
  riskLevel?: string;
  type?: string;
  value?: string[];
  startPosition?: string[];
  modificationSuggestion?: string;
  reason?: string;
  endPosition?: string[];
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      type: 'Type',
      value: 'Value',
      startPosition: 'StartPosition',
      modificationSuggestion: 'ModificationSuggestion',
      reason: 'Reason',
      endPosition: 'EndPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      type: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
      startPosition: { 'type': 'array', 'itemType': 'string' },
      modificationSuggestion: 'string',
      reason: 'string',
      endPosition: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContactReviewResponseBodyContactContentStructureResults extends $tea.Model {
  type?: string;
  value?: string[];
  startPosition?: string[];
  name?: string;
  endPosition?: string[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      startPosition: 'StartPosition',
      name: 'Name',
      endPosition: 'EndPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
      startPosition: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      endPosition: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContactReviewResponseBodyContactContent extends $tea.Model {
  reviewResults?: RunContactReviewResponseBodyContactContentReviewResults[];
  structureResults?: RunContactReviewResponseBodyContactContentStructureResults[];
  static names(): { [key: string]: string } {
    return {
      reviewResults: 'ReviewResults',
      structureResults: 'StructureResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewResults: { 'type': 'array', 'itemType': RunContactReviewResponseBodyContactContentReviewResults },
      structureResults: { 'type': 'array', 'itemType': RunContactReviewResponseBodyContactContentStructureResults },
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
    this._endpoint = this.getEndpoint("nlp-automl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createAsyncPredictWithOptions(request: CreateAsyncPredictRequest, runtime: $Util.RuntimeOptions): Promise<CreateAsyncPredictResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateAsyncPredict",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAsyncPredictResponse>(await this.callApi(params, req, runtime), new CreateAsyncPredictResponse({}));
  }

  async createAsyncPredict(request: CreateAsyncPredictRequest): Promise<CreateAsyncPredictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAsyncPredictWithOptions(request, runtime);
  }

  async createDatasetWithOptions(request: CreateDatasetRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatasetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataset",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDatasetResponse>(await this.callApi(params, req, runtime), new CreateDatasetResponse({}));
  }

  async createDataset(request: CreateDatasetRequest): Promise<CreateDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatasetWithOptions(request, runtime);
  }

  async createDatasetRecordWithOptions(request: CreateDatasetRecordRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatasetRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateDatasetRecord",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDatasetRecordResponse>(await this.callApi(params, req, runtime), new CreateDatasetRecordResponse({}));
  }

  async createDatasetRecord(request: CreateDatasetRecordRequest): Promise<CreateDatasetRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatasetRecordWithOptions(request, runtime);
  }

  async createModelWithOptions(tmpReq: CreateModelRequest, runtime: $Util.RuntimeOptions): Promise<CreateModelResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateModelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.datasetIdList)) {
      request.datasetIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.datasetIdList, "DatasetIdList", "json");
    }

    if (!Util.isUnset(tmpReq.testDatasetIdList)) {
      request.testDatasetIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.testDatasetIdList, "TestDatasetIdList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateModel",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateModelResponse>(await this.callApi(params, req, runtime), new CreateModelResponse({}));
  }

  async createModel(request: CreateModelRequest): Promise<CreateModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createModelWithOptions(request, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async deleteModelWithOptions(request: DeleteModelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteModel",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteModelResponse>(await this.callApi(params, req, runtime), new DeleteModelResponse({}));
  }

  async deleteModel(request: DeleteModelRequest): Promise<DeleteModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteModelWithOptions(request, runtime);
  }

  async deployModelWithOptions(request: DeployModelRequest, runtime: $Util.RuntimeOptions): Promise<DeployModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeployModel",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployModelResponse>(await this.callApi(params, req, runtime), new DeployModelResponse({}));
  }

  async deployModel(request: DeployModelRequest): Promise<DeployModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployModelWithOptions(request, runtime);
  }

  async getAsyncPredictWithOptions(request: GetAsyncPredictRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncPredictResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncPredict",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAsyncPredictResponse>(await this.callApi(params, req, runtime), new GetAsyncPredictResponse({}));
  }

  async getAsyncPredict(request: GetAsyncPredictRequest): Promise<GetAsyncPredictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncPredictWithOptions(request, runtime);
  }

  async getModelWithOptions(request: GetModelRequest, runtime: $Util.RuntimeOptions): Promise<GetModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetModel",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetModelResponse>(await this.callApi(params, req, runtime), new GetModelResponse({}));
  }

  async getModel(request: GetModelRequest): Promise<GetModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getModelWithOptions(request, runtime);
  }

  async getModelFeaturesInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<GetModelFeaturesInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetModelFeaturesInfo",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetModelFeaturesInfoResponse>(await this.callApi(params, req, runtime), new GetModelFeaturesInfoResponse({}));
  }

  async getModelFeaturesInfo(): Promise<GetModelFeaturesInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getModelFeaturesInfoWithOptions(runtime);
  }

  async getPredictResultWithOptions(request: GetPredictResultRequest, runtime: $Util.RuntimeOptions): Promise<GetPredictResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetPredictResult",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPredictResultResponse>(await this.callApi(params, req, runtime), new GetPredictResultResponse({}));
  }

  async getPredictResult(request: GetPredictResultRequest): Promise<GetPredictResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPredictResultWithOptions(request, runtime);
  }

  async listDatasetWithOptions(request: ListDatasetRequest, runtime: $Util.RuntimeOptions): Promise<ListDatasetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListDataset",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDatasetResponse>(await this.callApi(params, req, runtime), new ListDatasetResponse({}));
  }

  async listDataset(request: ListDatasetRequest): Promise<ListDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatasetWithOptions(request, runtime);
  }

  async listModelsWithOptions(request: ListModelsRequest, runtime: $Util.RuntimeOptions): Promise<ListModelsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListModels",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListModelsResponse>(await this.callApi(params, req, runtime), new ListModelsResponse({}));
  }

  async listModels(request: ListModelsRequest): Promise<ListModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listModelsWithOptions(request, runtime);
  }

  async runContactReviewWithOptions(request: RunContactReviewRequest, runtime: $Util.RuntimeOptions): Promise<RunContactReviewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RunContactReview",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunContactReviewResponse>(await this.callApi(params, req, runtime), new RunContactReviewResponse({}));
  }

  async runContactReview(request: RunContactReviewRequest): Promise<RunContactReviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runContactReviewWithOptions(request, runtime);
  }

  async runPreTrainServiceWithOptions(request: RunPreTrainServiceRequest, runtime: $Util.RuntimeOptions): Promise<RunPreTrainServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RunPreTrainService",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunPreTrainServiceResponse>(await this.callApi(params, req, runtime), new RunPreTrainServiceResponse({}));
  }

  async runPreTrainService(request: RunPreTrainServiceRequest): Promise<RunPreTrainServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runPreTrainServiceWithOptions(request, runtime);
  }

  async runSmartCallServiceWithOptions(request: RunSmartCallServiceRequest, runtime: $Util.RuntimeOptions): Promise<RunSmartCallServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RunSmartCallService",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunSmartCallServiceResponse>(await this.callApi(params, req, runtime), new RunSmartCallServiceResponse({}));
  }

  async runSmartCallService(request: RunSmartCallServiceRequest): Promise<RunSmartCallServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runSmartCallServiceWithOptions(request, runtime);
  }

}
