// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignNodeSpec extends $dara.Model {
  /**
   * @remarks
   * The anti-affinity node names.
   * 
   * @example
   * node3
   */
  antiAffinityNodeNames?: string;
  /**
   * @remarks
   * Specifies whether to enable the specified node.
   */
  enableAssignNode?: boolean;
  /**
   * @remarks
   * The node names.
   * 
   * @example
   * lingjxxxx
   */
  nodeNames?: string;
  static names(): { [key: string]: string } {
    return {
      antiAffinityNodeNames: 'AntiAffinityNodeNames',
      enableAssignNode: 'EnableAssignNode',
      nodeNames: 'NodeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiAffinityNodeNames: 'string',
      enableAssignNode: 'boolean',
      nodeNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

