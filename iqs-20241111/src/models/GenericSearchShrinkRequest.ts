// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenericSearchShrinkRequest extends $dara.Model {
  advancedParamsShrink?: string;
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
  returnRichMainBody?: boolean;
  returnSummary?: boolean;
  sessionId?: string;
  /**
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

