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
   * The end date of the query in `YYYY-MM-DD` format. You can query data within the last 90 days.
   * 
   * @example
   * 2026-04-19
   */
  endDate?: string;
  /**
   * @remarks
   * The number of entries to return. The default value is 5, and the maximum value is 200.
   * 
   * @example
   * 8
   */
  limit?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. You can obtain this token from the response to the previous request.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The start date of the query in `YYYY-MM-DD` format. You can query data within the last 90 days.
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

