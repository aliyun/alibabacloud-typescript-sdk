// This file is auto-generated, don't edit it
/**
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
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * 3239281273464326823
   */
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
  /**
   * @example
   * Success
   */
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
  /**
   * @example
   * 0-不换背景，1-换背景
   */
  backgroundType?: number;
  /**
   * @example
   * 1024
   */
  dstHeight?: number;
  /**
   * @example
   * 1024
   */
  dstWidth?: number;
  /**
   * @example
   * 28274623764834
   */
  idempotentId?: string;
  /**
   * @example
   * 4
   */
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
  /**
   * @example
   * 3239281273464326823
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  desc?: string;
  gmtCreate?: string;
  gmtModified?: string;
  illustrationTaskIdList?: number[];
  publishStatus?: string;
  textContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  textId?: number;
  /**
   * @example
   * true
   */
  textIllustrationTag?: boolean;
  textModeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Generating
   */
  textStatus?: string;
  textStyleType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  textTaskId?: number;
  textThemes?: string[];
  /**
   * @example
   * xxx
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  userNameCreate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
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
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * 九寨沟三日游攻略
   */
  contentRequirement?: string;
  gmtCreate?: string;
  gmtModified?: string;
  introduction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  nums?: number;
  /**
   * @example
   * xxx
   */
  point?: string;
  referenceTag?: ReferenceTag;
  relatedRagId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  style?: string;
  target?: string;
  textIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  textModeType?: string;
  textTaskId?: number;
  textTaskStatus?: string;
  texts?: Text[];
  /**
   * @example
   * 旅游路线
   */
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
  /**
   * @example
   * 极氪007新车上市
   */
  contentRequirement?: string;
  /**
   * @example
   * 28274623764834
   */
  idempotentId?: string;
  industry?: string;
  /**
   * @example
   * xxx
   */
  introduction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  number?: number;
  /**
   * @example
   * 超强续航
   */
  point?: string;
  referenceTag?: ReferenceTag;
  /**
   * @example
   * 1
   */
  relatedRagIds?: number[];
  /**
   * @example
   * true
   */
  streamApi?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  style?: string;
  target?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  textModeType?: string;
  /**
   * @example
   * 旅游路线
   */
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
      streamApi: 'streamApi',
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
      streamApi: 'boolean',
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
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxx
   */
  accessId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yic-pre.oss-cn-hangzhou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234/temp-novels/xxxx-xxx-xx.txt
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxxxx
   */
  policy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxxx
   */
  policySignature?: string;
  /**
   * @example
   * xxxxxx
   */
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
  ttsVersion?: number;
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
      ttsVersion: 'ttsVersion',
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
      ttsVersion: 'number',
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
  /**
   * @example
   * 1
   */
  quality?: number;
  /**
   * @example
   * 8478
   */
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
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * True
   */
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

