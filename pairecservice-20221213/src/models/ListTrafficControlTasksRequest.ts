// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficControlTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return all results without pagination.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The filter for traffic control targets. Valid values:
   * 
   * - `All`: Returns all traffic control targets.
   * 
   * - `Valid`: Returns only active traffic control targets. A traffic control target is active if the current time is within the specified start and end time.
   * 
   * - `None`: Does not return any traffic control targets.
   * 
   * @example
   * All
   */
  controlTargetFilter?: string;
  /**
   * @remarks
   * The environment. Valid values:
   * 
   * - `Daily`: the daily environment
   * 
   * - `Pre`: the pre-production environment
   * 
   * - `Prod`: the production environment
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID. You can obtain this ID by calling the [ListInstances](https://icms.alibaba-inc.com/content/learn/pai?l=1\\&m=16768\\&n=4300782) operation.
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
   * The sort order. Valid values:
   * 
   * - `ASC`: ascending order
   * 
   * - `DESC`: descending order
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
   * The ID of the scene. You can obtain this ID by calling the [ListScenes](https://help.aliyun.com/document_detail/2402581.html) operation.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The field by which to sort the results. Valid values:
   * 
   * - `GmtCreateTime`: Sorts the results by creation time.
   * 
   * - `GmtModifiedTime`: Sorts the results by modification time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * - `NotRunning`: The task is not running.
   * 
   * - `Ready`: The task is ready to run.
   * 
   * - `Running`: The task is running.
   * 
   * - `Finished`: The task is finished.
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
   * - `Latest`: The latest version. This is the default value.
   * 
   * - `Released`: the released version
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

