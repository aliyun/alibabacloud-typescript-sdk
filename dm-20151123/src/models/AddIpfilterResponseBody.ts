// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddIpfilterResponseBody extends $dara.Model {
  ipFilterId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipFilterId: 'IpFilterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipFilterId: 'string',
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

