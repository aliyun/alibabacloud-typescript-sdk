// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMachineSpecResponseBodyInstanceMetas extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores in the instance type.
   * 
   * @example
   * 32
   */
  CPU?: number;
  /**
   * @remarks
   * The GPU type in the instance type. If the instance type is not a GPU-based instance type, this parameter does not exist.
   * 
   * @example
   * GU30
   */
  GPU?: string;
  /**
   * @remarks
   * The number of GPUs in the instance type.
   * 
   * @example
   * 1
   */
  GPUAmount?: number;
  /**
   * @remarks
   * The GPU memory in the instance type. Unit: GB.
   * 
   * @example
   * 24
   */
  GPUMemory?: number;
  /**
   * @remarks
   * The name of the instance type.
   * 
   * @example
   * ml.gu7i.c32m188.1-gu30
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether the instance type is available.
   * 
   * @example
   * true
   */
  isAvailable?: boolean;
  /**
   * @remarks
   * The memory size in the instance type. Unit: GB.
   * 
   * @example
   * 188
   */
  memory?: number;
  /**
   * @remarks
   * The minimum discount that can be accepted when the preemptible instance type does not include a usage duration. 0.1 indicates one fold. If this parameter is not returned, the bidding feature is not supported.
   * 
   * @example
   * 0.1
   */
  nonProtectSpotDiscount?: number;
  /**
   * @remarks
   * The minimum discount that can be accepted when the preemptible instance type has the 1-hour protection duration. 0.1 indicates one fold. If this parameter is not returned, the bidding feature is not supported.
   * 
   * @example
   * 0.12
   */
  spotDiscount?: number;
  /**
   * @remarks
   * The inventory status of the instance type.
   * 
   * Valid values:
   * 
   * *   WithStock
   * *   ClosedWithStock
   * *   NoStock
   * 
   * @example
   * WithStock
   */
  stockStatus?: string;
  /**
   * @remarks
   * The source of the instance type.
   * 
   * Valid values:
   * 
   * *   ECS
   * *   BareMetal
   * *   Lingjun
   * 
   * @example
   * ECS
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUAmount: 'GPUAmount',
      GPUMemory: 'GPUMemory',
      instanceType: 'InstanceType',
      isAvailable: 'IsAvailable',
      memory: 'Memory',
      nonProtectSpotDiscount: 'NonProtectSpotDiscount',
      spotDiscount: 'SpotDiscount',
      stockStatus: 'StockStatus',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'number',
      GPU: 'string',
      GPUAmount: 'number',
      GPUMemory: 'number',
      instanceType: 'string',
      isAvailable: 'boolean',
      memory: 'number',
      nonProtectSpotDiscount: 'number',
      spotDiscount: 'number',
      stockStatus: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

