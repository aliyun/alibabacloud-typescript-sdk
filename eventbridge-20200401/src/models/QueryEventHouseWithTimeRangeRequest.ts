// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEventHouseWithTimeRangeRequest extends $dara.Model {
  /**
   * @remarks
   * The start time for querying internal EventHouse data. Specify a UNIX timestamp in seconds. The time range includes this point in time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1787587200
   */
  beginTime?: number;
  /**
   * @remarks
   * The end time for querying internal EventHouse data. Specify a UNIX timestamp in seconds. The time range excludes this point in time. The value must be greater than BeginTime.
   * 
   * This parameter is required.
   * 
   * @example
   * 1787590800
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of result rows that can be returned for this query.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The single read-only SQL statement to execute. You can query internal EventHouse data or perform federated queries with mounted external data sources.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * FROM my_catalog.my_namespace.my_table LIMIT 100
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      limit: 'Limit',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      limit: 'number',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

