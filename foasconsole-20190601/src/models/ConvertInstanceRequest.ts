// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConvertInstanceRequestConvertPostpayInstanceRequestNamespaceResourceSpecsResourceSpec extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
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

export class ConvertInstanceRequestConvertPostpayInstanceRequestNamespaceResourceSpecs extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ns-1
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceSpec?: ConvertInstanceRequestConvertPostpayInstanceRequestNamespaceResourceSpecsResourceSpec;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      resourceSpec: ConvertInstanceRequestConvertPostpayInstanceRequestNamespaceResourceSpecsResourceSpec,
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

export class ConvertInstanceRequestConvertPostpayInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sc_flinkserverlesspost_public_cn-*******
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  isAutoRenew?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  namespaceResourceSpecs?: ConvertInstanceRequestConvertPostpayInstanceRequestNamespaceResourceSpecs[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      isAutoRenew: 'IsAutoRenew',
      namespaceResourceSpecs: 'NamespaceResourceSpecs',
      pricingCycle: 'PricingCycle',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      isAutoRenew: 'boolean',
      namespaceResourceSpecs: { 'type': 'array', 'itemType': ConvertInstanceRequestConvertPostpayInstanceRequestNamespaceResourceSpecs },
      pricingCycle: 'string',
      region: 'string',
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

export class ConvertInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  convertPostpayInstanceRequest?: ConvertInstanceRequestConvertPostpayInstanceRequest;
  static names(): { [key: string]: string } {
    return {
      convertPostpayInstanceRequest: 'ConvertPostpayInstanceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convertPostpayInstanceRequest: ConvertInstanceRequestConvertPostpayInstanceRequest,
    };
  }

  validate() {
    if(this.convertPostpayInstanceRequest && typeof (this.convertPostpayInstanceRequest as any).validate === 'function') {
      (this.convertPostpayInstanceRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

