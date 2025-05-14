// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMinutesSummaryResponseBodySummaryAutoChapters extends $dara.Model {
  /**
   * @example
   * 7910000
   */
  end?: number;
  /**
   * @example
   * 章节的一句话标题
   */
  headline?: string;
  /**
   * @example
   * 2
   */
  id?: number;
  /**
   * @example
   * 7901100
   */
  start?: number;
  /**
   * @example
   * 章节总结
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      headline: 'Headline',
      id: 'Id',
      start: 'Start',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      headline: 'string',
      id: 'number',
      start: 'number',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

