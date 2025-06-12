// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HoldCallResponseBodyDataCallContext } from "./HoldCallResponseBodyDataCallContext";
import { HoldCallResponseBodyDataUserContext } from "./HoldCallResponseBodyDataUserContext";


export class HoldCallResponseBodyData extends $dara.Model {
  callContext?: HoldCallResponseBodyDataCallContext;
  userContext?: HoldCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: HoldCallResponseBodyDataCallContext,
      userContext: HoldCallResponseBodyDataUserContext,
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

