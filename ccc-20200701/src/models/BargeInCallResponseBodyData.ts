// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BargeInCallResponseBodyDataCallContext } from "./BargeInCallResponseBodyDataCallContext";
import { BargeInCallResponseBodyDataUserContext } from "./BargeInCallResponseBodyDataUserContext";


export class BargeInCallResponseBodyData extends $dara.Model {
  callContext?: BargeInCallResponseBodyDataCallContext;
  userContext?: BargeInCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: BargeInCallResponseBodyDataCallContext,
      userContext: BargeInCallResponseBodyDataUserContext,
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

