// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTimingSyntheticTasksRequestSearch extends $dara.Model {
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * AlibabaCloud DNS Task
   */
  name?: string;
  /**
   * @remarks
   * The order by which tasks are sorted. 1: ascending order. -1: descending order.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The condition by which tasks are sorted. You can sort tasks by gmtCreate, gmtModified, status, or monitorCount.
   * 
   * @example
   * status
   */
  orderField?: string;
  /**
   * @remarks
   * The page number. This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The task status. CREATING: The task is being created. RUNNING: The task is running. PARTIAL_RUNNING: The task is partially running. STOP: The task is stopped. LIMIT_STOP: The task is stopped due to quota limit. EXCEPTION: The task is abnormal. DELETE: The task is deleted. DELETE_EXCEPTION: An exception occurs while deleting the task.
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * The task IDs.
   */
  taskIds?: string[];
  /**
   * @remarks
   * The task types.
   */
  taskTypes?: number[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      order: 'Order',
      orderField: 'OrderField',
      page: 'Page',
      pageSize: 'PageSize',
      status: 'Status',
      taskIds: 'TaskIds',
      taskTypes: 'TaskTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      order: 'number',
      orderField: 'string',
      page: 'number',
      pageSize: 'number',
      status: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      taskTypes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    if(Array.isArray(this.taskTypes)) {
      $dara.Model.validateArray(this.taskTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimingSyntheticTasksRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * mark
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1111
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimingSyntheticTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The search keyword.
   */
  search?: ListTimingSyntheticTasksRequestSearch;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListTimingSyntheticTasksRequestTags[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      search: 'Search',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      search: ListTimingSyntheticTasksRequestSearch,
      tags: { 'type': 'array', 'itemType': ListTimingSyntheticTasksRequestTags },
    };
  }

  validate() {
    if(this.search && typeof (this.search as any).validate === 'function') {
      (this.search as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

