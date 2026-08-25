// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerIdeEcsSpecsResponseBodyEcsSpecs extends $dara.Model {
  /**
   * @remarks
   * The accelerator type. Valid values:
   * - CPU: uses only CPU.
   * - GPU: uses GPU acceleration.
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * The number of compute units (CUs) consumed by this instance type.
   * 
   * @example
   * 10
   */
  cu?: number;
  /**
   * @remarks
   * The number of GPU cards.
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
   * 16
   */
  gpuMemorySize?: number;
  /**
   * @remarks
   * The GPU model.
   * 
   * @example
   * V100
   */
  gpuType?: string;
  /**
   * @remarks
   * The ECS instance type.
   * 
   * @example
   * ecs.g6.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether the instance type is available.
   */
  isAvailable?: boolean;
  /**
   * @remarks
   * The memory size, in GB.
   * 
   * @example
   * 16
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      cpu: 'Cpu',
      cu: 'Cu',
      gpu: 'Gpu',
      gpuMemorySize: 'GpuMemorySize',
      gpuType: 'GpuType',
      instanceType: 'InstanceType',
      isAvailable: 'IsAvailable',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      cpu: 'number',
      cu: 'number',
      gpu: 'number',
      gpuMemorySize: 'number',
      gpuType: 'string',
      instanceType: 'string',
      isAvailable: 'boolean',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerIdeEcsSpecsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of available ECS instance types for personal development environments.
   */
  ecsSpecs?: ListServerIdeEcsSpecsResponseBodyEcsSpecs[];
  /**
   * @remarks
   * The maximum number of records returned in this response.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. An empty value indicates that no more results are available.
   * 
   * @example
   * CAESG****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsSpecs: 'EcsSpecs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsSpecs: { 'type': 'array', 'itemType': ListServerIdeEcsSpecsResponseBodyEcsSpecs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ecsSpecs)) {
      $dara.Model.validateArray(this.ecsSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

