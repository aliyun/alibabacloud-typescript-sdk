// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LaunchSurveyResponseBodyDataCallContext } from "./LaunchSurveyResponseBodyDataCallContext";
import { LaunchSurveyResponseBodyDataUserContext } from "./LaunchSurveyResponseBodyDataUserContext";


export class LaunchSurveyResponseBodyData extends $dara.Model {
  callContext?: LaunchSurveyResponseBodyDataCallContext;
  /**
   * @example
   * 102323
   */
  contextId?: number;
  userContext?: LaunchSurveyResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      contextId: 'ContextId',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: LaunchSurveyResponseBodyDataCallContext,
      contextId: 'number',
      userContext: LaunchSurveyResponseBodyDataUserContext,
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

