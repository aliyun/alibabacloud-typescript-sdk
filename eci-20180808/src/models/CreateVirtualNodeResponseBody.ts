// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 89164E78-FC82-4684-BE97-DCDD85D26546
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the VNode.
   * 
   * @example
   * vnd-2ze960zkdqrldeaw****
   */
  virtualNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      virtualNodeId: 'VirtualNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      virtualNodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

