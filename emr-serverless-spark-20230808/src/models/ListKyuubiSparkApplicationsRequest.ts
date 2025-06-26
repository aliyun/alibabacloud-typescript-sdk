// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListKyuubiSparkApplicationsRequestStartTime } from "./ListKyuubiSparkApplicationsRequestStartTime";


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
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
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
  resourceQueueId?: string;
  sort?: string;
  /**
   * @remarks
   * The range of start time.
   */
  startTime?: ListKyuubiSparkApplicationsRequestStartTime;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'applicationId',
      applicationName: 'applicationName',
      maxResults: 'maxResults',
      minDuration: 'minDuration',
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      resourceQueueId: 'resourceQueueId',
      sort: 'sort',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      maxResults: 'number',
      minDuration: 'number',
      nextToken: 'string',
      orderBy: { 'type': 'array', 'itemType': 'string' },
      resourceQueueId: 'string',
      sort: 'string',
      startTime: ListKyuubiSparkApplicationsRequestStartTime,
    };
  }

  validate() {
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

