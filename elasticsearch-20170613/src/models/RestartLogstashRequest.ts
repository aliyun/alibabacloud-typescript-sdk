// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartLogstashRequest extends $dara.Model {
  /**
   * @example
   * 20%
   */
  batchCount?: number;
  /**
   * @example
   * false
   */
  blueGreenDep?: boolean;
  nodeTypes?: string[];
  nodes?: string[];
  /**
   * @example
   * instance
   */
  restartType?: string;
  /**
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @example
   * true
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      batchCount: 'batchCount',
      blueGreenDep: 'blueGreenDep',
      nodeTypes: 'nodeTypes',
      nodes: 'nodes',
      restartType: 'restartType',
      clientToken: 'clientToken',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchCount: 'number',
      blueGreenDep: 'boolean',
      nodeTypes: { 'type': 'array', 'itemType': 'string' },
      nodes: { 'type': 'array', 'itemType': 'string' },
      restartType: 'string',
      clientToken: 'string',
      force: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.nodeTypes)) {
      $dara.Model.validateArray(this.nodeTypes);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

