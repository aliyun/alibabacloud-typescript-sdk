// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveKnowledgeBaseRequest extends $dara.Model {
  /**
   * @example
   * title = \\"test\\" AND name like \\"test%\\"
   */
  filter?: string;
  /**
   * @example
   * RRF
   */
  hybridSearch?: string;
  /**
   * @example
   * { \\"Weight\\": { \\"alpha\\": 0.5 } }
   */
  hybridSearchArgs?: string;
  /**
   * @example
   * title,page
   */
  includeMetadataFields?: string;
  /**
   * @example
   * false
   */
  includeVector?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kb-***
   */
  kbUuid?: string;
  /**
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * created_at
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * What is GraphRAG?
   */
  query?: string;
  /**
   * @example
   * [-5,5]
   */
  recallWindow?: string;
  /**
   * @example
   * 2
   */
  rerankFactor?: number;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      hybridSearch: 'HybridSearch',
      hybridSearchArgs: 'HybridSearchArgs',
      includeMetadataFields: 'IncludeMetadataFields',
      includeVector: 'IncludeVector',
      kbUuid: 'KbUuid',
      metrics: 'Metrics',
      offset: 'Offset',
      orderBy: 'OrderBy',
      query: 'Query',
      recallWindow: 'RecallWindow',
      rerankFactor: 'RerankFactor',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      hybridSearch: 'string',
      hybridSearchArgs: 'string',
      includeMetadataFields: 'string',
      includeVector: 'boolean',
      kbUuid: 'string',
      metrics: 'string',
      offset: 'number',
      orderBy: 'string',
      query: 'string',
      recallWindow: 'string',
      rerankFactor: 'number',
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

