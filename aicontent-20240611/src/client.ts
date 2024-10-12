// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class OpenApiMultiResponse extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: OpenApiMultiResponseData[];
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': OpenApiMultiResponseData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiSingleResponse extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: OpenApiSingleResponseData;
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OpenApiSingleResponseData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddInferenceJobCmd extends $tea.Model {
  /**
   * @example
   * 1
   */
  imageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a <special-token> in the snow
   */
  prompt?: string;
  /**
   * @example
   * 1
   */
  seed?: number;
  static names(): { [key: string]: string } {
    return {
      imageNumber: 'imageNumber',
      modelId: 'modelId',
      prompt: 'prompt',
      seed: 'seed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNumber: 'number',
      modelId: 'string',
      prompt: 'string',
      seed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddModelTrainJobCmd extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  imageUrl?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 熊猫图片生成
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dog
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'imageUrl',
      name: 'name',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgInferenceJobInfoDTO extends $tea.Model {
  /**
   * @example
   * 123456
   */
  createUserId?: string;
  /**
   * @example
   * 123456
   */
  id?: string;
  /**
   * @example
   * 123456
   */
  jobStatus?: string;
  /**
   * @example
   * 123456
   */
  modelId?: string;
  /**
   * @example
   * 123456
   */
  resultImageUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      createUserId: 'createUserId',
      id: 'id',
      jobStatus: 'jobStatus',
      modelId: 'modelId',
      resultImageUrl: 'resultImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createUserId: 'string',
      id: 'string',
      jobStatus: 'string',
      modelId: 'string',
      resultImageUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgModelTrainJobInfoDTO extends $tea.Model {
  createTime?: string;
  createUserId?: string;
  imageUrl?: string[];
  inferenceJobList?: Personalizedtxt2imgInferenceJobInfoDTO[];
  jobStatus?: string;
  name?: string;
  objectType?: string;
  /**
   * @example
   * 123456
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      imageUrl: 'ImageUrl',
      inferenceJobList: 'InferenceJobList',
      jobStatus: 'JobStatus',
      name: 'Name',
      objectType: 'ObjectType',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserId: 'string',
      imageUrl: { 'type': 'array', 'itemType': 'string' },
      inferenceJobList: { 'type': 'array', 'itemType': Personalizedtxt2imgInferenceJobInfoDTO },
      jobStatus: 'string',
      name: 'string',
      objectType: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponseBodyData[];
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponseBodyData[];
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageAddInferenceJobRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  imageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  imageUrl?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a <special-token> in the snow
   */
  prompt?: string;
  /**
   * @example
   * 1
   */
  seed?: number;
  /**
   * @example
   * 1
   */
  strength?: number;
  /**
   * @example
   * 800
   */
  trainSteps?: number;
  static names(): { [key: string]: string } {
    return {
      imageNumber: 'imageNumber',
      imageUrl: 'imageUrl',
      prompt: 'prompt',
      seed: 'seed',
      strength: 'strength',
      trainSteps: 'trainSteps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNumber: 'number',
      imageUrl: { 'type': 'array', 'itemType': 'string' },
      prompt: 'string',
      seed: 'number',
      strength: 'number',
      trainSteps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageAddInferenceJobResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: PersonalizedTextToImageAddInferenceJobResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: PersonalizedTextToImageAddInferenceJobResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageAddInferenceJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PersonalizedTextToImageAddInferenceJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PersonalizedTextToImageAddInferenceJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageQueryImageAssetRequest extends $tea.Model {
  /**
   * @example
   * base64
   */
  encodeFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0000.png
   */
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeFormat: 'encodeFormat',
      imageId: 'imageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeFormat: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageQueryImageAssetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: any;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageQueryPreModelInferenceJobInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * girl-xxxx-xxxx-xxxx-xxxx
   */
  inferenceJobId?: string;
  static names(): { [key: string]: string } {
    return {
      inferenceJobId: 'inferenceJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inferenceJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageQueryPreModelInferenceJobInfoResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: PersonalizedTextToImageQueryPreModelInferenceJobInfoResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: PersonalizedTextToImageQueryPreModelInferenceJobInfoResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PersonalizedTextToImageQueryPreModelInferenceJobInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PersonalizedTextToImageQueryPreModelInferenceJobInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddInferenceJobRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  imageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a <special-token> in the snow
   */
  prompt?: string;
  /**
   * @example
   * 1
   */
  seed?: number;
  static names(): { [key: string]: string } {
    return {
      imageNumber: 'imageNumber',
      modelId: 'modelId',
      prompt: 'prompt',
      seed: 'seed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNumber: 'number',
      modelId: 'string',
      prompt: 'string',
      seed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddInferenceJobResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: Personalizedtxt2imgAddInferenceJobResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Personalizedtxt2imgAddInferenceJobResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddInferenceJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Personalizedtxt2imgAddInferenceJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Personalizedtxt2imgAddInferenceJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddModelTrainJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  imageUrl?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 熊猫图片生成
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dog
   */
  objectType?: string;
  /**
   * @example
   * 800
   */
  trainSteps?: number;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'imageUrl',
      name: 'name',
      objectType: 'objectType',
      trainSteps: 'trainSteps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      objectType: 'string',
      trainSteps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddModelTrainJobResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: Personalizedtxt2imgAddModelTrainJobResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Personalizedtxt2imgAddModelTrainJobResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddModelTrainJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Personalizedtxt2imgAddModelTrainJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Personalizedtxt2imgAddModelTrainJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryImageAssetRequest extends $tea.Model {
  /**
   * @example
   * base64
   */
  encodeFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0000.png
   */
  imageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * girl-xxxx-xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxx
   */
  promptId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeFormat: 'encodeFormat',
      imageId: 'imageId',
      modelId: 'modelId',
      promptId: 'promptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeFormat: 'string',
      imageId: 'string',
      modelId: 'string',
      promptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryImageAssetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: any;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryInferenceJobInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 180
   */
  inferenceJobId?: string;
  static names(): { [key: string]: string } {
    return {
      inferenceJobId: 'inferenceJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inferenceJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryInferenceJobInfoResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: Personalizedtxt2imgQueryInferenceJobInfoResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Personalizedtxt2imgQueryInferenceJobInfoResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryInferenceJobInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Personalizedtxt2imgQueryInferenceJobInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Personalizedtxt2imgQueryInferenceJobInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainJobListResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: Personalizedtxt2imgQueryModelTrainJobListResponseBodyData[];
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Personalizedtxt2imgQueryModelTrainJobListResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainJobListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Personalizedtxt2imgQueryModelTrainJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Personalizedtxt2imgQueryModelTrainJobListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * modelId-xxxx-xxxx-xxxx
   */
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainStatusResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: Personalizedtxt2imgQueryModelTrainStatusResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Personalizedtxt2imgQueryModelTrainStatusResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Personalizedtxt2imgQueryModelTrainStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Personalizedtxt2imgQueryModelTrainStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiMultiResponseDataInferenceJobList extends $tea.Model {
  /**
   * @example
   * 2023-12-25T12:00:00
   */
  createTime?: string;
  /**
   * @example
   * 3220
   */
  id?: string;
  /**
   * @example
   * FINISHED
   */
  jobStatus?: string;
  /**
   * @example
   * 0.5
   */
  jobTrainProgress?: number;
  /**
   * @example
   * modelId-xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @example
   * promptId-xxxx-xxxx-xxxx
   */
  promptId?: string;
  /**
   * @example
   * 0000.png
   */
  resultImageUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      jobStatus: 'jobStatus',
      jobTrainProgress: 'jobTrainProgress',
      modelId: 'modelId',
      promptId: 'promptId',
      resultImageUrl: 'resultImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      jobStatus: 'string',
      jobTrainProgress: 'number',
      modelId: 'string',
      promptId: 'string',
      resultImageUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiMultiResponseData extends $tea.Model {
  createTime?: string;
  /**
   * @example
   * 456
   */
  id?: string;
  imageUrl?: string[];
  inferenceImageCount?: number;
  inferenceJobList?: OpenApiMultiResponseDataInferenceJobList[];
  /**
   * @example
   * TRAINING
   */
  jobStatus?: string;
  /**
   * @example
   * 0.5
   */
  jobTrainProgress?: number;
  /**
   * @example
   * modelId-xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @example
   * 可爱熊猫模型训练任务
   */
  name?: string;
  /**
   * @example
   * panda
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      imageUrl: 'imageUrl',
      inferenceImageCount: 'inferenceImageCount',
      inferenceJobList: 'inferenceJobList',
      jobStatus: 'jobStatus',
      jobTrainProgress: 'jobTrainProgress',
      modelId: 'modelId',
      name: 'name',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      imageUrl: { 'type': 'array', 'itemType': 'string' },
      inferenceImageCount: 'number',
      inferenceJobList: { 'type': 'array', 'itemType': OpenApiMultiResponseDataInferenceJobList },
      jobStatus: 'string',
      jobTrainProgress: 'number',
      modelId: 'string',
      name: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiSingleResponseData extends $tea.Model {
  /**
   * @example
   * FINISHED
   */
  modelTrainStatus?: string;
  static names(): { [key: string]: string } {
    return {
      modelTrainStatus: 'modelTrainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelTrainStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponseBodyData extends $tea.Model {
  /**
   * @example
   * 10
   */
  freeConcurrencyCount?: number;
  /**
   * @example
   * 100
   */
  freeCount?: number;
  /**
   * @example
   * online_ai_algorithm_personalized_text_to_image_call_count
   */
  serviceCode?: string;
  /**
   * @example
   * AI算法模型-个性化文生图-在线按量调用
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      freeConcurrencyCount: 'FreeConcurrencyCount',
      freeCount: 'FreeCount',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeConcurrencyCount: 'number',
      freeCount: 'number',
      serviceCode: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponseBodyData extends $tea.Model {
  /**
   * @example
   * 10
   */
  freeConcurrencyCount?: number;
  /**
   * @example
   * 100
   */
  freeCount?: number;
  /**
   * @example
   * online_ai_algorithm_personalized_text_to_image_call_count
   */
  serviceCode?: string;
  /**
   * @example
   * AI算法模型-个性化文生图-在线按量调用
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      freeConcurrencyCount: 'FreeConcurrencyCount',
      freeCount: 'FreeCount',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeConcurrencyCount: 'number',
      freeCount: 'number',
      serviceCode: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageAddInferenceJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2023-12-25T12:00:00
   */
  createTime?: string;
  /**
   * @example
   * 3220
   */
  id?: string;
  /**
   * @example
   * FINISHED
   */
  jobStatus?: string;
  /**
   * @example
   * 0.5
   */
  jobTrainProgress?: number;
  /**
   * @example
   * modelId-xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @remarks
   * promptId
   * 
   * @example
   * promptId-xxxx-xxxx-xxxx
   */
  promptId?: string;
  /**
   * @example
   * 0000.png
   */
  resultImageUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      jobStatus: 'jobStatus',
      jobTrainProgress: 'jobTrainProgress',
      modelId: 'modelId',
      promptId: 'promptId',
      resultImageUrl: 'resultImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      jobStatus: 'string',
      jobTrainProgress: 'number',
      modelId: 'string',
      promptId: 'string',
      resultImageUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageQueryPreModelInferenceJobInfoResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2023-12-25T12:00:00
   */
  createTime?: string;
  /**
   * @example
   * 3220
   */
  id?: string;
  /**
   * @example
   * FINISHED
   */
  jobStatus?: string;
  /**
   * @example
   * 0.5
   */
  jobTrainProgress?: number;
  /**
   * @example
   * modelId-xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @remarks
   * promptId
   * 
   * @example
   * promptId-xxxx-xxxx-xxxx
   */
  promptId?: string;
  /**
   * @example
   * 0000.png
   */
  resultImageUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      jobStatus: 'jobStatus',
      jobTrainProgress: 'jobTrainProgress',
      modelId: 'modelId',
      promptId: 'promptId',
      resultImageUrl: 'resultImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      jobStatus: 'string',
      jobTrainProgress: 'number',
      modelId: 'string',
      promptId: 'string',
      resultImageUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddInferenceJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2023-12-25T12:00:00
   */
  createTime?: string;
  /**
   * @example
   * 3220
   */
  id?: string;
  /**
   * @example
   * FINISHED
   */
  jobStatus?: string;
  /**
   * @example
   * 0.5
   */
  jobTrainProgress?: number;
  /**
   * @example
   * modelId-xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @example
   * promptId-xxxx-xxxx-xxxx
   */
  promptId?: string;
  /**
   * @example
   * 0000.png
   */
  resultImageUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      jobStatus: 'jobStatus',
      jobTrainProgress: 'jobTrainProgress',
      modelId: 'modelId',
      promptId: 'promptId',
      resultImageUrl: 'resultImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      jobStatus: 'string',
      jobTrainProgress: 'number',
      modelId: 'string',
      promptId: 'string',
      resultImageUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddModelTrainJobResponseBodyDataInferenceJobList extends $tea.Model {
  /**
   * @example
   * 2023-12-25T12:00:00
   */
  createTime?: string;
  /**
   * @example
   * 3220
   */
  id?: string;
  /**
   * @example
   * FINISHED
   */
  jobStatus?: string;
  /**
   * @example
   * 0.5
   */
  jobTrainProgress?: number;
  /**
   * @example
   * modelId-xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @example
   * promptId-xxxx-xxxx-xxxx
   */
  promptId?: string;
  /**
   * @example
   * 0000.png
   */
  resultImageUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      jobStatus: 'jobStatus',
      jobTrainProgress: 'jobTrainProgress',
      modelId: 'modelId',
      promptId: 'promptId',
      resultImageUrl: 'resultImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      jobStatus: 'string',
      jobTrainProgress: 'number',
      modelId: 'string',
      promptId: 'string',
      resultImageUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddModelTrainJobResponseBodyData extends $tea.Model {
  createTime?: string;
  /**
   * @example
   * 456
   */
  id?: string;
  imageUrl?: string[];
  inferenceImageCount?: number;
  inferenceJobList?: Personalizedtxt2imgAddModelTrainJobResponseBodyDataInferenceJobList[];
  /**
   * @example
   * TRAINING
   */
  jobStatus?: string;
  /**
   * @example
   * 0.5
   */
  jobTrainProgress?: number;
  /**
   * @example
   * modelId-xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @example
   * 可爱熊猫模型训练任务
   */
  name?: string;
  /**
   * @example
   * panda
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      imageUrl: 'imageUrl',
      inferenceImageCount: 'inferenceImageCount',
      inferenceJobList: 'inferenceJobList',
      jobStatus: 'jobStatus',
      jobTrainProgress: 'jobTrainProgress',
      modelId: 'modelId',
      name: 'name',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      imageUrl: { 'type': 'array', 'itemType': 'string' },
      inferenceImageCount: 'number',
      inferenceJobList: { 'type': 'array', 'itemType': Personalizedtxt2imgAddModelTrainJobResponseBodyDataInferenceJobList },
      jobStatus: 'string',
      jobTrainProgress: 'number',
      modelId: 'string',
      name: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryInferenceJobInfoResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2023-12-25T12:00:00
   */
  createTime?: string;
  /**
   * @example
   * 3220
   */
  id?: string;
  /**
   * @example
   * FINISHED
   */
  jobStatus?: string;
  /**
   * @example
   * 0.5
   */
  jobTrainProgress?: number;
  /**
   * @example
   * modelId-xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @example
   * promptId-xxxx-xxxx-xxxx
   */
  promptId?: string;
  /**
   * @example
   * 0000.png
   */
  resultImageUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      jobStatus: 'jobStatus',
      jobTrainProgress: 'jobTrainProgress',
      modelId: 'modelId',
      promptId: 'promptId',
      resultImageUrl: 'resultImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      jobStatus: 'string',
      jobTrainProgress: 'number',
      modelId: 'string',
      promptId: 'string',
      resultImageUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainJobListResponseBodyDataInferenceJobList extends $tea.Model {
  /**
   * @example
   * 2023-12-25T12:00:00
   */
  createTime?: string;
  /**
   * @example
   * 3220
   */
  id?: string;
  /**
   * @example
   * FINISHED
   */
  jobStatus?: string;
  /**
   * @example
   * 0.5
   */
  jobTrainProgress?: number;
  /**
   * @example
   * modelId-xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @example
   * promptId-xxxx-xxxx-xxxx
   */
  promptId?: string;
  /**
   * @example
   * 0000.png
   */
  resultImageUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      jobStatus: 'jobStatus',
      jobTrainProgress: 'jobTrainProgress',
      modelId: 'modelId',
      promptId: 'promptId',
      resultImageUrl: 'resultImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      jobStatus: 'string',
      jobTrainProgress: 'number',
      modelId: 'string',
      promptId: 'string',
      resultImageUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainJobListResponseBodyData extends $tea.Model {
  createTime?: string;
  /**
   * @example
   * 456
   */
  id?: string;
  imageUrl?: string[];
  inferenceImageCount?: number;
  inferenceJobList?: Personalizedtxt2imgQueryModelTrainJobListResponseBodyDataInferenceJobList[];
  /**
   * @example
   * TRAINING
   */
  jobStatus?: string;
  /**
   * @example
   * 0.5
   */
  jobTrainProgress?: number;
  /**
   * @example
   * modelId-xxxx-xxxx-xxxx
   */
  modelId?: string;
  /**
   * @example
   * 可爱熊猫模型训练任务
   */
  name?: string;
  /**
   * @example
   * panda
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      imageUrl: 'imageUrl',
      inferenceImageCount: 'inferenceImageCount',
      inferenceJobList: 'inferenceJobList',
      jobStatus: 'jobStatus',
      jobTrainProgress: 'jobTrainProgress',
      modelId: 'modelId',
      name: 'name',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      imageUrl: { 'type': 'array', 'itemType': 'string' },
      inferenceImageCount: 'number',
      inferenceJobList: { 'type': 'array', 'itemType': Personalizedtxt2imgQueryModelTrainJobListResponseBodyDataInferenceJobList },
      jobStatus: 'string',
      jobTrainProgress: 'number',
      modelId: 'string',
      name: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainStatusResponseBodyData extends $tea.Model {
  /**
   * @example
   * FINISHED
   */
  modelTrainStatus?: string;
  static names(): { [key: string]: string } {
    return {
      modelTrainStatus: 'modelTrainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelTrainStatus: 'string',
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
    this._endpoint = this.getEndpoint("aicontent", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 阿里云控制台/列出阿里云控制台上可使用的服务列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse
   */
  async aliyunConsoleOpenApiQueryAliyunConsoleServcieListWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "AliyunConsoleOpenApiQueryAliyunConsoleServcieList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunconsole/queryAliyunConsoleServcieList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse>(await this.callApi(params, req, runtime), new AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse({}));
  }

  /**
   * 阿里云控制台/列出阿里云控制台上可使用的服务列表
   * @returns AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse
   */
  async aliyunConsoleOpenApiQueryAliyunConsoleServcieList(): Promise<AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aliyunConsoleOpenApiQueryAliyunConsoleServcieListWithOptions(headers, runtime);
  }

  /**
   * 阿里云控制台/列出阿里云控制台上可使用的服务列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse
   */
  async aliyunConsoleOpenApiQueryAliyunConsoleServiceListWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "AliyunConsoleOpenApiQueryAliyunConsoleServiceList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunconsole/queryAliyunConsoleServiceList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse>(await this.callApi(params, req, runtime), new AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse({}));
  }

  /**
   * 阿里云控制台/列出阿里云控制台上可使用的服务列表
   * @returns AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse
   */
  async aliyunConsoleOpenApiQueryAliyunConsoleServiceList(): Promise<AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aliyunConsoleOpenApiQueryAliyunConsoleServiceListWithOptions(headers, runtime);
  }

  /**
   * 个性化文生图/基于一个预训练模型创建图片推理任务
   * 
   * @param request - PersonalizedTextToImageAddInferenceJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PersonalizedTextToImageAddInferenceJobResponse
   */
  async personalizedTextToImageAddInferenceJobWithOptions(request: PersonalizedTextToImageAddInferenceJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PersonalizedTextToImageAddInferenceJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageNumber)) {
      body["imageNumber"] = request.imageNumber;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.seed)) {
      body["seed"] = request.seed;
    }

    if (!Util.isUnset(request.strength)) {
      body["strength"] = request.strength;
    }

    if (!Util.isUnset(request.trainSteps)) {
      body["trainSteps"] = request.trainSteps;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PersonalizedTextToImageAddInferenceJob",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/addPreModelInferenceJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PersonalizedTextToImageAddInferenceJobResponse>(await this.callApi(params, req, runtime), new PersonalizedTextToImageAddInferenceJobResponse({}));
  }

  /**
   * 个性化文生图/基于一个预训练模型创建图片推理任务
   * 
   * @param request - PersonalizedTextToImageAddInferenceJobRequest
   * @returns PersonalizedTextToImageAddInferenceJobResponse
   */
  async personalizedTextToImageAddInferenceJob(request: PersonalizedTextToImageAddInferenceJobRequest): Promise<PersonalizedTextToImageAddInferenceJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedTextToImageAddInferenceJobWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/通过唯一的图片编号获取图片内容
   * 
   * @param request - PersonalizedTextToImageQueryImageAssetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PersonalizedTextToImageQueryImageAssetResponse
   */
  async personalizedTextToImageQueryImageAssetWithOptions(request: PersonalizedTextToImageQueryImageAssetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PersonalizedTextToImageQueryImageAssetResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encodeFormat)) {
      query["encodeFormat"] = request.encodeFormat;
    }

    if (!Util.isUnset(request.imageId)) {
      query["imageId"] = request.imageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PersonalizedTextToImageQueryImageAsset",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/queryImageAssetFromImageId`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "any",
    });
    return $tea.cast<PersonalizedTextToImageQueryImageAssetResponse>(await this.callApi(params, req, runtime), new PersonalizedTextToImageQueryImageAssetResponse({}));
  }

  /**
   * 个性化文生图/通过唯一的图片编号获取图片内容
   * 
   * @param request - PersonalizedTextToImageQueryImageAssetRequest
   * @returns PersonalizedTextToImageQueryImageAssetResponse
   */
  async personalizedTextToImageQueryImageAsset(request: PersonalizedTextToImageQueryImageAssetRequest): Promise<PersonalizedTextToImageQueryImageAssetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedTextToImageQueryImageAssetWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/查询预制模型推理任务的状态
   * 
   * @param request - PersonalizedTextToImageQueryPreModelInferenceJobInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse
   */
  async personalizedTextToImageQueryPreModelInferenceJobInfoWithOptions(request: PersonalizedTextToImageQueryPreModelInferenceJobInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inferenceJobId)) {
      query["inferenceJobId"] = request.inferenceJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PersonalizedTextToImageQueryPreModelInferenceJobInfo",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/queryPreModelInferenceJobInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse>(await this.callApi(params, req, runtime), new PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse({}));
  }

  /**
   * 个性化文生图/查询预制模型推理任务的状态
   * 
   * @param request - PersonalizedTextToImageQueryPreModelInferenceJobInfoRequest
   * @returns PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse
   */
  async personalizedTextToImageQueryPreModelInferenceJobInfo(request: PersonalizedTextToImageQueryPreModelInferenceJobInfoRequest): Promise<PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedTextToImageQueryPreModelInferenceJobInfoWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/基于一个模型创建图片推理任务
   * 
   * @param request - Personalizedtxt2imgAddInferenceJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Personalizedtxt2imgAddInferenceJobResponse
   */
  async personalizedtxt2imgAddInferenceJobWithOptions(request: Personalizedtxt2imgAddInferenceJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<Personalizedtxt2imgAddInferenceJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageNumber)) {
      body["imageNumber"] = request.imageNumber;
    }

    if (!Util.isUnset(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!Util.isUnset(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.seed)) {
      body["seed"] = request.seed;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Personalizedtxt2imgAddInferenceJob",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/addInferenceJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<Personalizedtxt2imgAddInferenceJobResponse>(await this.callApi(params, req, runtime), new Personalizedtxt2imgAddInferenceJobResponse({}));
  }

  /**
   * 个性化文生图/基于一个模型创建图片推理任务
   * 
   * @param request - Personalizedtxt2imgAddInferenceJobRequest
   * @returns Personalizedtxt2imgAddInferenceJobResponse
   */
  async personalizedtxt2imgAddInferenceJob(request: Personalizedtxt2imgAddInferenceJobRequest): Promise<Personalizedtxt2imgAddInferenceJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedtxt2imgAddInferenceJobWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/创建一个模型训练任务
   * 
   * @param request - Personalizedtxt2imgAddModelTrainJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Personalizedtxt2imgAddModelTrainJobResponse
   */
  async personalizedtxt2imgAddModelTrainJobWithOptions(request: Personalizedtxt2imgAddModelTrainJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<Personalizedtxt2imgAddModelTrainJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.objectType)) {
      body["objectType"] = request.objectType;
    }

    if (!Util.isUnset(request.trainSteps)) {
      body["trainSteps"] = request.trainSteps;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Personalizedtxt2imgAddModelTrainJob",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/addModelTrainJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<Personalizedtxt2imgAddModelTrainJobResponse>(await this.callApi(params, req, runtime), new Personalizedtxt2imgAddModelTrainJobResponse({}));
  }

  /**
   * 个性化文生图/创建一个模型训练任务
   * 
   * @param request - Personalizedtxt2imgAddModelTrainJobRequest
   * @returns Personalizedtxt2imgAddModelTrainJobResponse
   */
  async personalizedtxt2imgAddModelTrainJob(request: Personalizedtxt2imgAddModelTrainJobRequest): Promise<Personalizedtxt2imgAddModelTrainJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedtxt2imgAddModelTrainJobWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/图片二进制内容获取
   * 
   * @param request - Personalizedtxt2imgQueryImageAssetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Personalizedtxt2imgQueryImageAssetResponse
   */
  async personalizedtxt2imgQueryImageAssetWithOptions(request: Personalizedtxt2imgQueryImageAssetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<Personalizedtxt2imgQueryImageAssetResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encodeFormat)) {
      query["encodeFormat"] = request.encodeFormat;
    }

    if (!Util.isUnset(request.imageId)) {
      query["imageId"] = request.imageId;
    }

    if (!Util.isUnset(request.modelId)) {
      query["modelId"] = request.modelId;
    }

    if (!Util.isUnset(request.promptId)) {
      query["promptId"] = request.promptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Personalizedtxt2imgQueryImageAsset",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/queryImageAsset`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "any",
    });
    return $tea.cast<Personalizedtxt2imgQueryImageAssetResponse>(await this.callApi(params, req, runtime), new Personalizedtxt2imgQueryImageAssetResponse({}));
  }

  /**
   * 个性化文生图/图片二进制内容获取
   * 
   * @param request - Personalizedtxt2imgQueryImageAssetRequest
   * @returns Personalizedtxt2imgQueryImageAssetResponse
   */
  async personalizedtxt2imgQueryImageAsset(request: Personalizedtxt2imgQueryImageAssetRequest): Promise<Personalizedtxt2imgQueryImageAssetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedtxt2imgQueryImageAssetWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/查询模型推理任务的状态和结果信息
   * 
   * @param request - Personalizedtxt2imgQueryInferenceJobInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Personalizedtxt2imgQueryInferenceJobInfoResponse
   */
  async personalizedtxt2imgQueryInferenceJobInfoWithOptions(request: Personalizedtxt2imgQueryInferenceJobInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<Personalizedtxt2imgQueryInferenceJobInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inferenceJobId)) {
      query["inferenceJobId"] = request.inferenceJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Personalizedtxt2imgQueryInferenceJobInfo",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/queryInferenceJobInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<Personalizedtxt2imgQueryInferenceJobInfoResponse>(await this.callApi(params, req, runtime), new Personalizedtxt2imgQueryInferenceJobInfoResponse({}));
  }

  /**
   * 个性化文生图/查询模型推理任务的状态和结果信息
   * 
   * @param request - Personalizedtxt2imgQueryInferenceJobInfoRequest
   * @returns Personalizedtxt2imgQueryInferenceJobInfoResponse
   */
  async personalizedtxt2imgQueryInferenceJobInfo(request: Personalizedtxt2imgQueryInferenceJobInfoRequest): Promise<Personalizedtxt2imgQueryInferenceJobInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedtxt2imgQueryInferenceJobInfoWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/查询模型训练任务列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Personalizedtxt2imgQueryModelTrainJobListResponse
   */
  async personalizedtxt2imgQueryModelTrainJobListWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<Personalizedtxt2imgQueryModelTrainJobListResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "Personalizedtxt2imgQueryModelTrainJobList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/queryModelTrainJobList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<Personalizedtxt2imgQueryModelTrainJobListResponse>(await this.callApi(params, req, runtime), new Personalizedtxt2imgQueryModelTrainJobListResponse({}));
  }

  /**
   * 个性化文生图/查询模型训练任务列表
   * @returns Personalizedtxt2imgQueryModelTrainJobListResponse
   */
  async personalizedtxt2imgQueryModelTrainJobList(): Promise<Personalizedtxt2imgQueryModelTrainJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedtxt2imgQueryModelTrainJobListWithOptions(headers, runtime);
  }

  /**
   * 个性化文生图/模型训练状态查询
   * 
   * @param request - Personalizedtxt2imgQueryModelTrainStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Personalizedtxt2imgQueryModelTrainStatusResponse
   */
  async personalizedtxt2imgQueryModelTrainStatusWithOptions(request: Personalizedtxt2imgQueryModelTrainStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<Personalizedtxt2imgQueryModelTrainStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modelId)) {
      query["modelId"] = request.modelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Personalizedtxt2imgQueryModelTrainStatus",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/personalizedtxt2img/queryModelTrainStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<Personalizedtxt2imgQueryModelTrainStatusResponse>(await this.callApi(params, req, runtime), new Personalizedtxt2imgQueryModelTrainStatusResponse({}));
  }

  /**
   * 个性化文生图/模型训练状态查询
   * 
   * @param request - Personalizedtxt2imgQueryModelTrainStatusRequest
   * @returns Personalizedtxt2imgQueryModelTrainStatusResponse
   */
  async personalizedtxt2imgQueryModelTrainStatus(request: Personalizedtxt2imgQueryModelTrainStatusRequest): Promise<Personalizedtxt2imgQueryModelTrainStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedtxt2imgQueryModelTrainStatusWithOptions(request, headers, runtime);
  }

}
