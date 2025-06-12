// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnswerCallResponseBodyDataCallContext } from "./AnswerCallResponseBodyDataCallContext";
import { AnswerCallResponseBodyDataUserContext } from "./AnswerCallResponseBodyDataUserContext";


export class AnswerCallResponseBodyData extends $dara.Model {
  callContext?: AnswerCallResponseBodyDataCallContext;
  /**
   * @example
   * 103655
   */
  contextId?: number;
  userContext?: AnswerCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: AnswerCallResponseBodyDataCallContext,
      contextId: 'number',
      userContext: AnswerCallResponseBodyDataUserContext,
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

