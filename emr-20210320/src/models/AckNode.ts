// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AckNodeSelector } from "./AckNodeSelector";


export class AckNode extends $dara.Model {
  /**
   * @remarks
   * 节点ID。
   * 
   * @example
   * i-bp1cudc25w2bfwl5****
   */
  nodeId?: string;
  /**
   * @remarks
   * ACK节点选择器。
   */
  nodeSelector?: AckNodeSelector;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeSelector: 'NodeSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      nodeSelector: AckNodeSelector,
    };
  }

  validate() {
    if(this.nodeSelector && typeof (this.nodeSelector as any).validate === 'function') {
      (this.nodeSelector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

