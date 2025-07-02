// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeGroup } from "./NodeGroup";


export class GetNodeGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The node group.
   */
  nodeGroup?: NodeGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroup: 'NodeGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroup: NodeGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.nodeGroup && typeof (this.nodeGroup as any).validate === 'function') {
      (this.nodeGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

