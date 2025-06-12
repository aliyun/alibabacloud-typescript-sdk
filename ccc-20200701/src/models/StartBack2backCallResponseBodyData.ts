// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartBack2BackCallResponseBodyDataCallContext } from "./StartBack2backCallResponseBodyDataCallContext";
import { StartBack2BackCallResponseBodyDataUserContext } from "./StartBack2backCallResponseBodyDataUserContext";


export class StartBack2BackCallResponseBodyData extends $dara.Model {
  callContext?: StartBack2BackCallResponseBodyDataCallContext;
  userContext?: StartBack2BackCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: StartBack2BackCallResponseBodyDataCallContext,
      userContext: StartBack2BackCallResponseBodyDataUserContext,
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

