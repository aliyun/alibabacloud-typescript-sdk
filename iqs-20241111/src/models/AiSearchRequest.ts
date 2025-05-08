// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiSearchRequest extends $dara.Model {
  /**
   * @example
   * finance
   */
  industry?: string;
  /**
   * @example
   * {\\"total_count\\": 6851, \\"page_number\\": 54, \\"page_size\\": 100}
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  /**
   * @example
   * 17dc8bcd-f34a-46d1-a7a3-0fa3d1ce3824
   */
  sessionId?: string;
  /**
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

