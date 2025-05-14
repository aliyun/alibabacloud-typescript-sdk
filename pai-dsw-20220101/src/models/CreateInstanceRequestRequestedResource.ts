// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestRequestedResource extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 32
   */
  CPU?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 4
   */
  GPU?: string;
  /**
   * @remarks
   * The GPU memory type. Valid values:
   * 
   * *   V100
   * *   A100
   * *   T4
   * *   A10
   * *   P100
   * 
   * @example
   * v100
   */
  GPUType?: string;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 32
   */
  memory?: string;
  /**
   * @remarks
   * The size of the shared memory. Unit: GB.
   * 
   * @example
   * 32
   */
  sharedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
      sharedMemory: 'SharedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
      sharedMemory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

