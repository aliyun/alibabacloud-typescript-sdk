// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterCheckResultResponseBodyChecksCheckPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the regulation for the check item.
   * 
   * @example
   * 2
   */
  requirementId?: number;
  /**
   * @remarks
   * The display name of the regulation for the check item.
   * 
   * @example
   * Alibaba cloud OSS best security practices
   */
  requirementShowName?: string;
  /**
   * @remarks
   * The ID of the section for the check item.
   * 
   * @example
   * 3
   */
  sectionId?: number;
  /**
   * @remarks
   * The display name of the section for the check item.
   * 
   * @example
   * Log Audit
   */
  sectionShowName?: string;
  /**
   * @remarks
   * The ID of the standard for the check item.
   * 
   * @example
   * 1
   */
  standardId?: number;
  /**
   * @remarks
   * The display name of the standard for the check item.
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
   * The subtype of the cloud service.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The asset type.
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 5
   */
  checkId?: number;
  /**
   * @remarks
   * The standards, regulations, and sections associated with the check result.
   */
  checkPolicies?: ListClusterCheckResultResponseBodyChecksCheckPolicies[];
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * OSS-PublicReadOpenManifestFileWithoutEncryption
   */
  checkShowName?: string;
  /**
   * @remarks
   * The source type of the Threat Detection Service check item. Valid values:
   *  - **CUSTOM**: Custom.
   *  - **SYSTEM**: Predefined by the Threat Detection Service platform.
   * 
   * @example
   * SYSTEM
   */
  checkType?: string;
  /**
   * @remarks
   * The asset subtype of the cloud service. Valid values:
   * 
   * - If **InstanceType** is set to **ECS**, valid values are:
   *     - **INSTANCE**
   *     - **DISK**
   *     - **SECURITY_GROUP**
   * - If **InstanceType** is set to **ACR**, valid values are:
   *     - **REPOSITORY_ENTERPRISE**
   *     - **REPOSITORY_PERSON**
   * - If **InstanceType** is set to **RAM**, valid values are:
   *     - **ALIAS**
   *     - **USER**
   *     - **POLICY**
   *     - **GROUP**
   * - If **InstanceType** is set to **WAF**, valid values are:
   *     - **DOMAIN**
   * - If **InstanceType** is set to other values, valid values are:
   *     - **INSTANCE**
   * 
   * @example
   * DISK
   */
  instanceSubType?: string;
  /**
   * @remarks
   * The asset type of the cloud service.
   * 
   * @example
   * Workload
   */
  instanceType?: string;
  /**
   * @remarks
   * The timestamp of the latest check. Unit: milliseconds.
   * 
   * @example
   * 1657793398000
   */
  lastCheckTime?: number;
  /**
   * @remarks
   * The risk level of the check item. Valid values:
   * 
   * - **HIGH**: High.
   * - **MEDIUM**: Medium.
   * - **LOW**: Low.
   * 
   * @example
   * HIGH
   */
  riskLevel?: string;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * 
   * - **PASS**: Passed.
   * - **NOT_PASS**: Failed.
   * - **CHECKING**: Checking.
   * - **NOT_CHECK**: Not checked.
   * - **WHITELIST**: Whitelisted.
   * 
   * @example
   * PASS
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether the check depends on the TRIAL permission.
   * 
   * @example
   * true
   */
  trialPermission?: boolean;
  /**
   * @remarks
   * Specifies whether the check item requires enabling data delivery for ActionTrail for more than 30 days to build a behavior baseline. Valid values:
   * - **1**: Yes.
   * - **0**: No.
   * 
   * @example
   * 1
   */
  trialPermissionType?: number;
  /**
   * @remarks
   * The vendor of the asset. Valid values:
   * 
   * 0: Alibaba Cloud.
   * 3: Other cloud.
   * 4: Other cloud.
   * 5: Other cloud.
   * 7: Other cloud.
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
   * The number of data entries displayed on the current page during paging in a paged query.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page during paging in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of alerting events to display on each page during paging in a paged query. Default value: **20**, which indicates that 20 alerting events are displayed on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
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
   * The check result information.
   */
  checks?: ListClusterCheckResultResponseBodyChecks[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListClusterCheckResultResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request.
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

