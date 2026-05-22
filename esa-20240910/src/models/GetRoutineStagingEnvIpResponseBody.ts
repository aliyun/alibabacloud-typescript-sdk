// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineStagingEnvIpResponseBody extends $dara.Model {
  IPV4?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      IPV4: 'IPV4',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPV4: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.IPV4)) {
      $dara.Model.validateArray(this.IPV4);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

