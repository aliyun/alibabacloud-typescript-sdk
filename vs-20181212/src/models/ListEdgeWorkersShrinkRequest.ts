// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeWorkersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required for renewal scenarios.
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
   * The list of payload IDs.
   * 
   * @example
   * ew-xxxxxx
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The page number of the query. The value starts from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. The maximum value is 100. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of package IDs.
   * 
   * @example
   * ["pk-4fbf3928d40e43948b98acdb4fb5aaed"]
   */
  planIdsShrink?: string;
  /**
   * @remarks
   * Specification
   * 
   * @example
   * ew.gn8t6xlarge-rb.x1p
   */
  spec?: string;
  /**
   * @remarks
   * The parameter for filtering by time range. The time must be in ISO 8601 format and use UTC. The format is yyyy-MM-ddTHH:mm:ssZ.
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

