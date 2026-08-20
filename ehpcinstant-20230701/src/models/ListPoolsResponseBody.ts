// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoolsResponseBodyPoolListTags extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestValue
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

export class ListPoolsResponseBodyPoolList extends $dara.Model {
  /**
   * @remarks
   * The time when the resource pool was created.
   * 
   * @example
   * 2026-04-20 11:09:59
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the resource pool is the default pool. Valid values:
   * 
   * - **true**: The resource pool is the default pool.
   * 
   * - **false**: The resource pool is not the default pool.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The number of running executor nodes in the resource pool.
   * 
   * @example
   * 100
   */
  maxExecutorNum?: number;
  /**
   * @remarks
   * The name of the resource pool.
   * 
   * - Maximum length: 15 characters.
   * 
   * - Allowed characters: digits, letters, underscores (_), and periods (.).
   * 
   * @example
   * PoolTest
   */
  poolName?: string;
  /**
   * @remarks
   * The priority of the resource pool.
   * 
   * - Valid values: 1 to 99. Default value: 1 (lowest priority).
   * 
   * - Jobs in a resource pool with a higher priority are scheduled before those in a pool with a lower priority. The pool\\"s priority overrides the priority of an individual job.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the scheduling policy.
   * 
   * @example
   * policy-xxx
   */
  schedulingPolicyId?: string;
  /**
   * @remarks
   * The status of the resource pool. Valid values:
   * 
   * - Creating: The resource pool is being created.
   * 
   * - Updating: The resource pool is being updated.
   * 
   * - Deleting: The resource pool is being deleted.
   * 
   * - Working: The resource pool is operational.
   * 
   * - Deleted: The resource pool has been deleted.
   * 
   * @example
   * Working
   */
  status?: string;
  tags?: ListPoolsResponseBodyPoolListTags[];
  /**
   * @remarks
   * The time when the resource pool was last updated.
   * 
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': ListPoolsResponseBodyPoolListTags },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
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
   * The number of entries returned per page. Maximum value: 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * An array of resource pools.
   */
  poolList?: ListPoolsResponseBodyPoolList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

