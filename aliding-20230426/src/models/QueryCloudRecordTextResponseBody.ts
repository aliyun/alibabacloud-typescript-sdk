// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCloudRecordTextResponseBodyParagraphListSentenceListWordList extends $dara.Model {
  /**
   * @example
   * 7940
   */
  endTime?: number;
  /**
   * @example
   * 7940
   */
  startTime?: number;
  /**
   * @example
   * 这里
   */
  word?: string;
  /**
   * @example
   * 1631172050535000#0
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

export class QueryCloudRecordTextResponseBodyParagraphListSentenceList extends $dara.Model {
  /**
   * @example
   * 7940
   */
  endTime?: number;
  /**
   * @example
   * 这里是小钉
   */
  sentence?: string;
  /**
   * @example
   * 7940
   */
  startTime?: number;
  /**
   * @example
   * 012345
   */
  userId?: string;
  wordList?: QueryCloudRecordTextResponseBodyParagraphListSentenceListWordList[];
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
      wordList: { 'type': 'array', 'itemType': QueryCloudRecordTextResponseBodyParagraphListSentenceListWordList },
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

export class QueryCloudRecordTextResponseBodyParagraphList extends $dara.Model {
  /**
   * @example
   * 7940
   */
  endTime?: number;
  /**
   * @example
   * 1631172045153000
   */
  nextTtoken?: number;
  /**
   * @example
   * 小钉
   */
  nickName?: string;
  /**
   * @example
   * 嘿！你好，这里是小钉
   */
  paragraph?: string;
  /**
   * @example
   * 44444
   */
  recordId?: number;
  sentenceList?: QueryCloudRecordTextResponseBodyParagraphListSentenceList[];
  /**
   * @example
   * 7940
   */
  startTime?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      nextTtoken: 'NextTtoken',
      nickName: 'NickName',
      paragraph: 'Paragraph',
      recordId: 'RecordId',
      sentenceList: 'SentenceList',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      nextTtoken: 'number',
      nickName: 'string',
      paragraph: 'string',
      recordId: 'number',
      sentenceList: { 'type': 'array', 'itemType': QueryCloudRecordTextResponseBodyParagraphListSentenceList },
      startTime: 'number',
      status: 'number',
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

export class QueryCloudRecordTextResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  paragraphList?: QueryCloudRecordTextResponseBodyParagraphList[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      paragraphList: 'paragraphList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      paragraphList: { 'type': 'array', 'itemType': QueryCloudRecordTextResponseBodyParagraphList },
      requestId: 'string',
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

