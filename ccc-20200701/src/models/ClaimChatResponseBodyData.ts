// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClaimChatResponseBodyDataChatContexts } from "./ClaimChatResponseBodyDataChatContexts";
import { ClaimChatResponseBodyDataUserContext } from "./ClaimChatResponseBodyDataUserContext";


export class ClaimChatResponseBodyData extends $dara.Model {
  chatContexts?: ClaimChatResponseBodyDataChatContexts[];
  /**
   * @example
   * 123456789
   */
  contextId?: number;
  userContext?: ClaimChatResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      chatContexts: 'ChatContexts',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatContexts: { 'type': 'array', 'itemType': ClaimChatResponseBodyDataChatContexts },
      contextId: 'number',
      userContext: ClaimChatResponseBodyDataUserContext,
    };
  }

  validate() {
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

