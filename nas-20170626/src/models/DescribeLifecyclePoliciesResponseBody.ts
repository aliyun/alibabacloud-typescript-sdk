// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecyclePoliciesResponseBodyLifecyclePoliciesDeleteRules extends $dara.Model {
  /**
   * @remarks
   * The attribute of the rule.
   * 
   * Valid values:
   * - Atime: The access time of the file.
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
   * - When Attribute is set to Atime, the value indicates the number of days since the file was last accessed. Valid values: 1 to 365.
   * 
   * @example
   * 5
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

export class DescribeLifecyclePoliciesResponseBodyLifecyclePoliciesRetrieveRules extends $dara.Model {
  /**
   * @remarks
   * The attribute of the retrieval rule.
   * 
   * @example
   * RetrieveType
   */
  attribute?: string;
  /**
   * @remarks
   * The threshold of the retrieval rule.
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
   * The attribute of the transit rule.
   * 
   * @example
   * Atime
   */
  attribute?: string;
  /**
   * @remarks
   * The threshold of the transit rule.
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
   * The time when the lifecycle management policy was created.
   * 
   * The time follows the ISO 8601 standard in the format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2019-10-30T10:08:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The file data expiration and deletion rules. A maximum of one rule can be configured.
   */
  deleteRules?: DescribeLifecyclePoliciesResponseBodyLifecyclePoliciesDeleteRules[];
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The file system ID.
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
   * The name of the lifecycle management policy.
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * Auto
   */
  lifecyclePolicyType?: string;
  /**
   * @remarks
   * The management rule associated with the lifecycle management policy.
   * 
   * Valid values:
   * - DEFAULT_ATIME_14: Files not accessed in the last 14 days.
   * - DEFAULT_ATIME_30: Files not accessed in the last 30 days.
   * - DEFAULT_ATIME_60: Files not accessed in the last 60 days.
   * - DEFAULT_ATIME_90: Files not accessed in the last 90 days.
   * 
   * @example
   * DEFAULT_ATIME_14
   */
  lifecycleRuleName?: string;
  /**
   * @remarks
   * The absolute path of the single directory configured in the lifecycle management policy.
   * 
   * @example
   * /pathway/to/folder
   */
  path?: string;
  /**
   * @remarks
   * The list of absolute paths of multiple directories configured in the lifecycle management policy.
   */
  paths?: string[];
  /**
   * @remarks
   * The file data retrieval rules.
   */
  retrieveRules?: DescribeLifecyclePoliciesResponseBodyLifecyclePoliciesRetrieveRules[];
  /**
   * @remarks
   * The storage type. Valid values:
   * - InfrequentAccess: IA storage class.
   * - Archive: Archive storage class.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The file data transit rules.
   */
  transitRules?: DescribeLifecyclePoliciesResponseBodyLifecyclePoliciesTransitRules[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deleteRules: 'DeleteRules',
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
      deleteRules: { 'type': 'array', 'itemType': DescribeLifecyclePoliciesResponseBodyLifecyclePoliciesDeleteRules },
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

export class DescribeLifecyclePoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of lifecycle management policy information.
   */
  lifecyclePolicies?: DescribeLifecyclePoliciesResponseBodyLifecyclePolicies[];
  /**
   * @remarks
   * The page number of the list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of lifecycle management policies on each page.
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
   * The total number of lifecycle management policies.
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

