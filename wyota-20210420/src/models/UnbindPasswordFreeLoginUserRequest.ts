// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindPasswordFreeLoginUserRequest extends $dara.Model {
  mainBizType?: string;
  serialNumber?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      mainBizType: 'MainBizType',
      serialNumber: 'SerialNumber',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainBizType: 'string',
      serialNumber: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

