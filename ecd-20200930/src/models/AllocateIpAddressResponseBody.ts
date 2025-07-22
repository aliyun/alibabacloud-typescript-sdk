// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateIpAddressResponseBody extends $dara.Model {
  eipAddress?: string;
  eipId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eipAddress: 'EipAddress',
      eipId: 'EipId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddress: 'string',
      eipId: 'string',
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

