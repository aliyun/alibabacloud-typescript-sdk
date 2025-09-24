// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSavingsPlansCoverageTotalRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account for which you want to query coverage summary. If you do not set this parameter, the data of the current Alibaba Cloud account and its RAM users is queried. To query the data of a RAM user, specify the ID of the RAM user.
   * 
   * @example
   * 123745698925000
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The end of the time range to query. The end is excluded from the time range. If you do not set this parameter, the end time is the current time. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-07-20 00:00:00
   */
  endPeriod?: string;
  /**
   * @remarks
   * The time granularity at which coverage summary are queried. Valid values: MONTH, DAY, and HOUR.
   * 
   * This parameter is required.
   * 
   * @example
   * HOUR
   */
  periodType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The beginning is included in the time range. Specify the time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-07-15 00:00:00
   */
  startPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      startPeriod: 'StartPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      periodType: 'string',
      startPeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

