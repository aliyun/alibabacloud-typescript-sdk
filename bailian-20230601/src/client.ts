// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelFineTuneJobRequest extends $tea.Model {
  agentKey?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelFineTuneJobResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelFineTuneJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelFineTuneJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelFineTuneJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFineTuneJobRequest extends $tea.Model {
  agentKey?: string;
  baseModel?: string;
  hyperParameters?: CreateFineTuneJobRequestHyperParameters;
  modelName?: string;
  trainingFiles?: string[];
  trainingType?: string;
  validationFiles?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      baseModel: 'BaseModel',
      hyperParameters: 'HyperParameters',
      modelName: 'ModelName',
      trainingFiles: 'TrainingFiles',
      trainingType: 'TrainingType',
      validationFiles: 'ValidationFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      baseModel: 'string',
      hyperParameters: CreateFineTuneJobRequestHyperParameters,
      modelName: 'string',
      trainingFiles: { 'type': 'array', 'itemType': 'string' },
      trainingType: 'string',
      validationFiles: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFineTuneJobShrinkRequest extends $tea.Model {
  agentKey?: string;
  baseModel?: string;
  hyperParametersShrink?: string;
  modelName?: string;
  trainingFilesShrink?: string;
  trainingType?: string;
  validationFilesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      baseModel: 'BaseModel',
      hyperParametersShrink: 'HyperParameters',
      modelName: 'ModelName',
      trainingFilesShrink: 'TrainingFiles',
      trainingType: 'TrainingType',
      validationFilesShrink: 'ValidationFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      baseModel: 'string',
      hyperParametersShrink: 'string',
      modelName: 'string',
      trainingFilesShrink: 'string',
      trainingType: 'string',
      validationFilesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFineTuneJobResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFineTuneJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFineTuneJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFineTuneJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $tea.Model {
  agentKey?: string;
  model?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      model: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBody extends $tea.Model {
  modelServiceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modelServiceId: 'ModelServiceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelServiceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextEmbeddingsRequest extends $tea.Model {
  agentKey?: string;
  input?: string[];
  textType?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      input: 'Input',
      textType: 'TextType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      input: { 'type': 'array', 'itemType': 'string' },
      textType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextEmbeddingsShrinkRequest extends $tea.Model {
  agentKey?: string;
  inputShrink?: string;
  textType?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      inputShrink: 'Input',
      textType: 'TextType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      inputShrink: 'string',
      textType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextEmbeddingsResponseBody extends $tea.Model {
  code?: string;
  data?: CreateTextEmbeddingsResponseBodyData;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTextEmbeddingsResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextEmbeddingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTextEmbeddingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTextEmbeddingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenRequest extends $tea.Model {
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenResponseBody extends $tea.Model {
  code?: string;
  data?: CreateTokenResponseBodyData;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTokenResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseDataRequest extends $tea.Model {
  agentKey?: string;
  dataId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      dataId: 'DataId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      dataId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseDataResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEnterpriseDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEnterpriseDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFineTuneJobRequest extends $tea.Model {
  agentKey?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFineTuneJobResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFineTuneJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFineTuneJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFineTuneJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceRequest extends $tea.Model {
  agentKey?: string;
  modelServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      modelServiceId: 'ModelServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      modelServiceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponseBody extends $tea.Model {
  modelServiceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modelServiceId: 'ModelServiceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelServiceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFineTuneJobRequest extends $tea.Model {
  agentKey?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFineTuneJobResponseBody extends $tea.Model {
  baseModel?: string;
  fineTunedModel?: string;
  hyperParameters?: DescribeFineTuneJobResponseBodyHyperParameters;
  jobId?: string;
  message?: string;
  modelName?: string;
  requestId?: string;
  status?: string;
  trainingFiles?: string[];
  trainingType?: string;
  validationFiles?: string[];
  static names(): { [key: string]: string } {
    return {
      baseModel: 'BaseModel',
      fineTunedModel: 'FineTunedModel',
      hyperParameters: 'HyperParameters',
      jobId: 'JobId',
      message: 'Message',
      modelName: 'ModelName',
      requestId: 'RequestId',
      status: 'Status',
      trainingFiles: 'TrainingFiles',
      trainingType: 'TrainingType',
      validationFiles: 'ValidationFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseModel: 'string',
      fineTunedModel: 'string',
      hyperParameters: DescribeFineTuneJobResponseBodyHyperParameters,
      jobId: 'string',
      message: 'string',
      modelName: 'string',
      requestId: 'string',
      status: 'string',
      trainingFiles: { 'type': 'array', 'itemType': 'string' },
      trainingType: 'string',
      validationFiles: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFineTuneJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFineTuneJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFineTuneJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceRequest extends $tea.Model {
  agentKey?: string;
  modelServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      modelServiceId: 'ModelServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      modelServiceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceResponseBody extends $tea.Model {
  appId?: string;
  modelServiceId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      modelServiceId: 'ModelServiceId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      modelServiceId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataByDataIdRequest extends $tea.Model {
  agentKey?: string;
  dataId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      dataId: 'DataId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      dataId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataByDataIdResponseBody extends $tea.Model {
  data?: GetEnterpriseDataByDataIdResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetEnterpriseDataByDataIdResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataByDataIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEnterpriseDataByDataIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEnterpriseDataByDataIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataChunkRequest extends $tea.Model {
  agentKey?: string;
  dataId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      dataId: 'DataId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      dataId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataChunkResponseBody extends $tea.Model {
  data?: GetEnterpriseDataChunkResponseBodyData[];
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetEnterpriseDataChunkResponseBodyData },
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataChunkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEnterpriseDataChunkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEnterpriseDataChunkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataPageImageRequest extends $tea.Model {
  agentKey?: string;
  dataId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      dataId: 'DataId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      dataId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataPageImageResponseBody extends $tea.Model {
  data?: GetEnterpriseDataPageImageResponseBodyData[];
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetEnterpriseDataPageImageResponseBodyData },
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataPageImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEnterpriseDataPageImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEnterpriseDataPageImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataParseResultRequest extends $tea.Model {
  agentKey?: string;
  dataId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      dataId: 'DataId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      dataId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataParseResultResponseBody extends $tea.Model {
  data?: string;
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataParseResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEnterpriseDataParseResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEnterpriseDataParseResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImportTaskResultRequest extends $tea.Model {
  agentKey?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImportTaskResultResponseBody extends $tea.Model {
  data?: GetImportTaskResultResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetImportTaskResultResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImportTaskResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetImportTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetImportTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportEnterpriseDocumentRequest extends $tea.Model {
  agentKey?: string;
  documentList?: ImportEnterpriseDocumentRequestDocumentList[];
  ownerId?: number;
  storeId?: number;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documentList: 'DocumentList',
      ownerId: 'OwnerId',
      storeId: 'StoreId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documentList: { 'type': 'array', 'itemType': ImportEnterpriseDocumentRequestDocumentList },
      ownerId: 'number',
      storeId: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportEnterpriseDocumentShrinkRequest extends $tea.Model {
  agentKey?: string;
  documentListShrink?: string;
  ownerId?: number;
  storeId?: number;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documentListShrink: 'DocumentList',
      ownerId: 'OwnerId',
      storeId: 'StoreId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documentListShrink: 'string',
      ownerId: 'number',
      storeId: 'number',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportEnterpriseDocumentResponseBody extends $tea.Model {
  data?: string;
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportEnterpriseDocumentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportEnterpriseDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportEnterpriseDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFineTuneJobsRequest extends $tea.Model {
  agentKey?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFineTuneJobsResponseBody extends $tea.Model {
  jobs?: ListFineTuneJobsResponseBodyJobs[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListFineTuneJobsResponseBodyJobs },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFineTuneJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFineTuneJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFineTuneJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $tea.Model {
  agentKey?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $tea.Model {
  modelServices?: ListServicesResponseBodyModelServices[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      modelServices: 'ModelServices',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelServices: { 'type': 'array', 'itemType': ListServicesResponseBodyModelServices },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseDataListRequest extends $tea.Model {
  agentKey?: string;
  dataName?: string;
  pageNo?: number;
  pageSize?: number;
  storeType?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      dataName: 'DataName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      storeType: 'StoreType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      dataName: 'string',
      pageNo: 'number',
      pageSize: 'number',
      storeType: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseDataListShrinkRequest extends $tea.Model {
  agentKey?: string;
  dataName?: string;
  pageNo?: number;
  pageSize?: number;
  storeType?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      dataName: 'DataName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      storeType: 'StoreType',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      dataName: 'string',
      pageNo: 'number',
      pageSize: 'number',
      storeType: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseDataListResponseBody extends $tea.Model {
  data?: QueryEnterpriseDataListResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryEnterpriseDataListResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseDataListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryEnterpriseDataListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryEnterpriseDataListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEnterpriseDataRequest extends $tea.Model {
  agentKey?: string;
  dataIdList?: string[];
  enableRank?: boolean;
  ownerId?: number;
  query?: string;
  storeId?: number;
  tagIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      dataIdList: 'DataIdList',
      enableRank: 'EnableRank',
      ownerId: 'OwnerId',
      query: 'Query',
      storeId: 'StoreId',
      tagIdList: 'TagIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      dataIdList: { 'type': 'array', 'itemType': 'string' },
      enableRank: 'boolean',
      ownerId: 'number',
      query: 'string',
      storeId: 'number',
      tagIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEnterpriseDataShrinkRequest extends $tea.Model {
  agentKey?: string;
  dataIdListShrink?: string;
  enableRank?: boolean;
  ownerId?: number;
  query?: string;
  storeId?: number;
  tagIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      dataIdListShrink: 'DataIdList',
      enableRank: 'EnableRank',
      ownerId: 'OwnerId',
      query: 'Query',
      storeId: 'StoreId',
      tagIdListShrink: 'TagIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      dataIdListShrink: 'string',
      enableRank: 'boolean',
      ownerId: 'number',
      query: 'string',
      storeId: 'number',
      tagIdListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEnterpriseDataResponseBody extends $tea.Model {
  data?: SearchEnterpriseDataResponseBodyData[];
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': SearchEnterpriseDataResponseBodyData },
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEnterpriseDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchEnterpriseDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchEnterpriseDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFineTuneJobRequestHyperParameters extends $tea.Model {
  batchSize?: number;
  epochs?: number;
  learningRate?: string;
  promptLossWeight?: number;
  static names(): { [key: string]: string } {
    return {
      batchSize: 'BatchSize',
      epochs: 'Epochs',
      learningRate: 'LearningRate',
      promptLossWeight: 'PromptLossWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchSize: 'number',
      epochs: 'number',
      learningRate: 'string',
      promptLossWeight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextEmbeddingsResponseBodyDataEmbeddings extends $tea.Model {
  embedding?: number[];
  textIndex?: number;
  static names(): { [key: string]: string } {
    return {
      embedding: 'Embedding',
      textIndex: 'TextIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedding: { 'type': 'array', 'itemType': 'number' },
      textIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextEmbeddingsResponseBodyData extends $tea.Model {
  embeddings?: CreateTextEmbeddingsResponseBodyDataEmbeddings[];
  static names(): { [key: string]: string } {
    return {
      embeddings: 'Embeddings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddings: { 'type': 'array', 'itemType': CreateTextEmbeddingsResponseBodyDataEmbeddings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenResponseBodyData extends $tea.Model {
  expiredTime?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'number',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFineTuneJobResponseBodyHyperParameters extends $tea.Model {
  batchSize?: number;
  epochs?: number;
  learningRate?: string;
  promptLossWeight?: number;
  static names(): { [key: string]: string } {
    return {
      batchSize: 'BatchSize',
      epochs: 'Epochs',
      learningRate: 'LearningRate',
      promptLossWeight: 'PromptLossWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchSize: 'number',
      epochs: 'number',
      learningRate: 'string',
      promptLossWeight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataByDataIdResponseBodyData extends $tea.Model {
  dataId?: string;
  dataName?: string;
  dataSize?: string;
  dataStatus?: string;
  dataStatusCode?: number;
  dataType?: string;
  dataTypeCode?: number;
  downloadUrl?: string;
  statusDetail?: string;
  storeType?: string;
  tags?: string;
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      dataName: 'DataName',
      dataSize: 'DataSize',
      dataStatus: 'DataStatus',
      dataStatusCode: 'DataStatusCode',
      dataType: 'DataType',
      dataTypeCode: 'DataTypeCode',
      downloadUrl: 'DownloadUrl',
      statusDetail: 'StatusDetail',
      storeType: 'StoreType',
      tags: 'Tags',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      dataName: 'string',
      dataSize: 'string',
      dataStatus: 'string',
      dataStatusCode: 'number',
      dataType: 'string',
      dataTypeCode: 'number',
      downloadUrl: 'string',
      statusDetail: 'string',
      storeType: 'string',
      tags: 'string',
      uploadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataChunkResponseBodyData extends $tea.Model {
  text?: string;
  title?: string;
  titlePath?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      title: 'Title',
      titlePath: 'TitlePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      title: 'string',
      titlePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDataPageImageResponseBodyData extends $tea.Model {
  height?: number;
  imageUrl?: string;
  pageId?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      imageUrl: 'ImageUrl',
      pageId: 'PageId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      imageUrl: 'string',
      pageId: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImportTaskResultResponseBodyDataDetails extends $tea.Model {
  dataId?: string;
  dataName?: string;
  errorMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      dataName: 'DataName',
      errorMsg: 'ErrorMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      dataName: 'string',
      errorMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImportTaskResultResponseBodyData extends $tea.Model {
  details?: GetImportTaskResultResponseBodyDataDetails[];
  taskId?: string;
  taskStatus?: number;
  taskStatusText?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      taskStatusText: 'TaskStatusText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': GetImportTaskResultResponseBodyDataDetails },
      taskId: 'string',
      taskStatus: 'number',
      taskStatusText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportEnterpriseDocumentRequestDocumentList extends $tea.Model {
  bizId?: string;
  fileCanDownload?: boolean;
  fileLink?: string;
  fileName?: string;
  filePreviewLink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      fileCanDownload: 'FileCanDownload',
      fileLink: 'FileLink',
      fileName: 'FileName',
      filePreviewLink: 'FilePreviewLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      fileCanDownload: 'boolean',
      fileLink: 'string',
      fileName: 'string',
      filePreviewLink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFineTuneJobsResponseBodyJobsHyperParameters extends $tea.Model {
  batchSize?: number;
  epochs?: number;
  learningRate?: string;
  promptLossWeight?: number;
  static names(): { [key: string]: string } {
    return {
      batchSize: 'BatchSize',
      epochs: 'Epochs',
      learningRate: 'LearningRate',
      promptLossWeight: 'PromptLossWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchSize: 'number',
      epochs: 'number',
      learningRate: 'string',
      promptLossWeight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFineTuneJobsResponseBodyJobs extends $tea.Model {
  baseModel?: string;
  fineTunedModel?: string;
  hyperParameters?: ListFineTuneJobsResponseBodyJobsHyperParameters;
  jobId?: string;
  message?: string;
  modelName?: string;
  status?: string;
  trainingFiles?: string[];
  trainingType?: string;
  validationFiles?: string[];
  static names(): { [key: string]: string } {
    return {
      baseModel: 'BaseModel',
      fineTunedModel: 'FineTunedModel',
      hyperParameters: 'HyperParameters',
      jobId: 'JobId',
      message: 'Message',
      modelName: 'ModelName',
      status: 'Status',
      trainingFiles: 'TrainingFiles',
      trainingType: 'TrainingType',
      validationFiles: 'ValidationFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseModel: 'string',
      fineTunedModel: 'string',
      hyperParameters: ListFineTuneJobsResponseBodyJobsHyperParameters,
      jobId: 'string',
      message: 'string',
      modelName: 'string',
      status: 'string',
      trainingFiles: { 'type': 'array', 'itemType': 'string' },
      trainingType: 'string',
      validationFiles: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyModelServices extends $tea.Model {
  appId?: string;
  modelServiceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      modelServiceId: 'ModelServiceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      modelServiceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseDataListResponseBodyDataList extends $tea.Model {
  dataId?: string;
  dataName?: string;
  dataSize?: string;
  dataStatus?: string;
  dataStatusCode?: number;
  dataType?: string;
  dataTypeCode?: number;
  downloadUrl?: string;
  statusDetail?: string;
  storeType?: string;
  tags?: string;
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      dataName: 'DataName',
      dataSize: 'DataSize',
      dataStatus: 'DataStatus',
      dataStatusCode: 'DataStatusCode',
      dataType: 'DataType',
      dataTypeCode: 'DataTypeCode',
      downloadUrl: 'DownloadUrl',
      statusDetail: 'StatusDetail',
      storeType: 'StoreType',
      tags: 'Tags',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      dataName: 'string',
      dataSize: 'string',
      dataStatus: 'string',
      dataStatusCode: 'number',
      dataType: 'string',
      dataTypeCode: 'number',
      downloadUrl: 'string',
      statusDetail: 'string',
      storeType: 'string',
      tags: 'string',
      uploadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseDataListResponseBodyData extends $tea.Model {
  list?: QueryEnterpriseDataListResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': QueryEnterpriseDataListResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEnterpriseDataResponseBodyData extends $tea.Model {
  dataId?: string;
  dataName?: string;
  score?: string;
  source?: string;
  text?: string;
  title?: string;
  titlePath?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      dataName: 'DataName',
      score: 'Score',
      source: 'Source',
      text: 'Text',
      title: 'Title',
      titlePath: 'TitlePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      dataName: 'string',
      score: 'string',
      source: 'string',
      text: 'string',
      title: 'string',
      titlePath: 'string',
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
    this._endpoint = this.getEndpoint("bailian", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async cancelFineTuneJobWithOptions(request: CancelFineTuneJobRequest, runtime: $Util.RuntimeOptions): Promise<CancelFineTuneJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelFineTuneJob",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelFineTuneJobResponse>(await this.callApi(params, req, runtime), new CancelFineTuneJobResponse({}));
  }

  async cancelFineTuneJob(request: CancelFineTuneJobRequest): Promise<CancelFineTuneJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelFineTuneJobWithOptions(request, runtime);
  }

  async createFineTuneJobWithOptions(tmpReq: CreateFineTuneJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateFineTuneJobResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateFineTuneJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.hyperParameters)) {
      request.hyperParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hyperParameters, "HyperParameters", "json");
    }

    if (!Util.isUnset(tmpReq.trainingFiles)) {
      request.trainingFilesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.trainingFiles, "TrainingFiles", "json");
    }

    if (!Util.isUnset(tmpReq.validationFiles)) {
      request.validationFilesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.validationFiles, "ValidationFiles", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.baseModel)) {
      body["BaseModel"] = request.baseModel;
    }

    if (!Util.isUnset(request.hyperParametersShrink)) {
      body["HyperParameters"] = request.hyperParametersShrink;
    }

    if (!Util.isUnset(request.modelName)) {
      body["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.trainingFilesShrink)) {
      body["TrainingFiles"] = request.trainingFilesShrink;
    }

    if (!Util.isUnset(request.trainingType)) {
      body["TrainingType"] = request.trainingType;
    }

    if (!Util.isUnset(request.validationFilesShrink)) {
      body["ValidationFiles"] = request.validationFilesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFineTuneJob",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFineTuneJobResponse>(await this.callApi(params, req, runtime), new CreateFineTuneJobResponse({}));
  }

  async createFineTuneJob(request: CreateFineTuneJobRequest): Promise<CreateFineTuneJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFineTuneJobWithOptions(request, runtime);
  }

  async createServiceWithOptions(request: CreateServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateService",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceResponse>(await this.callApi(params, req, runtime), new CreateServiceResponse({}));
  }

  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceWithOptions(request, runtime);
  }

  async createTextEmbeddingsWithOptions(tmpReq: CreateTextEmbeddingsRequest, runtime: $Util.RuntimeOptions): Promise<CreateTextEmbeddingsResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTextEmbeddingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!Util.isUnset(request.textType)) {
      query["TextType"] = request.textType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTextEmbeddings",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTextEmbeddingsResponse>(await this.callApi(params, req, runtime), new CreateTextEmbeddingsResponse({}));
  }

  async createTextEmbeddings(request: CreateTextEmbeddingsRequest): Promise<CreateTextEmbeddingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTextEmbeddingsWithOptions(request, runtime);
  }

  async createTokenWithOptions(request: CreateTokenRequest, runtime: $Util.RuntimeOptions): Promise<CreateTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateToken",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTokenResponse>(await this.callApi(params, req, runtime), new CreateTokenResponse({}));
  }

  async createToken(request: CreateTokenRequest): Promise<CreateTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTokenWithOptions(request, runtime);
  }

  async deleteEnterpriseDataWithOptions(request: DeleteEnterpriseDataRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEnterpriseDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEnterpriseData",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEnterpriseDataResponse>(await this.callApi(params, req, runtime), new DeleteEnterpriseDataResponse({}));
  }

  async deleteEnterpriseData(request: DeleteEnterpriseDataRequest): Promise<DeleteEnterpriseDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEnterpriseDataWithOptions(request, runtime);
  }

  async deleteFineTuneJobWithOptions(request: DeleteFineTuneJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFineTuneJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFineTuneJob",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFineTuneJobResponse>(await this.callApi(params, req, runtime), new DeleteFineTuneJobResponse({}));
  }

  async deleteFineTuneJob(request: DeleteFineTuneJobRequest): Promise<DeleteFineTuneJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFineTuneJobWithOptions(request, runtime);
  }

  async deleteServiceWithOptions(request: DeleteServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modelServiceId)) {
      body["ModelServiceId"] = request.modelServiceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteService",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceResponse>(await this.callApi(params, req, runtime), new DeleteServiceResponse({}));
  }

  async deleteService(request: DeleteServiceRequest): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceWithOptions(request, runtime);
  }

  async describeFineTuneJobWithOptions(request: DescribeFineTuneJobRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFineTuneJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFineTuneJob",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFineTuneJobResponse>(await this.callApi(params, req, runtime), new DescribeFineTuneJobResponse({}));
  }

  async describeFineTuneJob(request: DescribeFineTuneJobRequest): Promise<DescribeFineTuneJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFineTuneJobWithOptions(request, runtime);
  }

  async describeServiceWithOptions(request: DescribeServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modelServiceId)) {
      body["ModelServiceId"] = request.modelServiceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeService",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceResponse>(await this.callApi(params, req, runtime), new DescribeServiceResponse({}));
  }

  async describeService(request: DescribeServiceRequest): Promise<DescribeServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceWithOptions(request, runtime);
  }

  async getEnterpriseDataByDataIdWithOptions(request: GetEnterpriseDataByDataIdRequest, runtime: $Util.RuntimeOptions): Promise<GetEnterpriseDataByDataIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEnterpriseDataByDataId",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEnterpriseDataByDataIdResponse>(await this.callApi(params, req, runtime), new GetEnterpriseDataByDataIdResponse({}));
  }

  async getEnterpriseDataByDataId(request: GetEnterpriseDataByDataIdRequest): Promise<GetEnterpriseDataByDataIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEnterpriseDataByDataIdWithOptions(request, runtime);
  }

  async getEnterpriseDataChunkWithOptions(request: GetEnterpriseDataChunkRequest, runtime: $Util.RuntimeOptions): Promise<GetEnterpriseDataChunkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEnterpriseDataChunk",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEnterpriseDataChunkResponse>(await this.callApi(params, req, runtime), new GetEnterpriseDataChunkResponse({}));
  }

  async getEnterpriseDataChunk(request: GetEnterpriseDataChunkRequest): Promise<GetEnterpriseDataChunkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEnterpriseDataChunkWithOptions(request, runtime);
  }

  async getEnterpriseDataPageImageWithOptions(request: GetEnterpriseDataPageImageRequest, runtime: $Util.RuntimeOptions): Promise<GetEnterpriseDataPageImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEnterpriseDataPageImage",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEnterpriseDataPageImageResponse>(await this.callApi(params, req, runtime), new GetEnterpriseDataPageImageResponse({}));
  }

  async getEnterpriseDataPageImage(request: GetEnterpriseDataPageImageRequest): Promise<GetEnterpriseDataPageImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEnterpriseDataPageImageWithOptions(request, runtime);
  }

  async getEnterpriseDataParseResultWithOptions(request: GetEnterpriseDataParseResultRequest, runtime: $Util.RuntimeOptions): Promise<GetEnterpriseDataParseResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEnterpriseDataParseResult",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEnterpriseDataParseResultResponse>(await this.callApi(params, req, runtime), new GetEnterpriseDataParseResultResponse({}));
  }

  async getEnterpriseDataParseResult(request: GetEnterpriseDataParseResultRequest): Promise<GetEnterpriseDataParseResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEnterpriseDataParseResultWithOptions(request, runtime);
  }

  async getImportTaskResultWithOptions(request: GetImportTaskResultRequest, runtime: $Util.RuntimeOptions): Promise<GetImportTaskResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetImportTaskResult",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetImportTaskResultResponse>(await this.callApi(params, req, runtime), new GetImportTaskResultResponse({}));
  }

  async getImportTaskResult(request: GetImportTaskResultRequest): Promise<GetImportTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImportTaskResultWithOptions(request, runtime);
  }

  async importEnterpriseDocumentWithOptions(tmpReq: ImportEnterpriseDocumentRequest, runtime: $Util.RuntimeOptions): Promise<ImportEnterpriseDocumentResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportEnterpriseDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.documentList)) {
      request.documentListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentList, "DocumentList", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.documentListShrink)) {
      query["DocumentList"] = request.documentListShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.storeId)) {
      query["StoreId"] = request.storeId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportEnterpriseDocument",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportEnterpriseDocumentResponse>(await this.callApi(params, req, runtime), new ImportEnterpriseDocumentResponse({}));
  }

  async importEnterpriseDocument(request: ImportEnterpriseDocumentRequest): Promise<ImportEnterpriseDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importEnterpriseDocumentWithOptions(request, runtime);
  }

  async listFineTuneJobsWithOptions(request: ListFineTuneJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListFineTuneJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFineTuneJobs",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFineTuneJobsResponse>(await this.callApi(params, req, runtime), new ListFineTuneJobsResponse({}));
  }

  async listFineTuneJobs(request: ListFineTuneJobsRequest): Promise<ListFineTuneJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFineTuneJobsWithOptions(request, runtime);
  }

  async listServicesWithOptions(request: ListServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agentKey)) {
      body["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListServices",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
  }

  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServicesWithOptions(request, runtime);
  }

  async queryEnterpriseDataListWithOptions(tmpReq: QueryEnterpriseDataListRequest, runtime: $Util.RuntimeOptions): Promise<QueryEnterpriseDataListResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryEnterpriseDataListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.dataName)) {
      query["DataName"] = request.dataName;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.storeType)) {
      query["StoreType"] = request.storeType;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryEnterpriseDataList",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEnterpriseDataListResponse>(await this.callApi(params, req, runtime), new QueryEnterpriseDataListResponse({}));
  }

  async queryEnterpriseDataList(request: QueryEnterpriseDataListRequest): Promise<QueryEnterpriseDataListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEnterpriseDataListWithOptions(request, runtime);
  }

  async searchEnterpriseDataWithOptions(tmpReq: SearchEnterpriseDataRequest, runtime: $Util.RuntimeOptions): Promise<SearchEnterpriseDataResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchEnterpriseDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dataIdList)) {
      request.dataIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataIdList, "DataIdList", "json");
    }

    if (!Util.isUnset(tmpReq.tagIdList)) {
      request.tagIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagIdList, "TagIdList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.dataIdListShrink)) {
      query["DataIdList"] = request.dataIdListShrink;
    }

    if (!Util.isUnset(request.enableRank)) {
      query["EnableRank"] = request.enableRank;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.storeId)) {
      query["StoreId"] = request.storeId;
    }

    if (!Util.isUnset(request.tagIdListShrink)) {
      query["TagIdList"] = request.tagIdListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchEnterpriseData",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchEnterpriseDataResponse>(await this.callApi(params, req, runtime), new SearchEnterpriseDataResponse({}));
  }

  async searchEnterpriseData(request: SearchEnterpriseDataRequest): Promise<SearchEnterpriseDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchEnterpriseDataWithOptions(request, runtime);
  }

}
