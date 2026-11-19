// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenericAdvancedSearchRequest extends $dara.Model {
  /**
   * @remarks
   * The industry. If you specify this parameter, only website content specific to the specified industry is recalled. Separate multiple industries with commas.
   * 
   * @example
   * medical
   */
  industry?: string;
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
   * The session ID for multi-turn interactions.
   * 
   * @example
   * job-4065bee3-e7aa-49fc-aad2-a8e3a7fd6acd
   */
  sessionId?: string;
  /**
   * @remarks
   * The relative query range for the web page publication time. Valid values: OneDay, OneWeek, OneMonth, OneYear, and NoLimit. A value of NoLimit indicates that no time limit is applied.
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

