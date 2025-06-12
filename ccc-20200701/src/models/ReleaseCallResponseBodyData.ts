// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReleaseCallResponseBodyDataCallContext } from "./ReleaseCallResponseBodyDataCallContext";
import { ReleaseCallResponseBodyDataUserContext } from "./ReleaseCallResponseBodyDataUserContext";


export class ReleaseCallResponseBodyData extends $dara.Model {
  callContext?: ReleaseCallResponseBodyDataCallContext;
  /**
   * @example
   * 123456
   */
  contextId?: number;
  userContext?: ReleaseCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: ReleaseCallResponseBodyDataCallContext,
      contextId: 'number',
      userContext: ReleaseCallResponseBodyDataUserContext,
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

