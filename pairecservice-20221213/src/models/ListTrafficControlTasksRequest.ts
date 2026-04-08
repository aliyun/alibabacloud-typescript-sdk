// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficControlTasksRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  all?: boolean;
  /**
   * @example
   * All
   */
  controlTargetFilter?: string;
  /**
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @example
   * task_1
   */
  name?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 1
   */
  trafficControlTaskId?: string;
  /**
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

