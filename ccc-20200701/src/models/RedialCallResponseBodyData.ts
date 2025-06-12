// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RedialCallResponseBodyDataCallContext } from "./RedialCallResponseBodyDataCallContext";
import { RedialCallResponseBodyDataUserContext } from "./RedialCallResponseBodyDataUserContext";


export class RedialCallResponseBodyData extends $dara.Model {
  callContext?: RedialCallResponseBodyDataCallContext;
  /**
   * @example
   * 123456789
   */
  contextId?: number;
  userContext?: RedialCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: RedialCallResponseBodyDataCallContext,
      contextId: 'number',
      userContext: RedialCallResponseBodyDataUserContext,
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

