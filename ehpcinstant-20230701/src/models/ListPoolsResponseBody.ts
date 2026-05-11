// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoolsResponseBodyPoolList extends $dara.Model {
  /**
   * @example
   * 2026-04-20 11:09:59
   */
  createTime?: string;
  /**
   * @remarks
   * Indices whether the resource pool is the default resource pool. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  maxExecutorNum?: number;
  /**
   * @remarks
   * The name of the resource pool.
   * 
   * *   The value can be up to 15 characters in length.
   * *   It can contain digits, uppercase letters, lowercase letters, underscores (_), and dots (.).
   * 
   * @example
   * PoolTest
   */
  poolName?: string;
  /**
   * @remarks
   * The priority of the resource pool.
   * 
   * *   You can set a priority in the range of 1 to 99. The default value is 1, which is the lowest priority.
   * *   Jobs submitted to a resource pool with a higher priority level value will be scheduled before pending jobs in a resource pool with a lower priority level value, and the priority level of the resource pool takes precedence over the priority of the job.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * policy-xxx
   */
  schedulingPolicyId?: string;
  /**
   * @remarks
   * The status of the resource pool. Valid values:
   * 
   * *   Creating: The resource pool is being created.
   * *   Updating: The resource pool is being updated.
   * *   Deleting: The resource pool is being deleted.
   * *   Working: The resource pool is working.
   * *   Deleted: The resource pool is deleted.
   * 
   * @example
   * Working
   */
  status?: string;
  /**
   * @example
   * 2026-04-20 11:09:59
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      isDefault: 'IsDefault',
      maxExecutorNum: 'MaxExecutorNum',
      poolName: 'PoolName',
      priority: 'Priority',
      schedulingPolicyId: 'SchedulingPolicyId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      isDefault: 'boolean',
      maxExecutorNum: 'number',
      poolName: 'string',
      priority: 'number',
      schedulingPolicyId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on each page. Maximum value: 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Queries the resource pool list.
   */
  poolList?: ListPoolsResponseBodyPoolList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of list entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      poolList: 'PoolList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      poolList: { 'type': 'array', 'itemType': ListPoolsResponseBodyPoolList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.poolList)) {
      $dara.Model.validateArray(this.poolList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

