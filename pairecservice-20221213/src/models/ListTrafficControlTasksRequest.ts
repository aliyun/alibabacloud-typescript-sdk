// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficControlTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return all data without pagination.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The filter for traffic control targets. Valid values:
   * 
   * - All: all targets.
   * 
   * - Valid: valid targets (in the enabling status within the start and end time period).
   * 
   * - None: no targets.
   * 
   * @example
   * All
   */
  controlTargetFilter?: string;
  /**
   * @remarks
   * The runtime environment. Valid values:
   * 
   * - Daily: daily environment.
   * 
   * - Pre: pre-release environment.
   * 
   * - Prod: production environment.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID. You can obtain the ID by calling the [ListInstances](https://icms.alibaba-inc.com/content/learn/pai?l=1&m=16768&n=4300782) operation.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the traffic control task.
   * 
   * @example
   * task_1
   */
  name?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * - ASC: ascending order.
   * - DESC: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the scene. You can obtain the ID by calling the [ListScenes](https://help.aliyun.com/document_detail/2402581.html) operation.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The sorting criterion. Valid values:
   * - GmtCreateTime: creation time.
   * - GmtModifiedTime: update time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - NotRunning: not running.
   * 
   * - Ready: pending.
   * 
   * - Running: running.
   * 
   * - Finished: finished.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the traffic control task.
   * 
   * @example
   * 1
   */
  trafficControlTaskId?: string;
  /**
   * @remarks
   * The version. Valid values:
   * 
   * - Latest: latest version. Default value.
   * 
   * - Released: released version.
   * 
   * @example
   * Latest
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      controlTargetFilter: 'ControlTargetFilter',
      environment: 'Environment',
      instanceId: 'InstanceId',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      sortBy: 'SortBy',
      status: 'Status',
      trafficControlTaskId: 'TrafficControlTaskId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      controlTargetFilter: 'string',
      environment: 'string',
      instanceId: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sceneId: 'string',
      sortBy: 'string',
      status: 'string',
      trafficControlTaskId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

