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

