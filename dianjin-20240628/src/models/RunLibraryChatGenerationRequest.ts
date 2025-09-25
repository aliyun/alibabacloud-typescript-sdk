// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

