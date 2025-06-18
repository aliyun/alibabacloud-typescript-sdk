// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeType extends $dara.Model {
  /**
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @example
   * 16
   */
  CPU?: string;
  /**
   * @example
   * 0
   */
  GPU?: string;
  /**
   * @example
   * 80G
   */
  GPUMemory?: string;
  GPUType?: string;
  /**
   * @example
   * 64Gi
   */
  memory?: string;
  /**
   * @example
   * ecs.g6.4xlarge
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      CPU: 'CPU',
      GPU: 'GPU',
      GPUMemory: 'GPUMemory',
      GPUType: 'GPUType',
      memory: 'Memory',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      CPU: 'string',
      GPU: 'string',
      GPUMemory: 'string',
      GPUType: 'string',
      memory: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

