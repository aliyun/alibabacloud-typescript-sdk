// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryContentResponseBodyMatches } from "./QueryContentResponseBodyMatches";
import { QueryContentResponseBodyUsage } from "./QueryContentResponseBodyUsage";
import { QueryContentResponseBodyWindowMatches } from "./QueryContentResponseBodyWindowMatches";


export class QueryContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Number of tokens used for vectorization.
   * 
   * > A token refers to the smallest unit into which the input text is divided; a token can be a word, a phrase, a punctuation mark, or a character, etc.
   * 
   * @example
   * 100
   */
  embeddingTokens?: string;
  /**
   * @remarks
   * The retrieved data.
   */
  matches?: QueryContentResponseBodyMatches;
  /**
   * @remarks
   * Return message.
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
  /**
   * @remarks
   * The execution state of the operation. Valid values:
   * 
   * *   **false**: The operation fails.
   * *   **true**: The operation is successful.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * Resource usage for this query.
   */
  usage?: QueryContentResponseBodyUsage;
  /**
   * @remarks
   * List of windowed matches.
   */
  windowMatches?: QueryContentResponseBodyWindowMatches;
  static names(): { [key: string]: string } {
    return {
      embeddingTokens: 'EmbeddingTokens',
      matches: 'Matches',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      usage: 'Usage',
      windowMatches: 'WindowMatches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingTokens: 'string',
      matches: QueryContentResponseBodyMatches,
      message: 'string',
      requestId: 'string',
      status: 'string',
      usage: QueryContentResponseBodyUsage,
      windowMatches: QueryContentResponseBodyWindowMatches,
    };
  }

  validate() {
    if(this.matches && typeof (this.matches as any).validate === 'function') {
      (this.matches as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    if(this.windowMatches && typeof (this.windowMatches as any).validate === 'function') {
      (this.windowMatches as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

