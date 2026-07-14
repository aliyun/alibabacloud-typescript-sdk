// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunLibraryChatGenerationRequestQueryCriteriaAnd extends $dara.Model {
  /**
   * @remarks
   * The weight of the tag. A value less than 1 decreases the weight of the corresponding keyword. A value greater than 1 increases the weight.
   * 
   * @example
   * 0.5
   */
  boost?: number;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * city
   */
  key?: string;
  /**
   * @remarks
   * The operator for the tag. It specifies the relationship between the metadata key\\"s stored value and your input value.
   * 
   * - eq: Equal to.
   * 
   * - lte: Less than or equal to.
   * 
   * - gte: Greater than or equal to.
   * 
   * - lt: Less than.
   * 
   * - gt: Greater than.
   * 
   * @example
   * eq
   */
  operator?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 北京
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

export class RunLibraryChatGenerationRequestQueryCriteriaOr extends $dara.Model {
  /**
   * @remarks
   * The weight of the tag. A value less than 1 decreases the weight of the corresponding keyword. A value greater than 1 increases the weight.
   * 
   * @example
   * 0.5
   */
  boost?: number;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * city
   */
  key?: string;
  /**
   * @remarks
   * The operator for the tag. It specifies the relationship between the metadata key\\"s stored value and your input value.
   * 
   * - eq: Equal to.
   * 
   * - lte: Less than or equal to.
   * 
   * - gte: Greater than or equal to.
   * 
   * - lt: Less than.
   * 
   * - gt: Greater than.
   * 
   * @example
   * eq
   */
  operator?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 北京
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

export class RunLibraryChatGenerationRequestQueryCriteria extends $dara.Model {
  /**
   * @remarks
   * The \\`and\\` expression, used to filter documents or document chunks.
   */
  and?: RunLibraryChatGenerationRequestQueryCriteriaAnd[];
  /**
   * @remarks
   * The \\`or\\` expression, used to filter documents or document chunks.
   */
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
   * @remarks
   * The number of rows to return.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The search tokenizer. Valid values: \\`Standard\\`, \\`IkMaxWord\\`, and \\`IkSmart\\`. Configure this parameter as needed. If left empty, the tokenizer attached to the document library is used.
   * 
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
   * @remarks
   * The number of rows to return.
   * 
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

export class RunLibraryChatGenerationRequest extends $dara.Model {
  /**
   * @remarks
   * A list of document IDs.
   */
  docIdList?: string[];
  /**
   * @remarks
   * Specifies whether to enable multi-turn enhancement.
   * 
   * @example
   * false
   */
  enableFollowUp?: boolean;
  /**
   * @remarks
   * Specifies whether to enable query splitting.
   * 
   * @example
   * false
   */
  enableMultiQuery?: boolean;
  /**
   * @remarks
   * Specifies whether to enable openQA.
   * 
   * @example
   * false
   */
  enableOpenQa?: boolean;
  /**
   * @remarks
   * The Large Language Model (LLM) used for multi-turn query enhancement.
   * 
   * @example
   * qwen-max
   */
  followUpLlm?: string;
  /**
   * @remarks
   * The ID of the document library.
   * 
   * This parameter is required.
   * 
   * @example
   * 3akzl28vap
   */
  libraryId?: string;
  /**
   * @remarks
   * The type of the LLM.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  llmType?: string;
  /**
   * @remarks
   * The LLM used for query splitting.
   * 
   * @example
   * qwen-max
   */
  multiQueryLlm?: string;
  /**
   * @remarks
   * The query entered by the user.
   * 
   * This parameter is required.
   * 
   * @example
   * 这两天北京气候怎么样
   */
  query?: string;
  /**
   * @remarks
   * The property filter.
   */
  queryCriteria?: RunLibraryChatGenerationRequestQueryCriteria;
  /**
   * @remarks
   * The type of the sort policy. Valid values: \\`linear\\` and \\`model\\`. \\`linear\\`: rule-based sorting. \\`model\\`: model-based sorting (LLM).
   * 
   * @example
   * linear
   */
  rerankType?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * null
   */
  sessionId?: string;
  /**
   * @remarks
   * Specifies whether to use streaming or non-streaming mode.
   * 
   * @example
   * false
   */
  stream?: boolean;
  /**
   * @remarks
   * A list of subqueries.
   */
  subQueryList?: string[];
  /**
   * @remarks
   * Search engine parameters: text search parameters.
   */
  textSearchParameter?: RunLibraryChatGenerationRequestTextSearchParameter;
  /**
   * @remarks
   * The final number of retrieved corpus entries.
   * 
   * @example
   * 1
   */
  topK?: number;
  /**
   * @remarks
   * Search engine parameters: vector search parameters.
   */
  vectorSearchParameter?: RunLibraryChatGenerationRequestVectorSearchParameter;
  /**
   * @remarks
   * Specifies whether to return document references.
   * 
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

