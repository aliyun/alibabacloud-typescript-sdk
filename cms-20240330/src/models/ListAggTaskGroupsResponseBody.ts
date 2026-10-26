// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggTaskGroupsResponseBodyAggTaskGroups extends $dara.Model {
  /**
   * @remarks
   * The hash of the aggregation task group configuration.
   * 
   * @example
   * a54136014xxx
   */
  aggTaskGroupConfigHash?: string;
  /**
   * @remarks
   * The ID of the aggregation task group.
   * 
   * @example
   * aggTaskGroup-xxxx
   */
  aggTaskGroupId?: string;
  /**
   * @remarks
   * The name of the aggregation task group.
   * 
   * @example
   * pipeline-aggtask-group
   */
  aggTaskGroupName?: string;
  /**
   * @remarks
   * The cron expression of the aggregation task group when the scheduling mode is set to Cron.
   * 
   * @example
   * 0 10 8 1 * ? *
   */
  cronExpr?: string;
  /**
   * @remarks
   * The fixed delay time for scheduling, in seconds.
   * 
   * @example
   * 30
   */
  delay?: number;
  /**
   * @remarks
   * The description of the aggregation task group.
   * 
   * @example
   * workspace api monitor update test
   */
  description?: string;
  /**
   * @remarks
   * The UNIX timestamp of the start time for scheduling, in seconds.
   * 
   * @example
   * 1757409499000
   */
  fromTime?: number;
  /**
   * @remarks
   * The scheduling interval.
   * 
   * @example
   * 2025-04-24 00:00:00,2025-04-24 00:00:00
   */
  interval?: string;
  /**
   * @remarks
   * The maximum number of retries for executing the aggregation task.
   * 
   * @example
   * 2
   */
  maxRetries?: number;
  /**
   * @remarks
   * The maximum retry time to execute the aggregation node, in seconds.
   * 
   * @example
   * 200
   */
  maxRunTimeInSeconds?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scheduling mode.
   * 
   * @example
   * FixedRate
   */
  scheduleMode?: string;
  /**
   * @remarks
   * The scheduling time expression.
   * 
   * @example
   * @m
   */
  scheduleTimeExpr?: string;
  /**
   * @remarks
   * The instance ID of the source Prometheus instance for the aggregation node group.
   * 
   * @example
   * rw-xxx
   */
  sourcePrometheusId?: string;
  /**
   * @remarks
   * The status of the aggregation task group.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The instance ID of the target Prometheus instance for the aggregation node group.
   * 
   * @example
   * rw-xxx
   */
  targetPrometheusId?: string;
  /**
   * @remarks
   * The UNIX timestamp of the end time for scheduling, in seconds.
   * 
   * @example
   * 0
   */
  toTime?: number;
  /**
   * @remarks
   * The update time of the aggregation task group. The value is a UNIX timestamp.
   * 
   * @example
   * 1757409499000
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      aggTaskGroupConfigHash: 'aggTaskGroupConfigHash',
      aggTaskGroupId: 'aggTaskGroupId',
      aggTaskGroupName: 'aggTaskGroupName',
      cronExpr: 'cronExpr',
      delay: 'delay',
      description: 'description',
      fromTime: 'fromTime',
      interval: 'interval',
      maxRetries: 'maxRetries',
      maxRunTimeInSeconds: 'maxRunTimeInSeconds',
      regionId: 'regionId',
      scheduleMode: 'scheduleMode',
      scheduleTimeExpr: 'scheduleTimeExpr',
      sourcePrometheusId: 'sourcePrometheusId',
      status: 'status',
      targetPrometheusId: 'targetPrometheusId',
      toTime: 'toTime',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggTaskGroupConfigHash: 'string',
      aggTaskGroupId: 'string',
      aggTaskGroupName: 'string',
      cronExpr: 'string',
      delay: 'number',
      description: 'string',
      fromTime: 'number',
      interval: 'string',
      maxRetries: 'number',
      maxRunTimeInSeconds: 'number',
      regionId: 'string',
      scheduleMode: 'string',
      scheduleTimeExpr: 'string',
      sourcePrometheusId: 'string',
      status: 'string',
      targetPrometheusId: 'string',
      toTime: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggTaskGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of aggregation task groups.
   */
  aggTaskGroups?: ListAggTaskGroupsResponseBodyAggTaskGroups[];
  /**
   * @remarks
   * The maximum number of records to return.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * aa9d0e569b880xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BF1F4D6-B9A8-5F0B-8C1D-4347FFCB798E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aggTaskGroups: 'aggTaskGroups',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggTaskGroups: { 'type': 'array', 'itemType': ListAggTaskGroupsResponseBodyAggTaskGroups },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.aggTaskGroups)) {
      $dara.Model.validateArray(this.aggTaskGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

