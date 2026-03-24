// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterCheckResultResponseBodyChecksCheckPolicies extends $dara.Model {
  /**
   * @remarks
   * Requirement ID of the check item.
   * 
   * @example
   * 2
   */
  requirementId?: number;
  /**
   * @remarks
   * Display name of the requirement for the check item.
   * 
   * @example
   * Alibaba cloud OSS best security practices
   */
  requirementShowName?: string;
  /**
   * @remarks
   * Section ID of the check item.
   * 
   * @example
   * 3
   */
  sectionId?: number;
  /**
   * @remarks
   * Display name of the section for the check item.
   * 
   * @example
   * Log Audit
   */
  sectionShowName?: string;
  /**
   * @remarks
   * Standard ID of the check item.
   * 
   * @example
   * 1
   */
  standardId?: number;
  /**
   * @remarks
   * Display name of the standard for the check item.
   * 
   * @example
   * Best security practices
   */
  standardShowName?: string;
  static names(): { [key: string]: string } {
    return {
      requirementId: 'RequirementId',
      requirementShowName: 'RequirementShowName',
      sectionId: 'SectionId',
      sectionShowName: 'SectionShowName',
      standardId: 'StandardId',
      standardShowName: 'StandardShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requirementId: 'number',
      requirementShowName: 'string',
      sectionId: 'number',
      sectionShowName: 'string',
      standardId: 'number',
      standardShowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterCheckResultResponseBodyChecks extends $dara.Model {
  /**
   * @remarks
   * Subtype of the cloud product.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * Asset type.
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * ID of the check item.
   * 
   * @example
   * 5
   */
  checkId?: number;
  /**
   * @remarks
   * Information about the standards, requirements, and sections associated with the check result.
   */
  checkPolicies?: ListClusterCheckResultResponseBodyChecksCheckPolicies[];
  /**
   * @remarks
   * Name of the check item.
   * 
   * @example
   * OSS-PublicReadOpenManifestFileWithoutEncryption
   */
  checkShowName?: string;
  /**
   * @remarks
   * Source type of the security check item:
   *  - **CUSTOM**：User-defined
   *  - **SYSTEM**：Predefined by the Security Platform
   * 
   * @example
   * SYSTEM
   */
  checkType?: string;
  /**
   * @remarks
   * Subtype of the cloud product asset. Values:
   * 
   * - When **InstanceType** is **ECS**, this parameter can take the following values:
   *     - **INSTANCE**
   *     - **DISK**
   *     - **SECURITY_GROUP**
   * - When **InstanceType** is **ACR**, this parameter can take the following values:
   *     - **REPOSITORY_ENTERPRISE**
   *     - **REPOSITORY_PERSON**
   * - When **InstanceType** is **RAM**, this parameter can take the following values:
   *     - **ALIAS**
   *     - **USER**
   *     - **POLICY**
   *     - **GROUP**
   * - When **InstanceType** is **WAF**, this parameter can take the following values:
   *     - **DOMAIN**
   * - For other **InstanceType** values, this parameter can take the following value:
   *     - **INSTANCE**
   * 
   * @example
   * DISK
   */
  instanceSubType?: string;
  /**
   * @remarks
   * Asset type of the cloud product.
   * 
   * @example
   * Workload
   */
  instanceType?: string;
  /**
   * @remarks
   * Timestamp of the latest check, in milliseconds.
   * 
   * @example
   * 1657793398000
   */
  lastCheckTime?: number;
  /**
   * @remarks
   * Risk level of the check item. Possible values:
   * 
   * - **HIGH**：High
   * - **MEDIUM**：Medium
   * - **LOW**：Low
   * 
   * @example
   * HIGH
   */
  riskLevel?: string;
  /**
   * @remarks
   * Status of the check item. Values:
   * 
   * - **PASS**: Passed
   * - **NOT_PASS**: Not passed
   * - **CHECKING**: Checking
   * - **NOT_CHECK**: Not checked
   * - **WHITELIST**: Whitelisted
   * 
   * @example
   * PASS
   */
  status?: string;
  /**
   * @remarks
   * Whether the check depends on TRIAL permissions.
   * 
   * @example
   * true
   */
  trialPermission?: boolean;
  /**
   * @remarks
   * Whether the check item requires enabling data delivery of operation audit for more than 30 days to build a behavior baseline.
   * - **1**：Required
   * - **0**：Not Required
   * 
   * @example
   * 1
   */
  trialPermissionType?: number;
  /**
   * @remarks
   * Vendor of the asset. Values:
   * 
   * 0: Alibaba Cloud
   * 3: Other cloud
   * 4: Other cloud
   * 5: Other cloud
   * 7: Other cloud
   * 
   * @example
   * 0
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      checkId: 'CheckId',
      checkPolicies: 'CheckPolicies',
      checkShowName: 'CheckShowName',
      checkType: 'CheckType',
      instanceSubType: 'InstanceSubType',
      instanceType: 'InstanceType',
      lastCheckTime: 'LastCheckTime',
      riskLevel: 'RiskLevel',
      status: 'Status',
      trialPermission: 'TrialPermission',
      trialPermissionType: 'TrialPermissionType',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      checkId: 'number',
      checkPolicies: { 'type': 'array', 'itemType': ListClusterCheckResultResponseBodyChecksCheckPolicies },
      checkShowName: 'string',
      checkType: 'string',
      instanceSubType: 'string',
      instanceType: 'string',
      lastCheckTime: 'number',
      riskLevel: 'string',
      status: 'string',
      trialPermission: 'boolean',
      trialPermissionType: 'number',
      vendor: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkPolicies)) {
      $dara.Model.validateArray(this.checkPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterCheckResultResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of data entries displayed on the current page during pagination.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * Page number in the pagination query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page in the pagination query. The default value is **20**, indicating that 20 items are displayed per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of data entries.
   * 
   * @example
   * 83
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterCheckResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Information on check results.
   */
  checks?: ListClusterCheckResultResponseBodyChecks[];
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: ListClusterCheckResultResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the current request.
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447DDCAE1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checks: 'Checks',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checks: { 'type': 'array', 'itemType': ListClusterCheckResultResponseBodyChecks },
      pageInfo: ListClusterCheckResultResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checks)) {
      $dara.Model.validateArray(this.checks);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

