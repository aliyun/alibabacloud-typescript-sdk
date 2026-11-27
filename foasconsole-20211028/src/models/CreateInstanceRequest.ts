// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestDefaultHaNamespaceResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * > The memory size must be four times the number of CPUs.
   * 
   * @example
   * 16
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestDefaultNamespaceResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * > The memory size must be four times the number of CPUs.
   * 
   * @example
   * 16
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestHaResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs for zone-disaster recovery.
   * 
   * @example
   * 10
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size for high-availability zone-disaster recovery.
   * 
   * @example
   * 40
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs.
   * > - This parameter is required for subscription workspaces. For pay-as-you-go workspaces, this parameter is optional. - The number of CPUs for the target project to be created must be less than the number of remaining CPUs in the workspace (the total number of CPUs purchased for the workspace minus the number of CPUs allocated to other projects). Otherwise, an error is reported.
   * 
   * @example
   * 30
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * > The memory size must be four times the number of CPUs.
   * 
   * @example
   * 120
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestStorageOss extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket to bind.
   * 
   * @example
   * oss-flink-cn-shanghai-260343971602724445
   */
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestStorage extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use fully managed storage. You can choose either fully managed storage or binding an OSS bucket. Valid values:
   * - true: uses fully managed storage.
   * - false: does not use fully managed storage.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  fullyManaged?: boolean;
  /**
   * @remarks
   * The OSS storage.
   */
  oss?: CreateInstanceRequestStorageOss;
  static names(): { [key: string]: string } {
    return {
      fullyManaged: 'FullyManaged',
      oss: 'Oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullyManaged: 'boolean',
      oss: CreateInstanceRequestStorageOss,
    };
  }

  validate() {
    if(this.oss && typeof (this.oss as any).validate === 'function') {
      (this.oss as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tag
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

export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The processor architecture.
   * 
   * @example
   * X86
   */
  architectureType?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - **true**: enables auto-renewal.
   * - **false**: disables auto-renewal. This is the default value.
   * 
   * > This parameter does not take effect for pay-as-you-go instances.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * - POST: pay-as-you-go
   * - PRE: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * PRE
   */
  chargeType?: string;
  /**
   * @remarks
   * The resource configurations for the default high-availability namespace.
   */
  defaultHaNamespaceResourceSpec?: CreateInstanceRequestDefaultHaNamespaceResourceSpec;
  /**
   * @remarks
   * The resource configurations for the default namespace.
   */
  defaultNamespaceResourceSpec?: CreateInstanceRequestDefaultNamespaceResourceSpec;
  /**
   * @remarks
   * The number of subscription periods.
   * 
   * > This parameter is required when ChargeType is set to PRE.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The extended field.
   * 
   * @example
   * “”
   */
  extra?: string;
  /**
   * @remarks
   * Specifies whether to use zone-disaster recovery resources.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * The resource specifications for zone-disaster recovery.
   * 
   * **if can be null:**
   * true
   */
  haResourceSpec?: CreateInstanceRequestHaResourceSpec;
  /**
   * @remarks
   * The vSwitches in the secondary zone for zone-disaster recovery.
   * 
   * **if can be null:**
   * true
   */
  haVSwitchIds?: string[];
  /**
   * @remarks
   * The name of the workspace. The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens. It cannot end with a hyphen.
   * 
   * This parameter is required.
   * 
   * @example
   * rtc-e2e-test-pre
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the monitoring and alerting service. You can select ARMS or CloudMonitor.
   * 
   * @example
   * TAIHAO
   */
  monitorType?: string;
  /**
   * @remarks
   * The subscription period unit for the subscription instance. Valid values:
   * 
   * - **year**: year
   * - **month**: month
   * 
   * > This parameter is required when the billing method is subscription.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 500043499350689
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxbavps3rpiy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource specifications.
   * 
   * > This parameter is required when ChargeType is set to PRE.
   */
  resourceSpec?: CreateInstanceRequestResourceSpec;
  /**
   * @remarks
   * The storage parameters.
   * 
   * This parameter is required.
   */
  storage?: CreateInstanceRequestStorage;
  /**
   * @remarks
   * The list of tags. You can add up to 20 tags.
   */
  tag?: CreateInstanceRequestTag[];
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * - true: uses a coupon.
   * - false: does not use a coupon.
   * 
   * @example
   * true
   */
  usePromotionCode?: boolean;
  /**
   * @remarks
   * The vSwitch IDs.
   * 
   * This parameter is required.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-2ze9xoh8qyt1rnxfmfcdi
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      defaultHaNamespaceResourceSpec: 'DefaultHaNamespaceResourceSpec',
      defaultNamespaceResourceSpec: 'DefaultNamespaceResourceSpec',
      duration: 'Duration',
      extra: 'Extra',
      ha: 'Ha',
      haResourceSpec: 'HaResourceSpec',
      haVSwitchIds: 'HaVSwitchIds',
      instanceName: 'InstanceName',
      monitorType: 'MonitorType',
      pricingCycle: 'PricingCycle',
      promotionCode: 'PromotionCode',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceSpec: 'ResourceSpec',
      storage: 'Storage',
      tag: 'Tag',
      usePromotionCode: 'UsePromotionCode',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      autoRenew: 'boolean',
      chargeType: 'string',
      defaultHaNamespaceResourceSpec: CreateInstanceRequestDefaultHaNamespaceResourceSpec,
      defaultNamespaceResourceSpec: CreateInstanceRequestDefaultNamespaceResourceSpec,
      duration: 'number',
      extra: 'string',
      ha: 'boolean',
      haResourceSpec: CreateInstanceRequestHaResourceSpec,
      haVSwitchIds: { 'type': 'array', 'itemType': 'string' },
      instanceName: 'string',
      monitorType: 'string',
      pricingCycle: 'string',
      promotionCode: 'string',
      region: 'string',
      resourceGroupId: 'string',
      resourceSpec: CreateInstanceRequestResourceSpec,
      storage: CreateInstanceRequestStorage,
      tag: { 'type': 'array', 'itemType': CreateInstanceRequestTag },
      usePromotionCode: 'boolean',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(this.defaultHaNamespaceResourceSpec && typeof (this.defaultHaNamespaceResourceSpec as any).validate === 'function') {
      (this.defaultHaNamespaceResourceSpec as any).validate();
    }
    if(this.defaultNamespaceResourceSpec && typeof (this.defaultNamespaceResourceSpec as any).validate === 'function') {
      (this.defaultNamespaceResourceSpec as any).validate();
    }
    if(this.haResourceSpec && typeof (this.haResourceSpec as any).validate === 'function') {
      (this.haResourceSpec as any).validate();
    }
    if(Array.isArray(this.haVSwitchIds)) {
      $dara.Model.validateArray(this.haVSwitchIds);
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    if(this.storage && typeof (this.storage as any).validate === 'function') {
      (this.storage as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