export class BatchGetProjectTaskRequest extends $tea.Model {
  taskIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      taskIdList: 'taskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetProjectTaskShrinkRequest extends $tea.Model {
  taskIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      taskIdListShrink: 'taskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIdListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetProjectTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 11
   */
  requestId?: string;
  resultList?: BatchGetProjectTaskResponseBodyResultList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultList: 'resultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultList: { 'type': 'array', 'itemType': BatchGetProjectTaskResponseBodyResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetProjectTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchGetProjectTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchGetProjectTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSessionRequest extends $tea.Model {
  /**
   * @example
   * 11111
   */
  projectId?: string;
  /**
   * @example
   * 121dlsga4o7golrl1hoja
   */
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
  /**
   * @example
   * 5389BE87-571B-573C-90ED-F07C5E68760B
   */
  requestId?: string;
  /**
   * @example
   * FREE
   */
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

export class CountTextRequest extends $tea.Model {
  /**
   * @remarks
   * API
   * 
   * @example
   * PLATFORM
   */
  generationSource?: string;
  /**
   * @example
   * Garment
   */
  industry?: string;
  /**
   * @example
   * 1
   */
  publishStatus?: string;
  /**
   * @example
   * RED_BOOK
   */
  style?: string;
  static names(): { [key: string]: string } {
    return {
      generationSource: 'generationSource',
      industry: 'industry',
      publishStatus: 'publishStatus',
      style: 'style',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generationSource: 'string',
      industry: 'string',
      publishStatus: 'string',
      style: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountTextResponseBody extends $tea.Model {
  /**
   * @example
   * 6C9CB64D-E2D3-5BF2-A9E6-2445F952F178
   */
  requestId?: string;
  countTextCmdList?: CountTextResponseBodyCountTextCmdList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      countTextCmdList: 'countTextCmdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      countTextCmdList: { 'type': 'array', 'itemType': CountTextResponseBodyCountTextCmdList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CountTextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CountTextResponseBody,
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

export class CreateRealisticPortraitRequest extends $tea.Model {
  ages?: number[];
  /**
   * @example
   * 1
   */
  cloth?: number;
  /**
   * @example
   * 1
   */
  color?: number;
  /**
   * @example
   * 11
   */
  custom?: string;
  face?: number[];
  /**
   * @example
   * 1
   */
  figure?: number;
  /**
   * @example
   * 1
   */
  gender?: number;
  /**
   * @example
   * 1
   */
  hairColor?: number;
  /**
   * @example
   * 1
   */
  hairstyle?: number;
  /**
   * @example
   * 500
   */
  height?: number;
  imageUrl?: string;
  /**
   * @example
   * 4
   */
  numbers?: number;
  /**
   * @example
   * 1:1
   */
  ratio?: string;
  /**
   * @example
   * 500
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      ages: 'ages',
      cloth: 'cloth',
      color: 'color',
      custom: 'custom',
      face: 'face',
      figure: 'figure',
      gender: 'gender',
      hairColor: 'hairColor',
      hairstyle: 'hairstyle',
      height: 'height',
      imageUrl: 'imageUrl',
      numbers: 'numbers',
      ratio: 'ratio',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ages: { 'type': 'array', 'itemType': 'number' },
      cloth: 'number',
      color: 'number',
      custom: 'string',
      face: { 'type': 'array', 'itemType': 'number' },
      figure: 'number',
      gender: 'number',
      hairColor: 'number',
      hairstyle: 'number',
      height: 'number',
      imageUrl: 'string',
      numbers: 'number',
      ratio: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRealisticPortraitResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D5798660-1531-5D12-9C20-16FEE9D22351
   */
  requestId?: string;
  /**
   * @example
   * 313123123
   */
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

export class CreateRealisticPortraitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRealisticPortraitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRealisticPortraitResponseBody,
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8021678.png
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ProductImage
   */
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
  /**
   * @example
   * 20230823218109326025-1200
   */
  idempotentId?: string;
  /**
   * @example
   * 313123123
   */
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
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @example
   * 5389BE87-571B-573C-90ED-F07C5E68760B
   */
  requestId?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * www.ali.com
   */
  videoDownloadUrl?: string;
  /**
   * @example
   * 111
   */
  videoDuration?: number;
  /**
   * @example
   * www.ali.com
   */
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
  /**
   * @example
   * Car
   */
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
  /**
   * @example
   * 3239281273464326823
   */
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
  /**
   * @example
   * PUBLIC_MODEL
   */
  anchorType?: string;
  /**
   * @example
   * 9:16
   */
  coverRate?: string;
  /**
   * @example
   * staticTransparency
   */
  digitalHumanType?: string;
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
   * offlineSynthesis
   */
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
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Deduct.DeductTaskAlreadySuccess
   */
  errorCode?: string;
  /**
   * @example
   * Failed to proxy flink ui request, message: An error occurred: Invalid UUID string: jobsn
   */
  errorMessage?: string;
  list?: AnchorResponse[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 5389BE87-571B-573C-90ED-F07C5E68760B
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * API
   */
  generationSource?: string;
  /**
   * @example
   * Common
   */
  industry?: string;
  keyword?: string;
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
   * PUBLISH
   */
  publishStatus?: string;
  /**
   * @example
   * WECHAT_MOMENT
   */
  textStyleType?: string;
  /**
   * @example
   * xxx
   */
  textTheme?: string;
  static names(): { [key: string]: string } {
    return {
      generationSource: 'generationSource',
      industry: 'industry',
      keyword: 'keyword',
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
      keyword: 'string',
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
   * offlineSynthesis
   */
  useScene?: string;
  /**
   * @example
   * PRIVATE_VOICE
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 040002
   */
  errorCode?: string;
  /**
   * @example
   * Failed to proxy flink ui request, message: An error occurred: Invalid UUID string: jobsn
   */
  errorMessage?: string;
  list?: VoiceModelResponse[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 14878724-A835-578D-9DD5-4779ADCE9221
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * 11111
   */
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
  /**
   * @example
   * 1000222
   */
  agentId?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @example
   * doc_test_3
   */
  projectName?: string;
  /**
   * @example
   * 2C331582-7390-5949-8D9A-AC8239185B37
   */
  requestId?: string;
  /**
   * @example
   * DEPLOYING
   */
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
  /**
   * @example
   * 11111
   */
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
  /**
   * @example
   * D5798660-1531-5D12-9C20-16FEE9D22351
   */
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

export class QueryTextStreamResponseBody extends $tea.Model {
  /**
   * @example
   * false
   */
  end?: boolean;
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      index: 'index',
      message: 'message',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      index: 'number',
      message: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTextStreamResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTextStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTextStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectImageTaskResponseBody extends $tea.Model {
  /**
   * @example
   * Failed to proxy flink ui request, message: An error occurred: Invalid UUID string: jobsn
   */
  errorMessage?: string;
  /**
   * @example
   * 1
   */
  failed?: string;
  /**
   * @example
   * PLATFORM
   */
  generationSource?: string;
  /**
   * @example
   * 1
   */
  gmtCreate?: string;
  imageInfos?: SelectImageTaskResponseBodyImageInfos[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  scene?: string;
  /**
   * @example
   * Successed
   */
  status?: string;
  /**
   * @example
   * 1
   */
  subtaskProcessing?: string;
  /**
   * @example
   * 1
   */
  success?: string;
  /**
   * @example
   * 10
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      failed: 'failed',
      generationSource: 'generationSource',
      gmtCreate: 'gmtCreate',
      imageInfos: 'imageInfos',
      requestId: 'requestId',
      scene: 'scene',
      status: 'status',
      subtaskProcessing: 'subtaskProcessing',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      failed: 'string',
      generationSource: 'string',
      gmtCreate: 'string',
      imageInfos: { 'type': 'array', 'itemType': SelectImageTaskResponseBodyImageInfos },
      requestId: 'string',
      scene: 'string',
      status: 'string',
      subtaskProcessing: 'string',
      success: 'string',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectImageTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SelectImageTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SelectImageTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectResourceRequest extends $tea.Model {
  /**
   * @example
   * 1111
   */
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
  /**
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
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
  /**
   * @example
   * 126000030
   */
  projectId?: string;
  /**
   * @example
   * 52775239-1575-5C07-A4AE-1835D120E4A6
   */
  requestId?: string;
  /**
   * @example
   * tcm9xac9dsfbfgm8hf5k94l3cqybwh9o3mn0iuyytdgd9qoejxf1crxsdvuvr8fu0zudk5px4vsa3e3fgcclplkiuo7kyy3sqgscvhejmooblaiv64ww8cvlxvin2urzyhooqj33y7gvodef0sxn22n9q58o7xlupabiknxsv46qe7kof8nuc4be8kyhi01
   */
  sessionId?: string;
  text?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 827BF714-19E7-51B5-A434-C21BFEE05983
   */
  requestId?: string;
  /**
   * @example
   * SUCCESS
   */
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
  /**
   * @example
   * 13534711288320
   */
  projectId?: string;
  /**
   * @example
   * 15ED6083-B0B8-5B2A-BEDB-94A5C687C812
   */
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
  /**
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  /**
   * @example
   * 121dlsga4o7golrl1hoja
   */
  sessionId?: string;
  token?: string;
  webSocketUrl?: string;
  static names(): { [key: string]: string } {
    return {
      channelToken: 'channelToken',
      requestId: 'requestId',
      sessionId: 'sessionId',
      token: 'token',
      webSocketUrl: 'webSocketUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelToken: 'string',
      requestId: 'string',
      sessionId: 'string',
      token: 'string',
      webSocketUrl: 'string',
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
  /**
   * @example
   * 124900036
   */
  projectId?: string;
  /**
   * @example
   * 121dlsga4o7golrl1hojazg0u9lvysk0uyczgd79be2a4hkr9ijrblmb5qohi5iaja3p5j633doqj4t2uu3sek2i49hzkao0bli4bch4tnloyx22odd7sot9dxl5xfd0hbp7fl9dehnqofkb9csebf0nuezj8bwgec8ei6dby0encu5y88ky6oqensuqnj
   */
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
  /**
   * @example
   * 725E87CD-F2DE-5FC4-8A09-2EBDFBF26DAA
   */
  requestId?: string;
  /**
   * @example
   * Stopped
   */
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
  /**
   * @example
   * 1111111
   */
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
  /**
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  /**
   * @example
   * True
   */
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
  /**
   * @remarks
   * frame
   */
  frames?: SubmitProjectTaskRequestFrames[];
  /**
   * @example
   * 9:16
   */
  scaleType?: string;
  /**
   * @example
   * 1
   */
  subtitleTag?: number;
  transparentBackground?: number;
  static names(): { [key: string]: string } {
    return {
      frames: 'frames',
      scaleType: 'scaleType',
      subtitleTag: 'subtitleTag',
      transparentBackground: 'transparentBackground',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': SubmitProjectTaskRequestFrames },
      scaleType: 'string',
      subtitleTag: 'number',
      transparentBackground: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 551FF252-6CFC-5DDA-9F84-9B07302385C2
   */
  requestId?: string;
  /**
   * @example
   * 313123123
   */
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

export class TransferPortraitStyleRequest extends $tea.Model {
  /**
   * @example
   * 500
   */
  height?: number;
  /**
   * @example
   * WWW
   */
  imageUrl?: string;
  /**
   * @example
   * 4
   */
  numbers?: number;
  /**
   * @example
   * 1
   */
  redrawAmplitude?: number;
  /**
   * @example
   * 1
   */
  style?: number;
  /**
   * @example
   * 500
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      imageUrl: 'imageUrl',
      numbers: 'numbers',
      redrawAmplitude: 'redrawAmplitude',
      style: 'style',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      imageUrl: 'string',
      numbers: 'number',
      redrawAmplitude: 'number',
      style: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferPortraitStyleResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 725E87CD-F2DE-5FC4-8A09-2EBDFBF26DAA
   */
  requestId?: string;
  /**
   * @example
   * 313123123
   */
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

export class TransferPortraitStyleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransferPortraitStyleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TransferPortraitStyleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetProjectTaskResponseBodyResultList extends $tea.Model {
  errorMsg?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 11
   */
  taskId?: string;
  /**
   * @example
   * http
   */
  videoDownloadUrl?: string;
  /**
   * @example
   * 1000
   */
  videoDuration?: number;
  /**
   * @example
   * http
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'errorMsg',
      status: 'status',
      taskId: 'taskId',
      videoDownloadUrl: 'videoDownloadUrl',
      videoDuration: 'videoDuration',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      status: 'string',
      taskId: 'string',
      videoDownloadUrl: 'string',
      videoDuration: 'number',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountTextResponseBodyCountTextCmdList extends $tea.Model {
  /**
   * @example
   * 4
   */
  count?: number;
  /**
   * @example
   * RED_BOOK
   */
  theme?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      theme: 'theme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      theme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextTemplateResponseBodyAvailableIndustryTextModeTypesTextStyles extends $tea.Model {
  desc?: string;
  /**
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @example
   * RED_BOOK
   */
  name?: string;
  /**
   * @example
   * 111
   */
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
  /**
   * @example
   * Rewrite
   */
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
  /**
   * @example
   * Car
   */
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
  /**
   * @example
   * 21275
   */
  resourceId?: string;
  /**
   * @example
   * STANDARD
   */
  type?: string;
  /**
   * @example
   * 1719904342237
   */
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

export class SelectImageTaskResponseBodyImageInfos extends $tea.Model {
  /**
   * @example
   * www.ali.com
   */
  customImageUrl?: string;
  /**
   * @example
   * 1
   */
  gmtCreate?: string;
  /**
   * @example
   * 500
   */
  imageH?: string;
  /**
   * @example
   * 500
   */
  imageW?: string;
  static names(): { [key: string]: string } {
    return {
      customImageUrl: 'customImageUrl',
      gmtCreate: 'gmtCreate',
      imageH: 'imageH',
      imageW: 'imageW',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImageUrl: 'string',
      gmtCreate: 'string',
      imageH: 'string',
      imageW: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectResourceResponseBodyResourceInfoList extends $tea.Model {
  /**
   * @example
   * 111
   */
  expireTime?: string;
  /**
   * @example
   * 11
   */
  lastExpire?: number;
  /**
   * @example
   * 1249
   */
  remainCount?: number;
  /**
   * @example
   * 2
   */
  resourceType?: number;
  /**
   * @example
   * second
   */
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
  /**
   * @example
   * video/mp4
   */
  format?: string;
  /**
   * @example
   * 38863
   */
  id?: string;
  /**
   * @example
   * https://meeting.dingtalk.com/j/1COFppy0POR
   */
  url?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'format',
      id: 'id',
      url: 'url',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      id: 'string',
      url: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFramesLayers extends $tea.Model {
  /**
   * @example
   * 222
   */
  height?: number;
  /**
   * @example
   * 1
   */
  index?: number;
  material?: SubmitProjectTaskRequestFramesLayersMaterial;
  /**
   * @example
   * 11
   */
  positionX?: number;
  /**
   * @example
   * 22
   */
  positionY?: number;
  /**
   * @example
   * ANCHOR
   */
  type?: string;
  /**
   * @example
   * 111
   */
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
  /**
   * @example
   * BottomLeft
   */
  alignment?: string;
  /**
   * @example
   * #ffffff
   */
  backgroundColor?: string;
  /**
   * @example
   * SimSun
   */
  font?: string;
  /**
   * @example
   * #ffffff
   */
  fontColor?: string;
  /**
   * @example
   * 32
   */
  fontSize?: number;
  /**
   * @example
   * 11
   */
  maxCharLength?: number;
  /**
   * @example
   * 2
   */
  positionX?: number;
  /**
   * @example
   * 1
   */
  positionY?: number;
  /**
   * @example
   * 22
   */
  textHeight?: number;
  /**
   * @example
   * 11
   */
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
  /**
   * @example
   * https://meeting.dingtalk.com/j/1COFppy0POR
   */
  audioUrl?: string;
  /**
   * @example
   * 2.0
   */
  speedRate?: string;
  textContent?: string;
  /**
   * @example
   * TEXT
   */
  type?: string;
  /**
   * @example
   * 11
   */
  voiceTemplateId?: number;
  /**
   * @example
   * 20
   */
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
  /**
   * @example
   * 1
   */
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
   * 添加文案反馈
   * 
   * @param request - AddTextFeedbackRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTextFeedbackResponse
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
   * 添加文案反馈
   * 
   * @param request - AddTextFeedbackRequest
   * @returns AddTextFeedbackResponse
   */
  async addTextFeedback(request: AddTextFeedbackRequest): Promise<AddTextFeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addTextFeedbackWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询项目信息
   * 
   * @param tmpReq - BatchGetProjectTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetProjectTaskResponse
   */
  async batchGetProjectTaskWithOptions(tmpReq: BatchGetProjectTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchGetProjectTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchGetProjectTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.taskIdList)) {
      request.taskIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIdList, "taskIdList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskIdListShrink)) {
      query["taskIdList"] = request.taskIdListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchGetProjectTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/digitalHuman/project/batchGetProjectTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchGetProjectTaskResponse>(await this.callApi(params, req, runtime), new BatchGetProjectTaskResponse({}));
  }

  /**
   * 批量查询项目信息
   * 
   * @param request - BatchGetProjectTaskRequest
   * @returns BatchGetProjectTaskResponse
   */
  async batchGetProjectTask(request: BatchGetProjectTaskRequest): Promise<BatchGetProjectTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGetProjectTaskWithOptions(request, headers, runtime);
  }

  /**
   * 检查会话状态
   * 
   * @param request - CheckSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSessionResponse
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
   * 检查会话状态
   * 
   * @param request - CheckSessionRequest
   * @returns CheckSessionResponse
   */
  async checkSession(request: CheckSessionRequest): Promise<CheckSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkSessionWithOptions(request, headers, runtime);
  }

  /**
   * 文本数量统计
   * 
   * @param request - CountTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CountTextResponse
   */
  async countTextWithOptions(request: CountTextRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CountTextResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.generationSource)) {
      query["generationSource"] = request.generationSource;
    }

    if (!Util.isUnset(request.industry)) {
      query["industry"] = request.industry;
    }

    if (!Util.isUnset(request.publishStatus)) {
      query["publishStatus"] = request.publishStatus;
    }

    if (!Util.isUnset(request.style)) {
      query["style"] = request.style;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CountText",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/countText`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CountTextResponse>(await this.callApi(params, req, runtime), new CountTextResponse({}));
  }

  /**
   * 文本数量统计
   * 
   * @param request - CountTextRequest
   * @returns CountTextResponse
   */
  async countText(request: CountTextRequest): Promise<CountTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.countTextWithOptions(request, headers, runtime);
  }

  /**
   * 创建配图生成任务
   * 
   * @param request - CreateIllustrationTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIllustrationTaskResponse
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
   * 创建配图生成任务
   * 
   * @param request - CreateIllustrationTaskRequest
   * @returns CreateIllustrationTaskResponse
   */
  async createIllustrationTask(textId: string, request: CreateIllustrationTaskRequest): Promise<CreateIllustrationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIllustrationTaskWithOptions(textId, request, headers, runtime);
  }

  /**
   * 写实人像创作
   * 
   * @param request - CreateRealisticPortraitRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRealisticPortraitResponse
   */
  async createRealisticPortraitWithOptions(request: CreateRealisticPortraitRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRealisticPortraitResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ages)) {
      body["ages"] = request.ages;
    }

    if (!Util.isUnset(request.cloth)) {
      body["cloth"] = request.cloth;
    }

    if (!Util.isUnset(request.color)) {
      body["color"] = request.color;
    }

    if (!Util.isUnset(request.custom)) {
      body["custom"] = request.custom;
    }

    if (!Util.isUnset(request.face)) {
      body["face"] = request.face;
    }

    if (!Util.isUnset(request.figure)) {
      body["figure"] = request.figure;
    }

    if (!Util.isUnset(request.gender)) {
      body["gender"] = request.gender;
    }

    if (!Util.isUnset(request.hairColor)) {
      body["hairColor"] = request.hairColor;
    }

    if (!Util.isUnset(request.hairstyle)) {
      body["hairstyle"] = request.hairstyle;
    }

    if (!Util.isUnset(request.height)) {
      body["height"] = request.height;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.numbers)) {
      body["numbers"] = request.numbers;
    }

    if (!Util.isUnset(request.ratio)) {
      body["ratio"] = request.ratio;
    }

    if (!Util.isUnset(request.width)) {
      body["width"] = request.width;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRealisticPortrait",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/images/portrait/realistic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRealisticPortraitResponse>(await this.callApi(params, req, runtime), new CreateRealisticPortraitResponse({}));
  }

  /**
   * 写实人像创作
   * 
   * @param request - CreateRealisticPortraitRequest
   * @returns CreateRealisticPortraitResponse
   */
  async createRealisticPortrait(request: CreateRealisticPortraitRequest): Promise<CreateRealisticPortraitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRealisticPortraitWithOptions(request, headers, runtime);
  }

  /**
   * 创建文案生成任务
   * 
   * @param request - CreateTextTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTextTaskResponse
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
   * 创建文案生成任务
   * 
   * @param request - CreateTextTaskRequest
   * @returns CreateTextTaskResponse
   */
  async createTextTask(request: CreateTextTaskRequest): Promise<CreateTextTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTextTaskWithOptions(request, headers, runtime);
  }

  /**
   * 查询配图
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIllustrationResponse
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
   * 查询配图
   * @returns GetIllustrationResponse
   */
  async getIllustration(textId: string, illustrationId: string): Promise<GetIllustrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIllustrationWithOptions(textId, illustrationId, headers, runtime);
  }

  /**
   * 查询配图任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIllustrationTaskResponse
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
   * 查询配图任务
   * @returns GetIllustrationTaskResponse
   */
  async getIllustrationTask(textId: string, illustrationTaskId: string): Promise<GetIllustrationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIllustrationTaskWithOptions(textId, illustrationTaskId, headers, runtime);
  }

  /**
   * 获取图片上传oss token
   * 
   * @param request - GetOssUploadTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssUploadTokenResponse
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
   * 获取图片上传oss token
   * 
   * @param request - GetOssUploadTokenRequest
   * @returns GetOssUploadTokenResponse
   */
  async getOssUploadToken(request: GetOssUploadTokenRequest): Promise<GetOssUploadTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOssUploadTokenWithOptions(request, headers, runtime);
  }

  /**
   * 获取数据人合成信息
   * 
   * @param request - GetProjectTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectTaskResponse
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
   * 获取数据人合成信息
   * 
   * @param request - GetProjectTaskRequest
   * @returns GetProjectTaskResponse
   */
  async getProjectTask(request: GetProjectTaskRequest): Promise<GetProjectTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectTaskWithOptions(request, headers, runtime);
  }

  /**
   * 查询文案
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextResponse
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
   * 查询文案
   * @returns GetTextResponse
   */
  async getText(textId: string): Promise<GetTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextWithOptions(textId, headers, runtime);
  }

  /**
   * 查询文案任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextTaskResponse
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
   * 查询文案任务
   * @returns GetTextTaskResponse
   */
  async getTextTask(textTaskId: string): Promise<GetTextTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextTaskWithOptions(textTaskId, headers, runtime);
  }

  /**
   * 查询表单配置
   * 
   * @param request - GetTextTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextTemplateResponse
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
   * 查询表单配置
   * 
   * @param request - GetTextTemplateRequest
   * @returns GetTextTemplateResponse
   */
  async getTextTemplate(request: GetTextTemplateRequest): Promise<GetTextTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 获取数字人模特列表
   * 
   * @param request - ListAnchorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnchorResponse
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
   * 获取数字人模特列表
   * 
   * @param request - ListAnchorRequest
   * @returns ListAnchorResponse
   */
  async listAnchor(request: ListAnchorRequest): Promise<ListAnchorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAnchorWithOptions(request, headers, runtime);
  }

  /**
   * 查询文案主题列表
   * 
   * @param request - ListTextThemesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextThemesResponse
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
   * 查询文案主题列表
   * 
   * @param request - ListTextThemesRequest
   * @returns ListTextThemesResponse
   */
  async listTextThemes(request: ListTextThemesRequest): Promise<ListTextThemesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextThemesWithOptions(request, headers, runtime);
  }

  /**
   * 列举文案
   * 
   * @param request - ListTextsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextsResponse
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

    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
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
   * 列举文案
   * 
   * @param request - ListTextsRequest
   * @returns ListTextsResponse
   */
  async listTexts(request: ListTextsRequest): Promise<ListTextsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextsWithOptions(request, headers, runtime);
  }

  /**
   * 获取声音模版列表
   * 
   * @param request - ListVoiceModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVoiceModelsResponse
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
   * 获取声音模版列表
   * 
   * @param request - ListVoiceModelsRequest
   * @returns ListVoiceModelsResponse
   */
  async listVoiceModels(request: ListVoiceModelsRequest): Promise<ListVoiceModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVoiceModelsWithOptions(request, headers, runtime);
  }

  /**
   * 查询数字人项目信息
   * 
   * @param request - QueryAvatarProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAvatarProjectResponse
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
   * 查询数字人项目信息
   * 
   * @param request - QueryAvatarProjectRequest
   * @returns QueryAvatarProjectResponse
   */
  async queryAvatarProject(request: QueryAvatarProjectRequest): Promise<QueryAvatarProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryAvatarProjectWithOptions(request, headers, runtime);
  }

  /**
   * 查找资源
   * 
   * @param request - QueryAvatarResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAvatarResourceResponse
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
   * 查找资源
   * 
   * @param request - QueryAvatarResourceRequest
   * @returns QueryAvatarResourceResponse
   */
  async queryAvatarResource(request: QueryAvatarResourceRequest): Promise<QueryAvatarResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryAvatarResourceWithOptions(request, headers, runtime);
  }

