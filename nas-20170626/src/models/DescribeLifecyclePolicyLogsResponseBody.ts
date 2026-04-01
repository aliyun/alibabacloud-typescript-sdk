// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsRetrieveRules extends $dara.Model {
  /**
   * @example
   * RetrieveType
   */
  attribute?: string;
  /**
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
   * @example
   * Atime
   */
  attribute?: string;
  /**
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
   * @example
   * 2025-10-20T02:25:07Z
   */
  createTime?: string;
  paths?: string[];
  retrieveRules?: DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogsRetrieveRules[];
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  summary?: string;
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
  lifecyclePolicyLogs?: DescribeLifecyclePolicyLogsResponseBodyLifecyclePolicyLogs[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

