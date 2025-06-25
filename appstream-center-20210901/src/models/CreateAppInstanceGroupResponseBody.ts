// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAppInstanceGroupResponseBodyAppInstanceGroupModel } from "./CreateAppInstanceGroupResponseBodyAppInstanceGroupModel";


export class CreateAppInstanceGroupResponseBody extends $dara.Model {
  appInstanceGroupModel?: CreateAppInstanceGroupResponseBodyAppInstanceGroupModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupModel: 'AppInstanceGroupModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupModel: CreateAppInstanceGroupResponseBodyAppInstanceGroupModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appInstanceGroupModel && typeof (this.appInstanceGroupModel as any).validate === 'function') {
      (this.appInstanceGroupModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

