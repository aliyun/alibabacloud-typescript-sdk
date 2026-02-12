// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EcsSpec extends $dara.Model {
  /**
   * @remarks
   * The accelerator type. Valid values:
   * 
   * *   CPU
   * *   GPU
   * 
   * @example
   * GPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 12
   */
  cpu?: number;
  /**
   * @remarks
   * The default GPU driver version.
   * 
   * @example
   * 470.199.02
   */
  defaultGPUDriver?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The GPU memory size.
   * 
   * @example
   * 80
   */
  gpuMemory?: number;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * NVIDIA v100
   */
  gpuType?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.gn6e-c12g1.3xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether the instance type is available. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isAvailable?: boolean;
  /**
   * @remarks
   * The memory size. Unit: MiB or GiB.
   * 
   * @example
   * 92
   */
  memory?: number;
  /**
   * @remarks
   * The discount on the current price of the preemptible instance.
   * 
   * @example
   * 0.1
   */
  nonProtectSpotDiscount?: number;
  /**
   * @remarks
   * The billing methods.
   */
  paymentTypes?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   ECS
   * *   Lingjun
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @remarks
   * The inventory status of preemptible instance.
   * 
   * @example
   * WithStock
   */
  spotStockStatus?: string;
  /**
   * @remarks
   * The GPU driver versions.
   */
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

