// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CompleteAttendedTransferResponseBodyDataCallContext } from "./CompleteAttendedTransferResponseBodyDataCallContext";
import { CompleteAttendedTransferResponseBodyDataUserContext } from "./CompleteAttendedTransferResponseBodyDataUserContext";


export class CompleteAttendedTransferResponseBodyData extends $dara.Model {
  callContext?: CompleteAttendedTransferResponseBodyDataCallContext;
  /**
   * @example
   * 103652
   */
  contextId?: number;
  userContext?: CompleteAttendedTransferResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: CompleteAttendedTransferResponseBodyDataCallContext,
      contextId: 'number',
      userContext: CompleteAttendedTransferResponseBodyDataUserContext,
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

