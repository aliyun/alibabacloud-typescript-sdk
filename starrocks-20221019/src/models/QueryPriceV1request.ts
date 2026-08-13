// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPriceV1RequestAgentNodeGroup extends $dara.Model {
  /**
   * @remarks
   * Number of CUs. A Compute Unit (CU) is the basic billing unit. One CU equals one vCPU plus 4 GiB of memory.
   * 
   * @example
   * 2
   */
  cu?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceV1RequestBackendNodeGroups extends $dara.Model {
  /**
   * @remarks
   * Number of CUs. A Compute Unit (CU) is the basic billing unit. One CU equals one vCPU plus 4 GiB of memory. For ramEnhanced instances, one CU equals one vCPU plus 8 GiB of memory.
   * 
   * @example
   * 8
   */
  cu?: string;
  /**
   * @remarks
   * Number of disks.
   * 
   * @example
   * 1
   */
  diskNumber?: number;
  /**
   * @remarks
   * Local SSD instance type for the node group. This field applies only to ECS-based instances with specType set to localSSD or bigData.
   * 
   * @example
   * local_ssd_4_4xlarge
   */
  localStorageInstanceType?: string;
  /**
   * @remarks
   * Number of nodes.
   * 
   * @example
   * 3
   */
  residentNodeNumber?: number;
  /**
   * @remarks
   * Compute group specification type. Supported types include the following:
   * 
   * - standard: Standard Edition.
   * 
   * - localSSD: Local SSD.
   * 
   * - bigData: Large-storage Edition.
   * 
   * - ramEnhanced: Memory-enhanced instance family.
   * 
   * - networkEnhanced: Network-enhanced instance family.
   * 
   * @example
   * standard
   */
  specType?: string;
  /**
   * @remarks
   * Disk performance level. Supported values include the following:
   * 
   * - pl0: Maximum random read/write IOPS per disk is 10,000.
   * 
   * - pl1: Maximum random read/write IOPS per disk is 50,000.
   * 
   * - pl2: Maximum random read/write IOPS per disk is 100,000.
   * 
   * - pl3: Maximum random read/write IOPS per disk is 1,000,000.
   * 
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @remarks
   * Storage size in GiB.
   * 
   * @example
   * 100
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      diskNumber: 'diskNumber',
      localStorageInstanceType: 'localStorageInstanceType',
      residentNodeNumber: 'residentNodeNumber',
      specType: 'specType',
      storagePerformanceLevel: 'storagePerformanceLevel',
      storageSize: 'storageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'string',
      diskNumber: 'number',
      localStorageInstanceType: 'string',
      residentNodeNumber: 'number',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceV1RequestFrontendNodeGroups extends $dara.Model {
  /**
   * @remarks
   * Number of CUs. A Compute Unit (CU) is the basic billing unit. One CU equals one vCPU plus 4 GiB of memory.
   * 
   * @example
   * 8
   */
  cu?: string;
  /**
   * @remarks
   * Number of disks.
   * 
   * @example
   * 1
   */
  diskNumber?: number;
  /**
   * @remarks
   * Local SSD instance type. Do not set this field for FE compute groups.
   * 
   * @example
   * null
   */
  localStorageInstanceType?: string;
  /**
   * @remarks
   * Number of nodes.
   * 
   * @example
   * 3
   */
  residentNodeNumber?: number;
  /**
   * @remarks
   * Compute group specification type. Only standard is supported.
   * 
   * @example
   * standard
   */
  specType?: string;
  /**
   * @remarks
   * Disk performance level. Only pl1 is supported. Maximum random read/write IOPS per disk is 50,000.
   * 
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @remarks
   * Storage size in GiB.
   * 
   * @example
   * 100
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      diskNumber: 'diskNumber',
      localStorageInstanceType: 'localStorageInstanceType',
      residentNodeNumber: 'residentNodeNumber',
      specType: 'specType',
      storagePerformanceLevel: 'storagePerformanceLevel',
      storageSize: 'storageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'string',
      diskNumber: 'number',
      localStorageInstanceType: 'string',
      residentNodeNumber: 'number',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceV1RequestObserverNodeGroups extends $dara.Model {
  /**
   * @remarks
   * Number of CUs. A Compute Unit (CU) is the basic billing unit. One CU equals one vCPU plus 4 GiB of memory.
   * 
   * @example
   * 8
   */
  cu?: string;
  /**
   * @remarks
   * Number of disks.
   * 
   * @example
   * 1
   */
  diskNumber?: number;
  /**
   * @remarks
   * Local SSD instance type. Do not set this field for Observer compute groups.
   * 
   * @example
   * null
   */
  localStorageInstanceType?: string;
  /**
   * @remarks
   * Number of nodes.
   * 
   * @example
   * 3
   */
  residentNodeNumber?: number;
  /**
   * @remarks
   * Compute group specification type. Only standard is supported.
   * 
   * @example
   * standard
   */
  specType?: string;
  /**
   * @remarks
   * Disk performance level. Only pl1 is supported. Maximum random read/write IOPS per disk is 50,000.
   * 
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @remarks
   * Storage size in GiB.
   * 
   * @example
   * 100
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      diskNumber: 'diskNumber',
      localStorageInstanceType: 'localStorageInstanceType',
      residentNodeNumber: 'residentNodeNumber',
      specType: 'specType',
      storagePerformanceLevel: 'storagePerformanceLevel',
      storageSize: 'storageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'string',
      diskNumber: 'number',
      localStorageInstanceType: 'string',
      residentNodeNumber: 'number',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceV1Request extends $dara.Model {
  /**
   * @remarks
   * Agent compute group.
   */
  agentNodeGroup?: QueryPriceV1RequestAgentNodeGroup;
  /**
   * @remarks
   * BE or CN compute group information.
   */
  backendNodeGroups?: QueryPriceV1RequestBackendNodeGroups[];
  /**
   * @remarks
   * Subscription duration. Valid only when PayType is prePaid.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * FE node group information.
   */
  frontendNodeGroups?: QueryPriceV1RequestFrontendNodeGroups[];
  /**
   * @remarks
   * Observer compute group information.
   */
  observerNodeGroups?: QueryPriceV1RequestObserverNodeGroups[];
  /**
   * @remarks
   * Instance edition:
   * 
   * - Trial Edition (trial).
   * 
   * - Standard Edition (official).
   * 
   * @example
   * official
   */
  packageType?: string;
  /**
   * @remarks
   * Payment type:
   * 
   * 1. Subscription (prePaid).
   * 
   * 2. Pay-as-you-go (postPaid).
   * 
   * @example
   * prePaid
   */
  payType?: string;
  /**
   * @remarks
   * Subscription duration unit:
   * 
   * - Month (Month)
   * 
   * - Year (Year)
   * 
   * Valid only when PayType is prePaid.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * Coupon ID.
   * 
   * @example
   * youhuiquan_12378dfj6
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Cluster run mode:
   * 
   * - Shared-nothing (shared_nothing).
   * 
   * - Shared-data (shared_data).
   * 
   * @example
   * shared_data
   */
  runMode?: string;
  static names(): { [key: string]: string } {
    return {
      agentNodeGroup: 'AgentNodeGroup',
      backendNodeGroups: 'BackendNodeGroups',
      duration: 'Duration',
      frontendNodeGroups: 'FrontendNodeGroups',
      observerNodeGroups: 'ObserverNodeGroups',
      packageType: 'PackageType',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      promotionOptionNo: 'PromotionOptionNo',
      regionId: 'RegionId',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentNodeGroup: QueryPriceV1RequestAgentNodeGroup,
      backendNodeGroups: { 'type': 'array', 'itemType': QueryPriceV1RequestBackendNodeGroups },
      duration: 'number',
      frontendNodeGroups: { 'type': 'array', 'itemType': QueryPriceV1RequestFrontendNodeGroups },
      observerNodeGroups: { 'type': 'array', 'itemType': QueryPriceV1RequestObserverNodeGroups },
      packageType: 'string',
      payType: 'string',
      pricingCycle: 'string',
      promotionOptionNo: 'string',
      regionId: 'string',
      runMode: 'string',
    };
  }

  validate() {
    if(this.agentNodeGroup && typeof (this.agentNodeGroup as any).validate === 'function') {
      (this.agentNodeGroup as any).validate();
    }
    if(Array.isArray(this.backendNodeGroups)) {
      $dara.Model.validateArray(this.backendNodeGroups);
    }
    if(Array.isArray(this.frontendNodeGroups)) {
      $dara.Model.validateArray(this.frontendNodeGroups);
    }
    if(Array.isArray(this.observerNodeGroups)) {
      $dara.Model.validateArray(this.observerNodeGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

