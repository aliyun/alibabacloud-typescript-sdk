// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchContextRequest extends $dara.Model {
  /**
   * @remarks
   * Filter conditions
   */
  filter?: { [key: string]: any };
  /**
   * @remarks
   * Whether to format
   * 
   * @example
   * true
   */
  formatted?: boolean;
  /**
   * @remarks
   * Limit the number of items returned
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * Query content
   * 
   * This parameter is required.
   * 
   * @example
   * How is the cost for consuming SLS logs in Flink calculated?
   */
  query?: string;
  /**
   * @remarks
   * Retrieval option
   * 
   * @example
   * reranker,llm_rank
   */
  retrievalOption?: string;
  /**
   * @remarks
   * Similarity threshold
   * 
   * @example
   * 0.3
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      formatted: 'formatted',
      limit: 'limit',
      query: 'query',
      retrievalOption: 'retrievalOption',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formatted: 'boolean',
      limit: 'number',
      query: 'string',
      retrievalOption: 'string',
      threshold: 'number',
    };
  }

  validate() {
    if(this.filter) {
      $dara.Model.validateMap(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