  /**
   * 流式输出文案
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTextStreamResponse
   */
  async queryTextStreamWithOptions(textId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryTextStreamResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "QueryTextStream",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/stream/queryTextStream/${OpenApiUtil.getEncodeParam(textId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryTextStreamResponse>(await this.callApi(params, req, runtime), new QueryTextStreamResponse({}));
  }

  /**
   * 流式输出文案
   * @returns QueryTextStreamResponse
   */
  async queryTextStream(textId: string): Promise<QueryTextStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryTextStreamWithOptions(textId, headers, runtime);
  }

  /**
   * 查询图片任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectImageTaskResponse
   */
  async selectImageTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SelectImageTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "SelectImageTask",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/images/portrait/select/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SelectImageTaskResponse>(await this.callApi(params, req, runtime), new SelectImageTaskResponse({}));
  }

  /**
   * 查询图片任务
   * @returns SelectImageTaskResponse
   */
  async selectImageTask(taskId: string): Promise<SelectImageTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectImageTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * 查询离线数字人剩余资源
   * 
   * @param request - SelectResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectResourceResponse
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
   * 查询离线数字人剩余资源
   * 
   * @param request - SelectResourceRequest
   * @returns SelectResourceResponse
   */
  async selectResource(request: SelectResourceRequest): Promise<SelectResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectResourceWithOptions(request, headers, runtime);
  }

