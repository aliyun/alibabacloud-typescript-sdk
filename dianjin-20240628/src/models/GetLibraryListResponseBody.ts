// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLibraryListResponseBodyDataRecordsIndexSettingChunkStrategy extends $dara.Model {
  /**
   * @remarks
   * Layout chunking
   * 
   * @example
   * true
   */
  docTreeSplit?: boolean;
  /**
   * @remarks
   * Layout chunking size
   * 
   * @example
   * 160
   */
  docTreeSplitSize?: number;
  /**
   * @remarks
   * Enhance images
   * 
   * @example
   * true
   */
  enhanceGraph?: boolean;
  /**
   * @remarks
   * Enhance tables
   * 
   * @example
   * true
   */
  enhanceTable?: boolean;
  /**
   * @remarks
   * Chunk overlap length
   * 
   * @example
   * 40
   */
  overlap?: number;
  /**
   * @remarks
   * Split by sentence
   * 
   * @example
   * true
   */
  sentenceSplit?: boolean;
  /**
   * @remarks
   * Split by sentence size
   * 
   * @example
   * 160
   */
  sentenceSplitSize?: number;
  /**
   * @remarks
   * Chunk size
   * 
   * @example
   * 256
   */
  size?: number;
  /**
   * @remarks
   * Chunking enabled
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

export class GetLibraryListResponseBodyDataRecordsIndexSettingModelConfig extends $dara.Model {
  /**
   * @remarks
   * Temperature
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

export class GetLibraryListResponseBodyDataRecordsIndexSettingQueryEnhancer extends $dara.Model {
  /**
   * @remarks
   * Multi-turn enhancement
   * 
   * @example
   * true
   */
  enableFollowUp?: boolean;
  /**
   * @remarks
   * Use Large Language Model (LLM) knowledge to decompose questions
   * 
   * @example
   * true
   */
  enableMultiQuery?: boolean;
  /**
   * @remarks
   * Use Large Language Model (LLM) knowledge to answer questions
   * 
   * @example
   * true
   */
  enableOpenQa?: boolean;
  /**
   * @remarks
   * Rewrite questions based on domain knowledge
   * 
   * @example
   * true
   */
  enableQueryRewrite?: boolean;
  /**
   * @remarks
   * Record session
   * 
   * @example
   * true
   */
  enableSession?: boolean;
  /**
   * @remarks
   * Document library ID used for knowledge rewriting
   * 
   * @example
   * sdbcjsbc
   */
  localKnowledgeId?: string;
  /**
   * @remarks
   * Include document reference
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

export class GetLibraryListResponseBodyDataRecordsIndexSettingRecallStrategy extends $dara.Model {
  /**
   * @remarks
   * Merge and sort policy
   * 
   * @example
   * model
   */
  documentRankType?: string;
  /**
   * @remarks
   * Number of results from two-way merge summary
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

export class GetLibraryListResponseBodyDataRecordsIndexSettingTextIndexSetting extends $dara.Model {
  /**
   * @remarks
   * Text index type
   * 
   * @example
   * ElasticSearch
   */
  category?: string;
  /**
   * @remarks
   * Text index enabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Index analyzer for text index: (Standard, IkMaxWord, IkSmart)
   * 
   * @example
   * Standard
   */
  indexAnalyzer?: string;
  /**
   * @remarks
   * Text index sort threshold
   * 
   * @example
   * null
   */
  rankThreshold?: number;
  /**
   * @remarks
   * Search analyzer for text index: (Standard, IkMaxWord, IkSmart)
   * 
   * @example
   * Standard
   */
  searchAnalyzer?: string;
  /**
   * @remarks
   * Number of final summary results for text index
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

export class GetLibraryListResponseBodyDataRecordsIndexSettingVectorIndexSetting extends $dara.Model {
  /**
   * @remarks
   * Vector index source. Recommended: ADB
   * 
   * @example
   * ADB
   */
  category?: string;
  /**
   * @remarks
   * Vector index text embedding model
   * 
   * @example
   * DashScope
   */
  embeddingType?: string;
  /**
   * @remarks
   * Enabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Vector index sort threshold
   * 
   * @example
   * null
   */
  rankThreshold?: number;
  /**
   * @remarks
   * Number of final summary results for vector index
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

export class GetLibraryListResponseBodyDataRecordsIndexSetting extends $dara.Model {
  /**
   * @remarks
   * Chunking strategy
   */
  chunkStrategy?: GetLibraryListResponseBodyDataRecordsIndexSettingChunkStrategy;
  /**
   * @remarks
   * Model Configuration
   */
  modelConfig?: GetLibraryListResponseBodyDataRecordsIndexSettingModelConfig;
  /**
   * @remarks
   * Prompt role style
   * 
   * @example
   * 你是一个信息处理专家。
   */
  promptRoleStyle?: string;
  /**
   * @remarks
   * Query enhancement
   */
  queryEnhancer?: GetLibraryListResponseBodyDataRecordsIndexSettingQueryEnhancer;
  /**
   * @remarks
   * Recall strategy
   */
  recallStrategy?: GetLibraryListResponseBodyDataRecordsIndexSettingRecallStrategy;
  /**
   * @remarks
   * Text index settings
   */
  textIndexSetting?: GetLibraryListResponseBodyDataRecordsIndexSettingTextIndexSetting;
  /**
   * @remarks
   * Vector index settings
   */
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
  /**
   * @remarks
   * Document library description
   * 
   * @example
   * 文档库
   */
  description?: string;
  /**
   * @remarks
   * Document count
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
   * Modification time
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Document library ID
   * 
   * @example
   * 24vs4aa42jv1rg7
   */
  id?: string;
  /**
   * @remarks
   * Document library index settings
   */
  indexSetting?: GetLibraryListResponseBodyDataRecordsIndexSetting;
  /**
   * @remarks
   * Document library name
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
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of records per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Record list
   */
  records?: GetLibraryListResponseBodyDataRecords[];
  /**
   * @remarks
   * Total pages
   * 
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @remarks
   * Total records
   * 
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

export class GetLibraryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Time consumed
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Returned data
   */
  data?: GetLibraryListResponseBodyData;
  /**
   * @remarks
   * Data type
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 0a06dfe817156528535968405edce3
   */
  requestId?: string;
  /**
   * @remarks
   * Successful
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Timestamp
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

