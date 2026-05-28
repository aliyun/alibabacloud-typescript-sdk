// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Histogram extends $dara.Model {
  /**
   * @remarks
   * The number of logs that are generated during the subinterval.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The start time of the subinterval. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1409529600
   */
  from?: number;
  /**
   * @remarks
   * Indicates whether the query result in the subinterval is complete. Valid values:
   * 
   * *   Complete: The query is successful, and the complete result is returned.
   * *   Incomplete: The query is successful, but the query result is incomplete. To obtain the complete result, you must repeat the request.
   * 
   * @example
   * Complete
   */
  progress?: string;
  /**
   * @remarks
   * The end time of the subinterval. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1409569200
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      from: 'from',
      progress: 'progress',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      from: 'number',
      progress: 'string',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

