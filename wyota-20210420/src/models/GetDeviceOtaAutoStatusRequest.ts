// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceOtaAutoStatusRequest extends $dara.Model {
  clientType?: number;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

