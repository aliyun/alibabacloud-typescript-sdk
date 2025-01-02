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

export class AITeacherExpansionPracticeTaskGenerateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13
   */
  grade?: string;
  keySentences?: string[];
  keyWords?: string[];
  /**
   * @example
   * Understanding unique professions such as dog walkers, hotel test sleepers, and food tasters, including their job responsibilities and the benefits or challenges associated with each role.
   */
  learningObject?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Dog walker Dog walking, as a profession, originated in the US. Some may think that it\\"s a perfect job, because dog walkers won\\"t be imprisoned in an office. But it\\"s actually manual labour. At their busiest, dog walkers may have more than ten dogs to take care of in a day. Hotel test sleeper A hotel test sleeper, as the name suggests, has to write expert reviews about the facilities, locations, prices, dining and other services of hotels, in order to provide evaluations and guides for travelers. Hotel test sleepers don\\"t need to punch in for work and they get about ten thousand yuan as income every month. What a comfortable job! Food taster In ancient times, a food taster was a person who tasted foods (or drinks) to be served to someone else, to confirm that it was safe to eat. But now, those working as food tasters just get to taste various new foods and drinks aimed at specific regions across the world. They then give their opinions on these products to the companies and suggest improvements.
   */
  textContent?: string;
  textbook?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * talk about your dream job.
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6440xxxxxxxxxx5fafc98c421
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      grade: 'grade',
      keySentences: 'keySentences',
      keyWords: 'keyWords',
      learningObject: 'learningObject',
      textContent: 'textContent',
      textbook: 'textbook',
      topic: 'topic',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grade: 'string',
      keySentences: { 'type': 'array', 'itemType': 'string' },
      keyWords: { 'type': 'array', 'itemType': 'string' },
      learningObject: 'string',
      textContent: 'string',
      textbook: 'string',
      topic: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherExpansionPracticeTaskGenerateResponseBody extends $tea.Model {
  data?: AITeacherExpansionPracticeTaskGenerateResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
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
      data: AITeacherExpansionPracticeTaskGenerateResponseBodyData,
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

export class AITeacherExpansionPracticeTaskGenerateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AITeacherExpansionPracticeTaskGenerateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AITeacherExpansionPracticeTaskGenerateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherSyncPracticeTaskGenerateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13
   */
  grade?: string;
  keySentences?: string[];
  keyWords?: string[];
  /**
   * @example
   * Understanding unique professions such as dog walkers, hotel test sleepers, and food tasters, including their job responsibilities and the benefits or challenges associated with each role.
   */
  learningObject?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Dog walker Dog walking, as a profession, originated in the US. Some may think that it\\"s a perfect job, because dog walkers won\\"t be imprisoned in an office. But it\\"s actually manual labour. At their busiest, dog walkers may have more than ten dogs to take care of in a day. Hotel test sleeper A hotel test sleeper, as the name suggests, has to write expert reviews about the facilities, locations, prices, dining and other services of hotels, in order to provide evaluations and guides for travelers. Hotel test sleepers don\\"t need to punch in for work and they get about ten thousand yuan as income every month. What a comfortable job! Food taster In ancient times, a food taster was a person who tasted foods (or drinks) to be served to someone else, to confirm that it was safe to eat. But now, those working as food tasters just get to taste various new foods and drinks aimed at specific regions across the world. They then give their opinions on these products to the companies and suggest improvements.
   */
  textContent?: string;
  textbook?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * talk about your dream job.
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6440xxxxxxxxxx5fafc98c421
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      grade: 'grade',
      keySentences: 'keySentences',
      keyWords: 'keyWords',
      learningObject: 'learningObject',
      textContent: 'textContent',
      textbook: 'textbook',
      topic: 'topic',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grade: 'string',
      keySentences: { 'type': 'array', 'itemType': 'string' },
      keyWords: { 'type': 'array', 'itemType': 'string' },
      learningObject: 'string',
      textContent: 'string',
      textbook: 'string',
      topic: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherSyncPracticeTaskGenerateResponseBody extends $tea.Model {
  data?: AITeacherSyncPracticeTaskGenerateResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
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
      data: AITeacherSyncPracticeTaskGenerateResponseBodyData,
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

export class AITeacherSyncPracticeTaskGenerateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AITeacherSyncPracticeTaskGenerateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AITeacherSyncPracticeTaskGenerateResponseBody,
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

export class ExecuteAITeacherExpansionDialogueRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * In a career counseling session, we are going to discuss our dream jobs and the responsibilities associated with them. Alex, who dreams of becoming a professional travel blogger, will share the tasks and skills required for this role, while Jamie, aspiring to be a wildlife photographer, will outline the responsibilities and challenges of capturing nature\\"s moments. Both will explore how their interests align with the practical aspects of their chosen careers, discussing the potential for travel, creativity, and the impact of their work on society and the environment.
   */
  background?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueTasks?: ExecuteAITeacherExpansionDialogueRequestDialogueTasks[];
  /**
   * @example
   * en-gb
   */
  languageCode?: string;
  records?: ExecuteAITeacherExpansionDialogueRequestRecords[];
  /**
   * @remarks
   * This parameter is required.
   */
  roleInfo?: ExecuteAITeacherExpansionDialogueRequestRoleInfo;
  /**
   * @example
   * Hello Lily, could you please come to the kitchen for a moment?
   */
  startSentence?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Let\\"s talk about traffic rules.
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 886eba3702xxxxxxxxx4ba52a87a525
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      background: 'background',
      dialogueTasks: 'dialogueTasks',
      languageCode: 'languageCode',
      records: 'records',
      roleInfo: 'roleInfo',
      startSentence: 'startSentence',
      topic: 'topic',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      background: 'string',
      dialogueTasks: { 'type': 'array', 'itemType': ExecuteAITeacherExpansionDialogueRequestDialogueTasks },
      languageCode: 'string',
      records: { 'type': 'array', 'itemType': ExecuteAITeacherExpansionDialogueRequestRecords },
      roleInfo: ExecuteAITeacherExpansionDialogueRequestRoleInfo,
      startSentence: 'string',
      topic: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: ExecuteAITeacherExpansionDialogueResponseBodyData;
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
      data: ExecuteAITeacherExpansionDialogueResponseBodyData,
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

export class ExecuteAITeacherExpansionDialogueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteAITeacherExpansionDialogueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteAITeacherExpansionDialogueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRefineRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * In a career counseling session, we are going to discuss our dream jobs and the responsibilities associated with them. Alex, who dreams of becoming a professional travel blogger, will share the tasks and skills required for this role, while Jamie, aspiring to be a wildlife photographer, will outline the responsibilities and challenges of capturing nature\\"s moments. Both will explore how their interests align with the practical aspects of their chosen careers, discussing the potential for travel, creativity, and the impact of their work on society and the environment.
   */
  background?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueTasks?: ExecuteAITeacherExpansionDialogueRefineRequestDialogueTasks[];
  /**
   * @example
   * en-gb
   */
  languageCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  records?: ExecuteAITeacherExpansionDialogueRefineRequestRecords[];
  /**
   * @remarks
   * This parameter is required.
   */
  roleInfo?: ExecuteAITeacherExpansionDialogueRefineRequestRoleInfo;
  /**
   * @example
   * Hello Lily, could you please come to the kitchen for a moment?
   */
  startSentence?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * talk about your dream job.
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 886eba3702xxxxxxxxx4ba52a87a525
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      background: 'background',
      dialogueTasks: 'dialogueTasks',
      languageCode: 'languageCode',
      records: 'records',
      roleInfo: 'roleInfo',
      startSentence: 'startSentence',
      topic: 'topic',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      background: 'string',
      dialogueTasks: { 'type': 'array', 'itemType': ExecuteAITeacherExpansionDialogueRefineRequestDialogueTasks },
      languageCode: 'string',
      records: { 'type': 'array', 'itemType': ExecuteAITeacherExpansionDialogueRefineRequestRecords },
      roleInfo: ExecuteAITeacherExpansionDialogueRefineRequestRoleInfo,
      startSentence: 'string',
      topic: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRefineResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: ExecuteAITeacherExpansionDialogueRefineResponseBodyData;
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
      data: ExecuteAITeacherExpansionDialogueRefineResponseBodyData,
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

export class ExecuteAITeacherExpansionDialogueRefineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteAITeacherExpansionDialogueRefineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteAITeacherExpansionDialogueRefineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueTranslateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * In this dialogue, you will be playing the role of Lily, a young girl. I will be Jane, Lily\\"s mother. We are in the kitchen, where I am preparing dinner. I am asking you about your food preferences, specifically if you like meat, fish, and milk. You like meat and milk, but you don\\"t like fish because of its smell. I explain to you the nutritional benefits of these foods and suggest alternatives for the ones you don\\"t like. Finally, I invite you to start eating.
   */
  background?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueTasks?: ExecuteAITeacherExpansionDialogueTranslateRequestDialogueTasks[];
  records?: ExecuteAITeacherExpansionDialogueTranslateRequestRecords[];
  /**
   * @remarks
   * This parameter is required.
   */
  roleInfo?: ExecuteAITeacherExpansionDialogueTranslateRequestRoleInfo;
  /**
   * @example
   * Hello Lily, could you please come to the kitchen for a moment?
   */
  startSentence?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * talk about food.
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 886eba3702xxxxxxxxx4ba52a87a525
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      background: 'background',
      dialogueTasks: 'dialogueTasks',
      records: 'records',
      roleInfo: 'roleInfo',
      startSentence: 'startSentence',
      topic: 'topic',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      background: 'string',
      dialogueTasks: { 'type': 'array', 'itemType': ExecuteAITeacherExpansionDialogueTranslateRequestDialogueTasks },
      records: { 'type': 'array', 'itemType': ExecuteAITeacherExpansionDialogueTranslateRequestRecords },
      roleInfo: ExecuteAITeacherExpansionDialogueTranslateRequestRoleInfo,
      startSentence: 'string',
      topic: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueTranslateResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: ExecuteAITeacherExpansionDialogueTranslateResponseBodyData;
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
      data: ExecuteAITeacherExpansionDialogueTranslateResponseBodyData,
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

export class ExecuteAITeacherExpansionDialogueTranslateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteAITeacherExpansionDialogueTranslateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteAITeacherExpansionDialogueTranslateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherGrammarCheckRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i is good
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 886eba3702xxxxxxxxx4ba52a87a525
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherGrammarCheckResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: ExecuteAITeacherGrammarCheckResponseBodyData;
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
      data: ExecuteAITeacherGrammarCheckResponseBodyData,
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

export class ExecuteAITeacherGrammarCheckResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteAITeacherGrammarCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteAITeacherGrammarCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueTasks?: ExecuteAITeacherSyncDialogueRequestDialogueTasks[];
  /**
   * @example
   * en-gb
   */
  languageCode?: string;
  records?: ExecuteAITeacherSyncDialogueRequestRecords[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 886eba3702xxxxxxxxx4ba52a87a525
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueTasks: 'dialogueTasks',
      languageCode: 'languageCode',
      records: 'records',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueTasks: { 'type': 'array', 'itemType': ExecuteAITeacherSyncDialogueRequestDialogueTasks },
      languageCode: 'string',
      records: { 'type': 'array', 'itemType': ExecuteAITeacherSyncDialogueRequestRecords },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: ExecuteAITeacherSyncDialogueResponseBodyData;
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
      data: ExecuteAITeacherSyncDialogueResponseBodyData,
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

export class ExecuteAITeacherSyncDialogueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteAITeacherSyncDialogueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteAITeacherSyncDialogueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueTranslateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueTasks?: ExecuteAITeacherSyncDialogueTranslateRequestDialogueTasks[];
  records?: ExecuteAITeacherSyncDialogueTranslateRequestRecords[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 886eba3702xxxxxxxxx4ba52a87a525
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueTasks: 'dialogueTasks',
      records: 'records',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueTasks: { 'type': 'array', 'itemType': ExecuteAITeacherSyncDialogueTranslateRequestDialogueTasks },
      records: { 'type': 'array', 'itemType': ExecuteAITeacherSyncDialogueTranslateRequestRecords },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueTranslateResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: ExecuteAITeacherSyncDialogueTranslateResponseBodyData;
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
      data: ExecuteAITeacherSyncDialogueTranslateResponseBodyData,
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

export class ExecuteAITeacherSyncDialogueTranslateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteAITeacherSyncDialogueTranslateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteAITeacherSyncDialogueTranslateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * In a career counseling session, we are going to discuss our dream jobs and the responsibilities associated with them. Alex, who dreams of becoming a professional travel blogger, will share the tasks and skills required for this role, while Jamie, aspiring to be a wildlife photographer, will outline the responsibilities and challenges of capturing nature\\"s moments. Both will explore how their interests align with the practical aspects of their chosen careers, discussing the potential for travel, creativity, and the impact of their work on society and the environment.
   */
  background?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueTasks?: GetAITeacherExpansionDialogueSuggestionRequestDialogueTasks[];
  /**
   * @example
   * en-gb
   */
  languageCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  records?: GetAITeacherExpansionDialogueSuggestionRequestRecords[];
  /**
   * @remarks
   * This parameter is required.
   */
  roleInfo?: GetAITeacherExpansionDialogueSuggestionRequestRoleInfo;
  /**
   * @example
   * Hello Lily, could you please come to the kitchen for a moment?
   */
  startSentence?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Let\\"s talk about traffic rules.
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 886eba3702xxxxxxxxx4ba52a87a525
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      background: 'background',
      dialogueTasks: 'dialogueTasks',
      languageCode: 'languageCode',
      records: 'records',
      roleInfo: 'roleInfo',
      startSentence: 'startSentence',
      topic: 'topic',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      background: 'string',
      dialogueTasks: { 'type': 'array', 'itemType': GetAITeacherExpansionDialogueSuggestionRequestDialogueTasks },
      languageCode: 'string',
      records: { 'type': 'array', 'itemType': GetAITeacherExpansionDialogueSuggestionRequestRecords },
      roleInfo: GetAITeacherExpansionDialogueSuggestionRequestRoleInfo,
      startSentence: 'string',
      topic: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: GetAITeacherExpansionDialogueSuggestionResponseBodyData;
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
      data: GetAITeacherExpansionDialogueSuggestionResponseBodyData,
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

export class GetAITeacherExpansionDialogueSuggestionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAITeacherExpansionDialogueSuggestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAITeacherExpansionDialogueSuggestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherSyncDialogueSuggestionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueTasks?: GetAITeacherSyncDialogueSuggestionRequestDialogueTasks[];
  /**
   * @example
   * en-gb
   */
  languageCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  records?: GetAITeacherSyncDialogueSuggestionRequestRecords[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 886eba3702xxxxxxxxx4ba52a87a525
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueTasks: 'dialogueTasks',
      languageCode: 'languageCode',
      records: 'records',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueTasks: { 'type': 'array', 'itemType': GetAITeacherSyncDialogueSuggestionRequestDialogueTasks },
      languageCode: 'string',
      records: { 'type': 'array', 'itemType': GetAITeacherSyncDialogueSuggestionRequestRecords },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherSyncDialogueSuggestionResponseBody extends $tea.Model {
  /**
   * @example
   * []
   */
  data?: GetAITeacherSyncDialogueSuggestionResponseBodyData;
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
      data: GetAITeacherSyncDialogueSuggestionResponseBodyData,
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

export class GetAITeacherSyncDialogueSuggestionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAITeacherSyncDialogueSuggestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAITeacherSyncDialogueSuggestionResponseBody,
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

export class AITeacherExpansionPracticeTaskGenerateResponseBodyDataRoleSet extends $tea.Model {
  /**
   * @example
   * Alex
   */
  assistant?: string;
  /**
   * @example
   * Jamie
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherExpansionPracticeTaskGenerateResponseBodyDataTaskContent extends $tea.Model {
  /**
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @example
   * They think it\\"s great because they won\\"t be stuck in an office.
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherExpansionPracticeTaskGenerateResponseBodyData extends $tea.Model {
  /**
   * @example
   * In a career counseling session, we are going to discuss our dream jobs and the responsibilities associated with them. Alex, who dreams of becoming a professional travel blogger, will share the tasks and skills required for this role, while Jamie, aspiring to be a wildlife photographer, will outline the responsibilities and challenges of capturing nature\\"s moments. Both will explore how their interests align with the practical aspects of their chosen careers, discussing the potential for travel, creativity, and the impact of their work on society and the environment.
   */
  backgroundDescription?: string;
  roleSet?: AITeacherExpansionPracticeTaskGenerateResponseBodyDataRoleSet;
  /**
   * @example
   * Hey Jamie, do you know what a travel blogger does?
   */
  startSentence?: string;
  taskContent?: AITeacherExpansionPracticeTaskGenerateResponseBodyDataTaskContent[];
  /**
   * @example
   * textbook_dialogue
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundDescription: 'backgroundDescription',
      roleSet: 'roleSet',
      startSentence: 'startSentence',
      taskContent: 'taskContent',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundDescription: 'string',
      roleSet: AITeacherExpansionPracticeTaskGenerateResponseBodyDataRoleSet,
      startSentence: 'string',
      taskContent: { 'type': 'array', 'itemType': AITeacherExpansionPracticeTaskGenerateResponseBodyDataTaskContent },
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherSyncPracticeTaskGenerateResponseBodyDataTaskContent extends $tea.Model {
  /**
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @example
   * They think it\\"s great because they won\\"t be stuck in an office.
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherSyncPracticeTaskGenerateResponseBodyData extends $tea.Model {
  taskContent?: AITeacherSyncPracticeTaskGenerateResponseBodyDataTaskContent[];
  /**
   * @example
   * textbook_question_answering
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskContent: 'taskContent',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskContent: { 'type': 'array', 'itemType': AITeacherSyncPracticeTaskGenerateResponseBodyDataTaskContent },
      taskType: 'string',
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

export class ExecuteAITeacherExpansionDialogueRequestDialogueTasks extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @example
   * 为什么有些人认为遛狗是份好差事?
   */
  assistantTranslate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * They think it\\"s great because they won\\"t be stuck in an office.
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      assistantTranslate: 'assistantTranslate',
      order: 'order',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      assistantTranslate: 'string',
      order: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRequestRecords extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ask Mark if he has thought about what his dream job might be.
   */
  content?: string;
  /**
   * @example
   * 跑题：true, 不跑题：false
   */
  isOffTopicControl?: boolean;
  /**
   * @example
   * 扣题：true, 不扣题：false
   */
  isOnTopic?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 老师：assistant；学生：user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      isOffTopicControl: 'isOffTopicControl',
      isOnTopic: 'isOnTopic',
      order: 'order',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      isOffTopicControl: 'boolean',
      isOnTopic: 'boolean',
      order: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRequestRoleInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Alex
   */
  assistant?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Jamie
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  chineseResult?: string;
  /**
   * @example
   * 1
   */
  englishResult?: string;
  /**
   * @example
   * true
   */
  isFinish?: boolean;
  /**
   * @example
   * true
   */
  isOffTopicControl?: boolean;
  /**
   * @example
   * true
   */
  isOnTopic?: boolean;
  /**
   * @example
   * 2
   */
  questionIndex?: number;
  static names(): { [key: string]: string } {
    return {
      chineseResult: 'chineseResult',
      englishResult: 'englishResult',
      isFinish: 'isFinish',
      isOffTopicControl: 'isOffTopicControl',
      isOnTopic: 'isOnTopic',
      questionIndex: 'questionIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chineseResult: 'string',
      englishResult: 'string',
      isFinish: 'boolean',
      isOffTopicControl: 'boolean',
      isOnTopic: 'boolean',
      questionIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRefineRequestDialogueTasks extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @example
   * 为什么有些人认为遛狗是份好差事?
   */
  assistantTranslate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * They think it\\"s great because they won\\"t be stuck in an office.
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      assistantTranslate: 'assistantTranslate',
      order: 'order',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      assistantTranslate: 'string',
      order: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRefineRequestRecords extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ask Mark if he has thought about what his dream job might be.
   */
  content?: string;
  /**
   * @example
   * 跑题：true, 不跑题：false
   */
  isOffTopicControl?: boolean;
  /**
   * @example
   * 扣题：true, 不扣题：false
   */
  isOnTopic?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 老师：assistant；学生：user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      isOffTopicControl: 'isOffTopicControl',
      isOnTopic: 'isOnTopic',
      order: 'order',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      isOffTopicControl: 'boolean',
      isOnTopic: 'boolean',
      order: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRefineRequestRoleInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Jane, a caring mother
   */
  assistant?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Lily, a friendly student
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRefineResponseBodyData extends $tea.Model {
  /**
   * @example
   * Yes, I\\"ll be right there.
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueTranslateRequestDialogueTasks extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @example
   * 为什么有些人认为遛狗是份好差事?
   */
  assistantTranslate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * They think it\\"s great because they won\\"t be stuck in an office.
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      assistantTranslate: 'assistantTranslate',
      order: 'order',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      assistantTranslate: 'string',
      order: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueTranslateRequestRecords extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ask Mark if he has thought about what his dream job might be.
   */
  content?: string;
  /**
   * @example
   * 跑题：true, 不跑题：false
   */
  isOffTopicControl?: boolean;
  /**
   * @example
   * 扣题：true, 不扣题：false
   */
  isOnTopic?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 老师：assistant；学生：user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      isOffTopicControl: 'isOffTopicControl',
      isOnTopic: 'isOnTopic',
      order: 'order',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      isOffTopicControl: 'boolean',
      isOnTopic: 'boolean',
      order: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueTranslateRequestRoleInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Jane, a caring mother
   */
  assistant?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Lily, a friendly student
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueTranslateResponseBodyData extends $tea.Model {
  /**
   * @example
   * 太好了，谢谢你过来，莉莉。你喜欢吃肉吗？
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherGrammarCheckResponseBodyData extends $tea.Model {
  /**
   * @example
   * 主语 "I" 对应的动词应该是 "am" 而不是 "is"。
   */
  analysis?: string;
  /**
   * @example
   * I am good.
   */
  correction?: string;
  /**
   * @example
   * Has_Error
   */
  correctionStatus?: string;
  errorReason?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      correction: 'correction',
      correctionStatus: 'correctionStatus',
      errorReason: 'errorReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'string',
      correction: 'string',
      correctionStatus: 'string',
      errorReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueRequestDialogueTasks extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @example
   * 为什么有些人认为遛狗是份好差事?
   */
  assistantTranslate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * They think it\\"s great because they won\\"t be stuck in an office.
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      assistantTranslate: 'assistantTranslate',
      order: 'order',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      assistantTranslate: 'string',
      order: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueRequestRecords extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ask Mark if he has thought about what his dream job might be.
   */
  content?: string;
  /**
   * @example
   * 跑题：true, 不跑题：false
   */
  isOffTopicControl?: boolean;
  /**
   * @example
   * 扣题：true, 不扣题：false
   */
  isOnTopic?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 老师：assistant；学生：user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      isOffTopicControl: 'isOffTopicControl',
      isOnTopic: 'isOnTopic',
      order: 'order',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      isOffTopicControl: 'boolean',
      isOnTopic: 'boolean',
      order: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueResponseBodyData extends $tea.Model {
  /**
   * @example
   * Thanks, Lily. Do you like meat, Lily?
   */
  englishResult?: string;
  /**
   * @example
   * true
   */
  isFinish?: boolean;
  /**
   * @example
   * true
   */
  isOnTopic?: boolean;
  /**
   * @example
   * 2
   */
  questionIndex?: number;
  static names(): { [key: string]: string } {
    return {
      englishResult: 'englishResult',
      isFinish: 'isFinish',
      isOnTopic: 'isOnTopic',
      questionIndex: 'questionIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      englishResult: 'string',
      isFinish: 'boolean',
      isOnTopic: 'boolean',
      questionIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueTranslateRequestDialogueTasks extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @example
   * 为什么有些人认为遛狗是份好差事?
   */
  assistantTranslate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * They think it\\"s great because they won\\"t be stuck in an office.
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      assistantTranslate: 'assistantTranslate',
      order: 'order',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      assistantTranslate: 'string',
      order: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueTranslateRequestRecords extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ask Mark if he has thought about what his dream job might be.
   */
  content?: string;
  /**
   * @example
   * 跑题：true, 不跑题：false
   */
  isOffTopicControl?: boolean;
  /**
   * @example
   * 扣题：true, 不扣题：false
   */
  isOnTopic?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 老师：assistant；学生：user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      isOffTopicControl: 'isOffTopicControl',
      isOnTopic: 'isOnTopic',
      order: 'order',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      isOffTopicControl: 'boolean',
      isOnTopic: 'boolean',
      order: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueTranslateResponseBodyData extends $tea.Model {
  /**
   * @example
   * 太好了，谢谢你过来，莉莉。你喜欢吃肉吗？
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionRequestDialogueTasks extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @example
   * 为什么有些人认为遛狗是份好差事?
   */
  assistantTranslate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * They think it\\"s great because they won\\"t be stuck in an office.
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      assistantTranslate: 'assistantTranslate',
      order: 'order',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      assistantTranslate: 'string',
      order: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionRequestRecords extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ask Mark if he has thought about what his dream job might be.
   */
  content?: string;
  /**
   * @example
   * 跑题：true, 不跑题：false
   */
  isOffTopicControl?: boolean;
  /**
   * @example
   * 扣题：true, 不扣题：false
   */
  isOnTopic?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 老师：assistant；学生：user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      isOffTopicControl: 'isOffTopicControl',
      isOnTopic: 'isOnTopic',
      order: 'order',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      isOffTopicControl: 'boolean',
      isOnTopic: 'boolean',
      order: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionRequestRoleInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Alex
   */
  assistant?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Jamie
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionResponseBodyData extends $tea.Model {
  /**
   * @example
   * 谢谢莉莉.你喜欢吃肉吗，莉莉？
   */
  chineseResult?: string;
  /**
   * @example
   * Thanks, Lily. Do you like meat, Lily?
   */
  englishResult?: string;
  static names(): { [key: string]: string } {
    return {
      chineseResult: 'chineseResult',
      englishResult: 'englishResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chineseResult: 'string',
      englishResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherSyncDialogueSuggestionRequestDialogueTasks extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @example
   * 为什么有些人认为遛狗是份好差事?
   */
  assistantTranslate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * They think it\\"s great because they won\\"t be stuck in an office.
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      assistantTranslate: 'assistantTranslate',
      order: 'order',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      assistantTranslate: 'string',
      order: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherSyncDialogueSuggestionRequestRecords extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ask Mark if he has thought about what his dream job might be.
   */
  content?: string;
  /**
   * @example
   * 跑题：true, 不跑题：false
   */
  isOffTopicControl?: boolean;
  /**
   * @example
   * 扣题：true, 不扣题：false
   */
  isOnTopic?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 老师：assistant；学生：user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      isOffTopicControl: 'isOffTopicControl',
      isOnTopic: 'isOnTopic',
      order: 'order',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      isOffTopicControl: 'boolean',
      isOnTopic: 'boolean',
      order: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherSyncDialogueSuggestionResponseBodyData extends $tea.Model {
  /**
   * @example
   * 谢谢莉莉.你喜欢吃肉吗，莉莉？
   */
  chineseResult?: string;
  /**
   * @example
   * Thanks, Lily. Do you like meat, Lily?
   */
  englishResult?: string;
  static names(): { [key: string]: string } {
    return {
      chineseResult: 'chineseResult',
      englishResult: 'englishResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chineseResult: 'string',
      englishResult: 'string',
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
   * 拓展练问答对生成
   * 
   * @param request - AITeacherExpansionPracticeTaskGenerateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AITeacherExpansionPracticeTaskGenerateResponse
   */
  async aITeacherExpansionPracticeTaskGenerateWithOptions(request: AITeacherExpansionPracticeTaskGenerateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AITeacherExpansionPracticeTaskGenerateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.grade)) {
      body["grade"] = request.grade;
    }

    if (!Util.isUnset(request.keySentences)) {
      body["keySentences"] = request.keySentences;
    }

    if (!Util.isUnset(request.keyWords)) {
      body["keyWords"] = request.keyWords;
    }

    if (!Util.isUnset(request.learningObject)) {
      body["learningObject"] = request.learningObject;
    }

    if (!Util.isUnset(request.textContent)) {
      body["textContent"] = request.textContent;
    }

    if (!Util.isUnset(request.textbook)) {
      body["textbook"] = request.textbook;
    }

    if (!Util.isUnset(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AITeacherExpansionPracticeTaskGenerate",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/expansionPractice/generateTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AITeacherExpansionPracticeTaskGenerateResponse>(await this.callApi(params, req, runtime), new AITeacherExpansionPracticeTaskGenerateResponse({}));
  }

  /**
   * 拓展练问答对生成
   * 
   * @param request - AITeacherExpansionPracticeTaskGenerateRequest
   * @returns AITeacherExpansionPracticeTaskGenerateResponse
   */
  async aITeacherExpansionPracticeTaskGenerate(request: AITeacherExpansionPracticeTaskGenerateRequest): Promise<AITeacherExpansionPracticeTaskGenerateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aITeacherExpansionPracticeTaskGenerateWithOptions(request, headers, runtime);
  }

  /**
   * 同步基础练问答对生成
   * 
   * @param request - AITeacherSyncPracticeTaskGenerateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AITeacherSyncPracticeTaskGenerateResponse
   */
  async aITeacherSyncPracticeTaskGenerateWithOptions(request: AITeacherSyncPracticeTaskGenerateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AITeacherSyncPracticeTaskGenerateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.grade)) {
      body["grade"] = request.grade;
    }

    if (!Util.isUnset(request.keySentences)) {
      body["keySentences"] = request.keySentences;
    }

    if (!Util.isUnset(request.keyWords)) {
      body["keyWords"] = request.keyWords;
    }

    if (!Util.isUnset(request.learningObject)) {
      body["learningObject"] = request.learningObject;
    }

    if (!Util.isUnset(request.textContent)) {
      body["textContent"] = request.textContent;
    }

    if (!Util.isUnset(request.textbook)) {
      body["textbook"] = request.textbook;
    }

    if (!Util.isUnset(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AITeacherSyncPracticeTaskGenerate",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/syncPractice/generateTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AITeacherSyncPracticeTaskGenerateResponse>(await this.callApi(params, req, runtime), new AITeacherSyncPracticeTaskGenerateResponse({}));
  }

  /**
   * 同步基础练问答对生成
   * 
   * @param request - AITeacherSyncPracticeTaskGenerateRequest
   * @returns AITeacherSyncPracticeTaskGenerateResponse
   */
  async aITeacherSyncPracticeTaskGenerate(request: AITeacherSyncPracticeTaskGenerateRequest): Promise<AITeacherSyncPracticeTaskGenerateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aITeacherSyncPracticeTaskGenerateWithOptions(request, headers, runtime);
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
   * 进行拓展练对话
   * 
   * @param request - ExecuteAITeacherExpansionDialogueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherExpansionDialogueResponse
   */
  async executeAITeacherExpansionDialogueWithOptions(request: ExecuteAITeacherExpansionDialogueRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExecuteAITeacherExpansionDialogueResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.background)) {
      body["background"] = request.background;
    }

    if (!Util.isUnset(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!Util.isUnset(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!Util.isUnset(request.records)) {
      body["records"] = request.records;
    }

    if (!Util.isUnset(request.roleInfo)) {
      body["roleInfo"] = request.roleInfo;
    }

    if (!Util.isUnset(request.startSentence)) {
      body["startSentence"] = request.startSentence;
    }

    if (!Util.isUnset(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteAITeacherExpansionDialogue",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/expansionPractice/executeExpansionTraining`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteAITeacherExpansionDialogueResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherExpansionDialogueResponse({}));
  }

  /**
   * 进行拓展练对话
   * 
   * @param request - ExecuteAITeacherExpansionDialogueRequest
   * @returns ExecuteAITeacherExpansionDialogueResponse
   */
  async executeAITeacherExpansionDialogue(request: ExecuteAITeacherExpansionDialogueRequest): Promise<ExecuteAITeacherExpansionDialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherExpansionDialogueWithOptions(request, headers, runtime);
  }

  /**
   * 拓展练根据上下文进行润色
   * 
   * @param request - ExecuteAITeacherExpansionDialogueRefineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherExpansionDialogueRefineResponse
   */
  async executeAITeacherExpansionDialogueRefineWithOptions(request: ExecuteAITeacherExpansionDialogueRefineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExecuteAITeacherExpansionDialogueRefineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.background)) {
      body["background"] = request.background;
    }

    if (!Util.isUnset(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!Util.isUnset(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!Util.isUnset(request.records)) {
      body["records"] = request.records;
    }

    if (!Util.isUnset(request.roleInfo)) {
      body["roleInfo"] = request.roleInfo;
    }

    if (!Util.isUnset(request.startSentence)) {
      body["startSentence"] = request.startSentence;
    }

    if (!Util.isUnset(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteAITeacherExpansionDialogueRefine",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/expansionPractice/refineByContext`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteAITeacherExpansionDialogueRefineResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherExpansionDialogueRefineResponse({}));
  }

  /**
   * 拓展练根据上下文进行润色
   * 
   * @param request - ExecuteAITeacherExpansionDialogueRefineRequest
   * @returns ExecuteAITeacherExpansionDialogueRefineResponse
   */
  async executeAITeacherExpansionDialogueRefine(request: ExecuteAITeacherExpansionDialogueRefineRequest): Promise<ExecuteAITeacherExpansionDialogueRefineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherExpansionDialogueRefineWithOptions(request, headers, runtime);
  }

  /**
   * 拓展练语境翻译
   * 
   * @param request - ExecuteAITeacherExpansionDialogueTranslateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherExpansionDialogueTranslateResponse
   */
  async executeAITeacherExpansionDialogueTranslateWithOptions(request: ExecuteAITeacherExpansionDialogueTranslateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExecuteAITeacherExpansionDialogueTranslateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.background)) {
      body["background"] = request.background;
    }

    if (!Util.isUnset(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!Util.isUnset(request.records)) {
      body["records"] = request.records;
    }

    if (!Util.isUnset(request.roleInfo)) {
      body["roleInfo"] = request.roleInfo;
    }

    if (!Util.isUnset(request.startSentence)) {
      body["startSentence"] = request.startSentence;
    }

    if (!Util.isUnset(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteAITeacherExpansionDialogueTranslate",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/expansionPractice/translate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteAITeacherExpansionDialogueTranslateResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherExpansionDialogueTranslateResponse({}));
  }

  /**
   * 拓展练语境翻译
   * 
   * @param request - ExecuteAITeacherExpansionDialogueTranslateRequest
   * @returns ExecuteAITeacherExpansionDialogueTranslateResponse
   */
  async executeAITeacherExpansionDialogueTranslate(request: ExecuteAITeacherExpansionDialogueTranslateRequest): Promise<ExecuteAITeacherExpansionDialogueTranslateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherExpansionDialogueTranslateWithOptions(request, headers, runtime);
  }

  /**
   * 语法检测
   * 
   * @param request - ExecuteAITeacherGrammarCheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherGrammarCheckResponse
   */
  async executeAITeacherGrammarCheckWithOptions(request: ExecuteAITeacherGrammarCheckRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExecuteAITeacherGrammarCheckResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteAITeacherGrammarCheck",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/common/grammarChecking`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteAITeacherGrammarCheckResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherGrammarCheckResponse({}));
  }

  /**
   * 语法检测
   * 
   * @param request - ExecuteAITeacherGrammarCheckRequest
   * @returns ExecuteAITeacherGrammarCheckResponse
   */
  async executeAITeacherGrammarCheck(request: ExecuteAITeacherGrammarCheckRequest): Promise<ExecuteAITeacherGrammarCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherGrammarCheckWithOptions(request, headers, runtime);
  }

  /**
   * 进行同步练对话
   * 
   * @param request - ExecuteAITeacherSyncDialogueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherSyncDialogueResponse
   */
  async executeAITeacherSyncDialogueWithOptions(request: ExecuteAITeacherSyncDialogueRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExecuteAITeacherSyncDialogueResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!Util.isUnset(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!Util.isUnset(request.records)) {
      body["records"] = request.records;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteAITeacherSyncDialogue",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/syncPractice/executeSyncTraining`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteAITeacherSyncDialogueResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherSyncDialogueResponse({}));
  }

  /**
   * 进行同步练对话
   * 
   * @param request - ExecuteAITeacherSyncDialogueRequest
   * @returns ExecuteAITeacherSyncDialogueResponse
   */
  async executeAITeacherSyncDialogue(request: ExecuteAITeacherSyncDialogueRequest): Promise<ExecuteAITeacherSyncDialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherSyncDialogueWithOptions(request, headers, runtime);
  }

  /**
   * 同步练语境翻译
   * 
   * @param request - ExecuteAITeacherSyncDialogueTranslateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherSyncDialogueTranslateResponse
   */
  async executeAITeacherSyncDialogueTranslateWithOptions(request: ExecuteAITeacherSyncDialogueTranslateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExecuteAITeacherSyncDialogueTranslateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!Util.isUnset(request.records)) {
      body["records"] = request.records;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteAITeacherSyncDialogueTranslate",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/syncPractice/translate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteAITeacherSyncDialogueTranslateResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherSyncDialogueTranslateResponse({}));
  }

  /**
   * 同步练语境翻译
   * 
   * @param request - ExecuteAITeacherSyncDialogueTranslateRequest
   * @returns ExecuteAITeacherSyncDialogueTranslateResponse
   */
  async executeAITeacherSyncDialogueTranslate(request: ExecuteAITeacherSyncDialogueTranslateRequest): Promise<ExecuteAITeacherSyncDialogueTranslateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherSyncDialogueTranslateWithOptions(request, headers, runtime);
  }

  /**
   * 拓展练小助手
   * 
   * @param request - GetAITeacherExpansionDialogueSuggestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAITeacherExpansionDialogueSuggestionResponse
   */
  async getAITeacherExpansionDialogueSuggestionWithOptions(request: GetAITeacherExpansionDialogueSuggestionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAITeacherExpansionDialogueSuggestionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.background)) {
      body["background"] = request.background;
    }

    if (!Util.isUnset(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!Util.isUnset(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!Util.isUnset(request.records)) {
      body["records"] = request.records;
    }

    if (!Util.isUnset(request.roleInfo)) {
      body["roleInfo"] = request.roleInfo;
    }

    if (!Util.isUnset(request.startSentence)) {
      body["startSentence"] = request.startSentence;
    }

    if (!Util.isUnset(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAITeacherExpansionDialogueSuggestion",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/expansionPractice/suggestion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAITeacherExpansionDialogueSuggestionResponse>(await this.callApi(params, req, runtime), new GetAITeacherExpansionDialogueSuggestionResponse({}));
  }

  /**
   * 拓展练小助手
   * 
   * @param request - GetAITeacherExpansionDialogueSuggestionRequest
   * @returns GetAITeacherExpansionDialogueSuggestionResponse
   */
  async getAITeacherExpansionDialogueSuggestion(request: GetAITeacherExpansionDialogueSuggestionRequest): Promise<GetAITeacherExpansionDialogueSuggestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAITeacherExpansionDialogueSuggestionWithOptions(request, headers, runtime);
  }

  /**
   * 同步练小助手
   * 
   * @param request - GetAITeacherSyncDialogueSuggestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAITeacherSyncDialogueSuggestionResponse
   */
  async getAITeacherSyncDialogueSuggestionWithOptions(request: GetAITeacherSyncDialogueSuggestionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAITeacherSyncDialogueSuggestionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!Util.isUnset(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!Util.isUnset(request.records)) {
      body["records"] = request.records;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAITeacherSyncDialogueSuggestion",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aiteacher/syncPractice/suggestion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAITeacherSyncDialogueSuggestionResponse>(await this.callApi(params, req, runtime), new GetAITeacherSyncDialogueSuggestionResponse({}));
  }

  /**
   * 同步练小助手
   * 
   * @param request - GetAITeacherSyncDialogueSuggestionRequest
   * @returns GetAITeacherSyncDialogueSuggestionResponse
   */
  async getAITeacherSyncDialogueSuggestion(request: GetAITeacherSyncDialogueSuggestionRequest): Promise<GetAITeacherSyncDialogueSuggestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAITeacherSyncDialogueSuggestionWithOptions(request, headers, runtime);
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
