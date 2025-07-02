// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddOrUpdateDeviceSeatsRequest extends $dara.Model {
  fileName?: string;
  userCustomId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      userCustomId: 'UserCustomId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      userCustomId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

