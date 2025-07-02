// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindAccountLessLoginUserRequest extends $dara.Model {
  serialNumber?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

