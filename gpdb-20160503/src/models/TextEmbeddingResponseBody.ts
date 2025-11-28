// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextEmbeddingResponseBodyResultsResultsEmbedding extends $dara.Model {
  embedding?: number[];
  static names(): { [key: string]: string } {
    return {
      embedding: 'Embedding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedding: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.embedding)) {
      $dara.Model.validateArray(this.embedding);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextEmbeddingResponseBodyResultsResults extends $dara.Model {
  /**
   * @remarks
   * The embedding values.
   */
  embedding?: TextEmbeddingResponseBodyResultsResultsEmbedding;
  /**
   * @remarks
   * The number of the embedding in the Input request parameter, which starts from 0.
   * 
   * @example
   * 0
   */
  index?: number;
  static names(): { [key: string]: string } {
    return {
      embedding: 'Embedding',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedding: TextEmbeddingResponseBodyResultsResultsEmbedding,
      index: 'number',
    };
  }

  validate() {
    if(this.embedding && typeof (this.embedding as any).validate === 'function') {
      (this.embedding as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextEmbeddingResponseBodyResults extends $dara.Model {
  results?: TextEmbeddingResponseBodyResultsResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': TextEmbeddingResponseBodyResultsResults },
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

export class TextEmbeddingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The embedding results.
   */
  results?: TextEmbeddingResponseBodyResults;
  /**
   * @remarks
   * The status of the operation. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The total number of tokens consumed.
   * 
   * @example
   * 1000
   */
  textTokens?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      status: 'Status',
      textTokens: 'TextTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      results: TextEmbeddingResponseBodyResults,
      status: 'string',
      textTokens: 'number',
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

