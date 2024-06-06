// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class CreateAsyncTranslateRequest extends $tea.Model {
  apiType?: string;
  formatType?: string;
  scene?: string;
  sourceLanguage?: string;
  sourceText?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      apiType: 'ApiType',
      formatType: 'FormatType',
      scene: 'Scene',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
      formatType: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      sourceText: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsyncTranslateResponseBody extends $tea.Model {
  code?: number;
  data?: CreateAsyncTranslateResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateAsyncTranslateResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsyncTranslateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAsyncTranslateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAsyncTranslateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocTranslateTaskRequest extends $tea.Model {
  callbackUrl?: string;
  clientToken?: string;
  fileUrl?: string;
  scene?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      clientToken: 'ClientToken',
      fileUrl: 'FileUrl',
      scene: 'Scene',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      clientToken: 'string',
      fileUrl: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocTranslateTaskAdvanceRequest extends $tea.Model {
  callbackUrl?: string;
  clientToken?: string;
  fileUrlObject?: Readable;
  scene?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      clientToken: 'ClientToken',
      fileUrlObject: 'FileUrl',
      scene: 'Scene',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      clientToken: 'string',
      fileUrlObject: 'Readable',
      scene: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocTranslateTaskResponseBody extends $tea.Model {
  requestId?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocTranslateTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDocTranslateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDocTranslateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageTranslateTaskRequest extends $tea.Model {
  clientToken?: string;
  extra?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  urlList?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      extra: 'Extra',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      extra: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      urlList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageTranslateTaskResponseBody extends $tea.Model {
  code?: number;
  data?: CreateImageTranslateTaskResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateImageTranslateTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageTranslateTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateImageTranslateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateImageTranslateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTranslateRequest extends $tea.Model {
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

export class GetAsyncTranslateResponseBody extends $tea.Model {
  code?: number;
  data?: GetAsyncTranslateResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAsyncTranslateResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTranslateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAsyncTranslateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAsyncTranslateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTranslateRequest extends $tea.Model {
  apiType?: string;
  formatType?: string;
  scene?: string;
  sourceLanguage?: string;
  sourceText?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      apiType: 'ApiType',
      formatType: 'FormatType',
      scene: 'Scene',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
      formatType: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      sourceText: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTranslateResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  translatedList?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      translatedList: 'TranslatedList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      translatedList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTranslateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBatchTranslateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBatchTranslateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTranslateByVPCRequest extends $tea.Model {
  apiType?: string;
  formatType?: string;
  scene?: string;
  sourceLanguage?: string;
  sourceText?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      apiType: 'ApiType',
      formatType: 'FormatType',
      scene: 'Scene',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
      formatType: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      sourceText: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTranslateByVPCResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  translatedList?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      translatedList: 'TranslatedList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      translatedList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTranslateByVPCResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBatchTranslateByVPCResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBatchTranslateByVPCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectLanguageRequest extends $tea.Model {
  sourceText?: string;
  static names(): { [key: string]: string } {
    return {
      sourceText: 'SourceText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectLanguageResponseBody extends $tea.Model {
  detectedLanguage?: string;
  languageProbabilities?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detectedLanguage: 'DetectedLanguage',
      languageProbabilities: 'LanguageProbabilities',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectedLanguage: 'string',
      languageProbabilities: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectLanguageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDetectLanguageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDetectLanguageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocTranslateTaskRequest extends $tea.Model {
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

export class GetDocTranslateTaskResponseBody extends $tea.Model {
  pageCount?: number;
  requestId?: string;
  status?: string;
  taskId?: string;
  translateErrorCode?: string;
  translateErrorMessage?: string;
  translateFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      requestId: 'RequestId',
      status: 'Status',
      taskId: 'TaskId',
      translateErrorCode: 'TranslateErrorCode',
      translateErrorMessage: 'TranslateErrorMessage',
      translateFileUrl: 'TranslateFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      requestId: 'string',
      status: 'string',
      taskId: 'string',
      translateErrorCode: 'string',
      translateErrorMessage: 'string',
      translateFileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocTranslateTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocTranslateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDocTranslateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDiagnoseRequest extends $tea.Model {
  extra?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDiagnoseResponseBody extends $tea.Model {
  code?: number;
  data?: GetImageDiagnoseResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetImageDiagnoseResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDiagnoseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetImageDiagnoseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetImageDiagnoseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateRequest extends $tea.Model {
  extra?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateResponseBody extends $tea.Model {
  code?: number;
  data?: GetImageTranslateResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetImageTranslateResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetImageTranslateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetImageTranslateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateTaskRequest extends $tea.Model {
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

export class GetImageTranslateTaskResponseBody extends $tea.Model {
  code?: number;
  data?: GetImageTranslateTaskResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetImageTranslateTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetImageTranslateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetImageTranslateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleDiagnoseRequest extends $tea.Model {
  categoryId?: string;
  extra?: string;
  language?: string;
  platform?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      extra: 'Extra',
      language: 'Language',
      platform: 'Platform',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      extra: 'string',
      language: 'string',
      platform: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleDiagnoseResponseBody extends $tea.Model {
  code?: number;
  data?: GetTitleDiagnoseResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTitleDiagnoseResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleDiagnoseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTitleDiagnoseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTitleDiagnoseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleGenerateRequest extends $tea.Model {
  attributes?: string;
  categoryId?: string;
  extra?: string;
  hotWords?: string;
  language?: string;
  platform?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      categoryId: 'CategoryId',
      extra: 'Extra',
      hotWords: 'HotWords',
      language: 'Language',
      platform: 'Platform',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      categoryId: 'string',
      extra: 'string',
      hotWords: 'string',
      language: 'string',
      platform: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleGenerateResponseBody extends $tea.Model {
  code?: number;
  data?: GetTitleGenerateResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTitleGenerateResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleGenerateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTitleGenerateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTitleGenerateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleIntelligenceRequest extends $tea.Model {
  catLevelThreeId?: number;
  catLevelTwoId?: number;
  extra?: string;
  keywords?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      catLevelThreeId: 'CatLevelThreeId',
      catLevelTwoId: 'CatLevelTwoId',
      extra: 'Extra',
      keywords: 'Keywords',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catLevelThreeId: 'number',
      catLevelTwoId: 'number',
      extra: 'string',
      keywords: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleIntelligenceResponseBody extends $tea.Model {
  code?: number;
  data?: GetTitleIntelligenceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTitleIntelligenceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleIntelligenceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTitleIntelligenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTitleIntelligenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranslateImageBatchResultRequest extends $tea.Model {
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

export class GetTranslateImageBatchResultResponseBody extends $tea.Model {
  code?: number;
  data?: GetTranslateImageBatchResultResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTranslateImageBatchResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranslateImageBatchResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTranslateImageBatchResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTranslateImageBatchResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranslateReportRequest extends $tea.Model {
  apiName?: string;
  beginTime?: string;
  endTime?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      beginTime: 'string',
      endTime: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranslateReportResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranslateReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTranslateReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTranslateReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAlimtServiceRequest extends $tea.Model {
  ownerId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAlimtServiceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAlimtServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenAlimtServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenAlimtServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateRequest extends $tea.Model {
  context?: string;
  formatType?: string;
  scene?: string;
  sourceLanguage?: string;
  sourceText?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      formatType: 'FormatType',
      scene: 'Scene',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      formatType: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      sourceText: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateResponseBody extends $tea.Model {
  code?: number;
  data?: TranslateResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TranslateResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TranslateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TranslateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateCertificateRequest extends $tea.Model {
  certificateType?: string;
  imageUrl?: string;
  resultType?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      certificateType: 'CertificateType',
      imageUrl: 'ImageUrl',
      resultType: 'ResultType',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateType: 'string',
      imageUrl: 'string',
      resultType: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateCertificateAdvanceRequest extends $tea.Model {
  certificateType?: string;
  imageUrlObject?: Readable;
  resultType?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      certificateType: 'CertificateType',
      imageUrlObject: 'ImageUrl',
      resultType: 'ResultType',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateType: 'string',
      imageUrlObject: 'Readable',
      resultType: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateCertificateResponseBody extends $tea.Model {
  data?: TranslateCertificateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TranslateCertificateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TranslateCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TranslateCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateECommerceRequest extends $tea.Model {
  context?: string;
  formatType?: string;
  scene?: string;
  sourceLanguage?: string;
  sourceText?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      formatType: 'FormatType',
      scene: 'Scene',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      formatType: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      sourceText: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateECommerceResponseBody extends $tea.Model {
  code?: number;
  data?: TranslateECommerceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TranslateECommerceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateECommerceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TranslateECommerceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TranslateECommerceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralRequest extends $tea.Model {
  context?: string;
  formatType?: string;
  scene?: string;
  sourceLanguage?: string;
  sourceText?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      formatType: 'FormatType',
      scene: 'Scene',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      formatType: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      sourceText: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralResponseBody extends $tea.Model {
  code?: number;
  data?: TranslateGeneralResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TranslateGeneralResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TranslateGeneralResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TranslateGeneralResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralVpcRequest extends $tea.Model {
  context?: string;
  formatType?: string;
  scene?: string;
  sourceLanguage?: string;
  sourceText?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      formatType: 'FormatType',
      scene: 'Scene',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      formatType: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      sourceText: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralVpcResponseBody extends $tea.Model {
  code?: number;
  data?: TranslateGeneralVpcResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TranslateGeneralVpcResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralVpcResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TranslateGeneralVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TranslateGeneralVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateImageRequest extends $tea.Model {
  ext?: string;
  field?: string;
  imageBase64?: string;
  imageUrl?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      field: 'Field',
      imageBase64: 'ImageBase64',
      imageUrl: 'ImageUrl',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: 'string',
      field: 'string',
      imageBase64: 'string',
      imageUrl: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateImageResponseBody extends $tea.Model {
  code?: number;
  data?: TranslateImageResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TranslateImageResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TranslateImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TranslateImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateImageBatchRequest extends $tea.Model {
  customTaskId?: string;
  ext?: string;
  field?: string;
  imageUrls?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      customTaskId: 'CustomTaskId',
      ext: 'Ext',
      field: 'Field',
      imageUrls: 'ImageUrls',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTaskId: 'string',
      ext: 'string',
      field: 'string',
      imageUrls: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateImageBatchResponseBody extends $tea.Model {
  code?: number;
  data?: TranslateImageBatchResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TranslateImageBatchResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateImageBatchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TranslateImageBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TranslateImageBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsyncTranslateResponseBodyData extends $tea.Model {
  jobId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageTranslateTaskResponseBodyData extends $tea.Model {
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

export class GetAsyncTranslateResponseBodyData extends $tea.Model {
  detectedLanguage?: string;
  status?: string;
  translatedText?: string;
  wordCount?: string;
  static names(): { [key: string]: string } {
    return {
      detectedLanguage: 'DetectedLanguage',
      status: 'Status',
      translatedText: 'TranslatedText',
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectedLanguage: 'string',
      status: 'string',
      translatedText: 'string',
      wordCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDiagnoseResponseBodyData extends $tea.Model {
  language?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateResponseBodyData extends $tea.Model {
  orc?: string;
  pictureEditor?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      orc: 'Orc',
      pictureEditor: 'PictureEditor',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orc: 'string',
      pictureEditor: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateTaskResponseBodyData extends $tea.Model {
  imageData?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleDiagnoseResponseBodyData extends $tea.Model {
  allUppercaseWords?: string;
  containCoreClasses?: string;
  disableWords?: string;
  duplicateWords?: string;
  languageQualityScore?: string;
  noFirstUppercaseList?: string;
  overLengthLimit?: string;
  totalScore?: string;
  wordCount?: string;
  wordSpelledCorrectError?: string;
  static names(): { [key: string]: string } {
    return {
      allUppercaseWords: 'AllUppercaseWords',
      containCoreClasses: 'ContainCoreClasses',
      disableWords: 'DisableWords',
      duplicateWords: 'DuplicateWords',
      languageQualityScore: 'LanguageQualityScore',
      noFirstUppercaseList: 'NoFirstUppercaseList',
      overLengthLimit: 'OverLengthLimit',
      totalScore: 'TotalScore',
      wordCount: 'WordCount',
      wordSpelledCorrectError: 'WordSpelledCorrectError',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allUppercaseWords: 'string',
      containCoreClasses: 'string',
      disableWords: 'string',
      duplicateWords: 'string',
      languageQualityScore: 'string',
      noFirstUppercaseList: 'string',
      overLengthLimit: 'string',
      totalScore: 'string',
      wordCount: 'string',
      wordSpelledCorrectError: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleGenerateResponseBodyData extends $tea.Model {
  titles?: string;
  static names(): { [key: string]: string } {
    return {
      titles: 'Titles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      titles: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleIntelligenceResponseBodyData extends $tea.Model {
  titles?: string;
  static names(): { [key: string]: string } {
    return {
      titles: 'Titles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      titles: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranslateImageBatchResultResponseBodyDataResult extends $tea.Model {
  code?: number;
  finalImageUrl?: string;
  inPaintingUrl?: string;
  message?: string;
  sourceImageUrl?: string;
  success?: boolean;
  templateJson?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      finalImageUrl: 'FinalImageUrl',
      inPaintingUrl: 'InPaintingUrl',
      message: 'Message',
      sourceImageUrl: 'SourceImageUrl',
      success: 'Success',
      templateJson: 'TemplateJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      finalImageUrl: 'string',
      inPaintingUrl: 'string',
      message: 'string',
      sourceImageUrl: 'string',
      success: 'boolean',
      templateJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranslateImageBatchResultResponseBodyData extends $tea.Model {
  result?: GetTranslateImageBatchResultResponseBodyDataResult[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetTranslateImageBatchResultResponseBodyDataResult },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateResponseBodyData extends $tea.Model {
  detectedLanguage?: string;
  translated?: string;
  wordCount?: string;
  static names(): { [key: string]: string } {
    return {
      detectedLanguage: 'DetectedLanguage',
      translated: 'Translated',
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectedLanguage: 'string',
      translated: 'string',
      wordCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateCertificateResponseBodyDataTranslatedValues extends $tea.Model {
  key?: string;
  keyTranslation?: string;
  value?: string;
  valueTranslation?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyTranslation: 'KeyTranslation',
      value: 'Value',
      valueTranslation: 'ValueTranslation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyTranslation: 'string',
      value: 'string',
      valueTranslation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateCertificateResponseBodyData extends $tea.Model {
  translatedValues?: TranslateCertificateResponseBodyDataTranslatedValues[];
  static names(): { [key: string]: string } {
    return {
      translatedValues: 'TranslatedValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      translatedValues: { 'type': 'array', 'itemType': TranslateCertificateResponseBodyDataTranslatedValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateECommerceResponseBodyData extends $tea.Model {
  detectedLanguage?: string;
  translated?: string;
  wordCount?: string;
  static names(): { [key: string]: string } {
    return {
      detectedLanguage: 'DetectedLanguage',
      translated: 'Translated',
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectedLanguage: 'string',
      translated: 'string',
      wordCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralResponseBodyData extends $tea.Model {
  detectedLanguage?: string;
  translated?: string;
  wordCount?: string;
  static names(): { [key: string]: string } {
    return {
      detectedLanguage: 'DetectedLanguage',
      translated: 'Translated',
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectedLanguage: 'string',
      translated: 'string',
      wordCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralVpcResponseBodyData extends $tea.Model {
  detectedLanguage?: string;
  translated?: string;
  wordCount?: string;
  static names(): { [key: string]: string } {
    return {
      detectedLanguage: 'DetectedLanguage',
      translated: 'Translated',
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectedLanguage: 'string',
      translated: 'string',
      wordCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateImageResponseBodyData extends $tea.Model {
  finalImageUrl?: string;
  inPaintingUrl?: string;
  templateJson?: string;
  static names(): { [key: string]: string } {
    return {
      finalImageUrl: 'FinalImageUrl',
      inPaintingUrl: 'InPaintingUrl',
      templateJson: 'TemplateJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalImageUrl: 'string',
      inPaintingUrl: 'string',
      templateJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateImageBatchResponseBodyData extends $tea.Model {
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
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "mt.cn-hangzhou.aliyuncs.com",
      'ap-northeast-1': "mt.aliyuncs.com",
      'ap-northeast-2-pop': "mt.aliyuncs.com",
      'ap-south-1': "mt.aliyuncs.com",
      'ap-southeast-1': "mt.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "mt.aliyuncs.com",
      'ap-southeast-3': "mt.aliyuncs.com",
      'ap-southeast-5': "mt.aliyuncs.com",
      'cn-beijing': "mt.aliyuncs.com",
      'cn-beijing-finance-1': "mt.aliyuncs.com",
      'cn-beijing-finance-pop': "mt.aliyuncs.com",
      'cn-beijing-gov-1': "mt.aliyuncs.com",
      'cn-beijing-nu16-b01': "mt.aliyuncs.com",
      'cn-chengdu': "mt.aliyuncs.com",
      'cn-edge-1': "mt.aliyuncs.com",
      'cn-fujian': "mt.aliyuncs.com",
      'cn-haidian-cm12-c01': "mt.aliyuncs.com",
      'cn-hangzhou-bj-b01': "mt.aliyuncs.com",
      'cn-hangzhou-finance': "mt.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "mt.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "mt.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "mt.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "mt.aliyuncs.com",
      'cn-hangzhou-test-306': "mt.aliyuncs.com",
      'cn-hongkong': "mt.aliyuncs.com",
      'cn-hongkong-finance-pop': "mt.aliyuncs.com",
      'cn-huhehaote': "mt.aliyuncs.com",
      'cn-north-2-gov-1': "mt.aliyuncs.com",
      'cn-qingdao': "mt.aliyuncs.com",
      'cn-qingdao-nebula': "mt.aliyuncs.com",
      'cn-shanghai': "mt.aliyuncs.com",
      'cn-shanghai-et15-b01': "mt.aliyuncs.com",
      'cn-shanghai-et2-b01': "mt.aliyuncs.com",
      'cn-shanghai-finance-1': "mt.aliyuncs.com",
      'cn-shanghai-inner': "mt.aliyuncs.com",
      'cn-shanghai-internal-test-1': "mt.aliyuncs.com",
      'cn-shenzhen': "mt.aliyuncs.com",
      'cn-shenzhen-finance-1': "mt.aliyuncs.com",
      'cn-shenzhen-inner': "mt.aliyuncs.com",
      'cn-shenzhen-st4-d01': "mt.aliyuncs.com",
      'cn-shenzhen-su18-b01': "mt.aliyuncs.com",
      'cn-wuhan': "mt.aliyuncs.com",
      'cn-yushanfang': "mt.aliyuncs.com",
      'cn-zhangbei-na61-b01': "mt.aliyuncs.com",
      'cn-zhangjiakou': "mt.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "mt.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "mt.aliyuncs.com",
      'eu-central-1': "mt.aliyuncs.com",
      'eu-west-1': "mt.aliyuncs.com",
      'eu-west-1-oxs': "mt.aliyuncs.com",
      'me-east-1': "mt.aliyuncs.com",
      'rus-west-1-pop': "mt.aliyuncs.com",
      'us-east-1': "mt.aliyuncs.com",
      'us-west-1': "mt.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("alimt", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary 大文本异步翻译，支持5000-50000字翻译
   *
   * @param request CreateAsyncTranslateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAsyncTranslateResponse
   */
  async createAsyncTranslateWithOptions(request: CreateAsyncTranslateRequest, runtime: $Util.RuntimeOptions): Promise<CreateAsyncTranslateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiType)) {
      body["ApiType"] = request.apiType;
    }

    if (!Util.isUnset(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAsyncTranslate",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAsyncTranslateResponse>(await this.callApi(params, req, runtime), new CreateAsyncTranslateResponse({}));
  }

  /**
   * @summary 大文本异步翻译，支持5000-50000字翻译
   *
   * @param request CreateAsyncTranslateRequest
   * @return CreateAsyncTranslateResponse
   */
  async createAsyncTranslate(request: CreateAsyncTranslateRequest): Promise<CreateAsyncTranslateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAsyncTranslateWithOptions(request, runtime);
  }

  /**
   * @param request CreateDocTranslateTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDocTranslateTaskResponse
   */
  async createDocTranslateTaskWithOptions(request: CreateDocTranslateTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDocTranslateTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.callbackUrl)) {
      body["CallbackUrl"] = request.callbackUrl;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDocTranslateTask",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDocTranslateTaskResponse>(await this.callApi(params, req, runtime), new CreateDocTranslateTaskResponse({}));
  }

  /**
   * @param request CreateDocTranslateTaskRequest
   * @return CreateDocTranslateTaskResponse
   */
  async createDocTranslateTask(request: CreateDocTranslateTaskRequest): Promise<CreateDocTranslateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDocTranslateTaskWithOptions(request, runtime);
  }

  async createDocTranslateTaskAdvance(request: CreateDocTranslateTaskAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDocTranslateTaskResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "alimt",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let createDocTranslateTaskReq = new CreateDocTranslateTaskRequest({ });
    OpenApiUtil.convert(request, createDocTranslateTaskReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      createDocTranslateTaskReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let createDocTranslateTaskResp = await this.createDocTranslateTaskWithOptions(createDocTranslateTaskReq, runtime);
    return createDocTranslateTaskResp;
  }

  /**
   * @param request CreateImageTranslateTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateImageTranslateTaskResponse
   */
  async createImageTranslateTaskWithOptions(request: CreateImageTranslateTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageTranslateTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    if (!Util.isUnset(request.urlList)) {
      body["UrlList"] = request.urlList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateImageTranslateTask",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateImageTranslateTaskResponse>(await this.callApi(params, req, runtime), new CreateImageTranslateTaskResponse({}));
  }

  /**
   * @param request CreateImageTranslateTaskRequest
   * @return CreateImageTranslateTaskResponse
   */
  async createImageTranslateTask(request: CreateImageTranslateTaskRequest): Promise<CreateImageTranslateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageTranslateTaskWithOptions(request, runtime);
  }

  /**
   * @summary 大文本异步翻译，支持5000-50000字翻译
   *
   * @param request GetAsyncTranslateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAsyncTranslateResponse
   */
  async getAsyncTranslateWithOptions(request: GetAsyncTranslateRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncTranslateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncTranslate",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAsyncTranslateResponse>(await this.callApi(params, req, runtime), new GetAsyncTranslateResponse({}));
  }

  /**
   * @summary 大文本异步翻译，支持5000-50000字翻译
   *
   * @param request GetAsyncTranslateRequest
   * @return GetAsyncTranslateResponse
   */
  async getAsyncTranslate(request: GetAsyncTranslateRequest): Promise<GetAsyncTranslateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncTranslateWithOptions(request, runtime);
  }

  /**
   * @param request GetBatchTranslateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetBatchTranslateResponse
   */
  async getBatchTranslateWithOptions(request: GetBatchTranslateRequest, runtime: $Util.RuntimeOptions): Promise<GetBatchTranslateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiType)) {
      body["ApiType"] = request.apiType;
    }

    if (!Util.isUnset(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetBatchTranslate",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBatchTranslateResponse>(await this.callApi(params, req, runtime), new GetBatchTranslateResponse({}));
  }

  /**
   * @param request GetBatchTranslateRequest
   * @return GetBatchTranslateResponse
   */
  async getBatchTranslate(request: GetBatchTranslateRequest): Promise<GetBatchTranslateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBatchTranslateWithOptions(request, runtime);
  }

  /**
   * @summary GetBatchTranslateByVPC
   *
   * @param request GetBatchTranslateByVPCRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetBatchTranslateByVPCResponse
   */
  async getBatchTranslateByVPCWithOptions(request: GetBatchTranslateByVPCRequest, runtime: $Util.RuntimeOptions): Promise<GetBatchTranslateByVPCResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiType)) {
      body["ApiType"] = request.apiType;
    }

    if (!Util.isUnset(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetBatchTranslateByVPC",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBatchTranslateByVPCResponse>(await this.callApi(params, req, runtime), new GetBatchTranslateByVPCResponse({}));
  }

  /**
   * @summary GetBatchTranslateByVPC
   *
   * @param request GetBatchTranslateByVPCRequest
   * @return GetBatchTranslateByVPCResponse
   */
  async getBatchTranslateByVPC(request: GetBatchTranslateByVPCRequest): Promise<GetBatchTranslateByVPCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBatchTranslateByVPCWithOptions(request, runtime);
  }

  /**
   * @summary 语种识别
   *
   * @param request GetDetectLanguageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDetectLanguageResponse
   */
  async getDetectLanguageWithOptions(request: GetDetectLanguageRequest, runtime: $Util.RuntimeOptions): Promise<GetDetectLanguageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDetectLanguage",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDetectLanguageResponse>(await this.callApi(params, req, runtime), new GetDetectLanguageResponse({}));
  }

  /**
   * @summary 语种识别
   *
   * @param request GetDetectLanguageRequest
   * @return GetDetectLanguageResponse
   */
  async getDetectLanguage(request: GetDetectLanguageRequest): Promise<GetDetectLanguageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDetectLanguageWithOptions(request, runtime);
  }

  /**
   * @param request GetDocTranslateTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDocTranslateTaskResponse
   */
  async getDocTranslateTaskWithOptions(request: GetDocTranslateTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetDocTranslateTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDocTranslateTask",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDocTranslateTaskResponse>(await this.callApi(params, req, runtime), new GetDocTranslateTaskResponse({}));
  }

  /**
   * @param request GetDocTranslateTaskRequest
   * @return GetDocTranslateTaskResponse
   */
  async getDocTranslateTask(request: GetDocTranslateTaskRequest): Promise<GetDocTranslateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocTranslateTaskWithOptions(request, runtime);
  }

  /**
   * @param request GetImageDiagnoseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetImageDiagnoseResponse
   */
  async getImageDiagnoseWithOptions(request: GetImageDiagnoseRequest, runtime: $Util.RuntimeOptions): Promise<GetImageDiagnoseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetImageDiagnose",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetImageDiagnoseResponse>(await this.callApi(params, req, runtime), new GetImageDiagnoseResponse({}));
  }

  /**
   * @param request GetImageDiagnoseRequest
   * @return GetImageDiagnoseResponse
   */
  async getImageDiagnose(request: GetImageDiagnoseRequest): Promise<GetImageDiagnoseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageDiagnoseWithOptions(request, runtime);
  }

  /**
   * @param request GetImageTranslateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetImageTranslateResponse
   */
  async getImageTranslateWithOptions(request: GetImageTranslateRequest, runtime: $Util.RuntimeOptions): Promise<GetImageTranslateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetImageTranslate",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetImageTranslateResponse>(await this.callApi(params, req, runtime), new GetImageTranslateResponse({}));
  }

  /**
   * @param request GetImageTranslateRequest
   * @return GetImageTranslateResponse
   */
  async getImageTranslate(request: GetImageTranslateRequest): Promise<GetImageTranslateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageTranslateWithOptions(request, runtime);
  }

  /**
   * @param request GetImageTranslateTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetImageTranslateTaskResponse
   */
  async getImageTranslateTaskWithOptions(request: GetImageTranslateTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetImageTranslateTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetImageTranslateTask",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetImageTranslateTaskResponse>(await this.callApi(params, req, runtime), new GetImageTranslateTaskResponse({}));
  }

  /**
   * @param request GetImageTranslateTaskRequest
   * @return GetImageTranslateTaskResponse
   */
  async getImageTranslateTask(request: GetImageTranslateTaskRequest): Promise<GetImageTranslateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageTranslateTaskWithOptions(request, runtime);
  }

  /**
   * @param request GetTitleDiagnoseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTitleDiagnoseResponse
   */
  async getTitleDiagnoseWithOptions(request: GetTitleDiagnoseRequest, runtime: $Util.RuntimeOptions): Promise<GetTitleDiagnoseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTitleDiagnose",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTitleDiagnoseResponse>(await this.callApi(params, req, runtime), new GetTitleDiagnoseResponse({}));
  }

  /**
   * @param request GetTitleDiagnoseRequest
   * @return GetTitleDiagnoseResponse
   */
  async getTitleDiagnose(request: GetTitleDiagnoseRequest): Promise<GetTitleDiagnoseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTitleDiagnoseWithOptions(request, runtime);
  }

  /**
   * @param request GetTitleGenerateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTitleGenerateResponse
   */
  async getTitleGenerateWithOptions(request: GetTitleGenerateRequest, runtime: $Util.RuntimeOptions): Promise<GetTitleGenerateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attributes)) {
      body["Attributes"] = request.attributes;
    }

    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!Util.isUnset(request.hotWords)) {
      body["HotWords"] = request.hotWords;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTitleGenerate",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTitleGenerateResponse>(await this.callApi(params, req, runtime), new GetTitleGenerateResponse({}));
  }

  /**
   * @param request GetTitleGenerateRequest
   * @return GetTitleGenerateResponse
   */
  async getTitleGenerate(request: GetTitleGenerateRequest): Promise<GetTitleGenerateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTitleGenerateWithOptions(request, runtime);
  }

  /**
   * @param request GetTitleIntelligenceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTitleIntelligenceResponse
   */
  async getTitleIntelligenceWithOptions(request: GetTitleIntelligenceRequest, runtime: $Util.RuntimeOptions): Promise<GetTitleIntelligenceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catLevelThreeId)) {
      body["CatLevelThreeId"] = request.catLevelThreeId;
    }

    if (!Util.isUnset(request.catLevelTwoId)) {
      body["CatLevelTwoId"] = request.catLevelTwoId;
    }

    if (!Util.isUnset(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!Util.isUnset(request.keywords)) {
      body["Keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.platform)) {
      body["Platform"] = request.platform;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTitleIntelligence",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTitleIntelligenceResponse>(await this.callApi(params, req, runtime), new GetTitleIntelligenceResponse({}));
  }

  /**
   * @param request GetTitleIntelligenceRequest
   * @return GetTitleIntelligenceResponse
   */
  async getTitleIntelligence(request: GetTitleIntelligenceRequest): Promise<GetTitleIntelligenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTitleIntelligenceWithOptions(request, runtime);
  }

  /**
   * @summary 获取图片批量翻译结果
   *
   * @param request GetTranslateImageBatchResultRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTranslateImageBatchResultResponse
   */
  async getTranslateImageBatchResultWithOptions(request: GetTranslateImageBatchResultRequest, runtime: $Util.RuntimeOptions): Promise<GetTranslateImageBatchResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTranslateImageBatchResult",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTranslateImageBatchResultResponse>(await this.callApi(params, req, runtime), new GetTranslateImageBatchResultResponse({}));
  }

  /**
   * @summary 获取图片批量翻译结果
   *
   * @param request GetTranslateImageBatchResultRequest
   * @return GetTranslateImageBatchResultResponse
   */
  async getTranslateImageBatchResult(request: GetTranslateImageBatchResultRequest): Promise<GetTranslateImageBatchResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTranslateImageBatchResultWithOptions(request, runtime);
  }

  /**
   * @param request GetTranslateReportRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTranslateReportResponse
   */
  async getTranslateReportWithOptions(request: GetTranslateReportRequest, runtime: $Util.RuntimeOptions): Promise<GetTranslateReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTranslateReport",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTranslateReportResponse>(await this.callApi(params, req, runtime), new GetTranslateReportResponse({}));
  }

  /**
   * @param request GetTranslateReportRequest
   * @return GetTranslateReportResponse
   */
  async getTranslateReport(request: GetTranslateReportRequest): Promise<GetTranslateReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTranslateReportWithOptions(request, runtime);
  }

  /**
   * @summary 开通服务
   *
   * @param request OpenAlimtServiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return OpenAlimtServiceResponse
   */
  async openAlimtServiceWithOptions(request: OpenAlimtServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenAlimtServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenAlimtService",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenAlimtServiceResponse>(await this.callApi(params, req, runtime), new OpenAlimtServiceResponse({}));
  }

  /**
   * @summary 开通服务
   *
   * @param request OpenAlimtServiceRequest
   * @return OpenAlimtServiceResponse
   */
  async openAlimtService(request: OpenAlimtServiceRequest): Promise<OpenAlimtServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openAlimtServiceWithOptions(request, runtime);
  }

  /**
   * @param request TranslateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TranslateResponse
   */
  async translateWithOptions(request: TranslateRequest, runtime: $Util.RuntimeOptions): Promise<TranslateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.context)) {
      query["Context"] = request.context;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Translate",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TranslateResponse>(await this.callApi(params, req, runtime), new TranslateResponse({}));
  }

  /**
   * @param request TranslateRequest
   * @return TranslateResponse
   */
  async translate(request: TranslateRequest): Promise<TranslateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.translateWithOptions(request, runtime);
  }

  /**
   * @param request TranslateCertificateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TranslateCertificateResponse
   */
  async translateCertificateWithOptions(request: TranslateCertificateRequest, runtime: $Util.RuntimeOptions): Promise<TranslateCertificateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certificateType)) {
      body["CertificateType"] = request.certificateType;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.resultType)) {
      body["ResultType"] = request.resultType;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TranslateCertificate",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TranslateCertificateResponse>(await this.callApi(params, req, runtime), new TranslateCertificateResponse({}));
  }

  /**
   * @param request TranslateCertificateRequest
   * @return TranslateCertificateResponse
   */
  async translateCertificate(request: TranslateCertificateRequest): Promise<TranslateCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.translateCertificateWithOptions(request, runtime);
  }

  async translateCertificateAdvance(request: TranslateCertificateAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<TranslateCertificateResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "alimt",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let translateCertificateReq = new TranslateCertificateRequest({ });
    OpenApiUtil.convert(request, translateCertificateReq);
    if (!Util.isUnset(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      translateCertificateReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let translateCertificateResp = await this.translateCertificateWithOptions(translateCertificateReq, runtime);
    return translateCertificateResp;
  }

  /**
   * @deprecated OpenAPI TranslateECommerce is deprecated, please use alimt::2018-10-12::Translate instead.
   *
   * @param request TranslateECommerceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TranslateECommerceResponse
   */
  // Deprecated
  async translateECommerceWithOptions(request: TranslateECommerceRequest, runtime: $Util.RuntimeOptions): Promise<TranslateECommerceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.context)) {
      query["Context"] = request.context;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TranslateECommerce",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TranslateECommerceResponse>(await this.callApi(params, req, runtime), new TranslateECommerceResponse({}));
  }

  /**
   * @deprecated OpenAPI TranslateECommerce is deprecated, please use alimt::2018-10-12::Translate instead.
   *
   * @param request TranslateECommerceRequest
   * @return TranslateECommerceResponse
   */
  // Deprecated
  async translateECommerce(request: TranslateECommerceRequest): Promise<TranslateECommerceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.translateECommerceWithOptions(request, runtime);
  }

  /**
   * @param request TranslateGeneralRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TranslateGeneralResponse
   */
  async translateGeneralWithOptions(request: TranslateGeneralRequest, runtime: $Util.RuntimeOptions): Promise<TranslateGeneralResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.context)) {
      query["Context"] = request.context;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TranslateGeneral",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TranslateGeneralResponse>(await this.callApi(params, req, runtime), new TranslateGeneralResponse({}));
  }

  /**
   * @param request TranslateGeneralRequest
   * @return TranslateGeneralResponse
   */
  async translateGeneral(request: TranslateGeneralRequest): Promise<TranslateGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.translateGeneralWithOptions(request, runtime);
  }

  /**
   * @summary TranslateGeneralVpc
   *
   * @param request TranslateGeneralVpcRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TranslateGeneralVpcResponse
   */
  async translateGeneralVpcWithOptions(request: TranslateGeneralVpcRequest, runtime: $Util.RuntimeOptions): Promise<TranslateGeneralVpcResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.context)) {
      query["Context"] = request.context;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.sourceText)) {
      body["SourceText"] = request.sourceText;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TranslateGeneralVpc",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TranslateGeneralVpcResponse>(await this.callApi(params, req, runtime), new TranslateGeneralVpcResponse({}));
  }

  /**
   * @summary TranslateGeneralVpc
   *
   * @param request TranslateGeneralVpcRequest
   * @return TranslateGeneralVpcResponse
   */
  async translateGeneralVpc(request: TranslateGeneralVpcRequest): Promise<TranslateGeneralVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.translateGeneralVpcWithOptions(request, runtime);
  }

  /**
   * @summary 公有云图片翻译产品API
   *
   * @param request TranslateImageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TranslateImageResponse
   */
  async translateImageWithOptions(request: TranslateImageRequest, runtime: $Util.RuntimeOptions): Promise<TranslateImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ext)) {
      body["Ext"] = request.ext;
    }

    if (!Util.isUnset(request.field)) {
      body["Field"] = request.field;
    }

    if (!Util.isUnset(request.imageBase64)) {
      body["ImageBase64"] = request.imageBase64;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TranslateImage",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TranslateImageResponse>(await this.callApi(params, req, runtime), new TranslateImageResponse({}));
  }

  /**
   * @summary 公有云图片翻译产品API
   *
   * @param request TranslateImageRequest
   * @return TranslateImageResponse
   */
  async translateImage(request: TranslateImageRequest): Promise<TranslateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.translateImageWithOptions(request, runtime);
  }

  /**
   * @summary 批量图片翻译接口
   *
   * @param request TranslateImageBatchRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TranslateImageBatchResponse
   */
  async translateImageBatchWithOptions(request: TranslateImageBatchRequest, runtime: $Util.RuntimeOptions): Promise<TranslateImageBatchResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customTaskId)) {
      body["CustomTaskId"] = request.customTaskId;
    }

    if (!Util.isUnset(request.ext)) {
      body["Ext"] = request.ext;
    }

    if (!Util.isUnset(request.field)) {
      body["Field"] = request.field;
    }

    if (!Util.isUnset(request.imageUrls)) {
      body["ImageUrls"] = request.imageUrls;
    }

    if (!Util.isUnset(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!Util.isUnset(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TranslateImageBatch",
      version: "2018-10-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TranslateImageBatchResponse>(await this.callApi(params, req, runtime), new TranslateImageBatchResponse({}));
  }

  /**
   * @summary 批量图片翻译接口
   *
   * @param request TranslateImageBatchRequest
   * @return TranslateImageBatchResponse
   */
  async translateImageBatch(request: TranslateImageBatchRequest): Promise<TranslateImageBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.translateImageBatchWithOptions(request, runtime);
  }

}
