// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMinutesTextResponseBodyParagraphListSentenceList } from "./QueryMinutesTextResponseBodyParagraphListSentenceList";


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

