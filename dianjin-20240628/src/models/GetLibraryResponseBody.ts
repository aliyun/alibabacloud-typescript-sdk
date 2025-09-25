// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

