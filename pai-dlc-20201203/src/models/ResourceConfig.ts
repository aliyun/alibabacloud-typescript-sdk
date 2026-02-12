// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceConfig extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 10
   */
  CPU?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 3
   */
  GPU?: string;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * Tesla-V100-16G
   */
  GPUType?: string;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 10Gi
   */
  memory?: string;
  /**
   * @remarks
   * The shared memory capacity.
   * 
   * @example
   * 5Gi
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

