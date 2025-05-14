// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMinutesSummaryResponseBodySummaryActions extends $dara.Model {
  /**
   * @example
   * 7910000
   */
  end?: number;
  /**
   * @example
   * 2
   */
  id?: number;
  /**
   * @example
   * 2
   */
  sentenceId?: number;
  /**
   * @example
   * 7901100
   */
  start?: number;
  /**
   * @example
   * 内容
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      id: 'Id',
      sentenceId: 'SentenceId',
      start: 'Start',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      id: 'number',
      sentenceId: 'number',
      start: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

