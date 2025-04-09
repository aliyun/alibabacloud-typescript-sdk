// This file is auto-generated, don't edit it
/**
 */
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';

export class CreateAnnualDocSummaryTaskRequestDocInfos extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 198386463432
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023
   */
  docYear?: number;
  /**
   * @example
   * 2
   */
  endPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rdxrmo6amk
   */
  libraryId?: string;
  /**
   * @example
   * 1
   */
  startPage?: number;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      docYear: 'docYear',
      endPage: 'endPage',
      libraryId: 'libraryId',
      startPage: 'startPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docYear: 'number',
      endPage: 'number',
      libraryId: 'string',
      startPage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDialogResponseBodyData extends $dara.Model {
  openingRemarks?: string;
  /**
   * @example
   * 1728545917713234
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      openingRemarks: 'openingRemarks',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openingRemarks: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDialogAnalysisTaskRequestConversationListDialogueList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

export class CreateDialogAnalysisTaskRequestConversationList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueList?: CreateDialogAnalysisTaskRequestConversationListDialogueList[];
  static names(): { [key: string]: string } {
    return {
      dialogueList: 'dialogueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueList: { 'type': 'array', 'itemType': CreateDialogAnalysisTaskRequestConversationListDialogueList },
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocsSummaryTaskRequestDocInfos extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 198386463432
   */
  docId?: string;
  /**
   * @example
   * 2
   */
  endPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rdxrmo6amk
   */
  libraryId?: string;
  /**
   * @example
   * 1
   */
  startPage?: number;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      endPage: 'endPage',
      libraryId: 'libraryId',
      startPage: 'startPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      endPage: 'number',
      libraryId: 'string',
      startPage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequestIndexSettingChunkStrategy extends $dara.Model {
  /**
   * @example
   * true
   */
  docTreeSplit?: boolean;
  /**
   * @example
   * 300
   */
  docTreeSplitSize?: number;
  /**
   * @example
   * true
   */
  enhanceGraph?: boolean;
  /**
   * @example
   * true
   */
  enhanceTable?: boolean;
  /**
   * @example
   * 20
   */
  overlap?: number;
  /**
   * @example
   * true
   */
  sentenceSplit?: boolean;
  /**
   * @example
   * 300
   */
  sentenceSplitSize?: number;
  /**
   * @example
   * 300
   */
  size?: number;
  /**
   * @example
   * true
   */
  split?: boolean;
  static names(): { [key: string]: string } {
    return {
      docTreeSplit: 'docTreeSplit',
      docTreeSplitSize: 'docTreeSplitSize',
      enhanceGraph: 'enhanceGraph',
      enhanceTable: 'enhanceTable',
      overlap: 'overlap',
      sentenceSplit: 'sentenceSplit',
      sentenceSplitSize: 'sentenceSplitSize',
      size: 'size',
      split: 'split',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docTreeSplit: 'boolean',
      docTreeSplitSize: 'number',
      enhanceGraph: 'boolean',
      enhanceTable: 'boolean',
      overlap: 'number',
      sentenceSplit: 'boolean',
      sentenceSplitSize: 'number',
      size: 'number',
      split: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequestIndexSettingModelConfig extends $dara.Model {
  /**
   * @example
   * 0.8
   */
  temperature?: number;
  /**
   * @example
   * 0.8
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      temperature: 'temperature',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      temperature: 'number',
      topP: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequestIndexSettingQueryEnhancer extends $dara.Model {
  /**
   * @example
   * true
   */
  enableFollowUp?: boolean;
  /**
   * @example
   * true
   */
  enableMultiQuery?: boolean;
  /**
   * @example
   * true
   */
  enableOpenQa?: boolean;
  /**
   * @example
   * true
   */
  enableQueryRewrite?: boolean;
  /**
   * @example
   * true
   */
  enableSession?: boolean;
  /**
   * @example
   * xxxx
   */
  localKnowledgeId?: string;
  /**
   * @example
   * true
   */
  withDocumentReference?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableFollowUp: 'enableFollowUp',
      enableMultiQuery: 'enableMultiQuery',
      enableOpenQa: 'enableOpenQa',
      enableQueryRewrite: 'enableQueryRewrite',
      enableSession: 'enableSession',
      localKnowledgeId: 'localKnowledgeId',
      withDocumentReference: 'withDocumentReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableFollowUp: 'boolean',
      enableMultiQuery: 'boolean',
      enableOpenQa: 'boolean',
      enableQueryRewrite: 'boolean',
      enableSession: 'boolean',
      localKnowledgeId: 'string',
      withDocumentReference: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequestIndexSettingRecallStrategy extends $dara.Model {
  /**
   * @example
   * model
   */
  documentRankType?: string;
  /**
   * @example
   * 20
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      documentRankType: 'documentRankType',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentRankType: 'string',
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequestIndexSettingTextIndexSetting extends $dara.Model {
  /**
   * @example
   * ElasticSearch
   */
  category?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * Standard
   */
  indexAnalyzer?: string;
  /**
   * @example
   * 0.5
   */
  rankThreshold?: number;
  /**
   * @example
   * Standard
   */
  searchAnalyzer?: string;
  /**
   * @example
   * 50
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      enable: 'enable',
      indexAnalyzer: 'indexAnalyzer',
      rankThreshold: 'rankThreshold',
      searchAnalyzer: 'searchAnalyzer',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      enable: 'boolean',
      indexAnalyzer: 'string',
      rankThreshold: 'number',
      searchAnalyzer: 'string',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequestIndexSettingVectorIndexSetting extends $dara.Model {
  /**
   * @example
   * ADB
   */
  category?: string;
  /**
   * @example
   * DashScope
   */
  embeddingType?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 0.5
   */
  rankThreshold?: number;
  /**
   * @example
   * 50
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      embeddingType: 'embeddingType',
      enable: 'enable',
      rankThreshold: 'rankThreshold',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      embeddingType: 'string',
      enable: 'boolean',
      rankThreshold: 'number',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequestIndexSetting extends $dara.Model {
  chunkStrategy?: CreateLibraryRequestIndexSettingChunkStrategy;
  modelConfig?: CreateLibraryRequestIndexSettingModelConfig;
  promptRoleStyle?: string;
  queryEnhancer?: CreateLibraryRequestIndexSettingQueryEnhancer;
  recallStrategy?: CreateLibraryRequestIndexSettingRecallStrategy;
  textIndexSetting?: CreateLibraryRequestIndexSettingTextIndexSetting;
  vectorIndexSetting?: CreateLibraryRequestIndexSettingVectorIndexSetting;
  static names(): { [key: string]: string } {
    return {
      chunkStrategy: 'chunkStrategy',
      modelConfig: 'modelConfig',
      promptRoleStyle: 'promptRoleStyle',
      queryEnhancer: 'queryEnhancer',
      recallStrategy: 'recallStrategy',
      textIndexSetting: 'textIndexSetting',
      vectorIndexSetting: 'vectorIndexSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkStrategy: CreateLibraryRequestIndexSettingChunkStrategy,
      modelConfig: CreateLibraryRequestIndexSettingModelConfig,
      promptRoleStyle: 'string',
      queryEnhancer: CreateLibraryRequestIndexSettingQueryEnhancer,
      recallStrategy: CreateLibraryRequestIndexSettingRecallStrategy,
      textIndexSetting: CreateLibraryRequestIndexSettingTextIndexSetting,
      vectorIndexSetting: CreateLibraryRequestIndexSettingVectorIndexSetting,
    };
  }

  validate() {
    if(this.chunkStrategy && typeof (this.chunkStrategy as any).validate === 'function') {
      (this.chunkStrategy as any).validate();
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    if(this.queryEnhancer && typeof (this.queryEnhancer as any).validate === 'function') {
      (this.queryEnhancer as any).validate();
    }
    if(this.recallStrategy && typeof (this.recallStrategy as any).validate === 'function') {
      (this.recallStrategy as any).validate();
    }
    if(this.textIndexSetting && typeof (this.textIndexSetting as any).validate === 'function') {
      (this.textIndexSetting as any).validate();
    }
    if(this.vectorIndexSetting && typeof (this.vectorIndexSetting as any).validate === 'function') {
      (this.vectorIndexSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePredefinedDocumentRequestChunks extends $dara.Model {
  /**
   * @example
   * {"a": "1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * 1
   */
  chunkOrder?: number;
  /**
   * @example
   * 这是一段测试文本
   */
  chunkText?: string;
  /**
   * @example
   * text
   */
  chunkType?: string;
  static names(): { [key: string]: string } {
    return {
      chunkMeta: 'chunkMeta',
      chunkOrder: 'chunkOrder',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOrder: 'number',
      chunkText: 'string',
      chunkType: 'string',
    };
  }

  validate() {
    if(this.chunkMeta) {
      $dara.Model.validateMap(this.chunkMeta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityCheckTaskRequestConversationListDialogueList extends $dara.Model {
  /**
   * @example
   * 0
   */
  begin?: number;
  /**
   * @example
   * 2024-05-23 14:57:50
   */
  beginTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @example
   * 2348234
   */
  customerId?: string;
  /**
   * @example
   * 23874627346
   */
  customerServiceId?: string;
  /**
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @example
   * 0
   */
  end?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEXT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'begin',
      beginTime: 'beginTime',
      content: 'content',
      customerId: 'customerId',
      customerServiceId: 'customerServiceId',
      customerServiceType: 'customerServiceType',
      end: 'end',
      role: 'role',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      content: 'string',
      customerId: 'string',
      customerServiceId: 'string',
      customerServiceType: 'string',
      end: 'number',
      role: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityCheckTaskRequestConversationList extends $dara.Model {
  /**
   * @example
   * 1
   */
  callType?: string;
  /**
   * @example
   * 1
   */
  customerId?: string;
  customerName?: string;
  /**
   * @example
   * xxx
   */
  customerServiceId?: string;
  customerServiceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueList?: CreateQualityCheckTaskRequestConversationListDialogueList[];
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtService?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'callType',
      customerId: 'customerId',
      customerName: 'customerName',
      customerServiceId: 'customerServiceId',
      customerServiceName: 'customerServiceName',
      dialogueList: 'dialogueList',
      gmtService: 'gmtService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      customerId: 'string',
      customerName: 'string',
      customerServiceId: 'string',
      customerServiceName: 'string',
      dialogueList: { 'type': 'array', 'itemType': CreateQualityCheckTaskRequestConversationListDialogueList },
      gmtService: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityCheckTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * taskId
   * 
   * @example
   * 172373500521
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenDocQaResultResponseBodyDataParseQaResults extends $dara.Model {
  answer?: string;
  question?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'answer',
      question: 'question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      question: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenDocQaResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * PROCESSING
   */
  currentStatus?: string;
  /**
   * @example
   * 873648346573245
   */
  docId?: string;
  /**
   * @example
   * 7wxwrjpabj
   */
  libraryId?: string;
  parseQaResults?: GenDocQaResultResponseBodyDataParseQaResults[];
  static names(): { [key: string]: string } {
    return {
      currentStatus: 'currentStatus',
      docId: 'docId',
      libraryId: 'libraryId',
      parseQaResults: 'parseQaResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStatus: 'string',
      docId: 'string',
      libraryId: 'string',
      parseQaResults: { 'type': 'array', 'itemType': GenDocQaResultResponseBodyDataParseQaResults },
    };
  }

  validate() {
    if(Array.isArray(this.parseQaResults)) {
      $dara.Model.validateArray(this.parseQaResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppConfigResponseBodyData extends $dara.Model {
  embeddingTypeList?: { [key: string]: string }[];
  frontendConfig?: { [key: string]: boolean };
  libraryDocumentStatusList?: { [key: string]: string }[];
  llmHelperTypeList?: { [key: string]: string }[];
  textIndexCategoryList?: string[];
  vectorIndexCategoryList?: string[];
  static names(): { [key: string]: string } {
    return {
      embeddingTypeList: 'embeddingTypeList',
      frontendConfig: 'frontendConfig',
      libraryDocumentStatusList: 'libraryDocumentStatusList',
      llmHelperTypeList: 'llmHelperTypeList',
      textIndexCategoryList: 'textIndexCategoryList',
      vectorIndexCategoryList: 'vectorIndexCategoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingTypeList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      frontendConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      libraryDocumentStatusList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      llmHelperTypeList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      textIndexCategoryList: { 'type': 'array', 'itemType': 'string' },
      vectorIndexCategoryList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.embeddingTypeList)) {
      $dara.Model.validateArray(this.embeddingTypeList);
    }
    if(this.frontendConfig) {
      $dara.Model.validateMap(this.frontendConfig);
    }
    if(Array.isArray(this.libraryDocumentStatusList)) {
      $dara.Model.validateArray(this.libraryDocumentStatusList);
    }
    if(Array.isArray(this.llmHelperTypeList)) {
      $dara.Model.validateArray(this.llmHelperTypeList);
    }
    if(Array.isArray(this.textIndexCategoryList)) {
      $dara.Model.validateArray(this.textIndexCategoryList);
    }
    if(Array.isArray(this.vectorIndexCategoryList)) {
      $dara.Model.validateArray(this.vectorIndexCategoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatQuestionRespResponseBodyDataQuestionList extends $dara.Model {
  content?: string;
  /**
   * @example
   * 2024-11-17 10:05:00
   */
  gmtCreate?: string;
  oriContent?: string;
  reply?: string;
  /**
   * @example
   * 1732846760323001
   */
  sessionId?: string;
  /**
   * @example
   * PRODUCT_QA
   */
  type?: string;
  /**
   * @example
   * 39847834568436
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      gmtCreate: 'gmtCreate',
      oriContent: 'oriContent',
      reply: 'reply',
      sessionId: 'sessionId',
      type: 'type',
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'string',
      oriContent: 'string',
      reply: 'string',
      sessionId: 'string',
      type: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatQuestionRespResponseBodyData extends $dara.Model {
  /**
   * @example
   * PROCESSING
   */
  currentState?: string;
  questionList?: GetChatQuestionRespResponseBodyDataQuestionList[];
  static names(): { [key: string]: string } {
    return {
      currentState: 'currentState',
      questionList: 'questionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentState: 'string',
      questionList: { 'type': 'array', 'itemType': GetChatQuestionRespResponseBodyDataQuestionList },
    };
  }

  validate() {
    if(Array.isArray(this.questionList)) {
      $dara.Model.validateArray(this.questionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisRespDialogLabels extends $dara.Model {
  name?: string;
  /**
   * @example
   * 0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisResp extends $dara.Model {
  dialogExecPlan?: string;
  dialogLabels?: GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisRespDialogLabels[];
  dialogOpenAnalysis?: { [key: string]: any };
  dialogProcessAnalysis?: { [key: string]: any };
  dialogSop?: string;
  dialogSummary?: string;
  static names(): { [key: string]: string } {
    return {
      dialogExecPlan: 'dialogExecPlan',
      dialogLabels: 'dialogLabels',
      dialogOpenAnalysis: 'dialogOpenAnalysis',
      dialogProcessAnalysis: 'dialogProcessAnalysis',
      dialogSop: 'dialogSop',
      dialogSummary: 'dialogSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogExecPlan: 'string',
      dialogLabels: { 'type': 'array', 'itemType': GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisRespDialogLabels },
      dialogOpenAnalysis: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dialogProcessAnalysis: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dialogSop: 'string',
      dialogSummary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogLabels)) {
      $dara.Model.validateArray(this.dialogLabels);
    }
    if(this.dialogOpenAnalysis) {
      $dara.Model.validateMap(this.dialogOpenAnalysis);
    }
    if(this.dialogProcessAnalysis) {
      $dara.Model.validateMap(this.dialogProcessAnalysis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespList extends $dara.Model {
  analysisResp?: GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisResp;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  gmtCreate?: string;
  /**
   * @example
   * https://xxx.oss-cn-beijing.aliyuncs.com/dialog-analysis/2024-12-30/2/1826661605606129665
   */
  ossUrl?: string;
  /**
   * @example
   * 183764873624
   */
  sessionId?: string;
  /**
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      analysisResp: 'analysisResp',
      gmtCreate: 'gmtCreate',
      ossUrl: 'ossUrl',
      sessionId: 'sessionId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisResp: GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespListAnalysisResp,
      gmtCreate: 'string',
      ossUrl: 'string',
      sessionId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.analysisResp && typeof (this.analysisResp as any).validate === 'function') {
      (this.analysisResp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogAnalysisResultResponseBodyData extends $dara.Model {
  dialogAnalysisRespList?: GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespList[];
  static names(): { [key: string]: string } {
    return {
      dialogAnalysisRespList: 'dialogAnalysisRespList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogAnalysisRespList: { 'type': 'array', 'itemType': GetDialogAnalysisResultResponseBodyDataDialogAnalysisRespList },
    };
  }

  validate() {
    if(Array.isArray(this.dialogAnalysisRespList)) {
      $dara.Model.validateArray(this.dialogAnalysisRespList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogDetailResponseBodyDataDialogueList extends $dara.Model {
  content?: string;
  /**
   * @example
   * 123761283
   */
  customerId?: string;
  /**
   * @example
   * BOT
   */
  customerServiceId?: string;
  /**
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @example
   * true
   */
  hangUpDialog?: boolean;
  /**
   * @example
   * 1742869659849
   */
  id?: number;
  /**
   * @example
   * 193874634xxx
   */
  intentCode?: string;
  intentName?: string;
  /**
   * @example
   * 0
   */
  role?: string;
  /**
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      customerId: 'customerId',
      customerServiceId: 'customerServiceId',
      customerServiceType: 'customerServiceType',
      hangUpDialog: 'hangUpDialog',
      id: 'id',
      intentCode: 'intentCode',
      intentName: 'intentName',
      role: 'role',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      customerId: 'string',
      customerServiceId: 'string',
      customerServiceType: 'string',
      hangUpDialog: 'boolean',
      id: 'number',
      intentCode: 'string',
      intentName: 'string',
      role: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogDetailResponseBodyData extends $dara.Model {
  dialogueList?: GetDialogDetailResponseBodyDataDialogueList[];
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtCreate?: string;
  /**
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @example
   * 10
   */
  totalDialogTurns?: number;
  /**
   * @example
   * 5
   */
  validDialogTurns?: number;
  static names(): { [key: string]: string } {
    return {
      dialogueList: 'dialogueList',
      gmtCreate: 'gmtCreate',
      status: 'status',
      totalDialogTurns: 'totalDialogTurns',
      validDialogTurns: 'validDialogTurns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueList: { 'type': 'array', 'itemType': GetDialogDetailResponseBodyDataDialogueList },
      gmtCreate: 'string',
      status: 'string',
      totalDialogTurns: 'number',
      validDialogTurns: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentChunkListResponseBodyDataRecordsPos extends $dara.Model {
  axisArray?: number[];
  /**
   * @example
   * 1
   */
  page?: number;
  textHighlightArea?: number[];
  static names(): { [key: string]: string } {
    return {
      axisArray: 'axisArray',
      page: 'page',
      textHighlightArea: 'textHighlightArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axisArray: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      textHighlightArea: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.axisArray)) {
      $dara.Model.validateArray(this.axisArray);
    }
    if(Array.isArray(this.textHighlightArea)) {
      $dara.Model.validateArray(this.textHighlightArea);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentChunkListResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * 28377468263482764
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * oss-xxxx-hangzhou.com/test.pdf
   */
  chunkOssUrl?: string;
  chunkText?: string;
  /**
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @example
   * 8947387648356
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * jhsdvne
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 947538465
   */
  nextChunkId?: string;
  pos?: GetDocumentChunkListResponseBodyDataRecordsPos[];
  /**
   * @example
   * 9848346548365
   */
  preChunkId?: string;
  /**
   * @example
   * 0.5
   */
  score?: number;
  /**
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunkId: 'chunkId',
      chunkMeta: 'chunkMeta',
      chunkOssUrl: 'chunkOssUrl',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
      docId: 'docId',
      fileType: 'fileType',
      libraryId: 'libraryId',
      libraryName: 'libraryName',
      nextChunkId: 'nextChunkId',
      pos: 'pos',
      preChunkId: 'preChunkId',
      score: 'score',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOssUrl: 'string',
      chunkText: 'string',
      chunkType: 'string',
      docId: 'string',
      fileType: 'string',
      libraryId: 'string',
      libraryName: 'string',
      nextChunkId: 'string',
      pos: { 'type': 'array', 'itemType': GetDocumentChunkListResponseBodyDataRecordsPos },
      preChunkId: 'string',
      score: 'number',
      title: 'string',
    };
  }

  validate() {
    if(this.chunkMeta) {
      $dara.Model.validateMap(this.chunkMeta);
    }
    if(Array.isArray(this.pos)) {
      $dara.Model.validateArray(this.pos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentChunkListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: GetDocumentChunkListResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      totalPages: 'totalPages',
      totalRecords: 'totalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetDocumentChunkListResponseBodyDataRecords },
      totalPages: 'number',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentListResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * 8326748346
   */
  docId?: string;
  documentMeta?: { [key: string]: any };
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * skjdhshbv
   */
  libraryId?: string;
  /**
   * @example
   * WaitRefresh
   */
  statusCode?: string;
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * null
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      documentMeta: 'documentMeta',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      libraryId: 'libraryId',
      statusCode: 'statusCode',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      documentMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      libraryId: 'string',
      statusCode: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.documentMeta) {
      $dara.Model.validateMap(this.documentMeta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: GetDocumentListResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      totalPages: 'totalPages',
      totalRecords: 'totalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetDocumentListResponseBodyDataRecords },
      totalPages: 'number',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFilterDocumentListRequestAnd extends $dara.Model {
  /**
   * @example
   * 1
   */
  boost?: number;
  /**
   * @example
   * company
   */
  key?: string;
  /**
   * @example
   * eq
   */
  operator?: string;
  /**
   * @example
   * alibaba
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFilterDocumentListRequestOr extends $dara.Model {
  /**
   * @example
   * 1
   */
  boost?: number;
  /**
   * @example
   * company
   */
  key?: string;
  /**
   * @example
   * contains
   */
  operator?: string;
  /**
   * @example
   * alibaba
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFilterDocumentListResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * 29368126816
   */
  docId?: string;
  /**
   * @example
   * {"a": "1"}
   */
  documentMeta?: { [key: string]: any };
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * sdfgsjdfg
   */
  libraryId?: string;
  /**
   * @example
   * WaitRefresh
   */
  statusCode?: string;
  title?: string;
  /**
   * @example
   * null
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      documentMeta: 'documentMeta',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      libraryId: 'libraryId',
      statusCode: 'statusCode',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      documentMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      libraryId: 'string',
      statusCode: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.documentMeta) {
      $dara.Model.validateMap(this.documentMeta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFilterDocumentListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: GetFilterDocumentListResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      totalPages: 'totalPages',
      totalRecords: 'totalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetFilterDocumentListResponseBodyDataRecords },
      totalPages: 'number',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryListByBizTypeResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * GysYBsxx
   */
  bizId?: string;
  /**
   * @example
   * LibraryChat
   */
  bizType?: string;
  /**
   * @example
   * null
   */
  extraMessage?: any;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 210
   */
  id?: number;
  llmAnswer?: string;
  llmPrompt?: string;
  /**
   * @example
   * qwen-max
   */
  llmType?: string;
  /**
   * @example
   * null
   */
  sessionId?: string;
  userQuery?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      bizType: 'bizType',
      extraMessage: 'extraMessage',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      llmAnswer: 'llmAnswer',
      llmPrompt: 'llmPrompt',
      llmType: 'llmType',
      sessionId: 'sessionId',
      userQuery: 'userQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      extraMessage: 'any',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      llmAnswer: 'string',
      llmPrompt: 'string',
      llmType: 'string',
      sessionId: 'string',
      userQuery: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryListByBizTypeResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: GetHistoryListByBizTypeResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      totalPages: 'totalPages',
      totalRecords: 'totalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetHistoryListByBizTypeResponseBodyDataRecords },
      totalPages: 'number',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyDataIndexSettingChunkStrategy extends $dara.Model {
  /**
   * @example
   * true
   */
  docTreeSplit?: boolean;
  /**
   * @example
   * 160
   */
  docTreeSplitSize?: number;
  /**
   * @example
   * true
   */
  enhanceGraph?: boolean;
  /**
   * @example
   * true
   */
  enhanceTable?: boolean;
  /**
   * @example
   * 40
   */
  overlap?: number;
  /**
   * @example
   * true
   */
  sentenceSplit?: boolean;
  /**
   * @example
   * 160
   */
  sentenceSplitSize?: number;
  /**
   * @example
   * 256
   */
  size?: number;
  /**
   * @example
   * true
   */
  split?: boolean;
  static names(): { [key: string]: string } {
    return {
      docTreeSplit: 'docTreeSplit',
      docTreeSplitSize: 'docTreeSplitSize',
      enhanceGraph: 'enhanceGraph',
      enhanceTable: 'enhanceTable',
      overlap: 'overlap',
      sentenceSplit: 'sentenceSplit',
      sentenceSplitSize: 'sentenceSplitSize',
      size: 'size',
      split: 'split',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docTreeSplit: 'boolean',
      docTreeSplitSize: 'number',
      enhanceGraph: 'boolean',
      enhanceTable: 'boolean',
      overlap: 'number',
      sentenceSplit: 'boolean',
      sentenceSplitSize: 'number',
      size: 'number',
      split: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyDataIndexSettingModelConfig extends $dara.Model {
  /**
   * @example
   * 0.8
   */
  temperature?: number;
  /**
   * @remarks
   * topP
   * 
   * @example
   * 0.8
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      temperature: 'temperature',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      temperature: 'number',
      topP: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyDataIndexSettingQueryEnhancer extends $dara.Model {
  /**
   * @example
   * true
   */
  enableFollowUp?: boolean;
  /**
   * @example
   * true
   */
  enableMultiQuery?: boolean;
  /**
   * @example
   * true
   */
  enableOpenQa?: boolean;
  /**
   * @example
   * true
   */
  enableQueryRewrite?: boolean;
  /**
   * @example
   * true
   */
  enableSession?: boolean;
  /**
   * @example
   * 2836482634
   */
  localKnowledgeId?: string;
  /**
   * @example
   * true
   */
  withDocumentReference?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableFollowUp: 'enableFollowUp',
      enableMultiQuery: 'enableMultiQuery',
      enableOpenQa: 'enableOpenQa',
      enableQueryRewrite: 'enableQueryRewrite',
      enableSession: 'enableSession',
      localKnowledgeId: 'localKnowledgeId',
      withDocumentReference: 'withDocumentReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableFollowUp: 'boolean',
      enableMultiQuery: 'boolean',
      enableOpenQa: 'boolean',
      enableQueryRewrite: 'boolean',
      enableSession: 'boolean',
      localKnowledgeId: 'string',
      withDocumentReference: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyDataIndexSettingRecallStrategy extends $dara.Model {
  /**
   * @example
   * model
   */
  documentRankType?: string;
  /**
   * @example
   * 10
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      documentRankType: 'documentRankType',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentRankType: 'string',
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyDataIndexSettingTextIndexSetting extends $dara.Model {
  /**
   * @example
   * ElasticSearch
   */
  category?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * IkMaxWord
   */
  indexAnalyzer?: string;
  /**
   * @example
   * null
   */
  rankThreshold?: number;
  /**
   * @example
   * Standard
   */
  searchAnalyzer?: string;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      enable: 'enable',
      indexAnalyzer: 'indexAnalyzer',
      rankThreshold: 'rankThreshold',
      searchAnalyzer: 'searchAnalyzer',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      enable: 'boolean',
      indexAnalyzer: 'string',
      rankThreshold: 'number',
      searchAnalyzer: 'string',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyDataIndexSettingVectorIndexSetting extends $dara.Model {
  /**
   * @example
   * ADB
   */
  category?: string;
  /**
   * @example
   * DashScope
   */
  embeddingType?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * null
   */
  rankThreshold?: number;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      embeddingType: 'embeddingType',
      enable: 'enable',
      rankThreshold: 'rankThreshold',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      embeddingType: 'string',
      enable: 'boolean',
      rankThreshold: 'number',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyDataIndexSetting extends $dara.Model {
  chunkStrategy?: GetLibraryResponseBodyDataIndexSettingChunkStrategy;
  modelConfig?: GetLibraryResponseBodyDataIndexSettingModelConfig;
  promptRoleStyle?: string;
  queryEnhancer?: GetLibraryResponseBodyDataIndexSettingQueryEnhancer;
  recallStrategy?: GetLibraryResponseBodyDataIndexSettingRecallStrategy;
  textIndexSetting?: GetLibraryResponseBodyDataIndexSettingTextIndexSetting;
  vectorIndexSetting?: GetLibraryResponseBodyDataIndexSettingVectorIndexSetting;
  static names(): { [key: string]: string } {
    return {
      chunkStrategy: 'chunkStrategy',
      modelConfig: 'modelConfig',
      promptRoleStyle: 'promptRoleStyle',
      queryEnhancer: 'queryEnhancer',
      recallStrategy: 'recallStrategy',
      textIndexSetting: 'textIndexSetting',
      vectorIndexSetting: 'vectorIndexSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkStrategy: GetLibraryResponseBodyDataIndexSettingChunkStrategy,
      modelConfig: GetLibraryResponseBodyDataIndexSettingModelConfig,
      promptRoleStyle: 'string',
      queryEnhancer: GetLibraryResponseBodyDataIndexSettingQueryEnhancer,
      recallStrategy: GetLibraryResponseBodyDataIndexSettingRecallStrategy,
      textIndexSetting: GetLibraryResponseBodyDataIndexSettingTextIndexSetting,
      vectorIndexSetting: GetLibraryResponseBodyDataIndexSettingVectorIndexSetting,
    };
  }

  validate() {
    if(this.chunkStrategy && typeof (this.chunkStrategy as any).validate === 'function') {
      (this.chunkStrategy as any).validate();
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    if(this.queryEnhancer && typeof (this.queryEnhancer as any).validate === 'function') {
      (this.queryEnhancer as any).validate();
    }
    if(this.recallStrategy && typeof (this.recallStrategy as any).validate === 'function') {
      (this.recallStrategy as any).validate();
    }
    if(this.textIndexSetting && typeof (this.textIndexSetting as any).validate === 'function') {
      (this.textIndexSetting as any).validate();
    }
    if(this.vectorIndexSetting && typeof (this.vectorIndexSetting as any).validate === 'function') {
      (this.vectorIndexSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyData extends $dara.Model {
  description?: string;
  /**
   * @example
   * 10
   */
  documentCount?: number;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 19386728376
   */
  id?: string;
  indexSetting?: GetLibraryResponseBodyDataIndexSetting;
  libraryName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      documentCount: 'documentCount',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      indexSetting: 'indexSetting',
      libraryName: 'libraryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      documentCount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      indexSetting: GetLibraryResponseBodyDataIndexSetting,
      libraryName: 'string',
    };
  }

  validate() {
    if(this.indexSetting && typeof (this.indexSetting as any).validate === 'function') {
      (this.indexSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecordsIndexSettingChunkStrategy extends $dara.Model {
  /**
   * @example
   * true
   */
  docTreeSplit?: boolean;
  /**
   * @example
   * 160
   */
  docTreeSplitSize?: number;
  /**
   * @example
   * true
   */
  enhanceGraph?: boolean;
  /**
   * @example
   * true
   */
  enhanceTable?: boolean;
  /**
   * @example
   * 40
   */
  overlap?: number;
  /**
   * @example
   * true
   */
  sentenceSplit?: boolean;
  /**
   * @example
   * 160
   */
  sentenceSplitSize?: number;
  /**
   * @example
   * 256
   */
  size?: number;
  /**
   * @example
   * true
   */
  split?: boolean;
  static names(): { [key: string]: string } {
    return {
      docTreeSplit: 'docTreeSplit',
      docTreeSplitSize: 'docTreeSplitSize',
      enhanceGraph: 'enhanceGraph',
      enhanceTable: 'enhanceTable',
      overlap: 'overlap',
      sentenceSplit: 'sentenceSplit',
      sentenceSplitSize: 'sentenceSplitSize',
      size: 'size',
      split: 'split',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docTreeSplit: 'boolean',
      docTreeSplitSize: 'number',
      enhanceGraph: 'boolean',
      enhanceTable: 'boolean',
      overlap: 'number',
      sentenceSplit: 'boolean',
      sentenceSplitSize: 'number',
      size: 'number',
      split: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecordsIndexSettingModelConfig extends $dara.Model {
  /**
   * @example
   * 0.8
   */
  temperature?: number;
  /**
   * @remarks
   * topP
   * 
   * @example
   * 0.8
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      temperature: 'temperature',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      temperature: 'number',
      topP: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecordsIndexSettingQueryEnhancer extends $dara.Model {
  /**
   * @example
   * true
   */
  enableFollowUp?: boolean;
  /**
   * @example
   * true
   */
  enableMultiQuery?: boolean;
  /**
   * @example
   * true
   */
  enableOpenQa?: boolean;
  /**
   * @example
   * true
   */
  enableQueryRewrite?: boolean;
  /**
   * @example
   * true
   */
  enableSession?: boolean;
  /**
   * @example
   * sdbcjsbc
   */
  localKnowledgeId?: string;
  /**
   * @example
   * true
   */
  withDocumentReference?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableFollowUp: 'enableFollowUp',
      enableMultiQuery: 'enableMultiQuery',
      enableOpenQa: 'enableOpenQa',
      enableQueryRewrite: 'enableQueryRewrite',
      enableSession: 'enableSession',
      localKnowledgeId: 'localKnowledgeId',
      withDocumentReference: 'withDocumentReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableFollowUp: 'boolean',
      enableMultiQuery: 'boolean',
      enableOpenQa: 'boolean',
      enableQueryRewrite: 'boolean',
      enableSession: 'boolean',
      localKnowledgeId: 'string',
      withDocumentReference: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecordsIndexSettingRecallStrategy extends $dara.Model {
  /**
   * @example
   * model
   */
  documentRankType?: string;
  /**
   * @example
   * 10
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      documentRankType: 'documentRankType',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentRankType: 'string',
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecordsIndexSettingTextIndexSetting extends $dara.Model {
  /**
   * @example
   * ElasticSearch
   */
  category?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * Standard
   */
  indexAnalyzer?: string;
  /**
   * @example
   * null
   */
  rankThreshold?: number;
  /**
   * @example
   * Standard
   */
  searchAnalyzer?: string;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      enable: 'enable',
      indexAnalyzer: 'indexAnalyzer',
      rankThreshold: 'rankThreshold',
      searchAnalyzer: 'searchAnalyzer',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      enable: 'boolean',
      indexAnalyzer: 'string',
      rankThreshold: 'number',
      searchAnalyzer: 'string',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecordsIndexSettingVectorIndexSetting extends $dara.Model {
  /**
   * @example
   * ADB
   */
  category?: string;
  /**
   * @example
   * DashScope
   */
  embeddingType?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * null
   */
  rankThreshold?: number;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      embeddingType: 'embeddingType',
      enable: 'enable',
      rankThreshold: 'rankThreshold',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      embeddingType: 'string',
      enable: 'boolean',
      rankThreshold: 'number',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecordsIndexSetting extends $dara.Model {
  chunkStrategy?: GetLibraryListResponseBodyDataRecordsIndexSettingChunkStrategy;
  modelConfig?: GetLibraryListResponseBodyDataRecordsIndexSettingModelConfig;
  promptRoleStyle?: string;
  queryEnhancer?: GetLibraryListResponseBodyDataRecordsIndexSettingQueryEnhancer;
  recallStrategy?: GetLibraryListResponseBodyDataRecordsIndexSettingRecallStrategy;
  textIndexSetting?: GetLibraryListResponseBodyDataRecordsIndexSettingTextIndexSetting;
  vectorIndexSetting?: GetLibraryListResponseBodyDataRecordsIndexSettingVectorIndexSetting;
  static names(): { [key: string]: string } {
    return {
      chunkStrategy: 'chunkStrategy',
      modelConfig: 'modelConfig',
      promptRoleStyle: 'promptRoleStyle',
      queryEnhancer: 'queryEnhancer',
      recallStrategy: 'recallStrategy',
      textIndexSetting: 'textIndexSetting',
      vectorIndexSetting: 'vectorIndexSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkStrategy: GetLibraryListResponseBodyDataRecordsIndexSettingChunkStrategy,
      modelConfig: GetLibraryListResponseBodyDataRecordsIndexSettingModelConfig,
      promptRoleStyle: 'string',
      queryEnhancer: GetLibraryListResponseBodyDataRecordsIndexSettingQueryEnhancer,
      recallStrategy: GetLibraryListResponseBodyDataRecordsIndexSettingRecallStrategy,
      textIndexSetting: GetLibraryListResponseBodyDataRecordsIndexSettingTextIndexSetting,
      vectorIndexSetting: GetLibraryListResponseBodyDataRecordsIndexSettingVectorIndexSetting,
    };
  }

  validate() {
    if(this.chunkStrategy && typeof (this.chunkStrategy as any).validate === 'function') {
      (this.chunkStrategy as any).validate();
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    if(this.queryEnhancer && typeof (this.queryEnhancer as any).validate === 'function') {
      (this.queryEnhancer as any).validate();
    }
    if(this.recallStrategy && typeof (this.recallStrategy as any).validate === 'function') {
      (this.recallStrategy as any).validate();
    }
    if(this.textIndexSetting && typeof (this.textIndexSetting as any).validate === 'function') {
      (this.textIndexSetting as any).validate();
    }
    if(this.vectorIndexSetting && typeof (this.vectorIndexSetting as any).validate === 'function') {
      (this.vectorIndexSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecords extends $dara.Model {
  description?: string;
  /**
   * @example
   * 10
   */
  documentCount?: number;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 24vs4aa42jv1rg7
   */
  id?: string;
  indexSetting?: GetLibraryListResponseBodyDataRecordsIndexSetting;
  libraryName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      documentCount: 'documentCount',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      indexSetting: 'indexSetting',
      libraryName: 'libraryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      documentCount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      indexSetting: GetLibraryListResponseBodyDataRecordsIndexSetting,
      libraryName: 'string',
    };
  }

  validate() {
    if(this.indexSetting && typeof (this.indexSetting as any).validate === 'function') {
      (this.indexSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: GetLibraryListResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      totalPages: 'totalPages',
      totalRecords: 'totalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetLibraryListResponseBodyDataRecords },
      totalPages: 'number',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParseResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * null
   */
  providerType?: string;
  /**
   * @example
   * b0a202e2-5031-4589-a6d7-39185f0d8d01
   */
  requestId?: string;
  /**
   * @example
   * {
   *           "Status": "Success",
   *           "Data": {},
   *           "Message": null,
   *           "TaskId": "docmind-20240601-123abc"
   *         }
   */
  result?: { [key: string]: any };
  resultUrl?: string;
  /**
   * @example
   * WaitRefresh
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'fileType',
      providerType: 'providerType',
      requestId: 'requestId',
      result: 'result',
      resultUrl: 'resultUrl',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      providerType: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resultUrl: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckTaskResultResponseBodyDataConversationListDialogueList extends $dara.Model {
  /**
   * @example
   * 0
   */
  begin?: number;
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  beginTime?: string;
  content?: string;
  /**
   * @example
   * null
   */
  customerId?: string;
  customerServiceId?: string;
  /**
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @example
   * 0
   */
  end?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 0
   */
  role?: string;
  /**
   * @example
   * TEXT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'begin',
      beginTime: 'beginTime',
      content: 'content',
      customerId: 'customerId',
      customerServiceId: 'customerServiceId',
      customerServiceType: 'customerServiceType',
      end: 'end',
      id: 'id',
      role: 'role',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      content: 'string',
      customerId: 'string',
      customerServiceId: 'string',
      customerServiceType: 'string',
      end: 'number',
      id: 'number',
      role: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckTaskResultResponseBodyDataConversationList extends $dara.Model {
  /**
   * @example
   * 1
   */
  callType?: string;
  /**
   * @example
   * 234234
   */
  customerId?: string;
  customerName?: string;
  /**
   * @example
   * 23984763826
   */
  customerServiceId?: string;
  customerServiceName?: string;
  dialogueList?: GetQualityCheckTaskResultResponseBodyDataConversationListDialogueList[];
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtService?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'callType',
      customerId: 'customerId',
      customerName: 'customerName',
      customerServiceId: 'customerServiceId',
      customerServiceName: 'customerServiceName',
      dialogueList: 'dialogueList',
      gmtService: 'gmtService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'string',
      customerId: 'string',
      customerName: 'string',
      customerServiceId: 'string',
      customerServiceName: 'string',
      dialogueList: { 'type': 'array', 'itemType': GetQualityCheckTaskResultResponseBodyDataConversationListDialogueList },
      gmtService: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckTaskResultResponseBodyDataQualityCheckListOriginDialogue extends $dara.Model {
  /**
   * @example
   * 0
   */
  begin?: number;
  /**
   * @example
   * 2024-05-23 14:57:50
   */
  beginTime?: string;
  content?: string;
  /**
   * @example
   * xxx
   */
  customerId?: string;
  /**
   * @example
   * 23876432
   */
  customerServiceId?: string;
  /**
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @example
   * 0
   */
  end?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 0
   */
  role?: string;
  /**
   * @example
   * TEXT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'begin',
      beginTime: 'beginTime',
      content: 'content',
      customerId: 'customerId',
      customerServiceId: 'customerServiceId',
      customerServiceType: 'customerServiceType',
      end: 'end',
      id: 'id',
      role: 'role',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      content: 'string',
      customerId: 'string',
      customerServiceId: 'string',
      customerServiceType: 'string',
      end: 'number',
      id: 'number',
      role: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckTaskResultResponseBodyDataQualityCheckList extends $dara.Model {
  bizType?: string;
  checkExplanation?: string;
  /**
   * @example
   * PASSED
   */
  checkPassed?: string;
  checkProcess?: string;
  /**
   * @example
   * HIT
   */
  checked?: string;
  /**
   * @example
   * 2024-05-23 14:57:50
   */
  gmtEnd?: string;
  /**
   * @example
   * 2024-05-23 14:57:50
   */
  gmtStart?: string;
  /**
   * @example
   * 0
   */
  mode?: string;
  originDialogue?: GetQualityCheckTaskResultResponseBodyDataQualityCheckListOriginDialogue[];
  /**
   * @example
   * warning_customers
   */
  qualityGroupId?: string;
  ruleDescription?: string;
  /**
   * @example
   * wcm_start
   */
  ruleId?: string;
  ruleType?: string;
  subNodeCol?: any[];
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      checkExplanation: 'checkExplanation',
      checkPassed: 'checkPassed',
      checkProcess: 'checkProcess',
      checked: 'checked',
      gmtEnd: 'gmtEnd',
      gmtStart: 'gmtStart',
      mode: 'mode',
      originDialogue: 'originDialogue',
      qualityGroupId: 'qualityGroupId',
      ruleDescription: 'ruleDescription',
      ruleId: 'ruleId',
      ruleType: 'ruleType',
      subNodeCol: 'subNodeCol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      checkExplanation: 'string',
      checkPassed: 'string',
      checkProcess: 'string',
      checked: 'string',
      gmtEnd: 'string',
      gmtStart: 'string',
      mode: 'string',
      originDialogue: { 'type': 'array', 'itemType': GetQualityCheckTaskResultResponseBodyDataQualityCheckListOriginDialogue },
      qualityGroupId: 'string',
      ruleDescription: 'string',
      ruleId: 'string',
      ruleType: 'string',
      subNodeCol: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.originDialogue)) {
      $dara.Model.validateArray(this.originDialogue);
    }
    if(Array.isArray(this.subNodeCol)) {
      $dara.Model.validateArray(this.subNodeCol);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckTaskResultResponseBodyData extends $dara.Model {
  conversationList?: GetQualityCheckTaskResultResponseBodyDataConversationList;
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtEnd?: string;
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtStart?: string;
  qualityCheckList?: GetQualityCheckTaskResultResponseBodyDataQualityCheckList[];
  /**
   * @example
   * INIT
   */
  status?: string;
  /**
   * @example
   * 1703557101831
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationList: 'conversationList',
      gmtCreate: 'gmtCreate',
      gmtEnd: 'gmtEnd',
      gmtStart: 'gmtStart',
      qualityCheckList: 'qualityCheckList',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationList: GetQualityCheckTaskResultResponseBodyDataConversationList,
      gmtCreate: 'string',
      gmtEnd: 'string',
      gmtStart: 'string',
      qualityCheckList: { 'type': 'array', 'itemType': GetQualityCheckTaskResultResponseBodyDataQualityCheckList },
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.conversationList && typeof (this.conversationList as any).validate === 'function') {
      (this.conversationList as any).validate();
    }
    if(Array.isArray(this.qualityCheckList)) {
      $dara.Model.validateArray(this.qualityCheckList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryTaskResultResponseBodyDataChoicesMessage extends $dara.Model {
  content?: string;
  /**
   * @example
   * assistant
   */
  role?: string;
  toolCalls?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
      toolCalls: 'toolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
      toolCalls: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.toolCalls)) {
      $dara.Model.validateArray(this.toolCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryTaskResultResponseBodyDataChoices extends $dara.Model {
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  message?: GetSummaryTaskResultResponseBodyDataChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'finishReason',
      index: 'index',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      index: 'number',
      message: GetSummaryTaskResultResponseBodyDataChoicesMessage,
    };
  }

  validate() {
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryTaskResultResponseBodyDataUsage extends $dara.Model {
  /**
   * @example
   * 0
   */
  imageCount?: number;
  /**
   * @example
   * 0
   */
  imageTokens?: number;
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 200
   */
  outputTokens?: number;
  /**
   * @example
   * 300
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      imageCount: 'imageCount',
      imageTokens: 'imageTokens',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCount: 'number',
      imageTokens: 'number',
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryTaskResultResponseBodyData extends $dara.Model {
  choices?: GetSummaryTaskResultResponseBodyDataChoices[];
  /**
   * @example
   * 1726285125915
   */
  created?: number;
  /**
   * @example
   * 1202
   */
  id?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 0bc13a9517168617617186457e401f
   */
  requestId?: string;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  /**
   * @example
   * 300
   */
  totalTokens?: number;
  usage?: GetSummaryTaskResultResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
      created: 'created',
      id: 'id',
      modelId: 'modelId',
      requestId: 'requestId',
      time: 'time',
      totalTokens: 'totalTokens',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': GetSummaryTaskResultResponseBodyDataChoices },
      created: 'number',
      id: 'string',
      modelId: 'string',
      requestId: 'string',
      time: 'string',
      totalTokens: 'number',
      usage: GetSummaryTaskResultResponseBodyDataUsage,
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewDocumentResponseBodyData extends $dara.Model {
  /**
   * @example
   * pdf
   */
  previewType?: string;
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  uploadTime?: string;
  /**
   * @example
   * https://agi.alicdn.com/user/d0o/d3c1f50d-a6c2-49b3-b0c8-3e613c3f20ee_16872_3236784461.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      previewType: 'previewType',
      title: 'title',
      uploadTime: 'uploadTime',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      previewType: 'string',
      title: 'string',
      uploadTime: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealTimeDialogRequestConversationModel extends $dara.Model {
  /**
   * @example
   * 5
   */
  begin?: number;
  /**
   * @example
   * 2024-11-08 09:51:16
   */
  beginTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @example
   * 98457834685635
   */
  customerId?: string;
  /**
   * @example
   * 1374683645635
   */
  customerServiceId?: string;
  /**
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @example
   * 10
   */
  end?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  role?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * audio
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'begin',
      beginTime: 'beginTime',
      content: 'content',
      customerId: 'customerId',
      customerServiceId: 'customerServiceId',
      customerServiceType: 'customerServiceType',
      end: 'end',
      role: 'role',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      content: 'string',
      customerId: 'string',
      customerServiceId: 'string',
      customerServiceType: 'string',
      end: 'number',
      role: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealTimeDialogResponseBodyChoicesDelta extends $dara.Model {
  /**
   * @example
   * null
   */
  analysisProcess?: string;
  /**
   * @remarks
   * time
   * 
   * @example
   * null
   */
  callTime?: string;
  /**
   * @example
   * false
   */
  hangUpDialog?: boolean;
  /**
   * @example
   * 1853360771162058752
   */
  intentionCode?: string;
  intentionName?: string;
  intentionScript?: string;
  interrupt?: boolean;
  /**
   * @example
   * null
   */
  recommendIntention?: string;
  /**
   * @example
   * null
   */
  recommendScript?: string;
  selfDirectedScript?: string;
  selfDirectedScriptFullContent?: string;
  static names(): { [key: string]: string } {
    return {
      analysisProcess: 'analysisProcess',
      callTime: 'callTime',
      hangUpDialog: 'hangUpDialog',
      intentionCode: 'intentionCode',
      intentionName: 'intentionName',
      intentionScript: 'intentionScript',
      interrupt: 'interrupt',
      recommendIntention: 'recommendIntention',
      recommendScript: 'recommendScript',
      selfDirectedScript: 'selfDirectedScript',
      selfDirectedScriptFullContent: 'selfDirectedScriptFullContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisProcess: 'string',
      callTime: 'string',
      hangUpDialog: 'boolean',
      intentionCode: 'string',
      intentionName: 'string',
      intentionScript: 'string',
      interrupt: 'boolean',
      recommendIntention: 'string',
      recommendScript: 'string',
      selfDirectedScript: 'string',
      selfDirectedScriptFullContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealTimeDialogResponseBodyChoicesMessage extends $dara.Model {
  /**
   * @example
   * null
   */
  analysisProcess?: string;
  /**
   * @remarks
   * time
   * 
   * @example
   * 1735139569523
   */
  callTime?: string;
  /**
   * @example
   * false
   */
  hangUpDialog?: boolean;
  /**
   * @example
   * 1853360771162058752
   */
  intentionCode?: string;
  intentionName?: string;
  intentionScript?: string;
  interrupt?: boolean;
  /**
   * @example
   * null
   */
  recommendIntention?: string;
  /**
   * @example
   * null
   */
  recommendScript?: string;
  /**
   * @example
   * null
   */
  selfDirectedScript?: string;
  selfDirectedScriptFullContent?: string;
  static names(): { [key: string]: string } {
    return {
      analysisProcess: 'analysisProcess',
      callTime: 'callTime',
      hangUpDialog: 'hangUpDialog',
      intentionCode: 'intentionCode',
      intentionName: 'intentionName',
      intentionScript: 'intentionScript',
      interrupt: 'interrupt',
      recommendIntention: 'recommendIntention',
      recommendScript: 'recommendScript',
      selfDirectedScript: 'selfDirectedScript',
      selfDirectedScriptFullContent: 'selfDirectedScriptFullContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisProcess: 'string',
      callTime: 'string',
      hangUpDialog: 'boolean',
      intentionCode: 'string',
      intentionName: 'string',
      intentionScript: 'string',
      interrupt: 'boolean',
      recommendIntention: 'string',
      recommendScript: 'string',
      selfDirectedScript: 'string',
      selfDirectedScriptFullContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealTimeDialogResponseBodyChoices extends $dara.Model {
  delta?: RealTimeDialogResponseBodyChoicesDelta;
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  message?: RealTimeDialogResponseBodyChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      delta: 'delta',
      finishReason: 'finishReason',
      index: 'index',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: RealTimeDialogResponseBodyChoicesDelta,
      finishReason: 'string',
      index: 'number',
      message: RealTimeDialogResponseBodyChoicesMessage,
    };
  }

  validate() {
    if(this.delta && typeof (this.delta as any).validate === 'function') {
      (this.delta as any).validate();
    }
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentRequestFiltersAnd extends $dara.Model {
  /**
   * @example
   * 20
   */
  boost?: number;
  /**
   * @example
   * docType
   */
  key?: string;
  /**
   * @example
   * contains
   */
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentRequestFiltersOr extends $dara.Model {
  /**
   * @example
   * 30
   */
  boost?: number;
  /**
   * @example
   * researcher
   */
  key?: string;
  /**
   * @example
   * eq
   */
  operator?: string;
  /**
   * @example
   * zhangsan
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentRequestFilters extends $dara.Model {
  and?: RecallDocumentRequestFiltersAnd[];
  /**
   * @example
   * Text
   */
  chunkType?: string;
  docIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sdbjhvs
   */
  libraryId?: string;
  or?: RecallDocumentRequestFiltersOr[];
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      and: 'and',
      chunkType: 'chunkType',
      docIdList: 'docIdList',
      libraryId: 'libraryId',
      or: 'or',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      and: { 'type': 'array', 'itemType': RecallDocumentRequestFiltersAnd },
      chunkType: 'string',
      docIdList: { 'type': 'array', 'itemType': 'string' },
      libraryId: 'string',
      or: { 'type': 'array', 'itemType': RecallDocumentRequestFiltersOr },
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.and)) {
      $dara.Model.validateArray(this.and);
    }
    if(Array.isArray(this.docIdList)) {
      $dara.Model.validateArray(this.docIdList);
    }
    if(Array.isArray(this.or)) {
      $dara.Model.validateArray(this.or);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataChunkListPos extends $dara.Model {
  axisArray?: number[];
  /**
   * @example
   * 1
   */
  page?: number;
  textHighlightArea?: number[];
  static names(): { [key: string]: string } {
    return {
      axisArray: 'axisArray',
      page: 'page',
      textHighlightArea: 'textHighlightArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axisArray: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      textHighlightArea: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.axisArray)) {
      $dara.Model.validateArray(this.axisArray);
    }
    if(Array.isArray(this.textHighlightArea)) {
      $dara.Model.validateArray(this.textHighlightArea);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataChunkList extends $dara.Model {
  /**
   * @example
   * 823746762354
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * http://oss-xxx-hangzhou.com/xxx
   */
  chunkOssUrl?: string;
  chunkText?: string;
  /**
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @example
   * 839468263472
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * dscsbdsk
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 982374872364
   */
  nextChunkId?: string;
  pos?: RecallDocumentResponseBodyDataChunkListPos[];
  /**
   * @example
   * 827364827364832
   */
  preChunkId?: string;
  /**
   * @example
   * 0.5
   */
  score?: number;
  /**
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunkId: 'chunkId',
      chunkMeta: 'chunkMeta',
      chunkOssUrl: 'chunkOssUrl',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
      docId: 'docId',
      fileType: 'fileType',
      libraryId: 'libraryId',
      libraryName: 'libraryName',
      nextChunkId: 'nextChunkId',
      pos: 'pos',
      preChunkId: 'preChunkId',
      score: 'score',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOssUrl: 'string',
      chunkText: 'string',
      chunkType: 'string',
      docId: 'string',
      fileType: 'string',
      libraryId: 'string',
      libraryName: 'string',
      nextChunkId: 'string',
      pos: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataChunkListPos },
      preChunkId: 'string',
      score: 'number',
      title: 'string',
    };
  }

  validate() {
    if(this.chunkMeta) {
      $dara.Model.validateMap(this.chunkMeta);
    }
    if(Array.isArray(this.pos)) {
      $dara.Model.validateArray(this.pos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataChunkPartListPos extends $dara.Model {
  axisArray?: number[];
  /**
   * @example
   * 1
   */
  page?: number;
  textHighlightArea?: number[];
  static names(): { [key: string]: string } {
    return {
      axisArray: 'axisArray',
      page: 'page',
      textHighlightArea: 'textHighlightArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axisArray: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      textHighlightArea: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.axisArray)) {
      $dara.Model.validateArray(this.axisArray);
    }
    if(Array.isArray(this.textHighlightArea)) {
      $dara.Model.validateArray(this.textHighlightArea);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataChunkPartList extends $dara.Model {
  /**
   * @example
   * 98327482364
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * http://oss-xxx-hangzhou.com/xxx
   */
  chunkOssUrl?: string;
  chunkText?: string;
  /**
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @example
   * 92837482364
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * sjdhgjsd
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 2387648263542
   */
  nextChunkId?: string;
  pos?: RecallDocumentResponseBodyDataChunkPartListPos[];
  /**
   * @example
   * 32874682764
   */
  preChunkId?: string;
  /**
   * @example
   * 0.5
   */
  score?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunkId: 'chunkId',
      chunkMeta: 'chunkMeta',
      chunkOssUrl: 'chunkOssUrl',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
      docId: 'docId',
      fileType: 'fileType',
      libraryId: 'libraryId',
      libraryName: 'libraryName',
      nextChunkId: 'nextChunkId',
      pos: 'pos',
      preChunkId: 'preChunkId',
      score: 'score',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOssUrl: 'string',
      chunkText: 'string',
      chunkType: 'string',
      docId: 'string',
      fileType: 'string',
      libraryId: 'string',
      libraryName: 'string',
      nextChunkId: 'string',
      pos: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataChunkPartListPos },
      preChunkId: 'string',
      score: 'number',
      title: 'string',
    };
  }

  validate() {
    if(this.chunkMeta) {
      $dara.Model.validateMap(this.chunkMeta);
    }
    if(Array.isArray(this.pos)) {
      $dara.Model.validateArray(this.pos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataDocuments extends $dara.Model {
  /**
   * @example
   * 92837482364
   */
  docId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  documentMeta?: { [key: string]: any };
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * sjdhgjsd
   */
  libraryId?: string;
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * http://oss-xxx-hangzhou.com/test.pdf
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      documentMeta: 'documentMeta',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      libraryId: 'libraryId',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      documentMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileType: 'string',
      gmtCreate: 'string',
      libraryId: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.documentMeta) {
      $dara.Model.validateMap(this.documentMeta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataTextChunkListPos extends $dara.Model {
  axisArray?: number[];
  /**
   * @example
   * 1
   */
  page?: number;
  textHighlightArea?: number[];
  static names(): { [key: string]: string } {
    return {
      axisArray: 'axisArray',
      page: 'page',
      textHighlightArea: 'textHighlightArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axisArray: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      textHighlightArea: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.axisArray)) {
      $dara.Model.validateArray(this.axisArray);
    }
    if(Array.isArray(this.textHighlightArea)) {
      $dara.Model.validateArray(this.textHighlightArea);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataTextChunkList extends $dara.Model {
  /**
   * @example
   * 32874682364
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * http://oss-xxx-hangzhou.com/xxx
   */
  chunkOssUrl?: string;
  chunkText?: string;
  /**
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @example
   * 8372467263542
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * djsgfsjd
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 23874682432
   */
  nextChunkId?: string;
  pos?: RecallDocumentResponseBodyDataTextChunkListPos[];
  /**
   * @example
   * 89473868346
   */
  preChunkId?: string;
  /**
   * @example
   * 0.5
   */
  score?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunkId: 'chunkId',
      chunkMeta: 'chunkMeta',
      chunkOssUrl: 'chunkOssUrl',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
      docId: 'docId',
      fileType: 'fileType',
      libraryId: 'libraryId',
      libraryName: 'libraryName',
      nextChunkId: 'nextChunkId',
      pos: 'pos',
      preChunkId: 'preChunkId',
      score: 'score',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOssUrl: 'string',
      chunkText: 'string',
      chunkType: 'string',
      docId: 'string',
      fileType: 'string',
      libraryId: 'string',
      libraryName: 'string',
      nextChunkId: 'string',
      pos: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataTextChunkListPos },
      preChunkId: 'string',
      score: 'number',
      title: 'string',
    };
  }

  validate() {
    if(this.chunkMeta) {
      $dara.Model.validateMap(this.chunkMeta);
    }
    if(Array.isArray(this.pos)) {
      $dara.Model.validateArray(this.pos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataVectorChunkListPos extends $dara.Model {
  axisArray?: number[];
  /**
   * @example
   * 1
   */
  page?: number;
  textHighlightArea?: number[];
  static names(): { [key: string]: string } {
    return {
      axisArray: 'axisArray',
      page: 'page',
      textHighlightArea: 'textHighlightArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axisArray: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      textHighlightArea: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.axisArray)) {
      $dara.Model.validateArray(this.axisArray);
    }
    if(Array.isArray(this.textHighlightArea)) {
      $dara.Model.validateArray(this.textHighlightArea);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataVectorChunkList extends $dara.Model {
  /**
   * @example
   * 8723642345276
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * https://oss-xxxx-hangzhou.com/test.pdf
   */
  chunkOssUrl?: string;
  chunkText?: string;
  /**
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @example
   * 78326476235675372
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * djsgfsjd
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 293846872343
   */
  nextChunkId?: string;
  pos?: RecallDocumentResponseBodyDataVectorChunkListPos[];
  /**
   * @example
   * 873647326542
   */
  preChunkId?: string;
  /**
   * @example
   * 0.5
   */
  score?: number;
  /**
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunkId: 'chunkId',
      chunkMeta: 'chunkMeta',
      chunkOssUrl: 'chunkOssUrl',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
      docId: 'docId',
      fileType: 'fileType',
      libraryId: 'libraryId',
      libraryName: 'libraryName',
      nextChunkId: 'nextChunkId',
      pos: 'pos',
      preChunkId: 'preChunkId',
      score: 'score',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOssUrl: 'string',
      chunkText: 'string',
      chunkType: 'string',
      docId: 'string',
      fileType: 'string',
      libraryId: 'string',
      libraryName: 'string',
      nextChunkId: 'string',
      pos: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataVectorChunkListPos },
      preChunkId: 'string',
      score: 'number',
      title: 'string',
    };
  }

  validate() {
    if(this.chunkMeta) {
      $dara.Model.validateMap(this.chunkMeta);
    }
    if(Array.isArray(this.pos)) {
      $dara.Model.validateArray(this.pos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyData extends $dara.Model {
  chunkList?: RecallDocumentResponseBodyDataChunkList[];
  chunkPartList?: RecallDocumentResponseBodyDataChunkPartList[];
  chunkTextList?: string[];
  documents?: RecallDocumentResponseBodyDataDocuments[];
  /**
   * @example
   * 100
   */
  embeddingElapsedMs?: number;
  textChunkList?: RecallDocumentResponseBodyDataTextChunkList[];
  /**
   * @example
   * 100
   */
  textSearchElapsedMs?: number;
  /**
   * @example
   * 400
   */
  totalElapsedMs?: number;
  vectorChunkList?: RecallDocumentResponseBodyDataVectorChunkList[];
  /**
   * @example
   * 100
   */
  vectorSearchElapsedMs?: number;
  static names(): { [key: string]: string } {
    return {
      chunkList: 'chunkList',
      chunkPartList: 'chunkPartList',
      chunkTextList: 'chunkTextList',
      documents: 'documents',
      embeddingElapsedMs: 'embeddingElapsedMs',
      textChunkList: 'textChunkList',
      textSearchElapsedMs: 'textSearchElapsedMs',
      totalElapsedMs: 'totalElapsedMs',
      vectorChunkList: 'vectorChunkList',
      vectorSearchElapsedMs: 'vectorSearchElapsedMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkList: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataChunkList },
      chunkPartList: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataChunkPartList },
      chunkTextList: { 'type': 'array', 'itemType': 'string' },
      documents: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataDocuments },
      embeddingElapsedMs: 'number',
      textChunkList: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataTextChunkList },
      textSearchElapsedMs: 'number',
      totalElapsedMs: 'number',
      vectorChunkList: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataVectorChunkList },
      vectorSearchElapsedMs: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.chunkList)) {
      $dara.Model.validateArray(this.chunkList);
    }
    if(Array.isArray(this.chunkPartList)) {
      $dara.Model.validateArray(this.chunkPartList);
    }
    if(Array.isArray(this.chunkTextList)) {
      $dara.Model.validateArray(this.chunkTextList);
    }
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    if(Array.isArray(this.textChunkList)) {
      $dara.Model.validateArray(this.textChunkList);
    }
    if(Array.isArray(this.vectorChunkList)) {
      $dara.Model.validateArray(this.vectorChunkList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionRequestGlobalIntentionList extends $dara.Model {
  description?: string;
  intention?: string;
  /**
   * @example
   * 1810566978021232640
   */
  intentionCode?: string;
  intentionScript?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intention: 'intention',
      intentionCode: 'intentionCode',
      intentionScript: 'intentionScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intention: 'string',
      intentionCode: 'string',
      intentionScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionRequestHierarchicalIntentionList extends $dara.Model {
  description?: string;
  intention?: string;
  /**
   * @example
   * 1810929291010150400
   */
  intentionCode?: string;
  intentionScript?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intention: 'intention',
      intentionCode: 'intentionCode',
      intentionScript: 'intentionScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intention: 'string',
      intentionCode: 'string',
      intentionScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionRequestIntentionList extends $dara.Model {
  description?: string;
  intention?: string;
  /**
   * @example
   * 1808766224000262144
   */
  intentionCode?: string;
  intentionScript?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intention: 'intention',
      intentionCode: 'intentionCode',
      intentionScript: 'intentionScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intention: 'string',
      intentionCode: 'string',
      intentionScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionResponseBodyData extends $dara.Model {
  analysisProcess?: string;
  /**
   * @example
   * 1
   */
  intentionCode?: string;
  intentionName?: string;
  intentionScript?: string;
  recommendIntention?: string;
  recommendScript?: string;
  static names(): { [key: string]: string } {
    return {
      analysisProcess: 'analysisProcess',
      intentionCode: 'intentionCode',
      intentionName: 'intentionName',
      intentionScript: 'intentionScript',
      recommendIntention: 'recommendIntention',
      recommendScript: 'recommendScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisProcess: 'string',
      intentionCode: 'string',
      intentionName: 'string',
      intentionScript: 'string',
      recommendIntention: 'string',
      recommendScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAgentResponseBodyDataFunctionCallResponses extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * 2025-01-21 16:37:14
   */
  endTime?: string;
  functionArgs?: string;
  /**
   * @example
   * web_search
   */
  functionName?: string;
  result?: string;
  /**
   * @example
   * 2025-01-21 16:37:14
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      endTime: 'endTime',
      functionArgs: 'functionArgs',
      functionName: 'functionName',
      result: 'result',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      endTime: 'string',
      functionArgs: 'string',
      functionName: 'string',
      result: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAgentResponseBodyDataResponseChoicesMessage extends $dara.Model {
  content?: string;
  /**
   * @example
   * assistant
   */
  role?: string;
  /**
   * @example
   * assistant
   */
  roleDisplayName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
      roleDisplayName: 'roleDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
      roleDisplayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAgentResponseBodyDataResponseChoices extends $dara.Model {
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  message?: RunAgentResponseBodyDataResponseChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'finishReason',
      index: 'index',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      index: 'number',
      message: RunAgentResponseBodyDataResponseChoicesMessage,
    };
  }

  validate() {
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAgentResponseBodyDataResponse extends $dara.Model {
  choices?: RunAgentResponseBodyDataResponseChoices[];
  /**
   * @example
   * 1737448637
   */
  created?: number;
  /**
   * @example
   * d91d9afa-7cfc-4235-b012-a6f8e6ffa443
   */
  id?: string;
  /**
   * @example
   * qwen-plus
   */
  modelId?: string;
  /**
   * @example
   * 2025-01-21T16:37:17.497206762
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
      created: 'created',
      id: 'id',
      modelId: 'modelId',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': RunAgentResponseBodyDataResponseChoices },
      created: 'number',
      id: 'string',
      modelId: 'string',
      time: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAgentResponseBodyData extends $dara.Model {
  functionCallResponses?: RunAgentResponseBodyDataFunctionCallResponses[];
  /**
   * @example
   * 766
   */
  inputTokens?: number;
  /**
   * @example
   * 988
   */
  outputTokens?: number;
  response?: RunAgentResponseBodyDataResponse;
  /**
   * @example
   * 4vlag5ken3
   */
  threadId?: string;
  /**
   * @example
   * 5bdb9809856c58acb92001f8ae65773c
   */
  traceId?: string;
  /**
   * @example
   * w4paqoezm2
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      functionCallResponses: 'functionCallResponses',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      response: 'response',
      threadId: 'threadId',
      traceId: 'traceId',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionCallResponses: { 'type': 'array', 'itemType': RunAgentResponseBodyDataFunctionCallResponses },
      inputTokens: 'number',
      outputTokens: 'number',
      response: RunAgentResponseBodyDataResponse,
      threadId: 'string',
      traceId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.functionCallResponses)) {
      $dara.Model.validateArray(this.functionCallResponses);
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationRequestMessages extends $dara.Model {
  content?: string;
  /**
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

export class RunChatResultGenerationRequestToolsFunctionParameters extends $dara.Model {
  /**
   * @example
   * {
   *                             "location": {
   *                                 "type": "string",
   *                                 "description": "The city and state, e.g. San Francisco, CA"
   *                             },
   *                             "unit": {
   *                                 "type": "string",
   *                                 "enum": [
   *                                     "celsius",
   *                                     "fahrenheit"
   *                                 ]
   *                             }
   *                         }
   */
  properties?: { [key: string]: any };
  /**
   * @example
   * object
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationRequestToolsFunction extends $dara.Model {
  description?: string;
  /**
   * @example
   * get_time
   */
  name?: string;
  parameters?: RunChatResultGenerationRequestToolsFunctionParameters;
  required?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      parameters: 'parameters',
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      parameters: RunChatResultGenerationRequestToolsFunctionParameters,
      required: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    if(Array.isArray(this.required)) {
      $dara.Model.validateArray(this.required);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationRequestTools extends $dara.Model {
  function?: RunChatResultGenerationRequestToolsFunction;
  /**
   * @example
   * function
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: RunChatResultGenerationRequestToolsFunction,
      type: 'string',
    };
  }

  validate() {
    if(this.function && typeof (this.function as any).validate === 'function') {
      (this.function as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationResponseBodyChoicesMessage extends $dara.Model {
  content?: string;
  /**
   * @example
   * user
   */
  role?: string;
  toolCalls?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
      toolCalls: 'toolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
      toolCalls: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.toolCalls)) {
      $dara.Model.validateArray(this.toolCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationResponseBodyChoices extends $dara.Model {
  /**
   * @example
   * null
   */
  finishReason?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  message?: RunChatResultGenerationResponseBodyChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'finishReason',
      index: 'index',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      index: 'number',
      message: RunChatResultGenerationResponseBodyChoicesMessage,
    };
  }

  validate() {
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationResponseBodyUsage extends $dara.Model {
  /**
   * @example
   * 0
   */
  imageCount?: number;
  /**
   * @example
   * 0
   */
  imageTokens?: number;
  /**
   * @example
   * 200
   */
  inputTokens?: number;
  /**
   * @example
   * 300
   */
  outputTokens?: number;
  /**
   * @example
   * 500
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      imageCount: 'imageCount',
      imageTokens: 'imageTokens',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCount: 'number',
      imageTokens: 'number',
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationRequestQueryCriteriaAnd extends $dara.Model {
  /**
   * @example
   * 0.5
   */
  boost?: number;
  /**
   * @example
   * city
   */
  key?: string;
  /**
   * @example
   * eq
   */
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationRequestQueryCriteriaOr extends $dara.Model {
  /**
   * @example
   * 0.5
   */
  boost?: number;
  /**
   * @example
   * city
   */
  key?: string;
  /**
   * @example
   * eq
   */
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationRequestQueryCriteria extends $dara.Model {
  and?: RunLibraryChatGenerationRequestQueryCriteriaAnd[];
  or?: RunLibraryChatGenerationRequestQueryCriteriaOr[];
  static names(): { [key: string]: string } {
    return {
      and: 'and',
      or: 'or',
    };
  }

  static types(): { [key: string]: any } {
    return {
      and: { 'type': 'array', 'itemType': RunLibraryChatGenerationRequestQueryCriteriaAnd },
      or: { 'type': 'array', 'itemType': RunLibraryChatGenerationRequestQueryCriteriaOr },
    };
  }

  validate() {
    if(Array.isArray(this.and)) {
      $dara.Model.validateArray(this.and);
    }
    if(Array.isArray(this.or)) {
      $dara.Model.validateArray(this.or);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationRequestTextSearchParameter extends $dara.Model {
  /**
   * @example
   * 10
   */
  limit?: number;
  /**
   * @example
   * IkMaxWord
   */
  searchAnalyzerType?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      searchAnalyzerType: 'searchAnalyzerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      searchAnalyzerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationRequestVectorSearchParameter extends $dara.Model {
  /**
   * @example
   * 10
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitChatQuestionRequestQuestionList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-11-17 10:05:00
   */
  gmtCreate?: string;
  reply?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1869300950603128834
   */
  sessionId?: string;
  /**
   * @example
   * PRODUCT_QA
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 39485783475638465
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      gmtCreate: 'gmtCreate',
      reply: 'reply',
      sessionId: 'sessionId',
      type: 'type',
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'string',
      reply: 'string',
      sessionId: 'string',
      type: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitChatQuestionResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1869307330227937280
   */
  batchId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocumentChunkRequestChunks extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1987834755763847
   */
  chunkId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  chunkText?: string;
  static names(): { [key: string]: string } {
    return {
      chunkId: 'chunkId',
      chunkText: 'chunkText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      chunkText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequestIndexSettingChunkStrategy extends $dara.Model {
  /**
   * @example
   * true
   */
  docTreeSplit?: boolean;
  /**
   * @example
   * 160
   */
  docTreeSplitSize?: number;
  /**
   * @example
   * true
   */
  enhanceGraph?: boolean;
  /**
   * @example
   * true
   */
  enhanceTable?: boolean;
  /**
   * @example
   * 20
   */
  overlap?: number;
  /**
   * @example
   * true
   */
  sentenceSplit?: boolean;
  /**
   * @example
   * 160
   */
  sentenceSplitSize?: number;
  /**
   * @example
   * 256
   */
  size?: number;
  /**
   * @example
   * true
   */
  split?: boolean;
  static names(): { [key: string]: string } {
    return {
      docTreeSplit: 'docTreeSplit',
      docTreeSplitSize: 'docTreeSplitSize',
      enhanceGraph: 'enhanceGraph',
      enhanceTable: 'enhanceTable',
      overlap: 'overlap',
      sentenceSplit: 'sentenceSplit',
      sentenceSplitSize: 'sentenceSplitSize',
      size: 'size',
      split: 'split',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docTreeSplit: 'boolean',
      docTreeSplitSize: 'number',
      enhanceGraph: 'boolean',
      enhanceTable: 'boolean',
      overlap: 'number',
      sentenceSplit: 'boolean',
      sentenceSplitSize: 'number',
      size: 'number',
      split: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequestIndexSettingModelConfig extends $dara.Model {
  /**
   * @example
   * 0.8
   */
  temperature?: number;
  /**
   * @remarks
   * topP
   * 
   * @example
   * 0.8
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      temperature: 'temperature',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      temperature: 'number',
      topP: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequestIndexSettingQueryEnhancer extends $dara.Model {
  /**
   * @example
   * true
   */
  enableFollowUp?: boolean;
  /**
   * @example
   * true
   */
  enableMultiQuery?: boolean;
  /**
   * @example
   * true
   */
  enableOpenQa?: boolean;
  /**
   * @example
   * true
   */
  enableQueryRewrite?: boolean;
  /**
   * @example
   * true
   */
  enableSession?: boolean;
  /**
   * @example
   * sjdhgfc
   */
  localKnowledgeId?: string;
  /**
   * @example
   * true
   */
  withDocumentReference?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableFollowUp: 'enableFollowUp',
      enableMultiQuery: 'enableMultiQuery',
      enableOpenQa: 'enableOpenQa',
      enableQueryRewrite: 'enableQueryRewrite',
      enableSession: 'enableSession',
      localKnowledgeId: 'localKnowledgeId',
      withDocumentReference: 'withDocumentReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableFollowUp: 'boolean',
      enableMultiQuery: 'boolean',
      enableOpenQa: 'boolean',
      enableQueryRewrite: 'boolean',
      enableSession: 'boolean',
      localKnowledgeId: 'string',
      withDocumentReference: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequestIndexSettingRecallStrategy extends $dara.Model {
  /**
   * @example
   * model
   */
  documentRankType?: string;
  /**
   * @example
   * 10
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      documentRankType: 'documentRankType',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentRankType: 'string',
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequestIndexSettingTextIndexSetting extends $dara.Model {
  /**
   * @example
   * ElasticSearch
   */
  category?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * Standard
   */
  indexAnalyzer?: string;
  /**
   * @example
   * 0.5
   */
  rankThreshold?: number;
  /**
   * @example
   * Standard
   */
  searchAnalyzer?: string;
  /**
   * @example
   * 50
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      enable: 'enable',
      indexAnalyzer: 'indexAnalyzer',
      rankThreshold: 'rankThreshold',
      searchAnalyzer: 'searchAnalyzer',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      enable: 'boolean',
      indexAnalyzer: 'string',
      rankThreshold: 'number',
      searchAnalyzer: 'string',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequestIndexSettingVectorIndexSetting extends $dara.Model {
  /**
   * @example
   * ADB
   */
  category?: string;
  /**
   * @example
   * DashScope
   */
  embeddingType?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 0.5
   */
  rankThreshold?: number;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      embeddingType: 'embeddingType',
      enable: 'enable',
      rankThreshold: 'rankThreshold',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      embeddingType: 'string',
      enable: 'boolean',
      rankThreshold: 'number',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequestIndexSetting extends $dara.Model {
  chunkStrategy?: UpdateLibraryRequestIndexSettingChunkStrategy;
  modelConfig?: UpdateLibraryRequestIndexSettingModelConfig;
  promptRoleStyle?: string;
  queryEnhancer?: UpdateLibraryRequestIndexSettingQueryEnhancer;
  recallStrategy?: UpdateLibraryRequestIndexSettingRecallStrategy;
  textIndexSetting?: UpdateLibraryRequestIndexSettingTextIndexSetting;
  vectorIndexSetting?: UpdateLibraryRequestIndexSettingVectorIndexSetting;
  static names(): { [key: string]: string } {
    return {
      chunkStrategy: 'chunkStrategy',
      modelConfig: 'modelConfig',
      promptRoleStyle: 'promptRoleStyle',
      queryEnhancer: 'queryEnhancer',
      recallStrategy: 'recallStrategy',
      textIndexSetting: 'textIndexSetting',
      vectorIndexSetting: 'vectorIndexSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkStrategy: UpdateLibraryRequestIndexSettingChunkStrategy,
      modelConfig: UpdateLibraryRequestIndexSettingModelConfig,
      promptRoleStyle: 'string',
      queryEnhancer: UpdateLibraryRequestIndexSettingQueryEnhancer,
      recallStrategy: UpdateLibraryRequestIndexSettingRecallStrategy,
      textIndexSetting: UpdateLibraryRequestIndexSettingTextIndexSetting,
      vectorIndexSetting: UpdateLibraryRequestIndexSettingVectorIndexSetting,
    };
  }

  validate() {
    if(this.chunkStrategy && typeof (this.chunkStrategy as any).validate === 'function') {
      (this.chunkStrategy as any).validate();
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    if(this.queryEnhancer && typeof (this.queryEnhancer as any).validate === 'function') {
      (this.queryEnhancer as any).validate();
    }
    if(this.recallStrategy && typeof (this.recallStrategy as any).validate === 'function') {
      (this.recallStrategy as any).validate();
    }
    if(this.textIndexSetting && typeof (this.textIndexSetting as any).validate === 'function') {
      (this.textIndexSetting as any).validate();
    }
    if(this.vectorIndexSetting && typeof (this.vectorIndexSetting as any).validate === 'function') {
      (this.vectorIndexSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQaLibraryRequestParseQaResults extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  answer?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  question?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'answer',
      question: 'question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      question: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQaLibraryResponseBodyData extends $dara.Model {
  /**
   * @example
   * 6jh378d
   */
  qaLibraryId?: string;
  static names(): { [key: string]: string } {
    return {
      qaLibraryId: 'qaLibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qaLibraryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAnnualDocSummaryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  anaYears?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  docInfos?: CreateAnnualDocSummaryTaskRequestDocInfos[];
  /**
   * @example
   * true
   */
  enableTable?: boolean;
  instruction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      anaYears: 'anaYears',
      docInfos: 'docInfos',
      enableTable: 'enableTable',
      instruction: 'instruction',
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anaYears: { 'type': 'array', 'itemType': 'number' },
      docInfos: { 'type': 'array', 'itemType': CreateAnnualDocSummaryTaskRequestDocInfos },
      enableTable: 'boolean',
      instruction: 'string',
      modelId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.anaYears)) {
      $dara.Model.validateArray(this.anaYears);
    }
    if(Array.isArray(this.docInfos)) {
      $dara.Model.validateArray(this.docInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAnnualDocSummaryTaskResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * 3284627354
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 32FFC91D-0A9F-585A-B84F-8A54C5187035
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAnnualDocSummaryTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAnnualDocSummaryTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAnnualDocSummaryTaskResponseBody,
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

export class CreateDialogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * taobao
   */
  channel?: string;
  enableLibrary?: boolean;
  /**
   * @example
   * null
   */
  metaData?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * live_broadcast_qa
   */
  playCode?: string;
  qaLibraryList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ebf83826-dc1c-46f8-9759-0fb6da4c8xxx
   */
  requestId?: string;
  selfDirected?: boolean;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      enableLibrary: 'enableLibrary',
      metaData: 'metaData',
      playCode: 'playCode',
      qaLibraryList: 'qaLibraryList',
      requestId: 'requestId',
      selfDirected: 'selfDirected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      enableLibrary: 'boolean',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      playCode: 'string',
      qaLibraryList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      selfDirected: 'boolean',
    };
  }

  validate() {
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    if(Array.isArray(this.qaLibraryList)) {
      $dara.Model.validateArray(this.qaLibraryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDialogResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: CreateDialogResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 003D019A-1BB3-53EC-A0D2-CE76DA5D73B1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: CreateDialogResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class CreateDialogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDialogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDialogResponseBody,
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

export class CreateDialogAnalysisTaskRequest extends $dara.Model {
  analysisNodes?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  conversationList?: CreateDialogAnalysisTaskRequestConversationList[];
  /**
   * @example
   * {
   * "labels": "XXX",
   * "summaryConstraints": "XXX",
   * "sopInfo": "XXX"
   * }
   */
  metaData?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * common
   */
  playCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisNodes: 'analysisNodes',
      conversationList: 'conversationList',
      metaData: 'metaData',
      playCode: 'playCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisNodes: { 'type': 'array', 'itemType': 'string' },
      conversationList: { 'type': 'array', 'itemType': CreateDialogAnalysisTaskRequestConversationList },
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      playCode: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.analysisNodes)) {
      $dara.Model.validateArray(this.analysisNodes);
    }
    if(Array.isArray(this.conversationList)) {
      $dara.Model.validateArray(this.conversationList);
    }
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDialogAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: string[];
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * EF4B5C9B-3BC8-5171-A47B-4C5CF3DC3258
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: { 'type': 'array', 'itemType': 'string' },
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class CreateDialogAnalysisTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDialogAnalysisTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDialogAnalysisTaskResponseBody,
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

export class CreateDocsSummaryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docInfos?: CreateDocsSummaryTaskRequestDocInfos[];
  /**
   * @example
   * true
   */
  enableTable?: boolean;
  instruction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      docInfos: 'docInfos',
      enableTable: 'enableTable',
      instruction: 'instruction',
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docInfos: { 'type': 'array', 'itemType': CreateDocsSummaryTaskRequestDocInfos },
      enableTable: 'boolean',
      instruction: 'string',
      modelId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docInfos)) {
      $dara.Model.validateArray(this.docInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocsSummaryTaskResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * 765675376
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 32FFC91D-0A9F-585A-B84F-8A54C5187035
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocsSummaryTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDocsSummaryTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDocsSummaryTaskResponseBody,
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

export class CreateFinReportSummaryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableTable?: boolean;
  /**
   * @example
   * 10
   */
  endPage?: number;
  instruction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3akzl28vap
   */
  libraryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 1
   */
  startPage?: number;
  /**
   * @example
   * custom
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      enableTable: 'enableTable',
      endPage: 'endPage',
      instruction: 'instruction',
      libraryId: 'libraryId',
      modelId: 'modelId',
      startPage: 'startPage',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      enableTable: 'boolean',
      endPage: 'number',
      instruction: 'string',
      libraryId: 'string',
      modelId: 'string',
      startPage: 'number',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFinReportSummaryTaskResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * 3284627354
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFinReportSummaryTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFinReportSummaryTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFinReportSummaryTaskResponseBody,
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

export class CreateLibraryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  indexSetting?: CreateLibraryRequestIndexSetting;
  /**
   * @remarks
   * This parameter is required.
   */
  libraryName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      indexSetting: 'indexSetting',
      libraryName: 'libraryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      indexSetting: CreateLibraryRequestIndexSetting,
      libraryName: 'string',
    };
  }

  validate() {
    if(this.indexSetting && typeof (this.indexSetting as any).validate === 'function') {
      (this.indexSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryResponseBody extends $dara.Model {
  /**
   * @example
   * 300
   */
  cost?: number;
  /**
   * @example
   * a1b2c3
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  message?: string;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * null
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLibraryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLibraryResponseBody,
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

export class CreatePdfTranslateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 873648346573245
   */
  docId?: string;
  knowledge?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cjshcxxxx
   */
  libraryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  modelId?: string;
  /**
   * @example
   * 中文
   */
  translateTo?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      knowledge: 'knowledge',
      libraryId: 'libraryId',
      modelId: 'modelId',
      translateTo: 'translateTo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      knowledge: 'string',
      libraryId: 'string',
      modelId: 'string',
      translateTo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePdfTranslateTaskResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * 3284627354
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePdfTranslateTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePdfTranslateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePdfTranslateTaskResponseBody,
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

export class CreatePredefinedDocumentRequest extends $dara.Model {
  chunks?: CreatePredefinedDocumentRequestChunks[];
  /**
   * @example
   * a1b2c3
   */
  libraryId?: string;
  /**
   * @example
   * {"a": "1"}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * 测试文档
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'chunks',
      libraryId: 'libraryId',
      metadata: 'metadata',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': CreatePredefinedDocumentRequestChunks },
      libraryId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePredefinedDocumentResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * 1782981430906818562
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 0a06dfe617018288881568684e2937
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePredefinedDocumentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePredefinedDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePredefinedDocumentResponseBody,
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

export class CreateQualityCheckTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  conversationList?: CreateQualityCheckTaskRequestConversationList;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  gmtService?: string;
  metaData?: { [key: string]: string };
  qualityGroup?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conversationList: 'conversationList',
      gmtService: 'gmtService',
      metaData: 'metaData',
      qualityGroup: 'qualityGroup',
      requestId: 'requestId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationList: CreateQualityCheckTaskRequestConversationList,
      gmtService: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      qualityGroup: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.conversationList && typeof (this.conversationList as any).validate === 'function') {
      (this.conversationList as any).validate();
    }
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    if(Array.isArray(this.qualityGroup)) {
      $dara.Model.validateArray(this.qualityGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityCheckTaskResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: CreateQualityCheckTaskResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * EF4B5C9B-3BC8-5171-A47B-4C5CF3DC3258
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: CreateQualityCheckTaskResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class CreateQualityCheckTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQualityCheckTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateQualityCheckTaskResponseBody,
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

export class DeleteDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3akzl28vap
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      docIds: 'docIds',
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIds: { 'type': 'array', 'itemType': 'string' },
      libraryId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docIds)) {
      $dara.Model.validateArray(this.docIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocumentResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 67C7021A-D268-553D-8C15-A087B9604028
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'boolean',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocumentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDocumentResponseBody,
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

export class DeleteLibraryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * skdfefxxx
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libraryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLibraryResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 30F6AD44-F078-540D-B5A5-1E519C8E9E6D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLibraryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLibraryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLibraryResponseBody,
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

export class EvictTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 17071319
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvictTaskResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * 17071319
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  message?: string;
  /**
   * @example
   * 44BD277A-87F9-5310-8D63-3E6645F1DA85
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvictTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EvictTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EvictTaskResponseBody,
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

export class GenDocQaResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 182364872346
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sjdgdsfg
   */
  libraryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      libraryId: 'libraryId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      libraryId: 'string',
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

export class GenDocQaResultResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GenDocQaResultResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 44BD277A-87F9-5310-8D63-3E6645F1DA85
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GenDocQaResultResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class GenDocQaResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenDocQaResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenDocQaResultResponseBody,
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

export class GetAppConfigResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetAppConfigResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * None
   */
  message?: string;
  /**
   * @example
   * EF4B5C9B-3BC8-5171-A47B-4C5CF3DC3258
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetAppConfigResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class GetAppConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAppConfigResponseBody,
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

export class GetChatQuestionRespRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1869307330227937280
   */
  batchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 237645726354
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatQuestionRespResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetChatQuestionRespResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 44BD277A-87F9-5310-8D63-3E6645F1DA85
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetChatQuestionRespResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class GetChatQuestionRespResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetChatQuestionRespResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetChatQuestionRespResponseBody,
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

export class GetDialogAnalysisResultRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  asc?: boolean;
  /**
   * @example
   * 2024-09-23 09:20:02
   */
  endTime?: string;
  sessionIds?: string[];
  /**
   * @example
   * 2024-09-14 09:11:00
   */
  startTime?: string;
  /**
   * @example
   * true
   */
  useUrl?: boolean;
  static names(): { [key: string]: string } {
    return {
      asc: 'asc',
      endTime: 'endTime',
      sessionIds: 'sessionIds',
      startTime: 'startTime',
      useUrl: 'useUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      endTime: 'string',
      sessionIds: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      useUrl: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.sessionIds)) {
      $dara.Model.validateArray(this.sessionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogAnalysisResultResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetDialogAnalysisResultResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 88A006F0-B565-53BA-B38A-DBDF9D0B2935
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetDialogAnalysisResultResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class GetDialogAnalysisResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDialogAnalysisResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDialogAnalysisResultResponseBody,
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

export class GetDialogDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1906623923815534xxx
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDialogDetailResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetDialogDetailResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetDialogDetailResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class GetDialogDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDialogDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDialogDetailResponseBody,
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

export class GetDocumentChunkListRequest extends $dara.Model {
  chunkIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 182364872346
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dsjgfdjgfxxx
   */
  libraryId?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * gmtCreate
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * test
   */
  searchQuery?: string;
  static names(): { [key: string]: string } {
    return {
      chunkIdList: 'chunkIdList',
      docId: 'docId',
      libraryId: 'libraryId',
      order: 'order',
      orderBy: 'orderBy',
      page: 'page',
      pageSize: 'pageSize',
      searchQuery: 'searchQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkIdList: { 'type': 'array', 'itemType': 'string' },
      docId: 'string',
      libraryId: 'string',
      order: 'string',
      orderBy: 'string',
      page: 'number',
      pageSize: 'number',
      searchQuery: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunkIdList)) {
      $dara.Model.validateArray(this.chunkIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentChunkListResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetDocumentChunkListResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 2B8F6DC9-6FAF-576F-9095-CCD90FB2BDDF
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetDocumentChunkListResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class GetDocumentChunkListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentChunkListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDocumentChunkListResponseBody,
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

export class GetDocumentListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3akzl28vap
   */
  libraryId?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      libraryId: 'libraryId',
      page: 'page',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libraryId: 'string',
      page: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentListResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetDocumentListResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetDocumentListResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class GetDocumentListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDocumentListResponseBody,
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

export class GetDocumentUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12681367362
   */
  documentId?: string;
  static names(): { [key: string]: string } {
    return {
      documentId: 'documentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentUrlResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * https://path_to_file
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 66249B43-8C2B-5EE7-AE78-B382306621C6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDocumentUrlResponseBody,
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

export class GetFilterDocumentListRequest extends $dara.Model {
  and?: GetFilterDocumentListRequestAnd[];
  docIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cjshcxxxx
   */
  libraryId?: string;
  or?: GetFilterDocumentListRequestOr[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      and: 'and',
      docIdList: 'docIdList',
      libraryId: 'libraryId',
      or: 'or',
      page: 'page',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      and: { 'type': 'array', 'itemType': GetFilterDocumentListRequestAnd },
      docIdList: { 'type': 'array', 'itemType': 'string' },
      libraryId: 'string',
      or: { 'type': 'array', 'itemType': GetFilterDocumentListRequestOr },
      page: 'number',
      pageSize: 'number',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.and)) {
      $dara.Model.validateArray(this.and);
    }
    if(Array.isArray(this.docIdList)) {
      $dara.Model.validateArray(this.docIdList);
    }
    if(Array.isArray(this.or)) {
      $dara.Model.validateArray(this.or);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFilterDocumentListResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetFilterDocumentListResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 7ADF010C-FD89-569D-A079-2D4D5247E943
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetFilterDocumentListResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class GetFilterDocumentListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFilterDocumentListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFilterDocumentListResponseBody,
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

export class GetHistoryListByBizTypeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GysYBsxx
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LibraryChat
   */
  bizType?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      bizType: 'bizType',
      page: 'page',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryListByBizTypeResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetHistoryListByBizTypeResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 9DF9B3F3-9FFE-52CB-A8DC-F7BD5F842F0E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetHistoryListByBizTypeResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class GetHistoryListByBizTypeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHistoryListByBizTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHistoryListByBizTypeResponseBody,
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

export class GetLibraryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cjshcxxxx
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libraryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetLibraryResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 44BD277A-87F9-5310-8D63-3E6645F1DA85
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetLibraryResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class GetLibraryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLibraryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLibraryResponseBody,
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

export class GetLibraryListRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageSize: 'pageSize',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetLibraryListResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 0a06dfe817156528535968405edce3
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetLibraryListResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class GetLibraryListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLibraryListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLibraryListResponseBody,
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

export class GetParseResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 873648346573245
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sjdgdsfg
   */
  libraryId?: string;
  useUrlResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      libraryId: 'libraryId',
      useUrlResult: 'useUrlResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      libraryId: 'string',
      useUrlResult: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParseResultResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetParseResultResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 0abb793617204049360065953ec6dd
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetParseResultResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class GetParseResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetParseResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetParseResultResponseBody,
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

export class GetQualityCheckTaskResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 17071319
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckTaskResultResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetQualityCheckTaskResultResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 67C7021A-D268-553D-8C15-A087B9604028
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetQualityCheckTaskResultResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class GetQualityCheckTaskResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQualityCheckTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQualityCheckTaskResultResponseBody,
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

export class GetSummaryTaskResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 17071319
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryTaskResultResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetSummaryTaskResultResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 0bc13a9517168617617186457e401f
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetSummaryTaskResultResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class GetSummaryTaskResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSummaryTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSummaryTaskResultResponseBody,
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

export class GetTaskResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 17071319
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * {
   *   "file_url": "https://finllmworks.oss-cn-zhangjiakou.aliyuncs.com/render_pdf/5336180997111160501.pdf"
   * }
   */
  data?: { [key: string]: any };
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 9D5D6BB5-BEAE-53C8-A70A-7275CC1F856C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTaskResultResponseBody,
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

export class GetTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponseBody extends $dara.Model {
  cost?: number;
  data?: string;
  dataType?: string;
  errCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTaskStatusResponseBody,
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

export class InvokePluginRequest extends $dara.Model {
  params?: { [key: string]: any };
  /**
   * @example
   * 3mj87da7zr
   */
  pluginId?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'params',
      pluginId: 'pluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pluginId: 'string',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokePluginResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * {\\"jobWaiting\\": [0, 0], \\"timestamps\\": [1713383820, 1713383880], \\"jobUsage\\": [0, 0], \\"quotaUsage\\": [123, 32]}
   */
  data?: { [key: string]: any };
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 915AAAB9-4908-5224-9E53-9E9D7D0AA94B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokePluginResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InvokePluginResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InvokePluginResponseBody,
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

export class PreviewDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8326472354762354
   */
  documentId?: string;
  static names(): { [key: string]: string } {
    return {
      documentId: 'documentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewDocumentResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: PreviewDocumentResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * ff551395-1c8a-4f30-8ffd-ef7e87c70b4c
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: PreviewDocumentResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class PreviewDocumentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PreviewDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PreviewDocumentResponseBody,
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

export class ReIndexRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8326472354762354
   */
  documentId?: string;
  static names(): { [key: string]: string } {
    return {
      documentId: 'documentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReIndexResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * True
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 32FFC91D-0A9F-585A-B84F-8A54C5187035
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReIndexResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReIndexResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReIndexResponseBody,
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

export class RealTimeDialogRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  analysis?: boolean;
  /**
   * @example
   * mixIntentChat
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  conversationModel?: RealTimeDialogRequestConversationModel[];
  /**
   * @example
   * 3
   */
  dialogMemoryTurns?: number;
  metaData?: { [key: string]: any };
  /**
   * @example
   * common
   */
  opType?: string;
  /**
   * @example
   * false
   */
  recommend?: boolean;
  scriptContentPlayed?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 237645726354
   */
  sessionId?: string;
  /**
   * @example
   * false
   */
  stream?: boolean;
  userVad?: boolean;
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      bizType: 'bizType',
      conversationModel: 'conversationModel',
      dialogMemoryTurns: 'dialogMemoryTurns',
      metaData: 'metaData',
      opType: 'opType',
      recommend: 'recommend',
      scriptContentPlayed: 'scriptContentPlayed',
      sessionId: 'sessionId',
      stream: 'stream',
      userVad: 'userVad',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'boolean',
      bizType: 'string',
      conversationModel: { 'type': 'array', 'itemType': RealTimeDialogRequestConversationModel },
      dialogMemoryTurns: 'number',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      opType: 'string',
      recommend: 'boolean',
      scriptContentPlayed: 'string',
      sessionId: 'string',
      stream: 'boolean',
      userVad: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.conversationModel)) {
      $dara.Model.validateArray(this.conversationModel);
    }
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealTimeDialogResponseBody extends $dara.Model {
  choices?: RealTimeDialogResponseBodyChoices[];
  /**
   * @example
   * 1735139569523
   */
  created?: string;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  id?: string;
  /**
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
      created: 'created',
      id: 'id',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': RealTimeDialogResponseBodyChoices },
      created: 'string',
      id: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealTimeDialogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RealTimeDialogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RealTimeDialogResponseBody,
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

export class RebuildTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      taskIds: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildTaskResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: { [key: string]: any }[];
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * EF4B5C9B-3BC8-5171-A47B-4C5CF3DC3258
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class RebuildTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebuildTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebuildTaskResponseBody,
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

export class RecallDocumentRequest extends $dara.Model {
  filters?: RecallDocumentRequestFilters[];
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  /**
   * @example
   * false
   */
  rearrangement?: boolean;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      filters: 'filters',
      query: 'query',
      rearrangement: 'rearrangement',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': RecallDocumentRequestFilters },
      query: 'string',
      rearrangement: 'boolean',
      topK: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  cost?: number;
  data?: RecallDocumentResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 0bc13a9517168617617186457e401f
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: RecallDocumentResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class RecallDocumentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecallDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecallDocumentResponseBody,
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

export class RecognizeIntentionRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  analysis?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * common
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  conversation?: string;
  globalIntentionList?: RecognizeIntentionRequestGlobalIntentionList[];
  hierarchicalIntentionList?: RecognizeIntentionRequestHierarchicalIntentionList[];
  intentionDomainCode?: string;
  intentionList?: RecognizeIntentionRequestIntentionList[];
  /**
   * @example
   * common
   */
  opType?: string;
  /**
   * @example
   * false
   */
  recommend?: boolean;
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      bizType: 'bizType',
      conversation: 'conversation',
      globalIntentionList: 'globalIntentionList',
      hierarchicalIntentionList: 'hierarchicalIntentionList',
      intentionDomainCode: 'intentionDomainCode',
      intentionList: 'intentionList',
      opType: 'opType',
      recommend: 'recommend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'boolean',
      bizType: 'string',
      conversation: 'string',
      globalIntentionList: { 'type': 'array', 'itemType': RecognizeIntentionRequestGlobalIntentionList },
      hierarchicalIntentionList: { 'type': 'array', 'itemType': RecognizeIntentionRequestHierarchicalIntentionList },
      intentionDomainCode: 'string',
      intentionList: { 'type': 'array', 'itemType': RecognizeIntentionRequestIntentionList },
      opType: 'string',
      recommend: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.globalIntentionList)) {
      $dara.Model.validateArray(this.globalIntentionList);
    }
    if(Array.isArray(this.hierarchicalIntentionList)) {
      $dara.Model.validateArray(this.hierarchicalIntentionList);
    }
    if(Array.isArray(this.intentionList)) {
      $dara.Model.validateArray(this.intentionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: RecognizeIntentionResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 003D019A-1BB3-53EC-A0D2-CE76DA5D73B1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: RecognizeIntentionResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class RecognizeIntentionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeIntentionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeIntentionResponseBody,
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

export class RunAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d6zxykawk9
   */
  botId?: string;
  /**
   * @example
   * qwen-plus
   */
  modelId?: string;
  /**
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @example
   * 4vlag5ken3
   */
  threadId?: string;
  /**
   * @example
   * false
   */
  useDraft?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  userContent?: string;
  /**
   * @example
   * w4paqoezm2
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      botId: 'botId',
      modelId: 'modelId',
      stream: 'stream',
      threadId: 'threadId',
      useDraft: 'useDraft',
      userContent: 'userContent',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      modelId: 'string',
      stream: 'boolean',
      threadId: 'string',
      useDraft: 'boolean',
      userContent: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAgentResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: RunAgentResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * EF4B5C9B-3BC8-5171-A47B-4C5CF3DC3258
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: RunAgentResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class RunAgentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunAgentResponseBody,
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

export class RunChatResultGenerationRequest extends $dara.Model {
  /**
   * @example
   * {"topP": 0.8}
   */
  inferenceParameters?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  messages?: RunChatResultGenerationRequestMessages[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 237645726354
   */
  sessionId?: string;
  /**
   * @example
   * false
   */
  stream?: boolean;
  tools?: RunChatResultGenerationRequestTools[];
  static names(): { [key: string]: string } {
    return {
      inferenceParameters: 'inferenceParameters',
      messages: 'messages',
      modelId: 'modelId',
      sessionId: 'sessionId',
      stream: 'stream',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inferenceParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      messages: { 'type': 'array', 'itemType': RunChatResultGenerationRequestMessages },
      modelId: 'string',
      sessionId: 'string',
      stream: 'boolean',
      tools: { 'type': 'array', 'itemType': RunChatResultGenerationRequestTools },
    };
  }

  validate() {
    if(this.inferenceParameters) {
      $dara.Model.validateMap(this.inferenceParameters);
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationResponseBody extends $dara.Model {
  choices?: RunChatResultGenerationResponseBodyChoices[];
  /**
   * @example
   * 1720602203
   */
  created?: number;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  id?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  requestId?: string;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  /**
   * @example
   * 500
   */
  totalTokens?: number;
  usage?: RunChatResultGenerationResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
      created: 'created',
      id: 'id',
      modelId: 'modelId',
      requestId: 'requestId',
      time: 'time',
      totalTokens: 'totalTokens',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': RunChatResultGenerationResponseBodyChoices },
      created: 'number',
      id: 'string',
      modelId: 'string',
      requestId: 'string',
      time: 'string',
      totalTokens: 'number',
      usage: RunChatResultGenerationResponseBodyUsage,
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunChatResultGenerationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunChatResultGenerationResponseBody,
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

export class RunLibraryChatGenerationRequest extends $dara.Model {
  docIdList?: string[];
  /**
   * @example
   * false
   */
  enableFollowUp?: boolean;
  /**
   * @example
   * false
   */
  enableMultiQuery?: boolean;
  /**
   * @example
   * false
   */
  enableOpenQa?: boolean;
  /**
   * @example
   * qwen-max
   */
  followUpLlm?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3akzl28vap
   */
  libraryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  llmType?: string;
  /**
   * @example
   * qwen-max
   */
  multiQueryLlm?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  queryCriteria?: RunLibraryChatGenerationRequestQueryCriteria;
  /**
   * @example
   * linear
   */
  rerankType?: string;
  /**
   * @remarks
   * sessionId
   * 
   * @example
   * null
   */
  sessionId?: string;
  /**
   * @example
   * false
   */
  stream?: boolean;
  subQueryList?: string[];
  textSearchParameter?: RunLibraryChatGenerationRequestTextSearchParameter;
  /**
   * @example
   * 1
   */
  topK?: number;
  vectorSearchParameter?: RunLibraryChatGenerationRequestVectorSearchParameter;
  /**
   * @example
   * false
   */
  withDocumentReference?: boolean;
  static names(): { [key: string]: string } {
    return {
      docIdList: 'docIdList',
      enableFollowUp: 'enableFollowUp',
      enableMultiQuery: 'enableMultiQuery',
      enableOpenQa: 'enableOpenQa',
      followUpLlm: 'followUpLlm',
      libraryId: 'libraryId',
      llmType: 'llmType',
      multiQueryLlm: 'multiQueryLlm',
      query: 'query',
      queryCriteria: 'queryCriteria',
      rerankType: 'rerankType',
      sessionId: 'sessionId',
      stream: 'stream',
      subQueryList: 'subQueryList',
      textSearchParameter: 'textSearchParameter',
      topK: 'topK',
      vectorSearchParameter: 'vectorSearchParameter',
      withDocumentReference: 'withDocumentReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIdList: { 'type': 'array', 'itemType': 'string' },
      enableFollowUp: 'boolean',
      enableMultiQuery: 'boolean',
      enableOpenQa: 'boolean',
      followUpLlm: 'string',
      libraryId: 'string',
      llmType: 'string',
      multiQueryLlm: 'string',
      query: 'string',
      queryCriteria: RunLibraryChatGenerationRequestQueryCriteria,
      rerankType: 'string',
      sessionId: 'string',
      stream: 'boolean',
      subQueryList: { 'type': 'array', 'itemType': 'string' },
      textSearchParameter: RunLibraryChatGenerationRequestTextSearchParameter,
      topK: 'number',
      vectorSearchParameter: RunLibraryChatGenerationRequestVectorSearchParameter,
      withDocumentReference: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.docIdList)) {
      $dara.Model.validateArray(this.docIdList);
    }
    if(this.queryCriteria && typeof (this.queryCriteria as any).validate === 'function') {
      (this.queryCriteria as any).validate();
    }
    if(Array.isArray(this.subQueryList)) {
      $dara.Model.validateArray(this.subQueryList);
    }
    if(this.textSearchParameter && typeof (this.textSearchParameter as any).validate === 'function') {
      (this.textSearchParameter as any).validate();
    }
    if(this.vectorSearchParameter && typeof (this.vectorSearchParameter as any).validate === 'function') {
      (this.vectorSearchParameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: any;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'any',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunLibraryChatGenerationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunLibraryChatGenerationResponseBody,
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

export class SubmitChatQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  gmtService?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  liveScriptContent?: string;
  /**
   * @example
   * true
   */
  openSmallTalk?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  questionList?: SubmitChatQuestionRequestQuestionList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 237645726354
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtService: 'gmtService',
      liveScriptContent: 'liveScriptContent',
      openSmallTalk: 'openSmallTalk',
      questionList: 'questionList',
      requestId: 'requestId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtService: 'string',
      liveScriptContent: 'string',
      openSmallTalk: 'boolean',
      questionList: { 'type': 'array', 'itemType': SubmitChatQuestionRequestQuestionList },
      requestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.questionList)) {
      $dara.Model.validateArray(this.questionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitChatQuestionResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: SubmitChatQuestionResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 915AAAB9-4908-5224-9E53-9E9D7D0AA94B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: SubmitChatQuestionResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class SubmitChatQuestionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitChatQuestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitChatQuestionResponseBody,
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

export class UpdateDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc123
   */
  libraryId?: string;
  /**
   * @example
   * {
   *         "businessId": "12321"
   *     }
   */
  meta?: { [key: string]: any };
  /**
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      libraryId: 'libraryId',
      meta: 'meta',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      libraryId: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocumentResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * null
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocumentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDocumentResponseBody,
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

export class UpdateDocumentChunkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  chunks?: UpdateDocumentChunkRequestChunks[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sjdgdsfg
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'chunks',
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': UpdateDocumentChunkRequestChunks },
      libraryId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocumentChunkResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * SUCCESS
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 003D019A-1BB3-53EC-A0D2-CE76DA5D73B1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocumentChunkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDocumentChunkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDocumentChunkResponseBody,
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

export class UpdateLibraryRequest extends $dara.Model {
  description?: string;
  indexSetting?: UpdateLibraryRequestIndexSetting;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dsfbashdbb
   */
  libraryId?: string;
  libraryName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      indexSetting: 'indexSetting',
      libraryId: 'libraryId',
      libraryName: 'libraryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      indexSetting: UpdateLibraryRequestIndexSetting,
      libraryId: 'string',
      libraryName: 'string',
    };
  }

  validate() {
    if(this.indexSetting && typeof (this.indexSetting as any).validate === 'function') {
      (this.indexSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * null
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLibraryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLibraryResponseBody,
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

export class UpdateQaLibraryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  parseQaResults?: UpdateQaLibraryRequestParseQaResults[];
  /**
   * @example
   * 6jh378d
   */
  qaLibraryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parseQaResults: 'parseQaResults',
      qaLibraryId: 'qaLibraryId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parseQaResults: { 'type': 'array', 'itemType': UpdateQaLibraryRequestParseQaResults },
      qaLibraryId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parseQaResults)) {
      $dara.Model.validateArray(this.parseQaResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQaLibraryResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: UpdateQaLibraryResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * EF4B5C9B-3BC8-5171-A47B-4C5CF3DC3258
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: UpdateQaLibraryResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

export class UpdateQaLibraryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateQaLibraryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateQaLibraryResponseBody,
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

export class UploadDocumentRequest extends $dara.Model {
  data?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://oss-xxx.hangzhou.com/test.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sjdhbcsj
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      fileName: 'fileName',
      fileUrl: 'fileUrl',
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      fileName: 'string',
      fileUrl: 'string',
      libraryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentAdvanceRequest extends $dara.Model {
  data?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://oss-xxx.hangzhou.com/test.pdf
   */
  fileUrlObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sjdhbcsj
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      fileName: 'fileName',
      fileUrlObject: 'fileUrl',
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      fileName: 'string',
      fileUrlObject: 'Readable',
      libraryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * 1782981430906818562
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * ff3fef67-48d9-4379-a237-9ba8143fe739
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadDocumentResponseBody,
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
    this._endpoint = this.getEndpoint("dianjin", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建按年文档总结任务
   * 
   * @param request - CreateAnnualDocSummaryTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAnnualDocSummaryTaskResponse
   */
  async createAnnualDocSummaryTaskWithOptions(workspaceId: string, request: CreateAnnualDocSummaryTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateAnnualDocSummaryTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.anaYears)) {
      body["anaYears"] = request.anaYears;
    }

    if (!$dara.isNull(request.docInfos)) {
      body["docInfos"] = request.docInfos;
    }

    if (!$dara.isNull(request.enableTable)) {
      body["enableTable"] = request.enableTable;
    }

    if (!$dara.isNull(request.instruction)) {
      body["instruction"] = request.instruction;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAnnualDocSummaryTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/summary/doc/annual`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAnnualDocSummaryTaskResponse>(await this.callApi(params, req, runtime), new CreateAnnualDocSummaryTaskResponse({}));
    } else {
      return $dara.cast<CreateAnnualDocSummaryTaskResponse>(await this.execute(params, req, runtime), new CreateAnnualDocSummaryTaskResponse({}));
    }

  }

  /**
   * 创建按年文档总结任务
   * 
   * @param request - CreateAnnualDocSummaryTaskRequest
   * @returns CreateAnnualDocSummaryTaskResponse
   */
  async createAnnualDocSummaryTask(workspaceId: string, request: CreateAnnualDocSummaryTaskRequest): Promise<CreateAnnualDocSummaryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAnnualDocSummaryTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建外呼会话
   * 
   * @param request - CreateDialogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDialogResponse
   */
  async createDialogWithOptions(workspaceId: string, request: CreateDialogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDialogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!$dara.isNull(request.enableLibrary)) {
      body["enableLibrary"] = request.enableLibrary;
    }

    if (!$dara.isNull(request.metaData)) {
      body["metaData"] = request.metaData;
    }

    if (!$dara.isNull(request.playCode)) {
      body["playCode"] = request.playCode;
    }

    if (!$dara.isNull(request.qaLibraryList)) {
      body["qaLibraryList"] = request.qaLibraryList;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.selfDirected)) {
      body["selfDirected"] = request.selfDirected;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDialog",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/dialog/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDialogResponse>(await this.callApi(params, req, runtime), new CreateDialogResponse({}));
    } else {
      return $dara.cast<CreateDialogResponse>(await this.execute(params, req, runtime), new CreateDialogResponse({}));
    }

  }

  /**
   * 创建外呼会话
   * 
   * @param request - CreateDialogRequest
   * @returns CreateDialogResponse
   */
  async createDialog(workspaceId: string, request: CreateDialogRequest): Promise<CreateDialogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDialogWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建会话分析任务
   * 
   * @param request - CreateDialogAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDialogAnalysisTaskResponse
   */
  async createDialogAnalysisTaskWithOptions(workspaceId: string, request: CreateDialogAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDialogAnalysisTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysisNodes)) {
      body["analysisNodes"] = request.analysisNodes;
    }

    if (!$dara.isNull(request.conversationList)) {
      body["conversationList"] = request.conversationList;
    }

    if (!$dara.isNull(request.metaData)) {
      body["metaData"] = request.metaData;
    }

    if (!$dara.isNull(request.playCode)) {
      body["playCode"] = request.playCode;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDialogAnalysisTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/dialog/analysis/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDialogAnalysisTaskResponse>(await this.callApi(params, req, runtime), new CreateDialogAnalysisTaskResponse({}));
    } else {
      return $dara.cast<CreateDialogAnalysisTaskResponse>(await this.execute(params, req, runtime), new CreateDialogAnalysisTaskResponse({}));
    }

  }

  /**
   * 创建会话分析任务
   * 
   * @param request - CreateDialogAnalysisTaskRequest
   * @returns CreateDialogAnalysisTaskResponse
   */
  async createDialogAnalysisTask(workspaceId: string, request: CreateDialogAnalysisTaskRequest): Promise<CreateDialogAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDialogAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建财报总结任务
   * 
   * @param request - CreateDocsSummaryTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDocsSummaryTaskResponse
   */
  async createDocsSummaryTaskWithOptions(workspaceId: string, request: CreateDocsSummaryTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDocsSummaryTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docInfos)) {
      body["docInfos"] = request.docInfos;
    }

    if (!$dara.isNull(request.enableTable)) {
      body["enableTable"] = request.enableTable;
    }

    if (!$dara.isNull(request.instruction)) {
      body["instruction"] = request.instruction;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDocsSummaryTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/summary/docs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDocsSummaryTaskResponse>(await this.callApi(params, req, runtime), new CreateDocsSummaryTaskResponse({}));
    } else {
      return $dara.cast<CreateDocsSummaryTaskResponse>(await this.execute(params, req, runtime), new CreateDocsSummaryTaskResponse({}));
    }

  }

  /**
   * 创建财报总结任务
   * 
   * @param request - CreateDocsSummaryTaskRequest
   * @returns CreateDocsSummaryTaskResponse
   */
  async createDocsSummaryTask(workspaceId: string, request: CreateDocsSummaryTaskRequest): Promise<CreateDocsSummaryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDocsSummaryTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建财报总结任务
   * 
   * @param request - CreateFinReportSummaryTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFinReportSummaryTaskResponse
   */
  async createFinReportSummaryTaskWithOptions(workspaceId: string, request: CreateFinReportSummaryTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateFinReportSummaryTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!$dara.isNull(request.enableTable)) {
      body["enableTable"] = request.enableTable;
    }

    if (!$dara.isNull(request.endPage)) {
      body["endPage"] = request.endPage;
    }

    if (!$dara.isNull(request.instruction)) {
      body["instruction"] = request.instruction;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.startPage)) {
      body["startPage"] = request.startPage;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFinReportSummaryTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/summary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFinReportSummaryTaskResponse>(await this.callApi(params, req, runtime), new CreateFinReportSummaryTaskResponse({}));
    } else {
      return $dara.cast<CreateFinReportSummaryTaskResponse>(await this.execute(params, req, runtime), new CreateFinReportSummaryTaskResponse({}));
    }

  }

  /**
   * 创建财报总结任务
   * 
   * @param request - CreateFinReportSummaryTaskRequest
   * @returns CreateFinReportSummaryTaskResponse
   */
  async createFinReportSummaryTask(workspaceId: string, request: CreateFinReportSummaryTaskRequest): Promise<CreateFinReportSummaryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFinReportSummaryTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建文档库
   * 
   * @param request - CreateLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLibraryResponse
   */
  async createLibraryWithOptions(workspaceId: string, request: CreateLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateLibraryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.indexSetting)) {
      body["indexSetting"] = request.indexSetting;
    }

    if (!$dara.isNull(request.libraryName)) {
      body["libraryName"] = request.libraryName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLibrary",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateLibraryResponse>(await this.callApi(params, req, runtime), new CreateLibraryResponse({}));
    } else {
      return $dara.cast<CreateLibraryResponse>(await this.execute(params, req, runtime), new CreateLibraryResponse({}));
    }

  }

  /**
   * 创建文档库
   * 
   * @param request - CreateLibraryRequest
   * @returns CreateLibraryResponse
   */
  async createLibrary(workspaceId: string, request: CreateLibraryRequest): Promise<CreateLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLibraryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建PDF翻译任务
   * 
   * @param request - CreatePdfTranslateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePdfTranslateTaskResponse
   */
  async createPdfTranslateTaskWithOptions(workspaceId: string, request: CreatePdfTranslateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreatePdfTranslateTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!$dara.isNull(request.knowledge)) {
      body["knowledge"] = request.knowledge;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.translateTo)) {
      body["translateTo"] = request.translateTo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePdfTranslateTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/pdfTranslate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePdfTranslateTaskResponse>(await this.callApi(params, req, runtime), new CreatePdfTranslateTaskResponse({}));
    } else {
      return $dara.cast<CreatePdfTranslateTaskResponse>(await this.execute(params, req, runtime), new CreatePdfTranslateTaskResponse({}));
    }

  }

  /**
   * 创建PDF翻译任务
   * 
   * @param request - CreatePdfTranslateTaskRequest
   * @returns CreatePdfTranslateTaskResponse
   */
  async createPdfTranslateTask(workspaceId: string, request: CreatePdfTranslateTaskRequest): Promise<CreatePdfTranslateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPdfTranslateTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建预定义文档
   * 
   * @param request - CreatePredefinedDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePredefinedDocumentResponse
   */
  async createPredefinedDocumentWithOptions(workspaceId: string, request: CreatePredefinedDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreatePredefinedDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunks)) {
      body["chunks"] = request.chunks;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePredefinedDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/createPredefinedDocument`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePredefinedDocumentResponse>(await this.callApi(params, req, runtime), new CreatePredefinedDocumentResponse({}));
    } else {
      return $dara.cast<CreatePredefinedDocumentResponse>(await this.execute(params, req, runtime), new CreatePredefinedDocumentResponse({}));
    }

  }

  /**
   * 创建预定义文档
   * 
   * @param request - CreatePredefinedDocumentRequest
   * @returns CreatePredefinedDocumentResponse
   */
  async createPredefinedDocument(workspaceId: string, request: CreatePredefinedDocumentRequest): Promise<CreatePredefinedDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPredefinedDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建财报总结的任务
   * 
   * @param request - CreateQualityCheckTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQualityCheckTaskResponse
   */
  async createQualityCheckTaskWithOptions(workspaceId: string, request: CreateQualityCheckTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateQualityCheckTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conversationList)) {
      body["conversationList"] = request.conversationList;
    }

    if (!$dara.isNull(request.gmtService)) {
      body["gmtService"] = request.gmtService;
    }

    if (!$dara.isNull(request.metaData)) {
      body["metaData"] = request.metaData;
    }

    if (!$dara.isNull(request.qualityGroup)) {
      body["qualityGroup"] = request.qualityGroup;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQualityCheckTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/qualitycheck/task/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateQualityCheckTaskResponse>(await this.callApi(params, req, runtime), new CreateQualityCheckTaskResponse({}));
    } else {
      return $dara.cast<CreateQualityCheckTaskResponse>(await this.execute(params, req, runtime), new CreateQualityCheckTaskResponse({}));
    }

  }

  /**
   * 创建财报总结的任务
   * 
   * @param request - CreateQualityCheckTaskRequest
   * @returns CreateQualityCheckTaskResponse
   */
  async createQualityCheckTask(workspaceId: string, request: CreateQualityCheckTaskRequest): Promise<CreateQualityCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQualityCheckTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 删除文档
   * 
   * @param request - DeleteDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDocumentResponse
   */
  async deleteDocumentWithOptions(workspaceId: string, request: DeleteDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docIds)) {
      body["docIds"] = request.docIds;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDocumentResponse>(await this.callApi(params, req, runtime), new DeleteDocumentResponse({}));
    } else {
      return $dara.cast<DeleteDocumentResponse>(await this.execute(params, req, runtime), new DeleteDocumentResponse({}));
    }

  }

  /**
   * 删除文档
   * 
   * @param request - DeleteDocumentRequest
   * @returns DeleteDocumentResponse
   */
  async deleteDocument(workspaceId: string, request: DeleteDocumentRequest): Promise<DeleteDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 删除文档库
   * 
   * @param request - DeleteLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLibraryResponse
   */
  async deleteLibraryWithOptions(workspaceId: string, request: DeleteLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteLibraryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libraryId)) {
      query["libraryId"] = request.libraryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLibrary",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteLibraryResponse>(await this.callApi(params, req, runtime), new DeleteLibraryResponse({}));
    } else {
      return $dara.cast<DeleteLibraryResponse>(await this.execute(params, req, runtime), new DeleteLibraryResponse({}));
    }

  }

  /**
   * 删除文档库
   * 
   * @param request - DeleteLibraryRequest
   * @returns DeleteLibraryResponse
   */
  async deleteLibrary(workspaceId: string, request: DeleteLibraryRequest): Promise<DeleteLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLibraryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 中断任务
   * 
   * @param request - EvictTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EvictTaskResponse
   */
  async evictTaskWithOptions(workspaceId: string, request: EvictTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<EvictTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EvictTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/evict`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EvictTaskResponse>(await this.callApi(params, req, runtime), new EvictTaskResponse({}));
    } else {
      return $dara.cast<EvictTaskResponse>(await this.execute(params, req, runtime), new EvictTaskResponse({}));
    }

  }

  /**
   * 中断任务
   * 
   * @param request - EvictTaskRequest
   * @returns EvictTaskResponse
   */
  async evictTask(workspaceId: string, request: EvictTaskRequest): Promise<EvictTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.evictTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 根据文档解析问答QA
   * 
   * @param request - GenDocQaResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenDocQaResultResponse
   */
  async genDocQaResultWithOptions(workspaceId: string, request: GenDocQaResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GenDocQaResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenDocQaResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/qa/parse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GenDocQaResultResponse>(await this.callApi(params, req, runtime), new GenDocQaResultResponse({}));
    } else {
      return $dara.cast<GenDocQaResultResponse>(await this.execute(params, req, runtime), new GenDocQaResultResponse({}));
    }

  }

  /**
   * 根据文档解析问答QA
   * 
   * @param request - GenDocQaResultRequest
   * @returns GenDocQaResultResponse
   */
  async genDocQaResult(workspaceId: string, request: GenDocQaResultRequest): Promise<GenDocQaResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.genDocQaResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取app配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppConfigResponse
   */
  async getAppConfigWithOptions(workspaceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAppConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppConfig",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/app/config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAppConfigResponse>(await this.callApi(params, req, runtime), new GetAppConfigResponse({}));
    } else {
      return $dara.cast<GetAppConfigResponse>(await this.execute(params, req, runtime), new GetAppConfigResponse({}));
    }

  }

  /**
   * 获取app配置
   * @returns GetAppConfigResponse
   */
  async getAppConfig(workspaceId: string): Promise<GetAppConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppConfigWithOptions(workspaceId, headers, runtime);
  }

  /**
   * 获取问答结果
   * 
   * @param request - GetChatQuestionRespRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatQuestionRespResponse
   */
  async getChatQuestionRespWithOptions(workspaceId: string, request: GetChatQuestionRespRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetChatQuestionRespResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchId)) {
      body["batchId"] = request.batchId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatQuestionResp",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/chat/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetChatQuestionRespResponse>(await this.callApi(params, req, runtime), new GetChatQuestionRespResponse({}));
    } else {
      return $dara.cast<GetChatQuestionRespResponse>(await this.execute(params, req, runtime), new GetChatQuestionRespResponse({}));
    }

  }

  /**
   * 获取问答结果
   * 
   * @param request - GetChatQuestionRespRequest
   * @returns GetChatQuestionRespResponse
   */
  async getChatQuestionResp(workspaceId: string, request: GetChatQuestionRespRequest): Promise<GetChatQuestionRespResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getChatQuestionRespWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取外呼会话分析结果
   * 
   * @param request - GetDialogAnalysisResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDialogAnalysisResultResponse
   */
  async getDialogAnalysisResultWithOptions(workspaceId: string, request: GetDialogAnalysisResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDialogAnalysisResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.asc)) {
      body["asc"] = request.asc;
    }

    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.sessionIds)) {
      body["sessionIds"] = request.sessionIds;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.useUrl)) {
      body["useUrl"] = request.useUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDialogAnalysisResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/dialog/analysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDialogAnalysisResultResponse>(await this.callApi(params, req, runtime), new GetDialogAnalysisResultResponse({}));
    } else {
      return $dara.cast<GetDialogAnalysisResultResponse>(await this.execute(params, req, runtime), new GetDialogAnalysisResultResponse({}));
    }

  }

  /**
   * 获取外呼会话分析结果
   * 
   * @param request - GetDialogAnalysisResultRequest
   * @returns GetDialogAnalysisResultResponse
   */
  async getDialogAnalysisResult(workspaceId: string, request: GetDialogAnalysisResultRequest): Promise<GetDialogAnalysisResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDialogAnalysisResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取异步任务的结果
   * 
   * @param request - GetDialogDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDialogDetailResponse
   */
  async getDialogDetailWithOptions(workspaceId: string, request: GetDialogDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDialogDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDialogDetail",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/dialog/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDialogDetailResponse>(await this.callApi(params, req, runtime), new GetDialogDetailResponse({}));
    } else {
      return $dara.cast<GetDialogDetailResponse>(await this.execute(params, req, runtime), new GetDialogDetailResponse({}));
    }

  }

  /**
   * 获取异步任务的结果
   * 
   * @param request - GetDialogDetailRequest
   * @returns GetDialogDetailResponse
   */
  async getDialogDetail(workspaceId: string, request: GetDialogDetailRequest): Promise<GetDialogDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDialogDetailWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取文档的chunk列表
   * 
   * @param request - GetDocumentChunkListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentChunkListResponse
   */
  async getDocumentChunkListWithOptions(workspaceId: string, request: GetDocumentChunkListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDocumentChunkListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunkIdList)) {
      body["chunkIdList"] = request.chunkIdList;
    }

    if (!$dara.isNull(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.order)) {
      body["order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchQuery)) {
      body["searchQuery"] = request.searchQuery;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentChunkList",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/getDocumentChunk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDocumentChunkListResponse>(await this.callApi(params, req, runtime), new GetDocumentChunkListResponse({}));
    } else {
      return $dara.cast<GetDocumentChunkListResponse>(await this.execute(params, req, runtime), new GetDocumentChunkListResponse({}));
    }

  }

  /**
   * 获取文档的chunk列表
   * 
   * @param request - GetDocumentChunkListRequest
   * @returns GetDocumentChunkListResponse
   */
  async getDocumentChunkList(workspaceId: string, request: GetDocumentChunkListRequest): Promise<GetDocumentChunkListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentChunkListWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 分页查询文档库的文档列表
   * 
   * @param request - GetDocumentListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentListResponse
   */
  async getDocumentListWithOptions(workspaceId: string, request: GetDocumentListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDocumentListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libraryId)) {
      query["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentList",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/listDocument`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDocumentListResponse>(await this.callApi(params, req, runtime), new GetDocumentListResponse({}));
    } else {
      return $dara.cast<GetDocumentListResponse>(await this.execute(params, req, runtime), new GetDocumentListResponse({}));
    }

  }

  /**
   * 分页查询文档库的文档列表
   * 
   * @param request - GetDocumentListRequest
   * @returns GetDocumentListResponse
   */
  async getDocumentList(workspaceId: string, request: GetDocumentListRequest): Promise<GetDocumentListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentListWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取文档URL
   * 
   * @param request - GetDocumentUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentUrlResponse
   */
  async getDocumentUrlWithOptions(workspaceId: string, request: GetDocumentUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDocumentUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentId)) {
      query["documentId"] = request.documentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentUrl",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/url`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDocumentUrlResponse>(await this.callApi(params, req, runtime), new GetDocumentUrlResponse({}));
    } else {
      return $dara.cast<GetDocumentUrlResponse>(await this.execute(params, req, runtime), new GetDocumentUrlResponse({}));
    }

  }

  /**
   * 获取文档URL
   * 
   * @param request - GetDocumentUrlRequest
   * @returns GetDocumentUrlResponse
   */
  async getDocumentUrl(workspaceId: string, request: GetDocumentUrlRequest): Promise<GetDocumentUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentUrlWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 带条件的分页查询文档库的文档列表
   * 
   * @param request - GetFilterDocumentListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFilterDocumentListResponse
   */
  async getFilterDocumentListWithOptions(workspaceId: string, request: GetFilterDocumentListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetFilterDocumentListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.and)) {
      body["and"] = request.and;
    }

    if (!$dara.isNull(request.docIdList)) {
      body["docIdList"] = request.docIdList;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.or)) {
      body["or"] = request.or;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFilterDocumentList",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/filterDocument`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFilterDocumentListResponse>(await this.callApi(params, req, runtime), new GetFilterDocumentListResponse({}));
    } else {
      return $dara.cast<GetFilterDocumentListResponse>(await this.execute(params, req, runtime), new GetFilterDocumentListResponse({}));
    }

  }

  /**
   * 带条件的分页查询文档库的文档列表
   * 
   * @param request - GetFilterDocumentListRequest
   * @returns GetFilterDocumentListResponse
   */
  async getFilterDocumentList(workspaceId: string, request: GetFilterDocumentListRequest): Promise<GetFilterDocumentListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFilterDocumentListWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 分页查询文档库列表
   * 
   * @param request - GetHistoryListByBizTypeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHistoryListByBizTypeResponse
   */
  async getHistoryListByBizTypeWithOptions(workspaceId: string, request: GetHistoryListByBizTypeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetHistoryListByBizTypeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizId)) {
      query["bizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["bizType"] = request.bizType;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHistoryListByBizType",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/history/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHistoryListByBizTypeResponse>(await this.callApi(params, req, runtime), new GetHistoryListByBizTypeResponse({}));
    } else {
      return $dara.cast<GetHistoryListByBizTypeResponse>(await this.execute(params, req, runtime), new GetHistoryListByBizTypeResponse({}));
    }

  }

  /**
   * 分页查询文档库列表
   * 
   * @param request - GetHistoryListByBizTypeRequest
   * @returns GetHistoryListByBizTypeResponse
   */
  async getHistoryListByBizType(workspaceId: string, request: GetHistoryListByBizTypeRequest): Promise<GetHistoryListByBizTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHistoryListByBizTypeWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取文档库配置详情
   * 
   * @param request - GetLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLibraryResponse
   */
  async getLibraryWithOptions(workspaceId: string, request: GetLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetLibraryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libraryId)) {
      query["libraryId"] = request.libraryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLibrary",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetLibraryResponse>(await this.callApi(params, req, runtime), new GetLibraryResponse({}));
    } else {
      return $dara.cast<GetLibraryResponse>(await this.execute(params, req, runtime), new GetLibraryResponse({}));
    }

  }

  /**
   * 获取文档库配置详情
   * 
   * @param request - GetLibraryRequest
   * @returns GetLibraryResponse
   */
  async getLibrary(workspaceId: string, request: GetLibraryRequest): Promise<GetLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLibraryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 分页查询文档库列表
   * 
   * @param request - GetLibraryListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLibraryListResponse
   */
  async getLibraryListWithOptions(workspaceId: string, request: GetLibraryListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetLibraryListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLibraryList",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetLibraryListResponse>(await this.callApi(params, req, runtime), new GetLibraryListResponse({}));
    } else {
      return $dara.cast<GetLibraryListResponse>(await this.execute(params, req, runtime), new GetLibraryListResponse({}));
    }

  }

  /**
   * 分页查询文档库列表
   * 
   * @param request - GetLibraryListRequest
   * @returns GetLibraryListResponse
   */
  async getLibraryList(workspaceId: string, request: GetLibraryListRequest): Promise<GetLibraryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLibraryListWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取解析结果
   * 
   * @param request - GetParseResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetParseResultResponse
   */
  async getParseResultWithOptions(workspaceId: string, request: GetParseResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetParseResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.useUrlResult)) {
      body["useUrlResult"] = request.useUrlResult;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetParseResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/getParseResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetParseResultResponse>(await this.callApi(params, req, runtime), new GetParseResultResponse({}));
    } else {
      return $dara.cast<GetParseResultResponse>(await this.execute(params, req, runtime), new GetParseResultResponse({}));
    }

  }

  /**
   * 获取解析结果
   * 
   * @param request - GetParseResultRequest
   * @returns GetParseResultResponse
   */
  async getParseResult(workspaceId: string, request: GetParseResultRequest): Promise<GetParseResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getParseResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取异步任务的结果
   * 
   * @param request - GetQualityCheckTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityCheckTaskResultResponse
   */
  async getQualityCheckTaskResultWithOptions(workspaceId: string, request: GetQualityCheckTaskResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetQualityCheckTaskResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityCheckTaskResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/qualitycheck/task/query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetQualityCheckTaskResultResponse>(await this.callApi(params, req, runtime), new GetQualityCheckTaskResultResponse({}));
    } else {
      return $dara.cast<GetQualityCheckTaskResultResponse>(await this.execute(params, req, runtime), new GetQualityCheckTaskResultResponse({}));
    }

  }

  /**
   * 获取异步任务的结果
   * 
   * @param request - GetQualityCheckTaskResultRequest
   * @returns GetQualityCheckTaskResultResponse
   */
  async getQualityCheckTaskResult(workspaceId: string, request: GetQualityCheckTaskResultRequest): Promise<GetQualityCheckTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQualityCheckTaskResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取财报总结任务结果
   * 
   * @param request - GetSummaryTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSummaryTaskResultResponse
   */
  async getSummaryTaskResultWithOptions(workspaceId: string, request: GetSummaryTaskResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetSummaryTaskResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSummaryTaskResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/summary/result`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSummaryTaskResultResponse>(await this.callApi(params, req, runtime), new GetSummaryTaskResultResponse({}));
    } else {
      return $dara.cast<GetSummaryTaskResultResponse>(await this.execute(params, req, runtime), new GetSummaryTaskResultResponse({}));
    }

  }

  /**
   * 获取财报总结任务结果
   * 
   * @param request - GetSummaryTaskResultRequest
   * @returns GetSummaryTaskResultResponse
   */
  async getSummaryTaskResult(workspaceId: string, request: GetSummaryTaskResultRequest): Promise<GetSummaryTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSummaryTaskResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取异步任务结果
   * 
   * @param request - GetTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResultResponse
   */
  async getTaskResultWithOptions(workspaceId: string, request: GetTaskResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTaskResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/result`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTaskResultResponse>(await this.callApi(params, req, runtime), new GetTaskResultResponse({}));
    } else {
      return $dara.cast<GetTaskResultResponse>(await this.execute(params, req, runtime), new GetTaskResultResponse({}));
    }

  }

  /**
   * 获取异步任务结果
   * 
   * @param request - GetTaskResultRequest
   * @returns GetTaskResultResponse
   */
  async getTaskResult(workspaceId: string, request: GetTaskResultRequest): Promise<GetTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取财报总结任务结果
   * 
   * @param request - GetTaskStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskStatusResponse
   */
  async getTaskStatusWithOptions(workspaceId: string, request: GetTaskStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTaskStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskStatus",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTaskStatusResponse>(await this.callApi(params, req, runtime), new GetTaskStatusResponse({}));
    } else {
      return $dara.cast<GetTaskStatusResponse>(await this.execute(params, req, runtime), new GetTaskStatusResponse({}));
    }

  }

  /**
   * 获取财报总结任务结果
   * 
   * @param request - GetTaskStatusRequest
   * @returns GetTaskStatusResponse
   */
  async getTaskStatus(workspaceId: string, request: GetTaskStatusRequest): Promise<GetTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskStatusWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 插件调试接口
   * 
   * @param request - InvokePluginRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokePluginResponse
   */
  async invokePluginWithOptions(workspaceId: string, request: InvokePluginRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<InvokePluginResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    if (!$dara.isNull(request.pluginId)) {
      body["pluginId"] = request.pluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokePlugin",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/plugin/invoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InvokePluginResponse>(await this.callApi(params, req, runtime), new InvokePluginResponse({}));
    } else {
      return $dara.cast<InvokePluginResponse>(await this.execute(params, req, runtime), new InvokePluginResponse({}));
    }

  }

  /**
   * 插件调试接口
   * 
   * @param request - InvokePluginRequest
   * @returns InvokePluginResponse
   */
  async invokePlugin(workspaceId: string, request: InvokePluginRequest): Promise<InvokePluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.invokePluginWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取文档预览
   * 
   * @param request - PreviewDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreviewDocumentResponse
   */
  async previewDocumentWithOptions(workspaceId: string, request: PreviewDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PreviewDocumentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentId)) {
      query["documentId"] = request.documentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreviewDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/preview`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PreviewDocumentResponse>(await this.callApi(params, req, runtime), new PreviewDocumentResponse({}));
    } else {
      return $dara.cast<PreviewDocumentResponse>(await this.execute(params, req, runtime), new PreviewDocumentResponse({}));
    }

  }

  /**
   * 获取文档预览
   * 
   * @param request - PreviewDocumentRequest
   * @returns PreviewDocumentResponse
   */
  async previewDocument(workspaceId: string, request: PreviewDocumentRequest): Promise<PreviewDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.previewDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 重新索引
   * 
   * @param request - ReIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReIndexResponse
   */
  async reIndexWithOptions(workspaceId: string, request: ReIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ReIndexResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentId)) {
      query["documentId"] = request.documentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReIndex",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/reIndex`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReIndexResponse>(await this.callApi(params, req, runtime), new ReIndexResponse({}));
    } else {
      return $dara.cast<ReIndexResponse>(await this.execute(params, req, runtime), new ReIndexResponse({}));
    }

  }

  /**
   * 重新索引
   * 
   * @param request - ReIndexRequest
   * @returns ReIndexResponse
   */
  async reIndex(workspaceId: string, request: ReIndexRequest): Promise<ReIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reIndexWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 实时对话
   * 
   * @param request - RealTimeDialogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RealTimeDialogResponse
   */
  async realTimeDialogWithOptions(workspaceId: string, request: RealTimeDialogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RealTimeDialogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysis)) {
      body["analysis"] = request.analysis;
    }

    if (!$dara.isNull(request.bizType)) {
      body["bizType"] = request.bizType;
    }

    if (!$dara.isNull(request.conversationModel)) {
      body["conversationModel"] = request.conversationModel;
    }

    if (!$dara.isNull(request.dialogMemoryTurns)) {
      body["dialogMemoryTurns"] = request.dialogMemoryTurns;
    }

    if (!$dara.isNull(request.metaData)) {
      body["metaData"] = request.metaData;
    }

    if (!$dara.isNull(request.opType)) {
      body["opType"] = request.opType;
    }

    if (!$dara.isNull(request.recommend)) {
      body["recommend"] = request.recommend;
    }

    if (!$dara.isNull(request.scriptContentPlayed)) {
      body["scriptContentPlayed"] = request.scriptContentPlayed;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.userVad)) {
      body["userVad"] = request.userVad;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RealTimeDialog",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/realtime/dialog/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RealTimeDialogResponse>(await this.callApi(params, req, runtime), new RealTimeDialogResponse({}));
    } else {
      return $dara.cast<RealTimeDialogResponse>(await this.execute(params, req, runtime), new RealTimeDialogResponse({}));
    }

  }

  /**
   * 实时对话
   * 
   * @param request - RealTimeDialogRequest
   * @returns RealTimeDialogResponse
   */
  async realTimeDialog(workspaceId: string, request: RealTimeDialogRequest): Promise<RealTimeDialogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.realTimeDialogWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 重建任务
   * 
   * @param request - RebuildTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebuildTaskResponse
   */
  async rebuildTaskWithOptions(workspaceId: string, request: RebuildTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RebuildTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskIds)) {
      body["taskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebuildTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/task/rebuild`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RebuildTaskResponse>(await this.callApi(params, req, runtime), new RebuildTaskResponse({}));
    } else {
      return $dara.cast<RebuildTaskResponse>(await this.execute(params, req, runtime), new RebuildTaskResponse({}));
    }

  }

  /**
   * 重建任务
   * 
   * @param request - RebuildTaskRequest
   * @returns RebuildTaskResponse
   */
  async rebuildTask(workspaceId: string, request: RebuildTaskRequest): Promise<RebuildTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rebuildTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 文档召回。
   * 
   * @param request - RecallDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecallDocumentResponse
   */
  async recallDocumentWithOptions(workspaceId: string, request: RecallDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RecallDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filters)) {
      body["filters"] = request.filters;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.rearrangement)) {
      body["rearrangement"] = request.rearrangement;
    }

    if (!$dara.isNull(request.topK)) {
      body["topK"] = request.topK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecallDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/recallDocument`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RecallDocumentResponse>(await this.callApi(params, req, runtime), new RecallDocumentResponse({}));
    } else {
      return $dara.cast<RecallDocumentResponse>(await this.execute(params, req, runtime), new RecallDocumentResponse({}));
    }

  }

  /**
   * 文档召回。
   * 
   * @param request - RecallDocumentRequest
   * @returns RecallDocumentResponse
   */
  async recallDocument(workspaceId: string, request: RecallDocumentRequest): Promise<RecallDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recallDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 意图识别
   * 
   * @param request - RecognizeIntentionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeIntentionResponse
   */
  async recognizeIntentionWithOptions(workspaceId: string, request: RecognizeIntentionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RecognizeIntentionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysis)) {
      body["analysis"] = request.analysis;
    }

    if (!$dara.isNull(request.bizType)) {
      body["bizType"] = request.bizType;
    }

    if (!$dara.isNull(request.conversation)) {
      body["conversation"] = request.conversation;
    }

    if (!$dara.isNull(request.globalIntentionList)) {
      body["globalIntentionList"] = request.globalIntentionList;
    }

    if (!$dara.isNull(request.hierarchicalIntentionList)) {
      body["hierarchicalIntentionList"] = request.hierarchicalIntentionList;
    }

    if (!$dara.isNull(request.intentionDomainCode)) {
      body["intentionDomainCode"] = request.intentionDomainCode;
    }

    if (!$dara.isNull(request.intentionList)) {
      body["intentionList"] = request.intentionList;
    }

    if (!$dara.isNull(request.opType)) {
      body["opType"] = request.opType;
    }

    if (!$dara.isNull(request.recommend)) {
      body["recommend"] = request.recommend;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeIntention",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/recog/intent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RecognizeIntentionResponse>(await this.callApi(params, req, runtime), new RecognizeIntentionResponse({}));
    } else {
      return $dara.cast<RecognizeIntentionResponse>(await this.execute(params, req, runtime), new RecognizeIntentionResponse({}));
    }

  }

  /**
   * 意图识别
   * 
   * @param request - RecognizeIntentionRequest
   * @returns RecognizeIntentionResponse
   */
  async recognizeIntention(workspaceId: string, request: RecognizeIntentionRequest): Promise<RecognizeIntentionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recognizeIntentionWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 运行智能体
   * 
   * @param request - RunAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunAgentResponse
   */
  async runAgentWithOptions(workspaceId: string, request: RunAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.botId)) {
      body["botId"] = request.botId;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.threadId)) {
      body["threadId"] = request.threadId;
    }

    if (!$dara.isNull(request.useDraft)) {
      body["useDraft"] = request.useDraft;
    }

    if (!$dara.isNull(request.userContent)) {
      body["userContent"] = request.userContent;
    }

    if (!$dara.isNull(request.versionId)) {
      body["versionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunAgent",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/bot/thread/run`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RunAgentResponse>(await this.callApi(params, req, runtime), new RunAgentResponse({}));
    } else {
      return $dara.cast<RunAgentResponse>(await this.execute(params, req, runtime), new RunAgentResponse({}));
    }

  }

  /**
   * 运行智能体
   * 
   * @param request - RunAgentRequest
   * @returns RunAgentResponse
   */
  async runAgent(workspaceId: string, request: RunAgentRequest): Promise<RunAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runAgentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取生成式对话结果
   * 
   * @param request - RunChatResultGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunChatResultGenerationResponse
   */
  async runChatResultGenerationWithOptions(workspaceId: string, request: RunChatResultGenerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunChatResultGenerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inferenceParameters)) {
      body["inferenceParameters"] = request.inferenceParameters;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.tools)) {
      body["tools"] = request.tools;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunChatResultGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/run/chat/generation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RunChatResultGenerationResponse>(await this.callApi(params, req, runtime), new RunChatResultGenerationResponse({}));
    } else {
      return $dara.cast<RunChatResultGenerationResponse>(await this.execute(params, req, runtime), new RunChatResultGenerationResponse({}));
    }

  }

  /**
   * 获取生成式对话结果
   * 
   * @param request - RunChatResultGenerationRequest
   * @returns RunChatResultGenerationResponse
   */
  async runChatResultGeneration(workspaceId: string, request: RunChatResultGenerationRequest): Promise<RunChatResultGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runChatResultGenerationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取生成式对话结果
   * 
   * @param request - RunLibraryChatGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunLibraryChatGenerationResponse
   */
  async runLibraryChatGenerationWithOptions(workspaceId: string, request: RunLibraryChatGenerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunLibraryChatGenerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docIdList)) {
      body["docIdList"] = request.docIdList;
    }

    if (!$dara.isNull(request.enableFollowUp)) {
      body["enableFollowUp"] = request.enableFollowUp;
    }

    if (!$dara.isNull(request.enableMultiQuery)) {
      body["enableMultiQuery"] = request.enableMultiQuery;
    }

    if (!$dara.isNull(request.enableOpenQa)) {
      body["enableOpenQa"] = request.enableOpenQa;
    }

    if (!$dara.isNull(request.followUpLlm)) {
      body["followUpLlm"] = request.followUpLlm;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.llmType)) {
      body["llmType"] = request.llmType;
    }

    if (!$dara.isNull(request.multiQueryLlm)) {
      body["multiQueryLlm"] = request.multiQueryLlm;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.queryCriteria)) {
      body["queryCriteria"] = request.queryCriteria;
    }

    if (!$dara.isNull(request.rerankType)) {
      body["rerankType"] = request.rerankType;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.subQueryList)) {
      body["subQueryList"] = request.subQueryList;
    }

    if (!$dara.isNull(request.textSearchParameter)) {
      body["textSearchParameter"] = request.textSearchParameter;
    }

    if (!$dara.isNull(request.topK)) {
      body["topK"] = request.topK;
    }

    if (!$dara.isNull(request.vectorSearchParameter)) {
      body["vectorSearchParameter"] = request.vectorSearchParameter;
    }

    if (!$dara.isNull(request.withDocumentReference)) {
      body["withDocumentReference"] = request.withDocumentReference;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunLibraryChatGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/run/library/chat/generation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RunLibraryChatGenerationResponse>(await this.callApi(params, req, runtime), new RunLibraryChatGenerationResponse({}));
    } else {
      return $dara.cast<RunLibraryChatGenerationResponse>(await this.execute(params, req, runtime), new RunLibraryChatGenerationResponse({}));
    }

  }

  /**
   * 获取生成式对话结果
   * 
   * @param request - RunLibraryChatGenerationRequest
   * @returns RunLibraryChatGenerationResponse
   */
  async runLibraryChatGeneration(workspaceId: string, request: RunLibraryChatGenerationRequest): Promise<RunLibraryChatGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runLibraryChatGenerationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 提交问题列表
   * 
   * @param request - SubmitChatQuestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitChatQuestionResponse
   */
  async submitChatQuestionWithOptions(workspaceId: string, request: SubmitChatQuestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SubmitChatQuestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gmtService)) {
      body["gmtService"] = request.gmtService;
    }

    if (!$dara.isNull(request.liveScriptContent)) {
      body["liveScriptContent"] = request.liveScriptContent;
    }

    if (!$dara.isNull(request.openSmallTalk)) {
      body["openSmallTalk"] = request.openSmallTalk;
    }

    if (!$dara.isNull(request.questionList)) {
      body["questionList"] = request.questionList;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitChatQuestion",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/chat/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitChatQuestionResponse>(await this.callApi(params, req, runtime), new SubmitChatQuestionResponse({}));
    } else {
      return $dara.cast<SubmitChatQuestionResponse>(await this.execute(params, req, runtime), new SubmitChatQuestionResponse({}));
    }

  }

  /**
   * 提交问题列表
   * 
   * @param request - SubmitChatQuestionRequest
   * @returns SubmitChatQuestionResponse
   */
  async submitChatQuestion(workspaceId: string, request: SubmitChatQuestionRequest): Promise<SubmitChatQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitChatQuestionWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 更新文档
   * 
   * @param request - UpdateDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDocumentResponse
   */
  async updateDocumentWithOptions(workspaceId: string, request: UpdateDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.meta)) {
      body["meta"] = request.meta;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/updateDocument`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDocumentResponse>(await this.callApi(params, req, runtime), new UpdateDocumentResponse({}));
    } else {
      return $dara.cast<UpdateDocumentResponse>(await this.execute(params, req, runtime), new UpdateDocumentResponse({}));
    }

  }

  /**
   * 更新文档
   * 
   * @param request - UpdateDocumentRequest
   * @returns UpdateDocumentResponse
   */
  async updateDocument(workspaceId: string, request: UpdateDocumentRequest): Promise<UpdateDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 更新文档的chunk
   * 
   * @param request - UpdateDocumentChunkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDocumentChunkResponse
   */
  async updateDocumentChunkWithOptions(workspaceId: string, request: UpdateDocumentChunkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateDocumentChunkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunks)) {
      body["chunks"] = request.chunks;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDocumentChunk",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/updateDocumentChunk`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDocumentChunkResponse>(await this.callApi(params, req, runtime), new UpdateDocumentChunkResponse({}));
    } else {
      return $dara.cast<UpdateDocumentChunkResponse>(await this.execute(params, req, runtime), new UpdateDocumentChunkResponse({}));
    }

  }

  /**
   * 更新文档的chunk
   * 
   * @param request - UpdateDocumentChunkRequest
   * @returns UpdateDocumentChunkResponse
   */
  async updateDocumentChunk(workspaceId: string, request: UpdateDocumentChunkRequest): Promise<UpdateDocumentChunkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDocumentChunkWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 更新文档库配置
   * 
   * @param request - UpdateLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLibraryResponse
   */
  async updateLibraryWithOptions(workspaceId: string, request: UpdateLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateLibraryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.indexSetting)) {
      body["indexSetting"] = request.indexSetting;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!$dara.isNull(request.libraryName)) {
      body["libraryName"] = request.libraryName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLibrary",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/update`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateLibraryResponse>(await this.callApi(params, req, runtime), new UpdateLibraryResponse({}));
    } else {
      return $dara.cast<UpdateLibraryResponse>(await this.execute(params, req, runtime), new UpdateLibraryResponse({}));
    }

  }

  /**
   * 更新文档库配置
   * 
   * @param request - UpdateLibraryRequest
   * @returns UpdateLibraryResponse
   */
  async updateLibrary(workspaceId: string, request: UpdateLibraryRequest): Promise<UpdateLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLibraryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 更新QA问答库
   * 
   * @param request - UpdateQaLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQaLibraryResponse
   */
  async updateQaLibraryWithOptions(workspaceId: string, request: UpdateQaLibraryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateQaLibraryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parseQaResults)) {
      body["parseQaResults"] = request.parseQaResults;
    }

    if (!$dara.isNull(request.qaLibraryId)) {
      body["qaLibraryId"] = request.qaLibraryId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQaLibrary",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/virtualHuman/qa/upload`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateQaLibraryResponse>(await this.callApi(params, req, runtime), new UpdateQaLibraryResponse({}));
    } else {
      return $dara.cast<UpdateQaLibraryResponse>(await this.execute(params, req, runtime), new UpdateQaLibraryResponse({}));
    }

  }

  /**
   * 更新QA问答库
   * 
   * @param request - UpdateQaLibraryRequest
   * @returns UpdateQaLibraryResponse
   */
  async updateQaLibrary(workspaceId: string, request: UpdateQaLibraryRequest): Promise<UpdateQaLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQaLibraryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 上传文档到文档库
   * 
   * @param request - UploadDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDocumentResponse
   */
  async uploadDocumentWithOptions(workspaceId: string, request: UploadDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UploadDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["fileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/api/library/document/upload`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadDocumentResponse>(await this.callApi(params, req, runtime), new UploadDocumentResponse({}));
    } else {
      return $dara.cast<UploadDocumentResponse>(await this.execute(params, req, runtime), new UploadDocumentResponse({}));
    }

  }

  /**
   * 上传文档到文档库
   * 
   * @param request - UploadDocumentRequest
   * @returns UploadDocumentResponse
   */
  async uploadDocument(workspaceId: string, request: UploadDocumentRequest): Promise<UploadDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  async uploadDocumentAdvance(workspaceId: string, request: UploadDocumentAdvanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UploadDocumentResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
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
      product: "DianJin",
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
    let uploadDocumentReq = new UploadDocumentRequest({ });
    OpenApiUtil.convert(request, uploadDocumentReq);
    if (!$dara.isNull(request.fileUrlObject)) {
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
      uploadDocumentReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let uploadDocumentResp = await this.uploadDocumentWithOptions(workspaceId, uploadDocumentReq, headers, runtime);
    return uploadDocumentResp;
  }

}
