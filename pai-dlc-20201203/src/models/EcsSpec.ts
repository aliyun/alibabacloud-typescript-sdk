// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EcsSpec extends $dara.Model {
  /**
   * @example
   * GPU
   */
  acceleratorType?: string;
  /**
   * @example
   * 12
   */
  cpu?: number;
  /**
   * @example
   * 470.199.02
   */
  defaultGPUDriver?: string;
  /**
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @example
   * 80
   */
  gpuMemory?: number;
  /**
   * @example
   * NVIDIA v100
   */
  gpuType?: string;
  /**
   * @example
   * ecs.gn6e-c12g1.3xlarge
   */
  instanceType?: string;
  /**
   * @example
   * true
   */
  isAvailable?: boolean;
  /**
   * @example
   * 92
   */
  memory?: number;
  /**
   * @example
   * 0.1
   */
  nonProtectSpotDiscount?: number;
  paymentTypes?: string[];
  /**
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @example
   * WithStock
   */
  spotStockStatus?: string;
  supportedGPUDrivers?: string[];
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      cpu: 'Cpu',
      defaultGPUDriver: 'DefaultGPUDriver',
      gpu: 'Gpu',
      gpuMemory: 'GpuMemory',
      gpuType: 'GpuType',
      instanceType: 'InstanceType',
      isAvailable: 'IsAvailable',
      memory: 'Memory',
      nonProtectSpotDiscount: 'NonProtectSpotDiscount',
      paymentTypes: 'PaymentTypes',
      resourceType: 'ResourceType',
      spotStockStatus: 'SpotStockStatus',
      supportedGPUDrivers: 'SupportedGPUDrivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      cpu: 'number',
      defaultGPUDriver: 'string',
      gpu: 'number',
      gpuMemory: 'number',
      gpuType: 'string',
      instanceType: 'string',
      isAvailable: 'boolean',
      memory: 'number',
      nonProtectSpotDiscount: 'number',
      paymentTypes: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      spotStockStatus: 'string',
      supportedGPUDrivers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.paymentTypes)) {
      $dara.Model.validateArray(this.paymentTypes);
    }
    if(Array.isArray(this.supportedGPUDrivers)) {
      $dara.Model.validateArray(this.supportedGPUDrivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

