// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWordsMatchedSensitiveWord extends $dara.Model {
  word?: string;
  static names(): { [key: string]: string } {
    return {
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWords extends $dara.Model {
  matchedSensitiveWord?: FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWordsMatchedSensitiveWord[];
  static names(): { [key: string]: string } {
    return {
      matchedSensitiveWord: 'MatchedSensitiveWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchedSensitiveWord: { 'type': 'array', 'itemType': FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWordsMatchedSensitiveWord },
    };
  }

  validate() {
    if(Array.isArray(this.matchedSensitiveWord)) {
      $dara.Model.validateArray(this.matchedSensitiveWord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FuzzyMatchDomainSensitiveWordResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the domain name contains sensitive words. Valid values:  
   * - **true**: The domain name contains sensitive words.  
   * - **false**: The domain name does not contain sensitive words.
   * 
   * @example
   * true
   */
  exist?: boolean;
  /**
   * @remarks
   * The domain name keyword that was passed in.
   * 
   * @example
   * xxx**
   */
  keyword?: string;
  matchedSentiveWords?: FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWords;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D15F91FD-0B34-4E48-8CBF-EFA5D2A31586
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exist: 'Exist',
      keyword: 'Keyword',
      matchedSentiveWords: 'MatchedSentiveWords',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exist: 'boolean',
      keyword: 'string',
      matchedSentiveWords: FuzzyMatchDomainSensitiveWordResponseBodyMatchedSentiveWords,
      requestId: 'string',
    };
  }

  validate() {
    if(this.matchedSentiveWords && typeof (this.matchedSentiveWords as any).validate === 'function') {
      (this.matchedSentiveWords as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

