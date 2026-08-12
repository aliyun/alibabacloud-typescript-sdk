// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConvertHybridInstanceRequestResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
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
   * 40GB
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

export class ConvertHybridInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The order instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sc_flinkserverless_public_cn-7e22*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * The maximum resource specifications available for the pay-as-you-go portion of hybrid billing.
   * 
   * This parameter is required.
   */
  resourceSpec?: ConvertHybridInstanceRequestResourceSpec;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      region: 'string',
      resourceSpec: ConvertHybridInstanceRequestResourceSpec,
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

