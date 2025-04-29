// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualBorderRouterResponseBody extends $dara.Model {
  requestId?: string;
  vbrId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vbrId: 'VbrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vbrId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

