// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPushMsgResponseBodyModel } from "./ListPushMsgResponseBodyModel";


export class ListPushMsgResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  model?: ListPushMsgResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: ListPushMsgResponseBodyModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

