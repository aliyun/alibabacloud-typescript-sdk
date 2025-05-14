// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEcsSpecsResponseBodyEcsSpecsLabels } from "./ListEcsSpecsResponseBodyEcsSpecsLabels";


export class ListEcsSpecsResponseBodyEcsSpecs extends $dara.Model {
  /**
   * @remarks
   * The accelerator type.
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 32
   */
  CPU?: number;
  /**
   * @remarks
   * The currency unit.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 4
   */
  GPU?: number;
  GPUMemorySize?: number;
  /**
   * @remarks
   * The GPU type. Valid values:
   * 
   * *   V100
   * *   A100
   * *   A10
   * *   T4
   * *   P100
   * 
   * @example
   * v100
   */
  GPUType?: string;
  /**
   * @remarks
   * The inbound bandwidth of the instance.
   * 
   * @example
   * 5120000
   */
  instanceBandwidthRx?: number;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.gn5-c28g1.7xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether the resource was available.
   * 
   * @example
   * True
   */
  isAvailable?: boolean;
  /**
   * @remarks
   * The labels of the ECS specification.
   * 
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: ListEcsSpecsResponseBodyEcsSpecsLabels[];
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 32
   */
  memory?: number;
  /**
   * @remarks
   * The price.
   * 
   * @example
   * 22.8
   */
  price?: number;
  spotStockStatus?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GB.
   * 
   * @example
   * 500
   */
  systemDiskCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      CPU: 'CPU',
      currency: 'Currency',
      GPU: 'GPU',
      GPUMemorySize: 'GPUMemorySize',
      GPUType: 'GPUType',
      instanceBandwidthRx: 'InstanceBandwidthRx',
      instanceType: 'InstanceType',
      isAvailable: 'IsAvailable',
      labels: 'Labels',
      memory: 'Memory',
      price: 'Price',
      spotStockStatus: 'SpotStockStatus',
      systemDiskCapacity: 'SystemDiskCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      CPU: 'number',
      currency: 'string',
      GPU: 'number',
      GPUMemorySize: 'number',
      GPUType: 'string',
      instanceBandwidthRx: 'number',
      instanceType: 'string',
      isAvailable: 'boolean',
      labels: { 'type': 'array', 'itemType': ListEcsSpecsResponseBodyEcsSpecsLabels },
      memory: 'number',
      price: 'number',
      spotStockStatus: 'string',
      systemDiskCapacity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

