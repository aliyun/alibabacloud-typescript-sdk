// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BlindTransferResponseBodyDataCallContext } from "./BlindTransferResponseBodyDataCallContext";
import { BlindTransferResponseBodyDataUserContext } from "./BlindTransferResponseBodyDataUserContext";


export class BlindTransferResponseBodyData extends $dara.Model {
  callContext?: BlindTransferResponseBodyDataCallContext;
  /**
   * @example
   * 103654
   */
  contextId?: number;
  userContext?: BlindTransferResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: BlindTransferResponseBodyDataCallContext,
      contextId: 'number',
      userContext: BlindTransferResponseBodyDataUserContext,
    };
  }

  validate() {
    if(this.callContext && typeof (this.callContext as any).validate === 'function') {
      (this.callContext as any).validate();
    }
    if(this.userContext && typeof (this.userContext as any).validate === 'function') {
      (this.userContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

