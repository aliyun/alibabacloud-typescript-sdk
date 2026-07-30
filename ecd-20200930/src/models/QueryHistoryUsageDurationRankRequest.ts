// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryUsageDurationRankRequest extends $dara.Model {
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The end date of the query. Format: YYYY-MM-DD. Supports querying data within a maximum of 90 days.
   * 
   * @example
   * 2026-04-19
   */
  endDate?: string;
  /**
   * @remarks
   * The number of results to return. Default value: 5. Maximum value: 200.
   * 
   * @example
   * 8
   */
  limit?: number;
  /**
   * @remarks
   * The paging token for the next query. Obtained from the previous response.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The start date of the query. Format: YYYY-MM-DD. Supports querying data within a maximum of 90 days.
   * 
   * @example
   * 2026-05-07
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      endDate: 'EndDate',
      limit: 'Limit',
      nextToken: 'NextToken',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      endDate: 'string',
      limit: 'number',
      nextToken: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