  /**
   * 发送文本消息
   * 
   * @param request - SendTextMsgRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendTextMsgResponse
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
   * 发送文本消息
   * 
   * @param request - SendTextMsgRequest
   * @returns SendTextMsgResponse
   */
  async sendTextMsg(request: SendTextMsgRequest): Promise<SendTextMsgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendTextMsgWithOptions(request, headers, runtime);
  }

  /**
   * 启动会话
   * 
   * @param request - StartAvatarSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAvatarSessionResponse
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
   * 启动会话
   * 
   * @param request - StartAvatarSessionRequest
   * @returns StartAvatarSessionResponse
   */
  async startAvatarSession(request: StartAvatarSessionRequest): Promise<StartAvatarSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startAvatarSessionWithOptions(request, headers, runtime);
  }

  /**
   * 停止会话
   * 
   * @param request - StopAvatarSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAvatarSessionResponse
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
   * 停止会话
   * 
   * @param request - StopAvatarSessionRequest
   * @returns StopAvatarSessionResponse
   */
  async stopAvatarSession(request: StopAvatarSessionRequest): Promise<StopAvatarSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopAvatarSessionWithOptions(request, headers, runtime);
  }

  /**
   * 视频合成任务停止
   * 
   * @param request - StopProjectTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopProjectTaskResponse
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
   * 视频合成任务停止
   * 
   * @param request - StopProjectTaskRequest
   * @returns StopProjectTaskResponse
   */
  async stopProjectTask(request: StopProjectTaskRequest): Promise<StopProjectTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopProjectTaskWithOptions(request, headers, runtime);
  }

  /**
   * 提交离线数字人合成任务
   * 
   * @param request - SubmitProjectTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitProjectTaskResponse
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

    if (!Util.isUnset(request.transparentBackground)) {
      body["transparentBackground"] = request.transparentBackground;
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
   * 提交离线数字人合成任务
   * 
   * @param request - SubmitProjectTaskRequest
   * @returns SubmitProjectTaskResponse
   */
  async submitProjectTask(request: SubmitProjectTaskRequest): Promise<SubmitProjectTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitProjectTaskWithOptions(request, headers, runtime);
  }

  /**
   * 人像风格变化
   * 
   * @param request - TransferPortraitStyleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferPortraitStyleResponse
   */
  async transferPortraitStyleWithOptions(request: TransferPortraitStyleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TransferPortraitStyleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.height)) {
      body["height"] = request.height;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.numbers)) {
      body["numbers"] = request.numbers;
    }

    if (!Util.isUnset(request.redrawAmplitude)) {
      body["redrawAmplitude"] = request.redrawAmplitude;
    }

    if (!Util.isUnset(request.style)) {
      body["style"] = request.style;
    }

    if (!Util.isUnset(request.width)) {
      body["width"] = request.width;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TransferPortraitStyle",
      version: "2024-03-13",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/images/portrait/transferPortraitStyle`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TransferPortraitStyleResponse>(await this.callApi(params, req, runtime), new TransferPortraitStyleResponse({}));
  }

  /**
   * 人像风格变化
   * 
   * @param request - TransferPortraitStyleRequest
   * @returns TransferPortraitStyleResponse
   */
  async transferPortraitStyle(request: TransferPortraitStyleRequest): Promise<TransferPortraitStyleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.transferPortraitStyleWithOptions(request, headers, runtime);
  }

}
