// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecyclePoliciesResponseBodyLifecyclePoliciesRetrieveRules extends $dara.Model {
  /**
   * @remarks
   * Attribute of the rule.
   * 
   * @example
   * RetrieveType
   */
  attribute?: string;
  /**
   * @remarks
   * Threshold for the rule.
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

export class DescribeLifecyclePoliciesResponseBodyLifecyclePoliciesTransitRules extends $dara.Model {
  /**
   * @remarks
   * Attribute of the rule.
   * 
   * @example
   * Atime
   */
  attribute?: string;
  /**
   * @remarks
   * Threshold for the rule.
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

export class DescribeLifecyclePoliciesResponseBodyLifecyclePolicies extends $dara.Model {
  /**
   * @remarks
   * The time when the lifecycle policy was created.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2019-10-30T10:08:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the lifecycle policy.
   * 
   * @example
   * lc-xxx
   */
  lifecyclePolicyId?: string;
  /**
   * @remarks
   * The name of the lifecycle policy.
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
  /**
   * @remarks
   * The type of the lifecycle policy.
   * 
   * @example
   * Auto
   */
  lifecyclePolicyType?: string;
  /**
   * @remarks
   * The management rule that is associated with the lifecycle policy.
   * 
   * Valid values:
   * 
   * *   DEFAULT_ATIME_14: Files that are not accessed in the last 14 days.
   * *   DEFAULT_ATIME_30: Files that are not accessed in the last 30 days.
   * *   DEFAULT_ATIME_60: Files that are not accessed in the last 60 days.
   * *   DEFAULT_ATIME_90: Files that are not accessed in the last 90 days.
   * 
   * @example
   * DEFAULT_ATIME_14
   */
  lifecycleRuleName?: string;
  /**
   * @remarks
   * The absolute path of a directory with which the lifecycle policy is associated.
   * 
   * @example
   * /pathway/to/folder
   */
  path?: string;
  /**
   * @remarks
   * The absolute paths of directories with which the lifecycle policy is associated.
   */
  paths?: string[];
  /**
   * @remarks
   * File data retrieval rules.
   */
  retrieveRules?: DescribeLifecyclePoliciesResponseBodyLifecyclePoliciesRetrieveRules[];
  /**
   * @remarks
   * The storage class.
   * 
   * *   InfrequentAccess: the IA storage class.
   * *   Archive: the Archive storage class.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * Data transition rules.
   */
  transitRules?: DescribeLifecyclePoliciesResponseBodyLifecyclePoliciesTransitRules[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      lifecyclePolicyId: 'LifecyclePolicyId',
      lifecyclePolicyName: 'LifecyclePolicyName',
      lifecyclePolicyType: 'LifecyclePolicyType',
      lifecycleRuleName: 'LifecycleRuleName',
      path: 'Path',
      paths: 'Paths',
      retrieveRules: 'RetrieveRules',
      storageType: 'StorageType',
      transitRules: 'TransitRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      fileSystemId: 'string',
      lifecyclePolicyId: 'string',
      lifecyclePolicyName: 'string',
      lifecyclePolicyType: 'string',
      lifecycleRuleName: 'string',
      path: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      retrieveRules: { 'type': 'array', 'itemType': DescribeLifecyclePoliciesResponseBodyLifecyclePoliciesRetrieveRules },
      storageType: 'string',
      transitRules: { 'type': 'array', 'itemType': DescribeLifecyclePoliciesResponseBodyLifecyclePoliciesTransitRules },
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

export class DescribeLifecyclePoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried lifecycle policies.
   */
  lifecyclePolicies?: DescribeLifecyclePoliciesResponseBodyLifecyclePolicies[];
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
   * The total number of lifecycle policies.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lifecyclePolicies: 'LifecyclePolicies',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecyclePolicies: { 'type': 'array', 'itemType': DescribeLifecyclePoliciesResponseBodyLifecyclePolicies },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lifecyclePolicies)) {
      $dara.Model.validateArray(this.lifecyclePolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

