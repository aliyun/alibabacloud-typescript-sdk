// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenericSearchRequest extends $dara.Model {
  advancedParams?: { [key: string]: any };
  enableRerank?: boolean;
  /**
   * @remarks
   * The industry. After you specify an industry, only site content related to the specified industry is recalled. Separate multiple industries with commas.
   */
  industry?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The search keyword.
   * 
   * This parameter is required.
   * 
   * @example
   * 苹果手机
   */
  query?: string;
  returnMainText?: boolean;
  returnMarkdownText?: boolean;
  returnRichMainBody?: boolean;
  returnSummary?: boolean;
  /**
   * @remarks
   * The session ID for multi-turn interaction.
   */
  sessionId?: string;
  /**
   * @remarks
   * The time range for filtering results. Valid values:
   * - OneDay: last day
   * - OneWeek: last week
   * - OneMonth: last month
   * - OneYear: last year
   * - NoLimit: no limit.
   * 
   * @example
   * OneWeek
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      advancedParams: 'advancedParams',
      enableRerank: 'enableRerank',
      industry: 'industry',
      page: 'page',
      query: 'query',
      returnMainText: 'returnMainText',
      returnMarkdownText: 'returnMarkdownText',
      returnRichMainBody: 'returnRichMainBody',
      returnSummary: 'returnSummary',
      sessionId: 'sessionId',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      enableRerank: 'boolean',
      industry: 'string',
      page: 'number',
      query: 'string',
      returnMainText: 'boolean',
      returnMarkdownText: 'boolean',
      returnRichMainBody: 'boolean',
      returnSummary: 'boolean',
      sessionId: 'string',
      timeRange: 'string',
    };
  }

  validate() {
    if(this.advancedParams) {
      $dara.Model.validateMap(this.advancedParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

