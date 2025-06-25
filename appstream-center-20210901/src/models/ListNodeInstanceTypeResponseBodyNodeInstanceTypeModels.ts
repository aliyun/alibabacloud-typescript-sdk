// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeInstanceTypeResponseBodyNodeInstanceTypeModels extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 4
   */
  cpu?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 2
   */
  gpu?: string;
  /**
   * @remarks
   * The GPU size. Unit: MB.
   * 
   * @example
   * 8192
   */
  gpuMemory?: number;
  /**
   * @remarks
   * The maximum number of sessions to which a resource can connect at the same time. If a resource connects to a large number of sessions at the same time, user experience can be compromised. The value range varies based on the resource type. The following items describe the value ranges of different resource types:
   * 
   * *   appstreaming.general.4c8g: 1 to 2
   * *   appstreaming.general.8c16g: 1 to 4
   * *   appstreaming.vgpu.8c16g.4g: 1 to 4
   * *   appstreaming.vgpu.8c31g.16g: 1 to 4
   * *   appstreaming.vgpu.14c93g.12g: 1 to 6
   * 
   * @example
   * 4
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The memory size. Unit: MB.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * The ID of the resource type.
   * 
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The resource type family.
   * 
   * Valid values:
   * 
   * *   appstreaming.general: WUYING - General
   * *   appstreaming.vgpu: WUYING - Graphics
   * 
   * @example
   * appstreaming.vgpu
   */
  nodeInstanceTypeFamily?: string;
  /**
   * @remarks
   * The name of the resource type.
   * 
   * @example
   * WUYING - General - 4 vCPUs 8 GB Memory
   */
  nodeTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      gpuMemory: 'GpuMemory',
      maxCapacity: 'MaxCapacity',
      memory: 'Memory',
      nodeInstanceType: 'NodeInstanceType',
      nodeInstanceTypeFamily: 'NodeInstanceTypeFamily',
      nodeTypeName: 'NodeTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      gpu: 'string',
      gpuMemory: 'number',
      maxCapacity: 'number',
      memory: 'number',
      nodeInstanceType: 'string',
      nodeInstanceTypeFamily: 'string',
      nodeTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

