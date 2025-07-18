// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerankResponseBodyResultsResults extends $dara.Model {
  /**
   * @remarks
   * Re-ordered document information.
   * 
   * @example
   * ADBPG is the OLAP database of Alibaba Cloud.
   */
  document?: string;
  /**
   * @remarks
   * Index of this document in the request parameter Documents, starting from 0.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Rerank similarity score.
   * 
   * @example
   * 2.31412
   */
  relevanceScore?: number;
  static names(): { [key: string]: string } {
    return {
      document: 'Document',
      index: 'Index',
      relevanceScore: 'RelevanceScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      index: 'number',
      relevanceScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerankResponseBodyResults extends $dara.Model {
  results?: RerankResponseBodyResultsResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': RerankResponseBodyResultsResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerankResponseBody extends $dara.Model {
  /**
   * @remarks
   * Detailed information returned by the interface.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * Rerank results.
   */
  results?: RerankResponseBodyResults;
  /**
   * @remarks
   * API execution status, value description:
   * - **success**: Execution succeeded.
   * - **fail**: Execution failed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * Number of consumed tokens.
   * 
   * @example
   * 100
   */
  tokens?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      status: 'Status',
      tokens: 'Tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      results: RerankResponseBodyResults,
      status: 'string',
      tokens: 'number',
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

