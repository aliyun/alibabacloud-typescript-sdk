// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartPredictiveCallResponseBodyDataCallContext } from "./StartPredictiveCallResponseBodyDataCallContext";
import { StartPredictiveCallResponseBodyDataUserContext } from "./StartPredictiveCallResponseBodyDataUserContext";


export class StartPredictiveCallResponseBodyData extends $dara.Model {
  callContext?: StartPredictiveCallResponseBodyDataCallContext;
  userContext?: StartPredictiveCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: StartPredictiveCallResponseBodyDataCallContext,
      userContext: StartPredictiveCallResponseBodyDataUserContext,
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

