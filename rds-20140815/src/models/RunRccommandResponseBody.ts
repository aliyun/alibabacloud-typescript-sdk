// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunRCCommandResponseBody extends $dara.Model {
  commandId?: string;
  invokeId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      invokeId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

