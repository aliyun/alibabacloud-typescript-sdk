// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResultMatchedSentiveWordsMatchedSensitiveWord extends $dara.Model {
  /**
   * @example
   * xxx
   */
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

export class BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResultMatchedSentiveWords extends $dara.Model {
  matchedSensitiveWord?: BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResultMatchedSentiveWordsMatchedSensitiveWord[];
  static names(): { [key: string]: string } {
    return {
      matchedSensitiveWord: 'MatchedSensitiveWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchedSensitiveWord: { 'type': 'array', 'itemType': BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResultMatchedSentiveWordsMatchedSensitiveWord },
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

export class BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResult extends $dara.Model {
  /**
   * @example
   * true
   */
  exist?: boolean;
  /**
   * @example
   * example.com,aliyundoc.com
   */
  keyword?: string;
  matchedSentiveWords?: BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResultMatchedSentiveWords;
  static names(): { [key: string]: string } {
    return {
      exist: 'Exist',
      keyword: 'Keyword',
      matchedSentiveWords: 'MatchedSentiveWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exist: 'boolean',
      keyword: 'string',
      matchedSentiveWords: BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResultMatchedSentiveWords,
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

export class BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultList extends $dara.Model {
  sensitiveWordMatchResult?: BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResult[];
  static names(): { [key: string]: string } {
    return {
      sensitiveWordMatchResult: 'SensitiveWordMatchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveWordMatchResult: { 'type': 'array', 'itemType': BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultListSensitiveWordMatchResult },
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveWordMatchResult)) {
      $dara.Model.validateArray(this.sensitiveWordMatchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchFuzzyMatchDomainSensitiveWordResponseBody extends $dara.Model {
  /**
   * @example
   * C560A803-B975-481D-A66B-A4395EA863A1
   */
  requestId?: string;
  sensitiveWordMatchResultList?: BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sensitiveWordMatchResultList: 'SensitiveWordMatchResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sensitiveWordMatchResultList: BatchFuzzyMatchDomainSensitiveWordResponseBodySensitiveWordMatchResultList,
    };
  }

  validate() {
    if(this.sensitiveWordMatchResultList && typeof (this.sensitiveWordMatchResultList as any).validate === 'function') {
      (this.sensitiveWordMatchResultList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

