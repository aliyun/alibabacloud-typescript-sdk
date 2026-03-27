// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggTaskGroupsResponseBodyAggTaskGroups extends $dara.Model {
  /**
   * @remarks
   * Hash of the aggregation task group configuration.
   * 
   * @example
   * a54136014xxx
   */
  aggTaskGroupConfigHash?: string;
  /**
   * @remarks
   * ID of the aggregation task group.
   * 
   * @example
   * aggTaskGroup-xxxx
   */
  aggTaskGroupId?: string;
  /**
   * @remarks
   * Name of the aggregation task group.
   * 
   * @example
   * pipeline-aggtask-group
   */
  aggTaskGroupName?: string;
  /**
   * @remarks
   * Cron expression for the aggregation task group when the scheduling mode is set to \\"Cron\\".
   * 
   * @example
   * 0 10 8 1 * ? *
   */
  cronExpr?: string;
  /**
   * @remarks
   * Fixed delay time (in seconds) for scheduling.
   * 
   * @example
   * 30
   */
  delay?: number;
  /**
   * @remarks
   * Description of the aggregation task group.
   * 
   * @example
   * workspace api monitor update test
   */
  description?: string;
  /**
   * @remarks
   * Start time of the schedule in seconds since epoch.
   * 
   * @example
   * 1757409499000
   */
  fromTime?: number;
  /**
   * @remarks
   * Scheduling interval.
   * 
   * @example
   * 2025-04-24 00:00:00,2025-04-24 00:00:00
   */
  interval?: string;
  /**
   * @remarks
   * Maximum number of retries for the aggregation task.
   * 
   * @example
   * 2
   */
  maxRetries?: number;
  /**
   * @remarks
   * Maximum retry time (in seconds) for the aggregation task.
   * 
   * @example
   * 200
   */
  maxRunTimeInSeconds?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Scheduling mode.
   * 
   * @example
   * FixedRate
   */
  scheduleMode?: string;
  /**
   * @remarks
   * Scheduling time expression.
   * 
   * @example
   * @m
   */
  scheduleTimeExpr?: string;
  /**
   * @remarks
   * The source Prometheus instance ID of the aggregation task group.
   * 
   * @example
   * rw-xxx
   */
  sourcePrometheusId?: string;
  /**
   * @remarks
   * Status of the aggregation task group.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The target Prometheus instance ID of the aggregation task group.
   * 
   * @example
   * rw-xxx
   */
  targetPrometheusId?: string;
  /**
   * @remarks
   * The second-level timestamp corresponding to the end time of scheduling.
   * 
   * @example
   * 0
   */
  toTime?: number;
  /**
   * @remarks
   * Update time of the aggregation task group.
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
   * List of aggregation task groups.
   */
  aggTaskGroups?: ListAggTaskGroupsResponseBodyAggTaskGroups[];
  /**
   * @remarks
   * The maximum number of records returned.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next query.
   * 
   * @example
   * aa9d0e569b880xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7BF1F4D6-B9A8-5F0B-8C1D-4347FFCB798E
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of instances.
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

