// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistogramsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The start time of the subinterval. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the from parameter, but does not include the end time specified by the to parameter. If you specify the same value for the from and to parameters, the interval is invalid, and an error message is returned.
   * 
   * @example
   * 1409529600
   */
  from?: number;
  /**
   * @remarks
   * The end time of the subinterval. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the from parameter, but does not include the end time specified by the to parameter. If you specify the same value for the from and to parameters, the interval is invalid, and an error message is returned.
   * 
   * @example
   * 1409569200
   */
  to?: number;
  /**
   * @remarks
   * The number of logs that are generated within the subinterval.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * Indicates whether the query and analysis results in the subinterval is complete. Valid values:
   * 
   * Complete: The query is successful, and the complete query and analysis results are returned.
   * 
   * Incomplete: The query is successful, but the query and analysis results are incomplete. To obtain the complete results, you must repeat the request.
   * 
   * @example
   * Complete
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      to: 'to',
      count: 'count',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
      count: 'number',
      progress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

