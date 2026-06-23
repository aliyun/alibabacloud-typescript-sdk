// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiSearchRequest extends $dara.Model {
  /**
   * @remarks
   * The industry. After you specify an industry, only content from websites within the specified industry is recalled. Separate multiple industries with commas.
   * 
   * @example
   * finance
   */
  industry?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * {\\"total_count\\": 6851, \\"page_number\\": 54, \\"page_size\\": 100}
   */
  page?: number;
  /**
   * @remarks
   * The query to search for.
   * 
   * This parameter is required.
   * 
   * @example
   * 苹果手机
   */
  query?: string;
  /**
   * @remarks
   * The time range for filtering web page publication dates.
   * 
   * @example
   * 17dc8bcd-f34a-46d1-a7a3-0fa3d1ce3824
   */
  sessionId?: string;
  /**
   * @remarks
   * The session ID for multi-turn interactions.
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

