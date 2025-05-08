// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenericSearchRequest extends $dara.Model {
  enableRerank?: boolean;
  industry?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  returnMainText?: boolean;
  returnMarkdownText?: boolean;
  returnSummary?: boolean;
  sessionId?: string;
  /**
   * @example
   * OneWeek
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      enableRerank: 'enableRerank',
      industry: 'industry',
      page: 'page',
      query: 'query',
      returnMainText: 'returnMainText',
      returnMarkdownText: 'returnMarkdownText',
      returnSummary: 'returnSummary',
      sessionId: 'sessionId',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableRerank: 'boolean',
      industry: 'string',
      page: 'number',
      query: 'string',
      returnMainText: 'boolean',
      returnMarkdownText: 'boolean',
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

