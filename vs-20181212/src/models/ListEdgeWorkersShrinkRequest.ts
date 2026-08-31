// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeWorkersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2025-05-14T15:20:37+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The cluster ID list.
   * 
   * @example
   * ["hive-4fbf3928d40e43948b98acdb4fb5aaed"]
   */
  hiveIdsShrink?: string;
  /**
   * @remarks
   * The workload ID list.
   * 
   * @example
   * ew-xxxxxx
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The page number of the query list. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paginated query. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The plan ID list.
   * 
   * @example
   * ["pk-4fbf3928d40e43948b98acdb4fb5aaed"]
   */
  planIdsShrink?: string;
  /**
   * @remarks
   * The specification.
   * 
   * @example
   * ew.gn8t6xlarge-rb.x1p
   */
  spec?: string;
  /**
   * @remarks
   * The start time for time range filtering. Specify the time in the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-05-25T06:35:26+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status list.
   */
  statusesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      hiveIdsShrink: 'HiveIds',
      instanceIdsShrink: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planIdsShrink: 'PlanIds',
      spec: 'Spec',
      startTime: 'StartTime',
      statusesShrink: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      hiveIdsShrink: 'string',
      instanceIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      planIdsShrink: 'string',
      spec: 'string',
      startTime: 'string',
      statusesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

