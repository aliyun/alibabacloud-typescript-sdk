// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MuteCallResponseBodyDataCallContext } from "./MuteCallResponseBodyDataCallContext";
import { MuteCallResponseBodyDataUserContext } from "./MuteCallResponseBodyDataUserContext";


export class MuteCallResponseBodyData extends $dara.Model {
  callContext?: MuteCallResponseBodyDataCallContext;
  userContext?: MuteCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: MuteCallResponseBodyDataCallContext,
      userContext: MuteCallResponseBodyDataUserContext,
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

