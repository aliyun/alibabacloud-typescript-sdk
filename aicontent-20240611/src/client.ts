// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class OpenApiMultiResponseDataInferenceJobList extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resultImageUrl)) {
      $dara.Model.validateArray(this.resultImageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiMultiResponseData extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.imageUrl)) {
      $dara.Model.validateArray(this.imageUrl);
    }
    if(Array.isArray(this.inferenceJobList)) {
      $dara.Model.validateArray(this.inferenceJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiSingleResponseData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherExpansionPracticeTaskGenerateResponseBodyDataRoleSet extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherExpansionPracticeTaskGenerateResponseBodyDataTaskContent extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherExpansionPracticeTaskGenerateResponseBodyData extends $dara.Model {
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

  validate() {
    if(this.roleSet && typeof (this.roleSet as any).validate === 'function') {
      (this.roleSet as any).validate();
    }
    if(Array.isArray(this.taskContent)) {
      $dara.Model.validateArray(this.taskContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherSyncPracticeTaskGenerateResponseBodyDataTaskContent extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherSyncPracticeTaskGenerateResponseBodyData extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.taskContent)) {
      $dara.Model.validateArray(this.taskContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessWarrantResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  accessToken?: string;
  /**
   * @example
   * ex2xxxxxxxx
   */
  accessWarrantId?: string;
  /**
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @example
   * 1672531200
   */
  createTime?: string;
  /**
   * @example
   * 1672531200
   */
  expireTime?: string;
  /**
   * @example
   * 1234567890
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      accessWarrantId: 'AccessWarrantId',
      applicationAccessId: 'ApplicationAccessId',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      accessWarrantId: 'string',
      applicationAccessId: 'string',
      createTime: 'string',
      expireTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBodyDataProjectAppsApplicationAccessIds extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @example
   * MyAppSecret
   */
  applicationAccessSecret?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessId: 'applicationAccessId',
      applicationAccessSecret: 'applicationAccessSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessId: 'string',
      applicationAccessSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBodyDataProjectApps extends $dara.Model {
  applicationAccessIds?: CreateProjectResponseBodyDataProjectAppsApplicationAccessIds[];
  /**
   * @example
   * 4867
   */
  id?: string;
  /**
   * @example
   * 4910
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessIds: 'ApplicationAccessIds',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessIds: { 'type': 'array', 'itemType': CreateProjectResponseBodyDataProjectAppsApplicationAccessIds },
      id: 'string',
      projectId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationAccessIds)) {
      $dara.Model.validateArray(this.applicationAccessIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBodyDataProjectSDK extends $dara.Model {
  /**
   * @example
   * 2023-02-15T09:17:39Z
   */
  createTime?: string;
  /**
   * @example
   * http://demo.com/demo
   */
  demoUrl?: string;
  deployMode?: string;
  /**
   * @example
   * C++
   */
  developLanguage?: string;
  /**
   * @example
   * http://demo.com/doc
   */
  docUrl?: string;
  /**
   * @example
   * C SDK
   */
  sdkName?: string;
  /**
   * @example
   * http://demo.com/sdk.zip
   */
  sdkUrl?: string;
  /**
   * @example
   * 4.12.8
   */
  sdkVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      demoUrl: 'DemoUrl',
      deployMode: 'DeployMode',
      developLanguage: 'DevelopLanguage',
      docUrl: 'DocUrl',
      sdkName: 'SdkName',
      sdkUrl: 'SdkUrl',
      sdkVersion: 'SdkVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      demoUrl: 'string',
      deployMode: 'string',
      developLanguage: 'string',
      docUrl: 'string',
      sdkName: 'string',
      sdkUrl: 'string',
      sdkVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2023-02-15T09:17:39Z
   */
  createTime?: string;
  projectApps?: CreateProjectResponseBodyDataProjectApps[];
  /**
   * @example
   * 124187
   */
  projectId?: string;
  /**
   * @example
   * MyProject
   */
  projectName?: string;
  projectSDK?: CreateProjectResponseBodyDataProjectSDK[];
  /**
   * @example
   * WebApplication
   */
  projectType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      projectApps: 'ProjectApps',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectSDK: 'ProjectSDK',
      projectType: 'ProjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      projectApps: { 'type': 'array', 'itemType': CreateProjectResponseBodyDataProjectApps },
      projectId: 'string',
      projectName: 'string',
      projectSDK: { 'type': 'array', 'itemType': CreateProjectResponseBodyDataProjectSDK },
      projectType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectApps)) {
      $dara.Model.validateArray(this.projectApps);
    }
    if(Array.isArray(this.projectSDK)) {
      $dara.Model.validateArray(this.projectSDK);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRequestDialogueTasks extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRequestRecords extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRequestRoleInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRefineRequestDialogueTasks extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRefineRequestRecords extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRefineRequestRoleInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRefineResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueTranslateRequestDialogueTasks extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueTranslateRequestRecords extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueTranslateRequestRoleInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueTranslateResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherGrammarCheckResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueRequestDialogueTasks extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueRequestRecords extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueTranslateRequestDialogueTasks extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueTranslateRequestRecords extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueTranslateResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantDialogueResponseBodyDataResult extends $dara.Model {
  chineseResult?: string;
  englishResult?: string;
  isFinish?: boolean;
  isTaskCompleted?: boolean;
  static names(): { [key: string]: string } {
    return {
      chineseResult: 'chineseResult',
      englishResult: 'englishResult',
      isFinish: 'isFinish',
      isTaskCompleted: 'isTaskCompleted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chineseResult: 'string',
      englishResult: 'string',
      isFinish: 'boolean',
      isTaskCompleted: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantDialogueResponseBodyData extends $dara.Model {
  assistant?: string;
  chatId?: string;
  result?: ExecuteTextbookAssistantDialogueResponseBodyDataResult;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      chatId: 'chatId',
      result: 'result',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      chatId: 'string',
      result: ExecuteTextbookAssistantDialogueResponseBodyDataResult,
      user: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantDifficultyResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * Let\\"s look at the text again. Mike says, \\"I\\"m Mike Black.\\" Can you try saying it like Mike?
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantDifficultyResponseBodyData extends $dara.Model {
  result?: ExecuteTextbookAssistantDifficultyResponseBodyDataResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ExecuteTextbookAssistantDifficultyResponseBodyDataResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantGrammarCheckResponseBodyDataResult extends $dara.Model {
  analysis?: string;
  /**
   * @example
   * I am you.
   */
  correction?: string;
  /**
   * @example
   * Has_Error
   */
  correctionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      correction: 'correction',
      correctionStatus: 'correctionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'string',
      correction: 'string',
      correctionStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantGrammarCheckResponseBodyData extends $dara.Model {
  result?: ExecuteTextbookAssistantGrammarCheckResponseBodyDataResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ExecuteTextbookAssistantGrammarCheckResponseBodyDataResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantRefineByContextResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * Good evening! From the book, how does Mike Black introduce himself?
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantRefineByContextResponseBodyData extends $dara.Model {
  result?: ExecuteTextbookAssistantRefineByContextResponseBodyDataResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ExecuteTextbookAssistantRefineByContextResponseBodyDataResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantRetryConversationResponseBodyDataResult extends $dara.Model {
  chineseResult?: string;
  /**
   * @example
   * Good evening! From the book, how does Mike Black introduce himself?
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantRetryConversationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 6788e0b4b54c5268c1b78638
   */
  assistant?: string;
  /**
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  result?: ExecuteTextbookAssistantRetryConversationResponseBodyDataResult;
  /**
   * @example
   * 6788e0b45bdfc807f077a5a1
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      chatId: 'chatId',
      result: 'result',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      chatId: 'string',
      result: ExecuteTextbookAssistantRetryConversationResponseBodyDataResult,
      user: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantStartConversationResponseBodyDataResult extends $dara.Model {
  chineseResult?: string;
  /**
   * @example
   * Good evening! From the book, how does Mike Black introduce himself?
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantStartConversationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 6788e0b4b54c5268c1b78638
   */
  assistant?: string;
  /**
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  result?: ExecuteTextbookAssistantStartConversationResponseBodyDataResult;
  /**
   * @example
   * 6788e0b45bdfc807f077a5a1
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      chatId: 'chatId',
      result: 'result',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      chatId: 'string',
      result: ExecuteTextbookAssistantStartConversationResponseBodyDataResult,
      user: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantSuggestionResponseBodyDataResult extends $dara.Model {
  chineseResult?: string;
  /**
   * @example
   * Good evening! From the book, how does Mike Black introduce himself?
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantSuggestionResponseBodyData extends $dara.Model {
  result?: ExecuteTextbookAssistantSuggestionResponseBodyDataResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ExecuteTextbookAssistantSuggestionResponseBodyDataResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantTranslateResponseBodyDataResult extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantTranslateResponseBodyData extends $dara.Model {
  result?: ExecuteTextbookAssistantTranslateResponseBodyDataResult;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: ExecuteTextbookAssistantTranslateResponseBodyDataResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionRequestDialogueTasks extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionRequestRecords extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionRequestRoleInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherSyncDialogueSuggestionRequestDialogueTasks extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherSyncDialogueSuggestionRequestRecords extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherSyncDialogueSuggestionResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextbookAssistantTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * tc_197bf5bb81889cc79eb51ae9b8c0cea3
   */
  authToken?: string;
  /**
   * @example
   * 5400
   */
  expire?: number;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      expire: 'expire',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      expire: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantArticlesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0c05700d4d9411efbe6e0c42a106bb02
   */
  articleId?: string;
  static names(): { [key: string]: string } {
    return {
      articleId: 'articleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeTopic extends $dara.Model {
  /**
   * @example
   * 1323
   */
  labelId?: string;
  labelName?: string;
  static names(): { [key: string]: string } {
    return {
      labelId: 'labelId',
      labelName: 'labelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelId: 'string',
      labelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTree extends $dara.Model {
  /**
   * @example
   * 05758807ed8e11eebe6e0c42a106bb02
   */
  directoryId?: string;
  /**
   * @example
   * 2 Jobs
   */
  directoryName?: string;
  topic?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeTopic[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      directoryName: 'directoryName',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      directoryName: 'string',
      topic: { 'type': 'array', 'itemType': ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeTopic },
    };
  }

  validate() {
    if(Array.isArray(this.topic)) {
      $dara.Model.validateArray(this.topic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesResponseBodyDataEditionInfo extends $dara.Model {
  /**
   * @example
   * 55857
   */
  bookId?: string;
  /**
   * @example
   * 1
   */
  bookVolume?: string;
  /**
   * @example
   * 2010-1(2)
   */
  edition?: string;
  /**
   * @example
   * 3
   */
  grade?: string;
  /**
   * @example
   * 2019-1(10)
   */
  impression?: string;
  /**
   * @example
   * 9787544413695
   */
  isbn?: string;
  publisher?: string;
  /**
   * @example
   * ENGLISH
   */
  subject?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      bookId: 'bookId',
      bookVolume: 'bookVolume',
      edition: 'edition',
      grade: 'grade',
      impression: 'impression',
      isbn: 'isbn',
      publisher: 'publisher',
      subject: 'subject',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookId: 'string',
      bookVolume: 'string',
      edition: 'string',
      grade: 'string',
      impression: 'string',
      isbn: 'string',
      publisher: 'string',
      subject: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesResponseBodyData extends $dara.Model {
  directoryTree?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTree[];
  editionInfo?: ListTextbookAssistantBookDirectoriesResponseBodyDataEditionInfo;
  static names(): { [key: string]: string } {
    return {
      directoryTree: 'directoryTree',
      editionInfo: 'editionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryTree: { 'type': 'array', 'itemType': ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTree },
      editionInfo: ListTextbookAssistantBookDirectoriesResponseBodyDataEditionInfo,
    };
  }

  validate() {
    if(Array.isArray(this.directoryTree)) {
      $dara.Model.validateArray(this.directoryTree);
    }
    if(this.editionInfo && typeof (this.editionInfo as any).validate === 'function') {
      (this.editionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBooksResponseBodyDataBookList extends $dara.Model {
  author?: string;
  /**
   * @example
   * 231698
   */
  bookId?: string;
  bookName?: string;
  /**
   * @example
   * null
   */
  coverImage?: string;
  /**
   * @example
   * 2024-7（1）
   */
  edition?: string;
  /**
   * @example
   * 3
   */
  grade?: string;
  /**
   * @example
   * 2024-7（1）
   */
  impression?: string;
  /**
   * @example
   * 9787107382505
   */
  isbn?: string;
  publisher?: string;
  /**
   * @example
   * ENGLISH
   */
  subject?: string;
  version?: string;
  /**
   * @example
   * 0
   */
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      bookId: 'bookId',
      bookName: 'bookName',
      coverImage: 'coverImage',
      edition: 'edition',
      grade: 'grade',
      impression: 'impression',
      isbn: 'isbn',
      publisher: 'publisher',
      subject: 'subject',
      version: 'version',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      bookId: 'string',
      bookName: 'string',
      coverImage: 'string',
      edition: 'string',
      grade: 'string',
      impression: 'string',
      isbn: 'string',
      publisher: 'string',
      subject: 'string',
      version: 'string',
      volume: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBooksResponseBodyDataPaginationData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      maxResults: 'maxResults',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      maxResults: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBooksResponseBodyData extends $dara.Model {
  bookList?: ListTextbookAssistantBooksResponseBodyDataBookList[];
  paginationData?: ListTextbookAssistantBooksResponseBodyDataPaginationData;
  static names(): { [key: string]: string } {
    return {
      bookList: 'bookList',
      paginationData: 'paginationData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookList: { 'type': 'array', 'itemType': ListTextbookAssistantBooksResponseBodyDataBookList },
      paginationData: ListTextbookAssistantBooksResponseBodyDataPaginationData,
    };
  }

  validate() {
    if(Array.isArray(this.bookList)) {
      $dara.Model.validateArray(this.bookList);
    }
    if(this.paginationData && typeof (this.paginationData as any).validate === 'function') {
      (this.paginationData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantGradeVolumesResponseBodyDataGradeVolumes extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  grade?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      grade: 'grade',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grade: 'string',
      volume: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantGradeVolumesResponseBodyData extends $dara.Model {
  gradeVolumes?: ListTextbookAssistantGradeVolumesResponseBodyDataGradeVolumes[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 人教版
   */
  textbookVersion?: string;
  static names(): { [key: string]: string } {
    return {
      gradeVolumes: 'gradeVolumes',
      textbookVersion: 'textbookVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gradeVolumes: { 'type': 'array', 'itemType': ListTextbookAssistantGradeVolumesResponseBodyDataGradeVolumes },
      textbookVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gradeVolumes)) {
      $dara.Model.validateArray(this.gradeVolumes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageAddInferenceJobResponseBodyData extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resultImageUrl)) {
      $dara.Model.validateArray(this.resultImageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageQueryPreModelInferenceJobInfoResponseBodyData extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resultImageUrl)) {
      $dara.Model.validateArray(this.resultImageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddInferenceJobResponseBodyData extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resultImageUrl)) {
      $dara.Model.validateArray(this.resultImageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddModelTrainJobResponseBodyDataInferenceJobList extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resultImageUrl)) {
      $dara.Model.validateArray(this.resultImageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddModelTrainJobResponseBodyData extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.imageUrl)) {
      $dara.Model.validateArray(this.imageUrl);
    }
    if(Array.isArray(this.inferenceJobList)) {
      $dara.Model.validateArray(this.inferenceJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryInferenceJobInfoResponseBodyData extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resultImageUrl)) {
      $dara.Model.validateArray(this.resultImageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainJobListResponseBodyDataInferenceJobList extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resultImageUrl)) {
      $dara.Model.validateArray(this.resultImageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainJobListResponseBodyData extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.imageUrl)) {
      $dara.Model.validateArray(this.imageUrl);
    }
    if(Array.isArray(this.inferenceJobList)) {
      $dara.Model.validateArray(this.inferenceJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainStatusResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationAccessIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @example
   * MyAppSecret
   */
  applicationAccessSecret?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessId: 'applicationAccessId',
      applicationAccessSecret: 'applicationAccessSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessId: 'string',
      applicationAccessSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectResponseBodyDataProjectAppsApplicationAccessIds extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @example
   * MyAppSecret
   */
  applicationAccessSecret?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessId: 'applicationAccessId',
      applicationAccessSecret: 'applicationAccessSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessId: 'string',
      applicationAccessSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectResponseBodyDataProjectApps extends $dara.Model {
  applicationAccessIds?: QueryProjectResponseBodyDataProjectAppsApplicationAccessIds[];
  /**
   * @example
   * 2144
   */
  id?: string;
  /**
   * @example
   * 159
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessIds: 'ApplicationAccessIds',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessIds: { 'type': 'array', 'itemType': QueryProjectResponseBodyDataProjectAppsApplicationAccessIds },
      id: 'string',
      projectId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationAccessIds)) {
      $dara.Model.validateArray(this.applicationAccessIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectResponseBodyDataProjectSDK extends $dara.Model {
  /**
   * @example
   * 2024-11-01T13:40:53Z
   */
  createTime?: string;
  /**
   * @example
   * http://demo.com/demo
   */
  demoUrl?: string;
  deployMode?: string;
  /**
   * @example
   * JAVA
   */
  developLanguage?: string;
  /**
   * @example
   * http://demo.com/doc
   */
  docUrl?: string;
  /**
   * @example
   * JSSDK
   */
  sdkName?: string;
  /**
   * @example
   * http://demo.com/sdk.zip
   */
  sdkUrl?: string;
  /**
   * @example
   * 5.1.0
   */
  sdkVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      demoUrl: 'DemoUrl',
      deployMode: 'DeployMode',
      developLanguage: 'DevelopLanguage',
      docUrl: 'DocUrl',
      sdkName: 'SdkName',
      sdkUrl: 'SdkUrl',
      sdkVersion: 'SdkVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      demoUrl: 'string',
      deployMode: 'string',
      developLanguage: 'string',
      docUrl: 'string',
      sdkName: 'string',
      sdkUrl: 'string',
      sdkVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-11-01T13:40:53Z
   */
  createTime?: string;
  projectApps?: QueryProjectResponseBodyDataProjectApps[];
  /**
   * @example
   * 67055
   */
  projectId?: string;
  /**
   * @example
   * MyProject
   */
  projectName?: string;
  projectSDK?: QueryProjectResponseBodyDataProjectSDK[];
  /**
   * @example
   * WebApplication
   */
  projectType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      projectApps: 'ProjectApps',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectSDK: 'ProjectSDK',
      projectType: 'ProjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      projectApps: { 'type': 'array', 'itemType': QueryProjectResponseBodyDataProjectApps },
      projectId: 'string',
      projectName: 'string',
      projectSDK: { 'type': 'array', 'itemType': QueryProjectResponseBodyDataProjectSDK },
      projectType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectApps)) {
      $dara.Model.validateArray(this.projectApps);
    }
    if(Array.isArray(this.projectSDK)) {
      $dara.Model.validateArray(this.projectSDK);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectListResponseBodyDataProjectAppsApplicationAccessIds extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @example
   * MyAppSecret
   */
  applicationAccessSecret?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessId: 'applicationAccessId',
      applicationAccessSecret: 'applicationAccessSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessId: 'string',
      applicationAccessSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectListResponseBodyDataProjectApps extends $dara.Model {
  applicationAccessIds?: QueryProjectListResponseBodyDataProjectAppsApplicationAccessIds[];
  /**
   * @example
   * 4700
   */
  id?: string;
  /**
   * @example
   * 4747
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessIds: 'ApplicationAccessIds',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessIds: { 'type': 'array', 'itemType': QueryProjectListResponseBodyDataProjectAppsApplicationAccessIds },
      id: 'string',
      projectId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationAccessIds)) {
      $dara.Model.validateArray(this.applicationAccessIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectListResponseBodyDataProjectSDK extends $dara.Model {
  /**
   * @example
   * 2024-07-16T08:23:19Z
   */
  createTime?: string;
  /**
   * @example
   * http://demo.com/demo
   */
  demoUrl?: string;
  deployMode?: string;
  /**
   * @example
   * JAVA
   */
  developLanguage?: string;
  /**
   * @example
   * http://demo.com/doc
   */
  docUrl?: string;
  /**
   * @example
   * GO AUTH
   */
  sdkName?: string;
  /**
   * @example
   * http://demo.com/sdk.zip
   */
  sdkUrl?: string;
  /**
   * @example
   * .3.52
   */
  sdkVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      demoUrl: 'DemoUrl',
      deployMode: 'DeployMode',
      developLanguage: 'DevelopLanguage',
      docUrl: 'DocUrl',
      sdkName: 'SdkName',
      sdkUrl: 'SdkUrl',
      sdkVersion: 'SdkVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      demoUrl: 'string',
      deployMode: 'string',
      developLanguage: 'string',
      docUrl: 'string',
      sdkName: 'string',
      sdkUrl: 'string',
      sdkVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2025-02-18 12:10:22
   */
  createTime?: string;
  projectApps?: QueryProjectListResponseBodyDataProjectApps[];
  /**
   * @example
   * 4910
   */
  projectId?: string;
  /**
   * @example
   * MyProject
   */
  projectName?: string;
  projectSDK?: QueryProjectListResponseBodyDataProjectSDK[];
  /**
   * @example
   * WebApplication
   */
  projectType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      projectApps: 'ProjectApps',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectSDK: 'ProjectSDK',
      projectType: 'ProjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      projectApps: { 'type': 'array', 'itemType': QueryProjectListResponseBodyDataProjectApps },
      projectId: 'string',
      projectName: 'string',
      projectSDK: { 'type': 'array', 'itemType': QueryProjectListResponseBodyDataProjectSDK },
      projectType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectApps)) {
      $dara.Model.validateArray(this.projectApps);
    }
    if(Array.isArray(this.projectSDK)) {
      $dara.Model.validateArray(this.projectSDK);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBodyDataProjectAppsApplicationAccessIds extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @example
   * MyAppSecret
   */
  applicationAccessSecret?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessId: 'applicationAccessId',
      applicationAccessSecret: 'applicationAccessSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessId: 'string',
      applicationAccessSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBodyDataProjectApps extends $dara.Model {
  applicationAccessIds?: UpdateProjectResponseBodyDataProjectAppsApplicationAccessIds[];
  /**
   * @example
   * 4498
   */
  id?: string;
  /**
   * @example
   * 1889
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessIds: 'ApplicationAccessIds',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessIds: { 'type': 'array', 'itemType': UpdateProjectResponseBodyDataProjectAppsApplicationAccessIds },
      id: 'string',
      projectId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationAccessIds)) {
      $dara.Model.validateArray(this.applicationAccessIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBodyDataProjectSDK extends $dara.Model {
  /**
   * @example
   * 2024-11-01T13:40:53Z
   */
  createTime?: string;
  /**
   * @example
   * http://demo.com/demo
   */
  demoUrl?: string;
  deployMode?: string;
  /**
   * @example
   * PHP
   */
  developLanguage?: string;
  /**
   * @example
   * http://demo.com/doc
   */
  docUrl?: string;
  sdkName?: string;
  /**
   * @example
   * http://demo.com/sdk.zip
   */
  sdkUrl?: string;
  /**
   * @example
   * 4.13.0
   */
  sdkVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      demoUrl: 'DemoUrl',
      deployMode: 'DeployMode',
      developLanguage: 'DevelopLanguage',
      docUrl: 'DocUrl',
      sdkName: 'SdkName',
      sdkUrl: 'SdkUrl',
      sdkVersion: 'SdkVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      demoUrl: 'string',
      deployMode: 'string',
      developLanguage: 'string',
      docUrl: 'string',
      sdkName: 'string',
      sdkUrl: 'string',
      sdkVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-12-10T02:07:16Z
   */
  createTime?: string;
  projectApps?: UpdateProjectResponseBodyDataProjectApps[];
  /**
   * @example
   * 56160
   */
  projectId?: string;
  /**
   * @example
   * MyProject
   */
  projectName?: string;
  projectSDK?: UpdateProjectResponseBodyDataProjectSDK[];
  /**
   * @example
   * WebApplication
   */
  projectType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      projectApps: 'ProjectApps',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectSDK: 'ProjectSDK',
      projectType: 'ProjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      projectApps: { 'type': 'array', 'itemType': UpdateProjectResponseBodyDataProjectApps },
      projectId: 'string',
      projectName: 'string',
      projectSDK: { 'type': 'array', 'itemType': UpdateProjectResponseBodyDataProjectSDK },
      projectType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectApps)) {
      $dara.Model.validateArray(this.projectApps);
    }
    if(Array.isArray(this.projectSDK)) {
      $dara.Model.validateArray(this.projectSDK);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AliyunConsoleServiceInfoDTO extends $dara.Model {
  /**
   * @example
   * https://www.aliyun.com/product/ai-algorithm
   */
  buyUrl?: string;
  /**
   * @example
   * https://www.aliyun.com/product/ai-algorithm
   */
  documentUrl?: string;
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
      buyUrl: 'buyUrl',
      documentUrl: 'documentUrl',
      freeConcurrencyCount: 'freeConcurrencyCount',
      freeCount: 'freeCount',
      serviceCode: 'serviceCode',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyUrl: 'string',
      documentUrl: 'string',
      freeConcurrencyCount: 'number',
      freeCount: 'number',
      serviceCode: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiMultiResponse extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiSingleResponse extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddInferenceJobCmd extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddModelTrainJobCmd extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.imageUrl)) {
      $dara.Model.validateArray(this.imageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgInferenceJobInfoDTO extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resultImageUrl)) {
      $dara.Model.validateArray(this.resultImageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgModelTrainJobInfoDTO extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.imageUrl)) {
      $dara.Model.validateArray(this.imageUrl);
    }
    if(Array.isArray(this.inferenceJobList)) {
      $dara.Model.validateArray(this.inferenceJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherExpansionPracticeTaskGenerateRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.keySentences)) {
      $dara.Model.validateArray(this.keySentences);
    }
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherExpansionPracticeTaskGenerateResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherExpansionPracticeTaskGenerateResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherSyncPracticeTaskGenerateRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.keySentences)) {
      $dara.Model.validateArray(this.keySentences);
    }
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherSyncPracticeTaskGenerateResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherSyncPracticeTaskGenerateResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: AliyunConsoleServiceInfoDTO[];
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
      data: { 'type': 'array', 'itemType': AliyunConsoleServiceInfoDTO },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessWarrantRequest extends $dara.Model {
  /**
   * @example
   * a123
   */
  appId?: string;
  /**
   * @example
   * e32fac43df0b0b0be32fac43df0b0b0b
   */
  requestSign?: string;
  /**
   * @example
   * 1701000000
   */
  timestamp?: string;
  /**
   * @example
   * 110.25.23.12
   */
  userClientIp?: string;
  /**
   * @example
   * sn123
   */
  userId?: string;
  /**
   * @example
   * 7200
   */
  warrantAvailable?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      requestSign: 'requestSign',
      timestamp: 'timestamp',
      userClientIp: 'userClientIp',
      userId: 'userId',
      warrantAvailable: 'warrantAvailable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestSign: 'string',
      timestamp: 'string',
      userClientIp: 'string',
      userId: 'string',
      warrantAvailable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessWarrantResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: CreateAccessWarrantResponseBodyData;
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
      data: CreateAccessWarrantResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessWarrantResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccessWarrantResponseBody;
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
      body: CreateAccessWarrantResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $dara.Model {
  /**
   * @example
   * MyProject
   */
  projectName?: string;
  /**
   * @example
   * online_oral_evaluation_post_paid_call_count
   */
  projectType?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'projectName',
      projectType: 'projectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      projectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: CreateProjectResponseBodyData;
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
      data: CreateProjectResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProjectResponseBody;
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
      body: CreateProjectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherChineseCompositionTutoringWorkflowRunHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @example
   * xxxxxxx
   */
  callerParentId?: number;
  /**
   * @example
   * sub
   */
  callerType?: string;
  /**
   * @example
   * xxxxxxx
   */
  callerUid?: number;
  /**
   * @example
   * xxxxxxx
   */
  stsTokenCallerUid?: number;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      callerParentId: 'callerParentId',
      callerType: 'callerType',
      callerUid: 'callerUid',
      stsTokenCallerUid: 'stsTokenCallerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      callerParentId: 'number',
      callerType: 'string',
      callerUid: 'number',
      stsTokenCallerUid: 'number',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherChineseCompositionTutoringWorkflowRunRequest extends $dara.Model {
  essayOutline?: string;
  essayRequirements?: string;
  essayTopic?: string;
  /**
   * @example
   * essay
   */
  essayType?: string;
  /**
   * @example
   * 100
   */
  essayWordCount?: number;
  /**
   * @example
   * 3
   */
  grade?: number;
  /**
   * @example
   * streaming
   */
  responseMode?: string;
  /**
   * @example
   * xxxxxxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      essayOutline: 'essayOutline',
      essayRequirements: 'essayRequirements',
      essayTopic: 'essayTopic',
      essayType: 'essayType',
      essayWordCount: 'essayWordCount',
      grade: 'grade',
      responseMode: 'responseMode',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      essayOutline: 'string',
      essayRequirements: 'string',
      essayTopic: 'string',
      essayType: 'string',
      essayWordCount: 'number',
      grade: 'number',
      responseMode: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponseBody extends $dara.Model {
  content?: string;
  /**
   * @example
   * message
   */
  event?: string;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      event: 'event',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      event: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponseBody;
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
      body: ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherEnglishCompositionTutoringWorkflowRunRequest extends $dara.Model {
  /**
   * @example
   * Title: The Importance of Reading
   * I. Introduction
   * II. Body
   * III. Conclusion
   */
  essayOutline?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * No less than 100 words
   */
  essayRequirements?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Discuss what to eat
   */
  essayTopic?: string;
  /**
   * @example
   * essay
   */
  essayType?: string;
  /**
   * @example
   * 100
   */
  essayWordCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  grade?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * streaming
   */
  responseMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      essayOutline: 'essayOutline',
      essayRequirements: 'essayRequirements',
      essayTopic: 'essayTopic',
      essayType: 'essayType',
      essayWordCount: 'essayWordCount',
      grade: 'grade',
      responseMode: 'responseMode',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      essayOutline: 'string',
      essayRequirements: 'string',
      essayTopic: 'string',
      essayType: 'string',
      essayWordCount: 'number',
      grade: 'number',
      responseMode: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponseBody extends $dara.Model {
  /**
   * @example
   * hi
   */
  content?: string;
  /**
   * @example
   * message
   */
  event?: string;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      event: 'event',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      event: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponseBody;
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
      body: ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherEnglishParaphraseChatMessageRequest extends $dara.Model {
  /**
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  /**
   * @example
   * How much is this?
   */
  content?: string;
  /**
   * @example
   * 3
   */
  grade?: number;
  /**
   * @example
   * xxxxxxxxx
   */
  questionId?: string;
  /**
   * @example
   * How to inquire about the price
   */
  questionInfo?: string;
  /**
   * @example
   * sreaming
   */
  responseMode?: string;
  /**
   * @example
   * How much is this?
   */
  userAnswer?: string;
  /**
   * @example
   * xxxxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'chatId',
      content: 'content',
      grade: 'grade',
      questionId: 'questionId',
      questionInfo: 'questionInfo',
      responseMode: 'responseMode',
      userAnswer: 'userAnswer',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      content: 'string',
      grade: 'number',
      questionId: 'string',
      questionInfo: 'string',
      responseMode: 'string',
      userAnswer: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherEnglishParaphraseChatMessageResponseBody extends $dara.Model {
  /**
   * @example
   * how
   */
  content?: string;
  /**
   * @example
   * message
   */
  event?: string;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      event: 'event',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      event: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherEnglishParaphraseChatMessageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteAITeacherEnglishParaphraseChatMessageResponseBody;
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
      body: ExecuteAITeacherEnglishParaphraseChatMessageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dialogueTasks)) {
      $dara.Model.validateArray(this.dialogueTasks);
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    if(this.roleInfo && typeof (this.roleInfo as any).validate === 'function') {
      (this.roleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRefineRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dialogueTasks)) {
      $dara.Model.validateArray(this.dialogueTasks);
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    if(this.roleInfo && typeof (this.roleInfo as any).validate === 'function') {
      (this.roleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRefineResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueRefineResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueTranslateRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dialogueTasks)) {
      $dara.Model.validateArray(this.dialogueTasks);
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    if(this.roleInfo && typeof (this.roleInfo as any).validate === 'function') {
      (this.roleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueTranslateResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueTranslateResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherGrammarCheckRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherGrammarCheckResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherGrammarCheckResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dialogueTasks)) {
      $dara.Model.validateArray(this.dialogueTasks);
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueTranslateRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dialogueTasks)) {
      $dara.Model.validateArray(this.dialogueTasks);
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueTranslateResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherSyncDialogueTranslateResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantDialogueRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scenario?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userMessage?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      chatId: 'chatId',
      scenario: 'scenario',
      userMessage: 'userMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      chatId: 'string',
      scenario: 'string',
      userMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantDialogueResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantDialogueResponseBodyData;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  success?: string;
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
      data: ExecuteTextbookAssistantDialogueResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantDialogueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteTextbookAssistantDialogueResponseBody;
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
      body: ExecuteTextbookAssistantDialogueResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantDifficultyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UP
   */
  action?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6788f4a6b54c5268c1b78a25
   */
  assistant?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      assistant: 'assistant',
      authToken: 'authToken',
      chatId: 'chatId',
      scenario: 'scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      assistant: 'string',
      authToken: 'string',
      chatId: 'string',
      scenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantDifficultyResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantDifficultyResponseBodyData;
  /**
   * @example
   * null
   */
  errCode?: string;
  /**
   * @example
   * null
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0D7D382F-9475-572E-BE83-DDFBF5C5EB24
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
      data: ExecuteTextbookAssistantDifficultyResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantDifficultyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteTextbookAssistantDifficultyResponseBody;
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
      body: ExecuteTextbookAssistantDifficultyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantGrammarCheckRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6788e0b45bdfc807f077a5a1
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      chatId: 'chatId',
      scenario: 'scenario',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      chatId: 'string',
      scenario: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantGrammarCheckResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantGrammarCheckResponseBodyData;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * null
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0bc1e96d17091734639835114e12c8
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
      data: ExecuteTextbookAssistantGrammarCheckResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantGrammarCheckResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteTextbookAssistantGrammarCheckResponseBody;
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
      body: ExecuteTextbookAssistantGrammarCheckResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantRefineByContextRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6788e0b45bdfc807f077a5a1
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      chatId: 'chatId',
      scenario: 'scenario',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      chatId: 'string',
      scenario: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantRefineByContextResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantRefineByContextResponseBodyData;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * null
   */
  errMessage?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6F73C114-A76E-51AD-99E3-BC7B941B69E0
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
      data: ExecuteTextbookAssistantRefineByContextResponseBodyData,
      errCode: 'string',
      errMessage: 'number',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantRefineByContextResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteTextbookAssistantRefineByContextResponseBody;
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
      body: ExecuteTextbookAssistantRefineByContextResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantRetryConversationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6788e0b4b54c5268c1b78638
   */
  assistant?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      authToken: 'authToken',
      chatId: 'chatId',
      scenario: 'scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      authToken: 'string',
      chatId: 'string',
      scenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantRetryConversationResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantRetryConversationResponseBodyData;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * null
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2F2ABF4B-A4F6-5EC7-B287-7EF5B156F1ED
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
      data: ExecuteTextbookAssistantRetryConversationResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantRetryConversationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteTextbookAssistantRetryConversationResponseBody;
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
      body: ExecuteTextbookAssistantRetryConversationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantStartConversationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0c05700d4d9411efbe6e0c42a106bb02
   */
  articleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      articleId: 'articleId',
      authToken: 'authToken',
      scenario: 'scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articleId: 'string',
      authToken: 'string',
      scenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantStartConversationResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantStartConversationResponseBodyData;
  /**
   * @example
   * B_USER_NOT_FOUND_EXCEPTION
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6F73C114-A76E-51AD-99E3-BC7B941B69E0
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
      data: ExecuteTextbookAssistantStartConversationResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantStartConversationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteTextbookAssistantStartConversationResponseBody;
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
      body: ExecuteTextbookAssistantStartConversationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantSuggestionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6788e0b4b54c5268c1b78638
   */
  assistant?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6788e0b4b54c5268c1b78638
   */
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      authToken: 'authToken',
      chatId: 'chatId',
      scenario: 'scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      authToken: 'string',
      chatId: 'string',
      scenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantSuggestionResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantSuggestionResponseBodyData;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * null
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpstatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0D7D382F-9475-572E-BE83-DDFBF5C5EB24
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
      httpstatusCode: 'httpstatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ExecuteTextbookAssistantSuggestionResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpstatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantSuggestionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteTextbookAssistantSuggestionResponseBody;
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
      body: ExecuteTextbookAssistantSuggestionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantTranslateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6788e0b4b54c5268c1b78638
   */
  assistant?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      authToken: 'authToken',
      chatId: 'chatId',
      scenario: 'scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      authToken: 'string',
      chatId: 'string',
      scenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantTranslateResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantTranslateResponseBodyData;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ""
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9EB79C1E-36C2-5777-BED6-C23A98DF0637
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
      data: ExecuteTextbookAssistantTranslateResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantTranslateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteTextbookAssistantTranslateResponseBody;
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
      body: ExecuteTextbookAssistantTranslateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dialogueTasks)) {
      $dara.Model.validateArray(this.dialogueTasks);
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    if(this.roleInfo && typeof (this.roleInfo as any).validate === 'function') {
      (this.roleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherSyncDialogueSuggestionRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dialogueTasks)) {
      $dara.Model.validateArray(this.dialogueTasks);
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherSyncDialogueSuggestionResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherSyncDialogueSuggestionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextbookAssistantTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 700d4d9411efbe6e0
   * 
   * **if can be null:**
   * false
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 25032PS56C
   */
  model?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'deviceId',
      model: 'model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      model: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextbookAssistantTokenResponseBody extends $dara.Model {
  data?: GetTextbookAssistantTokenResponseBodyData;
  /**
   * @example
   * 0
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0A5E9849-A2F0-551D-A7D8-1A8118557BAB
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
      data: GetTextbookAssistantTokenResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextbookAssistantTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTextbookAssistantTokenResponseBody;
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
      body: GetTextbookAssistantTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantArticlesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc_a893b8492c4be046cbc906c566aeb8c9
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 90aa861b4d9311efbe6e0c42a106bb02
   */
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      directoryId: 'directoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      directoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantArticlesResponseBody extends $dara.Model {
  data?: ListTextbookAssistantArticlesResponseBodyData[];
  /**
   * @example
   * 0
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 70412360-4272-571A-827D-84C2C07C450F
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
      data: { 'type': 'array', 'itemType': ListTextbookAssistantArticlesResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantArticlesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTextbookAssistantArticlesResponseBody;
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
      body: ListTextbookAssistantArticlesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 231698
   */
  bookId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      bookId: 'bookId',
      scenario: 'scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      bookId: 'string',
      scenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesResponseBody extends $dara.Model {
  data?: ListTextbookAssistantBookDirectoriesResponseBodyData;
  /**
   * @example
   * B_USER_NOT_FOUND_EXCEPTION
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0A5E9849-A2F0-551D-A7D8-1A8118557BAB
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
      data: ListTextbookAssistantBookDirectoriesResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBookDirectoriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTextbookAssistantBookDirectoriesResponseBody;
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
      body: ListTextbookAssistantBookDirectoriesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBooksRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc_197bf5bb81889cc79eb51ae9b8c0cea3
   */
  authToken?: string;
  /**
   * @example
   * 231698
   */
  bookId?: string;
  /**
   * @example
   * 1
   */
  grade?: string;
  /**
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @example
   * 1
   */
  page?: string;
  version?: string;
  /**
   * @example
   * 1
   */
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      bookId: 'bookId',
      grade: 'grade',
      maxResults: 'maxResults',
      page: 'page',
      version: 'version',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      bookId: 'string',
      grade: 'string',
      maxResults: 'string',
      page: 'string',
      version: 'string',
      volume: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBooksResponseBody extends $dara.Model {
  data?: ListTextbookAssistantBooksResponseBodyData;
  /**
   * @example
   * B_USER_NOT_FOUND_EXCEPTION
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B695B377-7029-5805-9DE2-1AAE06C1BF6B
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
      data: ListTextbookAssistantBooksResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBooksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTextbookAssistantBooksResponseBody;
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
      body: ListTextbookAssistantBooksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantGradeVolumesRequest extends $dara.Model {
  /**
   * @example
   * tc_197bf5bb81889cc79eb51ae9b8c0cea3
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      scenario: 'scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      scenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantGradeVolumesResponseBody extends $dara.Model {
  data?: ListTextbookAssistantGradeVolumesResponseBodyData;
  /**
   * @example
   * 0
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F3B1AAF2-3041-5AA7-A352-BD5F998FA465
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
      data: ListTextbookAssistantGradeVolumesResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantGradeVolumesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTextbookAssistantGradeVolumesResponseBody;
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
      body: ListTextbookAssistantGradeVolumesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageAddInferenceJobRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.imageUrl)) {
      $dara.Model.validateArray(this.imageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageAddInferenceJobResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageAddInferenceJobResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageQueryImageAssetRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageQueryImageAssetResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageQueryPreModelInferenceJobInfoRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageQueryPreModelInferenceJobInfoResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddInferenceJobRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddInferenceJobResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddInferenceJobResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddModelTrainJobRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.imageUrl)) {
      $dara.Model.validateArray(this.imageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddModelTrainJobResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgAddModelTrainJobResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryImageAssetRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryImageAssetResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryInferenceJobInfoRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryInferenceJobInfoResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryInferenceJobInfoResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainJobListResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainJobListResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainStatusRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainStatusResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Personalizedtxt2imgQueryModelTrainStatusResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationAccessIdRequest extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessId: 'applicationAccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationAccessIdResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: QueryApplicationAccessIdResponseBodyData;
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
      data: QueryApplicationAccessIdResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationAccessIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryApplicationAccessIdResponseBody;
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
      body: QueryApplicationAccessIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectRequest extends $dara.Model {
  /**
   * @example
   * 123
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: QueryProjectResponseBodyData;
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
      data: QueryProjectResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryProjectResponseBody;
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
      body: QueryProjectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectListResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: QueryProjectListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': QueryProjectListResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryProjectListResponseBody;
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
      body: QueryProjectListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPurchasedServiceResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: AliyunConsoleServiceInfoDTO[];
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
      data: { 'type': 'array', 'itemType': AliyunConsoleServiceInfoDTO },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPurchasedServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPurchasedServiceResponseBody;
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
      body: QueryPurchasedServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $dara.Model {
  /**
   * @example
   * 123
   */
  projectId?: string;
  /**
   * @example
   * MyProject
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
      projectName: 'projectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: UpdateProjectResponseBodyData;
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
      data: UpdateProjectResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProjectResponseBody;
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
      body: UpdateProjectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aicontent", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 拓展练问答对生成
   * 
   * @param request - AITeacherExpansionPracticeTaskGenerateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AITeacherExpansionPracticeTaskGenerateResponse
   */
  async aITeacherExpansionPracticeTaskGenerateWithOptions(request: AITeacherExpansionPracticeTaskGenerateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AITeacherExpansionPracticeTaskGenerateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.grade)) {
      body["grade"] = request.grade;
    }

    if (!$dara.isNull(request.keySentences)) {
      body["keySentences"] = request.keySentences;
    }

    if (!$dara.isNull(request.keyWords)) {
      body["keyWords"] = request.keyWords;
    }

    if (!$dara.isNull(request.learningObject)) {
      body["learningObject"] = request.learningObject;
    }

    if (!$dara.isNull(request.textContent)) {
      body["textContent"] = request.textContent;
    }

    if (!$dara.isNull(request.textbook)) {
      body["textbook"] = request.textbook;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AITeacherExpansionPracticeTaskGenerateResponse>(await this.callApi(params, req, runtime), new AITeacherExpansionPracticeTaskGenerateResponse({}));
    } else {
      return $dara.cast<AITeacherExpansionPracticeTaskGenerateResponse>(await this.execute(params, req, runtime), new AITeacherExpansionPracticeTaskGenerateResponse({}));
    }

  }

  /**
   * 拓展练问答对生成
   * 
   * @param request - AITeacherExpansionPracticeTaskGenerateRequest
   * @returns AITeacherExpansionPracticeTaskGenerateResponse
   */
  async aITeacherExpansionPracticeTaskGenerate(request: AITeacherExpansionPracticeTaskGenerateRequest): Promise<AITeacherExpansionPracticeTaskGenerateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async aITeacherSyncPracticeTaskGenerateWithOptions(request: AITeacherSyncPracticeTaskGenerateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AITeacherSyncPracticeTaskGenerateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.grade)) {
      body["grade"] = request.grade;
    }

    if (!$dara.isNull(request.keySentences)) {
      body["keySentences"] = request.keySentences;
    }

    if (!$dara.isNull(request.keyWords)) {
      body["keyWords"] = request.keyWords;
    }

    if (!$dara.isNull(request.learningObject)) {
      body["learningObject"] = request.learningObject;
    }

    if (!$dara.isNull(request.textContent)) {
      body["textContent"] = request.textContent;
    }

    if (!$dara.isNull(request.textbook)) {
      body["textbook"] = request.textbook;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AITeacherSyncPracticeTaskGenerateResponse>(await this.callApi(params, req, runtime), new AITeacherSyncPracticeTaskGenerateResponse({}));
    } else {
      return $dara.cast<AITeacherSyncPracticeTaskGenerateResponse>(await this.execute(params, req, runtime), new AITeacherSyncPracticeTaskGenerateResponse({}));
    }

  }

  /**
   * 同步基础练问答对生成
   * 
   * @param request - AITeacherSyncPracticeTaskGenerateRequest
   * @returns AITeacherSyncPracticeTaskGenerateResponse
   */
  async aITeacherSyncPracticeTaskGenerate(request: AITeacherSyncPracticeTaskGenerateRequest): Promise<AITeacherSyncPracticeTaskGenerateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async aliyunConsoleOpenApiQueryAliyunConsoleServcieListWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse>(await this.callApi(params, req, runtime), new AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse({}));
    } else {
      return $dara.cast<AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse>(await this.execute(params, req, runtime), new AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse({}));
    }

  }

  /**
   * 阿里云控制台/列出阿里云控制台上可使用的服务列表
   * @returns AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse
   */
  async aliyunConsoleOpenApiQueryAliyunConsoleServcieList(): Promise<AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async aliyunConsoleOpenApiQueryAliyunConsoleServiceListWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "AliyunConsoleOpenApiQueryAliyunConsoleServiceList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/queryAliyunConsoleServiceList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse>(await this.callApi(params, req, runtime), new AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse({}));
    } else {
      return $dara.cast<AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse>(await this.execute(params, req, runtime), new AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse({}));
    }

  }

  /**
   * 阿里云控制台/列出阿里云控制台上可使用的服务列表
   * @returns AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse
   */
  async aliyunConsoleOpenApiQueryAliyunConsoleServiceList(): Promise<AliyunConsoleOpenApiQueryAliyunConsoleServiceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aliyunConsoleOpenApiQueryAliyunConsoleServiceListWithOptions(headers, runtime);
  }

  /**
   * 阿里云控制台/授权凭证创建
   * 
   * @param request - CreateAccessWarrantRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessWarrantResponse
   */
  async createAccessWarrantWithOptions(request: CreateAccessWarrantRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateAccessWarrantResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.requestSign)) {
      body["requestSign"] = request.requestSign;
    }

    if (!$dara.isNull(request.timestamp)) {
      body["timestamp"] = request.timestamp;
    }

    if (!$dara.isNull(request.userClientIp)) {
      body["userClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    if (!$dara.isNull(request.warrantAvailable)) {
      body["warrantAvailable"] = request.warrantAvailable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessWarrant",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/createAccessWarrant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAccessWarrantResponse>(await this.callApi(params, req, runtime), new CreateAccessWarrantResponse({}));
    } else {
      return $dara.cast<CreateAccessWarrantResponse>(await this.execute(params, req, runtime), new CreateAccessWarrantResponse({}));
    }

  }

  /**
   * 阿里云控制台/授权凭证创建
   * 
   * @param request - CreateAccessWarrantRequest
   * @returns CreateAccessWarrantResponse
   */
  async createAccessWarrant(request: CreateAccessWarrantRequest): Promise<CreateAccessWarrantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAccessWarrantWithOptions(request, headers, runtime);
  }

  /**
   * 阿里云控制台/创建项目
   * 
   * @param request - CreateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(request: CreateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectName)) {
      body["projectName"] = request.projectName;
    }

    if (!$dara.isNull(request.projectType)) {
      body["projectType"] = request.projectType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/createProject`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
    } else {
      return $dara.cast<CreateProjectResponse>(await this.execute(params, req, runtime), new CreateProjectResponse({}));
    }

  }

  /**
   * 阿里云控制台/创建项目
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  /**
   * 中文作文辅导
   * 
   * @param request - ExecuteAITeacherChineseCompositionTutoringWorkflowRunRequest
   * @param headers - ExecuteAITeacherChineseCompositionTutoringWorkflowRunHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse
   */
  async executeAITeacherChineseCompositionTutoringWorkflowRunWithOptions(request: ExecuteAITeacherChineseCompositionTutoringWorkflowRunRequest, headers: ExecuteAITeacherChineseCompositionTutoringWorkflowRunHeaders, runtime: $dara.RuntimeOptions): Promise<ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.essayOutline)) {
      body["essayOutline"] = request.essayOutline;
    }

    if (!$dara.isNull(request.essayRequirements)) {
      body["essayRequirements"] = request.essayRequirements;
    }

    if (!$dara.isNull(request.essayTopic)) {
      body["essayTopic"] = request.essayTopic;
    }

    if (!$dara.isNull(request.essayType)) {
      body["essayType"] = request.essayType;
    }

    if (!$dara.isNull(request.essayWordCount)) {
      body["essayWordCount"] = request.essayWordCount;
    }

    if (!$dara.isNull(request.grade)) {
      body["grade"] = request.grade;
    }

    if (!$dara.isNull(request.responseMode)) {
      body["responseMode"] = request.responseMode;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.callerParentId)) {
      realHeaders["callerParentId"] = JSON.stringify(headers.callerParentId);
    }

    if (!$dara.isNull(headers.callerType)) {
      realHeaders["callerType"] = String(headers.callerType);
    }

    if (!$dara.isNull(headers.callerUid)) {
      realHeaders["callerUid"] = JSON.stringify(headers.callerUid);
    }

    if (!$dara.isNull(headers.stsTokenCallerUid)) {
      realHeaders["stsTokenCallerUid"] = JSON.stringify(headers.stsTokenCallerUid);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAITeacherChineseCompositionTutoringWorkflowRun",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/pop/api/v1/intelligentAgent/chineseCompositionTutoring/workflowRun`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse({}));
    } else {
      return $dara.cast<ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse>(await this.execute(params, req, runtime), new ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse({}));
    }

  }

  /**
   * 中文作文辅导
   * 
   * @param request - ExecuteAITeacherChineseCompositionTutoringWorkflowRunRequest
   * @returns ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse
   */
  async executeAITeacherChineseCompositionTutoringWorkflowRun(request: ExecuteAITeacherChineseCompositionTutoringWorkflowRunRequest): Promise<ExecuteAITeacherChineseCompositionTutoringWorkflowRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ExecuteAITeacherChineseCompositionTutoringWorkflowRunHeaders({ });
    return await this.executeAITeacherChineseCompositionTutoringWorkflowRunWithOptions(request, headers, runtime);
  }

  /**
   * 英语作文辅导
   * 
   * @param request - ExecuteAITeacherEnglishCompositionTutoringWorkflowRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse
   */
  async executeAITeacherEnglishCompositionTutoringWorkflowRunWithOptions(request: ExecuteAITeacherEnglishCompositionTutoringWorkflowRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.essayOutline)) {
      body["essayOutline"] = request.essayOutline;
    }

    if (!$dara.isNull(request.essayRequirements)) {
      body["essayRequirements"] = request.essayRequirements;
    }

    if (!$dara.isNull(request.essayTopic)) {
      body["essayTopic"] = request.essayTopic;
    }

    if (!$dara.isNull(request.essayType)) {
      body["essayType"] = request.essayType;
    }

    if (!$dara.isNull(request.essayWordCount)) {
      body["essayWordCount"] = request.essayWordCount;
    }

    if (!$dara.isNull(request.grade)) {
      body["grade"] = request.grade;
    }

    if (!$dara.isNull(request.responseMode)) {
      body["responseMode"] = request.responseMode;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAITeacherEnglishCompositionTutoringWorkflowRun",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/pop/api/v1/intelligentAgent/englishCompositionTutoring/workflowRun`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse({}));
    } else {
      return $dara.cast<ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse>(await this.execute(params, req, runtime), new ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse({}));
    }

  }

  /**
   * 英语作文辅导
   * 
   * @param request - ExecuteAITeacherEnglishCompositionTutoringWorkflowRunRequest
   * @returns ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse
   */
  async executeAITeacherEnglishCompositionTutoringWorkflowRun(request: ExecuteAITeacherEnglishCompositionTutoringWorkflowRunRequest): Promise<ExecuteAITeacherEnglishCompositionTutoringWorkflowRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherEnglishCompositionTutoringWorkflowRunWithOptions(request, headers, runtime);
  }

  /**
   * 英文释义
   * 
   * @param request - ExecuteAITeacherEnglishParaphraseChatMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherEnglishParaphraseChatMessageResponse
   */
  async executeAITeacherEnglishParaphraseChatMessageWithOptions(request: ExecuteAITeacherEnglishParaphraseChatMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteAITeacherEnglishParaphraseChatMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.grade)) {
      body["grade"] = request.grade;
    }

    if (!$dara.isNull(request.questionId)) {
      body["questionId"] = request.questionId;
    }

    if (!$dara.isNull(request.questionInfo)) {
      body["questionInfo"] = request.questionInfo;
    }

    if (!$dara.isNull(request.responseMode)) {
      body["responseMode"] = request.responseMode;
    }

    if (!$dara.isNull(request.userAnswer)) {
      body["userAnswer"] = request.userAnswer;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAITeacherEnglishParaphraseChatMessage",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/pop/api/v1/intelligentAgent/englishParaphrase/chatMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteAITeacherEnglishParaphraseChatMessageResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherEnglishParaphraseChatMessageResponse({}));
    } else {
      return $dara.cast<ExecuteAITeacherEnglishParaphraseChatMessageResponse>(await this.execute(params, req, runtime), new ExecuteAITeacherEnglishParaphraseChatMessageResponse({}));
    }

  }

  /**
   * 英文释义
   * 
   * @param request - ExecuteAITeacherEnglishParaphraseChatMessageRequest
   * @returns ExecuteAITeacherEnglishParaphraseChatMessageResponse
   */
  async executeAITeacherEnglishParaphraseChatMessage(request: ExecuteAITeacherEnglishParaphraseChatMessageRequest): Promise<ExecuteAITeacherEnglishParaphraseChatMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherEnglishParaphraseChatMessageWithOptions(request, headers, runtime);
  }

  /**
   * 进行拓展练对话
   * 
   * @param request - ExecuteAITeacherExpansionDialogueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAITeacherExpansionDialogueResponse
   */
  async executeAITeacherExpansionDialogueWithOptions(request: ExecuteAITeacherExpansionDialogueRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteAITeacherExpansionDialogueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.background)) {
      body["background"] = request.background;
    }

    if (!$dara.isNull(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!$dara.isNull(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    if (!$dara.isNull(request.roleInfo)) {
      body["roleInfo"] = request.roleInfo;
    }

    if (!$dara.isNull(request.startSentence)) {
      body["startSentence"] = request.startSentence;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteAITeacherExpansionDialogueResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherExpansionDialogueResponse({}));
    } else {
      return $dara.cast<ExecuteAITeacherExpansionDialogueResponse>(await this.execute(params, req, runtime), new ExecuteAITeacherExpansionDialogueResponse({}));
    }

  }

  /**
   * 进行拓展练对话
   * 
   * @param request - ExecuteAITeacherExpansionDialogueRequest
   * @returns ExecuteAITeacherExpansionDialogueResponse
   */
  async executeAITeacherExpansionDialogue(request: ExecuteAITeacherExpansionDialogueRequest): Promise<ExecuteAITeacherExpansionDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async executeAITeacherExpansionDialogueRefineWithOptions(request: ExecuteAITeacherExpansionDialogueRefineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteAITeacherExpansionDialogueRefineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.background)) {
      body["background"] = request.background;
    }

    if (!$dara.isNull(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!$dara.isNull(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    if (!$dara.isNull(request.roleInfo)) {
      body["roleInfo"] = request.roleInfo;
    }

    if (!$dara.isNull(request.startSentence)) {
      body["startSentence"] = request.startSentence;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteAITeacherExpansionDialogueRefineResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherExpansionDialogueRefineResponse({}));
    } else {
      return $dara.cast<ExecuteAITeacherExpansionDialogueRefineResponse>(await this.execute(params, req, runtime), new ExecuteAITeacherExpansionDialogueRefineResponse({}));
    }

  }

  /**
   * 拓展练根据上下文进行润色
   * 
   * @param request - ExecuteAITeacherExpansionDialogueRefineRequest
   * @returns ExecuteAITeacherExpansionDialogueRefineResponse
   */
  async executeAITeacherExpansionDialogueRefine(request: ExecuteAITeacherExpansionDialogueRefineRequest): Promise<ExecuteAITeacherExpansionDialogueRefineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async executeAITeacherExpansionDialogueTranslateWithOptions(request: ExecuteAITeacherExpansionDialogueTranslateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteAITeacherExpansionDialogueTranslateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.background)) {
      body["background"] = request.background;
    }

    if (!$dara.isNull(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    if (!$dara.isNull(request.roleInfo)) {
      body["roleInfo"] = request.roleInfo;
    }

    if (!$dara.isNull(request.startSentence)) {
      body["startSentence"] = request.startSentence;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteAITeacherExpansionDialogueTranslateResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherExpansionDialogueTranslateResponse({}));
    } else {
      return $dara.cast<ExecuteAITeacherExpansionDialogueTranslateResponse>(await this.execute(params, req, runtime), new ExecuteAITeacherExpansionDialogueTranslateResponse({}));
    }

  }

  /**
   * 拓展练语境翻译
   * 
   * @param request - ExecuteAITeacherExpansionDialogueTranslateRequest
   * @returns ExecuteAITeacherExpansionDialogueTranslateResponse
   */
  async executeAITeacherExpansionDialogueTranslate(request: ExecuteAITeacherExpansionDialogueTranslateRequest): Promise<ExecuteAITeacherExpansionDialogueTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async executeAITeacherGrammarCheckWithOptions(request: ExecuteAITeacherGrammarCheckRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteAITeacherGrammarCheckResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteAITeacherGrammarCheckResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherGrammarCheckResponse({}));
    } else {
      return $dara.cast<ExecuteAITeacherGrammarCheckResponse>(await this.execute(params, req, runtime), new ExecuteAITeacherGrammarCheckResponse({}));
    }

  }

  /**
   * 语法检测
   * 
   * @param request - ExecuteAITeacherGrammarCheckRequest
   * @returns ExecuteAITeacherGrammarCheckResponse
   */
  async executeAITeacherGrammarCheck(request: ExecuteAITeacherGrammarCheckRequest): Promise<ExecuteAITeacherGrammarCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async executeAITeacherSyncDialogueWithOptions(request: ExecuteAITeacherSyncDialogueRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteAITeacherSyncDialogueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!$dara.isNull(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteAITeacherSyncDialogueResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherSyncDialogueResponse({}));
    } else {
      return $dara.cast<ExecuteAITeacherSyncDialogueResponse>(await this.execute(params, req, runtime), new ExecuteAITeacherSyncDialogueResponse({}));
    }

  }

  /**
   * 进行同步练对话
   * 
   * @param request - ExecuteAITeacherSyncDialogueRequest
   * @returns ExecuteAITeacherSyncDialogueResponse
   */
  async executeAITeacherSyncDialogue(request: ExecuteAITeacherSyncDialogueRequest): Promise<ExecuteAITeacherSyncDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async executeAITeacherSyncDialogueTranslateWithOptions(request: ExecuteAITeacherSyncDialogueTranslateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteAITeacherSyncDialogueTranslateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteAITeacherSyncDialogueTranslateResponse>(await this.callApi(params, req, runtime), new ExecuteAITeacherSyncDialogueTranslateResponse({}));
    } else {
      return $dara.cast<ExecuteAITeacherSyncDialogueTranslateResponse>(await this.execute(params, req, runtime), new ExecuteAITeacherSyncDialogueTranslateResponse({}));
    }

  }

  /**
   * 同步练语境翻译
   * 
   * @param request - ExecuteAITeacherSyncDialogueTranslateRequest
   * @returns ExecuteAITeacherSyncDialogueTranslateResponse
   */
  async executeAITeacherSyncDialogueTranslate(request: ExecuteAITeacherSyncDialogueTranslateRequest): Promise<ExecuteAITeacherSyncDialogueTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAITeacherSyncDialogueTranslateWithOptions(request, headers, runtime);
  }

  /**
   * 进行AI对话
   * 
   * @param request - ExecuteTextbookAssistantDialogueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantDialogueResponse
   */
  async executeTextbookAssistantDialogueWithOptions(request: ExecuteTextbookAssistantDialogueRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteTextbookAssistantDialogueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.userMessage)) {
      body["userMessage"] = request.userMessage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantDialogue",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/ExecuteDialogue`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteTextbookAssistantDialogueResponse>(await this.callApi(params, req, runtime), new ExecuteTextbookAssistantDialogueResponse({}));
    } else {
      return $dara.cast<ExecuteTextbookAssistantDialogueResponse>(await this.execute(params, req, runtime), new ExecuteTextbookAssistantDialogueResponse({}));
    }

  }

  /**
   * 进行AI对话
   * 
   * @param request - ExecuteTextbookAssistantDialogueRequest
   * @returns ExecuteTextbookAssistantDialogueResponse
   */
  async executeTextbookAssistantDialogue(request: ExecuteTextbookAssistantDialogueRequest): Promise<ExecuteTextbookAssistantDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantDialogueWithOptions(request, headers, runtime);
  }

  /**
   * 调整难度
   * 
   * @param request - ExecuteTextbookAssistantDifficultyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantDifficultyResponse
   */
  async executeTextbookAssistantDifficultyWithOptions(request: ExecuteTextbookAssistantDifficultyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteTextbookAssistantDifficultyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.assistant)) {
      body["assistant"] = request.assistant;
    }

    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantDifficulty",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/ExecuteDifficulty`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteTextbookAssistantDifficultyResponse>(await this.callApi(params, req, runtime), new ExecuteTextbookAssistantDifficultyResponse({}));
    } else {
      return $dara.cast<ExecuteTextbookAssistantDifficultyResponse>(await this.execute(params, req, runtime), new ExecuteTextbookAssistantDifficultyResponse({}));
    }

  }

  /**
   * 调整难度
   * 
   * @param request - ExecuteTextbookAssistantDifficultyRequest
   * @returns ExecuteTextbookAssistantDifficultyResponse
   */
  async executeTextbookAssistantDifficulty(request: ExecuteTextbookAssistantDifficultyRequest): Promise<ExecuteTextbookAssistantDifficultyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantDifficultyWithOptions(request, headers, runtime);
  }

  /**
   * 语法检测
   * 
   * @param request - ExecuteTextbookAssistantGrammarCheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantGrammarCheckResponse
   */
  async executeTextbookAssistantGrammarCheckWithOptions(request: ExecuteTextbookAssistantGrammarCheckRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteTextbookAssistantGrammarCheckResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.user)) {
      body["user"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantGrammarCheck",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/ExecuteGrammarCheck`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteTextbookAssistantGrammarCheckResponse>(await this.callApi(params, req, runtime), new ExecuteTextbookAssistantGrammarCheckResponse({}));
    } else {
      return $dara.cast<ExecuteTextbookAssistantGrammarCheckResponse>(await this.execute(params, req, runtime), new ExecuteTextbookAssistantGrammarCheckResponse({}));
    }

  }

  /**
   * 语法检测
   * 
   * @param request - ExecuteTextbookAssistantGrammarCheckRequest
   * @returns ExecuteTextbookAssistantGrammarCheckResponse
   */
  async executeTextbookAssistantGrammarCheck(request: ExecuteTextbookAssistantGrammarCheckRequest): Promise<ExecuteTextbookAssistantGrammarCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantGrammarCheckWithOptions(request, headers, runtime);
  }

  /**
   * 句子润色
   * 
   * @param request - ExecuteTextbookAssistantRefineByContextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantRefineByContextResponse
   */
  async executeTextbookAssistantRefineByContextWithOptions(request: ExecuteTextbookAssistantRefineByContextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteTextbookAssistantRefineByContextResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.user)) {
      body["user"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantRefineByContext",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/RefineByContext`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteTextbookAssistantRefineByContextResponse>(await this.callApi(params, req, runtime), new ExecuteTextbookAssistantRefineByContextResponse({}));
    } else {
      return $dara.cast<ExecuteTextbookAssistantRefineByContextResponse>(await this.execute(params, req, runtime), new ExecuteTextbookAssistantRefineByContextResponse({}));
    }

  }

  /**
   * 句子润色
   * 
   * @param request - ExecuteTextbookAssistantRefineByContextRequest
   * @returns ExecuteTextbookAssistantRefineByContextResponse
   */
  async executeTextbookAssistantRefineByContext(request: ExecuteTextbookAssistantRefineByContextRequest): Promise<ExecuteTextbookAssistantRefineByContextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantRefineByContextWithOptions(request, headers, runtime);
  }

  /**
   * 对话重试
   * 
   * @param request - ExecuteTextbookAssistantRetryConversationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantRetryConversationResponse
   */
  async executeTextbookAssistantRetryConversationWithOptions(request: ExecuteTextbookAssistantRetryConversationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteTextbookAssistantRetryConversationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistant)) {
      body["assistant"] = request.assistant;
    }

    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantRetryConversation",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/RetryConversation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteTextbookAssistantRetryConversationResponse>(await this.callApi(params, req, runtime), new ExecuteTextbookAssistantRetryConversationResponse({}));
    } else {
      return $dara.cast<ExecuteTextbookAssistantRetryConversationResponse>(await this.execute(params, req, runtime), new ExecuteTextbookAssistantRetryConversationResponse({}));
    }

  }

  /**
   * 对话重试
   * 
   * @param request - ExecuteTextbookAssistantRetryConversationRequest
   * @returns ExecuteTextbookAssistantRetryConversationResponse
   */
  async executeTextbookAssistantRetryConversation(request: ExecuteTextbookAssistantRetryConversationRequest): Promise<ExecuteTextbookAssistantRetryConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantRetryConversationWithOptions(request, headers, runtime);
  }

  /**
   * 开启自由对话
   * 
   * @param request - ExecuteTextbookAssistantStartConversationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantStartConversationResponse
   */
  async executeTextbookAssistantStartConversationWithOptions(request: ExecuteTextbookAssistantStartConversationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteTextbookAssistantStartConversationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.articleId)) {
      body["articleId"] = request.articleId;
    }

    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantStartConversation",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/StartConversation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteTextbookAssistantStartConversationResponse>(await this.callApi(params, req, runtime), new ExecuteTextbookAssistantStartConversationResponse({}));
    } else {
      return $dara.cast<ExecuteTextbookAssistantStartConversationResponse>(await this.execute(params, req, runtime), new ExecuteTextbookAssistantStartConversationResponse({}));
    }

  }

  /**
   * 开启自由对话
   * 
   * @param request - ExecuteTextbookAssistantStartConversationRequest
   * @returns ExecuteTextbookAssistantStartConversationResponse
   */
  async executeTextbookAssistantStartConversation(request: ExecuteTextbookAssistantStartConversationRequest): Promise<ExecuteTextbookAssistantStartConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantStartConversationWithOptions(request, headers, runtime);
  }

  /**
   * 获取鉴权参数
   * 
   * @param request - ExecuteTextbookAssistantSuggestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantSuggestionResponse
   */
  async executeTextbookAssistantSuggestionWithOptions(request: ExecuteTextbookAssistantSuggestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteTextbookAssistantSuggestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistant)) {
      body["assistant"] = request.assistant;
    }

    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantSuggestion",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/Suggestion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteTextbookAssistantSuggestionResponse>(await this.callApi(params, req, runtime), new ExecuteTextbookAssistantSuggestionResponse({}));
    } else {
      return $dara.cast<ExecuteTextbookAssistantSuggestionResponse>(await this.execute(params, req, runtime), new ExecuteTextbookAssistantSuggestionResponse({}));
    }

  }

  /**
   * 获取鉴权参数
   * 
   * @param request - ExecuteTextbookAssistantSuggestionRequest
   * @returns ExecuteTextbookAssistantSuggestionResponse
   */
  async executeTextbookAssistantSuggestion(request: ExecuteTextbookAssistantSuggestionRequest): Promise<ExecuteTextbookAssistantSuggestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantSuggestionWithOptions(request, headers, runtime);
  }

  /**
   * 翻译消息内容
   * 
   * @param request - ExecuteTextbookAssistantTranslateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTextbookAssistantTranslateResponse
   */
  async executeTextbookAssistantTranslateWithOptions(request: ExecuteTextbookAssistantTranslateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExecuteTextbookAssistantTranslateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistant)) {
      body["assistant"] = request.assistant;
    }

    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTextbookAssistantTranslate",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/dialogue/ExecuteTranslate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteTextbookAssistantTranslateResponse>(await this.callApi(params, req, runtime), new ExecuteTextbookAssistantTranslateResponse({}));
    } else {
      return $dara.cast<ExecuteTextbookAssistantTranslateResponse>(await this.execute(params, req, runtime), new ExecuteTextbookAssistantTranslateResponse({}));
    }

  }

  /**
   * 翻译消息内容
   * 
   * @param request - ExecuteTextbookAssistantTranslateRequest
   * @returns ExecuteTextbookAssistantTranslateResponse
   */
  async executeTextbookAssistantTranslate(request: ExecuteTextbookAssistantTranslateRequest): Promise<ExecuteTextbookAssistantTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTextbookAssistantTranslateWithOptions(request, headers, runtime);
  }

  /**
   * 拓展练小助手
   * 
   * @param request - GetAITeacherExpansionDialogueSuggestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAITeacherExpansionDialogueSuggestionResponse
   */
  async getAITeacherExpansionDialogueSuggestionWithOptions(request: GetAITeacherExpansionDialogueSuggestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAITeacherExpansionDialogueSuggestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.background)) {
      body["background"] = request.background;
    }

    if (!$dara.isNull(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!$dara.isNull(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    if (!$dara.isNull(request.roleInfo)) {
      body["roleInfo"] = request.roleInfo;
    }

    if (!$dara.isNull(request.startSentence)) {
      body["startSentence"] = request.startSentence;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAITeacherExpansionDialogueSuggestionResponse>(await this.callApi(params, req, runtime), new GetAITeacherExpansionDialogueSuggestionResponse({}));
    } else {
      return $dara.cast<GetAITeacherExpansionDialogueSuggestionResponse>(await this.execute(params, req, runtime), new GetAITeacherExpansionDialogueSuggestionResponse({}));
    }

  }

  /**
   * 拓展练小助手
   * 
   * @param request - GetAITeacherExpansionDialogueSuggestionRequest
   * @returns GetAITeacherExpansionDialogueSuggestionResponse
   */
  async getAITeacherExpansionDialogueSuggestion(request: GetAITeacherExpansionDialogueSuggestionRequest): Promise<GetAITeacherExpansionDialogueSuggestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getAITeacherSyncDialogueSuggestionWithOptions(request: GetAITeacherSyncDialogueSuggestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAITeacherSyncDialogueSuggestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dialogueTasks)) {
      body["dialogueTasks"] = request.dialogueTasks;
    }

    if (!$dara.isNull(request.languageCode)) {
      body["languageCode"] = request.languageCode;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAITeacherSyncDialogueSuggestionResponse>(await this.callApi(params, req, runtime), new GetAITeacherSyncDialogueSuggestionResponse({}));
    } else {
      return $dara.cast<GetAITeacherSyncDialogueSuggestionResponse>(await this.execute(params, req, runtime), new GetAITeacherSyncDialogueSuggestionResponse({}));
    }

  }

  /**
   * 同步练小助手
   * 
   * @param request - GetAITeacherSyncDialogueSuggestionRequest
   * @returns GetAITeacherSyncDialogueSuggestionResponse
   */
  async getAITeacherSyncDialogueSuggestion(request: GetAITeacherSyncDialogueSuggestionRequest): Promise<GetAITeacherSyncDialogueSuggestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAITeacherSyncDialogueSuggestionWithOptions(request, headers, runtime);
  }

  /**
   * 获取请求鉴权参数
   * 
   * @param request - GetTextbookAssistantTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextbookAssistantTokenResponse
   */
  async getTextbookAssistantTokenWithOptions(request: GetTextbookAssistantTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTextbookAssistantTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceId)) {
      body["deviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTextbookAssistantToken",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/teachingResource/GetToken`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTextbookAssistantTokenResponse>(await this.callApi(params, req, runtime), new GetTextbookAssistantTokenResponse({}));
    } else {
      return $dara.cast<GetTextbookAssistantTokenResponse>(await this.execute(params, req, runtime), new GetTextbookAssistantTokenResponse({}));
    }

  }

  /**
   * 获取请求鉴权参数
   * 
   * @param request - GetTextbookAssistantTokenRequest
   * @returns GetTextbookAssistantTokenResponse
   */
  async getTextbookAssistantToken(request: GetTextbookAssistantTokenRequest): Promise<GetTextbookAssistantTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextbookAssistantTokenWithOptions(request, headers, runtime);
  }

  /**
   * 获取文章列表
   * 
   * @param request - ListTextbookAssistantArticlesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextbookAssistantArticlesResponse
   */
  async listTextbookAssistantArticlesWithOptions(request: ListTextbookAssistantArticlesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTextbookAssistantArticlesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTextbookAssistantArticles",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/teachingResource/ListArticles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTextbookAssistantArticlesResponse>(await this.callApi(params, req, runtime), new ListTextbookAssistantArticlesResponse({}));
    } else {
      return $dara.cast<ListTextbookAssistantArticlesResponse>(await this.execute(params, req, runtime), new ListTextbookAssistantArticlesResponse({}));
    }

  }

  /**
   * 获取文章列表
   * 
   * @param request - ListTextbookAssistantArticlesRequest
   * @returns ListTextbookAssistantArticlesResponse
   */
  async listTextbookAssistantArticles(request: ListTextbookAssistantArticlesRequest): Promise<ListTextbookAssistantArticlesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextbookAssistantArticlesWithOptions(request, headers, runtime);
  }

  /**
   * 获取书本下的目录信息
   * 
   * @param request - ListTextbookAssistantBookDirectoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextbookAssistantBookDirectoriesResponse
   */
  async listTextbookAssistantBookDirectoriesWithOptions(request: ListTextbookAssistantBookDirectoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTextbookAssistantBookDirectoriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.bookId)) {
      body["bookId"] = request.bookId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTextbookAssistantBookDirectories",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/teachingResource/ListBookDirectories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTextbookAssistantBookDirectoriesResponse>(await this.callApi(params, req, runtime), new ListTextbookAssistantBookDirectoriesResponse({}));
    } else {
      return $dara.cast<ListTextbookAssistantBookDirectoriesResponse>(await this.execute(params, req, runtime), new ListTextbookAssistantBookDirectoriesResponse({}));
    }

  }

  /**
   * 获取书本下的目录信息
   * 
   * @param request - ListTextbookAssistantBookDirectoriesRequest
   * @returns ListTextbookAssistantBookDirectoriesResponse
   */
  async listTextbookAssistantBookDirectories(request: ListTextbookAssistantBookDirectoriesRequest): Promise<ListTextbookAssistantBookDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextbookAssistantBookDirectoriesWithOptions(request, headers, runtime);
  }

  /**
   * 获取包含年级下的书本列表
   * 
   * @param request - ListTextbookAssistantBooksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextbookAssistantBooksResponse
   */
  async listTextbookAssistantBooksWithOptions(request: ListTextbookAssistantBooksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTextbookAssistantBooksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.bookId)) {
      body["bookId"] = request.bookId;
    }

    if (!$dara.isNull(request.grade)) {
      body["grade"] = request.grade;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    if (!$dara.isNull(request.volume)) {
      body["volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTextbookAssistantBooks",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/teachingResource/ListBooks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTextbookAssistantBooksResponse>(await this.callApi(params, req, runtime), new ListTextbookAssistantBooksResponse({}));
    } else {
      return $dara.cast<ListTextbookAssistantBooksResponse>(await this.execute(params, req, runtime), new ListTextbookAssistantBooksResponse({}));
    }

  }

  /**
   * 获取包含年级下的书本列表
   * 
   * @param request - ListTextbookAssistantBooksRequest
   * @returns ListTextbookAssistantBooksResponse
   */
  async listTextbookAssistantBooks(request: ListTextbookAssistantBooksRequest): Promise<ListTextbookAssistantBooksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextbookAssistantBooksWithOptions(request, headers, runtime);
  }

  /**
   * 获取有资源的年级信息
   * 
   * @param request - ListTextbookAssistantGradeVolumesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTextbookAssistantGradeVolumesResponse
   */
  async listTextbookAssistantGradeVolumesWithOptions(request: ListTextbookAssistantGradeVolumesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTextbookAssistantGradeVolumesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authToken)) {
      body["authToken"] = request.authToken;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTextbookAssistantGradeVolumes",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/textbookAssistant/teachingResource/ListGradeVolumes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTextbookAssistantGradeVolumesResponse>(await this.callApi(params, req, runtime), new ListTextbookAssistantGradeVolumesResponse({}));
    } else {
      return $dara.cast<ListTextbookAssistantGradeVolumesResponse>(await this.execute(params, req, runtime), new ListTextbookAssistantGradeVolumesResponse({}));
    }

  }

  /**
   * 获取有资源的年级信息
   * 
   * @param request - ListTextbookAssistantGradeVolumesRequest
   * @returns ListTextbookAssistantGradeVolumesResponse
   */
  async listTextbookAssistantGradeVolumes(request: ListTextbookAssistantGradeVolumesRequest): Promise<ListTextbookAssistantGradeVolumesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTextbookAssistantGradeVolumesWithOptions(request, headers, runtime);
  }

  /**
   * 个性化文生图/基于一个预训练模型创建图片推理任务
   * 
   * @param request - PersonalizedTextToImageAddInferenceJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PersonalizedTextToImageAddInferenceJobResponse
   */
  async personalizedTextToImageAddInferenceJobWithOptions(request: PersonalizedTextToImageAddInferenceJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PersonalizedTextToImageAddInferenceJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageNumber)) {
      body["imageNumber"] = request.imageNumber;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.seed)) {
      body["seed"] = request.seed;
    }

    if (!$dara.isNull(request.strength)) {
      body["strength"] = request.strength;
    }

    if (!$dara.isNull(request.trainSteps)) {
      body["trainSteps"] = request.trainSteps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PersonalizedTextToImageAddInferenceJobResponse>(await this.callApi(params, req, runtime), new PersonalizedTextToImageAddInferenceJobResponse({}));
    } else {
      return $dara.cast<PersonalizedTextToImageAddInferenceJobResponse>(await this.execute(params, req, runtime), new PersonalizedTextToImageAddInferenceJobResponse({}));
    }

  }

  /**
   * 个性化文生图/基于一个预训练模型创建图片推理任务
   * 
   * @param request - PersonalizedTextToImageAddInferenceJobRequest
   * @returns PersonalizedTextToImageAddInferenceJobResponse
   */
  async personalizedTextToImageAddInferenceJob(request: PersonalizedTextToImageAddInferenceJobRequest): Promise<PersonalizedTextToImageAddInferenceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async personalizedTextToImageQueryImageAssetWithOptions(request: PersonalizedTextToImageQueryImageAssetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PersonalizedTextToImageQueryImageAssetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encodeFormat)) {
      query["encodeFormat"] = request.encodeFormat;
    }

    if (!$dara.isNull(request.imageId)) {
      query["imageId"] = request.imageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PersonalizedTextToImageQueryImageAssetResponse>(await this.callApi(params, req, runtime), new PersonalizedTextToImageQueryImageAssetResponse({}));
    } else {
      return $dara.cast<PersonalizedTextToImageQueryImageAssetResponse>(await this.execute(params, req, runtime), new PersonalizedTextToImageQueryImageAssetResponse({}));
    }

  }

  /**
   * 个性化文生图/通过唯一的图片编号获取图片内容
   * 
   * @param request - PersonalizedTextToImageQueryImageAssetRequest
   * @returns PersonalizedTextToImageQueryImageAssetResponse
   */
  async personalizedTextToImageQueryImageAsset(request: PersonalizedTextToImageQueryImageAssetRequest): Promise<PersonalizedTextToImageQueryImageAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async personalizedTextToImageQueryPreModelInferenceJobInfoWithOptions(request: PersonalizedTextToImageQueryPreModelInferenceJobInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inferenceJobId)) {
      query["inferenceJobId"] = request.inferenceJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse>(await this.callApi(params, req, runtime), new PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse({}));
    } else {
      return $dara.cast<PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse>(await this.execute(params, req, runtime), new PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse({}));
    }

  }

  /**
   * 个性化文生图/查询预制模型推理任务的状态
   * 
   * @param request - PersonalizedTextToImageQueryPreModelInferenceJobInfoRequest
   * @returns PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse
   */
  async personalizedTextToImageQueryPreModelInferenceJobInfo(request: PersonalizedTextToImageQueryPreModelInferenceJobInfoRequest): Promise<PersonalizedTextToImageQueryPreModelInferenceJobInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async personalizedtxt2imgAddInferenceJobWithOptions(request: Personalizedtxt2imgAddInferenceJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<Personalizedtxt2imgAddInferenceJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageNumber)) {
      body["imageNumber"] = request.imageNumber;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.seed)) {
      body["seed"] = request.seed;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<Personalizedtxt2imgAddInferenceJobResponse>(await this.callApi(params, req, runtime), new Personalizedtxt2imgAddInferenceJobResponse({}));
    } else {
      return $dara.cast<Personalizedtxt2imgAddInferenceJobResponse>(await this.execute(params, req, runtime), new Personalizedtxt2imgAddInferenceJobResponse({}));
    }

  }

  /**
   * 个性化文生图/基于一个模型创建图片推理任务
   * 
   * @param request - Personalizedtxt2imgAddInferenceJobRequest
   * @returns Personalizedtxt2imgAddInferenceJobResponse
   */
  async personalizedtxt2imgAddInferenceJob(request: Personalizedtxt2imgAddInferenceJobRequest): Promise<Personalizedtxt2imgAddInferenceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async personalizedtxt2imgAddModelTrainJobWithOptions(request: Personalizedtxt2imgAddModelTrainJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<Personalizedtxt2imgAddModelTrainJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.objectType)) {
      body["objectType"] = request.objectType;
    }

    if (!$dara.isNull(request.trainSteps)) {
      body["trainSteps"] = request.trainSteps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<Personalizedtxt2imgAddModelTrainJobResponse>(await this.callApi(params, req, runtime), new Personalizedtxt2imgAddModelTrainJobResponse({}));
    } else {
      return $dara.cast<Personalizedtxt2imgAddModelTrainJobResponse>(await this.execute(params, req, runtime), new Personalizedtxt2imgAddModelTrainJobResponse({}));
    }

  }

  /**
   * 个性化文生图/创建一个模型训练任务
   * 
   * @param request - Personalizedtxt2imgAddModelTrainJobRequest
   * @returns Personalizedtxt2imgAddModelTrainJobResponse
   */
  async personalizedtxt2imgAddModelTrainJob(request: Personalizedtxt2imgAddModelTrainJobRequest): Promise<Personalizedtxt2imgAddModelTrainJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async personalizedtxt2imgQueryImageAssetWithOptions(request: Personalizedtxt2imgQueryImageAssetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<Personalizedtxt2imgQueryImageAssetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encodeFormat)) {
      query["encodeFormat"] = request.encodeFormat;
    }

    if (!$dara.isNull(request.imageId)) {
      query["imageId"] = request.imageId;
    }

    if (!$dara.isNull(request.modelId)) {
      query["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.promptId)) {
      query["promptId"] = request.promptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<Personalizedtxt2imgQueryImageAssetResponse>(await this.callApi(params, req, runtime), new Personalizedtxt2imgQueryImageAssetResponse({}));
    } else {
      return $dara.cast<Personalizedtxt2imgQueryImageAssetResponse>(await this.execute(params, req, runtime), new Personalizedtxt2imgQueryImageAssetResponse({}));
    }

  }

  /**
   * 个性化文生图/图片二进制内容获取
   * 
   * @param request - Personalizedtxt2imgQueryImageAssetRequest
   * @returns Personalizedtxt2imgQueryImageAssetResponse
   */
  async personalizedtxt2imgQueryImageAsset(request: Personalizedtxt2imgQueryImageAssetRequest): Promise<Personalizedtxt2imgQueryImageAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async personalizedtxt2imgQueryInferenceJobInfoWithOptions(request: Personalizedtxt2imgQueryInferenceJobInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<Personalizedtxt2imgQueryInferenceJobInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inferenceJobId)) {
      query["inferenceJobId"] = request.inferenceJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<Personalizedtxt2imgQueryInferenceJobInfoResponse>(await this.callApi(params, req, runtime), new Personalizedtxt2imgQueryInferenceJobInfoResponse({}));
    } else {
      return $dara.cast<Personalizedtxt2imgQueryInferenceJobInfoResponse>(await this.execute(params, req, runtime), new Personalizedtxt2imgQueryInferenceJobInfoResponse({}));
    }

  }

  /**
   * 个性化文生图/查询模型推理任务的状态和结果信息
   * 
   * @param request - Personalizedtxt2imgQueryInferenceJobInfoRequest
   * @returns Personalizedtxt2imgQueryInferenceJobInfoResponse
   */
  async personalizedtxt2imgQueryInferenceJobInfo(request: Personalizedtxt2imgQueryInferenceJobInfoRequest): Promise<Personalizedtxt2imgQueryInferenceJobInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async personalizedtxt2imgQueryModelTrainJobListWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<Personalizedtxt2imgQueryModelTrainJobListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<Personalizedtxt2imgQueryModelTrainJobListResponse>(await this.callApi(params, req, runtime), new Personalizedtxt2imgQueryModelTrainJobListResponse({}));
    } else {
      return $dara.cast<Personalizedtxt2imgQueryModelTrainJobListResponse>(await this.execute(params, req, runtime), new Personalizedtxt2imgQueryModelTrainJobListResponse({}));
    }

  }

  /**
   * 个性化文生图/查询模型训练任务列表
   * @returns Personalizedtxt2imgQueryModelTrainJobListResponse
   */
  async personalizedtxt2imgQueryModelTrainJobList(): Promise<Personalizedtxt2imgQueryModelTrainJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async personalizedtxt2imgQueryModelTrainStatusWithOptions(request: Personalizedtxt2imgQueryModelTrainStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<Personalizedtxt2imgQueryModelTrainStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelId)) {
      query["modelId"] = request.modelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<Personalizedtxt2imgQueryModelTrainStatusResponse>(await this.callApi(params, req, runtime), new Personalizedtxt2imgQueryModelTrainStatusResponse({}));
    } else {
      return $dara.cast<Personalizedtxt2imgQueryModelTrainStatusResponse>(await this.execute(params, req, runtime), new Personalizedtxt2imgQueryModelTrainStatusResponse({}));
    }

  }

  /**
   * 个性化文生图/模型训练状态查询
   * 
   * @param request - Personalizedtxt2imgQueryModelTrainStatusRequest
   * @returns Personalizedtxt2imgQueryModelTrainStatusResponse
   */
  async personalizedtxt2imgQueryModelTrainStatus(request: Personalizedtxt2imgQueryModelTrainStatusRequest): Promise<Personalizedtxt2imgQueryModelTrainStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.personalizedtxt2imgQueryModelTrainStatusWithOptions(request, headers, runtime);
  }

  /**
   * 阿里云控制台/获取应用访问识别码(appkey)信息
   * 
   * @param request - QueryApplicationAccessIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryApplicationAccessIdResponse
   */
  async queryApplicationAccessIdWithOptions(request: QueryApplicationAccessIdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryApplicationAccessIdResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationAccessId)) {
      query["applicationAccessId"] = request.applicationAccessId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryApplicationAccessId",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/queryApplicationAccessId`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryApplicationAccessIdResponse>(await this.callApi(params, req, runtime), new QueryApplicationAccessIdResponse({}));
    } else {
      return $dara.cast<QueryApplicationAccessIdResponse>(await this.execute(params, req, runtime), new QueryApplicationAccessIdResponse({}));
    }

  }

  /**
   * 阿里云控制台/获取应用访问识别码(appkey)信息
   * 
   * @param request - QueryApplicationAccessIdRequest
   * @returns QueryApplicationAccessIdResponse
   */
  async queryApplicationAccessId(request: QueryApplicationAccessIdRequest): Promise<QueryApplicationAccessIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryApplicationAccessIdWithOptions(request, headers, runtime);
  }

  /**
   * 阿里云控制台/获取项目列表
   * 
   * @param request - QueryProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProjectResponse
   */
  async queryProjectWithOptions(request: QueryProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryProjectResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryProject",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/queryProject`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryProjectResponse>(await this.callApi(params, req, runtime), new QueryProjectResponse({}));
    } else {
      return $dara.cast<QueryProjectResponse>(await this.execute(params, req, runtime), new QueryProjectResponse({}));
    }

  }

  /**
   * 阿里云控制台/获取项目列表
   * 
   * @param request - QueryProjectRequest
   * @returns QueryProjectResponse
   */
  async queryProject(request: QueryProjectRequest): Promise<QueryProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryProjectWithOptions(request, headers, runtime);
  }

  /**
   * 阿里云控制台/获取项目列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProjectListResponse
   */
  async queryProjectListWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryProjectListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryProjectList",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/queryProjectList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryProjectListResponse>(await this.callApi(params, req, runtime), new QueryProjectListResponse({}));
    } else {
      return $dara.cast<QueryProjectListResponse>(await this.execute(params, req, runtime), new QueryProjectListResponse({}));
    }

  }

  /**
   * 阿里云控制台/获取项目列表
   * @returns QueryProjectListResponse
   */
  async queryProjectList(): Promise<QueryProjectListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryProjectListWithOptions(headers, runtime);
  }

  /**
   * 阿里云控制台/已经购买过的服务项目
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPurchasedServiceResponse
   */
  async queryPurchasedServiceWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryPurchasedServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPurchasedService",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/queryPurchasedService`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryPurchasedServiceResponse>(await this.callApi(params, req, runtime), new QueryPurchasedServiceResponse({}));
    } else {
      return $dara.cast<QueryPurchasedServiceResponse>(await this.execute(params, req, runtime), new QueryPurchasedServiceResponse({}));
    }

  }

  /**
   * 阿里云控制台/已经购买过的服务项目
   * @returns QueryPurchasedServiceResponse
   */
  async queryPurchasedService(): Promise<QueryPurchasedServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryPurchasedServiceWithOptions(headers, runtime);
  }

  /**
   * 阿里云控制台/更新项目信息
   * 
   * @param request - UpdateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(request: UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["projectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProject",
      version: "20240611",
      protocol: "HTTPS",
      pathname: `/api/v1/aliyunConsole/updateProject`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateProjectResponse>(await this.callApi(params, req, runtime), new UpdateProjectResponse({}));
    } else {
      return $dara.cast<UpdateProjectResponse>(await this.execute(params, req, runtime), new UpdateProjectResponse({}));
    }

  }

  /**
   * 阿里云控制台/更新项目信息
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(request, headers, runtime);
  }

}
