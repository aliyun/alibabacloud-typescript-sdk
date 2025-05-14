// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMinutesTextResponseBodyParagraphListSentenceListWordList } from "./QueryMinutesTextResponseBodyParagraphListSentenceListWordList";


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

