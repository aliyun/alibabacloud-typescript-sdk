// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunLibraryChatGenerationRequestQueryCriteria } from "./RunLibraryChatGenerationRequestQueryCriteria";
import { RunLibraryChatGenerationRequestTextSearchParameter } from "./RunLibraryChatGenerationRequestTextSearchParameter";
import { RunLibraryChatGenerationRequestVectorSearchParameter } from "./RunLibraryChatGenerationRequestVectorSearchParameter";


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

