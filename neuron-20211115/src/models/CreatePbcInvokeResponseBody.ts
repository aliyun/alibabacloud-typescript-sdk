// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePbcInvokeResponseBody extends $dara.Model {
  pbcInvokeId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pbcInvokeId: 'pbcInvokeId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pbcInvokeId: 'number',
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

