// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMachineSpecResponseBodyInstanceMetas extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores of the instance type.
   * 
   * @example
   * 32
   */
  CPU?: number;
  /**
   * @remarks
   * The GPU model of the instance type. This field is not returned for non-GPU instance types.
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
   * The GPU memory size of the instance type, in GB.
   * 
   * @example
   * 24
   */
  GPUMemory?: number;
  /**
   * @remarks
   * The instance type name.
   * 
   * @example
   * ml.gu7i.c32m188.1-gu30
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether the instance type is currently available.
   * 
   * @example
   * true
   */
  isAvailable?: boolean;
  /**
   * @remarks
   * The memory size of the instance type, in GB.
   * 
   * @example
   * 188
   */
  memory?: number;
  /**
   * @remarks
   * The minimum discount currently offered for a spot instance in no-protection mode. A value of 0.1 indicates a 90% discount. If this field is not returned, the instance type does not support spot instances.
   * 
   * @example
   * 0.1
   */
  nonProtectSpotDiscount?: number;
  /**
   * @remarks
   * The current lowest discount for a spot instance with a 1-hour protection period. A value of 0.1 indicates a 90% discount. If this field is not returned, the instance type does not support spot instances.
   * 
   * @example
   * 0.12
   */
  spotDiscount?: number;
  /**
   * @remarks
   * The inventory status of the instance type.
   * 
   * @example
   * WithStock
   */
  stockStatus?: string;
  /**
   * @remarks
   * The source of the instance type.
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

export class DescribeMachineSpecResponseBodyTypes extends $dara.Model {
  /**
   * @remarks
   * The valid values for the number of CPU cores.
   * 
   * @example
   * 1
   */
  CPU?: number;
  /**
   * @remarks
   * The valid memory values for the specified number of CPU cores.
   */
  memory?: number[];
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'number',
      memory: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.memory)) {
      $dara.Model.validateArray(this.memory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMachineSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of available instance types for deployment.
   */
  instanceMetas?: DescribeMachineSpecResponseBodyInstanceMetas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  /**
   * @remarks
   * The supported combinations of CPU and memory values for deployment.
   */
  types?: DescribeMachineSpecResponseBodyTypes[];
  static names(): { [key: string]: string } {
    return {
      instanceMetas: 'InstanceMetas',
      requestId: 'RequestId',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMetas: { 'type': 'array', 'itemType': DescribeMachineSpecResponseBodyInstanceMetas },
      requestId: 'string',
      types: { 'type': 'array', 'itemType': DescribeMachineSpecResponseBodyTypes },
    };
  }

  validate() {
    if(Array.isArray(this.instanceMetas)) {
      $dara.Model.validateArray(this.instanceMetas);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

