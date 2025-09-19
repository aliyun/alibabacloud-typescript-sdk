// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckResultResponseBodyChecksCheckPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the requirement item for the check item.
   * 
   * @example
   * 2
   */
  requirementId?: number;
  /**
   * @remarks
   * The display name of the requirement item for the check item.
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
   * The standard ID of the check item.
   * 
   * @example
   * 1
   */
  standardId?: number;
  /**
   * @remarks
   * The standard display name of the check item.
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

export class ListCheckResultResponseBodyChecks extends $dara.Model {
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
   * The type of the asset. Valid values:
   * 
   * *   **0**: an ECS instance
   * *   **1**: a SLB instance
   * *   **2**: a NAT gateway
   * *   **3**: an ApsaraDB RDS instance
   * *   **4**: an ApsaraDB for MongoDB instance
   * *   **5**: an ApsaraDB for Redis instance
   * *   **6**: a container image
   * *   **7**: a container
   * 
   * @example
   * 0
   */
  assetType?: number;
  /**
   * @remarks
   * The service provider of the asset. Valid values:
   * 
   * *   **0**: Alibaba Cloud
   * *   **3**: Huawei Cloud
   * *   **4**: Microsoft Azure
   * *   **5**: AWS
   * *   **7**: Tencent Cloud
   * 
   * @example
   * 3
   */
  assetVendor?: number;
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
   * The check policies.
   */
  checkPolicies?: ListCheckResultResponseBodyChecksCheckPolicies[];
  /**
   * @remarks
   * The type of the check item. Valid values:
   * 
   * *   **0**: paid
   * *   **1**: free
   * 
   * @example
   * 1
   */
  checkSaleType?: number;
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
   * The source type of the situation awareness check item: 
   * - **CUSTOM**: User-defined 
   * - **SYSTEM**: Predefined by the situation awareness platform
   * 
   * @example
   * SYSTEM
   */
  checkType?: string;
  /**
   * @remarks
   * The asset subtype of the cloud service. Valid values:
   * 
   * *   If the **InstanceType** parameter is set to **ECS**, this parameter supports the following valid values:
   * 
   *     *   **INSTANCE**
   *     *   **DISK**
   *     *   **SECURITY_GROUP**
   * 
   * *   If the **InstanceType** parameter is set to **ACR**, this parameter supports the following valid values:
   * 
   *     *   **REPOSITORY_ENTERPRISE**
   *     *   **REPOSITORY_PERSON**
   * 
   * *   If the **InstanceType** parameter is set to **RAM**, this parameter supports the following valid values:
   * 
   *     *   **ALIAS**
   *     *   **USER**
   *     *   **POLICY**
   *     *   **GROUP**
   * 
   * *   If the **InstanceType** parameter is set to **WAF**, this parameter supports the following valid values:
   * 
   *     *   **DOMAIN**
   * 
   * *   If the **InstanceType** parameter is set to other values, this parameter supports the following valid values:
   * 
   *     *   **INSTANCE**
   * 
   * @example
   * DISK
   */
  instanceSubType?: string;
  /**
   * @remarks
   * The asset type of the cloud service. Valid values:
   * 
   * *   **ECS**: ECS
   * *   **SLB**: SLB
   * *   **RDS**: ApsaraDB RDS
   * *   **MONGODB**: MongoDB
   * *   **KVSTORE**: Redis
   * *   **ACR**: Container Registry
   * *   **CSK**: ACK
   * *   **VPC**: VPC
   * *   **ACTIONTRAIL**: ActionTrail
   * *   **CDN**: CDN
   * *   **CAS**: Certificate Management Service (formerly SSL Certificates Service)
   * *   **RDC**: Apsara Devops
   * *   **RAM**: RAM
   * *   **DDOS**: Anti-DDoS
   * *   **WAF**: WAF
   * *   **OSS**: OSS
   * *   **POLARDB**: PolarDB
   * *   **POSTGRESQL**: ApsaraDB RDS for PostgreSQL
   * *   **MSE**: MSE
   * *   **NAS**: NAS
   * *   **SDDP**: SDDP
   * *   **EIP**: EIP
   * 
   * @example
   * ECS
   */
  instanceType?: string;
  /**
   * @remarks
   * The timestamp when the last check was performed. Unit: milliseconds.
   * 
   * @example
   * 1657793398000
   */
  lastCheckTime?: number;
  /**
   * @remarks
   * Indicates whether fixing is supported. Valid values:
   * 
   * *   **SUPPORT_REPAIR**
   * *   **NOT_SUPPORT_REPAIR**
   * 
   * @example
   * NOT_SUPPORT_REPAIR
   */
  operationType?: string;
  /**
   * @remarks
   * The risk level of the check item. Valid values:
   * 
   * *   **HIGH**
   * *   **MEDIUM**
   * *   **LOW**
   * 
   * @example
   * HIGH
   */
  riskLevel?: string;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * 
   * *   **PASS**: passed
   * *   **NOT_PASS**: failed
   * *   **CHECKING**: being checked
   * *   **NOT_CHECK**: not checked
   * *   **WHITELIST**: added to the whitelist
   * 
   * @example
   * PASS
   */
  status?: string;
  /**
   * @remarks
   * The message returned if the status of the check item is abnormal.
   * 
   * @example
   * TIMEOUT
   */
  statusMessage?: string;
  /**
   * @remarks
   * The ID of the check task.
   * 
   * @example
   * 64
   */
  taskId?: string;
  /**
   * @remarks
   * Indicates whether the TRIAL permission is required.
   * 
   * @example
   * true
   */
  trialPermission?: boolean;
  /**
   * @remarks
   * Check whether the data delivery period for ActionTrail is enabled for more than 30 days to establish a baseline of behaviour.
   * *   **0**: REQUIRED
   * *   **1**: NOT REQUIRED
   * 
   * @example
   * 1
   */
  trialPermissionType?: number;
  /**
   * @remarks
   * The cloud service provider.
   * 
   * @example
   * ALIYUN
   */
  vendor?: string;
  /**
   * @remarks
   * The name of the cloud service provider.
   * 
   * @example
   * Aliyun
   */
  vendorShowName?: string;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      assetVendor: 'AssetVendor',
      checkId: 'CheckId',
      checkPolicies: 'CheckPolicies',
      checkSaleType: 'CheckSaleType',
      checkShowName: 'CheckShowName',
      checkType: 'CheckType',
      instanceSubType: 'InstanceSubType',
      instanceType: 'InstanceType',
      lastCheckTime: 'LastCheckTime',
      operationType: 'OperationType',
      riskLevel: 'RiskLevel',
      status: 'Status',
      statusMessage: 'StatusMessage',
      taskId: 'TaskId',
      trialPermission: 'TrialPermission',
      trialPermissionType: 'TrialPermissionType',
      vendor: 'Vendor',
      vendorShowName: 'VendorShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      assetVendor: 'number',
      checkId: 'number',
      checkPolicies: { 'type': 'array', 'itemType': ListCheckResultResponseBodyChecksCheckPolicies },
      checkSaleType: 'number',
      checkShowName: 'string',
      checkType: 'string',
      instanceSubType: 'string',
      instanceType: 'string',
      lastCheckTime: 'number',
      operationType: 'string',
      riskLevel: 'string',
      status: 'string',
      statusMessage: 'string',
      taskId: 'string',
      trialPermission: 'boolean',
      trialPermissionType: 'number',
      vendor: 'string',
      vendorShowName: 'string',
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

export class ListCheckResultResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
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

export class ListCheckResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The check items.
   */
  checks?: ListCheckResultResponseBodyChecks[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCheckResultResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F9B6DD67-B289-5406-B35C-B0F4A217S23
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
      checks: { 'type': 'array', 'itemType': ListCheckResultResponseBodyChecks },
      pageInfo: ListCheckResultResponseBodyPageInfo,
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

