// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AnchorResponse extends $tea.Model {
  anchorId?: string;
  anchorMaterialName?: string;
  anchorType?: string;
  coverHeight?: number;
  coverRate?: string;
  coverThumbnailUrl?: string;
  coverUrl?: string;
  coverWeight?: number;
  digitalHumanType?: string;
  gender?: string;
  resourceTypeDesc?: string;
  status?: string;
  useScene?: string;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'anchorId',
      anchorMaterialName: 'anchorMaterialName',
      anchorType: 'anchorType',
      coverHeight: 'coverHeight',
      coverRate: 'coverRate',
      coverThumbnailUrl: 'coverThumbnailUrl',
      coverUrl: 'coverUrl',
      coverWeight: 'coverWeight',
      digitalHumanType: 'digitalHumanType',
      gender: 'gender',
      resourceTypeDesc: 'resourceTypeDesc',
      status: 'status',
      useScene: 'useScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      anchorMaterialName: 'string',
      anchorType: 'string',
      coverHeight: 'number',
      coverRate: 'string',
      coverThumbnailUrl: 'string',
      coverUrl: 'string',
      coverWeight: 'number',
      digitalHumanType: 'string',
      gender: 'string',
      resourceTypeDesc: 'string',
      status: 'string',
      useScene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadTokenResult extends $tea.Model {
  requestId?: string;
  uploadInfo?: UploadInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      uploadInfo: 'uploadInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadInfo: UploadInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Illustration extends $tea.Model {
  illustrationId?: number;
  oss?: string;
  static names(): { [key: string]: string } {
    return {
      illustrationId: 'illustrationId',
      oss: 'oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      illustrationId: 'number',
      oss: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IllustrationResult extends $tea.Model {
  illustration?: Illustration;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      illustration: 'illustration',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      illustration: Illustration,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IllustrationTask extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  illustrationIds?: number[];
  illustrationTaskId?: number;
  taskStatus?: string;
  textId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      illustrationIds: 'illustrationIds',
      illustrationTaskId: 'illustrationTaskId',
      taskStatus: 'taskStatus',
      textId: 'textId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      illustrationIds: { 'type': 'array', 'itemType': 'number' },
      illustrationTaskId: 'number',
      taskStatus: 'string',
      textId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IllustrationTaskCreateCmd extends $tea.Model {
  backgroundType?: number;
  dstHeight?: number;
  dstWidth?: number;
  idempotentId?: string;
  nums?: number;
  ossPaths?: string[];
  stickerText?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundType: 'backgroundType',
      dstHeight: 'dstHeight',
      dstWidth: 'dstWidth',
      idempotentId: 'idempotentId',
      nums: 'nums',
      ossPaths: 'ossPaths',
      stickerText: 'stickerText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundType: 'number',
      dstHeight: 'number',
      dstWidth: 'number',
      idempotentId: 'string',
      nums: 'number',
      ossPaths: { 'type': 'array', 'itemType': 'string' },
      stickerText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IllustrationTaskResult extends $tea.Model {
  illustrationTask?: IllustrationTask;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      illustrationTask: 'illustrationTask',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      illustrationTask: IllustrationTask,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReferenceTag extends $tea.Model {
  referenceContent?: string;
  referenceTitle?: string;
  static names(): { [key: string]: string } {
    return {
      referenceContent: 'referenceContent',
      referenceTitle: 'referenceTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceContent: 'string',
      referenceTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Text extends $tea.Model {
  agentId?: string;
  agentName?: string;
  desc?: string;
  gmtCreate?: string;
  gmtModified?: string;
  illustrationTaskIdList?: number[];
  publishStatus?: string;
  textContent?: string;
  textId?: number;
  textIllustrationTag?: boolean;
  textModeType?: string;
  textStatus?: string;
  textStyleType?: string;
  textTaskId?: number;
  textThemes?: string[];
  title?: string;
  userNameCreate?: string;
  userNameModified?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentName: 'agentName',
      desc: 'desc',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      illustrationTaskIdList: 'illustrationTaskIdList',
      publishStatus: 'publishStatus',
      textContent: 'textContent',
      textId: 'textId',
      textIllustrationTag: 'textIllustrationTag',
      textModeType: 'textModeType',
      textStatus: 'textStatus',
      textStyleType: 'textStyleType',
      textTaskId: 'textTaskId',
      textThemes: 'textThemes',
      title: 'title',
      userNameCreate: 'userNameCreate',
      userNameModified: 'userNameModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      desc: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      illustrationTaskIdList: { 'type': 'array', 'itemType': 'number' },
      publishStatus: 'string',
      textContent: 'string',
      textId: 'number',
      textIllustrationTag: 'boolean',
      textModeType: 'string',
      textStatus: 'string',
      textStyleType: 'string',
      textTaskId: 'number',
      textThemes: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      userNameCreate: 'string',
      userNameModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextQueryResult extends $tea.Model {
  requestId?: string;
  texts?: Text[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      texts: 'texts',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      texts: { 'type': 'array', 'itemType': Text },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextResult extends $tea.Model {
  requestId?: string;
  text?: Text;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      text: Text,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextTask extends $tea.Model {
  agentId?: string;
  agentName?: string;
  contentRequirement?: string;
  gmtCreate?: string;
  gmtModified?: string;
  introduction?: string;
  nums?: number;
  point?: string;
  referenceTag?: ReferenceTag;
  relatedRagId?: number;
  style?: string;
  target?: string;
  textIds?: number[];
  textModeType?: string;
  textTaskId?: number;
  textTaskStatus?: string;
  texts?: Text[];
  theme?: string;
  themeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentName: 'agentName',
      contentRequirement: 'contentRequirement',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      introduction: 'introduction',
      nums: 'nums',
      point: 'point',
      referenceTag: 'referenceTag',
      relatedRagId: 'relatedRagId',
      style: 'style',
      target: 'target',
      textIds: 'textIds',
      textModeType: 'textModeType',
      textTaskId: 'textTaskId',
      textTaskStatus: 'textTaskStatus',
      texts: 'texts',
      theme: 'theme',
      themeDesc: 'themeDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      contentRequirement: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      introduction: 'string',
      nums: 'number',
      point: 'string',
      referenceTag: ReferenceTag,
      relatedRagId: 'number',
      style: 'string',
      target: 'string',
      textIds: { 'type': 'array', 'itemType': 'number' },
      textModeType: 'string',
      textTaskId: 'number',
      textTaskStatus: 'string',
      texts: { 'type': 'array', 'itemType': Text },
      theme: 'string',
      themeDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextTaskCreateCmd extends $tea.Model {
  agentId?: string;
  contentRequirement?: string;
  idempotentId?: string;
  industry?: string;
  introduction?: string;
  number?: number;
  point?: string;
  referenceTag?: ReferenceTag;
  relatedRagIds?: number[];
  style?: string;
  target?: string;
  textModeType?: string;
  theme?: string;
  themes?: string[];
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      contentRequirement: 'contentRequirement',
      idempotentId: 'idempotentId',
      industry: 'industry',
      introduction: 'introduction',
      number: 'number',
      point: 'point',
      referenceTag: 'referenceTag',
      relatedRagIds: 'relatedRagIds',
      style: 'style',
      target: 'target',
      textModeType: 'textModeType',
      theme: 'theme',
      themes: 'themes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      contentRequirement: 'string',
      idempotentId: 'string',
      industry: 'string',
      introduction: 'string',
      number: 'number',
      point: 'string',
      referenceTag: ReferenceTag,
      relatedRagIds: { 'type': 'array', 'itemType': 'number' },
      style: 'string',
      target: 'string',
      textModeType: 'string',
      theme: 'string',
      themes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextTaskResult extends $tea.Model {
  textTask?: TextTask;
  static names(): { [key: string]: string } {
    return {
      textTask: 'textTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textTask: TextTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextTheme extends $tea.Model {
  desc?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextThemeListResult extends $tea.Model {
  requestId?: string;
  textThemeList?: TextTheme[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      textThemeList: 'textThemeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      textThemeList: { 'type': 'array', 'itemType': TextTheme },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadInfo extends $tea.Model {
  accessId?: string;
  host?: string;
  key?: string;
  policy?: string;
  policySignature?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'accessId',
      host: 'host',
      key: 'key',
      policy: 'policy',
      policySignature: 'policySignature',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      host: 'string',
      key: 'string',
      policy: 'string',
      policySignature: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModelResponse extends $tea.Model {
  resourceTypeDesc?: string;
  useScene?: string;
  voiceDesc?: string;
  voiceGender?: string;
  voiceId?: number;
  voiceLanguage?: string;
  voiceModel?: string;
  voiceName?: string;
  voiceType?: string;
  voiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      resourceTypeDesc: 'resourceTypeDesc',
      useScene: 'useScene',
      voiceDesc: 'voiceDesc',
      voiceGender: 'voiceGender',
      voiceId: 'voiceId',
      voiceLanguage: 'voiceLanguage',
      voiceModel: 'voiceModel',
      voiceName: 'voiceName',
      voiceType: 'voiceType',
      voiceUrl: 'voiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypeDesc: 'string',
      useScene: 'string',
      voiceDesc: 'string',
      voiceGender: 'string',
      voiceId: 'number',
      voiceLanguage: 'string',
      voiceModel: 'string',
      voiceName: 'string',
      voiceType: 'string',
      voiceUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTextFeedbackRequest extends $tea.Model {
  content?: string;
  quality?: number;
  textId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      quality: 'quality',
      textId: 'textId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      quality: 'number',
      textId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTextFeedbackResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTextFeedbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTextFeedbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddTextFeedbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSessionRequest extends $tea.Model {
  projectId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSessionResponseBody extends $tea.Model {
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSessionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIllustrationTaskRequest extends $tea.Model {
  body?: IllustrationTaskCreateCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: IllustrationTaskCreateCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIllustrationTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IllustrationTaskResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IllustrationTaskResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextTaskRequest extends $tea.Model {
  body?: TextTaskCreateCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: TextTaskCreateCmd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextTaskResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TextTaskResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIllustrationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IllustrationResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IllustrationResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIllustrationTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IllustrationTaskResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IllustrationTaskResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadTokenRequest extends $tea.Model {
  fileName?: string;
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileType: 'fileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOssUploadTokenResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOssUploadTokenResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectTaskRequest extends $tea.Model {
  idempotentId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      idempotentId: 'IdempotentId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idempotentId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectTaskResponseBody extends $tea.Model {
  errorMsg?: string;
  requestId?: string;
  status?: string;
  videoDownloadUrl?: string;
  videoDuration?: number;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      status: 'status',
      videoDownloadUrl: 'videoDownloadUrl',
      videoDuration: 'videoDuration',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      status: 'string',
      videoDownloadUrl: 'string',
      videoDuration: 'number',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TextResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextTaskResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TextTaskResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextTemplateRequest extends $tea.Model {
  industry?: string;
  static names(): { [key: string]: string } {
    return {
      industry: 'industry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextTemplateResponseBody extends $tea.Model {
  availableIndustry?: GetTextTemplateResponseBodyAvailableIndustry;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIndustry: 'availableIndustry',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIndustry: GetTextTemplateResponseBodyAvailableIndustry,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTextTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTextTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnchorRequest extends $tea.Model {
  anchorType?: string;
  coverRate?: string;
  digitalHumanType?: string;
  pageNumber?: number;
  pageSize?: number;
  useScene?: string;
  static names(): { [key: string]: string } {
    return {
      anchorType: 'anchorType',
      coverRate: 'coverRate',
      digitalHumanType: 'digitalHumanType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      useScene: 'useScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorType: 'string',
      coverRate: 'string',
      digitalHumanType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      useScene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnchorResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  errorMessage?: string;
  list?: AnchorResponse[];
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      list: 'list',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      list: { 'type': 'array', 'itemType': AnchorResponse },
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnchorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAnchorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAnchorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextThemesRequest extends $tea.Model {
  industry?: string;
  static names(): { [key: string]: string } {
    return {
      industry: 'industry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextThemesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextThemeListResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TextThemeListResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextsRequest extends $tea.Model {
  generationSource?: string;
  industry?: string;
  pageNumber?: number;
  pageSize?: number;
  publishStatus?: string;
  textStyleType?: string;
  textTheme?: string;
  static names(): { [key: string]: string } {
    return {
      generationSource: 'generationSource',
      industry: 'industry',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      publishStatus: 'publishStatus',
      textStyleType: 'textStyleType',
      textTheme: 'textTheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generationSource: 'string',
      industry: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      publishStatus: 'string',
      textStyleType: 'string',
      textTheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextQueryResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TextQueryResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceModelsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  useScene?: string;
  voiceType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      useScene: 'useScene',
      voiceType: 'voiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      useScene: 'string',
      voiceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceModelsResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  errorMessage?: string;
  list?: VoiceModelResponse[];
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      list: 'list',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      list: { 'type': 'array', 'itemType': VoiceModelResponse },
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceModelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVoiceModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVoiceModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarProjectRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
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

export class QueryAvatarProjectResponseBody extends $tea.Model {
  agentId?: string;
  errorMsg?: string;
  projectName?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      errorMsg: 'errorMsg',
      projectName: 'projectName',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      errorMsg: 'string',
      projectName: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAvatarProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAvatarProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarResourceRequest extends $tea.Model {
  idempotentId?: string;
  static names(): { [key: string]: string } {
    return {
      idempotentId: 'idempotentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idempotentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarResourceResponseBody extends $tea.Model {
  queryResourceInfoList?: QueryAvatarResourceResponseBodyQueryResourceInfoList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryResourceInfoList: 'queryResourceInfoList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResourceInfoList: { 'type': 'array', 'itemType': QueryAvatarResourceResponseBodyQueryResourceInfoList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAvatarResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAvatarResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectResourceRequest extends $tea.Model {
  idempotentId?: string;
  static names(): { [key: string]: string } {
    return {
      idempotentId: 'idempotentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idempotentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectResourceResponseBody extends $tea.Model {
  requestId?: string;
  resourceInfoList?: SelectResourceResponseBodyResourceInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resourceInfoList: 'resourceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceInfoList: { 'type': 'array', 'itemType': SelectResourceResponseBodyResourceInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SelectResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SelectResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTextMsgRequest extends $tea.Model {
  projectId?: string;
  requestId?: string;
  sessionId?: string;
  text?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
      requestId: 'requestId',
      sessionId: 'sessionId',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      requestId: 'string',
      sessionId: 'string',
      text: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTextMsgResponseBody extends $tea.Model {
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTextMsgResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendTextMsgResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendTextMsgResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAvatarSessionRequest extends $tea.Model {
  projectId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAvatarSessionResponseBody extends $tea.Model {
  channelToken?: string;
  requestId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      channelToken: 'channelToken',
      requestId: 'requestId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelToken: 'string',
      requestId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAvatarSessionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartAvatarSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartAvatarSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAvatarSessionRequest extends $tea.Model {
  projectId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAvatarSessionResponseBody extends $tea.Model {
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAvatarSessionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopAvatarSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopAvatarSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectTaskRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
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

export class StopProjectTaskResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopProjectTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopProjectTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequest extends $tea.Model {
  frames?: SubmitProjectTaskRequestFrames[];
  scaleType?: string;
  subtitleTag?: number;
  static names(): { [key: string]: string } {
    return {
      frames: 'frames',
      scaleType: 'scaleType',
      subtitleTag: 'subtitleTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': SubmitProjectTaskRequestFrames },
      scaleType: 'string',
      subtitleTag: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitProjectTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitProjectTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextTemplateResponseBodyAvailableIndustryTextModeTypesTextStyles extends $tea.Model {
  desc?: string;
  disabled?: boolean;
  name?: string;
  templateKey?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      disabled: 'disabled',
      name: 'name',
      templateKey: 'templateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      disabled: 'boolean',
      name: 'string',
      templateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextTemplateResponseBodyAvailableIndustryTextModeTypes extends $tea.Model {
  name?: string;
  textStyles?: GetTextTemplateResponseBodyAvailableIndustryTextModeTypesTextStyles[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      textStyles: 'textStyles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      textStyles: { 'type': 'array', 'itemType': GetTextTemplateResponseBodyAvailableIndustryTextModeTypesTextStyles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextTemplateResponseBodyAvailableIndustry extends $tea.Model {
  name?: string;
  textModeTypes?: GetTextTemplateResponseBodyAvailableIndustryTextModeTypes[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      textModeTypes: 'textModeTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      textModeTypes: { 'type': 'array', 'itemType': GetTextTemplateResponseBodyAvailableIndustryTextModeTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvatarResourceResponseBodyQueryResourceInfoList extends $tea.Model {
  resourceId?: string;
  type?: string;
  validPeriodTime?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      type: 'type',
      validPeriodTime: 'validPeriodTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      type: 'string',
      validPeriodTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectResourceResponseBodyResourceInfoList extends $tea.Model {
  expireTime?: string;
  lastExpire?: number;
  remainCount?: number;
  resourceType?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expireTime',
      lastExpire: 'lastExpire',
      remainCount: 'remainCount',
      resourceType: 'resourceType',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      lastExpire: 'number',
      remainCount: 'number',
      resourceType: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFramesLayersMaterial extends $tea.Model {
  format?: string;
  id?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'format',
      id: 'id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      id: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFramesLayers extends $tea.Model {
  height?: number;
  index?: number;
  material?: SubmitProjectTaskRequestFramesLayersMaterial;
  positionX?: number;
  positionY?: number;
  type?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      index: 'index',
      material: 'material',
      positionX: 'positionX',
      positionY: 'positionY',
      type: 'type',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      index: 'number',
      material: SubmitProjectTaskRequestFramesLayersMaterial,
      positionX: 'number',
      positionY: 'number',
      type: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFramesSubtitle extends $tea.Model {
  alignment?: string;
  backgroundColor?: string;
  font?: string;
  fontColor?: string;
  fontSize?: number;
  maxCharLength?: number;
  positionX?: number;
  positionY?: number;
  textHeight?: number;
  textWidth?: number;
  static names(): { [key: string]: string } {
    return {
      alignment: 'alignment',
      backgroundColor: 'backgroundColor',
      font: 'font',
      fontColor: 'fontColor',
      fontSize: 'fontSize',
      maxCharLength: 'maxCharLength',
      positionX: 'positionX',
      positionY: 'positionY',
      textHeight: 'textHeight',
      textWidth: 'textWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignment: 'string',
      backgroundColor: 'string',
      font: 'string',
      fontColor: 'string',
      fontSize: 'number',
      maxCharLength: 'number',
      positionX: 'number',
      positionY: 'number',
      textHeight: 'number',
      textWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFramesVideoScript extends $tea.Model {
  audioUrl?: string;
  speedRate?: string;
  textContent?: string;
  type?: string;
  voiceTemplateId?: number;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      audioUrl: 'audioUrl',
      speedRate: 'speedRate',
      textContent: 'textContent',
      type: 'type',
      voiceTemplateId: 'voiceTemplateId',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioUrl: 'string',
      speedRate: 'string',
      textContent: 'string',
      type: 'string',
      voiceTemplateId: 'number',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFrames extends $tea.Model {
  index?: number;
  layers?: SubmitProjectTaskRequestFramesLayers[];
  subtitle?: SubmitProjectTaskRequestFramesSubtitle;
  videoScript?: SubmitProjectTaskRequestFramesVideoScript;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      layers: 'layers',
      subtitle: 'subtitle',
      videoScript: 'videoScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      layers: { 'type': 'array', 'itemType': SubmitProjectTaskRequestFramesLayers },
      subtitle: SubmitProjectTaskRequestFramesSubtitle,
      videoScript: SubmitProjectTaskRequestFramesVideoScript,
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
    this._endpoint = this.getEndpoint("intelligentcreation", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary 添加文案反馈
   *
   * @param request AddTextFeedbackRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddTextFeedbackResponse
   */
  async addTextFeedbackWithOptions(request: AddTextFeedbackRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddTextFeedbackResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.quality)) {
      body["quality"] = request.quality;
    }

    if (!Util.isUnset(request.textId)) {
      body["textId"] = request.textId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddTextFeedback",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/addTextFeedback`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddTextFeedbackResponse>(await this.callApi(params, req, runtime), new AddTextFeedbackResponse({}));
  }

  /**
   * @summary 添加文案反馈
   *
   * @param request AddTextFeedbackRequest
   * @return AddTextFeedbackResponse
   */
  async addTextFeedback(request: AddTextFeedbackRequest): Promise<AddTextFeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addTextFeedbackWithOptions(request, headers, runtime);
  }

  /**
   * @summary 检查会话状态
   *
   * @param request CheckSessionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckSessionResponse
   */
  async checkSessionWithOptions(request: CheckSessionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckSessionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/checkSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckSessionResponse>(await this.callApi(params, req, runtime), new CheckSessionResponse({}));
  }

  /**
   * @summary 检查会话状态
   *
   * @param request CheckSessionRequest
   * @return CheckSessionResponse
   */
  async checkSession(request: CheckSessionRequest): Promise<CheckSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkSessionWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建配图生成任务
   *
   * @param request CreateIllustrationTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateIllustrationTaskResponse
   */
  async createIllustrationTaskWithOptions(textId: string, request: CreateIllustrationTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateIllustrationTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateIllustrationTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/${OpenApiUtil.getEncodeParam(textId)}/illustrationTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateIllustrationTaskResponse>(await this.callApi(params, req, runtime), new CreateIllustrationTaskResponse({}));
  }

  /**
   * @summary 创建配图生成任务
   *
   * @param request CreateIllustrationTaskRequest
   * @return CreateIllustrationTaskResponse
   */
  async createIllustrationTask(textId: string, request: CreateIllustrationTaskRequest): Promise<CreateIllustrationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIllustrationTaskWithOptions(textId, request, headers, runtime);
  }

  /**
   * @summary 创建文案生成任务
   *
   * @param request CreateTextTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTextTaskResponse
   */
  async createTextTaskWithOptions(request: CreateTextTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTextTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTextTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/textTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTextTaskResponse>(await this.callApi(params, req, runtime), new CreateTextTaskResponse({}));
  }

  /**
   * @summary 创建文案生成任务
   *
   * @param request CreateTextTaskRequest
   * @return CreateTextTaskResponse
   */
  async createTextTask(request: CreateTextTaskRequest): Promise<CreateTextTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTextTaskWithOptions(request, headers, runtime);
  }

  /**
   * @summary 查询配图
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetIllustrationResponse
   */
  async getIllustrationWithOptions(textId: string, illustrationId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIllustrationResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetIllustration",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/${OpenApiUtil.getEncodeParam(textId)}/illustrations/${OpenApiUtil.getEncodeParam(illustrationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIllustrationResponse>(await this.callApi(params, req, runtime), new GetIllustrationResponse({}));
  }

  /**
   * @summary 查询配图
   *
   * @return GetIllustrationResponse
   */
  async getIllustration(textId: string, illustrationId: string): Promise<GetIllustrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIllustrationWithOptions(textId, illustrationId, headers, runtime);
  }

  /**
   * @summary 查询配图任务
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetIllustrationTaskResponse
   */
  async getIllustrationTaskWithOptions(textId: string, illustrationTaskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIllustrationTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetIllustrationTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/${OpenApiUtil.getEncodeParam(textId)}/illustrationTasks/${OpenApiUtil.getEncodeParam(illustrationTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIllustrationTaskResponse>(await this.callApi(params, req, runtime), new GetIllustrationTaskResponse({}));
  }

  /**
   * @summary 查询配图任务
   *
   * @return GetIllustrationTaskResponse
   */
  async getIllustrationTask(textId: string, illustrationTaskId: string): Promise<GetIllustrationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIllustrationTaskWithOptions(textId, illustrationTaskId, headers, runtime);
  }

  /**
   * @summary 获取图片上传oss token
   *
   * @param request GetOssUploadTokenRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetOssUploadTokenResponse
   */
  async getOssUploadTokenWithOptions(request: GetOssUploadTokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOssUploadTokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileType)) {
      query["fileType"] = request.fileType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOssUploadToken",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/uploadToken`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOssUploadTokenResponse>(await this.callApi(params, req, runtime), new GetOssUploadTokenResponse({}));
  }

  /**
   * @summary 获取图片上传oss token
   *
   * @param request GetOssUploadTokenRequest
   * @return GetOssUploadTokenResponse
   */
  async getOssUploadToken(request: GetOssUploadTokenRequest): Promise<GetOssUploadTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOssUploadTokenWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取数据人合成信息
   *
   * @param request GetProjectTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetProjectTaskResponse
   */
  async getProjectTaskWithOptions(request: GetProjectTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.idempotentId)) {
      query["IdempotentId"] = request.idempotentId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProjectTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/getProjectTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectTaskResponse>(await this.callApi(params, req, runtime), new GetProjectTaskResponse({}));
  }

  /**
   * @summary 获取数据人合成信息
   *
   * @param request GetProjectTaskRequest
   * @return GetProjectTaskResponse
   */
  async getProjectTask(request: GetProjectTaskRequest): Promise<GetProjectTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectTaskWithOptions(request, headers, runtime);
  }

  /**
   * @summary 查询文案
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTextResponse
   */
  async getTextWithOptions(textId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTextResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetText",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/${OpenApiUtil.getEncodeParam(textId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTextResponse>(await this.callApi(params, req, runtime), new GetTextResponse({}));
  }

  /**
   * @summary 查询文案
   *
   * @return GetTextResponse
   */
  async getText(textId: string): Promise<GetTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextWithOptions(textId, headers, runtime);
  }

  /**
   * @summary 查询文案任务
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTextTaskResponse
   */
  async getTextTaskWithOptions(textTaskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTextTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTextTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/textTasks/${OpenApiUtil.getEncodeParam(textTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTextTaskResponse>(await this.callApi(params, req, runtime), new GetTextTaskResponse({}));
  }

  /**
   * @summary 查询文案任务
   *
   * @return GetTextTaskResponse
   */
  async getTextTask(textTaskId: string): Promise<GetTextTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextTaskWithOptions(textTaskId, headers, runtime);
  }

  /**
   * @summary 查询表单配置
   *
   * @param request GetTextTemplateRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTextTemplateResponse
   */
  async getTextTemplateWithOptions(request: GetTextTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTextTemplateResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.industry)) {
      query["industry"] = request.industry;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTextTemplate",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts/commands/getTextTemplate`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTextTemplateResponse>(await this.callApi(params, req, runtime), new GetTextTemplateResponse({}));
  }

  /**
   * @summary 查询表单配置
   *
   * @param request GetTextTemplateRequest
   * @return GetTextTemplateResponse
   */
  async getTextTemplate(request: GetTextTemplateRequest): Promise<GetTextTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextTemplateWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取数字人模特列表
   *
   * @param request ListAnchorRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAnchorResponse
   */
  async listAnchorWithOptions(request: ListAnchorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAnchorResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.anchorType)) {
      query["anchorType"] = request.anchorType;
    }

    if (!Util.isUnset(request.coverRate)) {
      query["coverRate"] = request.coverRate;
    }

    if (!Util.isUnset(request.digitalHumanType)) {
      query["digitalHumanType"] = request.digitalHumanType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.useScene)) {
      query["useScene"] = request.useScene;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAnchor",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/anchorOpen/listAnchor`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAnchorResponse>(await this.callApi(params, req, runtime), new ListAnchorResponse({}));
  }

  /**
   * @summary 获取数字人模特列表
   *
   * @param request ListAnchorRequest
   * @return ListAnchorResponse
   */
  async listAnchor(request: ListAnchorRequest): Promise<ListAnchorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAnchorWithOptions(request, headers, runtime);
  }

  /**
   * @summary 查询文案主题列表
   *
   * @param request ListTextThemesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTextThemesResponse
   */
  async listTextThemesWithOptions(request: ListTextThemesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTextThemesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.industry)) {
      query["industry"] = request.industry;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTextThemes",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/textThemes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTextThemesResponse>(await this.callApi(params, req, runtime), new ListTextThemesResponse({}));
  }

  /**
   * @summary 查询文案主题列表
   *
   * @param request ListTextThemesRequest
   * @return ListTextThemesResponse
   */
  async listTextThemes(request: ListTextThemesRequest): Promise<ListTextThemesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextThemesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 列举文案
   *
   * @param request ListTextsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTextsResponse
   */
  async listTextsWithOptions(request: ListTextsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTextsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.generationSource)) {
      query["generationSource"] = request.generationSource;
    }

    if (!Util.isUnset(request.industry)) {
      query["industry"] = request.industry;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.publishStatus)) {
      query["publishStatus"] = request.publishStatus;
    }

    if (!Util.isUnset(request.textStyleType)) {
      query["textStyleType"] = request.textStyleType;
    }

    if (!Util.isUnset(request.textTheme)) {
      query["textTheme"] = request.textTheme;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTexts",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/texts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTextsResponse>(await this.callApi(params, req, runtime), new ListTextsResponse({}));
  }

  /**
   * @summary 列举文案
   *
   * @param request ListTextsRequest
   * @return ListTextsResponse
   */
  async listTexts(request: ListTextsRequest): Promise<ListTextsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取声音模版列表
   *
   * @param request ListVoiceModelsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListVoiceModelsResponse
   */
  async listVoiceModelsWithOptions(request: ListVoiceModelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListVoiceModelsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.useScene)) {
      query["useScene"] = request.useScene;
    }

    if (!Util.isUnset(request.voiceType)) {
      query["voiceType"] = request.voiceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVoiceModels",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/voiceOpen/listVoiceModels`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListVoiceModelsResponse>(await this.callApi(params, req, runtime), new ListVoiceModelsResponse({}));
  }

  /**
   * @summary 获取声音模版列表
   *
   * @param request ListVoiceModelsRequest
   * @return ListVoiceModelsResponse
   */
  async listVoiceModels(request: ListVoiceModelsRequest): Promise<ListVoiceModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVoiceModelsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 查询数字人项目信息
   *
   * @param request QueryAvatarProjectRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryAvatarProjectResponse
   */
  async queryAvatarProjectWithOptions(request: QueryAvatarProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryAvatarProjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAvatarProject",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/queryAvatarProject`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryAvatarProjectResponse>(await this.callApi(params, req, runtime), new QueryAvatarProjectResponse({}));
  }

  /**
   * @summary 查询数字人项目信息
   *
   * @param request QueryAvatarProjectRequest
   * @return QueryAvatarProjectResponse
   */
  async queryAvatarProject(request: QueryAvatarProjectRequest): Promise<QueryAvatarProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryAvatarProjectWithOptions(request, headers, runtime);
  }

  /**
   * @summary 查找资源
   *
   * @param request QueryAvatarResourceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryAvatarResourceResponse
   */
  async queryAvatarResourceWithOptions(request: QueryAvatarResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryAvatarResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.idempotentId)) {
      query["idempotentId"] = request.idempotentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAvatarResource",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/queryResource`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryAvatarResourceResponse>(await this.callApi(params, req, runtime), new QueryAvatarResourceResponse({}));
  }

  /**
   * @summary 查找资源
   *
   * @param request QueryAvatarResourceRequest
   * @return QueryAvatarResourceResponse
   */
  async queryAvatarResource(request: QueryAvatarResourceRequest): Promise<QueryAvatarResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryAvatarResourceWithOptions(request, headers, runtime);
  }

  /**
   * @summary 查询离线数字人剩余资源
   *
   * @param request SelectResourceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return SelectResourceResponse
   */
  async selectResourceWithOptions(request: SelectResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SelectResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.idempotentId)) {
      query["idempotentId"] = request.idempotentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SelectResource",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/commands/overview`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SelectResourceResponse>(await this.callApi(params, req, runtime), new SelectResourceResponse({}));
  }

  /**
   * @summary 查询离线数字人剩余资源
   *
   * @param request SelectResourceRequest
   * @return SelectResourceResponse
   */
  async selectResource(request: SelectResourceRequest): Promise<SelectResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectResourceWithOptions(request, headers, runtime);
  }

  /**
   * @summary 发送文本消息
   *
   * @param request SendTextMsgRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return SendTextMsgResponse
   */
  async sendTextMsgWithOptions(request: SendTextMsgRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SendTextMsgResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.text)) {
      body["text"] = request.text;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendTextMsg",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/sendTextMsg`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SendTextMsgResponse>(await this.callApi(params, req, runtime), new SendTextMsgResponse({}));
  }

  /**
   * @summary 发送文本消息
   *
   * @param request SendTextMsgRequest
   * @return SendTextMsgResponse
   */
  async sendTextMsg(request: SendTextMsgRequest): Promise<SendTextMsgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendTextMsgWithOptions(request, headers, runtime);
  }

  /**
   * @summary 启动会话
   *
   * @param request StartAvatarSessionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartAvatarSessionResponse
   */
  async startAvatarSessionWithOptions(request: StartAvatarSessionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartAvatarSessionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!Util.isUnset(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartAvatarSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/startAvatarSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartAvatarSessionResponse>(await this.callApi(params, req, runtime), new StartAvatarSessionResponse({}));
  }

  /**
   * @summary 启动会话
   *
   * @param request StartAvatarSessionRequest
   * @return StartAvatarSessionResponse
   */
  async startAvatarSession(request: StartAvatarSessionRequest): Promise<StartAvatarSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startAvatarSessionWithOptions(request, headers, runtime);
  }

  /**
   * @summary 停止会话
   *
   * @param request StopAvatarSessionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopAvatarSessionResponse
   */
  async stopAvatarSessionWithOptions(request: StopAvatarSessionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopAvatarSessionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopAvatarSession",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/avatar/project/stopAvatarSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopAvatarSessionResponse>(await this.callApi(params, req, runtime), new StopAvatarSessionResponse({}));
  }

  /**
   * @summary 停止会话
   *
   * @param request StopAvatarSessionRequest
   * @return StopAvatarSessionResponse
   */
  async stopAvatarSession(request: StopAvatarSessionRequest): Promise<StopAvatarSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopAvatarSessionWithOptions(request, headers, runtime);
  }

  /**
   * @summary 视频合成任务停止
   *
   * @param request StopProjectTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopProjectTaskResponse
   */
  async stopProjectTaskWithOptions(request: StopProjectTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopProjectTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopProjectTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopProjectTaskResponse>(await this.callApi(params, req, runtime), new StopProjectTaskResponse({}));
  }

  /**
   * @summary 视频合成任务停止
   *
   * @param request StopProjectTaskRequest
   * @return StopProjectTaskResponse
   */
  async stopProjectTask(request: StopProjectTaskRequest): Promise<StopProjectTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopProjectTaskWithOptions(request, headers, runtime);
  }

  /**
   * @summary 提交离线数字人合成任务
   *
   * @param request SubmitProjectTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitProjectTaskResponse
   */
  async submitProjectTaskWithOptions(request: SubmitProjectTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitProjectTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.frames)) {
      body["frames"] = request.frames;
    }

    if (!Util.isUnset(request.scaleType)) {
      body["scaleType"] = request.scaleType;
    }

    if (!Util.isUnset(request.subtitleTag)) {
      body["subtitleTag"] = request.subtitleTag;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitProjectTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/submitProjectTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitProjectTaskResponse>(await this.callApi(params, req, runtime), new SubmitProjectTaskResponse({}));
  }

  /**
   * @summary 提交离线数字人合成任务
   *
   * @param request SubmitProjectTaskRequest
   * @return SubmitProjectTaskResponse
   */
  async submitProjectTask(request: SubmitProjectTaskRequest): Promise<SubmitProjectTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitProjectTaskWithOptions(request, headers, runtime);
  }

}
