// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayQuotaRuleSubjectUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for querying detailed consumption records. The time is a UNIX timestamp in seconds. If only this parameter is specified, the system automatically calculates the start time based on the rule period.
   * 
   * @example
   * 1788425220
   */
  endTime?: number;
  /**
   * @remarks
   * Specifies whether to filter out zero values.
   * 
   * @example
   * true
   */
  filterFailedRequests?: boolean;
  /**
   * @remarks
   * The page number of the detailed consumption (request) records for the consumer subject within the period.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for the detailed consumption (request) records of the consumer subject within the period. Maximum value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time for querying detailed consumption records. The time is a UNIX timestamp in seconds. If only this parameter is specified, the system automatically calculates the end time based on the rule period.
   * 
   * @example
   * 1788338820
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      filterFailedRequests: 'filterFailedRequests',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      filterFailedRequests: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

