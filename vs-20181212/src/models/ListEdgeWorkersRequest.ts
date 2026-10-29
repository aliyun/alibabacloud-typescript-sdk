// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeWorkersRequest extends $dara.Model {
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
  hiveIds?: string[];
  /**
   * @remarks
   * The list of workload IDs.
   * 
   * @example
   * ew-xxxxxx
   */
  instanceIds?: string[];
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
  planIds?: string[];
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
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      hiveIds: 'HiveIds',
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planIds: 'PlanIds',
      spec: 'Spec',
      startTime: 'StartTime',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      hiveIds: { 'type': 'array', 'itemType': 'string' },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      planIds: { 'type': 'array', 'itemType': 'string' },
      spec: 'string',
      startTime: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.hiveIds)) {
      $dara.Model.validateArray(this.hiveIds);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.planIds)) {
      $dara.Model.validateArray(this.planIds);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

