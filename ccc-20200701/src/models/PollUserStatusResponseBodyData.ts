// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PollUserStatusResponseBodyDataCallContext } from "./PollUserStatusResponseBodyDataCallContext";
import { PollUserStatusResponseBodyDataChatContexts } from "./PollUserStatusResponseBodyDataChatContexts";
import { PollUserStatusResponseBodyDataUserContext } from "./PollUserStatusResponseBodyDataUserContext";


export class PollUserStatusResponseBodyData extends $dara.Model {
  callContext?: PollUserStatusResponseBodyDataCallContext;
  chatContexts?: PollUserStatusResponseBodyDataChatContexts[];
  /**
   * @example
   * 103655
   */
  contextId?: number;
  userContext?: PollUserStatusResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      chatContexts: 'ChatContexts',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: PollUserStatusResponseBodyDataCallContext,
      chatContexts: { 'type': 'array', 'itemType': PollUserStatusResponseBodyDataChatContexts },
      contextId: 'number',
      userContext: PollUserStatusResponseBodyDataUserContext,
    };
  }

  validate() {
    if(this.callContext && typeof (this.callContext as any).validate === 'function') {
      (this.callContext as any).validate();
    }
    if(Array.isArray(this.chatContexts)) {
      $dara.Model.validateArray(this.chatContexts);
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

