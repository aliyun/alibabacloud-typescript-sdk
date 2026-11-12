// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerankResponseBodyResultsResults extends $dara.Model {
  document?: string;
  index?: number;
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
   * The detailed information returned in the response.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  results?: RerankResponseBodyResults;
  /**
   * @remarks
   * The execution status of the API operation. Valid values:
   * - **success**: The operation is successful.
   * - **fail**: The operation fails.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The number of tokens consumed.
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

