// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNodeResponseBodyNode } from "./GetNodeResponseBodyNode";


export class GetNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the node.
   */
  node?: GetNodeResponseBodyNode;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: GetNodeResponseBodyNode,
      requestId: 'string',
    };
  }

  validate() {
    if(this.node && typeof (this.node as any).validate === 'function') {
      (this.node as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

