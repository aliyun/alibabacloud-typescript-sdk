// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeWorkersRequest extends $dara.Model {
  /**
   * @example
   * 2025-05-14T15:20:37+08:00
   */
  endTime?: string;
  /**
   * @example
   * ["hive-4fbf3928d40e43948b98acdb4fb5aaed"]
   */
  hiveIds?: string[];
  /**
   * @example
   * ew-xxxxxx
   */
  instanceIds?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * ["pk-4fbf3928d40e43948b98acdb4fb5aaed"]
   */
  planIds?: string[];
  /**
   * @example
   * ew.gn8t6xlarge-rb.x1p
   */
  spec?: string;
  /**
   * @example
   * 2026-05-25T06:35:26+08:00
   */
  startTime?: string;
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

