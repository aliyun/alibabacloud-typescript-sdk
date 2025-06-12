// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CancelAttendedTransferResponseBodyDataCallContext } from "./CancelAttendedTransferResponseBodyDataCallContext";
import { CancelAttendedTransferResponseBodyDataUserContext } from "./CancelAttendedTransferResponseBodyDataUserContext";


export class CancelAttendedTransferResponseBodyData extends $dara.Model {
  callContext?: CancelAttendedTransferResponseBodyDataCallContext;
  /**
   * @example
   * 103656
   */
  contextId?: number;
  userContext?: CancelAttendedTransferResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: CancelAttendedTransferResponseBodyDataCallContext,
      contextId: 'number',
      userContext: CancelAttendedTransferResponseBodyDataUserContext,
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

