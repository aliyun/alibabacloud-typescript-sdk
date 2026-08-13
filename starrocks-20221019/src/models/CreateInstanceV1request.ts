// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceV1RequestAgentNodeGroup extends $dara.Model {
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

export class CreateInstanceV1RequestBackendNodeGroups extends $dara.Model {
  /**
   * @remarks
   * The number of CUs. A CU (Compute Unit) is the basic metering unit of the service. 1 CU = 1 CPU core + 4 GiB memory. When SpecType is set to memory-enhanced instance family, 1 CU = 1 CPU core + 8 GiB memory.
   * 
   * @example
   * 8
   */
  cu?: number;
  /**
   * @remarks
   * The number of disks.
   * 
   * @example
   * 1
   * 
   * **if can be null:**
   * false
   */
  diskNumber?: number;
  /**
   * @remarks
   * The local SSD instance type of the node group. This parameter takes effect only when the instance is ECS-based and SpecType is set to local SSD or large-scale storage.
   * 
   * @example
   * local_ssd_4_4xlarge
   */
  localStorageInstanceType?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  residentNodeNumber?: number;
  /**
   * @remarks
   * The specification type of the node group. Valid values:
   * 
   * @example
   * standard
   */
  specType?: string;
  /**
   * @remarks
   * The performance level of the cloud disk. Valid values:
   * 
   * - pl0: A single disk delivers up to 10,000 random read/write IOPS.
   * - pl1: A single disk delivers up to 50,000 random read/write IOPS.
   * - pl2: A single disk delivers up to 100,000 random read/write IOPS.
   * - pl3: A single disk delivers up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @remarks
   * The storage size. Unit: GiB.
   * 
   * @example
   * 100
   */
  storageSize?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      diskNumber: 'diskNumber',
      localStorageInstanceType: 'localStorageInstanceType',
      residentNodeNumber: 'residentNodeNumber',
      specType: 'specType',
      storagePerformanceLevel: 'storagePerformanceLevel',
      storageSize: 'storageSize',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      diskNumber: 'number',
      localStorageInstanceType: 'string',
      residentNodeNumber: 'number',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceV1RequestFrontendNodeGroups extends $dara.Model {
  /**
   * @remarks
   * The number of CUs. A CU (Compute Unit) is the basic metering unit of the service. 1 CU = 1 CPU core + 4 GiB memory.
   * 
   * @example
   * 8
   */
  cu?: number;
  /**
   * @remarks
   * The number of disks.
   * 
   * @example
   * 1
   */
  diskNumber?: number;
  /**
   * @remarks
   * The local SSD instance type. This parameter does not need to be set for the FE node group.
   * 
   * @example
   * null
   */
  localStorageInstanceType?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  residentNodeNumber?: number;
  /**
   * @remarks
   * The specification type of the node group. Only standard is supported.
   * 
   * @example
   * standard
   */
  specType?: string;
  /**
   * @remarks
   * The performance level (PL) of the cloud disk. Only pl1 is supported, which provides up to 50,000 random read/write IOPS per disk.
   * 
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @remarks
   * The storage size. Unit: GiB.
   * 
   * @example
   * 100
   */
  storageSize?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      diskNumber: 'diskNumber',
      localStorageInstanceType: 'localStorageInstanceType',
      residentNodeNumber: 'residentNodeNumber',
      specType: 'specType',
      storagePerformanceLevel: 'storagePerformanceLevel',
      storageSize: 'storageSize',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      diskNumber: 'number',
      localStorageInstanceType: 'string',
      residentNodeNumber: 'number',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceV1RequestObserverNodeGroups extends $dara.Model {
  /**
   * @remarks
   * The number of CUs. A CU (Compute Unit) is the basic metering unit of the service. 1 CU = 1 CPU core + 4 GiB memory.
   * 
   * @example
   * 8
   */
  cu?: number;
  /**
   * @remarks
   * The number of disks.
   * 
   * @example
   * 1
   */
  diskNumber?: number;
  /**
   * @remarks
   * The local SSD instance type. This parameter does not need to be set for the Observer node group.
   * 
   * @example
   * null
   */
  localStorageInstanceType?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  residentNodeNumber?: number;
  /**
   * @remarks
   * The specification type of the node group. Only standard is supported.
   * 
   * @example
   * standard
   */
  specType?: string;
  /**
   * @remarks
   * The performance level (PL) of the cloud disk. Only pl1 is supported, which provides up to 50,000 random read/write IOPS per disk.
   * 
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @remarks
   * The storage size. Unit: GiB.
   * 
   * @example
   * 100
   */
  storageSize?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      diskNumber: 'diskNumber',
      localStorageInstanceType: 'localStorageInstanceType',
      residentNodeNumber: 'residentNodeNumber',
      specType: 'specType',
      storagePerformanceLevel: 'storagePerformanceLevel',
      storageSize: 'storageSize',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      diskNumber: 'number',
      localStorageInstanceType: 'string',
      residentNodeNumber: 'number',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceV1RequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
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

export class CreateInstanceV1RequestVSwitches extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp19mlh98tm9teyyd****
   */
  vswId?: string;
  /**
   * @remarks
   * The zone ID of the vSwitch.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vswId: 'VswId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceV1Request extends $dara.Model {
  /**
   * @remarks
   * The administrator password of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * password_example
   */
  adminPassword?: string;
  agentNodeGroup?: CreateInstanceV1RequestAgentNodeGroup;
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect only when payType is set to PrePaid. Auto-renewal is disabled by default.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The BE or CN node group information.
   */
  backendNodeGroups?: CreateInstanceV1RequestBackendNodeGroups[];
  /**
   * @remarks
   * Ensures the idempotence of the request. Generate a unique parameter value from your client. The ClientToken value supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the DLF Catalog.
   * 
   * @example
   * paimon_test
   */
  dlfCatalogName?: string;
  /**
   * @remarks
   * The type of the DLF Catalog. Valid values: paimon and iceberg.
   * 
   * @example
   * paimon
   */
  dlfCatalogType?: string;
  /**
   * @remarks
   * The subscription duration. This parameter takes effect only when payType is set to PrePaid.
   * 
   * @example
   * 1
   */
  duration?: number;
  enableAiFunction?: boolean;
  /**
   * @remarks
   * Specifies whether to enable disaster recovery.
   */
  enableMultiAz?: boolean;
  /**
   * @remarks
   * Specifies whether to enable encryption.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The FE node group information.
   */
  frontendNodeGroups?: CreateInstanceV1RequestFrontendNodeGroups[];
  gatewayType?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * c1
   */
  instanceName?: string;
  /**
   * @remarks
   * The KMS key ID.
   * 
   * @example
   * fdsdf****
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The username of the associated Resource Access Management (RAM) user or the name of the associated RAM role.
   * 
   * @example
   * aliyun.test1
   */
  linkedRamUserName?: string;
  /**
   * @remarks
   * The Observer node group information. Specify this parameter only when you need to enable cross-zone disaster recovery. The Observer node group specifications must be the same as those of the FE node group.
   */
  observerNodeGroups?: CreateInstanceV1RequestObserverNodeGroups[];
  /**
   * @remarks
   * The name of the role used for password-free access to Object Storage Service (OSS).
   * 
   * @example
   * AliyunEMRStarRocksAccessingOSSRole
   */
  ossAccessingRoleName?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * <ul>
   * <li>trial: Trial Edition.</li>
   * <li>official: Standard Edition.</li>
   * </ul>
   * 
   * This parameter is required.
   * 
   * @example
   * official
   */
  packageType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * <ol>
   * <li>prePaid: subscription.</li>
   * <li>postPaid: pay-as-you-go.</li>
   * </ol>
   * 
   * This parameter is required.
   * 
   * @example
   * prePaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * <ul>
   * <li>Month</li>
   * <li>Year</li>
   * </ul>
   * This parameter takes effect only when payType is set to PrePaid.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The RAM authentication type. Valid values:
   * - RS: Resource Access Management (RAM) user.
   * - RR: RAM role.
   * 
   * @example
   * RR
   */
  principalType?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 165445235634
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * The ID of the Resource Access Management (RAM) user or RAM role.
   * 
   * @example
   * 123456
   */
  ramUserId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzllkih7jqxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The running mode of the cluster. Valid values:
   * 
   * - shared_nothing: compute-storage coupled.
   * - shared_data: storage-compute disaggregation.
   * 
   * This parameter is required.
   * 
   * @example
   * shared_data
   */
  runMode?: string;
  /**
   * @remarks
   * The instance tags.
   */
  tags?: CreateInstanceV1RequestTags[];
  /**
   * @remarks
   * The vSwitch and zone information.
   */
  vSwitches?: CreateInstanceV1RequestVSwitches[];
  /**
   * @remarks
   * The major version of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  version?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1fll2mci6d7pw8m****
   */
  vpcId?: string;
  /**
   * @remarks
   * The primary zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      adminPassword: 'AdminPassword',
      agentNodeGroup: 'AgentNodeGroup',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      backendNodeGroups: 'BackendNodeGroups',
      clientToken: 'ClientToken',
      dlfCatalogName: 'DlfCatalogName',
      dlfCatalogType: 'DlfCatalogType',
      duration: 'Duration',
      enableAiFunction: 'EnableAiFunction',
      enableMultiAz: 'EnableMultiAz',
      encrypted: 'Encrypted',
      frontendNodeGroups: 'FrontendNodeGroups',
      gatewayType: 'GatewayType',
      instanceName: 'InstanceName',
      kmsKeyId: 'KmsKeyId',
      linkedRamUserName: 'LinkedRamUserName',
      observerNodeGroups: 'ObserverNodeGroups',
      ossAccessingRoleName: 'OssAccessingRoleName',
      packageType: 'PackageType',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      principalType: 'PrincipalType',
      promotionOptionNo: 'PromotionOptionNo',
      ramUserId: 'RamUserId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      runMode: 'RunMode',
      tags: 'Tags',
      vSwitches: 'VSwitches',
      version: 'Version',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminPassword: 'string',
      agentNodeGroup: CreateInstanceV1RequestAgentNodeGroup,
      autoPay: 'boolean',
      autoRenew: 'boolean',
      backendNodeGroups: { 'type': 'array', 'itemType': CreateInstanceV1RequestBackendNodeGroups },
      clientToken: 'string',
      dlfCatalogName: 'string',
      dlfCatalogType: 'string',
      duration: 'number',
      enableAiFunction: 'boolean',
      enableMultiAz: 'boolean',
      encrypted: 'boolean',
      frontendNodeGroups: { 'type': 'array', 'itemType': CreateInstanceV1RequestFrontendNodeGroups },
      gatewayType: 'string',
      instanceName: 'string',
      kmsKeyId: 'string',
      linkedRamUserName: 'string',
      observerNodeGroups: { 'type': 'array', 'itemType': CreateInstanceV1RequestObserverNodeGroups },
      ossAccessingRoleName: 'string',
      packageType: 'string',
      payType: 'string',
      pricingCycle: 'string',
      principalType: 'string',
      promotionOptionNo: 'string',
      ramUserId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      runMode: 'string',
      tags: { 'type': 'array', 'itemType': CreateInstanceV1RequestTags },
      vSwitches: { 'type': 'array', 'itemType': CreateInstanceV1RequestVSwitches },
      version: 'string',
      vpcId: 'string',
      zoneId: 'string',
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

