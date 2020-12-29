// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import RPC, * as $RPC from '@alicloud/rpc-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class CreateDocTranslateTaskRequest extends $tea.Model {
  sourceLanguage?: string;
  targetLanguage?: string;
  fileUrl?: string;
  scene?: string;
  callbackUrl?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      fileUrl: 'FileUrl',
      scene: 'Scene',
      callbackUrl: 'CallbackUrl',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceLanguage: 'string',
      targetLanguage: 'string',
      fileUrl: 'string',
      scene: 'string',
      callbackUrl: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocTranslateTaskAdvanceRequest extends $tea.Model {
  fileUrlObject: Readable;
  sourceLanguage?: string;
  targetLanguage?: string;
  scene?: string;
  callbackUrl?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrlObject: 'FileUrlObject',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      scene: 'Scene',
      callbackUrl: 'CallbackUrl',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrlObject: 'Readable',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      scene: 'string',
      callbackUrl: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocTranslateTaskResponseBody extends $tea.Model {
  status?: string;
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      taskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocTranslateTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDocTranslateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDocTranslateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageTranslateTaskRequest extends $tea.Model {
  urlList?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  extra?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      extra: 'Extra',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      extra: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageTranslateTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateImageTranslateTaskResponseBodyData;
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
      data: CreateImageTranslateTaskResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageTranslateTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateImageTranslateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateImageTranslateTaskResponseBody,
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
  requestId?: string;
  detectedLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      detectedLanguage: 'DetectedLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      detectedLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetectLanguageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDetectLanguageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  status?: string;
  translateErrorMessage?: string;
  taskId?: string;
  requestId?: string;
  pageCount?: number;
  translateFileUrl?: string;
  translateErrorCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      translateErrorMessage: 'TranslateErrorMessage',
      taskId: 'TaskId',
      requestId: 'RequestId',
      pageCount: 'PageCount',
      translateFileUrl: 'TranslateFileUrl',
      translateErrorCode: 'TranslateErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      translateErrorMessage: 'string',
      taskId: 'string',
      requestId: 'string',
      pageCount: 'number',
      translateFileUrl: 'string',
      translateErrorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocTranslateTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDocTranslateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDocTranslateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDiagnoseRequest extends $tea.Model {
  url?: string;
  extra?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      extra: 'Extra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      extra: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDiagnoseResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetImageDiagnoseResponseBodyData;
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
      data: GetImageDiagnoseResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDiagnoseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetImageDiagnoseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetImageDiagnoseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateRequest extends $tea.Model {
  url?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  extra?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      extra: 'Extra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      extra: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetImageTranslateResponseBodyData;
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
      data: GetImageTranslateResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetImageTranslateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  message?: string;
  requestId?: string;
  data?: GetImageTranslateTaskResponseBodyData;
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
      data: GetImageTranslateTaskResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetImageTranslateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetImageTranslateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleDiagnoseRequest extends $tea.Model {
  title?: string;
  language?: string;
  platform?: string;
  categoryId?: string;
  extra?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      language: 'Language',
      platform: 'Platform',
      categoryId: 'CategoryId',
      extra: 'Extra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      language: 'string',
      platform: 'string',
      categoryId: 'string',
      extra: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleDiagnoseResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetTitleDiagnoseResponseBodyData;
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
      data: GetTitleDiagnoseResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleDiagnoseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTitleDiagnoseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTitleDiagnoseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleGenerateRequest extends $tea.Model {
  title?: string;
  language?: string;
  platform?: string;
  categoryId?: string;
  hotWords?: string;
  attributes?: string;
  extra?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      language: 'Language',
      platform: 'Platform',
      categoryId: 'CategoryId',
      hotWords: 'HotWords',
      attributes: 'Attributes',
      extra: 'Extra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      language: 'string',
      platform: 'string',
      categoryId: 'string',
      hotWords: 'string',
      attributes: 'string',
      extra: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleGenerateResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetTitleGenerateResponseBodyData;
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
      data: GetTitleGenerateResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleGenerateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTitleGenerateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTitleGenerateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleIntelligenceRequest extends $tea.Model {
  platform?: string;
  extra?: string;
  catLevelThreeId?: number;
  catLevelTwoId?: number;
  keywords?: string;
  static names(): { [key: string]: string } {
    return {
      platform: 'Platform',
      extra: 'Extra',
      catLevelThreeId: 'CatLevelThreeId',
      catLevelTwoId: 'CatLevelTwoId',
      keywords: 'Keywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platform: 'string',
      extra: 'string',
      catLevelThreeId: 'number',
      catLevelTwoId: 'number',
      keywords: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleIntelligenceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetTitleIntelligenceResponseBodyData;
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
      data: GetTitleIntelligenceResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleIntelligenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTitleIntelligenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTitleIntelligenceResponseBody,
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
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAlimtServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenAlimtServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenAlimtServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateRequest extends $tea.Model {
  formatType?: string;
  targetLanguage?: string;
  sourceLanguage?: string;
  sourceText?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      formatType: 'FormatType',
      targetLanguage: 'TargetLanguage',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatType: 'string',
      targetLanguage: 'string',
      sourceLanguage: 'string',
      sourceText: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: TranslateResponseBodyData;
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
      data: TranslateResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TranslateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TranslateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateCertificateRequest extends $tea.Model {
  sourceLanguage?: string;
  targetLanguage?: string;
  imageUrl?: string;
  certificateType?: string;
  resultType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      imageUrl: 'ImageUrl',
      certificateType: 'CertificateType',
      resultType: 'ResultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceLanguage: 'string',
      targetLanguage: 'string',
      imageUrl: 'string',
      certificateType: 'string',
      resultType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateCertificateAdvanceRequest extends $tea.Model {
  imageUrlObject: Readable;
  sourceLanguage?: string;
  targetLanguage?: string;
  certificateType?: string;
  resultType?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrlObject',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      certificateType: 'CertificateType',
      resultType: 'ResultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      certificateType: 'string',
      resultType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateCertificateResponseBody extends $tea.Model {
  requestId?: string;
  data?: TranslateCertificateResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: TranslateCertificateResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TranslateCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TranslateCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateECommerceRequest extends $tea.Model {
  formatType?: string;
  targetLanguage?: string;
  sourceLanguage?: string;
  sourceText?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      formatType: 'FormatType',
      targetLanguage: 'TargetLanguage',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatType: 'string',
      targetLanguage: 'string',
      sourceLanguage: 'string',
      sourceText: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateECommerceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: TranslateECommerceResponseBodyData;
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
      data: TranslateECommerceResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateECommerceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TranslateECommerceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TranslateECommerceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralRequest extends $tea.Model {
  formatType?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  sourceText?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      formatType: 'FormatType',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      sourceText: 'SourceText',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatType: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      sourceText: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: TranslateGeneralResponseBodyData;
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
      data: TranslateGeneralResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TranslateGeneralResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TranslateGeneralResponseBody,
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
  url?: string;
  orc?: string;
  pictureEditor?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      orc: 'Orc',
      pictureEditor: 'PictureEditor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      orc: 'string',
      pictureEditor: 'string',
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
  duplicateWords?: string;
  containCoreClasses?: string;
  wordCount?: string;
  languageQualityScore?: string;
  allUppercaseWords?: string;
  overLengthLimit?: string;
  disableWords?: string;
  noFirstUppercaseList?: string;
  totalScore?: string;
  wordSpelledCorrectError?: string;
  static names(): { [key: string]: string } {
    return {
      duplicateWords: 'DuplicateWords',
      containCoreClasses: 'ContainCoreClasses',
      wordCount: 'WordCount',
      languageQualityScore: 'LanguageQualityScore',
      allUppercaseWords: 'AllUppercaseWords',
      overLengthLimit: 'OverLengthLimit',
      disableWords: 'DisableWords',
      noFirstUppercaseList: 'NoFirstUppercaseList',
      totalScore: 'TotalScore',
      wordSpelledCorrectError: 'WordSpelledCorrectError',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplicateWords: 'string',
      containCoreClasses: 'string',
      wordCount: 'string',
      languageQualityScore: 'string',
      allUppercaseWords: 'string',
      overLengthLimit: 'string',
      disableWords: 'string',
      noFirstUppercaseList: 'string',
      totalScore: 'string',
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

export class TranslateResponseBodyData extends $tea.Model {
  wordCount?: string;
  translated?: string;
  static names(): { [key: string]: string } {
    return {
      wordCount: 'WordCount',
      translated: 'Translated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wordCount: 'string',
      translated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateCertificateResponseBodyDataTranslatedValues extends $tea.Model {
  key?: string;
  value?: string;
  valueTranslation?: string;
  keyTranslation?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueTranslation: 'ValueTranslation',
      keyTranslation: 'KeyTranslation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueTranslation: 'string',
      keyTranslation: 'string',
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
  wordCount?: string;
  translated?: string;
  static names(): { [key: string]: string } {
    return {
      wordCount: 'WordCount',
      translated: 'Translated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wordCount: 'string',
      translated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateGeneralResponseBodyData extends $tea.Model {
  wordCount?: string;
  translated?: string;
  static names(): { [key: string]: string } {
    return {
      wordCount: 'WordCount',
      translated: 'Translated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wordCount: 'string',
      translated: 'string',
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

  async createDocTranslateTaskWithOptions(request: CreateDocTranslateTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDocTranslateTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDocTranslateTaskResponse>(await this.doRPCRequest("CreateDocTranslateTask", "2018-10-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDocTranslateTaskResponse({}));
  }

  async createDocTranslateTask(request: CreateDocTranslateTaskRequest): Promise<CreateDocTranslateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDocTranslateTaskWithOptions(request, runtime);
  }

  async createDocTranslateTaskAdvance(request: CreateDocTranslateTaskAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDocTranslateTaskResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
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
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let createDocTranslateTaskReq = new CreateDocTranslateTaskRequest({ });
    OpenApiUtil.convert(request, createDocTranslateTaskReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.fileUrlObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    createDocTranslateTaskReq.fileUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let createDocTranslateTaskResp = await this.createDocTranslateTaskWithOptions(createDocTranslateTaskReq, runtime);
    return createDocTranslateTaskResp;
  }

  async createImageTranslateTaskWithOptions(request: CreateImageTranslateTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageTranslateTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateImageTranslateTaskResponse>(await this.doRPCRequest("CreateImageTranslateTask", "2018-10-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateImageTranslateTaskResponse({}));
  }

  async createImageTranslateTask(request: CreateImageTranslateTaskRequest): Promise<CreateImageTranslateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageTranslateTaskWithOptions(request, runtime);
  }

  async getDetectLanguageWithOptions(request: GetDetectLanguageRequest, runtime: $Util.RuntimeOptions): Promise<GetDetectLanguageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDetectLanguageResponse>(await this.doRPCRequest("GetDetectLanguage", "2018-10-12", "HTTPS", "POST", "AK", "json", req, runtime), new GetDetectLanguageResponse({}));
  }

  async getDetectLanguage(request: GetDetectLanguageRequest): Promise<GetDetectLanguageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDetectLanguageWithOptions(request, runtime);
  }

  async getDocTranslateTaskWithOptions(request: GetDocTranslateTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetDocTranslateTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDocTranslateTaskResponse>(await this.doRPCRequest("GetDocTranslateTask", "2018-10-12", "HTTPS", "GET", "AK", "json", req, runtime), new GetDocTranslateTaskResponse({}));
  }

  async getDocTranslateTask(request: GetDocTranslateTaskRequest): Promise<GetDocTranslateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocTranslateTaskWithOptions(request, runtime);
  }

  async getImageDiagnoseWithOptions(request: GetImageDiagnoseRequest, runtime: $Util.RuntimeOptions): Promise<GetImageDiagnoseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetImageDiagnoseResponse>(await this.doRPCRequest("GetImageDiagnose", "2018-10-12", "HTTPS", "POST", "AK", "json", req, runtime), new GetImageDiagnoseResponse({}));
  }

  async getImageDiagnose(request: GetImageDiagnoseRequest): Promise<GetImageDiagnoseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageDiagnoseWithOptions(request, runtime);
  }

  async getImageTranslateWithOptions(request: GetImageTranslateRequest, runtime: $Util.RuntimeOptions): Promise<GetImageTranslateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetImageTranslateResponse>(await this.doRPCRequest("GetImageTranslate", "2018-10-12", "HTTPS", "POST", "AK", "json", req, runtime), new GetImageTranslateResponse({}));
  }

  async getImageTranslate(request: GetImageTranslateRequest): Promise<GetImageTranslateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageTranslateWithOptions(request, runtime);
  }

  async getImageTranslateTaskWithOptions(request: GetImageTranslateTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetImageTranslateTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetImageTranslateTaskResponse>(await this.doRPCRequest("GetImageTranslateTask", "2018-10-12", "HTTPS", "POST", "AK", "json", req, runtime), new GetImageTranslateTaskResponse({}));
  }

  async getImageTranslateTask(request: GetImageTranslateTaskRequest): Promise<GetImageTranslateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageTranslateTaskWithOptions(request, runtime);
  }

  async getTitleDiagnoseWithOptions(request: GetTitleDiagnoseRequest, runtime: $Util.RuntimeOptions): Promise<GetTitleDiagnoseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTitleDiagnoseResponse>(await this.doRPCRequest("GetTitleDiagnose", "2018-10-12", "HTTPS", "POST", "AK", "json", req, runtime), new GetTitleDiagnoseResponse({}));
  }

  async getTitleDiagnose(request: GetTitleDiagnoseRequest): Promise<GetTitleDiagnoseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTitleDiagnoseWithOptions(request, runtime);
  }

  async getTitleGenerateWithOptions(request: GetTitleGenerateRequest, runtime: $Util.RuntimeOptions): Promise<GetTitleGenerateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTitleGenerateResponse>(await this.doRPCRequest("GetTitleGenerate", "2018-10-12", "HTTPS", "POST", "AK", "json", req, runtime), new GetTitleGenerateResponse({}));
  }

  async getTitleGenerate(request: GetTitleGenerateRequest): Promise<GetTitleGenerateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTitleGenerateWithOptions(request, runtime);
  }

  async getTitleIntelligenceWithOptions(request: GetTitleIntelligenceRequest, runtime: $Util.RuntimeOptions): Promise<GetTitleIntelligenceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTitleIntelligenceResponse>(await this.doRPCRequest("GetTitleIntelligence", "2018-10-12", "HTTPS", "POST", "AK", "json", req, runtime), new GetTitleIntelligenceResponse({}));
  }

  async getTitleIntelligence(request: GetTitleIntelligenceRequest): Promise<GetTitleIntelligenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTitleIntelligenceWithOptions(request, runtime);
  }

  async openAlimtServiceWithOptions(request: OpenAlimtServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenAlimtServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenAlimtServiceResponse>(await this.doRPCRequest("OpenAlimtService", "2018-10-12", "HTTPS", "POST", "AK", "json", req, runtime), new OpenAlimtServiceResponse({}));
  }

  async openAlimtService(request: OpenAlimtServiceRequest): Promise<OpenAlimtServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openAlimtServiceWithOptions(request, runtime);
  }

  async translateWithOptions(request: TranslateRequest, runtime: $Util.RuntimeOptions): Promise<TranslateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TranslateResponse>(await this.doRPCRequest("Translate", "2018-10-12", "HTTPS", "POST", "AK", "json", req, runtime), new TranslateResponse({}));
  }

  async translate(request: TranslateRequest): Promise<TranslateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.translateWithOptions(request, runtime);
  }

  async translateCertificateWithOptions(request: TranslateCertificateRequest, runtime: $Util.RuntimeOptions): Promise<TranslateCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TranslateCertificateResponse>(await this.doRPCRequest("TranslateCertificate", "2018-10-12", "HTTPS", "POST", "AK", "json", req, runtime), new TranslateCertificateResponse({}));
  }

  async translateCertificate(request: TranslateCertificateRequest): Promise<TranslateCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.translateCertificateWithOptions(request, runtime);
  }

  async translateCertificateAdvance(request: TranslateCertificateAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<TranslateCertificateResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
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
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let translateCertificateReq = new TranslateCertificateRequest({ });
    OpenApiUtil.convert(request, translateCertificateReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.imageUrlObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    translateCertificateReq.imageUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let translateCertificateResp = await this.translateCertificateWithOptions(translateCertificateReq, runtime);
    return translateCertificateResp;
  }

  async translateECommerceWithOptions(request: TranslateECommerceRequest, runtime: $Util.RuntimeOptions): Promise<TranslateECommerceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TranslateECommerceResponse>(await this.doRPCRequest("TranslateECommerce", "2018-10-12", "HTTPS", "POST", "AK", "json", req, runtime), new TranslateECommerceResponse({}));
  }

  async translateECommerce(request: TranslateECommerceRequest): Promise<TranslateECommerceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.translateECommerceWithOptions(request, runtime);
  }

  async translateGeneralWithOptions(request: TranslateGeneralRequest, runtime: $Util.RuntimeOptions): Promise<TranslateGeneralResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TranslateGeneralResponse>(await this.doRPCRequest("TranslateGeneral", "2018-10-12", "HTTPS", "POST", "AK", "json", req, runtime), new TranslateGeneralResponse({}));
  }

  async translateGeneral(request: TranslateGeneralRequest): Promise<TranslateGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.translateGeneralWithOptions(request, runtime);
  }

}
