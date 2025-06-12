// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MakeCallResponseBodyDataCallContext } from "./MakeCallResponseBodyDataCallContext";
import { MakeCallResponseBodyDataUserContext } from "./MakeCallResponseBodyDataUserContext";


export class MakeCallResponseBodyData extends $dara.Model {
  callContext?: MakeCallResponseBodyDataCallContext;
  /**
   * @example
   * 123456
   */
  contextId?: number;
  userContext?: MakeCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: MakeCallResponseBodyDataCallContext,
      contextId: 'number',
      userContext: MakeCallResponseBodyDataUserContext,
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

