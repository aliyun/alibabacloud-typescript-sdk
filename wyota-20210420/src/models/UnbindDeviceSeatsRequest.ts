// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindDeviceSeatsRequest extends $dara.Model {
  serialNoList?: string[];
  static names(): { [key: string]: string } {
    return {
      serialNoList: 'SerialNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNoList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serialNoList)) {
      $dara.Model.validateArray(this.serialNoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

