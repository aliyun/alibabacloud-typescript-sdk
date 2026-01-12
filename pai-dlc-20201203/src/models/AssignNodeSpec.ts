// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HyperNodeSpec } from "./HyperNodeSpec";


export class AssignNodeSpec extends $dara.Model {
  antiAffinityHyperNodes?: HyperNodeSpec[];
  /**
   * @example
   * lingjxxxxxxxx
   */
  antiAffinityNodeNames?: string;
  /**
   * @example
   * true
   */
  enableAssignNode?: boolean;
  hyperNodes?: HyperNodeSpec[];
  /**
   * @example
   * lingjxxxxxxxx
   */
  nodeNames?: string;
  static names(): { [key: string]: string } {
    return {
      antiAffinityHyperNodes: 'AntiAffinityHyperNodes',
      antiAffinityNodeNames: 'AntiAffinityNodeNames',
      enableAssignNode: 'EnableAssignNode',
      hyperNodes: 'HyperNodes',
      nodeNames: 'NodeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiAffinityHyperNodes: { 'type': 'array', 'itemType': HyperNodeSpec },
      antiAffinityNodeNames: 'string',
      enableAssignNode: 'boolean',
      hyperNodes: { 'type': 'array', 'itemType': HyperNodeSpec },
      nodeNames: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.antiAffinityHyperNodes)) {
      $dara.Model.validateArray(this.antiAffinityHyperNodes);
    }
    if(Array.isArray(this.hyperNodes)) {
      $dara.Model.validateArray(this.hyperNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

