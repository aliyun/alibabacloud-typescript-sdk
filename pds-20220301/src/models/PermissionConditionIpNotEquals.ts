// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PermissionConditionIpNotEquals extends $dara.Model {
  clientIp?: string[];
  static names(): { [key: string]: string } {
    return {
      clientIp: 'client_ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clientIp)) {
      $dara.Model.validateArray(this.clientIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

