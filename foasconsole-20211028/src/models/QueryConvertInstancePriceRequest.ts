// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConvertInstancePriceRequestNamespaceResourceSpecsResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * > The memory size must be 4 times the number of CPUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 24
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

export class QueryConvertInstancePriceRequestNamespaceResourceSpecs extends $dara.Model {
  /**
   * @remarks
   * The namespace name.
   * 
   * This parameter is required.
   * 
   * @example
   * lm-test-default
   */
  namespace?: string;
  /**
   * @remarks
   * The resource specifications of the namespace.
   * 
   * This parameter is required.
   */
  resourceSpec?: QueryConvertInstancePriceRequestNamespaceResourceSpecsResourceSpec;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      resourceSpec: QueryConvertInstancePriceRequestNamespaceResourceSpecsResourceSpec,
    };
  }

  validate() {
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConvertInstancePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of pricing cycles.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The order instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isAutoRenew?: boolean;
  /**
   * @remarks
   * The resource specifications of the namespace.
   * 
   * This parameter is required.
   */
  namespaceResourceSpecs?: QueryConvertInstancePriceRequestNamespaceResourceSpecs[];
  /**
   * @remarks
   * The pricing cycle. Only Year and Month are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
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
  usePromotionCode?: boolean;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      isAutoRenew: 'IsAutoRenew',
      namespaceResourceSpecs: 'NamespaceResourceSpecs',
      pricingCycle: 'PricingCycle',
      promotionCode: 'PromotionCode',
      region: 'Region',
      usePromotionCode: 'UsePromotionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      isAutoRenew: 'boolean',
      namespaceResourceSpecs: { 'type': 'array', 'itemType': QueryConvertInstancePriceRequestNamespaceResourceSpecs },
      pricingCycle: 'string',
      promotionCode: 'string',
      region: 'string',
      usePromotionCode: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.namespaceResourceSpecs)) {
      $dara.Model.validateArray(this.namespaceResourceSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

