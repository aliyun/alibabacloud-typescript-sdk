// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMinutesTextResponseBodyParagraphListSentenceListWordList extends $dara.Model {
  /**
   * @example
   * 7910000
   */
  endTime?: number;
  /**
   * @example
   * 7910000
   */
  startTime?: number;
  /**
   * @example
   * 单词
   */
  word?: string;
  /**
   * @example
   * 172
   */
  wordId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      word: 'Word',
      wordId: 'WordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      word: 'string',
      wordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesTextResponseBodyParagraphListSentenceList extends $dara.Model {
  /**
   * @example
   * 7910000
   */
  endTime?: number;
  /**
   * @example
   * 这里是小钉
   */
  sentence?: string;
  /**
   * @example
   * 7910000
   */
  startTime?: number;
  /**
   * @example
   * 012345
   */
  userId?: string;
  /**
   * @example
   * []
   */
  wordList?: QueryMinutesTextResponseBodyParagraphListSentenceListWordList[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      sentence: 'Sentence',
      startTime: 'StartTime',
      userId: 'UserId',
      wordList: 'WordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      sentence: 'string',
      startTime: 'number',
      userId: 'string',
      wordList: { 'type': 'array', 'itemType': QueryMinutesTextResponseBodyParagraphListSentenceListWordList },
    };
  }

  validate() {
    if(Array.isArray(this.wordList)) {
      $dara.Model.validateArray(this.wordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesTextResponseBodyParagraphList extends $dara.Model {
  /**
   * @example
   * 7910000
   */
  endTime?: number;
  /**
   * @example
   * 小钉
   */
  nickName?: string;
  /**
   * @example
   * 123
   */
  paragraph?: string;
  /**
   * @example
   * 123
   */
  paragraphId?: number;
  /**
   * @example
   * 44444
   */
  recordId?: number;
  /**
   * @example
   * []
   */
  sentenceList?: QueryMinutesTextResponseBodyParagraphListSentenceList[];
  /**
   * @example
   * 7910000
   */
  startTime?: number;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      nickName: 'NickName',
      paragraph: 'Paragraph',
      paragraphId: 'ParagraphId',
      recordId: 'RecordId',
      sentenceList: 'SentenceList',
      startTime: 'StartTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      nickName: 'string',
      paragraph: 'string',
      paragraphId: 'number',
      recordId: 'number',
      sentenceList: { 'type': 'array', 'itemType': QueryMinutesTextResponseBodyParagraphListSentenceList },
      startTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sentenceList)) {
      $dara.Model.validateArray(this.sentenceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMinutesTextResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * 0
   */
  nextToken?: string;
  paragraphList?: QueryMinutesTextResponseBodyParagraphList[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      nextToken: 'nextToken',
      paragraphList: 'paragraphList',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      nextToken: 'string',
      paragraphList: { 'type': 'array', 'itemType': QueryMinutesTextResponseBodyParagraphList },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paragraphList)) {
      $dara.Model.validateArray(this.paragraphList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

