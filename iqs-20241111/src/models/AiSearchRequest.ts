// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiSearchRequest extends $dara.Model {
  /**
   * @remarks
   * The industry. If specified, only site content restricted to the specified industry is recalled. Separate multiple industries with commas.
   * 
   * @example
   * finance
   */
  industry?: string;
  /**
   * @remarks
   * The page number. Starts from 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The search query.
   * 
   * This parameter is required.
   * 
   * @example
   * iPhone
   */
  query?: string;
  /**
   * @remarks
   * The query range for the web page publish time.
   * 
   * @example
   * 17dc8bcd-f34a-46d1-a7a3-0fa3d1ce3824
   */
  sessionId?: string;
  /**
   * @remarks
   * The session ID for multi-turn interaction.
   * 
   * @example
   * OneWeek
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      industry: 'industry',
      page: 'page',
      query: 'query',
      sessionId: 'sessionId',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industry: 'string',
      page: 'number',
      query: 'string',
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

