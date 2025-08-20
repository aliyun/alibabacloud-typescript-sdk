// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperatorNodeStats extends $dara.Model {
  bytes?: number;
  outputRows?: number;
  parameters?: string;
  peakMemory?: number;
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
  children?: OperatorNode[];
  id?: number;
  levelWidth?: number;
  nodeDepth?: number;
  nodeName?: string;
  nodeWidth?: number;
  parentId?: number;
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

