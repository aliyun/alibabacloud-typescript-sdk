// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomHostnameResponseBody extends $dara.Model {
  hostname?: string;
  hostnameId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      hostnameId: 'HostnameId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      hostnameId: 'number',
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

