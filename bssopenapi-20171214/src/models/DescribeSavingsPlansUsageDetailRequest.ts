// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSavingsPlansUsageDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account for which you want to query usage details. If you do not set this parameter, the data of the current Alibaba Cloud account and its RAM users is queried. To query the data of a RAM user, specify the ID of the RAM user.
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
   * 2021-01-02 00:00:00
   */
  endPeriod?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 300
   */
  maxResults?: number;
  /**
   * @remarks
   * The time granularity at which usage details are queried. Valid values: MONTH, DAY, and HOUR.
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
   * 2021-01-01 00:00:00
   */
  startPeriod?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. You do not need to set this parameter if you query usage details within a specific time range for the first time. The response returns a token that you can use to query usage details that are displayed on the next page. If a null value is returned for the NextToken parameter, no more coverage details can be queried.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      maxResults: 'MaxResults',
      periodType: 'PeriodType',
      startPeriod: 'StartPeriod',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      maxResults: 'number',
      periodType: 'string',
      startPeriod: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

