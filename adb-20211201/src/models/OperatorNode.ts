// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperatorNodeStats extends $dara.Model {
  /**
   * @remarks
   * The data volume.
   * 
   * @example
   * 0
   */
  bytes?: number;
  /**
   * @remarks
   * The number of output rows.
   * 
   * @example
   * 0
   */
  outputRows?: number;
  /**
   * @remarks
   * The operator parameters.
   */
  parameters?: string;
  /**
   * @remarks
   * The maximum memory size consumed.
   * 
   * @example
   * 0
   */
  peakMemory?: number;
  /**
   * @remarks
   * The execution time.
   * 
   * @example
   * 0
   */
  timeCost?: number;
  static names(): { [key: string]: string } {
    return {
      bytes: 'bytes',
      outputRows: 'outputRows',
      parameters: 'parameters',
      peakMemory: 'peakMemory',
      timeCost: 'timeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytes: 'number',
      outputRows: 'number',
      parameters: 'string',
      peakMemory: 'number',
      timeCost: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperatorNode extends $dara.Model {
  /**
   * @remarks
   * The child operator queue.
   */
  children?: OperatorNode[];
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * 0
   */
  id?: number;
  /**
   * @remarks
   * The total number of nodes at the tree level of the operator.
   * 
   * @example
   * 0
   */
  levelWidth?: number;
  /**
   * @remarks
   * The level of the operator in the tree.
   * 
   * @example
   * 0
   */
  nodeDepth?: number;
  /**
   * @remarks
   * The operator name.
   * 
   * @example
   * TableScan
   */
  nodeName?: string;
  /**
   * @remarks
   * The left-to-right position of the node at the corresponding level.
   * 
   * @example
   * 0
   */
  nodeWidth?: number;
  /**
   * @remarks
   * The parent operator ID.
   * 
   * @example
   * 0
   */
  parentId?: number;
  /**
   * @remarks
   * The operator statistics information.
   */
  stats?: OperatorNodeStats;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      id: 'id',
      levelWidth: 'levelWidth',
      nodeDepth: 'nodeDepth',
      nodeName: 'nodeName',
      nodeWidth: 'nodeWidth',
      parentId: 'parentId',
      stats: 'stats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': OperatorNode },
      id: 'number',
      levelWidth: 'number',
      nodeDepth: 'number',
      nodeName: 'string',
      nodeWidth: 'number',
      parentId: 'number',
      stats: OperatorNodeStats,
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    if(this.stats && typeof (this.stats as any).validate === 'function') {
      (this.stats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

