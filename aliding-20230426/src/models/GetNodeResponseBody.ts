// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNodeResponseBodyNode } from "./GetNodeResponseBodyNode";


export class GetNodeResponseBody extends $dara.Model {
  node?: GetNodeResponseBodyNode;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      node: 'node',
      requestId: 'requestId',
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

