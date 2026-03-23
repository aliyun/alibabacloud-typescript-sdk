// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKyuubiSparkApplicationsRequestEndTime extends $dara.Model {
  /**
   * @example
   * 1774209636
   */
  endTime?: number;
  /**
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
   * The end of the start time range.
   * 
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @remarks
   * The beginning of the start time range.
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
  endTime?: ListKyuubiSparkApplicationsRequestEndTime;
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
  orderBy?: string[];
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
  startTime?: ListKyuubiSparkApplicationsRequestStartTime;
  /**
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

