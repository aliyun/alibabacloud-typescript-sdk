// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenericAdvancedSearchRequest extends $dara.Model {
  /**
   * @remarks
   * The industry. After you specify this parameter, only content from websites within the specified industries is recalled. Separate multiple industries with commas.
   */
  industry?: string;
  /**
   * @remarks
   * The query text to search for.
   * 
   * This parameter is required.
   * 
   * @example
   * 苹果手机
   */
  query?: string;
  /**
   * @remarks
   * The session ID for multi-turn interactions.
   * 
   * @example
   * job-4065bee3-e7aa-49fc-aad2-a8e3a7fd6acd
   */
  sessionId?: string;
  /**
   * @remarks
   * The time range for filtering web pages by publish time.
   * 
   * @example
   * OneWeek
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      industry: 'industry',
      query: 'query',
      sessionId: 'sessionId',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industry: 'string',
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

