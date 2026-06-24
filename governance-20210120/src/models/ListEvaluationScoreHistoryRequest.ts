// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationScoreHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member accounts. This parameter is applicable only to the multi-account detection pattern.
   * 
   * @example
   * 176618589410****
   */
  accountId?: number;
  /**
   * @remarks
   * The end date of the query. Format: YYYY-MM-DD.
   * 
   * By default, the historical scores from the last 7 days are returned.
   * 
   * @example
   * 2024-07-11
   */
  endDate?: string;
  evaluationDomain?: string;
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
   * The start date of the query. Format: YYYY-MM-DD.
   * 
   * You can query records from the last 180 days.
   * 
   * @example
   * 2024-06-11
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      endDate: 'EndDate',
      evaluationDomain: 'EvaluationDomain',
      regionId: 'RegionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      endDate: 'string',
      evaluationDomain: 'string',
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

