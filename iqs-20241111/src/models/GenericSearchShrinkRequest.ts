// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenericSearchShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced search parameters. Filters search results by the start and end dates of the webpage publication time. The date format is YYYY-MM-DD. This parameter takes precedence over timeRange.
   * 
   * @example
   * {"startPublishedDate":"2025-07-01","endPublishedDate":"2025-07-31"}
   */
  advancedParamsShrink?: string;
  /**
   * @remarks
   * Specifies whether to rerank the search results. Default value: true.
   */
  enableRerank?: boolean;
  /**
   * @remarks
   * The industry. If specified, only site content restricted to the specified industries is recalled. Separate multiple industries with commas.
   * 
   * @example
   * finance,law
   */
  industry?: string;
  /**
   * @remarks
   * The page number. The value starts from 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The search keywords.
   * 
   * This parameter is required.
   * 
   * @example
   * iPhone
   */
  query?: string;
  /**
   * @remarks
   * Specifies whether to return the main text of the webpage. Default value: true.
   */
  returnMainText?: boolean;
  /**
   * @remarks
   * Specifies whether to return the webpage content in Markdown format. Default value: true.
   */
  returnMarkdownText?: boolean;
  /**
   * @remarks
   * Specifies whether to return the full rich text body. Default value: false.
   */
  returnRichMainBody?: boolean;
  /**
   * @remarks
   * Specifies whether to return the enhanced summary. Default value: true.
   */
  returnSummary?: boolean;
  /**
   * @remarks
   * The session ID for multi-turn interactions.
   * 
   * @example
   * 282j3h3434j23hdw9sd72j3
   */
  sessionId?: string;
  /**
   * @remarks
   * The time range.
   * 
   * @example
   * OneWeek
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      advancedParamsShrink: 'advancedParams',
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
      advancedParamsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

