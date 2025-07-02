// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterDeviceResponseBodyData extends $dara.Model {
  newUpgrade?: boolean;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      newUpgrade: 'NewUpgrade',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newUpgrade: 'boolean',
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

