// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindPasswordFreeLoginUserRequest extends $dara.Model {
  endUserId?: string;
  mainBizType?: string;
  serialNumber?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      mainBizType: 'MainBizType',
      serialNumber: 'SerialNumber',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
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

