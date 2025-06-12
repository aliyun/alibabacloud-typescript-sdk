// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorCallResponseBodyDataCallContext } from "./MonitorCallResponseBodyDataCallContext";
import { MonitorCallResponseBodyDataUserContext } from "./MonitorCallResponseBodyDataUserContext";


export class MonitorCallResponseBodyData extends $dara.Model {
  callContext?: MonitorCallResponseBodyDataCallContext;
  userContext?: MonitorCallResponseBodyDataUserContext;
  static names(): { [key: string]: string } {
    return {
      callContext: 'CallContext',
      userContext: 'UserContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callContext: MonitorCallResponseBodyDataCallContext,
      userContext: MonitorCallResponseBodyDataUserContext,
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

