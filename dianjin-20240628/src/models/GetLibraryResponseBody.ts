// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLibraryResponseBodyDataIndexSettingChunkStrategy extends $dara.Model {
  /**
   * @remarks
   * Enable layout-based splitting.
   * 
   * @example
   * true
   */
  docTreeSplit?: boolean;
  /**
   * @remarks
   * The layout-based splitting size.
   * 
   * @example
   * 160
   */
  docTreeSplitSize?: number;
  /**
   * @remarks
   * Enhance images.
   * 
   * @example
   * true
   */
  enhanceGraph?: boolean;
  /**
   * @remarks
   * Enhance tables.
   * 
   * @example
   * true
   */
  enhanceTable?: boolean;
  /**
   * @remarks
   * The overlap length between chunks.
   * 
   * @example
   * 40
   */
  overlap?: number;
  /**
   * @remarks
   * Split by sentence.
   * 
   * @example
   * true
   */
  sentenceSplit?: boolean;
  /**
   * @remarks
   * The sentence-based splitting size.
   * 
   * @example
   * 160
   */
  sentenceSplitSize?: number;
  /**
   * @remarks
   * The chunk size.
   * 
   * @example
   * 256
   */
  size?: number;
  /**
   * @remarks
   * Enable chunking.
   * 
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
   * @remarks
   * temperature
   * 
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
   * @remarks
   * Enable multi-turn query enhancement.
   * 
   * @example
   * true
   */
  enableFollowUp?: boolean;
  /**
   * @remarks
   * Use Large Language Model (LLM) knowledge to decompose queries.
   * 
   * @example
   * true
   */
  enableMultiQuery?: boolean;
  /**
   * @remarks
   * Use Large Language Model (LLM) knowledge to answer questions.
   * 
   * @example
   * true
   */
  enableOpenQa?: boolean;
  /**
   * @remarks
   * Rewrite queries using domain-specific knowledge.
   * 
   * @example
   * true
   */
  enableQueryRewrite?: boolean;
  /**
   * @remarks
   * Record session history.
   * 
   * @example
   * true
   */
  enableSession?: boolean;
  /**
   * @remarks
   * The document library ID used for knowledge rewriting.
   * 
   * @example
   * 2836482634
   */
  localKnowledgeId?: string;
  /**
   * @remarks
   * Include document references in responses.
   * 
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
   * @remarks
   * The merge and sort policy.
   * 
   * @example
   * model
   */
  documentRankType?: string;
  /**
   * @remarks
   * The number of results returned after merging two recall paths.
   * 
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
   * @remarks
   * The text index type.
   * 
   * @example
   * ElasticSearch
   */
  category?: string;
  /**
   * @remarks
   * Enable text indexing.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The text index analyzer: Standard, IkMaxWord, or IkSmart.
   * 
   * @example
   * IkMaxWord
   */
  indexAnalyzer?: string;
  /**
   * @remarks
   * The ranking threshold for text indexing.
   * 
   * @example
   * null
   */
  rankThreshold?: number;
  /**
   * @remarks
   * The text index search analyzer: Standard, IkMaxWord, or IkSmart.
   * 
   * @example
   * Standard
   */
  searchAnalyzer?: string;
  /**
   * @remarks
   * The number of final summary results from text indexing.
   * 
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
   * @remarks
   * The vector index source. We recommend ADB.
   * 
   * @example
   * ADB
   */
  category?: string;
  /**
   * @remarks
   * The text embedding model for the vector index.
   * 
   * @example
   * DashScope
   */
  embeddingType?: string;
  /**
   * @remarks
   * Enable vector indexing.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ranking threshold for vector indexing.
   * 
   * @example
   * null
   */
  rankThreshold?: number;
  /**
   * @remarks
   * Number of final results returned by the vector index.
   * 
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
  /**
   * @remarks
   * The chunking strategy.
   */
  chunkStrategy?: GetLibraryResponseBodyDataIndexSettingChunkStrategy;
  /**
   * @remarks
   * Model configuration.
   */
  modelConfig?: GetLibraryResponseBodyDataIndexSettingModelConfig;
  /**
   * @remarks
   * The prompt role style.
   * 
   * @example
   * 你是一个信息处理专家。
   */
  promptRoleStyle?: string;
  /**
   * @remarks
   * Query enhancement settings.
   */
  queryEnhancer?: GetLibraryResponseBodyDataIndexSettingQueryEnhancer;
  /**
   * @remarks
   * The recall strategy.
   */
  recallStrategy?: GetLibraryResponseBodyDataIndexSettingRecallStrategy;
  /**
   * @remarks
   * Text index settings.
   */
  textIndexSetting?: GetLibraryResponseBodyDataIndexSettingTextIndexSetting;
  /**
   * @remarks
   * Vector index settings.
   */
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
  /**
   * @remarks
   * The document library description.
   * 
   * @example
   * 文档库的描述
   */
  description?: string;
  /**
   * @remarks
   * The number of documents in the library.
   * 
   * @example
   * 10
   */
  documentCount?: number;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time in YYYY-MM-DD HH:MM:SS format.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The document library ID.
   * 
   * @example
   * 19386728376
   */
  id?: string;
  /**
   * @remarks
   * The document library index settings.
   */
  indexSetting?: GetLibraryResponseBodyDataIndexSetting;
  /**
   * @remarks
   * The document library name.
   * 
   * @example
   * 测试文档库
   */
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
   * @remarks
   * Response time in milliseconds.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * The response data object.
   */
  data?: GetLibraryResponseBodyData;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Fault type
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 44BD277A-87F9-5310-8D63-3E6645F1DA85
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * UNIX timestamp
   * 
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

