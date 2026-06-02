// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MeetingFlashMinutesTextResponseBodyParagraphListSentenceListWordList extends $dara.Model {
  /**
   * @example
   * 7920000
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
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      word: 'word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
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

export class MeetingFlashMinutesTextResponseBodyParagraphListSentenceList extends $dara.Model {
  /**
   * @example
   * 7920000
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
  wordList?: MeetingFlashMinutesTextResponseBodyParagraphListSentenceListWordList[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      sentence: 'sentence',
      startTime: 'startTime',
      wordList: 'wordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      sentence: 'string',
      startTime: 'number',
      wordList: { 'type': 'array', 'itemType': MeetingFlashMinutesTextResponseBodyParagraphListSentenceListWordList },
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

export class MeetingFlashMinutesTextResponseBodyParagraphListSpeakerDisplay extends $dara.Model {
  /**
   * @example
   * https://xxx
   */
  avatarUrl?: string;
  /**
   * @example
   * 小钉
   */
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      nickName: 'nickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      nickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MeetingFlashMinutesTextResponseBodyParagraphList extends $dara.Model {
  /**
   * @example
   * 7920000
   */
  endTime?: number;
  /**
   * @example
   * 小钉
   */
  nickName?: string;
  /**
   * @example
   * 这里是小钉
   */
  paragraph?: string;
  sentenceList?: MeetingFlashMinutesTextResponseBodyParagraphListSentenceList[];
  speakerDisplay?: MeetingFlashMinutesTextResponseBodyParagraphListSpeakerDisplay;
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
      endTime: 'endTime',
      nickName: 'nickName',
      paragraph: 'paragraph',
      sentenceList: 'sentenceList',
      speakerDisplay: 'speakerDisplay',
      startTime: 'startTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      nickName: 'string',
      paragraph: 'string',
      sentenceList: { 'type': 'array', 'itemType': MeetingFlashMinutesTextResponseBodyParagraphListSentenceList },
      speakerDisplay: MeetingFlashMinutesTextResponseBodyParagraphListSpeakerDisplay,
      startTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sentenceList)) {
      $dara.Model.validateArray(this.sentenceList);
    }
    if(this.speakerDisplay && typeof (this.speakerDisplay as any).validate === 'function') {
      (this.speakerDisplay as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MeetingFlashMinutesTextResponseBody extends $dara.Model {
  hasNext?: boolean;
  /**
   * @example
   * 1778490366045000_62XXX
   */
  nextToken?: string;
  paragraphList?: MeetingFlashMinutesTextResponseBodyParagraphList[];
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
      hasNext: 'hasNext',
      nextToken: 'nextToken',
      paragraphList: 'paragraphList',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      nextToken: 'string',
      paragraphList: { 'type': 'array', 'itemType': MeetingFlashMinutesTextResponseBodyParagraphList },
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

