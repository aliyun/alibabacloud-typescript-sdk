// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationScoreHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member. This parameter takes effect only when a multi-account governance maturity check is performed.
   * 
   * @example
   * 176618589410****
   */
  accountId?: number;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the YYYY-MM-DD format.
   * 
   * By default, the historical scores that were generated in the seven days before the current date are queried.
   * 
   * @example
   * 2024-07-11
   */
  endDate?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the YYYY-MM-DD format.
   * 
   * You can query the historical scores within the previous 180 days.
   * 
   * @example
   * 2024-06-11
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      endDate: 'EndDate',
      regionId: 'RegionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      endDate: 'string',
      regionId: 'string',
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

