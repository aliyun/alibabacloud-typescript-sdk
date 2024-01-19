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

export class CreateDocumentTagRequest extends $tea.Model {
  agentKey?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentTagResponseBody extends $tea.Model {
  requestId?: string;
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDocumentTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDocumentTagResponseBody,
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

export class DeleteDocRequest extends $tea.Model {
  agentKey?: string;
  docId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      docId: 'DocId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      docId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocResponseBody extends $tea.Model {
  docId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDocResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocumentTagRequest extends $tea.Model {
  agentKey?: string;
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocumentTagResponseBody extends $tea.Model {
  requestId?: string;
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocumentTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDocumentTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDocumentTagResponseBody,
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

export class DescribeDocRequest extends $tea.Model {
  agentKey?: string;
  docId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      docId: 'DocId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      docId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocResponseBody extends $tea.Model {
  docId?: string;
  failReason?: string;
  name?: string;
  ownerId?: string;
  requestId?: string;
  size?: string;
  status?: string;
  tags?: DescribeDocResponseBodyTags[];
  type?: string;
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      failReason: 'FailReason',
      name: 'Name',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      size: 'Size',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      failReason: 'string',
      name: 'string',
      ownerId: 'string',
      requestId: 'string',
      size: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDocResponseBodyTags },
      type: 'string',
      uploadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDocResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocumentImportJobRequest extends $tea.Model {
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

export class DescribeDocumentImportJobResponseBody extends $tea.Model {
  docs?: DescribeDocumentImportJobResponseBodyDocs[];
  jobId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      docs: 'Docs',
      jobId: 'JobId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docs: { 'type': 'array', 'itemType': DescribeDocumentImportJobResponseBodyDocs },
      jobId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocumentImportJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDocumentImportJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDocumentImportJobResponseBody,
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

export class GetFileStoreUploadPolicyRequest extends $tea.Model {
  agentKey?: string;
  fileName?: string;
  fileStoreId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      fileName: 'FileName',
      fileStoreId: 'FileStoreId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      fileName: 'string',
      fileStoreId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileStoreUploadPolicyResponseBody extends $tea.Model {
  data?: GetFileStoreUploadPolicyResponseBodyData;
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
      data: GetFileStoreUploadPolicyResponseBodyData,
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

export class GetFileStoreUploadPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFileStoreUploadPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFileStoreUploadPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPromptRequest extends $tea.Model {
  agentKey?: string;
  promptId?: string;
  vars?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      promptId: 'PromptId',
      vars: 'Vars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      promptId: 'string',
      vars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPromptResponseBody extends $tea.Model {
  code?: string;
  data?: GetPromptResponseBodyData;
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
      data: GetPromptResponseBodyData,
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

export class GetPromptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPromptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPromptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetText2ImageJobRequest extends $tea.Model {
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

export class GetText2ImageJobResponseBody extends $tea.Model {
  images?: GetText2ImageJobResponseBodyImages[];
  requestId?: string;
  taskId?: string;
  taskMetrics?: GetText2ImageJobResponseBodyTaskMetrics;
  taskStatus?: string;
  usage?: GetText2ImageJobResponseBodyUsage[];
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskMetrics: 'TaskMetrics',
      taskStatus: 'TaskStatus',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': GetText2ImageJobResponseBodyImages },
      requestId: 'string',
      taskId: 'string',
      taskMetrics: GetText2ImageJobResponseBodyTaskMetrics,
      taskStatus: 'string',
      usage: { 'type': 'array', 'itemType': GetText2ImageJobResponseBodyUsage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetText2ImageJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetText2ImageJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetText2ImageJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportUserDocumentRequest extends $tea.Model {
  agentKey?: string;
  fileName?: string;
  fileStoreId?: number;
  ossPath?: string;
  storeId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      fileName: 'FileName',
      fileStoreId: 'FileStoreId',
      ossPath: 'OssPath',
      storeId: 'StoreId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      fileName: 'string',
      fileStoreId: 'number',
      ossPath: 'string',
      storeId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportUserDocumentResponseBody extends $tea.Model {
  data?: ImportUserDocumentResponseBodyData;
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
      data: ImportUserDocumentResponseBodyData,
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

export class ImportUserDocumentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportUserDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportUserDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocsRequest extends $tea.Model {
  agentKey?: string;
  name?: string;
  pageNo?: number;
  pageSize?: number;
  storeId?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      storeId: 'StoreId',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      storeId: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocsShrinkRequest extends $tea.Model {
  agentKey?: string;
  name?: string;
  pageNo?: number;
  pageSize?: number;
  storeId?: string;
  tagIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      storeId: 'StoreId',
      tagIdsShrink: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      storeId: 'string',
      tagIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocsResponseBody extends $tea.Model {
  docs?: ListDocsResponseBodyDocs[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      docs: 'Docs',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docs: { 'type': 'array', 'itemType': ListDocsResponseBodyDocs },
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

export class ListDocsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDocsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDocsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentTagsRequest extends $tea.Model {
  agentKey?: string;
  name?: string;
  pageNo?: number;
  pageSize?: number;
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentTagsResponseBody extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  tagList?: ListDocumentTagsResponseBodyTagList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagList: 'TagList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagList: { 'type': 'array', 'itemType': ListDocumentTagsResponseBodyTagList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDocumentTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDocumentTagsResponseBody,
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

export class QueryUserDocumentRequest extends $tea.Model {
  agentKey?: string;
  dataId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      dataId: 'DataId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      dataId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserDocumentResponseBody extends $tea.Model {
  data?: QueryUserDocumentResponseBodyData;
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
      data: QueryUserDocumentResponseBodyData,
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

export class QueryUserDocumentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentImportJobRequest extends $tea.Model {
  agentKey?: string;
  docs?: SubmitDocumentImportJobRequestDocs[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      docs: 'Docs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      docs: { 'type': 'array', 'itemType': SubmitDocumentImportJobRequestDocs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentImportJobResponseBody extends $tea.Model {
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

export class SubmitDocumentImportJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitDocumentImportJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitDocumentImportJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitText2ImageJobRequest extends $tea.Model {
  agentKey?: string;
  appId?: string;
  n?: number;
  negativePrompt?: string;
  prompt?: string;
  seed?: number;
  size?: string;
  style?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      appId: 'AppId',
      n: 'N',
      negativePrompt: 'NegativePrompt',
      prompt: 'Prompt',
      seed: 'Seed',
      size: 'Size',
      style: 'Style',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      appId: 'string',
      n: 'number',
      negativePrompt: 'string',
      prompt: 'string',
      seed: 'number',
      size: 'string',
      style: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitText2ImageJobResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitText2ImageJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitText2ImageJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitText2ImageJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocAttributeRequest extends $tea.Model {
  agentKey?: string;
  delAllTags?: boolean;
  docId?: string;
  name?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      delAllTags: 'DelAllTags',
      docId: 'DocId',
      name: 'Name',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      delAllTags: 'boolean',
      docId: 'string',
      name: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocAttributeShrinkRequest extends $tea.Model {
  agentKey?: string;
  delAllTags?: boolean;
  docId?: string;
  name?: string;
  tagIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      delAllTags: 'DelAllTags',
      docId: 'DocId',
      name: 'Name',
      tagIdsShrink: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      delAllTags: 'boolean',
      docId: 'string',
      name: 'string',
      tagIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocAttributeResponseBody extends $tea.Model {
  docId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDocAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDocAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocumentTagRequest extends $tea.Model {
  agentKey?: string;
  name?: string;
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      name: 'Name',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      name: 'string',
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocumentTagResponseBody extends $tea.Model {
  requestId?: string;
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocumentTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDocumentTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDocumentTagResponseBody,
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

export class DescribeDocResponseBodyTags extends $tea.Model {
  tagId?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocumentImportJobResponseBodyDocs extends $tea.Model {
  docId?: string;
  failReason?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      failReason: 'FailReason',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      failReason: 'string',
      name: 'string',
      status: 'string',
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

export class GetFileStoreUploadPolicyResponseBodyData extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  key?: string;
  policy?: string;
  securityToken?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      key: 'Key',
      policy: 'Policy',
      securityToken: 'SecurityToken',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      key: 'string',
      policy: 'string',
      securityToken: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPromptResponseBodyData extends $tea.Model {
  promptContent?: string;
  promptId?: string;
  static names(): { [key: string]: string } {
    return {
      promptContent: 'PromptContent',
      promptId: 'PromptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promptContent: 'string',
      promptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetText2ImageJobResponseBodyImages extends $tea.Model {
  code?: string;
  message?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetText2ImageJobResponseBodyTaskMetrics extends $tea.Model {
  failed?: number;
  succeeded?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      succeeded: 'Succeeded',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      succeeded: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetText2ImageJobResponseBodyUsage extends $tea.Model {
  imageCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageCount: 'ImageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportUserDocumentResponseBodyData extends $tea.Model {
  dataId?: string;
  dataStatus?: number;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      dataStatus: 'DataStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      dataStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocsResponseBodyDocsTags extends $tea.Model {
  tagId?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocsResponseBodyDocs extends $tea.Model {
  docId?: string;
  failReason?: string;
  name?: string;
  ownerId?: string;
  size?: string;
  status?: string;
  tags?: ListDocsResponseBodyDocsTags[];
  type?: string;
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      failReason: 'FailReason',
      name: 'Name',
      ownerId: 'OwnerId',
      size: 'Size',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      failReason: 'string',
      name: 'string',
      ownerId: 'string',
      size: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListDocsResponseBodyDocsTags },
      type: 'string',
      uploadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocumentTagsResponseBodyTagList extends $tea.Model {
  name?: string;
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tagId: 'string',
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

export class QueryUserDocumentResponseBodyData extends $tea.Model {
  dataId?: string;
  dataStatus?: number;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      dataStatus: 'DataStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      dataStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocumentImportJobRequestDocs extends $tea.Model {
  name?: string;
  ownerId?: string;
  storeId?: string;
  tagIds?: string[];
  type?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ownerId: 'OwnerId',
      storeId: 'StoreId',
      tagIds: 'TagIds',
      type: 'Type',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ownerId: 'string',
      storeId: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      URL: 'string',
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

  async createDocumentTagWithOptions(request: CreateDocumentTagRequest, runtime: $Util.RuntimeOptions): Promise<CreateDocumentTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDocumentTag",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDocumentTagResponse>(await this.callApi(params, req, runtime), new CreateDocumentTagResponse({}));
  }

  async createDocumentTag(request: CreateDocumentTagRequest): Promise<CreateDocumentTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDocumentTagWithOptions(request, runtime);
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

  async deleteDocWithOptions(request: DeleteDocRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDocResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.docId)) {
      query["DocId"] = request.docId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDoc",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDocResponse>(await this.callApi(params, req, runtime), new DeleteDocResponse({}));
  }

  async deleteDoc(request: DeleteDocRequest): Promise<DeleteDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDocWithOptions(request, runtime);
  }

  async deleteDocumentTagWithOptions(request: DeleteDocumentTagRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDocumentTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDocumentTag",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDocumentTagResponse>(await this.callApi(params, req, runtime), new DeleteDocumentTagResponse({}));
  }

  async deleteDocumentTag(request: DeleteDocumentTagRequest): Promise<DeleteDocumentTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDocumentTagWithOptions(request, runtime);
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

  async describeDocWithOptions(request: DescribeDocRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDocResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.docId)) {
      query["DocId"] = request.docId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDoc",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDocResponse>(await this.callApi(params, req, runtime), new DescribeDocResponse({}));
  }

  async describeDoc(request: DescribeDocRequest): Promise<DescribeDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDocWithOptions(request, runtime);
  }

  async describeDocumentImportJobWithOptions(request: DescribeDocumentImportJobRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDocumentImportJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDocumentImportJob",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDocumentImportJobResponse>(await this.callApi(params, req, runtime), new DescribeDocumentImportJobResponse({}));
  }

  async describeDocumentImportJob(request: DescribeDocumentImportJobRequest): Promise<DescribeDocumentImportJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDocumentImportJobWithOptions(request, runtime);
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

  async getFileStoreUploadPolicyWithOptions(request: GetFileStoreUploadPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetFileStoreUploadPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileStoreId)) {
      query["FileStoreId"] = request.fileStoreId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFileStoreUploadPolicy",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFileStoreUploadPolicyResponse>(await this.callApi(params, req, runtime), new GetFileStoreUploadPolicyResponse({}));
  }

  async getFileStoreUploadPolicy(request: GetFileStoreUploadPolicyRequest): Promise<GetFileStoreUploadPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileStoreUploadPolicyWithOptions(request, runtime);
  }

  async getPromptWithOptions(request: GetPromptRequest, runtime: $Util.RuntimeOptions): Promise<GetPromptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.promptId)) {
      query["PromptId"] = request.promptId;
    }

    if (!Util.isUnset(request.vars)) {
      query["Vars"] = request.vars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPrompt",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPromptResponse>(await this.callApi(params, req, runtime), new GetPromptResponse({}));
  }

  async getPrompt(request: GetPromptRequest): Promise<GetPromptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPromptWithOptions(request, runtime);
  }

  async getText2ImageJobWithOptions(request: GetText2ImageJobRequest, runtime: $Util.RuntimeOptions): Promise<GetText2ImageJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetText2ImageJob",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetText2ImageJobResponse>(await this.callApi(params, req, runtime), new GetText2ImageJobResponse({}));
  }

  async getText2ImageJob(request: GetText2ImageJobRequest): Promise<GetText2ImageJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getText2ImageJobWithOptions(request, runtime);
  }

  async importUserDocumentWithOptions(request: ImportUserDocumentRequest, runtime: $Util.RuntimeOptions): Promise<ImportUserDocumentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileStoreId)) {
      query["FileStoreId"] = request.fileStoreId;
    }

    if (!Util.isUnset(request.ossPath)) {
      query["OssPath"] = request.ossPath;
    }

    if (!Util.isUnset(request.storeId)) {
      query["StoreId"] = request.storeId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportUserDocument",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportUserDocumentResponse>(await this.callApi(params, req, runtime), new ImportUserDocumentResponse({}));
  }

  async importUserDocument(request: ImportUserDocumentRequest): Promise<ImportUserDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importUserDocumentWithOptions(request, runtime);
  }

  async listDocsWithOptions(tmpReq: ListDocsRequest, runtime: $Util.RuntimeOptions): Promise<ListDocsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDocsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tagIds)) {
      request.tagIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagIds, "TagIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.storeId)) {
      query["StoreId"] = request.storeId;
    }

    if (!Util.isUnset(request.tagIdsShrink)) {
      query["TagIds"] = request.tagIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDocs",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDocsResponse>(await this.callApi(params, req, runtime), new ListDocsResponse({}));
  }

  async listDocs(request: ListDocsRequest): Promise<ListDocsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDocsWithOptions(request, runtime);
  }

  async listDocumentTagsWithOptions(request: ListDocumentTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListDocumentTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDocumentTags",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDocumentTagsResponse>(await this.callApi(params, req, runtime), new ListDocumentTagsResponse({}));
  }

  async listDocumentTags(request: ListDocumentTagsRequest): Promise<ListDocumentTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDocumentTagsWithOptions(request, runtime);
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

  async queryUserDocumentWithOptions(request: QueryUserDocumentRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserDocumentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryUserDocument",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUserDocumentResponse>(await this.callApi(params, req, runtime), new QueryUserDocumentResponse({}));
  }

  async queryUserDocument(request: QueryUserDocumentRequest): Promise<QueryUserDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserDocumentWithOptions(request, runtime);
  }

  async submitDocumentImportJobWithOptions(request: SubmitDocumentImportJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDocumentImportJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.docs)) {
      query["Docs"] = request.docs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDocumentImportJob",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitDocumentImportJobResponse>(await this.callApi(params, req, runtime), new SubmitDocumentImportJobResponse({}));
  }

  async submitDocumentImportJob(request: SubmitDocumentImportJobRequest): Promise<SubmitDocumentImportJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDocumentImportJobWithOptions(request, runtime);
  }

  async submitText2ImageJobWithOptions(request: SubmitText2ImageJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitText2ImageJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.n)) {
      query["N"] = request.n;
    }

    if (!Util.isUnset(request.negativePrompt)) {
      query["NegativePrompt"] = request.negativePrompt;
    }

    if (!Util.isUnset(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.seed)) {
      query["Seed"] = request.seed;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.style)) {
      query["Style"] = request.style;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitText2ImageJob",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitText2ImageJobResponse>(await this.callApi(params, req, runtime), new SubmitText2ImageJobResponse({}));
  }

  async submitText2ImageJob(request: SubmitText2ImageJobRequest): Promise<SubmitText2ImageJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitText2ImageJobWithOptions(request, runtime);
  }

  async updateDocAttributeWithOptions(tmpReq: UpdateDocAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDocAttributeResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDocAttributeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tagIds)) {
      request.tagIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagIds, "TagIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.delAllTags)) {
      query["DelAllTags"] = request.delAllTags;
    }

    if (!Util.isUnset(request.docId)) {
      query["DocId"] = request.docId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.tagIdsShrink)) {
      query["TagIds"] = request.tagIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDocAttribute",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDocAttributeResponse>(await this.callApi(params, req, runtime), new UpdateDocAttributeResponse({}));
  }

  async updateDocAttribute(request: UpdateDocAttributeRequest): Promise<UpdateDocAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDocAttributeWithOptions(request, runtime);
  }

  async updateDocumentTagWithOptions(request: UpdateDocumentTagRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDocumentTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDocumentTag",
      version: "2023-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDocumentTagResponse>(await this.callApi(params, req, runtime), new UpdateDocumentTagResponse({}));
  }

  async updateDocumentTag(request: UpdateDocumentTagRequest): Promise<UpdateDocumentTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDocumentTagWithOptions(request, runtime);
  }

}
