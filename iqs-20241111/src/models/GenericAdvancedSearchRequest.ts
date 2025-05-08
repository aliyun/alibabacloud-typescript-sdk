// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenericAdvancedSearchRequest extends $dara.Model {
  industry?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  /**
   * @example
   * job-4065bee3-e7aa-49fc-aad2-a8e3a7fd6acd
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

