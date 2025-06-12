// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EndConferenceResponseBodyDataCallContext } from "./EndConferenceResponseBodyDataCallContext";
import { EndConferenceResponseBodyDataUserContext } from "./EndConferenceResponseBodyDataUserContext";


export class EndConferenceResponseBodyData extends $dara.Model {
  callContext?: EndConferenceResponseBodyDataCallContext;
  /**
   * @example
   * 103655
   */
  contextId?: number;
  userContext?: EndConferenceResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: EndConferenceResponseBodyDataCallContext,
      contextId: 'number',
      userContext: EndConferenceResponseBodyDataUserContext,
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

