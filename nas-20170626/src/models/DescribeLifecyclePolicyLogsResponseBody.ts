// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsRetrieveRules extends $dara.Model {
  /**
   * @remarks
   * The attribute of the rule. Valid value:
   * 
   * - `RetrieveType`: The retrieval method.
   * 
   * @example
   * RetrieveType
   */
  attribute?: string;
  /**
   * @remarks
   * The threshold of the rule. Valid values:
   * 
   * - If `Attribute` is set to `RetrieveType`:
   * 
   *   - `AfterVisit`: Data is retrieved on a best-effort basis when accessed. This value is available only if `LifecyclePolicyType` is set to `Auto`.
   * 
   *   - `All`: All data is retrieved. This value is available only if `LifecyclePolicyType` is set to `OnDemand`.
   * 
   * @example
   * All
   */
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsTransitRules extends $dara.Model {
  /**
   * @remarks
   * The attribute of the rule.
   * 
   * Valid value:
   * 
   * - `Atime`: The last access time of a file.
   * 
   * @example
   * Atime
   */
  attribute?: string;
  /**
   * @remarks
   * The rule threshold.
   * 
   * Valid values:
   * 
   * - If `Attribute` is set to `Atime`, this parameter specifies the number of days since a file was last accessed. The value must be an integer from 1 to 365.
   * 
   * @example
   * 3
   */
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogs extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time is displayed in UTC and is in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2025-10-20T02:25:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The execution paths of the task.
   */
  paths?: string[];
  /**
   * @remarks
   * The retrieval rules for file data.
   */
  retrieveRules?: DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsRetrieveRules[];
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * - `PENDING`: The task is initializing.
   * 
   * - `RUNNING`: The task is running.
   * 
   * - `STOPPED`: The task is stopped.
   * 
   * - `FINISHED`: The task is complete.
   * 
   * - `FAILED`: The task failed.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The storage tier. Valid values:
   * 
   * - `InfrequentAccess`: Infrequent Access (default).
   * 
   * - `Archive`: Archive Storage.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The task summary.
   * 
   * @example
   * Total tasks: 100000, success tasks: 100000
   */
  summary?: string;
  /**
   * @remarks
   * The transition rules for file data.
   */
  transitRules?: DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsTransitRules[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      paths: 'Paths',
      retrieveRules: 'RetrieveRules',
      status: 'Status',
      storageType: 'StorageType',
      summary: 'Summary',
      transitRules: 'TransitRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      retrieveRules: { 'type': 'array', 'itemType': DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsRetrieveRules },
      status: 'string',
      storageType: 'string',
      summary: 'string',
      transitRules: { 'type': 'array', 'itemType': DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsTransitRules },
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    if(Array.isArray(this.retrieveRules)) {
      $dara.Model.validateArray(this.retrieveRules);
    }
    if(Array.isArray(this.transitRules)) {
      $dara.Model.validateArray(this.transitRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecyclePolicyLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution logs of the lifecycle policy.
   */
  lifecyclePolicyLogs?: DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogs[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the request succeeded.
   * 
   * Valid values:
   * 
   * - `true`: The request succeeded.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of logs.
   * 
   * @example
   * 36
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lifecyclePolicyLogs: 'LifecyclePolicyLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecyclePolicyLogs: { 'type': 'array', 'itemType': DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lifecyclePolicyLogs)) {
      $dara.Model.validateArray(this.lifecyclePolicyLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

