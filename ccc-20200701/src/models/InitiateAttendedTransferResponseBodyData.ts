// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InitiateAttendedTransferResponseBodyDataCallContext } from "./InitiateAttendedTransferResponseBodyDataCallContext";
import { InitiateAttendedTransferResponseBodyDataUserContext } from "./InitiateAttendedTransferResponseBodyDataUserContext";


export class InitiateAttendedTransferResponseBodyData extends $dara.Model {
  callContext?: InitiateAttendedTransferResponseBodyDataCallContext;
  /**
   * @example
   * 103655
   */
  contextId?: number;
  userContext?: InitiateAttendedTransferResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: InitiateAttendedTransferResponseBodyDataCallContext,
      contextId: 'number',
      userContext: InitiateAttendedTransferResponseBodyDataUserContext,
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

