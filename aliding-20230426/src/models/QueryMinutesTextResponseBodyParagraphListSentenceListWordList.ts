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

