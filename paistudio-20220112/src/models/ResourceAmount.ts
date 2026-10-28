// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceAmount extends $dara.Model {
  /**
   * @remarks
   * The total CPU amount.
   * 
   * @example
   * 100
   */
  CPU?: string;
  /**
   * @remarks
   * The total number of GPU cards.
   * 
   * @example
   * 16
   */
  GPU?: string;
  /**
   * @remarks
   * The GPU memory.
   * 
   * @example
   * 80G
   */
  GPUMemory?: string;
  /**
   * @remarks
   * The GPU memory, in bytes.
   * 
   * @example
   * 85899345920
   */
  GPUMemoryBytes?: number;
  /**
   * @remarks
   * The GPU card type.
   * 
   * @example
   * GPU
   */
  GPUType?: string;
  /**
   * @remarks
   * The total memory amount.
   * 
   * @example
   * 100Gi
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUMemory: 'GPUMemory',
      GPUMemoryBytes: 'GPUMemoryBytes',
      GPUType: 'GPUType',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUMemory: 'string',
      GPUMemoryBytes: 'number',
      GPUType: 'string',
      memory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

