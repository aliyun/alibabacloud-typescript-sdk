// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryUsageDurationRankRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @example
   * 2026-04-19
   */
  endDate?: string;
  /**
   * @example
   * 8
   */
  limit?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
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

