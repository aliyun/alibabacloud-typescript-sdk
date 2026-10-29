// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeWorkersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The time is expressed in the ISO 8601 standard and includes a time zone offset. Format: YYYY-MM-DDTHH:mm:ss+HH:mm.
   * 
   * @example
   * 2025-05-14T15:20:37+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The list of cluster IDs.
   * 
   * @example
   * ["hive-4fbf3928d40e43948b98acdb4fb5aaed"]
   */
  hiveIdsShrink?: string;
  /**
   * @remarks
   * The list of workload IDs.
   * 
   * @example
   * ew-xxxxxx
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The page number of the list to query. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The Settings for the number of lines per page during paging and paged query. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of plan IDs.
   * 
   * @example
   * ["pk-4fbf3928d40e43948b98acdb4fb5aaed"]
   */
  planIdsShrink?: string;
  /**
   * @remarks
   * The specifications.
   * 
   * @example
   * ew.gn8t6xlarge-rb.x1p
   */
  spec?: string;
  /**
   * @remarks
   * The start time of the time range filter. The time is expressed in the ISO 8601 standard and must be in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-05-25T06:35:26+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The list of statuses.
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

