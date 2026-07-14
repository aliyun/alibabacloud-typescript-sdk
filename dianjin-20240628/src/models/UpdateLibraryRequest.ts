// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLibraryRequestIndexSettingChunkStrategy extends $dara.Model {
  /**
   * @remarks
   * Layout-based chunking
   * 
   * @example
   * true
   */
  docTreeSplit?: boolean;
  /**
   * @remarks
   * Layout-based chunking size
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
   * 20
   */
  overlap?: number;
  /**
   * @remarks
   * Split by sentence. Default is true
   * 
   * @example
   * true
   */
  sentenceSplit?: boolean;
  /**
   * @remarks
   * Average sentence-based chunking length
   * 
   * @example
   * 160
   */
  sentenceSplitSize?: number;
  /**
   * @remarks
   * Fixed-length chunking size
   * 
   * @example
   * 256
   */
  size?: number;
  /**
   * @remarks
   * Enable chunking
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

export class UpdateLibraryRequestIndexSettingModelConfig extends $dara.Model {
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
   * Top P
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
   * @remarks
   * Multi-turn enhancement
   * 
   * @example
   * true
   */
  enableFollowUp?: boolean;
  /**
   * @remarks
   * Use Large Language Models (LLMs) to decompose queries
   * 
   * @example
   * true
   */
  enableMultiQuery?: boolean;
  /**
   * @remarks
   * Use Large Language Models (LLMs) to answer queries
   * 
   * @example
   * true
   */
  enableOpenQa?: boolean;
  /**
   * @remarks
   * Rewrite queries using domain knowledge
   * 
   * @example
   * true
   */
  enableQueryRewrite?: boolean;
  /**
   * @remarks
   * Record session history
   * 
   * @example
   * true
   */
  enableSession?: boolean;
  /**
   * @remarks
   * Document library ID used for query rewriting
   * 
   * @example
   * sjdhgfc
   */
  localKnowledgeId?: string;
  /**
   * @remarks
   * Include document references in responses
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

export class UpdateLibraryRequestIndexSettingRecallStrategy extends $dara.Model {
  /**
   * @remarks
   * Merge and sort strategy
   * 
   * @example
   * model
   */
  documentRankType?: string;
  /**
   * @remarks
   * Number of results from two-way merge and summarization
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

export class UpdateLibraryRequestIndexSettingTextIndexSetting extends $dara.Model {
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
   * Enable text indexing
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Text index analyzer: Standard, IkMaxWord, or IkSmart
   * 
   * @example
   * Standard
   */
  indexAnalyzer?: string;
  /**
   * @remarks
   * Text index ranking threshold
   * 
   * @example
   * 0.5
   */
  rankThreshold?: number;
  /**
   * @remarks
   * Text index search analyzer: Standard, IkMaxWord, or IkSmart
   * 
   * @example
   * Standard
   */
  searchAnalyzer?: string;
  /**
   * @remarks
   * Number of final summarized results from text indexing
   * 
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
   * @remarks
   * Vector index source. We recommend ADB
   * 
   * @example
   * ADB
   */
  category?: string;
  /**
   * @remarks
   * Text embedding model for vector indexing
   * 
   * @example
   * DashScope
   */
  embeddingType?: string;
  /**
   * @remarks
   * Enable vector indexing
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Vector index ranking threshold
   * 
   * @example
   * 0.5
   */
  rankThreshold?: number;
  /**
   * @remarks
   * Number of final summarized results from vector indexing
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

export class UpdateLibraryRequestIndexSetting extends $dara.Model {
  /**
   * @remarks
   * Chunking strategy
   */
  chunkStrategy?: UpdateLibraryRequestIndexSettingChunkStrategy;
  /**
   * @remarks
   * Model configuration
   */
  modelConfig?: UpdateLibraryRequestIndexSettingModelConfig;
  /**
   * @remarks
   * Prompt role style
   * 
   * @example
   * 你是一位文档分析专家，非常善于从给定的知识中，找到重点，像老师给学生讲课一样把问题回答清晰。你的回答富有逻辑性，遇到复杂问题，你善于一步一步思考。
   */
  promptRoleStyle?: string;
  /**
   * @remarks
   * Query enhancement
   */
  queryEnhancer?: UpdateLibraryRequestIndexSettingQueryEnhancer;
  /**
   * @remarks
   * Retrieval strategy
   */
  recallStrategy?: UpdateLibraryRequestIndexSettingRecallStrategy;
  /**
   * @remarks
   * Text index settings
   */
  textIndexSetting?: UpdateLibraryRequestIndexSettingTextIndexSetting;
  /**
   * @remarks
   * Vector index settings
   */
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

export class UpdateLibraryRequest extends $dara.Model {
  /**
   * @remarks
   * Document library description
   * 
   * @example
   * 文档库描述
   */
  description?: string;
  /**
   * @remarks
   * Document library index configuration
   */
  indexSetting?: UpdateLibraryRequestIndexSetting;
  /**
   * @remarks
   * Document library ID
   * 
   * This parameter is required.
   * 
   * @example
   * dsfbashdbb
   */
  libraryId?: string;
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

