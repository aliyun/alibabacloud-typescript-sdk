// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceConfig extends $dara.Model {
  /**
   * @example
   * 10
   */
  CPU?: string;
  /**
   * @example
   * 3
   */
  GPU?: string;
  /**
   * @example
   * Tesla-V100-16G
   */
  GPUType?: string;
  /**
   * @example
   * 10Gi
   */
  memory?: string;
  /**
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

