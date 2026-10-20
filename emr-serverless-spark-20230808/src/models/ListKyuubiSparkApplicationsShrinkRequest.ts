// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKyuubiSparkApplicationsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Spark application submitted by Kyuubi, used for search.
   * 
   * @example
   * spark-339f844005b6404c95f9f7c7a13b****
   */
  applicationId?: string;
  /**
   * @remarks
   * The name of the Spark application submitted by Kyuubi, used for search.
   * 
   * @example
   * kyuubi-connection-spark-sql-anonymous-fa9a5e73-b4b1-474a-b****
   */
  applicationName?: string;
  /**
   * @remarks
   * The end time range of the task.
   */
  endTimeShrink?: string;
  /**
   * @remarks
   * The list of statuses of the latest SQL statement used for filtering.
   * 
   * @example
   * ["SUCCESS"]
   */
  latestSqlStatementStatuses?: string;
  /**
   * @remarks
   * The maximum number of records to retrieve at a time.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The minimum execution duration of the application, in milliseconds.
   * 
   * @example
   * 60000
   */
  minDuration?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of sort fields.
   */
  orderByShrink?: string;
  /**
   * @remarks
   * The resource queue ID used to filter Spark applications.
   * 
   * @example
   * root_queue
   */
  resourceQueueId?: string;
  /**
   * @remarks
   * The sort order. A value of asc indicates ascending order, and desc indicates descending order.
   * 
   * @example
   * asc
   */
  sort?: string;
  /**
   * @remarks
   * The start time range of the task.
   */
  startTimeShrink?: string;
  /**
   * @remarks
   * The list of Spark application states used for filtering.
   * 
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

