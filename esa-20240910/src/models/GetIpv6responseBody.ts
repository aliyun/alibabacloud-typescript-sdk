// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIPv6ResponseBody extends $dara.Model {
  enable?: string;
  region?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      region: 'Region',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
      region: 'string',
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

