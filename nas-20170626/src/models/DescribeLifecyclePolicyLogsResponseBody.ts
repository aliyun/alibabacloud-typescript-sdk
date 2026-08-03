// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsDeleteRules extends $dara.Model {
  /**
   * @remarks
   * The attribute of the rule.
   * 
   * Valid values:
   * - Atime: the access time of the file.
   */
  attribute?: string;
  /**
   * @remarks
   * The threshold of the rule.
   * 
   * Valid values:
   * - If Attribute is set to Atime, this parameter specifies the number of days since the file was last accessed. Valid values: 1 to 365.
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

export class DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsRetrieveRules extends $dara.Model {
  /**
   * @remarks
   * The attribute of the rule. Valid values:
   * - RetrieveType: the retrieval method.
   * 
   * @example
   * RetrieveType
   */
  attribute?: string;
  /**
   * @remarks
   * The threshold of the rule. Valid values:
   * - RetrieveType
   *     - AfterVisit: Supported when LifecyclePolicyType=Auto. Indicates best-effort recall on visit.
   *     - All: Supported when LifecyclePolicyType=OnDemand. Indicates retrieving all data.
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
   * Valid values:
   * - Atime: the access time of the file.
   * 
   * @example
   * Atime
   */
  attribute?: string;
  /**
   * @remarks
   * The threshold of the rule.
   * 
   * Valid values:
   * - If Attribute is set to Atime, this parameter specifies the number of days since the file was last accessed. Valid values: 1 to 365.
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
   * The time when the task was created. The time follows the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-10-20T02:25:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The file data expiration and deletion rules. A maximum of one rule can be configured.
   */
  deleteRules?: DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsDeleteRules[];
  /**
   * @remarks
   * The execution paths of the specified retrieval task.
   */
  paths?: string[];
  /**
   * @remarks
   * The file data retrieval rules.
   */
  retrieveRules?: DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsRetrieveRules[];
  /**
   * @remarks
   * The status of the data retrieval task. Valid values:
   * - PENDING: Being created.
   * - RUNNING: Running.
   * - STOPPED: Stopped.
   * - FINISHED: Finished.
   * - FAILED: Failed.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The tiered storage type. Valid values:
   * - InfrequentAccess: IA storage class (default).
   * - Archive: Archive storage.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The task overview.
   * 
   * @example
   * Total tasks: 100000, success tasks: 100000
   */
  summary?: string;
  /**
   * @remarks
   * The file data transit rules.
   */
  transitRules?: DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsTransitRules[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deleteRules: 'DeleteRules',
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
      deleteRules: { 'type': 'array', 'itemType': DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsDeleteRules },
      paths: { 'type': 'array', 'itemType': 'string' },
      retrieveRules: { 'type': 'array', 'itemType': DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsRetrieveRules },
      status: 'string',
      storageType: 'string',
      summary: 'string',
      transitRules: { 'type': 'array', 'itemType': DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsTransitRules },
    };
  }

  validate() {
    if(Array.isArray(this.deleteRules)) {
      $dara.Model.validateArray(this.deleteRules);
    }
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
   * The number of log entries per page.
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
   * The request status.
   * 
   * Valid values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of log entries.
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

