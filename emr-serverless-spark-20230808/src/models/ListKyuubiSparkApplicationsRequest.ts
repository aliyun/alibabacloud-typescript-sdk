// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKyuubiSparkApplicationsRequestEndTime extends $dara.Model {
  /**
   * @remarks
   * The end point of the task end time range. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1774209636
   */
  endTime?: number;
  /**
   * @remarks
   * The start point of the task end time range. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1774209636
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
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

export class ListKyuubiSparkApplicationsRequestStartTime extends $dara.Model {
  /**
   * @remarks
   * The end point of the task start time range. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @remarks
   * The start point of the task start time range. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1709740800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
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

export class ListKyuubiSparkApplicationsRequest extends $dara.Model {
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
  endTime?: ListKyuubiSparkApplicationsRequestEndTime;
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
  orderBy?: string[];
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
  startTime?: ListKyuubiSparkApplicationsRequestStartTime;
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
      endTime: 'endTime',
      latestSqlStatementStatuses: 'latestSqlStatementStatuses',
      maxResults: 'maxResults',
      minDuration: 'minDuration',
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      resourceQueueId: 'resourceQueueId',
      sort: 'sort',
      startTime: 'startTime',
      states: 'states',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      endTime: ListKyuubiSparkApplicationsRequestEndTime,
      latestSqlStatementStatuses: 'string',
      maxResults: 'number',
      minDuration: 'number',
      nextToken: 'string',
      orderBy: { 'type': 'array', 'itemType': 'string' },
      resourceQueueId: 'string',
      sort: 'string',
      startTime: ListKyuubiSparkApplicationsRequestStartTime,
      states: 'string',
    };
  }

  validate() {
    if(this.endTime && typeof (this.endTime as any).validate === 'function') {
      (this.endTime as any).validate();
    }
    if(Array.isArray(this.orderBy)) {
      $dara.Model.validateArray(this.orderBy);
    }
    if(this.startTime && typeof (this.startTime as any).validate === 'function') {
      (this.startTime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

