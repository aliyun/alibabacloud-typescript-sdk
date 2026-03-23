// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKyuubiSparkApplicationsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that is submitted by using a Kyuubi gateway.
   * 
   * @example
   * spark-339f844005b6404c95f9f7c7a13b****
   */
  applicationId?: string;
  /**
   * @remarks
   * The name of the Spark application that is submitted by using a Kyuubi gateway.
   * 
   * @example
   * kyuubi-connection-spark-sql-anonymous-fa9a5e73-b4b1-474a-b****
   */
  applicationName?: string;
  endTimeShrink?: string;
  /**
   * @example
   * ["SUCCESS"]
   */
  latestSqlStatementStatuses?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 60000
   */
  minDuration?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  orderByShrink?: string;
  /**
   * @example
   * root_queue
   */
  resourceQueueId?: string;
  /**
   * @example
   * asc
   */
  sort?: string;
  /**
   * @remarks
   * The range of start time.
   */
  startTimeShrink?: string;
  /**
   * @example
   * ["ERROR"]
   */
  states?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'applicationId',
      applicationName: 'applicationName',
      endTimeShrink: 'endTime',
      latestSqlStatementStatuses: 'latestSqlStatementStatuses',
      maxResults: 'maxResults',
      minDuration: 'minDuration',
      nextToken: 'nextToken',
      orderByShrink: 'orderBy',
      resourceQueueId: 'resourceQueueId',
      sort: 'sort',
      startTimeShrink: 'startTime',
      states: 'states',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      endTimeShrink: 'string',
      latestSqlStatementStatuses: 'string',
      maxResults: 'number',
      minDuration: 'number',
      nextToken: 'string',
      orderByShrink: 'string',
      resourceQueueId: 'string',
      sort: 'string',
      startTimeShrink: 'string',
      states: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

