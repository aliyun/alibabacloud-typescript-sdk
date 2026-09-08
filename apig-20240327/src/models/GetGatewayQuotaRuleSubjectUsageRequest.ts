// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayQuotaRuleSubjectUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for querying consumption record details, in UNIX timestamp format (seconds). If only this parameter is specified, the system automatically calculates startTime based on the rule cycle.
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
   * The page number of the detailed consumption (request) records of the subject within the cycle.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of detailed consumption (request) records per page for the subject within the cycle. Maximum value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time for querying consumption record details, in UNIX timestamp format (seconds). If only this parameter is specified, the system automatically calculates endTime based on the rule cycle.
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

