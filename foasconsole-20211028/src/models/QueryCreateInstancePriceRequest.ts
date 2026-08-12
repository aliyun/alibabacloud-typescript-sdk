// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCreateInstancePriceRequestHaResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs for zone-disaster recovery.
   * 
   * @example
   * 20
   * 
   * **if can be null:**
   * false
   */
  cpu?: number;
  /**
   * @remarks
   * The active memory size for zone-disaster recovery.
   * 
   * @example
   * 80
   * 
   * **if can be null:**
   * false
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

export class QueryCreateInstancePriceRequestResourceSpec extends $dara.Model {
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
   * The memory size.
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

export class QueryCreateInstancePriceRequestStorageOss extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * quicktracing
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

export class QueryCreateInstancePriceRequestStorage extends $dara.Model {
  /**
   * @remarks
   * The OSS storage information.
   */
  oss?: QueryCreateInstancePriceRequestStorageOss;
  static names(): { [key: string]: string } {
    return {
      oss: 'Oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oss: QueryCreateInstancePriceRequestStorageOss,
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

export class QueryCreateInstancePriceRequest extends $dara.Model {
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
   * - **false**: does not enable auto-renewal. (Default)
   * 
   * >This parameter is invalid for pay-as-you-go instances.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * PRE
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of billing cycles.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The extended reserved field.
   * 
   * @example
   * “”
   */
  extra?: string;
  /**
   * @remarks
   * Specifies whether to select zone-disaster recovery resources.
   * 
   * @example
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * The zone-disaster recovery resource specifications.
   * 
   * **if can be null:**
   * true
   */
  haResourceSpec?: QueryCreateInstancePriceRequestHaResourceSpec;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * rtc-e2e-test-post
   */
  instanceName?: string;
  /**
   * @remarks
   * The billing cycle. Subscription instances support only Year and Month. Pay-as-you-go instances support Hour.
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
   * 500041860100636
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
   * The resource specifications.
   */
  resourceSpec?: QueryCreateInstancePriceRequestResourceSpec;
  /**
   * @remarks
   * The storage information.
   */
  storage?: QueryCreateInstancePriceRequestStorage;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * 
   * @example
   * true
   */
  usePromotionCode?: boolean;
  /**
   * @remarks
   * The vSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The VPC ID of the user.
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
      duration: 'Duration',
      extra: 'Extra',
      ha: 'Ha',
      haResourceSpec: 'HaResourceSpec',
      instanceName: 'InstanceName',
      pricingCycle: 'PricingCycle',
      promotionCode: 'PromotionCode',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
      storage: 'Storage',
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
      duration: 'number',
      extra: 'string',
      ha: 'boolean',
      haResourceSpec: QueryCreateInstancePriceRequestHaResourceSpec,
      instanceName: 'string',
      pricingCycle: 'string',
      promotionCode: 'string',
      region: 'string',
      resourceSpec: QueryCreateInstancePriceRequestResourceSpec,
      storage: QueryCreateInstancePriceRequestStorage,
      usePromotionCode: 'boolean',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(this.haResourceSpec && typeof (this.haResourceSpec as any).validate === 'function') {
      (this.haResourceSpec as any).validate();
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    if(this.storage && typeof (this.storage as any).validate === 'function') {
      (this.storage as any).validate();
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

