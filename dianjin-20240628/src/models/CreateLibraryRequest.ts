// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLibraryRequestIndexSettingChunkStrategy extends $dara.Model {
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
   * Layout-based chunk size
   * 
   * @example
   * 300
   */
  docTreeSplitSize?: number;
  /**
   * @remarks
   * Parse images in documents
   * 
   * @example
   * true
   */
  enhanceGraph?: boolean;
  /**
   * @remarks
   * Parse tables in documents
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
   * Split by sentence
   * 
   * @example
   * true
   */
  sentenceSplit?: boolean;
  /**
   * @remarks
   * Sentence-based chunk size
   * 
   * @example
   * 300
   */
  sentenceSplitSize?: number;
  /**
   * @remarks
   * Chunk size
   * 
   * @example
   * 300
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

export class CreateLibraryRequestIndexSettingModelConfig extends $dara.Model {
  /**
   * @remarks
   * Control the randomness and diversity of model responses. Higher values flatten the probability distribution over candidate tokens, increasing diversity. Lower values sharpen the distribution, increasing determinism.
   * 
   * Valid range: [0, 2). Avoid 0.
   * 
   * @example
   * 0.8
   */
  temperature?: number;
  /**
   * @remarks
   * Probability threshold for nucleus sampling. For example, with a value of 0.8, only the smallest set of most likely tokens whose cumulative probability is at least 0.8 is used. Higher values increase randomness. Lower values increase determinism.
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

export class CreateLibraryRequestIndexSettingQueryEnhancer extends $dara.Model {
  /**
   * @remarks
   * Rewrite queries using history
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
   * Use LLMs to answer queries
   * 
   * @example
   * true
   */
  enableOpenQa?: boolean;
  /**
   * @remarks
   * Enable query rewriting
   * 
   * @example
   * true
   */
  enableQueryRewrite?: boolean;
  /**
   * @remarks
   * Enable multi-turn conversations
   * 
   * @example
   * true
   */
  enableSession?: boolean;
  /**
   * @remarks
   * Document library ID for knowledge rewriting
   * 
   * @example
   * xxxx
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

export class CreateLibraryRequestIndexSettingRecallStrategy extends $dara.Model {
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
   * Number of results from two-way merge and summarization
   * 
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
   * @remarks
   * Text index type. Only ElasticSearch is supported.
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
   * Number of final text index results
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

export class CreateLibraryRequestIndexSettingVectorIndexSetting extends $dara.Model {
  /**
   * @remarks
   * Vector index source. Only ADB is supported.
   * 
   * @example
   * ADB
   */
  category?: string;
  /**
   * @remarks
   * Text embedding type for vector indexing
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
   * Number of final vector index results
   * 
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
  /**
   * @remarks
   * Chunking strategy
   */
  chunkStrategy?: CreateLibraryRequestIndexSettingChunkStrategy;
  /**
   * @remarks
   * Model configuration
   */
  modelConfig?: CreateLibraryRequestIndexSettingModelConfig;
  /**
   * @remarks
   * Prompt role style. Specify a role and tone to guide response quality. Examples: Document analysis expert, friendly customer service agent, professional financial analyst.
   * 
   * @example
   * 你是一位信息处理专家，耐心、友好、逻辑清晰。
   */
  promptRoleStyle?: string;
  /**
   * @remarks
   * Query enhancement configuration
   */
  queryEnhancer?: CreateLibraryRequestIndexSettingQueryEnhancer;
  /**
   * @remarks
   * Retrieval strategy
   */
  recallStrategy?: CreateLibraryRequestIndexSettingRecallStrategy;
  /**
   * @remarks
   * Text index configuration
   */
  textIndexSetting?: CreateLibraryRequestIndexSettingTextIndexSetting;
  /**
   * @remarks
   * Vector index settings
   */
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

export class CreateLibraryRequest extends $dara.Model {
  /**
   * @remarks
   * Document library description
   * 
   * This parameter is required.
   * 
   * @example
   * 描述文档库的具体作用
   */
  description?: string;
  /**
   * @remarks
   * Index settings for the document library
   */
  indexSetting?: CreateLibraryRequestIndexSetting;
  /**
   * @remarks
   * Document library name
   * 
   * This parameter is required.
   * 
   * @example
   * 金融知识文档库
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

