// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StatisticsResources extends $dara.Model {
  /**
   * @remarks
   * The amount of CPU resources.
   * 
   * @example
   * 8
   */
  CPU?: string;
  /**
   * @remarks
   * The amount of GPU resources.
   * 
   * @example
   * 1
   */
  GPU?: string;
  /**
   * @remarks
   * The number of hypernodes.
   * 
   * @example
   * 1
   */
  hyperNodeNum?: number;
  /**
   * @remarks
   * The amount of memory resources.
   * 
   * @example
   * 32
   */
  memory?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 12
   */
  nodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      hyperNodeNum: 'HyperNodeNum',
      memory: 'Memory',
      nodeNum: 'NodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      hyperNodeNum: 'number',
      memory: 'string',
      nodeNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

