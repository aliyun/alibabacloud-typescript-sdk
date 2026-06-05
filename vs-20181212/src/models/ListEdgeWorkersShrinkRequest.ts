// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeWorkersShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2025-05-14T15:20:37+08:00
   */
  endTime?: string;
  /**
   * @example
   * ["hive-4fbf3928d40e43948b98acdb4fb5aaed"]
   */
  hiveIdsShrink?: string;
  /**
   * @example
   * ew-xxxxxx
   */
  instanceIdsShrink?: string;
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
  planIdsShrink?: string;
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

