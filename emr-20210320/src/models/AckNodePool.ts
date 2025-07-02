// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AckNodeSelector } from "./AckNodeSelector";


export class AckNodePool extends $dara.Model {
  /**
   * @remarks
   * 节点池ID。
   * 
   * @example
   * npe76629caa1b14a73bf3e47c6d481****
   */
  nodePoolId?: string;
  /**
   * @remarks
   * ACK节点选择器。
   */
  nodeSelector?: AckNodeSelector;
  static names(): { [key: string]: string } {
    return {
      nodePoolId: 'NodePoolId',
      nodeSelector: 'NodeSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodePoolId: 'string',
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

