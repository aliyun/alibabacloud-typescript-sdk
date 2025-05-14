// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCloudRecordTextResponseBodyParagraphListSentenceListWordList } from "./QueryCloudRecordTextResponseBodyParagraphListSentenceListWordList";


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

