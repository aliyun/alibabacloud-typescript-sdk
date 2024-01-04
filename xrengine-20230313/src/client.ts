// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AuthUserRequest extends $tea.Model {
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthUserResponseBody extends $tea.Model {
  code?: string;
  data?: AuthUserResponseBodyData;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AuthUserResponseBodyData,
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AuthUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuthUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryMotionShopTaskStatusRequest extends $tea.Model {
  jwtToken?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryMotionShopTaskStatusResponseBody extends $tea.Model {
  code?: string;
  data?: BatchQueryMotionShopTaskStatusResponseBodyData;
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
      code: 'string',
      data: BatchQueryMotionShopTaskStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryMotionShopTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchQueryMotionShopTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchQueryMotionShopTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDigitalHumanProjectRequest extends $tea.Model {
  audioId?: string;
  audioUrl?: string;
  backgroundId?: string;
  backgroundUrl?: string;
  content?: string;
  foregroundId?: string;
  foregroundUrl?: string;
  humanLayerStyle?: string;
  intro?: string;
  jwtToken?: string;
  mode?: string;
  modelId?: string;
  outputConfig?: string;
  title?: string;
  ttsVoiceId?: string;
  watermarkImageUrl?: string;
  watermarkStyle?: string;
  static names(): { [key: string]: string } {
    return {
      audioId: 'AudioId',
      audioUrl: 'AudioUrl',
      backgroundId: 'BackgroundId',
      backgroundUrl: 'BackgroundUrl',
      content: 'Content',
      foregroundId: 'ForegroundId',
      foregroundUrl: 'ForegroundUrl',
      humanLayerStyle: 'HumanLayerStyle',
      intro: 'Intro',
      jwtToken: 'JwtToken',
      mode: 'Mode',
      modelId: 'ModelId',
      outputConfig: 'OutputConfig',
      title: 'Title',
      ttsVoiceId: 'TtsVoiceId',
      watermarkImageUrl: 'WatermarkImageUrl',
      watermarkStyle: 'WatermarkStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioId: 'string',
      audioUrl: 'string',
      backgroundId: 'string',
      backgroundUrl: 'string',
      content: 'string',
      foregroundId: 'string',
      foregroundUrl: 'string',
      humanLayerStyle: 'string',
      intro: 'string',
      jwtToken: 'string',
      mode: 'string',
      modelId: 'string',
      outputConfig: 'string',
      title: 'string',
      ttsVoiceId: 'string',
      watermarkImageUrl: 'string',
      watermarkStyle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDigitalHumanProjectResponseBody extends $tea.Model {
  code?: string;
  data?: CreateDigitalHumanProjectResponseBodyData;
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
      code: 'string',
      data: CreateDigitalHumanProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDigitalHumanProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDigitalHumanProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDigitalHumanProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLivePortraitProjectRequest extends $tea.Model {
  audioId?: string;
  audioUrl?: string;
  content?: string;
  imageId?: string;
  imageUrl?: string;
  intro?: string;
  jwtToken?: string;
  lightModel?: boolean;
  mode?: string;
  outputConfig?: string;
  title?: string;
  ttsVoiceId?: string;
  watermarkImageUrl?: string;
  watermarkStyle?: string;
  static names(): { [key: string]: string } {
    return {
      audioId: 'AudioId',
      audioUrl: 'AudioUrl',
      content: 'Content',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      intro: 'Intro',
      jwtToken: 'JwtToken',
      lightModel: 'LightModel',
      mode: 'Mode',
      outputConfig: 'OutputConfig',
      title: 'Title',
      ttsVoiceId: 'TtsVoiceId',
      watermarkImageUrl: 'WatermarkImageUrl',
      watermarkStyle: 'WatermarkStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioId: 'string',
      audioUrl: 'string',
      content: 'string',
      imageId: 'string',
      imageUrl: 'string',
      intro: 'string',
      jwtToken: 'string',
      lightModel: 'boolean',
      mode: 'string',
      outputConfig: 'string',
      title: 'string',
      ttsVoiceId: 'string',
      watermarkImageUrl: 'string',
      watermarkStyle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLivePortraitProjectResponseBody extends $tea.Model {
  code?: string;
  data?: CreateLivePortraitProjectResponseBodyData;
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
      code: 'string',
      data: CreateLivePortraitProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLivePortraitProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLivePortraitProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLivePortraitProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateMotionShopVideoUploadUrlRequest extends $tea.Model {
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateMotionShopVideoUploadUrlResponseBody extends $tea.Model {
  code?: string;
  data?: GenerateMotionShopVideoUploadUrlResponseBodyData;
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
      code: 'string',
      data: GenerateMotionShopVideoUploadUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateMotionShopVideoUploadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateMotionShopVideoUploadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateMotionShopVideoUploadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMapDataRequest extends $tea.Model {
  appId?: string;
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMapDataResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any }[];
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMapDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMapDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMapDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMapPublishDataRequest extends $tea.Model {
  appId?: string;
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMapPublishDataResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any }[];
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMapPublishDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMapPublishDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMapPublishDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitLocateRequest extends $tea.Model {
  jwtToken?: string;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitLocateResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitLocateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InitLocateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitLocateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonMaterialsRequest extends $tea.Model {
  jwtToken?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonMaterialsResponseBody extends $tea.Model {
  code?: string;
  data?: ListCommonMaterialsResponseBodyData[];
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
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCommonMaterialsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonMaterialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCommonMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCommonMaterialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDigitalHumanMaterialsRequest extends $tea.Model {
  current?: number;
  jwtToken?: string;
  onlyPersonalMaterials?: boolean;
  size?: number;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      jwtToken: 'JwtToken',
      onlyPersonalMaterials: 'OnlyPersonalMaterials',
      size: 'Size',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      jwtToken: 'string',
      onlyPersonalMaterials: 'boolean',
      size: 'number',
      types: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDigitalHumanMaterialsResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: ListDigitalHumanMaterialsResponseBodyData[];
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListDigitalHumanMaterialsResponseBodyData },
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDigitalHumanMaterialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDigitalHumanMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDigitalHumanMaterialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLocationServiceRequest extends $tea.Model {
  current?: number;
  jwtToken?: string;
  size?: number;
  sort?: string;
  sortField?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      jwtToken: 'JwtToken',
      size: 'Size',
      sort: 'Sort',
      sortField: 'SortField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      jwtToken: 'string',
      size: 'number',
      sort: 'string',
      sortField: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLocationServiceResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: ListLocationServiceResponseBodyData[];
  errorName?: string;
  httpCode?: number;
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListLocationServiceResponseBodyData },
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLocationServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLocationServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLocationServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMotionShopTasksRequest extends $tea.Model {
  current?: number;
  jwtToken?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      jwtToken: 'JwtToken',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      jwtToken: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMotionShopTasksResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: ListMotionShopTasksResponseBodyData[];
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListMotionShopTasksResponseBodyData },
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMotionShopTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMotionShopTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMotionShopTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivePortraitFaceDetectRequest extends $tea.Model {
  imageUrl?: string;
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivePortraitFaceDetectResponseBody extends $tea.Model {
  code?: string;
  data?: LivePortraitFaceDetectResponseBodyData;
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
      code: 'string',
      data: LivePortraitFaceDetectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivePortraitFaceDetectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LivePortraitFaceDetectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LivePortraitFaceDetectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LocateRequest extends $tea.Model {
  image?: string;
  jwtToken?: string;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      jwtToken: 'JwtToken',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      jwtToken: 'string',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LocateResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LocateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LocateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LocateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginModelScopeRequest extends $tea.Model {
  empId?: string;
  empName?: string;
  token?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      empId: 'EmpId',
      empName: 'EmpName',
      token: 'Token',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      empId: 'string',
      empName: 'string',
      token: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginModelScopeResponseBody extends $tea.Model {
  code?: string;
  data?: LoginModelScopeResponseBodyData;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: LoginModelScopeResponseBodyData,
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginModelScopeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LoginModelScopeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LoginModelScopeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MotionShopVideoDetectRequest extends $tea.Model {
  jwtToken?: string;
  ossKey?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      ossKey: 'OssKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      ossKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MotionShopVideoDetectResponseBody extends $tea.Model {
  code?: string;
  data?: MotionShopVideoDetectResponseBodyData;
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
      code: 'string',
      data: MotionShopVideoDetectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MotionShopVideoDetectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MotionShopVideoDetectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MotionShopVideoDetectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBatchQueryObjectGenerationProjectStatusRequest extends $tea.Model {
  jwtToken?: string;
  projectIds?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      projectIds: 'ProjectIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      projectIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBatchQueryObjectGenerationProjectStatusResponseBody extends $tea.Model {
  code?: string;
  data?: PopBatchQueryObjectGenerationProjectStatusResponseBodyData[];
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
      code: 'string',
      data: { 'type': 'array', 'itemType': PopBatchQueryObjectGenerationProjectStatusResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBatchQueryObjectGenerationProjectStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopBatchQueryObjectGenerationProjectStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopBatchQueryObjectGenerationProjectStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBatchQueryObjectProjectStatusRequest extends $tea.Model {
  jwtToken?: string;
  projectIds?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      projectIds: 'ProjectIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      projectIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBatchQueryObjectProjectStatusResponseBody extends $tea.Model {
  code?: string;
  data?: PopBatchQueryObjectProjectStatusResponseBodyData[];
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': PopBatchQueryObjectProjectStatusResponseBodyData },
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBatchQueryObjectProjectStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopBatchQueryObjectProjectStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopBatchQueryObjectProjectStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildFeatureToAvatarProjectRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildFeatureToAvatarProjectResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
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
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildFeatureToAvatarProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopBuildFeatureToAvatarProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopBuildFeatureToAvatarProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildLivePortraitModelScopeProjectRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildLivePortraitModelScopeProjectResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
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
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildLivePortraitModelScopeProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopBuildLivePortraitModelScopeProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopBuildLivePortraitModelScopeProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildObjectGenerationProjectRequest extends $tea.Model {
  jwtToken?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildObjectGenerationProjectResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
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
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildObjectGenerationProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopBuildObjectGenerationProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopBuildObjectGenerationProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildObjectProjectRequest extends $tea.Model {
  jwtToken?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildObjectProjectResponseBody extends $tea.Model {
  code?: string;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildObjectProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopBuildObjectProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopBuildObjectProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildPakRenderProjectRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildPakRenderProjectResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
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
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildPakRenderProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopBuildPakRenderProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopBuildPakRenderProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildTextToAvatarProjectRequest extends $tea.Model {
  jwtToken?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildTextToAvatarProjectResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
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
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBuildTextToAvatarProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopBuildTextToAvatarProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopBuildTextToAvatarProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateFeatureToAvatarProjectRequest extends $tea.Model {
  extInfo?: string;
  intro?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      intro: 'Intro',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: 'string',
      intro: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateFeatureToAvatarProjectResponseBody extends $tea.Model {
  code?: string;
  data?: PopCreateFeatureToAvatarProjectResponseBodyData;
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
      code: 'string',
      data: PopCreateFeatureToAvatarProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateFeatureToAvatarProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopCreateFeatureToAvatarProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopCreateFeatureToAvatarProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateLivePortraitModelScopeProjectRequest extends $tea.Model {
  extInfo?: string;
  intro?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      intro: 'Intro',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: 'string',
      intro: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateLivePortraitModelScopeProjectResponseBody extends $tea.Model {
  code?: string;
  data?: PopCreateLivePortraitModelScopeProjectResponseBodyData;
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
      code: 'string',
      data: PopCreateLivePortraitModelScopeProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateLivePortraitModelScopeProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopCreateLivePortraitModelScopeProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopCreateLivePortraitModelScopeProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateMaterialRequest extends $tea.Model {
  checkStatus?: string;
  ext?: string;
  intro?: string;
  jwtToken?: string;
  listStatus?: string;
  name?: string;
  ossKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      ext: 'Ext',
      intro: 'Intro',
      jwtToken: 'JwtToken',
      listStatus: 'ListStatus',
      name: 'Name',
      ossKey: 'OssKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      ext: 'string',
      intro: 'string',
      jwtToken: 'string',
      listStatus: 'string',
      name: 'string',
      ossKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateMaterialResponseBody extends $tea.Model {
  code?: string;
  data?: PopCreateMaterialResponseBodyData;
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
      code: 'string',
      data: PopCreateMaterialResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopCreateMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopCreateMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectGenerationProjectRequest extends $tea.Model {
  bizUsage?: string;
  extInfo?: string;
  intro?: string;
  jwtToken?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      extInfo: 'ExtInfo',
      intro: 'Intro',
      jwtToken: 'JwtToken',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      extInfo: 'string',
      intro: 'string',
      jwtToken: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectGenerationProjectResponseBody extends $tea.Model {
  code?: string;
  data?: PopCreateObjectGenerationProjectResponseBodyData;
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
      code: 'string',
      data: PopCreateObjectGenerationProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectGenerationProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopCreateObjectGenerationProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopCreateObjectGenerationProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectProjectRequest extends $tea.Model {
  autoBuild?: boolean;
  bizUsage?: string;
  customSource?: string;
  dependencies?: string;
  foreignUid?: string;
  intro?: string;
  jwtToken?: string;
  mode?: string;
  recommendStatus?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      bizUsage: 'BizUsage',
      customSource: 'CustomSource',
      dependencies: 'Dependencies',
      foreignUid: 'ForeignUid',
      intro: 'Intro',
      jwtToken: 'JwtToken',
      mode: 'Mode',
      recommendStatus: 'RecommendStatus',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'boolean',
      bizUsage: 'string',
      customSource: 'string',
      dependencies: 'string',
      foreignUid: 'string',
      intro: 'string',
      jwtToken: 'string',
      mode: 'string',
      recommendStatus: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectProjectResponseBody extends $tea.Model {
  code?: string;
  data?: PopCreateObjectProjectResponseBodyData;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PopCreateObjectProjectResponseBodyData,
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopCreateObjectProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopCreateObjectProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreatePakRenderProjectRequest extends $tea.Model {
  extInfo?: string;
  intro?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      intro: 'Intro',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: 'string',
      intro: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreatePakRenderProjectResponseBody extends $tea.Model {
  code?: string;
  data?: PopCreatePakRenderProjectResponseBodyData;
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
      code: 'string',
      data: PopCreatePakRenderProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreatePakRenderProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopCreatePakRenderProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopCreatePakRenderProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateTextToAvatarProjectRequest extends $tea.Model {
  extInfo?: string;
  intro?: string;
  jwtToken?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      intro: 'Intro',
      jwtToken: 'JwtToken',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: 'string',
      intro: 'string',
      jwtToken: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateTextToAvatarProjectResponseBody extends $tea.Model {
  code?: string;
  data?: PopCreateTextToAvatarProjectResponseBodyData;
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
      code: 'string',
      data: PopCreateTextToAvatarProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateTextToAvatarProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopCreateTextToAvatarProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopCreateTextToAvatarProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopDeleteMaterialRequest extends $tea.Model {
  jwtToken?: string;
  materialId?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      materialId: 'MaterialId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      materialId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopDeleteMaterialResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
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
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopDeleteMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopDeleteMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopDeleteMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobRequest extends $tea.Model {
  jwtToken?: string;
  projectId?: string;
  withMaterial?: boolean;
  withResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      projectId: 'ProjectId',
      withMaterial: 'WithMaterial',
      withResult: 'WithResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      projectId: 'string',
      withMaterial: 'boolean',
      withResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBody extends $tea.Model {
  code?: string;
  data?: PopGetAITryOnJobResponseBodyData;
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
      code: 'string',
      data: PopGetAITryOnJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopGetAITryOnJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopGetAITryOnJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsRequest extends $tea.Model {
  current?: number;
  jwtToken?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      jwtToken: 'JwtToken',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      jwtToken: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: PopListAITryOnJobsResponseBodyData[];
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': PopListAITryOnJobsResponseBodyData },
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopListAITryOnJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopListAITryOnJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListCommonMaterialsAllRequest extends $tea.Model {
  current?: number;
  jwtToken?: string;
  listStatus?: string;
  name?: string;
  size?: number;
  tags?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      jwtToken: 'JwtToken',
      listStatus: 'ListStatus',
      name: 'Name',
      size: 'Size',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      jwtToken: 'string',
      listStatus: 'string',
      name: 'string',
      size: 'number',
      tags: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListCommonMaterialsAllResponseBody extends $tea.Model {
  code?: string;
  data?: PopListCommonMaterialsAllResponseBodyData[];
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
      code: 'string',
      data: { 'type': 'array', 'itemType': PopListCommonMaterialsAllResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListCommonMaterialsAllResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopListCommonMaterialsAllResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopListCommonMaterialsAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListFeatureToAvatarMaterialsRequest extends $tea.Model {
  current?: number;
  listStatus?: string;
  size?: number;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      listStatus: 'ListStatus',
      size: 'Size',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      listStatus: 'string',
      size: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListFeatureToAvatarMaterialsResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: PopListFeatureToAvatarMaterialsResponseBodyData[];
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': PopListFeatureToAvatarMaterialsResponseBodyData },
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListFeatureToAvatarMaterialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopListFeatureToAvatarMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopListFeatureToAvatarMaterialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListFeatureToAvatarProjectRequest extends $tea.Model {
  current?: number;
  size?: number;
  sortField?: string;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      size: 'Size',
      sortField: 'SortField',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      size: 'number',
      sortField: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListFeatureToAvatarProjectResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: PopListFeatureToAvatarProjectResponseBodyData[];
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': PopListFeatureToAvatarProjectResponseBodyData },
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListFeatureToAvatarProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopListFeatureToAvatarProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopListFeatureToAvatarProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListLivePortraitModelScopeMaterialsRequest extends $tea.Model {
  current?: number;
  size?: number;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      size: 'Size',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      size: 'number',
      types: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListLivePortraitModelScopeMaterialsResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: PopListLivePortraitModelScopeMaterialsResponseBodyData[];
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': PopListLivePortraitModelScopeMaterialsResponseBodyData },
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListLivePortraitModelScopeMaterialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopListLivePortraitModelScopeMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopListLivePortraitModelScopeMaterialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectCaseRequest extends $tea.Model {
  current?: number;
  jwtToken?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      jwtToken: 'JwtToken',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      jwtToken: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectCaseResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: PopListObjectCaseResponseBodyData[];
  errorName?: string;
  httpCode?: number;
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': PopListObjectCaseResponseBodyData },
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectCaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopListObjectCaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopListObjectCaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectGenerationProjectRequest extends $tea.Model {
  current?: number;
  jwtToken?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      jwtToken: 'JwtToken',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      jwtToken: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectGenerationProjectResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: PopListObjectGenerationProjectResponseBodyData[];
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': PopListObjectGenerationProjectResponseBodyData },
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectGenerationProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopListObjectGenerationProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopListObjectGenerationProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectProjectRequest extends $tea.Model {
  auditStatus?: string;
  current?: number;
  customSource?: string;
  jwtToken?: string;
  size?: number;
  sortField?: string;
  status?: string;
  title?: string;
  withSource?: boolean;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      current: 'Current',
      customSource: 'CustomSource',
      jwtToken: 'JwtToken',
      size: 'Size',
      sortField: 'SortField',
      status: 'Status',
      title: 'Title',
      withSource: 'WithSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      current: 'number',
      customSource: 'string',
      jwtToken: 'string',
      size: 'number',
      sortField: 'string',
      status: 'string',
      title: 'string',
      withSource: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectProjectResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: PopListObjectProjectResponseBodyData[];
  errorName?: string;
  httpCode?: number;
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': PopListObjectProjectResponseBodyData },
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopListObjectProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopListObjectProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListPakRenderExpressionRequest extends $tea.Model {
  current?: number;
  listStatus?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      listStatus: 'ListStatus',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      listStatus: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListPakRenderExpressionResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: PopListPakRenderExpressionResponseBodyData[];
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': PopListPakRenderExpressionResponseBodyData },
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListPakRenderExpressionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopListPakRenderExpressionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopListPakRenderExpressionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListTextToAvatarProjectRequest extends $tea.Model {
  current?: number;
  jwtToken?: string;
  size?: number;
  sortField?: string;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      jwtToken: 'JwtToken',
      size: 'Size',
      sortField: 'SortField',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      jwtToken: 'string',
      size: 'number',
      sortField: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListTextToAvatarProjectResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: PopListTextToAvatarProjectResponseBodyData[];
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': PopListTextToAvatarProjectResponseBodyData },
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListTextToAvatarProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopListTextToAvatarProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopListTextToAvatarProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectProjectDetailRequest extends $tea.Model {
  jwtToken?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectProjectDetailResponseBody extends $tea.Model {
  code?: string;
  data?: PopObjectProjectDetailResponseBodyData;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PopObjectProjectDetailResponseBodyData,
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectProjectDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopObjectProjectDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopObjectProjectDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectRetrievalRequest extends $tea.Model {
  content?: string;
  jwtToken?: string;
  sourceType?: string;
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      jwtToken: 'JwtToken',
      sourceType: 'SourceType',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      jwtToken: 'string',
      sourceType: 'string',
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectRetrievalResponseBody extends $tea.Model {
  code?: string;
  data?: PopObjectRetrievalResponseBodyData[];
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
      code: 'string',
      data: { 'type': 'array', 'itemType': PopObjectRetrievalResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectRetrievalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopObjectRetrievalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopObjectRetrievalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectRetrievalUploadDataRequest extends $tea.Model {
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectRetrievalUploadDataResponseBody extends $tea.Model {
  code?: string;
  data?: PopObjectRetrievalUploadDataResponseBodyData;
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
      code: 'string',
      data: PopObjectRetrievalUploadDataResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectRetrievalUploadDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopObjectRetrievalUploadDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopObjectRetrievalUploadDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryAvatarProjectDetailRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryAvatarProjectDetailResponseBody extends $tea.Model {
  code?: string;
  data?: PopQueryAvatarProjectDetailResponseBodyData;
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
      code: 'string',
      data: PopQueryAvatarProjectDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryAvatarProjectDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopQueryAvatarProjectDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopQueryAvatarProjectDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryLatestAvatarProjectDetailByUserRequest extends $tea.Model {
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryLatestAvatarProjectDetailByUserResponseBody extends $tea.Model {
  code?: string;
  data?: PopQueryLatestAvatarProjectDetailByUserResponseBodyData;
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
      code: 'string',
      data: PopQueryLatestAvatarProjectDetailByUserResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryLatestAvatarProjectDetailByUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopQueryLatestAvatarProjectDetailByUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopQueryLatestAvatarProjectDetailByUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryLivePortraitModelScopeProjectDetailRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryLivePortraitModelScopeProjectDetailResponseBody extends $tea.Model {
  code?: string;
  data?: PopQueryLivePortraitModelScopeProjectDetailResponseBodyData;
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
      code: 'string',
      data: PopQueryLivePortraitModelScopeProjectDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryLivePortraitModelScopeProjectDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopQueryLivePortraitModelScopeProjectDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopQueryLivePortraitModelScopeProjectDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryObjectGenerationProjectDetailRequest extends $tea.Model {
  jwtToken?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryObjectGenerationProjectDetailResponseBody extends $tea.Model {
  code?: string;
  data?: PopQueryObjectGenerationProjectDetailResponseBodyData;
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
      code: 'string',
      data: PopQueryObjectGenerationProjectDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryObjectGenerationProjectDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopQueryObjectGenerationProjectDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopQueryObjectGenerationProjectDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopRetryAITryOnTaskRequest extends $tea.Model {
  jwtToken?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopRetryAITryOnTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
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
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopRetryAITryOnTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopRetryAITryOnTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopRetryAITryOnTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopSubmitAITryOnJobRequest extends $tea.Model {
  bottomsId?: string;
  clothingType?: string;
  jwtToken?: string;
  modelId?: string;
  shoeType?: string;
  suitId?: string;
  topsId?: string;
  static names(): { [key: string]: string } {
    return {
      bottomsId: 'BottomsId',
      clothingType: 'ClothingType',
      jwtToken: 'JwtToken',
      modelId: 'ModelId',
      shoeType: 'ShoeType',
      suitId: 'SuitId',
      topsId: 'TopsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottomsId: 'string',
      clothingType: 'string',
      jwtToken: 'string',
      modelId: 'string',
      shoeType: 'string',
      suitId: 'string',
      topsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopSubmitAITryOnJobResponseBody extends $tea.Model {
  code?: string;
  data?: PopSubmitAITryOnJobResponseBodyData;
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
      code: 'string',
      data: PopSubmitAITryOnJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopSubmitAITryOnJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopSubmitAITryOnJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopSubmitAITryOnJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopUploadMaterialRequest extends $tea.Model {
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopUploadMaterialResponseBody extends $tea.Model {
  code?: string;
  data?: PopUploadMaterialResponseBodyData;
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
      code: 'string',
      data: PopUploadMaterialResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopUploadMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopUploadMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopUploadMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopVideoSaveSourceRequest extends $tea.Model {
  jwtToken?: string;
  projectId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      projectId: 'ProjectId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      projectId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopVideoSaveSourceResponseBody extends $tea.Model {
  code?: string;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopVideoSaveSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PopVideoSaveSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PopVideoSaveSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDigitalHumanProjectRequest extends $tea.Model {
  ids?: string;
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDigitalHumanProjectResponseBody extends $tea.Model {
  code?: string;
  data?: QueryDigitalHumanProjectResponseBodyData[];
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
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryDigitalHumanProjectResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDigitalHumanProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDigitalHumanProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDigitalHumanProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLongTtsResultRequest extends $tea.Model {
  jobId?: string;
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLongTtsResultResponseBody extends $tea.Model {
  code?: string;
  data?: QueryLongTtsResultResponseBodyData;
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
      code: 'string',
      data: QueryLongTtsResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLongTtsResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryLongTtsResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryLongTtsResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMotionShopVideoDetectResultRequest extends $tea.Model {
  jobId?: string;
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMotionShopVideoDetectResultResponseBody extends $tea.Model {
  code?: string;
  data?: QueryMotionShopVideoDetectResultResponseBodyData;
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
      code: 'string',
      data: QueryMotionShopVideoDetectResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMotionShopVideoDetectResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMotionShopVideoDetectResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMotionShopVideoDetectResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLongTtsTaskRequest extends $tea.Model {
  content?: string;
  jwtToken?: string;
  ttsVoiceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      jwtToken: 'JwtToken',
      ttsVoiceId: 'TtsVoiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      jwtToken: 'string',
      ttsVoiceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitLongTtsTaskResponseBody extends $tea.Model {
  code?: string;
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
      code: 'string',
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

export class SubmitLongTtsTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitLongTtsTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitLongTtsTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMotionShopTaskRequest extends $tea.Model {
  avatarId?: string;
  jwtToken?: string;
  title?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      avatarId: 'AvatarId',
      jwtToken: 'JwtToken',
      title: 'Title',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarId: 'string',
      jwtToken: 'string',
      title: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMotionShopTaskResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitMotionShopTaskResponseBodyData;
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
      code: 'string',
      data: SubmitMotionShopTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMotionShopTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitMotionShopTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitMotionShopTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserEmailRequest extends $tea.Model {
  email?: string;
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserEmailResponseBody extends $tea.Model {
  code?: string;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserEmailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateUserEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserEmailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthUserResponseBodyData extends $tea.Model {
  jwtToken?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryMotionShopTaskStatusResponseBodyDataTasksResult extends $tea.Model {
  coverUrl?: string;
  shareUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      shareUrl: 'ShareUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      shareUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryMotionShopTaskStatusResponseBodyDataTasks extends $tea.Model {
  result?: BatchQueryMotionShopTaskStatusResponseBodyDataTasksResult;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: BatchQueryMotionShopTaskStatusResponseBodyDataTasksResult,
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryMotionShopTaskStatusResponseBodyData extends $tea.Model {
  tasks?: BatchQueryMotionShopTaskStatusResponseBodyDataTasks[];
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': BatchQueryMotionShopTaskStatusResponseBodyDataTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDigitalHumanProjectResponseBodyData extends $tea.Model {
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

export class CreateLivePortraitProjectResponseBodyData extends $tea.Model {
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

export class GenerateMotionShopVideoUploadUrlResponseBodyData extends $tea.Model {
  ossKey?: string;
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ossKey: 'OssKey',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossKey: 'string',
      uploadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonMaterialsResponseBodyData extends $tea.Model {
  coverUrl?: string;
  ext?: string;
  fileUrl?: string;
  id?: string;
  name?: string;
  ossKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      id: 'Id',
      name: 'Name',
      ossKey: 'OssKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      ext: 'string',
      fileUrl: 'string',
      id: 'string',
      name: 'string',
      ossKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDigitalHumanMaterialsResponseBodyDataComponents extends $tea.Model {
  ext?: string;
  fileUrl?: string;
  files?: { [key: string]: any };
  id?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      fileUrl: 'FileUrl',
      files: 'Files',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: 'string',
      fileUrl: 'string',
      files: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDigitalHumanMaterialsResponseBodyData extends $tea.Model {
  components?: ListDigitalHumanMaterialsResponseBodyDataComponents[];
  ext?: string;
  fileUrl?: string;
  files?: { [key: string]: any };
  id?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      files: 'Files',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': ListDigitalHumanMaterialsResponseBodyDataComponents },
      ext: 'string',
      fileUrl: 'string',
      files: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLocationServiceResponseBodyData extends $tea.Model {
  appId?: string;
  expireTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  name?: string;
  note?: string;
  qps?: number;
  startTime?: string;
  status?: string;
  svcState?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      note: 'Note',
      qps: 'Qps',
      startTime: 'StartTime',
      status: 'Status',
      svcState: 'SvcState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      expireTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      note: 'string',
      qps: 'number',
      startTime: 'string',
      status: 'string',
      svcState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMotionShopTasksResponseBodyDataResult extends $tea.Model {
  coverUrl?: string;
  shareUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      shareUrl: 'ShareUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      shareUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMotionShopTasksResponseBodyData extends $tea.Model {
  result?: ListMotionShopTasksResponseBodyDataResult;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ListMotionShopTasksResponseBodyDataResult,
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivePortraitFaceDetectResponseBodyData extends $tea.Model {
  code?: number;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginModelScopeResponseBodyData extends $tea.Model {
  email?: string;
  jwtToken?: string;
  nickname?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      jwtToken: 'JwtToken',
      nickname: 'Nickname',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      jwtToken: 'string',
      nickname: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MotionShopVideoDetectResponseBodyData extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBatchQueryObjectGenerationProjectStatusResponseBodyDataDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBatchQueryObjectGenerationProjectStatusResponseBodyData extends $tea.Model {
  bizUsage?: string;
  dataset?: PopBatchQueryObjectGenerationProjectStatusResponseBodyDataDataset;
  id?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      dataset: 'Dataset',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      dataset: PopBatchQueryObjectGenerationProjectStatusResponseBodyDataDataset,
      id: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopBatchQueryObjectProjectStatusResponseBodyData extends $tea.Model {
  checkStatus?: string;
  id?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      id: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateFeatureToAvatarProjectResponseBodyDataBuildDetail extends $tea.Model {
  completedTime?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  estimatedDuration?: number;
  id?: number;
  modifiedTime?: string;
  runningTime?: string;
  status?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      runningTime: 'RunningTime',
      status: 'Status',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      estimatedDuration: 'number',
      id: 'number',
      modifiedTime: 'string',
      runningTime: 'string',
      status: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateFeatureToAvatarProjectResponseBodyDataDatasetPolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateFeatureToAvatarProjectResponseBodyDataDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  errorCode?: string;
  errorMessage?: string;
  glbModelUrl?: string;
  id?: number;
  modelUrl?: string;
  modifiedTime?: string;
  originResultUrl?: string;
  ossKey?: string;
  policy?: PopCreateFeatureToAvatarProjectResponseBodyDataDatasetPolicy;
  poseUrl?: string;
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      glbModelUrl: 'GlbModelUrl',
      id: 'Id',
      modelUrl: 'ModelUrl',
      modifiedTime: 'ModifiedTime',
      originResultUrl: 'OriginResultUrl',
      ossKey: 'OssKey',
      policy: 'Policy',
      poseUrl: 'PoseUrl',
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      glbModelUrl: 'string',
      id: 'number',
      modelUrl: 'string',
      modifiedTime: 'string',
      originResultUrl: 'string',
      ossKey: 'string',
      policy: PopCreateFeatureToAvatarProjectResponseBodyDataDatasetPolicy,
      poseUrl: 'string',
      previewUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateFeatureToAvatarProjectResponseBodyData extends $tea.Model {
  bizUsage?: string;
  buildDetail?: PopCreateFeatureToAvatarProjectResponseBodyDataBuildDetail;
  checkStatus?: string;
  createMode?: string;
  createTime?: string;
  dataset?: PopCreateFeatureToAvatarProjectResponseBodyDataDataset;
  deleted?: boolean;
  ext?: string;
  id?: string;
  intro?: string;
  materialCoverUrl?: string;
  modifiedTime?: string;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      checkStatus: 'CheckStatus',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      dataset: 'Dataset',
      deleted: 'Deleted',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      materialCoverUrl: 'MaterialCoverUrl',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      buildDetail: PopCreateFeatureToAvatarProjectResponseBodyDataBuildDetail,
      checkStatus: 'string',
      createMode: 'string',
      createTime: 'string',
      dataset: PopCreateFeatureToAvatarProjectResponseBodyDataDataset,
      deleted: 'boolean',
      ext: 'string',
      id: 'string',
      intro: 'string',
      materialCoverUrl: 'string',
      modifiedTime: 'string',
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateLivePortraitModelScopeProjectResponseBodyData extends $tea.Model {
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

export class PopCreateMaterialResponseBodyData extends $tea.Model {
  checkStatus?: string;
  common?: boolean;
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  ext?: string;
  fileUrl?: string;
  id?: string;
  intro?: string;
  listStatus?: string;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  previewUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      common: 'Common',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      id: 'Id',
      intro: 'Intro',
      listStatus: 'ListStatus',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      previewUrl: 'PreviewUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      common: 'boolean',
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      ext: 'string',
      fileUrl: 'string',
      id: 'string',
      intro: 'string',
      listStatus: 'string',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      previewUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectGenerationProjectResponseBodyData extends $tea.Model {
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

export class PopCreateObjectProjectResponseBodyDataBuildDetail extends $tea.Model {
  completedTime?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  estimatedDuration?: number;
  modifiedTime?: string;
  runningTime?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      modifiedTime: 'ModifiedTime',
      runningTime: 'RunningTime',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      estimatedDuration: 'number',
      modifiedTime: 'string',
      runningTime: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectProjectResponseBodyDataDatasetPolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectProjectResponseBodyDataDatasetToken extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  dir?: string;
  expiration?: string;
  host?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      dir: 'Dir',
      expiration: 'Expiration',
      host: 'Host',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      dir: 'string',
      expiration: 'string',
      host: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectProjectResponseBodyDataDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  glbModelUrl?: string;
  modelUrl?: string;
  modifiedTime?: string;
  originResultUrl?: string;
  ossKey?: string;
  policy?: PopCreateObjectProjectResponseBodyDataDatasetPolicy;
  poseUrl?: string;
  previewUrl?: string;
  token?: PopCreateObjectProjectResponseBodyDataDatasetToken;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      glbModelUrl: 'GlbModelUrl',
      modelUrl: 'ModelUrl',
      modifiedTime: 'ModifiedTime',
      originResultUrl: 'OriginResultUrl',
      ossKey: 'OssKey',
      policy: 'Policy',
      poseUrl: 'PoseUrl',
      previewUrl: 'PreviewUrl',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      glbModelUrl: 'string',
      modelUrl: 'string',
      modifiedTime: 'string',
      originResultUrl: 'string',
      ossKey: 'string',
      policy: PopCreateObjectProjectResponseBodyDataDatasetPolicy,
      poseUrl: 'string',
      previewUrl: 'string',
      token: PopCreateObjectProjectResponseBodyDataDatasetToken,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectProjectResponseBodyDataSourceClothes extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectProjectResponseBodyDataSourcePolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectProjectResponseBodyDataSourceSourceFiles extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  fileName?: string;
  filesize?: number;
  modifiedTime?: string;
  ossKey?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      fileName: 'FileName',
      filesize: 'Filesize',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      fileName: 'string',
      filesize: 'number',
      modifiedTime: 'string',
      ossKey: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectProjectResponseBodyDataSourceToken extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  dir?: string;
  expiration?: string;
  host?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      dir: 'Dir',
      expiration: 'Expiration',
      host: 'Host',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      dir: 'string',
      expiration: 'string',
      host: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectProjectResponseBodyDataSource extends $tea.Model {
  clothes?: PopCreateObjectProjectResponseBodyDataSourceClothes[];
  createTime?: string;
  deleted?: boolean;
  modifiedTime?: string;
  ossKey?: string;
  policy?: PopCreateObjectProjectResponseBodyDataSourcePolicy;
  sourceFiles?: PopCreateObjectProjectResponseBodyDataSourceSourceFiles[];
  token?: PopCreateObjectProjectResponseBodyDataSourceToken;
  static names(): { [key: string]: string } {
    return {
      clothes: 'Clothes',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      policy: 'Policy',
      sourceFiles: 'SourceFiles',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothes: { 'type': 'array', 'itemType': PopCreateObjectProjectResponseBodyDataSourceClothes },
      createTime: 'string',
      deleted: 'boolean',
      modifiedTime: 'string',
      ossKey: 'string',
      policy: PopCreateObjectProjectResponseBodyDataSourcePolicy,
      sourceFiles: { 'type': 'array', 'itemType': PopCreateObjectProjectResponseBodyDataSourceSourceFiles },
      token: PopCreateObjectProjectResponseBodyDataSourceToken,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateObjectProjectResponseBodyData extends $tea.Model {
  auditStatus?: string;
  autoBuild?: boolean;
  bizUsage?: string;
  buildDetail?: PopCreateObjectProjectResponseBodyDataBuildDetail;
  checkStatus?: string;
  createMode?: string;
  createTime?: string;
  customSource?: string;
  dataset?: PopCreateObjectProjectResponseBodyDataDataset;
  deleted?: boolean;
  dependencies?: string;
  ext?: string;
  id?: string;
  intro?: string;
  modifiedTime?: string;
  recommendStatus?: string;
  source?: PopCreateObjectProjectResponseBodyDataSource;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoBuild: 'AutoBuild',
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      checkStatus: 'CheckStatus',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      customSource: 'CustomSource',
      dataset: 'Dataset',
      deleted: 'Deleted',
      dependencies: 'Dependencies',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      modifiedTime: 'ModifiedTime',
      recommendStatus: 'RecommendStatus',
      source: 'Source',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      autoBuild: 'boolean',
      bizUsage: 'string',
      buildDetail: PopCreateObjectProjectResponseBodyDataBuildDetail,
      checkStatus: 'string',
      createMode: 'string',
      createTime: 'string',
      customSource: 'string',
      dataset: PopCreateObjectProjectResponseBodyDataDataset,
      deleted: 'boolean',
      dependencies: 'string',
      ext: 'string',
      id: 'string',
      intro: 'string',
      modifiedTime: 'string',
      recommendStatus: 'string',
      source: PopCreateObjectProjectResponseBodyDataSource,
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreatePakRenderProjectResponseBodyData extends $tea.Model {
  autoBuild?: boolean;
  bizUsage?: string;
  checkStatus?: string;
  createMode?: string;
  createTime?: string;
  deleted?: boolean;
  dependencies?: string;
  ext?: string;
  id?: string;
  intro?: string;
  materialCoverUrl?: string;
  modifiedTime?: string;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      bizUsage: 'BizUsage',
      checkStatus: 'CheckStatus',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      dependencies: 'Dependencies',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      materialCoverUrl: 'MaterialCoverUrl',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'boolean',
      bizUsage: 'string',
      checkStatus: 'string',
      createMode: 'string',
      createTime: 'string',
      deleted: 'boolean',
      dependencies: 'string',
      ext: 'string',
      id: 'string',
      intro: 'string',
      materialCoverUrl: 'string',
      modifiedTime: 'string',
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopCreateTextToAvatarProjectResponseBodyData extends $tea.Model {
  autoBuild?: boolean;
  bizUsage?: string;
  checkStatus?: string;
  createMode?: string;
  createTime?: string;
  deleted?: boolean;
  dependencies?: string;
  ext?: string;
  id?: string;
  intro?: string;
  materialCoverUrl?: string;
  modifiedTime?: string;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      bizUsage: 'BizUsage',
      checkStatus: 'CheckStatus',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      dependencies: 'Dependencies',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      materialCoverUrl: 'MaterialCoverUrl',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'boolean',
      bizUsage: 'string',
      checkStatus: 'string',
      createMode: 'string',
      createTime: 'string',
      deleted: 'boolean',
      dependencies: 'string',
      ext: 'string',
      id: 'string',
      intro: 'string',
      materialCoverUrl: 'string',
      modifiedTime: 'string',
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataDummyProjectInfoBuildDetail extends $tea.Model {
  completedTime?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  estimatedDuration?: number;
  id?: number;
  modifiedTime?: string;
  runningTime?: string;
  status?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      runningTime: 'RunningTime',
      status: 'Status',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      estimatedDuration: 'number',
      id: 'number',
      modifiedTime: 'string',
      runningTime: 'string',
      status: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataDummyProjectInfoDatasetPolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataDummyProjectInfoDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  errorCode?: string;
  errorMessage?: string;
  glbModelUrl?: string;
  id?: number;
  modelUrl?: string;
  modifiedTime?: string;
  originResultUrl?: string;
  ossKey?: string;
  policy?: PopGetAITryOnJobResponseBodyDataDummyProjectInfoDatasetPolicy;
  poseUrl?: string;
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      glbModelUrl: 'GlbModelUrl',
      id: 'Id',
      modelUrl: 'ModelUrl',
      modifiedTime: 'ModifiedTime',
      originResultUrl: 'OriginResultUrl',
      ossKey: 'OssKey',
      policy: 'Policy',
      poseUrl: 'PoseUrl',
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      glbModelUrl: 'string',
      id: 'number',
      modelUrl: 'string',
      modifiedTime: 'string',
      originResultUrl: 'string',
      ossKey: 'string',
      policy: PopGetAITryOnJobResponseBodyDataDummyProjectInfoDatasetPolicy,
      poseUrl: 'string',
      previewUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceClothesSkuProps extends $tea.Model {
  name?: string;
  options?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      options: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceClothesSkus extends $tea.Model {
  color?: string;
  cover?: string;
  size?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
      cover: 'Cover',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      cover: 'string',
      size: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceClothes extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  id?: number;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  part?: string;
  size?: string;
  skuProps?: PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceClothesSkuProps[];
  skus?: PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceClothesSkus[];
  status?: { [key: string]: string };
  type?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      part: 'Part',
      size: 'Size',
      skuProps: 'SkuProps',
      skus: 'Skus',
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      id: 'number',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      part: 'string',
      size: 'string',
      skuProps: { 'type': 'array', 'itemType': PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceClothesSkuProps },
      skus: { 'type': 'array', 'itemType': PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceClothesSkus },
      status: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourcePolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceSourceFiles extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  fileName?: string;
  filesize?: number;
  id?: number;
  modifiedTime?: string;
  ossKey?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      fileName: 'FileName',
      filesize: 'Filesize',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      fileName: 'string',
      filesize: 'number',
      id: 'number',
      modifiedTime: 'string',
      ossKey: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceToken extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  dir?: string;
  expiration?: string;
  host?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      dir: 'Dir',
      expiration: 'Expiration',
      host: 'Host',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      dir: 'string',
      expiration: 'string',
      host: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataDummyProjectInfoSource extends $tea.Model {
  clothes?: PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceClothes[];
  createTime?: string;
  deleted?: boolean;
  id?: number;
  modifiedTime?: string;
  ossKey?: string;
  policy?: PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourcePolicy;
  sourceFiles?: PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceSourceFiles[];
  token?: PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceToken;
  static names(): { [key: string]: string } {
    return {
      clothes: 'Clothes',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      policy: 'Policy',
      sourceFiles: 'SourceFiles',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothes: { 'type': 'array', 'itemType': PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceClothes },
      createTime: 'string',
      deleted: 'boolean',
      id: 'number',
      modifiedTime: 'string',
      ossKey: 'string',
      policy: PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourcePolicy,
      sourceFiles: { 'type': 'array', 'itemType': PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceSourceFiles },
      token: PopGetAITryOnJobResponseBodyDataDummyProjectInfoSourceToken,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataDummyProjectInfo extends $tea.Model {
  auditStatus?: string;
  autoBuild?: boolean;
  bizUsage?: string;
  buildDetail?: PopGetAITryOnJobResponseBodyDataDummyProjectInfoBuildDetail;
  checkStatus?: string;
  createMode?: string;
  createTime?: string;
  customSource?: string;
  dataset?: PopGetAITryOnJobResponseBodyDataDummyProjectInfoDataset;
  deleted?: boolean;
  dependencies?: string;
  ext?: string;
  id?: string;
  intro?: string;
  materialCoverUrl?: string;
  modifiedTime?: string;
  source?: PopGetAITryOnJobResponseBodyDataDummyProjectInfoSource;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoBuild: 'AutoBuild',
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      checkStatus: 'CheckStatus',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      customSource: 'CustomSource',
      dataset: 'Dataset',
      deleted: 'Deleted',
      dependencies: 'Dependencies',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      materialCoverUrl: 'MaterialCoverUrl',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      autoBuild: 'boolean',
      bizUsage: 'string',
      buildDetail: PopGetAITryOnJobResponseBodyDataDummyProjectInfoBuildDetail,
      checkStatus: 'string',
      createMode: 'string',
      createTime: 'string',
      customSource: 'string',
      dataset: PopGetAITryOnJobResponseBodyDataDummyProjectInfoDataset,
      deleted: 'boolean',
      dependencies: 'string',
      ext: 'string',
      id: 'string',
      intro: 'string',
      materialCoverUrl: 'string',
      modifiedTime: 'string',
      source: PopGetAITryOnJobResponseBodyDataDummyProjectInfoSource,
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataMaterialInfoBottoms extends $tea.Model {
  checkStatus?: string;
  common?: boolean;
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  ext?: string;
  fileUrl?: string;
  id?: number;
  intro?: string;
  listStatus?: string;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  previewUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      common: 'Common',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      id: 'Id',
      intro: 'Intro',
      listStatus: 'ListStatus',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      previewUrl: 'PreviewUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      common: 'boolean',
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      ext: 'string',
      fileUrl: 'string',
      id: 'number',
      intro: 'string',
      listStatus: 'string',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      previewUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataMaterialInfoModel extends $tea.Model {
  checkStatus?: string;
  common?: boolean;
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  ext?: string;
  fileUrl?: string;
  id?: number;
  intro?: string;
  listStatus?: string;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  previewUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      common: 'Common',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      id: 'Id',
      intro: 'Intro',
      listStatus: 'ListStatus',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      previewUrl: 'PreviewUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      common: 'boolean',
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      ext: 'string',
      fileUrl: 'string',
      id: 'number',
      intro: 'string',
      listStatus: 'string',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      previewUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataMaterialInfoSuit extends $tea.Model {
  checkStatus?: string;
  common?: boolean;
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  ext?: string;
  fileUrl?: string;
  id?: number;
  intro?: string;
  listStatus?: string;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  previewUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      common: 'Common',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      id: 'Id',
      intro: 'Intro',
      listStatus: 'ListStatus',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      previewUrl: 'PreviewUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      common: 'boolean',
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      ext: 'string',
      fileUrl: 'string',
      id: 'number',
      intro: 'string',
      listStatus: 'string',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      previewUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataMaterialInfoTops extends $tea.Model {
  checkStatus?: string;
  common?: boolean;
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  ext?: string;
  fileUrl?: string;
  id?: number;
  intro?: string;
  listStatus?: string;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  previewUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      common: 'Common',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      id: 'Id',
      intro: 'Intro',
      listStatus: 'ListStatus',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      previewUrl: 'PreviewUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      common: 'boolean',
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      ext: 'string',
      fileUrl: 'string',
      id: 'number',
      intro: 'string',
      listStatus: 'string',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      previewUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataMaterialInfo extends $tea.Model {
  bottoms?: PopGetAITryOnJobResponseBodyDataMaterialInfoBottoms;
  clothingType?: string;
  model?: PopGetAITryOnJobResponseBodyDataMaterialInfoModel;
  shoeType?: string;
  suit?: PopGetAITryOnJobResponseBodyDataMaterialInfoSuit;
  tops?: PopGetAITryOnJobResponseBodyDataMaterialInfoTops;
  static names(): { [key: string]: string } {
    return {
      bottoms: 'Bottoms',
      clothingType: 'ClothingType',
      model: 'Model',
      shoeType: 'ShoeType',
      suit: 'Suit',
      tops: 'Tops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottoms: PopGetAITryOnJobResponseBodyDataMaterialInfoBottoms,
      clothingType: 'string',
      model: PopGetAITryOnJobResponseBodyDataMaterialInfoModel,
      shoeType: 'string',
      suit: PopGetAITryOnJobResponseBodyDataMaterialInfoSuit,
      tops: PopGetAITryOnJobResponseBodyDataMaterialInfoTops,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataSubTasksFeedback extends $tea.Model {
  dislikeTags?: number[];
  otherReason?: string;
  projectId?: number;
  rating?: number;
  static names(): { [key: string]: string } {
    return {
      dislikeTags: 'DislikeTags',
      otherReason: 'OtherReason',
      projectId: 'ProjectId',
      rating: 'Rating',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dislikeTags: { 'type': 'array', 'itemType': 'number' },
      otherReason: 'string',
      projectId: 'number',
      rating: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoBuildDetail extends $tea.Model {
  completedTime?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  estimatedDuration?: number;
  id?: number;
  modifiedTime?: string;
  runningTime?: string;
  status?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      runningTime: 'RunningTime',
      status: 'Status',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      estimatedDuration: 'number',
      id: 'number',
      modifiedTime: 'string',
      runningTime: 'string',
      status: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoDatasetPolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  errorCode?: string;
  errorMessage?: string;
  glbModelUrl?: string;
  id?: number;
  modelUrl?: string;
  modifiedTime?: string;
  originResultUrl?: string;
  ossKey?: string;
  policy?: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoDatasetPolicy;
  poseUrl?: string;
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      glbModelUrl: 'GlbModelUrl',
      id: 'Id',
      modelUrl: 'ModelUrl',
      modifiedTime: 'ModifiedTime',
      originResultUrl: 'OriginResultUrl',
      ossKey: 'OssKey',
      policy: 'Policy',
      poseUrl: 'PoseUrl',
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      glbModelUrl: 'string',
      id: 'number',
      modelUrl: 'string',
      modifiedTime: 'string',
      originResultUrl: 'string',
      ossKey: 'string',
      policy: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoDatasetPolicy,
      poseUrl: 'string',
      previewUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceClothesSkuProps extends $tea.Model {
  name?: string;
  options?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      options: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceClothesSkus extends $tea.Model {
  color?: string;
  cover?: string;
  size?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
      cover: 'Cover',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      cover: 'string',
      size: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceClothes extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  id?: number;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  part?: string;
  size?: string;
  skuProps?: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceClothesSkuProps[];
  skus?: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceClothesSkus[];
  status?: { [key: string]: string };
  type?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      part: 'Part',
      size: 'Size',
      skuProps: 'SkuProps',
      skus: 'Skus',
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      id: 'number',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      part: 'string',
      size: 'string',
      skuProps: { 'type': 'array', 'itemType': PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceClothesSkuProps },
      skus: { 'type': 'array', 'itemType': PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceClothesSkus },
      status: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourcePolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceSourceFiles extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  fileName?: string;
  filesize?: number;
  id?: number;
  modifiedTime?: string;
  ossKey?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      fileName: 'FileName',
      filesize: 'Filesize',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      fileName: 'string',
      filesize: 'number',
      id: 'number',
      modifiedTime: 'string',
      ossKey: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceToken extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  dir?: string;
  expiration?: string;
  host?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      dir: 'Dir',
      expiration: 'Expiration',
      host: 'Host',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      dir: 'string',
      expiration: 'string',
      host: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSource extends $tea.Model {
  clothes?: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceClothes[];
  createTime?: string;
  deleted?: boolean;
  id?: number;
  modifiedTime?: string;
  ossKey?: string;
  policy?: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourcePolicy;
  sourceFiles?: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceSourceFiles[];
  token?: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceToken;
  static names(): { [key: string]: string } {
    return {
      clothes: 'Clothes',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      policy: 'Policy',
      sourceFiles: 'SourceFiles',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothes: { 'type': 'array', 'itemType': PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceClothes },
      createTime: 'string',
      deleted: 'boolean',
      id: 'number',
      modifiedTime: 'string',
      ossKey: 'string',
      policy: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourcePolicy,
      sourceFiles: { 'type': 'array', 'itemType': PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceSourceFiles },
      token: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSourceToken,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfo extends $tea.Model {
  auditStatus?: string;
  autoBuild?: boolean;
  bizUsage?: string;
  buildDetail?: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoBuildDetail;
  checkStatus?: string;
  createMode?: string;
  createTime?: string;
  customSource?: string;
  dataset?: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoDataset;
  deleted?: boolean;
  dependencies?: string;
  ext?: string;
  id?: string;
  intro?: string;
  materialCoverUrl?: string;
  modifiedTime?: string;
  source?: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSource;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoBuild: 'AutoBuild',
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      checkStatus: 'CheckStatus',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      customSource: 'CustomSource',
      dataset: 'Dataset',
      deleted: 'Deleted',
      dependencies: 'Dependencies',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      materialCoverUrl: 'MaterialCoverUrl',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      autoBuild: 'boolean',
      bizUsage: 'string',
      buildDetail: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoBuildDetail,
      checkStatus: 'string',
      createMode: 'string',
      createTime: 'string',
      customSource: 'string',
      dataset: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoDataset,
      deleted: 'boolean',
      dependencies: 'string',
      ext: 'string',
      id: 'string',
      intro: 'string',
      materialCoverUrl: 'string',
      modifiedTime: 'string',
      source: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfoSource,
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyDataSubTasks extends $tea.Model {
  feedback?: PopGetAITryOnJobResponseBodyDataSubTasksFeedback;
  subProjectInfo?: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfo;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      subProjectInfo: 'SubProjectInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: PopGetAITryOnJobResponseBodyDataSubTasksFeedback,
      subProjectInfo: PopGetAITryOnJobResponseBodyDataSubTasksSubProjectInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopGetAITryOnJobResponseBodyData extends $tea.Model {
  dummyProjectInfo?: PopGetAITryOnJobResponseBodyDataDummyProjectInfo;
  materialInfo?: PopGetAITryOnJobResponseBodyDataMaterialInfo;
  subTasks?: PopGetAITryOnJobResponseBodyDataSubTasks[];
  static names(): { [key: string]: string } {
    return {
      dummyProjectInfo: 'DummyProjectInfo',
      materialInfo: 'MaterialInfo',
      subTasks: 'SubTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dummyProjectInfo: PopGetAITryOnJobResponseBodyDataDummyProjectInfo,
      materialInfo: PopGetAITryOnJobResponseBodyDataMaterialInfo,
      subTasks: { 'type': 'array', 'itemType': PopGetAITryOnJobResponseBodyDataSubTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataDummyProjectInfoBuildDetail extends $tea.Model {
  completedTime?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  estimatedDuration?: number;
  id?: number;
  modifiedTime?: string;
  runningTime?: string;
  status?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      runningTime: 'RunningTime',
      status: 'Status',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      estimatedDuration: 'number',
      id: 'number',
      modifiedTime: 'string',
      runningTime: 'string',
      status: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataDummyProjectInfoDatasetPolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataDummyProjectInfoDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  errorCode?: string;
  errorMessage?: string;
  glbModelUrl?: string;
  id?: number;
  modelUrl?: string;
  modifiedTime?: string;
  originResultUrl?: string;
  ossKey?: string;
  policy?: PopListAITryOnJobsResponseBodyDataDummyProjectInfoDatasetPolicy;
  poseUrl?: string;
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      glbModelUrl: 'GlbModelUrl',
      id: 'Id',
      modelUrl: 'ModelUrl',
      modifiedTime: 'ModifiedTime',
      originResultUrl: 'OriginResultUrl',
      ossKey: 'OssKey',
      policy: 'Policy',
      poseUrl: 'PoseUrl',
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      glbModelUrl: 'string',
      id: 'number',
      modelUrl: 'string',
      modifiedTime: 'string',
      originResultUrl: 'string',
      ossKey: 'string',
      policy: PopListAITryOnJobsResponseBodyDataDummyProjectInfoDatasetPolicy,
      poseUrl: 'string',
      previewUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceClothesSkuProps extends $tea.Model {
  name?: string;
  options?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      options: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceClothesSkus extends $tea.Model {
  color?: string;
  cover?: string;
  size?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
      cover: 'Cover',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      cover: 'string',
      size: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceClothes extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  id?: number;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  part?: string;
  size?: string;
  skuProps?: PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceClothesSkuProps[];
  skus?: PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceClothesSkus[];
  status?: { [key: string]: string };
  type?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      part: 'Part',
      size: 'Size',
      skuProps: 'SkuProps',
      skus: 'Skus',
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      id: 'number',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      part: 'string',
      size: 'string',
      skuProps: { 'type': 'array', 'itemType': PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceClothesSkuProps },
      skus: { 'type': 'array', 'itemType': PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceClothesSkus },
      status: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourcePolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceSourceFiles extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  fileName?: string;
  filesize?: number;
  id?: number;
  modifiedTime?: string;
  ossKey?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      fileName: 'FileName',
      filesize: 'Filesize',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      fileName: 'string',
      filesize: 'number',
      id: 'number',
      modifiedTime: 'string',
      ossKey: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceToken extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  dir?: string;
  expiration?: string;
  host?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      dir: 'Dir',
      expiration: 'Expiration',
      host: 'Host',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      dir: 'string',
      expiration: 'string',
      host: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataDummyProjectInfoSource extends $tea.Model {
  clothes?: PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceClothes[];
  createTime?: string;
  deleted?: boolean;
  id?: number;
  modifiedTime?: string;
  ossKey?: string;
  policy?: PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourcePolicy;
  sourceFiles?: PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceSourceFiles[];
  token?: PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceToken;
  static names(): { [key: string]: string } {
    return {
      clothes: 'Clothes',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      policy: 'Policy',
      sourceFiles: 'SourceFiles',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothes: { 'type': 'array', 'itemType': PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceClothes },
      createTime: 'string',
      deleted: 'boolean',
      id: 'number',
      modifiedTime: 'string',
      ossKey: 'string',
      policy: PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourcePolicy,
      sourceFiles: { 'type': 'array', 'itemType': PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceSourceFiles },
      token: PopListAITryOnJobsResponseBodyDataDummyProjectInfoSourceToken,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataDummyProjectInfo extends $tea.Model {
  auditStatus?: string;
  autoBuild?: boolean;
  bizUsage?: string;
  buildDetail?: PopListAITryOnJobsResponseBodyDataDummyProjectInfoBuildDetail;
  checkStatus?: string;
  createMode?: string;
  createTime?: string;
  customSource?: string;
  dataset?: PopListAITryOnJobsResponseBodyDataDummyProjectInfoDataset;
  deleted?: boolean;
  dependencies?: string;
  ext?: string;
  id?: string;
  intro?: string;
  materialCoverUrl?: string;
  modifiedTime?: string;
  source?: PopListAITryOnJobsResponseBodyDataDummyProjectInfoSource;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoBuild: 'AutoBuild',
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      checkStatus: 'CheckStatus',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      customSource: 'CustomSource',
      dataset: 'Dataset',
      deleted: 'Deleted',
      dependencies: 'Dependencies',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      materialCoverUrl: 'MaterialCoverUrl',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      autoBuild: 'boolean',
      bizUsage: 'string',
      buildDetail: PopListAITryOnJobsResponseBodyDataDummyProjectInfoBuildDetail,
      checkStatus: 'string',
      createMode: 'string',
      createTime: 'string',
      customSource: 'string',
      dataset: PopListAITryOnJobsResponseBodyDataDummyProjectInfoDataset,
      deleted: 'boolean',
      dependencies: 'string',
      ext: 'string',
      id: 'string',
      intro: 'string',
      materialCoverUrl: 'string',
      modifiedTime: 'string',
      source: PopListAITryOnJobsResponseBodyDataDummyProjectInfoSource,
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataMaterialInfoBottoms extends $tea.Model {
  checkStatus?: string;
  common?: boolean;
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  ext?: string;
  fileUrl?: string;
  id?: number;
  intro?: string;
  listStatus?: string;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  previewUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      common: 'Common',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      id: 'Id',
      intro: 'Intro',
      listStatus: 'ListStatus',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      previewUrl: 'PreviewUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      common: 'boolean',
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      ext: 'string',
      fileUrl: 'string',
      id: 'number',
      intro: 'string',
      listStatus: 'string',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      previewUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataMaterialInfoModel extends $tea.Model {
  checkStatus?: string;
  common?: boolean;
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  ext?: string;
  fileUrl?: string;
  id?: number;
  intro?: string;
  listStatus?: string;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  previewUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      common: 'Common',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      id: 'Id',
      intro: 'Intro',
      listStatus: 'ListStatus',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      previewUrl: 'PreviewUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      common: 'boolean',
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      ext: 'string',
      fileUrl: 'string',
      id: 'number',
      intro: 'string',
      listStatus: 'string',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      previewUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataMaterialInfoSuit extends $tea.Model {
  checkStatus?: string;
  common?: boolean;
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  ext?: string;
  fileUrl?: string;
  id?: number;
  intro?: string;
  listStatus?: string;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  previewUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      common: 'Common',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      id: 'Id',
      intro: 'Intro',
      listStatus: 'ListStatus',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      previewUrl: 'PreviewUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      common: 'boolean',
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      ext: 'string',
      fileUrl: 'string',
      id: 'number',
      intro: 'string',
      listStatus: 'string',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      previewUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataMaterialInfoTops extends $tea.Model {
  checkStatus?: string;
  common?: boolean;
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  ext?: string;
  fileUrl?: string;
  id?: number;
  intro?: string;
  listStatus?: string;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  previewUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      common: 'Common',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      id: 'Id',
      intro: 'Intro',
      listStatus: 'ListStatus',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      previewUrl: 'PreviewUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      common: 'boolean',
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      ext: 'string',
      fileUrl: 'string',
      id: 'number',
      intro: 'string',
      listStatus: 'string',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      previewUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataMaterialInfo extends $tea.Model {
  bottoms?: PopListAITryOnJobsResponseBodyDataMaterialInfoBottoms;
  clothingType?: string;
  model?: PopListAITryOnJobsResponseBodyDataMaterialInfoModel;
  shoeType?: string;
  suit?: PopListAITryOnJobsResponseBodyDataMaterialInfoSuit;
  tops?: PopListAITryOnJobsResponseBodyDataMaterialInfoTops;
  static names(): { [key: string]: string } {
    return {
      bottoms: 'Bottoms',
      clothingType: 'ClothingType',
      model: 'Model',
      shoeType: 'ShoeType',
      suit: 'Suit',
      tops: 'Tops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottoms: PopListAITryOnJobsResponseBodyDataMaterialInfoBottoms,
      clothingType: 'string',
      model: PopListAITryOnJobsResponseBodyDataMaterialInfoModel,
      shoeType: 'string',
      suit: PopListAITryOnJobsResponseBodyDataMaterialInfoSuit,
      tops: PopListAITryOnJobsResponseBodyDataMaterialInfoTops,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataSubTasksFeedback extends $tea.Model {
  dislikeTags?: number[];
  otherReason?: string;
  projectId?: number;
  rating?: number;
  static names(): { [key: string]: string } {
    return {
      dislikeTags: 'DislikeTags',
      otherReason: 'OtherReason',
      projectId: 'ProjectId',
      rating: 'Rating',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dislikeTags: { 'type': 'array', 'itemType': 'number' },
      otherReason: 'string',
      projectId: 'number',
      rating: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoBuildDetail extends $tea.Model {
  completedTime?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  estimatedDuration?: number;
  id?: number;
  modifiedTime?: string;
  runningTime?: string;
  status?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      runningTime: 'RunningTime',
      status: 'Status',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      estimatedDuration: 'number',
      id: 'number',
      modifiedTime: 'string',
      runningTime: 'string',
      status: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoDatasetPolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  errorCode?: string;
  errorMessage?: string;
  glbModelUrl?: string;
  id?: number;
  modelUrl?: string;
  modifiedTime?: string;
  originResultUrl?: string;
  ossKey?: string;
  policy?: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoDatasetPolicy;
  poseUrl?: string;
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      glbModelUrl: 'GlbModelUrl',
      id: 'Id',
      modelUrl: 'ModelUrl',
      modifiedTime: 'ModifiedTime',
      originResultUrl: 'OriginResultUrl',
      ossKey: 'OssKey',
      policy: 'Policy',
      poseUrl: 'PoseUrl',
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      glbModelUrl: 'string',
      id: 'number',
      modelUrl: 'string',
      modifiedTime: 'string',
      originResultUrl: 'string',
      ossKey: 'string',
      policy: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoDatasetPolicy,
      poseUrl: 'string',
      previewUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceClothesSkuProps extends $tea.Model {
  name?: string;
  options?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      options: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceClothesSkus extends $tea.Model {
  color?: string;
  cover?: string;
  size?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
      cover: 'Cover',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      cover: 'string',
      size: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceClothes extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  id?: number;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  part?: string;
  size?: string;
  skuProps?: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceClothesSkuProps[];
  skus?: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceClothesSkus[];
  status?: { [key: string]: string };
  type?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      part: 'Part',
      size: 'Size',
      skuProps: 'SkuProps',
      skus: 'Skus',
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      id: 'number',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      part: 'string',
      size: 'string',
      skuProps: { 'type': 'array', 'itemType': PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceClothesSkuProps },
      skus: { 'type': 'array', 'itemType': PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceClothesSkus },
      status: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourcePolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceSourceFiles extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  fileName?: string;
  filesize?: number;
  id?: number;
  modifiedTime?: string;
  ossKey?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      fileName: 'FileName',
      filesize: 'Filesize',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      fileName: 'string',
      filesize: 'number',
      id: 'number',
      modifiedTime: 'string',
      ossKey: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceToken extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  dir?: string;
  expiration?: string;
  host?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      dir: 'Dir',
      expiration: 'Expiration',
      host: 'Host',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      dir: 'string',
      expiration: 'string',
      host: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSource extends $tea.Model {
  clothes?: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceClothes[];
  createTime?: string;
  deleted?: boolean;
  id?: number;
  modifiedTime?: string;
  ossKey?: string;
  policy?: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourcePolicy;
  sourceFiles?: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceSourceFiles[];
  token?: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceToken;
  static names(): { [key: string]: string } {
    return {
      clothes: 'Clothes',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      policy: 'Policy',
      sourceFiles: 'SourceFiles',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothes: { 'type': 'array', 'itemType': PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceClothes },
      createTime: 'string',
      deleted: 'boolean',
      id: 'number',
      modifiedTime: 'string',
      ossKey: 'string',
      policy: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourcePolicy,
      sourceFiles: { 'type': 'array', 'itemType': PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceSourceFiles },
      token: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSourceToken,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfo extends $tea.Model {
  auditStatus?: string;
  autoBuild?: boolean;
  bizUsage?: string;
  buildDetail?: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoBuildDetail;
  checkStatus?: string;
  createMode?: string;
  createTime?: string;
  customSource?: string;
  dataset?: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoDataset;
  deleted?: boolean;
  dependencies?: string;
  ext?: string;
  id?: string;
  intro?: string;
  materialCoverUrl?: string;
  modifiedTime?: string;
  source?: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSource;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoBuild: 'AutoBuild',
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      checkStatus: 'CheckStatus',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      customSource: 'CustomSource',
      dataset: 'Dataset',
      deleted: 'Deleted',
      dependencies: 'Dependencies',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      materialCoverUrl: 'MaterialCoverUrl',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      autoBuild: 'boolean',
      bizUsage: 'string',
      buildDetail: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoBuildDetail,
      checkStatus: 'string',
      createMode: 'string',
      createTime: 'string',
      customSource: 'string',
      dataset: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoDataset,
      deleted: 'boolean',
      dependencies: 'string',
      ext: 'string',
      id: 'string',
      intro: 'string',
      materialCoverUrl: 'string',
      modifiedTime: 'string',
      source: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfoSource,
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyDataSubTasks extends $tea.Model {
  feedback?: PopListAITryOnJobsResponseBodyDataSubTasksFeedback;
  subProjectInfo?: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfo;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      subProjectInfo: 'SubProjectInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: PopListAITryOnJobsResponseBodyDataSubTasksFeedback,
      subProjectInfo: PopListAITryOnJobsResponseBodyDataSubTasksSubProjectInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListAITryOnJobsResponseBodyData extends $tea.Model {
  dummyProjectInfo?: PopListAITryOnJobsResponseBodyDataDummyProjectInfo;
  materialInfo?: PopListAITryOnJobsResponseBodyDataMaterialInfo;
  subTasks?: PopListAITryOnJobsResponseBodyDataSubTasks[];
  static names(): { [key: string]: string } {
    return {
      dummyProjectInfo: 'DummyProjectInfo',
      materialInfo: 'MaterialInfo',
      subTasks: 'SubTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dummyProjectInfo: PopListAITryOnJobsResponseBodyDataDummyProjectInfo,
      materialInfo: PopListAITryOnJobsResponseBodyDataMaterialInfo,
      subTasks: { 'type': 'array', 'itemType': PopListAITryOnJobsResponseBodyDataSubTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListCommonMaterialsAllResponseBodyData extends $tea.Model {
  checkStatus?: string;
  common?: boolean;
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  ext?: string;
  fileUrl?: string;
  id?: string;
  intro?: string;
  listStatus?: string;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  previewUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      common: 'Common',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      id: 'Id',
      intro: 'Intro',
      listStatus: 'ListStatus',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      previewUrl: 'PreviewUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      common: 'boolean',
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      ext: 'string',
      fileUrl: 'string',
      id: 'string',
      intro: 'string',
      listStatus: 'string',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      previewUrl: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListFeatureToAvatarMaterialsResponseBodyData extends $tea.Model {
  checkStatus?: string;
  common?: boolean;
  coverUrl?: string;
  deleted?: boolean;
  ext?: string;
  fileUrl?: string;
  id?: string;
  intro?: string;
  listStatus?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      common: 'Common',
      coverUrl: 'CoverUrl',
      deleted: 'Deleted',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      id: 'Id',
      intro: 'Intro',
      listStatus: 'ListStatus',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      common: 'boolean',
      coverUrl: 'string',
      deleted: 'boolean',
      ext: 'string',
      fileUrl: 'string',
      id: 'string',
      intro: 'string',
      listStatus: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListFeatureToAvatarProjectResponseBodyDataBuildDetail extends $tea.Model {
  completedTime?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  estimatedDuration?: number;
  modifiedTime?: string;
  runningTime?: string;
  status?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      modifiedTime: 'ModifiedTime',
      runningTime: 'RunningTime',
      status: 'Status',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      estimatedDuration: 'number',
      modifiedTime: 'string',
      runningTime: 'string',
      status: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListFeatureToAvatarProjectResponseBodyDataDatasetPolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListFeatureToAvatarProjectResponseBodyDataDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  errorCode?: string;
  errorMessage?: string;
  glbModelUrl?: string;
  modelUrl?: string;
  modifiedTime?: string;
  originResultUrl?: string;
  ossKey?: string;
  policy?: PopListFeatureToAvatarProjectResponseBodyDataDatasetPolicy;
  poseUrl?: string;
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      glbModelUrl: 'GlbModelUrl',
      modelUrl: 'ModelUrl',
      modifiedTime: 'ModifiedTime',
      originResultUrl: 'OriginResultUrl',
      ossKey: 'OssKey',
      policy: 'Policy',
      poseUrl: 'PoseUrl',
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      glbModelUrl: 'string',
      modelUrl: 'string',
      modifiedTime: 'string',
      originResultUrl: 'string',
      ossKey: 'string',
      policy: PopListFeatureToAvatarProjectResponseBodyDataDatasetPolicy,
      poseUrl: 'string',
      previewUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListFeatureToAvatarProjectResponseBodyData extends $tea.Model {
  bizUsage?: string;
  buildDetail?: PopListFeatureToAvatarProjectResponseBodyDataBuildDetail;
  checkStatus?: string;
  createMode?: string;
  createTime?: string;
  dataset?: PopListFeatureToAvatarProjectResponseBodyDataDataset;
  deleted?: boolean;
  ext?: string;
  id?: string;
  intro?: string;
  materialCoverUrl?: string;
  modifiedTime?: string;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      checkStatus: 'CheckStatus',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      dataset: 'Dataset',
      deleted: 'Deleted',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      materialCoverUrl: 'MaterialCoverUrl',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      buildDetail: PopListFeatureToAvatarProjectResponseBodyDataBuildDetail,
      checkStatus: 'string',
      createMode: 'string',
      createTime: 'string',
      dataset: PopListFeatureToAvatarProjectResponseBodyDataDataset,
      deleted: 'boolean',
      ext: 'string',
      id: 'string',
      intro: 'string',
      materialCoverUrl: 'string',
      modifiedTime: 'string',
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListLivePortraitModelScopeMaterialsResponseBodyData extends $tea.Model {
  coverUrl?: string;
  ext?: string;
  fileUrl?: string;
  id?: string;
  intro?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      id: 'Id',
      intro: 'Intro',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      ext: 'string',
      fileUrl: 'string',
      id: 'string',
      intro: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectCaseResponseBodyDataBuildDetail extends $tea.Model {
  completedTime?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  estimatedDuration?: number;
  modifiedTime?: string;
  runningTime?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      modifiedTime: 'ModifiedTime',
      runningTime: 'RunningTime',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      estimatedDuration: 'number',
      modifiedTime: 'string',
      runningTime: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectCaseResponseBodyDataDatasetPolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectCaseResponseBodyDataDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  glbModelUrl?: string;
  modelUrl?: string;
  modifiedTime?: string;
  originResultUrl?: string;
  ossKey?: string;
  policy?: PopListObjectCaseResponseBodyDataDatasetPolicy;
  poseUrl?: string;
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      glbModelUrl: 'GlbModelUrl',
      modelUrl: 'ModelUrl',
      modifiedTime: 'ModifiedTime',
      originResultUrl: 'OriginResultUrl',
      ossKey: 'OssKey',
      policy: 'Policy',
      poseUrl: 'PoseUrl',
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      glbModelUrl: 'string',
      modelUrl: 'string',
      modifiedTime: 'string',
      originResultUrl: 'string',
      ossKey: 'string',
      policy: PopListObjectCaseResponseBodyDataDatasetPolicy,
      poseUrl: 'string',
      previewUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectCaseResponseBodyDataSourceClothes extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectCaseResponseBodyDataSourcePolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectCaseResponseBodyDataSourceSourceFiles extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  fileName?: string;
  filesize?: number;
  modifiedTime?: string;
  ossKey?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      fileName: 'FileName',
      filesize: 'Filesize',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      fileName: 'string',
      filesize: 'number',
      modifiedTime: 'string',
      ossKey: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectCaseResponseBodyDataSource extends $tea.Model {
  clothes?: PopListObjectCaseResponseBodyDataSourceClothes[];
  createTime?: string;
  deleted?: boolean;
  modifiedTime?: string;
  ossKey?: string;
  policy?: PopListObjectCaseResponseBodyDataSourcePolicy;
  sourceFiles?: PopListObjectCaseResponseBodyDataSourceSourceFiles[];
  static names(): { [key: string]: string } {
    return {
      clothes: 'Clothes',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      policy: 'Policy',
      sourceFiles: 'SourceFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothes: { 'type': 'array', 'itemType': PopListObjectCaseResponseBodyDataSourceClothes },
      createTime: 'string',
      deleted: 'boolean',
      modifiedTime: 'string',
      ossKey: 'string',
      policy: PopListObjectCaseResponseBodyDataSourcePolicy,
      sourceFiles: { 'type': 'array', 'itemType': PopListObjectCaseResponseBodyDataSourceSourceFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectCaseResponseBodyData extends $tea.Model {
  auditStatus?: string;
  autoBuild?: boolean;
  bizUsage?: string;
  buildDetail?: PopListObjectCaseResponseBodyDataBuildDetail;
  checkStatus?: string;
  createMode?: string;
  createTime?: string;
  customSource?: string;
  dataset?: PopListObjectCaseResponseBodyDataDataset;
  deleted?: boolean;
  dependencies?: string;
  ext?: string;
  id?: string;
  intro?: string;
  modifiedTime?: string;
  source?: PopListObjectCaseResponseBodyDataSource;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoBuild: 'AutoBuild',
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      checkStatus: 'CheckStatus',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      customSource: 'CustomSource',
      dataset: 'Dataset',
      deleted: 'Deleted',
      dependencies: 'Dependencies',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      autoBuild: 'boolean',
      bizUsage: 'string',
      buildDetail: PopListObjectCaseResponseBodyDataBuildDetail,
      checkStatus: 'string',
      createMode: 'string',
      createTime: 'string',
      customSource: 'string',
      dataset: PopListObjectCaseResponseBodyDataDataset,
      deleted: 'boolean',
      dependencies: 'string',
      ext: 'string',
      id: 'string',
      intro: 'string',
      modifiedTime: 'string',
      source: PopListObjectCaseResponseBodyDataSource,
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectGenerationProjectResponseBodyDataBuildDetail extends $tea.Model {
  completedTime?: string;
  errorMessage?: string;
  estimatedDuration?: number;
  runningTime?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      runningTime: 'RunningTime',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      errorMessage: 'string',
      estimatedDuration: 'number',
      runningTime: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectGenerationProjectResponseBodyDataDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectGenerationProjectResponseBodyData extends $tea.Model {
  bizUsage?: string;
  buildDetail?: PopListObjectGenerationProjectResponseBodyDataBuildDetail;
  dataset?: PopListObjectGenerationProjectResponseBodyDataDataset;
  ext?: string;
  id?: string;
  intro?: string;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      dataset: 'Dataset',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      buildDetail: PopListObjectGenerationProjectResponseBodyDataBuildDetail,
      dataset: PopListObjectGenerationProjectResponseBodyDataDataset,
      ext: 'string',
      id: 'string',
      intro: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectProjectResponseBodyDataBuildDetail extends $tea.Model {
  completedTime?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  estimatedDuration?: number;
  modifiedTime?: string;
  runningTime?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      modifiedTime: 'ModifiedTime',
      runningTime: 'RunningTime',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      estimatedDuration: 'number',
      modifiedTime: 'string',
      runningTime: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectProjectResponseBodyDataDatasetPolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectProjectResponseBodyDataDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  glbModelUrl?: string;
  modelUrl?: string;
  modifiedTime?: string;
  originResultUrl?: string;
  ossKey?: string;
  policy?: PopListObjectProjectResponseBodyDataDatasetPolicy;
  poseUrl?: string;
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      glbModelUrl: 'GlbModelUrl',
      modelUrl: 'ModelUrl',
      modifiedTime: 'ModifiedTime',
      originResultUrl: 'OriginResultUrl',
      ossKey: 'OssKey',
      policy: 'Policy',
      poseUrl: 'PoseUrl',
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      glbModelUrl: 'string',
      modelUrl: 'string',
      modifiedTime: 'string',
      originResultUrl: 'string',
      ossKey: 'string',
      policy: PopListObjectProjectResponseBodyDataDatasetPolicy,
      poseUrl: 'string',
      previewUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectProjectResponseBodyDataSourceClothes extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectProjectResponseBodyDataSourcePolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectProjectResponseBodyDataSourceSourceFiles extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  fileName?: string;
  filesize?: number;
  modifiedTime?: string;
  ossKey?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      fileName: 'FileName',
      filesize: 'Filesize',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      fileName: 'string',
      filesize: 'number',
      modifiedTime: 'string',
      ossKey: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectProjectResponseBodyDataSource extends $tea.Model {
  clothes?: PopListObjectProjectResponseBodyDataSourceClothes[];
  createTime?: string;
  deleted?: boolean;
  modifiedTime?: string;
  ossKey?: string;
  policy?: PopListObjectProjectResponseBodyDataSourcePolicy;
  sourceFiles?: PopListObjectProjectResponseBodyDataSourceSourceFiles[];
  static names(): { [key: string]: string } {
    return {
      clothes: 'Clothes',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      policy: 'Policy',
      sourceFiles: 'SourceFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothes: { 'type': 'array', 'itemType': PopListObjectProjectResponseBodyDataSourceClothes },
      createTime: 'string',
      deleted: 'boolean',
      modifiedTime: 'string',
      ossKey: 'string',
      policy: PopListObjectProjectResponseBodyDataSourcePolicy,
      sourceFiles: { 'type': 'array', 'itemType': PopListObjectProjectResponseBodyDataSourceSourceFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListObjectProjectResponseBodyData extends $tea.Model {
  auditStatus?: string;
  autoBuild?: boolean;
  bizUsage?: string;
  buildDetail?: PopListObjectProjectResponseBodyDataBuildDetail;
  checkStatus?: string;
  createMode?: string;
  createTime?: string;
  customSource?: string;
  dataset?: PopListObjectProjectResponseBodyDataDataset;
  deleted?: boolean;
  dependencies?: string;
  ext?: string;
  id?: string;
  intro?: string;
  modifiedTime?: string;
  source?: PopListObjectProjectResponseBodyDataSource;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      autoBuild: 'AutoBuild',
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      checkStatus: 'CheckStatus',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      customSource: 'CustomSource',
      dataset: 'Dataset',
      deleted: 'Deleted',
      dependencies: 'Dependencies',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      autoBuild: 'boolean',
      bizUsage: 'string',
      buildDetail: PopListObjectProjectResponseBodyDataBuildDetail,
      checkStatus: 'string',
      createMode: 'string',
      createTime: 'string',
      customSource: 'string',
      dataset: PopListObjectProjectResponseBodyDataDataset,
      deleted: 'boolean',
      dependencies: 'string',
      ext: 'string',
      id: 'string',
      intro: 'string',
      modifiedTime: 'string',
      source: PopListObjectProjectResponseBodyDataSource,
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListPakRenderExpressionResponseBodyData extends $tea.Model {
  coverUrl?: string;
  ext?: string;
  fileUrl?: string;
  id?: string;
  intro?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      ext: 'Ext',
      fileUrl: 'FileUrl',
      id: 'Id',
      intro: 'Intro',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      ext: 'string',
      fileUrl: 'string',
      id: 'string',
      intro: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListTextToAvatarProjectResponseBodyDataBuildDetail extends $tea.Model {
  completedTime?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  estimatedDuration?: number;
  modifiedTime?: string;
  runningTime?: string;
  status?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      modifiedTime: 'ModifiedTime',
      runningTime: 'RunningTime',
      status: 'Status',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      estimatedDuration: 'number',
      modifiedTime: 'string',
      runningTime: 'string',
      status: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListTextToAvatarProjectResponseBodyDataDatasetPolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListTextToAvatarProjectResponseBodyDataDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  createTime?: string;
  deleted?: boolean;
  errorCode?: string;
  errorMessage?: string;
  modifiedTime?: string;
  ossKey?: string;
  policy?: PopListTextToAvatarProjectResponseBodyDataDatasetPolicy;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'string',
      deleted: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      modifiedTime: 'string',
      ossKey: 'string',
      policy: PopListTextToAvatarProjectResponseBodyDataDatasetPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopListTextToAvatarProjectResponseBodyData extends $tea.Model {
  autoBuild?: boolean;
  bizUsage?: string;
  buildDetail?: PopListTextToAvatarProjectResponseBodyDataBuildDetail;
  checkStatus?: string;
  createMode?: string;
  createTime?: string;
  dataset?: PopListTextToAvatarProjectResponseBodyDataDataset;
  deleted?: boolean;
  dependencies?: string;
  ext?: string;
  id?: string;
  intro?: string;
  materialCoverUrl?: string;
  modifiedTime?: string;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      checkStatus: 'CheckStatus',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      dataset: 'Dataset',
      deleted: 'Deleted',
      dependencies: 'Dependencies',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      materialCoverUrl: 'MaterialCoverUrl',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'boolean',
      bizUsage: 'string',
      buildDetail: PopListTextToAvatarProjectResponseBodyDataBuildDetail,
      checkStatus: 'string',
      createMode: 'string',
      createTime: 'string',
      dataset: PopListTextToAvatarProjectResponseBodyDataDataset,
      deleted: 'boolean',
      dependencies: 'string',
      ext: 'string',
      id: 'string',
      intro: 'string',
      materialCoverUrl: 'string',
      modifiedTime: 'string',
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectProjectDetailResponseBodyDataBuildDetail extends $tea.Model {
  completedTime?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  estimatedDuration?: number;
  modifiedTime?: string;
  runningTime?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      modifiedTime: 'ModifiedTime',
      runningTime: 'RunningTime',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      estimatedDuration: 'number',
      modifiedTime: 'string',
      runningTime: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectProjectDetailResponseBodyDataDatasetPolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectProjectDetailResponseBodyDataDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  glbModelUrl?: string;
  modelUrl?: string;
  modifiedTime?: string;
  originResultUrl?: string;
  ossKey?: string;
  policy?: PopObjectProjectDetailResponseBodyDataDatasetPolicy;
  poseUrl?: string;
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      glbModelUrl: 'GlbModelUrl',
      modelUrl: 'ModelUrl',
      modifiedTime: 'ModifiedTime',
      originResultUrl: 'OriginResultUrl',
      ossKey: 'OssKey',
      policy: 'Policy',
      poseUrl: 'PoseUrl',
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      glbModelUrl: 'string',
      modelUrl: 'string',
      modifiedTime: 'string',
      originResultUrl: 'string',
      ossKey: 'string',
      policy: PopObjectProjectDetailResponseBodyDataDatasetPolicy,
      poseUrl: 'string',
      previewUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectProjectDetailResponseBodyDataSourceClothes extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  modifiedTime?: string;
  name?: string;
  ossKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      ossKey: 'OssKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      modifiedTime: 'string',
      name: 'string',
      ossKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectProjectDetailResponseBodyDataSourcePolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectProjectDetailResponseBodyDataSourceSourceFiles extends $tea.Model {
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  fileName?: string;
  filesize?: number;
  modifiedTime?: string;
  ossKey?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      fileName: 'FileName',
      filesize: 'Filesize',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      fileName: 'string',
      filesize: 'number',
      modifiedTime: 'string',
      ossKey: 'string',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectProjectDetailResponseBodyDataSource extends $tea.Model {
  clothes?: PopObjectProjectDetailResponseBodyDataSourceClothes[];
  createTime?: string;
  deleted?: boolean;
  modifiedTime?: string;
  ossKey?: string;
  policy?: PopObjectProjectDetailResponseBodyDataSourcePolicy;
  sourceFiles?: PopObjectProjectDetailResponseBodyDataSourceSourceFiles[];
  static names(): { [key: string]: string } {
    return {
      clothes: 'Clothes',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      policy: 'Policy',
      sourceFiles: 'SourceFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothes: { 'type': 'array', 'itemType': PopObjectProjectDetailResponseBodyDataSourceClothes },
      createTime: 'string',
      deleted: 'boolean',
      modifiedTime: 'string',
      ossKey: 'string',
      policy: PopObjectProjectDetailResponseBodyDataSourcePolicy,
      sourceFiles: { 'type': 'array', 'itemType': PopObjectProjectDetailResponseBodyDataSourceSourceFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectProjectDetailResponseBodyData extends $tea.Model {
  autoBuild?: boolean;
  bizUsage?: string;
  buildDetail?: PopObjectProjectDetailResponseBodyDataBuildDetail;
  checkStatus?: string;
  createMode?: string;
  createTime?: string;
  dataset?: PopObjectProjectDetailResponseBodyDataDataset;
  deleted?: boolean;
  dependencies?: string;
  ext?: string;
  id?: string;
  intro?: string;
  modifiedTime?: string;
  source?: PopObjectProjectDetailResponseBodyDataSource;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      checkStatus: 'CheckStatus',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      dataset: 'Dataset',
      deleted: 'Deleted',
      dependencies: 'Dependencies',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'boolean',
      bizUsage: 'string',
      buildDetail: PopObjectProjectDetailResponseBodyDataBuildDetail,
      checkStatus: 'string',
      createMode: 'string',
      createTime: 'string',
      dataset: PopObjectProjectDetailResponseBodyDataDataset,
      deleted: 'boolean',
      dependencies: 'string',
      ext: 'string',
      id: 'string',
      intro: 'string',
      modifiedTime: 'string',
      source: PopObjectProjectDetailResponseBodyDataSource,
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectRetrievalResponseBodyData extends $tea.Model {
  coverUrl?: string;
  glbUrl?: string;
  id?: string;
  modelUrl?: string;
  previewUrl?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      glbUrl: 'GlbUrl',
      id: 'Id',
      modelUrl: 'ModelUrl',
      previewUrl: 'PreviewUrl',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      glbUrl: 'string',
      id: 'string',
      modelUrl: 'string',
      previewUrl: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopObjectRetrievalUploadDataResponseBodyData extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryAvatarProjectDetailResponseBodyDataBuildDetail extends $tea.Model {
  completedTime?: string;
  createTime?: string;
  deleted?: boolean;
  errorMessage?: string;
  estimatedDuration?: number;
  modifiedTime?: string;
  runningTime?: string;
  status?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      modifiedTime: 'ModifiedTime',
      runningTime: 'RunningTime',
      status: 'Status',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorMessage: 'string',
      estimatedDuration: 'number',
      modifiedTime: 'string',
      runningTime: 'string',
      status: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryAvatarProjectDetailResponseBodyDataDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  errorCode?: string;
  errorMessage?: string;
  glbModelUrl?: string;
  modelUrl?: string;
  modifiedTime?: string;
  originResultUrl?: string;
  ossKey?: string;
  poseUrl?: string;
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      glbModelUrl: 'GlbModelUrl',
      modelUrl: 'ModelUrl',
      modifiedTime: 'ModifiedTime',
      originResultUrl: 'OriginResultUrl',
      ossKey: 'OssKey',
      poseUrl: 'PoseUrl',
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      glbModelUrl: 'string',
      modelUrl: 'string',
      modifiedTime: 'string',
      originResultUrl: 'string',
      ossKey: 'string',
      poseUrl: 'string',
      previewUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryAvatarProjectDetailResponseBodyData extends $tea.Model {
  autoBuild?: boolean;
  bizUsage?: string;
  buildDetail?: PopQueryAvatarProjectDetailResponseBodyDataBuildDetail;
  checkStatus?: string;
  createMode?: string;
  createTime?: string;
  dataset?: PopQueryAvatarProjectDetailResponseBodyDataDataset;
  deleted?: boolean;
  dependencies?: string;
  ext?: string;
  id?: string;
  intro?: string;
  materialCoverUrl?: string;
  modifiedTime?: string;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      checkStatus: 'CheckStatus',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      dataset: 'Dataset',
      deleted: 'Deleted',
      dependencies: 'Dependencies',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      materialCoverUrl: 'MaterialCoverUrl',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'boolean',
      bizUsage: 'string',
      buildDetail: PopQueryAvatarProjectDetailResponseBodyDataBuildDetail,
      checkStatus: 'string',
      createMode: 'string',
      createTime: 'string',
      dataset: PopQueryAvatarProjectDetailResponseBodyDataDataset,
      deleted: 'boolean',
      dependencies: 'string',
      ext: 'string',
      id: 'string',
      intro: 'string',
      materialCoverUrl: 'string',
      modifiedTime: 'string',
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryLatestAvatarProjectDetailByUserResponseBodyDataBuildDetail extends $tea.Model {
  runningTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      runningTime: 'RunningTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runningTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryLatestAvatarProjectDetailByUserResponseBodyDataDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryLatestAvatarProjectDetailByUserResponseBodyData extends $tea.Model {
  bizUsage?: string;
  buildDetail?: PopQueryLatestAvatarProjectDetailByUserResponseBodyDataBuildDetail;
  createTime?: string;
  dataset?: PopQueryLatestAvatarProjectDetailByUserResponseBodyDataDataset;
  ext?: string;
  id?: string;
  intro?: string;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      createTime: 'CreateTime',
      dataset: 'Dataset',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      buildDetail: PopQueryLatestAvatarProjectDetailByUserResponseBodyDataBuildDetail,
      createTime: 'string',
      dataset: PopQueryLatestAvatarProjectDetailByUserResponseBodyDataDataset,
      ext: 'string',
      id: 'string',
      intro: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryLivePortraitModelScopeProjectDetailResponseBodyDataDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryLivePortraitModelScopeProjectDetailResponseBodyData extends $tea.Model {
  bizUsage?: string;
  dataset?: PopQueryLivePortraitModelScopeProjectDetailResponseBodyDataDataset;
  ext?: string;
  id?: string;
  intro?: string;
  materialCoverUrl?: string;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      dataset: 'Dataset',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      materialCoverUrl: 'MaterialCoverUrl',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      dataset: PopQueryLivePortraitModelScopeProjectDetailResponseBodyDataDataset,
      ext: 'string',
      id: 'string',
      intro: 'string',
      materialCoverUrl: 'string',
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryObjectGenerationProjectDetailResponseBodyDataBuildDetail extends $tea.Model {
  completedTime?: string;
  errorMessage?: string;
  estimatedDuration?: number;
  runningTime?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      runningTime: 'RunningTime',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      errorMessage: 'string',
      estimatedDuration: 'number',
      runningTime: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryObjectGenerationProjectDetailResponseBodyDataDataset extends $tea.Model {
  buildResultUrl?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopQueryObjectGenerationProjectDetailResponseBodyData extends $tea.Model {
  bizUsage?: string;
  buildDetail?: PopQueryObjectGenerationProjectDetailResponseBodyDataBuildDetail;
  dataset?: PopQueryObjectGenerationProjectDetailResponseBodyDataDataset;
  ext?: string;
  id?: string;
  intro?: string;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      dataset: 'Dataset',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      buildDetail: PopQueryObjectGenerationProjectDetailResponseBodyDataBuildDetail,
      dataset: PopQueryObjectGenerationProjectDetailResponseBodyDataDataset,
      ext: 'string',
      id: 'string',
      intro: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopSubmitAITryOnJobResponseBodyData extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopUploadMaterialResponseBodyDataPolicy extends $tea.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PopUploadMaterialResponseBodyData extends $tea.Model {
  ossKey?: string;
  policy?: PopUploadMaterialResponseBodyDataPolicy;
  static names(): { [key: string]: string } {
    return {
      ossKey: 'OssKey',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossKey: 'string',
      policy: PopUploadMaterialResponseBodyDataPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDigitalHumanProjectResponseBodyData extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  estimatedDuration?: number;
  fileUrl?: string;
  id?: string;
  intro?: string;
  runningTime?: string;
  status?: string;
  subtitleUrl?: string;
  title?: string;
  videoLength?: number;
  waitingTime?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      fileUrl: 'FileUrl',
      id: 'Id',
      intro: 'Intro',
      runningTime: 'RunningTime',
      status: 'Status',
      subtitleUrl: 'SubtitleUrl',
      title: 'Title',
      videoLength: 'VideoLength',
      waitingTime: 'WaitingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      estimatedDuration: 'number',
      fileUrl: 'string',
      id: 'string',
      intro: 'string',
      runningTime: 'string',
      status: 'string',
      subtitleUrl: 'string',
      title: 'string',
      videoLength: 'number',
      waitingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLongTtsResultResponseBodyData extends $tea.Model {
  audioUrl?: string;
  duration?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      audioUrl: 'AudioUrl',
      duration: 'Duration',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioUrl: 'string',
      duration: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMotionShopVideoDetectResultResponseBodyDataDetectResult extends $tea.Model {
  box?: number[];
  code?: number;
  coverUrl?: string;
  message?: string;
  selectedFrameIndex?: number;
  static names(): { [key: string]: string } {
    return {
      box: 'Box',
      code: 'Code',
      coverUrl: 'CoverUrl',
      message: 'Message',
      selectedFrameIndex: 'SelectedFrameIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      box: { 'type': 'array', 'itemType': 'number' },
      code: 'number',
      coverUrl: 'string',
      message: 'string',
      selectedFrameIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMotionShopVideoDetectResultResponseBodyData extends $tea.Model {
  detectResult?: QueryMotionShopVideoDetectResultResponseBodyDataDetectResult;
  status?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      detectResult: 'DetectResult',
      status: 'Status',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectResult: QueryMotionShopVideoDetectResultResponseBodyDataDetectResult,
      status: 'string',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMotionShopTaskResponseBodyData extends $tea.Model {
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "xrengine-daily.aliyuncs.com",
      'ap-northeast-2-pop': "xrengine-daily.aliyuncs.com",
      'ap-south-1': "xrengine-daily.aliyuncs.com",
      'ap-southeast-1': "xrengine-daily.aliyuncs.com",
      'ap-southeast-2': "xrengine-daily.aliyuncs.com",
      'ap-southeast-3': "xrengine-daily.aliyuncs.com",
      'ap-southeast-5': "xrengine-daily.aliyuncs.com",
      'cn-beijing': "xrengine-daily.aliyuncs.com",
      'cn-beijing-finance-1': "xrengine-daily.aliyuncs.com",
      'cn-beijing-finance-pop': "xrengine-daily.aliyuncs.com",
      'cn-beijing-gov-1': "xrengine-daily.aliyuncs.com",
      'cn-beijing-nu16-b01': "xrengine-daily.aliyuncs.com",
      'cn-chengdu': "xrengine-daily.aliyuncs.com",
      'cn-edge-1': "xrengine-daily.aliyuncs.com",
      'cn-fujian': "xrengine-daily.aliyuncs.com",
      'cn-haidian-cm12-c01': "xrengine-daily.aliyuncs.com",
      'cn-hangzhou-bj-b01': "xrengine-daily.aliyuncs.com",
      'cn-hangzhou-finance': "xrengine-daily.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "xrengine-daily.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "xrengine-daily.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "xrengine-daily.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "xrengine-daily.aliyuncs.com",
      'cn-hangzhou-test-306': "xrengine-daily.aliyuncs.com",
      'cn-hongkong': "xrengine-daily.aliyuncs.com",
      'cn-hongkong-finance-pop': "xrengine-daily.aliyuncs.com",
      'cn-huhehaote': "xrengine-daily.aliyuncs.com",
      'cn-huhehaote-nebula-1': "xrengine-daily.aliyuncs.com",
      'cn-north-2-gov-1': "xrengine-daily.aliyuncs.com",
      'cn-qingdao': "xrengine-daily.aliyuncs.com",
      'cn-qingdao-nebula': "xrengine-daily.aliyuncs.com",
      'cn-shanghai': "xrengine-daily.aliyuncs.com",
      'cn-shanghai-et15-b01': "xrengine-daily.aliyuncs.com",
      'cn-shanghai-et2-b01': "xrengine-daily.aliyuncs.com",
      'cn-shanghai-finance-1': "xrengine-daily.aliyuncs.com",
      'cn-shanghai-inner': "xrengine-daily.aliyuncs.com",
      'cn-shanghai-internal-test-1': "xrengine-daily.aliyuncs.com",
      'cn-shenzhen': "xrengine-daily.aliyuncs.com",
      'cn-shenzhen-finance-1': "xrengine-daily.aliyuncs.com",
      'cn-shenzhen-inner': "xrengine-daily.aliyuncs.com",
      'cn-shenzhen-st4-d01': "xrengine-daily.aliyuncs.com",
      'cn-shenzhen-su18-b01': "xrengine-daily.aliyuncs.com",
      'cn-wuhan': "xrengine-daily.aliyuncs.com",
      'cn-wulanchabu': "xrengine-daily.aliyuncs.com",
      'cn-yushanfang': "xrengine-daily.aliyuncs.com",
      'cn-zhangbei': "xrengine-daily.aliyuncs.com",
      'cn-zhangbei-na61-b01': "xrengine-daily.aliyuncs.com",
      'cn-zhangjiakou': "xrengine-daily.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "xrengine-daily.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "xrengine-daily.aliyuncs.com",
      'eu-central-1': "xrengine-daily.aliyuncs.com",
      'eu-west-1': "xrengine-daily.aliyuncs.com",
      'eu-west-1-oxs': "xrengine-daily.aliyuncs.com",
      'me-east-1': "xrengine-daily.aliyuncs.com",
      'rus-west-1-pop': "xrengine-daily.aliyuncs.com",
      'us-east-1': "xrengine-daily.aliyuncs.com",
      'us-west-1': "xrengine-daily.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("xrengine", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async authUserWithOptions(request: AuthUserRequest, runtime: $Util.RuntimeOptions): Promise<AuthUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuthUser",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthUserResponse>(await this.callApi(params, req, runtime), new AuthUserResponse({}));
  }

  async authUser(request: AuthUserRequest): Promise<AuthUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authUserWithOptions(request, runtime);
  }

  async batchQueryMotionShopTaskStatusWithOptions(request: BatchQueryMotionShopTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<BatchQueryMotionShopTaskStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchQueryMotionShopTaskStatus",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchQueryMotionShopTaskStatusResponse>(await this.callApi(params, req, runtime), new BatchQueryMotionShopTaskStatusResponse({}));
  }

  async batchQueryMotionShopTaskStatus(request: BatchQueryMotionShopTaskStatusRequest): Promise<BatchQueryMotionShopTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchQueryMotionShopTaskStatusWithOptions(request, runtime);
  }

  async createDigitalHumanProjectWithOptions(request: CreateDigitalHumanProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateDigitalHumanProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.audioId)) {
      body["AudioId"] = request.audioId;
    }

    if (!Util.isUnset(request.audioUrl)) {
      body["AudioUrl"] = request.audioUrl;
    }

    if (!Util.isUnset(request.backgroundId)) {
      body["BackgroundId"] = request.backgroundId;
    }

    if (!Util.isUnset(request.backgroundUrl)) {
      body["BackgroundUrl"] = request.backgroundUrl;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.foregroundId)) {
      body["ForegroundId"] = request.foregroundId;
    }

    if (!Util.isUnset(request.foregroundUrl)) {
      body["ForegroundUrl"] = request.foregroundUrl;
    }

    if (!Util.isUnset(request.humanLayerStyle)) {
      body["HumanLayerStyle"] = request.humanLayerStyle;
    }

    if (!Util.isUnset(request.intro)) {
      body["Intro"] = request.intro;
    }

    if (!Util.isUnset(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.outputConfig)) {
      body["OutputConfig"] = request.outputConfig;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.ttsVoiceId)) {
      body["TtsVoiceId"] = request.ttsVoiceId;
    }

    if (!Util.isUnset(request.watermarkImageUrl)) {
      body["WatermarkImageUrl"] = request.watermarkImageUrl;
    }

    if (!Util.isUnset(request.watermarkStyle)) {
      body["WatermarkStyle"] = request.watermarkStyle;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDigitalHumanProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDigitalHumanProjectResponse>(await this.callApi(params, req, runtime), new CreateDigitalHumanProjectResponse({}));
  }

  async createDigitalHumanProject(request: CreateDigitalHumanProjectRequest): Promise<CreateDigitalHumanProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDigitalHumanProjectWithOptions(request, runtime);
  }

  async createLivePortraitProjectWithOptions(request: CreateLivePortraitProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateLivePortraitProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.audioId)) {
      body["AudioId"] = request.audioId;
    }

    if (!Util.isUnset(request.audioUrl)) {
      body["AudioUrl"] = request.audioUrl;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.intro)) {
      body["Intro"] = request.intro;
    }

    if (!Util.isUnset(request.lightModel)) {
      body["LightModel"] = request.lightModel;
    }

    if (!Util.isUnset(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.outputConfig)) {
      body["OutputConfig"] = request.outputConfig;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.ttsVoiceId)) {
      body["TtsVoiceId"] = request.ttsVoiceId;
    }

    if (!Util.isUnset(request.watermarkImageUrl)) {
      body["WatermarkImageUrl"] = request.watermarkImageUrl;
    }

    if (!Util.isUnset(request.watermarkStyle)) {
      body["WatermarkStyle"] = request.watermarkStyle;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLivePortraitProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLivePortraitProjectResponse>(await this.callApi(params, req, runtime), new CreateLivePortraitProjectResponse({}));
  }

  async createLivePortraitProject(request: CreateLivePortraitProjectRequest): Promise<CreateLivePortraitProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLivePortraitProjectWithOptions(request, runtime);
  }

  async generateMotionShopVideoUploadUrlWithOptions(request: GenerateMotionShopVideoUploadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GenerateMotionShopVideoUploadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateMotionShopVideoUploadUrl",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateMotionShopVideoUploadUrlResponse>(await this.callApi(params, req, runtime), new GenerateMotionShopVideoUploadUrlResponse({}));
  }

  async generateMotionShopVideoUploadUrl(request: GenerateMotionShopVideoUploadUrlRequest): Promise<GenerateMotionShopVideoUploadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateMotionShopVideoUploadUrlWithOptions(request, runtime);
  }

  async getMapDataWithOptions(request: GetMapDataRequest, runtime: $Util.RuntimeOptions): Promise<GetMapDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMapData",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMapDataResponse>(await this.callApi(params, req, runtime), new GetMapDataResponse({}));
  }

  async getMapData(request: GetMapDataRequest): Promise<GetMapDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMapDataWithOptions(request, runtime);
  }

  async getMapPublishDataWithOptions(request: GetMapPublishDataRequest, runtime: $Util.RuntimeOptions): Promise<GetMapPublishDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMapPublishData",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMapPublishDataResponse>(await this.callApi(params, req, runtime), new GetMapPublishDataResponse({}));
  }

  async getMapPublishData(request: GetMapPublishDataRequest): Promise<GetMapPublishDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMapPublishDataWithOptions(request, runtime);
  }

  async initLocateWithOptions(request: InitLocateRequest, runtime: $Util.RuntimeOptions): Promise<InitLocateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InitLocate",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitLocateResponse>(await this.callApi(params, req, runtime), new InitLocateResponse({}));
  }

  async initLocate(request: InitLocateRequest): Promise<InitLocateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initLocateWithOptions(request, runtime);
  }

  async listCommonMaterialsWithOptions(request: ListCommonMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<ListCommonMaterialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCommonMaterials",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCommonMaterialsResponse>(await this.callApi(params, req, runtime), new ListCommonMaterialsResponse({}));
  }

  async listCommonMaterials(request: ListCommonMaterialsRequest): Promise<ListCommonMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCommonMaterialsWithOptions(request, runtime);
  }

  async listDigitalHumanMaterialsWithOptions(request: ListDigitalHumanMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<ListDigitalHumanMaterialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.onlyPersonalMaterials)) {
      body["OnlyPersonalMaterials"] = request.onlyPersonalMaterials;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.types)) {
      body["Types"] = request.types;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDigitalHumanMaterials",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDigitalHumanMaterialsResponse>(await this.callApi(params, req, runtime), new ListDigitalHumanMaterialsResponse({}));
  }

  async listDigitalHumanMaterials(request: ListDigitalHumanMaterialsRequest): Promise<ListDigitalHumanMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDigitalHumanMaterialsWithOptions(request, runtime);
  }

  async listLocationServiceWithOptions(request: ListLocationServiceRequest, runtime: $Util.RuntimeOptions): Promise<ListLocationServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.sort)) {
      body["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListLocationService",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLocationServiceResponse>(await this.callApi(params, req, runtime), new ListLocationServiceResponse({}));
  }

  async listLocationService(request: ListLocationServiceRequest): Promise<ListLocationServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLocationServiceWithOptions(request, runtime);
  }

  async listMotionShopTasksWithOptions(request: ListMotionShopTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListMotionShopTasksResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMotionShopTasks",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMotionShopTasksResponse>(await this.callApi(params, req, runtime), new ListMotionShopTasksResponse({}));
  }

  async listMotionShopTasks(request: ListMotionShopTasksRequest): Promise<ListMotionShopTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMotionShopTasksWithOptions(request, runtime);
  }

  async livePortraitFaceDetectWithOptions(request: LivePortraitFaceDetectRequest, runtime: $Util.RuntimeOptions): Promise<LivePortraitFaceDetectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LivePortraitFaceDetect",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LivePortraitFaceDetectResponse>(await this.callApi(params, req, runtime), new LivePortraitFaceDetectResponse({}));
  }

  async livePortraitFaceDetect(request: LivePortraitFaceDetectRequest): Promise<LivePortraitFaceDetectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.livePortraitFaceDetectWithOptions(request, runtime);
  }

  async locateWithOptions(request: LocateRequest, runtime: $Util.RuntimeOptions): Promise<LocateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.image)) {
      body["Image"] = request.image;
    }

    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Locate",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LocateResponse>(await this.callApi(params, req, runtime), new LocateResponse({}));
  }

  async locate(request: LocateRequest): Promise<LocateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.locateWithOptions(request, runtime);
  }

  async loginModelScopeWithOptions(request: LoginModelScopeRequest, runtime: $Util.RuntimeOptions): Promise<LoginModelScopeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.empId)) {
      body["EmpId"] = request.empId;
    }

    if (!Util.isUnset(request.empName)) {
      body["EmpName"] = request.empName;
    }

    if (!Util.isUnset(request.token)) {
      body["Token"] = request.token;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LoginModelScope",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LoginModelScopeResponse>(await this.callApi(params, req, runtime), new LoginModelScopeResponse({}));
  }

  async loginModelScope(request: LoginModelScopeRequest): Promise<LoginModelScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.loginModelScopeWithOptions(request, runtime);
  }

  async motionShopVideoDetectWithOptions(request: MotionShopVideoDetectRequest, runtime: $Util.RuntimeOptions): Promise<MotionShopVideoDetectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ossKey)) {
      body["OssKey"] = request.ossKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MotionShopVideoDetect",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MotionShopVideoDetectResponse>(await this.callApi(params, req, runtime), new MotionShopVideoDetectResponse({}));
  }

  async motionShopVideoDetect(request: MotionShopVideoDetectRequest): Promise<MotionShopVideoDetectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.motionShopVideoDetectWithOptions(request, runtime);
  }

  async popBatchQueryObjectGenerationProjectStatusWithOptions(request: PopBatchQueryObjectGenerationProjectStatusRequest, runtime: $Util.RuntimeOptions): Promise<PopBatchQueryObjectGenerationProjectStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectIds)) {
      body["ProjectIds"] = request.projectIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopBatchQueryObjectGenerationProjectStatus",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopBatchQueryObjectGenerationProjectStatusResponse>(await this.callApi(params, req, runtime), new PopBatchQueryObjectGenerationProjectStatusResponse({}));
  }

  async popBatchQueryObjectGenerationProjectStatus(request: PopBatchQueryObjectGenerationProjectStatusRequest): Promise<PopBatchQueryObjectGenerationProjectStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popBatchQueryObjectGenerationProjectStatusWithOptions(request, runtime);
  }

  async popBatchQueryObjectProjectStatusWithOptions(request: PopBatchQueryObjectProjectStatusRequest, runtime: $Util.RuntimeOptions): Promise<PopBatchQueryObjectProjectStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.projectIds)) {
      body["ProjectIds"] = request.projectIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopBatchQueryObjectProjectStatus",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopBatchQueryObjectProjectStatusResponse>(await this.callApi(params, req, runtime), new PopBatchQueryObjectProjectStatusResponse({}));
  }

  async popBatchQueryObjectProjectStatus(request: PopBatchQueryObjectProjectStatusRequest): Promise<PopBatchQueryObjectProjectStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popBatchQueryObjectProjectStatusWithOptions(request, runtime);
  }

  async popBuildFeatureToAvatarProjectWithOptions(request: PopBuildFeatureToAvatarProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopBuildFeatureToAvatarProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopBuildFeatureToAvatarProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopBuildFeatureToAvatarProjectResponse>(await this.callApi(params, req, runtime), new PopBuildFeatureToAvatarProjectResponse({}));
  }

  async popBuildFeatureToAvatarProject(request: PopBuildFeatureToAvatarProjectRequest): Promise<PopBuildFeatureToAvatarProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popBuildFeatureToAvatarProjectWithOptions(request, runtime);
  }

  async popBuildLivePortraitModelScopeProjectWithOptions(request: PopBuildLivePortraitModelScopeProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopBuildLivePortraitModelScopeProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopBuildLivePortraitModelScopeProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopBuildLivePortraitModelScopeProjectResponse>(await this.callApi(params, req, runtime), new PopBuildLivePortraitModelScopeProjectResponse({}));
  }

  async popBuildLivePortraitModelScopeProject(request: PopBuildLivePortraitModelScopeProjectRequest): Promise<PopBuildLivePortraitModelScopeProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popBuildLivePortraitModelScopeProjectWithOptions(request, runtime);
  }

  async popBuildObjectGenerationProjectWithOptions(request: PopBuildObjectGenerationProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopBuildObjectGenerationProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopBuildObjectGenerationProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopBuildObjectGenerationProjectResponse>(await this.callApi(params, req, runtime), new PopBuildObjectGenerationProjectResponse({}));
  }

  async popBuildObjectGenerationProject(request: PopBuildObjectGenerationProjectRequest): Promise<PopBuildObjectGenerationProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popBuildObjectGenerationProjectWithOptions(request, runtime);
  }

  async popBuildObjectProjectWithOptions(request: PopBuildObjectProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopBuildObjectProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopBuildObjectProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopBuildObjectProjectResponse>(await this.callApi(params, req, runtime), new PopBuildObjectProjectResponse({}));
  }

  async popBuildObjectProject(request: PopBuildObjectProjectRequest): Promise<PopBuildObjectProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popBuildObjectProjectWithOptions(request, runtime);
  }

  async popBuildPakRenderProjectWithOptions(request: PopBuildPakRenderProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopBuildPakRenderProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopBuildPakRenderProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopBuildPakRenderProjectResponse>(await this.callApi(params, req, runtime), new PopBuildPakRenderProjectResponse({}));
  }

  async popBuildPakRenderProject(request: PopBuildPakRenderProjectRequest): Promise<PopBuildPakRenderProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popBuildPakRenderProjectWithOptions(request, runtime);
  }

  async popBuildTextToAvatarProjectWithOptions(request: PopBuildTextToAvatarProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopBuildTextToAvatarProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopBuildTextToAvatarProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopBuildTextToAvatarProjectResponse>(await this.callApi(params, req, runtime), new PopBuildTextToAvatarProjectResponse({}));
  }

  async popBuildTextToAvatarProject(request: PopBuildTextToAvatarProjectRequest): Promise<PopBuildTextToAvatarProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popBuildTextToAvatarProjectWithOptions(request, runtime);
  }

  async popCreateFeatureToAvatarProjectWithOptions(request: PopCreateFeatureToAvatarProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopCreateFeatureToAvatarProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.intro)) {
      body["Intro"] = request.intro;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopCreateFeatureToAvatarProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopCreateFeatureToAvatarProjectResponse>(await this.callApi(params, req, runtime), new PopCreateFeatureToAvatarProjectResponse({}));
  }

  async popCreateFeatureToAvatarProject(request: PopCreateFeatureToAvatarProjectRequest): Promise<PopCreateFeatureToAvatarProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popCreateFeatureToAvatarProjectWithOptions(request, runtime);
  }

  async popCreateLivePortraitModelScopeProjectWithOptions(request: PopCreateLivePortraitModelScopeProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopCreateLivePortraitModelScopeProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.intro)) {
      body["Intro"] = request.intro;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopCreateLivePortraitModelScopeProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopCreateLivePortraitModelScopeProjectResponse>(await this.callApi(params, req, runtime), new PopCreateLivePortraitModelScopeProjectResponse({}));
  }

  async popCreateLivePortraitModelScopeProject(request: PopCreateLivePortraitModelScopeProjectRequest): Promise<PopCreateLivePortraitModelScopeProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popCreateLivePortraitModelScopeProjectWithOptions(request, runtime);
  }

  async popCreateMaterialWithOptions(request: PopCreateMaterialRequest, runtime: $Util.RuntimeOptions): Promise<PopCreateMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkStatus)) {
      body["CheckStatus"] = request.checkStatus;
    }

    if (!Util.isUnset(request.ext)) {
      body["Ext"] = request.ext;
    }

    if (!Util.isUnset(request.intro)) {
      body["Intro"] = request.intro;
    }

    if (!Util.isUnset(request.listStatus)) {
      body["ListStatus"] = request.listStatus;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossKey)) {
      body["OssKey"] = request.ossKey;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopCreateMaterial",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopCreateMaterialResponse>(await this.callApi(params, req, runtime), new PopCreateMaterialResponse({}));
  }

  async popCreateMaterial(request: PopCreateMaterialRequest): Promise<PopCreateMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popCreateMaterialWithOptions(request, runtime);
  }

  async popCreateObjectGenerationProjectWithOptions(request: PopCreateObjectGenerationProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopCreateObjectGenerationProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizUsage)) {
      body["BizUsage"] = request.bizUsage;
    }

    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.intro)) {
      body["Intro"] = request.intro;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopCreateObjectGenerationProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopCreateObjectGenerationProjectResponse>(await this.callApi(params, req, runtime), new PopCreateObjectGenerationProjectResponse({}));
  }

  async popCreateObjectGenerationProject(request: PopCreateObjectGenerationProjectRequest): Promise<PopCreateObjectGenerationProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popCreateObjectGenerationProjectWithOptions(request, runtime);
  }

  async popCreateObjectProjectWithOptions(request: PopCreateObjectProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopCreateObjectProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoBuild)) {
      body["AutoBuild"] = request.autoBuild;
    }

    if (!Util.isUnset(request.bizUsage)) {
      body["BizUsage"] = request.bizUsage;
    }

    if (!Util.isUnset(request.customSource)) {
      body["CustomSource"] = request.customSource;
    }

    if (!Util.isUnset(request.dependencies)) {
      body["Dependencies"] = request.dependencies;
    }

    if (!Util.isUnset(request.foreignUid)) {
      body["ForeignUid"] = request.foreignUid;
    }

    if (!Util.isUnset(request.intro)) {
      body["Intro"] = request.intro;
    }

    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.recommendStatus)) {
      body["RecommendStatus"] = request.recommendStatus;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopCreateObjectProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopCreateObjectProjectResponse>(await this.callApi(params, req, runtime), new PopCreateObjectProjectResponse({}));
  }

  async popCreateObjectProject(request: PopCreateObjectProjectRequest): Promise<PopCreateObjectProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popCreateObjectProjectWithOptions(request, runtime);
  }

  async popCreatePakRenderProjectWithOptions(request: PopCreatePakRenderProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopCreatePakRenderProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.intro)) {
      body["Intro"] = request.intro;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopCreatePakRenderProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopCreatePakRenderProjectResponse>(await this.callApi(params, req, runtime), new PopCreatePakRenderProjectResponse({}));
  }

  async popCreatePakRenderProject(request: PopCreatePakRenderProjectRequest): Promise<PopCreatePakRenderProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popCreatePakRenderProjectWithOptions(request, runtime);
  }

  async popCreateTextToAvatarProjectWithOptions(request: PopCreateTextToAvatarProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopCreateTextToAvatarProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.intro)) {
      body["Intro"] = request.intro;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopCreateTextToAvatarProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopCreateTextToAvatarProjectResponse>(await this.callApi(params, req, runtime), new PopCreateTextToAvatarProjectResponse({}));
  }

  async popCreateTextToAvatarProject(request: PopCreateTextToAvatarProjectRequest): Promise<PopCreateTextToAvatarProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popCreateTextToAvatarProjectWithOptions(request, runtime);
  }

  async popDeleteMaterialWithOptions(request: PopDeleteMaterialRequest, runtime: $Util.RuntimeOptions): Promise<PopDeleteMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.materialId)) {
      query["MaterialId"] = request.materialId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PopDeleteMaterial",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopDeleteMaterialResponse>(await this.callApi(params, req, runtime), new PopDeleteMaterialResponse({}));
  }

  async popDeleteMaterial(request: PopDeleteMaterialRequest): Promise<PopDeleteMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popDeleteMaterialWithOptions(request, runtime);
  }

  async popGetAITryOnJobWithOptions(request: PopGetAITryOnJobRequest, runtime: $Util.RuntimeOptions): Promise<PopGetAITryOnJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.withMaterial)) {
      query["WithMaterial"] = request.withMaterial;
    }

    if (!Util.isUnset(request.withResult)) {
      query["WithResult"] = request.withResult;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PopGetAITryOnJob",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopGetAITryOnJobResponse>(await this.callApi(params, req, runtime), new PopGetAITryOnJobResponse({}));
  }

  async popGetAITryOnJob(request: PopGetAITryOnJobRequest): Promise<PopGetAITryOnJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popGetAITryOnJobWithOptions(request, runtime);
  }

  async popListAITryOnJobsWithOptions(request: PopListAITryOnJobsRequest, runtime: $Util.RuntimeOptions): Promise<PopListAITryOnJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopListAITryOnJobs",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopListAITryOnJobsResponse>(await this.callApi(params, req, runtime), new PopListAITryOnJobsResponse({}));
  }

  async popListAITryOnJobs(request: PopListAITryOnJobsRequest): Promise<PopListAITryOnJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popListAITryOnJobsWithOptions(request, runtime);
  }

  async popListCommonMaterialsAllWithOptions(request: PopListCommonMaterialsAllRequest, runtime: $Util.RuntimeOptions): Promise<PopListCommonMaterialsAllResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.listStatus)) {
      query["ListStatus"] = request.listStatus;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopListCommonMaterialsAll",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopListCommonMaterialsAllResponse>(await this.callApi(params, req, runtime), new PopListCommonMaterialsAllResponse({}));
  }

  async popListCommonMaterialsAll(request: PopListCommonMaterialsAllRequest): Promise<PopListCommonMaterialsAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popListCommonMaterialsAllWithOptions(request, runtime);
  }

  async popListFeatureToAvatarMaterialsWithOptions(request: PopListFeatureToAvatarMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<PopListFeatureToAvatarMaterialsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.listStatus)) {
      body["ListStatus"] = request.listStatus;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopListFeatureToAvatarMaterials",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopListFeatureToAvatarMaterialsResponse>(await this.callApi(params, req, runtime), new PopListFeatureToAvatarMaterialsResponse({}));
  }

  async popListFeatureToAvatarMaterials(request: PopListFeatureToAvatarMaterialsRequest): Promise<PopListFeatureToAvatarMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popListFeatureToAvatarMaterialsWithOptions(request, runtime);
  }

  async popListFeatureToAvatarProjectWithOptions(request: PopListFeatureToAvatarProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopListFeatureToAvatarProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopListFeatureToAvatarProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopListFeatureToAvatarProjectResponse>(await this.callApi(params, req, runtime), new PopListFeatureToAvatarProjectResponse({}));
  }

  async popListFeatureToAvatarProject(request: PopListFeatureToAvatarProjectRequest): Promise<PopListFeatureToAvatarProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popListFeatureToAvatarProjectWithOptions(request, runtime);
  }

  async popListLivePortraitModelScopeMaterialsWithOptions(request: PopListLivePortraitModelScopeMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<PopListLivePortraitModelScopeMaterialsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.types)) {
      body["Types"] = request.types;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopListLivePortraitModelScopeMaterials",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopListLivePortraitModelScopeMaterialsResponse>(await this.callApi(params, req, runtime), new PopListLivePortraitModelScopeMaterialsResponse({}));
  }

  async popListLivePortraitModelScopeMaterials(request: PopListLivePortraitModelScopeMaterialsRequest): Promise<PopListLivePortraitModelScopeMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popListLivePortraitModelScopeMaterialsWithOptions(request, runtime);
  }

  async popListObjectCaseWithOptions(request: PopListObjectCaseRequest, runtime: $Util.RuntimeOptions): Promise<PopListObjectCaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopListObjectCase",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopListObjectCaseResponse>(await this.callApi(params, req, runtime), new PopListObjectCaseResponse({}));
  }

  async popListObjectCase(request: PopListObjectCaseRequest): Promise<PopListObjectCaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popListObjectCaseWithOptions(request, runtime);
  }

  async popListObjectGenerationProjectWithOptions(request: PopListObjectGenerationProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopListObjectGenerationProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopListObjectGenerationProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopListObjectGenerationProjectResponse>(await this.callApi(params, req, runtime), new PopListObjectGenerationProjectResponse({}));
  }

  async popListObjectGenerationProject(request: PopListObjectGenerationProjectRequest): Promise<PopListObjectGenerationProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popListObjectGenerationProjectWithOptions(request, runtime);
  }

  async popListObjectProjectWithOptions(request: PopListObjectProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopListObjectProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.auditStatus)) {
      body["AuditStatus"] = request.auditStatus;
    }

    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.customSource)) {
      body["CustomSource"] = request.customSource;
    }

    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.withSource)) {
      body["WithSource"] = request.withSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopListObjectProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopListObjectProjectResponse>(await this.callApi(params, req, runtime), new PopListObjectProjectResponse({}));
  }

  async popListObjectProject(request: PopListObjectProjectRequest): Promise<PopListObjectProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popListObjectProjectWithOptions(request, runtime);
  }

  async popListPakRenderExpressionWithOptions(request: PopListPakRenderExpressionRequest, runtime: $Util.RuntimeOptions): Promise<PopListPakRenderExpressionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listStatus)) {
      query["ListStatus"] = request.listStatus;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopListPakRenderExpression",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopListPakRenderExpressionResponse>(await this.callApi(params, req, runtime), new PopListPakRenderExpressionResponse({}));
  }

  async popListPakRenderExpression(request: PopListPakRenderExpressionRequest): Promise<PopListPakRenderExpressionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popListPakRenderExpressionWithOptions(request, runtime);
  }

  async popListTextToAvatarProjectWithOptions(request: PopListTextToAvatarProjectRequest, runtime: $Util.RuntimeOptions): Promise<PopListTextToAvatarProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopListTextToAvatarProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopListTextToAvatarProjectResponse>(await this.callApi(params, req, runtime), new PopListTextToAvatarProjectResponse({}));
  }

  async popListTextToAvatarProject(request: PopListTextToAvatarProjectRequest): Promise<PopListTextToAvatarProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popListTextToAvatarProjectWithOptions(request, runtime);
  }

  async popObjectProjectDetailWithOptions(request: PopObjectProjectDetailRequest, runtime: $Util.RuntimeOptions): Promise<PopObjectProjectDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopObjectProjectDetail",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopObjectProjectDetailResponse>(await this.callApi(params, req, runtime), new PopObjectProjectDetailResponse({}));
  }

  async popObjectProjectDetail(request: PopObjectProjectDetailRequest): Promise<PopObjectProjectDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popObjectProjectDetailWithOptions(request, runtime);
  }

  async popObjectRetrievalWithOptions(request: PopObjectRetrievalRequest, runtime: $Util.RuntimeOptions): Promise<PopObjectRetrievalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.topK)) {
      body["TopK"] = request.topK;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopObjectRetrieval",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopObjectRetrievalResponse>(await this.callApi(params, req, runtime), new PopObjectRetrievalResponse({}));
  }

  async popObjectRetrieval(request: PopObjectRetrievalRequest): Promise<PopObjectRetrievalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popObjectRetrievalWithOptions(request, runtime);
  }

  async popObjectRetrievalUploadDataWithOptions(request: PopObjectRetrievalUploadDataRequest, runtime: $Util.RuntimeOptions): Promise<PopObjectRetrievalUploadDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PopObjectRetrievalUploadData",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopObjectRetrievalUploadDataResponse>(await this.callApi(params, req, runtime), new PopObjectRetrievalUploadDataResponse({}));
  }

  async popObjectRetrievalUploadData(request: PopObjectRetrievalUploadDataRequest): Promise<PopObjectRetrievalUploadDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popObjectRetrievalUploadDataWithOptions(request, runtime);
  }

  async popQueryAvatarProjectDetailWithOptions(request: PopQueryAvatarProjectDetailRequest, runtime: $Util.RuntimeOptions): Promise<PopQueryAvatarProjectDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PopQueryAvatarProjectDetail",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopQueryAvatarProjectDetailResponse>(await this.callApi(params, req, runtime), new PopQueryAvatarProjectDetailResponse({}));
  }

  async popQueryAvatarProjectDetail(request: PopQueryAvatarProjectDetailRequest): Promise<PopQueryAvatarProjectDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popQueryAvatarProjectDetailWithOptions(request, runtime);
  }

  async popQueryLatestAvatarProjectDetailByUserWithOptions(request: PopQueryLatestAvatarProjectDetailByUserRequest, runtime: $Util.RuntimeOptions): Promise<PopQueryLatestAvatarProjectDetailByUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PopQueryLatestAvatarProjectDetailByUser",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopQueryLatestAvatarProjectDetailByUserResponse>(await this.callApi(params, req, runtime), new PopQueryLatestAvatarProjectDetailByUserResponse({}));
  }

  async popQueryLatestAvatarProjectDetailByUser(request: PopQueryLatestAvatarProjectDetailByUserRequest): Promise<PopQueryLatestAvatarProjectDetailByUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popQueryLatestAvatarProjectDetailByUserWithOptions(request, runtime);
  }

  async popQueryLivePortraitModelScopeProjectDetailWithOptions(request: PopQueryLivePortraitModelScopeProjectDetailRequest, runtime: $Util.RuntimeOptions): Promise<PopQueryLivePortraitModelScopeProjectDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PopQueryLivePortraitModelScopeProjectDetail",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopQueryLivePortraitModelScopeProjectDetailResponse>(await this.callApi(params, req, runtime), new PopQueryLivePortraitModelScopeProjectDetailResponse({}));
  }

  async popQueryLivePortraitModelScopeProjectDetail(request: PopQueryLivePortraitModelScopeProjectDetailRequest): Promise<PopQueryLivePortraitModelScopeProjectDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popQueryLivePortraitModelScopeProjectDetailWithOptions(request, runtime);
  }

  async popQueryObjectGenerationProjectDetailWithOptions(request: PopQueryObjectGenerationProjectDetailRequest, runtime: $Util.RuntimeOptions): Promise<PopQueryObjectGenerationProjectDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopQueryObjectGenerationProjectDetail",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopQueryObjectGenerationProjectDetailResponse>(await this.callApi(params, req, runtime), new PopQueryObjectGenerationProjectDetailResponse({}));
  }

  async popQueryObjectGenerationProjectDetail(request: PopQueryObjectGenerationProjectDetailRequest): Promise<PopQueryObjectGenerationProjectDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popQueryObjectGenerationProjectDetailWithOptions(request, runtime);
  }

  async popRetryAITryOnTaskWithOptions(request: PopRetryAITryOnTaskRequest, runtime: $Util.RuntimeOptions): Promise<PopRetryAITryOnTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PopRetryAITryOnTask",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopRetryAITryOnTaskResponse>(await this.callApi(params, req, runtime), new PopRetryAITryOnTaskResponse({}));
  }

  async popRetryAITryOnTask(request: PopRetryAITryOnTaskRequest): Promise<PopRetryAITryOnTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popRetryAITryOnTaskWithOptions(request, runtime);
  }

  async popSubmitAITryOnJobWithOptions(request: PopSubmitAITryOnJobRequest, runtime: $Util.RuntimeOptions): Promise<PopSubmitAITryOnJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bottomsId)) {
      query["BottomsId"] = request.bottomsId;
    }

    if (!Util.isUnset(request.clothingType)) {
      query["ClothingType"] = request.clothingType;
    }

    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.shoeType)) {
      query["ShoeType"] = request.shoeType;
    }

    if (!Util.isUnset(request.suitId)) {
      query["SuitId"] = request.suitId;
    }

    if (!Util.isUnset(request.topsId)) {
      query["TopsId"] = request.topsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PopSubmitAITryOnJob",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopSubmitAITryOnJobResponse>(await this.callApi(params, req, runtime), new PopSubmitAITryOnJobResponse({}));
  }

  async popSubmitAITryOnJob(request: PopSubmitAITryOnJobRequest): Promise<PopSubmitAITryOnJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popSubmitAITryOnJobWithOptions(request, runtime);
  }

  async popUploadMaterialWithOptions(request: PopUploadMaterialRequest, runtime: $Util.RuntimeOptions): Promise<PopUploadMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PopUploadMaterial",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopUploadMaterialResponse>(await this.callApi(params, req, runtime), new PopUploadMaterialResponse({}));
  }

  async popUploadMaterial(request: PopUploadMaterialRequest): Promise<PopUploadMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popUploadMaterialWithOptions(request, runtime);
  }

  async popVideoSaveSourceWithOptions(request: PopVideoSaveSourceRequest, runtime: $Util.RuntimeOptions): Promise<PopVideoSaveSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PopVideoSaveSource",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PopVideoSaveSourceResponse>(await this.callApi(params, req, runtime), new PopVideoSaveSourceResponse({}));
  }

  async popVideoSaveSource(request: PopVideoSaveSourceRequest): Promise<PopVideoSaveSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.popVideoSaveSourceWithOptions(request, runtime);
  }

  async queryDigitalHumanProjectWithOptions(request: QueryDigitalHumanProjectRequest, runtime: $Util.RuntimeOptions): Promise<QueryDigitalHumanProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ids)) {
      body["Ids"] = request.ids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryDigitalHumanProject",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDigitalHumanProjectResponse>(await this.callApi(params, req, runtime), new QueryDigitalHumanProjectResponse({}));
  }

  async queryDigitalHumanProject(request: QueryDigitalHumanProjectRequest): Promise<QueryDigitalHumanProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDigitalHumanProjectWithOptions(request, runtime);
  }

  async queryLongTtsResultWithOptions(request: QueryLongTtsResultRequest, runtime: $Util.RuntimeOptions): Promise<QueryLongTtsResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
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
      action: "QueryLongTtsResult",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryLongTtsResultResponse>(await this.callApi(params, req, runtime), new QueryLongTtsResultResponse({}));
  }

  async queryLongTtsResult(request: QueryLongTtsResultRequest): Promise<QueryLongTtsResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryLongTtsResultWithOptions(request, runtime);
  }

  async queryMotionShopVideoDetectResultWithOptions(request: QueryMotionShopVideoDetectResultRequest, runtime: $Util.RuntimeOptions): Promise<QueryMotionShopVideoDetectResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
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
      action: "QueryMotionShopVideoDetectResult",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMotionShopVideoDetectResultResponse>(await this.callApi(params, req, runtime), new QueryMotionShopVideoDetectResultResponse({}));
  }

  async queryMotionShopVideoDetectResult(request: QueryMotionShopVideoDetectResultRequest): Promise<QueryMotionShopVideoDetectResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMotionShopVideoDetectResultWithOptions(request, runtime);
  }

  async submitLongTtsTaskWithOptions(request: SubmitLongTtsTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitLongTtsTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.ttsVoiceId)) {
      body["TtsVoiceId"] = request.ttsVoiceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitLongTtsTask",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitLongTtsTaskResponse>(await this.callApi(params, req, runtime), new SubmitLongTtsTaskResponse({}));
  }

  async submitLongTtsTask(request: SubmitLongTtsTaskRequest): Promise<SubmitLongTtsTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitLongTtsTaskWithOptions(request, runtime);
  }

  async submitMotionShopTaskWithOptions(request: SubmitMotionShopTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitMotionShopTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.avatarId)) {
      body["AvatarId"] = request.avatarId;
    }

    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.videoId)) {
      body["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitMotionShopTask",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitMotionShopTaskResponse>(await this.callApi(params, req, runtime), new SubmitMotionShopTaskResponse({}));
  }

  async submitMotionShopTask(request: SubmitMotionShopTaskRequest): Promise<SubmitMotionShopTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitMotionShopTaskWithOptions(request, runtime);
  }

  async updateUserEmailWithOptions(request: UpdateUserEmailRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserEmailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.email)) {
      body["Email"] = request.email;
    }

    if (!Util.isUnset(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserEmail",
      version: "2023-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserEmailResponse>(await this.callApi(params, req, runtime), new UpdateUserEmailResponse({}));
  }

  async updateUserEmail(request: UpdateUserEmailRequest): Promise<UpdateUserEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserEmailWithOptions(request, runtime);
  }

}
